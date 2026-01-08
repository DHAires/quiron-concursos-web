import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Code, Download, Book, Zap, Database, Gamepad2, CheckCircle2, Copy, ExternalLink, Users, Wifi } from 'lucide-react';

export function GameIntegrationBanner() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(label);
    setTimeout(() => setCopiedEndpoint(null), 2000);
  };

  const endpoints = [
    {
      method: 'GET',
      path: '/api/game/questions?area=juridica&count=10',
      description: 'Obter 10 questões da área jurídica',
      label: 'questions'
    },
    {
      method: 'GET',
      path: '/api/game/questions/match?area=juridica',
      description: 'Obter 30 questões (3 fases) para uma partida',
      label: 'match'
    },
    {
      method: 'GET',
      path: '/api/game/questions/const_001',
      description: 'Obter questão específica por ID',
      label: 'byid'
    },
    {
      method: 'GET',
      path: '/api/game/questions/stats?area=juridica',
      description: 'Obter estatísticas da área',
      label: 'stats'
    }
  ];

  const integrationSteps = [
    {
      title: 'Criar Script HTTP',
      icon: Code,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/30',
      borderColor: 'border-blue-500/30',
      code: `# game_questions_manager.gd
extends Node

var http_request: HTTPRequest
var base_url = "https://[dominio]/api/game/questions"

func load_match_questions(area: String):
    var url = base_url + "/match?area=" + area
    http_request.request(url)`
    },
    {
      title: 'Parser JSON',
      icon: Database,
      color: 'text-green-400',
      bgColor: 'bg-green-900/30',
      borderColor: 'border-green-500/30',
      code: `func _on_request_completed(result, response_code, headers, body):
    if response_code == 200:
        var json = JSON.new()
        var error = json.parse(body.get_string_from_utf8())
        if error == OK:
            var data = json.data
            emit_signal("questions_loaded", data)`
    },
    {
      title: 'Sistema de Cartas',
      icon: Gamepad2,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/30',
      borderColor: 'border-purple-500/30',
      code: `func set_question(question_data):
    current_question = question_data
    question_label.text = question_data.question
    time_left = 30.0  # 30 segundos
    
func check_answer(player_answer: bool):
    if current_question.correctAnswer == player_answer:
        show_correct_answer()  # 20s de explicação
    else:
        generate_new_card()  # Erro: nova carta`
    }
  ];

  return (
    <div className="mb-8">
      {/* Banner Colapsado */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 rounded-3xl bg-gradient-to-r from-purple-900/50 via-blue-900/50 to-cyan-900/50 border-2 border-purple-500/50 hover:border-purple-400 transition-all group"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <div className="text-left">
              <h3 className="text-2xl mb-1 flex items-center gap-2">
                🎮 Integração Godot 4
                <span className="px-3 py-1 rounded-full bg-green-600 text-xs animate-pulse">
                  API Pronta
                </span>
              </h3>
              <p className="text-gray-300">
                Documentação completa para desenvolvedores - Endpoints, Scripts GDScript e Download de Questões
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-400 hidden md:block">
              {isOpen ? 'Clique para fechar' : 'Clique para abrir'}
            </span>
            {isOpen ? (
              <ChevronUp className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
            ) : (
              <ChevronDown className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors animate-bounce" />
            )}
          </div>
        </div>
      </button>

      {/* Conteúdo Expandido */}
      {isOpen && (
        <div className="mt-4 p-8 rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-purple-500/30 space-y-8 animate-in slide-in-from-top duration-300">
          
          {/* Resumo Executivo */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-2 border-purple-500/30">
            <h4 className="text-2xl mb-4 flex items-center gap-2">
              <Book className="w-6 h-6 text-purple-400" />
              📋 Resumo Executivo
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">50 questões de Direito Constitucional</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Formato Certo/Errado (Cebraspe)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">4 áreas × 17 matérias estruturadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Sistema de fases (Fácil/Médio/Difícil)</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">API REST pronta para consumo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Explicações curtas (cabem nas cartas)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Sistema de retry ao errar</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Timer de 30s + Explicação de 20s</span>
                </div>
              </div>
            </div>
          </div>

          {/* Endpoints da API */}
          <div>
            <h4 className="text-2xl mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              📡 Endpoints da API
            </h4>
            <div className="space-y-3">
              {endpoints.map((endpoint) => (
                <div
                  key={endpoint.label}
                  className="p-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-lg bg-green-600 text-xs">
                          {endpoint.method}
                        </span>
                        <code className="text-sm text-cyan-400">{endpoint.path}</code>
                      </div>
                      <p className="text-sm text-gray-400">{endpoint.description}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(endpoint.path, endpoint.label)}
                      className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors flex items-center gap-2"
                    >
                      {copiedEndpoint === endpoint.label ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <span className="text-sm">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span className="text-sm">Copiar</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estrutura da Questão */}
          <div>
            <h4 className="text-2xl mb-4 flex items-center gap-2">
              <Database className="w-6 h-6 text-blue-400" />
              🗂️ Estrutura da Questão (JSON)
            </h4>
            <div className="p-6 rounded-xl bg-black/50 border border-gray-700">
              <pre className="text-sm text-gray-300 overflow-x-auto">
{`{
  "id": "const_001",
  "area": "juridica",
  "subject": "Direito Constitucional",
  "question": "A República Federativa do Brasil tem como fundamentos a soberania...",
  "correctAnswer": true,
  "explanation": "CERTO. Art. 1º, I, II e III da CF/88.",
  "difficulty": "facil"
}`}
              </pre>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="text-sm">
                  <span className="text-gray-400">Campos:</span>
                  <ul className="mt-2 space-y-1 text-gray-300">
                    <li>• <code className="text-cyan-400">id</code>: string (único)</li>
                    <li>• <code className="text-cyan-400">area</code>: juridica | policial | fiscal-bancaria | conhecimentos-gerais</li>
                    <li>• <code className="text-cyan-400">subject</code>: string (matéria)</li>
                    <li>• <code className="text-cyan-400">question</code>: string (máx. 2 linhas)</li>
                  </ul>
                </div>
                <div className="text-sm">
                  <span className="text-gray-400">&nbsp;</span>
                  <ul className="mt-2 space-y-1 text-gray-300">
                    <li>• <code className="text-cyan-400">correctAnswer</code>: boolean (true=CERTO, false=ERRADO)</li>
                    <li>• <code className="text-cyan-400">explanation</code>: string (máx. 2 linhas)</li>
                    <li>• <code className="text-cyan-400">difficulty</code>: facil | medio | dificil</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Scripts GDScript */}
          <div>
            <h4 className="text-2xl mb-4 flex items-center gap-2">
              <Code className="w-6 h-6 text-green-400" />
              💻 Scripts Godot 4 (GDScript)
            </h4>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {integrationSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 ${step.bgColor} ${step.borderColor}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg bg-gray-900 flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${step.color}`} />
                      </div>
                      <h5 className="text-lg">{step.title}</h5>
                    </div>
                    <pre className="text-xs text-gray-300 overflow-x-auto bg-black/50 p-3 rounded-lg">
{step.code}
                    </pre>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mecânica do Game */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-red-900/30 to-orange-900/30 border-2 border-red-500/30">
            <h4 className="text-2xl mb-4 flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-red-400" />
              🎮 Mecânica do Game "A Corrida dos Heróis"
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-black/30">
                <h5 className="text-lg mb-3 text-green-400">Fase 1 - Fácil</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 10 cartas de questões</li>
                  <li>• Dificuldade: Fácil</li>
                  <li>• 30s para responder</li>
                  <li>• Acertou: 20s explicação</li>
                  <li>• Errou: nova carta</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-black/30">
                <h5 className="text-lg mb-3 text-yellow-400">Fase 2 - Médio</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 10 cartas de questões</li>
                  <li>• Dificuldade: Médio</li>
                  <li>• 30s para responder</li>
                  <li>• Acertou: 20s explicação</li>
                  <li>• Errou: nova carta</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-black/30">
                <h5 className="text-lg mb-3 text-red-400">Fase 3 - Difícil</h5>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• 10 cartas de questões</li>
                  <li>• Dificuldade: Difícil</li>
                  <li>• 30s para responder</li>
                  <li>• Acertou: 20s explicação</li>
                  <li>• Errou: nova carta</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Download de Questões */}
          <div>
            <h4 className="text-2xl mb-4 flex items-center gap-2">
              <Download className="w-6 h-6 text-cyan-400" />
              📦 Download de Questões
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Opção 1: JSON Estático */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-2 border-blue-500/30">
                <h5 className="text-xl mb-3 text-blue-400">Opção 1: JSON Estático (Offline)</h5>
                <p className="text-sm text-gray-300 mb-4">
                  Baixe o arquivo JSON e inclua no projeto Godot
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-black/50">
                    <code className="text-xs text-cyan-400">
                      GET /api/game/questions/export?area=juridica
                    </code>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50">
                    <p className="text-xs text-gray-400 mb-1">Salvar em:</p>
                    <code className="text-xs text-green-400">
                      res://data/questions_juridica.json
                    </code>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50">
                    <p className="text-xs text-gray-400 mb-2">Carregar no Godot:</p>
                    <pre className="text-xs text-gray-300">
{`var file = FileAccess.open(
  "res://data/questions_juridica.json",
  FileAccess.READ
)`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Opção 2: API Online */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500/30">
                <h5 className="text-xl mb-3 text-purple-400">Opção 2: API Online (Web)</h5>
                <p className="text-sm text-gray-300 mb-4">
                  Busque questões atualizadas em tempo real
                </p>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-black/50">
                    <p className="text-xs text-gray-400 mb-2">Base URL:</p>
                    <code className="text-xs text-cyan-400">
                      https://[seu-dominio]/api/game/questions
                    </code>
                  </div>
                  <div className="p-3 rounded-lg bg-black/50">
                    <p className="text-xs text-gray-400 mb-2">Exemplo GDScript:</p>
                    <pre className="text-xs text-gray-300">
{`var url = base_url + "/match?area=juridica"
http_request.request(url)`}
                    </pre>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-green-900/30 border border-green-500/30">
                    <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-xs text-gray-300">Sempre atualizado com novas questões</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SEÇÃO MULTIPLAYER WEBSOCKET - NOVA! */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-red-900/40 via-orange-900/40 to-yellow-900/40 border-4 border-red-500/50 shadow-2xl shadow-red-500/20">
            <h4 className="text-3xl mb-6 flex items-center gap-3">
              <Wifi className="w-8 h-8 text-red-400 animate-pulse" />
              <Users className="w-8 h-8 text-orange-400" />
              ⚔️ MULTIPLAYER - Integração WebSocket (Sala de Batalha)
            </h4>
            
            {/* Resumo Multiplayer */}
            <div className="p-6 rounded-2xl bg-black/50 border-2 border-red-500/30 mb-6">
              <h5 className="text-2xl mb-4 text-red-400">🎯 Visão Geral do Multiplayer</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">4 jogadores competem simultaneamente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Sistema de Matchmaking automático</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Sala de espera com timer de confirmação</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">10 segundos para confirmar presença</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">WebSocket bidirecional em tempo real</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Sincronização de estado entre jogadores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Rankings e pontuação competitiva</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Reconexão automática em caso de falha</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Endpoint WebSocket */}
            <div className="mb-6">
              <h5 className="text-2xl mb-4 text-orange-400 flex items-center gap-2">
                <Wifi className="w-6 h-6" />
                🔌 Endpoint WebSocket
              </h5>
              <div className="p-4 rounded-xl bg-black/50 border border-orange-500/30">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="px-3 py-1 rounded-lg bg-orange-600 text-xs mr-3">
                      WEBSOCKET
                    </span>
                    <code className="text-cyan-400">wss://[seu-dominio]/ws/game/multiplayer</code>
                  </div>
                  <button
                    onClick={() => copyToClipboard('wss://[seu-dominio]/ws/game/multiplayer', 'websocket')}
                    className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors flex items-center gap-2"
                  >
                    {copiedEndpoint === 'websocket' ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-sm">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span className="text-sm">Copiar</span>
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-400">
                  Conexão persistente para comunicação em tempo real entre jogadores
                </p>
              </div>
            </div>

            {/* Fluxo da Sala de Batalha */}
            <div className="mb-6">
              <h5 className="text-2xl mb-4 text-yellow-400">🔄 Fluxo Completo da Sala de Batalha</h5>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-gradient-to-br from-blue-900/50 to-blue-800/50 border-2 border-blue-500/30">
                  <div className="text-3xl mb-2 text-center">1️⃣</div>
                  <h6 className="text-lg mb-2 text-blue-400">Conectar</h6>
                  <p className="text-sm text-gray-300">
                    Cliente envia evento <code className="text-cyan-400 bg-black/30 px-1 rounded">join_matchmaking</code> com área e matérias
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-900/50 to-purple-800/50 border-2 border-purple-500/30">
                  <div className="text-3xl mb-2 text-center">2️⃣</div>
                  <h6 className="text-lg mb-2 text-purple-400">Aguardar</h6>
                  <p className="text-sm text-gray-300">
                    Servidor procura sala ou cria nova. Jogador vê status <code className="text-cyan-400 bg-black/30 px-1 rounded">Procurando Heróis...</code>
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-orange-900/50 to-orange-800/50 border-2 border-orange-500/30">
                  <div className="text-3xl mb-2 text-center">3️⃣</div>
                  <h6 className="text-lg mb-2 text-orange-400">Confirmar</h6>
                  <p className="text-sm text-gray-300">
                    Quando sala enche (4/4), cada jogador tem 10s para enviar <code className="text-cyan-400 bg-black/30 px-1 rounded">player_ready</code>
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-green-900/50 to-green-800/50 border-2 border-green-500/30">
                  <div className="text-3xl mb-2 text-center">4️⃣</div>
                  <h6 className="text-lg mb-2 text-green-400">Começar!</h6>
                  <p className="text-sm text-gray-300">
                    Todos confirmados? Recebem <code className="text-cyan-400 bg-black/30 px-1 rounded">game_starting</code> e iniciam a corrida!
                  </p>
                </div>
              </div>
            </div>

            {/* Eventos WebSocket */}
            <div className="mb-6">
              <h5 className="text-2xl mb-4 text-red-400">📨 Eventos WebSocket (Mensagens)</h5>
              
              {/* Eventos do Cliente para Servidor */}
              <div className="mb-4">
                <h6 className="text-lg mb-3 text-cyan-400">📤 Cliente → Servidor (enviar)</h6>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-black/50 border border-cyan-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="text-cyan-400 text-sm px-3 py-1 rounded bg-cyan-900/30">join_matchmaking</code>
                      <span className="text-xs text-gray-400">- Entrar na fila de matchmaking</span>
                    </div>
                    <pre className="text-xs text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
{`{
  "type": "join_matchmaking",
  "area": "juridica",
  "subjects": ["Direito Constitucional", "Direito Administrativo"],
  "player_name": "Herói123",
  "player_avatar": "avatar_url"
}`}
                    </pre>
                  </div>

                  <div className="p-4 rounded-xl bg-black/50 border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="text-green-400 text-sm px-3 py-1 rounded bg-green-900/30">player_ready</code>
                      <span className="text-xs text-gray-400">- Confirmar presença na sala</span>
                    </div>
                    <pre className="text-xs text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
{`{
  "type": "player_ready",
  "player_id": "player_uuid"
}`}
                    </pre>
                  </div>

                  <div className="p-4 rounded-xl bg-black/50 border border-yellow-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="text-yellow-400 text-sm px-3 py-1 rounded bg-yellow-900/30">answer_question</code>
                      <span className="text-xs text-gray-400">- Enviar resposta durante o jogo</span>
                    </div>
                    <pre className="text-xs text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
{`{
  "type": "answer_question",
  "question_id": "const_001",
  "answer": true,
  "time_taken": 12.5
}`}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Eventos do Servidor para Cliente */}
              <div>
                <h6 className="text-lg mb-3 text-purple-400">📥 Servidor → Cliente (receber)</h6>
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-black/50 border border-purple-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="text-purple-400 text-sm px-3 py-1 rounded bg-purple-900/30">room_joined</code>
                      <span className="text-xs text-gray-400">- Você entrou em uma sala</span>
                    </div>
                    <pre className="text-xs text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
{`{
  "type": "room_joined",
  "room_id": "room_xyz",
  "players": [
    {"id": "p1", "name": "Você", "avatar": "...", "ready": false},
    {"id": "p2", "name": "Procurando...", "ready": false}
  ],
  "players_count": 1,
  "max_players": 4
}`}
                    </pre>
                  </div>

                  <div className="p-4 rounded-xl bg-black/50 border border-orange-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="text-orange-400 text-sm px-3 py-1 rounded bg-orange-900/30">room_full</code>
                      <span className="text-xs text-gray-400">- Sala cheia! Aguardando confirmações</span>
                    </div>
                    <pre className="text-xs text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
{`{
  "type": "room_full",
  "room_id": "room_xyz",
  "players": [...],  // 4 jogadores
  "confirmation_time": 10  // segundos
}`}
                    </pre>
                  </div>

                  <div className="p-4 rounded-xl bg-black/50 border border-green-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="text-green-400 text-sm px-3 py-1 rounded bg-green-900/30">game_starting</code>
                      <span className="text-xs text-gray-400">- Todos confirmaram! Jogo iniciando</span>
                    </div>
                    <pre className="text-xs text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
{`{
  "type": "game_starting",
  "room_id": "room_xyz",
  "questions": [...],  // 30 questões (3 fases)
  "players": [...],  // 4 jogadores
  "countdown": 3  // segundos
}`}
                    </pre>
                  </div>

                  <div className="p-4 rounded-xl bg-black/50 border border-red-500/30">
                    <div className="flex items-center gap-2 mb-2">
                      <code className="text-red-400 text-sm px-3 py-1 rounded bg-red-900/30">player_disconnected</code>
                      <span className="text-xs text-gray-400">- Um jogador saiu/desconectou</span>
                    </div>
                    <pre className="text-xs text-gray-300 bg-black/30 p-3 rounded overflow-x-auto">
{`{
  "type": "player_disconnected",
  "player_id": "p2",
  "room_status": "waiting"  // volta para busca
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Scripts GDScript Multiplayer */}
            <div className="mb-6">
              <h5 className="text-2xl mb-4 text-green-400 flex items-center gap-2">
                <Code className="w-6 h-6" />
                💻 Scripts GDScript - Multiplayer WebSocket
              </h5>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Script 1: Conexão WebSocket */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/30">
                  <h6 className="text-lg mb-3 text-cyan-400 flex items-center gap-2">
                    <Wifi className="w-5 h-5" />
                    1. Conexão WebSocket
                  </h6>
                  <pre className="text-xs text-gray-300 bg-black/50 p-4 rounded-lg overflow-x-auto">
{`# multiplayer_manager.gd
extends Node

var websocket: WebSocketPeer
var ws_url = "wss://[dominio]/ws/game/multiplayer"
var connected = false

func _ready():
    websocket = WebSocketPeer.new()

func connect_to_server():
    var err = websocket.connect_to_url(ws_url)
    if err != OK:
        push_error("WebSocket connection failed")
        return
    print("Connecting to multiplayer server...")

func _process(delta):
    if websocket.get_ready_state() == WebSocketPeer.STATE_OPEN:
        if !connected:
            connected = true
            emit_signal("connected_to_server")
        
        # Poll WebSocket
        websocket.poll()
        
        # Receive messages
        while websocket.get_available_packet_count():
            var packet = websocket.get_packet()
            var json_str = packet.get_string_from_utf8()
            var json = JSON.new()
            var error = json.parse(json_str)
            if error == OK:
                handle_server_message(json.data)
    
    elif websocket.get_ready_state() == WebSocketPeer.STATE_CLOSED:
        if connected:
            connected = false
            emit_signal("disconnected_from_server")

func send_message(data: Dictionary):
    var json = JSON.stringify(data)
    websocket.send_text(json)`}
                  </pre>
                </div>

                {/* Script 2: Sala de Batalha (UI) */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500/30">
                  <h6 className="text-lg mb-3 text-purple-400 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    2. Sala de Batalha (UI)
                  </h6>
                  <pre className="text-xs text-gray-300 bg-black/50 p-4 rounded-lg overflow-x-auto">
{`# battle_room.gd
extends Control

@onready var players_container = $PlayersContainer
@onready var status_label = $StatusLabel
@onready var ready_button = $ReadyButton

var player_slots = []
var confirmation_timer = 0
var is_ready = false

func join_matchmaking(area: String, subjects: Array):
    var data = {
        "type": "join_matchmaking",
        "area": area,
        "subjects": subjects,
        "player_name": PlayerData.player_name,
        "player_avatar": PlayerData.avatar_url
    }
    MultiplayerManager.send_message(data)
    status_label.text = "Procurando Heróis..."

func handle_room_joined(data: Dictionary):
    update_player_list(data.players)
    status_label.text = "%d/4 jogadores" % data.players_count

func handle_room_full(data: Dictionary):
    update_player_list(data.players)
    status_label.text = "Sala cheia! Confirme sua presença!"
    ready_button.visible = true
    confirmation_timer = data.confirmation_time
    start_countdown()

func _on_ready_button_pressed():
    var data = {"type": "player_ready"}
    MultiplayerManager.send_message(data)
    is_ready = true
    ready_button.disabled = true
    status_label.text = "Aguardando outros jogadores..."

func handle_game_starting(data: Dictionary):
    GameData.questions = data.questions
    GameData.players = data.players
    # Inicia o jogo Godot!
    get_tree().change_scene_to_file("res://scenes/GameArena.tscn")`}
                  </pre>
                </div>

                {/* Script 3: Sincronização do Jogo */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-orange-900/30 to-red-900/30 border-2 border-orange-500/30">
                  <h6 className="text-lg mb-3 text-orange-400 flex items-center gap-2">
                    <Gamepad2 className="w-5 h-5" />
                    3. Sincronização Durante o Jogo
                  </h6>
                  <pre className="text-xs text-gray-300 bg-black/50 p-4 rounded-lg overflow-x-auto">
{`# game_sync.gd
extends Node

func send_answer(question_id: String, answer: bool, time: float):
    var data = {
        "type": "answer_question",
        "question_id": question_id,
        "answer": answer,
        "time_taken": time
    }
    MultiplayerManager.send_message(data)

func handle_player_answered(data: Dictionary):
    # Outro jogador respondeu
    var player_id = data.player_id
    var is_correct = data.is_correct
    var points = data.points
    
    # Atualiza UI do ranking
    update_player_score(player_id, points)
    
    # Mostra efeito visual
    if is_correct:
        show_player_success_effect(player_id)
    else:
        show_player_error_effect(player_id)

func handle_game_ended(data: Dictionary):
    var final_ranking = data.ranking
    # Mostra tela de resultados
    get_tree().change_scene_to_file("res://scenes/Results.tscn")
    ResultsScreen.set_ranking(final_ranking)`}
                  </pre>
                </div>

                {/* Script 4: Tratamento de Erros */}
                <div className="p-5 rounded-xl bg-gradient-to-br from-red-900/30 to-pink-900/30 border-2 border-red-500/30">
                  <h6 className="text-lg mb-3 text-red-400 flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    4. Reconexão e Erros
                  </h6>
                  <pre className="text-xs text-gray-300 bg-black/50 p-4 rounded-lg overflow-x-auto">
{`# connection_handler.gd
extends Node

var reconnect_attempts = 0
var max_reconnect_attempts = 3
var reconnect_delay = 2.0

func _on_disconnected_from_server():
    print("Disconnected from server")
    attempt_reconnect()

func attempt_reconnect():
    if reconnect_attempts >= max_reconnect_attempts:
        show_connection_error()
        return
    
    reconnect_attempts += 1
    print("Reconnecting... Attempt %d/%d" % [reconnect_attempts, max_reconnect_attempts])
    
    await get_tree().create_timer(reconnect_delay).timeout
    MultiplayerManager.connect_to_server()

func _on_connected_to_server():
    reconnect_attempts = 0
    print("Successfully reconnected!")
    # Tentar reentrar na sala se estava jogando
    if GameData.room_id:
        rejoin_room()

func show_connection_error():
    # Mostra popup de erro
    var error_popup = preload("res://ui/ErrorPopup.tscn").instantiate()
    error_popup.set_message("Falha ao conectar ao servidor")
    get_tree().root.add_child(error_popup)`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Estrutura Visual da Sala */}
            <div className="p-6 rounded-2xl bg-black/50 border-2 border-yellow-500/30">
              <h5 className="text-2xl mb-4 text-yellow-400">🎨 Interface da Sala de Batalha (Referência)</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h6 className="text-lg mb-3 text-cyan-400">Elementos da UI:</h6>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Título</strong>: "⚔️ Sala de Batalha ⚔️"</li>
                    <li>• <strong>Subtítulo</strong>: "Área: [nome] • Matérias: X"</li>
                    <li>• <strong>Status</strong>: "Procurando Heróis..." / "1/4 jogadores" / "0 confirmados"</li>
                    <li>• <strong>4 Slots de Jogadores</strong>: Avatar + Nome + Status (Aguardando/Pronto)</li>
                    <li>• <strong>Indicadores</strong>: Loading spinner ou ícone de confirmado (✓)</li>
                    <li>• <strong>Botão "Como funciona"</strong>: Expandir regras</li>
                    <li>• <strong>Regras</strong>: 4 bullets explicando o fluxo</li>
                  </ul>
                </div>
                <div>
                  <h6 className="text-lg mb-3 text-orange-400">Estados Visuais:</h6>
                  <div className="space-y-3">
                    <div className="p-3 rounded-lg bg-gray-900/50">
                      <div className="text-sm mb-1 text-blue-400">Estado 1: Procurando</div>
                      <div className="text-xs text-gray-400">Slots vazios com loading spinner</div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-900/50">
                      <div className="text-sm mb-1 text-purple-400">Estado 2: Enchendo</div>
                      <div className="text-xs text-gray-400">Jogadores entrando, 2/4, 3/4...</div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-900/50">
                      <div className="text-sm mb-1 text-orange-400">Estado 3: Sala Cheia</div>
                      <div className="text-xs text-gray-400">4/4 jogadores, aguardando confirmação</div>
                    </div>
                    <div className="p-3 rounded-lg bg-gray-900/50">
                      <div className="text-sm mb-1 text-green-400">Estado 4: Todos Prontos!</div>
                      <div className="text-xs text-gray-400">Countdown 3...2...1... COMEÇAR!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Links de Documentação Multiplayer */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center pt-6 border-t-2 border-red-500/30">
              <a
                href="/godot-scripts/multiplayer_manager.gd"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/30"
              >
                <Wifi className="w-5 h-5" />
                multiplayer_manager.gd
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/godot-scripts/battle_room_ui.gd"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/30"
              >
                <Users className="w-5 h-5" />
                battle_room_ui.gd
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href="/WEBSOCKET-MULTIPLAYER-DOCS.md"
                target="_blank"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 transition-all flex items-center gap-2 shadow-lg shadow-red-500/30"
              >
                <Book className="w-5 h-5" />
                Documentação WebSocket
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links de Documentação */}
          <div className="flex flex-wrap gap-4 justify-center pt-4 border-t border-gray-700">
            <a
              href="/INTEGRACAO-GODOT4-GAME.md"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center gap-2 shadow-lg"
            >
              <Book className="w-5 h-5" />
              Documentação Completa
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/godot-scripts/README-GODOT-SCRIPTS.md"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 transition-all flex items-center gap-2 shadow-lg"
            >
              <Gamepad2 className="w-5 h-5" />
              Scripts Godot 4
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/data/GUIA-RAPIDO-ADICIONAR-QUESTOES.md"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all flex items-center gap-2 shadow-lg"
            >
              <Download className="w-5 h-5" />
              Guia de Questões
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href="/README-BANCO-QUESTOES.md"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 transition-all flex items-center gap-2 shadow-lg"
            >
              <Code className="w-5 h-5" />
              README Geral
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Status do Banco */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700 text-center">
            <h5 className="text-xl mb-4">📊 Status do Banco de Questões</h5>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <div className="text-3xl text-blue-400 mb-1">50</div>
                <div className="text-xs text-gray-400">Questões Prontas</div>
              </div>
              <div>
                <div className="text-3xl text-yellow-400 mb-1">800</div>
                <div className="text-xs text-gray-400">Questões Planejadas</div>
              </div>
              <div>
                <div className="text-3xl text-green-400 mb-1">17</div>
                <div className="text-xs text-gray-400">Matérias Totais</div>
              </div>
              <div>
                <div className="text-3xl text-purple-400 mb-1">4</div>
                <div className="text-xs text-gray-400">Áreas Temáticas</div>
              </div>
            </div>
            <div className="mt-6">
              <div className="w-full h-4 rounded-full bg-gray-700 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-600 to-blue-600" style={{ width: '5.9%' }}></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">5.9% completo (50/850 questões)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}