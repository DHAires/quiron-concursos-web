import React from 'react';
import { Sparkles, Zap, Users, Trophy, Brain, Infinity } from 'lucide-react';

interface RegisterIncentiveBannerProps {
  onRegisterClick: () => void;
  limitType?: 'ai' | 'game' | 'community' | 'forum';
  remainingUses?: number;
}

export function RegisterIncentiveBanner({ onRegisterClick, limitType, remainingUses = 0 }: RegisterIncentiveBannerProps) {
  const getMessage = () => {
    if (remainingUses > 0) {
      const typeMessages = {
        ai: `Você tem ${remainingUses} ${remainingUses === 1 ? 'interação' : 'interações'} restantes com a IA`,
        game: `Você tem ${remainingUses} ${remainingUses === 1 ? 'jogada' : 'jogadas'} restantes no Game`,
        community: `Você tem ${remainingUses} ${remainingUses === 1 ? 'mensagem' : 'mensagens'} restantes no Chat`,
        forum: `Você tem ${remainingUses} ${remainingUses === 1 ? 'post' : 'posts'} restantes no Fórum`,
      };
      return typeMessages[limitType || 'ai'];
    }
    return 'Você atingiu o limite de uso como visitante!';
  };

  const getIcon = () => {
    const icons = {
      ai: Brain,
      game: Trophy,
      community: Users,
      forum: Sparkles,
    };
    return icons[limitType || 'ai'];
  };

  const Icon = getIcon();

  return (
    <div className="mb-4 p-4 rounded-2xl bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 shadow-xl border-2 border-yellow-400/50 flash-banner">
      <div className="flex items-center gap-4">
        {/* Icon */}
        <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-5 h-5 text-yellow-200" />
            <h3 className="text-lg text-white">
              {remainingUses > 0 ? 'Modo Visitante' : '⚠️ Limite Atingido!'}
            </h3>
          </div>
          <p className="text-sm text-white/90 mb-2">
            {getMessage()}
          </p>
          
          {remainingUses === 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-3">
              <div className="flex items-center gap-1.5 text-xs text-white/80">
                <Infinity className="w-4 h-4 text-green-300" />
                <span>IA ilimitada</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/80">
                <Infinity className="w-4 h-4 text-blue-300" />
                <span>Games ilimitados</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/80">
                <Infinity className="w-4 h-4 text-purple-300" />
                <span>Chat ilimitado</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-white/80">
                <Infinity className="w-4 h-4 text-pink-300" />
                <span>Fórum ilimitado</span>
              </div>
            </div>
          )}

          <button
            onClick={onRegisterClick}
            className="px-6 py-2.5 rounded-xl bg-white text-orange-600 hover:bg-yellow-50 transition-all hover:scale-105 shadow-lg flex items-center gap-2 group"
          >
            <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="font-semibold">
              {remainingUses > 0 ? 'Cadastre-se GRÁTIS e tenha acesso ilimitado!' : 'Cadastre-se GRÁTIS Agora!'}
            </span>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Banner compacto para quando ainda tem usos
export function CompactRegisterBanner({ onRegisterClick, remainingUses = 0 }: { onRegisterClick: () => void; remainingUses: number }) {
  return (
    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-600/80 to-red-600/80 backdrop-blur-sm border border-orange-400/30 shadow-lg">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
          <div>
            <p className="text-sm text-white">
              <span className="font-semibold">{remainingUses} {remainingUses === 1 ? 'uso restante' : 'usos restantes'}</span> como visitante
            </p>
            <p className="text-xs text-white/80">Cadastre-se grátis para acesso ilimitado</p>
          </div>
        </div>
        <button
          onClick={onRegisterClick}
          className="px-4 py-2 rounded-lg bg-white text-orange-600 hover:bg-yellow-50 transition-all hover:scale-105 shadow-md flex-shrink-0"
        >
          <span className="text-sm font-semibold">Cadastrar</span>
        </button>
      </div>
    </div>
  );
}
