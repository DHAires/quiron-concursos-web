# 🎮 INTEGRAÇÃO WEBSOCKET - MODO MULTIPLAYER

## 📋 RESUMO

Sistema completo de comunicação WebSocket para o modo **MULTIPLAYER** do Game Épico "A Corrida dos Heróis", baseado no padrão fornecido pelo desenvolvedor.

---

## 🏗️ ARQUITETURA

### **Fluxo de Comunicação:**

```
CLIENTE (Godot)          SERVIDOR (Backend)         BANCO DE QUESTÕES
     │                         │                            │
     │  1. Login Anônimo       │                            │
     ├────────────────────────>│                            │
     │  2. Ticket Token        │                            │
     │<────────────────────────┤                            │
     │                         │                            │
     │  3. Connect WebSocket   │                            │
     │  (com ticket)           │                            │
     ├────────────────────────>│                            │
     │                         │                            │
     │  4. Find Match          │                            │
     ├────────────────────────>│                            │
     │  5. Match Found         │                            │
     │<────────────────────────┤                            │
     │                         │                            │
     │  6. Match Started       │                            │
     │<────────────────────────┤                            │
     │                         │                            │
     │  7. Request Questions   │                            │
     ├────────────────────────>│  8. Get Questions          │
     │                         ├───────────────────────────>│
     │                         │  9. Questions Data         │
     │                         │<───────────────────────────┤
     │  10. Questions Loaded   │                            │
     │<────────────────────────┤                            │
     │                         │                            │
     │  [GAME LOOP]            │                            │
     │  11. Submit Answer      │                            │
     ├────────────────────────>│  12. Validate & Broadcast  │
     │  13. Opponent Answer    │                            │
     │<────────────────────────┤                            │
     │                         │                            │
     │  14. Fase Completed     │                            │
     ├────────────────────────>│                            │
     │                         │                            │
     │  15. Match Ended        │                            │
     │<────────────────────────┤                            │
```

---

## 📡 EVENTOS WEBSOCKET

### **1. MATCHMAKING_EVENT**

#### **Enviar (Cliente → Servidor):**

```gdscript
# Procurar partida
WebSocket.send_message("MATCHMAKING_EVENT", {
    "action": "FIND_MATCH",
    "area": "juridica" # juridica | policial | fiscal-bancaria | conhecimentos-gerais
})

# Cancelar matchmaking
WebSocket.send_message("MATCHMAKING_EVENT", {
    "action": "CANCEL"
})
```

#### **Receber (Servidor → Cliente):**

```json
// Match encontrado
{
    "event": "MATCHMAKING_EVENT",
    "data": {
        "action": "MATCH_FOUND",
        "match_id": "match_abc123",
        "players": [
            { "id": "player1", "username": "João" },
            { "id": "player2", "username": "Maria" }
        ]
    }
}

// Jogador entrou
{
    "event": "MATCHMAKING_EVENT",
    "data": {
        "action": "PLAYER_JOINED",
        "player": { "id": "player3", "username": "Pedro" }
    }
}

// Jogador saiu
{
    "event": "MATCHMAKING_EVENT",
    "data": {
        "action": "PLAYER_LEFT",
        "player_id": "player2"
    }
}

// Timeout (não encontrou partida)
{
    "event": "MATCHMAKING_EVENT",
    "data": {
        "action": "MATCHMAKING_TIMEOUT"
    }
}
```

### **2. GAME_EVENT**

#### **Enviar (Cliente → Servidor):**

```gdscript
# Solicitar questões
WebSocket.send_message("GAME_EVENT", {
    "action": "REQUEST_QUESTIONS",
    "match_id": "match_abc123",
    "area": "juridica"
})

# Enviar resposta
WebSocket.send_message("GAME_EVENT", {
    "action": "SUBMIT_ANSWER",
    "match_id": "match_abc123",
    "question_id": "const_001",
    "answer": true, # true = CERTO, false = ERRADO
    "time_taken": 15.3 # segundos
})

# Notificar fase completada
WebSocket.send_message("GAME_EVENT", {
    "action": "FASE_COMPLETED",
    "match_id": "match_abc123",
    "fase": 1
})

# Sair da partida
WebSocket.send_message("GAME_EVENT", {
    "action": "LEAVE_MATCH",
    "match_id": "match_abc123"
})
```

