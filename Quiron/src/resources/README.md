# 📱 RECURSOS DO APP ANDROID/iOS

## 🎨 Ícones e Splash Screens

### Arquivos Necessários:

```
/resources/
├── icon.png          (1024x1024 PNG - ícone do app)
├── splash.png        (2732x2732 PNG - splash screen)
└── README.md         (este arquivo)
```

### Gerar Automaticamente:

```bash
# Instalar ferramenta
npm install -g @capacitor/assets

# Gerar todos os tamanhos
npm run icons:generate
```

Isso cria automaticamente:
- ✅ Ícones Android (todos os tamanhos)
- ✅ Ícones iOS (todos os tamanhos)
- ✅ Splash screens adaptativas
- ✅ Imagens de notificação

### Requisitos das Imagens:

**icon.png:**
- 1024x1024 pixels
- PNG com transparência
- Logo do Quíron centralizado

**splash.png:**
- 2732x2732 pixels
- PNG (pode ter fundo)
- Logo centralizado
- Área segura: 1200x1200 no centro

### Cores do Tema:

```javascript
backgroundColor: "#0f172a"  // Azul escuro do app
foregroundColor: "#3b82f6"  // Azul principal
spinnerColor: "#3b82f6"     // Cor do loading
```

### Após Adicionar Imagens:

```bash
npm run icons:generate
npm run sync:android
```

---

## 📝 CHECKLIST:

- [ ] Criar icon.png (1024x1024)
- [ ] Criar splash.png (2732x2732)
- [ ] Rodar icons:generate
- [ ] Sincronizar com Android
- [ ] Testar no emulador/celular
