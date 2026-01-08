# 🔐 CHECKLIST DE CREDENCIAIS E CONFIGURAÇÕES

## ⚠️ IMPORTANTE: SEGURANÇA
Este documento lista todas as credenciais e configurações necessárias.  
**NUNCA COMPARTILHE** estas informações publicamente ou em repositórios Git!

---

## ✅ JÁ CONFIGURADAS NO SUPABASE

### **Variáveis de Ambiente Existentes:**

```bash
✅ SUPABASE_URL                  # URL do projeto Supabase
✅ SUPABASE_ANON_KEY             # Chave pública (frontend)
✅ SUPABASE_SERVICE_ROLE_KEY     # Chave privada (backend)
✅ SUPABASE_DB_URL               # URL do PostgreSQL
✅ GPT-KEY                       # OpenAI API (Prometheus Chat)
✅ deepseek                      # DeepSeek API
✅ VITE_GEMINI_API_KEY           # Google Gemini API
✅ RESEND_API_KEY                # Resend (email)
✅ GEMINI_API_KEY                # Google Gemini (duplicado)
✅ STRIPE_SECRET_KEY             # Stripe (pagamentos)
✅ STRIPE_WEBHOOK_SECRET         # Stripe (webhooks)
✅ STRIPE_WEBHOOK_SECRET_TEST    # Stripe (teste)
✅ MERCADOPAGO_ACCESS_TOKEN      # MercadoPago (pagamentos)
```

---

## ⚠️ PENDENTES - PRECISAM SER CONFIGURADAS

### 🔴 **1. STRIPE**

**Localização:** https://dashboard.stripe.com → Developers → API Keys

#### **Modo Teste (já configurado):**
```bash
✅ STRIPE_SECRET_KEY_TEST=sk_test_...
✅ STRIPE_WEBHOOK_SECRET_TEST=whsec_...
```

#### **Modo Produção (PENDENTE):**
```bash
⚠️ STRIPE_SECRET_KEY=sk_live_...
⚠️ STRIPE_WEBHOOK_SECRET=whsec_...
⚠️ STRIPE_PUBLISHABLE_KEY=pk_live_...
```

**Como obter:**
1. Ir em: https://dashboard.stripe.com/apikeys
2. Alternar para "Live mode" (canto superior)
3. Copiar Secret Key
4. Ir em: Webhooks → Add endpoint
5. URL: `https://{projectId}.supabase.co/functions/v1/make-server-50734795/payments/stripe/webhook`
6. Copiar Signing Secret

**Adicionar no Supabase:**
- Settings → Edge Functions → Secrets
- Criar nova secret com nome e valor

---

### 🔴 **2. MERCADOPAGO**

**Localização:** https://www.mercadopago.com.br/developers/panel/credentials

#### **Modo Teste (já configurado?):**
```bash
✅ MERCADOPAGO_ACCESS_TOKEN_TEST=TEST-...
```

#### **Modo Produção (PENDENTE):**
```bash
⚠️ MERCADOPAGO_ACCESS_TOKEN=APP_USR-...
⚠️ MERCADOPAGO_PUBLIC_KEY=APP_USR-...
```

**Como obter:**
1. Ir em: https://www.mercadopago.com.br/developers/panel/app
2. Criar/selecionar aplicação
3. Ir em: Credenciais
4. Copiar Access Token (Produção)
5. Configurar Webhook:
   - URL: `https://{projectId}.supabase.co/functions/v1/make-server-50734795/payments/mercadopago/webhook`
   - Eventos: payment, subscription_authorized_payment

---

### 🔴 **3. GOOGLE OAUTH (LOGIN)**

**Localização:** https://console.cloud.google.com

#### **Credenciais Web (PENDENTE):**
```bash
⚠️ GOOGLE_CLIENT_ID=XXXXXXXXXX.apps.googleusercontent.com
⚠️ GOOGLE_CLIENT_SECRET=GOCSPX-...
```

**Como obter:**
1. Ir em: https://console.cloud.google.com
2. Criar novo projeto ou selecionar existente
3. Ativar APIs: Google+ API, Google Identity Services
4. Ir em: Credentials → Create Credentials → OAuth 2.0 Client ID
5. Tipo: Web application
6. Authorized redirect URIs:
   ```
   https://{projectId}.supabase.co/auth/v1/callback
   ```
