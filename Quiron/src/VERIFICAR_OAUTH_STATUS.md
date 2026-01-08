# 🔍 VERIFICAR STATUS DO GOOGLE OAUTH

## Como verificar se a configuração está correta

---

## ✅ CHECKLIST RÁPIDO

Execute estas verificações para garantir que tudo está configurado:

### **1. Google Cloud Console**

```bash
# Acesse: https://console.cloud.google.com

✅ Projeto criado?
   → Deve aparecer "Quiron Concursos" no topo

✅ Google+ API habilitada?
   → APIs & Services → Library → Google+ API
   → Deve mostrar "API enabled"

✅ OAuth Client criado?
   → APIs & Services → Credentials
   → Deve ter um "Web client" listado

✅ Redirect URI configurada?
   → Clicar no OAuth Client
   → Em "Authorized redirect URIs" deve ter:
     https://SEU_PROJECT_ID.supabase.co/auth/v1/callback
```

---

### **2. Supabase Dashboard**

```bash
# Acesse: https://app.supabase.com

✅ Google Provider habilitado?
   → Authentication → Providers → Google
   → Toggle deve estar VERDE (ON)

✅ Client ID preenchido?
   → Deve ter formato:
     123456789-abc...xyz.apps.googleusercontent.com

✅ Client Secret preenchido?
   → Deve ter formato:
     GOCSPX-abc...xyz

✅ Callback URL correta?
   → Deve mostrar:
     https://SEU_PROJECT_ID.supabase.co/auth/v1/callback
```

---

### **3. Código da Aplicação**

```bash
# Arquivo: /components/LoginModal.tsx

✅ Supabase client criado?
   → Deve ter:
     const supabase = createClient(...)

✅ Função handleGoogleLogin existe?
   → Deve chamar:
     supabase.auth.signInWithOAuth({ provider: 'google' })

✅ Botão Google renderizado?
   → Deve ter elemento:
     <button onClick={handleGoogleLogin}>
       Entrar com Google
     </button>
```

```bash
# Arquivo: /components/RegisterModal.tsx

✅ Mesmas verificações do LoginModal
```

---

## 🧪 TESTE MANUAL

### **Passo 1: Verificar visualmente**

```bash
# 1. Rodar app
npm run dev

# 2. Abrir navegador
http://localhost:5173

# 3. Verificar tela de login
✅ Botão "Entrar com Google" aparece?
✅ Logo do Google está colorido (4 cores)?
✅ Botão é branco com texto cinza?
✅ Divisor "ou" aparece entre botões?
```

---

### **Passo 2: Testar clique (sem OAuth configurado)**

```bash
# 1. Clicar em "Entrar com Google"

# 2. Abrir Console do navegador (F12)

# 3. Verificar erro:
❌ "provider is not enabled"
   → NORMAL se não configurou OAuth ainda
   → PROBLEMA se já configurou

✅ Se não der erro e abrir popup do Google:
   → OAuth está configurado! 🎉
```

---

### **Passo 3: Testar login completo**

```bash
# 1. Clicar em "Entrar com Google"

# 2. Popup do Google abre

# 3. Selecionar conta

# 4. Aceitar permissões

# 5. Verificar:
✅ Popup fecha automaticamente?
✅ Você está logado no app?
✅ Dashboard aparece?
✅ Nome/foto do Google aparecem?
```

---

## 🔍 INSPEÇÃO DETALHADA

### **Verificar Client ID e Secret**

```bash
# Google Cloud Console
1. APIs & Services → Credentials
2. Clicar no OAuth 2.0 Client ID criado
3. Copiar "Client ID" e "Client secret"

# Supabase Dashboard
4. Authentication → Providers → Google
5. Comparar Client ID e Secret
6. DEVEM SER IDÊNTICOS
```

---

### **Verificar Redirect URI**

```bash
# Supabase - Copiar callback URL
1. Authentication → Providers → Google
2. Copiar "Callback URL (for OAuth)"
   Exemplo: https://xyzabc123.supabase.co/auth/v1/callback

# Google Cloud Console - Verificar se está cadastrada
3. APIs & Services → Credentials
4. Clicar no OAuth Client
5. Em "Authorized redirect URIs"
6. A URL do Supabase DEVE ESTAR na lista
```

