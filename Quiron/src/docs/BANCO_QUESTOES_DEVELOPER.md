# 📚 Banco de Questões - Documentação para Desenvolvedores

## 🎯 Visão Geral

O **Banco de Questões do Quiron Concursos** é um sistema completo de 950 questões organizadas em 4 áreas temáticas e 19 matérias, totalmente integrado ao **Game Épico "A Corrida dos Heróis"** desenvolvido em Godot 4.

---

## 🏗️ Arquitetura do Sistema

### Estrutura de Dados

```typescript
interface GameQuestion {
  id: string;                    // Identificador único (ex: "dt-001")
  area: string;                  // ID da área temática
  subject: string;               // Nome da matéria
  question: string;              // Enunciado da questão
  correctAnswer: boolean;        // Resposta correta (true = CERTO, false = ERRADO)
  explanation: string;           // Explicação fundamentada
  difficulty: 'facil' | 'medio' | 'dificil'; // Nível de dificuldade
}
```

### Áreas Temáticas

```typescript
const gameAreas = [
  {
    id: 'juridica',
    name: 'Jurídica',
    color: 'text-blue-400',
    bgColor: 'bg-blue-600',
    subjects: [...]  // 5 matérias, 250 questões
  },
  {
    id: 'policial',
    name: 'Policial',
    color: 'text-red-400',
    bgColor: 'bg-red-600',
    subjects: [...]  // 4 matérias, 200 questões
  },
  {
    id: 'fiscal-bancaria',
    name: 'Fiscal-Bancária',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-600',
    subjects: [...]  // 5 matérias, 250 questões
  },
  {
    id: 'conhecimentos-gerais',
    name: 'Conhecimentos Gerais',
    color: 'text-purple-400',
    bgColor: 'bg-purple-600',
    subjects: [...]  // 5 matérias, 250 questões
  }
];
```

---

## 🎮 Integração com Game Épico - Fluxo Completo

### 📋 Fluxo de Execução (Passo a Passo)

