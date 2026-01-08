# 🤖 PROMPTS PARA IA DO SUPABASE

## 📋 Guia de Uso

Copie e cole estes prompts diretamente no **SQL Editor do Supabase** ou na **AI Assistant** do dashboard.

---

## 🔴 PROMPT 1: CONFIGURAR RLS COMPLETO (MAIS IMPORTANTE)

```
Preciso configurar Row Level Security (RLS) para a tabela kv_store_50734795.

AÇÕES NECESSÁRIAS:

1. Habilitar RLS na tabela kv_store_50734795

2. Criar 4 políticas de segurança:

   a) POLÍTICA DE LEITURA PÚBLICA:
   - Nome: "public_read_kv_store"
   - Operação: SELECT
   - Condição: Permitir para todos (true)

   b) POLÍTICA DE INSERT RESTRITO:
   - Nome: "service_role_insert_kv_store"
   - Operação: INSERT
   - Condição: Apenas service_role pode inserir
   - Validação: auth.jwt() ->> 'role' = 'service_role'

   c) POLÍTICA DE UPDATE RESTRITO:
   - Nome: "service_role_update_kv_store"
   - Operação: UPDATE
   - Condição: Apenas service_role pode atualizar
   - Validação: auth.jwt() ->> 'role' = 'service_role'

   d) POLÍTICA DE DELETE RESTRITO:
   - Nome: "service_role_delete_kv_store"
   - Operação: DELETE
   - Condição: Apenas service_role pode deletar
   - Validação: auth.jwt() ->> 'role' = 'service_role'

RESULTADO ESPERADO:
- RLS habilitado
- 4 políticas ativas
- Leitura pública funciona
- Escrita apenas via backend com service role key

Gere o SQL completo para executar tudo de uma vez.
```

---

## 🟡 PROMPT 2: VERIFICAR CONFIGURAÇÃO DE SEGURANÇA

```
Preciso verificar se a segurança da tabela kv_store_50734795 está configurada corretamente.

VERIFICAÇÕES:

1. Status do RLS:
   - RLS está habilitado?
   - Quais políticas existem?

2. Políticas ativas:
   - Liste todas as políticas da tabela
   - Mostre as condições de cada política
   - Verifique se cobrem: SELECT, INSERT, UPDATE, DELETE

3. Testes de permissão:
   - Gere queries de teste para validar:
     • Leitura com anon key (deve funcionar)
     • Escrita com anon key (deve falhar)
     • Escrita com service_role (deve funcionar)

4. Análise de segurança:
   - Existem brechas de segurança?
   - Alguma política está muito permissiva?
   - Sugestões de melhoria?

Gere um relatório completo de segurança.
```

---

## 🟢 PROMPT 3: CRIAR ÍNDICES DE PERFORMANCE

```
Preciso otimizar a performance da tabela kv_store_50734795 que armazena dados em formato key-value.

PADRÕES DE QUERY MAIS COMUNS:

1. Busca por key exata:
   WHERE key = 'game:questions:jurídica'

2. Busca por prefixo de key:
   WHERE key LIKE 'game:questions:%'

3. Busca por múltiplas keys:
   WHERE key IN ('key1', 'key2', 'key3')

4. Ordenação por created_at:
   ORDER BY created_at DESC

AÇÕES NECESSÁRIAS:

1. Criar índice para coluna 'key' (busca exata e IN)
2. Criar índice para coluna 'key' com padrão LIKE (busca por prefixo)
3. Criar índice para 'created_at' (ordenação)
4. Analisar se GIN index seria útil para busca em JSON (coluna value)

Gere o SQL dos índices mais eficientes sem criar duplicatas.
```

---

## 🔵 PROMPT 4: CONFIGURAR BACKUP AUTOMÁTICO

```
Preciso configurar backup automático para a tabela kv_store_50734795.

REQUISITOS:

1. Criar tabela de backup: kv_store_50734795_backup

2. Criar função de backup que:
   - Copia todos os registros da tabela original
   - Adiciona timestamp do backup
   - Mantém apenas últimos 7 backups
   - Remove backups antigos automaticamente

3. Agendar execução automática:
   - Frequência: Diária (todo dia às 03:00 UTC)
   - Usar pg_cron se disponível

4. Criar função manual de restore:
   - Restaurar do backup mais recente
   - Opção de escolher data específica

Gere o SQL completo com funções e trigger.
```

