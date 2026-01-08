# 🎮 SCRIPTS GODOT 4 - QUIRON CONCURSOS

## 📋 RESUMO

Scripts prontos para integrar o sistema de questões do Quiron Concursos ao Godot 4, seguindo o padrão do desenvolvedor.

---

## 📂 ARQUIVOS CRIADOS

### **1. game_questions_manager.gd**
Gerenciador de download e cache de questões

**Principais funções:**
- `load_match_questions(area: String)` - Carrega 30 questões (3 fases)
- `load_questions_by_difficulty(area, difficulty, count)` - Carrega questões específicas
- `clear_cache(area)` - Limpa cache local
- `shuffle_questions(questions)` - Embaralha questões
- `filter_by_difficulty(questions, difficulty)` - Filtra por dificuldade

**Signals:**
- `questions_loaded(questions_data: Dictionary)` - Questões carregadas com sucesso
- `questions_error(error_message: String)` - Erro ao carregar

### **2. question_card.gd**
Carta de questão com timer e feedback

**Principais funções:**
- `set_question(question_data: Dictionary)` - Define questão
- `pause_card()` - Pausa timer
- `resume_card()` - Retoma timer
- `reset_card()` - Reseta estado

**Signals:**
- `card_completed(was_correct: bool)` - Carta completada
- `time_expired()` - Tempo esgotado

### **3. epic_game_manager.gd**
Gerenciador completo do game (3 fases)

**Principais funções:**
- `start_game(area: String)` - Inicia partida
- `pause_game()` - Pausa game
- `resume_game()` - Retoma game
- `quit_game()` - Sair do game

**Signals:**
- `game_started()` - Game iniciado
- `fase_completed(fase_number: int)` - Fase completada
- `game_completed(stats: Dictionary)` - Game completado
- `game_failed()` - Game falhou

### **4. constants.gd**
Constantes globais (URLs, cores, configurações)

**Principais constantes:**
- `SERVER_BASE_URL_API` - URL base da API
- `AREA_COLORS` - Cores das áreas
- `DIFFICULTY_COLORS` - Cores de dificuldade
- `QUESTION_TIME_SECONDS` - Tempo para responder (30s)
- `EXPLANATION_TIME_SECONDS` - Tempo da explicação (20s)

---

## 🏗️ ESTRUTURA NO GODOT

### **Hierarquia de Nodes Recomendada:**

```
EpicGame (Node)
├── GameQuestionsManager (Node) [game_questions_manager.gd]
│   └── HTTPRequest
├── QuestionCard (Control) [question_card.gd]
│   └── MarginContainer
│       └── VBoxContainer
│           ├── QuestionLabel (Label)
│           ├── ExplanationLabel (Label)
│           ├── TimerLabel (Label)
│           ├── DifficultyBadge (Label)
│           ├── HBoxButtons (HBoxContainer)
│           │   ├── BtnCerto (Button)
│           │   └── BtnErrado (Button)
│           └── AnswerFeedback (Control)
├── ModalLoading (Control)
├── ModalError (Control)
├── UI (Control)
│   ├── FaseIndicator (Label)
│   └── ProgressBar (ProgressBar)
└── AnimationPlayer (AnimationPlayer)
```

---

## 🚀 COMO USAR

### **1. Configurar Constantes**

Edite `constants.gd`:

```gdscript
# Alterar URL base
const SERVER_BASE_URL_API: String = "https://SEU-DOMINIO.supabase.co/functions/v1/make-server-50734795"
```

### **2. Criar Cena do Epic Game**

1. Crie nova cena: `epic_game.tscn`
2. Node raiz: `Node` com script `epic_game_manager.gd`
3. Adicione nodes filhos conforme hierarquia acima
4. Configure node paths nos scripts (usando `@onready`)

### **3. Iniciar Game**

```gdscript
# No menu de seleção de área
func _on_area_selected(area: String):
    TransitionScreen.fade_in(Constants.Scenes.EPIC_GAME)
    
# Na cena do Epic Game (epic_game_manager.gd)
func _ready():
    # ... (código de setup já está no script)
    pass

# Iniciar quando a cena carregar
func _enter_tree():
    # Pegar área selecionada (pode ser de um singleton/global)
    var selected_area = GlobalData.selected_area # ou passar por parâmetro
    start_game(selected_area)
```

### **4. Exemplo de Fluxo Completo**

