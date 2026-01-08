import React from 'react';
import { BarChart3, Trophy, Target, Zap, BookOpen, CheckCircle, XCircle, TrendingUp } from 'lucide-react';

export function ProfileStats() {
  const stats = [
    {
      label: 'Questões Respondidas',
      value: '847',
      icon: BookOpen,
      color: 'from-blue-600 to-blue-500',
      iconColor: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
    },
    {
      label: 'Taxa de Acerto',
      value: '87%',
      icon: Target,
      color: 'from-green-600 to-green-500',
      iconColor: 'text-green-400',
      bgColor: 'bg-green-500/20',
    },
    {
      label: 'Energia Disponível',
      value: '45',
      icon: Zap,
      color: 'from-yellow-600 to-yellow-500',
      iconColor: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
    },
    {
      label: 'Ranking Geral',
      value: '#127',
      icon: Trophy,
      color: 'from-purple-600 to-purple-500',
      iconColor: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${stat.color} bg-opacity-10 border-2 border-${stat.iconColor.replace('text-', '')}/30 rounded-xl p-4`}
          >
            <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center mb-3`}>
              <stat.icon className={`w-5 h-5 ${stat.iconColor}`} />
            </div>
            <div className={`text-3xl mb-1 ${stat.iconColor}`}>{stat.value}</div>
            <div className="text-xs text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Detailed Stats */}
      <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-3xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-6 h-6 text-purple-400" />
          <h2 className="text-2xl">Estatísticas Detalhadas</h2>
        </div>

        <div className="space-y-4">
          {/* Jurídica */}
          <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-blue-400">Jurídica</span>
              <span className="text-blue-400">85%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: '85%' }} />
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                213 acertos
              </span>
              <span className="flex items-center gap-1">
                <XCircle className="w-3 h-3 text-red-400" />
                38 erros
              </span>
            </div>
          </div>

          {/* Policial */}
          <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-red-400">Policial</span>
              <span className="text-red-400">78%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-red-600 to-red-400" style={{ width: '78%' }} />
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                156 acertos
              </span>
              <span className="flex items-center gap-1">
                <XCircle className="w-3 h-3 text-red-400" />
                44 erros
              </span>
            </div>
          </div>

          {/* Conhecimentos Gerais */}
          <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-purple-400">Conhecimentos Gerais</span>
              <span className="text-purple-400">92%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400" style={{ width: '92%' }} />
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                276 acertos
              </span>
              <span className="flex items-center gap-1">
                <XCircle className="w-3 h-3 text-red-400" />
                24 erros
              </span>
            </div>
          </div>

          {/* Fiscal-Bancária */}
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-yellow-400">Fiscal-Bancária</span>
              <span className="text-yellow-400">81%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400" style={{ width: '81%' }} />
            </div>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-3 h-3 text-green-400" />
                162 acertos
              </span>
              <span className="flex items-center gap-1">
                <XCircle className="w-3 h-3 text-red-400" />
                38 erros
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Progresso Semanal */}
      <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-2 border-green-500/30 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-green-400" />
          <h2 className="text-lg text-green-400">Progresso Semanal</h2>
        </div>

        <div className="text-center">
          <div className="text-3xl text-green-400 mb-1">+15%</div>
          <p className="text-sm text-gray-300">
            Você melhorou sua taxa de acerto em 15% esta semana!
          </p>
          <p className="text-xs text-gray-400 mt-1">Continue assim! 🔥</p>
        </div>
      </div>
    </div>
  );
}