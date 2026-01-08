import React, { useState, useEffect } from 'react';
import { Trophy, ArrowLeft, Scale, Car, Brain, DollarSign, Crown, Medal, Award, AlertTriangle, ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

type Area = 'juridica' | 'policial' | 'gerais' | 'fiscal';

interface RankingEntry {
  position: number;
  userId: string;
  userName: string;
  userAvatar?: string;
  score: number;
  gamesPlayed: number;
  isPremium: boolean;
  isCurrentUser?: boolean;
}

const AREAS = [
  {
    id: 'juridica' as Area,
    name: 'Jurídica',
    icon: Scale,
    color: 'blue',
    gradient: 'from-blue-900/40 via-blue-800/40 to-blue-700/40',
    border: 'border-blue-500/30',
    hover: 'hover:border-blue-500/60',
    iconBg: 'bg-blue-500/20',
    textColor: 'text-blue-400',
  },
  {
    id: 'policial' as Area,
    name: 'Policial',
    icon: Car,
    color: 'red',
    gradient: 'from-red-900/40 via-red-800/40 to-red-700/40',
    border: 'border-red-500/30',
    hover: 'hover:border-red-500/60',
    iconBg: 'bg-red-500/20',
    textColor: 'text-red-400',
  },
  {
    id: 'gerais' as Area,
    name: 'Conhecimentos Gerais',
    icon: Brain,
    color: 'purple',
    gradient: 'from-purple-900/40 via-purple-800/40 to-purple-700/40',
    border: 'border-purple-500/30',
    hover: 'hover:border-purple-500/60',
    iconBg: 'bg-purple-500/20',
    textColor: 'text-purple-400',
  },
  {
    id: 'fiscal' as Area,
    name: 'Fiscal-Bancária',
    icon: DollarSign,
    color: 'yellow',
    gradient: 'from-yellow-900/40 via-yellow-800/40 to-yellow-700/40',
    border: 'border-yellow-500/30',
    hover: 'hover:border-yellow-500/60',
    iconBg: 'bg-yellow-500/20',
    textColor: 'text-yellow-400',
  },
];

export function GameMultiplayerRanking({ user, onBack }: { user: any; onBack: () => void }) {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [rankings, setRankings] = useState<RankingEntry[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cycleEndsAt, setCycleEndsAt] = useState<Date | null>(null);
  const [isRulesExpanded, setIsRulesExpanded] = useState(false);

  useEffect(() => {
    if (selectedArea) {
      loadRankings();
    }
  }, [selectedArea]);

  const loadRankings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/rankings/game/${selectedArea}`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();
      
      if (data.rankings) {
        setRankings(data.rankings);
      }
      
      if (data.cycleEndsAt) {
        setCycleEndsAt(new Date(data.cycleEndsAt));
      }
    } catch (error) {
      console.error('Error loading rankings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const currentArea = AREAS.find(a => a.id === selectedArea);

  // Calculate days remaining
  const daysRemaining = cycleEndsAt 
    ? Math.ceil((cycleEndsAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    : 60;

  if (!selectedArea) {
    return (
      <div className="min-h-screen bg-black p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={onBack}
              className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <Trophy className="w-10 h-10 text-yellow-400" />
                <h1 className="text-4xl">Ranking Game Multiplayer</h1>
              </div>
              <p className="text-gray-400 mt-1">Selecione uma área temática</p>
            </div>
          </div>

          {/* Area Selection */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="text-2xl">Selecione a Área Temática:</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {AREAS.map((area) => (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`group bg-gradient-to-br ${area.gradient} border-2 ${area.border} ${area.hover} rounded-2xl p-6 transition-all hover:scale-[1.02] active:scale-[0.98]`}
                >
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${area.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <area.icon className={`w-8 h-8 ${area.textColor}`} />
                  </div>
                  <h3 className={`text-lg ${area.textColor} text-center`}>{area.name}</h3>
                </button>
              ))}
            </div>
          </div>

          {/* Info Box */}
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <Trophy className="w-6 h-6 text-yellow-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Como funciona o Ranking Game?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Rankings separados por área temática
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Zera a cada 60 dias com premiações
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Apenas usuários Premium ganham prêmios
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    Top 3 de cada área são premiados
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => setSelectedArea(null)}
            className="w-12 h-12 rounded-xl bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              {currentArea && <currentArea.icon className={`w-10 h-10 ${currentArea.textColor}`} />}
              <h1 className="text-4xl">{currentArea?.name}</h1>
            </div>
            <p className="text-gray-400 mt-1">Ranking do Game Multiplayer</p>
          </div>
        </div>

        {/* Official Rules Collapsible */}
        <div className="mb-6">
          <button
            onClick={() => setIsRulesExpanded(!isRulesExpanded)}
            className="w-full bg-gradient-to-br from-red-900/40 to-red-800/40 border-2 border-red-500/40 rounded-2xl p-4 transition-all hover:border-red-500/60 text-left"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Regras Oficiais do Ranking Game Multiplayer</span>
                </div>
                <p className="text-sm text-gray-400">
                  {isRulesExpanded ? 'Clique para fechar' : 'Leia atentamente • Clique para abrir'}
                </p>
              </div>
              {isRulesExpanded ? (
                <ChevronUp className="w-5 h-5 text-red-400 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-red-400 flex-shrink-0" />
              )}
            </div>
          </button>

          {isRulesExpanded && (
            <div className="mt-4 bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-6 space-y-6">
              {/* Ciclo do Ranking */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-blue-400">Ciclo do Ranking</span>
                  </h3>
                  <p className="text-gray-300 mb-2">
                    O ranking é <span className="text-yellow-400 font-semibold">reiniciado a cada 60 dias</span>.
                  </p>
                </div>
              </div>

              {/* Elegibilidade para Premiação */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <Crown className="w-6 h-6 text-yellow-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-yellow-400" />
                    <span className="text-yellow-400">Elegibilidade para Premiação</span>
                  </h3>
                  <p className="text-gray-300 mb-2">
                    Apenas participantes <span className="text-yellow-400 font-semibold">PREMIUM</span> são elegíveis para premiações. <span className="text-blue-400 font-semibold">Usuários Freemium</span> podem acompanhar seu desempenho mas não recebem premiações.
                  </p>
                </div>
              </div>

              {/* Premiações */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-2 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-purple-400" />
                    <span className="text-purple-400">Premiações</span>
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Apenas os <span className="text-yellow-400 font-semibold">1º, 2º e 3º lugares</span> de cada área temática são premiados com valores monetários ou produtos.
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/40 rounded-lg">
                      <Trophy className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm text-yellow-400">1º Lugar</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-500/20 border border-gray-500/40 rounded-lg">
                      <Medal className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">2º Lugar</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 border border-orange-500/40 rounded-lg">
                      <Award className="w-4 h-4 text-orange-400" />
                      <span className="text-sm text-orange-400">3º Lugar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Cycle Info */}
        <div className="mb-6 p-4 bg-gradient-to-r from-blue-900/20 to-blue-800/20 border border-blue-500/30 rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-400">Ciclo atual do ranking</span>
            </div>
            <div className="text-right">
              <div className="text-2xl text-yellow-400">{daysRemaining} dias</div>
              <div className="text-sm text-gray-400">restantes até o reset</div>
            </div>
          </div>
        </div>

        {/* Podium - Top 3 */}
        {rankings.length > 0 && (
          <div className="mb-8 grid grid-cols-3 gap-4 items-end">
            {/* 2nd Place */}
            {rankings[1] && (
              <div className="bg-gradient-to-br from-gray-700/40 to-gray-600/40 border-2 border-gray-400/30 rounded-2xl p-6 pb-8">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gray-400/20 flex items-center justify-center border-2 border-gray-400">
                    <Medal className="w-10 h-10 text-gray-300" />
                  </div>
                  <div className="text-4xl mb-1">2º</div>
                  {rankings[1].isPremium ? (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                      <Crown className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-yellow-400">Premium</span>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500">Freemium</div>
                  )}
                </div>
                <div className="text-center">
                  <div className="mb-1 line-clamp-1">{rankings[1].userName}</div>
                  <div className="text-2xl text-yellow-400">{rankings[1].score.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">{rankings[1].gamesPlayed} partidas</div>
                </div>
              </div>
            )}

            {/* 1st Place */}
            {rankings[0] && (
              <div className="bg-gradient-to-br from-yellow-700/40 to-yellow-600/40 border-2 border-yellow-400/50 rounded-2xl p-6 pb-10 relative -mt-4">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs uppercase tracking-wide">
                  Campeão
                </div>
                <div className="text-center mb-4">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-yellow-400/20 flex items-center justify-center border-4 border-yellow-400">
                    <Trophy className="w-12 h-12 text-yellow-400" />
                  </div>
                  <div className="text-5xl mb-1">1º</div>
                  {rankings[0].isPremium ? (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                      <Crown className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-yellow-400">Premium</span>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500">Freemium</div>
                  )}
                </div>
                <div className="text-center">
                  <div className="mb-1 line-clamp-1">{rankings[0].userName}</div>
                  <div className="text-3xl text-yellow-400">{rankings[0].score.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">{rankings[0].gamesPlayed} partidas</div>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {rankings[2] && (
              <div className="bg-gradient-to-br from-orange-700/40 to-orange-600/40 border-2 border-orange-400/30 rounded-2xl p-6 pb-8">
                <div className="text-center mb-4">
                  <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-orange-400/20 flex items-center justify-center border-2 border-orange-400">
                    <Award className="w-10 h-10 text-orange-300" />
                  </div>
                  <div className="text-4xl mb-1">3º</div>
                  {rankings[2].isPremium ? (
                    <div className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full">
                      <Crown className="w-3 h-3 text-yellow-400" />
                      <span className="text-xs text-yellow-400">Premium</span>
                    </div>
                  ) : (
                    <div className="text-xs text-gray-500">Freemium</div>
                  )}
                </div>
                <div className="text-center">
                  <div className="mb-1 line-clamp-1">{rankings[2].userName}</div>
                  <div className="text-2xl text-yellow-400">{rankings[2].score.toLocaleString()}</div>
                  <div className="text-xs text-gray-400">{rankings[2].gamesPlayed} partidas</div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Full Rankings List */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-6">
          <h3 className="text-xl mb-4">Classificação Completa</h3>

          {isLoading ? (
            <div className="text-center py-12 text-gray-400">Carregando rankings...</div>
          ) : rankings.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              Nenhum jogador nesta área ainda. Seja o primeiro!
            </div>
          ) : (
            <div className="space-y-2">
              {rankings.map((entry, index) => (
                <div
                  key={entry.userId}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    entry.isCurrentUser
                      ? 'bg-yellow-500/20 border-2 border-yellow-500/50'
                      : index < 3
                      ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50'
                      : 'bg-gray-800/30 hover:bg-gray-800/50'
                  }`}
                >
                  {/* Position */}
                  <div className="w-12 text-center">
                    {index === 0 ? (
                      <Trophy className="w-6 h-6 text-yellow-400 mx-auto" />
                    ) : index === 1 ? (
                      <Medal className="w-6 h-6 text-gray-400 mx-auto" />
                    ) : index === 2 ? (
                      <Award className="w-6 h-6 text-orange-400 mx-auto" />
                    ) : (
                      <span className="text-xl text-gray-400">{entry.position}º</span>
                    )}
                  </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={entry.isCurrentUser ? 'font-bold' : ''}>
                        {entry.userName}
                      </span>
                      {entry.isPremium && (
                        <Crown className="w-4 h-4 text-yellow-400" />
                      )}
                      {entry.isCurrentUser && (
                        <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                          Você
                        </span>
                      )}
                    </div>
                    <div className="text-sm text-gray-400">
                      {entry.gamesPlayed} {entry.gamesPlayed === 1 ? 'partida' : 'partidas'}
                    </div>
                  </div>

                  {/* Score */}
                  <div className="text-right">
                    <div className="text-2xl text-yellow-400">{entry.score.toLocaleString()}</div>
                    <div className="text-xs text-gray-400">pontos</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}