```gdscript
# epic_game_manager.gd
func _ready():
    # Conectar signals
    _questions_manager.questions_loaded.connect(_on_questions_loaded)
    _question_card.card_completed.connect(_on_card_completed)
    
    # Iniciar game
    start_game("juridica")

# Quando questões carregam
func _on_questions_loaded(questions_data: Dictionary):
    # Questões divididas em 3 fases
    # Fase 1 começa automaticamente
    pass

# Quando usuário responde
func _on_card_completed(was_correct: bool):
    if was_correct:
        # Próxima carta ou próxima fase
        # Já tratado no script
        pass
    else:
        # Gera nova carta automaticamente
        # Já tratado no script
        pass

# Quando game completa
func _on_game_completed(stats: Dictionary):
    print("Acertos: %d" % stats["correct_answers"])
    print("Erros: %d" % stats["wrong_attempts"])
    print("Precisão: %.1f%%" % stats["accuracy"])
    
    # Salvar stats, mostrar resultados, etc.
    TransitionScreen.fade_in(Constants.Scenes.RESULTS)
```

---

## 🗂️ ESTRUTURA DE DADOS

### **Questão (recebida da API):**

```gdscript
{
    "id": "const_001",
    "area": "juridica",
    "subject": "Direito Constitucional",
    "question": "A República Federativa do Brasil tem como fundamentos...",
    "correctAnswer": true,
    "explanation": "CERTO. Art. 1º, I, II e III da CF/88.",
    "difficulty": "facil"
}
```

### **Resposta da API (/match):**

```gdscript
{
    "success": true,
    "data": {
        "fase1": [
            { questão 1 },
            { questão 2 },
            ... 10 questões fáceis
        ],
        "fase2": [
            ... 10 questões médias
        ],
        "fase3": [
            ... 10 questões difíceis
        ]
    }
}
```

### **Stats do Game (ao completar):**

```gdscript
{
    "area": "juridica",
    "total_cards": 30,
    "correct_answers": 30,
    "wrong_attempts": 5,
    "duration_seconds": 245.3,
    "accuracy": 85.7
}
```

---

## 🎮 MECÂNICA IMPLEMENTADA

### **Fluxo de uma Carta:**

```
1. Mostrar questão (30 segundos)
2. Usuário responde (Certo/Errado)

   ACERTOU:
   ├── Mostrar explicação (20 segundos)
   └── Próxima carta

   ERROU ou TIMEOUT:
   ├── Mostrar feedback (2 segundos)
   └── Gerar nova carta (mesma dificuldade)
```

### **Fluxo das 3 Fases:**

```
FASE 1 - FÁCIL
├── 10 cartas
├── Acertar todas
└── Próxima fase

FASE 2 - MÉDIO
├── 10 cartas
├── Acertar todas
└── Próxima fase

FASE 3 - DIFÍCIL
├── 10 cartas
├── Acertar todas
└── GAME COMPLETADO! 🎉
```

---

## 🎨 CORES E VISUAL

### **Cores das Áreas:**
```gdscript
const AREA_COLORS = {
    "juridica": Color("#3B82F6"),        # Azul
    "policial": Color("#DC2626"),        # Vermelho
    "fiscal-bancaria": Color("#EAB308"), # Amarelo
    "conhecimentos-gerais": Color("#9333EA") # Roxo
}
```

### **Cores de Dificuldade:**
```gdscript
const DIFFICULTY_COLORS = {
    "facil": Color("#22C55E"),   # Verde
    "medio": Color("#EAB308"),   # Amarelo
    "dificil": Color("#DC2626")  # Vermelho
}
```

### **Aplicar Cores:**
```gdscript
# No question_card.gd
func set_question(question_data: Dictionary):
    # Cor da área
    var area = question_data.get("area", "juridica")
    modulate = Constants.AREA_COLORS.get(area, Color.WHITE)
    
    # Cor da dificuldade
    var difficulty = question_data.get("difficulty", "medio")
    _difficulty_badge.modulate = Constants.DIFFICULTY_COLORS.get(difficulty, Color.WHITE)
```

---

## 💾 SISTEMA DE CACHE

### **Cache Automático:**

O `game_questions_manager.gd` salva automaticamente as questões no cache local:

```gdscript
# Arquivo: user://questions_cache_juridica.json
{
    "area": "juridica",
    "timestamp": 1234567890,
    "questions": { ... }
}
```

### **Usar Cache:**

```gdscript
# Carregar questões (tenta cache primeiro, depois API)
_questions_manager.load_match_questions("juridica")

# Limpar cache manualmente
_questions_manager.clear_cache("juridica")
```

### **Cache Expira:**

Por padrão, cache expira após **24 horas**. Para mudar:

