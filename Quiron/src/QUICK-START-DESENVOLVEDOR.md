# ⚡ QUICK START - DESENVOLVEDOR

## 🎯 O QUE VOCÊ TEM

```
✅ 50 questões prontas (Direito Constitucional)
✅ 6 scripts Godot 4 completos
✅ Banner interativo no app
✅ 8 documentos de referência
```

---

## 🚀 3 PASSOS PARA COMEÇAR

### **1. EXPLORE O BANNER** (5 minutos)
```
App → Menu ☰ → "📖 Banco de Questões" → CLIQUE no banner roxo
```
**Você verá:**
- Endpoints da API (copiar)
- Scripts GDScript prontos
- Estrutura JSON
- Links de documentação

### **2. COPIE OS SCRIPTS** (2 minutos)
```bash
/godot-scripts/
├── game_questions_manager.gd      # API REST
├── question_card.gd               # Carta
├── epic_game_manager.gd           # Single-player
├── game_websocket_manager.gd      # WebSocket
├── multiplayer_game_manager.gd    # Multiplayer
└── constants.gd                   # Config
```

### **3. ESCOLHA SEU MODO** (decide agora)

#### **Opção A: Single-Player (API REST)**
```gdscript
# Use estes 3 scripts:
- game_questions_manager.gd
- question_card.gd
- epic_game_manager.gd

# Crie 4 endpoints:
GET /api/game/questions?area=juridica&count=10
GET /api/game/questions/match?area=juridica
GET /api/game/questions/const_001
GET /api/game/questions/stats?area=juridica
```

#### **Opção B: Multiplayer (WebSocket)**
```gdscript
# Use estes 3 scripts:
- game_websocket_manager.gd
- multiplayer_game_manager.gd
- question_card.gd

# Adicione handlers WebSocket:
- MATCHMAKING_EVENT (find_match, match_found)
- GAME_EVENT (questions, answers, rankings)
```

---

## 📡 ENDPOINTS (API REST)

### **Response Esperado:**
```json
GET /api/game/questions/match?area=juridica

{
  "success": true,
  "data": {
    "fase1": [ 10 questões fáceis ],
    "fase2": [ 10 questões médias ],
    "fase3": [ 10 questões difíceis ]
  }
}
```

### **Questão:**
```json
{
  "id": "const_001",
  "area": "juridica",
  "subject": "Direito Constitucional",
  "question": "Enunciado...",
  "correctAnswer": true,
  "explanation": "CERTO. Explicação...",
  "difficulty": "facil"
}
```

---

## 🎮 WEBSOCKET (Multiplayer)

### **Eventos Principais:**

```typescript
// Cliente → Servidor
MATCHMAKING_EVENT: { action: "FIND_MATCH", area: "juridica" }
GAME_EVENT: { action: "SUBMIT_ANSWER", question_id: "const_001", answer: true, time_taken: 15.3 }

// Servidor → Cliente
MATCHMAKING_EVENT: { action: "MATCH_FOUND", match_id: "...", players: [...] }
GAME_EVENT: { action: "QUESTIONS_LOADED", fase1: [...], fase2: [...], fase3: [...] }
GAME_EVENT: { action: "OPPONENT_ANSWER", player_id: "...", was_correct: true }
GAME_EVENT: { action: "MATCH_ENDED", winner: "...", rankings: [...] }
```

---

## 📚 DOCUMENTAÇÃO

| Arquivo | Para que serve |
|---------|----------------|
| `/INTEGRACAO-GODOT4-GAME.md` | API REST completa |
| `/INTEGRACAO-WEBSOCKET-MULTIPLAYER.md` | WebSocket completa |
| `/godot-scripts/README-GODOT-SCRIPTS.md` | Scripts Godot |
| `/RESUMO-FINAL-BANCO-QUESTOES.md` | Visão geral |

---

## ⚙️ CONFIGURAÇÃO RÁPIDA

### **1. Editar constants.gd:**
```gdscript
const SERVER_BASE_URL_API = "https://SEU-DOMINIO.supabase.co/functions/v1/make-server-50734795"
const SERVER_BASE_URL_WS = "wss://SEU-DOMINIO.supabase.co/functions/v1/websocket"
```

### **2. Criar hierarquia Godot:**
```
EpicGame (Node) [epic_game_manager.gd]
├── GameQuestionsManager [game_questions_manager.gd]
│   └── HTTPRequest
├── QuestionCard [question_card.gd]
│   └── (UI nodes)
└── (outros nodes)
```

### **3. Testar:**
```gdscript
func _ready():
    start_game("juridica")
```

---

## 🎯 MECÂNICA DO GAME

```
3 FASES × 10 CARTAS = 30 QUESTÕES

CADA CARTA:
├── 30s para responder (Certo/Errado)
├── Acertou: 20s mostra explicação → próxima
└── Errou: gera nova carta até acertar
```

---

## ✅ CHECKLIST MÍNIMO

- [ ] Banner explorado
- [ ] Scripts copiados
- [ ] `constants.gd` editado
- [ ] Endpoints criados OU WebSocket implementado
- [ ] Cena Godot criada
- [ ] Teste básico funcionando

---

## 🚨 PROBLEMAS COMUNS

### **"Questões não carregam"**
- Verifique URL em `constants.gd`
- Teste endpoint no navegador
- Veja console do Godot

### **"JSON inválido"**
- Garanta estrutura: `{ success: true, data: { fase1, fase2, fase3 } }`
- Cada questão precisa de todos os campos

### **"WebSocket desconecta"**
- Verifique ticket token
- Ping/pong funcionando?
- Veja logs do servidor

---

## 🎉 CONCLUSÃO

```
╔══════════════════════════════════════╗
║                                      ║
║  ⚡ 3 PASSOS                         ║
║  📚 6 SCRIPTS                        ║
║  🎮 2 MODOS (Single/Multi)           ║
║  ✅ PRONTO EM 30 MINUTOS             ║
║                                      ║
╚══════════════════════════════════════╝
```

**🔥 COMECE AGORA! ABRA O BANNER NO APP!** 🎯

---

**Última atualização:** 2024-12-05
