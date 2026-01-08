# ========================================
# CONSTANTS - Quiron Concursos
# ========================================
# Constantes globais do projeto
# Padrão: Segue estrutura do desenvolvedor

extends Node

# ========================================
# URLs DA API
# ========================================

# BASE URL (PRODUÇÃO)
const SERVER_BASE_URL_API: String = "https://[seu-dominio].supabase.co/functions/v1/make-server-50734795"

# BASE URL (DESENVOLVIMENTO - opcional)
const SERVER_BASE_URL_DEV: String = "http://localhost:54321/functions/v1/make-server-50734795"

# Usar produção ou dev
const USE_DEV_SERVER: bool = false

static func get_api_base_url() -> String:
	return SERVER_BASE_URL_DEV if USE_DEV_SERVER else SERVER_BASE_URL_API

# ========================================
# ENDPOINTS DAS QUESTÕES
# ========================================

const API_QUESTIONS_BASE: String = "/api/game/questions"
const API_QUESTIONS_MATCH: String = "/api/game/questions/match"
const API_QUESTIONS_STATS: String = "/api/game/questions/stats"
const API_QUESTIONS_EXPORT: String = "/api/game/questions/export"

# ========================================
# ÁREAS DO GAME
# ========================================

enum GameArea {
	JURIDICA,
	POLICIAL,
	FISCAL_BANCARIA,
	CONHECIMENTOS_GERAIS
}

const AREA_NAMES = {
	GameArea.JURIDICA: "juridica",
	GameArea.POLICIAL: "policial",
	GameArea.FISCAL_BANCARIA: "fiscal-bancaria",
	GameArea.CONHECIMENTOS_GERAIS: "conhecimentos-gerais"
}

const AREA_COLORS = {
	"juridica": Color("#3B82F6"),        # Azul
	"policial": Color("#DC2626"),        # Vermelho
	"fiscal-bancaria": Color("#EAB308"), # Amarelo
	"conhecimentos-gerais": Color("#9333EA") # Roxo
}

const AREA_DISPLAY_NAMES = {
	"juridica": "Área Jurídica",
	"policial": "Área Policial",
	"fiscal-bancaria": "Área Fiscal-Bancária",
	"conhecimentos-gerais": "Conhecimentos Gerais"
}

# ========================================
# DIFICULDADES
# ========================================

enum Difficulty {
	FACIL,
	MEDIO,
	DIFICIL
}

const DIFFICULTY_NAMES = {
	Difficulty.FACIL: "facil",
	Difficulty.MEDIO: "medio",
	Difficulty.DIFICIL: "dificil"
}

const DIFFICULTY_COLORS = {
	"facil": Color("#22C55E"),   # Verde
	"medio": Color("#EAB308"),   # Amarelo
	"dificil": Color("#DC2626")  # Vermelho
}

# ========================================
# CONFIGURAÇÕES DO GAME
# ========================================

# Tempo
const QUESTION_TIME_SECONDS: float = 30.0
const EXPLANATION_TIME_SECONDS: float = 20.0

# Fases
const CARDS_PER_FASE: int = 10
const TOTAL_FASES: int = 3
const TOTAL_CARDS_PER_MATCH: int = 30

# Cache
const CACHE_ENABLED: bool = true
const CACHE_MAX_AGE_HOURS: int = 24

# ========================================
# CENAS (Scenes)
# ========================================

const Scenes = {
	"MAIN_MENU": "res://scenes/main_menu.tscn",
	"LOBBY": "res://scenes/lobby.tscn",
	"AREA_SELECTION": "res://scenes/area_selection.tscn",
	"EPIC_GAME": "res://scenes/epic_game.tscn",
	"RESULTS": "res://scenes/results.tscn"
}

# ========================================
# HELPERS
# ========================================

static func get_area_color(area: String) -> Color:
	return AREA_COLORS.get(area, Color.WHITE)

static func get_difficulty_color(difficulty: String) -> Color:
	return DIFFICULTY_COLORS.get(difficulty, Color.WHITE)

static func get_area_display_name(area: String) -> String:
	return AREA_DISPLAY_NAMES.get(area, area)

static func get_full_questions_url(endpoint: String = "") -> String:
	return get_api_base_url() + API_QUESTIONS_BASE + endpoint
