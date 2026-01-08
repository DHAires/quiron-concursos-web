# 🚀 GUIA RÁPIDO: CONFIGURAÇÃO DO SUPABASE EM 5 MINUTOS

## ⚡ MÉTODO MAIS RÁPIDO (COPIAR E COLAR)

### **PASSO 1: Abrir SQL Editor** (30 segundos)
1. Ir em: https://supabase.com/dashboard
2. Selecionar projeto Quiron
3. Clicar em: **SQL Editor** (barra lateral esquerda)
4. Clicar em: **New Query**

### **PASSO 2: Executar Script** (2 minutos)
1. Abrir arquivo: **`/supabase-setup-completo.sql`**
2. Copiar **TODO** o conteúdo (Ctrl+A → Ctrl+C)
3. Colar no SQL Editor (Ctrl+V)
4. Clicar em: **"Run"** (ou Ctrl+Enter)
5. Aguardar execução (1-2 minutos)

### **PASSO 3: Verificar Sucesso** (30 segundos)
Procurar no final da saída:
```
✅ SETUP COMPLETO!

🎯 PRÓXIMOS PASSOS:
   1. Testar leitura pública (deve funcionar)
   2. Testar escrita sem admin code (deve retornar 401)
   3. Testar escrita com admin code (deve funcionar)
   4. Executar seed de questões no app (Ctrl+Shift+A)
```

Se viu isso ↑ **ESTÁ PRONTO!** ✅

### **PASSO 4: Executar Seed de Questões** (2 minutos)
1. Abrir aplicativo Quiron (localhost ou produção)
2. Apertar: **`Ctrl + Shift + A`**
3. Digitar código: **`QUIRON_DEV_2024`**
4. Clicar: **"Executar Seed"**
5. Aguardar: "40 questões adicionadas" ✅

### **PASSO 5: Testar** (30 segundos)
1. Ir no menu: **Game Épico**
2. Selecionar área: **Jurídica**
3. Clicar: **Iniciar**
4. Deve carregar questões do banco ✅

---

## 📊 O QUE O SCRIPT FAZ

### ✅ **SEGURANÇA (RLS)**
- Habilita Row Level Security
- Cria 4 políticas:
  - ✅ Leitura pública (todos podem ler)
  - ✅ Insert restrito (só backend)
  - ✅ Update restrito (só backend)
  - ✅ Delete restrito (só backend)

### ⚡ **PERFORMANCE (ÍNDICES)**
- Cria 4 índices:
  - ✅ `idx_kv_store_key` (busca por key)
  - ✅ `idx_kv_store_key_pattern` (busca com LIKE)
  - ✅ `idx_kv_store_created_at` (ordenação por data)
  - ✅ `idx_kv_store_value_gin` (busca em JSON)

### 📊 **VIEWS ÚTEIS**
- Cria 4 views:
  - ✅ `v_game_questions` (listar questões)
  - ✅ `v_game_stats` (estatísticas por área)
  - ✅ `v_user_profiles` (perfis de usuários)
  - ✅ `v_forum_posts` (posts do fórum)

### 🛠️ **FUNÇÕES**
- Cria 3 funções:
  - ✅ `get_questions_by_area(area)` (buscar por área)
  - ✅ `count_by_prefix(prefix)` (contar por prefixo)
  - ✅ `get_system_stats()` (estatísticas do sistema)

### 🧪 **TESTES AUTOMÁTICOS**
- Executa 5 testes:
  - ✅ Verifica RLS habilitado
  - ✅ Verifica 4 políticas criadas
  - ✅ Verifica índices criados
  - ✅ Verifica views criadas
  - ✅ Verifica funções criadas

### 📋 **RELATÓRIO COMPLETO**
- Mostra resumo de tudo criado
- Lista políticas, índices, views e funções
- Mostra estatísticas de dados
- Indica próximos passos

---

## 🎯 ALTERNATIVA: USAR PROMPTS DA IA

Se preferir, pode usar os prompts do arquivo **`/PROMPTS-IA-SUPABASE.md`**:

### **Prompt Principal (copiar e colar):**
```
Configure TUDO de uma vez para o projeto Quiron Concursos na tabela kv_store_50734795.

SETUP COMPLETO:

1. SEGURANÇA:
   ✅ Habilitar RLS
   ✅ 4 políticas (read public, insert/update/delete service_role)

2. PERFORMANCE:
   ✅ Índice em 'key'
   ✅ Índice em 'created_at'
   ✅ Índice GIN em 'value' (jsonb)

3. VIEWS:
   ✅ game_questions
   ✅ user_profiles
   ✅ forum_posts
   ✅ system_stats

4. FUNÇÕES ÚTEIS:
   ✅ get_questions_by_area(area_name)
   ✅ count_by_prefix(prefix)
   ✅ get_system_stats()

5. VALIDAÇÃO:
   ✅ Queries de teste
   ✅ Verificação de permissões
   ✅ Relatório de status

GERE UM ÚNICO SCRIPT SQL QUE EXECUTE TUDO EM ORDEM.
Inclua comentários explicativos.
Trate erros caso algo já exista.
Retorne relatório de sucesso no final.
```

**Onde usar:**
- Supabase SQL Editor
- ChatGPT/Claude (para gerar SQL)
- Copilot/Cursor (para gerar SQL)

---

## ✅ CHECKLIST PÓS-CONFIGURAÇÃO

Após executar o script, verificar:

### **No Supabase Dashboard:**
- [ ] Database → Tables → `kv_store_50734795` → RLS habilitado ✅
- [ ] Database → Tables → `kv_store_50734795` → Policies (4 políticas) ✅
- [ ] Database → Indexes → Ver índices criados (4+) ✅

