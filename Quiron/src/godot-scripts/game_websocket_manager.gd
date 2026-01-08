# ========================================
# GAME WEBSOCKET MANAGER - Quiron Concursos
# ========================================
# Gerencia comunicação WebSocket para modo MULTIPLAYER
# Integra com o sistema de questões do Game Épico
# Padrão: Baseado no WebSocket fornecido pelo desenvolvedor

extends Node

# Signals
signal questions_loaded(questions_data: Dictionary)
signal opponent_answer(player_id: String, was_correct: bool, time_taken: float)
signal match_started(match_data: Dictionary)
signal match_ended(results: Dictionary)
signal player_joined(player_data: Dictionary)
signal player_left(player_id: String)
signal error_event(message: String)

# Referência ao WebSocket singleton
@onready var _websocket: Node = WebSocket

# Estado do match multiplayer
var current_match_id: String = ""
var current_area: String = ""
var players_in_match: Array = []
var is_in_match: bool = false

func _ready() -> void:
	# Conectar aos eventos do WebSocket
	_websocket.game_event.connect(_on_game_event)
	_websocket.matchmaking_event.connect(_on_matchmaking_event)
	_websocket.error_event.connect(_on_error_event)
	_websocket.disconnected_event.connect(_on_disconnected)

# ========================================
# MATCHMAKING - Procurar partida
# ========================================
func find_match(area: String) -> void:
	"""
	Procura uma partida multiplayer na área especificada
	area: juridica | policial | fiscal-bancaria | conhecimentos-gerais
	"""
	current_area = area
	is_in_match = false
	
	_websocket.send_message("MATCHMAKING_EVENT", {
		"action": "FIND_MATCH",
		"area": area
	})
	
	print("🔍 Procurando partida: %s" % area)

func cancel_matchmaking() -> void:
	"""Cancela a busca por partida"""
	_websocket.send_message("MATCHMAKING_EVENT", {
		"action": "CANCEL"
	})
	
	print("❌ Matchmaking cancelado")

# ========================================
# GAME EVENTS - Durante a partida
# ========================================
func request_match_questions() -> void:
	"""Solicita as questões da partida (chamado quando match inicia)"""
	if not is_in_match:
		push_error("Não está em uma partida")
		return
	
	_websocket.send_message("GAME_EVENT", {
		"action": "REQUEST_QUESTIONS",
		"match_id": current_match_id,
		"area": current_area
	})
	
	print("📥 Solicitando questões da partida")

func submit_answer(question_id: String, player_answer: bool, time_taken: float) -> void:
	"""
	Envia resposta de uma questão
	question_id: ID da questão (ex: const_001)
	player_answer: true = CERTO, false = ERRADO
	time_taken: tempo em segundos que levou para responder
	"""
	if not is_in_match:
		push_error("Não está em uma partida")
		return
	
	_websocket.send_message("GAME_EVENT", {
		"action": "SUBMIT_ANSWER",
		"match_id": current_match_id,
		"question_id": question_id,
		"answer": player_answer,
		"time_taken": time_taken
	})
	
	print("📤 Resposta enviada: %s = %s (%.1fs)" % [question_id, "CERTO" if player_answer else "ERRADO", time_taken])

func notify_fase_completed(fase_number: int) -> void:
	"""Notifica que completou uma fase"""
	if not is_in_match:
		return
	
	_websocket.send_message("GAME_EVENT", {
		"action": "FASE_COMPLETED",
		"match_id": current_match_id,
		"fase": fase_number
	})
	
	print("✅ Fase %d completada" % fase_number)

func leave_match() -> void:
	"""Sair da partida"""
	if is_in_match:
		_websocket.send_message("GAME_EVENT", {
			"action": "LEAVE_MATCH",
			"match_id": current_match_id
		})
		
		_reset_match_state()
		print("👋 Saiu da partida")

# ========================================
# CALLBACKS - WebSocket Events
# ========================================
func _on_matchmaking_event(data: Dictionary) -> void:
	"""Processa eventos de matchmaking"""
	var action = data.get("action", "")
	
	match action:
		"MATCH_FOUND":
			_handle_match_found(data)
		"PLAYER_JOINED":
			_handle_player_joined(data)
		"PLAYER_LEFT":
			_handle_player_left(data)
		"MATCHMAKING_TIMEOUT":
			print("⏱️ Timeout do matchmaking - nenhuma partida encontrada")
		_:
			print("⚠️ Ação de matchmaking desconhecida: %s" % action)

func _on_game_event(data: Dictionary) -> void:
	"""Processa eventos do game"""
	var action = data.get("action", "")
	
	match action:
		"MATCH_STARTED":
			_handle_match_started(data)
		"QUESTIONS_LOADED":
			_handle_questions_loaded(data)
		"OPPONENT_ANSWER":
			_handle_opponent_answer(data)
		"MATCH_ENDED":
			_handle_match_ended(data)
		"SYNC_STATE":
			_handle_sync_state(data)
		_:
			print("⚠️ Ação de game desconhecida: %s" % action)

