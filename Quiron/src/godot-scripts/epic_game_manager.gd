# ========================================
# EPIC GAME MANAGER - Quiron Concursos
# ========================================
# Gerenciador do Game Épico "A Corrida dos Heróis"
# Padrão: Segue estrutura do desenvolvedor

extends Node

# Nodes
@onready var _questions_manager: Node = $GameQuestionsManager
@onready var _question_card: Control = $QuestionCard
@onready var _modal_loading: Control = $ModalLoading
@onready var _modal_error: Control = $ModalError
@onready var _fase_indicator: Label = $UI/FaseIndicator
@onready var _progress_bar: ProgressBar = $UI/ProgressBar

# Signals
signal game_started()
signal fase_completed(fase_number: int)
signal game_completed(stats: Dictionary)
signal game_failed()

# Estado do game
var current_area: String = ""
var current_fase: int = 0
var current_card_index: int = 0
var cards_completed_in_fase: int = 0
var total_correct_answers: int = 0
var total_wrong_attempts: int = 0
var game_start_time: float = 0.0

# Dados das fases
var fase1_questions: Array = [] # 10 questões fáceis
var fase2_questions: Array = [] # 10 questões médias
var fase3_questions: Array = [] # 10 questões difíceis

# Constantes
const CARDS_PER_FASE: int = 10
const TOTAL_FASES: int = 3

func _ready() -> void:
	# Conectar signals
	_questions_manager.questions_loaded.connect(_on_questions_loaded)
	_questions_manager.questions_error.connect(_on_questions_error)
	_question_card.card_completed.connect(_on_card_completed)
	_question_card.time_expired.connect(_on_time_expired)
	
	# Esconder modais
	_modal_loading.visible = false
	_modal_error.visible = false

# ========================================
# INICIAR GAME
# ========================================
func start_game(area: String) -> void:
	if area not in ["juridica", "policial", "fiscal-bancaria", "conhecimentos-gerais"]:
		push_error("Área inválida: %s" % area)
		return
	
	current_area = area
	current_fase = 0
	current_card_index = 0
	cards_completed_in_fase = 0
	total_correct_answers = 0
	total_wrong_attempts = 0
	game_start_time = Time.get_ticks_msec() / 1000.0
	
	# Resetar arrays
	fase1_questions = []
	fase2_questions = []
	fase3_questions = []
	
	# Mostrar loading
	_modal_loading.visible = true
	
	# Carregar questões
	print("🎮 Iniciando game - Área: %s" % area)
	_questions_manager.load_match_questions(area)

# ========================================
# CALLBACK: Questões carregadas
# ========================================
func _on_questions_loaded(questions_data: Dictionary) -> void:
	_modal_loading.visible = false
	
	# Validar estrutura
	if not questions_data.has("fase1") or not questions_data.has("fase2") or not questions_data.has("fase3"):
		_show_error("Estrutura de questões inválida")
		return
	
	fase1_questions = questions_data["fase1"]
	fase2_questions = questions_data["fase2"]
	fase3_questions = questions_data["fase3"]
	
	# Validar quantidade
	if fase1_questions.size() < CARDS_PER_FASE:
		_show_error("Questões insuficientes para Fase 1 (precisa de %d)" % CARDS_PER_FASE)
		return
	if fase2_questions.size() < CARDS_PER_FASE:
		_show_error("Questões insuficientes para Fase 2 (precisa de %d)" % CARDS_PER_FASE)
		return
	if fase3_questions.size() < CARDS_PER_FASE:
		_show_error("Questões insuficientes para Fase 3 (precisa de %d)" % CARDS_PER_FASE)
		return
	
	print("✅ Questões carregadas:")
	print("   Fase 1 (Fácil): %d questões" % fase1_questions.size())
	print("   Fase 2 (Médio): %d questões" % fase2_questions.size())
	print("   Fase 3 (Difícil): %d questões" % fase3_questions.size())
	
	# Começar o game
	game_started.emit()
	_start_fase(1)

# ========================================
# CALLBACK: Erro ao carregar questões
# ========================================
func _on_questions_error(error_message: String) -> void:
	_modal_loading.visible = false
	_show_error(error_message)

# ========================================
# INICIAR FASE
# ========================================
func _start_fase(fase_number: int) -> void:
	if fase_number < 1 or fase_number > TOTAL_FASES:
		push_error("Número de fase inválido: %d" % fase_number)
		return
	
	current_fase = fase_number
	current_card_index = 0
	cards_completed_in_fase = 0
	
	# Atualizar UI
	_update_fase_indicator()
	_update_progress_bar()
	
	print("🎯 Iniciando Fase %d" % fase_number)
	
	# Aguardar 1 segundo (transição visual) e mostrar primeira carta
	await get_tree().create_timer(1.0).timeout
	_show_next_card()

# ========================================
# MOSTRAR PRÓXIMA CARTA
# ========================================
func _show_next_card() -> void:
	var questions: Array = _get_current_fase_questions()
	
	if current_card_index >= questions.size():
		push_error("Índice de carta fora do range: %d/%d" % [current_card_index, questions.size()])
		return
	
	var question = questions[current_card_index]
	_question_card.set_question(question)
	
	print("📝 Carta %d/%d - Fase %d" % [cards_completed_in_fase + 1, CARDS_PER_FASE, current_fase])

