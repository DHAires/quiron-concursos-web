import React, { useState, useEffect } from 'react';
import { Trophy, Medal, TrendingUp, TrendingDown, Minus, Star, Zap, Home, RotateCcw, Crown, Award, BarChart3 } from 'lucide-react';

interface GameResultsProps {
  mode: 'single' | 'multi';
  position?: number; // 1-4 para multiplayer
  previousRank: number;
  newRank: number;
  areaName: string;
  careerLevel: string; // "Estagiário", "Técnico", "Juiz", etc.
  correctAnswers: number;
  totalQuestions: number;
  timeSpent: string;
  onBackToGame: () => void;
  onPlayAgain: () => void;
  onVisitRanking: () => void;
}

const careerEmojis: Record<string, string> = {
  'Estagiário': '📚',
  'Técnico': '⚖️',
  'Técnico Bancário': '💳',
  'Analista': '🎓',
  'Gerente': '💼',
  'Soldado': '🪖',
  'Oficial': '🎖️',
  'Agente': '🕵️',
  'Aluno': '📖',
  'Professor': '👨‍🏫',
  'Mestre': '🎓',
  'JUIZ': '👨‍⚖️',
  'AUDITOR': '🏆',
  'DELEGADO': '👮',
  'CIENTISTA': '🔬'
};

const positionData = [
  { 
    position: 1, 
    title: 'CAMPEÃO!', 
    color: 'from-yellow-400 to-yellow-600',
    borderColor: 'border-yellow-400',
    shadowColor: 'shadow-yellow-500/50',
    icon: Crown,
    message: 'Você dominou a corrida épica!'
  },
  { 
    position: 2, 
    title: 'VICE-CAMPEÃO!', 
    color: 'from-gray-300 to-gray-400',
    borderColor: 'border-gray-400',
    shadowColor: 'shadow-gray-500/50',
    icon: Medal,
    message: 'Excelente desempenho!'
  },
  { 
    position: 3, 
    title: '3º LUGAR', 
    color: 'from-orange-400 to-orange-600',
    borderColor: 'border-orange-400',
    shadowColor: 'shadow-orange-500/50',
    icon: Award,
    message: 'Muito bem! Continue treinando!'
  },
  { 
    position: 4, 
    title: '4º LUGAR', 
    color: 'from-blue-400 to-blue-600',
    borderColor: 'border-blue-400',
    shadowColor: 'shadow-blue-500/50',
    icon: Star,
    message: 'Boa participação! Na próxima você sobe!'
  }
];

