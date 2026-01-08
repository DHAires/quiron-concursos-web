import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, X, BookOpen, Trophy, Target, Lightbulb, ChevronRight } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useQuestionProgress } from '../hooks/useQuestionProgress';

interface Question {
  id: string;
  enunciado: string;
  alternativas: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  gabarito: string;
  explicacao: string;
  banca: string;
  ano: number;
  cargo: string;
}

interface QuestionPracticeProps {
  onBack: () => void;
  area: string;
  subject: string;
  topic: string;
  topicName: string;
}

export function QuestionPractice({ onBack, area, subject, topic, topicName }: QuestionPracticeProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [loading, setLoading] = useState(true);
  const { recordAttempt } = useQuestionProgress();

  useEffect(() => {
    loadQuestions();
  }, [area, subject, topic]);

  const loadQuestions = async () => {
    try {
      console.log(`🔍 [FRONTEND] Carregando questões: area=${area}, subject=${subject}, topic=${topic}`);
      
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/${area}/${subject}/${topic}`;
      console.log(`🌐 [FRONTEND] URL da requisição: ${url}`);
      
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      console.log(`📡 [FRONTEND] Response status: ${response.status}`);

      if (!response.ok) {
        throw new Error('Failed to load questions');
      }

      const data = await response.json();
      console.log(`📦 [FRONTEND] Dados recebidos:`, data);
      console.log(`📊 [FRONTEND] Quantidade de questões: ${data.questions?.length || 0}`);
      
      if (data.questions && data.questions.length > 0) {
        console.log(`✅ [FRONTEND] ${data.questions.length} questões carregadas com sucesso!`);
        // Normalize questions to ensure consistent format
        const normalizedQuestions = data.questions.map((q: any) => normalizeQuestion(q));
        setQuestions(normalizedQuestions);
      } else {
        console.log('⚠️ [FRONTEND] No questions found, questions need to be seeded');
      }
    } catch (error) {
      console.error('❌ [FRONTEND] Error loading questions:', error);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to normalize questions from old format to new format
  const normalizeQuestion = (q: any): Question => {
    // If already in new format, return as is
    if (q.enunciado && q.alternativas && q.gabarito) {
      return q as Question;
    }

    // Convert from old format to new format
    const options = q.options || [];
    const correctAnswer = q.correctAnswer || 0;
    const letters = ['A', 'B', 'C', 'D', 'E'];

    return {
      id: q.id,
      enunciado: q.question || q.enunciado || '',
      alternativas: {
        A: options[0] || '',
        B: options[1] || '',
        C: options[2] || '',
        D: options[3] || '',
        E: options[4] || '',
      },
      gabarito: letters[correctAnswer] || 'A',
      explicacao: q.explanation || q.explicacao || '',
      banca: q.examBoard || q.banca || 'N/A',
      ano: q.year || q.ano || 2024,
      cargo: q.difficulty || q.cargo || 'medium',
    };
  };

  const saveAnswer = async (isCorrect: boolean) => {
    try {
      await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/answers`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            userId: 'default-user', // TODO: Implementar auth
            questionId: currentQuestion.id,
            answer: selectedAnswer,
            isCorrect,
          }),
        }
      );
    } catch (error) {
      console.error('Error saving answer:', error);
    }
  };

  const handleAnswerSelect = (answer: string) => {
    if (showExplanation) return; // Já respondeu
    
    setSelectedAnswer(answer);
    setShowExplanation(true);
    
    const isCorrect = answer === currentQuestion.gabarito;
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    }));

    // Record progress
    recordAttempt(currentQuestion.id, area, subject, topic, isCorrect);
    
    saveAnswer(isCorrect);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando questões...</p>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="min-h-screen pb-12">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all shadow-lg mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>
        
        <div className="text-center py-12">
          <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
          <h3 className="text-2xl mb-2">Questões em breve!</h3>
          <p className="text-gray-400">
            As questões para este tema serão carregadas em breve.
          </p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const accuracy = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all shadow-lg"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar</span>
        </button>

        {/* Stats */}
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 rounded-xl bg-blue-600/20 border border-blue-500/30">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm">{score.correct}/{score.total}</span>
            </div>
          </div>
          <div className="px-4 py-2 rounded-xl bg-purple-600/20 border border-purple-500/30">
            <div className="flex items-center gap-2">
              <Trophy className="w-4 h-4 text-purple-400" />
              <span className="text-sm">{accuracy}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Topic Title */}
      <div className="mb-6">
        <h2 className="text-3xl mb-2">{topicName}</h2>
        <p className="text-gray-400">Questão {currentQuestionIndex + 1} de {questions.length}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700 mb-6">
        {/* Question Info */}
        <div className="flex items-center gap-3 mb-6">
          <div className="px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-sm text-blue-400">
            {currentQuestion.banca}
          </div>
          <div className="px-3 py-1 rounded-full bg-purple-600/20 border border-purple-500/30 text-sm text-purple-400">
            {currentQuestion.ano}
          </div>
          <div className="px-3 py-1 rounded-full bg-green-600/20 border border-green-500/30 text-sm text-green-400">
            {currentQuestion.cargo}
          </div>
        </div>

        {/* Question Text */}
        <div className="mb-6">
          <p className="text-lg leading-relaxed">{currentQuestion.enunciado}</p>
        </div>

        {/* Alternatives */}
        <div className="space-y-3">
          {Object.entries(currentQuestion.alternativas).map(([letter, text]) => {
            const isSelected = selectedAnswer === letter;
            const isCorrect = letter === currentQuestion.gabarito;
            const showCorrect = showExplanation && isCorrect;
            const showWrong = showExplanation && isSelected && !isCorrect;

            return (
              <button
                key={letter}
                onClick={() => handleAnswerSelect(letter)}
                disabled={showExplanation}
                className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                  showCorrect
                    ? 'bg-green-600/20 border-green-500 shadow-lg shadow-green-500/30'
                    : showWrong
                    ? 'bg-red-600/20 border-red-500 shadow-lg shadow-red-500/30'
                    : isSelected
                    ? 'bg-blue-600/20 border-blue-500'
                    : 'bg-gray-800/50 border-gray-700 hover:border-gray-600 hover:bg-gray-800'
                } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    showCorrect
                      ? 'bg-green-600'
                      : showWrong
                      ? 'bg-red-600'
                      : isSelected
                      ? 'bg-blue-600'
                      : 'bg-gray-700'
                  }`}>
                    {showCorrect ? (
                      <Check className="w-5 h-5" />
                    ) : showWrong ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <span>{letter}</span>
                    )}
                  </div>
                  <span className="flex-1">{text}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-3xl p-8 border border-blue-500/30 shadow-2xl mb-6 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-2xl">Explicação</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">{currentQuestion.explicacao}</p>
        </div>
      )}

      {/* Next Button */}
      {showExplanation && currentQuestionIndex < questions.length - 1 && (
        <button
          onClick={handleNextQuestion}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg flex items-center justify-center gap-2 text-lg animate-fade-in"
        >
          <span>Próxima Questão</span>
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

      {/* Finish */}
      {showExplanation && currentQuestionIndex === questions.length - 1 && (
        <div className="text-center animate-fade-in">
          <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-3xl p-8 border border-green-500/30 shadow-2xl mb-6">
            <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-3xl mb-2">Parabéns, Herói!</h3>
            <p className="text-xl text-gray-300 mb-4">
              Você completou todas as questões deste tema!
            </p>
            <div className="flex items-center justify-center gap-8 mb-6">
              <div>
                <div className="text-4xl text-green-400 mb-1">{score.correct}</div>
                <div className="text-sm text-gray-400">Acertos</div>
              </div>
              <div>
                <div className="text-4xl text-purple-400 mb-1">{accuracy}%</div>
                <div className="text-sm text-gray-400">Acurácia</div>
              </div>
            </div>
          </div>
          <button
            onClick={onBack}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg"
          >
            Voltar para Temas
          </button>
        </div>
      )}
    </div>
  );
}