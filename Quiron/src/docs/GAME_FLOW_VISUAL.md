# 🎮 Fluxo Visual do Game Épico - Referência Rápida

## 🎯 Animação Pós-Corrida: O Momento Mágico! ✨

```
╔══════════════════════════════════════════════════════════════════════╗
║                    SEQUÊNCIA DE ANIMAÇÃO                             ║
║                    (Duração Total: 2.4s)                             ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  🏃 CORRIDA GODOT (10s)                                              ║
║  ┌────────────────────────────────────────────────────────────────┐ ║
║  │ [Personagem correndo]  Pulo!  Pulo!  Item coletado! 💎         │ ║
║  │                                                                 │ ║
║  │ ████████████████████████████████ 100% Corrida completa!        │ ║
║  └────────────────────────────────────────────────────────────────┘ ║
║                           ⬇️                                         ║
║  ⏱️ T = 0.0s - INÍCIO DA TRANSIÇÃO                                  ║
║                           ⬇️                                         ║
║  ╔════════════════════════════════════════════════════════════════╗ ║
║  ║ 🌑 FADE OUT DO GODOT (1.0s)                                    ║ ║
║  ╠════════════════════════════════════════════════════════════════╣ ║
║  ║                                                                ║ ║
║  ║  T = 0.0s: ████████████████████ 100% opacidade                ║ ║
║  ║  T = 0.2s: ███████████████░░░░  80% opacidade                 ║ ║
║  ║  T = 0.5s: ██████░░░░░░░░░░░░░  50% opacidade                 ║ ║
║  ║  T = 0.8s: ███░░░░░░░░░░░░░░░░  20% opacidade                 ║ ║
║  ║  T = 1.0s: ░░░░░░░░░░░░░░░░░░░   0% opacidade ✅              ║ ║
║  ║                                                                ║ ║
║  ║  CSS: opacity: 1 → 0                                           ║ ║
║  ║  CSS: transform: scale(1) → scale(0.95)                        ║ ║
║  ║  Easing: ease-out                                              ║ ║
║  ╚════════════════════════════════════════════════════════════════╝ ║
║                           ⬇️                                         ║
║  ⏱️ T = 1.0s - TELA ESCURA                                          ║
║                           ⬇️                                         ║
║  ╔════════════════════════════════════════════════════════════════╗ ║
║  ║ 🎴 CARTA APARECE - FLIP 3D (0.6s)                              ║ ║
║  ╠════════════════════════════════════════════════════════════════╣ ║
║  ║                                                                ║ ║
║  ║  T = 1.0s:  🃏 (escondida, rotação 90°)                        ║ ║
║  ║             └─ Não visível                                     ║ ║
║  ║                                                                ║ ║
║  ║  T = 1.3s:  🎴 (rotando... 45°)                                ║ ║
║  ║             └─ Meio da animação, scale 1.1                     ║ ║
║  ║                                                                ║ ║
║  ║  T = 1.6s:  🃏✨ (carta visível, rotação 0°)                   ║ ║
║  ║             └─ Totalmente revelada! scale 1.0                  ║ ║
║  ║                                                                ║ ║
║  ║  CSS: transform: scale(0) rotateY(90deg)                       ║ ║
║  ║       → scale(1.1) rotateY(45deg) [meio]                       ║ ║
║  ║       → scale(1.0) rotateY(0deg) [fim]                         ║ ║
║  ║  Easing: cubic-bezier(0.34, 1.56, 0.64, 1) [spring bounce]    ║ ║
║  ╚════════════════════════════════════════════════════════════════╝ ║
║                           ⬇️                                         ║
║  ⏱️ T = 1.6s - CARTA VISÍVEL                                        ║
║                           ⬇️                                         ║
║  ╔════════════════════════════════════════════════════════════════╗ ║
║  ║ ✨ SHIMMER/BRILHO (0.8s)                                       ║ ║
║  ╠════════════════════════════════════════════════════════════════╣ ║
║  ║                                                                ║ ║
║  ║  ┌──────────────────────────────────────┐                     ║ ║
║  ║  │ 🃏                                   │                     ║ ║
║  ║  │   ╱╱╱╱ ← Onda de luz passa          │                     ║ ║
║  ║  │  QUESTÃO AQUI                        │                     ║ ║
║  ║  │                                      │                     ║ ║
║  ║  └──────────────────────────────────────┘                     ║ ║
║  ║                                                                ║ ║
║  ║  Efeito: Gradiente branco atravessa carta                     ║ ║
║  ║  Background: linear-gradient(90deg, ...)                      ║ ║
║  ║  Animation: background-position: -1000px → 1000px             ║ ║
║  ║                                                                ║ ║
║  ║  🔊 SOM: "card_reveal.mp3" toca aqui!                         ║ ║
║  ╚════════════════════════════════════════════════════════════════╝ ║
║                           ⬇️                                         ║
║  ⏱️ T = 2.4s - TRANSIÇÃO COMPLETA! ✅                               ║
║                           ⬇️                                         ║
║  ╔════════════════════════════════════════════════════════════════╗ ║
║  ║ 📝 QUESTÃO PRONTA PARA RESPONDER                               ║ ║
║  ╠════════════════════════════════════════════════════════════════╣ ║
║  ║                                                                ║ ║
║  ║  ┌────────────────────────────────────────────────────────┐   ║ ║
║  ║  │ 🎴 CARTA TOTALMENTE VISÍVEL                            │   ║ ║
║  ║  │ ══════════════════════════════════════════════════════ │   ║ ║
║  ║  │                                                        │   ║ ║
║  ║  │  A isenção tributária é modalidade de exclusão        │   ║ ║
║  ║  │  do crédito tributário.                                │   ║ ║
║  ║  │                                                        │   ║ ║
║  ║  │  ⏱️ Tempo: 30s                                         │   ║ ║
║  ║  │  📊 Carta 3/10                                         │   ║ ║
║  ║  │                                                        │   ║ ║
║  ║  │  [ ✅ CERTO ]     [ ❌ ERRADO ]                        │   ║ ║
║  ║  └────────────────────────────────────────────────────────┘   ║ ║
║  ║                                                                ║ ║
║  ║  ⏰ Timer de 30s começa a contar!                              ║ ║
║  ║  🎯 Usuário pode responder agora!                              ║ ║
║  ╚════════════════════════════════════════════════════════════════╝ ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

## ⚙️ Configurações Técnicas da Animação

```typescript
// Tempos exatos (milissegundos)
const ANIMATION_CONFIG = {
  fadeOut: {
    duration: 1000,        // 1.0s
    easing: 'ease-out',
    opacity: [1, 0],
    scale: [1, 0.95]
  },
  
  cardReveal: {
    duration: 600,         // 0.6s
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    keyframes: [
      { transform: 'scale(0) rotateY(90deg)', opacity: 0 },      // 0%
      { transform: 'scale(1.1) rotateY(45deg)', opacity: 0.5 },  // 50%
      { transform: 'scale(1) rotateY(0deg)', opacity: 1 }        // 100%
    ]
  },
  
  shimmer: {
    duration: 800,         // 0.8s
    easing: 'linear',
    backgroundPosition: ['-1000px 0', '1000px 0']
  },
  
  sound: {
    file: 'card_reveal.mp3',
    volume: 0.7,
    playAt: 1000          // Toca em T=1.0s (início da carta)
  }
};

