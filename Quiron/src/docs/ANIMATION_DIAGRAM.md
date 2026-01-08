# 🎬 Diagrama Técnico da Animação Pós-Corrida

## 📊 Visão Completa do Sistema

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                                                                                  │
│                        SISTEMA DE ANIMAÇÃO QUIRON                                │
│                              (Visão 360°)                                        │
│                                                                                  │
└──────────────────────────────────────────────────────────────────────────────────┘

                                    │
                                    ▼
                    ┌───────────────────────────────┐
                    │   USUÁRIO INICIA O GAME       │
                    │   (Seleciona Área + Matéria)  │
                    └───────────────┬───────────────┘
                                    │
                                    ▼
        ┌───────────────────────────────────────────────────┐
        │          FASE 1: CORRIDA GODOT (10s)              │
        ├───────────────────────────────────────────────────┤
        │                                                   │
        │  ┌─────────────────────────────────────────────┐ │
        │  │  🏃💨 Personagem corre                      │ │
        │  │  🪨 Obstáculos aparecem aleatoriamente      │ │
        │  │  💎 Itens para coletar                      │ │
        │  │  📊 Barra de progresso (0% → 100%)          │ │
        │  │  🎮 Input: SPACE para pular                 │ │
        │  └─────────────────────────────────────────────┘ │
        │                                                   │
        │  TECNOLOGIA: Godot 4 (iframe embarcado)           │
        │  COMUNICAÇÃO: postMessage API                     │
        │                                                   │
        └───────────────────┬───────────────────────────────┘
                            │
                            │ Godot emite evento:
                            │ { type: 'RUN_COMPLETE' }
                            │
                            ▼
        ┌───────────────────────────────────────────────────┐
        │   REACT INTERCEPTA MENSAGEM                       │
        │   window.addEventListener('message', ...)         │
        └───────────────────┬───────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────────────┐
        │   FASE 2: TRANSIÇÃO (2.4s)                        │
        │   ═══════════════════════════════════════════════ │
        │                                                   │
        │   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
        │   ┃  ETAPA 2A: FADE OUT GODOT (1.0s)           ┃ │
        │   ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ │
        │   ┃                                             ┃ │
        │   ┃  JavaScript:                                ┃ │
        │   ┃  ┌────────────────────────────────────────┐ ┃ │
        │   ┃  │ setGamePhase('transitioning')          │ ┃ │
        │   ┃  │ godotIframe.classList.add('fade-out')  │ ┃ │
        │   ┃  └────────────────────────────────────────┘ ┃ │
        │   ┃                                             ┃ │
        │   ┃  CSS:                                       ┃ │
        │   ┃  ┌────────────────────────────────────────┐ ┃ │
        │   ┃  │ @keyframes fadeOutGodot {              │ ┃ │
        │   ┃  │   0% { opacity: 1; }                   │ ┃ │
        │   ┃  │   100% { opacity: 0; scale: 0.95; }    │ ┃ │
        │   ┃  │ }                                       │ ┃ │
        │   ┃  └────────────────────────────────────────┘ ┃ │
        │   ┃                                             ┃ │
        │   ┃  Resultado Visual:                          ┃ │
        │   ┃  T=0.0s: ████████████ 100%                 ┃ │
        │   ┃  T=0.5s: ██████░░░░░░ 50%                  ┃ │
        │   ┃  T=1.0s: ░░░░░░░░░░░░ 0%  ✅               ┃ │
        │   ┃                                             ┃ │
        │   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
        │                                                   │
        │            ⬇️ setTimeout(1000ms)                 │
        │                                                   │
        │   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
        │   ┃  ETAPA 2B: SORTEAR QUESTÃO                 ┃ │
        │   ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ │
        │   ┃                                             ┃ │
        │   ┃  JavaScript:                                ┃ │
        │   ┃  ┌────────────────────────────────────────┐ ┃ │
        │   ┃  │ const pool = getSubjectQuestions()     │ ┃ │
        │   ┃  │ const available = pool.filter(...)     │ ┃ │
        │   ┃  │ const random = available[Math.random()]│ ┃ │
        │   ┃  │ setCurrentQuestion(random)             │ ┃ │
        │   ┃  └────────────────────────────────────────┘ ┃ │
        │   ┃                                             ┃ │
        │   ┃  Lógica:                                    ┃ │
        │   ┃  • Filtra por área e matéria               ┃ │
        │   ┃  • Remove questões já respondidas          ┃ │
        │   ┃  • Seleciona aleatoriamente                ┃ │
        │   ┃  • Evita repetições                        ┃ │
        │   ┃                                             ┃ │
        │   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
        │                                                   │
        │            ⬇️ Imediato                           │
        │                                                   │
        │   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
        │   ┃  ETAPA 2C: FLIP 3D DA CARTA (0.6s)         ┃ │
        │   ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ │
        │   ┃                                             ┃ │
        │   ┃  JavaScript:                                ┃ │
        │   ┃  ┌────────────────────────────────────────┐ ┃ │
        │   ┃  │ setGamePhase('question')               │ ┃ │
        │   ┃  │ cardElement.classList.add(             │ ┃ │
        │   ┃  │   'card-reveal-animation'              │ ┃ │
        │   ┃  │ )                                       │ ┃ │
        │   ┃  └────────────────────────────────────────┘ ┃ │
        │   ┃                                             ┃ │
        │   ┃  CSS:                                       ┃ │
        │   ┃  ┌────────────────────────────────────────┐ ┃ │
        │   ┃  │ @keyframes cardReveal {                │ ┃ │
        │   ┃  │   0% {                                 │ ┃ │
        │   ┃  │     transform: scale(0) rotateY(90deg);│ ┃ │
        │   ┃  │     opacity: 0;                        │ ┃ │
        │   ┃  │   }                                     │ ┃ │
        │   ┃  │   50% {                                 │ ┃ │
        │   ┃  │     transform: scale(1.1) rotateY(45deg);│ ┃│
        │   ┃  │     opacity: 0.5;                      │ ┃ │
        │   ┃  │   }                                     │ ┃ │
        │   ┃  │   100% {                                │ ┃ │
        │   ┃  │     transform: scale(1) rotateY(0deg); │ ┃ │
        │   ┃  │     opacity: 1;                        │ ┃ │
        │   ┃  │   }                                     │ ┃ │
        │   ┃  │ }                                       │ ┃ │
        │   ┃  │ animation: 0.6s cubic-bezier(spring)   │ ┃ │
        │   ┃  └────────────────────────────────────────┘ ┃ │
        │   ┃                                             ┃ │
        │   ┃  Resultado Visual:                          ┃ │
        │   ┃  T=0.0s: 🃏 (escondida, 90°)               ┃ │
        │   ┃  T=0.3s: 🎴⟲ (girando, 45°, escala 1.1)   ┃ │
        │   ┃  T=0.6s: 🎴 (revelada, 0°, escala 1.0) ✅  ┃ │
        │   ┃                                             ┃ │
        │   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
        │                                                   │
        │            ⬇️ Paralelo                           │
        │                                                   │
        │   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
        │   ┃  ETAPA 2D: SHIMMER/BRILHO (0.8s)           ┃ │
        │   ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ │
        │   ┃                                             ┃ │
        │   ┃  CSS:                                       ┃ │
        │   ┃  ┌────────────────────────────────────────┐ ┃ │
        │   ┃  │ .shimmer-effect::before {              │ ┃ │
        │   ┃  │   content: '';                         │ ┃ │
        │   ┃  │   background: linear-gradient(         │ ┃ │
        │   ┃  │     90deg,                             │ ┃ │
        │   ┃  │     transparent,                       │ ┃ │
        │   ┃  │     rgba(255,255,255,0.3),             │ ┃ │
        │   ┃  │     transparent                        │ ┃ │
        │   ┃  │   );                                    │ ┃ │
        │   ┃  │   animation: shimmer 0.8s;             │ ┃ │
        │   ┃  │ }                                       │ ┃ │
        │   ┃  │                                         │ ┃ │
        │   ┃  │ @keyframes shimmer {                   │ ┃ │
        │   ┃  │   0% { left: -100%; }                  │ ┃ │
        │   ┃  │   100% { left: 100%; }                 │ ┃ │
        │   ┃  │ }                                       │ ┃ │
        │   ┃  └────────────────────────────────────────┘ ┃ │
        │   ┃                                             ┃ │
        │   ┃  Efeito: ╱╱╱╱ luz atravessa a carta →      ┃ │
        │   ┃                                             ┃ │
        │   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
        │                                                   │
        │            ⬇️ Sincronizado                       │
        │                                                   │
        │   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓ │
        │   ┃  ETAPA 2E: SOM "CARTA REVELADA"            ┃ │
        │   ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫ │
        │   ┃                                             ┃ │
        │   ┃  JavaScript:                                ┃ │
        │   ┃  ┌────────────────────────────────────────┐ ┃ │
        │   ┃  │ const audio = new Audio(               │ ┃ │
        │   ┃  │   '/sounds/card_reveal.mp3'            │ ┃ │
        │   ┃  │ );                                      │ ┃ │
        │   ┃  │ audio.volume = 0.7;                    │ ┃ │
        │   ┃  │ audio.play();                          │ ┃ │
        │   ┃  └────────────────────────────────────────┘ ┃ │
        │   ┃                                             ┃ │
        │   ┃  Timing: Toca em T=1.0s (início da carta)  ┃ │
        │   ┃  Duration: ~0.5s                            ┃ │
        │   ┃  Formato: MP3, 44.1kHz                      ┃ │
        │   ┃                                             ┃ │
        │   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛ │
        │                                                   │
        └───────────────────┬───────────────────────────────┘
                            │
                            ▼
        ┌───────────────────────────────────────────────────┐
        │   FASE 3: QUESTÃO ATIVA (30s)                     │
        ├───────────────────────────────────────────────────┤
        │                                                   │
        │  ┌─────────────────────────────────────────────┐ │
        │  │  📝 Questão exibida                         │ │
        │  │  ⏱️ Timer: 30 segundos                      │ │
        │  │  📊 Progresso: N/10 cartas                  │ │
        │  │  🎯 Botões: [✅ CERTO] [❌ ERRADO]          │ │
        │  └─────────────────────────────────────────────┘ │
        │                                                   │
        │  Usuário responde...                              │
        │                                                   │
        └───────────┬───────────────────┬───────────────────┘
                    │                   │
           ┌────────┴────────┐   ┌──────┴────────┐
           │   ✅ ACERTOU    │   │   ❌ ERROU    │
           └────────┬────────┘   └──────┬────────┘
                    │                   │
                    ▼                   ▼
        ┌──────────────────────┐  ┌─────────────────────┐
        │ • Carta verde        │  │ • Carta vermelha    │
        │ • +1 ponto           │  │ • Sem ponto         │
        │ • Mostrar explicação │  │ • Nova carta sorteada│
        │ • 20s delay          │  │ • Retorna ao Godot  │
        │ • Próxima carta      │  └─────────────────────┘
        └──────────────────────┘

