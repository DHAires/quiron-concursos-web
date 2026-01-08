# ========================================
# QUESTION CARD - Quiron Concursos
# ========================================
# Carta de questão para o Game Épico "A Corrida dos Heróis"
# Padrão: Segue estrutura do desenvolvedor

extends Control

# Nodes UI
@onready var _question_label: Label = $MarginContainer/VBoxContainer/QuestionLabel
@onready var _explanation_label: Label = $MarginContainer/VBoxContainer/ExplanationLabel
@onready var _timer_label: Label = $MarginContainer/VBoxContainer/TimerLabel
@onready var _difficulty_badge: Label = $MarginContainer/VBoxContainer/DifficultyBadge
@onready var _btn_certo: Button = $MarginContainer/VBoxContainer/HBoxButtons/BtnCerto
@onready var _btn_errado: Button = $MarginContainer/VBoxContainer/HBoxButtons/BtnErrado
@onready var _answer_feedback: Control = $MarginContainer/VBoxContainer/AnswerFeedback
@onready var _animation_player: AnimationPlayer = $AnimationPlayer

# Signals
signal card_completed(was_correct: bool)
signal time_expired()

# Estado da carta
var current_question: Dictionary = {}
var time_left: float = 30.0
var is_showing_explanation: bool = false
var is_active: bool = false

# Constantes
const QUESTION_TIME: float = 30.0
const EXPLANATION_TIME: float = 20.0

# Cores das áreas
const AREA_COLORS = {
	"juridica": Color("#3B82F6"),
	"policial": Color("#DC2626"),
	"fiscal-bancaria": Color("#EAB308"),
	"conhecimentos-gerais": Color("#9333EA")
}

# Cores de dificuldade
const DIFFICULTY_COLORS = {
	"facil": Color("#22C55E"),
	"medio": Color("#EAB308"),
	"dificil": Color("#DC2626")
}

func _ready() -> void:
	_btn_certo.pressed.connect(_on_btn_certo_pressed)
	_btn_errado.pressed.connect(_on_btn_errado_pressed)
	_answer_feedback.visible = false
	_explanation_label.visible = false

func _process(delta: float) -> void:
	if not is_active or is_showing_explanation:
		return
	
	# Atualizar timer
	time_left -= delta
	_update_timer_display()
	
	# Tempo esgotado = resposta errada
	if time_left <= 0:
		time_left = 0
		_on_time_expired()

# ========================================
# CONFIGURAR NOVA QUESTÃO
# ========================================
func set_question(question_data: Dictionary) -> void:
	if not question_data.has("question") or not question_data.has("correctAnswer"):
		push_error("Dados da questão inválidos: %s" % question_data)
		return
	
	current_question = question_data
	is_active = true
	is_showing_explanation = false
	time_left = QUESTION_TIME
	
	# Configurar UI
	_question_label.text = question_data["question"]
	_explanation_label.visible = false
	_answer_feedback.visible = false
	
	# Badge de dificuldade
	var difficulty = question_data.get("difficulty", "medio")
	_difficulty_badge.text = difficulty.to_upper()
	_difficulty_badge.modulate = DIFFICULTY_COLORS.get(difficulty, Color.WHITE)
	
	# Cor da área
	var area = question_data.get("area", "juridica")
	modulate = AREA_COLORS.get(area, Color.WHITE)
	
	# Habilitar botões
	_btn_certo.visible = true
	_btn_errado.visible = true
	_btn_certo.disabled = false
	_btn_errado.disabled = false
	
	# Animação de entrada
	if _animation_player:
		_animation_player.play("card_appear")

# ========================================
# BOTÕES DE RESPOSTA
# ========================================
func _on_btn_certo_pressed() -> void:
	_check_answer(true)

func _on_btn_errado_pressed() -> void:
	_check_answer(false)

func _check_answer(player_answer: bool) -> void:
	if not is_active or is_showing_explanation:
		return
	
	is_active = false
	_btn_certo.disabled = true
	_btn_errado.disabled = true
	
	var correct_answer = current_question["correctAnswer"]
	
	if player_answer == correct_answer:
		# ✅ ACERTOU!
		_show_correct_answer()
	else:
		# ❌ ERROU!
		_show_wrong_answer()

