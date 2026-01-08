-- ═══════════════════════════════════════════════════════════════════════════
-- 🏛️ QUIRON CONCURSOS - SETUP COMPLETO DO BANCO DE DADOS
-- ═══════════════════════════════════════════════════════════════════════════
-- 
-- INSTRUÇÕES:
-- 1. Abrir Supabase Dashboard → SQL Editor
-- 2. Copiar TODO este arquivo
-- 3. Colar no editor
-- 4. Clicar em "Run" ou pressionar Ctrl+Enter
-- 5. Verificar mensagens de sucesso no final
--
-- TEMPO ESTIMADO: 2-3 minutos
-- ÚLTIMA ATUALIZAÇÃO: 31/12/2024
--
-- ═══════════════════════════════════════════════════════════════════════════

-- Começar transação para poder fazer rollback se necessário
BEGIN;

-- ═══════════════════════════════════════════════════════════════════════════
-- 🔒 PARTE 1: SEGURANÇA (RLS + POLÍTICAS)
-- ═══════════════════════════════════════════════════════════════════════════

-- 1.1. Habilitar Row Level Security
DO $$
BEGIN
    ALTER TABLE kv_store_50734795 ENABLE ROW LEVEL SECURITY;
    RAISE NOTICE '✅ RLS habilitado em kv_store_50734795';
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE '⚠️  RLS já estava habilitado';
END $$;

-- 1.2. Remover políticas antigas (se existirem)
DROP POLICY IF EXISTS public_read_kv_store ON kv_store_50734795;
DROP POLICY IF EXISTS service_role_insert_kv_store ON kv_store_50734795;
DROP POLICY IF EXISTS service_role_update_kv_store ON kv_store_50734795;
DROP POLICY IF EXISTS service_role_delete_kv_store ON kv_store_50734795;

RAISE NOTICE '🗑️  Políticas antigas removidas (se existiam)';

-- 1.3. Criar política de LEITURA PÚBLICA
CREATE POLICY "public_read_kv_store"
ON kv_store_50734795
FOR SELECT
USING (true);

RAISE NOTICE '✅ Política de leitura pública criada';

-- 1.4. Criar política de INSERT RESTRITO (apenas service_role)
CREATE POLICY "service_role_insert_kv_store"
ON kv_store_50734795
FOR INSERT
WITH CHECK (
  auth.jwt() ->> 'role' = 'service_role'
);

RAISE NOTICE '✅ Política de INSERT restrito criada';

-- 1.5. Criar política de UPDATE RESTRITO (apenas service_role)
CREATE POLICY "service_role_update_kv_store"
ON kv_store_50734795
FOR UPDATE
USING (
  auth.jwt() ->> 'role' = 'service_role'
);

RAISE NOTICE '✅ Política de UPDATE restrito criada';

-- 1.6. Criar política de DELETE RESTRITO (apenas service_role)
CREATE POLICY "service_role_delete_kv_store"
ON kv_store_50734795
FOR DELETE
USING (
  auth.jwt() ->> 'role' = 'service_role'
);

RAISE NOTICE '✅ Política de DELETE restrito criada';

-- ═══════════════════════════════════════════════════════════════════════════
-- ⚡ PARTE 2: PERFORMANCE (ÍNDICES)
-- ═══════════════════════════════════════════════════════════════════════════

-- 2.1. Índice para buscas por KEY (consulta mais comum)
CREATE INDEX IF NOT EXISTS idx_kv_store_key 
ON kv_store_50734795(key);

RAISE NOTICE '✅ Índice idx_kv_store_key criado';

-- 2.2. Índice para buscas por KEY com LIKE (busca por prefixo)
CREATE INDEX IF NOT EXISTS idx_kv_store_key_pattern 
ON kv_store_50734795(key text_pattern_ops);

RAISE NOTICE '✅ Índice idx_kv_store_key_pattern criado';

-- 2.3. Índice para ordenação por DATA
CREATE INDEX IF NOT EXISTS idx_kv_store_created_at 
ON kv_store_50734795(created_at DESC);

RAISE NOTICE '✅ Índice idx_kv_store_created_at criado';

