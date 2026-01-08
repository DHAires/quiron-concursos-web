#!/bin/bash

# Script para rebuild e sync Android - Quiron Concursos
# Execute sempre que fizer mudanças no código React

echo "🐎 ============================================"
echo "🐎 QUIRON CONCURSOS - BUILD ANDROID"
echo "🐎 ============================================"
echo ""

echo "🏗️  Fazendo build do React..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build React concluído com sucesso!"
else
    echo "❌ Erro no build React. Verifique os erros acima."
    exit 1
fi

echo ""
echo "🔄 Copiando arquivos para Android..."
npx cap copy android

echo ""
echo "🔄 Sincronizando dependências..."
npx cap sync android

echo ""
echo "✅ ============================================"
echo "✅ BUILD COMPLETO!"
echo "✅ ============================================"
echo ""
echo "📱 Próximo passo:"
echo "   npx cap open android"
echo ""
echo "   Depois, no Android Studio:"
echo "   Build → Rebuild Project"
echo "   Run → Run 'app'"
echo ""