7. Copiar Client ID e Client Secret

**Configurar no Supabase:**
1. Authentication → Providers → Google
2. Habilitar toggle
3. Colar Client ID e Secret
4. Salvar

#### **Credenciais Android (PENDENTE):**
```bash
⚠️ GOOGLE_CLIENT_ID_ANDROID=XXXXXXXXXX.apps.googleusercontent.com
⚠️ ANDROID_SHA1=XX:XX:XX:...
```

**Como obter SHA-1:**
```bash
# Keystore de debug
keytool -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android

# Keystore de produção
keytool -list -v -keystore android/keystore/quiron-release-key.keystore -alias quiron-release
```

**Adicionar no Google Cloud Console:**
1. Credentials → Create Credentials → OAuth 2.0 Client ID
2. Tipo: Android
3. Package name: `br.com.quironconcursos.app`
4. SHA-1: [colar aqui]

#### **Credenciais iOS (PENDENTE):**
```bash
⚠️ GOOGLE_CLIENT_ID_IOS=XXXXXXXXXX.apps.googleusercontent.com
⚠️ IOS_BUNDLE_ID=br.com.quironconcursos.app
⚠️ IOS_URL_SCHEME=com.googleusercontent.apps.XXXXXXXXXX
```

**Como obter:**
1. Credentials → Create Credentials → OAuth 2.0 Client ID
2. Tipo: iOS
3. Bundle ID: `br.com.quironconcursos.app`
4. Copiar Client ID

---

### 🟡 **4. GOOGLE ADSENSE (ANÚNCIOS WEB)**

**Localização:** https://www.google.com/adsense

```bash
⚠️ ADSENSE_PUBLISHER_ID=ca-pub-XXXXXXXXXX
⚠️ ADSENSE_AD_SLOT_HORIZONTAL=XXXXXXXXXX
⚠️ ADSENSE_AD_SLOT_VERTICAL=XXXXXXXXXX
⚠️ ADSENSE_AD_SLOT_RECTANGLE=XXXXXXXXXX
```

**Como obter:**
1. Criar conta AdSense
2. Adicionar site
3. Aguardar aprovação
4. Copiar Publisher ID (ca-pub-...)
5. Criar Ad Units
6. Copiar Ad Slot IDs

**Substituir em:**
- `/components/GoogleAdSense.tsx`

---

### 🟡 **5. GOOGLE ADMOB (ANÚNCIOS MOBILE)**

**Localização:** https://admob.google.com

#### **Android:**
```bash
⚠️ ADMOB_APP_ID_ANDROID=ca-app-pub-XXXXXXXXXX~XXXXXXXXXX
⚠️ ADMOB_BANNER_ID_ANDROID=ca-app-pub-XXXXXXXXXX/XXXXXXXXXX
⚠️ ADMOB_INTERSTITIAL_ID_ANDROID=ca-app-pub-XXXXXXXXXX/XXXXXXXXXX
⚠️ ADMOB_REWARDED_ID_ANDROID=ca-app-pub-XXXXXXXXXX/XXXXXXXXXX
```

#### **iOS:**
```bash
⚠️ ADMOB_APP_ID_IOS=ca-app-pub-XXXXXXXXXX~XXXXXXXXXX
⚠️ ADMOB_BANNER_ID_IOS=ca-app-pub-XXXXXXXXXX/XXXXXXXXXX
⚠️ ADMOB_INTERSTITIAL_ID_IOS=ca-app-pub-XXXXXXXXXX/XXXXXXXXXX
⚠️ ADMOB_REWARDED_ID_IOS=ca-app-pub-XXXXXXXXXX/XXXXXXXXXX
```

**Como obter:**
1. Criar conta AdMob
2. Criar app Android
3. Criar app iOS
4. Criar Ad Units para cada tipo
5. Copiar IDs

**Adicionar em:**
- `android/app/src/main/AndroidManifest.xml`
- `ios/App/App/Info.plist`

---

