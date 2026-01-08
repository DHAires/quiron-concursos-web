# 🎮 EXEMPLOS DE CÓDIGO GODOT 4 - QUIRON CONCURSOS

## 📋 ÍNDICE
1. [Setup JavaScript Bridge](#setup-javascript-bridge)
2. [Receber Questões do React](#receber-questões-do-react)
3. [Enviar Eventos para React](#enviar-eventos-para-react)
4. [Sistema de Cards](#sistema-de-cards)
5. [Feedback Visual](#feedback-visual)
6. [Sistema de Fases](#sistema-de-fases)
7. [Timer e Pontuação](#timer-e-pontuação)

---

## 🔌 SETUP JAVASCRIPT BRIDGE

### **Script Principal: Main.gd**

```gdscript
extends Node3D

# Variáveis do jogo
var game_data = {}
var current_questions = []
var current_phase = 1
var current_question_index = 0
var score = 0
var correct_answers = 0
var wrong_answers = 0
var game_start_time = 0

# Referências
@onready var arena = $Arena
@onready var card_container = $CardContainer
@onready var ui = $UI

func _ready():
    print("🎮 [GODOT] Quiron Concursos - Game Épico iniciando...")
    
    # Configurar comunicação JavaScript
    if OS.has_feature("web"):
        setup_javascript_bridge()
    else:
        # Modo de teste (editor)
        print("⚠️ [GODOT] Rodando no editor - simulando dados")
        simulate_game_data()

func setup_javascript_bridge():
    print("🔌 [GODOT] Configurando JavaScript Bridge...")
    
    # Registrar função para receber dados do React
    var js_code = """
    window.godot = {
        receive_game_data: function(jsonString) {
            console.log('📨 [JS→GODOT] Recebendo dados:', jsonString);
            // Passar para Godot
            // Nota: Esta função será chamada do C#/GDScript
        }
    };
    
    // Listener para mensagens do React
    window.addEventListener('message', function(event) {
        if (event.data.type === 'INIT_GAME') {
            console.log('🎯 [REACT→GODOT] Iniciando jogo:', event.data);
            window.godot.receive_game_data(JSON.stringify(event.data));
        }
    });
    
    // Notificar React que Godot está pronto
    console.log('✅ [GODOT→REACT] Godot pronto!');
    window.parent.postMessage({
        type: 'godot-event',
        event: 'ready',
        data: {}
    }, '*');
    """
    
    JavaScriptBridge.eval(js_code)
    print("✅ [GODOT] JavaScript Bridge configurado!")

# Função chamada pelo JavaScript quando recebe dados
func receive_game_data(json_string: String):
    print("📦 [GODOT] Dados recebidos do React:", json_string)
    
    var json = JSON.new()
    var parse_result = json.parse(json_string)
    
    if parse_result == OK:
        game_data = json.data
        current_questions = game_data.questions
        
        print("✅ [GODOT] Jogo inicializado:")
        print("   Área: ", game_data.area)
        print("   Questões: ", current_questions.size())
        print("   Energia: ", game_data.userEnergy)
        
        # Iniciar jogo
        start_game()
    else:
        print("❌ [GODOT] Erro ao parsear JSON:", json.get_error_message())
        send_error("Erro ao carregar questões")

func send_message_to_react(event_type: String, data: Dictionary):
    if not OS.has_feature("web"):
        print("⚠️ [GODOT] Não está rodando na web, mensagem não enviada:", event_type)
        return
    
    var message = {
        "type": "godot-event",
        "event": event_type,
        "data": data
    }
    
    var js_code = "window.parent.postMessage(" + JSON.stringify(message) + ", '*');"
    JavaScriptBridge.eval(js_code)
    
    print("📤 [GODOT→REACT] Evento enviado:", event_type, data)
```

---

## 📥 RECEBER QUESTÕES DO REACT

### **GameController.gd**

```gdscript
extends Node

class_name GameController

signal questions_loaded
signal game_started
signal phase_changed(phase_number)

var questions: Array = []
var area: String = ""
var config: Dictionary = {}

func load_questions_from_react(data: Dictionary):
    questions = data.questions
    area = data.area
    config = data.config
    
    print("📚 [GAME] Questões carregadas:")
    print("   Total: ", questions.size())
    print("   Área: ", area)
    print("   Fases: ", config.phases)
    print("   Cards por fase: ", config.cardsPerPhase)
    
    # Validar questões
    if validate_questions():
        emit_signal("questions_loaded")
    else:
        push_error("❌ Questões inválidas!")

func validate_questions() -> bool:
    if questions.size() < 30:
        print("⚠️ Apenas ", questions.size(), " questões. Mínimo: 30")
        return false
    
    for i in range(questions.size()):
        var q = questions[i]
        
        if not q.has("id") or not q.has("text") or not q.has("correctAnswer"):
            print("❌ Questão ", i, " está incompleta:", q)
            return false
    
    print("✅ Todas as questões válidas!")
    return true

func get_questions_for_phase(phase: int) -> Array:
    var start_index = (phase - 1) * config.cardsPerPhase
    var end_index = start_index + config.cardsPerPhase
    
    return questions.slice(start_index, end_index)
```

---

## 📤 ENVIAR EVENTOS PARA REACT

### **EventSender.gd**

```gdscript
extends Node

class_name EventSender

# Enviar evento: Jogo pronto
func send_ready():
    var data = {}
    _send_event("ready", data)

# Enviar evento: Questão respondida
func send_question_answered(question_id: String, user_answer: bool, correct: bool, time_spent: float):
    var data = {
        "questionId": question_id,
        "userAnswer": user_answer,
        "correct": correct,
        "timeSpent": time_spent
    }
    _send_event("questionAnswered", data)

# Enviar evento: Fase completada
func send_phase_complete(phase: int, score: int, correct: int, wrong: int, time_spent: float):
    var data = {
        "phase": phase,
        "score": score,
        "correctAnswers": correct,
        "wrongAnswers": wrong,
        "timeSpent": time_spent
    }
    _send_event("phaseComplete", data)

# Enviar evento: Jogo completo
func send_game_complete(total_score: int, correct: int, wrong: int, total_time: float, max_combo: int):
    var data = {
        "score": total_score,
        "correctAnswers": correct,
        "wrongAnswers": wrong,
        "time": total_time,
        "maxCombo": max_combo,
        "accuracy": float(correct) / float(correct + wrong) * 100.0
    }
    _send_event("gameComplete", data)

# Enviar evento: Erro
func send_error(message: String):
    var data = {
        "message": message
    }
    _send_event("error", data)

# Função interna para enviar eventos
func _send_event(event_type: String, data: Dictionary):
    if not OS.has_feature("web"):
        print("⚠️ [EVENT] Não na web:", event_type)
        return
    
    var message = {
        "type": "godot-event",
        "event": event_type,
        "data": data
    }
    
    var js_code = "window.parent.postMessage(" + JSON.stringify(message) + ", '*');"
    JavaScriptBridge.eval(js_code)
    
    print("📤 [EVENT→REACT]", event_type, ":", data)
```

---

## 🎴 SISTEMA DE CARDS

### **QuestionCard.gd**

```gdscript
extends Node3D

class_name QuestionCard

signal answer_selected(answer: bool)

@export var card_material: StandardMaterial3D
@export var text_label: Label3D
@export var button_certo: Button3D
@export var button_errado: Button3D

var question_data: Dictionary = {}
var is_answered: bool = false

func _ready():
    # Conectar botões
    button_certo.pressed.connect(_on_certo_pressed)
    button_errado.pressed.connect(_on_errado_pressed)

func setup_question(data: Dictionary):
    question_data = data
    is_answered = false
    
    # Exibir texto da questão
    text_label.text = data.text
    
    # Resetar visual
    reset_visual()
    
    print("📝 [CARD] Questão carregada:", data.id)

func _on_certo_pressed():
    if is_answered:
        return
    
    _process_answer(true)

func _on_errado_pressed():
    if is_answered:
        return
    
    _process_answer(false)

func _process_answer(user_answer: bool):
    is_answered = true
    
    var is_correct = (user_answer == question_data.correctAnswer)
    
    # Feedback visual
    if is_correct:
        show_correct_feedback()
    else:
        show_wrong_feedback()
    
    # Emitir sinal
    emit_signal("answer_selected", user_answer)
    
    print("✅" if is_correct else "❌", "[CARD] Resposta:", 
          "CERTO" if user_answer else "ERRADO",
          "| Correto:", question_data.correctAnswer)

func show_correct_feedback():
    # Mudar cor para verde
    card_material.albedo_color = Color(0.2, 0.8, 0.2)
    
    # Partículas de sucesso
    $ParticlesSuccess.emitting = true
    
    # Som
    $AudioSuccess.play()
    
    # Animação
    var tween = create_tween()
    tween.tween_property(self, "scale", Vector3(1.2, 1.2, 1.2), 0.3)
    tween.tween_property(self, "scale", Vector3(1.0, 1.0, 1.0), 0.2)

func show_wrong_feedback():
    # Mudar cor para vermelho
    card_material.albedo_color = Color(0.9, 0.2, 0.2)
    
    # Shake
    var tween = create_tween()
    var original_pos = position
    for i in range(3):
        tween.tween_property(self, "position:x", original_pos.x + 0.1, 0.05)
        tween.tween_property(self, "position:x", original_pos.x - 0.1, 0.05)
    tween.tween_property(self, "position", original_pos, 0.05)
    
    # Som
    $AudioWrong.play()

func show_explanation():
    # Exibir explicação
    text_label.text = question_data.explanation
    
    # Mudar cor para azul
    card_material.albedo_color = Color(0.3, 0.5, 0.9)

func reset_visual():
    card_material.albedo_color = Color(0.8, 0.8, 0.8)
    scale = Vector3.ONE
```

---

## 🎨 FEEDBACK VISUAL

### **VisualFeedback.gd**

```gdscript
extends Node3D

class_name VisualFeedback

@onready var particles_success = $ParticlesSuccess
@onready var particles_combo = $ParticlesCombo
@onready var light_correct = $LightCorrect
@onready var light_wrong = $LightWrong

# Cores por área
var area_colors = {
    "juridica": Color(0.2, 0.4, 0.9),
    "policial": Color(0.9, 0.1, 0.1),
    "gerais": Color(0.6, 0.2, 0.8),
    "fiscal": Color(0.95, 0.75, 0.1)
}

var current_area: String = "juridica"
var current_combo: int = 0

func set_area(area: String):
    current_area = area
    setup_area_visuals()

func setup_area_visuals():
    # Configurar cores baseado na área
    var color = area_colors[current_area]
    
    # Partículas
    var material = particles_success.process_material as ParticleProcessMaterial
    material.color = color
    
    # Luzes
    light_correct.light_color = color

func show_correct_answer():
    # Luz verde pulsante
    light_correct.visible = true
    var tween = create_tween()
    tween.tween_property(light_correct, "light_energy", 5.0, 0.2)
    tween.tween_property(light_correct, "light_energy", 0.0, 0.5)
    tween.finished.connect(func(): light_correct.visible = false)
    
    # Partículas
    particles_success.emitting = true

func show_wrong_answer():
    # Luz vermelha
    light_wrong.visible = true
    var tween = create_tween()
    tween.tween_property(light_wrong, "light_energy", 3.0, 0.1)
    tween.tween_property(light_wrong, "light_energy", 0.0, 0.3)
    tween.finished.connect(func(): light_wrong.visible = false)
    
    # Camera shake
    get_viewport().get_camera_3d().apply_shake(0.3, 0.1)

func increment_combo():
    current_combo += 1
    
    if current_combo >= 3:
        show_combo_effect()

func reset_combo():
    current_combo = 0

func show_combo_effect():
    print("🔥 COMBO x", current_combo)
    
    # Partículas especiais
    particles_combo.emitting = true
    
    # Efeito visual intenso
    var color = area_colors[current_area]
    var tween = create_tween()
    
    # Flash de tela
    var flash = ColorRect.new()
    flash.color = Color(color.r, color.g, color.b, 0.3)
    flash.set_anchors_preset(Control.PRESET_FULL_RECT)
    get_tree().root.add_child(flash)
    
    tween.tween_property(flash, "modulate:a", 0.0, 0.5)
    tween.finished.connect(func(): flash.queue_free())
```

---

## 🎯 SISTEMA DE FASES

### **PhaseManager.gd**

```gdscript
extends Node

class_name PhaseManager

signal phase_started(phase_number: int)
signal phase_completed(phase_data: Dictionary)
signal all_phases_completed

enum Difficulty { FACIL, MEDIO, DIFICIL }

var current_phase: int = 0
var total_phases: int = 3
var questions_per_phase: int = 10

var phase_data: Array = []

func _ready():
    setup_phases()

func setup_phases():
    phase_data = [
        {
            "phase": 1,
            "difficulty": Difficulty.FACIL,
            "name": "Fase 1: Iniciante",
            "description": "Questões fáceis para aquecer",
            "questions": [],
            "score": 0,
            "correct": 0,
            "wrong": 0,
            "time": 0.0
        },
        {
            "phase": 2,
            "difficulty": Difficulty.MEDIO,
            "name": "Fase 2: Intermediário",
            "description": "Questões de dificuldade média",
            "questions": [],
            "score": 0,
            "correct": 0,
            "wrong": 0,
            "time": 0.0
        },
        {
            "phase": 3,
            "difficulty": Difficulty.DIFICIL,
            "name": "Fase 3: Expert",
            "description": "Questões difíceis - prove seu valor!",
            "questions": [],
            "score": 0,
            "correct": 0,
            "wrong": 0,
            "time": 0.0
        }
    ]

func start_phase(phase_number: int, questions: Array):
    current_phase = phase_number
    var phase = phase_data[phase_number - 1]
    
    phase.questions = questions
    phase.score = 0
    phase.correct = 0
    phase.wrong = 0
    phase.time = 0.0
    
    print("🎯 [PHASE] Iniciando fase ", phase_number, ":", phase.name)
    emit_signal("phase_started", phase_number)

func record_answer(correct: bool, score_gained: int, time_spent: float):
    var phase = phase_data[current_phase - 1]
    
    if correct:
        phase.correct += 1
    else:
        phase.wrong += 1
    
    phase.score += score_gained
    phase.time += time_spent

func complete_current_phase():
    var phase = phase_data[current_phase - 1]
    
    print("✅ [PHASE] Fase ", current_phase, " completada!")
    print("   Score: ", phase.score)
    print("   Acertos: ", phase.correct, "/", questions_per_phase)
    print("   Tempo: ", "%.1f" % phase.time, "s")
    
    emit_signal("phase_completed", phase)
    
    if current_phase >= total_phases:
        emit_signal("all_phases_completed")

func get_total_stats() -> Dictionary:
    var total_score = 0
    var total_correct = 0
    var total_wrong = 0
    var total_time = 0.0
    
    for phase in phase_data:
        total_score += phase.score
        total_correct += phase.correct
        total_wrong += phase.wrong
        total_time += phase.time
    
    return {
        "score": total_score,
        "correct": total_correct,
        "wrong": total_wrong,
        "time": total_time,
        "phases": phase_data
    }
```

---

## ⏱️ TIMER E PONTUAÇÃO

### **ScoreSystem.gd**

```gdscript
extends Node

class_name ScoreSystem

# Pontuação base por dificuldade
const BASE_SCORE = {
    "facil": 50,
    "medio": 100,
    "dificil": 150
}

# Multiplicadores
const TIME_BONUS_MAX = 50
const COMBO_MULTIPLIER = 1.2
const PERFECT_PHASE_BONUS = 200

var current_combo: int = 0
var max_combo: int = 0

func calculate_question_score(difficulty: String, time_spent: float, time_limit: float) -> int:
    var base = BASE_SCORE[difficulty]
    
    # Bônus de velocidade (quanto mais rápido, maior o bônus)
    var time_ratio = 1.0 - (time_spent / time_limit)
    var time_bonus = int(TIME_BONUS_MAX * max(0.0, time_ratio))
    
    # Bônus de combo
    var combo_bonus = 0
    if current_combo >= 3:
        combo_bonus = int(base * (COMBO_MULTIPLIER - 1.0))
    
    var total = base + time_bonus + combo_bonus
    
    print("💰 [SCORE] +", total, " (base:", base, " speed:", time_bonus, " combo:", combo_bonus, ")")
    
    return total

func record_correct_answer():
    current_combo += 1
    max_combo = max(max_combo, current_combo)
    
    if current_combo >= 3:
        print("🔥 COMBO x", current_combo, "!")

func record_wrong_answer():
    if current_combo >= 3:
        print("💔 Combo perdido! Era:", current_combo)
    current_combo = 0

func calculate_phase_bonus(correct: int, total: int) -> int:
    if correct == total:
        print("🌟 FASE PERFEITA! Bônus:", PERFECT_PHASE_BONUS)
        return PERFECT_PHASE_BONUS
    return 0

func reset():
    current_combo = 0
    max_combo = 0
```

### **QuestionTimer.gd**

```gdscript
extends Node

class_name QuestionTimer

signal time_updated(seconds_left: int)
signal time_expired

@export var time_limit: float = 30.0

var current_time: float = 0.0
var is_running: bool = false
var start_time: float = 0.0

func _process(delta):
    if not is_running:
        return
    
    current_time += delta
    var elapsed = current_time
    var remaining = max(0.0, time_limit - elapsed)
    
    emit_signal("time_updated", int(ceil(remaining)))
    
    if remaining <= 0.0:
        stop()
        emit_signal("time_expired")

func start():
    current_time = 0.0
    is_running = true
    start_time = Time.get_ticks_msec() / 1000.0
    print("⏱️ [TIMER] Iniciado:", time_limit, "segundos")

func stop() -> float:
    is_running = false
    var elapsed = current_time
    print("⏹️ [TIMER] Parado:", "%.2f" % elapsed, "segundos")
    return elapsed

func get_elapsed_time() -> float:
    return current_time

func get_remaining_time() -> float:
    return max(0.0, time_limit - current_time)

func is_expired() -> bool:
    return current_time >= time_limit
```

---

## 🎬 FLUXO COMPLETO DO JOGO

### **GameFlow.gd (Script Principal)**

```gdscript
extends Node3D

# Componentes
@onready var event_sender = $EventSender
@onready var phase_manager = $PhaseManager
@onready var score_system = $ScoreSystem
@onready var visual_feedback = $VisualFeedback
@onready var card_spawner = $CardSpawner
@onready var timer = $QuestionTimer

# Estado do jogo
var game_data: Dictionary = {}
var current_question_index: int = 0
var current_questions: Array = []

func _ready():
    # Conectar sinais
    phase_manager.phase_started.connect(_on_phase_started)
    phase_manager.phase_completed.connect(_on_phase_completed)
    phase_manager.all_phases_completed.connect(_on_game_completed)
    
    timer.time_expired.connect(_on_time_expired)
    
    # Setup JavaScript (se na web)
    if OS.has_feature("web"):
        setup_javascript()
    
    # Notificar que está pronto
    event_sender.send_ready()

func start_game():
    print("🎮 [GAME] Iniciando jogo...")
    
    # Configurar área visual
    visual_feedback.set_area(game_data.area)
    
    # Iniciar primeira fase
    start_phase(1)

func start_phase(phase_number: int):
    var questions = get_questions_for_phase(phase_number)
    phase_manager.start_phase(phase_number, questions)
    current_questions = questions
    current_question_index = 0
    
    # Spawnar primeira questão
    spawn_next_question()

func spawn_next_question():
    if current_question_index >= current_questions.size():
        # Fase completa
        phase_manager.complete_current_phase()
        return
    
    var question = current_questions[current_question_index]
    card_spawner.spawn_card(question)
    
    # Iniciar timer
    timer.start()

func _on_answer_selected(user_answer: bool):
    var question = current_questions[current_question_index]
    var time_spent = timer.stop()
    var is_correct = (user_answer == question.correctAnswer)
    
    # Feedback visual
    if is_correct:
        visual_feedback.show_correct_answer()
        score_system.record_correct_answer()
    else:
        visual_feedback.show_wrong_answer()
        score_system.record_wrong_answer()
    
    # Calcular pontuação
    var score = 0
    if is_correct:
        score = score_system.calculate_question_score(
            question.difficulty,
            time_spent,
            timer.time_limit
        )
        phase_manager.record_answer(true, score, time_spent)
    else:
        phase_manager.record_answer(false, 0, time_spent)
    
    # Enviar evento para React
    event_sender.send_question_answered(
        question.id,
        user_answer,
        is_correct,
        time_spent
    )
    
    # Mostrar explicação por 20 segundos
    await show_explanation(question.explanation)
    
    # Próxima questão
    current_question_index += 1
    spawn_next_question()

func show_explanation(text: String):
    print("📖 [EXPLANATION]", text)
    # Exibir UI de explicação
    # Aguardar 20 segundos
    await get_tree().create_timer(20.0).timeout

func _on_phase_completed(phase_data: Dictionary):
    # Enviar evento para React
    event_sender.send_phase_complete(
        phase_data.phase,
        phase_data.score,
        phase_data.correct,
        phase_data.wrong,
        phase_data.time
    )
    
    # Próxima fase ou fim
    if phase_manager.current_phase < phase_manager.total_phases:
        await get_tree().create_timer(3.0).timeout
        start_phase(phase_manager.current_phase + 1)

func _on_game_completed():
    var stats = phase_manager.get_total_stats()
    
    # Enviar resultado final para React
    event_sender.send_game_complete(
        stats.score,
        stats.correct,
        stats.wrong,
        stats.time,
        score_system.max_combo
    )
    
    print("🏆 [GAME] Jogo completo! Score final:", stats.score)

func _on_time_expired():
    print("⏰ [GAME] Tempo esgotado!")
    # Tratar como resposta errada
    _on_answer_selected(false)
```

---

## ✅ CHECKLIST DE IMPLEMENTAÇÃO

### **Fase 1: Setup Básico**
- [ ] Criar projeto Godot 4
- [ ] Configurar exportação Web (HTML5)
- [ ] Implementar JavaScript Bridge
- [ ] Testar comunicação postMessage

### **Fase 2: Gameplay Core**
- [ ] Sistema de cards 3D
- [ ] Botões CERTO/ERRADO
- [ ] Timer de 30 segundos
- [ ] Sistema de pontuação

### **Fase 3: Visual**
- [ ] Arena 3D com cores por área
- [ ] Feedback de acerto (verde)
- [ ] Feedback de erro (vermelho)
- [ ] Partículas e VFX

### **Fase 4: Fases**
- [ ] Sistema de 3 fases
- [ ] Transição entre fases
- [ ] Tela de explicação (20s)

### **Fase 5: Integração**
- [ ] Receber questões do React
- [ ] Enviar eventos para React
- [ ] Testar no navegador
- [ ] Deploy em /public/godot-game/

---

**Boa sorte com a implementação! 🚀**
