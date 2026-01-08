# 📚 Documentação Completa - Quiron Concursos

## 🎯 Visão Geral do Projeto

**Quiron Concursos** é uma plataforma web completa para preparação de concursos públicos, inspirada na mitologia do centauro Quíron (mestre dos heróis gregos). O aplicativo combina gamificação, inteligência artificial e gestão de estudos em uma experiência moderna e envolvente.

### Tema Mitológico
- **Mascote:** Quíron, o centauro sábio e mestre
- **Conceito:** Transformar estudantes em "heróis" aprovados
- **Narrativa:** Jornada épica de aprendizado e conquistas

### Tecnologias Principais
- **Frontend:** React 18 + TypeScript
- **Estilização:** Tailwind CSS v4.0
- **Backend:** Supabase (PostgreSQL + Edge Functions)
- **Servidor:** Hono (framework web rápido)
- **Ícones:** Lucide React
- **Gráficos:** Recharts
- **Animações:** Motion/React (Framer Motion)

---

## 🏗️ Arquitetura do Sistema

### Arquitetura de 3 Camadas

```
┌─────────────────────────────────────────┐
│          FRONTEND (React)               │
│  - Interface do usuário                 │
│  - Componentes React                    │
│  - Tailwind CSS                         │
└──────────────┬──────────────────────────┘
               │
               │ HTTPS Requests
               │
┌──────────────▼──────────────────────────┐
│     SERVER (Hono + Supabase Edge)       │
│  - Rotas API REST                       │
│  - Lógica de negócios                   │
│  - Validações                           │
└──────────────┬──────────────────────────┘
               │
               │ SQL Queries
               │
┌──────────────▼──────────────────────────┐
│       DATABASE (PostgreSQL)             │
│  - Tabela kv_store_50734795             │
│  - Supabase Auth                        │
│  - Supabase Storage                     │
└─────────────────────────────────────────┘
```

### Fluxo de Dados

1. **Frontend → Server:** Requisições HTTP com Bearer token
2. **Server → Database:** Queries SQL via Supabase Client
3. **Database → Server → Frontend:** Dados em JSON

---

## 📁 Estrutura de Pastas

```
/
├── components/                 # Componentes React
│   ├── layout/                # Componentes de layout
│   │   ├── Header.tsx         # Cabeçalho principal
│   │   ├── Sidebar.tsx        # Menu lateral completo
│   │   ├── WelcomeSection.tsx # Seção de boas-vindas
│   │   └── PrometheusCard.tsx # Card do chat IA
│   │
│   ├── views/                 # Views/Páginas principais
│   │   └── DashboardView.tsx  # Dashboard principal
│   │
│   ├── figma/                 # Componentes do Figma
│   │   └── ImageWithFallback.tsx  # (PROTEGIDO - não editar)
│   │
│   ├── Analytics.tsx          # Análise de desempenho
│   ├── ThematicAreas.tsx      # 4 áreas temáticas
│   ├── EpicGame.tsx           # Game principal
│   ├── GameResults.tsx        # Resultados pós-game
│   ├── MultiplayerLobby.tsx   # Lobby multiplayer
│   ├── GameRules.tsx          # Regras do game
│   ├── PrometheusChat.tsx     # Chat IA Prometheus
│   ├── ProfilePage.tsx        # Perfil do usuário
│   ├── ProfilePersonalData.tsx # Dados pessoais
│   ├── ProfileStats.tsx       # Estatísticas do perfil
│   ├── ProfileInventory.tsx   # Inventário de itens
│   ├── ProfileConfig.tsx      # Configurações
│   ├── RegisterModal.tsx      # Modal de cadastro
│   ├── QuestionsPage.tsx      # Banco de questões
│   ├── RankingPage.tsx        # Ranking global
│   ├── ForumPage.tsx          # Fórum da comunidade
│   ├── StorePage.tsx          # Loja (3 departamentos)
│   ├── PremiumBanner.tsx      # Banner de upgrade premium
│   ├── GoogleAdSense.tsx      # Integração Google Ads
│   ├── PrivacyConsentModal.tsx # LGPD/GDPR
│   └── ErrorBoundary.tsx      # Tratamento de erros
│
├── supabase/
│   └── functions/
│       └── server/
│           ├── index.tsx       # Servidor Hono principal
│           └── kv_store.tsx    # (PROTEGIDO - não editar)
│
├── utils/
│   ├── supabase/
│   │   └── info.tsx           # (PROTEGIDO - não editar)
│   └── registerServiceWorker.tsx # PWA Service Worker
│
├── hooks/
│   └── useNavigate.tsx        # Hook de navegação
│
├── styles/
│   └── globals.css            # Estilos globais + tokens Tailwind
│
├── imports/                   # Assets importados do Figma
│   ├── svg-*                  # Arquivos SVG
│   └── figma:asset/*          # Imagens PNG/JPG
│
├── App.tsx                    # Componente raiz
├── main.tsx                   # Entry point
└── index.html                 # HTML base
```

---

## 🎨 Sistema de Cores e Temas

### Paleta de Cores Principais

```css
/* Cores das Áreas Temáticas */
--area-juridica: #3B82F6 (azul brilhante)
--area-policial: #EF4444 (vermelho sangue brilhante)
--area-gerais: #A855F7 (roxo vibrante)
--area-fiscal: #F59E0B (amarelo ouro)

/* Cores do Sistema */
--prometheus: #A855F7 (roxo - IA)
--success: #10B981 (verde)
--warning: #F59E0B (amarelo)
--danger: #EF4444 (vermelho)
--premium: #FFD700 (dourado)

/* Backgrounds */
--bg-primary: #111827 (gray-900)
--bg-secondary: #000000 (black)
--bg-card: gradient-to-br from-gray-900 to-black
```

### Gradientes Temáticos

