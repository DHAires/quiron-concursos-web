/**
 * 🎁 BOTÃO DE ANÚNCIO PREMIADO
 * 
 * Botão para assistir anúncio voluntário e ganhar +5 energia
 * Aparece no header e em modais de "sem energia"
 */

import React, { useState, useEffect } from 'react';
import { Zap, Gift } from 'lucide-react';
import { Button } from './ui/button';
import { showRewardedAd, canShowRewardedAd, getAdStats } from '../utils/admob';
import { toast } from 'sonner@2.0.3';
import { ADMOB_CONFIG } from '../config/admob';

interface AdRewardButtonProps {
  onEnergyGained?: (energy: number) => void;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'sm' | 'default' | 'lg';
  showLabel?: boolean;
  className?: string;
}

export function AdRewardButton({
  onEnergyGained,
  variant = 'default',
  size = 'default',
  showLabel = true,
  className = '',
}: AdRewardButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [canShow, setCanShow] = useState(true);
  const [remaining, setRemaining] = useState(0);

  useEffect(() => {
    updateStats();
  }, []);

  function updateStats() {
    const stats = getAdStats();
    setCanShow(stats.rewardedRemaining > 0);
    setRemaining(stats.rewardedRemaining);
  }

  async function handleClick() {
    if (!canShowRewardedAd()) {
      toast.error('❌ Limite diário de anúncios atingido!', {
        description: 'Volte amanhã para ganhar mais energia',
      });
      return;
    }

    setIsLoading(true);

    try {
      const success = await showRewardedAd((energy) => {
        // Callback de recompensa
        toast.success(`⚡ Você ganhou ${energy} energias!`, {
          description: 'Continue estudando e conquistando!',
          duration: 5000,
        });

        if (onEnergyGained) {
          onEnergyGained(energy);
        }

        updateStats();
      });

      if (!success) {
        toast.error('❌ Não foi possível carregar o anúncio', {
          description: 'Tente novamente em alguns instantes',
        });
      }
    } catch (error) {
      console.error('Erro ao exibir anúncio premiado:', error);
      toast.error('❌ Erro ao carregar anúncio');
    } finally {
      setIsLoading(false);
    }
  }

  if (!canShow) {
    return null;
  }

  return (
    <Button
      variant={variant}
      size={size}
      onClick={handleClick}
      disabled={isLoading || !canShow}
      className={`group relative ${className}`}
    >
      {/* Ícone animado */}
      <div className="relative">
        <Zap className={`${showLabel ? 'mr-2' : ''} h-4 w-4 text-yellow-400 animate-pulse`} />
        {remaining <= 3 && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-yellow-500 text-[8px] items-center justify-center text-white font-bold">
              {remaining}
            </span>
          </span>
        )}
      </div>

      {/* Label */}
      {showLabel && (
        <span className="font-semibold">
          {isLoading ? 'Carregando...' : `+${ADMOB_CONFIG.REWARDED_ENERGY} Energia`}
        </span>
      )}

      {/* Ícone de presente (hover) */}
      {showLabel && (
        <Gift className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      )}
    </Button>
  );
}

/**
 * 🎁 MODAL DE SEM ENERGIA
 * 
 * Exibe quando usuário fica sem energia com CTA para assistir anúncio
 */
interface NoEnergyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentEnergy: number;
  onEnergyGained: (energy: number) => void;
}

export function NoEnergyModal({ isOpen, onClose, currentEnergy, onEnergyGained }: NoEnergyModalProps) {
  if (!isOpen || currentEnergy > 0) return null;

  const stats = getAdStats();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-yellow-500/50 rounded-2xl p-8 max-w-md mx-4 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/20 mb-4">
            <Zap className="w-10 h-10 text-yellow-400 animate-pulse" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-2">
            Sem Energia! ⚡
          </h2>
          
          <p className="text-slate-300">
            Você gastou toda sua energia de estudo.
          </p>
        </div>

        {/* CTA Principal */}
        <div className="space-y-4 mb-6">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-xl p-4 text-center">
            <p className="text-white font-bold text-lg mb-2">
              🎁 Ganhe Energia Grátis!
            </p>
            <p className="text-yellow-100 text-sm">
              Assista um anúncio e ganhe +{ADMOB_CONFIG.REWARDED_ENERGY} energia
            </p>
          </div>

          {/* Botão de Anúncio */}
          <AdRewardButton
            onEnergyGained={(energy) => {
              onEnergyGained(energy);
              if (energy >= 5) {
                onClose();
              }
            }}
            variant="default"
            size="lg"
            showLabel={true}
            className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white font-bold py-6 text-lg shadow-lg shadow-yellow-500/50"
          />

          {/* Contador */}
          {stats.rewardedRemaining > 0 && (
            <p className="text-center text-sm text-slate-400">
              Você pode assistir mais {stats.rewardedRemaining} anúncio{stats.rewardedRemaining > 1 ? 's' : ''} hoje
            </p>
          )}
        </div>

        {/* Opções alternativas */}
        <div className="border-t border-slate-700 pt-4 space-y-2">
          <p className="text-center text-sm text-slate-400 mb-3">
            Ou compre energia premium:
          </p>
          
          <Button
            variant="outline"
            className="w-full border-purple-500/50 text-purple-300 hover:bg-purple-500/10"
            onClick={() => {
              onClose();
              // Navegar para loja
              window.location.hash = '#loja';
            }}
          >
            🛒 Ir para Loja
          </Button>

          <Button
            variant="ghost"
            className="w-full text-slate-400 hover:text-white"
            onClick={onClose}
          >
            Voltar depois
          </Button>
        </div>
      </div>
    </div>
  );
}
