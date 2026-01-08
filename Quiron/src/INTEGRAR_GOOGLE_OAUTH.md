# 🔐 GUIA COMPLETO: INTEGRAR GOOGLE OAUTH AO SUPABASE

## ⚡ GUIA RÁPIDO (5 PASSOS)

```
1. Google Cloud Console → Criar projeto
2. Habilitar Google+ API
3. Criar OAuth 2.0 Client ID
4. Copiar credenciais
5. Configurar no Supabase Dashboard
```

**Tempo estimado:** 10-15 minutos

---

## 📋 PASSO A PASSO DETALHADO

### **PARTE 1: GOOGLE CLOUD CONSOLE** ☁️

#### **PASSO 1: Acessar Google Cloud Console**

```
1. Abrir navegador
2. Ir para: https://console.cloud.google.com
3. Fazer login com sua conta Google
4. Aceitar termos (se aparecer)
```

---

#### **PASSO 2: Criar Novo Projeto**

```
1. No topo da página, clicar em "Select a project"
   (ou nome do projeto atual)

2. Na janela que abrir, clicar em "NEW PROJECT"
   (canto superior direito)

3. Preencher:
   ┌────────────────────────────────────┐
   │ Project name: Quiron Concursos     │
   │ Organization: (deixar padrão)      │
   │ Location: (deixar padrão)          │
   └────────────────────────────────────┘

4. Clicar em "CREATE"

5. Aguardar criação (5-10 segundos)

6. Selecionar o projeto criado
```

**✅ Checkpoint:** Você deve ver "Quiron Concursos" no topo da página

---

#### **PASSO 3: Habilitar Google+ API**

```
1. No menu lateral (☰), ir em:
   APIs & Services → Library

2. Na barra de busca, digitar:
   "Google+ API"

3. Clicar no resultado "Google+ API"

4. Clicar em "ENABLE" (botão azul)

5. Aguardar habilitação (5 segundos)
```

**✅ Checkpoint:** Você deve ver "API enabled" em verde

---

#### **PASSO 4: Criar OAuth 2.0 Client ID**

```
1. No menu lateral, ir em:
   APIs & Services → Credentials

2. Clicar em "+ CREATE CREDENTIALS" (topo)

3. Selecionar: "OAuth client ID"

4. Se aparecer "Configure consent screen":
   
   a) Clicar em "CONFIGURE CONSENT SCREEN"
   
   b) Selecionar: "External"
   
   c) Clicar em "CREATE"
   
   d) Preencher OAuth consent screen:
      ┌─────────────────────────────────────────┐
      │ App name: Quiron Concursos              │
      │ User support email: seu@email.com       │
      │ Developer email: seu@email.com          │
      └─────────────────────────────────────────┘
   
   e) Clicar em "SAVE AND CONTINUE"
   
   f) Em "Scopes": Clicar em "SAVE AND CONTINUE"
   
   g) Em "Test users": Clicar em "SAVE AND CONTINUE"
   
   h) Revisar e clicar em "BACK TO DASHBOARD"

5. Voltar para: APIs & Services → Credentials

6. Clicar em "+ CREATE CREDENTIALS" novamente

7. Selecionar: "OAuth client ID"

8. Preencher:
   ┌─────────────────────────────────────────┐
   │ Application type: Web application       │
   │ Name: Quiron Concursos Web Client       │
   └─────────────────────────────────────────┘
```

---

#### **PASSO 5: Configurar URLs Autorizadas**

**IMPORTANTE:** Você precisa do seu Project ID do Supabase.

**Como encontrar o Project ID do Supabase:**

```
1. Ir para: https://app.supabase.com
2. Selecionar seu projeto
3. Na URL do navegador, copiar o ID:
   
   https://app.supabase.com/project/ABC123DEF456
                                      └─────────┘
                                      Este é seu Project ID
   
   OU
   
4. Ir em: Project Settings → General
5. Copiar "Reference ID"
```

**Agora, no Google Cloud Console:**

```
1. Em "Authorized JavaScript origins":
   Clicar em "+ ADD URI"
   
   Adicionar:
   http://localhost:5173
   
   Clicar em "+ ADD URI" novamente
   
   Adicionar:
   https://SEU_DOMINIO.com (se tiver)

2. Em "Authorized redirect URIs":
   Clicar em "+ ADD URI"
   
   Adicionar (SUBSTITUIR SEU_PROJECT_ID):
   https://SEU_PROJECT_ID.supabase.co/auth/v1/callback
   
   EXEMPLO REAL:
   https://xyzabc123def.supabase.co/auth/v1/callback
                ↑
          Seu Project ID aqui

3. Clicar em "CREATE"
```

---

#### **PASSO 6: Copiar Credenciais**

```
1. Uma janela "OAuth client created" vai aparecer

2. Copiar e GUARDAR (muito importante):
   
   ┌────────────────────────────────────────────────────────┐
   │ Your Client ID:                                        │
   │ 123456789012-abc...xyz.apps.googleusercontent.com      │
   │                                                        │
   │ Your Client Secret:                                    │
   │ GOCSPX-abc...xyz                                       │
   └────────────────────────────────────────────────────────┘

3. COPIAR AMBOS para um bloco de notas

4. Clicar em "OK"
```

