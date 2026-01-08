import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

// Código admin para operações sensíveis
const ADMIN_CODE = 'QUIRON_DEV_2024';

export interface GameQuestion {
  id: string;
  area: 'juridica' | 'policial' | 'fiscal-bancaria' | 'conhecimentos-gerais';
  subject: string;
  question: string;
  correctAnswer: boolean;
  explanation: string;
  difficulty: 'facil' | 'medio' | 'dificil';
}

interface UseGameQuestionsOptions {
  area?: string;
  subject?: string;
  count?: number;
  difficulty?: string;
  autoFetch?: boolean;
  isAdmin?: boolean; // Flag para operações admin
}

export function useGameQuestions(options: UseGameQuestionsOptions = {}) {
  const { area, subject, count = 10, difficulty, autoFetch = false, isAdmin = false } = options;

  const [questions, setQuestions] = useState<GameQuestion[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Headers com código admin se necessário
  const getHeaders = () => {
    const headers: any = {
      'Authorization': `Bearer ${publicAnonKey}`,
      'Content-Type': 'application/json'
    };
    
    if (isAdmin) {
      headers['X-Admin-Code'] = ADMIN_CODE;
    }
    
    return headers;
  };

  const fetchQuestions = async () => {
    setLoading(true);
    setError(null);

    try {
      // Construir URL com query params
      const params = new URLSearchParams();
      if (area) params.append('area', area);
      if (subject) params.append('subject', subject);
      if (count) params.append('count', count.toString());
      if (difficulty) params.append('difficulty', difficulty);

      const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions?${params.toString()}`;

      console.log('🎮 Fetching questions from:', url);

      const response = await fetch(url, {
        method: 'GET',
        headers: getHeaders()
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      }

      const data = await response.json();

      console.log('✅ Questions fetched:', data.count);

      setQuestions(data.questions || []);
      return data.questions || [];

    } catch (err: any) {
      console.error('❌ Error fetching questions:', err);
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  // Auto-fetch on mount if enabled
  useEffect(() => {
    if (autoFetch) {
      fetchQuestions();
    }
  }, [area, subject, count, difficulty]);

  return {
    questions,
    loading,
    error,
    fetchQuestions,
    refetch: fetchQuestions
  };
}

// Hook para buscar questões de uma partida completa (30 questões divididas em 3 fases)
export function useGameMatch(area: string) {
  const [match, setMatch] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchMatch = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions/match?area=${area}`;

      console.log('🎯 Fetching match for area:', area);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      }

      const data = await response.json();

      console.log('✅ Match created:', data.match);

      setMatch(data.match);
      return data.match;

    } catch (err: any) {
      console.error('❌ Error fetching match:', err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    match,
    loading,
    error,
    fetchMatch
  };
}

// Hook para salvar resultado de partida
export function useSaveGameResult() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const saveResult = async (resultData: {
    userId: string;
    area: string;
    score: number;
    correctAnswers: number;
    totalQuestions: number;
    timeSpent: number;
    difficulty: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/result`;

      console.log('💾 Saving game result...');

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resultData)
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      }

      const data = await response.json();

      console.log('✅ Result saved:', data.resultId);

      return data;

    } catch (err: any) {
      console.error('❌ Error saving result:', err);
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    saveResult,
    loading,
    error
  };
}

// Hook para buscar histórico do usuário
export function useGameHistory(userId: string, limit: number = 10) {
  const [history, setHistory] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchHistory = async () => {
    if (!userId) return;

    setLoading(true);
    setError(null);

    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/history/${userId}?limit=${limit}`;

      console.log('📜 Fetching game history for user:', userId);

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${await response.text()}`);
      }

      const data = await response.json();

      console.log('✅ History fetched:', data.history.length);

      setHistory(data.history || []);
      return data.history || [];

    } catch (err: any) {
      console.error('❌ Error fetching history:', err);
      setError(err.message);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [userId, limit]);

  return {
    history,
    loading,
    error,
    refetch: fetchHistory
  };
}

// ==== FUNÇÕES ADMIN - Requerem código secreto ====

// Função para executar seed de questões (ADMIN ONLY)
export async function seedGameQuestions() {
  try {
    // Importar questões (você pode criar um arquivo com as 40 questões)
    const seedData = await import('../utils/seedGameQuestions');
    const questions = seedData.default || seedData.questions;

    const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/seed`;

    console.log('🌱 [ADMIN] Executing seed...');

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'X-Admin-Code': ADMIN_CODE,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ questions })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    console.log('✅ [ADMIN] Seed completed:', data);

    return data;

  } catch (err: any) {
    console.error('❌ [ADMIN] Seed error:', err);
    throw err;
  }
}

// Função para deletar todas as questões (ADMIN ONLY - DANGER!)
export async function deleteAllGameQuestions() {
  try {
    const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions/all`;

    console.log('🗑️ [ADMIN] Deleting all questions...');

    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'X-Admin-Code': ADMIN_CODE,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    console.log('✅ [ADMIN] All questions deleted:', data);

    return data;

  } catch (err: any) {
    console.error('❌ [ADMIN] Delete error:', err);
    throw err;
  }
}