```

---

## 🎯 Diagrama de Estados (State Machine)

```
                    ┌─────────────────┐
                    │   IDLE          │
                    │   (Aguardando)  │
                    └────────┬────────┘
                             │ Usuário clica "Jogar"
                             ▼
                    ┌─────────────────┐
                    │   LOADING       │
                    │   (Carregando)  │
                    └────────┬────────┘
                             │ Godot + Pool carregados
                             ▼
        ╔═══════════════════════════════════════════════════╗
        ║              RUNNING (Corrida Ativa)              ║
        ║                                                   ║
        ║  State: {                                         ║
        ║    gamePhase: 'running',                          ║
        ║    godotLoaded: true,                             ║
        ║    questionPool: GameQuestion[],                  ║
        ║    currentQuestion: null                          ║
        ║  }                                                ║
        ╚═══════════════════════════════════════════════════╝
                             │ Event: 'RUN_COMPLETE'
                             ▼
        ╔═══════════════════════════════════════════════════╗
        ║           TRANSITIONING (Animação)                ║
        ║                                                   ║
        ║  State: {                                         ║
        ║    gamePhase: 'transitioning',                    ║
        ║    fadeOutStarted: true,                          ║
        ║    cardSelected: false,                           ║
        ║    currentQuestion: null                          ║
        ║  }                                                ║
        ║                                                   ║
        ║  Timeline:                                        ║
        ║  T+0ms    → Iniciar fade out                      ║
        ║  T+1000ms → Sortear questão                       ║
        ║  T+1000ms → Iniciar flip carta                    ║
        ║  T+1600ms → Carta totalmente visível              ║
        ║  T+2400ms → Transição completa                    ║
        ╚═══════════════════════════════════════════════════╝
                             │ Timeout: 2400ms
                             ▼
        ╔═══════════════════════════════════════════════════╗
        ║          QUESTION (Aguardando Resposta)           ║
        ║                                                   ║
        ║  State: {                                         ║
        ║    gamePhase: 'question',                         ║
        ║    currentQuestion: GameQuestion,                 ║
        ║    timerStarted: Date.now(),                      ║
        ║    timerRemaining: 30000,                         ║
        ║    answered: false                                ║
        ║  }                                                ║
        ╚═══════════════════════════════════════════════════╝
                             │ Usuário responde
                             ▼
        ╔═══════════════════════════════════════════════════╗
        ║            FEEDBACK (Mostrando Resultado)         ║
        ║                                                   ║
        ║  State: {                                         ║
        ║    gamePhase: 'feedback',                         ║
        ║    userAnswer: boolean,                           ║
        ║    isCorrect: boolean,                            ║
        ║    showExplanation: boolean,                      ║
        ║    cardColor: 'green' | 'red'                     ║
        ║  }                                                ║
        ╚═══════════════════════════════════════════════════╝
                             │
                ┌────────────┴────────────┐
                │                         │
          ✅ Acertou              ❌ Errou
                │                         │
                ▼                         ▼
    ┌───────────────────────┐   ┌───────────────────────┐
    │ EXPLANATION           │   │ NEW_CARD              │
    │ (20s)                 │   │ (Nova sorteio)        │
    └───────────┬───────────┘   └───────────┬───────────┘
                │                           │
                ▼                           │
    ┌───────────────────────┐               │
    │ Check: 10 cartas?     │               │
    │ • SIM → PHASE_COMPLETE│               │
    │ • NÃO → RUNNING       │◄──────────────┘
    └───────────────────────┘
                │
                ▼
    ┌───────────────────────┐
    │ PHASE_COMPLETE        │
    │ (Celebração)          │
    └───────────┬───────────┘
                │
                ▼
    ┌───────────────────────┐
    │ IDLE (Aguarda nova    │
    │ partida)              │
    └───────────────────────┘