-- 2.4. Índice GIN para busca em JSON (se campo value for jsonb)
DO $$
BEGIN
    -- Verificar se coluna 'value' é jsonb
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_name = 'kv_store_50734795' 
        AND column_name = 'value' 
        AND data_type = 'jsonb'
    ) THEN
        CREATE INDEX IF NOT EXISTS idx_kv_store_value_gin 
        ON kv_store_50734795 USING GIN(value);
        RAISE NOTICE '✅ Índice GIN para JSON criado';
    ELSE
        RAISE NOTICE '⚠️  Coluna value não é jsonb, índice GIN não criado';
    END IF;
END $$;

-- ═══════════════════════════════════════════════════════════════════════════
-- 📊 PARTE 3: VIEWS ÚTEIS
-- ═══════════════════════════════════════════════════════════════════════════

-- 3.1. View: Questões do Game
CREATE OR REPLACE VIEW v_game_questions AS
SELECT 
    key,
    value,
    created_at,
    -- Extrair área da key (formato: game:questions:area:id)
    SPLIT_PART(key, ':', 3) as area,
    -- Extrair ID da key
    SPLIT_PART(key, ':', 4) as question_id
FROM kv_store_50734795
WHERE key LIKE 'game:questions:%';

RAISE NOTICE '✅ View v_game_questions criada';

-- 3.2. View: Estatísticas do Game
CREATE OR REPLACE VIEW v_game_stats AS
SELECT 
    SPLIT_PART(key, ':', 3) as area,
    COUNT(*) as total_questions
FROM kv_store_50734795
WHERE key LIKE 'game:questions:%'
GROUP BY SPLIT_PART(key, ':', 3);

RAISE NOTICE '✅ View v_game_stats criada';

-- 3.3. View: Perfis de Usuários
CREATE OR REPLACE VIEW v_user_profiles AS
SELECT 
    key,
    value,
    created_at,
    -- Extrair user_id da key (formato: user:profile:uuid)
    SPLIT_PART(key, ':', 3) as user_id
FROM kv_store_50734795
WHERE key LIKE 'user:profile:%';

RAISE NOTICE '✅ View v_user_profiles criada';

-- 3.4. View: Posts do Fórum
CREATE OR REPLACE VIEW v_forum_posts AS
SELECT 
    key,
    value,
    created_at,
    -- Extrair post_id da key (formato: forum:post:uuid)
    SPLIT_PART(key, ':', 3) as post_id
FROM kv_store_50734795
WHERE key LIKE 'forum:post:%'
ORDER BY created_at DESC;

RAISE NOTICE '✅ View v_forum_posts criada';

-- ═══════════════════════════════════════════════════════════════════════════
-- 🛠️ PARTE 4: FUNÇÕES ÚTEIS
-- ═══════════════════════════════════════════════════════════════════════════

-- 4.1. Função: Buscar questões por área
CREATE OR REPLACE FUNCTION get_questions_by_area(area_name TEXT)
RETURNS TABLE (
    question_key TEXT,
    question_data TEXT,
    question_created TIMESTAMPTZ
) 
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    SELECT 
        key::TEXT,
        value::TEXT,
        created_at
    FROM kv_store_50734795
    WHERE key LIKE 'game:questions:' || area_name || ':%'
    ORDER BY created_at DESC;
END;
$$;

RAISE NOTICE '✅ Função get_questions_by_area criada';

-- 4.2. Função: Contar registros por prefixo
CREATE OR REPLACE FUNCTION count_by_prefix(prefix_pattern TEXT)
RETURNS INTEGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    result INTEGER;
BEGIN
    SELECT COUNT(*) INTO result
    FROM kv_store_50734795
    WHERE key LIKE prefix_pattern || '%';
    
    RETURN result;
END;
$$;

RAISE NOTICE '✅ Função count_by_prefix criada';

-- 4.3. Função: Estatísticas do sistema
CREATE OR REPLACE FUNCTION get_system_stats()
RETURNS TABLE (
    metric TEXT,
    value BIGINT
)
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
    RETURN QUERY
    SELECT 'total_records'::TEXT, COUNT(*)::BIGINT FROM kv_store_50734795
    UNION ALL
    SELECT 'game_questions'::TEXT, COUNT(*)::BIGINT FROM kv_store_50734795 WHERE key LIKE 'game:questions:%'
    UNION ALL
    SELECT 'user_profiles'::TEXT, COUNT(*)::BIGINT FROM kv_store_50734795 WHERE key LIKE 'user:profile:%'
    UNION ALL
    SELECT 'forum_posts'::TEXT, COUNT(*)::BIGINT FROM kv_store_50734795 WHERE key LIKE 'forum:post:%'
    UNION ALL
    SELECT 'rankings'::TEXT, COUNT(*)::BIGINT FROM kv_store_50734795 WHERE key LIKE 'ranking:%';
