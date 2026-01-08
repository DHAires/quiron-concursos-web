// DIREITO TRIBUTÁRIO - 50 QUESTÕES
// Área Fiscal-Bancária - Quiron Concursos
// Questões essenciais para concursos da Receita Federal, SEFAZ, ISS, e concursos fiscais

import { GameQuestion } from './gameQuestions';

export const direitoTributarioQuestions: GameQuestion[] = [
  // ========================================
  // PRINCÍPIOS CONSTITUCIONAIS TRIBUTÁRIOS
  // ========================================
  {
    id: 'dt-001',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O princípio da legalidade tributária exige que lei ordinária institua tributo, não sendo admitida a instituição por medida provisória.',
    correctAnswer: false,
    explanation: 'ERRADO. A CF/88 permite que medida provisória institua ou majore impostos (exceto os que exigem lei complementar). O princípio da legalidade é atendido.',
    difficulty: 'medio'
  },
  {
    id: 'dt-002',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Pelo princípio da anterioridade anual, um tributo criado em novembro de 2024 somente pode ser cobrado a partir de janeiro de 2025.',
    correctAnswer: true,
    explanation: 'CERTO. A anterioridade anual (ou de exercício) veda a cobrança de tributos no mesmo exercício financeiro em que foi publicada a lei que os instituiu.',
    difficulty: 'facil'
  },
  {
    id: 'dt-003',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O Imposto sobre Produtos Industrializados (IPI) está sujeito tanto à anterioridade anual quanto à anterioridade nonagesimal.',
    correctAnswer: false,
    explanation: 'ERRADO. O IPI é exceção às duas anterioridades. Pode ser cobrado imediatamente após a publicação da lei que o majora, respeitando apenas o princípio da legalidade.',
    difficulty: 'medio'
  },
  {
    id: 'dt-004',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O princípio da capacidade contributiva aplica-se a todos os tributos, inclusive taxas e contribuições de melhoria.',
    correctAnswer: false,
    explanation: 'ERRADO. A CF/88 estabelece que a capacidade contributiva aplica-se aos impostos (art. 145, §1º). Taxas e contribuições de melhoria seguem outros critérios (contraprestação e valorização).',
    difficulty: 'medio'
  },
  {
    id: 'dt-005',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'É vedado à União, Estados, DF e Municípios instituir tratamento desigual entre contribuintes que se encontrem em situação equivalente.',
    correctAnswer: true,
    explanation: 'CERTO. O princípio da isonomia tributária (art. 150, II, CF/88) proíbe tratamento desigual entre contribuintes em situação equivalente, vedando discriminação arbitrária.',
    difficulty: 'facil'
  },

  // ========================================
  // ESPÉCIES TRIBUTÁRIAS
  // ========================================
  {
    id: 'dt-006',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Segundo a teoria pentapartida adotada pelo STF, existem cinco espécies tributárias: impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais.',
    correctAnswer: true,
    explanation: 'CERTO. O STF adota a teoria pentapartida das espécies tributárias previstas na CF/88: impostos, taxas, contribuições de melhoria, empréstimos compulsórios e contribuições especiais.',
    difficulty: 'facil'
  },
  {
    id: 'dt-007',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A taxa pode ter base de cálculo própria de imposto, desde que não haja identidade integral entre uma base e outra.',
    correctAnswer: false,
    explanation: 'ERRADO. A Súmula Vinculante 29 do STF veda às taxas ter base de cálculo própria de impostos, ainda que parcialmente. A vedação é absoluta para evitar bitributação.',
    difficulty: 'medio'
  },
  {
    id: 'dt-008',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A contribuição de melhoria deve ter como limite total a despesa realizada pela obra pública, e como limite individual o acréscimo de valor ao imóvel beneficiado.',
    correctAnswer: true,
    explanation: 'CERTO. Os limites da contribuição de melhoria são: total (custo da obra) e individual (valorização imobiliária do contribuinte), conforme art. 81 do CTN.',
    difficulty: 'medio'
  },
  {
    id: 'dt-009',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O empréstimo compulsório somente pode ser instituído pela União, mediante lei complementar.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 148 da CF/88 estabelece competência exclusiva da União para instituir empréstimo compulsório, mediante lei complementar.',
    difficulty: 'facil'
  },
  {
    id: 'dt-010',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'As contribuições sociais para o financiamento da seguridade social incidem sobre a receita ou faturamento, folha de salários, lucro e importação de bens e serviços.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 195 da CF/88 estabelece essas quatro bases para as contribuições sociais: folha de salários, receita/faturamento, lucro e importação.',
    difficulty: 'facil'
  },

  // ========================================
  // COMPETÊNCIA TRIBUTÁRIA
  // ========================================
  {
    id: 'dt-011',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A competência tributária é indelegável, mas as capacidades tributárias ativa e legislativa podem ser delegadas a outra pessoa jurídica.',
    correctAnswer: false,
    explanation: 'ERRADO. A competência tributária e a capacidade legislativa são indelegáveis. Somente a capacidade tributária ativa (arrecadação/fiscalização) pode ser delegada.',
    difficulty: 'medio'
  },
  {
    id: 'dt-012',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Compete aos Estados e ao Distrito Federal instituir impostos sobre transmissão causa mortis e doação de quaisquer bens ou direitos (ITCMD).',
    correctAnswer: true,
    explanation: 'CERTO. O art. 155, I da CF/88 estabelece competência estadual e distrital para o ITCMD, incidente sobre transmissão causa mortis e doação.',
    difficulty: 'facil'
  },
  {
    id: 'dt-013',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O Imposto sobre Serviços de Qualquer Natureza (ISS) compete aos Municípios, exceto os serviços de transporte interestadual e intermunicipal.',
    correctAnswer: true,
    explanation: 'CERTO. O ISS é municipal (art. 156, III, CF/88), mas não incide sobre transporte interestadual/intermunicipal e comunicação, que são tributados pelo ICMS estadual.',
    difficulty: 'medio'
  },
  {
    id: 'dt-014',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A União pode instituir impostos não previstos na Constituição, mediante lei complementar, desde que sejam não-cumulativos.',
    correctAnswer: false,
    explanation: 'ERRADO. A competência residual da União (art. 154, I) exige que os novos impostos sejam não-cumulativos E não tenham fato gerador/base de cálculo próprios dos discriminados na CF.',
    difficulty: 'dificil'
  },
  {
    id: 'dt-015',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Em caso de guerra externa ou sua iminência, a União pode instituir impostos extraordinários, que não precisam observar o princípio da anterioridade.',
    correctAnswer: true,
    explanation: 'CERTO. Os impostos extraordinários de guerra (art. 154, II, CF/88) podem ser cobrados imediatamente, constituindo exceção expressa às anterioridades anual e nonagesimal.',
    difficulty: 'medio'
  },

  // ========================================
  // IMUNIDADES TRIBUTÁRIAS
  // ========================================
  {
    id: 'dt-016',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A imunidade recíproca impede que a União, Estados, DF e Municípios instituam impostos sobre patrimônio, renda ou serviços uns dos outros.',
    correctAnswer: true,
    explanation: 'CERTO. A imunidade recíproca (art. 150, VI, "a", CF/88) protege os entes federativos da tributação mútua por impostos, preservando o pacto federativo.',
    difficulty: 'facil'
  },
  {
    id: 'dt-017',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Os templos de qualquer culto são imunes a todos os tributos, inclusive taxas e contribuições.',
    correctAnswer: false,
    explanation: 'ERRADO. A imunidade religiosa (art. 150, VI, "b") refere-se apenas a IMPOSTOS sobre patrimônio, renda e serviços relacionados às finalidades essenciais. Taxas podem ser cobradas.',
    difficulty: 'medio'
  },
  {
    id: 'dt-018',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Os livros, jornais e periódicos, bem como o papel destinado à sua impressão, são imunes a impostos.',
    correctAnswer: true,
    explanation: 'CERTO. A imunidade cultural (art. 150, VI, "d") abrange livros, jornais, periódicos e o papel destinado à sua impressão, estimulando a educação e informação.',
    difficulty: 'facil'
  },
  {
    id: 'dt-019',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'As entidades sindicais de trabalhadores são imunes a impostos sobre patrimônio, renda e serviços, desde que não tenham fins lucrativos.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 150, VI, "c" da CF/88 garante imunidade a sindicatos de trabalhadores, instituições educacionais e assistenciais sem fins lucrativos, observados requisitos legais.',
    difficulty: 'facil'
  },
  {
    id: 'dt-020',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A imunidade tributária pode ser restringida por lei ordinária, desde que haja razoabilidade na restrição.',
    correctAnswer: false,
    explanation: 'ERRADO. Imunidade é prevista na Constituição e não pode ser restringida por lei infraconstitucional. Apenas a CF pode limitar seu alcance. É cláusula pétrea do pacto federativo.',
    difficulty: 'medio'
  },

  // ========================================
  // OBRIGAÇÃO TRIBUTÁRIA
  // ========================================
  {
    id: 'dt-021',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O fato gerador da obrigação tributária principal é a situação definida em lei como necessária e suficiente à sua ocorrência.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 114 do CTN define o fato gerador da obrigação principal como a situação prevista em lei que, quando ocorrida, faz nascer a obrigação de pagar tributo.',
    difficulty: 'facil'
  },
  {
    id: 'dt-022',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A obrigação tributária acessória tem por objeto prestações pecuniárias acessórias à obrigação principal.',
    correctAnswer: false,
    explanation: 'ERRADO. A obrigação acessória tem objeto de fazer, não fazer ou tolerar (deveres instrumentais), como emitir nota fiscal. Não envolve prestação pecuniária.',
    difficulty: 'medio'
  },
  {
    id: 'dt-023',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O descumprimento de obrigação tributária acessória converte-se em obrigação principal relativamente à penalidade pecuniária.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 113, §3º do CTN estabelece que a inobservância da obrigação acessória gera obrigação principal (multa), convertendo dever instrumental em prestação pecuniária.',
    difficulty: 'medio'
  },
  {
    id: 'dt-024',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A capacidade tributária passiva depende da capacidade civil da pessoa natural.',
    correctAnswer: false,
    explanation: 'ERRADO. O art. 126, I do CTN dispõe que a capacidade tributária passiva independe da capacidade civil. Até incapazes podem ser contribuintes.',
    difficulty: 'medio'
  },
  {
    id: 'dt-025',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Salvo disposição de lei em contrário, considera-se ocorrido o fato gerador e existentes seus efeitos desde o momento em que se verifiquem as circunstâncias materiais necessárias.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 116 do CTN estabelece o momento da ocorrência do fato gerador como aquele em que se verificam os elementos materiais, salvo disposição específica em lei.',
    difficulty: 'medio'
  },

  // ========================================
  // RESPONSABILIDADE TRIBUTÁRIA
  // ========================================
  {
    id: 'dt-026',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Na responsabilidade por substituição tributária, o substituto fica obrigado ao pagamento do imposto juntamente com o contribuinte substituído.',
    correctAnswer: false,
    explanation: 'ERRADO. Na substituição, o substituto assume sozinho a obrigação, EXCLUINDO a responsabilidade do substituído. Não há solidariedade, mas substituição completa.',
    difficulty: 'dificil'
  },
  {
    id: 'dt-027',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Os pais são responsáveis pelos tributos devidos por seus filhos menores.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 134, I do CTN estabelece responsabilidade tributária dos pais pelos tributos devidos pelos filhos menores sob seu poder familiar.',
    difficulty: 'facil'
  },
  {
    id: 'dt-028',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Na responsabilidade solidária, o pagamento efetuado por um dos obrigados aproveita aos demais.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 125, I do CTN determina que o pagamento feito por um solidário aproveita aos demais, extinguindo proporcionalmente a obrigação tributária.',
    difficulty: 'facil'
  },
  {
    id: 'dt-029',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A responsabilidade por infrações independe da intenção do agente ou do responsável e da efetividade, natureza e extensão dos efeitos do ato.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 136 do CTN estabelece responsabilidade objetiva por infrações, independentemente de dolo, culpa ou resultado (salvo disposição legal expressa em contrário).',
    difficulty: 'medio'
  },
  {
    id: 'dt-030',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'Os diretores de pessoas jurídicas de direito privado são pessoalmente responsáveis pelos créditos tributários resultantes de atos praticados com excesso de poderes.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 135, III do CTN responsabiliza pessoalmente os diretores que agirem com excesso de poderes, infração à lei ou estatuto.',
    difficulty: 'medio'
  },

  // ========================================
  // CRÉDITO TRIBUTÁRIO
  // ========================================
  {
    id: 'dt-031',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O lançamento tributário tem natureza constitutiva, criando o crédito tributário.',
    correctAnswer: false,
    explanation: 'ERRADO. O lançamento tem natureza DECLARATÓRIA, não constitutiva. Ele apenas formaliza crédito que já nasceu com o fato gerador. A obrigação preexiste ao lançamento.',
    difficulty: 'medio'
  },
  {
    id: 'dt-032',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O lançamento por homologação ocorre quando o contribuinte declara e paga o tributo, cabendo ao Fisco homologar a atividade.',
    correctAnswer: true,
    explanation: 'CERTO. No lançamento por homologação (art. 150 CTN), o contribuinte antecipa o pagamento, e o Fisco homologa expressa ou tacitamente. Usado no IR, ICMS, IPI.',
    difficulty: 'facil'
  },
  {
    id: 'dt-033',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O lançamento regularmente notificado ao sujeito passivo pode ser alterado em virtude de impugnação do sujeito passivo.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 145, III do CTN permite alteração do lançamento em razão de impugnação, recurso ou iniciativa de ofício da autoridade administrativa.',
    difficulty: 'facil'
  },
  {
    id: 'dt-034',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A suspensão da exigibilidade do crédito tributário impede a fluência do prazo prescricional.',
    correctAnswer: false,
    explanation: 'ERRADO. A suspensão da exigibilidade NÃO impede a fluência da prescrição ou decadência. Apenas impede atos de cobrança. Os prazos continuam correndo normalmente.',
    difficulty: 'dificil'
  },
  {
    id: 'dt-035',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O parcelamento do crédito tributário suspende sua exigibilidade e impede a inscrição em dívida ativa enquanto mantido o acordo.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 151, VI do CTN estabelece que o parcelamento suspende a exigibilidade do crédito, impedindo atos de cobrança enquanto o contribuinte cumprir as condições.',
    difficulty: 'facil'
  },

  // ========================================
  // EXTINÇÃO DO CRÉDITO TRIBUTÁRIO
  // ========================================
  {
    id: 'dt-036',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A dação em pagamento de bens imóveis é modalidade de extinção do crédito tributário prevista no CTN.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 156, XI do CTN (incluído pela LC 104/2001) prevê a dação em pagamento de bens imóveis como forma de extinção do crédito tributário.',
    difficulty: 'medio'
  },
  {
    id: 'dt-037',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A compensação tributária pode ser feita com quaisquer créditos do contribuinte perante a Fazenda Pública, independentemente de lei autorizativa.',
    correctAnswer: false,
    explanation: 'ERRADO. O art. 170 do CTN exige lei específica autorizando a compensação, que deve observar regras e limites legais. Não é automática.',
    difficulty: 'medio'
  },
  {
    id: 'dt-038',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A remissão é o perdão da dívida tributária e pode ser concedida por lei em caráter geral ou individual.',
    correctAnswer: true,
    explanation: 'CERTO. A remissão (art. 156, IV do CTN) é modalidade de extinção que consiste no perdão legal da dívida, podendo ser geral ou individual.',
    difficulty: 'facil'
  },
  {
    id: 'dt-039',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O prazo decadencial para o Fisco constituir o crédito tributário é de 5 anos contados do fato gerador.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 173, I do CTN estabelece prazo decadencial de 5 anos contados do primeiro dia do exercício seguinte ao da ocorrência do fato gerador.',
    difficulty: 'facil'
  },
  {
    id: 'dt-040',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A prescrição da ação de cobrança judicial do crédito tributário ocorre em 5 anos, contados da constituição definitiva do crédito.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 174 do CTN estabelece prazo prescricional de 5 anos para a Fazenda Pública ajuizar execução fiscal, contados da constituição definitiva (após PAF).',
    difficulty: 'facil'
  },

  // ========================================
  // EXCLUSÃO DO CRÉDITO TRIBUTÁRIO
  // ========================================
  {
    id: 'dt-041',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A isenção é modalidade de exclusão do crédito tributário e dispensa o cumprimento de obrigações acessórias.',
    correctAnswer: false,
    explanation: 'ERRADO. Embora a isenção exclua o crédito (art. 175, I CTN), ela NÃO dispensa obrigações acessórias, salvo disposição expressa (art. 175, parágrafo único).',
    difficulty: 'medio'
  },
  {
    id: 'dt-042',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A anistia é o perdão da penalidade pecuniária e abrange infrações cometidas anteriormente à vigência da lei que a concede.',
    correctAnswer: true,
    explanation: 'CERTO. A anistia (art. 180 CTN) é o perdão legal de infrações cometidas ANTES de sua concessão, excluindo apenas penalidades, não o tributo principal.',
    difficulty: 'medio'
  },
  {
    id: 'dt-043',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A isenção pode ser revogada a qualquer tempo por ato do Poder Executivo.',
    correctAnswer: false,
    explanation: 'ERRADO. A isenção somente pode ser concedida ou revogada por LEI (princípio da legalidade). O Executivo não tem competência para revogar isenção tributária.',
    difficulty: 'medio'
  },
  {
    id: 'dt-044',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A isenção, quando concedida por prazo certo e em função de determinadas condições, não pode ser revogada antes do prazo.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 178 do CTN protege a isenção onerosa (por prazo e condições), gerando direito adquirido do beneficiário. A revogação antecipada viola a segurança jurídica.',
    difficulty: 'medio'
  },
  {
    id: 'dt-045',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A anistia pode ser concedida em caráter geral ou individual, limitando-se às infrações da legislação tributária.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 181 do CTN permite anistia geral ou individual, aplicável apenas a infrações tributárias (excluindo crimes contra ordem tributária).',
    difficulty: 'facil'
  },

  // ========================================
  // GARANTIAS E PRIVILÉGIOS DO CRÉDITO
  // ========================================
  {
    id: 'dt-046',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O crédito tributário prefere a qualquer outro crédito, exceto os trabalhistas e os decorrentes de acidente de trabalho.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 186 do CTN estabelece a preferência do crédito tributário, ressalvados apenas os créditos trabalhistas e acidentários.',
    difficulty: 'facil'
  },
  {
    id: 'dt-047',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A presunção de fraude à execução fiscal independe do registro da penhora do bem alienado.',
    correctAnswer: true,
    explanation: 'CERTO. Na execução fiscal, a Lei 6.830/80 presume fraude na alienação após a citação, independentemente de registro. Difere das execuções comuns.',
    difficulty: 'dificil'
  },
  {
    id: 'dt-048',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A certidão negativa de débitos tributários será sempre expedida quando não houver pendências tributárias.',
    correctAnswer: false,
    explanation: 'ERRADO. Havendo débitos suspensos ou garantidos, expede-se certidão POSITIVA COM EFEITOS DE NEGATIVA (art. 206 CTN), não negativa pura.',
    difficulty: 'medio'
  },
  {
    id: 'dt-049',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A inscrição em dívida ativa é ato de controle administrativo da legalidade que suspende a exigibilidade do crédito tributário.',
    correctAnswer: false,
    explanation: 'ERRADO. A inscrição em dívida ativa NÃO suspende a exigibilidade. Pelo contrário, é pressuposto para ajuizar execução fiscal. É ato de formalização do crédito.',
    difficulty: 'medio'
  },
  {
    id: 'dt-050',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A Certidão de Dívida Ativa (CDA) goza de presunção de certeza e liquidez e tem efeito de prova pré-constituída.',
    correctAnswer: true,
    explanation: 'CERTO. O art. 204 do CTN e a Lei 6.830/80 conferem à CDA presunção relativa de certeza e liquidez, servindo como título executivo extrajudicial.',
    difficulty: 'facil'
  }
];
