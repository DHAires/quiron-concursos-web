# 🏛️ Arquitetura - Quiron Concursos

## 📐 Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────────────────────┐
│                         FRONTEND (React)                            │
│                                                                     │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │
│  │   App.tsx    │  │  Sidebar.tsx │  │  Header.tsx  │             │
│  │  (Router)    │  │   (Menu)     │  │   (Top)      │             │
│  └──────┬───────┘  └──────────────┘  └──────────────┘             │
│         │                                                           │
│         ▼                                                           │
│  ┌─────────────────────────────────────────────────┐               │
│  │           Views (Páginas)                       │               │
│  ├─────────────────────────────────────────────────┤               │
│  │ • DashboardView    • GameView                   │               │
│  │ • ProfileView      • RankingView                │               │
│  │ • ChatView         • ForumView                  │               │
│  │ • StoreView        • QuestionsView              │               │
│  └─────────────────────────────────────────────────┘               │
│                          │                                          │
│                          │ HTTP Requests                            │
│                          ▼                                          │
└─────────────────────────────────────────────────────────────────────┘
                           │
                           │ Bearer Token
                           │
┌──────────────────────────▼──────────────────────────────────────────┐
│                    SERVER (Hono + Edge Functions)                   │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Routes:                                                    │    │
│  │  • POST /chat          - Chat com Prometheus               │    │
│  │  • POST /save-progress - Salvar progresso do game          │    │
│  │  • GET  /ranking/:area - Buscar ranking por área           │    │
│  │  • POST /register      - Cadastro de usuário               │    │
│  │  • POST /login         - Login de usuário                  │    │
│  └────────────────────────────────────────────────────────────┘    │
│                          │                                          │
│                          │ SQL Queries                              │
│                          ▼                                          │
└─────────────────────────────────────────────────────────────────────┘
                           │
                           │
┌──────────────────────────▼──────────────────────────────────────────┐
│                   DATABASE (Supabase PostgreSQL)                    │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  kv_store_50734795 (Tabela Principal)                      │    │
│  │  ┌──────────┬────────────────┬─────────────────────────┐   │    │
│  │  │   key    │     value      │      created_at         │   │    │
│  │  ├──────────┼────────────────┼─────────────────────────┤   │    │
│  │  │ user:123 │ { name: "..." }│ 2024-12-06 10:30:00     │   │    │
│  │  │ progress │ { score: 100 } │ 2024-12-06 11:45:00     │   │    │
│  │  └──────────┴────────────────┴─────────────────────────┘   │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Supabase Auth (Sistema de Autenticação)                   │    │
│  │  • Cadastro de usuários                                     │    │
│  │  • Login/Logout                                             │    │
│  │  • JWT Tokens                                               │    │
│  │  • OAuth (Google, GitHub)                                   │    │
│  └────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐    │
│  │  Supabase Storage (Armazenamento de Arquivos)              │    │
│  │  • Avatares de usuários                                     │    │
│  │  • Imagens de conquistas                                    │    │
│  │  • PDFs de materiais                                        │    │
│  └────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔄 Fluxo de Dados

### 1. Usuário Envia Mensagem no Chat

```
User Input → PrometheusChat.tsx
                    ↓
            Valida energia
                    ↓
            Se OK: Envia POST /chat
                    ↓
            Server recebe request
                    ↓
            Analisa contexto da mensagem
                    ↓
            Gera resposta inteligente
                    ↓
            Retorna JSON com resposta
                    ↓
            PrometheusChat.tsx exibe
                    ↓
            Atualiza energia (-1)
```

### 2. Usuário Completa Game

```
Game Finalizado → GameResults.tsx
                        ↓
                Calcula estatísticas
                        ↓
                POST /save-progress
                        ↓
                Server valida dados
                        ↓
                KV Store: salva progresso
                        ↓
                KV Store: atualiza ranking
                        ↓
                Retorna novo ranking
                        ↓
                GameResults exibe resultados
```

### 3. Usuário Preenche Cadastro