```tsx
// Jurídica (Azul)
gradient: 'from-blue-600 to-blue-500'

// Policial (Vermelho Brilhante)
gradient: 'from-red-600 to-red-500'

// Conhecimentos Gerais (Roxo)
gradient: 'from-purple-600 to-purple-500'

// Fiscal-Bancária (Amarelo)
gradient: 'from-yellow-600 to-yellow-500'
```

---

## ⚙️ Componentes Principais

### 1. App.tsx (Raiz da Aplicação)

**Responsabilidades:**
- Gerenciamento de estado global (activeView)
- Roteamento interno (sem React Router)
- Controle de modais (Login/Registro)
- Service Worker registration

**Estados Principais:**
```tsx
const [activeView, setActiveView] = useState<ViewType>('dashboard');
const [showLoginModal, setShowLoginModal] = useState(false);
const [showRegisterModal, setShowRegisterModal] = useState(false);
```

**Views Disponíveis:**
- `dashboard` - Dashboard principal
- `chat` - Chat com Prometheus
- `questions` - Banco de questões
- `game` - Game épico
- `ranking` - Ranking global
- `forum` - Fórum da comunidade
- `store` - Loja
- `profile` - Perfil do usuário
- `support` - Suporte

**Como Adicionar Nova View:**
```tsx
// 1. Adicionar tipo em ViewType
type ViewType = 'dashboard' | 'chat' | 'nova-view';

// 2. Adicionar case no renderView()
case 'nova-view':
  return <NovaViewComponent />;

// 3. Criar função de navegação
const navigateToNovaView = () => setActiveView('nova-view');
```

---

### 2. Sidebar.tsx (Menu Lateral)

**Estrutura de Menu:**
```tsx
const menuItems = [
  { id: 'dashboard', icon: Home, label: 'Dashboard' },
  { id: 'profile', icon: User, label: 'Perfil' },
  { id: 'analysis', icon: TrendingUp, label: 'Análise IA' },
  { id: 'questions', icon: BookOpen, label: 'Questões' },
  { id: 'banco', icon: Database, label: 'Banco de Questões' },
  { id: 'game', icon: Gamepad2, label: 'Game Épico', badge: 'NOVO' },
  { id: 'chat', icon: MessageSquare, label: 'Chat IA' },
  { id: 'chat-community', icon: Users, label: 'Chat Comunidade' },
  { id: 'forum', icon: MessageCircle, label: 'Fórum' },
  { id: 'ranking', icon: Trophy, label: 'Ranking' },
  { id: 'store', icon: ShoppingBag, label: 'Loja', badge: '🎁' },
  { id: 'support', icon: HelpCircle, label: 'Suporte' }
];
```

**Badges Animados:**
```tsx
// Badge "NOVO" - Rotação 3D
{item.badge === 'NOVO' && (
  <span className="animate-rotate-y">NOVO</span>
)}

// Badge de emoji (Loja)
{item.badge === '🎁' && (
  <span className="animate-bounce-slow">🎁</span>
)}
```

**Estados da Sidebar:**
- Desktop: Sempre expandida (largura fixa 280px)
- Mobile: Colapsável com botão toggle
- Hover effects em todos os itens

---

### 3. ThematicAreas.tsx (4 Áreas Temáticas)

**Estrutura de Dados:**
```tsx
const areas = [
  {
    id: 'juridica',
    name: 'Área Jurídica',
    icon: Scale,
    color: 'blue',
    gradient: 'from-blue-600 to-blue-500',
    careers: ['Estagiário', 'Técnico', 'Analista', 'JUIZ'],
    subjects: [
      'Direito Constitucional',
      'Direito Administrativo',
      'Direito Penal',
      'Direito Civil',
      'Direito do Trabalho'
    ]
  },
  {
    id: 'policial',
    name: 'Área Policial',
    icon: Shield,
    color: 'red',
    gradient: 'from-red-600 to-red-500',
    careers: ['Soldado', 'Oficial', 'Agente', 'DELEGADO'],
    subjects: [
      'Legislação Penal Especial',
      'Criminologia',
      'Direitos Humanos',
      'Procedimentos Policiais'
    ]
  },
  {
    id: 'gerais',
    name: 'Conhecimentos Gerais',
    icon: Brain,
    color: 'purple',
    gradient: 'from-purple-600 to-purple-500',
    careers: ['Aluno', 'Professor', 'Mestre', 'CIENTISTA'],
    subjects: [
      'História do Brasil',
      'Geografia',
      'Atualidades',
      'Informática'
    ]
  },
  {
    id: 'fiscal',
    name: 'Área Fiscal-Bancária',
    icon: Coins,
    color: 'yellow',
    gradient: 'from-yellow-600 to-yellow-500',
    careers: ['Técnico Bancário', 'Analista', 'Gerente', 'AUDITOR'],
    subjects: [
      'Matemática Financeira',
      'Contabilidade',
      'Direito Tributário',
      'Economia'
    ]
  }
];
```

**Botões de Ação:**
```tsx
// Cada card tem 4 botões
1. "Começar Questões" → navega para /questions
2. "Ver Ranking" → navega para /ranking
3. "Jogar Game" → navega para /game
4. "Discussões" → navega para /forum
```

---

### 4. PrometheusChat.tsx (Chat IA)

**Sistema de Energia:**
```tsx
// Usuário começa com energia limitada
const [userEnergy, setUserEnergy] = useState(5);

// Cada mensagem consome 1 energia
if (userEnergy <= 0) {
  showRegisterModal(); // Pede para preencher cadastro
}
```

**Integração com Backend:**
```tsx
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-50734795/chat`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`
    },
    body: JSON.stringify({ message: userMessage })
  }
);
```

**Respostas Inteligentes:**
O Prometheus detecta contexto e responde de forma personalizada:
```tsx
// Exemplos de contextos detectados:
- Motivação e incentivo
- Cronogramas de estudo
- Técnicas de memorização
- Explicações sobre o game
- Análise de desempenho
- Dicas de matérias específicas
```