```

---

## 🔄 Comunicação Between Layers

```
┌────────────────────────────────────────────────────────────────┐
│                        REACT LAYER                             │
│  (JavaScript/TypeScript - /components/EpicGame.tsx)            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  • useState/useEffect hooks                                    │
│  • Event handlers (onClick, onTimer, etc)                      │
│  • Question pool management                                    │
│  • State machine controller                                    │
│                                                                │
└────────┬───────────────────────────────────────────────┬───────┘
         │                                               │
         │ postMessage()                                 │ addEventListener()
         │ ─────────────────────────►                    │ ◄─────────────────
         │                                               │
┌────────┴───────────────────────────────────────────────┴───────┐
│                    MESSAGE BUS (window)                        │
│  (Browser API - postMessage communication)                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Messages:                                                     │
│  • { type: 'START_RUN', data: {...} }                         │
│  • { type: 'RUN_COMPLETE', data: {...} }                      │
│  • { type: 'COLLISION', data: {...} }                         │
│  • { type: 'ITEM_COLLECTED', data: {...} }                    │
│                                                                │
└────────┬───────────────────────────────────────────────┬───────┘
         │                                               │
         │ receive()                                     │ emit()
         │ ◄─────────────────────                        │ ─────────────────►
         │                                               │
┌────────┴───────────────────────────────────────────────┴───────┐
│                       GODOT LAYER                              │
│  (GDScript - /godot/scripts/game.gd)                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  • Character controller                                        │
│  • Obstacle spawner                                            │
│  • Collision detection                                         │
│  • Progress tracker                                            │
│  • JavaScript interface                                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘


