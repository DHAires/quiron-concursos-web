import { useState, useEffect, useCallback } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

const API_URL = `https://${projectId}.supabase.co/functions/v1/make-server-50734795`;

export interface MultiplayerRoom {
  id: string;
  area: string;
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

export interface Player {
  id: string;
  name: string;
  avatar?: string;
  energy: number;
  ready: boolean;
  score?: number;
  position?: number;
}

export interface GameState {
  roomId: string;
  currentQuestion: number;
  timeRemaining: number;
  playerAnswers: Record<string, any>;
  leaderboard: LeaderboardEntry[];
}

export interface LeaderboardEntry {
  playerId: string;
  playerName: string;
  score: number;
  correctAnswers: number;
  position: number;
}

export function useMultiplayer() {
  const [currentRoom, setCurrentRoom] = useState<MultiplayerRoom | null>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pollingInterval, setPollingInterval] = useState<NodeJS.Timeout | null>(null);

  // ===========================
  // MATCHMAKING
  // ===========================

  const findMatch = useCallback(async (
    userId: string,
    userName: string,
    area: string,
    subjects: string[],
    userEnergy: number
  ) => {
    setLoading(true);
    setError(null);

    try {
      console.log('🎮 [MULTIPLAYER] Finding match...', { userId, area, subjects });

      const response = await fetch(`${API_URL}/multiplayer/matchmaking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          userId,
          userName,
          area,
          subjects,
          userEnergy
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao buscar partida');
      }

      console.log('✅ [MULTIPLAYER] Match found:', data.room);
      setCurrentRoom(data.room);
      
      // Start polling room status
      startRoomPolling(data.room.id);

      return data.room;
    } catch (err: any) {
      console.error('❌ [MULTIPLAYER] Matchmaking error:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ===========================
  // ROOM OPERATIONS
  // ===========================

  const getRoomInfo = useCallback(async (roomId: string) => {
    try {
      const response = await fetch(`${API_URL}/multiplayer/room/${roomId}`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao buscar informações da sala');
      }

      setCurrentRoom(data.room);
      return data.room;
    } catch (err: any) {
      console.error('❌ [MULTIPLAYER] Room info error:', err);
      setError(err.message);
      throw err;
    }
  }, []);

  const markAsReady = useCallback(async (roomId: string, userId: string) => {
    setLoading(true);
    setError(null);

    try {
      console.log('✅ [MULTIPLAYER] Marking as ready...', { roomId, userId });

      const response = await fetch(`${API_URL}/multiplayer/room/${roomId}/ready`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ userId })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao marcar como pronto');
      }

      console.log('✅ [MULTIPLAYER] Marked as ready:', data);
      setCurrentRoom(data.room);

      return data;
    } catch (err: any) {
      console.error('❌ [MULTIPLAYER] Ready error:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const startGame = useCallback(async (
    roomId: string,
    userId: string,
    questionIds: string[]
  ) => {
    setLoading(true);
    setError(null);

    try {
      console.log('🚀 [MULTIPLAYER] Starting game...', { roomId, userId });

      const response = await fetch(`${API_URL}/multiplayer/room/${roomId}/start`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ userId, questionIds })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao iniciar partida');
      }

      console.log('🎮 [MULTIPLAYER] Game started:', data);
      setCurrentRoom(data.room);
      setGameState(data.gameState);

      // Stop room polling, start game state polling
      stopRoomPolling();
      startGameStatePolling(roomId);

      return data;
    } catch (err: any) {
      console.error('❌ [MULTIPLAYER] Start game error:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const leaveRoom = useCallback(async (roomId: string, userId: string) => {
    setLoading(true);
    setError(null);

    try {
      console.log('🚪 [MULTIPLAYER] Leaving room...', { roomId, userId });

      const response = await fetch(`${API_URL}/multiplayer/room/${roomId}/leave`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ userId })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao sair da sala');
      }

      console.log('✅ [MULTIPLAYER] Left room');
      setCurrentRoom(null);
      stopRoomPolling();

      return data;
    } catch (err: any) {
      console.error('❌ [MULTIPLAYER] Leave room error:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ===========================
  // GAMEPLAY
  // ===========================

  const submitAnswer = useCallback(async (
    roomId: string,
    userId: string,
    questionId: string,
    answer: string,
    timeSpent: number
  ) => {
    try {
      console.log('📝 [MULTIPLAYER] Submitting answer...', {
        roomId,
        questionId,
        answer
      });

      const response = await fetch(`${API_URL}/multiplayer/game/${roomId}/answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({
          userId,
          questionId,
          answer,
          timeSpent
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao enviar resposta');
      }

      console.log('✅ [MULTIPLAYER] Answer submitted:', data);

      return data;
    } catch (err: any) {
      console.error('❌ [MULTIPLAYER] Submit answer error:', err);
      throw err;
    }
  }, []);

  const getGameState = useCallback(async (roomId: string) => {
    try {
      const response = await fetch(`${API_URL}/multiplayer/game/${roomId}/state`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao buscar estado do jogo');
      }

      setGameState(data.gameState);
      return data.gameState;
    } catch (err: any) {
      console.error('❌ [MULTIPLAYER] Game state error:', err);
      throw err;
    }
  }, []);

  const finishGame = useCallback(async (roomId: string) => {
    setLoading(true);
    setError(null);

    try {
      console.log('🏁 [MULTIPLAYER] Finishing game...', { roomId });

      const response = await fetch(`${API_URL}/multiplayer/game/${roomId}/finish`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        }
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao finalizar partida');
      }

      console.log('✅ [MULTIPLAYER] Game finished:', data);
      stopGameStatePolling();

      return data.results;
    } catch (err: any) {
      console.error('❌ [MULTIPLAYER] Finish game error:', err);
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // ===========================
  // POLLING (REAL-TIME SIMULATION)
  // ===========================

  const startRoomPolling = useCallback((roomId: string) => {
    console.log('🔄 [MULTIPLAYER] Starting room polling...');

    const interval = setInterval(async () => {
      try {
        await getRoomInfo(roomId);
      } catch (err) {
        console.error('❌ [MULTIPLAYER] Polling error:', err);
      }
    }, 2000); // Poll every 2 seconds

    setPollingInterval(interval);
  }, [getRoomInfo]);

  const stopRoomPolling = useCallback(() => {
    if (pollingInterval) {
      console.log('⏹️ [MULTIPLAYER] Stopping room polling');
      clearInterval(pollingInterval);
      setPollingInterval(null);
    }
  }, [pollingInterval]);

  const startGameStatePolling = useCallback((roomId: string) => {
    console.log('🔄 [MULTIPLAYER] Starting game state polling...');

    const interval = setInterval(async () => {
      try {
        await getGameState(roomId);
      } catch (err) {
        console.error('❌ [MULTIPLAYER] Game state polling error:', err);
      }
    }, 1000); // Poll every 1 second during game

    setPollingInterval(interval);
  }, [getGameState]);

  const stopGameStatePolling = useCallback(() => {
    if (pollingInterval) {
      console.log('⏹️ [MULTIPLAYER] Stopping game state polling');
      clearInterval(pollingInterval);
      setPollingInterval(null);
    }
  }, [pollingInterval]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopRoomPolling();
      stopGameStatePolling();
    };
  }, [stopRoomPolling, stopGameStatePolling]);

  return {
    // State
    currentRoom,
    gameState,
    loading,
    error,

    // Matchmaking
    findMatch,

    // Room operations
    getRoomInfo,
    markAsReady,
    startGame,
    leaveRoom,

    // Gameplay
    submitAnswer,
    getGameState,
    finishGame,

    // Utils
    clearError: () => setError(null)
  };
}
