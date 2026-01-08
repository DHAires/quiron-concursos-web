import { Hono } from "npm:hono";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const multiplayerApp = new Hono();

// Supabase client (service role for server operations)
const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

// ===========================
// INTERFACES
// ===========================

interface MultiplayerRoom {
  id: string;
  area: string; // 'juridica' | 'policial' | 'gerais' | 'fiscal'
  subjects: string[];
  hostId: string;
  players: Player[];
  status: 'waiting' | 'starting' | 'playing' | 'finished';
  maxPlayers: number;
  questionIds: string[];
  createdAt: number;
  startedAt?: number;
  finishedAt?: number;
}

interface Player {
  id: string;
  name: string;
  avatar?: string;
  energy: number;
  ready: boolean;
  score?: number;
  position?: number;
}

interface GameState {
  roomId: string;
  currentQuestion: number;
  timeRemaining: number;
  playerAnswers: Record<string, PlayerAnswer>;
  leaderboard: LeaderboardEntry[];
}

interface PlayerAnswer {
  playerId: string;
  questionId: string;
  answer: string;
  correct: boolean;
  timeSpent: number;
  score: number;
}

interface LeaderboardEntry {
  playerId: string;
  playerName: string;
  score: number;
  correctAnswers: number;
  position: number;
}

// ===========================
// MATCHMAKING
// ===========================

/**
 * POST /make-server-50734795/multiplayer/matchmaking
 * Encontra ou cria uma sala para o jogador
 */