```
RegisterModal → Valida campos
                    ↓
            Conta campos opcionais
                    ↓
            POST /register
                    ↓
            Server: Cria usuário (Supabase Auth)
                    ↓
            Server: Calcula energia inicial
                    ↓
            KV Store: Salva perfil
                    ↓
            Retorna energia concedida
                    ↓
            Modal exibe "Você ganhou X energia!"
```

---

## 🧩 Componentes e Responsabilidades

### Layer 1: Core (App.tsx)

**Responsabilidade:** Gerenciamento global de estado e roteamento

```tsx
App.tsx
├── Estado global (activeView, modals)
├── Roteamento entre views
├── ErrorBoundary
└── Service Worker registration
```

**Não faz:**
- Lógica de negócios complexa
- Chamadas HTTP diretas
- Manipulação de dados

---

### Layer 2: Layout (components/layout/)

**Responsabilidade:** Estrutura visual da aplicação

```tsx
layout/
├── Header.tsx           # Logo, notificações, energia
├── Sidebar.tsx          # Menu de navegação
├── WelcomeSection.tsx   # Boas-vindas personalizadas
└── PrometheusCard.tsx   # Card de acesso rápido ao chat
```

**Header.tsx:**
- Mostra logo do Quiron
- Badge de energia do usuário
- Ícone de notificações
- Botão de perfil

**Sidebar.tsx:**
- 11 itens de menu
- Badges animados ("NOVO", "🎁")
- Hover effects
- Estado colapsado/expandido (mobile)

---

### Layer 3: Views (components/views/)

**Responsabilidade:** Páginas principais da aplicação

```tsx
views/
└── DashboardView.tsx
    ├── WelcomeSection
    ├── PrometheusCard
    ├── Analytics
    ├── ThematicAreas
    ├── PremiumBanner
    └── AdBanner
```

**Padrão de View:**
```tsx
export function MinhaView() {
  // 1. Estados locais
  const [data, setData] = useState([]);
  
  // 2. Fetch de dados
  useEffect(() => {
    fetchData();
  }, []);
  
  // 3. Render
  return (
    <div className="p-6">
      {/* Conteúdo */}
    </div>
  );
}
```

---

### Layer 4: Feature Components (components/)

**Responsabilidade:** Funcionalidades específicas

#### Analytics.tsx
```
Responsabilidade:
├── Buscar estatísticas do usuário
├── Calcular métricas (taxa de acerto, tempo médio)
├── Renderizar gráficos (Recharts)
└── Identificar áreas de melhoria
```

#### ThematicAreas.tsx
```
Responsabilidade:
├── Exibir 4 áreas temáticas
├── Mostrar progressão de carreira
├── Botões de ação (Questões, Game, Ranking, Fórum)
└── Hover effects e animações
```

#### EpicGame.tsx
```
Responsabilidade:
├── Fluxo completo do game (7 steps)
├── Seleção de área e matérias
├── Escolha de modo (single/multi)
├── Integração com Godot 4
└── Navegação para GameResults
```

#### PrometheusChat.tsx
```
Responsabilidade:
├── Interface de chat
├── Controle de energia
├── Envio de mensagens ao servidor
├── Renderização de respostas em Markdown
└── Scroll automático
```

#### ProfilePage.tsx
```
Responsabilidade:
├── Sistema de abas (5 tabs)
├── Exibir dados pessoais
├── Mostrar estatísticas
├── Gerenciar inventário
├── Configurações do usuário
└── Cálculo de energia (campos opcionais)
```

#### StorePage.tsx
```
Responsabilidade:
├── 3 departamentos (Físicos, Virtuais, Game)
├── Sistema de carrinho
├── Badge de quantidade no menu
├── Banner "EM BREVE"
└── Navegação entre departamentos
```

#### RankingPage.tsx
```
Responsabilidade:
├── 5 tipos de ranking (Geral + 4 áreas)
├── Destaque Top 3 (ouro, prata, bronze)
├── Lista de usuários
├── Atualização em tempo real (futura)
└── Filtros e pesquisa
```

#### ForumPage.tsx
```
Responsabilidade:
├── 4 categorias de discussão
├── Banner de regras da comunidade
├── Contagem de tópicos
├── Navegação entre categorias
└── Placeholder para tópicos
```

---

## 🔌 Camada de Servidor

### Estrutura do Servidor Hono

