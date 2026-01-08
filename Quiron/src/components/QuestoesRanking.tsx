import React, { useState, useEffect } from 'react';
import { FileText, ArrowLeft, Scale, Car, Brain, DollarSign, Calendar, TrendingUp, CheckCircle, XCircle, Trophy } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

type Area = 'juridica' | 'policial' | 'gerais' | 'fiscal';
type Period = 'dia' | 'semana' | 'mes' | 'semestre' | 'ano';

interface RankingEntry {
  position: number;
  userId: string;
  userName: string;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  accuracy: number;
  isCurrentUser?: boolean;
}

interface UserStats {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  accuracy: number;
  position: number;
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

const PERIODS = [
  { id: 'dia' as Period, name: 'Dia', icon: '📅' },
  { id: 'semana' as Period, name: 'Semana', icon: '📆' },
  { id: 'mes' as Period, name: 'Mês', icon: '📆' },
  { id: 'semestre' as Period, name: 'Semestre', icon: '📊' },
  { id: 'ano' as Period, name: 'Ano', icon: '📁' },
];

export function QuestoesRanking({ user, onBack }: { user: any; onBack: () => void }) {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState<Period>('semana');
  const [rankings, setRankings] = useState<RankingEntry[]>([]);
  const [userStats, setUserStats] = useState<UserStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedArea && selectedPeriod) {
      loadRankings();
    }
  }, [selectedArea, selectedPeriod]);

  const loadRankings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/rankings/questoes/${selectedArea}?period=${selectedPeriod}`,
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
      
      if (data.userStats) {
        setUserStats(data.userStats);
      }
    } catch (error) {
      console.error('Error loading rankings:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const currentArea = AREAS.find(a => a.id === selectedArea);
  const currentPeriod = PERIODS.find(p => p.id === selectedPeriod);

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
                <FileText className="w-10 h-10 text-blue-400" />
                <h1 className="text-4xl">Ranking de Questões</h1>
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
              <Trophy className="w-6 h-6 text-blue-400 flex-shrink-0" />
              <div>
                <h3 className="text-lg mb-2">Como funciona o Ranking de Questões?</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Rankings separados por área temática
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Filtros por período: Dia, Semana, Mês, Semestre e Ano
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Baseado em questões respondidas e taxa de acerto
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Todos os usuários podem competir
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
            <p className="text-gray-400 mt-1">Ranking de Questões</p>
          </div>
        </div>

        {/* Period Selection */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-gray-400" />
            <h3 className="text-lg text-gray-300">Filtrar por período:</h3>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2">
            {PERIODS.map((period) => (
              <button
                key={period.id}
                onClick={() => setSelectedPeriod(period.id)}
                className={`flex-shrink-0 px-6 py-4 rounded-xl border-2 transition-all ${
                  selectedPeriod === period.id
                    ? 'bg-red-500/20 border-red-500'
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-2xl mb-1">{period.icon}</div>
                <div className={selectedPeriod === period.id ? 'text-red-400' : 'text-gray-300'}>
                  {period.name}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* User Stats */}
        {userStats && (
          <div className="mb-8 bg-gradient-to-br from-purple-900/20 to-purple-800/20 border-2 border-purple-500/30 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl">Estatísticas: Esta {currentPeriod?.name}</h3>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Total Questions */}
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                <FileText className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl mb-1">{userStats.totalQuestions}</div>
                <div className="text-sm text-gray-400">Total de Questões</div>
              </div>

              {/* Accuracy */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl text-green-400 mb-1">{userStats.accuracy}%</div>
                <div className="text-sm text-gray-400">Taxa de Acerto</div>
              </div>

              {/* Position */}
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
                <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-3xl text-yellow-400 mb-1">#{userStats.position}</div>
                <div className="text-sm text-gray-400">Posição</div>
              </div>

              {/* Correct */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-3xl text-green-400 mb-1">{userStats.correctAnswers}</div>
                <div className="text-sm text-gray-400">Acertos</div>
              </div>

              {/* Wrong */}
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-center">
                <XCircle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                <div className="text-3xl text-red-400 mb-1">{userStats.wrongAnswers}</div>
                <div className="text-sm text-gray-400">Erros</div>
              </div>
            </div>
          </div>
        )}

        {/* Rankings List */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-2xl p-6">
          <h3 className="text-xl mb-4">Classificação Completa</h3>

          {isLoading ? (
            <div className="text-center py-12 text-gray-400">Carregando rankings...</div>
          ) : rankings.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              Nenhuma atividade nesta área ainda. Comece a responder questões!
            </div>
          ) : (
            <div className="space-y-2">
              {rankings.map((entry, index) => (
                <div
                  key={entry.userId}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    entry.isCurrentUser
                      ? 'bg-yellow-500/20 border-2 border-yellow-500/50'
                      : 'bg-gray-800/30 hover:bg-gray-800/50'
                  }`}
                >
                  {/* Position */}
                  <div className="w-12 text-center">
                    {index === 0 ? (
                      <Trophy className="w-6 h-6 text-yellow-400 mx-auto" />
                    ) : (
                      <span className="text-xl text-gray-400">{entry.position}º</span>
                    )}
                  </div>

                  {/* User Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={entry.isCurrentUser ? 'font-bold' : ''}>
                        {entry.userName}
                      </span>
                      {entry.isCurrentUser && (
                        <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">
                          Você
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{entry.totalQuestions} questões</span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-3 h-3 text-green-400" />
                        {entry.correctAnswers}
                      </span>
                      <span className="flex items-center gap-1">
                        <XCircle className="w-3 h-3 text-red-400" />
                        {entry.wrongAnswers}
                      </span>
                    </div>
                  </div>

                  {/* Accuracy */}
                  <div className="text-right">
                    <div className={`text-2xl ${
                      entry.accuracy >= 70 ? 'text-green-400' :
                      entry.accuracy >= 50 ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {entry.accuracy}%
                    </div>
                    <div className="text-xs text-gray-400">taxa de acerto</div>
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