**✅ Checkpoint:** Você tem Client ID e Client Secret salvos

---

### **PARTE 2: SUPABASE DASHBOARD** 🟢

#### **PASSO 7: Acessar Supabase**

```
1. Abrir nova aba
2. Ir para: https://app.supabase.com
3. Fazer login
4. Selecionar seu projeto "Quiron Concursos"
```

---

#### **PASSO 8: Habilitar Google Provider**

```
1. No menu lateral, ir em:
   Authentication → Providers

2. Rolar até encontrar "Google"

3. Clicar em "Google" para expandir

4. Ativar toggle "Enable Sign in with Google"
   (OFF → ON) ✅

5. Preencher:
   
   ┌────────────────────────────────────────────────────────┐
   │ Client ID (for OAuth):                                 │
   │ [Colar o Client ID do Google aqui]                     │
   │                                                        │
   │ Client Secret (for OAuth):                             │
   │ [Colar o Client Secret do Google aqui]                 │
   │                                                        │
   │ Authorized Client IDs:                                 │
   │ [Deixar vazio]                                         │
   └────────────────────────────────────────────────────────┘

6. Clicar em "Save" (botão verde no final)
```

**✅ Checkpoint:** Toggle Google está verde/ativo

---

#### **PASSO 9: Verificar Callback URL**

```
1. Na mesma tela (Google Provider), copiar a URL:
   
   Callback URL (for OAuth):
   https://SEU_PROJECT_ID.supabase.co/auth/v1/callback

2. Confirmar que essa URL está nas "Authorized redirect URIs"
   do Google Cloud Console (Passo 5)

3. Se não estiver, VOLTAR ao Google Cloud Console e adicionar
```

---

### **PARTE 3: TESTAR INTEGRAÇÃO** 🧪

#### **PASSO 10: Testar Login com Google**

```
1. Abrir seu app local:
   npm run dev

2. Ir para: http://localhost:5173

3. Clicar em "Login" (ou "Cadastrar")

4. Clicar em "Entrar com Google"

5. DEVE ACONTECER:
   ✅ Popup do Google abre
   ✅ Mostra sua conta Google
   ✅ Pede permissão
   ✅ Após aceitar, fecha popup
   ✅ Você está logado no app!

6. SE DER ERRO:
   ❌ "provider is not enabled"
      → Voltar Passo 8, verificar se salvou

   ❌ "redirect_uri_mismatch"
      → Voltar Passo 5, verificar URLs

   ❌ "invalid_client"
      → Voltar Passo 8, verificar Client ID/Secret
```

---

## 🎯 CHECKLIST COMPLETO

### Google Cloud Console
```
✅ Projeto "Quiron Concursos" criado
✅ Google+ API habilitada
✅ OAuth consent screen configurado
✅ OAuth Client ID criado
✅ JavaScript origins adicionadas:
   • http://localhost:5173
✅ Redirect URIs adicionadas:
   • https://SEU_PROJECT_ID.supabase.co/auth/v1/callback
✅ Client ID copiado
✅ Client Secret copiado
```

### Supabase Dashboard
```
✅ Projeto selecionado
✅ Authentication → Providers aberto
✅ Google Provider habilitado (toggle ON)
✅ Client ID colado
✅ Client Secret colado
✅ Configuração salva
```

### Teste
```
✅ App rodando localmente
✅ Botão "Entrar com Google" visível
✅ Clique abre popup do Google
✅ Login funciona corretamente
```

---

## 📸 REFERÊNCIAS VISUAIS

### Google Cloud Console - Criar OAuth Client

```
┌─────────────────────────────────────────────────────────┐
│ Create OAuth client ID                                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Application type *                                      │
│ ○ Android app                                           │
│ ○ Chrome extension                                      │
│ ○ Desktop app                                           │
│ ○ iOS app                                               │
│ ○ Universal Windows Platform (UWP)                      │
│ ● Web application                          ← SELECIONAR │
│ ○ TVs and Limited Input devices                         │
│                                                         │
│ Name *                                                  │
│ Quiron Concursos Web Client                             │
│                                                         │
│ Authorized JavaScript origins                           │
│ http://localhost:5173                                   │
│ + ADD URI                                               │
│                                                         │
│ Authorized redirect URIs                                │
│ https://abc123.supabase.co/auth/v1/callback             │
│ + ADD URI                                               │
│                                                         │
│ [CANCEL]                              [CREATE] ← CLICAR │
└─────────────────────────────────────────────────────────┘
```

### Supabase - Google Provider

```
┌─────────────────────────────────────────────────────────┐
│ Providers                                               │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ ▼ Google                                                │
│                                                         │
│   Enable Sign in with Google    [OFF] → [ON] ← ATIVAR  │
│                                                         │
│   Client ID (for OAuth) *                               │
│   123...xyz.apps.googleusercontent.com                  │
│                                                         │
│   Client Secret (for OAuth) *                           │
│   GOCSPX-abc...xyz                                      │
│                                                         │
│   Authorized Client IDs                                 │
│   (optional)                                            │
│                                                         │
│   Callback URL (for OAuth)                              │
│   https://abc123.supabase.co/auth/v1/callback           │
│                                                         │
│                                            [Save] ←CLICAR│
└─────────────────────────────────────────────────────────┘
```