// Total da transição
const TOTAL_TRANSITION_TIME = 2400; // 2.4s
```

---

## 🎨 CSS Classes Utilizadas

```css
/* Arquivo: /styles/animations.css */

/* 1️⃣ Fade Out do Godot */
.fade-out-animation {
  animation: fadeOutGodot 1s ease-out forwards;
}

@keyframes fadeOutGodot {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.95);
  }
}

/* 2️⃣ Revelação da Carta (Flip 3D) */
.card-reveal-animation {
  animation: cardReveal 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}

@keyframes cardReveal {
  0% {
    transform: scale(0) rotateY(90deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.1) rotateY(45deg);
    opacity: 0.5;
  }
  100% {
    transform: scale(1) rotateY(0deg);
    opacity: 1;
  }
}

/* 3️⃣ Efeito Shimmer (Brilho) */
.shimmer-effect {
  position: relative;
  overflow: hidden;
}

.shimmer-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.3) 50%,
    transparent 100%
  );
  animation: shimmer 0.8s ease-in-out;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}

/* 4️⃣ Glow Pulsante (opcional) */
.glow-pulse {
  animation: glowPulse 2s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
  }
  50% {
    box-shadow: 0 0 40px rgba(59, 130, 246, 0.8);
  }
}
```

---

## 🔊 Sistema de Áudio

```typescript
// /utils/sounds.ts

