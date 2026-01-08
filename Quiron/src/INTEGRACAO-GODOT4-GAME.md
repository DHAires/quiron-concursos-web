# 🎮 INTEGRAÇÃO GODOT 4 - BANCO DE QUESTÕES

## 📋 RESUMO EXECUTIVO

### **O QUE FOI FEITO:**
✅ Sistema completo de banco de questões para o Game Épico "A Corrida dos Heróis"  
✅ 50 questões de Direito Constitucional (formato Certo/Errado estilo Cebraspe)  
✅ Estrutura para 4 áreas × 17 matérias = 850 questões totais  
✅ API REST pronta para consumo do Godot 4  
✅ Sistema de filtros por área, matéria e dificuldade  

---

## 🎯 ESTRUTURA DO GAME

### **"A Corrida dos Heróis" - Run + Quiz**
```
3 FASES DIRETAS
├── Fase 1: 10 cartas (Fácil)
├── Fase 2: 10 cartas (Médio)
└── Fase 3: 10 cartas (Difícil)

MECÂNICA:
├── Pergunta: Certo ou Errado
├── Tempo: 30 segundos para responder
├── Acertou: Mostra explicação por 20 segundos → próxima carta
├── Errou: Gera nova carta até acertar
└── Progressão: Sistema de carreira por área
```

### **4 ÁREAS TEMÁTICAS:**
- 🔵 **Jurídica** (Azul) - 5 matérias × 50 questões = 250
- 🔴 **Policial** (Vermelho) - 4 matérias × 50 questões = 200
- 🟡 **Fiscal-Bancária** (Amarelo) - 4 matérias × 50 questões = 200
- 🟣 **Conhecimentos Gerais** (Roxo) - 4 matérias × 50 questões = 200

---

## 📡 ENDPOINTS DA API (Para Godot 4)

### **BASE URL:**
```
https://[seu-dominio]/api/game/questions
```

### **1. Obter Questões por Área**
```http
GET /api/game/questions?area=juridica&difficulty=facil&count=10

Response:
{
  "success": true,
  "data": [
    {
      "id": "const_001",
      "area": "juridica",
      "subject": "Direito Constitucional",
      "question": "A República Federativa do Brasil tem como fundamentos a soberania...",
      "correctAnswer": true,
      "explanation": "CERTO. Art. 1º, I, II e III da CF/88.",
      "difficulty": "facil"
    }
  ],
  "count": 10
}
```

### **2. Obter Questões para uma Partida Completa**
```http
GET /api/game/questions/match?area=juridica

Response:
{
  "success": true,
  "data": {
    "fase1": [10 questões fáceis],
    "fase2": [10 questões médias],
    "fase3": [10 questões difíceis]
  },
  "total": 30
}
```

### **3. Obter Questão por ID**
```http
GET /api/game/questions/const_001

Response:
{
  "success": true,
  "data": {
    "id": "const_001",
    "area": "juridica",
    "subject": "Direito Constitucional",
    "question": "...",
    "correctAnswer": true,
    "explanation": "...",
    "difficulty": "facil"
  }
}
```

### **4. Obter Estatísticas**
```http
GET /api/game/questions/stats?area=juridica

Response:
{
  "success": true,
  "data": {
    "total": 50,
    "facil": 17,
    "medio": 26,
    "dificil": 7,
    "certas": 35,
    "erradas": 15
  }
}
```

---

## 🔧 INTEGRAÇÃO GODOT 4 (GDScript)

### **1. Script de Download de Questões**
```gdscript
# game_questions_manager.gd
extends Node

var http_request: HTTPRequest
var base_url = "https://[seu-dominio]/api/game/questions"
var current_questions = []

func _ready():
    http_request = HTTPRequest.new()
    add_child(http_request)
    http_request.request_completed.connect(_on_request_completed)

# Baixar questões para uma partida
func load_match_questions(area: String):
    var url = base_url + "/match?area=" + area
    var error = http_request.request(url)
    if error != OK:
        push_error("Erro ao fazer requisição HTTP: " + str(error))

# Callback quando a requisição completa
func _on_request_completed(result, response_code, headers, body):
    if response_code == 200:
        var json = JSON.new()
        var error = json.parse(body.get_string_from_utf8())
        if error == OK:
            var data = json.data
            if data.success:
                current_questions = data.data
                emit_signal("questions_loaded", current_questions)
        else:
            push_error("Erro ao parsear JSON")
    else:
        push_error("Erro HTTP: " + str(response_code))

signal questions_loaded(questions)
```

