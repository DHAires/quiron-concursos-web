import React, { useState, useEffect } from 'react';
import { Trophy, Swords, Users, User, Sparkles, Flame, Shield, Scale, Brain, Coins, ChevronRight, Play, BookOpen } from 'lucide-react';
import { MultiplayerLobby } from './MultiplayerLobby';
import { GameRules } from './GameRules';
import { GameResults } from './GameResults';
import { GodotGamePlayer } from './GodotGamePlayer';

interface ThematicArea {
  id: string;
  name: string;
  color: string;
  gradient: string;
  icon: React.ReactNode;
  subjects: string[];
}

const thematicAreas: ThematicArea[] = [
  {
    id: 'juridica',
    name: 'Área Jurídica',
    color: 'blue',
    gradient: 'from-blue-600 to-blue-500',
    icon: <Scale className="w-12 h-12" />,
    subjects: [
      'Direito Constitucional',
      'Direito Administrativo',
      'Direito Penal',
      'Direito Civil',
      'Direito do Trabalho'
    ]
  },
  {
    id: 'policial',
    name: 'Área Policial',
    color: 'red',
    gradient: 'from-red-600 to-red-500',
    icon: <Shield className="w-12 h-12" />,
    subjects: [
      'Legislação Penal Especial',
      'Criminologia',
      'Direitos Humanos',
      'Procedimentos Policiais'
    ]
  },
  {
    id: 'gerais',
    name: 'Conhecimentos Gerais',
    color: 'purple',
    gradient: 'from-purple-600 to-purple-500',
    icon: <Brain className="w-12 h-12" />,
    subjects: [
      'Português',
      'Raciocínio Lógico',
      'Informática',
      'Atualidades',
      'História do Brasil'
    ]
  },
  {
    id: 'fiscal',
    name: 'Área Fiscal-Bancária',
    color: 'yellow',
    gradient: 'from-yellow-600 to-yellow-500',
    icon: <Coins className="w-12 h-12" />,
    subjects: [
      'Direito Tributário',
      'Contabilidade',
      'AFO (Adm. Financeira e Orçamentária)',
      'Economia',
      'Conhecimentos Bancários'
    ]
  }
];

interface EpicGameProps {
  initialArea?: string; // 'juridica' | 'policial' | 'gerais' | 'fiscal'
  onBack?: () => void;
  user?: any; // User object from context
}

