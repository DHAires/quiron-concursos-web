# ========================================
# MULTIPLAYER GAME MANAGER - Quiron Concursos
# ========================================
# Gerenciador do Game Épico em modo MULTIPLAYER
# Integra WebSocket + Sistema de Questões
# Padrão: Baseado no código fornecido pelo desenvolvedor

extends Node

# Nodes
@onready var _websocket_manager: Node = $GameWebSocketManager
@onready var _question_card: Control = $QuestionCard
@onready var _modal_loading: Control = $ModalLoading
@onready var _modal_error: Control = $ModalError
@onready var _opponents_panel: Control = $OpponentsPanel

# Signals
signal game_started()
signal fase_completed(fase_number: int)
signal game_completed(results: Dictionary)
signal opponent_progress_updated(player_id: String, progress: Dictionary)

# Estado do game
var current_area: String = ""
var current_fase: int = 0
var current_card_index: int = 0
var cards_completed_in_fase: int = 0
var total_correct_answers: int = 0
var total_wrong_attempts: int = 0
var game_start_time: float = 0.0
var card_start_time: float = 0.0

# Dados das fases
var fase1_questions: Array = []
var fase2_questions: Array = []
var fase3_questions: Array = []

# Estado multiplayer
var is_multiplayer: bool = true
var opponents_stats: Dictionary = {} # player_id: { correct: int, wrong: int, fase: int }

# Constantes
const CARDS_PER_FASE: int = 10
const TOTAL_FASES: int = 3

func _ready() -> void:
	# Conectar signals do WebSocket
	_websocket_manager.questions_loaded.connect(_on_questions_loaded)
	_websocket_manager.match_started.connect(_on_match_started)
	_websocket_manager.match_ended.connect(_on_match_ended)
	_websocket_manager.opponent_answer.connect(_on_opponent_answer)
	_websocket_manager.player_joined.connect(_on_player_joined)
	_websocket_manager.player_left.connect(_on_player_left)
	_websocket_manager.error_event.connect(_on_error_event)
	
	# Conectar signals da carta
	_question_card.card_completed.connect(_on_card_completed)
	_question_card.time_expired.connect(_on_time_expired)
	
	# Esconder modais
	_modal_loading.visible = false
	_modal_error.visible = false

# ========================================
# INICIAR MATCHMAKING
# ========================================
func start_matchmaking(area: String) -> void:
	"""Inicia busca por partida multiplayer"""
	if area not in ["juridica", "policial", "fiscal-bancaria", "conhecimentos-gerais"]:
		push_error("Área inválida: %s" % area)
		return
	
	current_area = area
	_reset_game_state()
	
	# Mostrar loading
	_modal_loading.visible = true
	# Configurar texto do loading (se tiver node de texto)
	if _modal_loading.has_node("LoadingText"):
		_modal_loading.get_node("LoadingText").text = "Procurando oponentes..."
	
	print("🔍 Iniciando matchmaking: %s" % area)
	_websocket_manager.find_match(area)

func cancel_matchmaking() -> void:
	"""Cancela busca por partida"""
	_websocket_manager.cancel_matchmaking()
	_modal_loading.visible = false
	print("❌ Matchmaking cancelado")

# ========================================
# CALLBACKS - WebSocket
# ========================================
func _on_match_started(match_data: Dictionary) -> void:
	"""Match iniciado - todos os jogadores prontos"""
	_modal_loading.visible = false
	
	var players = match_data.get("players", [])
	print("🚀 Match iniciado com %d jogadores" % players.size())
	
	# Inicializar stats dos oponentes
	for player in players:
		var player_id = player.get("id", "")
		if player_id != "":
			opponents_stats[player_id] = {
				"username": player.get("username", "Unknown"),
				"correct": 0,
				"wrong": 0,
				"fase": 1,
				"cards_completed": 0
			}
	
	# Aguardar questões (já foram solicitadas automaticamente)
	_modal_loading.visible = true
	if _modal_loading.has_node("LoadingText"):
		_modal_loading.get_node("LoadingText").text = "Carregando questões..."