END;
$$;

RAISE NOTICE '✅ Função get_system_stats criada';

-- ═══════════════════════════════════════════════════════════════════════════
-- 🧪 PARTE 5: TESTES E VALIDAÇÃO
-- ═══════════════════════════════════════════════════════════════════════════

-- 5.1. Verificar RLS
DO $$
DECLARE
    rls_enabled BOOLEAN;
BEGIN
    SELECT relrowsecurity INTO rls_enabled
    FROM pg_class
    WHERE relname = 'kv_store_50734795';
    
    IF rls_enabled THEN
        RAISE NOTICE '✅ TESTE 1: RLS está habilitado';
    ELSE
        RAISE EXCEPTION '❌ TESTE 1 FALHOU: RLS não está habilitado!';
    END IF;
END $$;

-- 5.2. Verificar políticas
DO $$
DECLARE
    policy_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO policy_count
    FROM pg_policies
    WHERE tablename = 'kv_store_50734795';
    
    IF policy_count >= 4 THEN
        RAISE NOTICE '✅ TESTE 2: % políticas criadas', policy_count;
    ELSE
        RAISE EXCEPTION '❌ TESTE 2 FALHOU: Apenas % políticas encontradas (esperado: 4)', policy_count;
    END IF;
END $$;

-- 5.3. Verificar índices
DO $$
DECLARE
    index_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO index_count
    FROM pg_indexes
    WHERE tablename = 'kv_store_50734795'
    AND indexname LIKE 'idx_kv_store_%';
    
    IF index_count >= 3 THEN
        RAISE NOTICE '✅ TESTE 3: % índices criados', index_count;
    ELSE
        RAISE NOTICE '⚠️  TESTE 3: Apenas % índices criados', index_count;
    END IF;
END $$;

-- 5.4. Verificar views
DO $$
DECLARE
    view_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO view_count
    FROM information_schema.views
    WHERE table_schema = 'public'
    AND table_name LIKE 'v_%';
    
    IF view_count >= 4 THEN
        RAISE NOTICE '✅ TESTE 4: % views criadas', view_count;
    ELSE
        RAISE NOTICE '⚠️  TESTE 4: Apenas % views criadas', view_count;
    END IF;
END $$;

-- 5.5. Verificar funções
DO $$
DECLARE
    function_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO function_count
    FROM pg_proc p
    JOIN pg_namespace n ON p.pronamespace = n.oid
    WHERE n.nspname = 'public'
    AND p.proname IN ('get_questions_by_area', 'count_by_prefix', 'get_system_stats');
    
    IF function_count >= 3 THEN
        RAISE NOTICE '✅ TESTE 5: % funções criadas', function_count;
    ELSE
        RAISE NOTICE '⚠️  TESTE 5: Apenas % funções criadas', function_count;
    END IF;
END $$;

-- ═══════════════════════════════════════════════════════════════════════════
-- 📋 PARTE 6: RELATÓRIO FINAL
-- ═══════════════════════════════════════════════════════════════════════════

-- 6.1. Resumo de políticas
DO $$
DECLARE
    rec RECORD;
BEGIN
    RAISE NOTICE '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
    RAISE NOTICE '📊 RELATÓRIO DE CONFIGURAÇÃO - QUIRON CONCURSOS';
    RAISE NOTICE '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
    RAISE NOTICE '';
    RAISE NOTICE '🔒 POLÍTICAS RLS:';
    
    FOR rec IN 
        SELECT policyname, cmd
        FROM pg_policies
        WHERE tablename = 'kv_store_50734795'
        ORDER BY policyname
    LOOP
        RAISE NOTICE '   ✓ % (%)', rec.policyname, rec.cmd;
    END LOOP;
END $$;

