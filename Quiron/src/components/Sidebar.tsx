import React from 'react';
import { 
  User, 
  Brain, 
  HelpCircle, 
  Gamepad2, 
  MessageSquare, 
  Users, 
  MessageCircle, 
  Trophy, 
  ShoppingBag, 
  LifeBuoy,
  X,
  Flame,
  BookOpen,
  Zap
} from 'lucide-react';

export type ViewType = 
  | 'landing'
  | 'dashboard' 
  | 'chat' 
  | 'questions' 
  | 'game' 
  | 'ranking' 
  | 'forum' 
  | 'profile' 
  | 'store'
  | 'support'
  | 'community'
  | 'questionbank'
  | 'analytics-ai'
  | 'privacy-policy'
  | 'terms-of-use'
  | 'ad-partners';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewType) => void;
  activeView?: ViewType;
}

export function Sidebar({ isOpen, onClose, onNavigate, activeView }: SidebarProps) {
  const menuItems: Array<{
    icon: any;
    label: string;
    color: string;
    bgHover: string;
    action: () => void;
    badge?: string;
  }> = [
    { icon: User, label: 'Perfil', color: 'text-blue-400', bgHover: 'hover:bg-blue-500/10', action: () => { onNavigate('profile'); onClose(); } },
    { icon: Brain, label: 'Análise IA', color: 'text-purple-400', bgHover: 'hover:bg-purple-500/10', action: () => { onNavigate('analytics-ai'); onClose(); }, badge: 'PREMIUM' },
    { icon: HelpCircle, label: 'Questões', color: 'text-green-400', bgHover: 'hover:bg-green-500/10', action: () => { onNavigate('questions'); onClose(); } },
    { icon: Gamepad2, label: 'Game Épico', color: 'text-red-400', bgHover: 'hover:bg-red-500/10', action: () => { onNavigate('game'); onClose(); } },
    { icon: Flame, label: 'Chat IA Prometheus', color: 'text-orange-400', bgHover: 'hover:bg-orange-500/10', action: () => { onNavigate('chat'); onClose(); } },
    { icon: Users, label: 'Chat Comunidade', color: 'text-cyan-400', bgHover: 'hover:bg-cyan-500/10', action: () => { onNavigate('community'); onClose(); } },
    { icon: MessageCircle, label: 'Fórum', color: 'text-yellow-400', bgHover: 'hover:bg-yellow-500/10', action: () => { onNavigate('forum'); onClose(); } },
    { icon: Trophy, label: 'Ranking', color: 'text-amber-400', bgHover: 'hover:bg-amber-500/10', action: () => { onNavigate('ranking'); onClose(); } },
    { icon: ShoppingBag, label: 'Loja', color: 'text-pink-400', bgHover: 'hover:bg-pink-500/10', action: () => { onNavigate('store'); onClose(); }, badge: 'EM BREVE' },
    { icon: LifeBuoy, label: 'Suporte', color: 'text-teal-400', bgHover: 'hover:bg-teal-500/10', action: () => { onNavigate('support'); onClose(); } },
  ];

  return (
    <>
      {/* Backdrop - NOW VISIBLE ON ALL SCREEN SIZES */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-[280px] bg-gradient-to-b from-gray-900 via-black to-gray-900 border-r border-red-500/30 shadow-2xl shadow-red-500/10 z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-6 border-b border-red-500/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-red-500/50">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-red-500">QUIRON</h2>
              <p className="text-xs text-gray-400">Menu Principal</p>
            </div>
          </div>
          
          {/* Close button - ALWAYS visible */}
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center transition-colors"
            title="Fechar menu"
          >
            <X className="w-5 h-5 text-red-400" />
          </button>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2 overflow-y-auto h-[calc(100%-200px)]">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${item.bgHover} transition-all hover:scale-105 hover:shadow-lg group relative ${
                activeView === item.label.toLowerCase().replace(/\s+/g, '-') ? 'bg-red-500/10' : ''
              }`}
              onClick={item.action}
            >
              <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
              <span className="text-white/90 group-hover:text-white transition-colors flex-1 text-left">
                {item.label}
              </span>
              {item.badge && (
                <span className={`px-2 py-0.5 text-xs rounded-full font-bold ${
                  item.badge === 'PREMIUM' 
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg shadow-yellow-500/50 animate-pulse' 
                    : 'bg-red-600 text-white animate-pulse'
                }`}>
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-red-500/30 bg-black/50">
          <div className="text-center">
            <p className="text-xs text-gray-400">Versão 1.0.0</p>
            <p className="text-xs text-red-400">© 2024 Quiron Concursos</p>
          </div>
        </div>
      </aside>
    </>
  );
}