# ========================================
# FEEDBACK DE RESPOSTA CORRETA
# ========================================
func _show_correct_answer() -> void:
	is_showing_explanation = true
	
	# Esconder botões
	_btn_certo.visible = false
	_btn_errado.visible = false
	
	# Mostrar explicação
	_explanation_label.text = "✅ " + current_question["explanation"]
	_explanation_label.visible = true
	_answer_feedback.visible = true
	_answer_feedback.modulate = Color("#22C55E") # Verde
	
	# Animação de sucesso
	if _animation_player:
		_animation_player.play("answer_correct")
	
	# Aguardar 20 segundos mostrando explicação
	await get_tree().create_timer(EXPLANATION_TIME).timeout
	
	# Próxima carta
	card_completed.emit(true)

# ========================================
# FEEDBACK DE RESPOSTA ERRADA
# ========================================
func _show_wrong_answer() -> void:
	# Esconder botões
	_btn_certo.visible = false
	_btn_errado.visible = false
	
	# Mostrar feedback de erro
	_explanation_label.text = "❌ Resposta errada! Gerando nova carta..."
	_explanation_label.visible = true
	_answer_feedback.visible = true
	_answer_feedback.modulate = Color("#DC2626") # Vermelho
	
	# Animação de erro
	if _animation_player:
		_animation_player.play("answer_wrong")
	
	# Aguardar 2 segundos antes de gerar nova carta
	await get_tree().create_timer(2.0).timeout
	
	# Gerar nova carta (mesma dificuldade)
	card_completed.emit(false)

# ========================================
# TEMPO ESGOTADO
# ========================================
func _on_time_expired() -> void:
	if is_showing_explanation:
		return
	
	is_active = false
	_btn_certo.disabled = true
	_btn_errado.disabled = true
	
	# Mostrar feedback de timeout
	_explanation_label.text = "⏱️ Tempo esgotado! Gerando nova carta..."
	_explanation_label.visible = true
	_answer_feedback.visible = true
	_answer_feedback.modulate = Color("#F59E0B") # Laranja
	
	# Animação de timeout
	if _animation_player:
		_animation_player.play("time_expired")
	
	time_expired.emit()
	
	# Aguardar 2 segundos antes de gerar nova carta
	await get_tree().create_timer(2.0).timeout
	
	# Gerar nova carta (mesmo que erro)
	card_completed.emit(false)

# ========================================
# ATUALIZAR DISPLAY DO TIMER
# ========================================
func _update_timer_display() -> void:
	var seconds = int(time_left)
	_timer_label.text = "%d s" % seconds
	
	# Cor do timer baseado no tempo restante
	if time_left > 20:
		_timer_label.modulate = Color("#22C55E") # Verde
	elif time_left > 10:
		_timer_label.modulate = Color("#EAB308") # Amarelo
	else:
		_timer_label.modulate = Color("#DC2626") # Vermelho
		# Animar quando tempo está acabando
		if int(time_left * 2) % 2 == 0:
			_timer_label.scale = Vector2(1.2, 1.2)
		else:
			_timer_label.scale = Vector2(1.0, 1.0)

# ========================================
# RESET DA CARTA
# ========================================
func reset_card() -> void:
	current_question = {}
	is_active = false
	is_showing_explanation = false
	time_left = QUESTION_TIME
	
	_question_label.text = ""
	_explanation_label.text = ""
	_explanation_label.visible = false
	_answer_feedback.visible = false
	_btn_certo.visible = true
	_btn_errado.visible = true
	_btn_certo.disabled = false
	_btn_errado.disabled = false
	_timer_label.text = "30 s"
	_timer_label.modulate = Color.WHITE
	_timer_label.scale = Vector2(1.0, 1.0)

# ========================================
# PAUSAR/DESPAUSAR (útil para menus)
# ========================================
func pause_card() -> void:
	is_active = false

func resume_card() -> void:
	if not is_showing_explanation:
		is_active = true