### **No Aplicativo:**
- [ ] Abrir aplicativo
- [ ] `Ctrl+Shift+A` → Código: `QUIRON_DEV_2024`
- [ ] Executar Seed → 40 questões adicionadas ✅
- [ ] Abrir Game Épico → Selecionar área → Iniciar ✅
- [ ] Questões carregam do banco (não mais mockadas) ✅

### **Testes de Segurança:**
```bash
# Teste 1: Leitura pública (deve funcionar)
curl -H "Authorization: Bearer ${ANON_KEY}" \
  https://${PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/game/questions

# Teste 2: Seed sem código (deve falhar com 401)
curl -X POST \
  -H "Authorization: Bearer ${ANON_KEY}" \
  https://${PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/game/seed

# Teste 3: Seed com código (deve funcionar)
curl -X POST \
  -H "Authorization: Bearer ${ANON_KEY}" \
  -H "X-Admin-Code: QUIRON_DEV_2024" \
  https://${PROJECT_ID}.supabase.co/functions/v1/make-server-50734795/game/seed
```

---

## 🔍 VERIFICAÇÃO VISUAL

### **Ver Políticas RLS:**
```sql
SELECT 
    policyname, 
    cmd as operation,
    CASE 
        WHEN qual IS NOT NULL THEN 'Restrito'
        ELSE 'Público'
    END as access_level
FROM pg_policies
WHERE tablename = 'kv_store_50734795'
ORDER BY cmd;
```

**Resultado esperado:**
```
policyname                          | operation | access_level
------------------------------------|-----------|-------------
public_read_kv_store                | SELECT    | Público
service_role_insert_kv_store        | INSERT    | Restrito
service_role_update_kv_store        | UPDATE    | Restrito
service_role_delete_kv_store        | DELETE    | Restrito
```

### **Ver Índices:**
```sql
SELECT 
    indexname,
    indexdef
FROM pg_indexes
WHERE tablename = 'kv_store_50734795'
AND indexname LIKE 'idx_%'
ORDER BY indexname;
```

### **Ver Estatísticas:**
```sql
SELECT * FROM get_system_stats();
```

**Resultado esperado:**
```
metric              | value
--------------------|-------
total_records       | 40
game_questions      | 40
user_profiles       | 0
forum_posts         | 0
rankings            | 0
```

---

## 🆘 SE ALGO DER ERRADO

### **Erro: "permission denied for table kv_store_50734795"**
**Solução:** Você está usando `anonKey` ao invés de `serviceRoleKey`. Verifique as credenciais.

### **Erro: "policy already exists"**
**Solução:** Políticas já existem. Executar:
```sql
DROP POLICY IF EXISTS public_read_kv_store ON kv_store_50734795;
-- Repetir para outras políticas
```

### **Erro: "RLS is enabled but no policies exist"**
**Solução:** Executar apenas a parte de políticas do script.

### **Erro: "relation kv_store_50734795 does not exist"**
**Solução:** Verificar se o nome da tabela está correto ou se ela foi criada.

### **Questões não aparecem no game**
**Solução:**
1. Verificar se seed foi executado: `SELECT COUNT(*) FROM kv_store_50734795 WHERE key LIKE 'game:questions:%'`
2. Deve retornar `40`
3. Se retornar `0`, executar seed novamente

### **"Admin code required" mesmo com código correto**
**Solução:**
1. Verificar se header `X-Admin-Code` está sendo enviado
2. Verificar console do navegador
3. Ver logs do Edge Function no Supabase

---

## 📁 ARQUIVOS DE REFERÊNCIA

### **Para Configuração Rápida:**
- ✅ `/supabase-setup-completo.sql` ← **USAR ESTE**
- 📚 `/PROMPTS-IA-SUPABASE.md` ← Alternativa

### **Para Entender Detalhes:**
- 📖 `/docs/SUPABASE-RLS-SECURITY.md` ← Guia completo
- 📖 `/RESUMO-DESENVOLVEDOR-PERMISSOES.md` ← Resumo técnico

### **Próximos Passos:**
- 📋 `/ACAO-IMEDIATA.md` ← O que fazer após configurar
- 📋 `/docs/CHECKLIST-PRODUCAO.md` ← Checklist completo

---

## ⏱️ RESUMO DE TEMPO

| Etapa | Tempo | Status |
|-------|-------|--------|
| Abrir SQL Editor | 30 seg | ⚪ Pendente |
| Copiar/colar script | 30 seg | ⚪ Pendente |
| Executar script | 2 min | ⚪ Pendente |
| Verificar sucesso | 30 seg | ⚪ Pendente |
| Executar seed | 2 min | ⚪ Pendente |
| Testar no app | 30 seg | ⚪ Pendente |
| **TOTAL** | **~6 min** | ⚪ Pendente |

---

## 🎉 RESULTADO FINAL

Após concluir, você terá:

✅ **Banco de dados seguro**
- RLS habilitado
- 4 políticas de segurança
- Leitura pública, escrita protegida

✅ **Performance otimizada**
- 4 índices criados
- Queries 10-100x mais rápidas

✅ **Desenvolvimento facilitado**
- 4 views úteis
- 3 funções prontas
- Estatísticas em tempo real

✅ **Dados iniciais**
- 40 questões do game
- 10 por área temática
- Prontas para uso

✅ **Sistema funcionando**
- Game carrega questões do banco
- Admin pode adicionar mais questões
- Segurança validada

---

## 🚀 COMECE AGORA!

**Abra o arquivo `/supabase-setup-completo.sql` e execute no Supabase!**

**Tempo total: 6 minutos ⏱️**

---

**📅 Data:** 31/12/2024  
**✅ Status:** Pronto para execução  
**🏛️ Projeto:** Quiron Concursos  
**🎯 Objetivo:** Banco seguro e performático em 6 minutos