### 🟡 **6. GOOGLE ANALYTICS 4**

**Localização:** https://analytics.google.com

```bash
⚠️ GA4_MEASUREMENT_ID=G-XXXXXXXXXX
⚠️ GA4_STREAM_ID=XXXXXXXXXX
```

**Como obter:**
1. Criar conta Analytics
2. Criar propriedade GA4
3. Criar data stream (Web)
4. Copiar Measurement ID

**Adicionar em:**
- `/index.html` (script gtag)

---

### 🟡 **7. FIREBASE**

**Localização:** https://console.firebase.google.com

#### **Android:**
```bash
⚠️ Baixar: google-services.json
⚠️ Colocar em: android/app/google-services.json
```

#### **iOS:**
```bash
⚠️ Baixar: GoogleService-Info.plist
⚠️ Colocar em: ios/App/App/GoogleService-Info.plist
```

**Como obter:**
1. Criar projeto Firebase
2. Adicionar app Android
   - Package name: `br.com.quironconcursos.app`
   - Baixar google-services.json
3. Adicionar app iOS
   - Bundle ID: `br.com.quironconcursos.app`
   - Baixar GoogleService-Info.plist

---

### 🟢 **8. APPLE DEVELOPER**

**Localização:** https://developer.apple.com

```bash
⚠️ APPLE_TEAM_ID=XXXXXXXXXX
⚠️ APPLE_BUNDLE_ID=br.com.quironconcursos.app
⚠️ APPLE_APP_ID=XXXXXXXXXX
⚠️ APPLE_PUSH_CERT=[arquivo .p12]
```

**Como obter:**
1. Criar conta Apple Developer ($99/ano)
2. Aguardar aprovação
3. Ir em: Certificates, IDs & Profiles
4. Criar App ID
5. Criar Certificates
6. Criar Provisioning Profiles

**Necessário para:**
- Build de produção iOS
- Push Notifications
- In-App Purchases (futuro)

---

### 🟢 **9. RESEND (EMAIL) - Já tem token**

**Localização:** https://resend.com/domains

```bash
✅ RESEND_API_KEY=re_...  # Já configurado
⚠️ RESEND_DOMAIN=quironconcursos.com.br  # Pendente
⚠️ RESEND_FROM_EMAIL=noreply@quironconcursos.com.br  # Pendente
```

**Como configurar domínio:**
1. Ir em: https://resend.com/domains
2. Add Domain
3. Domain: `quironconcursos.com.br`
4. Copiar registros DNS (SPF, DKIM, DMARC)
5. Adicionar no provedor de DNS (Registro.br, Cloudflare, etc)
6. Aguardar verificação

---

### 🟢 **10. DOMÍNIO E HOSPEDAGEM**

```bash
⚠️ DOMAIN=quironconcursos.com.br
⚠️ SSL_CERT=[certificado]
⚠️ HOSTING_PROVIDER=[Vercel/Netlify/AWS]
```

**URLs necessárias:**
```
⚠️ https://quironconcursos.com.br (site principal)
⚠️ https://quironconcursos.com.br/privacy (política)
⚠️ https://quironconcursos.com.br/terms (termos)
⚠️ https://quironconcursos.com.br/support (suporte)
```

**Opções de hospedagem:**
1. **Vercel** (recomendado) - Grátis, SSL automático
2. **Netlify** - Grátis, SSL automático
3. **GitHub Pages** - Grátis, precisa configurar SSL
4. **AWS/DigitalOcean** - Pago, mais controle

---

## 🔑 KEYSTORE ANDROID (CRÍTICO!)

```bash
⚠️ KEYSTORE_PATH=android/keystore/quiron-release-key.keystore
⚠️ KEYSTORE_ALIAS=quiron-release
⚠️ KEYSTORE_PASSWORD=[senha forte]
⚠️ KEY_PASSWORD=[senha forte]
```

**⚠️ NUNCA PERCA O KEYSTORE!**
Sem ele, não é possível atualizar o app na Play Store.

**Backup em:**
- [ ] Pendrive
- [ ] Google Drive (criptografado)
- [ ] Cofre de senhas (1Password/Bitwarden)
- [ ] HD externo

