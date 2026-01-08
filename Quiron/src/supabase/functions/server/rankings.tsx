import { Hono } from "npm:hono";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// ============= GAME MULTIPLAYER RANKINGS =============

// Get game ranking by area
app.get("/make-server-50734795/rankings/game/:area", async (c) => {
  try {
    const area = c.req.param("area");
    
    console.log(`🏆 [GAME RANKING] Loading for area: ${area}`);
    
    // Get current cycle start date
    const cycleKey = `ranking_cycle_start`;
    let cycleStart = await kv.get(cycleKey);
    
    if (!cycleStart) {
      // Initialize new cycle
      cycleStart = new Date().toISOString();
      await kv.set(cycleKey, cycleStart);
    }
    
    // Calculate cycle end (60 days from start)
    const cycleStartDate = new Date(cycleStart);
    const cycleEndDate = new Date(cycleStartDate);
    cycleEndDate.setDate(cycleEndDate.getDate() + 60);
    
    // Check if cycle expired
    if (new Date() >= cycleEndDate) {
      // Reset cycle
      console.log('🔄 Cycle expired, resetting...');
      cycleStart = new Date().toISOString();
      await kv.set(cycleKey, cycleStart);
      cycleEndDate.setDate(new Date(cycleStart).getDate() + 60);
      
      // Archive old rankings
      const oldRankingKey = `game_ranking_${area}`;
      const oldRanking = await kv.get(oldRankingKey);
      if (oldRanking) {
        await kv.set(`game_ranking_${area}_archive_${cycleStartDate.toISOString()}`, oldRanking);
        await kv.del(oldRankingKey);
      }
    }
    
    // Get rankings for area
    const rankingKey = `game_ranking_${area}`;
    const rankingData = await kv.get(rankingKey) || [];
    
    // Sort by score (descending)
    const sorted = rankingData.sort((a: any, b: any) => b.score - a.score);
    
    // Add positions
    const rankings = sorted.map((entry: any, index: number) => ({
      ...entry,
      position: index + 1,
    }));
    
    console.log(`✅ [GAME RANKING] Found ${rankings.length} entries`);
    
    return c.json({
      rankings,
      cycleStartsAt: cycleStart,
      cycleEndsAt: cycleEndDate.toISOString(),
    });
  } catch (error) {
    console.error("❌ [GAME RANKING] Error:", error);
    return c.json({ error: "Failed to load rankings" }, 500);
  }
});

// Update game score
app.post("/make-server-50734795/rankings/game/:area/update", async (c) => {
  try {
    const area = c.req.param("area");
    const body = await c.req.json();
    const { userId, userName, score, isPremium } = body;
    
    console.log(`📊 [GAME RANKING] Update for ${userName} in ${area}: ${score} points`);
    
    const rankingKey = `game_ranking_${area}`;
    const rankingData = await kv.get(rankingKey) || [];
    
    // Find existing entry
    const existingIndex = rankingData.findIndex((e: any) => e.userId === userId);
    
    if (existingIndex >= 0) {
      // Update existing
      rankingData[existingIndex].score += score;
      rankingData[existingIndex].gamesPlayed += 1;
      rankingData[existingIndex].lastPlayed = new Date().toISOString();
    } else {
      // Add new entry
      rankingData.push({
        userId,
        userName,
        score,
        gamesPlayed: 1,
        isPremium,
        firstPlayed: new Date().toISOString(),
        lastPlayed: new Date().toISOString(),
      });
    }
    
    await kv.set(rankingKey, rankingData);
    
    console.log(`✅ [GAME RANKING] Updated successfully`);
    
    return c.json({ success: true });
  } catch (error) {
    console.error("❌ [GAME RANKING] Update error:", error);
    return c.json({ error: "Failed to update ranking" }, 500);
  }
});

// ============= QUESTÕES RANKINGS =============

// Get questões ranking by area and period
app.get("/make-server-50734795/rankings/questoes/:area", async (c) => {
  try {
    const area = c.req.param("area");
    const period = c.req.query("period") || "semana";
    
    console.log(`📚 [QUESTÕES RANKING] Loading for area: ${area}, period: ${period}`);
    
    // Calculate date range based on period
    const now = new Date();
    let startDate = new Date();
    
    switch (period) {
      case "dia":
        startDate.setHours(0, 0, 0, 0);
        break;
      case "semana":
        startDate.setDate(now.getDate() - 7);
        break;
      case "mes":
        startDate.setMonth(now.getMonth() - 1);
        break;
      case "semestre":
        startDate.setMonth(now.getMonth() - 6);
        break;
      case "ano":
        startDate.setFullYear(now.getFullYear() - 1);
        break;
    }
    
    // Get all question attempts for this area and period
    const attemptsPrefix = `question_attempt_${area}_`;
    const allAttempts = await kv.getByPrefix(attemptsPrefix);
    
    // Group by user
    const userStats = new Map();
    
    if (allAttempts) {
      for (const item of allAttempts) {
        const attempts = Array.isArray(item.value) ? item.value : [];
        
        for (const attempt of attempts) {
          const attemptDate = new Date(attempt.timestamp);
          
          // Filter by period
          if (attemptDate >= startDate && attemptDate <= now) {
            const userId = attempt.userId;
            
            if (!userStats.has(userId)) {
              userStats.set(userId, {
                userId,
                userName: attempt.userName || 'Usuário',
                totalQuestions: 0,
                correctAnswers: 0,
                wrongAnswers: 0,
                accuracy: 0,
              });
            }
            
            const stats = userStats.get(userId);
            stats.totalQuestions += 1;
            
            if (attempt.correct) {
              stats.correctAnswers += 1;
            } else {
              stats.wrongAnswers += 1;
            }
          }
        }
      }
    }
    
    // Calculate accuracy and convert to array
    const rankings = Array.from(userStats.values()).map(stats => {
      stats.accuracy = stats.totalQuestions > 0 
        ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100)
        : 0;
      return stats;
    });
    
    // Sort by total questions (descending), then by accuracy
    rankings.sort((a, b) => {
      if (b.totalQuestions !== a.totalQuestions) {
        return b.totalQuestions - a.totalQuestions;
      }
      return b.accuracy - a.accuracy;
    });
    
    // Add positions
    const rankedList = rankings.map((entry, index) => ({
      ...entry,
      position: index + 1,
    }));
    
    console.log(`✅ [QUESTÕES RANKING] Found ${rankedList.length} entries`);
    
    return c.json({
      rankings: rankedList,
      period,
      startDate: startDate.toISOString(),
      endDate: now.toISOString(),
    });
  } catch (error) {
    console.error("❌ [QUESTÕES RANKING] Error:", error);
    return c.json({ error: "Failed to load rankings" }, 500);
  }
});