func _on_questions_loaded(questions_data: Dictionary) -> void:
	"""Questões carregadas - iniciar game"""
	_modal_loading.visible = false
	
	fase1_questions = questions_data.get("fase1", [])
	fase2_questions = questions_data.get("fase2", [])
	fase3_questions = questions_data.get("fase3", [])
	
	# Validar quantidade
	if fase1_questions.size() < CARDS_PER_FASE:
		_show_error("Questões insuficientes para Fase 1")
		return
	if fase2_questions.size() < CARDS_PER_FASE:
		_show_error("Questões insuficientes para Fase 2")
		return
	if fase3_questions.size() < CARDS_PER_FASE:
		_show_error("Questões insuficientes para Fase 3")
		return
	
	print("✅ Questões carregadas - iniciando game")
	
	# Começar o game
	game_start_time = Time.get_ticks_msec() / 1000.0
	game_started.emit()
	_start_fase(1)

func _on_opponent_answer(player_id: String, was_correct: bool, time_taken: float) -> void:
	"""Oponente respondeu uma questão"""
	if not opponents_stats.has(player_id):
		return
	
	# Atualizar stats
	if was_correct:
		opponents_stats[player_id]["correct"] += 1
		opponents_stats[player_id]["cards_completed"] += 1
	else:
		opponents_stats[player_id]["wrong"] += 1
	
	# Verificar se completou fase
	if opponents_stats[player_id]["cards_completed"] >= CARDS_PER_FASE:
		opponents_stats[player_id]["fase"] += 1
		opponents_stats[player_id]["cards_completed"] = 0
	
	# Emitir signal para atualizar UI
	opponent_progress_updated.emit(player_id, opponents_stats[player_id])
	
	# Atualizar painel de oponentes
	_update_opponents_panel()

func _on_player_joined(player_data: Dictionary) -> void:
	"""Novo jogador entrou"""
	var player_id = player_data.get("id", "")
	if player_id != "":
		opponents_stats[player_id] = {
			"username": player_data.get("username", "Unknown"),
			"correct": 0,
			"wrong": 0,
			"fase": 1,
			"cards_completed": 0
		}
	_update_opponents_panel()

func _on_player_left(player_id: String) -> void:
	"""Jogador saiu"""
	opponents_stats.erase(player_id)
	_update_opponents_panel()

func _on_match_ended(results: Dictionary) -> void:
	"""Match finalizado"""
	var final_results = {
		"winner": results.get("winner", ""),
		"rankings": results.get("rankings", []),
		"stats": results.get("stats", {}),
		"my_stats": {
			"correct": total_correct_answers,
			"wrong": total_wrong_attempts,
			"duration": (Time.get_ticks_msec() / 1000.0) - game_start_time
		}
	}
	
	game_completed.emit(final_results)
	
	print("🏆 Match finalizado!")
	_reset_game_state()

func _on_error_event(message: String) -> void:
	"""Erro do WebSocket"""
	_show_error(message)

# ========================================
# FASES E CARTAS (Igual ao single-player)
# ========================================
func _start_fase(fase_number: int) -> void:
	"""Inicia fase"""
	current_fase = fase_number
	current_card_index = 0
	cards_completed_in_fase = 0
	
	print("🎯 Fase %d iniciada" % fase_number)
	
	await get_tree().create_timer(1.0).timeout
	_show_next_card()

func _show_next_card() -> void:
	"""Mostra próxima carta"""
	var questions: Array = _get_current_fase_questions()
	
	if current_card_index >= questions.size():
		push_error("Índice fora do range")
		return
	
	var question = questions[current_card_index]
	card_start_time = Time.get_ticks_msec() / 1000.0
	_question_card.set_question(question)
	
	print("📝 Carta %d/%d - Fase %d" % [cards_completed_in_fase + 1, CARDS_PER_FASE, current_fase])

