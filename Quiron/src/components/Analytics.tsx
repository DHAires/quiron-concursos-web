import React from 'react';
import { User, Target, Clock, TrendingUp, Flame, CheckCircle, Zap } from 'lucide-react';
import { useQuestionProgress } from '../hooks/useQuestionProgress';

export function Analytics() {
  const { getTotalStats, attempts } = useQuestionProgress();
  const totalStats = getTotalStats();
  
  // Calculate today's questions
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const todayAttempts = attempts.filter(a => a.timestamp >= today.getTime());
  
  // Calculate streak
  const recentAttempts = attempts.slice(-50);
  let currentStreak = 0;
  for (let i = recentAttempts.length - 1; i >= 0; i--) {
    if (recentAttempts[i].isCorrect) {
      currentStreak++;
    } else {
      break;
    }
  }
  
  const stats = [
    {
      id: 'performance',
      icon: <User className="w-6 h-6" />,
      title: 'Desempenho Geral',
      value: `${totalStats.avgAccuracy}%`,
      change: totalStats.avgAccuracy >= 70 ? '+12%' : 'praticar',
      positive: totalStats.avgAccuracy >= 70,
      gradient: 'from-red-900 to-red-800',
    },
    {
      id: 'today',
      icon: <Target className="w-6 h-6" />,
      title: 'Questões Hoje',
      value: `${todayAttempts.length}`,
      change: todayAttempts.length > 0 ? `+${todayAttempts.length}` : 'começar',
      positive: todayAttempts.length > 0,
      gradient: 'from-orange-900 to-orange-800',
    },
    {
      id: 'total',
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Total Resolvidas',
      value: `${totalStats.completedQuestions}`,
      change: 'questões',
      positive: false,
      gradient: 'from-purple-900 to-purple-800',
    },
    {
      id: 'streak',
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Sequência de Acertos',
      value: `${currentStreak}`,
      change: currentStreak > 0 ? `${currentStreak} seguidos` : 'começar',
      positive: currentStreak > 0,
      gradient: 'from-blue-900 to-blue-800',
    },
  ];

  return (
    <div className="mb-4">
      <h3 className="text-lg mb-2 text-orange-400">Análises da IA Prometheus</h3>

      {/* Stats Grid - 2x2 Grid - Compact */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className={`rounded-xl bg-gradient-to-br ${stat.gradient} p-3 shadow-lg hover:scale-105 transition-transform border border-white/10`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="text-white/90">{React.cloneElement(stat.icon as React.ReactElement, { className: 'w-4 h-4' })}</div>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  stat.positive ? 'bg-green-500/30 text-green-300' : 'bg-gray-500/30 text-gray-300'
                }`}
              >
                {stat.change}
              </span>
            </div>
            <p className="text-[10px] text-white/80 mb-0.5">{stat.title}</p>
            <p className="text-xl">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* AI Analysis Card - More compact */}
      <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 p-3 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
            <Flame className="w-4 h-4 text-orange-400" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm mb-1.5 flex items-center gap-1">
              Análise da IA Prometheus ✨
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed mb-2">
              {totalStats.completedQuestions === 0 ? (
                <>
                  Olá, Herói! 👋 Vejo que você ainda não começou sua jornada. Que tal resolver sua{' '}
                  <span className="text-orange-400">primeira questão</span> agora? Cada questão resolvida é um passo mais perto da aprovação! 🎯
                </>
              ) : totalStats.avgAccuracy >= 80 ? (
                <>
                  Seu desempenho está <span className="text-green-400">excepcional</span>! Com{' '}
                  <span className="text-green-400">{totalStats.avgAccuracy}%</span> de acurácia em{' '}
                  <span className="text-blue-400">{totalStats.completedQuestions} questões</span>, você está no caminho certo para a aprovação! Continue assim! 🔥
                </>
              ) : totalStats.avgAccuracy >= 60 ? (
                <>
                  Bom progresso! Você tem <span className="text-yellow-400">{totalStats.avgAccuracy}%</span> de acertos em{' '}
                  <span className="text-blue-400">{totalStats.completedQuestions} questões</span>. Com mais prática, você vai{' '}
                  <span className="text-green-400">alcançar a excelência</span>! 💪
                </>
              ) : (
                <>
                  Continue praticando! Com <span className="text-orange-400">{totalStats.completedQuestions} questões</span> resolvidas,{' '}
                  você está construindo sua base. A <span className="text-purple-400">consistência</span> é a chave do sucesso! 🎯
                </>
              )}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {currentStreak > 0 && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-orange-500/20 text-orange-300 flex items-center gap-1">
                  🔥 Sequência: {currentStreak} acertos
                </span>
              )}
              {todayAttempts.length >= 10 && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/20 text-green-300 flex items-center gap-1">
                  ✓ Meta diária: Atingida
                </span>
              )}
              {totalStats.completedQuestions > 0 && (
                <span className="text-[10px] px-2 py-1 rounded-full bg-purple-500/20 text-purple-300 flex items-center gap-1">
                  📊 Total: {totalStats.completedQuestions} questões
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}