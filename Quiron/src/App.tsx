import React, { useState, useEffect } from "react";
import { Capacitor } from "@capacitor/core";
import { Header } from "./components/layout/Header";
import { Sidebar, ViewType } from "./components/Sidebar";
import { DashboardView } from "./components/views/DashboardView";
import { LandingPage } from "./components/LandingPage";
import { PrometheusChat } from "./components/PrometheusChat";
import { Questions } from "./components/Questions";
import { EpicGame } from "./components/EpicGame";
import { RankingPage } from "./components/RankingPage";
import { Forum } from "./components/Forum";
import { CommunityChat } from "./components/CommunityChat";
import { QuestionBankViewer } from "./components/QuestionBankViewer";
import { ProfilePage } from "./components/ProfilePage";
import { StorePage } from "./components/StorePage";
import { SupportPage } from "./components/SupportPage";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { LoginModal } from "./components/auth/LoginModal";
import { RegisterModal } from "./components/auth/RegisterModal";
import { AdminGameManager } from "./components/AdminGameManager";
import { initializeAdMob, showBanner, hideBanner } from "./utils/admob";
import { DoomRunner3D } from "./components/r3f/DoomRunner3D";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfUse } from "./components/TermsOfUse";
import { AdPartners } from "./components/AdPartners";
import { NoEnergyModal } from "./components/AdRewardButton";
import { AIAnalysisPage } from "./components/AIAnalysisPage";