**UI/UX:**
- Mensagens do usuário: alinhadas à direita, fundo roxo
- Mensagens do Prometheus: alinhadas à esquerda, fundo cinza
- Markdown suportado (negrito, listas, emojis)
- Auto-scroll para última mensagem
- Loading state durante resposta

---

### 5. EpicGame.tsx (Game Principal)

**Fluxo do Game:**
```
1. Seleção de Área Temática
   ↓
2. Seleção de Matérias (mínimo 1, máximo 5)
   ↓
3. Escolha do Modo (Singleplayer ou Multiplayer)
   ↓
4. Visualização das Regras (opcional)
   ↓
5. Início do Game (integração Godot 4)
   ↓
6. Resultados Finais
```

**Estados do Game:**
```tsx
type GameStep = 
  | 'area-selection'      // Escolher área
  | 'subject-selection'   // Escolher matérias
  | 'mode-selection'      // Single ou Multi
  | 'rules'               // Ver regras
  | 'lobby'               // Lobby multiplayer
  | 'playing'             // Jogando
  | 'results';            // Resultados

const [step, setStep] = useState<GameStep>('area-selection');
const [selectedArea, setSelectedArea] = useState<ThematicArea | null>(null);
const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
const [gameMode, setGameMode] = useState<'single' | 'multi' | null>(null);
```

**Sistema de Progressão de Carreira:**
```tsx
// Cada área tem 4 níveis de carreira
const careerLevels = {
  juridica: [
    { level: 1, name: 'Estagiário', emoji: '📚', questionsNeeded: 0 },
    { level: 2, name: 'Técnico', emoji: '⚖️', questionsNeeded: 50 },
    { level: 3, name: 'Analista', emoji: '🎓', questionsNeeded: 200 },
    { level: 4, name: 'JUIZ', emoji: '👨‍⚖️', questionsNeeded: 500 }
  ]
  // ... outras áreas
};
```

**Integração Godot 4:**
```tsx
// O game 3D é desenvolvido em Godot 4
// Placeholder: demonstração do conceito
<div className="aspect-video bg-gradient-to-br from-gray-800 to-black rounded-2xl">
  <p>🎮 Game Godot 4 será integrado aqui</p>
</div>
```

---

### 6. GameResults.tsx (Tela de Resultados)

**Dados Exibidos:**
```tsx
interface GameResultsProps {
  mode: 'single' | 'multi';
  position?: number;           // 1-4 para multiplayer
  previousRank: number;         // Ranking anterior
  newRank: number;             // Novo ranking
  areaName: string;            // Nome da área jogada
  careerLevel: string;         // Cargo alcançado
  correctAnswers: number;      // Questões corretas
  totalQuestions: number;      // Total de questões
  timeSpent: string;           // Tempo total (ex: "5m 23s")
  onBackToGame: () => void;
  onPlayAgain: () => void;
  onVisitRanking: () => void;
}
```

**Cálculos Automáticos:**
```tsx
// Precisão
const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

// Mudança de ranking
const rankChange = newRank - previousRank;
const isRankUp = rankChange < 0;  // Ranking menor = melhor posição
const isRankDown = rankChange > 0;
```

**Animações:**
```tsx
// Confetti no topo (multiplayer - 1º lugar)
{position === 1 && <div className="confetti-animation" />}

// Efeitos de entrada sequencial
useEffect(() => {
  setTimeout(() => setShowContent(true), 100);
  setTimeout(() => setShowStats(true), 400);
  setTimeout(() => setShowRanking(true), 700);
}, []);
```

**Posições Multiplayer:**
```tsx
const positionData = [
  { position: 1, title: 'CAMPEÃO!', color: 'yellow', icon: Crown },
  { position: 2, title: 'VICE-CAMPEÃO!', color: 'gray', icon: Medal },
  { position: 3, title: '3º LUGAR', color: 'orange', icon: Award },
  { position: 4, title: '4º LUGAR', color: 'blue', icon: Star }
];
```

---

### 7. ProfilePage.tsx (Perfil do Usuário)

**Sistema de Abas:**
```tsx
type ProfileTab = 'dados' | 'stats' | 'inventory' | 'ranking' | 'config';

const tabs = [
  { id: 'dados', label: 'Dados Pessoais', icon: User, color: 'blue' },
  { id: 'stats', label: 'Estatísticas', icon: TrendingUp, color: 'green' },
  { id: 'inventory', label: 'Inventário', icon: Package, color: 'yellow' },
  { id: 'ranking', label: 'Ranking', icon: Trophy, color: 'purple' },
  { id: 'config', label: 'Configurações', icon: Settings, color: 'gray' }
];
```

**Sistema de Energia (Freemium):**
```tsx
interface EnergyProgress {
  current: number;      // Energia atual
  max: number;         // Energia máxima
  fieldsCompleted: number;  // Campos preenchidos
  totalFields: number; // Total de campos opcionais
}

// Cada campo opcional preenchido = +1 energia
const optionalFields = [
  'telefone',
  'cpf',
  'rg',
  'dataDeNascimento',
  'endereco',
  'cidade',
  'estado',
  'cep',
  'profissao',
  'escolaridade',
  'concursoInteresse'
];
```

**Visualização de Energia:**
```tsx
<div className="relative w-full h-4 bg-gray-700 rounded-full">
  <div 
    className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"
    style={{ width: `${(current / max) * 100}%` }}
  />
  <span>{current}/{max} ⚡</span>
</div>
```

---

### 8. StorePage.tsx (Loja com 3 Departamentos)