func _on_error_event(message: String) -> void:
	"""Processa erros do WebSocket"""
	error_event.emit(message)
	print("❌ Erro WebSocket: %s" % message)

func _on_disconnected() -> void:
	"""Processa desconexão do WebSocket"""
	_reset_match_state()
	print("🔌 Desconectado do servidor")

# ========================================
# HANDLERS - Eventos específicos
# ========================================
func _handle_match_found(data: Dictionary) -> void:
	"""Match encontrado - aguardando outros jogadores"""
	current_match_id = data.get("match_id", "")
	players_in_match = data.get("players", [])
	
	print("🎮 Match encontrado! ID: %s" % current_match_id)
	print("   Jogadores: %d" % players_in_match.size())

func _handle_match_started(data: Dictionary) -> void:
	"""Match iniciado - todos os jogadores prontos"""
	is_in_match = true
	current_match_id = data.get("match_id", "")
	players_in_match = data.get("players", [])
	
	var match_data = {
		"match_id": current_match_id,
		"area": current_area,
		"players": players_in_match,
		"mode": data.get("mode", "competitive") # competitive | cooperative
	}
	
	match_started.emit(match_data)
	
	print("🚀 Match iniciado!")
	print("   ID: %s" % current_match_id)
	print("   Jogadores: %d" % players_in_match.size())
	
	# Solicitar questões automaticamente
	request_match_questions()

func _handle_questions_loaded(data: Dictionary) -> void:
	"""Questões da partida carregadas"""
	var questions_data = {
		"fase1": data.get("fase1", []),
		"fase2": data.get("fase2", []),
		"fase3": data.get("fase3", [])
	}
	
	questions_loaded.emit(questions_data)
	
	print("📚 Questões carregadas:")
	print("   Fase 1: %d questões" % questions_data["fase1"].size())
	print("   Fase 2: %d questões" % questions_data["fase2"].size())
	print("   Fase 3: %d questões" % questions_data["fase3"].size())

func _handle_opponent_answer(data: Dictionary) -> void:
	"""Oponente respondeu uma questão"""
	var player_id = data.get("player_id", "")
	var was_correct = data.get("was_correct", false)
	var time_taken = data.get("time_taken", 0.0)
	
	opponent_answer.emit(player_id, was_correct, time_taken)
	
	var status = "✅ Acertou" if was_correct else "❌ Errou"
	print("👤 %s: %s (%.1fs)" % [player_id, status, time_taken])

func _handle_player_joined(data: Dictionary) -> void:
	"""Novo jogador entrou no match"""
	var player_data = data.get("player", {})
	players_in_match.append(player_data)
	
	player_joined.emit(player_data)
	
	print("👋 Jogador entrou: %s" % player_data.get("username", "Unknown"))

func _handle_player_left(data: Dictionary) -> void:
	"""Jogador saiu do match"""
	var player_id = data.get("player_id", "")
	
	# Remover da lista
	for i in range(players_in_match.size()):
		if players_in_match[i].get("id") == player_id:
			players_in_match.remove_at(i)
			break
	
	player_left.emit(player_id)
	
	print("👋 Jogador saiu: %s" % player_id)

func _handle_match_ended(data: Dictionary) -> void:
	"""Match finalizado - exibir resultados"""
	var results = {
		"winner": data.get("winner", ""),
		"rankings": data.get("rankings", []),
		"stats": data.get("stats", {}),
		"rewards": data.get("rewards", {})
	}
	
	match_ended.emit(results)
	
	print("🏆 Match finalizado!")
	print("   Vencedor: %s" % results["winner"])
	
	_reset_match_state()

func _handle_sync_state(data: Dictionary) -> void:
	"""Sincronização de estado (útil para reconexão)"""
	current_match_id = data.get("match_id", "")
	current_area = data.get("area", "")
	players_in_match = data.get("players", [])
	is_in_match = data.get("is_in_match", false)
	
	print("🔄 Estado sincronizado")

# ========================================
# HELPERS
# ========================================
func _reset_match_state() -> void:
	"""Reseta estado do match"""
	current_match_id = ""
	current_area = ""
	players_in_match = []
	is_in_match = false

func get_player_count() -> int:
	"""Retorna quantidade de jogadores no match"""
	return players_in_match.size()

func get_my_rank() -> int:
	"""Retorna posição atual no ranking (requer dados do servidor)"""
	# Implementar quando servidor enviar ranking em tempo real
	return 0

func is_connected() -> bool:
	"""Verifica se está conectado ao WebSocket"""
	return _websocket._socket != null and _websocket._socket.get_ready_state() == WebSocketPeer.STATE_OPEN

# ========================================
# DEBUG
# ========================================
func debug_print_state() -> void:
	"""Imprime estado atual (debug)"""
	print("=== GAME WEBSOCKET STATE ===")
	print("Connected: %s" % is_connected())
	print("In Match: %s" % is_in_match)
	print("Match ID: %s" % current_match_id)
	print("Area: %s" % current_area)
	print("Players: %d" % players_in_match.size())
	for player in players_in_match:
		print("  - %s" % player.get("username", "Unknown"))
	print("===========================")
