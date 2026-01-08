# 🚨 AÇÃO IMEDIATA - QUIRON CONCURSOS

## ⚡ O QUE FAZER AGORA (Próximas 24-48h)

---

## 🔴 PRIORIDADE MÁXIMA - FAZER HOJE

### 1. ⚡ **HABILITAR RLS NO SUPABASE** (10 minutos)

**Por quê?** Protege o banco de dados contra acessos não autorizados.

**Como fazer:**
1. Abrir: https://supabase.com/dashboard
2. Selecionar projeto Quiron
3. Ir em: **Database** → **Tables** → `kv_store_50734795`
4. Clicar: **"Enable RLS"**
5. Copiar SQL do arquivo `/docs/SUPABASE-RLS-SECURITY.md`
6. Ir em: **SQL Editor**
7. Colar e executar as 4 políticas:
   - Public Read Access
   - Service Role Insert Only
   - Service Role Update Only
   - Service Role Delete Only
8. Testar acessando rotas do game

✅ **Resultado esperado**: Operações de leitura funcionam, criação/deleção só com código admin.

---

### 2. ⚡ **EXECUTAR SEED DE QUESTÕES DO GAME** (5 minutos)

**Por quê?** O game precisa de questões para funcionar.

**Como fazer:**
1. Abrir o app Quiron
2. Apertar: `Ctrl + Shift + A`
3. Digitar código: `QUIRON_DEV_2024`
4. Clicar: **"Executar Seed"**
5. Aguardar confirmação: "40 questões adicionadas"
6. Clicar: **"Atualizar Estatísticas"**
7. Verificar contagem por área

✅ **Resultado esperado**: 40 questões no banco (10 por área).

---

### 3. ⚡ **CONFIGURAR WEBHOOKS DE PAGAMENTO** (20 minutos)

#### **STRIPE:**

1. Abrir: https://dashboard.stripe.com
2. Ir em: **Developers** → **Webhooks**
3. Clicar: **"Add endpoint"**
4. URL do webhook:
   ```
   https://{SEU_PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/payments/stripe/webhook
   ```
5. Eventos para escutar:
   - ✅ `checkout.session.completed`
   - ✅ `customer.subscription.deleted`
   - ✅ `customer.subscription.updated`
   - ✅ `invoice.payment_succeeded`
   - ✅ `invoice.payment_failed`
6. Copiar: **Webhook Signing Secret** (começa com `whsec_...`)
7. Ir no Supabase: **Settings** → **Edge Functions** → **Secrets**
8. Adicionar/atualizar:
   ```
   STRIPE_WEBHOOK_SECRET=whsec_...
   ```

#### **MERCADOPAGO:**

1. Abrir: https://www.mercadopago.com.br/developers/panel/app
2. Selecionar sua aplicação (ou criar uma nova)
3. Ir em: **Webhooks / IPN**
4. URL de notificação:
   ```
   https://{SEU_PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/payments/mercadopago/webhook
   ```
5. Eventos para escutar:
   - ✅ `payment`
   - ✅ `subscription_authorized_payment`
6. Salvar configuração

✅ **Resultado esperado**: Pagamentos notificam o backend automaticamente.

---

### 4. ⚡ **TESTAR FLUXO DE PAGAMENTO** (15 minutos)

**STRIPE (Modo Teste):**
1. Usar cartão de teste: `4242 4242 4242 4242`
2. Data: Qualquer data futura
3. CVC: Qualquer 3 dígitos
4. CEP: Qualquer CEP

**MERCADOPAGO (Modo Teste):**
1. Criar usuário de teste no painel
2. Usar credenciais de teste
3. Simular pagamento PIX/Boleto

✅ **Resultado esperado**: Redirecionamento para tela de sucesso, assinatura ativa.

---

## 🟡 PRIORIDADE ALTA - FAZER ESTA SEMANA

### 5. 📱 **CRIAR CONTAS NAS LOJAS** (30 min + aprovação)

#### **Google Play Console:**
1. Ir em: https://play.google.com/console
2. Criar conta ($25 USD - pagamento único)
3. Preencher dados da empresa/desenvolvedor
4. Aguardar aprovação (geralmente 24-48h)

#### **Apple Developer:**
1. Ir em: https://developer.apple.com/programs/
2. Se inscrever ($99 USD/ano)
3. Preencher dados
4. Aguardar aprovação (geralmente 24-72h)

---

### 6. 🔐 **GERAR KEYSTORE ANDROID** (10 minutos)

