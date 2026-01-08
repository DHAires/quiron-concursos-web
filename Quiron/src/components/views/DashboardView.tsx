import React, { lazy, Suspense, useState, useEffect } from 'react';
import { WelcomeSection } from '../layout/WelcomeSection';
import { PrometheusCard } from '../layout/PrometheusCard';
import { PrivacyConsentModal } from '../PrivacyConsentModal';

// Lazy load components
const Analytics = lazy(() => import('../Analytics').then(m => ({ default: m.Analytics })));
const ThematicAreas = lazy(() => import('../ThematicAreas').then(m => ({ default: m.ThematicAreas })));
const PremiumBanner = lazy(() => import('../PremiumBanner').then(m => ({ default: m.PremiumBanner })));
const AdBannerResponsive = lazy(() => import('../GoogleAdSense').then(m => ({ default: m.AdBannerResponsive })));

// Loading fallback
const LoadingBox = () => (
  <div className="w-full h-32 bg-gray-900 rounded-2xl animate-pulse" />
);

interface DashboardViewProps {
  onNavigateToQuestions: () => void;
  onNavigateToGame: () => void;
  onNavigateToRanking: () => void;
  onNavigateToForum: () => void;
  onNavigateToChat?: () => void;
}

export function DashboardView({
  onNavigateToQuestions,
  onNavigateToGame,
  onNavigateToRanking,
  onNavigateToForum,
  onNavigateToChat
}: DashboardViewProps) {
  const [showPrivacyConsent, setShowPrivacyConsent] = useState(false);
  
  // Check if user has already accepted privacy policy
  useEffect(() => {
    const hasAcceptedPrivacy = localStorage.getItem('quiron_privacy_consent');
    if (!hasAcceptedPrivacy) {
      setShowPrivacyConsent(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('quiron_privacy_consent', 'all');
    localStorage.setItem('quiron_privacy_consent_date', new Date().toISOString());
    setShowPrivacyConsent(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem('quiron_privacy_consent', 'essential');
    localStorage.setItem('quiron_privacy_consent_date', new Date().toISOString());
    setShowPrivacyConsent(false);
  };
  
  return (
    <>
      {showPrivacyConsent && (
        <PrivacyConsentModal
          onAcceptAll={handleAcceptAll}
          onAcceptEssential={handleAcceptEssential}
        />
      )}
      
      <WelcomeSection />
      <PrometheusCard onNavigateToChat={onNavigateToChat} />
      
      <Suspense fallback={<LoadingBox />}>
        <Analytics />
      </Suspense>
      
      <Suspense fallback={<LoadingBox />}>
        <ThematicAreas 
          onNavigateToQuestions={onNavigateToQuestions}
          onNavigateToGame={onNavigateToGame}
          onNavigateToRanking={onNavigateToRanking}
          onNavigateToForum={onNavigateToForum}
        />
      </Suspense>
      
      <Suspense fallback={<LoadingBox />}>
        <div className="mt-8">
          <PremiumBanner />
        </div>
      </Suspense>
      
      <Suspense fallback={<LoadingBox />}>
        <div className="mb-8">
          <AdBannerResponsive className="min-h-[100px]" />
        </div>
      </Suspense>
    </>
  );
}