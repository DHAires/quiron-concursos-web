# ⚡ QUICK START - Publicar nas Lojas em 4 Passos

## 🎯 Guia Rápido para Iniciantes

---

## 📱 PASSO 1: Instalar Ferramentas (30 min)

### Todos (Android + iOS)

```bash
# Node.js 18+
https://nodejs.org/

# Verificar instalação
node -v
npm -v
```

### Android apenas

```bash
# Android Studio
https://developer.android.com/studio

# Abrir Android Studio
# Tools → SDK Manager
# Instalar: Android SDK 34
```

### iOS apenas (macOS)

```bash
# Xcode (via App Store)
https://apps.apple.com/app/xcode/id497799835

# Command Line Tools
xcode-select --install

# CocoaPods
sudo gem install cocoapods
```

---

## 💳 PASSO 2: Criar Contas (1 hora)

### Google Play Console ($25 única vez)

```
1. Acesse: https://play.google.com/console/signup
2. Pague $25 USD
3. Preencha informações da empresa
4. Aguarde aprovação (24h)
```

### Apple Developer ($99/ano)

```
1. Acesse: https://developer.apple.com/programs/enroll/
2. Pague $99 USD/ano
3. Preencha informações
4. Aguarde aprovação (24-48h)
```

---

## 🏗️ PASSO 3: Build do App (30 min)

### Android

```bash
# 1. Clonar/abrir projeto
cd quiron-concursos

# 2. Instalar dependências
npm install

# 3. Adicionar plataforma Android
npm run add:android

# 4. Gerar keystore (GUARDAR SENHA!)
keytool -genkeypair -v -storetype PKCS12 \
  -keystore android/keystore/quiron-release-key.keystore \
  -alias quiron-release \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

# 5. Criar android/gradle.properties
# Adicionar:
QUIRON_RELEASE_STORE_FILE=./keystore/quiron-release-key.keystore
QUIRON_RELEASE_STORE_PASSWORD=SUA_SENHA
QUIRON_RELEASE_KEY_ALIAS=quiron-release
QUIRON_RELEASE_KEY_PASSWORD=SUA_SENHA

# 6. Build AAB
chmod +x scripts/build-android.sh
./scripts/build-android.sh
# Escolher opção 1 (AAB)

# ✅ Arquivo gerado:
# android/app/build/outputs/bundle/release/app-release.aab
```

### iOS (macOS apenas)

```bash
# 1. Instalar dependências
npm install

# 2. Adicionar plataforma iOS
npm run add:ios

# 3. Configurar certificados
# Acesse: https://developer.apple.com/account
# Certificates → + → iOS Distribution
# Download e instalar no Mac

# 4. Build
chmod +x scripts/build-ios.sh
./scripts/build-ios.sh
# Escolher opção 1 (Abrir Xcode)

# 5. No Xcode:
# - Selecionar Team
# - Product → Archive
# - Window → Organizer
# - Distribute App → App Store Connect

# ✅ Upload concluído via Xcode
```

---

## 📤 PASSO 4: Upload nas Lojas (1 hora)

### Google Play Store

```
1. Acesse: https://play.google.com/console

2. Criar App:
   • Nome: Quiron Concursos
   • Idioma: Português (Brasil)
   • Tipo: App
   • Grátis

3. Ficha da Loja:
   • Descrição curta:
     "Prepare-se para concursos com 950 questões e game 3D épico! 🐎🎯"
   
   • Descrição completa: (copiar de STORE_READY.md)
   
   • Screenshots: Mínimo 2 (capturar do app)
   
   • Ícone: 512x512 PNG
   
   • Categoria: Educação

4. Classificação:
   • Responder questionário
   • Resultado: Livre (L)

5. Upload AAB:
   • Versões → Produção
   • Criar nova versão
   • Upload: app-release.aab
   • Nome: 2.0.0
   • Código: 1

6. Enviar para Revisão
   • Revisar tudo
   • "Enviar para revisão"

7. Aguardar 1-3 dias ✅
```

### Apple App Store

```
1. Acesse: https://appstoreconnect.apple.com

2. Criar App:
   • My Apps → +
   • Nome: Quiron Concursos
   • Idioma: Portuguese (Brazil)
   • Bundle ID: br.com.quironconcursos.app
   • SKU: quiron-concursos-2024

3. Informações:
   • Subtitle: "Prepare-se com game 3D e IA"
   • Categoria: Education
   • Privacy Policy: https://quironconcursos.com.br/privacy

4. Screenshots:
   • iPhone 6.7": Mínimo 3 (1290x2796)
   • iPhone 6.5": Mínimo 3 (1242x2688)

5. Descrição: (copiar de STORE_READY.md)

6. Keywords:
   "concursos,quiz,estudos,game,educação,questões,aprovação"

7. Pricing: Free

8. App Review Info:
   • Nome, telefone, email
   • Notas sobre o app

9. Selecionar Build:
   • Build uploadado via Xcode

10. Submit for Review
    • Revisar tudo
    • "Submit for Review"

11. Aguardar 1-7 dias ✅
```

