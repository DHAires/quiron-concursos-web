import React from 'react';
import { Trophy, Clock, CheckCircle, XCircle, Zap, ArrowRight, Play, BookOpen } from 'lucide-react';

interface GameRulesProps {
  selectedArea: string;
  onBack: () => void;
  onStartGame: () => void;
}

const careerPaths = {
  'Área Jurídica': {
    color: 'blue',
    gradient: 'from-blue-600 to-blue-500',
    phases: [
      { level: 1, title: 'Estagiário', icon: '📚', cards: 10 },
      { level: 2, title: 'Técnico', icon: '⚖️', cards: 10 },
      { level: 3, title: 'Analista', icon: '🎓', cards: 10 },
      { level: 4, title: 'JUIZ', icon: '👨‍⚖️', cards: 0, final: true }
    ]
  },
  'Área Fiscal-Bancária': {
    color: 'yellow',
    gradient: 'from-yellow-600 to-yellow-500',
    phases: [
      { level: 1, title: 'Estagiário', icon: '📊', cards: 10 },
      { level: 2, title: 'Técnico Bancário', icon: '💳', cards: 10 },
      { level: 3, title: 'Gerente', icon: '💼', cards: 10 },
      { level: 4, title: 'AUDITOR', icon: '🏆', cards: 0, final: true }
    ]
  },
  'Área Policial': {
    color: 'red',
    gradient: 'from-red-600 to-red-500',
    phases: [
      { level: 1, title: 'Soldado', icon: '🪖', cards: 10 },
      { level: 2, title: 'Oficial', icon: '🎖️', cards: 10 },
      { level: 3, title: 'Agente', icon: '🕵️', cards: 10 },
      { level: 4, title: 'DELEGADO', icon: '👮', cards: 0, final: true }
    ]
  },
  'Conhecimentos Gerais': {
    color: 'purple',
    gradient: 'from-purple-600 to-purple-500',
    phases: [
      { level: 1, title: 'Aluno', icon: '📖', cards: 10 },
      { level: 2, title: 'Professor', icon: '👨‍🏫', cards: 10 },
      { level: 3, title: 'Mestre', icon: '🎓', cards: 10 },
      { level: 4, title: 'CIENTISTA', icon: '🔬', cards: 0, final: true }
    ]
  }
};

const getColorClasses = (color: string) => {
  const colors: Record<string, any> = {
    blue: {
      border: 'border-blue-500',
      bg: 'bg-blue-500',
      text: 'text-blue-400',
      shadow: 'shadow-blue-500/50'
    },
    red: {
      border: 'border-red-500',
      bg: 'bg-red-500',
      text: 'text-red-400',
      shadow: 'shadow-red-500/50'
    },
    purple: {
      border: 'border-purple-500',
      bg: 'bg-purple-500',
      text: 'text-purple-400',
      shadow: 'shadow-purple-500/50'
    },
    yellow: {
      border: 'border-yellow-500',
      bg: 'bg-yellow-500',
      text: 'text-yellow-400',
      shadow: 'shadow-yellow-500/50'
    }
  };
  return colors[color] || colors.red;
};