#### **Receber (Servidor → Cliente):**

```json
// Match iniciado
{
    "event": "GAME_EVENT",
    "data": {
        "action": "MATCH_STARTED",
        "match_id": "match_abc123",
        "area": "juridica",
        "players": [...],
        "mode": "competitive" // competitive | cooperative
    }
}

// Questões carregadas
{
    "event": "GAME_EVENT",
    "data": {
        "action": "QUESTIONS_LOADED",
        "fase1": [
            {
                "id": "const_001",
                "area": "juridica",
                "subject": "Direito Constitucional",
                "question": "...",
                "correctAnswer": true,
                "explanation": "...",
                "difficulty": "facil"
            }
            // ... mais 9 questões
        ],
        "fase2": [...], // 10 questões médias
        "fase3": [...]  // 10 questões difíceis
    }
}

// Oponente respondeu
{
    "event": "GAME_EVENT",
    "data": {
        "action": "OPPONENT_ANSWER",
        "player_id": "player2",
        "was_correct": true,
        "time_taken": 12.5,
        "progress": {
            "fase": 1,
            "cards_completed": 3,
            "total_correct": 3,
            "total_wrong": 1
        }
    }
}

// Match finalizado
{
    "event": "GAME_EVENT",
    "data": {
        "action": "MATCH_ENDED",
        "winner": "player1",
        "rankings": [
            {
                "player_id": "player1",
                "username": "João",
                "position": 1,
                "correct": 30,
                "wrong": 2,
                "time": 245.3,
                "points": 1500
            },
            {
                "player_id": "player2",
                "username": "Maria",
                "position": 2,
                "correct": 30,
                "wrong": 5,
                "time": 312.7,
                "points": 1200
            }
        ],
        "stats": {
            "duration": 312.7,
            "total_questions": 30
        },
        "rewards": {
            "xp": 500,
            "coins": 100
        }
    }
}

// Sincronização de estado (reconexão)
{
    "event": "GAME_EVENT",
    "data": {
        "action": "SYNC_STATE",
        "match_id": "match_abc123",
        "area": "juridica",
        "players": [...],
        "is_in_match": true,
        "current_fase": 2,
        "your_progress": {
            "correct": 12,
            "wrong": 3,
            "fase": 2,
            "cards_completed": 2
        }
    }
}
```

### **3. ERROR**

```json
{
    "event": "ERROR",
    "data": "Mensagem de erro"
}
```

---

## 🎮 SCRIPTS GODOT 4

### **1. game_websocket_manager.gd**

Gerencia comunicação WebSocket para o game.

**Principais funções:**
- `find_match(area: String)` - Procura partida
- `cancel_matchmaking()` - Cancela busca
- `request_match_questions()` - Solicita questões
- `submit_answer(question_id, answer, time)` - Envia resposta
- `notify_fase_completed(fase)` - Notifica fase completada
- `leave_match()` - Sair da partida

**Signals:**
- `questions_loaded(questions_data)` - Questões carregadas
- `opponent_answer(player_id, was_correct, time)` - Oponente respondeu
- `match_started(match_data)` - Match iniciado
- `match_ended(results)` - Match finalizado
- `player_joined(player_data)` - Jogador entrou
- `player_left(player_id)` - Jogador saiu

### **2. multiplayer_game_manager.gd**

Gerenciador completo do game multiplayer.

**Principais funções:**
- `start_matchmaking(area)` - Inicia matchmaking
- `cancel_matchmaking()` - Cancela matchmaking
- `leave_game()` - Sair do game

**Signals:**
- `game_started()` - Game iniciado
- `fase_completed(fase)` - Fase completada
- `game_completed(results)` - Game completado
- `opponent_progress_updated(player_id, progress)` - Progresso de oponente

---

## 🔧 IMPLEMENTAÇÃO BACKEND

### **Endpoints REST (Para login):**

```typescript
// Login anônimo (gerar ticket)
POST /auth/ticket-anonymous
Response: {
    "username": "Jogador_12345",
    "ticketToken": "abc123xyz..."
}
```

### **WebSocket URL:**

```
wss://[seu-dominio].supabase.co/functions/v1/websocket?ticket=abc123xyz...
```

### **Estrutura do Servidor:**