```
┌─────────────────────────────────────────────────────────────┐
│ 1. SELEÇÃO DE ÁREA E MATÉRIA                               │
│    └─ Usuário escolhe área temática                        │
│    └─ Usuário escolhe matéria específica                   │
│    └─ Sistema carrega pool de 50 questões                  │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. INÍCIO DO GAME - FASE GODOT (Corrida)                   │
│    └─ Game Godot é carregado via iframe                    │
│    └─ Personagem corre automaticamente (run infinito)      │
│    └─ Duração: ~10 segundos de corrida                     │
│    └─ Animações: pulo de obstáculos, coletar itens         │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. ⭐ TRANSIÇÃO APÓS CORRIDA (ANIMAÇÃO CRÍTICA) ⭐         │
│                                                             │
│    ┌─────────────────────────────────────────────┐         │
│    │ 3.1 Fade Out do Godot                       │         │
│    │     • Tela escurece gradualmente (1s)       │         │
│    │     • Opacity: 1 → 0                        │         │
│    │     • className: "fade-out-animation"       │         │
│    └─────────────────────────────────────────────┘         │
│                       ↓                                     │
│    ┌─────────────────────────────────────────────┐         │
│    │ 3.2 Carta Aparece (Animação de Entrada)    │         │
│    │     • Efeito de "flip" 3D                   │         │
│    │     • Scale: 0 → 1 (spring animation)       │         │
│    │     • Rotate: 90deg → 0deg                  │         │
│    │     • Duration: 0.6s                        │         │
│    │     • Easing: cubic-bezier                  │         │
│    └─────────────────────────────────────────────┘         │
│                       ↓                                     │
│    ┌─────────────────────────────────────────────┐         │
│    │ 3.3 Brilho e Partículas                    │         │
│    │     • Efeito shimmer na carta               │         │
│    │     • Partículas douradas ao redor          │         │
│    │     • Glow pulsante na borda                │         │
│    │     • Duration: 0.8s                        │         │
│    └─────────────────────────────────────────────┘         │
│                       ↓                                     │
│    ┌─────────────────────────────────────────────┐         │
│    │ 3.4 Som de "Carta Revelada"                │         │
│    │     • SFX: "card_reveal.mp3"                │         │
│    │     • Volume: 0.7                           │         │
│    │     • Pitch: random(0.95, 1.05)             │         │
│    └─────────────────────────────────────────────┘         │
│                                                             │
│    CÓDIGO RELACIONADO:                                     │
│    • /components/EpicGame.tsx (linha ~380-450)             │
│    • /styles/animations.css (card-reveal)                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. EXIBIÇÃO DA QUESTÃO (Carta Visível)                     │
│    └─ Questão sorteada aleatoriamente do pool              │
│    └─ Timer de 30 segundos inicia                          │
│    └─ Usuário deve responder CERTO ou ERRADO               │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. FEEDBACK DA RESPOSTA                                    │
│                                                             │
│    SE ACERTOU:                                              │
│    ├─ ✅ Carta fica verde                                  │
│    ├─ ✨ Animação de confete                               │
│    ├─ 🔊 Som de acerto ("correct.mp3")                     │
│    ├─ ⏱️ Explicação exibida por 20 segundos                │
│    ├─ 📊 Contador de acertos incrementa                    │
│    └─ ➡️ Avança para próxima carta                         │
│                                                             │
│    SE ERROU:                                                │
│    ├─ ❌ Carta fica vermelha                               │
│    ├─ 🔄 Carta é "embaralhada" de volta ao deck            │
│    ├─ 🔊 Som de erro ("wrong.mp3")                         │
│    ├─ ⚠️ Explicação NÃO é mostrada                        │
│    ├─ 🎴 NOVA CARTA é sorteada (diferente)                 │
│    └─ ↩️ Retorna ao passo 2 (nova corrida)                 │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. PROGRESSÃO DA FASE                                      │
│    └─ Cada fase tem 10 cartas para coletar                 │
│    └─ Progress Bar atualiza: N/10 cartas                   │
│    └─ Ao completar 10 cartas: FASE CONCLUÍDA! 🎉          │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎨 Detalhes da Animação de Transição

### CSS da Animação da Carta

```css
/* /styles/animations.css */

@keyframes cardReveal {
  0% {
    transform: scale(0) rotateY(90deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) rotateY(45deg);
  }
  100% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
}

.card-reveal-animation {
  animation: cardReveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation-fill-mode: both;
}

@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}

.shimmer-effect {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  background-size: 1000px 100%;
  animation: shimmer 2s infinite;
}