**Estrutura da Loja:**
```tsx
type StoreDepartment = 'fisicos' | 'virtuais' | 'game';

const departments = [
  {
    id: 'fisicos',
    name: 'Produtos Físicos',
    icon: Package,
    color: 'from-blue-600 to-blue-500',
    description: 'Livros, apostilas, cadernos e mais'
  },
  {
    id: 'virtuais',
    name: 'Produtos Virtuais',
    icon: Monitor,
    color: 'from-purple-600 to-purple-500',
    description: 'Cursos online, PDFs, videoaulas'
  },
  {
    id: 'game',
    name: 'Itens de Game',
    icon: Gamepad2,
    color: 'from-yellow-600 to-yellow-500',
    description: 'Avatares, skins, power-ups'
  }
];
```

**Sistema de Carrinho:**
```tsx
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  department: StoreDepartment;
  image?: string;
}

const [cart, setCart] = useState<CartItem[]>([]);

// Adicionar ao carrinho
const addToCart = (product: Product) => {
  setCart(prev => {
    const existing = prev.find(item => item.id === product.id);
    if (existing) {
      return prev.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    return [...prev, { ...product, quantity: 1 }];
  });
};
```

**Badge de Carrinho (Sidebar):**
```tsx
// Mostra quantidade total de itens
const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

{totalItems > 0 && (
  <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5">
    {totalItems}
  </span>
)}
```

**Banner "EM BREVE":**
```tsx
<div className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-6">
  <h3 className="text-2xl mb-2">🚀 EM BREVE!</h3>
  <p>A loja completa será lançada em breve com diversos produtos...</p>
</div>
```

---

### 9. ForumPage.tsx (Fórum da Comunidade)

**Categorias do Fórum:**
```tsx
const categories = [
  { 
    id: 'duvidas',
    name: 'Dúvidas de Matérias',
    icon: HelpCircle,
    color: 'blue',
    topicsCount: 234,
    description: 'Tire suas dúvidas sobre qualquer matéria'
  },
  {
    id: 'experiencias',
    name: 'Experiências em Concursos',
    icon: Star,
    color: 'yellow',
    topicsCount: 89,
    description: 'Compartilhe sua jornada e conquistas'
  },
  {
    id: 'materiais',
    name: 'Materiais de Estudo',
    icon: BookOpen,
    color: 'green',
    topicsCount: 156,
    description: 'Compartilhe e encontre materiais'
  },
  {
    id: 'geral',
    name: 'Discussões Gerais',
    icon: MessageCircle,
    color: 'purple',
    topicsCount: 312,
    description: 'Converse sobre diversos assuntos'
  }
];
```

**Banner de Regras da Comunidade:**
```tsx
const rules = [
  {
    type: 'positive',
    icon: '✅',
    color: 'green',
    title: 'Seja Respeitoso',
    description: 'Trate todos com educação e empatia'
  },
  {
    type: 'positive',
    icon: '💡',
    color: 'green',
    title: 'Colabore',
    description: 'Ajude outros membros com suas dúvidas'
  },
  {
    type: 'negative',
    icon: '❌',
    color: 'red',
    title: 'Sem Spam',
    description: 'Não faça propaganda excessiva'
  },
  {
    type: 'negative',
    icon: '🚫',
    color: 'red',
    title: 'Sem Ofensas',
    description: 'Conteúdo ofensivo será removido'
  }
];
```

**Posicionamento do Banner:**
- Entre o header e as categorias
- Grid 2x2 (desktop) ou 1x4 (mobile)
- Cores verde (regras positivas) e vermelho (proibitivas)

---

### 10. RankingPage.tsx (Ranking Global)

**Tipos de Ranking:**
```tsx
type RankingType = 'geral' | 'juridica' | 'policial' | 'gerais' | 'fiscal';

const rankingTabs = [
  { id: 'geral', label: 'Geral', icon: Trophy },
  { id: 'juridica', label: 'Jurídica', icon: Scale },
  { id: 'policial', label: 'Policial', icon: Shield },
  { id: 'gerais', label: 'Gerais', icon: Brain },
  { id: 'fiscal', label: 'Fiscal', icon: Coins }
];
```

**Estrutura de Dados do Ranking:**
```tsx
interface RankedUser {
  position: number;
  name: string;
  avatar?: string;
  score: number;
  level: string;
  area?: string;
  badge?: 'gold' | 'silver' | 'bronze';
}
```

**Top 3 Destaque:**
```tsx
// Posições 1, 2 e 3 têm cards especiais
{position === 1 && (
  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600">
    <Crown className="w-12 h-12" />
    <span className="text-4xl">🥇</span>
  </div>
)}

{position === 2 && (
  <div className="bg-gradient-to-r from-gray-300 to-gray-400">
    <Medal className="w-10 h-10" />
    <span className="text-3xl">🥈</span>
  </div>
)}

{position === 3 && (
  <div className="bg-gradient-to-r from-orange-400 to-orange-600">
    <Award className="w-10 h-10" />
    <span className="text-3xl">🥉</span>
  </div>
)}
```

**Lista de Usuários:**
```tsx
// Posições 4+ em lista simples
<div className="space-y-2">
  {rankedUsers.slice(3).map(user => (
    <div key={user.position} className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl">
      <span className="text-gray-400">#{user.position}</span>
      <img src={user.avatar} className="w-10 h-10 rounded-full" />
      <span>{user.name}</span>
      <span className="ml-auto text-yellow-400">{user.score} pts</span>
    </div>
  ))}
</div>
```

---

## 🔌 Integrações Backend

### Supabase Configuration

**Variáveis de Ambiente (automáticas):**
```tsx
// /utils/supabase/info.tsx (ARQUIVO PROTEGIDO)
export const projectId = 'xxxxxx';
export const publicAnonKey = 'xxxxxx';
```

**Criação do Cliente Supabase:**
```tsx
import { createClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from './utils/supabase/info';

const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);
```

---

### Servidor Hono (Edge Functions)

**Arquivo:** `/supabase/functions/server/index.tsx`