func _on_card_completed(was_correct: bool) -> void:
	"""Carta completada"""
	var time_taken = (Time.get_ticks_msec() / 1000.0) - card_start_time
	var current_question = _get_current_fase_questions()[current_card_index]
	
	if was_correct:
		# ✅ ACERTOU!
		total_correct_answers += 1
		cards_completed_in_fase += 1
		current_card_index += 1
		
		# Enviar resposta ao servidor
		_websocket_manager.submit_answer(
			current_question.get("id", ""),
			true,
			time_taken
		)
		
		# Verificar se completou fase
		if cards_completed_in_fase >= CARDS_PER_FASE:
			_on_fase_completed()
		else:
			_show_next_card()
	else:
		# ❌ ERROU!
		total_wrong_attempts += 1
		
		# Enviar resposta ao servidor
		_websocket_manager.submit_answer(
			current_question.get("id", ""),
			false,
			time_taken
		)
		
		# Gerar nova carta
		_generate_new_card_for_retry()

func _on_time_expired() -> void:
	"""Tempo expirado"""
	total_wrong_attempts += 1
	var current_question = _get_current_fase_questions()[current_card_index]
	
	# Enviar timeout ao servidor
	_websocket_manager.submit_answer(
		current_question.get("id", ""),
		false,
		30.0 # Tempo máximo
	)

func _on_fase_completed() -> void:
	"""Fase completada"""
	print("🎉 Fase %d completada!" % current_fase)
	
	# Notificar servidor
	_websocket_manager.notify_fase_completed(current_fase)
	
	fase_completed.emit(current_fase)
	
	# Verificar se completou o game
	if current_fase >= TOTAL_FASES:
		_on_game_completed()
	else:
		# Próxima fase
		_start_fase(current_fase + 1)

func _on_game_completed() -> void:
	"""Game completado (esperando outros jogadores)"""
	print("🏆 Você completou o game! Aguardando outros jogadores...")
	
	# Mostrar tela de "aguardando"
	_modal_loading.visible = true
	if _modal_loading.has_node("LoadingText"):
		_modal_loading.get_node("LoadingText").text = "Aguardando outros jogadores..."
	
	# O servidor enviará MATCH_ENDED quando todos terminarem

func _generate_new_card_for_retry() -> void:
	"""Gera nova carta ao errar"""
	var questions: Array = _get_current_fase_questions()
	var available = questions.duplicate()
	available.shuffle()
	
	# Remover carta atual
	var current = questions[current_card_index]
	for i in range(available.size()):
		if available[i]["id"] == current["id"]:
			available.remove_at(i)
			break
	
	if available.size() > 0:
		card_start_time = Time.get_ticks_msec() / 1000.0
		_question_card.set_question(available[0])
	else:
		card_start_time = Time.get_ticks_msec() / 1000.0
		_question_card.set_question(current)

# ========================================
# HELPERS
# ========================================
func _get_current_fase_questions() -> Array:
	match current_fase:
		1: return fase1_questions
		2: return fase2_questions
		3: return fase3_questions
		_: return []

func _update_opponents_panel() -> void:
	"""Atualiza painel de oponentes"""
	if not _opponents_panel:
		return
	
	# Implementar UI de oponentes aqui
	# Exemplo: mostrar nome, fase, progresso de cada oponente
	pass

func _show_error(message: String) -> void:
	"""Mostra erro"""
	_modal_error.visible = true
	if _modal_error.has_node("ErrorLabel"):
		_modal_error.get_node("ErrorLabel").text = message
	print("❌ Erro: %s" % message)

func _reset_game_state() -> void:
	"""Reseta estado do game"""
	current_area = ""
	current_fase = 0
	current_card_index = 0
	cards_completed_in_fase = 0
	total_correct_answers = 0
	total_wrong_attempts = 0
	fase1_questions = []
	fase2_questions = []
	fase3_questions = []
	opponents_stats = {}

# ========================================
# SAIR DO GAME
# ========================================
func leave_game() -> void:
	"""Sair do game"""
	_websocket_manager.leave_match()
	_reset_game_state()
	# TransitionScreen.fade_in(Constants.Scenes.LOBBY)
