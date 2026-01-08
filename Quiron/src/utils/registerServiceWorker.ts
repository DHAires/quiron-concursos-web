// Quiron Concursos - Service Worker Registration
// Gerencia instalação, atualização e notificações do PWA

export interface ServiceWorkerConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onOffline?: () => void;
  onOnline?: () => void;
}

// Registrar Service Worker
export async function registerServiceWorker(config?: ServiceWorkerConfig) {
  // Verificar suporte
  if (!('serviceWorker' in navigator)) {
    console.warn('⚠️ Service Worker não suportado neste navegador');
    return;
  }

  // Verificar se está em ambiente de produção ou se o arquivo existe
  const isProduction = window.location.protocol === 'https:' && 
                      !window.location.hostname.includes('localhost') &&
                      !window.location.hostname.includes('127.0.0.1') &&
                      !window.location.hostname.includes('figma');

  // Não registrar em ambientes de preview (Figma, localhost sem build, etc)
  if (!isProduction) {
    console.log('ℹ️ Service Worker desabilitado em ambiente de desenvolvimento/preview');
    return;
  }

  try {
    console.log('🚀 Registrando Service Worker...');
    
    // Verificar se o arquivo existe antes de tentar registrar
    const swResponse = await fetch('/service-worker.js', { method: 'HEAD' });
    if (!swResponse.ok || swResponse.headers.get('content-type')?.includes('html')) {
      console.warn('⚠️ Service Worker não disponível neste ambiente');
      return;
    }

    const registration = await navigator.serviceWorker.register('/service-worker.js', {
      scope: '/'
    });

    console.log('✅ Service Worker registrado:', registration.scope);

    // Verificar atualizações
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      
      if (!newWorker) return;

      console.log('🔄 Nova versão do Service Worker encontrada!');

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // Nova versão disponível
            console.log('🎉 Nova versão disponível!');
            config?.onUpdate?.(registration);
            showUpdateNotification(registration);
          } else {
            // Primeira instalação
            console.log('✅ Service Worker instalado pela primeira vez!');
            config?.onSuccess?.(registration);
          }
        }
      });
    });

    // Verificar atualizações periodicamente (a cada hora)
    setInterval(() => {
      registration.update();
    }, 60 * 60 * 1000);

    return registration;
  } catch (error) {
    console.log('ℹ️ Service Worker não disponível:', error);
    // Não mostrar erro, apenas log informativo
    return undefined;
  }
}

// Desregistrar Service Worker
export async function unregisterServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  try {
    const registration = await navigator.serviceWorker.ready;
    const success = await registration.unregister();
    
    if (success) {
      console.log('✅ Service Worker desregistrado');
    }
    
    return success;
  } catch (error) {
    console.error('❌ Erro ao desregistrar Service Worker:', error);
    return false;
  }
}

// Limpar cache
export async function clearCache() {
  if (!('caches' in window)) return;

  try {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map(name => caches.delete(name)));
    console.log('✅ Cache limpo com sucesso');
    return true;
  } catch (error) {
    console.error('❌ Erro ao limpar cache:', error);
    return false;
  }
}

// Verificar status do cache
export async function getCacheStatus() {
  if (!('caches' in window)) return null;

  try {
    const cacheNames = await caches.keys();
    const cacheDetails = await Promise.all(
      cacheNames.map(async (name) => {
        const cache = await caches.open(name);
        const keys = await cache.keys();
        return {
          name,
          size: keys.length
        };
      })
    );
    
    return cacheDetails;
  } catch (error) {
    console.error('❌ Erro ao verificar cache:', error);
    return null;
  }
}

// Atualizar Service Worker manualmente
export async function updateServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  try {
    const registration = await navigator.serviceWorker.ready;
    await registration.update();
    console.log('🔄 Service Worker atualizado');
  } catch (error) {
    console.error('❌ Erro ao atualizar Service Worker:', error);
  }
}