---

## 🎨 ASSETS RÁPIDOS

### Ícones

```bash
# Criar 1024x1024 PNG no Figma/Photoshop
# Logo centralizado, fundo sólido

# Redimensionar online:
https://www.iloveimg.com/resize-image

# Ou gerar automaticamente:
npm run icons:generate
```

### Screenshots

```
1. Abrir app no emulador/dispositivo
2. Capturar 5 telas principais:
   • Dashboard
   • Banco de questões
   • Game épico
   • Chat IA
   • Estatísticas

3. Editar (opcional):
   • Adicionar títulos
   • Adicionar descrições
   • Template bonito

4. Formatos:
   • Android: 9:16 (vertical)
   • iOS: Dimensões exatas conforme device
```

---

## ✅ CHECKLIST MÍNIMO

```
PRÉ-REQUISITOS:
  ✅ Node.js instalado
  ✅ Android Studio OU Xcode instalado
  ✅ Conta Play Console ($25) OU Apple Developer ($99)
  ✅ Ícone 512x512 criado
  ✅ Mínimo 2 screenshots capturados

BUILD:
  ✅ npm install executado
  ✅ AAB gerado (Android) OU Archive criado (iOS)
  ✅ Testado em emulador

UPLOAD:
  ✅ App criado na loja
  ✅ Descrições preenchidas
  ✅ Screenshots uploadados
  ✅ Ícone uploadado
  ✅ Build/AAB uploadado
  ✅ Enviado para revisão

AGUARDAR:
  ⏱️ Google Play: 1-3 dias
  ⏱️ App Store: 1-7 dias
```

---

## 🆘 PROBLEMAS COMUNS

### "Keystore not found"
```bash
# Gerar novamente
keytool -genkeypair -v -storetype PKCS12 \
  -keystore android/keystore/quiron-release-key.keystore \
  -alias quiron-release -keyalg RSA -keysize 2048 -validity 10000
```

### "No signing certificate"
```
1. Acesse https://developer.apple.com/account
2. Certificates → + → iOS Distribution
3. Download e instalar
4. Tentar novamente no Xcode
```

### "Build failed"
```bash
# Limpar e tentar novamente
cd android && ./gradlew clean && cd ..
# OU no Xcode: Product → Clean Build Folder
```

### "App rejected"
```
Motivos comuns:
• Screenshots não condizem com o app
• Descrição enganosa
• Ícone com bordas/sombras (iOS)
• Falta política de privacidade
• Permissões não justificadas

Solução: Ler email de rejeição e corrigir
```

---

## 📞 SUPORTE

### Documentação Completa

```
📖 /docs/APP_STORE_DEPLOY.md    (5000+ linhas - tudo detalhado)
📖 /STORE_READY.md               (resumo executivo)
📖 /STATUS.md                    (status geral do projeto)
```

### Links Úteis

```
🔗 Play Console:          https://play.google.com/console
🔗 App Store Connect:     https://appstoreconnect.apple.com
🔗 Capacitor Docs:        https://capacitorjs.com
🔗 Android Developer:     https://developer.android.com
🔗 iOS Developer:         https://developer.apple.com
```

---

## 🎉 RESUMO ULTRA-RÁPIDO

```
1️⃣  Instalar: Node.js + Android Studio/Xcode (30min)

2️⃣  Contas: Play Console ($25) + Apple Developer ($99) (1h)

3️⃣  Build: ./scripts/build-android.sh ou build-ios.sh (30min)

4️⃣  Upload: Criar app, preencher info, upload build (1h)

⏱️  TOTAL: ~3h de trabalho + 1-7 dias aprovação

💰 CUSTO: $25 (Android) ou $99/ano (iOS) ou ambos ($124)

📱 RESULTADO: App nas lojas oficiais! 🎊
```

---

## 🚀 COMEÇAR AGORA

```bash
# 1. Abrir projeto
cd quiron-concursos

# 2. Instalar
npm install

# 3. Build Android
./scripts/build-android.sh

# 4. Build iOS (macOS)
./scripts/build-ios.sh

# 5. Seguir passos acima! 🎯
```

---

**📱 EM 3 HORAS VOCÊ ESTÁ PRONTO PARA PUBLICAR! 🚀**

**Boa sorte com seu lançamento! 🎉🐎**

---

*Última atualização: 05/12/2024*  
*Dificuldade: ⭐⭐ (Fácil com este guia)*  
*Tempo: 3 horas + 1-7 dias aprovação*
