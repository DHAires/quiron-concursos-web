# 🔒 Políticas de Segurança e RLS - Quiron Concursos

## ⚠️ IMPORTANTE: Configuração de Políticas no Supabase

Este documento explica as políticas de segurança (RLS - Row Level Security) que devem ser configuradas no Supabase para proteger os dados do aplicativo Quiron Concursos.

---

## 📋 CONTEXTO

### O Que é RLS (Row Level Security)?

**RLS (Row Level Security)** é um sistema de segurança do PostgreSQL/Supabase que controla quem pode ler, criar, atualizar ou deletar linhas específicas de uma tabela.

**Por que precisamos?**

No momento, **QUALQUER PESSOA** com a `publicAnonKey` pode:
- ✅ Ler dados do KV Store
- ❌ **NÃO DEVERIA**: Criar/modificar questões do game
- ❌ **NÃO DEVERIA**: Deletar dados importantes
- ❌ **NÃO DEVERIA**: Manipular dados de usuários

---

## 🎯 ESTRATÉGIA DE SEGURANÇA

### Stack de Segurança do Quiron:

```
┌─────────────────────────────────────────┐
│  Frontend (React)                       │
│  - publicAnonKey (leitura pública)      │
│  - Access Token (usuário autenticado)   │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Supabase Edge Function (Backend)       │
│  - Validação de código admin            │
│  - serviceRoleKey (admin total)         │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│  Supabase Database (PostgreSQL)         │
│  - RLS Policies (controle de acesso)    │
│  - Tabela: kv_store_50734795            │
└─────────────────────────────────────────┘
```

---

## 🛡️ POLÍTICAS RLS RECOMENDADAS

### Tabela: `kv_store_50734795`

#### **Política 1: Leitura Pública**
```sql
-- Nome: "Public Read Access"
-- Descrição: Qualquer pessoa pode LER dados públicos
-- Operação: SELECT

CREATE POLICY "public_read_kv_store"
ON kv_store_50734795
FOR SELECT
USING (
  -- Permitir leitura pública para chaves que NÃO sejam de questões do game
  key NOT LIKE 'game_question:%' 
  OR 
  -- OU para questões do game (são públicas para jogar)
  key LIKE 'game_question:%'
);
```

**Resumo**: Todos podem ler. Questões do game são públicas para jogadores.

---

#### **Política 2: Apenas Service Role pode INSERIR**
```sql
-- Nome: "Service Role Insert Only"
-- Descrição: Apenas backend com serviceRoleKey pode criar dados
-- Operação: INSERT

CREATE POLICY "service_role_insert_kv_store"
ON kv_store_50734795
FOR INSERT
WITH CHECK (
  -- Apenas service role (bypass RLS)
  auth.jwt() ->> 'role' = 'service_role'
);
```

**Resumo**: Frontend **NÃO PODE** criar dados. Só o backend.

---

#### **Política 3: Apenas Service Role pode ATUALIZAR**
```sql
-- Nome: "Service Role Update Only"
-- Descrição: Apenas backend pode modificar dados
-- Operação: UPDATE

CREATE POLICY "service_role_update_kv_store"
ON kv_store_50734795
FOR UPDATE
USING (
  auth.jwt() ->> 'role' = 'service_role'
);
```

**Resumo**: Frontend **NÃO PODE** atualizar. Só o backend.

---

#### **Política 4: Apenas Service Role pode DELETAR**
```sql
-- Nome: "Service Role Delete Only"
-- Descrição: Apenas backend pode deletar dados
-- Operação: DELETE

CREATE POLICY "service_role_delete_kv_store"
ON kv_store_50734795
FOR DELETE
USING (
  auth.jwt() ->> 'role' = 'service_role'
);
```

**Resumo**: Frontend **NÃO PODE** deletar nada. Só o backend.

---

## ⚙️ COMO CONFIGURAR NO SUPABASE

### **Passo 1: Acessar o Dashboard do Supabase**

1. Vá para: https://supabase.com/dashboard
2. Selecione seu projeto Quiron Concursos
3. Navegue para: **Database** → **Tables** → `kv_store_50734795`

### **Passo 2: Habilitar RLS**

1. Clique na tabela `kv_store_50734795`
2. Vá para a aba **"Policies"** (Políticas)
3. Clique em **"Enable RLS"** (Habilitar RLS)