---

### **Verificar JavaScript Origins**

```bash
# Google Cloud Console
1. APIs & Services → Credentials
2. Clicar no OAuth Client
3. Em "Authorized JavaScript origins"
4. Deve ter:
   ✅ http://localhost:5173 (para desenvolvimento)
   ✅ https://seu-dominio.com (para produção, se tiver)
```

---

## 🐛 DEBUG NO NAVEGADOR

### **Console do Navegador (F12)**

```javascript
// 1. Abrir Console (F12 → Console)

// 2. Verificar se Supabase está carregado
console.log(window.supabase) 
// Deve mostrar objeto do Supabase

// 3. Testar função de login manualmente
// (No console, colar e executar:)

const { createClient } = await import('@supabase/supabase-js');
const supabase = createClient(
  'https://SEU_PROJECT_ID.supabase.co',
  'SUA_ANON_KEY'
);

const { data, error } = await supabase.auth.signInWithOAuth({
  provider: 'google'
});

console.log('Data:', data);
console.log('Error:', error);
```

**Resultados esperados:**

```javascript
// Se configurado corretamente:
Data: { provider: 'google', url: 'https://accounts.google.com/...' }
Error: null

// Se NÃO configurado:
Data: null
Error: { message: 'provider is not enabled' }
```

---

## 📊 NETWORK TAB (Requisições)

```bash
# 1. Abrir DevTools (F12)
# 2. Ir para aba "Network"
# 3. Clicar em "Entrar com Google"
# 4. Verificar requisições:

✅ Deve ter requisição para:
   https://SEU_PROJECT_ID.supabase.co/auth/v1/authorize

✅ Status: 302 (Redirect)

✅ Deve redirecionar para:
   https://accounts.google.com/o/oauth2/v2/auth

✅ URL deve conter parâmetros:
   - client_id=123...xyz.apps.googleusercontent.com
   - redirect_uri=https://SEU_PROJECT_ID.supabase.co/auth/v1/callback
   - scope=openid email profile
```

---

## 🎯 DIAGNÓSTICO DE ERROS

### **Erro 1: "provider is not enabled"**

```
CAUSA: Google não está habilitado no Supabase

VERIFICAR:
1. Supabase → Authentication → Providers → Google
2. Toggle está ON (verde)?
3. Client ID está preenchido?
4. Client Secret está preenchido?
5. Clicou em "Save"?

SOLUÇÃO:
→ Habilitar toggle
→ Preencher credenciais
→ Salvar
```

---

### **Erro 2: "redirect_uri_mismatch"**

```
CAUSA: Callback URL não autorizada no Google

VERIFICAR:
1. Qual URL está sendo usada?
   → Ver no erro: "redirect_uri=..."

2. Essa URL está no Google Cloud Console?
   → Credentials → OAuth Client → Redirect URIs

SOLUÇÃO:
→ Adicionar a URL exata no Google Cloud Console
→ Salvar
→ Aguardar 1-2 minutos (propagação)
→ Testar novamente
```

---

### **Erro 3: "invalid_client"**

```
CAUSA: Client ID ou Secret incorretos

VERIFICAR:
1. Google Cloud Console:
   → Copiar Client ID e Secret NOVAMENTE

2. Supabase Dashboard:
   → Colar novamente (com cuidado)
   → Sem espaços extras
   → Completos (não cortados)

3. Comparar caractere por caractere

SOLUÇÃO:
→ Recopiar credenciais
→ Recolar no Supabase
→ Salvar
```

---

### **Erro 4: "access_denied"**

```
CAUSA: Usuário negou permissão OU app não verificado

VERIFICAR:
1. Usuário clicou em "Negar"?
   → Tentar novamente e clicar "Permitir"

2. Google mostra "App não verificado"?
   → Normal em desenvolvimento
   → Clicar em "Avançado"
   → Clicar em "Ir para Quiron Concursos (não seguro)"

SOLUÇÃO:
→ Aceitar permissões
→ Em produção, verificar app com Google
```

---

## 📱 TESTE EM DIFERENTES CENÁRIOS

### **Cenário 1: Primeiro Login**