**Estrutura Básica:**
```tsx
import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';
import { createClient } from 'npm:@supabase/supabase-js@2';
import * as kv from './kv_store.tsx'; // Sistema de KV

const app = new Hono();

// Middlewares
app.use('*', cors());
app.use('*', logger(console.log));

// Rotas sempre com prefixo /make-server-50734795
app.get('/make-server-50734795/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Iniciar servidor
Deno.serve(app.fetch);
```

**Rotas Implementadas:**

#### 1. Health Check
```tsx
app.get('/make-server-50734795/health', (c) => {
  return c.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString() 
  });
});
```

#### 2. Chat com Prometheus
```tsx
app.post('/make-server-50734795/chat', async (c) => {
  try {
    const { message } = await c.req.json();
    
    // Detectar contexto da mensagem
    const lowerMessage = message.toLowerCase();
    let prometheusResponse = '';
    
    if (lowerMessage.includes('motivação') || lowerMessage.includes('desanimar')) {
      prometheusResponse = `🔥 Nunca desista, herói! [...]`;
    } else if (lowerMessage.includes('cronograma') || lowerMessage.includes('estudar')) {
      prometheusResponse = `📅 Vamos criar seu cronograma [...]`;
    }
    // ... mais contextos
    
    return c.json({ 
      response: prometheusResponse,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Erro no chat:', error);
    return c.json({ error: 'Erro ao processar mensagem' }, 500);
  }
});
```

#### 3. Salvar Progresso do Game
```tsx
app.post('/make-server-50734795/save-progress', async (c) => {
  try {
    const { userId, area, score, questionsCompleted } = await c.req.json();
    
    // Salvar no KV Store
    await kv.set(`user:${userId}:progress:${area}`, {
      score,
      questionsCompleted,
      lastPlayed: new Date().toISOString()
    });
    
    return c.json({ success: true });
    
  } catch (error) {
    console.error('Erro ao salvar progresso:', error);
    return c.json({ error: 'Erro ao salvar progresso' }, 500);
  }
});
```

#### 4. Obter Ranking
```tsx
app.get('/make-server-50734795/ranking/:area', async (c) => {
  try {
    const area = c.req.param('area');
    
    // Buscar todos os scores da área
    const scores = await kv.getByPrefix(`user:*:progress:${area}`);
    
    // Ordenar por score
    const ranking = scores
      .sort((a, b) => b.value.score - a.value.score)
      .slice(0, 100) // Top 100
      .map((item, index) => ({
        position: index + 1,
        userId: item.key.split(':')[1],
        score: item.value.score
      }));
    
    return c.json({ ranking });
    
  } catch (error) {
    console.error('Erro ao buscar ranking:', error);
    return c.json({ error: 'Erro ao buscar ranking' }, 500);
  }
});
```

---

### KV Store (Key-Value Database)

**Arquivo:** `/supabase/functions/server/kv_store.tsx` (PROTEGIDO)

**Funções Disponíveis:**

#### get(key: string)
```tsx
// Buscar um único valor
const userData = await kv.get('user:123:profile');
// Retorna: { name: 'João', email: 'joao@email.com' }
```

#### set(key: string, value: any)
```tsx
// Salvar um valor
await kv.set('user:123:profile', {
  name: 'João Silva',
  email: 'joao@email.com',
  energy: 10
});
```

#### del(key: string)
```tsx
// Deletar um valor
await kv.del('user:123:session');
```

#### mget(keys: string[])
```tsx
// Buscar múltiplos valores
const [profile, progress] = await kv.mget([
  'user:123:profile',
  'user:123:progress'
]);
```

#### mset(entries: Array<[string, any]>)
```tsx
// Salvar múltiplos valores
await kv.mset([
  ['user:123:profile', { name: 'João' }],
  ['user:123:energy', 10],
  ['user:123:level', 5]
]);
```

#### getByPrefix(prefix: string)
```tsx
// Buscar todos os valores com prefixo
const allUserData = await kv.getByPrefix('user:123:');
// Retorna array de { key, value }
```

**Padrões de Chaves Recomendados:**
```
user:{userId}:profile          // Dados do perfil
user:{userId}:energy           // Energia atual
user:{userId}:progress:{area}  // Progresso em uma área
user:{userId}:inventory        // Inventário de itens
ranking:{area}                 // Ranking por área
game:session:{sessionId}       // Sessão de jogo
```

---

### Autenticação Supabase (Se Implementar)

**Sign Up:**
```tsx
// No servidor
const { data, error } = await supabase.auth.admin.createUser({
  email: 'usuario@email.com',
  password: 'senha-segura',
  user_metadata: { name: 'Nome Usuário' },
  email_confirm: true // Auto-confirmar (sem servidor de email)
});
```

**Sign In (Frontend):**
```tsx
const { data: { session }, error } = await supabase.auth.signInWithPassword({
  email: 'usuario@email.com',
  password: 'senha-segura'
});

const accessToken = session.access_token;
// Usar este token em requisições protegidas
```

**Rotas Protegidas (Servidor):**
```tsx
app.post('/make-server-50734795/protected-route', async (c) => {
  // Verificar token
  const accessToken = c.req.header('Authorization')?.split(' ')[1];
  
  const { data: { user }, error } = await supabase.auth.getUser(accessToken);
  
  if (!user) {
    return c.json({ error: 'Unauthorized' }, 401);
  }
  
  // Usuário autenticado - prosseguir
  const userId = user.id;
  // ...
});
```

---

## 🎮 Sistema de Gamificação

### Sistema de XP e Níveis

**Cálculo de XP:**
```tsx
const calculateXP = (correctAnswers: number, totalQuestions: number, timeBonus: number) => {
  const baseXP = correctAnswers * 10;
  const accuracyBonus = (correctAnswers / totalQuestions) * 50;
  return Math.round(baseXP + accuracyBonus + timeBonus);
};
```

