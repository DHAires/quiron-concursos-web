import { Hono } from "npm:hono";
import { createClient } from "npm:@supabase/supabase-js@2";
import * as kv from "./kv_store.tsx";

const gameApp = new Hono();

// ============= GAME QUESTÕES - SUPABASE BACKEND =============
// Sistema completo de questões para o Game Épico Quiron

// CÓDIGO SECRETO ADMIN - Apenas desenvolvedores autorizados
const ADMIN_SECRET_CODE = "QUIRON_DEV_2024";

// Middleware de validação admin
const requireAdminCode = async (c: any, next: any) => {
  const adminCode = c.req.header('X-Admin-Code');
  
  if (adminCode !== ADMIN_SECRET_CODE) {
    console.warn(`⚠️ [ADMIN AUTH] Tentativa de acesso não autorizado - Código: ${adminCode || 'NENHUM'}`);
    return c.json({ 
      error: 'Unauthorized - Admin code required',
      message: 'Esta operação requer código de desenvolvedor. Use Ctrl+Shift+A no frontend.'
    }, 401);
  }
  
  console.log('✅ [ADMIN AUTH] Código admin validado com sucesso');
  await next();
};

// Tipo de questão do game
interface GameQuestion {
  id: string;
  area: 'juridica' | 'policial' | 'fiscal-bancaria' | 'conhecimentos-gerais';
  subject: string;
  question: string;
  correctAnswer: boolean;
  explanation: string;
  difficulty: 'facil' | 'medio' | 'dificil';
}

// ============= SEED DE QUESTÕES =============
// Endpoint para popular o banco de dados com questões
gameApp.post("/make-server-50734795/game/seed", requireAdminCode, async (c) => {
  try {
    const body = await c.req.json();
    const { questions, area } = body;

    if (!questions || !Array.isArray(questions)) {
      return c.json({ error: "Questions array is required" }, 400);
    }

    console.log(`🌱 [GAME SEED] Seeding ${questions.length} questions for area: ${area || 'all'}`);

    let savedCount = 0;
    const errors = [];

    for (const question of questions) {
      try {
        const questionKey = `game_question:${question.id}`;
        await kv.set(questionKey, question);
        
        // Também adicionar ao índice da área
        const areaIndexKey = `game_questions_index:${question.area}`;
        const existingIndex = await kv.get(areaIndexKey) || [];
        if (!existingIndex.includes(question.id)) {
          existingIndex.push(question.id);
          await kv.set(areaIndexKey, existingIndex);
        }

        // Índice por matéria
        const subjectKey = `game_questions_subject:${question.area}:${question.subject}`;
        const subjectIndex = await kv.get(subjectKey) || [];
        if (!subjectIndex.includes(question.id)) {
          subjectIndex.push(question.id);
          await kv.set(subjectKey, subjectIndex);
        }

        savedCount++;
      } catch (err) {
        errors.push({ id: question.id, error: err.message });
      }
    }

    console.log(`✅ [GAME SEED] Saved ${savedCount}/${questions.length} questions`);

    return c.json({
      success: true,
      saved: savedCount,
      total: questions.length,
      errors: errors.length > 0 ? errors : undefined
    });

  } catch (error) {
    console.error("❌ [GAME SEED ERROR]:", error);
    return c.json({ 
      error: "Failed to seed questions", 
      details: error.message 
    }, 500);
  }
});

// ============= BUSCAR QUESTÕES PARA JOGO =============
// GET /make-server-50734795/game/questions?area=juridica&count=10&difficulty=medio
gameApp.get("/make-server-50734795/game/questions", async (c) => {
  try {
    const area = c.req.query('area'); // juridica, policial, fiscal-bancaria, conhecimentos-gerais
    const count = parseInt(c.req.query('count') || '10');
    const difficulty = c.req.query('difficulty'); // facil, medio, dificil
    const subject = c.req.query('subject'); // matéria específica

    console.log(`🎮 [GAME QUESTIONS] Fetching questions - area: ${area}, count: ${count}, difficulty: ${difficulty}, subject: ${subject}`);

    let questionIds = [];

    if (subject && area) {
      // Buscar por matéria específica
      const subjectKey = `game_questions_subject:${area}:${subject}`;
      questionIds = await kv.get(subjectKey) || [];
      console.log(`📚 Found ${questionIds.length} questions for subject ${subject}`);
    } else if (area) {
      // Buscar por área
      const areaIndexKey = `game_questions_index:${area}`;
      questionIds = await kv.get(areaIndexKey) || [];
      console.log(`📦 Found ${questionIds.length} questions for area ${area}`);
    } else {
      // Buscar todas as áreas
      const areas = ['juridica', 'policial', 'fiscal-bancaria', 'conhecimentos-gerais'];
      for (const a of areas) {
        const areaIds = await kv.get(`game_questions_index:${a}`) || [];
        questionIds.push(...areaIds);
      }
      console.log(`🌐 Found ${questionIds.length} total questions across all areas`);
    }

    if (questionIds.length === 0) {
      return c.json({ 
        success: true,
        questions: [],
        message: "No questions found. Please seed the database first.",
        count: 0
      });
    }

    // Buscar as questões completas
    const allQuestions: GameQuestion[] = [];
    for (const id of questionIds) {
      const question = await kv.get(`game_question:${id}`);
      if (question) {
        allQuestions.push(question);
      }
    }

    // Filtrar por dificuldade se especificado
    let filteredQuestions = allQuestions;
    if (difficulty) {
      filteredQuestions = allQuestions.filter(q => q.difficulty === difficulty);
      console.log(`🎯 Filtered to ${filteredQuestions.length} questions with difficulty: ${difficulty}`);
    }

    // Embaralhar e selecionar quantidade solicitada
    const shuffled = filteredQuestions.sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);

    console.log(`✅ [GAME QUESTIONS] Returning ${selected.length} questions`);

    return c.json({
      success: true,
      questions: selected,
      count: selected.length,
      totalAvailable: filteredQuestions.length
    });

  } catch (error) {
    console.error("❌ [GAME QUESTIONS ERROR]:", error);
    return c.json({ 
      error: "Failed to fetch questions", 
      details: error.message 
    }, 500);
  }
});