export function GameRules({ selectedArea, onBack, onStartGame }: GameRulesProps) {
  const career = careerPaths[selectedArea as keyof typeof careerPaths];
  const colors = getColorClasses(career.color);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-6 text-gray-400 hover:text-white transition-colors flex items-center gap-2"
        >
          ← Voltar
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
            <h1 className="text-4xl md:text-5xl bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
              Run + Quiz: Como Funciona
            </h1>
            <Zap className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Corra pelo corredor do conhecimento e evolua sua carreira respondendo questões!
          </p>
        </div>

        {/* Game Mechanics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Quiz Rules */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-purple-500/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h2 className="text-2xl">Regras do Quiz</h2>
            </div>

            <div className="space-y-4">
              {/* Question Time */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-purple-900/20 border border-purple-500/30">
                <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">30 segundos para responder</h3>
                  <p className="text-sm text-gray-400">
                    Cada pergunta é de <strong>Certo ou Errado</strong>. Você tem 30 segundos para decidir!
                  </p>
                </div>
              </div>

              {/* Correct Answer */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-green-900/20 border border-green-500/30">
                <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-green-400">Acertou?</h3>
                  <p className="text-sm text-gray-400">
                    A <strong>explicação aparece por 20 segundos</strong> para você aprender. Depois, próxima carta!
                  </p>
                </div>
              </div>

              {/* Wrong Answer */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-red-900/20 border border-red-500/30">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg mb-1 text-red-400">Errou ou tempo acabou?</h3>
                  <p className="text-sm text-gray-400">
                    Uma <strong>nova carta é gerada</strong> na mesma posição até você acertar para avançar!
                  </p>
                </div>
              </div>

              {/* Important Note */}
              <div className="p-4 rounded-2xl bg-yellow-900/20 border border-yellow-500/30">
                <p className="text-sm text-yellow-400">
                  ⚡ <strong>Importante:</strong> Você precisa acertar as 10 cartas de cada fase para progredir na carreira!
                </p>
              </div>
            </div>
          </div>

          {/* Career Progression */}
          <div className={`p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 ${colors.border}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${career.gradient} flex items-center justify-center shadow-lg ${colors.shadow}`}>
                <Trophy className="w-6 h-6" />
              </div>
              <h2 className="text-2xl">Progressão de Carreira</h2>
            </div>

            <div className="space-y-6">
              {career.phases.map((phase, index) => (
                <div key={phase.level}>
                  <div className={`p-5 rounded-2xl ${
                    phase.final 
                      ? `bg-gradient-to-r ${career.gradient} shadow-lg ${colors.shadow} animate-pulse-slow` 
                      : 'bg-gray-900/50 border-2 border-gray-700'
                  }`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-4xl">{phase.icon}</span>
                        <div>
                          <div className="text-sm text-gray-400">Fase {phase.level}</div>
                          <h3 className={`text-xl ${phase.final ? 'text-white' : ''}`}>
                            {phase.title}
                          </h3>
                        </div>
                      </div>
                      {!phase.final && (
                        <div className={`px-4 py-2 rounded-full ${colors.bg} bg-opacity-20 ${colors.text}`}>
                          {phase.cards} cartas
                        </div>
                      )}
                      {phase.final && (
                        <Trophy className="w-8 h-8 text-yellow-400" />
                      )}
                    </div>
                    
                    {phase.final && (
                      <p className="text-sm text-yellow-200 mt-2">
                        🏆 <strong>Parabéns!</strong> Você completou todas as fases e conquistou o cargo máximo!
                      </p>
                    )}
                  </div>
                  
                  {/* Arrow between phases */}
                  {!phase.final && (
                    <div className="flex justify-center my-2">
                      <ArrowRight className={`w-6 h-6 ${colors.text} rotate-90`} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Game Structure Overview */}
        <div className="mb-12 p-8 rounded-3xl bg-gradient-to-r from-red-900/20 to-purple-900/20 border-2 border-red-500/30">
          <h2 className="text-2xl mb-6 flex items-center gap-3">
            <Zap className="w-8 h-8 text-red-400" />
            Estrutura Completa do Jogo
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700">
              <div className="text-5xl mb-3">🏃</div>
              <h3 className="text-xl mb-2">3 Fases Diretas</h3>
              <p className="text-sm text-gray-400">
                Corra pelo corredor enquanto responde perguntas
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700">
              <div className="text-5xl mb-3">🎴</div>
              <h3 className="text-xl mb-2">30 Cartas Total</h3>
              <p className="text-sm text-gray-400">
                10 cartas por fase = 30 questões para dominar
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gray-900/50 border border-gray-700">
              <div className="text-5xl mb-3">⏱️</div>
              <h3 className="text-xl mb-2">Tempo é Crucial</h3>
              <p className="text-sm text-gray-400">
                30s pergunta + 20s explicação = ritmo dinâmico
              </p>
            </div>
          </div>
        </div>

        {/* Tips */}
        <div className="mb-12 p-6 rounded-3xl bg-blue-900/20 border border-blue-500/30">
          <h3 className="text-xl mb-4 flex items-center gap-2">
            💡 Dicas Estratégicas
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span>Leia a pergunta com atenção nos primeiros 10 segundos</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span>Use a explicação para aprender e não errar de novo</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span>Mantenha a calma se errar, nova carta virá</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span>Complete as 3 fases para conquistar o cargo máximo!</span>
            </li>
          </ul>
        </div>

        {/* Start Button */}
        <div className="text-center">
          <button
            onClick={onStartGame}
            className={`group px-12 py-6 rounded-3xl bg-gradient-to-r ${career.gradient} hover:scale-105 transition-all shadow-2xl ${colors.shadow} flex items-center justify-center gap-4 mx-auto text-2xl`}
          >
            <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span>COMEÇAR A CORRIDA!</span>
            <Zap className="w-8 h-8 group-hover:scale-110 transition-transform" />
          </button>
          <p className="text-sm text-gray-400 mt-4">
            Boa sorte, futuro {career.phases[3].title}! 🏆
          </p>
        </div>
      </div>
    </div>
  );
}
