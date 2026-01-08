# 🎨 ARQUITETURA VISUAL DO GAME - QUIRON CONCURSOS

## 📋 ESTRUTURA DE ARQUIVOS

```
quiron-concursos/
│
├── 📁 components/
│   ├── EpicGame.tsx               # Tela principal - seleção de área/matérias
│   ├── GodotGamePlayer.tsx        # Container do iframe + comunicação
│   ├── MultiplayerLobby.tsx       # Sala de espera multiplayer
│   ├── GameResults.tsx            # Tela de resultados pós-jogo
│   └── GameRules.tsx              # Modal com regras do game
│
├── 📁 public/
│   └── 📁 godot-game/             # 🎯 AQUI VAI O BUILD DO GODOT
│       ├── index.html             # HTML exportado do Godot
│       ├── quiron-game.wasm       # WebAssembly do Godot
│       ├── quiron-game.js         # JavaScript do Godot
│       └── quiron-game.pck        # Assets do jogo
│
├── 📁 supabase/functions/server/
│   ├── game_routes.tsx            # 8 rotas RESTful para questões
│   ├── multiplayer.tsx            # Sistema multiplayer (futuro)
│   └── rankings.tsx               # Rankings e leaderboard
│
└── 📁 data/
    ├── gameQuestions.ts           # Estrutura + áreas temáticas
    ├── questions-*.ts             # 40+ arquivos com questões
    └── *.md                       # Documentação do banco
```

---

## 🎮 FLUXO VISUAL DO USUÁRIO