export function GameResults({
  mode,
  position = 1,
  previousRank,
  newRank,
  areaName,
  careerLevel,
  correctAnswers,
  totalQuestions,
  timeSpent,
  onBackToGame,
  onPlayAgain,
  onVisitRanking
}: GameResultsProps) {
  const [showContent, setShowContent] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showRanking, setShowRanking] = useState(false);
  const [confetti, setConfetti] = useState(true);

  const rankChange = newRank - previousRank;
  const isRankUp = rankChange < 0; // Ranking menor = melhor posição
  const isRankDown = rankChange > 0;
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

  // Dados da posição (multiplayer)
  const posInfo = positionData.find(p => p.position === position) || positionData[3];
  const PositionIcon = posInfo.icon;

  useEffect(() => {
    // Animação sequencial
    setTimeout(() => setShowContent(true), 300);
    setTimeout(() => setShowStats(true), 800);
    setTimeout(() => setShowRanking(true), 1400);
    setTimeout(() => setConfetti(false), 5000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4 relative overflow-hidden">
      {/* Confetti Effect */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-10px',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['🎉', '🎊', '⭐', '🏆', '🔥', '✨'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        {/* Main Result Card */}
        <div className={`text-center mb-6 transition-all duration-700 transform ${
          showContent ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          {/* Mode Badge */}
          {mode === 'multi' ? (
            <>
              {/* Multiplayer Position */}
              <div className={`inline-block mb-4 p-5 rounded-full bg-gradient-to-r ${posInfo.color} shadow-2xl ${posInfo.shadowColor} animate-bounce-slow`}>
                <PositionIcon className="w-16 h-16 text-white" />
              </div>
              
              <h1 className={`text-4xl md:text-5xl mb-3 bg-gradient-to-r ${posInfo.color} bg-clip-text text-transparent animate-pulse-slow`}>
                {posInfo.title}
              </h1>
              
              <p className="text-lg text-gray-300 mb-2">
                {posInfo.message}
              </p>
            </>
          ) : (
            <>
              {/* Singleplayer */}
              <div className="inline-block mb-4 p-5 rounded-full bg-gradient-to-r from-purple-400 to-purple-600 shadow-2xl shadow-purple-500/50 animate-bounce-slow">
                <Trophy className="w-16 h-16 text-white" />
              </div>
              
              <h1 className="text-4xl md:text-5xl mb-3 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent animate-pulse-slow">
                TREINO CONCLUÍDO!
              </h1>
              
              <p className="text-lg text-gray-300 mb-2">
                Excelente trabalho, herói! 💪
              </p>
            </>
          )}

          {/* Career Level */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 border-2 border-gray-700 mt-3">
            <span className="text-2xl">{careerEmojis[careerLevel] || '🎯'}</span>
            <div className="text-left">
              <div className="text-xs text-gray-400">Novo Cargo</div>
              <div className="text-base">{careerLevel}</div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 transition-all duration-700 delay-300 transform ${
          showStats ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Accuracy */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-green-900/30 to-gray-900 border-2 border-green-500/30">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-green-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl mb-1">{accuracy}%</div>
              <div className="text-xs text-gray-400">Precisão</div>
              <div className="text-xs text-gray-500 mt-0.5">
                {correctAnswers}/{totalQuestions} questões
              </div>
            </div>
          </div>

          {/* Time */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-blue-900/30 to-gray-900 border-2 border-blue-500/30">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-600 flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl mb-1">{timeSpent}</div>
              <div className="text-xs text-gray-400">Tempo Total</div>
              <div className="text-xs text-gray-500 mt-0.5">
                {areaName}
              </div>
            </div>
          </div>

          {/* Score/Stars */}
          <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-900/30 to-gray-900 border-2 border-yellow-500/30">
            <div className="text-center">
              <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-yellow-600 flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(3)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.ceil((accuracy / 100) * 3)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
              </div>
              <div className="text-sm text-gray-400">Desempenho</div>
              <div className="text-xs text-gray-500 mt-1">
                {accuracy >= 90 ? 'Excepcional!' : accuracy >= 70 ? 'Muito bom!' : 'Bom!'}
              </div>
            </div>
          </div>
        </div>

        {/* Ranking Change */}
        <div className={`mb-4 transition-all duration-700 delay-500 transform ${
          showRanking ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}>
          <div className="p-4 rounded-xl bg-gradient-to-r from-red-900/20 to-purple-900/20 border-2 border-red-500/30 relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-purple-500 animate-pulse-slow"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-base text-center mb-3 flex items-center justify-center gap-2">
                <Trophy className="w-5 h-5 text-yellow-400" />
                Ranking Global
              </h2>

              <div className="flex items-center justify-center gap-6">
                {/* Previous Rank */}
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Posição Anterior</div>
                  <div className="text-2xl text-gray-500">#{previousRank}</div>
                </div>

                {/* Arrow/Change */}
                <div className="flex flex-col items-center">
                  {isRankUp ? (
                    <>
                      <TrendingUp className="w-6 h-6 text-green-400 animate-bounce" />
                      <div className="text-xs text-green-400 mt-1">
                        +{Math.abs(rankChange)} posições
                      </div>
                    </>
                  ) : isRankDown ? (
                    <>
                      <TrendingDown className="w-6 h-6 text-red-400" />
                      <div className="text-xs text-red-400 mt-1">
                        -{Math.abs(rankChange)} posições
                      </div>
                    </>
                  ) : (
                    <>
                      <Minus className="w-6 h-6 text-yellow-400" />
                      <div className="text-xs text-yellow-400 mt-1">
                        Manteve posição
                      </div>
                    </>
                  )}
                </div>

                {/* New Rank */}
                <div className="text-center">
                  <div className="text-xs text-gray-400 mb-1">Nova Posição</div>
                  <div className={`text-3xl ${
                    isRankUp ? 'text-green-400 animate-pulse-slow' : 
                    isRankDown ? 'text-red-400' : 
                    'text-yellow-400'
                  }`}>
                    #{newRank}
                  </div>
                </div>
              </div>

              {/* Motivational Message */}
              <div className="mt-3 text-center">
                {isRankUp && (
                  <p className="text-xs text-green-400">
                    🎉 <strong>Parabéns!</strong> Você subiu no ranking! Continue assim!
                  </p>
                )}
                {isRankDown && (
                  <p className="text-xs text-red-400">
                    💪 Não desanime! Treine mais e volte mais forte!
                  </p>
                )}
                {!isRankUp && !isRankDown && (
                  <p className="text-xs text-yellow-400">
                    ⚡ Continue praticando para subir ainda mais!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 justify-center mb-4">
          <button
            onClick={onPlayAgain}
            className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all shadow-lg shadow-red-500/50 hover:scale-105 flex items-center justify-center gap-3 text-xl"
          >
            <RotateCcw className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            <span>Jogar Novamente</span>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={onVisitRanking}
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 transition-all shadow-lg shadow-yellow-500/50 hover:scale-105 flex items-center justify-center gap-3 text-xl"
            >
              <BarChart3 className="w-6 h-6 group-hover:scale-110 transition-transform" />
              <span>Ver Ranking</span>
            </button>

            <button
              onClick={onBackToGame}
              className="px-8 py-4 rounded-2xl bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-gray-600 transition-all flex items-center justify-center gap-3 text-xl"
            >
              <Home className="w-6 h-6" />
              <span>Voltar ao Menu</span>
            </button>
          </div>
        </div>

        {/* Share/Social (Optional) */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Compartilhe seu resultado e desafie seus amigos! 🚀
          </p>
        </div>
      </div>

      <style>{`
        @keyframes confetti {
          0% {
            transform: translateY(-10px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .animate-confetti {
          animation: confetti linear forwards;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}