**Progressão de Níveis:**
```tsx
const getLevelFromXP = (xp: number): number => {
  // Cada nível requer 100 XP a mais que o anterior
  // Nível 1: 0-100 XP
  // Nível 2: 100-300 XP (200 XP)
  // Nível 3: 300-600 XP (300 XP)
  return Math.floor(Math.sqrt(xp / 100)) + 1;
};
```

### Sistema de Conquistas

**Tipos de Conquistas:**
```tsx
interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'comum' | 'raro' | 'épico' | 'lendário';
  condition: (userData: UserData) => boolean;
  reward: {
    xp?: number;
    energy?: number;
    item?: string;
  };
}

const achievements: Achievement[] = [
  {
    id: 'first-victory',
    name: 'Primeira Vitória',
    description: 'Complete seu primeiro game',
    icon: '🏆',
    rarity: 'comum',
    condition: (user) => user.gamesCompleted >= 1,
    reward: { xp: 50, energy: 5 }
  },
  {
    id: 'perfect-score',
    name: 'Pontuação Perfeita',
    description: 'Acerte todas as questões em um game',
    icon: '💯',
    rarity: 'épico',
    condition: (user) => user.lastGameAccuracy === 100,
    reward: { xp: 200, item: 'golden-crown' }
  }
  // ... mais conquistas
];
```

### Sistema de Inventário

**Tipos de Itens:**
```tsx
interface InventoryItem {
  id: string;
  name: string;
  type: 'avatar' | 'item' | 'consumivel' | 'conquista';
  rarity: 'comum' | 'raro' | 'épico' | 'lendário';
  icon: React.ComponentType;
  description: string;
  owned: boolean;
  quantity?: number;
}
```

**Exemplos de Itens:**
- **Avatares:** Quíron, Hércules, Atena, Zeus
- **Consumíveis:** Energia Boost, XP Boost, Time Freeze
- **Itens:** Escudo de Estudos, Espada da Sabedoria
- **Conquistas:** Troféus, Medalhas, Badges

---

## 📱 Responsividade

### Breakpoints Tailwind

```css
/* Mobile First */
sm: 640px   /* Tablet pequeno */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop pequeno */
xl: 1280px  /* Desktop */
2xl: 1536px /* Desktop grande */
```

### Padrões Responsivos

**Grid Adaptativo:**
```tsx
// Mobile: 1 coluna
// Tablet: 2 colunas
// Desktop: 3-4 colunas
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
```

**Sidebar:**
```tsx
// Desktop: sempre visível (280px fixa)
<aside className="hidden lg:block w-[280px]">

// Mobile: colapsável com overlay
<aside className={`
  fixed lg:static inset-y-0 left-0 z-50
  ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
  transition-transform duration-300
`}>
```

**Tipografia:**
```tsx
// Títulos adaptáveis
<h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">

// Textos responsivos
<p className="text-sm md:text-base lg:text-lg">
```

---

## 🎨 Customização de Estilos

### Arquivo: /styles/globals.css

**Tokens de Design:**
```css
@layer theme {
  /* Cores principais */
  --color-primary: #A855F7;
  --color-secondary: #EF4444;
  --color-accent: #F59E0B;
  
  /* Espaçamentos */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  
  /* Border radius */
  --radius-sm: 0.5rem;
  --radius-md: 1rem;
  --radius-lg: 1.5rem;
  --radius-xl: 2rem;
  
  /* Sombras */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --shadow-glow: 0 0 20px rgba(168, 85, 247, 0.5);
}
```

**Tipografia Global:**
```css
/* NÃO sobrescrever com classes Tailwind de font-size/weight/line-height */
h1 { font-size: 2.5rem; font-weight: 700; line-height: 1.2; }
h2 { font-size: 2rem; font-weight: 600; line-height: 1.3; }
h3 { font-size: 1.75rem; font-weight: 600; line-height: 1.4; }
p { font-size: 1rem; line-height: 1.6; }
```

**Animações Customizadas:**
```css
@keyframes pulse-slow {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes rotate-y {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}

.animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
.animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
.animate-rotate-y { animation: rotate-y 3s linear infinite; }
```

---

## 🔒 Segurança

### Boas Práticas Implementadas

**1. Nunca expor SUPABASE_SERVICE_ROLE_KEY no frontend**
```tsx
// ❌ ERRADO
const supabase = createClient(url, serviceRoleKey); // No frontend

// ✅ CORRETO
const supabase = createClient(url, publicAnonKey); // No frontend
// serviceRoleKey só no servidor
```

**2. Validar entrada do usuário**
```tsx
app.post('/make-server-50734795/save-data', async (c) => {
  const { userId, data } = await c.req.json();
  
  // Validar
  if (!userId || typeof userId !== 'string') {
    return c.json({ error: 'Invalid userId' }, 400);
  }
  
  if (!data || typeof data !== 'object') {
    return c.json({ error: 'Invalid data' }, 400);
  }
  
  // Prosseguir...
});
```

**3. Rate Limiting (a implementar)**
```tsx
// Limitar requisições por IP/usuário
const rateLimiter = new Map();

app.use('/make-server-50734795/*', async (c, next) => {
  const ip = c.req.header('x-forwarded-for') || 'unknown';
  const now = Date.now();
  const limit = rateLimiter.get(ip);
  
  if (limit && now - limit < 1000) {
    return c.json({ error: 'Too many requests' }, 429);
  }
  
  rateLimiter.set(ip, now);
  await next();
});
```

**4. Sanitizar outputs**
```tsx
// Evitar XSS em mensagens do chat
const sanitizeMessage = (message: string): string => {
  return message
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
};
```

---

## 🚀 Deploy e Produção

### Build do Projeto

```bash
# Instalar dependências
npm install

# Build de produção
npm run build

# Preview do build
npm run preview
```

### Variáveis de Ambiente Necessárias

