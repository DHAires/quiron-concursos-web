# 🎮 DOCUMENTAÇÃO DE INTEGRAÇÃO GODOT 4 - QUIRON CONCURSOS

## 📋 ÍNDICE
1. [Visão Geral](#visão-geral)
2. [Arquitetura](#arquitetura)
3. [Comunicação React ↔ Godot](#comunicação-react--godot)
4. [API Backend (Supabase)](#api-backend-supabase)
5. [Estrutura de Dados](#estrutura-de-dados)
6. [Fluxo do Jogo](#fluxo-do-jogo)
7. [Testes e Debug](#testes-e-debug)
8. [Checklist de Integração](#checklist-de-integração)

---

## 🎯 VISÃO GERAL

O **Quiron Concursos** é um aplicativo de estudos para concursos públicos com um **Game Épico 3D** desenvolvido em **Godot 4**. O game está integrado ao app React via **iframe** e comunicação **postMessage**.

### **Conceito do Game:**
- **Tema:** Mitologia grega - Centauro Quíron (mentor sábio)
- **Formato:** Quiz 3D com 4 áreas temáticas
- **Estrutura:** 3 fases progressivas (Fácil → Médio → Difícil)
- **Questões:** 10 questões por fase = **30 questões por partida**
- **Tipo:** Certo/Errado (estilo Cebraspe/Cespe)

### **4 Áreas Temáticas:**

| Área | Cor | Ícone | Descrição |
|------|-----|-------|-----------|
| **Jurídica** | 🔵 Azul | ⚖️ Balança | Direito Constitucional, Administrativo, Penal, Civil, Trabalhista |
| **Policial** | 🔴 Vermelho Sangue | 🛡️ Escudo | Legislação Penal, Processo Penal, Estatuto da Criança, Drogas |
| **Conhecimentos Gerais** | 🟣 Roxo | 🧠 Cérebro | Português, História, Geografia, Raciocínio Lógico, Informática |
| **Fiscal-Bancária** | 🟡 Amarelo | 💼 Maleta | Administração Financeira, Contabilidade, Matemática Financeira |

---

## 🏗️ ARQUITETURA

```
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React + Vite)                   │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  App.tsx → EpicGame.tsx → GodotGamePlayer.tsx         │  │
│  │                           ↓ (iframe)                    │  │
│  │                   /public/godot-game/                  │  │
│  │                   index.html + .wasm                   │  │
│  └────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↕ (postMessage)
┌─────────────────────────────────────────────────────────────┐
│                    GODOT 4 GAME ENGINE                       │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  - Scene principal (3D Arena)                          │  │
│  │  - Sistema de Cards (questões)                         │  │
│  │  - Animações e VFX                                     │  │
│  │  - JavaScript Bridge (comunicação)                     │  │
│  └────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↕ (HTTPS REST API)
┌─────────────────────────────────────────────────────────────┐
│              BACKEND (Supabase Edge Functions)               │
│  ┌────────────────────────────────────────────────────────┐  │
│  │  /supabase/functions/server/game_routes.tsx            │  │
│  │  - 8 rotas RESTful                                     │  │
│  │  - KV Store (Postgres)                                 │  │
│  │  - Sistema de autenticação                             │  │
│  └────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## 📡 COMUNICAÇÃO REACT ↔ GODOT

### **Arquivo Responsável:**
📄 `/components/GodotGamePlayer.tsx` (linhas 1-247)

### **1️⃣ REACT → GODOT (Envio de Dados)**

**Quando:** Ao iniciar a partida  
**Método:** `postMessage` via iframe

```typescript
// Estrutura do objeto enviado
{
  type: 'INIT_GAME',
  area: 'juridica',  // 'juridica' | 'policial' | 'fiscal-bancaria' | 'conhecimentos-gerais'
  questions: [
    {
      id: 'const_001',
      text: 'A República Federativa do Brasil é formada pela união indissolúvel dos Estados.',
      correctAnswer: true,  // boolean: true (CERTO) ou false (ERRADO)
      explanation: 'Artigo 1º da CF/88: "A República Federativa do Brasil, formada pela união..."',
      subject: 'Direito Constitucional',
      topic: 'Princípios Fundamentais',
      difficulty: 'facil'  // 'facil' | 'medio' | 'dificil'
    },
    // ... mais 29 questões (total 30)
  ],
  userEnergy: 10,  // Energia atual do usuário
  config: {
    timeLimit: 30,        // segundos por questão
    phases: 3,            // número de fases
    cardsPerPhase: 10     // questões por fase
  }
}
```

**Código no Godot (GDScript/C#):**
```gdscript
# Receber dados do React
func _ready():
    # Registrar listener para mensagens do JavaScript
    JavaScript.eval("window.addEventListener('message', function(event) {
        if (event.data.type === 'INIT_GAME') {
            godot.receive_game_data(JSON.stringify(event.data));
        }
    });")

func receive_game_data(json_string):
    var data = JSON.parse(json_string).result
    var questions = data.questions
    var area = data.area
    # Inicializar jogo com os dados recebidos
    start_game(area, questions)
```

---

### **2️⃣ GODOT → REACT (Eventos do Jogo)**

**Método:** `postMessage` do Godot para a janela pai

```gdscript
# Enviar mensagem para o React
func send_message_to_react(event_type, data):
    var message = {
        "type": "godot-event",
        "event": event_type,
        "data": data
    }
    JavaScript.eval("window.parent.postMessage(" + JSON.print(message) + ", '*');")
```

**Eventos Importantes:**

#### **a) Game Ready (Jogo Carregado)**
```gdscript
send_message_to_react("ready", {})
```

#### **b) Questão Respondida**
```gdscript
send_message_to_react("questionAnswered", {
    "questionId": "const_001",
    "userAnswer": true,
    "correct": true,
    "timeSpent": 12.5  # segundos
})
```

#### **c) Fase Completada**
```gdscript
send_message_to_react("phaseComplete", {
    "phase": 1,
    "score": 850,
    "correctAnswers": 8,
    "wrongAnswers": 2,
    "timeSpent": 145.2
})
```

#### **d) Game Completo**
```gdscript
send_message_to_react("gameComplete", {
    "score": 2450,
    "correctAnswers": 24,
    "wrongAnswers": 6,
    "time": 456.8,
    "maxCombo": 7,  # máximo de acertos consecutivos
    "accuracy": 80.0,  # porcentagem
    "phases": [
        { "phase": 1, "score": 850, "correct": 8 },
        { "phase": 2, "score": 780, "correct": 7 },
        { "phase": 3, "score": 820, "correct": 9 }
    ]
})
```

#### **e) Erro no Jogo**
```gdscript
send_message_to_react("error", {
    "message": "Erro ao carregar textura da fase 2"
})
```

---

## 🔌 API BACKEND (SUPABASE)

### **Base URL:**
```
https://{projectId}.supabase.co/functions/v1/make-server-50734795
```

### **Autenticação:**
```typescript
headers: {
  'Authorization': 'Bearer {publicAnonKey}',
  'Content-Type': 'application/json'
}
```

---

### **📌 ROTA 1: Buscar Questões para Partida**

**Endpoint:** `GET /game/questions/match?area={area}`

**Parâmetros:**
- `area` (required): `juridica` | `policial` | `fiscal-bancaria` | `conhecimentos-gerais`

**Resposta:**
```json
{
  "success": true,
  "match": {
    "area": "juridica",
    "questions": [/* 30 questões */],
    "phases": [
      {
        "phase": 1,
        "difficulty": "facil",
        "questions": [/* 10 questões fáceis */]
      },
      {
        "phase": 2,
        "difficulty": "medio",
        "questions": [/* 10 questões médias */]
      },
      {
        "phase": 3,
        "difficulty": "dificil",
        "questions": [/* 10 questões difíceis */]
      }
    ]
  }
}
```

**Exemplo de Uso (JavaScript):**
```javascript
async function loadGameQuestions(area) {
    const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions/match?area=${area}`,
        {
            headers: {
                'Authorization': `Bearer ${publicAnonKey}`
            }
        }
    );
    const data = await response.json();
    return data.match.questions;
}
```

---

### **📌 ROTA 2: Buscar Questões Personalizadas**

**Endpoint:** `GET /game/questions?area={area}&count={count}&difficulty={difficulty}&subject={subject}`

**Parâmetros:**
- `area` (opcional): Filtrar por área
- `count` (opcional): Número de questões (padrão: 10)
- `difficulty` (opcional): `facil` | `medio` | `dificil`
- `subject` (opcional): Matéria específica (ex: "Direito Constitucional")

**Resposta:**
```json
{
  "success": true,
  "questions": [/* questões */],
  "count": 10,
  "totalAvailable": 150
}
```

---

### **📌 ROTA 3: Salvar Resultado da Partida**

**Endpoint:** `POST /game/result`

**Body:**
```json
{
  "userId": "user_12345",
  "area": "juridica",
  "score": 2450,
  "correctAnswers": 24,
  "totalQuestions": 30,
  "timeSpent": 456.8,
  "difficulty": "mixed"
}
```

**Resposta:**
```json
{
  "success": true,
  "resultId": "result_1704571234567_user_12345",
  "userStats": {
    "totalGames": 15,
    "totalCorrect": 360,
    "totalQuestions": 450,
    "bestScore": 2800,
    "byArea": {
      "juridica": {
        "games": 5,
        "correct": 120,
        "total": 150
      }
    }
  }
}
```

---

### **📌 ROTA 4: Buscar Histórico do Usuário**

**Endpoint:** `GET /game/history/{userId}?limit={limit}`

**Parâmetros:**
- `userId` (required): ID do usuário
- `limit` (opcional): Número de resultados (padrão: 10)

**Resposta:**
```json
{
  "success": true,
  "history": [
    {
      "id": "result_1704571234567_user_12345",
      "userId": "user_12345",
      "area": "juridica",
      "score": 2450,
      "correctAnswers": 24,
      "totalQuestions": 30,
      "accuracy": 80.0,
      "timeSpent": 456.8,
      "difficulty": "mixed",
      "timestamp": "2024-01-06T18:30:00.000Z"
    }
  ],
  "total": 15
}
```

---

### **📌 ROTA 5: Estatísticas do Usuário**

**Endpoint:** `GET /game/user-stats/{userId}`

**Resposta:**
```json
{
  "success": true,
  "stats": {
    "totalGames": 15,
    "totalCorrect": 360,
    "totalQuestions": 450,
    "bestScore": 2800,
    "byArea": {
      "juridica": { "games": 5, "correct": 120, "total": 150 },
      "policial": { "games": 4, "correct": 96, "total": 120 },
      "gerais": { "games": 3, "correct": 72, "total": 90 },
      "fiscal": { "games": 3, "correct": 72, "total": 90 }
    }
  }
}
```

---

### **📌 ROTA 6: Estatísticas das Áreas**

**Endpoint:** `GET /game/stats?area={area}`

**Resposta:**
```json
{
  "success": true,
  "stats": {
    "juridica": {
      "total": 250,
      "byDifficulty": {
        "facil": 83,
        "medio": 107,
        "dificil": 60
      },
      "bySubject": {
        "Direito Constitucional": 50,
        "Direito Administrativo": 50,
        "Direito Penal": 50,
        "Direito Civil": 50,
        "Direito do Trabalho": 50
      }
    }
  }
}
```

---

### **📌 ROTA 7: Buscar Questão por ID**

**Endpoint:** `GET /game/questions/{id}`

**Resposta:**
```json
{
  "success": true,
  "question": {
    "id": "const_001",
    "area": "juridica",
    "subject": "Direito Constitucional",
    "question": "A República Federativa do Brasil é formada pela união indissolúvel dos Estados.",
    "correctAnswer": true,
    "explanation": "Art. 1º da CF/88...",
    "difficulty": "facil"
  }
}
```

---

### **📌 ROTA 8: Seed de Questões (ADMIN ONLY)**

**Endpoint:** `POST /game/seed`

**Headers Adicionais:**
```json
{
  "X-Admin-Code": "QUIRON_DEV_2024"
}
```

**Body:**
```json
{
  "questions": [/* array de questões */],
  "area": "juridica"
}
```

**⚠️ IMPORTANTE:** Esta rota requer código secreto de desenvolvedor!

---

## 📦 ESTRUTURA DE DADOS

### **Interface GameQuestion (TypeScript)**

```typescript
interface GameQuestion {
  id: string;                    // Identificador único (ex: "const_001")
  area: 'juridica' | 'policial' | 'fiscal-bancaria' | 'conhecimentos-gerais';
  subject: string;               // Nome da matéria (ex: "Direito Constitucional")
  question: string;              // Enunciado da questão
  correctAnswer: boolean;        // true = CERTO, false = ERRADO
  explanation: string;           // Explicação da resposta
  difficulty: 'facil' | 'medio' | 'dificil';
  topic?: string;                // Tópico específico (opcional)
  source?: {                     // Origem da questão (opcional)
    banca: string;               // Ex: "CESPE/CEBRASPE"
    ano: number;                 // Ex: 2023
    cargo: string;               // Ex: "Analista Judiciário"
  };
}
```

### **Exemplo de Questão Completa:**

```typescript
{
  id: 'const_001',
  area: 'juridica',
  subject: 'Direito Constitucional',
  question: 'A República Federativa do Brasil é formada pela união indissolúvel dos Estados, Municípios e Distrito Federal.',
  correctAnswer: true,
  explanation: 'CERTO. Conforme o artigo 1º da Constituição Federal de 1988: "A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado Democrático de Direito..."',
  difficulty: 'facil',
  topic: 'Princípios Fundamentais',
  source: {
    banca: 'CESPE/CEBRASPE',
    ano: 2022,
    cargo: 'Técnico Judiciário - TRE'
  }
}
```

---

## 🎮 FLUXO DO JOGO

### **1️⃣ Seleção da Área**
```
EpicGame.tsx (linha 300+)
↓
Usuário escolhe uma das 4 áreas temáticas
↓
setSelectedArea({ id: 'juridica', name: 'Área Jurídica', ... })
```

### **2️⃣ Iniciar Partida**
```
handleStartGame('single')  // ou 'multi' para multiplayer
↓
Buscar 30 questões da área escolhida (mock atual, substituir por API)
↓
setStep('playing')
↓
Renderiza <GodotGamePlayer />
```

### **3️⃣ Carregar Godot**
```
GodotGamePlayer.tsx
↓
Iframe carrega: /public/godot-game/index.html
↓
Godot envia: { type: 'ready' }
↓
React envia: { type: 'INIT_GAME', questions: [...], ... }
```

### **4️⃣ Gameplay no Godot**

**FASE 1 (Fácil):**
```
- Exibir arena 3D temática (cores da área)
- Spawnar 10 cards com questões
- Usuário clica em CERTO ou ERRADO
- Feedback visual (✅ verde ou ❌ vermelho)
- Exibir explicação por 20 segundos
- Próxima questão
```

**FASE 2 (Médio):**
```
- Mesma mecânica
- Dificuldade média
- Visual mais intenso
```

**FASE 3 (Difícil):**
```
- Mesma mecânica
- Dificuldade alta
- Efeitos visuais épicos
```

### **5️⃣ Finalizar Partida**
```
Godot → React: { event: 'gameComplete', data: { score, correctAnswers, ... } }
↓
GodotGamePlayer.tsx chama: onGameComplete(result)
↓
EpicGame.tsx: setStep('results')
↓
Renderiza <GameResults /> com ranking, XP ganho, etc.
```

---

## 🧪 TESTES E DEBUG

### **Como Testar a Integração:**

#### **1. Build do Godot para Web:**
```bash
# No Godot Editor:
Project → Export → HTML5 (Web)
Export Path: /public/godot-game/index.html
```

#### **2. Testar Comunicação:**
```javascript
// No console do navegador (F12):

// Simular mensagem do Godot
window.parent.postMessage({
  type: 'godot-event',
  event: 'ready',
  data: {}
}, '*');

// Simular game completo
window.parent.postMessage({
  type: 'godot-event',
  event: 'gameComplete',
  data: {
    score: 2450,
    correctAnswers: 24,
    wrongAnswers: 6,
    time: 456.8
  }
}, '*');
```

#### **3. Debug Logs:**

No `GodotGamePlayer.tsx`, todos os eventos têm `console.log`:
```
🎮 Game communication setup complete
🎮 Sending data to game: {...}
🎮 Godot game is ready!
🎮 Question answered: {...}
🎮 Game completed: {...}
```

No Godot, adicionar logs:
```gdscript
print("🎮 [GODOT] Mensagem recebida do React:", data)
print("🎮 [GODOT] Enviando resposta para React:", message)
```

---

## ✅ CHECKLIST DE INTEGRAÇÃO

### **Frontend (React):**
- [x] Componente `GodotGamePlayer.tsx` criado
- [x] Sistema de postMessage implementado
- [x] Handlers para eventos do Godot
- [x] Cálculo de XP baseado em desempenho
- [x] Tela de loading do game
- [x] Tratamento de erros
- [ ] **PENDENTE:** Substituir questões mock por API real

### **Backend (Supabase):**
- [x] 8 rotas RESTful criadas (`game_routes.tsx`)
- [x] Sistema de autenticação admin
- [x] KV Store configurado
- [x] Endpoints de questões funcionando
- [x] Sistema de histórico e estatísticas
- [ ] **PENDENTE:** Popular banco com 1.370 questões reais

### **Godot 4:**
- [ ] **PENDENTE:** Scene principal da arena 3D
- [ ] **PENDENTE:** Sistema de cards de questões
- [ ] **PENDENTE:** Integração JavaScript (receber/enviar mensagens)
- [ ] **PENDENTE:** Sistema de 3 fases progressivas
- [ ] **PENDENTE:** Animações e VFX por área temática
- [ ] **PENDENTE:** Feedback visual (acerto/erro)
- [ ] **PENDENTE:** Timer de 30 segundos por questão
- [ ] **PENDENTE:** Tela de explicação (20 segundos)
- [ ] **PENDENTE:** Sistema de pontuação
- [ ] **PENDENTE:** Exportação Web (HTML5)

### **Integração:**
- [ ] **PENDENTE:** Testar comunicação React ↔ Godot
- [ ] **PENDENTE:** Validar estrutura de questões
- [ ] **PENDENTE:** Testar todas as 4 áreas temáticas
- [ ] **PENDENTE:** Ajustar responsividade mobile
- [ ] **PENDENTE:** Otimizar performance (FPS, loading)
- [ ] **PENDENTE:** Implementar sistema de energia (Freemium)

---

## 📚 BANCO DE QUESTÕES

### **Localização:**
```
/data/
├── gameQuestions.ts (estrutura principal)
├── questions-direito-constitucional.ts (50 questões)
├── questions-direito-administrativo.ts (50 questões)
├── questions-direito-penal.ts (50 questões)
├── questions-legislacao-penal.ts (65 questões) ✨ EXPANDIDO
├── ... (40+ arquivos)
└── TOTAL: ~1.370 questões
```

### **Como Adicionar Novas Questões:**
📄 Consulte: `/data/GUIA-RAPIDO-ADICIONAR-QUESTOES.md`

---

## 🎨 DESIGN VISUAL DO GODOT

### **Paleta de Cores por Área:**

```gdscript
# Cores primárias
var AREA_COLORS = {
    "juridica": Color(0.2, 0.4, 0.9),      # Azul
    "policial": Color(0.9, 0.1, 0.1),      # Vermelho sangue
    "gerais": Color(0.6, 0.2, 0.8),        # Roxo
    "fiscal": Color(0.95, 0.75, 0.1)       # Amarelo
}

# Gradientes para arena
func setup_arena_colors(area):
    match area:
        "juridica":
            return [Color(0.1, 0.3, 0.8), Color(0.3, 0.5, 1.0)]
        "policial":
            return [Color(0.7, 0.0, 0.0), Color(1.0, 0.2, 0.2)]
        "gerais":
            return [Color(0.4, 0.1, 0.6), Color(0.7, 0.3, 0.9)]
        "fiscal":
            return [Color(0.8, 0.6, 0.0), Color(1.0, 0.8, 0.2)]
```

### **VFX Recomendados:**
- ✅ Partículas ao acertar (cor da área)
- ❌ Shake screen ao errar
- ⚡ Combo streak visual (3+ acertos seguidos)
- 🌟 Explosão de confete ao finalizar fase
- 🔥 Trail effect nos cards

---

## 🚀 PRÓXIMOS PASSOS

### **Para o Desenvolvedor Godot:**

1. **Setup Inicial:**
   - Clone o repositório
   - Leia esta documentação completa
   - Configure Godot 4 (última versão stable)

2. **Criar Protótipo:**
   - Cena 3D básica com câmera
   - 1 card de questão interativo
   - Botões CERTO/ERRADO
   - Implementar JavaScript bridge (teste postMessage)

3. **Validar Comunicação:**
   - Receber dados do React
   - Enviar evento "ready"
   - Enviar evento "questionAnswered"
   - Testar no navegador

4. **Desenvolver Gameplay:**
   - Sistema de 3 fases
   - Lógica de pontuação
   - Timer de 30 segundos
   - Tela de explicação
   - Feedback visual

5. **Polir Visual:**
   - Cores temáticas por área
   - Animações suaves
   - VFX impactantes
   - UI responsiva

6. **Export & Deploy:**
   - Build para Web (HTML5)
   - Otimizar tamanho (.wasm)
   - Testar em diferentes dispositivos
   - Deploy em `/public/godot-game/`

---

## 📞 CONTATO E SUPORTE

### **Arquivos Importantes:**
- `/components/GodotGamePlayer.tsx` - Player do Godot
- `/components/EpicGame.tsx` - Tela principal do game
- `/supabase/functions/server/game_routes.tsx` - API Backend
- `/data/gameQuestions.ts` - Estrutura de questões

### **Documentação Adicional:**
- `/data/VISAO-GERAL-BANCO-QUESTOES.md` - Overview de todas as questões
- `/data/GUIA-RAPIDO-ADICIONAR-QUESTOES.md` - Como adicionar questões

### **Debug Mode:**
No React, abra o console (F12) e procure por logs com emoji 🎮

---

## 🎯 OBJETIVO FINAL

Criar uma experiência de jogo 3D **épica e imersiva** que:
- ✅ Seja **divertida** e **viciante**
- ✅ Ensine de forma **eficaz** (questões + explicações)
- ✅ Tenha **visual impressionante** (VFX, animações)
- ✅ Seja **responsiva** (desktop + mobile)
- ✅ Integre **perfeitamente** com o app React

**Boa sorte e bom desenvolvimento! 🚀🎮**

---

**Versão:** 1.0  
**Data:** Janeiro 2025  
**App:** Quiron Concursos  
**Engine:** Godot 4 + React + Supabase