// ============= BUSCAR QUESTÕES PARA PARTIDA COMPLETA =============
// GET /make-server-50734795/game/questions/match?area=juridica
// Retorna 30 questões (3 fases de 10 questões)
gameApp.get("/make-server-50734795/game/questions/match", async (c) => {
  try {
    const area = c.req.query('area');
    
    if (!area) {
      return c.json({ error: "Area parameter is required" }, 400);
    }

    console.log(`🎯 [GAME MATCH] Creating match for area: ${area}`);

    const areaIndexKey = `game_questions_index:${area}`;
    const questionIds = await kv.get(areaIndexKey) || [];

    if (questionIds.length < 30) {
      return c.json({ 
        error: `Not enough questions for a match. Found: ${questionIds.length}, need: 30`,
        available: questionIds.length
      }, 400);
    }

    // Buscar questões
    const allQuestions: GameQuestion[] = [];
    for (const id of questionIds) {
      const question = await kv.get(`game_question:${id}`);
      if (question) {
        allQuestions.push(question);
      }
    }

    // Dividir em fases por dificuldade
    const facil = allQuestions.filter(q => q.difficulty === 'facil');
    const medio = allQuestions.filter(q => q.difficulty === 'medio');
    const dificil = allQuestions.filter(q => q.difficulty === 'dificil');

    // Selecionar 10 de cada dificuldade (se possível)
    const fase1 = facil.sort(() => Math.random() - 0.5).slice(0, 10);
    const fase2 = medio.sort(() => Math.random() - 0.5).slice(0, 10);
    const fase3 = dificil.sort(() => Math.random() - 0.5).slice(0, 10);

    // Se não houver questões suficientes de uma dificuldade, completar com outras
    const match = [...fase1, ...fase2, ...fase3];
    if (match.length < 30) {
      const remaining = allQuestions
        .filter(q => !match.includes(q))
        .sort(() => Math.random() - 0.5)
        .slice(0, 30 - match.length);
      match.push(...remaining);
    }

    console.log(`✅ [GAME MATCH] Created match with ${match.length} questions`);

    return c.json({
      success: true,
      match: {
        area,
        questions: match,
        phases: [
          { phase: 1, difficulty: 'facil', questions: fase1 },
          { phase: 2, difficulty: 'medio', questions: fase2 },
          { phase: 3, difficulty: 'dificil', questions: fase3 }
        ]
      }
    });

  } catch (error) {
    console.error("❌ [GAME MATCH ERROR]:", error);
    return c.json({ 
      error: "Failed to create match", 
      details: error.message 
    }, 500);
  }
});

// ============= BUSCAR QUESTÃO POR ID =============
// GET /make-server-50734795/game/questions/:id
gameApp.get("/make-server-50734795/game/questions/:id", async (c) => {
  try {
    const id = c.req.param('id');
    
    console.log(`🔍 [GAME QUESTION] Fetching question: ${id}`);

    const question = await kv.get(`game_question:${id}`);

    if (!question) {
      return c.json({ error: "Question not found" }, 404);
    }

    return c.json({
      success: true,
      question
    });

  } catch (error) {
    console.error("❌ [GAME QUESTION ERROR]:", error);
    return c.json({ 
      error: "Failed to fetch question", 
      details: error.message 
    }, 500);
  }
});