EXEMPLO DE FLUXO:

1. React → Godot (Iniciar corrida)
   ┌─────────────────────────────────────────┐
   │ React Component                         │
   │ ─────────────────────────               │
   │ sendToGodot({                           │
   │   type: 'START_RUN',                    │
   │   area: 'juridica',                     │
   │   difficulty: 'medio'                   │
   │ })                                      │
   └─────────────┬───────────────────────────┘
                 │
                 ▼ postMessage
   ┌─────────────────────────────────────────┐
   │ Godot receives via JavaScript.eval:     │
   │ ──────────────────────────────          │
   │ func _on_message_received(data):        │
   │   if data.type == 'START_RUN':          │
   │     start_run(data.area, data.diff)     │
   └─────────────────────────────────────────┘

2. Godot → React (Corrida completa)
   ┌─────────────────────────────────────────┐
   │ Godot Script                            │
   │ ────────────                            │
   │ func _on_run_complete():                │
   │   JavaScript.eval("""                   │
   │     window.parent.postMessage({         │
   │       type: 'RUN_COMPLETE',             │
   │       distance: %d                      │
   │     }, '*')                             │
   │   """ % distance)                       │
   └─────────────┬───────────────────────────┘
                 │
                 ▼ postMessage
   ┌─────────────────────────────────────────┐
   │ React receives via:                     │
   │ ──────────────────                      │
   │ window.addEventListener('message', (e) =>│
   │   if (e.data.type === 'RUN_COMPLETE') { │
   │     handleRunComplete()                 │
   │   }                                     │
   │ )                                       │
   └─────────────────────────────────────────┘
