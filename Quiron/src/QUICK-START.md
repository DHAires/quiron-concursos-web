# ⚡ Quick Start - Quiron Concursos

## 🚀 Início Rápido para Desenvolvedores

### Instalação

```bash
# 1. Clone o projeto
git clone <repository-url>
cd quiron-concursos

# 2. Instale dependências
npm install

# 3. Configure variáveis de ambiente (já configuradas automaticamente)
# As credenciais do Supabase estão em /utils/supabase/info.tsx

# 4. Inicie o servidor de desenvolvimento
npm run dev
```

---

## 📂 Arquivos Principais

### Não Editar (Protegidos)
```
/supabase/functions/server/kv_store.tsx
/utils/supabase/info.tsx
/components/figma/ImageWithFallback.tsx
```

### Editar Livremente
```
/App.tsx                          # Roteamento principal
/components/layout/Sidebar.tsx    # Menu lateral
/components/ThematicAreas.tsx     # Áreas temáticas
/components/EpicGame.tsx          # Game principal
/components/PrometheusChat.tsx    # Chat IA
/supabase/functions/server/index.tsx  # Servidor backend
```

---

## 🎯 Tarefas Comuns

### 1. Adicionar Item no Menu

```tsx
// /components/layout/Sidebar.tsx

const menuItems = [
  // ... existentes
  {
    id: 'novo-item',
    icon: IconeEscolhido,  // De lucide-react
    label: 'Novo Item',
    badge: 'NOVO'  // Opcional
  }
];
```

### 2. Criar Nova Página

```tsx
// 1. Criar componente em /components/NovaPagina.tsx
export function NovaPagina() {
  return (
    <div className="p-6">
      <h1 className="text-4xl mb-6">Nova Página</h1>
      {/* Conteúdo */}
    </div>
  );
}

// 2. Importar e adicionar rota em /App.tsx
import { NovaPagina } from './components/NovaPagina';

type ViewType = 'dashboard' | 'nova-pagina' | ...;

case 'nova-pagina':
  return <NovaPagina />;
```

### 3. Adicionar Rota no Servidor

```tsx
// /supabase/functions/server/index.tsx

app.post('/make-server-50734795/nova-rota', async (c) => {
  try {
    const { data } = await c.req.json();
    
    // Processar dados
    const resultado = processar(data);
    
    // Salvar no banco
    await kv.set('chave', resultado);
    
    return c.json({ success: true, data: resultado });
  } catch (error) {
    console.error('Erro:', error);
    return c.json({ error: error.message }, 500);
  }
});
```

### 4. Fazer Requisição HTTP

```tsx
import { projectId, publicAnonKey } from './utils/supabase/info';

const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-50734795/rota`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${publicAnonKey}`
    },
    body: JSON.stringify({ data: 'valor' })
  }
);

const result = await response.json();
```

### 5. Salvar/Buscar Dados (KV Store)

```tsx
// No servidor (/supabase/functions/server/index.tsx)
import * as kv from './kv_store.tsx';

// Salvar
await kv.set('user:123:profile', { 
  name: 'João', 
  email: 'joao@email.com' 
});

// Buscar
const profile = await kv.get('user:123:profile');

// Buscar múltiplos
const dados = await kv.getByPrefix('user:123:');

// Deletar
await kv.del('user:123:session');
```

---

## 🎨 Guia de Estilos

### Cores das Áreas Temáticas

```tsx
// Jurídica (Azul)
className="bg-gradient-to-r from-blue-600 to-blue-500"

// Policial (Vermelho Brilhante)
className="bg-gradient-to-r from-red-600 to-red-500"

// Conhecimentos Gerais (Roxo)
className="bg-gradient-to-r from-purple-600 to-purple-500"

// Fiscal-Bancária (Amarelo)
className="bg-gradient-to-r from-yellow-600 to-yellow-500"
```

### Cards Padrão

```tsx
<div className="
  p-6 rounded-2xl
  bg-gradient-to-br from-gray-900 to-black
  border-2 border-gray-700
  hover:border-purple-500
  transition-all
  shadow-lg hover:shadow-purple-500/30
">
  {/* Conteúdo */}
</div>
```

### Botões

```tsx
// Botão Primário (Roxo)
<button className="
  px-6 py-3 rounded-xl
  bg-gradient-to-r from-purple-600 to-purple-500
  hover:from-purple-500 hover:to-purple-400
  transition-all
  shadow-lg shadow-purple-500/50
  hover:scale-105
">
  Texto
</button>

// Botão Perigo (Vermelho)
<button className="
  px-6 py-3 rounded-xl
  bg-gradient-to-r from-red-600 to-red-500
  hover:from-red-500 hover:to-red-400
  transition-all
  shadow-lg shadow-red-500/50
">
  Excluir
</button>

// Botão Secundário (Cinza)
<button className="
  px-6 py-3 rounded-xl
  bg-gray-800 hover:bg-gray-700
  border-2 border-gray-600
  transition-all
">
  Cancelar
</button>
```

