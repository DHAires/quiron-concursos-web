# 👨‍💻 BEM-VINDO, DESENVOLVEDOR GODOT!

## 🎯 MISSÃO

Você foi contratado para integrar o **Game Épico 3D** do **Quiron Concursos** usando **Godot 4**. Este documento é seu guia completo para começar.

---

## 📚 DOCUMENTAÇÃO DISPONÍVEL

Você tem acesso a **4 documentos técnicos** completos:

### **1️⃣ INTEGRAÇÃO GODOT 4** (`/docs/INTEGRACAO-GODOT4.md`)
- ✅ Visão geral do projeto
- ✅ Arquitetura completa (React ↔ Godot ↔ Supabase)
- ✅ Sistema de comunicação postMessage
- ✅ API Backend (8 rotas RESTful documentadas)
- ✅ Estrutura de dados (GameQuestion)
- ✅ Fluxo do jogo (passo a passo)
- ✅ Testes e debug
- ✅ Checklist de integração

**👉 COMECE POR AQUI!**

---

### **2️⃣ EXEMPLOS DE CÓDIGO** (`/docs/GODOT-CODE-EXAMPLES.md`)
- ✅ Setup JavaScript Bridge (GDScript)
- ✅ Receber questões do React
- ✅ Enviar eventos para React
- ✅ Sistema de cards 3D
- ✅ Feedback visual (acerto/erro/combo)
- ✅ Sistema de fases progressivas
- ✅ Timer e pontuação
- ✅ Script principal completo

**👉 COPIE E COLE ESTES CÓDIGOS!**

---

### **3️⃣ ARQUITETURA VISUAL** (`/docs/ARQUITETURA-VISUAL-GAME.md`)
- ✅ Estrutura de arquivos do projeto
- ✅ Fluxo visual do usuário (diagramas)
- ✅ Elementos visuais da arena 3D
- ✅ Paleta de cores por área
- ✅ Animações e VFX detalhados
- ✅ HUD e UI completos
- ✅ Timeline de eventos
- ✅ Estrutura de nodes (hierarquia Godot)
- ✅ Responsividade (desktop/tablet/mobile)

**👉 SIGA ESTE DESIGN!**

---

### **4️⃣ BANCO DE QUESTÕES** (`/data/VISAO-GERAL-BANCO-QUESTOES.md`)
- ✅ 1.370 questões distribuídas em 40+ arquivos
- ✅ 4 áreas temáticas detalhadas
- ✅ Estrutura completa de cada questão
- ✅ Distribuição por matéria e dificuldade

**👉 CONHEÇA AS QUESTÕES!**

---

## ⚡ INÍCIO RÁPIDO (5 PASSOS)

### **PASSO 1: LEIA A DOCUMENTAÇÃO** (30 min)
```bash
1. Abra /docs/INTEGRACAO-GODOT4.md
2. Leia "Visão Geral" e "Arquitetura"
3. Entenda o sistema de comunicação React ↔ Godot
4. Veja os exemplos de dados (JSON)
```

### **PASSO 2: CONFIGURE GODOT 4** (15 min)
```bash
1. Instale Godot 4 (última versão stable)
2. Crie novo projeto 3D
3. Salve em: quiron-godot-game/
4. Configure export Web (HTML5):
   - Project → Export → Add → Web
   - Export Path: /public/godot-game/index.html
```

### **PASSO 3: TESTE COMUNICAÇÃO** (1 hora)
```bash
1. Crie scene básica: Main.tscn
2. Adicione script: Main.gd
3. Copie código de /docs/GODOT-CODE-EXAMPLES.md
   - Seção "Setup JavaScript Bridge"
4. Exporte para Web
5. Teste no navegador:
   - Abra console (F12)
   - Verifique mensagens: "🎮 [GODOT] Quiron pronto!"
```

### **PASSO 4: CRIE PROTÓTIPO** (4 horas)
```bash
1. Arena 3D básica (chão + iluminação)
2. 1 Card 3D simples
3. 2 Botões: CERTO e ERRADO
4. Receber 1 questão do React
5. Exibir texto na tela
6. Enviar resposta de volta
```

### **PASSO 5: VALIDAÇÃO** (30 min)
```bash
1. Build para Web
2. Copiar para /public/godot-game/
3. Rodar app React: npm run dev
4. Ir para "Game Épico"
5. Escolher área
6. Clicar "Iniciar"
7. Verificar se o iframe carrega
8. Testar 1 questão completa
```