# ========================================
# CALLBACK: Carta completada
# ========================================
func _on_card_completed(was_correct: bool) -> void:
	if was_correct:
		# ✅ ACERTOU!
		total_correct_answers += 1
		cards_completed_in_fase += 1
		current_card_index += 1
		
		print("✅ Resposta correta! (%d/%d cartas)" % [cards_completed_in_fase, CARDS_PER_FASE])
		
		# Atualizar progresso
		_update_progress_bar()
		
		# Verificar se completou a fase
		if cards_completed_in_fase >= CARDS_PER_FASE:
			_on_fase_completed()
		else:
			# Próxima carta
			_show_next_card()
	
	else:
		# ❌ ERROU! Gerar nova carta (mesma dificuldade)
		total_wrong_attempts += 1
		print("❌ Resposta errada! Gerando nova carta...")
		
		# Gerar nova carta aleatória da mesma fase
		_generate_new_card_for_retry()

# ========================================
# CALLBACK: Tempo expirado
# ========================================
func _on_time_expired() -> void:
	# Contar como erro
	total_wrong_attempts += 1
	print("⏱️ Tempo expirado! Gerando nova carta...")

# ========================================
# GERAR NOVA CARTA (quando erra)
# ========================================
func _generate_new_card_for_retry() -> void:
	var questions: Array = _get_current_fase_questions()
	
	# Embaralhar e pegar uma carta aleatória (que não seja a atual)
	var available_questions = questions.duplicate()
	available_questions.shuffle()
	
	# Remover a questão atual para não repetir imediatamente
	var current_question = questions[current_card_index]
	for i in range(available_questions.size()):
		if available_questions[i]["id"] == current_question["id"]:
			available_questions.remove_at(i)
			break
	
	# Mostrar nova carta
	if available_questions.size() > 0:
		var new_question = available_questions[0]
		_question_card.set_question(new_question)
	else:
		# Se não tem mais questões diferentes, repetir a mesma (improvável)
		_question_card.set_question(current_question)

# ========================================
# FASE COMPLETADA
# ========================================
func _on_fase_completed() -> void:
	print("🎉 Fase %d completada!" % current_fase)
	fase_completed.emit(current_fase)
	
	# Verificar se completou o game
	if current_fase >= TOTAL_FASES:
		_on_game_completed()
	else:
		# Próxima fase
		_start_fase(current_fase + 1)

# ========================================
# GAME COMPLETADO
# ========================================
func _on_game_completed() -> void:
	var game_duration = (Time.get_ticks_msec() / 1000.0) - game_start_time
	
	var stats = {
		"area": current_area,
		"total_cards": CARDS_PER_FASE * TOTAL_FASES,
		"correct_answers": total_correct_answers,
		"wrong_attempts": total_wrong_attempts,
		"duration_seconds": game_duration,
		"accuracy": float(total_correct_answers) / float(total_correct_answers + total_wrong_attempts) * 100.0
	}
	
	print("🏆 GAME COMPLETADO!")
	print("   Acertos: %d" % total_correct_answers)
	print("   Erros: %d" % total_wrong_attempts)
	print("   Precisão: %.1f%%" % stats["accuracy"])
	print("   Tempo: %.1f segundos" % game_duration)
	
	game_completed.emit(stats)

# ========================================
# HELPERS
# ========================================
func _get_current_fase_questions() -> Array:
	match current_fase:
		1: return fase1_questions
		2: return fase2_questions
		3: return fase3_questions
		_: return []

func _update_fase_indicator() -> void:
	var fase_names = {
		1: "Fase 1 - Fácil",
		2: "Fase 2 - Médio",
		3: "Fase 3 - Difícil"
	}
	_fase_indicator.text = fase_names.get(current_fase, "")

func _update_progress_bar() -> void:
	var total_cards = CARDS_PER_FASE * TOTAL_FASES
	var completed_cards = (current_fase - 1) * CARDS_PER_FASE + cards_completed_in_fase
	_progress_bar.value = float(completed_cards) / float(total_cards) * 100.0

func _show_error(message: String) -> void:
	_modal_error.visible = true
	# Configurar mensagem de erro no modal
	if _modal_error.has_node("ErrorLabel"):
		_modal_error.get_node("ErrorLabel").text = message
	game_failed.emit()

# ========================================
# PAUSAR/DESPAUSAR GAME
# ========================================
func pause_game() -> void:
	_question_card.pause_card()
	get_tree().paused = true

func resume_game() -> void:
	get_tree().paused = false
	_question_card.resume_card()

# ========================================
# SAIR DO GAME
# ========================================
func quit_game() -> void:
	# Limpar estado
	current_area = ""
	current_fase = 0
	fase1_questions = []
	fase2_questions = []
	fase3_questions = []
	
	# Voltar para lobby/menu
	# TransitionScreen.fade_in(Constants.Scenes.LOBBY)