```
┌─────────────────────────────────────────────────────────────────┐
│                    TELA 1: EPIC GAME MENU                       │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                             │  │
│  │         🏛️ QUIRON CONCURSOS - GAME ÉPICO                   │  │
│  │                                                             │  │
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐          │  │
│  │  │   SINGLE    │ │    MULTI    │ │    TREINO   │          │  │
│  │  │   PLAYER    │ │   PLAYER    │ │   LIVRE     │          │  │
│  │  └─────────────┘ └─────────────┘ └─────────────┘          │  │
│  │                                                             │  │
│  │  ESCOLHA SUA ÁREA TEMÁTICA:                                │  │
│  │  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐         │  │
│  │  │ ⚖️ JURÍ-│ │ 🛡️ POLI-│ │ 🧠 CONHE│ │ 💼 FIS- │         │  │
│  │  │  DICA   │ │  CIAL   │ │  CIMEN. │ │  CAL    │         │  │
│  │  │  (Azul) │ │(Vermelho│ │ (Roxo)  │ │(Amarelo)│         │  │
│  │  └─────────┘ └─────────┘ └─────────┘ └─────────┘         │  │
│  │                                                             │  │
│  │  📚 MATÉRIAS (opcional - todas ou selecionar):             │  │
│  │  [x] Todas  [ ] Dir. Constitucional  [ ] Dir. Penal...    │  │
│  │                                                             │  │
│  │              [🎮 INICIAR JOGO ÉPICO]                       │  │
│  │                                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                               ↓
                        [Clica INICIAR]
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│                 TELA 2: LOADING SCREEN                          │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                             │  │
│  │                    ⚡ CARREGANDO...                         │  │
│  │                                                             │  │
│  │              [████████████░░░░░░] 80%                      │  │
│  │                                                             │  │
│  │         Preparando arena mitológica...                     │  │
│  │         Carregando 30 questões épicas...                   │  │
│  │         Invocando o poder de Quíron...                     │  │
│  │                                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                               ↓
                        [Game carregado]
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│              TELA 3: GODOT GAME (IFRAME FULLSCREEN)             │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║  🎮 GAME 3D RODANDO AQUI (Godot 4)                        ║  │
│  ║                                                            ║  │
│  ║  ┌─────────────────────────────────────────────────────┐  ║  │
│  ║  │  Fase 1/3 - Iniciante          Questão 1/10  ⏱️ 28s│  ║  │
│  ║  │  Score: 850                    Combo: 🔥 x3        │  ║  │
│  ║  └─────────────────────────────────────────────────────┘  ║  │
│  ║                                                            ║  │
│  ║              🎴 CARD 3D FLUTUANDO                         ║  │
│  ║    ┌─────────────────────────────────────────┐           ║  │
│  ║    │                                           │           ║  │
│  ║    │  A República Federativa do Brasil é      │           ║  │
│  ║    │  formada pela união indissolúvel dos     │           ║  │
│  ║    │  Estados, Municípios e Distrito Federal. │           ║  │
│  ║    │                                           │           ║  │
│  ║    │      [✅ CERTO]    [❌ ERRADO]           │           ║  │
│  ║    │                                           │           ║  │
│  ║    └─────────────────────────────────────────┘           ║  │
│  ║                                                            ║  │
│  ║       🌟 Partículas    ⚡ Efeitos VFX    🎵 Som         ║  │
│  ║                                                            ║  │
│  ║  [✕ Fechar Game]                   [⚖️ Área Jurídica]   ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────────────────┘
                               ↓
                   [Após responder CERTO]
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│               TELA 3B: EXPLICAÇÃO (20 SEGUNDOS)                 │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║                                                            ║  │
│  ║         ✅ RESPOSTA CORRETA! +100 pontos                  ║  │
│  ║                                                            ║  │
│  ║    ┌─────────────────────────────────────────┐           ║  │
│  ║    │  📖 EXPLICAÇÃO:                          │           ║  │
│  ║    │                                           │           ║  │
│  ║    │  Conforme o artigo 1º da Constituição   │           ║  │
│  ║    │  Federal de 1988: "A República           │           ║  │
│  ║    │  Federativa do Brasil, formada pela      │           ║  │
│  ║    │  união indissolúvel dos Estados e        │           ║  │
│  ║    │  Municípios e do Distrito Federal..."   │           ║  │
│  ║    │                                           │           ║  │
│  ║    │  📚 Matéria: Direito Constitucional     │           ║  │
│  ║    │  🎯 Tópico: Princípios Fundamentais      │           ║  │
│  ║    │  📊 Banca: CESPE/CEBRASPE - 2022         │           ║  │
│  ║    │                                           │           ║  │
│  ║    └─────────────────────────────────────────┘           ║  │
│  ║                                                            ║  │
│  ║              Próxima questão em 15s...                    ║  │
│  ║              [████████████░░░░] 60%                       ║  │
│  ║                                                            ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────────────────┘
                               ↓
                    [Após 10 questões]
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│                TELA 3C: TRANSIÇÃO DE FASE                       │
│  ╔═══════════════════════════════════════════════════════════╗  │
│  ║                                                            ║  │
│  ║         🎉 FASE 1 COMPLETADA! 🎉                          ║  │
│  ║                                                            ║  │
│  ║              Score: 850 pontos                            ║  │
│  ║              Acertos: 8/10                                ║  │
│  ║              Tempo: 2m 45s                                ║  │
│  ║                                                            ║  │
│  ║         ⚡ Próxima Fase: Intermediário                    ║  │
│  ║         🔥 Dificuldade: MÉDIA                             ║  │
│  ║                                                            ║  │
│  ║              Iniciando em 3... 2... 1...                  ║  │
│  ║                                                            ║  │
│  ╚═══════════════════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────────────────┘
                               ↓
                    [Fase 2 e 3 idênticas]
                               ↓
                    [Após completar 3 fases]
                               ↓
┌─────────────────────────────────────────────────────────────────┐
│                  TELA 4: RESULTS SCREEN                         │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                             │  │
│  │            🏆 VITÓRIA ÉPICA! 🏆                            │  │
│  │                                                             │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │  SCORE FINAL: 2.450 pontos                          │  │  │
│  │  │                                                       │  │  │
│  │  │  ✅ Acertos: 24/30 (80%)                            │  │  │
│  │  │  ⏱️ Tempo Total: 8m 32s                             │  │  │
│  │  │  🔥 Combo Máximo: x7                                 │  │  │
│  │  │  ⚡ XP Ganho: +486                                   │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │                                                             │  │
│  │  📊 RANKING:                                               │  │
│  │  ┌─────────────────────────────────────────────────────┐  │  │
│  │  │  1º 👑 JoãoPedro2024    3.250 pts                   │  │  │
│  │  │  2º 🥈 MariaCarla       2.890 pts                   │  │  │
│  │  │  3º 🥉 VocêMesmo        2.450 pts  ← VOCÊ           │  │  │
│  │  │  4º    CarlosSilva      2.100 pts                   │  │  │
│  │  └─────────────────────────────────────────────────────┘  │  │
│  │                                                             │  │
│  │  🎖️ NOVO CARGO DESBLOQUEADO:                              │  │  │
│  │     "Analista Judiciário" (3 fases completas)             │  │  │
│  │                                                             │  │
│  │  [🔄 JOGAR NOVAMENTE]  [📊 VER ESTATÍSTICAS]  [🏠 MENU]  │  │  │
│  │                                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🎨 ELEMENTOS VISUAIS DO GODOT

### **ARENA 3D (Scene Principal)**

```
                     [VISÃO DE CIMA]
    
    ╔═══════════════════════════════════════════════╗
    ║                                               ║
    ║         🌟    ARENA MITOLÓGICA    🌟         ║
    ║                                               ║
    ║  ┌───────────────────────────────────────┐   ║
    ║  │                                        │   ║
    ║  │         [CARD 3D QUESTÃO]             │   ║
    ║  │                                        │   ║
    ║  │    "Texto da questão aqui..."         │   ║
    ║  │                                        │   ║
    ║  │      [✅ CERTO]  [❌ ERRADO]          │   ║
    ║  │                                        │   ║
    ║  └───────────────────────────────────────┘   ║
    ║                                               ║
    ║      ⚡ Partículas        ⚡ Partículas      ║
    ║                                               ║
    ║  🏛️ Colunas Gregas      🏛️ Colunas Gregas   ║
    ║                                               ║
    ╚═══════════════════════════════════════════════╝

                  [CÂMERA POSIÇÃO]
                        📷
                    (levemente acima)