```
/supabase/functions/server/index.tsx
├── Imports
│   ├── Hono framework
│   ├── CORS middleware
│   ├── Logger middleware
│   ├── Supabase client
│   └── KV Store utilities
│
├── Inicialização
│   ├── const app = new Hono()
│   ├── app.use('*', cors())
│   └── app.use('*', logger(console.log))
│
├── Rotas
│   ├── GET  /make-server-50734795/health
│   ├── POST /make-server-50734795/chat
│   ├── POST /make-server-50734795/save-progress
│   ├── GET  /make-server-50734795/ranking/:area
│   ├── POST /make-server-50734795/register
│   └── POST /make-server-50734795/login
│
└── Servidor
    └── Deno.serve(app.fetch)
```

### Padrão de Rota

```tsx
app.post('/make-server-50734795/nome-rota', async (c) => {
  try {
    // 1. Extrair dados do request
    const { param1, param2 } = await c.req.json();
    
    // 2. Validar entrada
    if (!param1) {
      return c.json({ error: 'param1 obrigatório' }, 400);
    }
    
    // 3. Autenticação (se necessário)
    const token = c.req.header('Authorization')?.split(' ')[1];
    const { data: { user } } = await supabase.auth.getUser(token);
    if (!user) {
      return c.json({ error: 'Unauthorized' }, 401);
    }
    
    // 4. Lógica de negócios
    const resultado = await processarDados(param1, param2);
    
    // 5. Persistência
    await kv.set(`chave:${user.id}`, resultado);
    
    // 6. Resposta
    return c.json({ 
      success: true, 
      data: resultado 
    });
    
  } catch (error) {
    // 7. Tratamento de erro
    console.error('[ROTA] Erro:', error);
    return c.json({ 
      error: 'Erro interno do servidor',
      details: error.message 
    }, 500);
  }
});
```

---

## 💾 Camada de Dados (KV Store)

### Padrões de Chaves

```
Usuários:
├── user:{userId}:profile          - Dados do perfil
├── user:{userId}:energy           - Energia atual
├── user:{userId}:level            - Nível global
├── user:{userId}:xp               - XP acumulado
├── user:{userId}:progress:{area}  - Progresso por área
└── user:{userId}:inventory        - Itens do inventário

Game:
├── game:session:{sessionId}       - Sessão ativa
├── game:history:{userId}          - Histórico de partidas
└── game:stats:{userId}:{area}     - Estatísticas por área

Ranking:
├── ranking:global                 - Ranking geral
├── ranking:juridica               - Ranking área jurídica
├── ranking:policial               - Ranking área policial
├── ranking:gerais                 - Ranking conhecimentos gerais
└── ranking:fiscal                 - Ranking área fiscal

Social:
├── forum:topic:{topicId}          - Tópico do fórum
├── forum:post:{postId}            - Post no fórum
├── chat:message:{messageId}       - Mensagem do chat comunidade
└── friend:{userId}:list           - Lista de amigos

Loja:
├── store:cart:{userId}            - Carrinho de compras
├── store:order:{orderId}          - Pedido realizado
└── store:inventory:{userId}       - Produtos comprados
```

### Exemplo de Estrutura de Dados

```typescript
// user:123:profile
{
  name: "João Silva",
  email: "joao@email.com",
  avatar: "https://...",
  createdAt: "2024-12-01T10:00:00Z",
  preferences: {
    theme: "dark",
    notifications: true
  }
}

// user:123:progress:juridica
{
  area: "juridica",
  level: "Analista",
  xp: 1250,
  questionsCompleted: 87,
  questionsCorrect: 65,
  gamesPlayed: 12,
  gamesWon: 8,
  lastPlayed: "2024-12-06T15:30:00Z",
  subjects: {
    "Direito Constitucional": {
      completed: 25,
      correct: 20,
      accuracy: 80
    },
    "Direito Administrativo": {
      completed: 18,
      correct: 15,
      accuracy: 83
    }
  }
}

// ranking:global
[
  {
    userId: "123",
    name: "João Silva",
    totalXP: 5420,
    position: 1,
    avatar: "https://..."
  },
  {
    userId: "456",
    name: "Maria Santos",
    totalXP: 5100,
    position: 2,
    avatar: "https://..."
  }
  // ... mais usuários
]
```

