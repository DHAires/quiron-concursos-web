// ========================================
// TEMPLATE PARA CRIAR NOVAS MATÉRIAS
// ========================================
// 
// INSTRUÇÕES:
// 1. Copie este template
// 2. Substitua os placeholders:
//    - NOME_MATERIA: ex: direitoAdministrativoQuestions
//    - PREFIXO_ID: ex: admin (para admin_001, admin_002...)
//    - AREA_ID: juridica | policial | fiscal-bancaria | conhecimentos-gerais
//    - NOME_SUBJECT: ex: 'Direito Administrativo'
// 3. Adicione as 50 questões
// 4. Importe no /data/gameQuestions.ts
// 5. Atualize o array allGameQuestions
// 6. Atualize o questionsCount na estrutura gameAreas
//
// ========================================

import { GameQuestion } from './gameQuestions';

export const NOME_MATERIAQuestions: GameQuestion[] = [
  // TEMA 1 (5 questões)
  {
    id: 'PREFIXO_001',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Enunciado curto da questão (máximo 2 linhas, cabe na carta).',
    correctAnswer: true, // ou false
    explanation: 'CERTO/ERRADO. Explicação curta e objetiva (máximo 2 linhas).',
    difficulty: 'facil' // facil | medio | dificil
  },
  {
    id: 'PREFIXO_002',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Segunda questão do tema 1.',
    correctAnswer: false,
    explanation: 'ERRADO. Explicação da resposta errada.',
    difficulty: 'facil'
  },
  {
    id: 'PREFIXO_003',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Terceira questão do tema 1.',
    correctAnswer: true,
    explanation: 'CERTO. Explicação.',
    difficulty: 'medio'
  },
  {
    id: 'PREFIXO_004',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Quarta questão do tema 1.',
    correctAnswer: false,
    explanation: 'ERRADO. Explicação.',
    difficulty: 'medio'
  },
  {
    id: 'PREFIXO_005',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Quinta questão do tema 1.',
    correctAnswer: true,
    explanation: 'CERTO. Explicação.',
    difficulty: 'dificil'
  },

  // TEMA 2 (5 questões)
  {
    id: 'PREFIXO_006',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Primeira questão do tema 2.',
    correctAnswer: true,
    explanation: 'CERTO. Explicação.',
    difficulty: 'facil'
  },
  {
    id: 'PREFIXO_007',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Segunda questão do tema 2.',
    correctAnswer: false,
    explanation: 'ERRADO. Explicação.',
    difficulty: 'facil'
  },
  {
    id: 'PREFIXO_008',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Terceira questão do tema 2.',
    correctAnswer: true,
    explanation: 'CERTO. Explicação.',
    difficulty: 'medio'
  },
  {
    id: 'PREFIXO_009',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Quarta questão do tema 2.',
    correctAnswer: false,
    explanation: 'ERRADO. Explicação.',
    difficulty: 'medio'
  },
  {
    id: 'PREFIXO_010',
    area: 'AREA_ID',
    subject: 'NOME_SUBJECT',
    question: 'Quinta questão do tema 2.',
    correctAnswer: true,
    explanation: 'CERTO. Explicação.',
    difficulty: 'dificil'
  },

  // Continue com mais 8 temas de 5 questões cada = 50 questões total
  // TEMA 3 (5 questões) - PREFIXO_011 até PREFIXO_015
  // TEMA 4 (5 questões) - PREFIXO_016 até PREFIXO_020
  // TEMA 5 (5 questões) - PREFIXO_021 até PREFIXO_025
  // TEMA 6 (5 questões) - PREFIXO_026 até PREFIXO_030
  // TEMA 7 (5 questões) - PREFIXO_031 até PREFIXO_035
  // TEMA 8 (5 questões) - PREFIXO_036 até PREFIXO_040
  // TEMA 9 (5 questões) - PREFIXO_041 até PREFIXO_045
  // TEMA 10 (5 questões) - PREFIXO_046 até PREFIXO_050
];

// ========================================
// DISTRIBUIÇÃO RECOMENDADA:
// ========================================
// - 10 temas principais da matéria
// - 5 questões por tema
// - Distribuição de dificuldade:
//   * Fácil: 30-40% (15-20 questões)
//   * Médio: 40-50% (20-25 questões)
//   * Difícil: 10-20% (5-10 questões)
// - Distribuição de respostas:
//   * CERTO: 60-75% (30-38 questões)
//   * ERRADO: 25-40% (12-20 questões)
//
// ========================================
// APÓS CRIAR A MATÉRIA:
// ========================================
// 1. Em /data/gameQuestions.ts:
//    - Importar: import { NOME_MATERIAQuestions } from './NOME_MATERIA';
//    - Adicionar ao allGameQuestions: ...NOME_MATERIAQuestions
// 
// 2. Atualizar gameAreas:
//    - Encontrar a área correspondente
//    - Atualizar questionsCount da matéria de 0 para 50
//
// 3. Em /components/QuestionBankViewer.tsx:
//    - Adicionar case no getSubjectQuestions()
//    - Importar as questões se necessário
//
// ========================================
// EXEMPLO DE IMPLEMENTAÇÃO:
// ========================================
/*
// Em /data/gameQuestions.ts:
import { direitoAdministrativoQuestions } from './direitoAdministrativo';

export const allGameQuestions: GameQuestion[] = [
  ...direitoConstitucionalQuestions,
  ...direitoAdministrativoQuestions,  // <- Adicionar aqui
];

// Atualizar gameAreas:
subjects: [
  { id: 'direito-constitucional', name: 'Direito Constitucional', questionsCount: 50, color: 'bg-blue-500' },
  { id: 'direito-administrativo', name: 'Direito Administrativo', questionsCount: 50, color: 'bg-blue-600' }, // <- Atualizar aqui
  ...
]

// Em QuestionBankViewer.tsx:
const getSubjectQuestions = (): GameQuestion[] => {
  if (!selectedSubject) return [];
  
  if (selectedSubject.id === 'direito-constitucional') {
    return direitoConstitucionalQuestions;
  }
  if (selectedSubject.id === 'direito-administrativo') {
    return direitoAdministrativoQuestions;  // <- Adicionar aqui
  }
  
  return [];
};
*/
