import React, { useState } from 'react';
import { Trophy, Gamepad2, FileText, ChevronDown, AlertTriangle, X, ArrowLeft } from 'lucide-react';
import { GameMultiplayerRanking } from './GameMultiplayerRanking';
import { QuestoesRanking } from './QuestoesRanking';

type RankingMode = 'selection' | 'game' | 'questoes';

interface RankingPageProps {
  onBack?: () => void;
}

export function RankingPage({ onBack }: RankingPageProps) {
  const [mode, setMode] = useState<RankingMode>('selection');
  const [showRules, setShowRules] = useState(false);
  const [user, setUser] = useState<any>(null);

  if (mode === 'game') {
    return (
      <GameMultiplayerRanking 
        user={user}
        onBack={() => setMode('selection')}
      />
    );
  }

  if (mode === 'questoes') {
    return (
      <QuestoesRanking 
        user={user}
        onBack={() => setMode('selection')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        {onBack && (
          <button
            onClick={onBack}
            className="mb-6 flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 rounded-2xl transition-all group"
          >
            <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-gray-300 group-hover:text-white transition-colors">Voltar</span>
          </button>
        )}

        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Trophy className="w-12 h-12 text-yellow-400" />
            <h1 className="text-5xl">Rankings</h1>
          </div>
          <p className="text-gray-400 text-lg">Competição, desempenho e conquistas</p>
        </div>

        {/* Mode Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Game Multiplayer */}
          <button
            onClick={() => setMode('game')}
            className="group relative bg-gradient-to-br from-yellow-900/40 via-orange-900/40 to-orange-800/40 border-2 border-yellow-500/30 rounded-3xl p-8 hover:border-yellow-500/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500/30 transition-colors">
                <Gamepad2 className="w-10 h-10 text-yellow-400" />
              </div>
              <h2 className="text-2xl text-yellow-400 mb-2">Game Multiplayer</h2>
              <p className="text-sm text-gray-300">Com premiação</p>
            </div>

            {/* Badge */}
            <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs uppercase tracking-wide">
              Premium
            </div>
          </button>

          {/* Questões */}
          <button
            onClick={() => setMode('questoes')}
            className="group relative bg-gradient-to-br from-blue-900/40 via-indigo-900/40 to-blue-800/40 border-2 border-blue-500/30 rounded-3xl p-8 hover:border-blue-500/60 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                <FileText className="w-10 h-10 text-blue-400" />
              </div>
              <h2 className="text-2xl text-blue-400 mb-2">Questões</h2>
              <p className="text-sm text-gray-300">Competitivo</p>
            </div>
          </button>
        </div>

        {/* Rules Notice */}
        <button
          onClick={() => setShowRules(!showRules)}
          className="w-full bg-gradient-to-r from-red-900/40 to-red-800/40 border-2 border-red-500/30 rounded-2xl p-4 hover:border-red-500/60 transition-all"
        >
          <div className="flex items-center gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <div className="flex-1 text-left">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-red-400" />
                <span className="text-red-400">Regras Oficiais do Ranking Game Multiplayer</span>
              </div>
              <p className="text-sm text-gray-400">Leia atentamente • Clique para abrir</p>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${showRules ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {/* Rules Modal/Dropdown */}
        {showRules && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/30 rounded-3xl p-8 animate-scale-in max-h-[90vh] overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setShowRules(false)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-red-400" />
                    <h2 className="text-2xl text-red-400">Regras Oficiais do Ranking Game Multiplayer</h2>
                  </div>
                  <p className="text-sm text-gray-400">Clique para fechar</p>
                </div>
              </div>

              {/* Rules Content */}
              <div className="space-y-6">
                {/* Ciclo do Ranking */}
                <div className="p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        <h3 className="text-lg text-blue-400">Ciclo do Ranking</h3>
                      </div>
                      <p className="text-gray-300">
                        O ranking é <span className="text-yellow-400 font-medium">reiniciado a cada 60 dias</span>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Elegibilidade */}
                <div className="p-6 bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/30 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                        <h3 className="text-lg text-yellow-400">Elegibilidade para Premiação</h3>
                      </div>
                      <p className="text-gray-300">
                        Apenas participantes <span className="text-yellow-400 font-medium">PREMIUM</span> são elegíveis para premiações. 
                        <span className="text-gray-400"> Usuários Freemium podem acompanhar seu desempenho mas não recebem premiações.</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Premiações */}
                <div className="p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border border-purple-500/30 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Trophy className="w-5 h-5 text-purple-400" />
                        <h3 className="text-lg text-purple-400">Premiações</h3>
                      </div>
                      <p className="text-gray-300 mb-4">
                        Apenas os <span className="text-yellow-400 font-medium">1º, 2º e 3º lugares</span> de cada área temática são premiados com valores monetários ou produtos.
                      </p>

                      <div className="flex gap-3">
                        <div className="flex-1 px-4 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-center">
                          <Trophy className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
                          <div className="text-sm text-yellow-400">1º Lugar</div>
                        </div>
                        <div className="flex-1 px-4 py-3 bg-gray-500/20 border border-gray-500/30 rounded-xl text-center">
                          <Trophy className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                          <div className="text-sm text-gray-400">2º Lugar</div>
                        </div>
                        <div className="flex-1 px-4 py-3 bg-orange-500/20 border border-orange-500/30 rounded-xl text-center">
                          <Trophy className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                          <div className="text-sm text-orange-400">3º Lugar</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">
                      <span className="font-medium text-yellow-400">Importante:</span> As premiações específicas serão anunciadas no início de cada ciclo de 60 dias. Acompanhe as notificações e emails para não perder nenhuma novidade!
                    </p>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setShowRules(false)}
                className="w-full mt-6 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white py-4 rounded-2xl transition-all"
              >
                Entendi as Regras
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}