// Record question attempt
app.post("/make-server-50734795/rankings/questoes/:area/record", async (c) => {
  try {
    const area = c.req.param("area");
    const body = await c.req.json();
    const { userId, userName, questionId, correct } = body;
    
    console.log(`📝 [RECORD ATTEMPT] ${userName} in ${area}: ${correct ? 'correct' : 'wrong'}`);
    
    const key = `question_attempt_${area}_${userId}`;
    const attempts = await kv.get(key) || [];
    
    attempts.push({
      userId,
      userName,
      questionId,
      correct,
      timestamp: new Date().toISOString(),
    });
    
    // Keep last 1000 attempts per user per area
    if (attempts.length > 1000) {
      attempts.shift();
    }
    
    await kv.set(key, attempts);
    
    console.log(`✅ [RECORD ATTEMPT] Saved successfully`);
    
    return c.json({ success: true });
  } catch (error) {
    console.error("❌ [RECORD ATTEMPT] Error:", error);
    return c.json({ error: "Failed to record attempt" }, 500);
  }
});

// Get user stats for specific area and period
app.get("/make-server-50734795/rankings/questoes/:area/user/:userId", async (c) => {
  try {
    const area = c.req.param("area");
    const userId = c.req.param("userId");
    const period = c.req.query("period") || "semana";
    
    console.log(`👤 [USER STATS] Loading for user: ${userId}, area: ${area}, period: ${period}`);
    
    // Calculate date range
    const now = new Date();
    let startDate = new Date();
    
    switch (period) {
      case "dia":
        startDate.setHours(0, 0, 0, 0);
        break;
      case "semana":
        startDate.setDate(now.getDate() - 7);
        break;
      case "mes":
        startDate.setMonth(now.getMonth() - 1);
        break;
      case "semestre":
        startDate.setMonth(now.getMonth() - 6);
        break;
      case "ano":
        startDate.setFullYear(now.getFullYear() - 1);
        break;
    }
    
    // Get user attempts
    const key = `question_attempt_${area}_${userId}`;
    const allAttempts = await kv.get(key) || [];
    
    // Filter by period
    const periodAttempts = allAttempts.filter((attempt: any) => {
      const attemptDate = new Date(attempt.timestamp);
      return attemptDate >= startDate && attemptDate <= now;
    });
    
    const totalQuestions = periodAttempts.length;
    const correctAnswers = periodAttempts.filter((a: any) => a.correct).length;
    const wrongAnswers = totalQuestions - correctAnswers;
    const accuracy = totalQuestions > 0 
      ? Math.round((correctAnswers / totalQuestions) * 100)
      : 0;
    
    // Get position in ranking
    const rankingResponse = await fetch(
      `http://localhost:8000/make-server-50734795/rankings/questoes/${area}?period=${period}`
    );
    const rankingData = await rankingResponse.json();
    
    const userRanking = rankingData.rankings.find((r: any) => r.userId === userId);
    const position = userRanking ? userRanking.position : 0;
    
    const stats = {
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      accuracy,
      position,
    };
    
    console.log(`✅ [USER STATS] Loaded successfully`);
    
    return c.json({ stats });
  } catch (error) {
    console.error("❌ [USER STATS] Error:", error);
    return c.json({ error: "Failed to load user stats" }, 500);
  }
});

// ============= RESET CYCLE (ADMIN) =============

app.post("/make-server-50734795/rankings/game/reset-cycle", async (c) => {
  try {
    console.log('🔄 [ADMIN] Resetting ranking cycle...');
    
    const cycleKey = `ranking_cycle_start`;
    const oldCycleStart = await kv.get(cycleKey);
    const newCycleStart = new Date().toISOString();
    
    // Archive all area rankings
    const areas = ['juridica', 'policial', 'gerais', 'fiscal'];
    for (const area of areas) {
      const rankingKey = `game_ranking_${area}`;
      const ranking = await kv.get(rankingKey);
      
      if (ranking) {
        // Archive old ranking
        await kv.set(`game_ranking_${area}_archive_${oldCycleStart}`, ranking);
        
        // Clear current ranking
        await kv.del(rankingKey);
      }
    }
    
    // Update cycle start
    await kv.set(cycleKey, newCycleStart);
    
    console.log('✅ [ADMIN] Cycle reset successfully');
    
    return c.json({
      success: true,
      oldCycleStart,
      newCycleStart,
      message: 'Ranking cycle reset successfully',
    });
  } catch (error) {
    console.error("❌ [ADMIN] Reset error:", error);
    return c.json({ error: "Failed to reset cycle" }, 500);
  }
});

export default app;