```

### **CORES POR ÁREA (GODOT)**

```gdscript
# Cores das 4 áreas temáticas
const AREA_COLORS = {
    "juridica": {
        "primary": Color(0.2, 0.4, 0.9),      # Azul
        "secondary": Color(0.3, 0.6, 1.0),    # Azul claro
        "particles": Color(0.4, 0.7, 1.0, 0.8)
    },
    "policial": {
        "primary": Color(0.9, 0.1, 0.1),      # Vermelho sangue
        "secondary": Color(1.0, 0.3, 0.3),    # Vermelho claro
        "particles": Color(1.0, 0.2, 0.2, 0.8)
    },
    "gerais": {
        "primary": Color(0.6, 0.2, 0.8),      # Roxo
        "secondary": Color(0.8, 0.4, 1.0),    # Roxo claro
        "particles": Color(0.7, 0.3, 0.9, 0.8)
    },
    "fiscal": {
        "primary": Color(0.95, 0.75, 0.1),    # Amarelo
        "secondary": Color(1.0, 0.85, 0.3),   # Amarelo claro
        "particles": Color(1.0, 0.8, 0.2, 0.8)
    }
}
```

### **ANIMAÇÕES E VFX**

#### **1. Acerto (✅):**
```
- Card brilha verde (#20C020)
- Partículas explodem (cor da área)
- Luz verde pulsante
- Som: "ding-success.wav"
- Escala do card: 1.0 → 1.2 → 1.0 (0.5s)
```

#### **2. Erro (❌):**
```
- Card fica vermelho (#E02020)
- Camera shake (0.3s, intensidade 0.1)
- Luz vermelha flash
- Som: "error-buzz.wav"
- Card balança: -5° → +5° → 0° (0.3s)
```

#### **3. Combo (🔥):**
```
- Quando 3+ acertos consecutivos
- Trail dourado atrás do card
- Partículas especiais (fogo)
- Flash de tela (cor da área, 30% opacidade)
- Som: "combo-whoosh.wav"
- Texto flutuante: "COMBO x3!"
```

#### **4. Fase Completa (🎉):**
```
- Confete explode de cima
- Luzes pulsantes em todas as direções
- Card gira 360° e desaparece
- Som: "victory-fanfare.wav"
- UI mostra: "FASE COMPLETADA!"
```

---

## 📊 HUD E UI DO GODOT

### **Interface Superior:**
```
┌──────────────────────────────────────────────────────────────┐
│  Fase 1/3          Questão 3/10          ⏱️ 25s  Score: 350 │
│  Iniciante         ████░░░░░░░░          🔥 x2              │
└──────────────────────────────────────────────────────────────┘
```

### **Interface do Card:**
```
┌────────────────────────────────────────────────────────────┐
│                                                              │
│  📚 Direito Constitucional                    🎯 Fácil     │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐ │
│  │                                                          │ │
│  │  A República Federativa do Brasil é formada pela       │ │
│  │  união indissolúvel dos Estados, Municípios e          │ │
│  │  Distrito Federal.                                      │ │
│  │                                                          │ │
│  └────────────────────────────────────────────────────────┘ │
│                                                              │
│         ┌─────────────┐        ┌─────────────┐             │
│         │             │        │             │             │
│         │   ✅ CERTO │        │  ❌ ERRADO │             │
│         │             │        │             │             │
│         └─────────────┘        └─────────────┘             │
│                                                              │
└────────────────────────────────────────────────────────────┘
```

---

## 🎬 SEQUÊNCIA DE EVENTOS (TIMELINE)

```
T=0s    → React envia questões para Godot
        → Godot recebe e valida
        → Godot envia "ready"
        
T=1s    → Godot spawna arena 3D
        → Aplica cores da área
        → Carrega materiais
        
T=2s    → Spawna primeiro card
        → Inicia timer (30s)
        → UI aparece com fade-in
        
T=5s    → Usuário clica "CERTO"
        → Timer para: 25s restantes
        → Tempo gasto: 5s
        
T=5.1s  → Feedback visual: ✅ verde
        → Partículas explodem
        → Som de sucesso
        → Calcula pontuação: +100 (base) +42 (velocidade)
        
T=5.5s  → Card vira e mostra explicação
        → Timer de explicação: 20s
        
T=25.5s → Explicação fecha
        → Card desaparece (fade-out)
        
T=26s   → Próximo card spawna
        → Reinicia timer (30s)
        → Repete...
        
T=5min  → 10 questões respondidas
        → Godot envia "phaseComplete"
        → Mostra tela de transição
        
T=5m 8s → Inicia Fase 2
        → Muda cor do ambiente
        → Carrega 10 novas questões
        
...     → Repete para Fase 3
        
T=15min → 30 questões completas
        → Godot envia "gameComplete" com estatísticas
        → React mostra tela de resultados
```

---

## 🔧 ESTRUTURA DE NODES (GODOT)

```
📁 QuironGame (Node3D)
├── 📁 Arena (Node3D)
│   ├── 📄 Floor (MeshInstance3D)
│   ├── 📄 Walls (MultiMeshInstance3D)
│   ├── 📄 Columns (MultiMeshInstance3D)
│   └── 📄 Skybox (WorldEnvironment)
│
├── 📁 Lighting (Node3D)
│   ├── 💡 DirectionalLight3D
│   ├── 💡 AreaLight_Correct (verde)
│   ├── 💡 AreaLight_Wrong (vermelho)
│   └── 💡 AmbientLight_Area (cor da área)
│
├── 📁 CardSystem (Node3D)
│   ├── 📄 CardSpawner (Node)
│   ├── 📄 QuestionCard (instanciado dinamicamente)
│   │   ├── 📄 CardMesh (MeshInstance3D)
│   │   ├── 📄 QuestionText (Label3D)
│   │   ├── 📄 ButtonCerto (Area3D + CollisionShape)
│   │   ├── 📄 ButtonErrado (Area3D + CollisionShape)
│   │   └── 📄 Particles (GPUParticles3D)
│   └── 📄 ExplanationPanel (Control)
│
├── 📁 VFX (Node3D)
│   ├── ✨ ParticlesSuccess (GPUParticles3D)
│   ├── ✨ ParticlesCombo (GPUParticles3D)
│   ├── ✨ ConfettiPhaseComplete (CPUParticles3D)
│   └── 📄 ScreenFlash (ColorRect)
│
├── 📁 Audio (Node)
│   ├── 🔊 MusicBackground (AudioStreamPlayer)
│   ├── 🔊 SFX_Success (AudioStreamPlayer)
│   ├── 🔊 SFX_Wrong (AudioStreamPlayer)
│   ├── 🔊 SFX_Combo (AudioStreamPlayer)
│   └── 🔊 SFX_PhaseComplete (AudioStreamPlayer)
│
├── 📁 UI (CanvasLayer)
│   ├── 📄 HUD (Control)
│   │   ├── PhaseLabel (Label)
│   │   ├── QuestionProgress (ProgressBar)
│   │   ├── Timer (Label)
│   │   ├── Score (Label)
│   │   └── Combo (Label)
│   └── 📄 ExplanationOverlay (Panel)
│
├── 📁 Scripts (Node)
│   ├── 📜 Main.gd
│   ├── 📜 GameController.gd
│   ├── 📜 PhaseManager.gd
│   ├── 📜 ScoreSystem.gd
│   ├── 📜 EventSender.gd
│   └── 📜 JavaScriptBridge.gd
│
└── 📁 Camera (Camera3D)
    └── 📄 CameraShake (AnimationPlayer)
```

---

## 📱 RESPONSIVIDADE

### **Desktop (1920x1080):**
```
- Card tamanho: 800x600px
- Fonte questão: 24pt
- Botões: 200x80px
- Partículas: Alta densidade
```

### **Tablet (1024x768):**
```
- Card tamanho: 600x450px
- Fonte questão: 20pt
- Botões: 180x70px
- Partículas: Média densidade
```

### **Mobile (375x667):**
```
- Card tamanho: 340x400px
- Fonte questão: 16pt
- Botões: 150x60px (empilhados verticalmente)
- Partículas: Baixa densidade
- Simplificar VFX
```

---

## ✅ CHECKLIST VISUAL

### **Ambientação:**
- [ ] Arena 3D com chão texturizado
- [ ] Colunas gregas decorativas
- [ ] Skybox com gradiente (cor da área)
- [ ] Iluminação dinâmica (3 point lighting)

### **Cards:**
- [ ] Card 3D flutuante (levitando)
- [ ] Texto da questão legível (Label3D)
- [ ] Botões 3D clicáveis
- [ ] Animação de spawn (fade + escala)
- [ ] Animação de resposta (cor + movimento)

### **VFX:**
- [ ] Partículas de acerto (verde + cor área)
- [ ] Partículas de erro (vermelho + shake)
- [ ] Combo streak (trail + flash)
- [ ] Confete de fase completa
- [ ] Transições suaves entre fases

### **UI:**
- [ ] HUD sempre visível
- [ ] Timer com contador regressivo
- [ ] Barra de progresso (questões)
- [ ] Score atualizado em tempo real
- [ ] Combo counter com animação

### **Audio:**
- [ ] Música de fundo (tema épico)
- [ ] SFX de acerto
- [ ] SFX de erro
- [ ] SFX de combo
- [ ] SFX de fase completa
- [ ] Música diferente por área (opcional)

---

## 🎯 OBJETIVO FINAL

Criar uma experiência visual **IMPRESSIONANTE** que:
- ✅ Seja **imersiva** (3D, cores vibrantes, VFX)
- ✅ Tenha **feedback claro** (acerto/erro instantâneo)
- ✅ Seja **fluida** (60 FPS mínimo)
- ✅ Funcione **mobile e desktop**
- ✅ Transmita **epicidade** (tema mitológico)

---

**Versão:** 1.0  
**Data:** Janeiro 2025  
**App:** Quiron Concursos  
**Engine:** Godot 4