```bash
# 1. Criar diretório
mkdir -p android/keystore

# 2. Gerar keystore
keytool -genkey -v -keystore android/keystore/quiron-release-key.keystore \
  -alias quiron-release \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000

# 3. Preencher informações
# Nome: Quiron Concursos
# Organização: [Sua empresa]
# Cidade: [Sua cidade]
# Estado: [Seu estado]
# País: BR

# 4. Criar senha FORTE e ANOTAR em local seguro!
# ⚠️ NUNCA PERCA ESTA SENHA! Sem ela não pode atualizar o app!
```

**Salvar informações:**
```
Keystore path: android/keystore/quiron-release-key.keystore
Alias: quiron-release
Senha do keystore: [ANOTAR AQUI]
Senha do alias: [ANOTAR AQUI]
```

⚠️ **IMPORTANTE**: Fazer backup do keystore em 3 locais:
1. Pendrive
2. Cloud (Google Drive/Dropbox)
3. Cofre de senhas (1Password/Bitwarden)

---

### 7. 🌐 **HOSPEDAR POLÍTICA DE PRIVACIDADE** (30 minutos)

**Opção A - GitHub Pages (Grátis):**
1. Criar repositório público: `quiron-legal`
2. Criar arquivo `index.html` com conteúdo de `/components/legal/PrivacyPolicyPage.tsx`
3. Ativar GitHub Pages
4. URL resultante: `https://[seu-usuario].github.io/quiron-legal/`

**Opção B - Vercel/Netlify (Grátis):**
1. Criar projeto na Vercel/Netlify
2. Deploy do HTML
3. URL customizada disponível

**Opção C - Domínio Próprio (Recomendado):**
1. Registrar: `quironconcursos.com.br`
2. Hospedar páginas legais
3. URLs profissionais:
   - `https://quironconcursos.com.br/privacy`
   - `https://quironconcursos.com.br/terms`

**URLs necessárias:**
- ✅ Política de Privacidade (obrigatório para lojas)
- ✅ Termos de Uso (obrigatório para lojas)
- ✅ Suporte/Contato (obrigatório para lojas)

---

### 8. 🎨 **CRIAR ÍCONES DO APP** (1-2 horas)

**Ferramenta recomendada:** https://icon.kitchen (grátis)