class SoundManager {
  private sounds: Map<string, HTMLAudioElement> = new Map();
  
  constructor() {
    // Pre-carregar sons
    this.preload('card_reveal', '/sounds/card_reveal.mp3');
    this.preload('correct', '/sounds/correct.mp3');
    this.preload('wrong', '/sounds/wrong.mp3');
  }
  
  preload(key: string, path: string) {
    const audio = new Audio(path);
    audio.preload = 'auto';
    this.sounds.set(key, audio);
  }
  
  play(key: string, volume = 1.0) {
    const sound = this.sounds.get(key);
    if (sound) {
      sound.volume = volume;
      sound.currentTime = 0; // Reset se já estiver tocando
      sound.play().catch(err => console.error('Audio error:', err));
    }
  }
}

// Uso no componente
const soundManager = new SoundManager();

const handleRunComplete = () => {
  // Toca som quando carta aparece
  setTimeout(() => {
    soundManager.play('card_reveal', 0.7);
  }, 1000); // Sincronizado com início da animação da carta
};
```

---

## 📱 Adaptações Mobile

```typescript
// Detecção de dispositivo
const isMobile = window.innerWidth <= 768;
const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

// Configurações adaptativas
const MOBILE_TIMINGS = {
  fadeOut: isMobile ? 700 : 1000,        // Mais rápido no mobile
  cardReveal: isMobile ? 400 : 600,
  shimmer: isMobile ? 600 : 800,
  questionTimer: isMobile ? 20000 : 30000 // Menos tempo no mobile
};

// CSS responsivo
const cardStyles = {
  fontSize: isMobile ? '16px' : '20px',
  padding: isMobile ? '1rem' : '2rem',
  borderRadius: isMobile ? '16px' : '24px'
};
```

---

## 🐛 Debug Mode

```typescript
// Ativar no console: window.__enableAnimationDebug = true

if (window.__enableAnimationDebug) {
  // Mostrar overlay com timeline
  const debugOverlay = document.createElement('div');
  debugOverlay.style.cssText = `
    position: fixed;
    top: 10px;
    right: 10px;
    background: rgba(0,0,0,0.8);
    color: #0f0;
    padding: 1rem;
    font-family: monospace;
    z-index: 9999;
  `;
  
  // Atualizar em tempo real
  setInterval(() => {
    debugOverlay.innerHTML = `
      🎮 ANIMATION DEBUG
      ━━━━━━━━━━━━━━━━━
      Phase: ${currentPhase}
      Timer: ${currentTimer}ms
      Opacity: ${godotIframe.style.opacity}
      Card Scale: ${cardElement.style.transform}
      Sound: ${isSoundPlaying ? '🔊' : '🔇'}
    `;
  }, 100);
  
  document.body.appendChild(debugOverlay);
}
```

---

## 🎯 Checklist de Implementação

```markdown
### Para implementar a animação de transição:

✅ **Passo 1: HTML/JSX**
- [ ] Adicionar div container com classe `game-container`
- [ ] Adicionar iframe do Godot com id `godot-iframe`
- [ ] Adicionar div da carta com classe `question-card`

✅ **Passo 2: CSS**
- [ ] Importar `/styles/animations.css`
- [ ] Verificar @keyframes: fadeOutGodot, cardReveal, shimmer
- [ ] Adicionar classes: .fade-out-animation, .card-reveal-animation

✅ **Passo 3: JavaScript**
- [ ] Implementar função handleRunComplete()
- [ ] Adicionar setTimeout para fade out (1000ms)
- [ ] Adicionar setTimeout para card reveal (1000ms)
- [ ] Integrar som card_reveal.mp3

✅ **Passo 4: State Management**
- [ ] Estado: gamePhase ('running' | 'transitioning' | 'question')
- [ ] Estado: currentQuestion
- [ ] Estado: showCard (boolean)

✅ **Passo 5: Comunicação Godot**
- [ ] Listener: window.addEventListener('message')
- [ ] Detectar: event.data.type === 'RUN_COMPLETE'
- [ ] Trigger: handleRunComplete()