function App() {
  const [activeView, setActiveView] =
    useState<ViewType>("landing");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] =
    useState(false);
  const [user, setUser] = useState<any>(null);
  const [session, setSession] = useState<any>(null);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [userEnergy, setUserEnergy] = useState(10); // ⚡ Sistema de energia
  const [showNoEnergyModal, setShowNoEnergyModal] = useState(false); // Modal de sem energia

  // State for question practice navigation
  const [practiceParams, setPracticeParams] = useState<{
    area: string;
    subject: string;
    topic: string;
    topicName: string;
  } | null>(null);

  // ⚡ Inicializa AdMob em plataformas nativas
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      console.log('🎮 Inicializando AdMob...');
      initializeAdMob()
        .then(() => {
          console.log('✅ AdMob inicializado com sucesso');
          // Mostra banner no rodapé
          showBanner();
        })
        .catch((error) => {
          console.error('❌ Erro ao inicializar AdMob:', error);
        });
    } else {
      console.log('🌐 Modo web - AdMob desabilitado');
    }
  }, []);

  // 🔄 Restaurar sessão do localStorage ao carregar
  useEffect(() => {
    const storedSession = localStorage.getItem('quiron_session');
    
    if (storedSession) {
      try {
        const { user: storedUser, session: storedSessionData, timestamp } = JSON.parse(storedSession);
        
        // Verifica se a sessão não expirou (7 dias)
        const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
        if (Date.now() - timestamp < sevenDaysInMs) {
          setUser(storedUser);
          setSession(storedSessionData);
          
          if (storedUser.energy) {
            setUserEnergy(storedUser.energy);
          }
          
          console.log(`✅ [SESSION] Sessão restaurada: ${storedUser.email} com ${storedUser.energy || 10}⚡`);
        } else {
          // Sessão expirada
          localStorage.removeItem('quiron_session');
          console.log('⏰ [SESSION] Sessão expirada, removida');
        }
      } catch (error) {
        console.error('❌ [SESSION] Erro ao restaurar sessão:', error);
        localStorage.removeItem('quiron_session');
      }
    }
  }, []);

  // 🏷️ Controla visibilidade do banner baseado na view
  useEffect(() => {
    if (Capacitor.isNativePlatform()) {
      // Esconde banner durante jogo para não atrapalhar
      if (activeView === 'game') {
        hideBanner();
      } else {
        showBanner();
      }
    }
  }, [activeView]);

  // Admin Panel - Atalho de teclado: Ctrl+Shift+A
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Admin Panel: Ctrl+Shift+A
      if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setShowAdminPanel(true);
        console.log('🔐 Admin Panel ativado via Ctrl+Shift+A');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Navigation functions
  const navigateTo = (view: ViewType) => {
    setActiveView(view);
    setIsSidebarOpen(false);
    setPracticeParams(null); // Reset practice params when changing views
  };

  const navigateToDashboard = () => navigateTo("dashboard");
  const navigateToQuestions = () => navigateTo("questions");
  const navigateToGame = () => navigateTo("game");
  const navigateToRanking = () => navigateTo("ranking");
  const navigateToForum = () => navigateTo("forum");
  const navigateToChat = () => navigateTo("chat");

  const navigateToPractice = (
    area: string,
    subject: string,
    topic: string,
    topicName: string,
  ) => {
    console.log(
      `Navigating to practice: area=${area}, subject=${subject}, topic=${topic}, topicName=${topicName}`,
    );
    setPracticeParams({ area, subject, topic, topicName });
    setActiveView("questions");
  };

  const handleBackFromPractice = () => {
    setPracticeParams(null);
    // Stay in questions view but reset params to show subject list
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const handleEnterApp = () => {
    setActiveView("dashboard");
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleLogin = (userData: any, sessionData: any) => {
    setUser(userData);
    setSession(sessionData);
    setShowLoginModal(false);
    
    // Atualiza energia do usuário logado
    if (userData.energy) {
      setUserEnergy(userData.energy);
      console.log(`✅ [LOGIN] Energia do usuário: ${userData.energy}⚡`);
    }
    
    // Salvar sessão no localStorage
    localStorage.setItem('quiron_session', JSON.stringify({
      user: userData,
      session: sessionData,
      timestamp: Date.now()
    }));
  };

  const handleRegister = (userData: any, sessionData: any) => {
    setUser(userData);
    setSession(sessionData);
    setShowRegisterModal(false);
    
    // Atualiza energia do usuário registrado
    if (userData.energy) {
      setUserEnergy(userData.energy);
      console.log(`✅ [REGISTER] Usuário criado com ${userData.energy}⚡`);
    }
    
    // Salvar sessão no localStorage
    localStorage.setItem('quiron_session', JSON.stringify({
      user: userData,
      session: sessionData,
      timestamp: Date.now()
    }));
  };

  const handleLogout = () => {
    setUser(null);
    setSession(null);
    setUserEnergy(10); // Reset para energia padrão
    localStorage.removeItem('quiron_session');
    console.log('🚪 [LOGOUT] Sessão encerrada');
    setActiveView('landing'); // Redirecionar para a landing page
  };

  const handleEnergyGain = (energy: number) => {
    setUserEnergy((prev) => prev + energy);
    console.log(`⚡ Energia atualizada: +${energy} (Total: ${userEnergy + energy})`);
  };

  // Render view based on activeView
  const renderView = () => {
    switch (activeView) {
      case "landing":
        return <LandingPage onEnter={handleEnterApp} />;

      case "dashboard":
        return (
          <DashboardView
            onNavigateToQuestions={navigateToQuestions}
            onNavigateToGame={navigateToGame}
            onNavigateToRanking={navigateToRanking}
            onNavigateToForum={navigateToForum}
            onNavigateToChat={navigateToChat}
          />
        );

      case "chat":
        return (
          <PrometheusChat
            onBack={navigateToDashboard}
            onRegisterClick={openRegisterModal}
          />
        );

      case "questions":
        return (
          <Questions
            onBack={navigateToDashboard}
            onNavigateToPractice={navigateToPractice}
            practiceParams={practiceParams}
            onBackFromPractice={handleBackFromPractice}
          />
        );

      case "game":
        return <EpicGame onBack={navigateToDashboard} user={user} />;

      case "ranking":
        return <RankingPage onBack={navigateToDashboard} />;

      case "forum":
        return <Forum onBack={navigateToDashboard} />;

      case "profile":
        return <ProfilePage onBack={navigateToDashboard} onLogout={handleLogout} />;

      case "store":
        return <StorePage 
          onBack={navigateToDashboard} 
          userEnergy={userEnergy}
          onEnergyGained={handleEnergyGain}
        />;

      case "support":
        return <SupportPage onBack={navigateToDashboard} />;

      case "community":
        return (
          <CommunityChat
            onBack={navigateToDashboard}
            onRegisterClick={openRegisterModal}
          />
        );

      case "questionbank":
        return (
          <QuestionBankViewer onBack={navigateToDashboard} />
        );

      case "privacy-policy":
        return <PrivacyPolicy onBack={navigateToDashboard} />;

      case "terms-of-use":
        return <TermsOfUse onBack={navigateToDashboard} />;

      case "ad-partners":
        return <AdPartners onBack={navigateToDashboard} />;

      case "analytics-ai":
        return <AIAnalysisPage onBack={navigateToDashboard} />;

      default:
        return <LandingPage onEnter={handleEnterApp} />;
    }
  };

  // Show only landing page without layout
  if (activeView === "landing") {
    return (
      <ErrorBoundary>
        <LandingPage onEnter={handleEnterApp} />
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white flex flex-col">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          onNavigate={navigateTo}
          activeView={activeView}
        />

        {/* Header */}
        <Header
          onMenuClick={toggleSidebar}
          onLoginClick={user ? undefined : openLoginModal}
          onRegisterClick={user ? undefined : openRegisterModal}
          onLogoutClick={user ? handleLogout : undefined}
          user={user}
          userEnergy={userEnergy}
          onEnergyGained={(energy) => {
            setUserEnergy((prev) => prev + energy);
            console.log(`⚡ Energia atualizada: +${energy} (Total: ${userEnergy + energy})`);
          }}
        />

        {/* Main Content */}
        <div className="flex-1">
          <main className="container mx-auto px-4 py-6 max-w-7xl">
            {renderView()}
          </main>
        </div>

        {/* Modals */}
        {showLoginModal && (
          <LoginModal
            onClose={() => setShowLoginModal(false)}
            onSwitchToRegister={() => {
              setShowLoginModal(false);
              setShowRegisterModal(true);
            }}
            onLoginSuccess={handleLogin}
          />
        )}

        {showRegisterModal && (
          <RegisterModal
            onClose={() => setShowRegisterModal(false)}
            onSwitchToLogin={() => {
              setShowRegisterModal(false);
              setShowLoginModal(true);
            }}
            onRegisterSuccess={handleRegister}
          />
        )}

        {showAdminPanel && (
          <AdminGameManager
            onClose={() => setShowAdminPanel(false)}
          />
        )}

        {showNoEnergyModal && (
          <NoEnergyModal
            isOpen={showNoEnergyModal}
            onClose={() => setShowNoEnergyModal(false)}
            currentEnergy={userEnergy}
            onEnergyGained={handleEnergyGain}
          />
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;