```typescript
// Pseudo-código do servidor
import { gameQuestions } from './data/gameQuestions'

const matches = new Map<string, Match>()
const waitingPlayers = new Map<string, Player[]>() // area -> players[]

// MATCHMAKING
ws.on('MATCHMAKING_EVENT', async (data) => {
    if (data.action === 'FIND_MATCH') {
        const area = data.area
        
        // Adicionar à fila
        if (!waitingPlayers.has(area)) {
            waitingPlayers.set(area, [])
        }
        waitingPlayers.get(area).push(player)
        
        // Verificar se tem 2+ jogadores (ou esperar timeout)
        if (waitingPlayers.get(area).length >= 2) {
            // Criar match
            const matchId = generateId()
            const players = waitingPlayers.get(area).splice(0, 2)
            
            const match = {
                id: matchId,
                area: area,
                players: players,
                questions: null,
                startTime: null
            }
            
            matches.set(matchId, match)
            
            // Notificar jogadores
            players.forEach(p => {
                p.ws.send({
                    event: 'MATCHMAKING_EVENT',
                    data: {
                        action: 'MATCH_FOUND',
                        match_id: matchId,
                        players: players.map(x => ({
                            id: x.id,
                            username: x.username
                        }))
                    }
                })
            })
            
            // Iniciar match
            setTimeout(() => startMatch(matchId), 3000)
        }
    }
})

// GAME EVENTS
ws.on('GAME_EVENT', async (data) => {
    const match = matches.get(data.match_id)
    
    if (data.action === 'REQUEST_QUESTIONS') {
        // Buscar 30 questões (10 fáceis, 10 médias, 10 difíceis)
        const questions = {
            fase1: getRandomQuestions(10, data.area, 'facil'),
            fase2: getRandomQuestions(10, data.area, 'medio'),
            fase3: getRandomQuestions(10, data.area, 'dificil')
        }
        
        match.questions = questions
        
        // Enviar para todos os jogadores
        broadcastToMatch(match, {
            event: 'GAME_EVENT',
            data: {
                action: 'QUESTIONS_LOADED',
                ...questions
            }
        })
    }
    
    if (data.action === 'SUBMIT_ANSWER') {
        // Validar resposta
        const question = findQuestionById(match.questions, data.question_id)
        const isCorrect = question.correctAnswer === data.answer
        
        // Broadcast para outros jogadores
        broadcastToMatchExcept(match, player.id, {
            event: 'GAME_EVENT',
            data: {
                action: 'OPPONENT_ANSWER',
                player_id: player.id,
                was_correct: isCorrect,
                time_taken: data.time_taken
            }
        })
        
        // Atualizar stats do jogador
        updatePlayerStats(match, player.id, isCorrect)
    }
    
    if (data.action === 'FASE_COMPLETED') {
        // Atualizar progresso
        updatePlayerPhase(match, player.id, data.fase)
        
        // Verificar se todos completaram
        if (allPlayersCompletedPhase(match, 3)) {
            endMatch(match)
        }
    }
})

function endMatch(match: Match) {
    // Calcular rankings
    const rankings = calculateRankings(match)
    
    // Enviar resultados
    broadcastToMatch(match, {
        event: 'GAME_EVENT',
        data: {
            action: 'MATCH_ENDED',
            winner: rankings[0].player_id,
            rankings: rankings,
            stats: { ... },
            rewards: { ... }
        }
    })
    
    // Limpar match
    matches.delete(match.id)
}
```

---

## 🎯 FLUXO COMPLETO (Exemplo)

### **1. Cliente se conecta:**

```gdscript
# login_screen.gd
func _on_login_button_pressed():
    # Login anônimo
    var url = "%s/auth/ticket-anonymous" % [Constants.SERVER_BASE_URL_API]
    _http_request.request(url, [], HTTPClient.METHOD_GET)

func _on_http_request_completed(result, response_code, headers, body):
    if response_code == 200:
        var json = JSON.parse_string(body.get_string_from_utf8())
        
        # Conectar WebSocket
        WebSocket.player_username = json["username"]
        WebSocket.connect_server(json["ticketToken"])
        
        # Ir para lobby
        TransitionScreen.fade_in(Constants.Scenes.LOBBY)
```

### **2. Usuário escolhe modo multiplayer:**

```gdscript
# lobby.gd
func _on_multiplayer_button_pressed():
    # Ir para seleção de área
    TransitionScreen.fade_in(Constants.Scenes.AREA_SELECTION)
```

