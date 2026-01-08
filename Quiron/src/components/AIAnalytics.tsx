import React from 'react';
import { ArrowLeft, TrendingUp, TrendingDown, Target, Zap, BookOpen, Clock, Award, Brain, BarChart3, Activity, Sparkles } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AIAnalyticsProps {
  onBack: () => void;
}

export function AIAnalytics({ onBack }: AIAnalyticsProps) {
  // Dados de evolução temporal
  const performanceData = [
    { mes: 'Jan', juridica: 45, policial: 52, fiscal: 38, gerais: 55 },
    { mes: 'Fev', juridica: 52, policial: 58, fiscal: 45, gerais: 60 },
    { mes: 'Mar', juridica: 58, policial: 65, fiscal: 52, gerais: 65 },
    { mes: 'Abr', juridica: 65, policial: 70, fiscal: 60, gerais: 70 },
    { mes: 'Mai', juridica: 72, policial: 75, fiscal: 68, gerais: 75 },
    { mes: 'Jun', juridica: 78, policial: 82, fiscal: 75, gerais: 80 },
  ];

  // Dados de questões por área
  const questionsData = [
    { area: 'Jurídica', resolvidas: 345, acertos: 268, erros: 77 },
    { area: 'Policial', resolvidas: 289, acertos: 235, erros: 54 },
    { area: 'Fiscal', resolvidas: 198, acertos: 138, erros: 60 },
    { area: 'Gerais', resolvidas: 412, acertos: 330, erros: 82 },
  ];

  // Dados de distribuição de tempo
  const timeDistribution = [
    { name: 'Jurídica', value: 35, color: '#3B82F6' },
    { name: 'Policial', value: 28, color: '#EF4444' },
    { name: 'Fiscal', value: 18, color: '#F59E0B' },
    { name: 'Gerais', value: 19, color: '#8B5CF6' },
  ];

  // Dados radar de habilidades
  const skillsData = [
    { subject: 'Constitucional', A: 85, fullMark: 100 },
    { subject: 'Administrativo', A: 78, fullMark: 100 },
    { subject: 'Penal', A: 72, fullMark: 100 },
    { subject: 'Civil', A: 68, fullMark: 100 },
    { subject: 'Processual', A: 75, fullMark: 100 },
    { subject: 'Tributário', A: 65, fullMark: 100 },
  ];

  // Estatísticas principais
  const stats = [
    {
      icon: Target,
      label: 'Taxa de Acerto Geral',
      value: '76.8%',
      change: '+12.4%',
      trend: 'up',
      color: 'from-green-600 to-green-400',
      iconColor: 'text-green-400',
    },
    {
      icon: Zap,
      label: 'Questões Resolvidas',
      value: '1,244',
      change: '+156',
      trend: 'up',
      color: 'from-yellow-600 to-yellow-400',
      iconColor: 'text-yellow-400',
    },
    {
      icon: Clock,
      label: 'Tempo Médio/Questão',
      value: '2m 15s',
      change: '-23s',
      trend: 'up',
      color: 'from-blue-600 to-blue-400',
      iconColor: 'text-blue-400',
    },
    {
      icon: Award,
      label: 'Ranking Atual',
      value: '#127',
      change: '+45',
      trend: 'up',
      color: 'from-purple-600 to-purple-400',
      iconColor: 'text-purple-400',
    },
  ];

  // Simulação de provas
  const simulationScores = [
    { prova: 'TRT-SP 2024', nota: 82, media: 67, aprovacao: 70 },
    { prova: 'TJ-RS 2024', nota: 75, media: 62, aprovacao: 65 },
    { prova: 'PC-RJ 2024', nota: 88, media: 71, aprovacao: 75 },
    { prova: 'SEFAZ-SP 2024', nota: 79, media: 65, aprovacao: 68 },
  ];

  // Recomendações da IA
  const recommendations = [
    {
      icon: Brain,
      title: 'Foco em Direito Administrativo',
      description: 'Suas questões de Direito Administrativo estão 15% abaixo da média. Dedique 2h/dia nos próximos 7 dias.',
      priority: 'high',
      gradient: 'from-red-600 to-orange-500',
    },
    {
      icon: Sparkles,
      title: 'Ótimo Desempenho em Constitucional',
      description: 'Você está 18% acima da média! Continue revisando para manter o nível.',
      priority: 'low',
      gradient: 'from-green-600 to-emerald-500',
    },
    {
      icon: Activity,
      title: 'Melhore Velocidade de Leitura',
      description: 'Seu tempo médio está bom, mas pode ganhar 30s/questão com técnicas de leitura dinâmica.',
      priority: 'medium',
      gradient: 'from-blue-600 to-cyan-500',
    },
  ];

  return (
    <div className="min-h-screen pb-12">
      {/* Banner "EM BREVE" Piscando */}
      <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 shadow-2xl border-2 border-yellow-400/50 animate-pulse">
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '3s' }} />
          <h2 className="text-3xl text-white text-center tracking-wider animate-pulse">
            ⚡ EM BREVE ⚡
          </h2>
          <Sparkles className="w-8 h-8 text-white animate-spin" style={{ animationDuration: '3s' }} />
        </div>
        <p className="text-center text-white/90 mt-2">
          Análise completa com Inteligência Artificial será liberada em breve!
        </p>
      </div>

      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-gray-600 mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg">Voltar</span>
        </button>

        <div className="flex items-center gap-4 mb-2">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl">
            <Brain className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl mb-1">Análise IA - Dashboard</h1>
            <p className="text-xl text-gray-400">Inteligência Artificial analisando seu desempenho</p>
          </div>
        </div>
      </div>

      {/* Cards de Estatísticas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`relative p-6 rounded-3xl bg-gradient-to-br ${stat.color} shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-white/20 overflow-hidden flash-banner`}
          >
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center`}>
                  <stat.icon className={`w-7 h-7 text-white`} />
                </div>
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm`}>
                  {stat.trend === 'up' ? (
                    <TrendingUp className="w-4 h-4 text-white" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-white" />
                  )}
                  <span className="text-sm text-white">{stat.change}</span>
                </div>
              </div>
              <div className="text-4xl mb-2 text-white">{stat.value}</div>
              <div className="text-sm text-white/90">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Gráficos Principais */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Gráfico de Evolução */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl">Evolução de Desempenho</h3>
              <p className="text-sm text-gray-400">Últimos 6 meses por área</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="mes" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  color: '#fff',
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="juridica" stroke="#3B82F6" strokeWidth={3} name="Jurídica" />
              <Line type="monotone" dataKey="policial" stroke="#EF4444" strokeWidth={3} name="Policial" />
              <Line type="monotone" dataKey="fiscal" stroke="#F59E0B" strokeWidth={3} name="Fiscal" />
              <Line type="monotone" dataKey="gerais" stroke="#8B5CF6" strokeWidth={3} name="Gerais" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Gráfico de Questões por Área */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-emerald-500 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl">Questões por Área</h3>
              <p className="text-sm text-gray-400">Acertos vs Erros</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={questionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="area" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  color: '#fff',
                }}
              />
              <Legend />
              <Bar dataKey="acertos" fill="#10B981" name="Acertos" radius={[8, 8, 0, 0]} />
              <Bar dataKey="erros" fill="#EF4444" name="Erros" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Gráficos Secundários */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Distribuição de Tempo */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl">Distribuição de Tempo</h3>
              <p className="text-sm text-gray-400">% do tempo por área</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={timeDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {timeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  color: '#fff',
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Radar de Habilidades */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-600 to-red-500 flex items-center justify-center">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-2xl">Habilidades por Matéria</h3>
              <p className="text-sm text-gray-400">Proficiência em cada área</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillsData}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" />
              <PolarRadiusAxis stroke="#9CA3AF" />
              <Radar name="Proficiência" dataKey="A" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.6} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '12px',
                  color: '#fff',
                }}
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Simulação de Provas */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 shadow-xl mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-600 to-blue-500 flex items-center justify-center">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl">Simulação de Provas</h3>
            <p className="text-sm text-gray-400">Como você se sairia em provas reais?</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {simulationScores.map((sim, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-500 hover:border-cyan-400 transition-all hover:scale-105 shadow-lg"
            >
              <div className="text-sm text-gray-400 mb-2">{sim.prova}</div>
              <div className="text-3xl mb-3 flex items-center gap-2">
                {sim.nota}
                <span className="text-lg text-gray-400">/ 100</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Média geral:</span>
                  <span className="text-yellow-400">{sim.media}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Nota de corte:</span>
                  <span className="text-cyan-400">{sim.aprovacao}</span>
                </div>
                <div className="pt-2">
                  {sim.nota >= sim.aprovacao ? (
                    <div className="px-3 py-1.5 rounded-lg bg-green-500/20 text-green-400 text-sm text-center">
                      ✅ Aprovado!
                    </div>
                  ) : (
                    <div className="px-3 py-1.5 rounded-lg bg-red-500/20 text-red-400 text-sm text-center">
                      ❌ Reprovado
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recomendações da IA */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-600 to-purple-500 flex items-center justify-center">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl">Recomendações da IA</h3>
            <p className="text-sm text-gray-400">Dicas personalizadas para melhorar seu desempenho</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl bg-gradient-to-br ${rec.gradient} shadow-xl hover:shadow-2xl transition-all hover:scale-105 border-2 border-white/20`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <rec.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg text-white">{rec.title}</h4>
                    {rec.priority === 'high' && (
                      <span className="px-2 py-0.5 rounded-full bg-red-500/30 text-red-200 text-xs">
                        Alta
                      </span>
                    )}
                    {rec.priority === 'medium' && (
                      <span className="px-2 py-0.5 rounded-full bg-yellow-500/30 text-yellow-200 text-xs">
                        Média
                      </span>
                    )}
                    {rec.priority === 'low' && (
                      <span className="px-2 py-0.5 rounded-full bg-green-500/30 text-green-200 text-xs">
                        Baixa
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">{rec.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparativo com Média Nacional */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-700 border-2 border-gray-600 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-teal-500 flex items-center justify-center">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl">Comparativo com Média Nacional</h3>
            <p className="text-sm text-gray-400">Veja como você está em relação aos outros concurseiros</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { area: 'Jurídica', voce: 78, media: 65, diff: '+13%' },
            { area: 'Policial', voce: 82, media: 72, diff: '+10%' },
            { area: 'Fiscal', voce: 75, media: 68, diff: '+7%' },
            { area: 'Gerais', voce: 80, media: 70, diff: '+10%' },
          ].map((comp, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-600 border border-gray-500"
            >
              <div className="text-sm text-gray-400 mb-3">{comp.area}</div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-300">Você</span>
                    <span className="text-green-400">{comp.voce}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full"
                      style={{ width: `${comp.voce}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span className="text-gray-300">Média</span>
                    <span className="text-yellow-400">{comp.media}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full"
                      style={{ width: `${comp.media}%` }}
                    ></div>
                  </div>
                </div>
                <div className="pt-2 text-center">
                  <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                    {comp.diff} acima
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
