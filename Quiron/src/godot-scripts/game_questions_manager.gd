# ========================================
# GAME QUESTIONS MANAGER - Quiron Concursos
# ========================================
# Gerencia download e cache de questões para o Game Épico
# Padrão: Segue estrutura do desenvolvedor

extends Node

# Nodes
@onready var _http_request: HTTPRequest = $HTTPRequest

# Signals
signal questions_loaded(questions_data: Dictionary)
signal questions_error(error_message: String)

# Constantes
const QUESTIONS_BASE_URL = "%s/api/game/questions" # Usar Constants.SERVER_BASE_URL_API
const CACHE_FILE_PATH = "user://questions_cache_%s.json"

# Estado
var current_area: String = ""
var cached_questions: Dictionary = {}
var is_loading: bool = false

func _ready() -> void:
	_http_request.request_completed.connect(_on_http_request_completed)

# ========================================
# CARREGAR QUESTÕES PARA UMA PARTIDA (30 questões = 3 fases)
# ========================================
func load_match_questions(area: String) -> void:
	if is_loading:
		push_warning("Já existe uma requisição em andamento")
		return
	
	current_area = area
	is_loading = true
	
	# Tentar carregar do cache primeiro
	if _load_from_cache(area):
		return
	
	# Se não tem cache, buscar da API
	var url: String = "%s/match?area=%s" % [QUESTIONS_BASE_URL, area]
	var headers: Array[String] = ["Content-Type: application/json"]
	
	var error = _http_request.request(url, headers, HTTPClient.METHOD_GET)
	
	if error != OK:
		is_loading = false
		questions_error.emit("Erro ao fazer requisição: %s" % error)
		push_error("Erro HTTPRequest: %s" % error)

# ========================================
# CARREGAR QUESTÕES ESPECÍFICAS (por dificuldade)
# ========================================
func load_questions_by_difficulty(area: String, difficulty: String, count: int = 10) -> void:
	if is_loading:
		push_warning("Já existe uma requisição em andamento")
		return
	
	current_area = area
	is_loading = true
	
	var url: String = "%s?area=%s&difficulty=%s&count=%d" % [QUESTIONS_BASE_URL, area, difficulty, count]
	var headers: Array[String] = ["Content-Type: application/json"]
	
	var error = _http_request.request(url, headers, HTTPClient.METHOD_GET)
	
	if error != OK:
		is_loading = false
		questions_error.emit("Erro ao fazer requisição: %s" % error)
		push_error("Erro HTTPRequest: %s" % error)

# ========================================
# CALLBACK DA REQUISIÇÃO HTTP
# ========================================
func _on_http_request_completed(_result: int, response_code: int, _headers: PackedStringArray, body: PackedByteArray) -> void:
	is_loading = false
	
	if response_code == 200:
		var json_string = body.get_string_from_utf8()
		var json = JSON.parse_string(json_string)
		
		if json == null:
			questions_error.emit("Erro ao parsear JSON")
			push_error("JSON inválido: %s" % json_string)
			return
		
		# Verificar estrutura do JSON
		if typeof(json) == TYPE_DICTIONARY and json.has("success") and json["success"]:
			var questions_data = json["data"]
			
			# Salvar no cache
			_save_to_cache(current_area, questions_data)
			
			# Emitir signal com as questões
			questions_loaded.emit(questions_data)
		else:
			questions_error.emit("Resposta inválida da API")
			push_error("Estrutura JSON inválida: %s" % json)
	
	elif response_code == 404:
		questions_error.emit("Questões não encontradas para esta área")
		push_error("404 - Questões não encontradas: %s" % current_area)
	
	else:
		questions_error.emit("Erro do servidor: %d" % response_code)
		push_error("Erro HTTP %d ao carregar questões" % response_code)

# ========================================
# CACHE LOCAL (para jogar offline)
# ========================================
func _save_to_cache(area: String, questions_data) -> void:
	var file_path = CACHE_FILE_PATH % area
	var file = FileAccess.open(file_path, FileAccess.WRITE)
	
	if file:
		var cache_data = {
			"area": area,
			"timestamp": Time.get_unix_time_from_system(),
			"questions": questions_data
		}
		file.store_string(JSON.stringify(cache_data))
		file.close()
		print("✅ Cache salvo: %s" % file_path)
	else:
		push_warning("Não foi possível salvar cache: %s" % file_path)

func _load_from_cache(area: String) -> bool:
	var file_path = CACHE_FILE_PATH % area
	
	if not FileAccess.file_exists(file_path):
		return false
	
	var file = FileAccess.open(file_path, FileAccess.READ)
	if not file:
		return false
	
	var json_string = file.get_as_text()
	file.close()
	
	var cache_data = JSON.parse_string(json_string)
	if cache_data == null:
		return false
	
	# Verificar se cache não está muito antigo (opcional)
	var cache_age = Time.get_unix_time_from_system() - cache_data["timestamp"]
	var max_cache_age = 86400 # 24 horas em segundos
	
	if cache_age > max_cache_age:
		print("⚠️ Cache expirado, buscando questões novas...")
		return false
	
	# Usar cache
	print("✅ Usando cache: %s" % file_path)
	is_loading = false
	questions_loaded.emit(cache_data["questions"])
	return true

# ========================================
# LIMPAR CACHE (útil para forçar atualização)
# ========================================
func clear_cache(area: String = "") -> void:
	if area == "":
		# Limpar todos os caches
		for area_name in ["juridica", "policial", "fiscal-bancaria", "conhecimentos-gerais"]:
			var file_path = CACHE_FILE_PATH % area_name
			if FileAccess.file_exists(file_path):
				DirAccess.remove_absolute(file_path)
				print("🗑️ Cache removido: %s" % file_path)
	else:
		# Limpar cache de área específica
		var file_path = CACHE_FILE_PATH % area
		if FileAccess.file_exists(file_path):
			DirAccess.remove_absolute(file_path)
			print("🗑️ Cache removido: %s" % file_path)

# ========================================
# HELPER: Embaralhar questões
# ========================================
func shuffle_questions(questions: Array) -> Array:
	var shuffled = questions.duplicate()
	shuffled.shuffle()
	return shuffled

# ========================================
# HELPER: Filtrar questões por dificuldade
# ========================================
func filter_by_difficulty(questions: Array, difficulty: String) -> Array:
	var filtered = []
	for q in questions:
		if q["difficulty"] == difficulty:
			filtered.append(q)
	return filtered