multiplayerApp.post("/make-server-50734795/multiplayer/matchmaking", async (c) => {
  try {
    const body = await c.req.json();
    const { userId, userName, area, subjects, userEnergy } = body;

    if (!userId || !userName || !area) {
      return c.json({ error: "userId, userName e area são obrigatórios" }, 400);
    }

    console.log(`🎮 [MATCHMAKING] User ${userName} buscando sala para área ${area}`);

    // Buscar salas disponíveis na área
    const availableRooms = await kv.getByPrefix(`multiplayer:room:${area}:`);
    
    let roomToJoin: MultiplayerRoom | null = null;

    // Procurar sala com vagas (APENAS por área, independente das matérias)
    for (const roomData of availableRooms) {
      const room = roomData as MultiplayerRoom;
      if (
        room.status === 'waiting' && 
        room.players.length < room.maxPlayers
        // REMOVIDO: verificação de matérias iguais
        // Agora aceita qualquer combinação de matérias da mesma área!
      ) {
        roomToJoin = room;
        console.log(`🎯 [MATCHMAKING] Sala encontrada: ${room.id} (${room.players.length}/${room.maxPlayers} jogadores)`);
        break;
      }
    }

    // Se não encontrou sala, criar nova
    if (!roomToJoin) {
      const roomId = `room_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      roomToJoin = {
        id: roomId,
        area,
        subjects: subjects || [],
        hostId: userId,
        players: [],
        status: 'waiting',
        maxPlayers: 4,
        questionIds: [],
        createdAt: Date.now()
      };

      await kv.set(`multiplayer:room:${area}:${roomId}`, roomToJoin);
      console.log(`🆕 [MATCHMAKING] Nova sala criada: ${roomId}`);
    }

    // Adicionar jogador à sala
    const player: Player = {
      id: userId,
      name: userName,
      energy: userEnergy || 10,
      ready: false
    };

    // Verificar se jogador já está na sala
    const existingPlayerIndex = roomToJoin.players.findIndex(p => p.id === userId);
    if (existingPlayerIndex === -1) {
      roomToJoin.players.push(player);
    } else {
      roomToJoin.players[existingPlayerIndex] = player;
    }

    // Salvar sala atualizada
    await kv.set(`multiplayer:room:${area}:${roomToJoin.id}`, roomToJoin);

    console.log(`✅ [MATCHMAKING] Jogador ${userName} entrou na sala ${roomToJoin.id} (${roomToJoin.players.length}/${roomToJoin.maxPlayers})`);

    return c.json({
      success: true,
      room: roomToJoin,
      message: roomToJoin.players.length === roomToJoin.maxPlayers 
        ? "Sala cheia! Aguardando início..."
        : `Aguardando jogadores... (${roomToJoin.players.length}/${roomToJoin.maxPlayers})`
    });

  } catch (error: any) {
    console.error("❌ [MATCHMAKING] Error:", error);
    return c.json({ error: "Erro no matchmaking: " + error.message }, 500);
  }
});

// ===========================
// SALA - OPERAÇÕES
// ===========================

/**
 * GET /make-server-50734795/multiplayer/room/:roomId
 * Obter informações da sala
 */
multiplayerApp.get("/make-server-50734795/multiplayer/room/:roomId", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    
    // Procurar sala em todas as áreas
    const allRooms = await kv.getByPrefix("multiplayer:room:");
    const room = allRooms.find((r: any) => r.id === roomId);

    if (!room) {
      return c.json({ error: "Sala não encontrada" }, 404);
    }

    return c.json({ success: true, room });

  } catch (error: any) {
    console.error("❌ [ROOM] Error:", error);
    return c.json({ error: "Erro ao buscar sala: " + error.message }, 500);
  }
});

/**
 * POST /make-server-50734795/multiplayer/room/:roomId/ready
 * Marcar jogador como pronto
 */
multiplayerApp.post("/make-server-50734795/multiplayer/room/:roomId/ready", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const { userId } = await c.req.json();

    if (!userId) {
      return c.json({ error: "userId é obrigatório" }, 400);
    }

    // Buscar sala
    const allRooms = await kv.getByPrefix("multiplayer:room:");
    const room = allRooms.find((r: any) => r.id === roomId) as MultiplayerRoom;

    if (!room) {
      return c.json({ error: "Sala não encontrada" }, 404);
    }

    // Marcar jogador como pronto
    const player = room.players.find(p => p.id === userId);
    if (!player) {
      return c.json({ error: "Jogador não está na sala" }, 400);
    }

    player.ready = true;

    // Verificar se todos estão prontos
    const allReady = room.players.length === room.maxPlayers && 
                     room.players.every(p => p.ready);

    if (allReady) {
      room.status = 'starting';
      console.log(`🚀 [ROOM] Sala ${roomId} iniciando! Todos prontos.`);
    }

    // Salvar sala atualizada
    await kv.set(`multiplayer:room:${room.area}:${roomId}`, room);

    return c.json({ 
      success: true, 
      room,
      allReady,
      message: allReady ? "Todos prontos! Iniciando partida..." : "Aguardando outros jogadores..."
    });

  } catch (error: any) {
    console.error("❌ [READY] Error:", error);
    return c.json({ error: "Erro ao marcar pronto: " + error.message }, 500);
  }
});

/**
 * POST /make-server-50734795/multiplayer/room/:roomId/start
 * Iniciar partida (apenas host)
 */
multiplayerApp.post("/make-server-50734795/multiplayer/room/:roomId/start", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const { userId, questionIds } = await c.req.json();

    if (!userId) {
      return c.json({ error: "userId é obrigatório" }, 400);
    }

    // Buscar sala
    const allRooms = await kv.getByPrefix("multiplayer:room:");
    const room = allRooms.find((r: any) => r.id === roomId) as MultiplayerRoom;

    if (!room) {
      return c.json({ error: "Sala não encontrada" }, 404);
    }

    // Verificar se é o host
    if (room.hostId !== userId) {
      return c.json({ error: "Apenas o host pode iniciar a partida" }, 403);
    }

    // Verificar se todos estão prontos
    if (!room.players.every(p => p.ready)) {
      return c.json({ error: "Nem todos os jogadores estão prontos" }, 400);
    }

    // Iniciar partida
    room.status = 'playing';
    room.startedAt = Date.now();
    room.questionIds = questionIds || [];

    // Criar estado inicial do jogo
    const gameState: GameState = {
      roomId,
      currentQuestion: 0,
      timeRemaining: 30,
      playerAnswers: {},
      leaderboard: room.players.map((p, index) => ({
        playerId: p.id,
        playerName: p.name,
        score: 0,
        correctAnswers: 0,
        position: index + 1
      }))
    };

    await kv.set(`multiplayer:room:${room.area}:${roomId}`, room);
    await kv.set(`multiplayer:game:${roomId}`, gameState);

    console.log(`🎮 [START] Partida ${roomId} iniciada com ${room.players.length} jogadores`);

    return c.json({
      success: true,
      room,
      gameState,
      message: "Partida iniciada!"
    });

  } catch (error: any) {
    console.error("❌ [START] Error:", error);
    return c.json({ error: "Erro ao iniciar partida: " + error.message }, 500);
  }
});

/**
 * POST /make-server-50734795/multiplayer/room/:roomId/leave
 * Sair da sala
 */
multiplayerApp.post("/make-server-50734795/multiplayer/room/:roomId/leave", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const { userId } = await c.req.json();

    if (!userId) {
      return c.json({ error: "userId é obrigatório" }, 400);
    }

    // Buscar sala
    const allRooms = await kv.getByPrefix("multiplayer:room:");
    const room = allRooms.find((r: any) => r.id === roomId) as MultiplayerRoom;

    if (!room) {
      return c.json({ error: "Sala não encontrada" }, 404);
    }

    // Remover jogador
    room.players = room.players.filter(p => p.id !== userId);

    // Se sala ficou vazia, deletar
    if (room.players.length === 0) {
      await kv.del(`multiplayer:room:${room.area}:${roomId}`);
      console.log(`🗑️ [LEAVE] Sala ${roomId} deletada (vazia)`);
      return c.json({ success: true, message: "Sala deletada" });
    }

    // Se era o host, escolher novo host
    if (room.hostId === userId && room.players.length > 0) {
      room.hostId = room.players[0].id;
      console.log(`👑 [LEAVE] Novo host da sala ${roomId}: ${room.players[0].name}`);
    }

    await kv.set(`multiplayer:room:${room.area}:${roomId}`, room);

    return c.json({ 
      success: true, 
      room,
      message: "Você saiu da sala"
    });

  } catch (error: any) {
    console.error("❌ [LEAVE] Error:", error);
    return c.json({ error: "Erro ao sair da sala: " + error.message }, 500);
  }
});

// ===========================
// GAMEPLAY - RESPOSTAS
// ===========================

/**
 * POST /make-server-50734795/multiplayer/game/:roomId/answer
 * Enviar resposta de uma questão
 */
multiplayerApp.post("/make-server-50734795/multiplayer/game/:roomId/answer", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const { userId, questionId, answer, timeSpent } = await c.req.json();

    if (!userId || !questionId || !answer) {
      return c.json({ error: "userId, questionId e answer são obrigatórios" }, 400);
    }

    // Buscar estado do jogo
    const gameState = await kv.get(`multiplayer:game:${roomId}`) as GameState;

    if (!gameState) {
      return c.json({ error: "Jogo não encontrado" }, 404);
    }

    // TODO: Validar resposta correta (buscar questão no banco)
    const isCorrect = true; // Placeholder
    const pointsEarned = isCorrect ? (100 - timeSpent) : 0; // Pontos baseados em tempo

    // Registrar resposta
    const playerAnswer: PlayerAnswer = {
      playerId: userId,
      questionId,
      answer,
      correct: isCorrect,
      timeSpent,
      score: pointsEarned
    };

    gameState.playerAnswers[`${userId}_${questionId}`] = playerAnswer;

    // Atualizar leaderboard
    const playerEntry = gameState.leaderboard.find(p => p.playerId === userId);
    if (playerEntry) {
      playerEntry.score += pointsEarned;
      if (isCorrect) playerEntry.correctAnswers++;
    }

    // Reordenar leaderboard
    gameState.leaderboard.sort((a, b) => b.score - a.score);
    gameState.leaderboard.forEach((entry, index) => {
      entry.position = index + 1;
    });

    // Salvar estado atualizado
    await kv.set(`multiplayer:game:${roomId}`, gameState);

    console.log(`📝 [ANSWER] Player ${userId} respondeu questão ${questionId} na sala ${roomId}`);

    return c.json({
      success: true,
      correct: isCorrect,
      points: pointsEarned,
      leaderboard: gameState.leaderboard
    });

  } catch (error: any) {
    console.error("❌ [ANSWER] Error:", error);
    return c.json({ error: "Erro ao processar resposta: " + error.message }, 500);
  }
});

/**
 * GET /make-server-50734795/multiplayer/game/:roomId/state
 * Obter estado atual do jogo
 */
multiplayerApp.get("/make-server-50734795/multiplayer/game/:roomId/state", async (c) => {
  try {
    const roomId = c.req.param("roomId");

    const gameState = await kv.get(`multiplayer:game:${roomId}`);

    if (!gameState) {
      return c.json({ error: "Jogo não encontrado" }, 404);
    }

    return c.json({ success: true, gameState });

  } catch (error: any) {
    console.error("❌ [STATE] Error:", error);
    return c.json({ error: "Erro ao buscar estado: " + error.message }, 500);
  }
});

/**
 * POST /make-server-50734795/multiplayer/game/:roomId/finish
 * Finalizar partida e calcular resultados
 */
multiplayerApp.post("/make-server-50734795/multiplayer/game/:roomId/finish", async (c) => {
  try {
    const roomId = c.req.param("roomId");

    // Buscar sala e estado
    const allRooms = await kv.getByPrefix("multiplayer:room:");
    const room = allRooms.find((r: any) => r.id === roomId) as MultiplayerRoom;
    const gameState = await kv.get(`multiplayer:game:${roomId}`) as GameState;

    if (!room || !gameState) {
      return c.json({ error: "Sala ou jogo não encontrado" }, 404);
    }

    // Marcar como finalizado
    room.status = 'finished';
    room.finishedAt = Date.now();

    // Atualizar posições dos jogadores na sala
    room.players.forEach(player => {
      const entry = gameState.leaderboard.find(e => e.playerId === player.id);
      if (entry) {
        player.score = entry.score;
        player.position = entry.position;
      }
    });

    // Salvar resultados finais
    await kv.set(`multiplayer:room:${room.area}:${roomId}`, room);
    await kv.set(`multiplayer:results:${roomId}`, {
      roomId,
      area: room.area,
      subjects: room.subjects,
      players: room.players,
      leaderboard: gameState.leaderboard,
      duration: room.finishedAt - (room.startedAt || 0),
      finishedAt: room.finishedAt
    });

    // Limpar estado do jogo ativo
    await kv.del(`multiplayer:game:${roomId}`);

    console.log(`🏁 [FINISH] Partida ${roomId} finalizada`);

    return c.json({
      success: true,
      results: {
        leaderboard: gameState.leaderboard,
        players: room.players,
        duration: room.finishedAt - (room.startedAt || 0)
      }
    });

  } catch (error: any) {
    console.error("❌ [FINISH] Error:", error);
    return c.json({ error: "Erro ao finalizar partida: " + error.message }, 500);
  }
});

// ===========================
// LISTAGEM
// ===========================

/**
 * GET /make-server-50734795/multiplayer/rooms
 * Listar todas as salas ativas
 */
multiplayerApp.get("/make-server-50734795/multiplayer/rooms", async (c) => {
  try {
    const { area } = c.req.query();

    const prefix = area ? `multiplayer:room:${area}:` : "multiplayer:room:";
    const rooms = await kv.getByPrefix(prefix);

    // Filtrar apenas salas ativas
    const activeRooms = rooms.filter((r: any) => 
      r.status === 'waiting' || r.status === 'starting' || r.status === 'playing'
    );

    return c.json({
      success: true,
      count: activeRooms.length,
      rooms: activeRooms
    });

  } catch (error: any) {
    console.error("❌ [ROOMS] Error:", error);
    return c.json({ error: "Erro ao listar salas: " + error.message }, 500);
  }
});

/**
 * GET /make-server-50734795/multiplayer/results/:roomId
 * Obter resultados de uma partida finalizada
 */
multiplayerApp.get("/make-server-50734795/multiplayer/results/:roomId", async (c) => {
  try {
    const roomId = c.req.param("roomId");

    const results = await kv.get(`multiplayer:results:${roomId}`);

    if (!results) {
      return c.json({ error: "Resultados não encontrados" }, 404);
    }

    return c.json({ success: true, results });

  } catch (error: any) {
    console.error("❌ [RESULTS] Error:", error);
    return c.json({ error: "Erro ao buscar resultados: " + error.message }, 500);
  }
});

// ===========================
// LIMPEZA AUTOMÁTICA
// ===========================

/**
 * POST /make-server-50734795/multiplayer/cleanup
 * Limpar salas antigas (rodar periodicamente)
 */
multiplayerApp.post("/make-server-50734795/multiplayer/cleanup", async (c) => {
  try {
    const allRooms = await kv.getByPrefix("multiplayer:room:");
    const now = Date.now();
    const maxAge = 30 * 60 * 1000; // 30 minutos
    
    let cleaned = 0;

    for (const room of allRooms) {
      const r = room as MultiplayerRoom;
      
      // Deletar salas antigas em waiting
      if (r.status === 'waiting' && (now - r.createdAt) > maxAge) {
        await kv.del(`multiplayer:room:${r.area}:${r.id}`);
        cleaned++;
      }
      
      // Deletar salas finalizadas antigas
      if (r.status === 'finished' && r.finishedAt && (now - r.finishedAt) > maxAge) {
        await kv.del(`multiplayer:room:${r.area}:${r.id}`);
        cleaned++;
      }
    }

    console.log(`🧹 [CLEANUP] Limpeza concluída: ${cleaned} salas removidas`);

    return c.json({
      success: true,
      cleaned,
      message: `${cleaned} salas antigas removidas`
    });

  } catch (error: any) {
    console.error("❌ [CLEANUP] Error:", error);
    return c.json({ error: "Erro na limpeza: " + error.message }, 500);
  }
});

export default multiplayerApp;