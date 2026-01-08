/**
 * 🎮 QUIRON CONCURSOS - UTILITÁRIOS ADMOB
 * 
 * Funções para gerenciar anúncios AdMob via Capacitor
 * Inclui tracking de frequência e limites diários
 */

import { AdMob, BannerAdOptions, BannerAdSize, BannerAdPosition, InterstitialAdPluginEvents, RewardAdPluginEvents } from '@capacitor-community/admob';
import { ADMOB_CONFIG } from '../config/admob';

// 📊 Tracking de anúncios assistidos
interface AdTracking {
  lastInterstitialTime: number;
  rewardedCount: number;
  interstitialRewardedCount: number;
  lastResetDate: string;
}

const AD_TRACKING_KEY = 'quiron_ad_tracking';

/**
 * 🔧 Inicializa o AdMob
 */
export async function initializeAdMob(): Promise<void> {
  try {
    await AdMob.initialize({
      requestTrackingAuthorization: true,
      testingDevices: ADMOB_CONFIG.USE_TEST_ADS ? ['YOUR_TEST_DEVICE_ID'] : [],
      initializeForTesting: ADMOB_CONFIG.USE_TEST_ADS,
    });
    
    console.log('✅ AdMob inicializado com sucesso');
  } catch (error) {
    console.error('❌ Erro ao inicializar AdMob:', error);
    throw error;
  }
}

/**
 * 📊 Obtém tracking de anúncios
 */
function getAdTracking(): AdTracking {
  const today = new Date().toISOString().split('T')[0];
  const stored = localStorage.getItem(AD_TRACKING_KEY);
  
  if (stored) {
    const tracking: AdTracking = JSON.parse(stored);
    
    // Reset diário
    if (tracking.lastResetDate !== today) {
      return {
        lastInterstitialTime: 0,
        rewardedCount: 0,
        interstitialRewardedCount: 0,
        lastResetDate: today,
      };
    }
    
    return tracking;
  }
  
  return {
    lastInterstitialTime: 0,
    rewardedCount: 0,
    interstitialRewardedCount: 0,
    lastResetDate: today,
  };
}

/**
 * 💾 Salva tracking de anúncios
 */
function saveAdTracking(tracking: AdTracking): void {
  localStorage.setItem(AD_TRACKING_KEY, JSON.stringify(tracking));
}

/**
 * 🏷️ BANNER - Mostra banner no rodapé
 */
export async function showBanner(): Promise<void> {
  try {
    const options: BannerAdOptions = {
      adId: ADMOB_CONFIG.USE_TEST_ADS ? ADMOB_CONFIG.TEST_IDS.BANNER : ADMOB_CONFIG.BANNER_ID,
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: ADMOB_CONFIG.USE_TEST_ADS,
    };

    await AdMob.showBanner(options);
    console.log('✅ Banner exibido');
  } catch (error) {
    console.error('❌ Erro ao exibir banner:', error);
  }
}

/**
 * 🏷️ Esconde banner
 */
export async function hideBanner(): Promise<void> {
  try {
    await AdMob.hideBanner();
    console.log('✅ Banner escondido');
  } catch (error) {
    console.error('❌ Erro ao esconder banner:', error);
  }
}

/**
 * 📺 INTERSTICIAL - Mostra anúncio de tela cheia
 */
export async function showInterstitial(): Promise<boolean> {
  const tracking = getAdTracking();
  const now = Date.now();
  
  // Verifica cooldown
  if (now - tracking.lastInterstitialTime < ADMOB_CONFIG.INTERSTITIAL_COOLDOWN) {
    console.log('⏱️ Intersticial em cooldown');
    return false;
  }
  
  try {
    const adId = ADMOB_CONFIG.USE_TEST_ADS ? ADMOB_CONFIG.TEST_IDS.INTERSTITIAL : ADMOB_CONFIG.INTERSTITIAL_ID;
    
    await AdMob.prepareInterstitial({ adId });
    await AdMob.showInterstitial();
    
    tracking.lastInterstitialTime = now;
    saveAdTracking(tracking);
    
    console.log('✅ Intersticial exibido');
    return true;
  } catch (error) {
    console.error('❌ Erro ao exibir intersticial:', error);
    return false;
  }
}

/**
 * 🎁 PREMIADO VOLUNTÁRIO - Mostra anúncio com recompensa (+5 energia)
 */