---

## 🔐 Fluxo de Autenticação (Futuro)

### 1. Sign Up

```
Frontend (RegisterModal)
    ↓
Validar formulário
    ↓
POST /make-server-50734795/register
    ↓
Server: supabase.auth.admin.createUser()
    ↓
Server: kv.set('user:{userId}:profile', {...})
    ↓
Server: Calcular energia inicial
    ↓
Retornar { userId, energy, token }
    ↓
Frontend: Salvar token em localStorage
    ↓
Redirecionar para dashboard
```

### 2. Sign In

```
Frontend (LoginModal)
    ↓
POST /make-server-50734795/login
    ↓
Server: supabase.auth.signInWithPassword()
    ↓
Server: Buscar dados do usuário (KV)
    ↓
Retornar { token, userData }
    ↓
Frontend: Salvar token
    ↓
Atualizar estado global
    ↓
Redirecionar para dashboard
```

### 3. Rotas Protegidas

```
Frontend: Incluir token no header
    ↓
Authorization: Bearer {token}
    ↓
Server: Extrair token
    ↓
Server: supabase.auth.getUser(token)
    ↓
Se válido: Prosseguir
Se inválido: return 401 Unauthorized
```

---

## 🎮 Fluxo do Game

### Estados do Game

```
1. area-selection
   └─> Usuário escolhe área temática
       ↓
2. subject-selection
   └─> Usuário seleciona matérias (1-5)
       ↓
3. mode-selection
   └─> Single ou Multiplayer?
       ├─> Single ──────────┐
       │                    ↓
       └─> Multi ──> 4. lobby
                         ↓
                    5. playing
                         ↓
                    6. results
```

### Integração Godot 4 (Futuro)

```
React (EpicGame.tsx)
    ↓
Configurar partida:
- Área selecionada
- Matérias selecionadas
- Modo (single/multi)
    ↓
Embedar Godot WebGL
    ↓
<iframe src="godot-game.html" />
    ↓
Comunicação via postMessage
    ↓
Godot envia eventos:
- questionAnswered
- gameCompleted
- playerPosition
    ↓
React recebe eventos
    ↓
Processar resultado
    ↓
POST /save-progress
    ↓
Navegar para GameResults
```

---

## 📊 Sistema de Analytics

### Métricas Coletadas

```typescript
interface UserAnalytics {
  // Geral
  totalQuestionsAnswered: number;
  totalCorrectAnswers: number;
  overallAccuracy: number;
  totalTimeStudied: number; // em minutos
  
  // Por Área
  areaStats: {
    [areaId: string]: {
      questionsAnswered: number;
      correctAnswers: number;
      accuracy: number;
      timeSpent: number;
      gamesPlayed: number;
      currentLevel: string;
    };
  };
  
  // Progressão
  weeklyProgress: Array<{
    week: string;
    questionsAnswered: number;
    accuracy: number;
  }>;
  
  // Pontos Fortes/Fracos
  strengths: string[];  // Matérias com >70% acerto
  weaknesses: string[]; // Matérias com <50% acerto
}
```

### Cálculo de Métricas

```tsx
// Taxa de Acerto Geral
const overallAccuracy = 
  (totalCorrectAnswers / totalQuestionsAnswered) * 100;

// Tempo Médio por Questão
const avgTimePerQuestion = 
  totalTimeStudied / totalQuestionsAnswered;

// Matérias Mais Estudadas
const topSubjects = Object.entries(areaStats)
  .sort((a, b) => b[1].questionsAnswered - a[1].questionsAnswered)
  .slice(0, 5);

// Evolução Semanal
const weeklyGrowth = 
  (thisWeekAccuracy - lastWeekAccuracy) / lastWeekAccuracy * 100;
```

---

## 🔄 Ciclo de Vida do Usuário

