/**
 * 🎯 HOOK DE INTEGRAÇÃO DE ANÚNCIOS
 * 
 * Gerencia exibição automática de anúncios em momentos estratégicos
 */

import { useEffect, useRef } from 'react';
import { Capacitor } from '@capacitor/core';
import { showInterstitial, showInterstitialRewarded, canShowInterstitialRewarded } from '../utils/admob';

interface UseAdIntegrationProps {
  onRewardGained?: (energy: number) => void;
}

export function useAdIntegration({ onRewardGained }: UseAdIntegrationProps = {}) {
  const questionsAnsweredRef = useRef(0);
  const areasCompletedRef = useRef(0);

  /**
   * 📺 Mostra intersticial em transições naturais
   */
  const showTransitionAd = async () => {
    if (!Capacitor.isNativePlatform()) return;
    
    try {
      await showInterstitial();
    } catch (error) {
      console.error('Erro ao exibir intersticial:', error);
    }
  };

  /**
   * 🎬 Mostra intercalar premiado se disponível
   */
  const tryShowInterstitialRewarded = async () => {
    if (!Capacitor.isNativePlatform()) return false;
    
    if (!canShowInterstitialRewarded()) {
      return false;
    }

    try {
      const success = await showInterstitialRewarded((energy) => {
        if (onRewardGained) {
          onRewardGained(energy);
        }
      });
      
      return success;
    } catch (error) {
      console.error('Erro ao exibir intercalar premiado:', error);
      return false;
    }
  };

  /**
   * ✅ Registra questão respondida e exibe anúncio a cada 5
   */
  const onQuestionAnswered = async () => {
    questionsAnsweredRef.current++;
    
    console.log(`📊 Questões respondidas: ${questionsAnsweredRef.current}`);

    // A cada 5 questões, tenta mostrar intercalar premiado
    if (questionsAnsweredRef.current % 5 === 0) {
      const shown = await tryShowInterstitialRewarded();
      if (shown) {
        console.log('🎬 Intercalar premiado exibido após 5 questões');
      }
    }
  };

  /**
   * 🏆 Registra área temática completada
   */
  const onAreaCompleted = async () => {
    areasCompletedRef.current++;
    
    console.log(`🎯 Áreas completadas: ${areasCompletedRef.current}`);

    // Tenta mostrar intercalar premiado
    const shown = await tryShowInterstitialRewarded();
    if (shown) {
      console.log('🎬 Intercalar premiado exibido após completar área');
    }
  };

  /**
   * 📋 Registra quiz completado e exibe intersticial
   */
  const onQuizCompleted = async () => {
    console.log('✅ Quiz completado - exibindo intersticial');
    await showTransitionAd();
  };

  /**
   * 🚪 Ao sair do jogo, exibe intersticial
   */
  const onGameExit = async () => {
    console.log('🚪 Saindo do jogo - exibindo intersticial');
    await showTransitionAd();
  };

  /**
   * 🔄 Reset de contadores (útil para limpar estado)
   */
  const resetCounters = () => {
    questionsAnsweredRef.current = 0;
    areasCompletedRef.current = 0;
  };

  return {
    onQuestionAnswered,
    onAreaCompleted,
    onQuizCompleted,
    onGameExit,
    showTransitionAd,
    tryShowInterstitialRewarded,
    resetCounters,
    stats: {
      questionsAnswered: questionsAnsweredRef.current,
      areasCompleted: areasCompletedRef.current,
    }
  };
}

/**
 * 📊 EXEMPLO DE USO:
 * 
 * ```typescript
 * // No componente de Questions ou EpicGame
 * const adIntegration = useAdIntegration({
 *   onRewardGained: (energy) => {
 *     setUserEnergy(prev => prev + energy);
 *     toast.success(`🎁 Bônus: +${energy} energia!`);
 *   }
 * });
 * 
 * // Ao responder questão
 * function handleAnswer(answer: string) {
 *   checkAnswer(answer);
 *   adIntegration.onQuestionAnswered();
 * }
 * 
 * // Ao completar área
 * function handleAreaComplete() {
 *   saveProgress();
 *   adIntegration.onAreaCompleted();
 * }
 * 
 * // Ao completar quiz
 * function handleQuizComplete() {
 *   saveResults();
 *   adIntegration.onQuizCompleted();
 * }
 * 
 * // Ao sair do jogo
 * function handleBackClick() {
 *   adIntegration.onGameExit();
 *   navigateBack();
 * }
 * ```
 */
