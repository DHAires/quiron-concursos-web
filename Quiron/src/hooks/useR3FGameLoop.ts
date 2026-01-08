/**
 * 🎮 HOOK DO GAME LOOP (R3F)
 * 
 * Este hook gerencia a lógica principal do jogo:
 * - Spawn de cartas
 * - Movimento das cartas
 * - Detecção de colisão
 * - Sistema de vidas
 * - Pontuação
 * - Timer
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import { GAMEPLAY_CONFIG, SPAWN_CONFIG, type GameArea, type Question } from '../config/r3fGameConfig';

interface CardInstance {
  id: string;
  question: Question;
  position: [number, number, number];
  isActive: boolean;
}

interface UseR3FGameLoopProps {
  onGameOver: () => void;
  onScoreUpdate: (score: number) => void;
  questions: Question[];
}

export function useR3FGameLoop({ 
  onGameOver, 
  onScoreUpdate,
  questions 
}: UseR3FGameLoopProps) {
  // 📊 ESTADOS DO JOGO
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(GAMEPLAY_CONFIG.maxLives);
  const [cards, setCards] = useState<CardInstance[]>([]);
  const [currentCard, setCurrentCard] = useState<CardInstance | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  
  // 🔢 REFS (não causam re-render)
  const spawnTimerRef = useRef<NodeJS.Timeout | null>(null);
  const gameTimerRef = useRef<NodeJS.Timeout | null>(null);
  const questionIndexRef = useRef(0);
  
  /**
   * ▶️ INICIAR JOGO
   */
  const startGame = useCallback(() => {
    setScore(0);
    setLives(GAMEPLAY_CONFIG.maxLives);
    setCards([]);
    setCurrentCard(null);
    setIsPlaying(true);
    setTimeElapsed(0);
    questionIndexRef.current = 0;
    
    // Timer do jogo (cronômetro)
    gameTimerRef.current = setInterval(() => {
      setTimeElapsed(prev => prev + 1);
    }, 1000);
    
    // Primeira carta aparece imediatamente
    spawnCard();
    
    // Cartas subsequentes aparecem a cada X segundos
    spawnTimerRef.current = setInterval(() => {
      spawnCard();
    }, GAMEPLAY_CONFIG.cardSpawnInterval * 1000);
  }, []);
  
  /**
   * ⏸️ PAUSAR JOGO
   */
  const pauseGame = useCallback(() => {
    setIsPlaying(false);
    if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
  }, []);
  
  /**
   * ⏹️ PARAR JOGO
   */
  const stopGame = useCallback(() => {
    setIsPlaying(false);
    setCards([]);
    setCurrentCard(null);
    if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
    if (gameTimerRef.current) clearInterval(gameTimerRef.current);
  }, []);
  
  /**
   * 🃏 SPAWNAR NOVA CARTA
   * 
   * Cria uma carta na distância e começa a movê-la
   */
  const spawnCard = useCallback(() => {
    // Se não há mais questões, não spawna
    if (questionIndexRef.current >= questions.length) {
      return;
    }
    
    const question = questions[questionIndexRef.current];
    questionIndexRef.current++;
    
    // Posição inicial (longe, na frente do jogador)
    const randomX = (Math.random() - 0.5) * SPAWN_CONFIG.randomOffsetX;
    const randomY = GAMEPLAY_CONFIG.cameraHeight + (Math.random() - 0.5) * SPAWN_CONFIG.randomOffsetY;
    const startZ = -SPAWN_CONFIG.cardSpawnDistance;
    
    const newCard: CardInstance = {
      id: `card-${Date.now()}-${Math.random()}`,
      question,
      position: [randomX, randomY, startZ],
      isActive: true,
    };
    
    setCards(prev => [...prev, newCard]);
  }, [questions]);
  
  /**
   * 🎯 ATUALIZAR POSIÇÃO DAS CARTAS
   * 
   * Chamado a cada frame para mover cartas em direção ao jogador
   */
  const updateCards = useCallback((deltaTime: number) => {
    if (!isPlaying) return;
    
    setCards(prev => {
      return prev.map(card => {
        // Move carta em direção ao jogador (aumenta Z)
        const newZ = card.position[2] + GAMEPLAY_CONFIG.cardSpeed * deltaTime;
        
        // Se carta chegou perto o suficiente, trava e mostra questão
        if (newZ >= -SPAWN_CONFIG.cardStopDistance && card.isActive && !currentCard) {
          setCurrentCard(card);
          return {
            ...card,
            position: [card.position[0], card.position[1], -SPAWN_CONFIG.cardStopDistance] as [number, number, number],
          };
        }
        
        // Se carta passou do jogador, remove
        if (newZ > 5) {
          return null;
        }
        
        return {
          ...card,
          position: [card.position[0], card.position[1], newZ] as [number, number, number],
        };
      }).filter(Boolean) as CardInstance[];
    });
  }, [isPlaying, currentCard]);
  
  /**
   * ✅ RESPONDER QUESTÃO
   * 
   * @param answerIndex - Índice da resposta escolhida (0-3)
   */
  const answerQuestion = useCallback((answerIndex: number) => {
    if (!currentCard) return;
    
    const isCorrect = answerIndex === currentCard.question.correctAnswer;
    
    if (isCorrect) {
      // ✅ RESPOSTA CORRETA
      const newScore = score + GAMEPLAY_CONFIG.scorePerCorrect;
      setScore(newScore);
      onScoreUpdate(newScore);
    } else {
      // ❌ RESPOSTA ERRADA
      const newScore = Math.max(0, score + GAMEPLAY_CONFIG.scorePerWrong);
      setScore(newScore);
      onScoreUpdate(newScore);
      
      // Perde uma vida
      const newLives = lives - 1;
      setLives(newLives);
      
      // Game over se não tem mais vidas
      if (newLives <= 0) {
        stopGame();
        onGameOver();
        return;
      }
    }
    
    // Remove carta atual
    setCards(prev => prev.filter(c => c.id !== currentCard.id));
    setCurrentCard(null);
    
    // Se acabaram as questões, termina jogo
    if (questionIndexRef.current >= questions.length && cards.length === 1) {
      setTimeout(() => {
        stopGame();
        onGameOver();
      }, 1000);
    }
  }, [currentCard, score, lives, cards, questions, onScoreUpdate, onGameOver, stopGame]);
  
  /**
   * 🧹 CLEANUP - Limpa timers quando componente desmonta
   */
  useEffect(() => {
    return () => {
      if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
      if (gameTimerRef.current) clearInterval(gameTimerRef.current);
    };
  }, []);
  
  // 🎯 RETORNA TUDO QUE O COMPONENTE PRECISA
  return {
    // Estados
    score,
    lives,
    cards,
    currentCard,
    isPlaying,
    timeElapsed,
    
    // Funções
    startGame,
    pauseGame,
    stopGame,
    updateCards,
    answerQuestion,
  };
}