export function EpicGame({ initialArea, onBack, user }: EpicGameProps = {}) {
  const [step, setStep] = useState<'area' | 'subject' | 'mode' | 'lobby' | 'rules' | 'results' | 'playing'>('area');
  const [selectedArea, setSelectedArea] = useState<ThematicArea | null>(null);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [allSubjects, setAllSubjects] = useState(false);
  const [previousStep, setPreviousStep] = useState<'area' | 'subject' | 'mode' | 'lobby'>('mode');
  const [gameQuestions, setGameQuestions] = useState<any[]>([]);
  const [multiplayerRoomId, setMultiplayerRoomId] = useState<string | null>(null);
  const [multiplayerPlayers, setMultiplayerPlayers] = useState<any[]>([]);
  
  // Get user data
  const userId = user?.id || 'guest_' + Math.random().toString(36).substr(2, 9);
  const userName = user?.name || 'Herói Anônimo';
  const userEnergy = user?.energy || 10;

  // DEBUG: Log step changes
  useEffect(() => {
    console.log('🔄 [EPIC-GAME] Step mudou para:', step, {
      selectedArea: selectedArea?.id,
      hasQuestions: gameQuestions.length > 0,
      multiplayerRoomId
    });
  }, [step, selectedArea, gameQuestions.length, multiplayerRoomId]);

  // Auto-select area if initialArea prop is provided
  useEffect(() => {
    if (initialArea && !selectedArea) {
      const area = thematicAreas.find(a => a.id === initialArea);
      if (area) {
        console.log('Auto-selecting area from prop:', initialArea);
        setSelectedArea(area);
        setStep('subject');
      }
    }
  }, [initialArea, selectedArea]);

  const handleAreaSelect = (area: ThematicArea) => {
    setSelectedArea(area);
    setSelectedSubjects([]);
    setAllSubjects(false);
    setStep('subject');
  };

  const handleSubjectToggle = (subject: string) => {
    if (allSubjects) return; // Don't allow individual selection if "all" is checked
    
    setSelectedSubjects(prev => {
      if (prev.includes(subject)) {
        return prev.filter(s => s !== subject);
      } else {
        return [...prev, subject];
      }
    });
  };

  const handleAllSubjectsToggle = () => {
    setAllSubjects(!allSubjects);
    if (!allSubjects) {
      setSelectedSubjects(selectedArea?.subjects || []);
    } else {
      setSelectedSubjects([]);
    }
  };

  const handleContinueToMode = () => {
    if (allSubjects || selectedSubjects.length > 0) {
      setStep('mode');
    }
  };

  const handleStartGame = (mode: 'single' | 'multi') => {
    if (mode === 'single') {
      // Singleplayer: vai direto para o jogo Godot 4
      console.log('🎮 Starting SINGLEPLAYER game:', {
        area: selectedArea?.id,
        subjects: allSubjects ? 'all' : selectedSubjects,
        mode: 'singleplayer'
      });
      
      // Criar questões de exemplo para testar o Godot
      const mockQuestions = Array.from({ length: 30 }, (_, i) => ({
        id: `q_${i + 1}`,
        text: `Questão ${i + 1} de ${selectedArea?.name}`,
        correctAnswer: 'A',
        explanation: 'Explicação da resposta correta',
        subject: selectedSubjects[0] || 'Matéria Geral',
        topic: 'Tópico de teste',
        difficulty: 'medium'
      }));
      
      setGameQuestions(mockQuestions);
      setStep('playing');
      console.log('🎮 Iniciando Godot Game Player com', mockQuestions.length, 'questões');
    } else {
      // Multiplayer: vai para sala de espera
      setStep('lobby');
    }
  };

  const handleStartMultiplayerGame = (roomId: string, players: any[]) => {
    console.log('🚀 handleStartMultiplayerGame CHAMADO!', { roomId, players });
    
    // Salvar dados da sala multiplayer
    setMultiplayerRoomId(roomId);
    setMultiplayerPlayers(players);
    
    // TODO: Integrar com Godot 4 - Modo Multiplayer
    // Criar questões e iniciar jogo
    const mockQuestions = Array.from({ length: 30 }, (_, i) => ({
      id: `q_${i + 1}`,
      text: `Questão ${i + 1} de ${selectedArea?.name}`,
      correctAnswer: 'A',
      explanation: 'Explicação da resposta correta',
      subject: selectedSubjects[0] || 'Matéria Geral',
      topic: 'Tópico de teste',
      difficulty: 'medium'
    }));
    
    setGameQuestions(mockQuestions);
    console.log('🎯 Mudando step para PLAYING...', { step: 'playing', selectedArea: selectedArea?.id });
    setStep('playing');
    console.log('✅ Step mudado! Deveria carregar GodotGamePlayer agora');
  };

  // Se estiver na sala multiplayer, mostra o lobby
  if (step === 'lobby' && selectedArea) {
    return (
      <MultiplayerLobby
        selectedArea={selectedArea.id}
        selectedSubjects={allSubjects ? selectedArea.subjects : selectedSubjects}
        userId={userId}
        userName={userName}
        userEnergy={userEnergy}
        onBack={() => setStep('mode')}
        onStartGame={handleStartMultiplayerGame}
      />
    );
  }

  // Se estiver na tela de regras, mostra as regras
  if (step === 'rules' && selectedArea) {
    return (
      <GameRules
        selectedArea={selectedArea.name}
        onBack={() => setStep(previousStep)}
        onStartGame={() => {
          setStep(previousStep);
          if (previousStep === 'mode') {
            // User can choose mode again
          }
        }}
      />
    );
  }

  // Se estiver na tela de resultados, mostra os resultados
  if (step === 'results' && selectedArea) {
    // Simulação de dados - em produção viriam do Godot
    const mockResults = {
      position: Math.floor(Math.random() * 4) + 1,
      previousRank: 1250,
      newRank: 1150,
      careerLevel: 'Analista', // Exemplo: completou 3 fases
      correctAnswers: 27,
      totalQuestions: 30,
      timeSpent: '12:45'
    };

    return (
      <GameResults
        mode='multi'
        position={mockResults.position}
        previousRank={mockResults.previousRank}
        newRank={mockResults.newRank}
        areaName={selectedArea.name}
        careerLevel={mockResults.careerLevel}
        correctAnswers={mockResults.correctAnswers}
        totalQuestions={mockResults.totalQuestions}
        timeSpent={mockResults.timeSpent}
        onBackToGame={() => {
          setStep('area');
          setSelectedArea(null);
          setSelectedSubjects([]);
          setAllSubjects(false);
        }}
        onPlayAgain={() => {
          setStep('mode');
        }}
        onVisitRanking={() => {
          // TODO: Navegar para a página de Ranking
          window.location.hash = '#/ranking';
          console.log('Navegando para Ranking...');
        }}
      />
    );
  }

  // Se estiver jogando, mostra o player do Godot
  if (step === 'playing' && selectedArea) {
    return (
      <GodotGamePlayer
        area={selectedArea.id}
        questions={gameQuestions}
        userEnergy={userEnergy}
        onGameComplete={(results) => {
          setStep('results');
          console.log('🎮 Game Completed:', results);
          // TODO: Salvar resultados no backend
        }}
        onClose={() => {
          setStep('mode');
          console.log('🚪 Game fechado pelo usuário');
        }}
      />
    );
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, any> = {
      blue: {
        border: 'border-blue-500',
        bg: 'bg-blue-500',
        hover: 'hover:border-blue-400',
        text: 'text-blue-400',
        shadow: 'shadow-blue-500/50'
      },
      red: {
        border: 'border-red-500',
        bg: 'bg-red-500',
        hover: 'hover:border-red-400',
        text: 'text-red-400',
        shadow: 'shadow-red-500/50'
      },
      purple: {
        border: 'border-purple-500',
        bg: 'bg-purple-500',
        hover: 'hover:border-purple-400',
        text: 'text-purple-400',
        shadow: 'shadow-purple-500/50'
      },
      yellow: {
        border: 'border-yellow-500',
        bg: 'bg-yellow-500',
        hover: 'hover:border-yellow-400',
        text: 'text-yellow-400',
        shadow: 'shadow-yellow-500/50'
      }
    };
    return colors[color] || colors.red;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      {/* Logo Quiron - Topo centralizado */}
<div className="flex justify-center mb-4">
  <img 
    src="https://lrmabyfaunhrdvdzocrz.supabase.co/storage/v1/object/public/assets/Logoquiron-Branca.png"
    alt="Quiron Concursos"
    className="w-16 h-16 object-contain"
  />
</div>

      {/* Back Button - Always visible at the top */}
      {onBack && (
        <div className="max-w-6xl mx-auto mb-6">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 border-2 border-gray-600 hover:border-red-500 transition-all shadow-lg hover:shadow-red-500/30"
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">←</span>
            <span className="text-lg">Voltar ao Dashboard</span>
          </button>
        </div>
      )}

      {/* Epic Header */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Trophy className="w-16 h-16 text-yellow-400 animate-pulse-slow" />
          <h1 className="text-5xl md:text-6xl bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
            A Corrida Épica dos Heróis
          </h1>
          <Flame className="w-16 h-16 text-red-500 animate-pulse-slow" />
        </div>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
          Prepare-se para a jornada mais desafiadora! Escolha sua área, selecione suas matérias e prove que você é digno da aprovação.
        </p>
        
        {/* Godot 4 Info */}
        <div className="max-w-2xl mx-auto p-4 rounded-2xl bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 flex items-center justify-between">
          <p className="text-sm text-gray-300">
            🎮 <strong className="text-purple-400">Desenvolvido em Godot 4</strong> - Uma experiência de jogo 3D imersiva e épica!
          </p>
          <div className="flex gap-2">
            {selectedArea && (
              <button
                onClick={() => {
                  setPreviousStep(step as any);
                  setStep('rules');
                }}
                className="px-4 py-2 rounded-xl bg-yellow-600 hover:bg-yellow-500 transition-colors flex items-center gap-2 text-sm flex-shrink-0"
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden md:inline">Ver Regras</span>
              </button>
            )}
          </div>
        </div>
        
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className={`flex items-center gap-2 ${step === 'area' ? 'opacity-100' : 'opacity-50'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'area' ? 'bg-red-600 shadow-lg shadow-red-500/50' : 'bg-gray-700'}`}>
              1
            </div>
            <span className="hidden md:inline">rea</span>
          </div>
          
          <ChevronRight className="w-6 h-6 text-gray-500" />
          
          <div className={`flex items-center gap-2 ${step === 'subject' ? 'opacity-100' : 'opacity-50'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'subject' ? 'bg-red-600 shadow-lg shadow-red-500/50' : 'bg-gray-700'}`}>
              2
            </div>
            <span className="hidden md:inline">Matérias</span>
          </div>
          
          <ChevronRight className="w-6 h-6 text-gray-500" />
          
          <div className={`flex items-center gap-2 ${step === 'mode' ? 'opacity-100' : 'opacity-50'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${step === 'mode' ? 'bg-red-600 shadow-lg shadow-red-500/50' : 'bg-gray-700'}`}>
              3
            </div>
            <span className="hidden md:inline">Modo</span>
          </div>
        </div>
      </div>

      {/* STEP 1: Area Selection */}
      {step === 'area' && (
        <div className="max-w-6xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl text-center mb-8 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            Escolha sua Arena de Batalha
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {thematicAreas.map((area) => {
              const colors = getColorClasses(area.color);
              return (
                <button
                  key={area.id}
                  onClick={() => handleAreaSelect(area)}
                  className={`group relative p-8 rounded-3xl border-4 ${colors.border} ${colors.hover} bg-gradient-to-br from-gray-800 to-gray-900 transition-all hover:scale-105 hover:shadow-2xl ${colors.shadow}`}
                >
                  {/* Icon Background */}
                  <div className={`absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                    <div className="w-32 h-32 text-white">
                      {area.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${area.gradient} mx-auto mb-4 flex items-center justify-center shadow-lg ${colors.shadow}`}>
                      {area.icon}
                    </div>
                    <h3 className="text-2xl mb-3">{area.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {area.subjects.length} matérias disponíveis
                    </p>
                    
                    {/* Preview subjects */}
                    <div className="flex flex-wrap gap-2 justify-center">
                      {area.subjects.slice(0, 3).map((subject, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full ${colors.bg} bg-opacity-20 ${colors.text} text-xs`}>
                          {subject}
                        </span>
                      ))}
                      {area.subjects.length > 3 && (
                        <span className="px-3 py-1 rounded-full bg-gray-700 text-gray-300 text-xs">
                          +{area.subjects.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: Subject Selection */}
      {step === 'subject' && selectedArea && (
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <button
            onClick={() => setStep('area')}
            className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Voltar para áreas
          </button>
          
          <div className={`p-8 rounded-3xl border-4 ${getColorClasses(selectedArea.color).border} bg-gradient-to-br from-gray-800 to-gray-900`}>
            <div className="flex items-center gap-4 mb-8">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${selectedArea.gradient} flex items-center justify-center shadow-lg ${getColorClasses(selectedArea.color).shadow}`}>
                {selectedArea.icon}
              </div>
              <div>
                <h2 className="text-3xl">{selectedArea.name}</h2>
                <p className="text-gray-400">Selecione as matérias para o desafio</p>
              </div>
            </div>

            {/* All Subjects Toggle */}
            <div className="mb-6 p-4 rounded-2xl bg-gray-900/50 border border-gray-700">
              <label className="flex items-center gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={allSubjects}
                  onChange={handleAllSubjectsToggle}
                  className="w-6 h-6 rounded-lg"
                />
                <div className="flex-1">
                  <div className="text-xl group-hover:text-yellow-400 transition-colors">
                    🎯 Todas as Matérias
                  </div>
                  <div className="text-sm text-gray-400">
                    Desafio completo com todas as {selectedArea.subjects.length} matérias
                  </div>
                </div>
                <Sparkles className="w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </label>
            </div>

            {/* Individual Subjects */}
            <div className="space-y-3">
              {selectedArea.subjects.map((subject, idx) => (
                <label
                  key={idx}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    selectedSubjects.includes(subject)
                      ? `${getColorClasses(selectedArea.color).border} ${getColorClasses(selectedArea.color).bg} bg-opacity-10`
                      : 'border-gray-700 hover:border-gray-600'
                  } ${allSubjects ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes(subject)}
                    onChange={() => handleSubjectToggle(subject)}
                    disabled={allSubjects}
                    className="w-5 h-5 rounded"
                  />
                  <span className="flex-1 text-lg">{subject}</span>
                  {selectedSubjects.includes(subject) && (
                    <Shield className={`w-5 h-5 ${getColorClasses(selectedArea.color).text}`} />
                  )}
                </label>
              ))}
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinueToMode}
              disabled={!allSubjects && selectedSubjects.length === 0}
              className={`w-full mt-8 py-4 rounded-2xl bg-gradient-to-r ${selectedArea.gradient} hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all shadow-lg ${getColorClasses(selectedArea.color).shadow} flex items-center justify-center gap-3 text-xl`}
            >
              <span>Continuar</span>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 3: Mode Selection */}
      {step === 'mode' && selectedArea && (
        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <button
            onClick={() => setStep('subject')}
            className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            ← Voltar para matérias
          </button>
          
          <h2 className="text-3xl text-center mb-4 flex items-center justify-center gap-3">
            <Swords className="w-8 h-8 text-red-400" />
            Escolha seu Modo de Batalha
          </h2>
          <p className="text-center text-gray-400 mb-12">
            Você selecionou: <span className={getColorClasses(selectedArea.color).text}>{selectedArea.name}</span> • {allSubjects ? 'Todas as matérias' : `${selectedSubjects.length} matéria(s)`}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Singleplayer */}
            <button
              onClick={() => handleStartGame('single')}
              className="group relative p-10 rounded-3xl border-4 border-purple-500 hover:border-purple-400 bg-gradient-to-br from-purple-900/30 to-gray-900 transition-all hover:scale-105 hover:shadow-2xl shadow-purple-500/50"
            >
              {/* Background Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                <User className="w-64 h-64" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-500/50">
                  <User className="w-12 h-12" />
                </div>
                <h3 className="text-3xl mb-4">Singleplayer</h3>
                <p className="text-gray-300 mb-6">
                  Enfrente o desafio sozinho e prove seu valor contra o tempo
                </p>
                <div className="space-y-2 text-sm text-gray-400 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span>Jogue no seu ritmo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span>Acompanhe seu progresso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                    <span>Melhore suas estatísticas</span>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-2 text-xl text-purple-400 group-hover:text-purple-300 transition-colors">
                  <Play className="w-6 h-6" />
                  <span>Iniciar Aventura Solo</span>
                </div>
              </div>
            </button>

            {/* Multiplayer */}
            <button
              onClick={() => handleStartGame('multi')}
              className="group relative p-10 rounded-3xl border-4 border-red-500 hover:border-red-400 bg-gradient-to-br from-red-900/30 to-gray-900 transition-all hover:scale-105 hover:shadow-2xl shadow-red-500/50"
            >
              {/* Background Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 group-hover:opacity-10 transition-opacity">
                <Users className="w-64 h-64" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-red-500/50">
                  <Users className="w-12 h-12" />
                </div>
                <h3 className="text-3xl mb-4">Multiplayer</h3>
                <p className="text-gray-300 mb-6">
                  Compita com outros heróis em tempo real e mostre quem é o melhor
                </p>
                <div className="space-y-2 text-sm text-gray-400 text-left">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span>Batalhas em tempo real</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span>Ranking ao vivo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <span>Glória entre os heróis</span>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-2 text-xl text-red-400 group-hover:text-red-300 transition-colors">
                  <Play className="w-6 h-6" />
                  <span>Iniciar Batalha Épica</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}