// ======================================
// ÁREA JURÍDICA - DIREITO DO TRABALHO
// ======================================

import { GameQuestion } from './gameQuestions';

export const direitoTrabalhoQuestions: GameQuestion[] = [
  // RELAÇÃO DE EMPREGO
  {
    id: 'trabalho_001',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'São requisitos da relação de emprego: pessoalidade, onerosidade, não eventualidade e subordinação.',
    correctAnswer: true,
    explanation: 'CERTO. Arts. 2º e 3º CLT - elementos caracterizadores do vínculo empregatício.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_002',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O trabalho voluntário gera vínculo empregatício.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 9.608/98 - ausência de onerosidade afasta o vínculo.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_003',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O estagiário possui vínculo empregatício com a empresa concedente.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 11.788/2008 - estágio não gera vínculo se cumpridos os requisitos legais.',
    difficulty: 'facil'
  },

  // CONTRATO DE TRABALHO
  {
    id: 'trabalho_004',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O contrato de trabalho pode ser verbal ou escrito.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 443 CLT - consensual, não exige forma especial (regra geral).',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_005',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O contrato de experiência não pode exceder 90 dias.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 445, parágrafo único, CLT - prazo máximo.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_006',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O contrato por prazo determinado pode ser prorrogado mais de uma vez.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 451 CLT - só uma prorrogação, sob pena de virar indeterminado.',
    difficulty: 'medio'
  },
  {
    id: 'trabalho_007',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'A alteração lesiva do contrato de trabalho é nula de pleno direito.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 468 CLT - princípio da inalterabilidade contratual lesiva.',
    difficulty: 'facil'
  },

  // JORNADA DE TRABALHO
  {
    id: 'trabalho_008',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'A duração normal do trabalho não superior a 8 horas diárias e 44 semanais.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 7º, XIII, CF - limite constitucional.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_009',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O adicional de horas extras deve ser de, no mínimo, 50%.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 7º, XVI, CF - percentual mínimo constitucional.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_010',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O intervalo intrajornada em jornada superior a 6 horas deve ser de no mínimo 1 hora.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 71 CLT - intervalo para repouso/alimentação.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_011',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O trabalho noturno urbano é aquele realizado entre 22h e 5h.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 73 CLT - horário noturno urbano.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_012',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O adicional noturno urbano é de no mínimo 20%.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 73 CLT - percentual mínimo legal.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_013',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'A hora noturna urbana é computada como 52 minutos e 30 segundos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 73, §1º, CLT - hora ficta/reduzida.',
    difficulty: 'medio'
  },

  // FÉRIAS
  {
    id: 'trabalho_014',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O empregado tem direito a férias anuais de 30 dias após cada período de 12 meses de trabalho.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 130 CLT - período aquisitivo e direito a férias.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_015',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'As férias podem ser divididas em até 3 períodos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 134, §1º, CLT - desde que um período tenha no mínimo 14 dias.',
    difficulty: 'medio'
  },
  {
    id: 'trabalho_016',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'A remuneração das férias deve ser paga até 2 dias antes do início do período de férias.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 145 CLT - prazo para pagamento.',
    difficulty: 'medio'
  },
  {
    id: 'trabalho_017',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O abono pecuniário de férias (venda de 1/3) é direito irrenunciável.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 143 CLT - é faculdade do empregado converter 1/3 em dinheiro.',
    difficulty: 'medio'
  },

  // 13º SALÁRIO
  {
    id: 'trabalho_018',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O 13º salário deve ser pago em duas parcelas.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 4.749/65 - 1ª parcela até nov., 2ª até 20/dez.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_019',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'Para ter direito ao 13º integral, o empregado deve ter trabalhado 15 dias no mês.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 4.090/62 - fração igual ou superior a 15 dias = mês integral.',
    difficulty: 'medio'
  },

  // FGTS
  {
    id: 'trabalho_020',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O depósito do FGTS corresponde a 8% da remuneração mensal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 15 Lei 8.036/90 - percentual para empregados em geral.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_021',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O empregado pode sacar o FGTS na despedida sem justa causa.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 20, I, Lei 8.036/90 - hipótese de saque.',
    difficulty: 'facil'
  },

  // AVISO PRÉVIO
  {
    id: 'trabalho_022',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O aviso prévio mínimo é de 30 dias.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 7º, XXI, CF e art. 487 CLT - prazo mínimo.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_023',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O aviso prévio é acrescido de 3 dias por ano de serviço, até o máximo de 90 dias.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 12.506/2011 - proporcional ao tempo de serviço.',
    difficulty: 'medio'
  },
  {
    id: 'trabalho_024',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'Durante o aviso prévio, a jornada é reduzida em 2 horas diárias.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 488 CLT - ou 7 dias corridos (opção do empregado).',
    difficulty: 'facil'
  },

  // RESCISÃO CONTRATUAL
  {
    id: 'trabalho_025',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'Na despedida sem justa causa, o empregado tem direito à multa de 40% sobre o FGTS.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 18, §1º, Lei 8.036/90 - indenização compensatória.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_026',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O pedido de demissão não gera direito ao seguro-desemprego.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 7.998/90 - só cabe em dispensa involuntária.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_027',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'As verbas rescisórias devem ser pagas em até 10 dias após o término do contrato.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 477, §6º, CLT - prazo para quitação.',
    difficulty: 'facil'
  },

  // JUSTA CAUSA
  {
    id: 'trabalho_028',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'São motivos de justa causa: ato de improbidade, incontinência de conduta e desídia.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 482 CLT - hipóteses de rescisão por justa causa.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_029',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'A embriaguez habitual ou em serviço é motivo de justa causa.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 482, "f", CLT - alcoolismo como falta grave.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_030',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'Na dispensa por justa causa, o empregado perde o direito ao FGTS e multa de 40%.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 20 Lei 8.036/90 - não pode movimentar a conta.',
    difficulty: 'facil'
  },

  // ESTABILIDADE E GARANTIAS
  {
    id: 'trabalho_031',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'A gestante tem estabilidade desde a confirmação da gravidez até 5 meses após o parto.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 10, II, "b", ADCT - garantia provisória de emprego.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_032',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O membro da CIPA tem estabilidade desde o registro da candidatura até 1 ano após o mandato.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 10, II, "a", ADCT e art. 165 CLT - proteção ao cipeiro.',
    difficulty: 'medio'
  },
  {
    id: 'trabalho_033',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O acidentado tem estabilidade de 12 meses após a cessação do auxílio-doença acidentário.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 118 Lei 8.213/91 - garantia ao acidentado.',
    difficulty: 'medio'
  },

  // SALÁRIO E REMUNERAÇÃO
  {
    id: 'trabalho_034',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O salário mínimo é irredutível.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 7º, IV, CF - princípio da irredutibilidade salarial.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_035',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'Gorjetas integram a remuneração do empregado.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 457, §3º, CLT - integram a remuneração, não o salário.',
    difficulty: 'medio'
  },
  {
    id: 'trabalho_036',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O salário deve ser pago até o 5º dia útil do mês subsequente.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 459, parágrafo único, CLT - prazo para pagamento.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_037',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O vale-transporte tem natureza salarial.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 7.418/85 - não tem natureza salarial, não integra remuneração.',
    difficulty: 'medio'
  },

  // TRABALHO DA MULHER
  {
    id: 'trabalho_038',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'A licença-maternidade é de 120 dias.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 7º, XVIII, CF - prazo mínimo constitucional.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_039',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'A mãe que amamenta tem direito a dois intervalos de 30 minutos cada um durante a jornada.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 396 CLT - até o 6º mês de vida do filho.',
    difficulty: 'medio'
  },

  // TRABALHO DO MENOR
  {
    id: 'trabalho_040',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'É proibido qualquer trabalho a menores de 16 anos, salvo na condição de aprendiz a partir de 14 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 7º, XXXIII, CF - proteção ao trabalho do menor.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_041',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'É proibido o trabalho noturno, perigoso ou insalubre a menores de 18 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 7º, XXXIII, CF - proteção especial.',
    difficulty: 'facil'
  },

  // SEGURANÇA E MEDICINA DO TRABALHO
  {
    id: 'trabalho_042',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O adicional de insalubridade é de 10%, 20% ou 40% sobre o salário mínimo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 192 CLT - graus mínimo, médio e máximo.',
    difficulty: 'medio'
  },
  {
    id: 'trabalho_043',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O adicional de periculosidade é de 30% sobre o salário base.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 193, §1º, CLT - percentual legal.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_044',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'Os adicionais de insalubridade e periculosidade são cumuláveis.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 193, §2º, CLT - opção do empregado pelo mais vantajoso.',
    difficulty: 'medio'
  },

  // DIREITO COLETIVO
  {
    id: 'trabalho_045',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'É livre a associação profissional ou sindical.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 8º, V, CF - liberdade sindical.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_046',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'É vedada a dispensa do empregado sindicalizado a partir do registro da candidatura até 1 ano após o mandato.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 8º, VIII, CF - estabilidade do dirigente sindical.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_047',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'A greve é um direito do trabalhador.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 9º CF - direito de greve garantido constitucionalmente.',
    difficulty: 'facil'
  },

  // PRESCRIÇÃO
  {
    id: 'trabalho_048',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O prazo prescricional para o trabalhador urbano é de 5 anos até o limite de 2 anos após a extinção do contrato.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 7º, XXIX, CF - prescrição bienal e quinquenal.',
    difficulty: 'medio'
  },

  // PRINCÍPIOS
  {
    id: 'trabalho_049',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'O princípio da proteção visa proteger a parte mais fraca da relação de emprego.',
    correctAnswer: true,
    explanation: 'CERTO. Princípio basilar do Direito do Trabalho - proteção ao hipossuficiente.',
    difficulty: 'facil'
  },
  {
    id: 'trabalho_050',
    area: 'juridica',
    subject: 'Direito do Trabalho',
    question: 'Em caso de dúvida, as normas trabalhistas devem ser interpretadas favoravelmente ao empregado.',
    correctAnswer: true,
    explanation: 'CERTO. Princípio do in dubio pro operario - interpretação mais favorável.',
    difficulty: 'facil'
  }
];