✅ **Passo 6: Testes**
- [ ] Testar em desktop (Chrome, Firefox, Safari)
- [ ] Testar em mobile (iOS, Android)
- [ ] Verificar performance (60fps)
- [ ] Testar com áudio desabilitado
- [ ] Testar com reduced motion preference
```

---

## 🎬 Storyboard Visual

```
┌─────────────┐
│   FRAME 1   │  T = 0.0s - Corrida Godot em andamento
│ 🏃💨        │  ████████████████████ 100% opaco
│             │
└─────────────┘

        ⬇️ ⏱️ 1.0s

┌─────────────┐
│   FRAME 2   │  T = 0.5s - Começando fade out
│ 🏃💨        │  ██████████░░░░░░░░░ 50% opaco
│ (ficando    │
│  escuro)    │
└─────────────┘

        ⬇️ ⏱️ 0.5s

┌─────────────┐
│   FRAME 3   │  T = 1.0s - Tela escura
│             │  ░░░░░░░░░░░░░░░░░░░ 0% opaco
│   ⬛⬛⬛    │  Godot invisível
│   ⬛⬛⬛    │
└─────────────┘

        ⬇️ ⏱️ 0.3s

┌─────────────┐
│   FRAME 4   │  T = 1.3s - Carta começando a aparecer
│             │  🎴 rotação 45°, escala 1.1
│     🎴⟲    │  Semi-transparente
│             │
└─────────────┘

        ⬇️ ⏱️ 0.3s

┌─────────────┐
│   FRAME 5   │  T = 1.6s - Carta revelada!
│             │  ┌──────────┐
│  ┌─────────┐│  │ 🎴       │ 100% opaco, rotação 0°
│  │ QUESTÃO ││  │ QUESTÃO  │ Escala 1.0
│  │ AQUI... ││  │ COMPLETA │
│  └─────────┘│  └──────────┘
└─────────────┘

        ⬇️ ⏱️ 0.8s

┌─────────────┐
│   FRAME 6   │  T = 2.4s - Shimmer completado
│  ┌─────────┐│  ┌──────────┐
│  │ 🎴✨    ││  │ 🎴       │ Brilho passou
│  │ QUESTÃO ││  │ QUESTÃO  │ Pronta para resposta
│  │ ✅ ❌   ││  │ BOTÕES   │
│  └─────────┘│  └──────────┘
└─────────────┘
```

---

## 🚀 Performance Tips

### Otimizações Recomendadas

```typescript
// 1. Use will-change para avisar o navegador
.card-reveal-animation {
  will-change: transform, opacity;
}

// 2. Use transform/opacity (GPU accelerated)
// ✅ BOM
transform: translateX(100px);
opacity: 0.5;

// ❌ RUIM (causa reflow)
left: 100px;
visibility: hidden;

// 3. Remova will-change após animação
element.addEventListener('animationend', () => {
  element.style.willChange = 'auto';
});

// 4. Debounce de resize events
const debouncedResize = debounce(() => {
  recalculateAnimationTiming();
}, 250);

window.addEventListener('resize', debouncedResize);

// 5. Use requestAnimationFrame para sincronização
const animate = () => {
  updateAnimation();
  requestAnimationFrame(animate);
};
```

---

## 📊 Métricas de Sucesso

```typescript
// Analytics para a animação
const trackAnimationMetrics = () => {
  analytics.track('animation_transition', {
    totalDuration: 2400,
    fadeOutTime: 1000,
    cardRevealTime: 600,
    shimmerTime: 800,
    userDevice: isMobile ? 'mobile' : 'desktop',
    fps: getCurrentFPS(),
    soundEnabled: !isMuted
  });
};

// Monitorar performance
const monitorPerformance = () => {
  const start = performance.now();
  
  // Após animação completar
  requestAnimationFrame(() => {
    const duration = performance.now() - start;
    
    if (duration > 2500) {
      console.warn('⚠️ Animação lenta:', duration, 'ms');
    }
  });
};
```

---

**🎮 A Animação é a Alma do Game! ✨**

*Mantenha sempre a sincronia entre Godot → React → CSS → Audio!*

---

**Última atualização:** 05/12/2024  
**Versão:** 2.0.0  
**Status:** 🟢 Produção
