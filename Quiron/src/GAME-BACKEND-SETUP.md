# 🎮 GAME BACKEND - SETUP COMPLETO

## ✅ O QUE FOI CRIADO

### 1. Backend Completo (`/supabase/functions/server/game_routes.tsx`)

Rotas criadas:

- ✅ `POST /make-server-50734795/game/seed` - Popular banco com questões
- ✅ `GET /make-server-50734795/game/questions` - Buscar questões (com filtros)
- ✅ `GET /make-server-50734795/game/questions/match` - Buscar 30 questões para partida
- ✅ `GET /make-server-50734795/game/questions/:id` - Buscar questão específica
- ✅ `GET /make-server-50734795/game/stats` - Estatísticas das questões
- ✅ `POST /make-server-50734795/game/result` - Salvar resultado de partida
- ✅ `GET /make-server-50734795/game/history/:userId` - Histórico do usuário
- ✅ `GET /make-server-50734795/game/user-stats/:userId` - Estatísticas do usuário

### 2. Frontend

- ✅ Hook `useGameQuestions` - Buscar questões do backend
- ✅ Hook `useGameMatch` - Criar partida completa
- ✅ Hook `useSaveGameResult` - Salvar resultados
- ✅ Hook `useGameHistory` - Histórico de partidas
- ✅ Componente `GameSetupHelper` - Interface visual para seed
- ✅ Script `seedGameQuestions.ts` - Popular banco de dados

### 3. Integração

- ✅ Rotas integradas no `index.tsx` principal
- ✅ Armazenamento no KV Store do Supabase
- ✅ Sistema de índices por área e matéria

---

## 🚀 COMO USAR

### PASSO 1: Executar o Seed (UMA VEZ APENAS)

Quando você abrir o aplicativo, verá um card amarelo no canto inferior direito chamado "Game Setup Helper".

**Clique em "Executar Seed"** para popular o banco de dados com as questões de exemplo.

Você verá:
```
✅ Seed concluído! 26/26 questões salvas.
```

Depois, clique em **"Ver Stats"** para confirmar que as questões foram salvas:
```
📊 Estatísticas por Área:

Jurídica: 6 questões (Fácil: 2, Médio: 3, Difícil: 1)
Policial: 4 questões (Fácil: 2, Médio: 1, Difícil: 1)
Conhecimentos Gerais: 4 questões (Fácil: 2, Médio: 2, Difícil: 0)
Fiscal-Bancária: 6 questões (Fácil: 3, Médio: 3, Difícil: 0)
```

### PASSO 2: Remover o GameSetupHelper

Após o seed, você pode remover o componente temporário do `App.tsx`:

1. Abra `/App.tsx`
2. Remova a linha: `import { GameSetupHelper } from './components/GameSetupHelper';`
3. Remova o estado: `const [showGameSetup, setShowGameSetup] = useState(true);`
4. Remova o componente no final do JSX:
```tsx
{showGameSetup && (
  <GameSetupHelper onClose={() => setShowGameSetup(false)} />
)}
```

### PASSO 3: Usar nos Componentes

Agora você pode usar os hooks para buscar questões do backend:

#### Exemplo 1: Buscar 10 questões da área jurídica

```tsx
import { useGameQuestions } from '../hooks/useGameQuestions';

function MyComponent() {
  const { questions, loading, error, fetchQuestions } = useGameQuestions({
    area: 'juridica',
    count: 10,
    difficulty: 'medio'
  });

  useEffect(() => {
    fetchQuestions();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <div>
      {questions.map(q => (
        <div key={q.id}>
          <p>{q.question}</p>
          <p>Resposta: {q.correctAnswer ? 'CERTO' : 'ERRADO'}</p>
          <p>{q.explanation}</p>
        </div>
      ))}
    </div>
  );
}
```

#### Exemplo 2: Criar uma partida completa (30 questões)

```tsx
import { useGameMatch } from '../hooks/useGameQuestions';

function GameComponent() {
  const { match, loading, fetchMatch } = useGameMatch('juridica');

  const startMatch = async () => {
    const matchData = await fetchMatch();
    console.log('Partida criada:', matchData);
    // matchData.phases[0] = Fase 1 (fácil)
    // matchData.phases[1] = Fase 2 (médio)
    // matchData.phases[2] = Fase 3 (difícil)
  };

  return (
    <button onClick={startMatch}>
      Iniciar Partida
    </button>
  );
}
```

#### Exemplo 3: Salvar resultado