### Ícones (Lucide React)

```tsx
import { Home, User, Trophy, Settings } from 'lucide-react';

// Tamanhos comuns
<Home className="w-4 h-4" />   // Pequeno
<Home className="w-6 h-6" />   // Médio
<Home className="w-8 h-8" />   // Grande
<Home className="w-12 h-12" /> // Extra grande
```

---

## 🔧 Utilitários

### Navegação

```tsx
import { useNavigate } from './hooks/useNavigate';

const {
  navigateToDashboard,
  navigateToQuestions,
  navigateToGame,
  navigateToRanking,
  navigateToForum,
  navigateToProfile,
  navigateToStore,
  navigateToChat
} = useNavigate();

// Usar
<button onClick={navigateToGame}>Ir para Game</button>
```

### Formatação de Dados

```tsx
// Data
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(date);
};

// Tempo (mm:ss)
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

// Pontuação
const formatScore = (score: number) => {
  return score.toLocaleString('pt-BR');
};
```

---

## 🐛 Debug

### Console Logs Estruturados

```tsx
console.log('[COMPONENT] Info:', data);
console.warn('[COMPONENT] Warning:', warning);
console.error('[COMPONENT] Error:', error);
```

### Ver Dados do KV Store

```tsx
// No servidor
app.get('/make-server-50734795/debug/kv/:key', async (c) => {
  const key = c.req.param('key');
  const data = await kv.get(key);
  return c.json({ key, data });
});
```

### Testar Rotas do Servidor

```bash
# Health check
curl https://PROJECT_ID.supabase.co/functions/v1/make-server-50734795/health

# Chat
curl -X POST https://PROJECT_ID.supabase.co/functions/v1/make-server-50734795/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ANON_KEY" \
  -d '{"message": "Olá Prometheus"}'
```

---

## 📱 Responsividade

### Breakpoints Rápidos

```tsx
// Mobile apenas
<div className="block md:hidden">Mobile</div>

// Desktop apenas
<div className="hidden md:block">Desktop</div>

// Grid responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

// Texto adaptável
<h1 className="text-2xl md:text-4xl lg:text-6xl">
```

---

## ✅ Checklist Antes de Commitar

- [ ] Código sem erros no console
- [ ] Componentes testados em mobile e desktop
- [ ] Logs de debug removidos (deixar apenas erros)
- [ ] Imports organizados e não-usados removidos
- [ ] Classes Tailwind não duplicadas
- [ ] Não usar `font-size`, `font-weight`, `line-height` do Tailwind
- [ ] Tratamento de erros em requests HTTP
- [ ] Loading states implementados
- [ ] Acessibilidade básica (alt em imagens, labels em inputs)

---

## 🚨 Erros Comuns

### 1. Erro de CORS
```tsx
// ❌ Esqueceu de adicionar CORS no servidor
// ✅ Sempre adicionar
app.use('*', cors());
```

### 2. Rota sem prefixo
```tsx
// ❌ ERRADO
app.get('/health', ...)

// ✅ CORRETO
app.get('/make-server-50734795/health', ...)
```

### 3. Token não enviado
```tsx
// ❌ ERRADO
headers: { 'Content-Type': 'application/json' }

// ✅ CORRETO
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${publicAnonKey}`
}
```

### 4. Service Role Key exposto
```tsx
// ❌ NUNCA no frontend
const supabase = createClient(url, serviceRoleKey);

// ✅ Usar apenas no servidor
const supabase = createClient(
  Deno.env.get('SUPABASE_URL'),
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
);
```

---

## 🎓 Recursos

- **Documentação Completa:** `/DOCUMENTATION.md`
- **Tailwind Docs:** https://tailwindcss.com
- **Lucide Icons:** https://lucide.dev
- **Supabase Docs:** https://supabase.com/docs
- **Hono Framework:** https://hono.dev

---

## 💡 Dicas Pro

1. **Use Lazy Loading** para componentes pesados
2. **Memoize** componentes que não mudam frequentemente
3. **Use Suspense** com fallbacks de loading
4. **Prefira CSS Tailwind** ao inline styles
5. **Sempre valide inputs** no servidor
6. **Log todos os erros** para debugging
7. **Teste em mobile** antes de commitar
8. **Use TypeScript** para type safety

---

**Happy Coding! 🚀**