---

## 🟣 PROMPT 5: CRIAR TRIGGERS DE AUDITORIA

```
Preciso implementar auditoria completa para a tabela kv_store_50734795.

REQUISITOS:

1. Criar tabela de auditoria: kv_store_50734795_audit
   Colunas:
   - id (uuid)
   - operation (INSERT/UPDATE/DELETE)
   - table_name (text)
   - record_id (text)
   - old_data (jsonb)
   - new_data (jsonb)
   - user_id (uuid, nullable)
   - ip_address (text, nullable)
   - timestamp (timestamptz)

2. Criar triggers:
   - AFTER INSERT: registrar novos dados
   - AFTER UPDATE: registrar old_data e new_data
   - AFTER DELETE: registrar dados deletados

3. Criar função de consulta de histórico:
   - Buscar por key específica
   - Ver todas as mudanças de um registro
   - Filtrar por data/usuário/operação

Gere o SQL completo para auditoria.
```

---

## 🟠 PROMPT 6: OTIMIZAR CONSULTAS EXISTENTES

```
Analise e otimize as queries mais comuns da aplicação Quiron Concursos na tabela kv_store_50734795.

QUERIES FREQUENTES:

1. Buscar questões de uma área:
   SELECT * FROM kv_store_50734795 
   WHERE key LIKE 'game:questions:jurídica:%'

2. Buscar perfil de usuário:
   SELECT * FROM kv_store_50734795 
   WHERE key = 'user:profile:' || user_id

3. Buscar rankings:
   SELECT * FROM kv_store_50734795 
   WHERE key LIKE 'ranking:%' 
   ORDER BY value->>'xp' DESC

4. Buscar posts do fórum:
   SELECT * FROM kv_store_50734795 
   WHERE key LIKE 'forum:post:%' 
   ORDER BY created_at DESC 
   LIMIT 50

ANÁLISE NECESSÁRIA:

1. Execute EXPLAIN ANALYZE em cada query
2. Identifique gargalos
3. Sugira índices específicos
4. Reescreva queries se necessário
5. Estime ganho de performance

Gere relatório de otimização completo.
```

---

## 🔴 PROMPT 7: CONFIGURAR RATE LIMITING (IMPORTANTE)

```
Preciso implementar rate limiting no PostgreSQL para proteger a tabela kv_store_50734795 contra abuso.

REQUISITOS:

1. Criar tabela de controle: api_rate_limit
   Colunas:
   - ip_address (text)
   - endpoint (text)
   - request_count (integer)
   - window_start (timestamptz)

2. Implementar limites:
   - Leitura: 100 req/min por IP
   - Escrita: 10 req/min por IP
   - Seed admin: 1 req/hora

3. Criar função de validação:
   - Verificar se IP excedeu limite
   - Resetar contador após janela de tempo
   - Retornar erro se excedido

4. Criar view de monitoramento:
   - IPs mais ativos
   - Endpoints mais requisitados
   - Tentativas bloqueadas

Gere o SQL completo com funções de rate limiting.
```

---

## 🟡 PROMPT 8: MIGRAR DADOS ANTIGOS (SE NECESSÁRIO)

```
Preciso migrar dados mockados do frontend para o backend no Supabase.

CENÁRIO:
- Anteriormente questões estavam hardcoded no frontend
- Agora precisam estar no kv_store_50734795
- Formato das questões: JSON com estrutura específica

ESTRUTURA DE QUESTÃO:
{
  "id": "uuid",
  "area": "jurídica|policial|geral|fiscal",
  "question": "texto da questão",
  "options": ["A", "B", "C", "D"],
  "correctAnswer": "A",
  "explanation": "explicação",
  "difficulty": "fácil|média|difícil",
  "createdAt": "timestamp"
}

AÇÕES:

1. Criar função de importação em lote:
   - Aceitar array de questões JSON
   - Validar estrutura de cada questão
   - Inserir com keys no formato: game:questions:{area}:{id}
   - Retornar relatório (sucesso/erro)

2. Criar função de validação:
   - Verificar duplicatas
   - Validar campos obrigatórios
   - Verificar integridade de dados

3. Criar função de rollback:
   - Desfazer importação se necessário
   - Baseado em timestamp

Gere o SQL completo com funções de migração.
```

---

## 🟢 PROMPT 9: CRIAR VIEWS ÚTEIS

