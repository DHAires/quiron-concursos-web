/**
 * 🎮 QUIRON CONCURSOS - CONFIGURAÇÃO ADMOB
 * 
 * IDs dos blocos de anúncios criados no Google AdMob
 * Data de criação: 07/01/2026
 * 
 * ESTRATÉGIA DE MONETIZAÇÃO:
 * - Banner: Sempre visível no rodapé (receita passiva)
 * - Intersticial: Tela cheia em transições (receita ativa)
 * - Premiado Voluntário: +5 energia (engajamento máximo)
 * - Intercalar Premiado: +2 energia (bônus surpresa)
 */

export const ADMOB_CONFIG = {
  // 📱 ID do aplicativo Android
  APP_ID: 'ca-app-pub-6610162198287913~1063558749',

  // 🏷️ BANNER (Faixa no rodapé - sempre visível)
  BANNER_ID: 'ca-app-pub-6610162198287913/4368718246',

  // 📺 INTERSTICIAL (Tela cheia em transições)
  INTERSTITIAL_ID: 'ca-app-pub-6610162198287913/1910075868',

  // 🎁 PREMIADO VOLUNTÁRIO (Botão "Assistir para ganhar energia")
  REWARDED_ID: 'ca-app-pub-6610162198287913/3087426165',
  REWARDED_ENERGY: 5, // ⚡ +5 ENERGIA

  // 🎬 INTERCALAR PREMIADO (Aparece automaticamente)
  INTERSTITIAL_REWARDED_ID: 'ca-app-pub-6610162198287913/9492535497',
  INTERSTITIAL_REWARDED_ENERGY: 2, // ⚡ +2 ENERGIA

  // ⏱️ CONFIGURAÇÕES DE FREQUÊNCIA
  INTERSTITIAL_COOLDOWN: 5 * 60 * 1000, // 5 minutos entre anúncios intersticiais
  INTERSTITIAL_AFTER_QUESTIONS: 5, // Mostra após 5 questões respondidas
  MAX_REWARDED_PER_DAY: 10, // Máximo de anúncios premiados voluntários por dia
  MAX_INTERSTITIAL_REWARDED_PER_DAY: 5, // Máximo de intercalares premiados por dia

  // 🎯 IDs DE TESTE (para desenvolvimento)
  TEST_IDS: {
    BANNER: 'ca-app-pub-3940256099942544/6300978111',
    INTERSTITIAL: 'ca-app-pub-3940256099942544/1033173712',
    REWARDED: 'ca-app-pub-3940256099942544/5224354917',
    INTERSTITIAL_REWARDED: 'ca-app-pub-3940256099942544/5354046379',
  },

  // 🔧 MODO DE DESENVOLVIMENTO
  USE_TEST_ADS: false, // Mude para true durante testes
} as const;

/**
 * 📊 POSICIONAMENTO ESTRATÉGICO DOS ANÚNCIOS:
 * 
 * 1. BANNER (Rodapé):
 *    - Todas as telas (exceto Game Épico em andamento)
 *    - Posição: Fixed bottom
 *    - Visibilidade: Sempre
 * 
 * 2. INTERSTICIAL (Tela Cheia):
 *    - Após completar quiz de questões
 *    - Entre áreas temáticas no Game Épico
 *    - Ao sair do Game Épico
 *    - Limite: 1x a cada 5 minutos
 * 
 * 3. PREMIADO VOLUNTÁRIO (+5 energia):
 *    - Botão no header (ícone ⚡+)
 *    - Modal "Sem Energia" com CTA
 *    - Página de Loja com destaque
 *    - Limite: 10x por dia
 * 
 * 4. INTERCALAR PREMIADO (+2 energia):
 *    - Após 5 questões no Game Épico
 *    - Ao completar área temática
 *    - Bônus surpresa positivo
 *    - Limite: 5x por dia
 */

/**
 * 🎮 INTEGRAÇÃO COM SISTEMA DE ENERGIA:
 * 
 * Quando usuário completa anúncio premiado:
 * 
 * ```typescript
 * import { ADMOB_CONFIG } from './config/admob';
 * 
 * // Anúncio premiado voluntário
 * onRewardedAdComplete(() => {
 *   addEnergy(ADMOB_CONFIG.REWARDED_ENERGY); // +5
 *   toast.success('⚡ Você ganhou 5 energias!');
 * });
 * 
 * // Anúncio intercalar premiado
 * onInterstitialRewardedComplete(() => {
 *   addEnergy(ADMOB_CONFIG.INTERSTITIAL_REWARDED_ENERGY); // +2
 *   toast.success('🎁 Bônus: +2 energias!');
 * });
 * ```
 */
