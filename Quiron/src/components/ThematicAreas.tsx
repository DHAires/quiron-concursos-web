import React from 'react';
import { Trophy, HelpCircle, MessageCircle, Play } from 'lucide-react';

interface ThematicAreasProps {
  onNavigateToQuestions?: (areaId: string) => void;
  onNavigateToGame?: (areaId: string) => void;
  onNavigateToRanking?: () => void;
  onNavigateToForum?: () => void;
}

export function ThematicAreas({ onNavigateToQuestions, onNavigateToGame, onNavigateToRanking, onNavigateToForum }: ThematicAreasProps) {
  const [activeButtons, setActiveButtons] = React.useState<Record<string, string | null>>({});

  const handleButtonClick = (areaId: string, buttonType: string) => {
    console.log('Button clicked:', areaId, buttonType);
    
    setActiveButtons(prev => ({
      ...prev,
      [`${areaId}-${buttonType}`]: 'active'
    }));
    
    // Remove active state after animation
    setTimeout(() => {
      setActiveButtons(prev => ({
        ...prev,
        [`${areaId}-${buttonType}`]: null
      }));
    }, 300);

    // Navigate to questions if the button is "questoes" and callback is provided
    if (buttonType === 'questoes' && onNavigateToQuestions) {
      console.log('Navigating to questions with area:', areaId);
      setTimeout(() => {
        onNavigateToQuestions(areaId);
      }, 300);
    }

    // Navigate to game if the button is "jogar" and callback is provided
    if (buttonType === 'jogar' && onNavigateToGame) {
      console.log('Navigating to game with area:', areaId);
      setTimeout(() => {
        onNavigateToGame(areaId);
      }, 300);
    }

    // Navigate to ranking if the button is "ranking" and callback is provided
    if (buttonType === 'ranking' && onNavigateToRanking) {
      console.log('Navigating to ranking');
      setTimeout(() => {
        onNavigateToRanking();
      }, 300);
    }

    // Navigate to forum if the button is "forum" and callback is provided
    if (buttonType === 'forum' && onNavigateToForum) {
      console.log('Navigating to forum');
      setTimeout(() => {
        onNavigateToForum();
      }, 300);
    }
  };

  const areas = [
    {
      id: 'juridica',
      title: 'Área Jurídica',
      description: 'Direito Constitucional, Administrativo e mais',
      gradient: 'from-blue-600 via-blue-500 to-cyan-600',
      borderColor: 'border-blue-400/40',
      shadowColor: 'shadow-blue-500/30',
      icon: '⚖️',
      stats: { questions: 1243, completion: 87 },
      buttonOutline: 'border-blue-200',
      buttonBg: 'bg-blue-500/20 hover:bg-blue-500/40',
      buttonText: 'text-blue-100',
      jogarBg: 'bg-cyan-400 hover:bg-cyan-300',
      jogarText: 'text-cyan-950',
    },
    {
      id: 'policial',
      title: 'Área Policial',
      description: 'Legislação Penal, Processo Penal e Criminalística',
      gradient: 'from-red-600 via-red-500 to-red-700',
      borderColor: 'border-red-400/40',
      shadowColor: 'shadow-red-600/40',
      icon: '🚔',
      stats: { questions: 892, completion: 78 },
      buttonOutline: 'border-red-200',
      buttonBg: 'bg-red-500/20 hover:bg-red-500/40',
      buttonText: 'text-red-100',
      jogarBg: 'bg-yellow-400 hover:bg-yellow-300',
      jogarText: 'text-yellow-950',
    },
    {
      id: 'gerais',
      title: 'Conhecimentos Gerais',
      description: 'Português, Informática, Atualidades e Raciocínio Lógico',
      gradient: 'from-purple-600 via-fuchsia-500 to-pink-600',
      borderColor: 'border-purple-400/40',
      shadowColor: 'shadow-purple-500/30',
      icon: '🧠',
      stats: { questions: 2340, completion: 92 },
      buttonOutline: 'border-purple-200',
      buttonBg: 'bg-purple-500/20 hover:bg-purple-500/40',
      buttonText: 'text-purple-100',
      jogarBg: 'bg-pink-500 hover:bg-pink-400',
      jogarText: 'text-pink-950',
    },
    {
      id: 'fiscal',
      title: 'Fiscal-Bancária',
      description: 'Economia, Finanças e Contabilidade',
      gradient: 'from-yellow-500 via-amber-500 to-yellow-600',
      borderColor: 'border-yellow-400/40',
      shadowColor: 'shadow-yellow-500/30',
      icon: '📊',
      stats: { questions: 1567, completion: 83 },
      buttonOutline: 'border-yellow-200',
      buttonBg: 'bg-yellow-500/20 hover:bg-yellow-500/40',
      buttonText: 'text-yellow-100',
      jogarBg: 'bg-orange-500 hover:bg-orange-400',
      jogarText: 'text-orange-950',
    },
  ];

  return (
    <div className="mb-0">
      <h3 className="text-xl mb-4 flex items-center gap-2">
        <Trophy className="w-6 h-6 text-red-500" />
        Áreas Temáticas do Game
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {areas.map((area) => (
          <div
            key={area.id}
            className={`shine-card rounded-3xl bg-gradient-to-br ${area.gradient} p-8 border ${area.borderColor} ${area.shadowColor} shadow-lg transition-all relative overflow-hidden hover:scale-[1.02] hover:shadow-2xl`}
          >
            {/* Decorative circle */}
            <div className="absolute top-6 right-6 w-3 h-3 rounded-full bg-white/30"></div>
            
            {/* Icon and Title */}
            <div className="mb-4 relative z-10">
              <span className="text-5xl mb-3 block">{area.icon}</span>
              <h4 className="text-2xl mb-2">{area.title}</h4>
              <p className="text-sm text-white/80">{area.description}</p>
            </div>

            {/* Action Buttons Grid 2x2 */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {/* Questões Button */}
              <button
                className={`shimmer-button bg-white/10 hover:bg-white/15 backdrop-blur-sm border-2 border-white/80 px-5 py-2.5 rounded-full transition-all shadow-lg ${area.shadowColor} hover:shadow-xl hover:${area.shadowColor} hover:-translate-y-1 flex items-center justify-center gap-2 group active:translate-y-0 ${
                  activeButtons[`${area.id}-questoes`] === 'active' ? 'bg-white/30 scale-110' : ''
                }`}
                title="Questões"
                onClick={() => handleButtonClick(area.id, 'questoes')}
              >
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm">Questões</span>
              </button>
              
              {/* Ranking Button */}
              <button
                className={`shimmer-button bg-white/10 hover:bg-white/15 backdrop-blur-sm border-2 border-white/80 px-5 py-2.5 rounded-full transition-all shadow-lg ${area.shadowColor} hover:shadow-xl hover:${area.shadowColor} hover:-translate-y-1 flex items-center justify-center gap-2 group active:translate-y-0 ${
                  activeButtons[`${area.id}-ranking`] === 'active' ? 'bg-white/30 scale-110' : ''
                }`}
                title="Ranking"
                onClick={() => handleButtonClick(area.id, 'ranking')}
              >
                <Trophy className="w-4 h-4" />
                <span className="text-sm">Ranking</span>
              </button>
              
              {/* Fórum Button */}
              <button
                className={`shimmer-button bg-white/10 hover:bg-white/15 backdrop-blur-sm border-2 border-white/80 px-5 py-2.5 rounded-full transition-all shadow-lg ${area.shadowColor} hover:shadow-xl hover:${area.shadowColor} hover:-translate-y-1 flex items-center justify-center gap-2 group active:translate-y-0 ${
                  activeButtons[`${area.id}-forum`] === 'active' ? 'bg-white/30 scale-110' : ''
                }`}
                title="Fórum"
                onClick={() => handleButtonClick(area.id, 'forum')}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">Fórum</span>
              </button>
              
              {/* Jogar Button - Destacado */}
              <button
                className={`shimmer-button ${area.jogarBg} ${area.jogarText} border-2 border-yellow-300/50 px-5 py-2.5 rounded-full transition-all shadow-lg ${area.shadowColor} hover:shadow-xl hover:${area.shadowColor} hover:-translate-y-1 flex items-center justify-center gap-2 group active:translate-y-0 ${
                  activeButtons[`${area.id}-jogar`] === 'active' ? 'brightness-125 scale-110' : ''
                }`}
                title="Jogar"
                onClick={() => handleButtonClick(area.id, 'jogar')}
              >
                <Play className="w-4 h-4 fill-current" />
                <span className="text-sm font-bold">JOGAR</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}