```
Preciso criar views para facilitar consultas comuns na tabela kv_store_50734795.

VIEWS NECESSÁRIAS:

1. VIEW: game_questions
   - Filtrar apenas keys que começam com 'game:questions:'
   - Parse JSON do campo value
   - Colunas: id, area, question, difficulty, created_at
   - Agregar contagem por área

2. VIEW: user_profiles
   - Filtrar apenas keys que começam com 'user:profile:'
   - Parse dados do perfil
   - Colunas: user_id, name, email, xp, level, created_at

3. VIEW: forum_posts_active
   - Filtrar posts do fórum não deletados
   - Ordenar por data (mais recentes)
   - Incluir contagem de respostas
   - Colunas: post_id, title, author, replies_count, created_at

4. VIEW: ranking_global
   - Agregar XP de todos usuários
   - Ordenar por XP (decrescente)
   - Incluir posição no ranking
   - Top 100

5. VIEW: system_stats
   - Total de questões por área
   - Total de usuários ativos
   - Total de posts no fórum
   - Estatísticas gerais

Gere o SQL de todas as views com comentários.
```

---

## 🔵 PROMPT 10: SETUP COMPLETO (TUDO DE UMA VEZ)

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

3. AUDITORIA:
   ✅ Tabela de audit log
   ✅ Triggers para INSERT/UPDATE/DELETE

4. BACKUP:
   ✅ Tabela de backup
   ✅ Função de backup manual
   ✅ Função de restore

5. VIEWS:
   ✅ game_questions
   ✅ user_profiles
   ✅ forum_posts
   ✅ ranking_global
   ✅ system_stats

6. FUNÇÕES ÚTEIS:
   ✅ get_questions_by_area(area_name)
   ✅ get_user_rank(user_id)
   ✅ get_system_health()

7. VALIDAÇÃO:
   ✅ Queries de teste
   ✅ Verificação de permissões
   ✅ Relatório de status

GERE UM ÚNICO SCRIPT SQL QUE EXECUTE TUDO EM ORDEM.
Inclua comentários explicativos.
Trate erros caso algo já exista.
Retorne relatório de sucesso no final.
```

---

## 🚀 PROMPT BÔNUS: ANÁLISE DE SAÚDE DO BANCO

```
Faça uma análise completa de saúde do banco de dados do projeto Quiron Concursos.

VERIFICAR:

1. Estrutura:
   - Tabelas existentes
   - Colunas e tipos
   - Restrições e chaves

2. Segurança:
   - RLS habilitado onde necessário
   - Políticas configuradas
   - Permissões corretas

3. Performance:
   - Índices criados
   - Queries lentas (pg_stat_statements)
   - Tabelas grandes (tamanho)
   - Fragmentação

4. Integridade:
   - Dados órfãos
   - Inconsistências
   - Valores nulos inesperados

5. Uso de recursos:
   - Conexões ativas
   - Memória utilizada
   - Espaço em disco

6. Recomendações:
   - Otimizações necessárias
   - Mudanças de schema
   - Manutenção requerida

Gere relatório completo de saúde do banco.
```

---

## 📋 COMO USAR ESTES PROMPTS

### **Opção 1: SQL Editor (Recomendado)**

1. Supabase Dashboard → **SQL Editor**
2. New Query
3. Copiar/colar o prompt desejado
4. Clicar em **"Run"**
5. Verificar resultados

### **Opção 2: AI Assistant (se disponível)**

1. Supabase Dashboard → Procurar ícone **AI/Chat**
2. Colar o prompt
3. Aguardar resposta da IA
4. Copiar SQL gerado
5. Executar no SQL Editor

### **Opção 3: CLI do Supabase**

```bash
# Instalar CLI
npm install -g supabase

# Login
supabase login