**🎉 Se funcionar, você está pronto para desenvolver o resto!**

---

## 📦 O QUE JÁ ESTÁ PRONTO

### ✅ **Frontend (React):**
- Componente `GodotGamePlayer.tsx` (iframe + comunicação)
- Sistema de postMessage configurado
- Tela de seleção de áreas
- Tela de resultados pós-jogo
- Sistema de loading

### ✅ **Backend (Supabase):**
- 8 rotas RESTful funcionando
- Sistema de autenticação
- KV Store (banco de dados)
- Endpoints para:
  - Buscar questões por área
  - Buscar questões para partida (30 questões)
  - Salvar resultados
  - Histórico do usuário
  - Estatísticas

### ✅ **Banco de Questões:**
- 1.370 questões prontas
- Formato padronizado (GameQuestion)
- 4 áreas temáticas completas
- 40+ matérias diferentes

---

## ⚠️ O QUE FALTA (SEU TRABALHO)

### ❌ **Godot Game (0% completo):**
- [ ] Scene principal da arena 3D
- [ ] Sistema de cards interativos
- [ ] JavaScript Bridge (comunicação)
- [ ] Sistema de 3 fases
- [ ] Feedback visual (VFX, animações)
- [ ] Timer de 30 segundos
- [ ] Tela de explicação (20s)
- [ ] Sistema de pontuação
- [ ] HUD e UI
- [ ] Audio (músicas e SFX)
- [ ] Exportação Web otimizada

---

## 🎨 DESIGN GUIDELINES

### **Cores por Área:**
- 🔵 **Jurídica:** Azul (`#3366FF`)
- 🔴 **Policial:** Vermelho sangue brilhante (`#E61919`)
- 🟣 **Conhecimentos Gerais:** Roxo (`#9933CC`)
- 🟡 **Fiscal-Bancária:** Amarelo (`#F2BF14`)

### **Estilo Visual:**
- ✅ Tema **mitológico grego** (Quíron, o centauro)
- ✅ Colunas gregas decorativas
- ✅ Partículas épicas (fogo, luz, confete)
- ✅ Animações suaves (tweens)
- ✅ Feedback visual claro (verde = certo, vermelho = errado)

### **Performance:**
- ✅ Mínimo **60 FPS**
- ✅ Build Web < **20 MB**
- ✅ Loading < **5 segundos**

---

## 🔌 INTEGRAÇÃO TÉCNICA

### **React envia para Godot:**
```javascript
{
  type: 'INIT_GAME',
  area: 'juridica',  // ou policial, gerais, fiscal
  questions: [
    {
      id: 'const_001',
      text: 'Questão aqui...',
      correctAnswer: true,  // true = CERTO, false = ERRADO
      explanation: 'Explicação aqui...',
      difficulty: 'facil'   // facil, medio, dificil
    },
    // ... mais 29 questões
  ],
  userEnergy: 10,
  config: {
    timeLimit: 30,
    phases: 3,
    cardsPerPhase: 10
  }
}
```

### **Godot envia para React:**
```javascript
// Quando pronto
{
  type: 'godot-event',
  event: 'ready',
  data: {}
}

// Quando responde questão
{
  type: 'godot-event',
  event: 'questionAnswered',
  data: {
    questionId: 'const_001',
    userAnswer: true,
    correct: true,
    timeSpent: 12.5
  }
}

// Quando completa o jogo
{
  type: 'godot-event',
  event: 'gameComplete',
  data: {
    score: 2450,
    correctAnswers: 24,
    wrongAnswers: 6,
    time: 456.8,
    maxCombo: 7
  }
}
```

---

## 🧪 COMO TESTAR

### **1. Teste no Editor (Mock Data):**
```gdscript
# No _ready():
if not OS.has_feature("web"):
    print("⚠️ Modo de teste - usando dados simulados")
    simulate_game_data()

func simulate_game_data():
    var mock_questions = [
        {
            "id": "test_001",
            "text": "Questão de teste 1",
            "correctAnswer": true,
            "explanation": "Explicação de teste",
            "difficulty": "facil"
        },
        # ... mais questões
    ]
    
    var mock_data = {
        "area": "juridica",
        "questions": mock_questions,
        "userEnergy": 10,
        "config": {"timeLimit": 30, "phases": 3, "cardsPerPhase": 10}
    }
    
    receive_game_data(JSON.stringify(mock_data))
```