```env
# Supabase (geradas automaticamente)
SUPABASE_URL=https://xxxxxx.supabase.co
SUPABASE_ANON_KEY=xxxxxx
SUPABASE_SERVICE_ROLE_KEY=xxxxxx (só no servidor)

# Opcionais (se integrar)
VITE_GEMINI_API_KEY=xxxxxx
RESEND_API_KEY=xxxxxx
STRIPE_SECRET_KEY=xxxxxx
```

### Otimizações de Performance

**1. Lazy Loading de Componentes:**
```tsx
const Analytics = lazy(() => import('./Analytics'));
const ThematicAreas = lazy(() => import('./ThematicAreas'));

// Uso com Suspense
<Suspense fallback={<LoadingBox />}>
  <Analytics />
</Suspense>
```

**2. Memoização:**
```tsx
export const DashboardView = memo(function DashboardView() {
  // Componente só re-renderiza se props mudarem
});
```

**3. Service Worker (PWA):**
```tsx
// /utils/registerServiceWorker.tsx
// Cacheia assets para funcionamento offline
```

---

## 🧪 Debugging e Logs

### Logs no Servidor

```tsx
app.use('*', logger(console.log));

// Logs customizados
console.log(`[INFO] User ${userId} completed game`);
console.error(`[ERROR] Failed to save progress: ${error.message}`);
console.warn(`[WARN] Low energy for user ${userId}`);
```

### Logs no Frontend

```tsx
// Desenvolvimento
if (import.meta.env.DEV) {
  console.log('Debug info:', data);
}

// Erros sempre logados
catch (error) {
  console.error('Error in component:', error);
}
```

### Monitoramento de Erros

```tsx
// ErrorBoundary.tsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo);
    // Enviar para serviço de monitoramento (Sentry, etc)
  }
}
```

---

## 📋 Checklist de Funcionalidades

### ✅ Implementado

- [x] Dashboard completo com todas as seções
- [x] Sidebar com 11 itens de menu + badges
- [x] 4 Áreas Temáticas (Jurídica, Policial, Gerais, Fiscal)
- [x] Sistema de Progressão de Carreira (4 níveis por área)
- [x] Chat IA Prometheus com respostas contextuais
- [x] Sistema de Energia Freemium
- [x] Game Épico (estrutura completa, integração Godot pendente)
- [x] Tela de Resultados do Game (single e multiplayer)
- [x] Lobby Multiplayer
- [x] Regras do Game
- [x] Perfil do Usuário (5 abas)
- [x] Sistema de Inventário
- [x] Ranking Global (5 categorias)
- [x] Fórum da Comunidade (4 categorias)
- [x] Banner de Regras da Comunidade
- [x] Loja (3 departamentos)
- [x] Sistema de Carrinho
- [x] Banner Premium
- [x] Modal de Cadastro/Login
- [x] Modal de Consentimento LGPD/GDPR
- [x] Analytics de Desempenho
- [x] Service Worker (PWA)
- [x] Responsividade completa
- [x] Servidor Hono com rotas básicas
- [x] Integração Supabase KV Store

### 🚧 A Implementar

- [ ] Integração real Godot 4
- [ ] Sistema de Autenticação completo
- [ ] Persistência de dados do usuário
- [ ] Sistema de pagamentos (Stripe/MercadoPago)
- [ ] Upload de avatares
- [ ] Sistema de notificações
- [ ] Chat em tempo real (comunidade)
- [ ] Sistema de amigos
- [ ] Conquistas desbloqueáveis
- [ ] Leaderboards em tempo real
- [ ] Modo offline completo
- [ ] Analytics de uso (Google Analytics)
- [ ] SEO optimization
- [ ] Testes automatizados

---

## 🛠️ Como Adicionar Novas Funcionalidades

### 1. Adicionar Nova Rota no Servidor

```tsx
// /supabase/functions/server/index.tsx

app.post('/make-server-50734795/nova-rota', async (c) => {
  try {
    // 1. Validar entrada
    const { campo1, campo2 } = await c.req.json();
    
    if (!campo1) {
      return c.json({ error: 'campo1 é obrigatório' }, 400);
    }
    
    // 2. Processar lógica
    const resultado = processarDados(campo1, campo2);
    
    // 3. Salvar no KV (se necessário)
    await kv.set(`chave:${campo1}`, resultado);
    
    // 4. Retornar resposta
    return c.json({ 
      success: true, 
      data: resultado 
    });
    
  } catch (error) {
    console.error('[ERROR] nova-rota:', error);
    return c.json({ 
      error: 'Erro ao processar requisição',
      details: error.message 
    }, 500);
  }
});
```

### 2. Adicionar Nova View

```tsx
// 1. Criar componente
// /components/NovaView.tsx
export function NovaView() {
  return (
    <div className="p-6">
      <h1>Nova Funcionalidade</h1>
      {/* ... */}
    </div>
  );
}

// 2. Adicionar em App.tsx
import { NovaView } from './components/NovaView';

type ViewType = 'dashboard' | 'nova-view' | ...;

const renderView = () => {
  switch (activeView) {
    case 'nova-view':
      return <NovaView />;
    // ...
  }
};

// 3. Adicionar no Sidebar
// /components/layout/Sidebar.tsx
const menuItems = [
  // ...
  { 
    id: 'nova-view', 
    icon: IconeEscolhido, 
    label: 'Nova Funcionalidade' 
  }
];
```

### 3. Adicionar Nova Área Temática

```tsx
// /components/ThematicAreas.tsx

const areas = [
  // ... áreas existentes
  {
    id: 'nova-area',
    name: 'Nome da Nova Área',
    icon: IconeEscolhido,
    color: 'teal',  // Escolher cor
    gradient: 'from-teal-600 to-teal-500',
    careers: [
      'Iniciante',
      'Intermediário',
      'Avançado',
      'MESTRE'
    ],
    subjects: [
      'Matéria 1',
      'Matéria 2',
      'Matéria 3'
    ]
  }
];
```

### 4. Adicionar Nova Conquista