@keyframes fadeOutGodot {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

.fade-out-animation {
  animation: fadeOutGodot 1s ease-out forwards;
}
```

### Implementação React (EpicGame.tsx)

```typescript
// /components/EpicGame.tsx

const [gamePhase, setGamePhase] = useState<'running' | 'transitioning' | 'question'>('running');

// Após corrida Godot
const handleRunComplete = () => {
  // Fase 1: Fade out do Godot
  setGamePhase('transitioning');
  
  // Delay para animação
  setTimeout(() => {
    // Fase 2: Sortear questão
    const randomQuestion = getRandomQuestion();
    setCurrentQuestion(randomQuestion);
    
    // Fase 3: Mostrar carta com animação
    setGamePhase('question');
    
    // Fase 4: Tocar som
    playSound('card_reveal.mp3');
    
    // Fase 5: Iniciar timer
    startTimer(30);
  }, 1000); // 1s de delay para fade out
};

// Renderização condicional
return (
  <div className="game-container">
    {/* Godot Game */}
    {gamePhase === 'running' && (
      <iframe 
        src="/godot/game.html"
        className={gamePhase === 'transitioning' ? 'fade-out-animation' : ''}
      />
    )}
    
    {/* Carta de Questão */}
    {gamePhase === 'question' && (
      <div className="card-reveal-animation shimmer-effect">
        <QuestionCard 
          question={currentQuestion}
          onAnswer={handleAnswer}
        />
      </div>
    )}
  </div>
);
```

---

## 🔧 Configurações de Timing

```typescript
// Tempos padrões do sistema
const TIMINGS = {
  RUN_DURATION: 10000,          // 10s de corrida
  FADE_OUT_DURATION: 1000,      // 1s fade out Godot
  CARD_REVEAL_DURATION: 600,    // 0.6s animação carta
  SHIMMER_DURATION: 800,        // 0.8s brilho
  QUESTION_TIMER: 30000,        // 30s para responder
  EXPLANATION_DISPLAY: 20000,   // 20s mostrando explicação
  TOTAL_TRANSITION: 2400        // Total da transição (1s + 0.6s + 0.8s)
};
```

---

## 📂 Estrutura de Arquivos

```
/Quiron-Concursos
│
├── /data                          # Banco de questões
│   ├── gameQuestions.ts           # Arquivo principal (950 questões)
│   ├── direitoConstitucional.ts   # 50 questões
│   ├── direitoAdministrativo.ts   # 50 questões
│   ├── direitoPenal.ts            # 50 questões
│   ├── direitoCivil.ts            # 50 questões
│   ├── direitoTrabalho.ts         # 50 questões
│   ├── legislacaoPenalEspecial.ts # 50 questões
│   ├── criminologia.ts            # 50 questões
│   ├── direitosHumanos.ts         # 50 questões
│   ├── procedimentosPoliciais.ts  # 50 questões
│   ├── conhecimentosBancarios.ts  # 50 questões
│   ├── direitoTributario.ts       # 50 questões
│   ├── contabilidade.ts           # 50 questões
│   ├── afo.ts                     # 50 questões
│   ├── economia.ts                # 50 questões
│   ├── portugues.ts               # 50 questões
│   ├── raciocinio.ts              # 50 questões
│   ├── informatica.ts             # 50 questões
│   ├── atualidades.ts             # 50 questões
│   └── historiaDoBrasil.ts        # 50 questões
│
├── /components
│   ├── EpicGame.tsx               # 🎮 COMPONENTE PRINCIPAL DO GAME
│   ├── QuestionBankViewer.tsx     # Visualizador de questões
│   ├── GameRules.tsx              # Regras do jogo
│   └── GameIntegrationBanner.tsx  # Banner de integração
│
├── /styles
│   ├── globals.css                # Estilos globais
│   └── animations.css             # ⭐ ANIMAÇÕES DA TRANSIÇÃO
│
└── /docs
    └── BANCO_QUESTOES_DEVELOPER.md  # Este arquivo
```

---

## 🎯 Funções Importantes

### 1. Seleção de Questão Aleatória

```typescript
// /components/EpicGame.tsx

const getRandomQuestion = (): GameQuestion => {
  const selectedAreaQuestions = allGameQuestions.filter(
    q => q.area === selectedArea && q.subject === selectedSubject
  );
  
  // Filtrar questões já respondidas
  const availableQuestions = selectedAreaQuestions.filter(
    q => !answeredQuestionIds.includes(q.id)
  );
  
  // Se todas foram respondidas, reiniciar pool
  if (availableQuestions.length === 0) {
    setAnsweredQuestionIds([]);
    return selectedAreaQuestions[
      Math.floor(Math.random() * selectedAreaQuestions.length)
    ];
  }
  
  // Retornar questão aleatória do pool disponível
  return availableQuestions[
    Math.floor(Math.random() * availableQuestions.length)
  ];
};
```

### 2. Validação de Resposta

```typescript
const handleAnswer = (userAnswer: boolean) => {
  const isCorrect = userAnswer === currentQuestion.correctAnswer;
  
  if (isCorrect) {
    // ✅ ACERTOU
    playSound('correct.mp3');
    showConfetti();
    setScore(score + 1);
    setAnsweredQuestionIds([...answeredQuestionIds, currentQuestion.id]);
    
    // Mostrar explicação por 20s
    setShowExplanation(true);
    setTimeout(() => {
      setShowExplanation(false);
      
      // Verificar se completou fase
      if (score + 1 >= 10) {
        completePhase();
      } else {
        // Próxima carta
        startNewRound();
      }
    }, 20000);
    
  } else {
    // ❌ ERROU
    playSound('wrong.mp3');
    shakeCard();
    
    // Gerar nova carta (sem mostrar explicação)
    setTimeout(() => {
      startNewRound();
    }, 2000);
  }
};
```

### 3. Comunicação Godot ↔ React

```typescript
// Mensagem do Godot para React
window.addEventListener('message', (event) => {
  if (event.data.type === 'GODOT_RUN_COMPLETE') {
    handleRunComplete();
  }
});

// Mensagem do React para Godot
const sendToGodot = (message: any) => {
  const iframe = document.querySelector('iframe#godot-game');
  iframe?.contentWindow?.postMessage(message, '*');
};

// Exemplo: Iniciar nova corrida
sendToGodot({
  type: 'START_NEW_RUN',
  difficulty: currentDifficulty,
  area: selectedArea
});
```

---

## 🎨 Sistema de Cores por Área

```typescript
const AREA_COLORS = {
  'juridica': {
    primary: '#3B82F6',      // Blue-500
    light: '#60A5FA',        // Blue-400
    dark: '#2563EB',         // Blue-600
    glow: 'rgba(59, 130, 246, 0.5)'
  },
  'policial': {
    primary: '#EF4444',      // Red-500
    light: '#F87171',        // Red-400
    dark: '#DC2626',         // Red-600
    glow: 'rgba(239, 68, 68, 0.5)'
  },
  'fiscal-bancaria': {
    primary: '#F59E0B',      // Yellow-500
    light: '#FBBF24',        // Yellow-400
    dark: '#D97706',         // Yellow-600
    glow: 'rgba(245, 158, 11, 0.5)'
  },
  'conhecimentos-gerais': {
    primary: '#A855F7',      // Purple-500
    light: '#C084FC',        // Purple-400
    dark: '#9333EA',         // Purple-600
    glow: 'rgba(168, 85, 247, 0.5)'
  }
};
```

---

## 🔊 Sistema de Áudio

```typescript
// Áudios utilizados no game
const SOUNDS = {
  CARD_REVEAL: '/sounds/card_reveal.mp3',
  CORRECT_ANSWER: '/sounds/correct.mp3',
  WRONG_ANSWER: '/sounds/wrong.mp3',
  PHASE_COMPLETE: '/sounds/victory.mp3',
  BACKGROUND_MUSIC: '/sounds/bgm_area_{area}.mp3',
  COUNTDOWN_TICK: '/sounds/tick.mp3',
  COUNTDOWN_FINAL: '/sounds/final_countdown.mp3'
};

const playSound = (soundKey: string, volume = 1.0) => {
  const audio = new Audio(SOUNDS[soundKey]);
  audio.volume = volume;
  audio.play().catch(err => console.error('Audio error:', err));
};
```

---

## 📊 Métricas e Analytics

```typescript
// Eventos trackeados
const ANALYTICS_EVENTS = {
  GAME_STARTED: 'game_started',
  QUESTION_ANSWERED: 'question_answered',
  PHASE_COMPLETED: 'phase_completed',
  GAME_COMPLETED: 'game_completed',
  QUESTION_TIMEOUT: 'question_timeout',
  GAME_ABANDONED: 'game_abandoned'
};

// Exemplo de tracking
const trackEvent = (eventName: string, data: any) => {
  analytics.track(eventName, {
    area: selectedArea,
    subject: selectedSubject,
    questionId: currentQuestion?.id,
    timestamp: Date.now(),
    ...data
  });
};
```

---

## 🐛 Debugging e Testes

### Console Commands

```javascript
// Disponíveis no console do navegador (DEV MODE)

// Pular para questão específica
window.__skipToQuestion('dt-025');

// Completar fase instantaneamente
window.__completePhase();

// Ver pool de questões
window.__showQuestionPool();

// Resetar progresso
window.__resetProgress();

// Ativar modo debug
window.__toggleDebugMode();
```

### Logs Importantes

```typescript
// /components/EpicGame.tsx

console.log('🎮 [GAME] Iniciando corrida...');
console.log('🎴 [GAME] Sorteando questão:', currentQuestion.id);
console.log('⏱️ [GAME] Timer iniciado: 30s');
console.log('✅ [GAME] Resposta correta!', { score, phase });
console.log('❌ [GAME] Resposta errada. Nova carta sorteada.');
console.log('🎉 [GAME] Fase completada!', { totalScore, timeElapsed });
```

---

## ⚡ Performance e Otimizações

### 1. Lazy Loading de Questões

```typescript
// Carregar apenas questões da área selecionada
const loadAreaQuestions = async (area: string) => {
  const module = await import(`../data/${area}Questions.ts`);
  return module.default;
};
```

### 2. Memoização de Cálculos

```typescript
import { useMemo } from 'react';

const availableQuestions = useMemo(() => {
  return allGameQuestions.filter(
    q => q.area === selectedArea && !answeredQuestionIds.includes(q.id)
  );
}, [selectedArea, answeredQuestionIds]);
```

### 3. Debounce de Animações

```typescript
const debouncedCardReveal = debounce(() => {
  setShowCard(true);
}, 100);
```

---

## 🔐 Validações e Segurança

### Prevenção de Trapaças

```typescript
// 1. Validação server-side (futuro)
const validateAnswer = async (questionId: string, answer: boolean) => {
  const response = await fetch('/api/validate-answer', {
    method: 'POST',
    body: JSON.stringify({ questionId, answer }),
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
};

// 2. Hash de questões
const questionHash = crypto
  .createHash('sha256')
  .update(JSON.stringify(currentQuestion))
  .digest('hex');

// 3. Timeout detection
const detectCheating = () => {
  if (answerTime < 500) { // Menos de 500ms
    console.warn('⚠️ Resposta muito rápida! Possível trapaça.');
  }
};
```

---

## 📱 Responsividade

```typescript
// Breakpoints
const BREAKPOINTS = {
  mobile: '(max-width: 640px)',
  tablet: '(max-width: 1024px)',
  desktop: '(min-width: 1025px)'
};

// Adaptações mobile
const isMobile = window.innerWidth <= 640;

if (isMobile) {
  // Reduzir timer para 20s
  TIMINGS.QUESTION_TIMER = 20000;
  
  // Animações mais rápidas
  TIMINGS.CARD_REVEAL_DURATION = 400;
  
  // Texto menor nas cartas
  cardFontSize = '16px';
}
```

---

## 🚀 Deploy e Build

### Variáveis de Ambiente

```bash
# .env.local
NEXT_PUBLIC_GODOT_URL=https://game.quironconcursos.com
NEXT_PUBLIC_API_URL=https://api.quironconcursos.com
NEXT_PUBLIC_ANALYTICS_ID=UA-XXXXXXXXX-X
NEXT_PUBLIC_DEBUG_MODE=false
```

### Build Production

```bash
# Build do projeto
npm run build

# Verificar questões
npm run validate:questions

# Testes E2E do game
npm run test:game

# Deploy
npm run deploy
```

---

## 🎓 Boas Práticas

### 1. Adicionar Nova Matéria

```typescript
// 1. Criar arquivo /data/novaMateria.ts
export const novaMateriaQuestions: GameQuestion[] = [
  {
    id: 'nm-001',
    area: 'sua-area',
    subject: 'Nova Matéria',
    question: 'Sua questão aqui',
    correctAnswer: true,
    explanation: 'Explicação detalhada',
    difficulty: 'facil'
  },
  // ... mais 49 questões
];

// 2. Importar em /data/gameQuestions.ts
import { novaMateriaQuestions } from './novaMateria';

// 3. Adicionar ao array
export const allGameQuestions: GameQuestion[] = [
  ...existingQuestions,
  ...novaMateriaQuestions
];

// 4. Atualizar contagem
{
  id: 'nova-materia',
  name: 'Nova Matéria',
  questionsCount: 50,
  color: 'bg-blue-500'
}

// 5. Adicionar mapeamento no QuestionBankViewer.tsx
if (selectedSubject.id === 'nova-materia') {
  return novaMateriaQuestions;
}
```

### 2. Padrão de Questões

```typescript
// ✅ BOM
{
  id: 'dt-025',  // Prefixo + número sequencial
  area: 'fiscal-bancaria',  // ID exato da área
  subject: 'Direito Tributário',  // Nome completo
  question: 'A isenção tributária é modalidade de exclusão do crédito tributário.',
  correctAnswer: true,  // Boolean claro
  explanation: 'CERTO. O art. 175, I do CTN prevê a isenção como forma de exclusão do crédito tributário.',
  difficulty: 'medio'  // facil, medio ou dificil
}

// ❌ RUIM
{
  id: '25',  // Sem prefixo
  area: 'fiscal',  // ID errado
  subject: 'Dir Trib',  // Abreviado
  question: 'Isenção exclui crédito?',  // Muito curto
  correctAnswer: 1,  // Não é boolean
  explanation: 'Sim.',  // Explicação vaga
  difficulty: 'normal'  // Valor inválido
}
```

### 3. Testes Unitários

```typescript
// /tests/gameQuestions.test.ts

describe('Game Questions', () => {
  test('Todas as questões têm ID único', () => {
    const ids = allGameQuestions.map(q => q.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });
  
  test('Todas as questões têm área válida', () => {
    const validAreas = ['juridica', 'policial', 'fiscal-bancaria', 'conhecimentos-gerais'];
    allGameQuestions.forEach(q => {
      expect(validAreas).toContain(q.area);
    });
  });
  
  test('Total de questões é 950', () => {
    expect(allGameQuestions.length).toBe(950);
  });
});
```

---

## 🆘 Troubleshooting

### Problema: Animação não aparece

```typescript
// Solução 1: Verificar se CSS está importado
import '../styles/animations.css';

// Solução 2: Forçar reflow
const forceReflow = () => {
  element.offsetHeight; // Trigger reflow
};

// Solução 3: Usar requestAnimationFrame
requestAnimationFrame(() => {
  element.classList.add('card-reveal-animation');
});
```

### Problema: Questões duplicadas

```typescript
// Solução: Implementar Set de IDs
const questionIdSet = new Set<string>();

const getUniqueQuestion = () => {
  const question = getRandomQuestion();
  
  if (questionIdSet.has(question.id)) {
    return getUniqueQuestion(); // Recursivo até encontrar única
  }
  
  questionIdSet.add(question.id);
  return question;
};
```

### Problema: Timer não funciona

```typescript
// Solução: Limpar timers antigos
useEffect(() => {
  const timerId = setTimeout(() => {
    handleTimeout();
  }, TIMINGS.QUESTION_TIMER);
  
  // Cleanup
  return () => clearTimeout(timerId);
}, [currentQuestion]);
```

---

## 📞 Contato e Suporte

- **Documentação:** `/docs`
- **Issues:** GitHub Issues
- **Discord:** Quiron Dev Community
- **Email:** dev@quironconcursos.com.br

---

## 🎉 Changelog

### v2.0.0 - 2024-12-05
- ✅ 950 questões implementadas (100%)
- ✅ 4 áreas completas
- ✅ 19 matérias disponíveis
- ✅ Sistema de animação de transição
- ✅ Integração Godot completa
- ✅ Banco de questões funcional

### v1.5.0 - 2024-12-04
- ✅ Área Conhecimentos Gerais adicionada
- ✅ 250 novas questões
- ✅ Sincronização completa

### v1.0.0 - 2024-12-01
- ✅ Lançamento inicial
- ✅ 700 questões
- ✅ 3 áreas temáticas

---

**🏛️ Quiron Concursos - Transformando Estudantes em Aprovados! 🎯**

*Documentação mantida por: Equipe de Desenvolvimento Quiron*  
*Última atualização: 05/12/2024*