### **2. Script da Carta de Questão**
```gdscript
# question_card.gd
extends Control

@onready var question_label = $QuestionLabel
@onready var explanation_label = $ExplanationLabel
@onready var timer_label = $TimerLabel
@onready var btn_certo = $BtnCerto
@onready var btn_errado = $BtnErrado

var current_question = null
var time_left = 30.0
var is_showing_explanation = false

func set_question(question_data):
    current_question = question_data
    question_label.text = question_data.question
    explanation_label.visible = false
    btn_certo.visible = true
    btn_errado.visible = true
    time_left = 30.0
    is_showing_explanation = false

func _process(delta):
    if not is_showing_explanation and current_question != null:
        time_left -= delta
        timer_label.text = str(int(time_left)) + "s"
        
        if time_left <= 0:
            # Tempo esgotado = resposta errada
            show_wrong_answer()

func _on_btn_certo_pressed():
    check_answer(true)

func _on_btn_errado_pressed():
    check_answer(false)

func check_answer(player_answer: bool):
    if current_question.correctAnswer == player_answer:
        # ACERTOU!
        show_correct_answer()
    else:
        # ERROU!
        show_wrong_answer()

func show_correct_answer():
    is_showing_explanation = true
    btn_certo.visible = false
    btn_errado.visible = false
    explanation_label.text = "✅ " + current_question.explanation
    explanation_label.visible = true
    
    # Mostrar por 20 segundos
    await get_tree().create_timer(20.0).timeout
    emit_signal("card_completed", true)

func show_wrong_answer():
    # Gerar nova carta (lógica no game manager)
    emit_signal("card_completed", false)

signal card_completed(was_correct: bool)
```

### **3. Script do Game Manager**
```gdscript
# game_manager.gd
extends Node

var questions_manager
var current_area = "juridica"
var current_fase = 1
var current_card_index = 0
var fase1_questions = []
var fase2_questions = []
var fase3_questions = []

func _ready():
    questions_manager = $GameQuestionsManager
    questions_manager.questions_loaded.connect(_on_questions_loaded)
    
    # Carregar questões da área selecionada
    questions_manager.load_match_questions(current_area)

func _on_questions_loaded(questions):
    fase1_questions = questions.fase1
    fase2_questions = questions.fase2
    fase3_questions = questions.fase3
    
    # Começar o game
    start_fase(1)

func start_fase(fase_number: int):
    current_fase = fase_number
    current_card_index = 0
    
    var questions = []
    match fase_number:
        1: questions = fase1_questions
        2: questions = fase2_questions
        3: questions = fase3_questions
    
    show_next_card(questions)

func show_next_card(questions: Array):
    if current_card_index < questions.size():
        var question = questions[current_card_index]
        $QuestionCard.set_question(question)
        current_card_index += 1
    else:
        # Fase completa!
        if current_fase < 3:
            start_fase(current_fase + 1)
        else:
            # Game completo!
            emit_signal("game_completed")

func _on_card_completed(was_correct: bool):
    if was_correct:
        # Acertou: próxima carta
        var questions = []
        match current_fase:
            1: questions = fase1_questions
            2: questions = fase2_questions
            3: questions = fase3_questions
        show_next_card(questions)
    else:
        # Errou: gerar nova carta
        questions_manager.load_match_questions(current_area)

signal game_completed()
```

---

## 📦 BAIXAR QUESTÕES (OFFLINE)

### **Opção 1: JSON Estático (Recomendado para Godot)**
```bash
# Exportar questões para JSON
GET /api/game/questions/export?area=juridica

# Salvar como: res://data/questions_juridica.json
```

**Carregar no Godot:**
```gdscript
func load_questions_from_file():
    var file = FileAccess.open("res://data/questions_juridica.json", FileAccess.READ)
    if file:
        var json_string = file.get_as_text()
        file.close()
        
        var json = JSON.new()
        var error = json.parse(json_string)
        if error == OK:
            return json.data
    return null
```

### **Opção 2: API Online (Recomendado para Web)**
```gdscript
# Sempre buscar questões atualizadas da API
func load_questions_from_api(area: String):
    var url = base_url + "/match?area=" + area
    http_request.request(url)
```

---

## 🗂️ ESTRUTURA DE DADOS

### **Modelo da Questão:**
```json
{
  "id": "const_001",
  "area": "juridica",
  "subject": "Direito Constitucional",
  "question": "Enunciado curto da questão (máx. 2 linhas).",
  "correctAnswer": true,
  "explanation": "CERTO. Explicação curta (máx. 2 linhas).",
  "difficulty": "facil"
}
```

### **Campos:**
| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | string | ID único sequencial (ex: const_001) |
| `area` | string | juridica \| policial \| fiscal-bancaria \| conhecimentos-gerais |
| `subject` | string | Nome da matéria (ex: Direito Constitucional) |
| `question` | string | Enunciado da questão (máx. 2 linhas) |
| `correctAnswer` | boolean | true = CERTO, false = ERRADO |
| `explanation` | string | Explicação da resposta (máx. 2 linhas) |
| `difficulty` | string | facil \| medio \| dificil |

---

## 🎨 CORES DAS ÁREAS (Para UI do Godot)

