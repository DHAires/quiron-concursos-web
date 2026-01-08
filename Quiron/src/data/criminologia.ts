// ======================================
// ÁREA POLICIAL - CRIMINOLOGIA
// ======================================

import { GameQuestion } from './gameQuestions';

export const criminologiaQuestions: GameQuestion[] = [
  // CONCEITOS FUNDAMENTAIS
  {
    id: 'crimi_001',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A Criminologia é uma ciência empírica e interdisciplinar.',
    correctAnswer: true,
    explanation: 'CERTO. Estuda o crime, criminoso, vítima e controle social com base em dados empíricos.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_002',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O objeto da Criminologia inclui o crime, o criminoso, a vítima e o controle social.',
    correctAnswer: true,
    explanation: 'CERTO. Quádruplo objeto da Criminologia moderna.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_003',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A Criminologia é ciência causal-explicativa, não normativa.',
    correctAnswer: true,
    explanation: 'CERTO. Busca explicar causas do crime, diferente do Direito Penal (normativo).',
    difficulty: 'medio'
  },

  // ESCOLAS CRIMINOLÓGICAS
  {
    id: 'crimi_004',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A Escola Clássica focava no livre-arbítrio do criminoso.',
    correctAnswer: true,
    explanation: 'CERTO. Beccaria e Carrara - homem racional escolhe delinquir.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_005',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Lombroso defendia a teoria do criminoso nato.',
    correctAnswer: true,
    explanation: 'CERTO. Escola Positiva - criminoso tem características biológicas determinantes.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_006',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A teoria do criminoso nato de Lombroso é aceita atualmente.',
    correctAnswer: false,
    explanation: 'ERRADO. Superada pelo determinismo biológico simplista e estigmatizante.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_007',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Ferri estudou os fatores sociais da criminalidade.',
    correctAnswer: true,
    explanation: 'CERTO. Escola Positiva - fatores antropológicos, físicos e sociais.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_008',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Garofalo criou o conceito de "delito natural".',
    correctAnswer: true,
    explanation: 'CERTO. Crimes que violam sentimentos altruísticos fundamentais.',
    difficulty: 'medio'
  },

  // TEORIAS SOCIOLÓGICAS
  {
    id: 'crimi_009',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A teoria da anomia de Durkheim relaciona crime à falta de normas sociais.',
    correctAnswer: true,
    explanation: 'CERTO. Anomia = ausência/fragilidade de valores sociais.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_010',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Para Durkheim, o crime é fenômeno normal em toda sociedade.',
    correctAnswer: true,
    explanation: 'CERTO. Crime é normal, patológico seria o excesso ou ausência total.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_011',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Merton adaptou a teoria da anomia ao contexto americano.',
    correctAnswer: true,
    explanation: 'CERTO. Anomia = conflito entre metas culturais e meios legítimos.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_012',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Os cinco modos de adaptação de Merton incluem conformidade, inovação, ritualismo, evasão e rebelião.',
    correctAnswer: true,
    explanation: 'CERTO. Formas de resposta à pressão anômica.',
    difficulty: 'medio'
  },

  // TEORIA DA ASSOCIAÇÃO DIFERENCIAL
  {
    id: 'crimi_013',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Sutherland criou a teoria da associação diferencial.',
    correctAnswer: true,
    explanation: 'CERTO. Comportamento criminoso é aprendido na interação social.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_014',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Segundo Sutherland, o crime é aprendido em grupos de convívio.',
    correctAnswer: true,
    explanation: 'CERTO. Aprendizado por associação com definições favoráveis ao crime.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_015',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Sutherland cunhou o termo "crime do colarinho branco".',
    correctAnswer: true,
    explanation: 'CERTO. Crimes econômicos praticados por pessoas de alto status.',
    difficulty: 'facil'
  },

  // TEORIAS SUBCULTURAIS
  {
    id: 'crimi_016',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A teoria das subculturas delinquentes de Cohen explica crime de jovens de classe baixa.',
    correctAnswer: true,
    explanation: 'CERTO. Subculturas desenvolvem valores próprios por frustração de status.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_017',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A subcultura delinquente possui características de malícia, negativismo e utilitarismo.',
    correctAnswer: false,
    explanation: 'ERRADO. Cohen: malícia, negativismo e NÃO-utilitarismo (vandalismo gratuito).',
    difficulty: 'dificil'
  },

  // TEORIA DA ROTULAÇÃO (LABELLING APPROACH)
  {
    id: 'crimi_018',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O labelling approach estuda os processos de criminalização.',
    correctAnswer: true,
    explanation: 'CERTO. Teoria do etiquetamento - foco em quem define o crime.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_019',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Segundo o labelling, o sistema penal é seletivo.',
    correctAnswer: true,
    explanation: 'CERTO. Criminalização recai sobre grupos vulneráveis (pobres, negros).',
    difficulty: 'facil'
  },
  {
    id: 'crimi_020',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O labelling distingue desvio primário de desvio secundário.',
    correctAnswer: true,
    explanation: 'CERTO. Primário = ato isolado; secundário = carreira criminal após estigma.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_021',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A profecia autorrealizadora ocorre quando o rótulo molda a identidade.',
    correctAnswer: true,
    explanation: 'CERTO. Estigma leva o indivíduo a assumir papel de criminoso.',
    difficulty: 'medio'
  },

  // CRIMINOLOGIA CRÍTICA
  {
    id: 'crimi_022',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A Criminologia Crítica enfatiza a luta de classes na criminalização.',
    correctAnswer: true,
    explanation: 'CERTO. Crime é construção social para controle de classes subalternas.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_023',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Para a Criminologia Crítica, o Direito Penal protege interesses das classes dominantes.',
    correctAnswer: true,
    explanation: 'CERTO. Sistema penal como instrumento de dominação de classe.',
    difficulty: 'facil'
  },

  // TEORIAS DO CONTROLE SOCIAL
  {
    id: 'crimi_024',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Hirschi criou a teoria dos vínculos sociais.',
    correctAnswer: true,
    explanation: 'CERTO. Social bond theory - vínculos impedem delinquência.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_025',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Os quatro elementos dos vínculos sociais são apego, compromisso, envolvimento e crença.',
    correctAnswer: true,
    explanation: 'CERTO. Attachment, commitment, involvement, belief.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_026',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A teoria do autocontrole afirma que baixo autocontrole causa crime.',
    correctAnswer: true,
    explanation: 'CERTO. Gottfredson e Hirschi - autocontrole formado na infância.',
    difficulty: 'facil'
  },

  // VITIMOLOGIA
  {
    id: 'crimi_027',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A Vitimologia estuda o papel da vítima no crime.',
    correctAnswer: true,
    explanation: 'CERTO. Estudo científico da vítima e vitimização.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_028',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Mendelsohn é considerado o pai da Vitimologia.',
    correctAnswer: true,
    explanation: 'CERTO. Criou classificação de vítimas por grau de culpabilidade.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_029',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A vitimização secundária é causada pelo sistema de justiça.',
    correctAnswer: true,
    explanation: 'CERTO. Revitimização por instituições (polícia, tribunal).',
    difficulty: 'facil'
  },
  {
    id: 'crimi_030',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A cifra oculta representa crimes não registrados oficialmente.',
    correctAnswer: true,
    explanation: 'CERTO. Dark figure - diferença entre crime real e registrado.',
    difficulty: 'facil'
  },

  // PREVENÇÃO CRIMINAL
  {
    id: 'crimi_031',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A prevenção primária atua sobre as causas do crime.',
    correctAnswer: true,
    explanation: 'CERTO. Políticas sociais, educação, emprego - antes do crime.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_032',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A prevenção secundária foca em grupos de risco.',
    correctAnswer: true,
    explanation: 'CERTO. Intervenção precoce em populações vulneráveis.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_033',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A prevenção terciária visa evitar a reincidência.',
    correctAnswer: true,
    explanation: 'CERTO. Ressocialização, penas alternativas - após o crime.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_034',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A teoria das janelas quebradas defende tolerância zero.',
    correctAnswer: true,
    explanation: 'CERTO. Broken windows - reprimir pequenos delitos previne crimes graves.',
    difficulty: 'medio'
  },

  // TIPOLOGIAS CRIMINAIS
  {
    id: 'crimi_035',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O criminoso habitual pratica crime como modo de vida.',
    correctAnswer: true,
    explanation: 'CERTO. Carreira criminal, profissionalização do delito.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_036',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O criminoso ocasional pratica crime por oportunidade.',
    correctAnswer: true,
    explanation: 'CERTO. Sem habitualidade, circunstâncias específicas.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_037',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O psicopata tem ausência de empatia e remorso.',
    correctAnswer: true,
    explanation: 'CERTO. Transtorno de personalidade antissocial.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_038',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Serial killer é quem mata múltiplas vítimas em eventos separados.',
    correctAnswer: true,
    explanation: 'CERTO. Homicídios em série com intervalo de tempo.',
    difficulty: 'facil'
  },

  // PENA E RESSOCIALIZAÇÃO
  {
    id: 'crimi_039',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A prisionalização causa efeitos negativos no condenado.',
    correctAnswer: true,
    explanation: 'CERTO. Subcultura carcerária, dessocialização, estigma.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_040',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A pena tem função retributiva, preventiva e ressocializadora.',
    correctAnswer: true,
    explanation: 'CERTO. Teoria mista/eclética da pena.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_041',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O abolicionismo penal defende extinção do sistema punitivo.',
    correctAnswer: true,
    explanation: 'CERTO. Abolir prisões e buscar soluções alternativas.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_042',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A justiça restaurativa foca na reparação do dano.',
    correctAnswer: true,
    explanation: 'CERTO. Diálogo entre vítima, ofensor e comunidade.',
    difficulty: 'facil'
  },

  // CRIMINOLOGIA MODERNA
  {
    id: 'crimi_043',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A teoria das atividades rotineiras explica crime por convergência de fatores.',
    correctAnswer: true,
    explanation: 'CERTO. Motivação + alvo + ausência de vigilância = crime.',
    difficulty: 'medio'
  },
  {
    id: 'crimi_044',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A criminologia ambiental estuda influência do espaço urbano.',
    correctAnswer: true,
    explanation: 'CERTO. Arquitetura, iluminação, vigilância natural.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_045',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A teoria da escolha racional vê o criminoso como ser que calcula custos/benefícios.',
    correctAnswer: true,
    explanation: 'CERTO. Decisão racional baseada em análise de risco.',
    difficulty: 'facil'
  },

  // CRIMES ESPECÍFICOS
  {
    id: 'crimi_046',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O feminicídio possui motivação de gênero.',
    correctAnswer: true,
    explanation: 'CERTO. Homicídio de mulher por razões de condição do sexo feminino.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_047',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O stalking é perseguição obsessiva que causa medo na vítima.',
    correctAnswer: true,
    explanation: 'CERTO. Perseguição sistemática e invasão de privacidade.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_048',
    area: 'policial',
    subject: 'Criminologia',
    question: 'O bullying é violência sistemática e repetitiva.',
    correctAnswer: true,
    explanation: 'CERTO. Agressões físicas/psicológicas reiteradas em contexto escolar.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_049',
    area: 'policial',
    subject: 'Criminologia',
    question: 'Crimes cibernéticos têm aumentado com a digitalização.',
    correctAnswer: true,
    explanation: 'CERTO. Fraudes virtuais, invasões, pornografia infantil online.',
    difficulty: 'facil'
  },
  {
    id: 'crimi_050',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A reincidência é maior em sistemas prisionais superlotados.',
    correctAnswer: true,
    explanation: 'CERTO. Superlotação compromete ressocialização e aumenta reincidência.',
    difficulty: 'facil'
  }
];
