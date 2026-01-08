import React, { useEffect, useRef, useState } from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

interface GodotGamePlayerProps {
  area: string;
  questions: any[];
  userEnergy: number;
  onGameComplete: (result: GameResult) => void;
  onClose: () => void;
}

interface GameResult {
  score: number;
  time: number;
  correctAnswers: number;
  wrongAnswers: number;
  area: string;
  xpGained: number;
}

export function GodotGamePlayer({ 
  area, 
  questions, 
  userEnergy,
  onGameComplete,
  onClose 
}: GodotGamePlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [gameReady, setGameReady] = useState(false);

  useEffect(() => {
    // Setup communication with Godot game
    setupGameCommunication();

    return () => {
      cleanupGameCommunication();
    };
  }, []);

  useEffect(() => {
    // Send questions to game when ready
    if (gameReady && questions.length > 0) {
      sendQuestionsToGame();
    }
  }, [gameReady, questions]);

  const setupGameCommunication = () => {
    // Receive messages from Godot game
    window.addEventListener('message', handleGameMessage);

    // Expose functions for Godot to call
    (window as any).getGameQuestions = () => {
      return questions.map(q => ({
        id: q.id,
        text: q.text,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        subject: q.subject,
        topic: q.topic
      }));
    };

    (window as any).onGameComplete = (result: any) => {
      console.log('🎮 Game completed:', result);
      
      // Calculate XP based on performance
      const xpGained = calculateXP(result);
      
      onGameComplete({
        ...result,
        area,
        xpGained
      });
    };

    (window as any).onGameError = (error: string) => {
      console.error('🎮 Game error:', error);
      setError(error);
    };

    console.log('🎮 Game communication setup complete');
  };

  const cleanupGameCommunication = () => {
    window.removeEventListener('message', handleGameMessage);
    delete (window as any).getGameQuestions;
    delete (window as any).onGameComplete;
    delete (window as any).onGameError;
  };

  const handleGameMessage = (event: MessageEvent) => {
    // Handle messages from the iframe
    if (event.data.type === 'godot-event') {
      // New Godot communication protocol
      const { event: godotEvent, data } = event.data;
      
      if (godotEvent === 'ready') {
        console.log('🎮 Godot game is ready!');
        setGameReady(true);
        setIsLoading(false);
      } else if (godotEvent === 'error') {
        console.error('🎮 Godot error:', data.message);
        setError(data.message);
        setIsLoading(false);
      } else if (godotEvent === 'questionAnswered') {
        console.log('🎮 Question answered:', data);
      } else if (godotEvent === 'gameComplete') {
        console.log('🎮 Game completed:', data);
        const xpGained = calculateXP(data);
        onGameComplete({
          ...data,
          area,
          xpGained
        });
      }
    }
    // Legacy support for old message types
    else if (event.data.type === 'GAME_READY') {
      console.log('🎮 Game is ready!');
      setGameReady(true);
      setIsLoading(false);
    } else if (event.data.type === 'GAME_LOADED') {
      console.log('🎮 Game loaded');
      setIsLoading(false);
    } else if (event.data.type === 'REQUEST_QUESTIONS') {
      sendQuestionsToGame();
    }
  };

  const sendQuestionsToGame = () => {
    if (!iframeRef.current) return;

    const gameData = {
      type: 'INIT_GAME',
      area: area,
      questions: questions.map(q => ({
        id: q.id,
        text: q.text,
        correctAnswer: q.correctAnswer,
        explanation: q.explanation,
        subject: q.subject,
        topic: q.topic,
        difficulty: q.difficulty || 'medium'
      })),
      userEnergy: userEnergy,
      config: {
        timeLimit: 30, // seconds per question
        phases: 3,
        cardsPerPhase: 10
      }
    };

    console.log('🎮 Sending data to game:', gameData);

    // Post message to iframe
    iframeRef.current.contentWindow?.postMessage(gameData, '*');
  };

  const calculateXP = (result: any): number => {
    const baseXP = 50;
    const correctBonus = result.correctAnswers * 10;
    const speedBonus = Math.max(0, 100 - result.time); // Bonus for speed
    const comboBonus = result.maxCombo ? result.maxCombo * 5 : 0;
    
    return baseXP + correctBonus + speedBonus + comboBonus;
  };

  const handleIframeLoad = () => {
    console.log('🎮 Iframe loaded');
    setIsLoading(false);
    
    // Send initial data after a short delay
    setTimeout(() => {
      sendQuestionsToGame();
    }, 1000);
  };

  const handleIframeError = () => {
    console.error('🎮 Iframe failed to load');
    setError('Falha ao carregar o game. Tente novamente.');
    setIsLoading(false);
  };

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center">
        <div className="bg-gradient-to-br from-red-900/40 to-red-950/40 border-2 border-red-500/50 rounded-3xl p-8 max-w-md text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Erro no Game</h3>
          <p className="text-gray-300 mb-6">{error}</p>
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 transition-all"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-black/90 z-10 flex items-center justify-center">
          <div className="text-center">
            <Loader2 className="w-16 h-16 text-orange-500 animate-spin mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Carregando Game Épico...</h3>
            <p className="text-gray-400">Preparando a aventura mitológica 🎮</p>
          </div>
        </div>
      )}

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 px-6 py-3 rounded-full bg-red-600/80 hover:bg-red-500 backdrop-blur-sm transition-all"
      >
        ✕ Fechar Game
      </button>

      {/* Game Area Info */}
      <div className="absolute top-4 left-4 z-20 px-6 py-3 rounded-full bg-black/80 backdrop-blur-sm border-2 border-orange-500/50">
        <span className="text-lg font-bold">
          {area === 'juridica' && '⚖️ Área Jurídica'}
          {area === 'policial' && '🚔 Área Policial'}
          {area === 'gerais' && '📚 Conhecimentos Gerais'}
          {area === 'fiscal' && '💰 Área Fiscal'}
        </span>
      </div>

      {/* Godot Game Iframe */}
      <iframe
        ref={iframeRef}
        src="/godot-game/index.html"
        className="w-full h-full border-0"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        allow="autoplay; fullscreen"
        title="Quiron Concursos - Game Épico"
      />
    </div>
  );
}