### **2. Teste no Navegador:**
```bash
# Build para Web
Project → Export → Web → Export Project

# Copiar arquivos
cp -r build/* /caminho/para/quiron/public/godot-game/

# Rodar React
cd /caminho/para/quiron
npm run dev

# Abrir navegador
http://localhost:5173

# Abrir console (F12) e ver logs:
🎮 [GODOT] Quiron Concursos iniciando...
🔌 [GODOT] JavaScript Bridge configurado!
✅ [GODOT→REACT] Godot pronto!
📦 [GODOT] Dados recebidos do React
```

---

## 🐛 DEBUG COMUM

### **Problema: Iframe não carrega**
```
Solução:
1. Verificar se index.html está em /public/godot-game/
2. Verificar console do navegador (erros 404)
3. Testar abrindo index.html diretamente
```

### **Problema: postMessage não funciona**
```
Solução:
1. Verificar se está usando window.parent.postMessage
2. Verificar se o segundo parâmetro é '*'
3. Verificar se OS.has_feature("web") retorna true
4. Testar com JavaScriptBridge.eval diretamente
```

### **Problema: Questões não aparecem**
```
Solução:
1. Verificar se receive_game_data() é chamado
2. Verificar parse do JSON
3. Adicionar print() em cada etapa
4. Validar estrutura de questions array
```

---

## 📞 SUPORTE E CONTATOS

### **Arquivos Importantes:**
```
/components/GodotGamePlayer.tsx    - Player do Godot (React)
/components/EpicGame.tsx            - Tela principal do game
/supabase/functions/server/game_routes.tsx  - API Backend
/data/gameQuestions.ts              - Estrutura de questões
/docs/INTEGRACAO-GODOT4.md          - Doc principal
/docs/GODOT-CODE-EXAMPLES.md        - Exemplos de código
/docs/ARQUITETURA-VISUAL-GAME.md    - Design visual
```

### **Onde Colocar Seu Código Godot:**
```
/public/godot-game/
├── index.html        ← Export do Godot
├── quiron-game.wasm  ← WebAssembly
├── quiron-game.js    ← JavaScript
└── quiron-game.pck   ← Assets
```

---

## ✅ CHECKLIST DE ENTREGA

### **Mínimo Viável (MVP):**
- [ ] Arena 3D básica com iluminação
- [ ] Cards 3D com questões
- [ ] Botões CERTO e ERRADO funcionando
- [ ] Receber 30 questões do React
- [ ] Timer de 30 segundos por questão
- [ ] Feedback visual (verde/vermelho)
- [ ] Tela de explicação (20s)
- [ ] Sistema de 3 fases (fácil → médio → difícil)
- [ ] Enviar resultado final para React
- [ ] Export Web funcionando

### **Completo (Ideal):**
- [ ] Tudo do MVP +
- [ ] Cores temáticas por área (4 áreas)
- [ ] Partículas e VFX épicos
- [ ] Animações suaves (tweens)
- [ ] Sistema de combo (3+ acertos)
- [ ] Audio (música + SFX)
- [ ] HUD completo (score, fase, timer, combo)
- [ ] Responsividade mobile
- [ ] Performance otimizada (60 FPS)
- [ ] Loading screen

---

## 🎯 PRAZO ESTIMADO

### **Breakdown:**
- Setup e testes: **1 dia**
- Protótipo básico: **2-3 dias**
- Gameplay completo: **4-5 dias**
- Visual e VFX: **3-4 dias**
- Polimento e bugs: **2 dias**
- **TOTAL: 12-15 dias** (full-time)

---

## 🚀 COMEÇE AGORA!

1. ✅ Leia `/docs/INTEGRACAO-GODOT4.md` (30 min)
2. ✅ Configure Godot 4 e crie projeto (15 min)
3. ✅ Copie código de `/docs/GODOT-CODE-EXAMPLES.md` (30 min)
4. ✅ Teste comunicação básica (1 hora)
5. ✅ Crie protótipo de 1 questão (4 horas)
6. ✅ Expanda para 30 questões + 3 fases (3 dias)
7. ✅ Adicione visual épico (3 dias)
8. ✅ Polir e otimizar (2 dias)

**🎉 BOA SORTE E BOM DESENVOLVIMENTO!**

---

**Versão:** 1.0  
**Data:** Janeiro 2025  
**Projeto:** Quiron Concursos  
**Engine:** Godot 4.2+  
**Plataforma:** Web (HTML5 + WebAssembly)