// Mostrar notificação de atualização
function showUpdateNotification(registration: ServiceWorkerRegistration) {
  // Criar banner de atualização
  const banner = document.createElement('div');
  banner.id = 'sw-update-banner';
  banner.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: 90%;
    animation: slideUp 0.3s ease-out;
  `;

  banner.innerHTML = `
    <style>
      @keyframes slideUp {
        from {
          transform: translateX(-50%) translateY(100px);
          opacity: 0;
        }
        to {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
      }
    </style>
    <span style="font-size: 24px;">🎉</span>
    <div style="flex: 1;">
      <strong style="display: block; margin-bottom: 4px;">Nova versão disponível!</strong>
      <span style="font-size: 14px; opacity: 0.9;">Clique para atualizar o aplicativo</span>
    </div>
    <button id="sw-update-button" style="
      background: white;
      color: #3b82f6;
      border: none;
      padding: 10px 20px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s;
    ">
      Atualizar
    </button>
    <button id="sw-dismiss-button" style="
      background: transparent;
      color: white;
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 10px 20px;
      border-radius: 8px;
      cursor: pointer;
      transition: transform 0.2s;
    ">
      Depois
    </button>
  `;

  document.body.appendChild(banner);

  // Botão de atualizar
  const updateButton = document.getElementById('sw-update-button');
  updateButton?.addEventListener('click', () => {
    // Enviar mensagem para o Service Worker pular a espera
    registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
    
    // Recarregar página quando o novo SW assumir controle
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });
  });

  // Botão de dispensar
  const dismissButton = document.getElementById('sw-dismiss-button');
  dismissButton?.addEventListener('click', () => {
    banner.remove();
  });
}

// Monitorar conexão
export function monitorConnection(config?: ServiceWorkerConfig) {
  window.addEventListener('online', () => {
    console.log('✅ Conexão restaurada!');
    config?.onOnline?.();
    showConnectionNotification(true);
  });

  window.addEventListener('offline', () => {
    console.log('❌ Conexão perdida!');
    config?.onOffline?.();
    showConnectionNotification(false);
  });
}

// Mostrar notificação de conexão
function showConnectionNotification(isOnline: boolean) {
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${isOnline ? '#22c55e' : '#ef4444'};
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    animation: slideIn 0.3s ease-out;
  `;

  notification.innerHTML = `
    <style>
      @keyframes slideIn {
        from {
          transform: translateX(400px);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateX(0);
          opacity: 1;
        }
        to {
          transform: translateX(400px);
          opacity: 0;
        }
      }
    </style>
    <strong>${isOnline ? '✅ Você está online!' : '❌ Você está offline'}</strong>
  `;

  document.body.appendChild(notification);

  // Remover após 3 segundos
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Solicitar permissão para notificações
export async function requestNotificationPermission() {
  if (!('Notification' in window)) {
    console.warn('⚠️ Notificações não suportadas neste navegador');
    return 'denied';
  }

  if (Notification.permission === 'granted') {
    return 'granted';
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission;
  }

  return Notification.permission;
}

// Enviar notificação local
export async function sendLocalNotification(title: string, options?: NotificationOptions) {
  if (Notification.permission !== 'granted') {
    console.warn('⚠️ Permissão de notificação não concedida');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    
    await registration.showNotification(title, {
      icon: '/icons/icon-192x192.png',
      badge: '/icons/badge-72x72.png',
      vibrate: [200, 100, 200],
      ...options
    });
  } catch (error) {
    console.error('❌ Erro ao enviar notificação:', error);
  }
}

// Verificar se app está instalado
export function isAppInstalled(): boolean {
  // iOS
  if ((window.navigator as any).standalone) {
    return true;
  }

  // Android/Desktop
  if (window.matchMedia('(display-mode: standalone)').matches) {
    return true;
  }

  return false;
}

// Solicitar instalação do PWA
export function promptInstall(callback?: (installed: boolean) => void) {
  let deferredPrompt: any = null;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    console.log('💾 Prompt de instalação disponível');
  });

  return async () => {
    if (!deferredPrompt) {
      console.warn('⚠️ Prompt de instalação não disponível');
      callback?.(false);
      return;
    }

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`User response: ${outcome}`);
    deferredPrompt = null;
    callback?.(outcome === 'accepted');
  };
}

// Background Sync
export async function registerBackgroundSync(tag: string) {
  if (!('serviceWorker' in navigator) || !('SyncManager' in window)) {
    console.warn('⚠️ Background Sync não suportado');
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    await (registration as any).sync.register(tag);
    console.log(`✅ Background sync registrado: ${tag}`);
    return true;
  } catch (error) {
    console.error('❌ Erro ao registrar background sync:', error);
    return false;
  }
}

// Periodic Background Sync (Experimental)
export async function registerPeriodicSync(tag: string, minInterval: number) {
  if (!('serviceWorker' in navigator) || !('periodicSync' in navigator.serviceWorker)) {
    console.warn('⚠️ Periodic Sync não suportado');
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const status = await (navigator.permissions as any).query({
      name: 'periodic-background-sync',
    });

    if (status.state === 'granted') {
      await (registration as any).periodicSync.register(tag, {
        minInterval
      });
      console.log(`✅ Periodic sync registrado: ${tag}`);
      return true;
    }
  } catch (error) {
    console.error('❌ Erro ao registrar periodic sync:', error);
  }

  return false;
}

// Export all utilities
export default {
  registerServiceWorker,
  unregisterServiceWorker,
  clearCache,
  getCacheStatus,
  updateServiceWorker,
  monitorConnection,
  requestNotificationPermission,
  sendLocalNotification,
  isAppInstalled,
  promptInstall,
  registerBackgroundSync,
  registerPeriodicSync
};