```tsx
import { useSaveGameResult } from '../hooks/useGameQuestions';

function ResultScreen() {
  const { saveResult, loading } = useSaveGameResult();

  const handleSave = async () => {
    const result = await saveResult({
      userId: 'user_123',
      area: 'juridica',
      score: 850,
      correctAnswers: 27,
      totalQuestions: 30,
      timeSpent: 765, // segundos
      difficulty: 'medio'
    });
    
    console.log('Resultado salvo:', result.resultId);
  };

  return (
    <button onClick={handleSave}>
      Salvar Resultado
    </button>
  );
}
```

---

## 📦 ADICIONAR MAIS QUESTÕES

### Opção 1: Adicionar no arquivo `/utils/seedGameQuestions.ts`

Edite o array `gameQuestionsData` e adicione novas questões:

```typescript
{
  id: 'const_004',
  area: 'juridica',
  subject: 'Direito Constitucional',
  question: 'Sua pergunta aqui...',
  correctAnswer: true,
  explanation: 'Explicação aqui...',
  difficulty: 'medio'
}
```

Depois, execute o seed novamente (o sistema não duplica questões com mesmo ID).

### Opção 2: Importar de arquivo externo

Se você tem as questões no formato do `/data/gameQuestions.ts`, crie um script:

```typescript
import { gameQuestions } from '../data/gameQuestions';
import { seedGameQuestions } from './seedGameQuestions';

// Converter formato se necessário
const questionsToSeed = gameQuestions.map(q => ({
  id: q.id,
  area: q.area,
  subject: q.subject,
  question: q.question,
  correctAnswer: q.correctAnswer,
  explanation: q.explanation,
  difficulty: q.difficulty
}));

// Enviar para o backend
fetch(`https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/seed`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ questions: questionsToSeed })
});
```

---

## 🔍 TESTAR AS ROTAS

### Teste via Console do Navegador

Abra o console (F12) e execute:

```javascript
// Buscar questões
const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions?area=juridica&count=5`, {
  headers: {
    'Authorization': `Bearer ${publicAnonKey}`,
  }
});
const data = await response.json();
console.log(data);
```

### Teste via cURL

```bash
curl -X GET \
  "https://YOUR_PROJECT_ID.supabase.co/functions/v1/make-server-50734795/game/questions?area=juridica&count=5" \
  -H "Authorization: Bearer YOUR_ANON_KEY"
```

---

## ⚠️ TROUBLESHOOTING

### Problema: "No questions found"

**Solução:** Execute o seed primeiro usando o GameSetupHelper.

### Problema: "Failed to fetch questions"

**Causa:** Backend pode não estar respondendo.

**Solução:**
1. Verifique se o projeto Supabase está ativo
2. Teste a rota de health: `/make-server-50734795/health`
3. Veja os logs do Supabase no painel

### Problema: Questões duplicadas após seed

**Explicação:** O sistema verifica IDs antes de adicionar. Se você rodou o seed 2x com as MESMAS questões (mesmo ID), elas NÃO foram duplicadas.

---

## 📝 ESTRUTURA DE DADOS

### Questão (GameQuestion)

```typescript
{
  id: string;                    // ID único
  area: 'juridica' | 'policial' | 'fiscal-bancaria' | 'conhecimentos-gerais';
  subject: string;               // Ex: 'Direito Constitucional'
  question: string;              // Texto da questão
  correctAnswer: boolean;        // true = CERTO, false = ERRADO
  explanation: string;           // Explicação detalhada
  difficulty: 'facil' | 'medio' | 'dificil';
}
```

### Resultado de Partida

```typescript
{
  id: string;
  userId: string;
  area: string;
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  accuracy: number;              // Calculado automaticamente
  timeSpent: number;             // Em segundos
  difficulty: string;
  timestamp: string;             // ISO 8601
}
```

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ Seed executado com sucesso
2. ✅ Backend funcionando
3. ⬜ Integrar no componente EpicGame
4. ⬜ Adicionar mais questões (mínimo 100 por área)
5. ⬜ Conectar com Godot Game (se aplicável)
6. ⬜ Implementar ranking global
7. ⬜ Sistema de conquistas

---

## 📞 SUPORTE

Se encontrar problemas:

1. Verifique os logs do console (F12)
2. Verifique os logs do Supabase no painel
3. Teste as rotas manualmente
4. Confira se o `projectId` e `publicAnonKey` estão corretos em `/utils/supabase/info.tsx`

---

**🔥 Sistema pronto para uso! Boa sorte com o desenvolvimento! 🏆**