**Upload:**
- Logo Quiron em alta resolução (1024x1024px mínimo)
- Fundo: Preto (#000000)
- Estilo: Adaptive Icon (Android)

**Download:**
- ✅ Android: Todos os tamanhos (mipmap)
- ✅ iOS: App Icon Set completo
- ✅ Adaptive icon (foreground + background)

**Substituir em:**
- `android/app/src/main/res/mipmap-*/`
- `ios/App/App/Assets.xcassets/AppIcon.appiconset/`

---

## 🟢 PRIORIDADE MÉDIA - PRÓXIMA SEMANA

### 9. 📊 **GOOGLE ANALYTICS**

1. Criar conta: https://analytics.google.com
2. Criar propriedade GA4
3. Obter Measurement ID (G-XXXXXXXXXX)
4. Adicionar no `/index.html`:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### 10. 💰 **GOOGLE ADSENSE**

1. Criar conta: https://www.google.com/adsense
2. Adicionar site
3. Aguardar aprovação (1-3 dias)
4. Copiar Publisher ID (ca-pub-XXXXXX)
5. Substituir em `/components/GoogleAdSense.tsx`:

```typescript
data-ad-client="ca-pub-SEU_PUBLISHER_ID_AQUI"
```

6. Criar Ad Units (slots)
7. Substituir Ad Slot IDs

---

### 11. 🔔 **ADMOB (Ads Mobile)**

1. Criar conta: https://admob.google.com
2. Criar app Android
3. Criar app iOS
4. Obter App IDs
5. Instalar plugin:

```bash
npm install @capacitor-community/admob
npx cap sync
```

6. Configurar IDs nos arquivos nativos
7. Criar Ad Units (banner, interstitial, rewarded)

---

### 12. 🔥 **FIREBASE**

1. Criar projeto: https://console.firebase.google.com
2. Adicionar app Android
3. Baixar `google-services.json` → `android/app/`
4. Adicionar app iOS
5. Baixar `GoogleService-Info.plist` → `ios/App/App/`
6. Instalar Analytics:

```bash
npm install @capacitor-firebase/analytics
npx cap sync
```

---

### 13. 🔐 **GOOGLE OAUTH**

1. Criar projeto: https://console.cloud.google.com
2. Ativar Google+ API
3. Criar OAuth 2.0 Client ID (Web)
4. Adicionar redirect URIs:
   ```
   https://{projectId}.supabase.co/auth/v1/callback
   ```
5. Copiar Client ID e Client Secret
6. Configurar no Supabase:
   - **Authentication** → **Providers** → **Google**
   - Colar credenciais
   - Habilitar provider

**Mobile (Android):**
1. Gerar SHA-1:
   ```bash
   keytool -list -v -keystore android/keystore/quiron-release-key.keystore
   ```
2. Criar OAuth Client ID (Android) no Google Cloud
3. Adicionar SHA-1 e package name

**Mobile (iOS):**
1. Criar OAuth Client ID (iOS) no Google Cloud
2. Adicionar Bundle ID
3. Configurar URL Scheme no Info.plist

---

## 📋 CHECKLIST FINAL PRÉ-LANÇAMENTO

### **Backend:**
- [ ] RLS habilitado e testado
- [ ] Webhooks Stripe configurados
- [ ] Webhooks MercadoPago configurados
- [ ] Seed de questões executado
- [ ] Google OAuth funcionando
- [ ] Testes de pagamento OK

### **Mobile:**
- [ ] Keystore gerado e salvo
- [ ] Ícones criados (Android + iOS)
- [ ] Build de produção OK (APK/AAB)
- [ ] Build de produção OK (IPA) [apenas Mac]
- [ ] Testado em dispositivo real

### **Lojas:**
- [ ] Conta Play Store criada ($25 pago)
- [ ] Conta App Store criada ($99 pago)
- [ ] Política de Privacidade hospedada
- [ ] Termos de Uso hospedados
- [ ] Screenshots preparados
- [ ] Descrições escritas (PT/EN)

### **Monetização:**
- [ ] Google Analytics configurado
- [ ] Google AdSense aprovado
- [ ] AdMob configurado (opcional)
- [ ] Firebase Analytics ativo

### **Comunicação:**
- [ ] Email profissional criado
- [ ] Domínio registrado (opcional)
- [ ] Suporte configurado

---

## 🎯 CRONOGRAMA SUGERIDO

### **DIA 1 (HOJE):**
- ✅ Habilitar RLS
- ✅ Executar seed
- ✅ Configurar webhooks
- ✅ Testar pagamentos

### **DIA 2-3:**
- ✅ Criar contas nas lojas
- ✅ Gerar keystore
- ✅ Hospedar políticas
- ✅ Criar ícones

### **SEMANA 1:**
- ✅ Build Android
- ✅ Build iOS
- ✅ Google Analytics
- ✅ Google AdSense
- ✅ Google OAuth

### **SEMANA 2:**
- ✅ Preencher metadados lojas
- ✅ Screenshots
- ✅ Vídeo promocional (opcional)
- ✅ Submit para revisão

### **SEMANA 3-4:**
- ✅ Aguardar aprovação
- ✅ Corrigir feedback (se houver)
- ✅ Lançamento oficial
- ✅ Marketing e divulgação

---

## 🚀 COMANDOS ÚTEIS

### **Build de Produção:**
```bash
# Web
npm run build

# Sync com mobile
npx cap sync

# Abrir Android Studio
npx cap open android

# Abrir Xcode (macOS)
npx cap open ios
```

### **Teste Local:**
```bash
# Servidor local
npm run dev

# Preview build
npm run preview
```

---

## 📞 SUPORTE

Se precisar de ajuda em alguma etapa:

1. **Documentação interna**: `/docs/` (guias completos)
2. **Supabase**: https://supabase.com/docs
3. **Capacitor**: https://capacitorjs.com/docs
4. **Stripe**: https://stripe.com/docs
5. **MercadoPago**: https://www.mercadopago.com.br/developers/pt/docs

---

## ✅ CONCLUSÃO

**O aplicativo está 85% pronto!** Faltam apenas configurações de serviços externos que dependem de:
- Pagamentos de taxas ($25 + $99)
- Aprovação de contas (24-72h)
- Revisão das lojas (1-7 dias)

**Tempo total estimado até lançamento:** 2-3 semanas

**Priorize:**
1. 🔴 Segurança (RLS)
2. 🔴 Pagamentos (webhooks)
3. 🔴 Mobile (keystore + contas)
4. 🟡 Monetização (ads)
5. 🟢 Analytics

---

**🎮 Boa sorte no lançamento do Quiron Concursos! 🏛️**

**Data**: 31 de Dezembro de 2024  
**Próxima revisão**: Após configuração de RLS e webhooks
