# 🎮 EXEMPLO DE INTEGRAÇÃO NO EPICGAME

## Como Integrar o Backend no Componente EpicGame.tsx

Este é um exemplo prático de como modificar o `EpicGame.tsx` para buscar questões do backend.

---

## ANTES (Mock) ❌

```tsx
// Dados mockados no código
const mockQuestions = [
  { id: 1, question: "...", answer: true },
  { id: 2, question: "...", answer: false },
  // ...
];

function EpicGame() {
  const [questions, setQuestions] = useState(mockQuestions);
  
  // Usa questões mockadas diretamente
  return <div>{questions.map(q => ...)}</div>;
}
```

---

## DEPOIS (Backend) ✅

```tsx
import { useGameQuestions, useGameMatch } from '../hooks/useGameQuestions';

function EpicGame({ initialArea, onBack }) {
  const [selectedArea, setSelectedArea] = useState(null);
  const [gameMode, setGameMode] = useState<'quick' | 'match'>('quick');
  
  // Hook para buscar questões rápidas (10 questões)
  const { 
    questions, 
    loading: loadingQuestions, 
    fetchQuestions 
  } = useGameQuestions();
  
  // Hook para buscar partida completa (30 questões)
  const { 
    match, 
    loading: loadingMatch, 
    fetchMatch 
  } = useGameMatch(selectedArea?.id || '');

  // Quando seleciona área e modo rápido
  const startQuickGame = async (area: string) => {
    await fetchQuestions({
      area,
      count: 10,
      difficulty: 'medio'
    });
  };

  // Quando seleciona área e modo partida completa
  const startMatchGame = async (area: string) => {
    const partida = await fetchMatch(area);
    // partida.phases[0] = Fase 1 (fácil)
    // partida.phases[1] = Fase 2 (médio)
    // partida.phases[2] = Fase 3 (difícil)
  };

  return (
    <div>
      {/* Seleção de Área */}
      <button onClick={() => {
        setSelectedArea('juridica');
        startQuickGame('juridica');
      }}>
        Jogar Área Jurídica
      </button>

      {/* Loading */}
      {loadingQuestions && <p>Carregando questões...</p>}

      {/* Questões */}
      {questions.map(q => (
        <QuestionCard 
          key={q.id}
          question={q.question}
          correctAnswer={q.correctAnswer}
          explanation={q.explanation}
        />
      ))}
    </div>
  );
}
```

---

## FLUXO COMPLETO COM TELA DE JOGO

### 1. Adicionar Estados

```tsx
function EpicGame({ onBack }) {
  // Estados existentes
  const [step, setStep] = useState<'area' | 'mode' | 'playing' | 'result'>('area');
  const [selectedArea, setSelectedArea] = useState(null);
  
  // NOVOS estados para o game
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [startTime, setStartTime] = useState(null);
  
  // Hooks do backend
  const { questions, loading, fetchQuestions } = useGameQuestions();
  const { saveResult } = useSaveGameResult();
```

### 2. Função para Iniciar Jogo

```tsx
const handleStartGame = async (area: string, difficulty: string) => {
  setStep('playing');
  setStartTime(Date.now());
  setCurrentQuestionIndex(0);
  setScore(0);
  setCorrectAnswers(0);
  
  // Buscar questões do backend
  await fetchQuestions({
    area,
    difficulty,
    count: 10
  });
};
```

### 3. Função para Responder Questão

```tsx
const handleAnswer = (userAnswer: boolean) => {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = userAnswer === currentQuestion.correctAnswer;
  
  if (isCorrect) {
    setCorrectAnswers(prev => prev + 1);
    setScore(prev => prev + 100); // 100 pontos por acerto
  }
  
  // Próxima questão ou finalizar
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex(prev => prev + 1);
  } else {
    finishGame();
  }
};
```

### 4. Função para Finalizar Jogo

```tsx
const finishGame = async () => {
  const timeSpent = Math.floor((Date.now() - startTime) / 1000); // segundos
  
  // Salvar resultado no backend
  await saveResult({
    userId: user?.id || 'guest',
    area: selectedArea.id,
    score,
    correctAnswers,
    totalQuestions: questions.length,
    timeSpent,
    difficulty: 'medio'
  });
  
  // Ir para tela de resultados
  setStep('result');
};
```

### 5. Renderizar Tela de Jogo

