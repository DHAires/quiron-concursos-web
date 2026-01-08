import React, { useEffect, useState } from 'react';
import { Trophy, Sparkles, Star, Zap, X } from 'lucide-react';
import { AvatarData } from './AvatarSystem';

interface LevelUpModalProps {
  isOpen: boolean;
  onClose: () => void;
  newLevel: number;
  avatarName: string;
  specialAbility?: string;
  reward?: string;
  gender: 'male' | 'female';
}

export function LevelUpModal({
  isOpen,
  onClose,
  newLevel,
  avatarName,
  specialAbility,
  reward,
  gender
}: LevelUpModalProps) {
  const [showContent, setShowContent] = useState(false);
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowContent(false);
      setConfetti(false);
      
      setTimeout(() => setShowContent(true), 200);
      setTimeout(() => setConfetti(true), 500);
      setTimeout(() => setConfetti(false), 5000);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      {/* Confetti */}
      {confetti && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti-fall"
              style={{
                left: `${Math.random() * 100}%`,
                top: '-20px',
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            >
              {['⭐', '🏆', '✨', '🎉', '💫', '🌟', '⚡'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      )}

      {/* Modal Content */}
      <div
        className={`relative max-w-2xl w-full transition-all duration-700 transform ${
          showContent ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-gray-800 border-2 border-gray-700 hover:bg-gray-700 transition-colors flex items-center justify-center z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-black border-4 border-yellow-500 shadow-2xl shadow-yellow-500/50 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-purple-500/10 animate-pulse-slow" />

          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl animate-pulse-slow" />

          <div className="relative z-10">
            {/* Icon */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl animate-pulse-slow" />
                <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center shadow-2xl shadow-yellow-500/50 animate-bounce-slow">
                  <Trophy className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl text-center mb-4 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-600 bg-clip-text text-transparent animate-pulse-slow">
              LEVEL UP!
            </h1>

            {/* Level Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 shadow-lg">
                <Star className="w-8 h-8 text-white" />
                <span className="text-3xl text-white">Nível {newLevel}</span>
              </div>
            </div>

            {/* Avatar Name */}
            <div className="text-center mb-8">
              <p className="text-gray-400 text-sm mb-2">Novo Avatar Desbloqueado:</p>
              <h2 className="text-4xl md:text-5xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                {avatarName}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                {gender === 'male' ? '♂️ Avatar Masculino' : '♀️ Avatar Feminino'}
              </p>
            </div>

            {/* Rewards Grid */}
            {(specialAbility || reward) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {/* Special Ability */}
                {specialAbility && (
                  <div className="p-6 rounded-2xl bg-purple-900/30 border-2 border-purple-500/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg">Habilidade Especial</h3>
                    </div>
                    <p className="text-purple-400">{specialAbility}</p>
                  </div>
                )}

                {/* Reward */}
                {reward && (
                  <div className="p-6 rounded-2xl bg-green-900/30 border-2 border-green-500/50">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg">Recompensa</h3>
                    </div>
                    <p className="text-green-400">{reward}</p>
                  </div>
                )}
              </div>
            )}

            {/* Motivational Message */}
            <div className="text-center p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30">
              <Sparkles className="w-8 h-8 mx-auto mb-3 text-blue-400" />
              <p className="text-gray-300">
                🎉 <strong>Parabéns!</strong> Continue jogando para desbloquear mais avatares e habilidades épicas!
              </p>
            </div>

            {/* Continue Button */}
            <div className="mt-8 text-center">
              <button
                onClick={onClose}
                className="px-12 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all shadow-lg shadow-red-500/50 hover:scale-105 text-xl"
              >
                Continuar Jornada
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes confetti-fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
        
        .animate-confetti-fall {
          animation: confetti-fall linear forwards;
          font-size: 24px;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