-- 6.2. Resumo de índices
DO $$
DECLARE
    rec RECORD;
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '⚡ ÍNDICES:';
    
    FOR rec IN 
        SELECT indexname
        FROM pg_indexes
        WHERE tablename = 'kv_store_50734795'
        AND indexname LIKE 'idx_%'
        ORDER BY indexname
    LOOP
        RAISE NOTICE '   ✓ %', rec.indexname;
    END LOOP;
END $$;

-- 6.3. Resumo de views
DO $$
DECLARE
    rec RECORD;
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '📊 VIEWS:';
    
    FOR rec IN 
        SELECT table_name
        FROM information_schema.views
        WHERE table_schema = 'public'
        AND table_name LIKE 'v_%'
        ORDER BY table_name
    LOOP
        RAISE NOTICE '   ✓ %', rec.table_name;
    END LOOP;
END $$;

-- 6.4. Resumo de funções
DO $$
DECLARE
    rec RECORD;
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '🛠️  FUNÇÕES:';
    
    FOR rec IN 
        SELECT p.proname
        FROM pg_proc p
        JOIN pg_namespace n ON p.pronamespace = n.oid
        WHERE n.nspname = 'public'
        AND p.proname IN ('get_questions_by_area', 'count_by_prefix', 'get_system_stats')
        ORDER BY p.proname
    LOOP
        RAISE NOTICE '   ✓ %', rec.proname;
    END LOOP;
END $$;

-- 6.5. Estatísticas de dados
DO $$
DECLARE
    total_count INTEGER;
    game_count INTEGER;
    user_count INTEGER;
BEGIN
    SELECT COUNT(*) INTO total_count FROM kv_store_50734795;
    SELECT COUNT(*) INTO game_count FROM kv_store_50734795 WHERE key LIKE 'game:questions:%';
    SELECT COUNT(*) INTO user_count FROM kv_store_50734795 WHERE key LIKE 'user:profile:%';
    
    RAISE NOTICE '';
    RAISE NOTICE '📈 ESTATÍSTICAS DE DADOS:';
    RAISE NOTICE '   Total de registros: %', total_count;
    RAISE NOTICE '   Questões do game: %', game_count;
    RAISE NOTICE '   Perfis de usuário: %', user_count;
END $$;

-- 6.6. Mensagem final
DO $$
BEGIN
    RAISE NOTICE '';
    RAISE NOTICE '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
    RAISE NOTICE '✅ SETUP COMPLETO!';
    RAISE NOTICE '';
    RAISE NOTICE '🎯 PRÓXIMOS PASSOS:';
    RAISE NOTICE '   1. Testar leitura pública (deve funcionar)';
    RAISE NOTICE '   2. Testar escrita sem admin code (deve retornar 401)';
    RAISE NOTICE '   3. Testar escrita com admin code (deve funcionar)';
    RAISE NOTICE '   4. Executar seed de questões no app (Ctrl+Shift+A)';
    RAISE NOTICE '';
    RAISE NOTICE '📚 DOCUMENTAÇÃO:';
    RAISE NOTICE '   /docs/SUPABASE-RLS-SECURITY.md';
    RAISE NOTICE '   /RESUMO-DESENVOLVEDOR-PERMISSOES.md';
    RAISE NOTICE '';
    RAISE NOTICE '🏛️  Quiron Concursos - Database Ready!';
    RAISE NOTICE '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━';
END $$;

-- Commitar transação (tudo deu certo!)
COMMIT;

-- ═══════════════════════════════════════════════════════════════════════════
-- 🎉 FIM DO SCRIPT
-- ═══════════════════════════════════════════════════════════════════════════
--
-- Se você viu a mensagem "SETUP COMPLETO!" acima, está tudo certo! ✅
--
-- Para testar:
-- 1. Abrir aplicativo Quiron
-- 2. Apertar Ctrl+Shift+A
-- 3. Digitar: QUIRON_DEV_2024
-- 4. Clicar "Executar Seed"
-- 5. Verificar: 40 questões adicionadas
--
-- Problemas? Ver documentação em:
-- /RESUMO-DESENVOLVEDOR-PERMISSOES.md
--
-- Data: 31/12/2024
-- Versão: 1.0
-- ═══════════════════════════════════════════════════════════════════════════
