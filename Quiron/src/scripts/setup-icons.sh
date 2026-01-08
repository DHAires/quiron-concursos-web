#!/bin/bash

# Script para configurar ícones do Quiron Concursos
# Uso: ./scripts/setup-icons.sh

echo "🎨 =================================="
echo "🐎 QUIRON CONCURSOS - Setup de Ícones"
echo "🎨 =================================="
echo ""

# Verificar se o ícone principal existe
if [ ! -f "public/icon.png" ]; then
    echo "❌ ERRO: Arquivo public/icon.png não encontrado!"
    echo ""
    echo "Por favor:"
    echo "1. Salve o ícone do Quiron (centauro) como: public/icon.png"
    echo "2. Tamanho mínimo: 1024x1024px"
    echo "3. Formato: PNG"
    echo ""
    exit 1
fi

echo "✅ Ícone principal encontrado: public/icon.png"
echo ""

# Verificar se @capacitor/assets está instalado
echo "📦 Verificando ferramentas..."
if ! command -v @capacitor/assets &> /dev/null; then
    echo "📥 Instalando @capacitor/assets..."
    npm install -g @capacitor/assets
fi

echo "✅ Ferramentas prontas!"
echo ""

# Gerar ícones
echo "🎨 Gerando ícones em todos os tamanhos..."
npx @capacitor/assets generate \
    --iconBackgroundColor '#b91c1c' \
    --iconBackgroundColorDark '#7f1d1d' \
    --splashBackgroundColor '#0f172a' \
    --splashBackgroundColorDark '#0f172a'

echo ""
echo "✅ Ícones gerados com sucesso!"
echo ""

# Rebuild
echo "🔨 Fazendo rebuild..."
npm run build
npx cap sync

echo ""
echo "✅ Build sincronizado!"
echo ""

# Instruções finais
echo "📱 =================================="
echo "🎯 PRÓXIMOS PASSOS:"
echo "📱 =================================="
echo ""
echo "1. Abra o Android Studio:"
echo "   npx cap open android"
echo ""
echo "2. No Android Studio:"
echo "   Build → Clean Project"
echo "   Build → Rebuild Project"
echo ""
echo "3. Desinstale o app antigo do celular/emulador:"
echo "   adb uninstall com.quiron.concursos"
echo ""
echo "4. Execute novamente:"
echo "   Run → Debug 'app'"
echo ""
echo "✅ O ícone do Quiron deve aparecer!"
echo ""
echo "🐎 Quiron Concursos - Pronto para conquistar! 🏆"
