# 🎨 CRIAR ÍCONE DO APP - QUIRON CONCURSOS

## Design Sugerido:

```
┌─────────────────────────────────┐
│                                 │
│         🐎                      │  ← Centauro (emoji ou SVG)
│                                 │
│   QUIRON                        │  ← Texto branco, bold
│   CONCURSOS                     │
│                                 │
│   [Background gradiente]        │  ← Azul #3B82F6 → Roxo #8B5CF6
│                                 │
└─────────────────────────────────┘
```

## Ferramentas Online:

1. **Canva (GRÁTIS)** ⭐ RECOMENDADO
   - https://www.canva.com/
   - Template: "App Icon"
   - Tamanho: 512x512
   
2. **Icon Kitchen (GRÁTIS)**
   - https://icon.kitchen/
   - Upload imagem simples
   - Gera todos os tamanhos automaticamente
   
3. **Figma (GRÁTIS)**
   - https://www.figma.com/
   - Criar quadrado 512x512
   - Exportar PNG

## Cores do Quiron:

```
Background gradiente:
- Azul: #3B82F6
- Roxo: #8B5CF6

Texto:
- Branco: #FFFFFF

Centauro (opcional):
- Amarelo dourado: #FCD34D
```

## Tamanhos necessários:

Para Android, você precisa gerar:
```
- 512x512 (Play Store)
- 192x192 (Android)
- 144x144 (Android)
- 96x96 (Android)
- 72x72 (Android)
- 48x48 (Android)
```

**Use Icon Kitchen que gera tudo automaticamente!**

## Colocar no projeto:

```bash
# Salvar como:
/public/icon-512.png
/public/icon-192.png

# Capacitor irá usar automaticamente
```

## Exemplo de código para gerar (se souber design):

```html
<!-- Salvar como HTML e abrir no navegador -->
<!DOCTYPE html>
<html>
<head>
  <style>
    canvas { border: 1px solid #ccc; }
  </style>
</head>
<body>
  <canvas id="icon" width="512" height="512"></canvas>
  <button onclick="download()">Download PNG</button>
  
  <script>
    const canvas = document.getElementById('icon');
    const ctx = canvas.getContext('2d');
    
    // Gradiente
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#3B82F6');
    gradient.addColorStop(1, '#8B5CF6');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    // Emoji centauro
    ctx.font = 'bold 200px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('🐎', 256, 180);
    
    // Texto
    ctx.fillStyle = 'white';
    ctx.font = 'bold 60px Arial';
    ctx.fillText('QUIRON', 256, 350);
    ctx.font = 'bold 40px Arial';
    ctx.fillText('CONCURSOS', 256, 410);
    
    function download() {
      const link = document.createElement('a');
      link.download = 'quiron-icon-512.png';
      link.href = canvas.toDataURL();
      link.click();
    }
  </script>
</body>
</html>
```

## ✅ Checklist Ícone:

```
□ Tamanho: 512x512 pixels
□ Formato: PNG sem transparência
□ Design simples e reconhecível
□ Cores vibrantes (azul/roxo Quiron)
□ Testado em tamanho pequeno (fica legível?)
□ Sem texto muito pequeno
□ Salvo em /public/icon-512.png
```