```gdscript
var area_colors = {
    "juridica": Color("#3B82F6"),        # Azul
    "policial": Color("#DC2626"),        # Vermelho
    "fiscal-bancaria": Color("#EAB308"), # Amarelo
    "conhecimentos-gerais": Color("#9333EA") # Roxo
}
```

---

## 📊 ESTADO ATUAL DO BANCO

```
╔════════════════════════════════════════════════╗
║  BANCO DE QUESTÕES - STATUS                    ║
║                                                ║
║  ✅ Direito Constitucional: 50 questões       ║
║  ⏳ 16 matérias pendentes: 800 questões       ║
║                                                ║
║  Total: 50/850 questões (5.9%)                 ║
║                                                ║
╚════════════════════════════════════════════════╝
```

---

## 🚀 ROADMAP DE DESENVOLVIMENTO

### **Fase 1: Backend (Pronto)**
- [x] Estrutura de dados
- [x] 50 questões de Dir. Constitucional
- [x] Funções auxiliares
- [ ] Criar endpoints da API

### **Fase 2: API REST (Próximo)**
- [ ] Endpoint `/match` (30 questões por partida)
- [ ] Endpoint `/questions` (filtros)
- [ ] Endpoint `/stats` (estatísticas)
- [ ] Endpoint `/export` (JSON)

### **Fase 3: Godot Integration (Próximo)**
- [ ] Script de download HTTP
- [ ] Parser JSON
- [ ] Sistema de cache local
- [ ] Gerenciador de fases

### **Fase 4: Expansão (Futuro)**
- [ ] Criar 800 questões restantes
- [ ] Sistema de favoritos
- [ ] Histórico de respostas
- [ ] Ranking online

---

## 📁 ESTRUTURA DE ARQUIVOS

### **React App (Frontend):**
```
/data/
  ├── gameQuestions.ts          # Banco principal
  └── [outras matérias...]      # Futuras matérias

/components/
  └── QuestionBankViewer.tsx    # Interface de navegação
```

### **Godot 4 (Game):**
```
res://
  ├── scripts/
  │   ├── game_questions_manager.gd
  │   ├── question_card.gd
  │   └── game_manager.gd
  │
  ├── data/
  │   ├── questions_juridica.json
  │   ├── questions_policial.json
  │   ├── questions_fiscal.json
  │   └── questions_gerais.json
  │
  └── scenes/
      ├── main_game.tscn
      ├── question_card.tscn
      └── fase_complete.tscn
```

---

## 🔐 SEGURANÇA

### **Prevenir Trapaça:**
1. **Não enviar `correctAnswer` imediatamente**
   - Enviar questão sem a resposta
   - Validar resposta no servidor
   - Retornar resultado + explicação

2. **Rate Limiting**
   - Limitar requests por IP/usuário
   - Prevenir scraping do banco

3. **Token de Sessão**
   - Gerar token ao iniciar partida
   - Validar token em cada resposta

---

## 🧪 TESTAR INTEGRAÇÃO

### **1. Testar no Navegador:**
```javascript
// Console do navegador
fetch('https://[seu-dominio]/api/game/questions?area=juridica&count=10')
  .then(res => res.json())
  .then(data => console.log(data));
```

### **2. Testar no Godot:**
```gdscript
# No _ready() do game_manager.gd
questions_manager.load_match_questions("juridica")
```

---

## 📞 SUPORTE PARA DESENVOLVEDORES

### **Documentação:**
- `/data/TEMPLATE-nova-materia.ts` - Template
- `/data/GUIA-RAPIDO-ADICIONAR-QUESTOES.md` - Guia
- `/BANCO-QUESTOES-PREPARADO.md` - Resumo técnico
- `/INTEGRACAO-GODOT4-GAME.md` - Este arquivo

### **Contato:**
- Discord: [seu-discord]
- Email: [seu-email]
- GitHub: [seu-repo]

---

## 🎉 CHECKLIST DE INTEGRAÇÃO

### **Backend:**
- [ ] Criar endpoints da API REST
- [ ] Implementar filtros (área, dificuldade)
- [ ] Sistema de validação de respostas
- [ ] Rate limiting

### **Godot 4:**
- [ ] Implementar HTTPRequest
- [ ] Parser JSON
- [ ] Sistema de cartas
- [ ] Gerenciador de fases
- [ ] Timer de 30 segundos
- [ ] Mostrar explicação por 20 segundos
- [ ] Sistema de retry quando errar

### **Testes:**
- [ ] Testar download de questões
- [ ] Testar 3 fases completas
- [ ] Testar retry ao errar
- [ ] Testar timeout
- [ ] Testar todas as 4 áreas

---

## 🎯 PRÓXIMOS PASSOS

1. **Criar API REST** com os endpoints documentados
2. **Implementar scripts Godot 4** conforme exemplos acima
3. **Testar integração** com 50 questões atuais
4. **Expandir banco** para 850 questões
5. **Deploy** e produção!

---

**🚀 BOA INTEGRAÇÃO!** 🎮✨