```tsx
const renderPlayingScreen = () => {
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="w-12 h-12 animate-spin text-yellow-500" />
        <p className="ml-4 text-xl">Carregando questões...</p>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-red-500">
          Nenhuma questão disponível. Execute o seed primeiro!
        </p>
        <button 
          onClick={() => setStep('area')}
          className="mt-4 px-6 py-3 bg-blue-600 rounded-lg"
        >
          Voltar
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Progresso */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span>Questão {currentQuestionIndex + 1} de {questions.length}</span>
          <span>Pontuação: {score}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-yellow-500 h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Questão */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-yellow-500">
        <div className="mb-4">
          <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">
            {currentQuestion.subject}
          </span>
          <span className="ml-2 px-3 py-1 bg-purple-600 rounded-full text-sm">
            {currentQuestion.difficulty}
          </span>
        </div>

        <h2 className="text-2xl mb-8">{currentQuestion.question}</h2>

        {/* Botões de Resposta */}
        <div className="flex gap-4">
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 py-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 rounded-xl text-2xl font-bold transition transform hover:scale-105"
          >
            ✓ CERTO
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 py-6 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-xl text-2xl font-bold transition transform hover:scale-105"
          >
            ✗ ERRADO
          </button>
        </div>
      </div>
    </div>
  );
};
```

### 6. Renderizar Tela de Resultados

```tsx
const renderResultScreen = () => {
  const accuracy = (correctAnswers / questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-center">
      {/* Confetti se acertou mais de 70% */}
      {accuracy >= 70 && <Confetti />}

      <h1 className="text-5xl font-bold mb-4">
        {accuracy >= 70 ? '🏆 Parabéns!' : '💪 Continue Tentando!'}
      </h1>

      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border-2 border-yellow-500 mb-8">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div>
            <p className="text-gray-400 mb-2">Acertos</p>
            <p className="text-4xl font-bold text-green-500">
              {correctAnswers}/{questions.length}
            </p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Pontuação</p>
            <p className="text-4xl font-bold text-yellow-500">{score}</p>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Acurácia</p>
            <p className="text-4xl font-bold text-blue-500">
              {accuracy.toFixed(0)}%
            </p>
          </div>
        </div>

        {/* Gráfico de desempenho */}
        <div className="w-full bg-gray-700 rounded-full h-4">
          <div 
            className={`h-4 rounded-full ${
              accuracy >= 70 ? 'bg-green-500' : 
              accuracy >= 50 ? 'bg-yellow-500' : 
              'bg-red-500'
            }`}
            style={{ width: `${accuracy}%` }}
          />
        </div>
      </div>

      {/* Botões */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => {
            setStep('area');
            setSelectedArea(null);
          }}
          className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-xl"
        >
          Voltar ao Menu
        </button>
        <button
          onClick={() => handleStartGame(selectedArea.id, 'medio')}
          className="px-8 py-4 bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl"
        >
          Jogar Novamente
        </button>
        <button
          onClick={() => window.location.hash = '#/ranking'}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl"
        >
          Ver Ranking
        </button>
      </div>
    </div>
  );
};
```

### 7. Renderizar Baseado no Step

```tsx
return (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
    {step === 'area' && renderAreaSelection()}
    {step === 'mode' && renderModeSelection()}
    {step === 'playing' && renderPlayingScreen()}
    {step === 'result' && renderResultScreen()}
  </div>
);
```

---

## 🎯 RESULTADO FINAL

Com essa integração, você terá:

✅ Questões vindas do backend Supabase
✅ Sem dados mockados
✅ Sistema de pontuação funcional
✅ Salvamento de resultados
✅ Histórico de partidas
✅ Telas de loading adequadas
✅ Feedback visual (progresso, acurácia)

---

## 📝 CHECKLIST DE INTEGRAÇÃO

- [ ] Importar hooks no EpicGame.tsx
- [ ] Adicionar estados para controle do jogo
- [ ] Criar função startGame que busca do backend
- [ ] Criar função handleAnswer
- [ ] Criar função finishGame que salva resultado
- [ ] Renderizar tela de loading
- [ ] Renderizar tela de jogo com questões
- [ ] Renderizar tela de resultado
- [ ] Testar fluxo completo
- [ ] Adicionar tratamento de erros

---

## 🚨 IMPORTANTE

**Este é apenas um exemplo!** Adapte ao seu design e fluxo existente.

O importante é:
1. Usar os hooks em vez de dados mockados
2. Buscar questões do backend com `fetchQuestions()`
3. Salvar resultados com `saveResult()`

**Boa integração! 🚀**
