import React, { useState } from 'react';
import { CheckCircle2, XCircle, BookOpen, Filter, Search, Shuffle, Eye, ArrowLeft, Lock } from 'lucide-react';
import { 
  direitoConstitucionalQuestions, 
  direitoAdministrativoQuestions, 
  direitoPenalQuestions, 
  direitoCivilQuestions, 
  direitoTrabalhoQuestions,
  legislacaoPenalEspecialQuestions,
  criminologiaQuestions,
  direitosHumanosQuestions,
  procedimentosPoliciaisQuestions,
  conhecimentosBancariosQuestions,
  direitoTributarioQuestions,
  contabilidadeQuestions,
  afoQuestions,
  economiaQuestions,
  portuguesQuestions,
  raciocioLogicoQuestions,
  informaticaQuestions,
  atualidadesQuestions,
  historiaBrasilQuestions,
  GameQuestion, 
  gameAreas, 
  Area, 
  Subject 
} from '../data/gameQuestions';
import { GameIntegrationBanner } from './GameIntegrationBanner';

interface QuestionBankViewerProps {
  onBack?: () => void;
}

export function QuestionBankViewer({ onBack }: QuestionBankViewerProps) {
  const [selectedArea, setSelectedArea] = useState<Area | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<GameQuestion | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [filterDifficulty, setFilterDifficulty] = useState<'all' | 'facil' | 'medio' | 'dificil'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Obter questões da matéria selecionada
  const getSubjectQuestions = (): GameQuestion[] => {
    if (!selectedSubject) return [];
    
    // Área Jurídica
    if (selectedSubject.id === 'direito-constitucional') {
      return direitoConstitucionalQuestions;
    }
    
    if (selectedSubject.id === 'direito-administrativo') {
      return direitoAdministrativoQuestions;
    }
    
    if (selectedSubject.id === 'direito-penal') {
      return direitoPenalQuestions;
    }
    
    if (selectedSubject.id === 'direito-civil') {
      return direitoCivilQuestions;
    }
    
    if (selectedSubject.id === 'direito-do-trabalho') {
      return direitoTrabalhoQuestions;
    }
    
    // Área Policial
    if (selectedSubject.id === 'legislacao-penal-especial') {
      return legislacaoPenalEspecialQuestions;
    }
    
    if (selectedSubject.id === 'criminologia') {
      return criminologiaQuestions;
    }
    
    if (selectedSubject.id === 'direitos-humanos') {
      return direitosHumanosQuestions;
    }
    
    if (selectedSubject.id === 'procedimentos-policiais') {
      return procedimentosPoliciaisQuestions;
    }
    
    // Área Fiscal-Bancária
    if (selectedSubject.id === 'conhecimentos-bancarios') {
      return conhecimentosBancariosQuestions;
    }
    
    // Área Fiscal
    if (selectedSubject.id === 'direito-tributario') {
      return direitoTributarioQuestions;
    }
    
    if (selectedSubject.id === 'contabilidade') {
      return contabilidadeQuestions;
    }
    
    if (selectedSubject.id === 'afo') {
      return afoQuestions;
    }
    
    if (selectedSubject.id === 'economia') {
      return economiaQuestions;
    }
    
    // Área Conhecimentos Gerais
    if (selectedSubject.id === 'portugues') {
      return portuguesQuestions;
    }
    
    if (selectedSubject.id === 'raciocinio-logico') {
      return raciocioLogicoQuestions;
    }
    
    if (selectedSubject.id === 'informatica') {
      return informaticaQuestions;
    }
    
    if (selectedSubject.id === 'atualidades') {
      return atualidadesQuestions;
    }
    
    if (selectedSubject.id === 'historia-do-brasil') {
      return historiaBrasilQuestions;
    }
    
    return [];
  };

  // Filtrar questões
  const filteredQuestions = getSubjectQuestions().filter(q => {
    const matchesDifficulty = filterDifficulty === 'all' || q.difficulty === filterDifficulty;
    const matchesSearch = searchTerm === '' || 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.explanation.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDifficulty && matchesSearch;
  });

  const handleRandomQuestion = () => {
    const random = filteredQuestions[Math.floor(Math.random() * filteredQuestions.length)];
    setSelectedQuestion(random);
    setShowAnswer(false);
  };

  const handleAnswerReveal = () => {
    setShowAnswer(true);
  };

  const currentQuestions = getSubjectQuestions();
  const stats = {
    total: currentQuestions.length,
    facil: currentQuestions.filter(q => q.difficulty === 'facil').length,
    medio: currentQuestions.filter(q => q.difficulty === 'medio').length,
    dificil: currentQuestions.filter(q => q.difficulty === 'dificil').length,
    certas: currentQuestions.filter(q => q.correctAnswer === true).length,
    erradas: currentQuestions.filter(q => q.correctAnswer === false).length
  };

  // VIEW 1: Seleção de Área
  if (!selectedArea) {
    // Calcular estatísticas gerais
    const totalQuestionsAll = gameAreas.reduce((sum, area) => 
      sum + area.subjects.reduce((subSum, subject) => subSum + subject.questionsCount, 0), 0
    );
    const totalSubjects = gameAreas.reduce((sum, area) => sum + area.subjects.length, 0);
    const totalAreas = gameAreas.length;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              📚 Banco de Questões
            </h1>
            <p className="text-xl text-gray-400">
              Selecione uma área temática para começar
            </p>
          </div>

          {/* Estatísticas Gerais do Banco */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-900/20 border border-blue-500/30 rounded-2xl p-6 text-center">
              <div className="text-5xl mb-2">📊</div>
              <div className="text-4xl text-blue-400 mb-1">{totalQuestionsAll}</div>
              <div className="text-sm text-gray-400">Questões Totais</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/30 rounded-2xl p-6 text-center">
              <div className="text-5xl mb-2">🎯</div>
              <div className="text-4xl text-purple-400 mb-1">{totalAreas}</div>
              <div className="text-sm text-gray-400">Áreas Temáticas</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-600/20 to-pink-900/20 border border-pink-500/30 rounded-2xl p-6 text-center">
              <div className="text-5xl mb-2">📚</div>
              <div className="text-4xl text-pink-400 mb-1">{totalSubjects}</div>
              <div className="text-sm text-gray-400">Matérias</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-green-900/20 border border-green-500/30 rounded-2xl p-6 text-center">
              <div className="text-5xl mb-2">✅</div>
              <div className="text-4xl text-green-400 mb-1">100%</div>
              <div className="text-sm text-gray-400">Completo</div>
            </div>
          </div>

          {/* Game Integration Banner */}
          <GameIntegrationBanner />

          {/* Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gameAreas.map((area) => {
              const totalQuestions = area.subjects.reduce((sum, subject) => sum + subject.questionsCount, 0);
              const availableSubjects = area.subjects.filter(s => s.questionsCount > 0).length;
              
              return (
                <button
                  key={area.id}
                  onClick={() => setSelectedArea(area)}
                  className={`p-8 rounded-3xl border-2 transition-all hover:scale-105 hover:shadow-2xl text-left relative overflow-hidden group ${
                    totalQuestions > 0
                      ? `bg-gradient-to-br from-gray-800 to-gray-900 border-${area.id === 'juridica' ? 'blue' : area.id === 'policial' ? 'red' : area.id === 'fiscal-bancaria' ? 'yellow' : 'purple'}-500/50`
                      : 'bg-gray-800/50 border-gray-700 opacity-60 cursor-not-allowed'
                  }`}
                  disabled={totalQuestions === 0}
                >
                  {/* Background decoration */}
                  <div className={`absolute top-0 right-0 w-48 h-48 ${area.bgColor} opacity-10 rounded-full blur-3xl group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative z-10">
                    {/* Title */}
                    <div className="flex items-center justify-between mb-4">
                      <h2 className={`text-3xl ${area.color}`}>{area.name}</h2>
                      {totalQuestions === 0 && (
                        <Lock className="w-8 h-8 text-gray-500" />
                      )}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 rounded-xl bg-black/30">
                        <div className={`text-2xl ${area.color} mb-1`}>{totalQuestions}</div>
                        <div className="text-xs text-gray-400">Questões</div>
                      </div>
                      <div className="text-center p-3 rounded-xl bg-black/30">
                        <div className={`text-2xl ${area.color} mb-1`}>{area.subjects.length}</div>
                        <div className="text-xs text-gray-400">Matérias</div>
                      </div>
                      <div className="text-center p-3 rounded-xl bg-black/30">
                        <div className={`text-2xl ${area.color} mb-1`}>{availableSubjects}</div>
                        <div className="text-xs text-gray-400">Disponíveis</div>
                      </div>
                    </div>

                    {/* Subjects Preview */}
                    <div className="space-y-2">
                      <div className="text-sm text-gray-400 mb-2">Matérias:</div>
                      {area.subjects.map((subject) => (
                        <div key={subject.id} className="flex items-center justify-between p-2 rounded-lg bg-black/20">
                          <span className={`text-sm ${subject.questionsCount > 0 ? 'text-gray-300' : 'text-gray-500'}`}>
                            {subject.name}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded ${
                            subject.questionsCount > 0 
                              ? `${subject.color} text-white`
                              : 'bg-gray-700 text-gray-400'
                          }`}>
                            {subject.questionsCount > 0 ? `${subject.questionsCount} questões` : 'Em breve'}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Call to action */}
                    {totalQuestions > 0 && (
                      <div className="mt-6 text-center">
                        <span className={`inline-block px-6 py-2 rounded-full ${area.bgColor} text-white animate-pulse`}>
                          Clique para explorar →
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // VIEW 2: Seleção de Matéria
  if (selectedArea && !selectedSubject) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => setSelectedArea(null)}
            className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para Áreas
          </button>

          {/* Header */}
          <div className="text-center mb-12">
            <h1 className={`text-5xl md:text-6xl mb-4 ${selectedArea.color}`}>
              {selectedArea.name}
            </h1>
            <p className="text-xl text-gray-400">
              Selecione uma matéria
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedArea.subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => subject.questionsCount > 0 && setSelectedSubject(subject)}
                className={`p-6 rounded-2xl border-2 transition-all text-left ${
                  subject.questionsCount > 0
                    ? `${subject.color} hover:scale-105 hover:shadow-2xl border-white/10`
                    : 'bg-gray-800/50 border-gray-700 opacity-60 cursor-not-allowed'
                }`}
                disabled={subject.questionsCount === 0}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl text-white flex-1">{subject.name}</h3>
                  {subject.questionsCount === 0 && (
                    <Lock className="w-6 h-6 text-gray-500" />
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-3xl text-white">
                    {subject.questionsCount}
                  </span>
                  <span className="text-sm text-gray-300">
                    {subject.questionsCount > 0 ? 'questões' : 'Em breve'}
                  </span>
                </div>

                {subject.questionsCount > 0 && (
                  <div className="mt-4 text-center">
                    <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                      Acessar →
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // VIEW 3: Questões da Matéria
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => {
            setSelectedSubject(null);
            setSelectedQuestion(null);
            setSearchTerm('');
            setFilterDifficulty('all');
          }}
          className="mb-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para {selectedArea?.name}
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {selectedSubject?.name}
          </h1>
          <p className="text-xl text-gray-400">
            {selectedArea?.name}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-900/30 to-gray-900 border-2 border-blue-500/30 text-center">
            <div className="text-3xl text-blue-400 mb-1">{stats.total}</div>
            <div className="text-xs text-gray-400">Total</div>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-green-900/30 to-gray-900 border-2 border-green-500/30 text-center">
            <div className="text-3xl text-green-400 mb-1">{stats.facil}</div>
            <div className="text-xs text-gray-400">Fácil</div>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-900/30 to-gray-900 border-2 border-yellow-500/30 text-center">
            <div className="text-3xl text-yellow-400 mb-1">{stats.medio}</div>
            <div className="text-xs text-gray-400">Médio</div>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-900/30 to-gray-900 border-2 border-red-500/30 text-center">
            <div className="text-3xl text-red-400 mb-1">{stats.dificil}</div>
            <div className="text-xs text-gray-400">Difícil</div>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-green-900/30 to-gray-900 border-2 border-green-500/30 text-center">
            <div className="text-3xl text-green-400 mb-1">{stats.certas}</div>
            <div className="text-xs text-gray-400">Certas</div>
          </div>
          <div className="p-4 rounded-2xl bg-gradient-to-br from-red-900/30 to-gray-900 border-2 border-red-500/30 text-center">
            <div className="text-3xl text-red-400 mb-1">{stats.erradas}</div>
            <div className="text-xs text-gray-400">Erradas</div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar questões..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-gray-800 border-2 border-gray-700 focus:border-blue-500 outline-none transition-colors text-white"
            />
          </div>

          {/* Difficulty Filter + Random */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilterDifficulty('all')}
              className={`px-6 py-2 rounded-full transition-all ${
                filterDifficulty === 'all'
                  ? 'bg-blue-600 shadow-lg shadow-blue-500/50'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              Todas ({currentQuestions.length})
            </button>
            <button
              onClick={() => setFilterDifficulty('facil')}
              className={`px-6 py-2 rounded-full transition-all ${
                filterDifficulty === 'facil'
                  ? 'bg-green-600 shadow-lg shadow-green-500/50'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              Fácil ({stats.facil})
            </button>
            <button
              onClick={() => setFilterDifficulty('medio')}
              className={`px-6 py-2 rounded-full transition-all ${
                filterDifficulty === 'medio'
                  ? 'bg-yellow-600 shadow-lg shadow-yellow-500/50'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              Médio ({stats.medio})
            </button>
            <button
              onClick={() => setFilterDifficulty('dificil')}
              className={`px-6 py-2 rounded-full transition-all ${
                filterDifficulty === 'dificil'
                  ? 'bg-red-600 shadow-lg shadow-red-500/50'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              Difícil ({stats.dificil})
            </button>

            <button
              onClick={handleRandomQuestion}
              className="ml-auto px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg flex items-center gap-2"
            >
              <Shuffle className="w-5 h-5" />
              Questão Aleatória
            </button>
          </div>
        </div>

        {/* Question Card Preview */}
        {selectedQuestion && (
          <div className="mb-8 p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-blue-500/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Question Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className={`px-4 py-2 rounded-full ${
                    selectedQuestion.difficulty === 'facil'
                      ? 'bg-green-600'
                      : selectedQuestion.difficulty === 'medio'
                      ? 'bg-yellow-600'
                      : 'bg-red-600'
                  }`}>
                    {selectedQuestion.difficulty.toUpperCase()}
                  </div>
                  <div className="text-sm text-gray-400">#{selectedQuestion.id}</div>
                </div>
                
                {showAnswer && (
                  <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                    selectedQuestion.correctAnswer
                      ? 'bg-green-600'
                      : 'bg-red-600'
                  }`}>
                    {selectedQuestion.correctAnswer ? (
                      <>
                        <CheckCircle2 className="w-5 h-5" />
                        <span>CERTO</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5" />
                        <span>ERRADO</span>
                      </>
                    )}
                  </div>
                )}
              </div>

              {/* Question Text */}
              <div className="mb-6 p-6 rounded-2xl bg-black/30">
                <p className="text-xl leading-relaxed">{selectedQuestion.question}</p>
              </div>

              {/* Answer Buttons */}
              {!showAnswer ? (
                <div className="flex gap-4">
                  <button
                    onClick={handleAnswerReveal}
                    className="flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg flex items-center justify-center gap-3 text-xl"
                  >
                    <Eye className="w-6 h-6" />
                    Ver Resposta
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Explanation */}
                  <div className={`p-6 rounded-2xl border-2 ${
                    selectedQuestion.correctAnswer
                      ? 'bg-green-900/20 border-green-500/50'
                      : 'bg-red-900/20 border-red-500/50'
                  }`}>
                    <h3 className="text-lg mb-3 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Explicação:
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{selectedQuestion.explanation}</p>
                  </div>

                  {/* Next Question */}
                  <button
                    onClick={handleRandomQuestion}
                    className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg flex items-center justify-center gap-3 text-xl"
                  >
                    <Shuffle className="w-6 h-6" />
                    Próxima Questão
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-4">
          <h2 className="text-2xl mb-4 flex items-center gap-3">
            <Filter className="w-6 h-6 text-blue-400" />
            Questões Filtradas ({filteredQuestions.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredQuestions.map((question) => (
              <button
                key={question.id}
                onClick={() => {
                  setSelectedQuestion(question);
                  setShowAnswer(false);
                }}
                className={`p-6 rounded-2xl border-2 transition-all text-left hover:scale-105 ${
                  selectedQuestion?.id === question.id
                    ? 'bg-blue-900/30 border-blue-500'
                    : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    question.correctAnswer ? 'bg-green-600' : 'bg-red-600'
                  }`}>
                    {question.correctAnswer ? (
                      <CheckCircle2 className="w-6 h-6" />
                    ) : (
                      <XCircle className="w-6 h-6" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-gray-400">#{question.id}</span>
                      <span className={`px-2 py-1 rounded text-xs ${
                        question.difficulty === 'facil'
                          ? 'bg-green-600'
                          : question.difficulty === 'medio'
                          ? 'bg-yellow-600'
                          : 'bg-red-600'
                      }`}>
                        {question.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 line-clamp-3">
                      {question.question}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-400">
              Nenhuma questão encontrada com os filtros selecionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}