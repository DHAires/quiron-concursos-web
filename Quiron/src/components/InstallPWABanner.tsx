import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Monitor } from 'lucide-react';
import { isAppInstalled, promptInstall } from '../utils/registerServiceWorker';

export function InstallPWABanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Não mostrar em ambientes de preview/desenvolvimento
    const isPreview = window.location.hostname.includes('figma') ||
                     window.location.hostname.includes('localhost') ||
                     window.location.hostname.includes('127.0.0.1');
    
    if (isPreview) {
      console.log('ℹ️ Install banner desabilitado em ambiente de preview');
      return;
    }

    // Verificar se já está instalado
    if (isAppInstalled()) {
      return;
    }

    // Verificar se foi dispensado antes (localStorage)
    const wasDismissed = localStorage.getItem('pwa-banner-dismissed');
    if (wasDismissed) {
      const dismissedTime = parseInt(wasDismissed);
      const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
      
      // Mostrar novamente após 7 dias
      if (daysSinceDismissed < 7) {
        return;
      }
    }

    // Detectar iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(isIOSDevice);

    // Android/Desktop
    if (!isIOSDevice) {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        setDeferredPrompt(e);
        setShowBanner(true);
      });
    } else {
      // iOS - mostrar instruções
      setShowBanner(true);
    }

    // Detectar quando app é instalado
    window.addEventListener('appinstalled', () => {
      setShowBanner(false);
      console.log('✅ PWA instalado com sucesso!');
    });
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`Usuário escolheu: ${outcome}`);
    
    if (outcome === 'accepted') {
      setShowBanner(false);
    }
    
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    setDismissed(true);
    localStorage.setItem('pwa-banner-dismissed', Date.now().toString());
  };

  if (!showBanner || dismissed) return null;

  // Banner para iOS
  if (isIOS) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl animate-slide-up">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-4">
            <Smartphone className="w-8 h-8 flex-shrink-0 mt-1" />
            
            <div className="flex-1">
              <h3 className="text-lg mb-2">
                📱 Instalar Quiron Concursos no iPhone/iPad
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Para instalar este app na sua tela inicial:
              </p>
              
              <ol className="text-sm space-y-2 opacity-90">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">1.</span>
                  <span>Toque no botão <strong>Compartilhar</strong> <span className="inline-block">📤</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">2.</span>
                  <span>Role para baixo e toque em <strong>"Adicionar à Tela de Início"</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0">3.</span>
                  <span>Toque em <strong>"Adicionar"</strong> no canto superior direito</span>
                </li>
              </ol>
            </div>

            <button
              onClick={handleDismiss}
              className="flex-shrink-0 w-8 h-8 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Banner para Android/Desktop
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <Download className="w-6 h-6" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg mb-1">
              🎮 Instalar Quiron Concursos
            </h3>
            <p className="text-sm opacity-90">
              Instale nosso app na sua tela inicial para acesso rápido e funcionar offline!
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleInstall}
              className="px-6 py-3 rounded-xl bg-white text-blue-600 hover:bg-gray-100 transition-all shadow-lg flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              <span className="hidden sm:inline">Instalar</span>
            </button>
            
            <button
              onClick={handleDismiss}
              className="w-10 h-10 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Adicionar estilos CSS inline para a animação
const styles = `
  @keyframes slide-up {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .animate-slide-up {
    animation: slide-up 0.3s ease-out;
  }
`;

// Injetar estilos no head
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}