```gdscript
# Em game_questions_manager.gd
var max_cache_age = 86400 # segundos (24h)
```

---

## 🧪 TESTAR

### **Teste Rápido:**

```gdscript
# Em epic_game_manager.gd _ready()
func _ready():
    # ... setup
    
    # TESTE: Iniciar game imediatamente
    start_game("juridica")
```

### **Teste com Dados Mockados:**

Se a API ainda não estiver pronta:

```gdscript
# Em game_questions_manager.gd
func load_match_questions(area: String):
    # MOCK: Emitir questões fake
    var mock_data = {
        "fase1": [
            {
                "id": "mock_001",
                "area": area,
                "subject": "Teste",
                "question": "Esta é uma questão de teste?",
                "correctAnswer": true,
                "explanation": "CERTO. Apenas um teste.",
                "difficulty": "facil"
            }
            # ... adicionar 9 mais
        ],
        "fase2": [ ... ],
        "fase3": [ ... ]
    }
    
    await get_tree().create_timer(1.0).timeout
    questions_loaded.emit(mock_data)
```

---

## 🔧 PERSONALIZAR

### **Mudar Tempos:**

```gdscript
# Em constants.gd
const QUESTION_TIME_SECONDS: float = 45.0  # Mais tempo
const EXPLANATION_TIME_SECONDS: float = 15.0  # Menos tempo
```

### **Mudar Quantidade de Cartas:**

```gdscript
# Em constants.gd
const CARDS_PER_FASE: int = 15  # 15 cartas por fase
```

### **Adicionar Animações:**

```gdscript
# Em question_card.gd
func set_question(question_data: Dictionary):
    # ... código existente
    
    # Adicionar animação customizada
    if _animation_player:
        _animation_player.play("card_appear")
```

---

## ❌ TROUBLESHOOTING

### **Erro: "Dados da questão inválidos"**

Verifique se a API retorna todos os campos:
- `id`, `area`, `subject`, `question`, `correctAnswer`, `explanation`, `difficulty`

### **Erro: "Questões insuficientes"**

A API deve retornar **pelo menos 10 questões** por fase.

### **Erro: "Não foi possível salvar cache"**

Verifique permissões de escrita em `user://`

### **Questões não carregam:**

1. Verifique URL em `constants.gd`
2. Verifique conexão com internet
3. Veja console do Godot para erros HTTP
4. Teste endpoint no navegador primeiro

---

## 📞 SUPORTE

### **Precisa de ajuda?**

1. Leia este README completo
2. Consulte `/INTEGRACAO-GODOT4-GAME.md`
3. Veja o banner no app: Menu → Banco de Questões → Banner Godot

### **Referências:**

- Script original do dev: Fornecido como base
- Documentação completa: `/INTEGRACAO-GODOT4-GAME.md`
- Estrutura JSON: No banner de integração

---

## ✅ CHECKLIST DE INTEGRAÇÃO

### **Setup:**
- [ ] Copiar 4 scripts para projeto Godot
- [ ] Editar URL em `constants.gd`
- [ ] Criar cena `epic_game.tscn`
- [ ] Configurar hierarquia de nodes
- [ ] Conectar node paths (@onready)

### **Teste:**
- [ ] Testar download de questões
- [ ] Testar 30s timer
- [ ] Testar resposta correta (20s explicação)
- [ ] Testar resposta errada (nova carta)
- [ ] Testar timeout (nova carta)
- [ ] Completar 3 fases

### **Produção:**
- [ ] Configurar URL de produção
- [ ] Testar todas 4 áreas
- [ ] Testar cache offline
- [ ] Adicionar animações
- [ ] Adicionar sons/música
- [ ] Testar em build final

---

## 🎉 CONCLUSÃO

```
╔═══════════════════════════════════════════════╗
║                                               ║
║  ✅ SCRIPTS PRONTOS PARA GODOT 4             ║
║  ✅ SEGUEM PADRÃO DO DESENVOLVEDOR           ║
║  ✅ SISTEMA COMPLETO DE 3 FASES              ║
║  ✅ CACHE AUTOMÁTICO                         ║
║  ✅ DOCUMENTAÇÃO COMPLETA                    ║
║                                               ║
║  📋 COPIE OS SCRIPTS                         ║
║  🎮 CONFIGURE A CENA                         ║
║  🧪 TESTE                                    ║
║  🚀 PUBLIQUE!                                ║
║                                               ║
╚═══════════════════════════════════════════════╝
```

**🎮 BOA INTEGRAÇÃO!** 🚀✨
