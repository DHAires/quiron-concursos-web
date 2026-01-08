#!/bin/bash

# Script automatizado de setup Android - Quiron Concursos
# Execute com: bash scripts/setup-android.sh

echo "🐎 ============================================"
echo "🐎 QUIRON CONCURSOS - SETUP ANDROID"
echo "🐎 ============================================"
echo ""

# Verificar se npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ NPM não encontrado. Instale Node.js primeiro."
    exit 1
fi

echo "✅ NPM encontrado: $(npm -v)"
echo ""

# Instalar Capacitor
echo "📦 Instalando Capacitor..."
npm install @capacitor/core @capacitor/cli --save

echo "📦 Instalando plataforma Android..."
npm install @capacitor/android --save

echo ""
echo "⚙️  Inicializando Capacitor..."

# Inicializar Capacitor automaticamente
npx cap init "Quiron Concursos" "com.quiron.concursos" --web-dir=dist

echo ""
echo "🏗️  Fazendo build do app React..."
npm run build

echo ""
echo "📱 Adicionando plataforma Android..."
npx cap add android

echo ""
echo "🔄 Sincronizando arquivos..."
npx cap sync

echo ""
echo "🎉 ============================================"
echo "🎉 SETUP COMPLETO!"
echo "🎉 ============================================"
echo ""
echo "📱 Próximos passos:"
echo ""
echo "1. Baixar Android Studio (se não tiver):"
echo "   https://developer.android.com/studio"
echo ""
echo "2. Abrir projeto Android:"
echo "   npx cap open android"
echo ""
echo "3. Aguardar Gradle Build (primeira vez demora ~10 min)"
echo ""
echo "4. Conectar celular Android via USB"
echo ""
echo "5. Clicar no botão 'Run' (▶️) no Android Studio"
echo ""
echo "6. App instalado no celular! 🚀"
echo ""