**Comando de geração:**
```bash
keytool -genkey -v \
  -keystore android/keystore/quiron-release-key.keystore \
  -alias quiron-release \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

---

## 📱 CONTAS DAS LOJAS

### **Google Play Console:**
```bash
⚠️ EMAIL=[email]
⚠️ SENHA=[senha]
⚠️ 2FA=[configurar]
⚠️ TAXA=$25 USD (pagamento único)
⚠️ DEVELOPER_ACCOUNT_ID=[ID após criação]
```

### **App Store Connect:**
```bash
⚠️ APPLE_ID=[email]
⚠️ SENHA=[senha]
⚠️ 2FA=[obrigatório]
⚠️ TAXA=$99 USD/ano
⚠️ TEAM_ID=[ID do time]
```

---

## 🎯 TEMPLATE DE SENHAS SEGURAS

Use um gerenciador de senhas (1Password, Bitwarden, LastPass) e crie:

**Formato sugerido:**
```
Serviço: Stripe Produção
URL: https://dashboard.stripe.com
Email: seu@email.com
Senha: [gerada pelo gerenciador - 20+ caracteres]
2FA: [configurar app authenticator]
Notas: Live mode, webhook configurado em DD/MM/YYYY
```

---

## ✅ CHECKLIST DE SEGURANÇA

### **Obrigatório:**
- [ ] Todas as senhas são únicas e fortes (20+ caracteres)
- [ ] 2FA habilitado em TODOS os serviços
- [ ] Keystore Android tem 3 backups
- [ ] Variáveis de ambiente no Supabase (não no código)
- [ ] `.env` no `.gitignore`
- [ ] Credenciais NUNCA commitadas no Git

### **Recomendado:**
- [ ] Usar gerenciador de senhas
- [ ] Revisar acessos a cada 3 meses
- [ ] Rotacionar API keys a cada 6 meses
- [ ] Documentar quem tem acesso ao quê
- [ ] Backup semanal das configurações

---

## 📋 PLANILHA DE CONTROLE

Crie uma planilha (Google Sheets) com:

| Serviço | Email | Senha | 2FA | API Key | Status | Data Config | Backup |
|---------|-------|-------|-----|---------|--------|-------------|--------|
| Stripe | ... | Gerenc. | ✅ | sk_live_... | ✅ | 31/12/2024 | ✅ |
| MercadoPago | ... | Gerenc. | ✅ | APP_USR... | ⚠️ | - | - |
| Google Cloud | ... | Gerenc. | ✅ | ... | ⚠️ | - | - |
| ... | ... | ... | ... | ... | ... | ... | ... |

---

## 🚨 EM CASO DE EMERGÊNCIA

### **Keystore perdido:**
- ❌ Impossível atualizar app na Play Store
- ✅ Solução: Publicar como novo app (perda de usuários/reviews)

### **Credencial comprometida:**
1. Revogar imediatamente
2. Gerar nova credencial
3. Atualizar no Supabase
4. Fazer novo deploy
5. Monitorar atividades suspeitas

### **Conta hackeada:**
1. Trocar senha imediatamente
2. Revogar todas as sessões
3. Verificar acessos recentes
4. Habilitar 2FA se não tiver
5. Contatar suporte do serviço

---

## 📞 CONTATOS DE SUPORTE

- **Stripe:** https://support.stripe.com
- **MercadoPago:** https://www.mercadopago.com.br/ajuda
- **Google Cloud:** https://cloud.google.com/support
- **Apple Developer:** https://developer.apple.com/support
- **Supabase:** https://supabase.com/support

---

## ⚠️ AVISO LEGAL

Este documento contém informações sensíveis.

**NUNCA:**
- ❌ Compartilhe em canais públicos
- ❌ Commite no Git
- ❌ Envie por email não criptografado
- ❌ Deixe em local não seguro

**SEMPRE:**
- ✅ Use gerenciador de senhas
- ✅ Habilite 2FA
- ✅ Faça backups criptografados
- ✅ Revise permissões regularmente

---

**Data:** 31 de Dezembro de 2024  
**Versão:** 1.0  
**Próxima revisão:** Após configuração inicial de todos os serviços