export async function showRewardedAd(onReward: (energy: number) => void): Promise<boolean> {
  const tracking = getAdTracking();
  
  // Verifica limite diário
  if (tracking.rewardedCount >= ADMOB_CONFIG.MAX_REWARDED_PER_DAY) {
    console.log('⚠️ Limite diário de anúncios premiados atingido');
    return false;
  }
  
  try {
    const adId = ADMOB_CONFIG.USE_TEST_ADS ? ADMOB_CONFIG.TEST_IDS.REWARDED : ADMOB_CONFIG.REWARDED_ID;
    
    // Listener de recompensa
    const listener = await AdMob.addListener(RewardAdPluginEvents.Rewarded, (reward) => {
      console.log('🎁 Recompensa recebida:', reward);
      
      tracking.rewardedCount++;
      saveAdTracking(tracking);
      
      onReward(ADMOB_CONFIG.REWARDED_ENERGY);
      listener.remove();
    });
    
    // Listener de fechamento
    const dismissListener = await AdMob.addListener(RewardAdPluginEvents.Dismissed, () => {
      console.log('❌ Anúncio premiado fechado sem completar');
      dismissListener.remove();
    });
    
    await AdMob.prepareRewardVideoAd({ adId });
    await AdMob.showRewardVideoAd();
    
    console.log('✅ Anúncio premiado exibido');
    return true;
  } catch (error) {
    console.error('❌ Erro ao exibir anúncio premiado:', error);
    return false;
  }
}

/**
 * 🎬 INTERCALAR PREMIADO - Anúncio automático com recompensa (+2 energia)
 */
export async function showInterstitialRewarded(onReward: (energy: number) => void): Promise<boolean> {
  const tracking = getAdTracking();
  const now = Date.now();
  
  // Verifica cooldown e limite diário
  if (now - tracking.lastInterstitialTime < ADMOB_CONFIG.INTERSTITIAL_COOLDOWN) {
    console.log('⏱️ Intercalar premiado em cooldown');
    return false;
  }
  
  if (tracking.interstitialRewardedCount >= ADMOB_CONFIG.MAX_INTERSTITIAL_REWARDED_PER_DAY) {
    console.log('⚠️ Limite diário de intercalares premiados atingido');
    return false;
  }
  
  try {
    const adId = ADMOB_CONFIG.USE_TEST_ADS 
      ? ADMOB_CONFIG.TEST_IDS.INTERSTITIAL_REWARDED 
      : ADMOB_CONFIG.INTERSTITIAL_REWARDED_ID;
    
    // Listener de recompensa
    const listener = await AdMob.addListener(RewardAdPluginEvents.Rewarded, (reward) => {
      console.log('🎬 Bônus recebido:', reward);
      
      tracking.interstitialRewardedCount++;
      tracking.lastInterstitialTime = now;
      saveAdTracking(tracking);
      
      onReward(ADMOB_CONFIG.INTERSTITIAL_REWARDED_ENERGY);
      listener.remove();
    });
    
    await AdMob.prepareRewardVideoAd({ adId });
    await AdMob.showRewardVideoAd();
    
    console.log('✅ Intercalar premiado exibido');
    return true;
  } catch (error) {
    console.error('❌ Erro ao exibir intercalar premiado:', error);
    return false;
  }
}

/**
 * 📊 Verifica se pode mostrar anúncio premiado
 */
export function canShowRewardedAd(): boolean {
  const tracking = getAdTracking();
  return tracking.rewardedCount < ADMOB_CONFIG.MAX_REWARDED_PER_DAY;
}

/**
 * 📊 Verifica se pode mostrar intercalar premiado
 */
export function canShowInterstitialRewarded(): boolean {
  const tracking = getAdTracking();
  const now = Date.now();
  
  return (
    tracking.interstitialRewardedCount < ADMOB_CONFIG.MAX_INTERSTITIAL_REWARDED_PER_DAY &&
    now - tracking.lastInterstitialTime >= ADMOB_CONFIG.INTERSTITIAL_COOLDOWN
  );
}

/**
 * 📊 Obtém estatísticas de anúncios do dia
 */
export function getAdStats(): {
  rewardedRemaining: number;
  interstitialRewardedRemaining: number;
  canShowInterstitial: boolean;
} {
  const tracking = getAdTracking();
  const now = Date.now();
  
  return {
    rewardedRemaining: ADMOB_CONFIG.MAX_REWARDED_PER_DAY - tracking.rewardedCount,
    interstitialRewardedRemaining: ADMOB_CONFIG.MAX_INTERSTITIAL_REWARDED_PER_DAY - tracking.interstitialRewardedCount,
    canShowInterstitial: now - tracking.lastInterstitialTime >= ADMOB_CONFIG.INTERSTITIAL_COOLDOWN,
  };
}
