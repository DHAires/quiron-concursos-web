// ======================================
// ÁREA POLICIAL - PROCEDIMENTOS POLICIAIS
// ======================================

import { GameQuestion } from './gameQuestions';

export const procedimentosPoliciaisQuestions: GameQuestion[] = [
  // INQUÉRITO POLICIAL - CONCEITO E NATUREZA
  {
    id: 'proc_001',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O inquérito policial é procedimento administrativo investigatório.',
    correctAnswer: true,
    explanation: 'CERTO. Arts. 4º a 23 CPP - fase pré-processual.',
    difficulty: 'facil'
  },
  {
    id: 'proc_002',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O inquérito policial é inquisitivo e não contraditório.',
    correctAnswer: true,
    explanation: 'CERTO. Ausência de contraditório e ampla defesa.',
    difficulty: 'facil'
  },
  {
    id: 'proc_003',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O inquérito policial é dispensável para o oferecimento de denúncia.',
    correctAnswer: true,
    explanation: 'CERTO. MP pode denunciar com base em peças de informação.',
    difficulty: 'medio'
  },
  {
    id: 'proc_004',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O inquérito policial é escrito e sigiloso.',
    correctAnswer: true,
    explanation: 'CERTO. Arts. 9º e 20 CPP - forma escrita, sigilo externo.',
    difficulty: 'facil'
  },
  {
    id: 'proc_005',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O sigilo do inquérito não se estende ao advogado do investigado.',
    correctAnswer: true,
    explanation: 'CERTO. Súmula Vinculante 14 STF - acesso aos autos.',
    difficulty: 'medio'
  },

  // INSTAURAÇÃO DO INQUÉRITO
  {
    id: 'proc_006',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O inquérito pode ser instaurado de ofício pela autoridade policial.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, I, CPP - em crimes de ação pública incondicionada.',
    difficulty: 'facil'
  },
  {
    id: 'proc_007',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A requisição do Ministério Público vincula a autoridade policial.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, II, CPP - é obrigatória.',
    difficulty: 'facil'
  },
  {
    id: 'proc_008',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'Qualquer do povo pode provocar a instauração de inquérito.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, §3º, CPP - notícia-crime, delatio criminis.',
    difficulty: 'facil'
  },
  {
    id: 'proc_009',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'Em crime de ação privada, o inquérito depende de requerimento do ofendido.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, §5º, CPP - condição de procedibilidade.',
    difficulty: 'facil'
  },
  {
    id: 'proc_010',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O juiz pode requisitar a instauração de inquérito policial.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, II, CPP - requisição vincula a autoridade policial.',
    difficulty: 'facil'
  },

  // PRAZO DO INQUÉRITO
  {
    id: 'proc_011',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O prazo do inquérito é de 10 dias se o indiciado estiver preso.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 10 CPP - prazo para conclusão.',
    difficulty: 'facil'
  },
  {
    id: 'proc_012',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O prazo do inquérito é de 30 dias se o indiciado estiver solto.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 10 CPP - prorrogável pelo juiz.',
    difficulty: 'facil'
  },
  {
    id: 'proc_013',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'Em crimes federais, o prazo é de 15 dias prorrogáveis por mais 15.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 66 Lei 5.010/66 - Polícia Federal.',
    difficulty: 'medio'
  },
  {
    id: 'proc_014',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'Em crimes contra economia popular, o prazo é de 10 dias.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 1.521/51 - indiciado preso ou solto.',
    difficulty: 'medio'
  },

  // ARQUIVAMENTO DO INQUÉRITO
  {
    id: 'proc_015',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A autoridade policial pode arquivar o inquérito policial.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 17 CPP - só o juiz a pedido do MP pode arquivar.',
    difficulty: 'facil'
  },
  {
    id: 'proc_016',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O arquivamento do inquérito não impede novo inquérito se surgirem provas novas.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 18 CPP - provas novas permitem desarquivamento.',
    difficulty: 'facil'
  },
  {
    id: 'proc_017',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'Se o juiz discordar do arquivamento, remete os autos ao Procurador-Geral.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 28 CPP - controle hierárquico do MP.',
    difficulty: 'medio'
  },

  // DILIGÊNCIAS DO INQUÉRITO
  {
    id: 'proc_018',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O delegado pode determinar a perícia criminal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 6º, VII, CPP - providência investigatória.',
    difficulty: 'facil'
  },
  {
    id: 'proc_019',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A autoridade policial pode ouvir testemunhas.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 6º, III, CPP - colheita de depoimentos.',
    difficulty: 'facil'
  },
  {
    id: 'proc_020',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O reconhecimento de pessoas deve seguir o procedimento do art. 226 CPP.',
    correctAnswer: true,
    explanation: 'CERTO. Descrever antes, ver várias pessoas, sem contato prévio.',
    difficulty: 'medio'
  },
  {
    id: 'proc_021',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A acareação pode ser realizada em inquérito policial.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 6º, VI, CPP - confronto entre declarações.',
    difficulty: 'facil'
  },
  {
    id: 'proc_022',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A reconstituição do crime é obrigatória.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 7º CPP - será facultativa quando necessária.',
    difficulty: 'medio'
  },

  // INDICIAMENTO
  {
    id: 'proc_023',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'Indiciar é atribuir autoria de infração penal a alguém.',
    correctAnswer: true,
    explanation: 'CERTO. Ato administrativo da autoridade policial.',
    difficulty: 'facil'
  },
  {
    id: 'proc_024',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O indiciado deve ser notificado do indiciamento.',
    correctAnswer: true,
    explanation: 'CERTO. Súmula Vinculante 50 STF - direito de defesa.',
    difficulty: 'medio'
  },
  {
    id: 'proc_025',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O indiciamento gera restrição de direitos.',
    correctAnswer: false,
    explanation: 'ERRADO. É mero ato administrativo, não gera sanções diretas.',
    difficulty: 'medio'
  },

  // PRISÃO EM FLAGRANTE
  {
    id: 'proc_026',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'Qualquer pessoa pode prender em flagrante delito.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 301 CPP - flagrante facultativo para particulares.',
    difficulty: 'facil'
  },
  {
    id: 'proc_027',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A autoridade policial tem o dever de prender em flagrante.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 301 CPP - flagrante obrigatório para autoridades.',
    difficulty: 'facil'
  },
  {
    id: 'proc_028',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O auto de prisão em flagrante deve ser enviado ao juiz em 24 horas.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 306 CPP - comunicação imediata.',
    difficulty: 'facil'
  },
  {
    id: 'proc_029',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O flagrante próprio ocorre quando o agente está cometendo ou acabou de cometer o crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 302, I e II, CPP - flagrante em sentido estrito.',
    difficulty: 'facil'
  },
  {
    id: 'proc_030',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O flagrante impróprio ocorre quando o agente é perseguido logo após o crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 302, III, CPP - quase-flagrante.',
    difficulty: 'facil'
  },
  {
    id: 'proc_031',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O flagrante presumido ocorre quando o agente é encontrado com instrumentos do crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 302, IV, CPP - flagrante ficto.',
    difficulty: 'medio'
  },
  {
    id: 'proc_032',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O flagrante preparado não gera prisão válida.',
    correctAnswer: true,
    explanation: 'CERTO. Súmula 145 STF - crime impossível, inexigibilidade.',
    difficulty: 'medio'
  },
  {
    id: 'proc_033',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A audiência de custódia deve ocorrer em até 24 horas da prisão.',
    correctAnswer: true,
    explanation: 'CERTO. Resolução CNJ 213/15 - apresentação do preso ao juiz.',
    difficulty: 'facil'
  },

  // BUSCA E APREENSÃO
  {
    id: 'proc_034',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A busca domiciliar durante o dia pode ser feita com mandado judicial.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XI, CF - inviolabilidade relativa.',
    difficulty: 'facil'
  },
  {
    id: 'proc_035',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'Em caso de flagrante delito, a busca domiciliar pode ser feita sem mandado.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XI, CF - exceção à inviolabilidade.',
    difficulty: 'facil'
  },
  {
    id: 'proc_036',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A busca pessoal independe de mandado judicial.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 244 CPP - fundada suspeita basta.',
    difficulty: 'facil'
  },
  {
    id: 'proc_037',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A busca domiciliar noturna só pode ser feita em flagrante ou desastre.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XI, CF - proteção à intimidade.',
    difficulty: 'facil'
  },

  // INTERCEPTAÇÃO TELEFÔNICA
  {
    id: 'proc_038',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A interceptação telefônica exige autorização judicial.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XII, CF e Lei 9.296/96.',
    difficulty: 'facil'
  },
  {
    id: 'proc_039',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A interceptação só pode ser autorizada em investigação criminal ou processo penal.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 9.296/96 - vedada em processo civil.',
    difficulty: 'facil'
  },
  {
    id: 'proc_040',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A interceptação telefônica pode durar no máximo 15 dias prorrogáveis.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º Lei 9.296/96 - prorrogações sucessivas possíveis.',
    difficulty: 'medio'
  },
  {
    id: 'proc_041',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'Gravar conversa própria sem conhecimento do outro é interceptação telefônica.',
    correctAnswer: false,
    explanation: 'ERRADO. STF - gravação clandestina, não interceptação (lícita se para defesa).',
    difficulty: 'dificil'
  },

  // QUEBRA DE SIGILO
  {
    id: 'proc_042',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A quebra de sigilo bancário depende de autorização judicial.',
    correctAnswer: true,
    explanation: 'CERTO. LC 105/01 - proteção constitucional à intimidade.',
    difficulty: 'facil'
  },
  {
    id: 'proc_043',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'CPIs podem decretar quebra de sigilo bancário e fiscal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 58, §3º, CF - poderes de investigação.',
    difficulty: 'facil'
  },
  {
    id: 'proc_044',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A quebra de sigilo de dados cadastrais (nome, CPF, endereço) exige autorização judicial.',
    correctAnswer: false,
    explanation: 'ERRADO. STJ - dados cadastrais não têm proteção de sigilo.',
    difficulty: 'medio'
  },

  // USO DA FORÇA
  {
    id: 'proc_045',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O uso da força deve observar os princípios da legalidade, necessidade e proporcionalidade.',
    correctAnswer: true,
    explanation: 'CERTO. Portaria Interministerial 4.226/10 - Princípios Básicos ONU.',
    difficulty: 'facil'
  },
  {
    id: 'proc_046',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A força letal é o último recurso para proteção de vida.',
    correctAnswer: true,
    explanation: 'CERTO. Uso progressivo da força - escalonamento necessário.',
    difficulty: 'facil'
  },
  {
    id: 'proc_047',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'O policial deve prestar socorro imediato após uso de arma de fogo.',
    correctAnswer: true,
    explanation: 'CERTO. Dever de preservação da vida e prestação de primeiros socorros.',
    difficulty: 'facil'
  },

  // ABORDAGEM POLICIAL
  {
    id: 'proc_048',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A abordagem policial deve ser realizada com respeito à dignidade da pessoa.',
    correctAnswer: true,
    explanation: 'CERTO. Procedimento deve evitar constrangimento desnecessário.',
    difficulty: 'facil'
  },
  {
    id: 'proc_049',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A revista pessoal deve ser justificada por fundada suspeita.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 244 CPP - não pode ser arbitrária.',
    difficulty: 'facil'
  },
  {
    id: 'proc_050',
    area: 'policial',
    subject: 'Procedimentos Policiais',
    question: 'A identificação do policial deve ser fornecida quando solicitada.',
    correctAnswer: true,
    explanation: 'CERTO. Transparência e accountability - direito do cidadão.',
    difficulty: 'facil'
  }
];
