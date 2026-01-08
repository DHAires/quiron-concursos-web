# ⚡ QUIRON - AÇÃO RÁPIDA (1 PÁGINA)

## 🎯 CONFIGURAR BANCO (6 MIN)

```bash
1. Supabase → SQL Editor → New Query
2. Copiar arquivo: /supabase-setup-completo.sql
3. Colar e executar (Ctrl+Enter)
4. Ver: "✅ SETUP COMPLETO!"
```

## 🌱 EXECUTAR SEED (2 MIN)

```bash
1. Abrir app → Ctrl+Shift+A
2. Código: QUIRON_DEV_2024
3. Clicar: "Executar Seed"
4. Ver: "40 questões adicionadas"
```

## 🧪 TESTAR (1 MIN)

```bash
1. Menu → Game Épico
2. Área → Jurídica
3. Iniciar partida
4. Questões carregam ✅
```

---

## ⚠️ PENDÊNCIAS CRÍTICAS (HOJE)

### 1. WEBHOOKS PAGAMENTO (20 MIN)

**STRIPE:**
```
URL: https://{PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/payments/stripe/webhook
Eventos: checkout.session.completed, customer.subscription.deleted
Copiar: Signing Secret → Supabase Secrets → STRIPE_WEBHOOK_SECRET
```

**MERCADOPAGO:**
```
URL: https://{PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/payments/mercadopago/webhook
Eventos: payment, subscription_authorized_payment
```

---

## 🏪 LOJAS (ESTA SEMANA)

### 2. CONTAS
- [ ] Google Play Console ($25) - play.google.com/console
- [ ] Apple Developer ($99/ano) - developer.apple.com/programs

### 3. KEYSTORE ANDROID (10 MIN)
```bash
keytool -genkey -v -keystore android/keystore/quiron-release-key.keystore \
  -alias quiron-release -keyalg RSA -keysize 2048 -validity 10000

⚠️ FAZER 3 BACKUPS DA SENHA!
```

### 4. HOSPEDAR POLÍTICAS (30 MIN)
- [ ] GitHub Pages / Vercel / Netlify
- [ ] URLs: /privacy, /terms, /support
- [ ] Obrigatório para lojas

### 5. ÍCONES APP (1-2H)
- [ ] 1024x1024 PNG
- [ ] Tool: icon.kitchen
- [ ] Android: adaptive icon
- [ ] iOS: app icon set

---

## 📊 PROGRESSO

```
████████████████░░░░  85% COMPLETO

✅ Backend funcionando
✅ Pagamentos integrados
✅ Mobile preparado
✅ Segurança implementada
✅ Documentação completa

⚠️ Webhooks (configurar)
⚠️ Keystore (gerar)
⚠️ Contas lojas (criar)
⚠️ Ícones (criar)
⚠️ Deploy (fazer)
```

---

## 📁 DOCS ESSENCIAIS

| Arquivo | Uso |
|---------|-----|
| `/supabase-setup-completo.sql` | 🔴 SQL pronto |
| `/GUIA-RAPIDO-SUPABASE.md` | 📖 Guia 6 min |
| `/ACAO-IMEDIATA.md` | 📋 Checklist |
| `/docs/CHECKLIST-PRODUCAO.md` | 📊 Status 85% |

---

## 🚀 ORDEM DE EXECUÇÃO

**HOJE (2h):**
1. ✅ Configurar banco (6 min)
2. ✅ Seed questões (2 min)
3. ✅ Webhooks (20 min)

**AMANHÃ:**
4. Criar contas lojas
5. Gerar keystore

**ESTA SEMANA:**
6. Ícones
7. Builds
8. Upload

**Lançamento:** 2-3 semanas

---

## 🔥 COMANDOS ÚTEIS

```bash
# Build
npm run build
npx cap sync

# Abrir
npx cap open android
npx cap open ios

# Testar
npm run dev
```

---

## 📞 SUPORTE

- Stripe: https://support.stripe.com
- MercadoPago: https://www.mercadopago.com.br/ajuda
- Play Store: https://support.google.com/googleplay
- App Store: https://developer.apple.com/support

---

**🏛️ Quiron Concursos - 85% pronto!**  
**31/12/2024**
