import React from 'react';
import { Smartphone, Download, Star, Apple, Play } from 'lucide-react';

interface AppPromoBannerProps {
  className?: string;
  variant?: 'compact' | 'full';
}

export function AppPromoBanner({ className = '', variant = 'full' }: AppPromoBannerProps) {
  if (variant === 'compact') {
    return (
      <div className={`p-3 rounded-xl bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 ${className}`}>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center flex-shrink-0">
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm">
                Baixe nosso app para estudar offline
              </p>
              <div className="flex items-center gap-1 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-xs text-gray-400 ml-1">4.8 • 10k+</span>
              </div>
            </div>
          </div>
          <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 transition-all flex-shrink-0 text-sm">
            Baixar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-6 rounded-3xl bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-purple-900/30 border-2 border-purple-500/30 shadow-xl ${className}`}>
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* App Icon */}
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-2xl shadow-red-500/50 flex-shrink-0">
          <Smartphone className="w-10 h-10 text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl mb-2 flex items-center justify-center md:justify-start gap-2">
            Baixe o App Quiron Concursos
          </h3>
          <p className="text-gray-300 mb-3">
            Estude em qualquer lugar, mesmo offline! Acesse questões, games e a IA Prometheus direto do seu celular.
          </p>
          
          {/* Rating */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-400">4.8 • Mais de 10.000 downloads</span>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            {/* Google Play */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-xl bg-black hover:bg-gray-900 border-2 border-gray-700 hover:border-gray-600 transition-all flex items-center gap-3 hover:scale-105"
            >
              <Play className="w-6 h-6 text-green-400 fill-green-400" />
              <div className="text-left">
                <div className="text-xs text-gray-400">Disponível no</div>
                <div className="text-sm">Google Play</div>
              </div>
            </a>

            {/* Apple Store */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-xl bg-black hover:bg-gray-900 border-2 border-gray-700 hover:border-gray-600 transition-all flex items-center gap-3 hover:scale-105"
            >
              <Apple className="w-6 h-6 text-white" />
              <div className="text-left">
                <div className="text-xs text-gray-400">Baixar na</div>
                <div className="text-sm">App Store</div>
              </div>
            </a>
          </div>
        </div>

        {/* Download Icon */}
        <div className="hidden lg:block">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-600/20 to-purple-600/20 flex items-center justify-center border-2 border-red-500/30">
            <Download className="w-12 h-12 text-red-400 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Banner compacto para mobile
export function MobileAppBanner({ className = '' }: { className?: string }) {
  return (
    <div className={`fixed bottom-4 left-4 right-4 md:hidden z-40 ${className}`}>
      <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-900 via-blue-900 to-purple-900 border-2 border-purple-500/50 shadow-2xl backdrop-blur-md">
        <button 
          className="absolute top-2 right-2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-xs"
          onClick={(e) => {
            e.currentTarget.parentElement?.parentElement?.remove();
          }}
        >
          ×
        </button>
        
        <div className="flex items-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center">
            <Smartphone className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-sm">Baixe nosso app</p>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <a
            href="#"
            className="flex-1 px-3 py-2 rounded-lg bg-black border border-gray-700 flex items-center justify-center gap-2 text-sm"
          >
            <Play className="w-4 h-4 text-green-400" />
            <span>Play Store</span>
          </a>
          <a
            href="#"
            className="flex-1 px-3 py-2 rounded-lg bg-black border border-gray-700 flex items-center justify-center gap-2 text-sm"
          >
            <Apple className="w-4 h-4" />
            <span>App Store</span>
          </a>
        </div>
      </div>
    </div>
  );
}