// ============= ESTATÍSTICAS DA ÁREA =============
// GET /make-server-50734795/game/questions/stats?area=juridica
gameApp.get("/make-server-50734795/game/stats", async (c) => {
  try {
    const area = c.req.query('area');

    console.log(`�� [GAME STATS] Fetching stats for area: ${area || 'all'}`);

    const areas = area ? [area] : ['juridica', 'policial', 'fiscal-bancaria', 'conhecimentos-gerais'];
    const stats = {};

    for (const a of areas) {
      const areaIndexKey = `game_questions_index:${a}`;
      const questionIds = await kv.get(areaIndexKey) || [];
      
      const questions: GameQuestion[] = [];
      for (const id of questionIds) {
        const q = await kv.get(`game_question:${id}`);
        if (q) questions.push(q);
      }

      // Contar por dificuldade
      const facil = questions.filter(q => q.difficulty === 'facil').length;
      const medio = questions.filter(q => q.difficulty === 'medio').length;
      const dificil = questions.filter(q => q.difficulty === 'dificil').length;

      // Contar por matéria
      const subjects = {};
      questions.forEach(q => {
        subjects[q.subject] = (subjects[q.subject] || 0) + 1;
      });

      stats[a] = {
        total: questions.length,
        byDifficulty: {
          facil,
          medio,
          dificil
        },
        bySubject: subjects
      };
    }

    console.log(`✅ [GAME STATS] Returning stats`);

    return c.json({
      success: true,
      stats
    });

  } catch (error) {
    console.error("❌ [GAME STATS ERROR]:", error);
    return c.json({ 
      error: "Failed to fetch stats", 
      details: error.message 
    }, 500);
  }
});

// ============= SALVAR RESULTADO DE PARTIDA =============
// POST /make-server-50734795/game/result
gameApp.post("/make-server-50734795/game/result", async (c) => {
  try {
    const body = await c.req.json();
    const { userId, area, score, correctAnswers, totalQuestions, timeSpent, difficulty } = body;

    console.log(`💾 [GAME RESULT] Saving result for user: ${userId}`);

    // Criar ID único para o resultado
    const resultId = `result_${Date.now()}_${userId}`;
    
    const result = {
      id: resultId,
      userId,
      area,
      score,
      correctAnswers,
      totalQuestions,
      accuracy: (correctAnswers / totalQuestions) * 100,
      timeSpent,
      difficulty,
      timestamp: new Date().toISOString()
    };

    // Salvar resultado
    await kv.set(`game_result:${resultId}`, result);

    // Adicionar ao histórico do usuário
    const userHistoryKey = `game_history:${userId}`;
    const history = await kv.get(userHistoryKey) || [];
    history.push(resultId);
    await kv.set(userHistoryKey, history);

    // Atualizar estatísticas do usuário
    const userStatsKey = `game_user_stats:${userId}`;
    const userStats = await kv.get(userStatsKey) || {
      totalGames: 0,
      totalCorrect: 0,
      totalQuestions: 0,
      bestScore: 0,
      byArea: {}
    };

    userStats.totalGames += 1;
    userStats.totalCorrect += correctAnswers;
    userStats.totalQuestions += totalQuestions;
    userStats.bestScore = Math.max(userStats.bestScore, score);

    if (!userStats.byArea[area]) {
      userStats.byArea[area] = { games: 0, correct: 0, total: 0 };
    }
    userStats.byArea[area].games += 1;
    userStats.byArea[area].correct += correctAnswers;
    userStats.byArea[area].total += totalQuestions;

    await kv.set(userStatsKey, userStats);

    console.log(`✅ [GAME RESULT] Result saved: ${resultId}`);

    return c.json({
      success: true,
      resultId,
      userStats
    });

  } catch (error) {
    console.error("❌ [GAME RESULT ERROR]:", error);
    return c.json({ 
      error: "Failed to save result", 
      details: error.message 
    }, 500);
  }
});

// ============= BUSCAR HISTÓRICO DO USUÁRIO =============
// GET /make-server-50734795/game/history/:userId
gameApp.get("/make-server-50734795/game/history/:userId", async (c) => {
  try {
    const userId = c.req.param('userId');
    const limit = parseInt(c.req.query('limit') || '10');

    console.log(`📜 [GAME HISTORY] Fetching history for user: ${userId}`);

    const userHistoryKey = `game_history:${userId}`;
    const resultIds = await kv.get(userHistoryKey) || [];

    // Buscar últimos N resultados
    const recentIds = resultIds.slice(-limit).reverse();
    const results = [];

    for (const id of recentIds) {
      const result = await kv.get(`game_result:${id}`);
      if (result) results.push(result);
    }

    console.log(`✅ [GAME HISTORY] Returning ${results.length} results`);

    return c.json({
      success: true,
      history: results,
      total: resultIds.length
    });

  } catch (error) {
    console.error("❌ [GAME HISTORY ERROR]:", error);
    return c.json({ 
      error: "Failed to fetch history", 
      details: error.message 
    }, 500);
  }
});

// ============= ESTATÍSTICAS DO USUÁRIO =============
// GET /make-server-50734795/game/user-stats/:userId
gameApp.get("/make-server-50734795/game/user-stats/:userId", async (c) => {
  try {
    const userId = c.req.param('userId');

    console.log(`📊 [USER STATS] Fetching stats for user: ${userId}`);

    const userStatsKey = `game_user_stats:${userId}`;
    const stats = await kv.get(userStatsKey) || {
      totalGames: 0,
      totalCorrect: 0,
      totalQuestions: 0,
      bestScore: 0,
      byArea: {}
    };

    return c.json({
      success: true,
      stats
    });

  } catch (error) {
    console.error("❌ [USER STATS ERROR]:", error);
    return c.json({ 
      error: "Failed to fetch user stats", 
      details: error.message 
    }, 500);
  }
});

export default gameApp;