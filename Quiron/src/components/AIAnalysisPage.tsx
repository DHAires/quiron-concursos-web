import React from 'react';
import { 
  Sparkles, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Crown,
  BarChart3,
  Users,
  Zap,
  Calendar,
  Target,
  Award,
  BookOpen,
  Clock,
  Flame,
  Shield,
  Scale,
  Briefcase,
  Brain
} from 'lucide-react';

interface AIAnalysisPageProps {
  onBack: () => void;
}

export function AIAnalysisPage({ onBack }: AIAnalysisPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-black -mx-4 -my-8 px-4 py-8">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-6 px-6 py-3 rounded-full bg-black/50 hover:bg-black/70 border border-purple-500/30 transition-all flex items-center gap-2 backdrop-blur-sm"
      >
        ← Voltar ao Dashboard
      </button>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Premium Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-600 via-yellow-500 to-orange-500 p-8 shadow-2xl border-2 border-yellow-400">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-yellow-900/30 flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-2xl font-bold text-white">Análise da IA Prometheus</h2>
                  <Crown className="w-6 h-6 text-yellow-200" />
                </div>
                <p className="text-yellow-100">
                  Relatórios personalizados com inteligência artificial
                </p>
              </div>
            </div>
            
            <div className="bg-yellow-900/50 backdrop-blur-sm px-6 py-4 rounded-2xl border-2 border-yellow-300/30">
              <p className="text-sm text-yellow-100 mb-1">🚀 EM BREVE</p>
              <p className="text-xl font-bold text-white">Apenas para Usuários Premium</p>
            </div>
          </div>
        </div>

        {/* Header Description */}
        <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 rounded-2xl p-6 border border-purple-500/30 backdrop-blur-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Flame className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                O que é a Análise da IA Prometheus?
              </h3>
              <p className="text-gray-300 leading-relaxed">
                A Prometheus analisa seu desempenho em tempo real e gera relatórios personalizados com insights profundos sobre sua preparação para concursos públicos. 
                Descubra seus pontos fortes, identifique áreas para melhorar e receba recomendações personalizadas para otimizar seus estudos e maximizar suas chances de aprovação.
              </p>
            </div>
          </div>
        </div>

        {/* Demo Section 1: Estatísticas e Desempenho */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-7 h-7 text-purple-400" />
            Estatísticas Detalhadas
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card: Visão Geral */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border-2 border-purple-500/30 shadow-xl">
              <h4 className="text-lg font-bold text-white mb-4">📊 Visão Geral do Desempenho</h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <p className="text-sm text-gray-400">Acertos</p>
                  </div>
                  <p className="text-3xl font-bold text-white">1847</p>
                  <p className="text-xs text-green-400">↑ 82.3%</p>
                </div>
                
                <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
                  <div className="flex items-center gap-2 mb-1">
                    <BookOpen className="w-5 h-5 text-blue-400" />
                    <p className="text-sm text-gray-400">Questões</p>
                  </div>
                  <p className="text-3xl font-bold text-white">2244</p>
                  <p className="text-xs text-gray-400">Total respondidas</p>
                </div>
                
                <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <p className="text-sm text-gray-400">Sequência</p>
                  </div>
                  <p className="text-3xl font-bold text-white">89</p>
                  <p className="text-xs text-orange-400">dias seguidos</p>
                </div>
                
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-5 h-5 text-purple-400" />
                    <p className="text-sm text-gray-400">Tempo Médio</p>
                  </div>
                  <p className="text-3xl font-bold text-white">1.8min</p>
                  <p className="text-xs text-gray-400">por questão</p>
                </div>
              </div>

              <div className="space-y-3">
                <h5 className="text-sm font-bold text-white">📈 Desempenho por Área</h5>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-blue-400" />
                      Jurídica
                    </span>
                    <span className="text-sm font-bold text-blue-400">85.2%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: '85.2%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-red-400" />
                      Policial
                    </span>
                    <span className="text-sm font-bold text-red-400">78.9%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-red-600 to-red-400" style={{ width: '78.9%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300 flex items-center gap-2">
                      <Brain className="w-4 h-4 text-purple-400" />
                      Conhecimentos Gerais
                    </span>
                    <span className="text-sm font-bold text-purple-400">81.6%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400" style={{ width: '81.6%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-300 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-yellow-400" />
                      Fiscal-Bancária
                    </span>
                    <span className="text-sm font-bold text-yellow-400">83.5%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-600 to-yellow-400" style={{ width: '83.5%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card: Evolução Mensal */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border-2 border-purple-500/30 shadow-xl">
              <h4 className="text-lg font-bold text-white mb-4">📈 Evolução Mensal</h4>
              
              <div className="space-y-4">
                <div className="grid grid-cols-6 gap-2 h-48">
                  {[
                    { month: 'Jul', correct: 245, wrong: 88 },
                    { month: 'Ago', correct: 298, wrong: 75 },
                    { month: 'Set', correct: 325, wrong: 65 },
                    { month: 'Out', correct: 356, wrong: 58 },
                    { month: 'Nov', correct: 385, wrong: 52 },
                    { month: 'Dez', correct: 418, wrong: 45 },
                  ].map((data, i) => (
                    <div key={i} className="flex flex-col items-center justify-end gap-1">
                      <div className="flex flex-col items-center gap-1 w-full">
                        <div 
                          className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-lg"
                          style={{ height: `${(data.correct / 500) * 100}%` }}
                        ></div>
                        <div 
                          className="w-full bg-gradient-to-t from-red-500 to-red-400 rounded-t-lg"
                          style={{ height: `${(data.wrong / 500) * 100}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">{data.month}</p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-green-500"></div>
                    <span className="text-sm text-gray-300">acertos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-red-500"></div>
                    <span className="text-sm text-gray-300">erros</span>
                  </div>
                </div>

                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                  <p className="text-sm text-gray-300 mb-1">📊 Tendência</p>
                  <p className="text-lg font-bold text-white">
                    Crescimento constante de <span className="text-green-400">+18%</span> nos últimos 6 meses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section 2: Comparativo com Outros Usuários */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Users className="w-7 h-7 text-blue-400" />
            Comparativo com Outros Concurseiros
          </h3>
          
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 border-2 border-blue-500/30 shadow-xl">
            <p className="text-gray-300 mb-6">Veja como você se compara à média dos concurseiros do Brasil</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Desempenho Superior */}
              <div className="bg-gradient-to-br from-green-900/30 to-green-950/30 rounded-xl p-4 border border-green-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-300 flex items-center gap-1">
                        <Scale className="w-4 h-4" />
                        Direito Constitucional
                      </p>
                      <span className="px-2 py-1 rounded-full bg-green-500/20 text-xs font-bold text-green-400">
                        +28%
                      </span>
                    </div>
                    <p className="font-bold text-green-400 mb-1">Desempenho Superior</p>
                    <p className="text-sm text-gray-400">
                      Você está 28% acima da média nacional em questões de Direito Constitucional
                    </p>
                    <p className="text-xs text-green-500 mt-2">Top 12% nacional</p>
                  </div>
                </div>
              </div>

              {/* Evolução Excepcional */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 rounded-xl p-4 border border-purple-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-300 flex items-center gap-1">
                        <Brain className="w-4 h-4" />
                        Raciocínio Lógico
                      </p>
                      <span className="px-2 py-1 rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">
                        +22%
                      </span>
                    </div>
                    <p className="font-bold text-purple-400 mb-1">Evolução Excepcional</p>
                    <p className="text-sm text-gray-400">
                      Em 6 meses você evoluiu 22% em Raciocínio Lógico enquanto a média regrediu 3%
                    </p>
                    <p className="text-xs text-purple-400 mt-2">Crescimento +25% acima da média</p>
                  </div>
                </div>
              </div>

              {/* Área para Melhorar */}
              <div className="bg-gradient-to-br from-red-900/30 to-red-950/30 rounded-xl p-4 border border-red-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-300 flex items-center gap-1">
                        <Shield className="w-4 h-4" />
                        Legislação Penal
                      </p>
                      <span className="px-2 py-1 rounded-full bg-red-500/20 text-xs font-bold text-red-400">
                        -9%
                      </span>
                    </div>
                    <p className="font-bold text-red-400 mb-1">Área para Melhorar</p>
                    <p className="text-sm text-gray-400">
                      Você está 9% abaixo da média em Legislação Penal e Processo Penal
                    </p>
                    <p className="text-xs text-orange-400 mt-2">Oportunidade de crescimento</p>
                  </div>
                </div>
              </div>

              {/* Destaque Nacional */}
              <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-950/30 rounded-xl p-4 border border-yellow-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-300 flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        Administração Financeira
                      </p>
                      <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-xs font-bold text-yellow-400">
                        +35%
                      </span>
                    </div>
                    <p className="font-bold text-yellow-400 mb-1">Destaque Nacional</p>
                    <p className="text-sm text-gray-400">
                      Suas notas estão 35% acima da média brasileira em Administração Financeira
                    </p>
                    <p className="text-xs text-yellow-400 mt-2">Top 8% em orçamento público</p>
                  </div>
                </div>
              </div>

              {/* Velocidade */}
              <div className="bg-gradient-to-br from-blue-900/30 to-blue-950/30 rounded-xl p-4 border border-blue-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-300">Velocidade de Resolução</p>
                      <span className="px-2 py-1 rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
                        +24%
                      </span>
                    </div>
                    <p className="font-bold text-blue-400 mb-1">Rapidez Acima da Média</p>
                    <p className="text-sm text-gray-400">
                      Você resolve questões 24% mais rápido que outros concurseiros
                    </p>
                    <p className="text-xs text-blue-400 mt-2">Tempo médio: 1.8 min vs 2.4 min</p>
                  </div>
                </div>
              </div>

              {/* Disciplina */}
              <div className="bg-gradient-to-br from-orange-900/30 to-orange-950/30 rounded-xl p-4 border border-orange-500/30">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm text-gray-300">Sequência de Estudos</p>
                      <span className="px-2 py-1 rounded-full bg-orange-500/20 text-xs font-bold text-orange-400">
                        +92%
                      </span>
                    </div>
                    <p className="font-bold text-orange-400 mb-1">Disciplina Exemplar</p>
                    <p className="text-sm text-gray-400">
                      Você estuda 92% mais dias consecutivos que a média dos concurseiros
                    </p>
                    <p className="text-xs text-orange-400 mt-2">89 dias seguidos! Meta diária cumprida!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Section 3: Análise da IA */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-yellow-400" />
            Análise Personalizada da IA Prometheus
          </h3>
          
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-950/40 rounded-2xl p-6 border-2 border-purple-500/50 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-300">Relatório personalizado baseado em seus dados de estudo</p>
              <div className="px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center gap-2">
                <Crown className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-bold text-yellow-400">PREMIUM</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Pontos Fortes */}
              <div className="bg-gradient-to-br from-green-900/30 to-green-950/30 rounded-xl p-5 border border-green-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h4 className="text-lg font-bold text-green-400">Pontos Fortes</h4>
                </div>
                
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Excelência em Direito Constitucional (85.2%)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Sequência de estudos impressionante (89 dias consecutivos)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Evolução constante mês a mês (+18% em 6 meses)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Domínio em Administração Financeira e Orçamento Público</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Velocidade de resolução 24% acima da média</span>
                  </li>
                </ul>
              </div>

              {/* Pontos Fracos */}
              <div className="bg-gradient-to-br from-orange-900/30 to-orange-950/30 rounded-xl p-5 border border-orange-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-400" />
                  <h4 className="text-lg font-bold text-orange-400">Pontos Fracos</h4>
                </div>
                
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Legislação Penal é sua área mais fraca (78.9%)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Dificuldade em questões de Processo Penal e crimes específicos</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Tempo médio elevado em questões de Direito Administrativo (2.8 min)</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Baixo desempenho em legislação extravagante e leis especiais</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                    <span>Confusão entre institutos similares (prescrição vs decadência)</span>
                  </li>
                </ul>
              </div>

              {/* Recomendações */}
              <div className="bg-gradient-to-br from-purple-900/30 to-purple-950/30 rounded-xl p-5 border border-purple-500/30">
                <div className="flex items-center gap-2 mb-4">
                  <Target className="w-6 h-6 text-purple-400" />
                  <h4 className="text-lg font-bold text-purple-400">Recomendações</h4>
                </div>
                
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Revisar Código Penal (artigos 121-180) com foco em tipos penais</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Fazer 50 questões diárias de Legislação Penal nos próximos 30 dias</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Criar mapas mentais para diferenciar institutos jurídicos similares</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Estudar legislação especial: Lei de Drogas, Maria da Penha, ECA</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-300">
                    <ArrowRight className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span>Assistir videoaulas de Processo Penal (recursos e nulidades)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Premium */}
        <div className="bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 rounded-2xl p-8 text-center shadow-2xl">
          <Crown className="w-16 h-16 text-white mx-auto mb-4" />
          <h3 className="text-3xl font-bold text-white mb-3">
            Desbloqueie Todo o Potencial da IA!
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Assine o plano Premium e tenha acesso a relatórios personalizados da IA Prometheus, 
            análises profundas, comparativos detalhados com outros concurseiros e recomendações exclusivas 
            para turbinar sua preparação e garantir sua aprovação!
          </p>
          <button className="px-8 py-4 bg-white text-orange-600 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl flex items-center gap-2 mx-auto">
            <Crown className="w-5 h-5" />
            Assinar Premium
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