```tsx
// Criar sistema de conquistas se ainda não existir
// /utils/achievements.ts

export const newAchievement = {
  id: 'conquista-unica',
  name: 'Nome da Conquista',
  description: 'Descrição detalhada',
  icon: '🏅',
  rarity: 'épico',
  condition: (userData) => {
    // Lógica para verificar se foi conquistado
    return userData.someCondition === true;
  },
  reward: {
    xp: 100,
    energy: 5,
    item: 'item-especial'
  }
};
```

---

## 🎓 Guia de Desenvolvimento

### Convenções de Código

**1. Nomenclatura:**
```tsx
// Componentes: PascalCase
export function UserProfile() {}

// Hooks: camelCase com "use" prefix
export function useUserData() {}

// Constantes: UPPER_SNAKE_CASE
const MAX_ENERGY = 100;

// Variáveis: camelCase
const userName = 'João';
```

**2. Estrutura de Componentes:**
```tsx
import React, { useState, useEffect } from 'react';
import { Icon1, Icon2 } from 'lucide-react';

interface ComponentProps {
  prop1: string;
  prop2?: number;
  onAction: () => void;
}

export function Component({ prop1, prop2 = 0, onAction }: ComponentProps) {
  // 1. Estados
  const [state1, setState1] = useState('');
  
  // 2. Efeitos
  useEffect(() => {
    // ...
  }, []);
  
  // 3. Handlers
  const handleClick = () => {
    // ...
  };
  
  // 4. Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  );
}
```

**3. Classes Tailwind:**
```tsx
// Ordem recomendada:
// Layout → Sizing → Spacing → Typography → Visual → Interactive

<div className="
  flex items-center justify-between  // Layout
  w-full h-12                        // Sizing
  px-4 py-2 gap-2                    // Spacing
  text-lg font-semibold              // Typography (evitar, usar defaults)
  bg-gray-800 border-2 border-gray-700 rounded-xl  // Visual
  hover:bg-gray-700 transition-all   // Interactive
">
```

**4. Tratamento de Erros:**
```tsx
// Sempre usar try-catch em operações assíncronas
const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Request failed');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    // Mostrar mensagem ao usuário
    showErrorToast('Erro ao carregar dados');
    return null;
  }
};
```

### Performance Tips

**1. Evitar Re-renders Desnecessários:**
```tsx
// Use memo para componentes que não mudam frequentemente
export const ExpensiveComponent = memo(function ExpensiveComponent({ data }) {
  // ...
});

// Use useMemo para cálculos pesados
const sortedData = useMemo(() => {
  return data.sort((a, b) => b.score - a.score);
}, [data]);

// Use useCallback para funções passadas como props
const handleClick = useCallback(() => {
  doSomething();
}, [dependency]);
```

**2. Lazy Loading:**
```tsx
// Carregar componentes pesados sob demanda
const HeavyComponent = lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <HeavyComponent />
</Suspense>
```

**3. Otimizar Imagens:**
```tsx
// Usar ImageWithFallback para imagens dinâmicas
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src={imageUrl} 
  alt="Description"
  className="w-full h-auto"
/>
```

---

## 📞 Suporte e Manutenção

### Estrutura de Logs

```tsx
// Padrão de logs para debugging
console.log('[COMPONENT_NAME] Info:', data);
console.warn('[COMPONENT_NAME] Warning:', warning);
console.error('[COMPONENT_NAME] Error:', error);
```

### Monitoramento de Performance

```tsx
// Medir performance de operações
const startTime = performance.now();
await heavyOperation();
const endTime = performance.now();
console.log(`Operation took ${endTime - startTime}ms`);
```

### Versionamento

```json
// package.json
{
  "version": "1.0.0",
  "description": "Quiron Concursos - Plataforma de Preparação para Concursos Públicos"
}
```

---

## 🎯 Roadmap Futuro

### Versão 2.0 (Próximas Features)

1. **Sistema de Mentoria**
   - Conectar alunos com mentores aprovados
   - Agendamento de sessões
   - Sistema de avaliação

2. **Simulados Completos**
   - Provas completas de concursos reais
   - Timer rigoroso
   - Correção automática com gabarito

3. **Planos de Estudo Personalizados**
   - IA analisa fraquezas do aluno
   - Cria cronograma otimizado
   - Ajusta dinamicamente baseado no progresso

4. **Modo Competitivo Sazonal**
   - Temporadas com rankings resetados
   - Recompensas exclusivas
   - Torneios temáticos

5. **Mobile App (React Native)**
   - Versão nativa iOS/Android
   - Notificações push
   - Estudo offline

### Versão 3.0 (Futuro Distante)

1. **Realidade Aumentada**
   - Visualizar conceitos em 3D
   - Mapas mentais interativos

2. **Comunidade Global**
   - Grupos de estudo por concurso
   - Lives com professores
   - Eventos presenciais

---

## 📚 Recursos Adicionais

### Bibliotecas Utilizadas

```json
{
  "dependencies": {
    "react": "^18.x",
    "react-dom": "^18.x",
    "@supabase/supabase-js": "latest",
    "lucide-react": "latest",
    "recharts": "latest",
    "motion": "latest",
    "hono": "latest"
  }
}
```

### Links Úteis

- **Tailwind CSS:** https://tailwindcss.com/docs
- **Lucide Icons:** https://lucide.dev/icons
- **Supabase Docs:** https://supabase.com/docs
- **Hono Framework:** https://hono.dev
- **React Docs:** https://react.dev

---

## 🏁 Conclusão

Esta documentação cobre todos os aspectos principais do **Quiron Concursos**. Para dúvidas específicas ou implementações customizadas, consulte os comentários no código-fonte ou abra uma issue no repositório.

**Boa sorte na sua jornada heroica de desenvolvimento! 🏛️⚡**

---

**Última Atualização:** Dezembro 2024  
**Versão da Documentação:** 1.0  
**Mantido por:** Equipe Quiron