```

---

## 🎨 CSS Animation Stack

```
┌─────────────────────────────────────────────────────────────┐
│                   ANIMATION LAYER STACK                     │
│           (Ordem de aplicação: bottom → top)               │
└─────────────────────────────────────────────────────────────┘

Layer 4: ✨ SHIMMER EFFECT (pseudo-element ::before)
┌─────────────────────────────────────────────────────────────┐
│  animation: shimmer 0.8s ease-in-out                        │
│  z-index: 10                                                │
│  ╱╱╱╱ Gradiente branco passa sobre a carta                 │
└─────────────────────────────────────────────────────────────┘

Layer 3: 🌟 GLOW PULSE (box-shadow)
┌─────────────────────────────────────────────────────────────┐
│  animation: glowPulse 2s infinite                           │
│  box-shadow: 0 0 20px → 0 0 40px                            │
│  💫 Brilho pulsante ao redor da carta                       │
└─────────────────────────────────────────────────────────────┘

Layer 2: 🎴 CARD FLIP (transform 3D)
┌─────────────────────────────────────────────────────────────┐
│  animation: cardReveal 0.6s cubic-bezier(0.34, 1.56,...)   │
│  transform: rotateY(90deg) → rotateY(0deg)                  │
│  transform: scale(0) → scale(1.1) → scale(1)                │
│  🔄 Rotação 3D + bounce effect                             │
└─────────────────────────────────────────────────────────────┘

Layer 1: 🌑 FADE OUT GODOT (opacity)
┌─────────────────────────────────────────────────────────────┐
│  animation: fadeOutGodot 1s ease-out                        │
│  opacity: 1 → 0                                             │
│  scale: 1 → 0.95                                            │
│  🌫️ Desaparece suavemente                                  │
└─────────────────────────────────────────────────────────────┘