```bash
1. Usuário nunca fez login antes
2. Clicar "Entrar com Google"
3. Selecionar conta Google
4. Aceitar permissões

ESPERADO:
✅ Conta criada no Supabase
✅ Usuário logado
✅ Redirecionado para dashboard
```

---

### **Cenário 2: Login Recorrente**

```bash
1. Usuário já fez login antes
2. Clicar "Entrar com Google"
3. Selecionar conta

ESPERADO:
✅ Não pede permissões novamente
✅ Login automático
✅ Redirecionado imediatamente
```

---

### **Cenário 3: Múltiplas Contas**

```bash
1. Usuário tem várias contas Google
2. Clicar "Entrar com Google"
3. Escolher conta diferente

ESPERADO:
✅ Pode alternar entre contas
✅ Cada conta cria usuário separado
✅ Login funciona para todas
```

---

## 🔐 VERIFICAR DADOS DO USUÁRIO

### **No Supabase Dashboard**

```bash
1. Ir para: Authentication → Users

2. Após login com Google, deve aparecer:
   ┌─────────────────────────────────────────┐
   │ Email: usuario@gmail.com                │
   │ Provider: google                        │
   │ Created: [timestamp]                    │
   │ Last Sign In: [timestamp]               │
   └─────────────────────────────────────────┘

3. Clicar no usuário para ver detalhes:
   {
     "email": "usuario@gmail.com",
     "user_metadata": {
       "full_name": "Nome Usuário",
       "avatar_url": "https://lh3.googleusercontent.com/...",
       "email_verified": true
     }
   }
```

---

### **No Código (Console)**

```javascript
// Após login, verificar sessão:
const { data: { session } } = await supabase.auth.getSession();
console.log('Sessão:', session);

// Deve mostrar:
{
  access_token: "eyJ...",
  user: {
    id: "uuid-do-usuario",
    email: "usuario@gmail.com",
    user_metadata: {
      full_name: "Nome Usuário",
      avatar_url: "https://...",
    }
  }
}
```

---

## ✅ TUDO ESTÁ FUNCIONANDO SE:

```
✅ Botão "Entrar com Google" aparece
✅ Ao clicar, popup do Google abre
✅ Pode selecionar conta
✅ Após selecionar, popup fecha
✅ Usuário está logado no app
✅ Dashboard aparece
✅ Nome/foto do Google aparecem (se implementado)
✅ No Supabase, usuário aparece em Authentication → Users
✅ Provider do usuário é "google"
✅ Pode fazer logout e login novamente
```

---

## 🎓 COMANDOS ÚTEIS

### **Verificar Configuração Local**

```bash
# Ver variáveis de ambiente
cat .env

# Deve conter:
VITE_SUPABASE_URL=https://SEU_PROJECT_ID.supabase.co
VITE_SUPABASE_ANON_KEY=eyJ...
```

---

### **Limpar Cache do Navegador**

```bash
# Chrome/Edge
Ctrl + Shift + Delete
→ Marcar "Cookies" e "Cache"
→ Período: "Todo o período"
→ Limpar dados

# Ou modo anônimo
Ctrl + Shift + N
```

---

### **Verificar Logs do Supabase**

```bash
# Supabase Dashboard
1. Ir para: Logs → Auth Logs
2. Filtrar por "google"
3. Ver erros de autenticação
```

---

## 📞 SUPORTE

Se após todas as verificações ainda tiver problemas:

```
1. Documentação Supabase:
   https://supabase.com/docs/guides/auth/social-login/auth-google

2. Supabase Discord:
   https://discord.supabase.com

3. Stack Overflow:
   [supabase] [google-oauth]
```

---

## ✅ CONCLUSÃO

```
╔══════════════════════════════════════════════════════════╗
║      🔍 GUIA DE VERIFICAÇÃO COMPLETO 🔍                  ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║  Use este guia para verificar se o Google OAuth está    ║
║  configurado corretamente em cada etapa.                 ║
║                                                          ║
║  Siga as verificações na ordem e identifique onde       ║
║  está o problema caso algo não funcione.                 ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

**✅ BOA SORTE!** 🔍

---

*Última atualização: 05/12/2024*