```
1. DESCOBERTA
   └─> Usuário acessa o site
       └─> Modal LGPD/GDPR
           └─> Aceita termos
   
2. ONBOARDING
   └─> Explora dashboard
       └─> Vê áreas temáticas
           └─> Testa chat Prometheus (5 energia grátis)
   
3. ENGAJAMENTO INICIAL
   └─> Energia acabou
       └─> Modal de cadastro
           └─> Preenche dados obrigatórios (3 energia)
               └─> Preenche dados opcionais (+1 cada = até 14 energia)
   
4. EXPLORAÇÃO
   └─> Navega pelas áreas
       └─> Testa o game
           └─> Vê resultados
               └─> Quer melhorar no ranking
   
5. PROGRESSÃO
   └─> Responde questões diariamente
       └─> Sobe de nível de carreira
           └─> Desbloqueia conquistas
               └─> Ganha itens no inventário
   
6. ENGAJAMENTO SOCIAL
   └─> Participa do fórum
       └─> Ajuda outros usuários
           └─> Cria amizades
               └─> Joga multiplayer
   
7. MONETIZAÇÃO
   └─> Atinge limite de energia
       └─> Vê benefícios Premium
           └─> Considera upgrade
               └─> Compra plano ou itens na loja
   
8. RETENÇÃO
   └─> Recebe notificações
       └─> Vê progresso de amigos
           └─> Participa de eventos
               └─> Mantém streak de estudos
```

---

## 🎯 Decisões de Arquitetura

### Por que Supabase?

✅ **Vantagens:**
- Backend completo (DB + Auth + Storage)
- Edge Functions serverless
- Fácil integração com React
- Escalável automaticamente
- Gratuito até certo limite

❌ **Alternativas Consideradas:**
- Firebase (não escolhido: vendor lock-in)
- MongoDB + Express (não escolhido: mais complexo)
- GraphQL (não escolhido: overhead desnecessário)

### Por que Hono?

✅ **Vantagens:**
- Extremamente rápido
- Sintaxe simples (Express-like)
- Funciona no Deno (Supabase Edge Functions)
- Type-safe
- Middlewares fáceis

❌ **Alternativas Consideradas:**
- Express (não escolhido: não funciona no Deno)
- Fastify (não escolhido: mais complexo)

### Por que KV Store ao invés de tabelas relacionais?

✅ **Vantagens:**
- Flexibilidade total de schema
- Performance alta para reads/writes
- Ideal para prototipagem rápida
- Sem migrations complexas

❌ **Desvantagens:**
- Menos estruturado
- Relacionamentos manuais
- Queries complexas difíceis

**Decisão:** Usar KV para MVP, migrar para tabelas relacionais quando escalar

### Por que não React Router?

✅ **Decisão:**
- Roteamento manual via estado (activeView)
- Menos dependências
- Controle total da navegação
- Ideal para SPA simples

---

## 🚀 Escalabilidade

### Atualmente Suporta

- ✅ Até 1.000 usuários simultâneos
- ✅ Até 100.000 requests/dia
- ✅ Até 1GB de dados no KV Store

### Quando Escalar

**Sinais de que precisa escalar:**
- Response time > 500ms
- Database queries lentas
- RAM do servidor esgotando
- Muitos erros de timeout

**Como Escalar:**

1. **Database:**
   - Migrar de KV para tabelas relacionais
   - Adicionar índices
   - Implementar cache (Redis)

2. **Servidor:**
   - Horizontal scaling (mais instâncias)
   - Load balancer
   - CDN para assets estáticos

3. **Frontend:**
   - Code splitting agressivo
   - Service Worker robusto
   - Prefetching de dados

---

## 📈 Monitoramento (Futuro)

### Métricas a Monitorar

```typescript
// Performance
- Response time médio por rota
- Taxa de erro (4xx, 5xx)
- Requests por segundo
- Database query time

// Negócio
- Usuários ativos diários (DAU)
- Taxa de conversão (free → premium)
- Tempo médio de sessão
- Taxa de retenção (D1, D7, D30)

// Game
- Partidas jogadas por dia
- Taxa de conclusão de partidas
- Tempo médio por partida
- Áreas mais populares
```

### Ferramentas Sugeridas

- **Sentry:** Tracking de erros
- **PostHog:** Analytics de produto
- **Supabase Dashboard:** Métricas de DB
- **Vercel Analytics:** Performance web

---

**Última Atualização:** Dezembro 2024  
**Versão:** 1.0