Layer 0: 🎮 GODOT IFRAME (base layer)
┌─────────────────────────────────────────────────────────────┐
│  position: absolute                                         │
│  width: 100%, height: 100%                                  │
│  🎮 Game engine renderizado                                 │
└─────────────────────────────────────────────────────────────┘
```

---

## ⏱️ Timeline Completa (Escala de Tempo)

```
T=0s
├─────────────────────────────────────────────────────────────┤
│ 🏃 CORRIDA GODOT ATIVA                                      │
├─────────────────────────────────────────────────────────────┤
│ • Personagem correndo                                       │
│ • Obstáculos aparecendo                                     │
│ • Usuário pulando (SPACE)                                   │
│ • Barra de progresso: 0% → 100%                             │
└─────────────────────────────────────────────────────────────┘
T=10s ◄── Event: Godot emite 'RUN_COMPLETE'
├─────────────────────────────────────────────────────────────┤
│ ⚡ TRIGGER: handleRunComplete()                             │
│ • setGamePhase('transitioning')                             │
│ • godotIframe.classList.add('fade-out-animation')           │
└─────────────────────────────────────────────────────────────┘
T=10.0s
├─────────────────────────────────────────────────────────────┤
│ 🌑 FADE OUT GODOT INICIADO                                  │
│ Opacity: 100% ████████████                                  │
└─────────────────────────────────────────────────────────────┘
T=10.5s
├─────────────────────────────────────────────────────────────┤
│ Opacity: 50%  ██████░░░░░░                                  │
└─────────────────────────────────────────────────────────────┘
T=11.0s ◄── Timeout completo (1000ms)
├─────────────────────────────────────────────────────────────┤
│ 🌚 TELA TOTALMENTE ESCURA                                   │
│ Opacity: 0%   ░░░░░░░░░░░░                                  │
│                                                             │
│ ⚡ TRIGGER: Callback do setTimeout                          │
│ • const question = getRandomQuestion()                      │
│ • setCurrentQuestion(question)                              │
│ • setGamePhase('question')                                  │
│ • playSound('card_reveal.mp3')                              │
└─────────────────────────────────────────────────────────────┘
T=11.0s (imediato)
├─────────────────────────────────────────────────────────────┤
│ 🎴 FLIP DA CARTA INICIADO                                   │
│ • transform: scale(0) rotateY(90deg)                        │
│ • opacity: 0                                                │
│ • 🃏 Carta invisível (de costas)                            │
└─────────────────────────────────────────────────────────────┘
T=11.3s (50% da animação)
├─────────────────────────────────────────────────────────────┤
│ • transform: scale(1.1) rotateY(45deg)                      │
│ • opacity: 0.5                                              │
│ • 🎴⟲ Carta semi-visível, girando                          │
└─────────────────────────────────────────────────────────────┘
T=11.6s ◄── Carta totalmente revelada
├─────────────────────────────────────────────────────────────┤
│ 🎴 CARTA VISÍVEL                                            │
│ • transform: scale(1) rotateY(0deg)                         │
│ • opacity: 1                                                │
│ • ✨ Shimmer effect iniciado                                │
└─────────────────────────────────────────────────────────────┘
T=11.6s → T=12.4s (800ms de shimmer)
├─────────────────────────────────────────────────────────────┤
│ ✨ BRILHO ATRAVESSANDO A CARTA                              │
│ • background-position: -100% → 100%                         │
│ • ╱╱╱╱ Onda de luz da esquerda para direita                │
└─────────────────────────────────────────────────────────────┘
T=12.4s ◄── Transição 100% completa!
├─────────────────────────────────────────────────────────────┤
│ ✅ QUESTÃO PRONTA PARA RESPONDER                            │
│ • Timer de 30s iniciado                                     │
│ • Botões CERTO/ERRADO ativos                                │
│ • Carta estática, aguardando input                          │
└─────────────────────────────────────────────────────────────┘

DURAÇÃO TOTAL DA TRANSIÇÃO: 2.4 segundos
  • Fade out:      1.0s (T=10.0s → T=11.0s)
  • Flip carta:    0.6s (T=11.0s → T=11.6s)
  • Shimmer:       0.8s (T=11.6s → T=12.4s)
```

---

**🎬 Fim do Diagrama Técnico**

Este documento serve como referência visual para entender completamente o fluxo de animação pós-corrida no Game Épico do Quiron Concursos.

**Última atualização:** 05/12/2024  
**Mantido por:** Equipe de Desenvolvimento Quiron