# Executar SQL
supabase db execute --file script.sql
```

---

## ⚡ ORDEM RECOMENDADA DE EXECUÇÃO

### **🔴 URGENTE (Fazer HOJE):**
1. ✅ **PROMPT 1** - Configurar RLS (CRÍTICO!)
2. ✅ **PROMPT 2** - Verificar segurança

### **🟡 IMPORTANTE (Esta semana):**
3. ✅ **PROMPT 3** - Criar índices
4. ✅ **PROMPT 9** - Criar views úteis

### **🟢 RECOMENDADO (Próxima semana):**
5. ✅ **PROMPT 5** - Triggers de auditoria
6. ✅ **PROMPT 7** - Rate limiting
7. ✅ **PROMPT 4** - Backup automático

### **⚪ OPCIONAL:**
8. ⚪ **PROMPT 6** - Otimização de queries
9. ⚪ **PROMPT 8** - Migração (se necessário)
10. ⚪ **PROMPT BÔNUS** - Análise de saúde

---

## 💡 DICAS IMPORTANTES

### **✅ ANTES DE EXECUTAR:**
- Fazer backup manual do banco
- Testar em ambiente de desenvolvimento primeiro
- Ler o SQL gerado antes de executar

### **✅ DURANTE EXECUÇÃO:**
- Executar um prompt por vez
- Verificar mensagens de erro
- Salvar logs de execução

### **✅ APÓS EXECUÇÃO:**
- Testar funcionalidades no app
- Verificar performance
- Monitorar logs por 24h

---

## 🔥 PROMPT SUPER RÁPIDO (1 MINUTO)

Se você tem pressa e quer fazer só o essencial:

```sql
-- SETUP ESSENCIAL QUIRON CONCURSOS
-- Copie e cole tudo de uma vez no SQL Editor

-- 1. Habilitar RLS
ALTER TABLE kv_store_50734795 ENABLE ROW LEVEL SECURITY;

-- 2. Política de leitura pública
CREATE POLICY "public_read_kv_store" ON kv_store_50734795
FOR SELECT USING (true);

-- 3. Política de insert restrito
CREATE POLICY "service_role_insert_kv_store" ON kv_store_50734795
FOR INSERT WITH CHECK (auth.jwt() ->> 'role' = 'service_role');

-- 4. Política de update restrito
CREATE POLICY "service_role_update_kv_store" ON kv_store_50734795
FOR UPDATE USING (auth.jwt() ->> 'role' = 'service_role');

-- 5. Política de delete restrito
CREATE POLICY "service_role_delete_kv_store" ON kv_store_50734795
FOR DELETE USING (auth.jwt() ->> 'role' = 'service_role');

-- 6. Índices básicos
CREATE INDEX IF NOT EXISTS idx_kv_key ON kv_store_50734795(key);
CREATE INDEX IF NOT EXISTS idx_kv_created ON kv_store_50734795(created_at DESC);

-- 7. Verificação
SELECT 
  'RLS Enabled' as status,
  COUNT(*) as policies_count
FROM pg_policies 
WHERE tablename = 'kv_store_50734795';

-- ✅ PRONTO! Seu banco está seguro e otimizado!
```

---

## 📊 CHECKLIST PÓS-EXECUÇÃO

Depois de executar os prompts, verificar:

- [ ] RLS habilitado (4 políticas ativas)
- [ ] Índices criados (mínimo 2)
- [ ] Leitura pública funciona
- [ ] Escrita sem admin code retorna 401
- [ ] Escrita com admin code funciona
- [ ] Performance melhorou (testar consultas)
- [ ] Auditoria funcionando (se configurada)
- [ ] Backup disponível (se configurado)

---

## 🆘 SE ALGO DER ERRADO

### **Erro: "permission denied"**
```sql
-- Verificar se você está usando service_role key
SELECT current_user, current_role;
```

### **Erro: "policy already exists"**
```sql
-- Deletar políticas existentes
DROP POLICY IF EXISTS nome_da_policy ON kv_store_50734795;
```

### **Erro: "RLS já habilitado"**
```sql
-- Verificar status do RLS
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'kv_store_50734795';
```

### **Restaurar tudo (EMERGÊNCIA):**
```sql
-- Desabilitar RLS
ALTER TABLE kv_store_50734795 DISABLE ROW LEVEL SECURITY;

-- Remover todas as políticas
DROP POLICY IF EXISTS public_read_kv_store ON kv_store_50734795;
DROP POLICY IF EXISTS service_role_insert_kv_store ON kv_store_50734795;
DROP POLICY IF EXISTS service_role_update_kv_store ON kv_store_50734795;
DROP POLICY IF EXISTS service_role_delete_kv_store ON kv_store_50734795;

-- Recomeçar do zero
```

---

**🎯 Use o PROMPT 1 primeiro (RLS) e depois PROMPT 2 (verificação)!**

**📁 Salve este arquivo para referência futura!**

**Data:** 31/12/2024  
**Versão:** 1.0  
**Projeto:** Quiron Concursos 🏛️