### **3. Usuário seleciona área:**

```gdscript
# area_selection.gd
func _on_area_selected(area: String):
    # Salvar área selecionada
    GlobalData.selected_area = area
    
    # Ir para game multiplayer
    TransitionScreen.fade_in(Constants.Scenes.MULTIPLAYER_GAME)
```

### **4. Game inicia matchmaking:**

```gdscript
# multiplayer_game_manager.gd
func _ready():
    var area = GlobalData.selected_area
    start_matchmaking(area)

func start_matchmaking(area: String):
    _websocket_manager.find_match(area)
    # Mostra "Procurando oponentes..."
```

### **5. Match encontrado:**

```gdscript
func _on_match_started(match_data: Dictionary):
    print("Match com %d jogadores" % match_data.players.size())
    # Aguarda questões...
```

### **6. Questões carregadas:**

```gdscript
func _on_questions_loaded(questions_data: Dictionary):
    fase1_questions = questions_data.fase1
    fase2_questions = questions_data.fase2
    fase3_questions = questions_data.fase3
    
    # Iniciar Fase 1
    _start_fase(1)
```

### **7. Jogador responde:**

```gdscript
func _on_card_completed(was_correct: bool):
    var time_taken = Time.get_ticks_msec() / 1000.0 - card_start_time
    
    # Enviar ao servidor
    _websocket_manager.submit_answer(
        current_question.id,
        was_correct,
        time_taken
    )
    
    if was_correct:
        # Próxima carta
    else:
        # Nova carta (retry)
```

### **8. Recebe resposta de oponente:**

```gdscript
func _on_opponent_answer(player_id: String, was_correct: bool, time: float):
    # Atualizar UI de oponentes
    opponents_stats[player_id].correct += 1 if was_correct else 0
    _update_opponents_panel()
```

### **9. Completa todas as fases:**

```gdscript
func _on_game_completed():
    # Aguarda outros jogadores
    # Servidor enviará MATCH_ENDED
```

### **10. Recebe resultados:**

```gdscript
func _on_match_ended(results: Dictionary):
    # Mostrar tela de resultados
    var winner = results.winner
    var rankings = results.rankings
    
    # Ir para tela de resultados
    TransitionScreen.fade_in(Constants.Scenes.RESULTS)
```

---

## 📊 DIFERENÇAS: Single-player vs Multiplayer

| Aspecto | Single-Player | Multiplayer |
|---------|--------------|-------------|
| **Questões** | API REST | WebSocket |
| **Validação** | Cliente | Servidor |
| **Progresso** | Local | Sincronizado |
| **Fim do game** | Imediato | Aguarda oponentes |
| **Ranking** | N/A | Em tempo real |
| **Cache** | Sim | Não (sempre online) |

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### **Backend:**
- [ ] Endpoint `/auth/ticket-anonymous`
- [ ] WebSocket server setup
- [ ] Handler `MATCHMAKING_EVENT`
- [ ] Handler `GAME_EVENT`
- [ ] Sistema de matches
- [ ] Fila de matchmaking
- [ ] Validação de respostas
- [ ] Cálculo de rankings
- [ ] Broadcast de eventos

### **Godot:**
- [ ] Copiar `game_websocket_manager.gd`
- [ ] Copiar `multiplayer_game_manager.gd`
- [ ] Criar cena multiplayer
- [ ] UI de oponentes
- [ ] Tela de matchmaking
- [ ] Tela de resultados
- [ ] Conectar signals
- [ ] Testar fluxo completo

---

## 🎉 CONCLUSÃO

```
╔═══════════════════════════════════════════════════╗
║                                                   ║
║  ✅ SISTEMA WEBSOCKET COMPLETO                   ║
║  ✅ 2 SCRIPTS GODOT PRONTOS                      ║
║  ✅ EVENTOS DOCUMENTADOS                         ║
║  ✅ FLUXO COMPLETO EXPLICADO                     ║
║                                                   ║
║  📡 IMPLEMENTAR: Backend WebSocket               ║
║  🎮 COPIAR: Scripts para Godot                   ║
║  🧪 TESTAR: Fluxo completo                       ║
║                                                   ║
╚═══════════════════════════════════════════════════╝
```

**🎮 MODO MULTIPLAYER PRONTO PARA IMPLEMENTAÇÃO!** 🚀✨
