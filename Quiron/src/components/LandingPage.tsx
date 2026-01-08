import React from 'react';
import { Sparkles, Zap, Users, MessageCircle, BookOpen, ShoppingBag, Gamepad2, Crown } from 'lucide-react';
import logoQuiron from 'figma:asset/70b524f863af498f327c1fdcc13c2dfe1cb4bd88.png';

interface LandingPageProps {
  onEnter: () => void;
}

export function LandingPage({ onEnter }: LandingPageProps) {
  const features = [
    {
      icon: Gamepad2,
      title: 'Corrida dos Heróis',
      description: 'Desafie-se no game épico 3D-Quiz',
      color: 'from-yellow-500 to-orange-500',
      emoji: '🏛️'
    },
    {
      icon: Zap,
      title: 'IA Prometheus',
      description: 'Chat revolucionário com inteligência artificial',
      color: 'from-purple-500 to-pink-500',
      emoji: '🔥'
    },
    {
      icon: Users,
      title: 'Chat Online',
      description: 'Converse com outros heróis em tempo real',
      color: 'from-blue-500 to-cyan-500',
      emoji: '💬'
    },
    {
      icon: MessageCircle,
      title: 'Fórum Épico',
      description: 'Compartilhe conhecimento e conquistas',
      color: 'from-green-500 to-emerald-500',
      emoji: '🗣️'
    },
    {
      icon: BookOpen,
      title: 'Banco de Questões',
      description: 'Milhares de questões para treinar',
      color: 'from-indigo-500 to-blue-500',
      emoji: '📚'
    },
    {
      icon: ShoppingBag,
      title: 'Loja Quiron',
      description: 'Produtos maravilhosos te aguardam',
      color: 'from-yellow-500 to-red-500',
      emoji: '🎁'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 relative overflow-hidden flex items-center justify-center p-1 md:p-2">
      {/* Efeitos de fundo externos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-800 rounded-full opacity-20 blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-700 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Banner Principal */}
      <div className="relative w-full max-w-md bg-gradient-to-br from-red-600 via-red-700 to-red-900 rounded-2xl border-4 border-blue-900 shadow-2xl overflow-hidden">
        {/* Efeitos de fundo internos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-5 left-3 w-24 h-24 bg-yellow-500 rounded-full opacity-20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-5 right-3 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        {/* Estrelas decorativas */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-yellow-300 animate-pulse-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 12 + 6}px`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.6
              }}
            >
              ⭐
            </div>
          ))}
        </div>

        {/* Conteúdo principal */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 py-4 md:px-5 md:py-6">
          
          {/* Logo */}
          <div className="mb-3 animate-float">
            <img 
              src={logoQuiron} 
              alt="Quiron Logo" 
              className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Título principal */}
          <div className="text-center mb-3">
            <div className="flex items-center justify-center gap-1.5 mb-1.5">
              <Crown className="w-4 h-4 md:w-5 md:h-5 text-yellow-300 animate-bounce-slow" />
              <h1 className="text-xl md:text-2xl text-white drop-shadow-lg">
                BEM-VINDO
              </h1>
              <Crown className="w-4 h-4 md:w-5 md:h-5 text-yellow-300 animate-bounce-slow" />
            </div>
            <h2 className="text-lg md:text-xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 bg-clip-text text-transparent mb-1.5">
              À JORNADA DOS HERÓIS
            </h2>
            <p className="text-xs md:text-sm text-yellow-100 max-w-md mx-auto">
              Prepare-se para conquistar sua aprovação! 🏛️
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-2 max-w-lg mx-auto mb-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm p-2 rounded-lg border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300 hover:scale-105"
                style={{
                  animation: 'fadeInUp 0.6s ease-out',
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'backwards'
                }}
              >
                <div className="relative flex flex-col items-center text-center">
                  <div className={`mb-1 p-1.5 rounded-md bg-gradient-to-br ${feature.color} shadow-lg`}>
                    <feature.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  <div className="text-base md:text-lg">{feature.emoji}</div>
                  <h3 className="text-[10px] md:text-xs text-yellow-300 leading-tight">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Botão de entrada épico */}
          <div className="relative group mb-3">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-lg blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-slow" />
            
            <button
              onClick={onEnter}
              className="relative px-5 py-2.5 md:px-6 md:py-3 bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500 hover:from-yellow-400 hover:via-yellow-300 hover:to-orange-400 text-red-900 text-base md:text-lg rounded-lg transition-all duration-300 shadow-xl hover:scale-110 flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>INICIAR JORNADA</span>
              <Sparkles className="w-4 h-4 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
            </button>
          </div>

          {/* Texto motivacional */}
          <p className="text-yellow-200 text-[10px] md:text-xs animate-pulse-slow text-center max-w-sm">
            ✨ Milhares de heróis conquistando! ✨
          </p>

          {/* Footer decorativo */}
          <div className="mt-3 flex items-center gap-2 text-yellow-300/70">
            <div className="h-px w-4 bg-gradient-to-r from-transparent to-yellow-300/50" />
            <span className="text-[10px]">Quiron © 2024</span>
            <div className="h-px w-4 bg-gradient-to-l from-transparent to-yellow-300/50" />
          </div>
        </div>
      </div>

      {/* Animações CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
}