#!/bin/bash

# Quiron Concursos - Build Script iOS
# Automatiza o processo de build para Apple App Store

set -e  # Exit on error

echo "🏛️ QUIRON CONCURSOS - Build iOS 🍎"
echo "===================================="
echo ""

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Função para print colorido
print_step() {
    echo -e "${BLUE}▶ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Verificar se está no macOS
if [[ "$OSTYPE" != "darwin"* ]]; then
    print_error "iOS build requer macOS!"
    exit 1
fi

# Verificar Xcode
print_step "Verificando Xcode..."
if ! command -v xcodebuild &> /dev/null; then
    print_error "Xcode não instalado!"
    echo "Instale via App Store: https://apps.apple.com/app/xcode/id497799835"
    exit 1
fi
XCODE_VERSION=$(xcodebuild -version | head -n1)
print_success "$XCODE_VERSION"

# Verificar Command Line Tools
print_step "Verificando Xcode Command Line Tools..."
if ! xcode-select -p &> /dev/null; then
    print_warning "Command Line Tools não configurado"
    print_step "Configurando..."
    sudo xcode-select --switch /Applications/Xcode.app/Contents/Developer
    sudo xcodebuild -runFirstLaunch
fi
print_success "Command Line Tools configurado"

# Verificar CocoaPods
print_step "Verificando CocoaPods..."
if ! command -v pod &> /dev/null; then
    print_warning "CocoaPods não encontrado, instalando..."
    sudo gem install cocoapods
fi
POD_VERSION=$(pod --version)
print_success "CocoaPods $POD_VERSION"

# Verificar Node.js
print_step "Verificando Node.js..."
if ! command -v node &> /dev/null; then
    print_error "Node.js não instalado!"
    exit 1
fi
print_success "Node.js $(node -v)"

# Verificar Capacitor CLI
print_step "Verificando Capacitor CLI..."
if ! command -v cap &> /dev/null; then
    print_warning "Capacitor CLI não encontrado, instalando..."
    npm install -g @capacitor/cli
fi
print_success "Capacitor instalado"

# Limpar builds anteriores
print_step "Limpando builds anteriores..."
rm -rf dist/
rm -rf ios/App/build/
print_success "Builds anteriores removidos"

# Instalar dependências
print_step "Instalando dependências npm..."
npm install
print_success "Dependências npm instaladas"

# Build do projeto
print_step "Building projeto React..."
npm run build
print_success "Build React concluído"

# Sync com iOS
print_step "Sincronizando com iOS..."
npx cap sync ios
print_success "Sync iOS concluído"

# Instalar CocoaPods
print_step "Instalando CocoaPods dependencies..."
cd ios/App
pod install --repo-update
cd ../..
print_success "CocoaPods instalado"

# Verificar certificados
print_step "Verificando certificados..."
security find-identity -v -p codesigning | grep "Developer" > /dev/null
if [ $? -eq 0 ]; then
    print_success "Certificados de desenvolvedor encontrados"
else
    print_warning "Nenhum certificado encontrado"
    echo ""
    echo "Configure certificados em:"
    echo "https://developer.apple.com/account/resources/certificates"
fi

# Opções de build
echo ""
echo "Escolha o tipo de build:"
echo "1) Abrir no Xcode (Manual)"
echo "2) Build Archive (Automático)"
echo "3) Build para Simulador"
read -p "Opção (1/2/3): " build_type

case $build_type in
    1)
        print_step "Abrindo Xcode..."
        npx cap open ios
        echo ""
        print_success "Xcode aberto!"
        echo ""
        echo "📱 PRÓXIMOS PASSOS NO XCODE:"
        echo ""
        echo "1️⃣  Selecionar esquema: Product → Scheme → App"
        echo "2️⃣  Configurar assinatura: Signing & Capabilities"
        echo "3️⃣  Criar archive: Product → Archive"
        echo "4️⃣  Distribuir: Window → Organizer → Distribute App"
        echo ""
        ;;
    
    2)
        print_step "Building archive..."
        
        # Verificar scheme
        SCHEME="App"
        WORKSPACE="ios/App/App.xcworkspace"
        
        # Build archive
        xcodebuild clean archive \
            -workspace "$WORKSPACE" \
            -scheme "$SCHEME" \
            -configuration Release \
            -archivePath "build/Quiron.xcarchive" \
            CODE_SIGN_IDENTITY="" \
            CODE_SIGNING_REQUIRED=NO \
            CODE_SIGNING_ALLOWED=NO
        
        if [ $? -eq 0 ]; then
            print_success "Archive criado!"
            echo ""
            echo "📦 Localização: build/Quiron.xcarchive"
            echo ""
            echo "📱 PRÓXIMOS PASSOS:"
            echo ""
            echo "1️⃣  Abrir Organizer:"
            echo "   Window → Organizer (Xcode)"
            echo ""
            echo "2️⃣  Selecionar archive criado"
            echo ""
            echo "3️⃣  Distribuir:"
            echo "   • Distribute App"
            echo "   • App Store Connect"
            echo "   • Upload"
            echo ""
        else
            print_error "Erro ao criar archive"
            echo ""
            echo "Tente abrir manualmente no Xcode:"
            echo "npx cap open ios"
            exit 1
        fi
        ;;
    
    3)
        print_step "Building para simulador..."
        
        SCHEME="App"
        WORKSPACE="ios/App/App.xcworkspace"
        
        # Lista simuladores disponíveis
        xcrun simctl list devices available | grep iPhone
        
        echo ""
        read -p "Nome do simulador (ex: iPhone 15 Pro): " SIMULATOR
        
        # Build para simulador
        xcodebuild build \
            -workspace "$WORKSPACE" \
            -scheme "$SCHEME" \
            -configuration Debug \
            -destination "platform=iOS Simulator,name=$SIMULATOR"
        
        if [ $? -eq 0 ]; then
            print_success "Build para simulador concluído!"
            
            # Tentar abrir simulador
            read -p "Abrir no simulador? (y/n): " open_sim
            if [ "$open_sim" = "y" ] || [ "$open_sim" = "Y" ]; then
                xcrun simctl boot "$SIMULATOR" 2>/dev/null || true
                open -a Simulator
                
                # Instalar app
                APP_PATH=$(find ~/Library/Developer/Xcode/DerivedData -name "*.app" -path "*/Build/Products/Debug-iphonesimulator/*" | grep -i quiron | head -n1)
                if [ -n "$APP_PATH" ]; then
                    xcrun simctl install "$SIMULATOR" "$APP_PATH"
                    xcrun simctl launch "$SIMULATOR" br.com.quironconcursos.app
                    print_success "App aberto no simulador!"
                fi
            fi
        else
            print_error "Erro no build"
            exit 1
        fi
        ;;
    
    *)
        print_error "Opção inválida!"
        exit 1
        ;;
esac

# Instruções finais
echo ""
echo "===================================="
print_success "BUILD iOS CONCLUÍDO! 🎉"
echo "===================================="
echo ""
echo "📱 RECURSOS ÚTEIS:"
echo ""
echo "📖 App Store Connect:"
echo "   https://appstoreconnect.apple.com"
echo ""
echo "📖 Certificates & Profiles:"
echo "   https://developer.apple.com/account/resources"
echo ""
echo "📖 TestFlight:"
echo "   https://appstoreconnect.apple.com/apps/.../testflight"
echo ""
echo "📖 Documentação:"
echo "   docs/APP_STORE_DEPLOY.md"
echo ""

print_success "Script concluído! 🚀"
