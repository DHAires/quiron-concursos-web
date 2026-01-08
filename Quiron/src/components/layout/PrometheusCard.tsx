import React from 'react';
import { Flame, MessageCircle } from 'lucide-react';

interface PrometheusCardProps {
  onNavigateToChat?: () => void;
}

export function PrometheusCard({ onNavigateToChat }: PrometheusCardProps) {
  const handleClick = () => {
    if (onNavigateToChat) {
      onNavigateToChat();
    }
  };
  
  return (
    <div className="flash-banner w-full mb-8 p-5 md:p-6 rounded-3xl bg-gradient-to-r from-red-600 via-red-500 to-orange-500 transition-all shadow-2xl shadow-red-500/40">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
            <Flame className="w-9 h-9 md:w-11 md:h-11 text-white" />
          </div>
          <div className="text-left">
            <h3 className="text-2xl md:text-3xl mb-1">Prometheus IA ⚡</h3>
            <p className="text-sm md:text-base text-orange-100">O Fogo do Conhecimento</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/50"></div>
            <span className="text-sm md:text-base font-medium">Online</span>
          </div>
          <button
            onClick={handleClick}
            className="flex items-center gap-2.5 px-5 md:px-6 py-3 md:py-3.5 bg-white text-red-600 rounded-full hover:bg-red-50 transition-all shadow-xl hover:scale-105 transform whitespace-nowrap text-base md:text-lg font-bold"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
            <span>Conversar</span>
          </button>
        </div>
      </div>
    </div>
  );
}