---

## 🔧 TROUBLESHOOTING

### Erro: "provider is not enabled"

**Causa:** Google não está habilitado no Supabase

**Solução:**
```
1. Supabase Dashboard
2. Authentication → Providers
3. Google → Toggle ON
4. Salvar
```

---

### Erro: "redirect_uri_mismatch"

**Causa:** URL de callback não está autorizada no Google

**Solução:**
```
1. Google Cloud Console
2. APIs & Services → Credentials
3. Clicar no OAuth Client criado
4. Em "Authorized redirect URIs", adicionar:
   https://SEU_PROJECT_ID.supabase.co/auth/v1/callback
5. Save
```

---

### Erro: "invalid_client"

**Causa:** Client ID ou Secret incorretos

**Solução:**
```
1. Google Cloud Console → Credentials
2. Copiar novamente Client ID e Secret
3. Supabase → Providers → Google
4. Colar novamente (com cuidado)
5. Save
```

---

### Erro: "access_denied"

**Causa:** Usuário negou permissão no popup

**Solução:**
```
1. Tentar login novamente
2. Aceitar permissões quando solicitado
3. Se persistir, verificar OAuth consent screen no Google
```

---

### Popup não abre

**Causa:** Bloqueador de popup

**Solução:**
```
1. Permitir popups para localhost:5173
2. Tentar novamente
```

---

## 🎓 EXPLICAÇÃO TÉCNICA

### Como funciona o OAuth

```
1. Usuário clica "Entrar com Google"
   ↓
2. App redireciona para:
   https://accounts.google.com/o/oauth2/v2/auth
   com parâmetros:
   - client_id (seu Client ID)
   - redirect_uri (callback Supabase)
   - scope (email, profile)
   ↓
3. Usuário faz login no Google
   ↓
4. Google pede permissão para compartilhar dados
   ↓
5. Usuário aceita
   ↓
6. Google redireciona para:
   https://SEU_PROJECT_ID.supabase.co/auth/v1/callback
   com código de autorização
   ↓
7. Supabase troca código por access_token
   ↓
8. Supabase busca dados do usuário no Google
   ↓
9. Supabase cria/atualiza usuário no banco
   ↓
10. Supabase redireciona para seu app
    ↓
11. App detecta sessão ativa
    ↓
12. Usuário está logado! ✅
```

---

## 📝 NOTAS IMPORTANTES

### URLs de Callback

**Desenvolvimento:**
```
http://localhost:5173
```

**Produção:**
```
https://seu-dominio.com
```

**SEMPRE inclua:**
```
https://SEU_PROJECT_ID.supabase.co/auth/v1/callback
```

---

### Segurança

```
⚠️  NUNCA compartilhe Client Secret publicamente
⚠️  NUNCA comite Client Secret no Git
⚠️  Use .env para armazenar credenciais
⚠️  Restrinja origins autorizadas em produção
```

---

### Dados do Usuário

Quando usuário faz login com Google, Supabase armazena:

```json
{
  "id": "uuid-gerado-automaticamente",
  "email": "usuario@gmail.com",
  "user_metadata": {
    "full_name": "Nome do Usuário",
    "avatar_url": "https://lh3.googleusercontent.com/...",
    "email": "usuario@gmail.com",
    "email_verified": true,
    "phone_verified": false,
    "sub": "google-user-id"
  },
  "app_metadata": {
    "provider": "google",
    "providers": ["google"]
  }
}
```

---

## 🚀 PRÓXIMOS PASSOS

Após configurar Google OAuth:

```
1. ✅ Testar login local
2. ✅ Testar cadastro local
3. ✅ Verificar dados do usuário
4. 🔄 Configurar para produção (quando deployer)
5. 🔄 Adicionar outros providers (Facebook, GitHub, etc)
```

---

## 📚 RECURSOS ADICIONAIS

### Documentação Oficial

```
Supabase Auth:
https://supabase.com/docs/guides/auth

Google OAuth:
https://supabase.com/docs/guides/auth/social-login/auth-google

Google Cloud Console:
https://console.cloud.google.com

OAuth 2.0:
https://developers.google.com/identity/protocols/oauth2
```

---

## ✅ CONCLUSÃO

```
╔══════════════════════════════════════════════════════════╗
║         🔐 GUIA DE INTEGRAÇÃO COMPLETO 🔐                ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  Siga os 10 passos acima para integrar Google OAuth     ║
║  ao seu aplicativo Quiron Concursos.                     ║
║                                                          ║
║  Tempo estimado: 10-15 minutos                           ║
║  Dificuldade: Média                                      ║
║                                                          ║
║  Se tiver dúvidas, consulte o Troubleshooting ou a       ║
║  documentação oficial do Supabase.                       ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

**✅ BOA SORTE!** 🚀

Siga cada passo com atenção e você terá login com Google funcionando perfeitamente!

---

*Última atualização: 05/12/2024*
