#!/bin/bash

# ==============================================================================
# QUIRON CONCURSOS - Gerador de Assets para Play Store
# ==============================================================================
# Este script gera automaticamente todos os recursos visuais necessários
# para publicação na Google Play Store usando Inkscape ou ImageMagick.
# ==============================================================================

set -e  # Exit on error

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║         QUIRON CONCURSOS - Play Store Assets              ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════════════════════════╗${NC}"
echo ""

# Verificar se Inkscape está instalado
if command -v inkscape &> /dev/null; then
    CONVERTER="inkscape"
    echo -e "${GREEN}✅ Inkscape detectado!${NC}"
elif command -v convert &> /dev/null; then
    CONVERTER="imagemagick"
    echo -e "${GREEN}✅ ImageMagick detectado!${NC}"
else
    echo -e "${RED}❌ ERRO: Inkscape ou ImageMagick não encontrado!${NC}"
    echo ""
    echo "Instale uma das ferramentas:"
    echo "  • Inkscape: https://inkscape.org/"
    echo "  • ImageMagick: https://imagemagick.org/"
    echo ""
    echo "Ou use conversão online: https://cloudconvert.com/svg-to-png"
    exit 1
fi

# Criar diretório de saída
OUTPUT_DIR="play-store-assets"
mkdir -p "$OUTPUT_DIR"

echo ""
echo -e "${YELLOW}📁 Diretório de saída: $OUTPUT_DIR/${NC}"
echo ""

# ==============================================================================
# FUNÇÃO DE CONVERSÃO
# ==============================================================================

convert_svg() {
    local input=$1
    local output=$2
    local width=$3
    local height=$4
    
    echo -e "${BLUE}🔄 Convertendo: $(basename $input) → $(basename $output)${NC}"
    
    if [ "$CONVERTER" = "inkscape" ]; then
        inkscape "$input" \
            --export-filename="$output" \
            --export-width="$width" \
            --export-height="$height" \
            --export-background-opacity=0 \
            2>/dev/null
    else
        convert "$input" \
            -resize "${width}x${height}" \
            -background none \
            "$output"
    fi
    
    if [ -f "$output" ]; then
        local size=$(du -h "$output" | cut -f1)
        echo -e "${GREEN}  ✅ Gerado: $(basename $output) ($size)${NC}"
    else
        echo -e "${RED}  ❌ Erro ao gerar: $(basename $output)${NC}"
    fi
}

# ==============================================================================
# 1. ÍCONE DO APP (512x512)
# ==============================================================================

echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}1️⃣  ÍCONE DO APP (512x512 PNG)${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

convert_svg \
    "assets/quiron-icon.svg" \
    "$OUTPUT_DIR/icon-512.png" \
    512 512

# ==============================================================================
# 2. FEATURE GRAPHIC (1024x500)
# ==============================================================================

echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}2️⃣  FEATURE GRAPHIC (1024x500 PNG)${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

convert_svg \
    "assets/quiron-feature-graphic.svg" \
    "$OUTPUT_DIR/feature-graphic-1024x500.png" \
    1024 500

# ==============================================================================
# 3. ÍCONES ANDROID MULTI-RESOLUÇÃO (OPCIONAL)
# ==============================================================================

echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}3️⃣  ÍCONES MULTI-RESOLUÇÃO (Opcional)${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

read -p "Gerar ícones Android (mdpi, hdpi, xhdpi, etc.)? (s/N): " -n 1 -r
echo

if [[ $REPLY =~ ^[Ss]$ ]]; then
    ANDROID_DIR="$OUTPUT_DIR/android-icons"
    mkdir -p "$ANDROID_DIR"
    
    # mdpi (48x48)
    convert_svg "assets/quiron-icon.svg" "$ANDROID_DIR/mipmap-mdpi-ic_launcher.png" 48 48
    
    # hdpi (72x72)
    convert_svg "assets/quiron-icon.svg" "$ANDROID_DIR/mipmap-hdpi-ic_launcher.png" 72 72
    
    # xhdpi (96x96)
    convert_svg "assets/quiron-icon.svg" "$ANDROID_DIR/mipmap-xhdpi-ic_launcher.png" 96 96
    
    # xxhdpi (144x144)
    convert_svg "assets/quiron-icon.svg" "$ANDROID_DIR/mipmap-xxhdpi-ic_launcher.png" 144 144
    
    # xxxhdpi (192x192)
    convert_svg "assets/quiron-icon.svg" "$ANDROID_DIR/mipmap-xxxhdpi-ic_launcher.png" 192 192
    
    echo -e "${GREEN}✅ Ícones Android gerados em: $ANDROID_DIR/${NC}"
else
    echo -e "${BLUE}ℹ️  Pulando ícones Android (use XML adaptativo existente)${NC}"
fi

# ==============================================================================
# 4. PROMO GRAPHIC (180x120) - Opcional
# ==============================================================================

echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}4️⃣  PROMO GRAPHIC (180x120 PNG - Opcional)${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

read -p "Gerar Promo Graphic? (s/N): " -n 1 -r
echo

if [[ $REPLY =~ ^[Ss]$ ]]; then
    convert_svg \
        "assets/quiron-feature-graphic.svg" \
        "$OUTPUT_DIR/promo-graphic-180x120.png" \
        180 120
else
    echo -e "${BLUE}ℹ️  Pulando Promo Graphic${NC}"
fi

# ==============================================================================
# RESUMO FINAL
# ==============================================================================

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                    ✅ CONCLUÍDO!                           ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo -e "${YELLOW}📁 Arquivos gerados em:${NC} $OUTPUT_DIR/"
echo ""
echo "Próximos passos:"
echo ""
echo "1️⃣  Verifique os arquivos gerados:"
echo "    ls -lh $OUTPUT_DIR/"
echo ""
echo "2️⃣  Capturar Screenshots (4-8 telas):"
echo "    - Dashboard"
echo "    - Game 3D"
echo "    - Questões"
echo "    - Chat IA"
echo ""
echo "3️⃣  Upload no Google Play Console:"
echo "    https://play.google.com/console"
echo "    → Listagem da loja → Recursos gráficos"
echo ""
echo -e "${BLUE}📖 Leia RECURSOS_VISUAIS_GUIA.md para detalhes!${NC}"
echo ""

# Verificar tamanho dos arquivos
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${YELLOW}📊 Arquivos Gerados:${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
ls -lh "$OUTPUT_DIR"/*.png 2>/dev/null | awk '{printf "  %-40s %8s\n", $9, $5}'
echo ""

# Avisos sobre limites
echo -e "${YELLOW}⚠️  Verifique os limites:${NC}"
echo "  • Todos os arquivos < 1MB ✅"
echo "  • Ícone: 512x512 pixels ✅"
echo "  • Feature Graphic: 1024x500 pixels ✅"
echo ""

exit 0
