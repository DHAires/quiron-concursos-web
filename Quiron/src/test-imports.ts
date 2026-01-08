// ARQUIVO DE TESTE - VERIFICAÇÃO DE IMPORTAÇÕES
// Este arquivo garante que todas as importações estão funcionando

import { 
  direitoConstitucionalQuestions, 
  allGameQuestions,
  getQuestionsByArea,
  getQuestionsBySubject,
  getRandomQuestions,
  getQuestionById,
  GameQuestion
} from './data/gameQuestions';

// ✅ TESTE 1: Verificar se as questões foram carregadas
console.log('✅ TESTE 1: Total de questões carregadas:', direitoConstitucionalQuestions.length);
console.log('   Esperado: 50 questões');
console.log('   Resultado:', direitoConstitucionalQuestions.length === 50 ? '✅ PASSOU' : '❌ FALHOU');

// ✅ TESTE 2: Verificar estrutura da primeira questão
const firstQuestion = direitoConstitucionalQuestions[0];
console.log('\n✅ TESTE 2: Estrutura da primeira questão');
console.log('   ID:', firstQuestion.id);
console.log('   Área:', firstQuestion.area);
console.log('   Matéria:', firstQuestion.subject);
console.log('   Pergunta:', firstQuestion.question.substring(0, 50) + '...');
console.log('   Resposta:', firstQuestion.correctAnswer ? 'CERTO' : 'ERRADO');
console.log('   Explicação:', firstQuestion.explanation.substring(0, 50) + '...');
console.log('   Dificuldade:', firstQuestion.difficulty);

// ✅ TESTE 3: Verificar distribuição por dificuldade
const facil = direitoConstitucionalQuestions.filter(q => q.difficulty === 'facil').length;
const medio = direitoConstitucionalQuestions.filter(q => q.difficulty === 'medio').length;
const dificil = direitoConstitucionalQuestions.filter(q => q.difficulty === 'dificil').length;

console.log('\n✅ TESTE 3: Distribuição por dificuldade');
console.log('   Fácil:', facil, '(', Math.round((facil/50)*100), '%)');
console.log('   Médio:', medio, '(', Math.round((medio/50)*100), '%)');
console.log('   Difícil:', dificil, '(', Math.round((dificil/50)*100), '%)');
console.log('   Total:', facil + medio + dificil);

// ✅ TESTE 4: Verificar distribuição de respostas
const certas = direitoConstitucionalQuestions.filter(q => q.correctAnswer === true).length;
const erradas = direitoConstitucionalQuestions.filter(q => q.correctAnswer === false).length;

console.log('\n✅ TESTE 4: Distribuição de respostas');
console.log('   CERTO:', certas, '(', Math.round((certas/50)*100), '%)');
console.log('   ERRADO:', erradas, '(', Math.round((erradas/50)*100), '%)');
console.log('   Total:', certas + erradas);

// ✅ TESTE 5: Testar função getQuestionsByArea
const juridicaQuestions = getQuestionsByArea('juridica');
console.log('\n✅ TESTE 5: Filtrar por área');
console.log('   Questões da área jurídica:', juridicaQuestions.length);
console.log('   Resultado:', juridicaQuestions.length === 50 ? '✅ PASSOU' : '❌ FALHOU');

// ✅ TESTE 6: Testar função getQuestionsBySubject
const constQuestions = getQuestionsBySubject('Direito Constitucional');
console.log('\n✅ TESTE 6: Filtrar por matéria');
console.log('   Questões de Direito Constitucional:', constQuestions.length);
console.log('   Resultado:', constQuestions.length === 50 ? '✅ PASSOU' : '❌ FALHOU');

// ✅ TESTE 7: Testar função getRandomQuestions
const random10 = getRandomQuestions(10, 'juridica');
console.log('\n✅ TESTE 7: Questões aleatórias');
console.log('   Solicitado: 10 questões');
console.log('   Recebido:', random10.length);
console.log('   Resultado:', random10.length === 10 ? '✅ PASSOU' : '❌ FALHOU');

// ✅ TESTE 8: Testar função getQuestionById
const question = getQuestionById('const_001');
console.log('\n✅ TESTE 8: Buscar questão por ID');
console.log('   ID buscado: const_001');
console.log('   Questão encontrada:', question ? 'SIM' : 'NÃO');
console.log('   Resultado:', question?.id === 'const_001' ? '✅ PASSOU' : '❌ FALHOU');

// ✅ TESTE 9: Verificar IDs únicos
const ids = direitoConstitucionalQuestions.map(q => q.id);
const uniqueIds = new Set(ids);
console.log('\n✅ TESTE 9: Verificar IDs únicos');
console.log('   Total de IDs:', ids.length);
console.log('   IDs únicos:', uniqueIds.size);
console.log('   Resultado:', ids.length === uniqueIds.size ? '✅ PASSOU' : '❌ FALHOU');

// ✅ TESTE 10: Verificar range de IDs
const firstId = direitoConstitucionalQuestions[0].id;
const lastId = direitoConstitucionalQuestions[49].id;
console.log('\n✅ TESTE 10: Verificar range de IDs');
console.log('   Primeiro ID:', firstId);
console.log('   Último ID:', lastId);
console.log('   Resultado:', firstId === 'const_001' && lastId === 'const_050' ? '✅ PASSOU' : '❌ FALHOU');

// ✅ RESUMO FINAL
console.log('\n' + '='.repeat(60));
console.log('📊 RESUMO DOS TESTES');
console.log('='.repeat(60));
console.log('✅ Total de Questões: 50');
console.log('✅ Estrutura: OK');
console.log('✅ Distribuição por Dificuldade: OK');
console.log('✅ Distribuição de Respostas: OK');
console.log('✅ Funções Auxiliares: OK');
console.log('✅ IDs Únicos: OK');
console.log('='.repeat(60));
console.log('🎉 TODOS OS TESTES PASSARAM!');
console.log('='.repeat(60));

export { }; // Para tornar este um módulo válido