⚠️ **ATENÇÃO**: Ao habilitar RLS, TODAS as operações serão bloqueadas por padrão!

### **Passo 3: Criar as Políticas**

1. Clique em **"New Policy"** (Nova Política)
2. Escolha **"For full customization"** (Personalização completa)
3. Cole cada SQL das políticas acima
4. Clique em **"Review"** → **"Save Policy"**

Repita para todas as 4 políticas:
- ✅ Public Read Access
- ✅ Service Role Insert Only
- ✅ Service Role Update Only
- ✅ Service Role Delete Only

---

## 🔐 CAMADA ADICIONAL: Validação de Código Admin

Além do RLS, o backend possui validação de código secreto para rotas sensíveis.

### **Código Secreto**: `QUIRON_DEV_2024`

### **Rotas Protegidas com Código Admin:**

```typescript
// game_routes.tsx

// ❌ SEM autenticação admin (público)
GET  /game/questions              → Lista todas
GET  /game/questions/area/:area   → Filtra por área
GET  /game/questions/random/:area → Questão aleatória

// ✅ COM autenticação admin (requer código)
POST   /game/questions/seed       → Seed de questões
DELETE /game/questions/all        → Limpa banco
POST   /game/questions            → Cria questão
PUT    /game/questions/:id        → Atualiza questão
DELETE /game/questions/:id        → Deleta questão
```

### **Como Funciona:**

1. Desenvolvedor aperta **Ctrl+Shift+A** no frontend
2. Sistema exibe o `AdminGate` pedindo código secreto
3. Desenvolvedor digita: `QUIRON_DEV_2024`
4. Frontend recebe autorização temporária
5. Hook `useGameQuestions` adiciona header especial:
   ```typescript
   headers: {
     'X-Admin-Code': 'QUIRON_DEV_2024'
   }
   ```
6. Backend valida o código antes de executar operação sensível

---

## 📊 TABELA DE PERMISSÕES

| Operação | Usuário Comum | Usuário Autenticado | Admin (serviceRole) | Frontend (publicAnonKey) |
|----------|---------------|---------------------|---------------------|--------------------------|
| **Ler questões do game** | ✅ | ✅ | ✅ | ✅ |
| **Ler dados públicos** | ✅ | ✅ | ✅ | ✅ |
| **Criar questões** | ❌ | ❌ | ✅ (via backend) | ❌ |
| **Atualizar questões** | ❌ | ❌ | ✅ (via backend) | ❌ |
| **Deletar questões** | ❌ | ❌ | ✅ (via backend) | ❌ |
| **Seed de questões** | ❌ | ❌ | ✅ (via backend) | ❌ |
| **Limpar banco** | ❌ | ❌ | ✅ (via backend) | ❌ |

---

## 🚨 CENÁRIOS DE SEGURANÇA

### **Cenário 1: Usuário Mal-Intencionado Tenta Deletar Questões**

**Ataque:**
```bash
curl -X DELETE \
  -H "Authorization: Bearer ${publicAnonKey}" \
  https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions/abc123
```

**Defesa (Camada 1 - Backend):**
```typescript
// game_routes.tsx valida código admin
if (!isAdminRequest(c)) {
  return c.json({ error: 'Unauthorized - Admin code required' }, 401);
}
```

**Defesa (Camada 2 - RLS):**
```sql
-- Política RLS bloqueia DELETE se não for service_role
auth.jwt() ->> 'role' = 'service_role'  // ❌ FALSO para publicAnonKey
```

**Resultado**: ❌ Ataque bloqueado!

---

### **Cenário 2: Desenvolvedor Legítimo Executando Seed**

**Fluxo:**
1. Desenvolvedor aperta **Ctrl+Shift+A**
2. Digita código: `QUIRON_DEV_2024`
3. Frontend envia:
   ```typescript
   POST /game/questions/seed
   Headers: {
     'Authorization': 'Bearer ${publicAnonKey}',
     'X-Admin-Code': 'QUIRON_DEV_2024'
   }
   ```
4. Backend valida código admin ✅
5. Backend usa `serviceRoleKey` para inserir no banco ✅
6. RLS permite porque é `service_role` ✅

**Resultado**: ✅ Seed executado com sucesso!

---

## 🔄 FLUXO COMPLETO DE SEGURANÇA

