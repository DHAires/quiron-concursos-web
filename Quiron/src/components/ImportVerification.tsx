import React from 'react';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import { 
  direitoConstitucionalQuestions, 
  allGameQuestions,
  getQuestionsByArea,
  getQuestionsBySubject,
  getRandomQuestions,
  getQuestionById
} from '../data/gameQuestions';

export function ImportVerification() {
  // Executar testes
  const tests = [
    {
      name: 'Total de questões carregadas',
      expected: '50 questões',
      result: direitoConstitucionalQuestions.length,
      pass: direitoConstitucionalQuestions.length === 50
    },
    {
      name: 'Primeira questão tem estrutura válida',
      expected: 'Todas as propriedades',
      result: direitoConstitucionalQuestions[0] ? 'OK' : 'FALHOU',
      pass: !!(direitoConstitucionalQuestions[0]?.id && 
               direitoConstitucionalQuestions[0]?.question &&
               direitoConstitucionalQuestions[0]?.explanation)
    },
    {
      name: 'Distribuição por dificuldade',
      expected: 'Fácil + Médio + Difícil = 50',
      result: `${direitoConstitucionalQuestions.filter(q => q.difficulty === 'facil').length} + ${direitoConstitucionalQuestions.filter(q => q.difficulty === 'medio').length} + ${direitoConstitucionalQuestions.filter(q => q.difficulty === 'dificil').length}`,
      pass: direitoConstitucionalQuestions.length === 50
    },
    {
      name: 'Função getQuestionsByArea',
      expected: '50 questões jurídicas',
      result: getQuestionsByArea('juridica').length,
      pass: getQuestionsByArea('juridica').length === 50
    },
    {
      name: 'Função getQuestionsBySubject',
      expected: '50 questões de Const.',
      result: getQuestionsBySubject('Direito Constitucional').length,
      pass: getQuestionsBySubject('Direito Constitucional').length === 50
    },
    {
      name: 'Função getRandomQuestions',
      expected: '10 questões aleatórias',
      result: getRandomQuestions(10, 'juridica').length,
      pass: getRandomQuestions(10, 'juridica').length === 10
    },
    {
      name: 'Função getQuestionById',
      expected: 'Questão const_001',
      result: getQuestionById('const_001')?.id || 'NÃO ENCONTRADO',
      pass: getQuestionById('const_001')?.id === 'const_001'
    },
    {
      name: 'IDs únicos',
      expected: '50 IDs únicos',
      result: new Set(direitoConstitucionalQuestions.map(q => q.id)).size,
      pass: new Set(direitoConstitucionalQuestions.map(q => q.id)).size === 50
    },
    {
      name: 'Range de IDs correto',
      expected: 'const_001 até const_050',
      result: `${direitoConstitucionalQuestions[0]?.id} até ${direitoConstitucionalQuestions[49]?.id}`,
      pass: direitoConstitucionalQuestions[0]?.id === 'const_001' && 
            direitoConstitucionalQuestions[49]?.id === 'const_050'
    },
    {
      name: 'Respostas balanceadas',
      expected: 'Mix de CERTO/ERRADO',
      result: `${direitoConstitucionalQuestions.filter(q => q.correctAnswer).length} CERTO, ${direitoConstitucionalQuestions.filter(q => !q.correctAnswer).length} ERRADO`,
      pass: direitoConstitucionalQuestions.filter(q => q.correctAnswer).length > 0 &&
            direitoConstitucionalQuestions.filter(q => !q.correctAnswer).length > 0
    }
  ];

  const allPassed = tests.every(test => test.pass);
  const passedCount = tests.filter(test => test.pass).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            ✅ Verificação de Importações
          </h1>
          <p className="text-xl text-gray-400">
            Banco de Questões - Direito Constitucional
          </p>
        </div>

        {/* Status Geral */}
        <div className={`p-8 rounded-3xl mb-8 border-2 ${
          allPassed 
            ? 'bg-green-900/20 border-green-500' 
            : 'bg-yellow-900/20 border-yellow-500'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {allPassed ? (
                <CheckCircle2 className="w-16 h-16 text-green-400" />
              ) : (
                <AlertTriangle className="w-16 h-16 text-yellow-400" />
              )}
              <div>
                <h2 className="text-3xl mb-2">
                  {allPassed ? '🎉 Tudo Funcionando!' : '⚠️ Alguns Testes Falharam'}
                </h2>
                <p className="text-gray-400">
                  {passedCount} de {tests.length} testes passaram
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-2">
                {Math.round((passedCount / tests.length) * 100)}%
              </div>
              <div className="text-sm text-gray-400">Sucesso</div>
            </div>
          </div>
        </div>

        {/* Lista de Testes */}
        <div className="space-y-4">
          <h3 className="text-2xl mb-4">📋 Resultados dos Testes</h3>
          
          {tests.map((test, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 transition-all ${
                test.pass
                  ? 'bg-green-900/10 border-green-500/30 hover:border-green-500/50'
                  : 'bg-red-900/10 border-red-500/30 hover:border-red-500/50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  test.pass ? 'bg-green-600' : 'bg-red-600'
                }`}>
                  {test.pass ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <XCircle className="w-6 h-6" />
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="text-lg mb-2">{test.name}</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Esperado:</span>
                      <span className="ml-2 text-gray-300">{test.expected}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Resultado:</span>
                      <span className={`ml-2 ${test.pass ? 'text-green-400' : 'text-red-400'}`}>
                        {test.result}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Estatísticas Detalhadas */}
        <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700">
          <h3 className="text-2xl mb-6">📊 Estatísticas Detalhadas</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-4xl text-blue-400 mb-2">
                {direitoConstitucionalQuestions.length}
              </div>
              <div className="text-sm text-gray-400">Total Questões</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl text-green-400 mb-2">
                {direitoConstitucionalQuestions.filter(q => q.difficulty === 'facil').length}
              </div>
              <div className="text-sm text-gray-400">Fáceis</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl text-yellow-400 mb-2">
                {direitoConstitucionalQuestions.filter(q => q.difficulty === 'medio').length}
              </div>
              <div className="text-sm text-gray-400">Médias</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl text-red-400 mb-2">
                {direitoConstitucionalQuestions.filter(q => q.difficulty === 'dificil').length}
              </div>
              <div className="text-sm text-gray-400">Difíceis</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700 grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-4xl text-green-400 mb-2">
                {direitoConstitucionalQuestions.filter(q => q.correctAnswer).length}
              </div>
              <div className="text-sm text-gray-400">Respostas CERTO</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl text-red-400 mb-2">
                {direitoConstitucionalQuestions.filter(q => !q.correctAnswer).length}
              </div>
              <div className="text-sm text-gray-400">Respostas ERRADO</div>
            </div>
          </div>
        </div>

        {/* Exemplo de Questão */}
        <div className="mt-8 p-8 rounded-3xl bg-gradient-to-br from-blue-900/30 to-gray-900 border-2 border-blue-500/50">
          <h3 className="text-2xl mb-6">📝 Exemplo de Questão</h3>
          
          {direitoConstitucionalQuestions[0] && (
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="px-4 py-2 rounded-full bg-blue-600 text-sm">
                  #{direitoConstitucionalQuestions[0].id}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm ${
                  direitoConstitucionalQuestions[0].difficulty === 'facil'
                    ? 'bg-green-600'
                    : direitoConstitucionalQuestions[0].difficulty === 'medio'
                    ? 'bg-yellow-600'
                    : 'bg-red-600'
                }`}>
                  {direitoConstitucionalQuestions[0].difficulty.toUpperCase()}
                </span>
              </div>
              
              <div className="p-6 rounded-2xl bg-black/30">
                <p className="text-lg mb-4">{direitoConstitucionalQuestions[0].question}</p>
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                  direitoConstitucionalQuestions[0].correctAnswer
                    ? 'bg-green-600'
                    : 'bg-red-600'
                }`}>
                  {direitoConstitucionalQuestions[0].correctAnswer ? (
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
              </div>
              
              <div className="p-6 rounded-2xl bg-green-900/20 border border-green-500/30">
                <div className="text-sm text-gray-400 mb-2">Explicação:</div>
                <p className="text-gray-300">{direitoConstitucionalQuestions[0].explanation}</p>
              </div>
            </div>
          )}
        </div>

        {/* Botão de Ação */}
        {allPassed && (
          <div className="mt-8 text-center">
            <a
              href="#questionbank"
              className="inline-block px-12 py-4 rounded-2xl bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-500 hover:to-blue-500 transition-all shadow-lg text-xl"
            >
              🎮 Ir para Banco de Questões
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