```
┌─────────────────────────────────────────────────────┐
│ Frontend                                            │
│                                                     │
│ [Ctrl+Shift+A] → AdminGate → Código QUIRON_DEV_2024│
│                       ↓                             │
│          useGameQuestions.seedQuestions()           │
│                       ↓                             │
│    fetch('/game/questions/seed', {                  │
│      headers: { 'X-Admin-Code': 'QUIRON_DEV_2024' } │
│    })                                               │
└───────────────────────┬─────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│ Backend (Edge Function)                             │
│                                                     │
│ ❓ Valida X-Admin-Code === 'QUIRON_DEV_2024'       │
│    ├─ ❌ Inválido → 401 Unauthorized                │
│    └─ ✅ Válido → Continua                          │
│                       ↓                             │
│    createClient(SUPABASE_URL, SERVICE_ROLE_KEY)     │
│                       ↓                             │
│    await kv.set('game_question:123', data)          │
└───────────────────────┬─────────────────────────────┘
                        │
                        ▼
┌─────────────────────────────────────────────────────┐
│ Database (PostgreSQL + RLS)                         │
│                                                     │
│ ❓ Valida auth.jwt() role === 'service_role'        │
│    ├─ ❌ Não é service_role → Bloqueado             │
│    └─ ✅ É service_role → Permitido                 │
│                       ↓                             │
│    INSERT INTO kv_store_50734795 ...                │
│                       ↓                             │
│                   ✅ Sucesso!                        │
└─────────────────────────────────────────────────────┘
```

---

## 🎓 BOAS PRÁTICAS

### ✅ FAÇA:

1. **Sempre use RLS em produção**
2. **Nunca exponha `serviceRoleKey` no frontend**
3. **Valide operações sensíveis com código admin**
4. **Registre todas operações admin em logs**
5. **Use HTTPS sempre**
6. **Rotacione códigos secretos periodicamente**

### ❌ NÃO FAÇA:

1. ❌ Não desabilite RLS "porque está dando erro"
2. ❌ Não use `serviceRoleKey` no React
3. ❌ Não compartilhe códigos admin publicamente
4. ❌ Não permita criação/deleção direto do frontend
5. ❌ Não confie apenas em validações do frontend

---

## 🧪 COMO TESTAR A SEGURANÇA

### **Teste 1: Leitura Pública (Deve Funcionar)**

```bash
curl -H "Authorization: Bearer ${publicAnonKey}" \
  https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions
```

**Esperado**: ✅ 200 OK com lista de questões

---

### **Teste 2: Seed sem Código Admin (Deve Falhar)**

```bash
curl -X POST \
  -H "Authorization: Bearer ${publicAnonKey}" \
  https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions/seed
```

**Esperado**: ❌ 401 Unauthorized

---

### **Teste 3: Seed com Código Admin (Deve Funcionar)**

```bash
curl -X POST \
  -H "Authorization: Bearer ${publicAnonKey}" \
  -H "X-Admin-Code: QUIRON_DEV_2024" \
  -H "Content-Type: application/json" \
  -d '{"questions": [...]}' \
  https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions/seed
```

**Esperado**: ✅ 200 OK com confirmação

---

## 📞 SUPORTE

Se encontrar problemas com RLS:

1. **Verifique os logs do Supabase**: Dashboard → Logs → Database
2. **Teste as políticas individualmente**: Desabilite uma por vez
3. **Confirme que RLS está habilitado**: Table → Policies → "RLS enabled"
4. **Valide que está usando a chave correta**:
   - Frontend: `publicAnonKey`
   - Backend: `serviceRoleKey`

---

## 🎯 CHECKLIST FINAL

Antes de colocar em produção:

- [ ] RLS habilitado na tabela `kv_store_50734795`
- [ ] 4 políticas RLS criadas e ativas
- [ ] Código admin configurado no backend
- [ ] `serviceRoleKey` NUNCA exposta no frontend
- [ ] Testes de segurança passando
- [ ] Logs de auditoria configurados
- [ ] Documentação lida pela equipe

---

**Data da documentação**: 31 de Dezembro de 2024  
**Autor**: IA Assistant (Claude)  
**Status**: ✅ Pronto para implementação

---

## 🔗 LINKS ÚTEIS

- [Supabase RLS Documentation](https://supabase.com/docs/guides/auth/row-level-security)
- [PostgreSQL RLS](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [Supabase Security Best Practices](https://supabase.com/docs/guides/security/best-practices)

---

**🛡️ A segurança dos dados dos concurseiros é nossa prioridade!**
