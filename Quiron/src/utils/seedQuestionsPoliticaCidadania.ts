import { projectId, publicAnonKey } from './supabase/info';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  topic: string;
  examInfo?: string;
}

const SUBJECT_SLUG = 'politica-e-cidadania';
const SUBJECT_ID = '27';

// ============================================================================
// TEMA 1: SISTEMA POLÍTICO BRASILEIRO (5 questões)
// ============================================================================

const sistemaPoliticoBrasileiroQuestions: Question[] = [
  {
    question: 'O Brasil adota como forma de governo e sistema de governo, respectivamente:',
    options: [
      'Monarquia e Parlamentarismo',
      'República e Presidencialismo',
      'República e Parlamentarismo',
      'Monarquia e Presidencialismo'
    ],
    correctAnswer: 1,
    explanation: 'O Brasil é uma REPÚBLICA (chefe de Estado eleito temporariamente, não hereditário) PRESIDENCIALISTA (presidente acumula funções de chefe de Estado e chefe de Governo). Forma de Estado: Federação. Regime político: Democrático. Definido pela Constituição de 1988 (Art. 1º). Diferente do parlamentarismo, onde há separação entre chefe de Estado e chefe de Governo.',
    difficulty: 'easy',
    topic: 'Sistema Político Brasileiro',
    examInfo: 'CESPE - Questão clássica sobre forma e sistema de governo'
  },
  {
    question: 'Segundo a Constituição Federal de 1988, são Poderes da União, independentes e harmônicos entre si:',
    options: [
      'Executivo e Legislativo apenas',
      'Executivo, Legislativo e Judiciário',
      'Executivo, Legislativo, Judiciário e Moderador',
      'Executivo Federal, Estadual e Municipal'
    ],
    correctAnswer: 1,
    explanation: 'CF/88, Art. 2º: "São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário." Baseado na teoria da separação dos poderes de Montesquieu. EXECUTIVO (administra, executa leis), LEGISLATIVO (cria leis, fiscaliza), JUDICIÁRIO (julga, interpreta leis). Sistema de freios e contrapesos (checks and balances). O Poder Moderador existiu no Brasil Império.',
    difficulty: 'easy',
    topic: 'Sistema Político Brasileiro',
    examInfo: 'FCC - Tripartição dos poderes'
  },
  {
    question: 'O Congresso Nacional brasileiro é composto por:',
    options: [
      'Câmara dos Deputados apenas',
      'Senado Federal apenas',
      'Câmara dos Deputados e Senado Federal (sistema bicameral)',
      'Câmara dos Vereadores e Assembleia Legislativa'
    ],
    correctAnswer: 2,
    explanation: 'O Congresso Nacional é BICAMERAL (duas casas): CÂMARA DOS DEPUTADOS (513 deputados federais, mandato 4 anos, representação proporcional à população) e SENADO FEDERAL (81 senadores, 3 por estado/DF, mandato 8 anos, representação igualitária). CF/88, Art. 44. Vereadores são municipais, deputados estaduais são das Assembleias Legislativas.',
    difficulty: 'medium',
    topic: 'Sistema Político Brasileiro',
    examInfo: 'FGV - Composição do Legislativo Federal'
  },
  {
    question: 'No sistema federativo brasileiro, a autonomia dos entes federados (União, Estados, DF e Municípios) caracteriza-se por:',
    options: [
      'Auto-organização, autogoverno e autoadministração',
      'Subordinação hierárquica à União',
      'Dependência administrativa total',
      'Ausência de competências próprias'
    ],
    correctAnswer: 0,
    explanation: 'A FEDERAÇÃO brasileira (CF/88, Art. 18) é indissolúvel e garante AUTONOMIA aos entes: AUTO-ORGANIZAÇÃO (constituições estaduais, leis orgânicas municipais), AUTOGOVERNO (eleições próprias de governantes), AUTOADMINISTRAÇÃO (competências legislativas e administrativas próprias). Não há hierarquia entre União, Estados, DF e Municípios, mas repartição de competências.',
    difficulty: 'hard',
    topic: 'Sistema Político Brasileiro',
    examInfo: 'CESPE - Federalismo e autonomia'
  },
  {
    question: 'O princípio constitucional que garante que nenhum dos três Poderes pode invadir a competência típica do outro é chamado de:',
    options: [
      'Federalismo',
      'Separação dos Poderes',
      'República',
      'Democracia'
    ],
    correctAnswer: 1,
    explanation: 'A SEPARAÇÃO (ou TRIPARTIÇÃO) DOS PODERES é princípio fundamental (CF/88, Art. 2º) baseado em Montesquieu ("O Espírito das Leis", 1748). Cada Poder tem funções TÍPICAS (principais) e ATÍPICAS (secundárias). Executivo administra, Legislativo legisla, Judiciário julga. Sistema de freios e contrapesos evita concentração de poder e tirania. Cláusula pétrea (Art. 60, §4º, III).',
    difficulty: 'medium',
    topic: 'Sistema Político Brasileiro',
    examInfo: 'VUNESP - Princípios constitucionais'
  }
];

// ============================================================================
// TEMA 2: PARTIDOS POLÍTICOS (5 questões)
// ============================================================================

const partidosPoliticosQuestions: Question[] = [
  {
    question: 'Segundo a Constituição Federal de 1988, os partidos políticos têm:',
    options: [
      'Caráter obrigatório de filiação',
      'Autonomia para definir estrutura interna, organização e funcionamento',
      'Subordinação ao Poder Executivo',
      'Proibição de receber recursos públicos'
    ],
    correctAnswer: 1,
    explanation: 'CF/88, Art. 17: "É livre a criação, fusão, incorporação e extinção de partidos políticos, resguardados a soberania nacional, o regime democrático, o pluripartidarismo, os direitos fundamentais da pessoa humana". Partidos têm AUTONOMIA para definir estrutura, organização, funcionamento (caráter nacional, proibição de militarização e paramilitar, prestação de contas à Justiça Eleitoral).',
    difficulty: 'medium',
    topic: 'Partidos Políticos',
    examInfo: 'CESPE - Regime jurídico dos partidos'
  },
  {
    question: 'O sistema partidário brasileiro atual caracteriza-se por:',
    options: [
      'Bipartidarismo (dois partidos)',
      'Partido único',
      'Pluripartidarismo (múltiplos partidos)',
      'Ausência de partidos políticos'
    ],
    correctAnswer: 2,
    explanation: 'O Brasil adota o PLURIPARTIDARISMO: existência de múltiplos partidos políticos (mais de 30 partidos com registro no TSE). CF/88, Art. 17 garante livre criação. Contrasta com: BIPARTIDARISMO (EUA: Democratas x Republicanos; Brasil 1966-1979: Arena x MDB durante ditadura) e PARTIDO ÚNICO (regimes totalitários). Reflete diversidade ideológica e representação democrática.',
    difficulty: 'easy',
    topic: 'Partidos Políticos',
    examInfo: 'FCC - Sistemas partidários'
  },
  {
    question: 'As coligações partidárias nas eleições brasileiras foram:',
    options: [
      'Proibidas desde a Constituição de 1988',
      'Permitidas em todas as eleições sem restrições',
      'Extintas para eleições proporcionais (deputados e vereadores) desde 2020',
      'Obrigatórias para todos os partidos'
    ],
    correctAnswer: 2,
    explanation: 'A Emenda Constitucional 97/2017 e Lei 13.488/2017 PROIBIRAM coligações em eleições PROPORCIONAIS (deputados federais, estaduais, distritais e vereadores) a partir de 2020. Mantidas em eleições MAJORITÁRIAS (presidente, governador, senador, prefeito). Objetivo: fortalecer partidos, reduzir fragmentação, acabar com legendas de aluguel. Cláusula de barreira/desempenho também implementada.',
    difficulty: 'hard',
    topic: 'Partidos Políticos',
    examInfo: 'FGV - Reforma política 2017'
  },
  {
    question: 'O financiamento das campanhas eleitorais no Brasil é feito através de:',
    options: [
      'Apenas recursos privados de empresas',
      'Fundo Partidário e Fundo Especial de Financiamento de Campanha (recursos públicos)',
      'Doações internacionais ilimitadas',
      'Autofinanciamento exclusivo dos candidatos'
    ],
    correctAnswer: 1,
    explanation: 'Desde 2015 (ADI 4650/STF), EMPRESAS estão PROIBIDAS de doar para campanhas. Financiamento atual: FUNDO PARTIDÁRIO (recursos públicos anuais para manutenção dos partidos), FUNDO ESPECIAL DE FINANCIAMENTO DE CAMPANHA/FEFC (recursos públicos para eleições, criado 2017), doações de pessoas físicas (limite de 10% da renda bruta anual). Maior transparência e controle pela Justiça Eleitoral.',
    difficulty: 'hard',
    topic: 'Partidos Políticos',
    examInfo: 'CESPE - Financiamento eleitoral'
  },
  {
    question: 'A fidelidade partidária no Brasil:',
    options: [
      'Não existe, parlamentares podem trocar de partido livremente',
      'É regra, podendo o parlamentar perder o mandato por troca injustificada de partido',
      'É obrigatória apenas para partidos de esquerda',
      'Só vale durante o período eleitoral'
    ],
    correctAnswer: 1,
    explanation: 'O STF (MS 26.602, 26.603, 26.604/2007) estabeleceu que mandatos pertencem aos PARTIDOS, não aos candidatos eleitos. Troca INJUSTIFICADA de partido = perda do mandato (justa causa: mudança ideológica, perseguição, criação de novo partido). TSE julga casos. Exceções: janela de troca partidária (30 dias após eleições), mudança no 1º ano do 1º mandato de vereador. Fortalece partidos.',
    difficulty: 'medium',
    topic: 'Partidos Políticos',
    examInfo: 'VUNESP - Jurisprudência STF sobre fidelidade'
  }
];

// ============================================================================
// TEMA 3: ELEIÇÕES (5 questões)
// ============================================================================

const eleicoesQuestions: Question[] = [
  {
    question: 'O sistema eleitoral brasileiro para eleição de Presidente da República é:',
    options: [
      'Voto distrital puro',
      'Majoritário em dois turnos',
      'Proporcional com lista aberta',
      'Voto censitário'
    ],
    correctAnswer: 1,
    explanation: 'Presidente, Governadores e Prefeitos (municípios > 200 mil eleitores) são eleitos pelo SISTEMA MAJORITÁRIO EM DOIS TURNOS: 1º turno precisa maioria absoluta (50%+1 dos votos válidos); caso contrário, 2º turno com os dois mais votados (maioria simples). CF/88, Art. 77. Senadores: maioria simples em turno único. Diferente do proporcional (deputados, vereadores).',
    difficulty: 'easy',
    topic: 'Eleições',
    examInfo: 'FCC - Sistemas eleitorais'
  },
  {
    question: 'O voto no Brasil possui as seguintes características constitucionais:',
    options: [
      'Direto, secreto, universal e periódico',
      'Indireto, público e censitário',
      'Facultativo para todos os cidadãos',
      'Restrito a proprietários de terras'
    ],
    correctAnswer: 0,
    explanation: 'CF/88, Art. 14: Sufrágio UNIVERSAL (todos os cidadãos podem votar, sem restrições de renda, sexo, raça), voto DIRETO (eleitor escolhe diretamente representantes), SECRETO (sigilo, liberdade de escolha), valor IGUAL (um cidadão = um voto), PERIÓDICO (eleições regulares: 4 anos presidente/governador/prefeito; 8 anos senador). Cláusula pétrea (Art. 60, §4º, II). Voto censitário existiu no Brasil Império.',
    difficulty: 'easy',
    topic: 'Eleições',
    examInfo: 'CESPE - Características do voto'
  },
  {
    question: 'São condições de elegibilidade (requisitos para ser candidato) previstas na Constituição Federal:',
    options: [
      'Apenas ter dinheiro para campanha',
      'Nacionalidade brasileira, pleno exercício dos direitos políticos, alistamento eleitoral, domicílio eleitoral, filiação partidária e idade mínima',
      'Ser formado em curso superior',
      'Pertencer a família tradicional'
    ],
    correctAnswer: 1,
    explanation: 'CF/88, Art. 14, §3º - CONDIÇÕES DE ELEGIBILIDADE: 1) Nacionalidade brasileira (natos ou naturalizados, exceto cargos privativos de natos), 2) Pleno exercício dos direitos políticos, 3) Alistamento eleitoral, 4) Domicílio eleitoral na circunscrição, 5) Filiação partidária (mínimo 6 meses antes da eleição), 6) Idade mínima (vereador 18, prefeito/deputado 21, governador/senador 30, presidente 35).',
    difficulty: 'medium',
    topic: 'Eleições',
    examInfo: 'FGV - Direitos políticos'
  },
  {
    question: 'A Lei da Ficha Limpa (Lei Complementar 135/2010) estabelece que:',
    options: [
      'Todos os cidadãos podem ser candidatos sem restrição',
      'Candidatos condenados por órgão colegiado ficam inelegíveis por 8 anos',
      'Apenas condenados em última instância ficam inelegíveis',
      'Não há inelegibilidade por condenação criminal'
    ],
    correctAnswer: 1,
    explanation: 'Lei da Ficha Limpa (LC 135/2010) tornou INELEGÍVEL por 8 ANOS quem: 1) For condenado por ÓRGÃO COLEGIADO (tribunal, mesmo sem trânsito em julgado) por crimes diversos (contra administração pública, patrimônio público, tráfico, lavagem de dinheiro, etc.), 2) Renunciar para evitar cassação, 3) For cassado, 4) Abusar do poder. Moralidade administrativa. STF: constitucional (RE 929.670).',
    difficulty: 'hard',
    topic: 'Eleições',
    examInfo: 'CESPE - Lei Complementar 135/2010'
  },
  {
    question: 'O voto é OBRIGATÓRIO no Brasil para:',
    options: [
      'Todos os cidadãos maiores de 16 anos',
      'Maiores de 18 anos e menores de 70 anos',
      'Apenas analfabetos',
      'Não há obrigatoriedade de voto no Brasil'
    ],
    correctAnswer: 1,
    explanation: 'CF/88, Art. 14: VOTO OBRIGATÓRIO para maiores de 18 anos e menores de 70 anos. VOTO FACULTATIVO para: 1) Analfabetos, 2) Maiores de 16 e menores de 18 anos, 3) Maiores de 70 anos. Ausência injustificada: multa, obrigação de justificar, restrições (emitir passaporte, tomar posse em cargo público). Brasil e cerca de 20 países adotam voto obrigatório.',
    difficulty: 'easy',
    topic: 'Eleições',
    examInfo: 'VUNESP - Alistamento e voto'
  }
];

// ============================================================================
// TEMA 4: POLÍTICAS PÚBLICAS (5 questões)
// ============================================================================

const politicasPublicasQuestions: Question[] = [
  {
    question: 'Políticas públicas podem ser definidas como:',
    options: [
      'Decisões privadas de empresas',
      'Conjunto de ações, programas e decisões do Estado para resolver problemas da sociedade',
      'Apenas leis aprovadas pelo Congresso',
      'Iniciativas exclusivas de ONGs'
    ],
    correctAnswer: 1,
    explanation: 'POLÍTICAS PÚBLICAS são conjuntos de ações, programas, decisões e alocação de recursos pelo ESTADO (Executivo, Legislativo, Judiciário) para enfrentar problemas públicos e atender demandas sociais (saúde, educação, segurança, habitação, transporte). Envolvem: formulação (diagnóstico, agenda), implementação (execução), avaliação (resultados). Participação social é fundamental.',
    difficulty: 'easy',
    topic: 'Políticas Públicas',
    examInfo: 'FCC - Conceito de políticas públicas'
  },
  {
    question: 'O Sistema Único de Saúde (SUS), criado pela Constituição Federal de 1988, tem como princípios:',
    options: [
      'Atendimento privado e pago',
      'Universalidade, integralidade e equidade',
      'Atendimento apenas para quem contribui',
      'Exclusão de estrangeiros'
    ],
    correctAnswer: 1,
    explanation: 'SUS (CF/88, Art. 196-200; Lei 8.080/90): Maior sistema público de saúde do mundo. Princípios: UNIVERSALIDADE (saúde é direito de todos, sem discriminação), INTEGRALIDADE (atenção completa: prevenção, tratamento, reabilitação), EQUIDADE (tratar desigualmente os desiguais). Diretrizes: descentralização, atendimento integral, participação comunitária. Financiamento: impostos (União, Estados, Municípios).',
    difficulty: 'medium',
    topic: 'Políticas Públicas',
    examInfo: 'CESPE - Sistema Único de Saúde'
  },
  {
    question: 'O Bolsa Família, programa de transferência de renda do governo federal, exige das famílias beneficiárias:',
    options: [
      'Nenhuma contrapartida',
      'Condicionalidades em saúde e educação (vacinação, frequência escolar)',
      'Apenas pagamento de taxa mensal',
      'Trabalho obrigatório em obras públicas'
    ],
    correctAnswer: 1,
    explanation: 'BOLSA FAMÍLIA (criado 2003, unificou programas; reformulado 2021 como Auxílio Brasil, depois voltou como Bolsa Família 2023) é programa de transferência CONDICIONAL de renda. CONDICIONALIDADES: 1) SAÚDE: vacinação, pré-natal, acompanhamento nutricional; 2) EDUCAÇÃO: frequência escolar mínima 85% (6-15 anos), 75% (16-17 anos). Objetivo: combater pobreza, quebrar ciclo intergeracional, promover cidadania.',
    difficulty: 'medium',
    topic: 'Políticas Públicas',
    examInfo: 'FGV - Programas sociais'
  },
  {
    question: 'A Lei de Responsabilidade Fiscal (Lei Complementar 101/2000) estabelece normas para:',
    options: [
      'Gestão fiscal responsável dos entes federados (União, Estados, Municípios)',
      'Apenas arrecadação de impostos federais',
      'Privatização de empresas públicas',
      'Financiamento de campanhas eleitorais'
    ],
    correctAnswer: 0,
    explanation: 'LEI DE RESPONSABILIDADE FISCAL - LRF (LC 101/2000): Normas de gestão fiscal responsável para União, Estados, DF, Municípios. Princípios: planejamento, transparência, controle, responsabilização. Limites: despesa com pessoal (60% receita para Municípios/Estados, 50% União), endividamento, operações de crédito. Vedações em ano eleitoral. Penalidades: crime de responsabilidade, inelegibilidade. Equilíbrio fiscal.',
    difficulty: 'hard',
    topic: 'Políticas Públicas',
    examInfo: 'CESPE - Administração pública'
  },
  {
    question: 'O Estatuto da Cidade (Lei 10.257/2001) regulamenta a política urbana e estabelece instrumentos como:',
    options: [
      'Apenas zoneamento urbano',
      'Plano diretor obrigatório para cidades acima de 20 mil habitantes',
      'Proibição de regularização fundiária',
      'Exclusão da participação popular'
    ],
    correctAnswer: 1,
    explanation: 'ESTATUTO DA CIDADE (Lei 10.257/2001) regulamenta CF/88, Art. 182-183. Política urbana: função social da propriedade, gestão democrática, desenvolvimento sustentável. Instrumentos: PLANO DIRETOR (obrigatório para cidades >20 mil hab., regiões metropolitanas, turísticas, área de influência ambiental), parcelamento/edificação compulsórios, IPTU progressivo, desapropriação, usucapião urbano, outorga onerosa, operações consorciadas. Participação popular obrigatória.',
    difficulty: 'hard',
    topic: 'Políticas Públicas',
    examInfo: 'VUNESP - Direito urbanístico'
  }
];

// ============================================================================
// TEMA 5: DIREITOS E DEVERES DO CIDADÃO (5 questões)
// ============================================================================

const direitosDeveresCidadaoQuestions: Question[] = [
  {
    question: 'São direitos fundamentais garantidos pela Constituição Federal de 1988 no artigo 5º (caput):',
    options: [
      'Apenas o direito à propriedade',
      'Vida, liberdade, igualdade, segurança e propriedade',
      'Somente direitos políticos',
      'Exclusivamente direitos econômicos'
    ],
    correctAnswer: 1,
    explanation: 'CF/88, Art. 5º (caput): "Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à VIDA, à LIBERDADE, à IGUALDADE, à SEGURANÇA e à PROPRIEDADE". 78 incisos detalham esses direitos. Cláusula pétrea (Art. 60, §4º, IV). Direitos de 1ª geração (individuais, negativos, contra o Estado).',
    difficulty: 'easy',
    topic: 'Direitos e Deveres do Cidadão',
    examInfo: 'FCC - Direitos fundamentais'
  },
  {
    question: 'O habeas corpus é garantia constitucional que protege:',
    options: [
      'Direito à informação de bancos de dados',
      'Liberdade de locomoção (ir e vir) contra ilegalidade ou abuso de poder',
      'Apenas direitos trabalhistas',
      'Patrimônio líquido individual'
    ],
    correctAnswer: 1,
    explanation: 'HABEAS CORPUS (CF/88, Art. 5º, LXVIII): Ação constitucional que protege LIBERDADE DE LOCOMOÇÃO contra ilegalidade ou abuso de poder. "Conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder". Gratuito, pode ser impetrado por qualquer pessoa. Origem: Inglaterra (1679).',
    difficulty: 'medium',
    topic: 'Direitos e Deveres do Cidadão',
    examInfo: 'CESPE - Remédios constitucionais'
  },
  {
    question: 'Segundo o Código de Defesa do Consumidor (Lei 8.078/90), são direitos básicos do consumidor:',
    options: [
      'Apenas o direito de comprar produtos',
      'Proteção à vida, saúde e segurança; educação para consumo; informação adequada; proteção contra publicidade enganosa',
      'Somente garantia de produtos eletrônicos',
      'Nenhum direito específico'
    ],
    correctAnswer: 1,
    explanation: 'CÓDIGO DE DEFESA DO CONSUMIDOR - CDC (Lei 8.078/90): Consumidor é vulnerável (hipossuficiente). Direitos básicos (Art. 6º): proteção VIDA/SAÚDE/SEGURANÇA, EDUCAÇÃO para consumo, INFORMAÇÃO adequada e clara, proteção contra PUBLICIDADE ENGANOSA/ABUSIVA, modificação de cláusulas contratuais abusivas, INVERSÃO do ônus da prova, acesso à Justiça, facilitação da defesa. Relações de consumo: fornecedor x consumidor.',
    difficulty: 'medium',
    topic: 'Direitos e Deveres do Cidadão',
    examInfo: 'FGV - Direito do consumidor'
  },
  {
    question: 'O Estatuto do Idoso (Lei 10.741/2003) estabelece que é obrigação da família, comunidade, sociedade e Poder Público assegurar ao idoso (pessoa com 60 anos ou mais):',
    options: [
      'Apenas aposentadoria',
      'Prioridade na efetivação dos direitos à vida, saúde, alimentação, educação, cultura, esporte, lazer, trabalho, dignidade, respeito, liberdade e convivência familiar',
      'Somente transporte gratuito',
      'Nenhum direito especial'
    ],
    correctAnswer: 1,
    explanation: 'ESTATUTO DO IDOSO (Lei 10.741/2003) - Idoso: pessoa ≥ 60 anos. Art. 3º: Obrigação da família, comunidade, sociedade, Poder Público assegurar PRIORIDADE na efetivação dos direitos: vida, saúde, alimentação, educação, cultura, esporte, lazer, trabalho, cidadania, liberdade, dignidade, respeito, convivência familiar/comunitária. Direitos específicos: transporte gratuito, atendimento preferencial, proteção contra violência. Crimes: abandono, maus-tratos.',
    difficulty: 'hard',
    topic: 'Direitos e Deveres do Cidadão',
    examInfo: 'CESPE - Direitos dos idosos'
  },
  {
    question: 'São deveres constitucionais do cidadão brasileiro:',
    options: [
      'Apenas pagar impostos',
      'Votar (se obrigatório), cumprir leis, servir às Forças Armadas (obrigatório para homens), defender a Pátria, colaborar com autoridades',
      'Somente obedecer ao presidente',
      'Nenhum dever específico'
    ],
    correctAnswer: 1,
    explanation: 'DEVERES CONSTITUCIONAIS (implícitos e explícitos na CF/88): 1) VOTAR (se na faixa obrigatória: 18-70 anos), 2) CUMPRIR LEIS, 3) Serviço MILITAR obrigatório (homens, CF Art. 143), 4) DEFENDER A PÁTRIA, 5) Colaborar com AUTORIDADES (testemunho, júri), 6) PAGAR IMPOSTOS/TRIBUTOS, 7) Zelar pelo MEIO AMBIENTE (Art. 225), 8) EDUCAR filhos (Art. 229), 9) Proteger PATRIMÔNIO PÚBLICO. Cidadania: direitos + deveres.',
    difficulty: 'medium',
    topic: 'Direitos e Deveres do Cidadão',
    examInfo: 'VUNESP - Deveres cívicos'
  }
];

// ============================================================================
// TEMA 6: DEMOCRACIA E PARTICIPAÇÃO (5 questões)
// ============================================================================

const democraciaParticipacaoQuestions: Question[] = [
  {
    question: 'A democracia brasileira, segundo a Constituição Federal de 1988, fundamenta-se no princípio de que:',
    options: [
      'Todo poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente',
      'O poder pertence exclusivamente ao Presidente',
      'Apenas os militares podem governar',
      'A democracia não está prevista na Constituição'
    ],
    correctAnswer: 0,
    explanation: 'CF/88, Art. 1º, parágrafo único: "Todo o poder emana do POVO, que o exerce por meio de REPRESENTANTES ELEITOS ou DIRETAMENTE, nos termos desta Constituição". DEMOCRACIA SEMIDIRETA/PARTICIPATIVA: combina democracia REPRESENTATIVA (eleição de representantes) com democracia DIRETA (plebiscito, referendo, iniciativa popular, participação em conselhos). Soberania popular. Estado Democrático de Direito.',
    difficulty: 'easy',
    topic: 'Democracia e Participação',
    examInfo: 'CESPE - Fundamentos da democracia brasileira'
  },
  {
    question: 'São instrumentos de participação direta do povo previstos na Constituição Federal:',
    options: [
      'Apenas eleições',
      'Plebiscito, referendo e iniciativa popular',
      'Somente nomeação de ministros',
      'Golpe de Estado'
    ],
    correctAnswer: 1,
    explanation: 'CF/88, Art. 14: Instrumentos de DEMOCRACIA DIRETA: 1) PLEBISCITO (consulta prévia sobre ato governamental ou lei a ser editada), 2) REFERENDO (consulta posterior ratificando/rejeitando lei/ato já existente), 3) INICIATIVA POPULAR (cidadãos apresentam projeto de lei). Exemplos: Plebiscito sobre presidencialismo/parlamentarismo (1993), Referendo sobre desarmamento (2005). Soberania popular em exercício direto.',
    difficulty: 'medium',
    topic: 'Democracia e Participação',
    examInfo: 'FCC - Mecanismos de participação popular'
  },
  {
    question: 'Os conselhos de políticas públicas (saúde, educação, assistência social, etc.) são exemplos de:',
    options: [
      'Democracia participativa e controle social',
      'Órgãos exclusivamente burocráticos',
      'Instrumentos de exclusão popular',
      'Conselhos privados de empresas'
    ],
    correctAnswer: 0,
    explanation: 'CONSELHOS DE POLÍTICAS PÚBLICAS são espaços de DEMOCRACIA PARTICIPATIVA e CONTROLE SOCIAL: sociedade civil participa de formulação, deliberação, fiscalização de políticas. Exemplos: Conselhos de Saúde (Lei 8.142/90), Educação, Assistência Social (LOAS), Criança e Adolescente (ECA), Idoso. Composição PARITÁRIA (governo + sociedade). Caráter deliberativo/consultivo. Transparência, accountability, empoderamento cidadão.',
    difficulty: 'hard',
    topic: 'Democracia e Participação',
    examInfo: 'FGV - Participação e controle social'
  },
  {
    question: 'O orçamento participativo é uma prática democrática que permite:',
    options: [
      'Apenas gestores públicos decidirem sobre o orçamento',
      'Cidadãos participarem da definição de prioridades e alocação de recursos do orçamento público municipal',
      'Empresas privadas controlarem o orçamento',
      'Eliminação total do orçamento público'
    ],
    correctAnswer: 1,
    explanation: 'ORÇAMENTO PARTICIPATIVO (OP): Prática de democracia participativa onde CIDADÃOS participam ativamente da definição de PRIORIDADES e ALOCAÇÃO de parte do orçamento público municipal (principalmente investimentos). Pioneiro: Porto Alegre (1989). Processo: assembleias regionais/temáticas, eleição de delegados, conselho do OP, votação de prioridades. Benefícios: transparência, justiça distributiva, empoderamento, educação cívica, accountability.',
    difficulty: 'medium',
    topic: 'Democracia e Participação',
    examInfo: 'CESPE - Instrumentos de participação local'
  },
  {
    question: 'A Lei de Acesso à Informação (Lei 12.527/2011) estabelece que:',
    options: [
      'Informações públicas devem ser secretas',
      'O acesso à informação pública é direito fundamental, sendo o sigilo a exceção',
      'Apenas jornalistas podem acessar informações públicas',
      'Não há direito à informação no Brasil'
    ],
    correctAnswer: 1,
    explanation: 'LEI DE ACESSO À INFORMAÇÃO - LAI (Lei 12.527/2011), regulamenta CF/88, Art. 5º, XXXIII: ACESSO À INFORMAÇÃO é REGRA, SIGILO é EXCEÇÃO. Qualquer pessoa pode solicitar informações a órgãos públicos (União, Estados, Municípios, empresas públicas) sem justificativa. Prazo: 20 dias (prorrogável 10). Exceções: sigilos (segurança nacional, investigações). Princípios: publicidade, transparência, accountability. Plataformas e-SIC. Participação, controle social.',
    difficulty: 'hard',
    topic: 'Democracia e Participação',
    examInfo: 'VUNESP - Transparência e acesso à informação'
  }
];

// ============================================================================
// TEMA 7: ORGANIZAÇÕES INTERNACIONAIS (5 questões)
// ============================================================================

const organizacoesInternacionaisQuestions: Question[] = [
  {
    question: 'A Organização das Nações Unidas (ONU) foi criada em:',
    options: [
      '1918, após a Primeira Guerra Mundial',
      '1945, após a Segunda Guerra Mundial',
      '1989, após a Guerra Fria',
      '2001, após os ataques terroristas'
    ],
    correctAnswer: 1,
    explanation: 'A ONU foi criada em 24 de OUTUBRO de 1945 (Dia das Nações Unidas), após a Segunda Guerra Mundial, com Carta assinada em São Francisco. Objetivos: manter paz e segurança internacionais, desenvolver relações amistosas, cooperação internacional, respeito aos direitos humanos. Órgãos principais: Assembleia Geral, Conselho de Segurança, Secretariado, Corte Internacional de Justiça, Conselho Econômico e Social. Sede: Nova York.',
    difficulty: 'easy',
    topic: 'Organizações Internacionais',
    examInfo: 'FCC - História das organizações internacionais'
  },
  {
    question: 'O Conselho de Segurança da ONU é composto por:',
    options: [
      'Todos os países membros da ONU',
      '15 membros: 5 permanentes com poder de veto (EUA, Rússia, China, Reino Unido, França) e 10 não-permanentes',
      'Apenas países europeus',
      '7 membros rotativos'
    ],
    correctAnswer: 1,
    explanation: 'CONSELHO DE SEGURANÇA DA ONU: 15 membros. 5 PERMANENTES com PODER DE VETO (P5): EUA, Rússia, China, Reino Unido, França (vencedores da 2ª Guerra). 10 NÃO-PERMANENTES eleitos pela Assembleia Geral (mandato 2 anos, sem reeleição imediata). Responsável por paz e segurança. Decisões exigem 9 votos, incluindo concordância dos P5. Reforma é pauta: Brasil pleiteia assento permanente.',
    difficulty: 'medium',
    topic: 'Organizações Internacionais',
    examInfo: 'CESPE - Estrutura da ONU'
  },
  {
    question: 'O MERCOSUL (Mercado Comum do Sul) é um bloco econômico formado originalmente por:',
    options: [
      'Brasil, Argentina, Paraguai e Uruguai',
      'Todos os países da América do Sul',
      'Apenas Brasil e Argentina',
      'Países europeus e sul-americanos'
    ],
    correctAnswer: 0,
    explanation: 'MERCOSUL criado em 1991 (Tratado de Assunção) pelos membros FUNDADORES: Brasil, Argentina, Paraguai, Uruguai. Objetivos: livre circulação de bens, serviços, pessoas; Tarifa Externa Comum; coordenação de políticas macroeconômicas. Venezuela aderiu (2012, suspensa desde 2016). Bolívia em adesão. Estados Associados: Chile, Peru, Colômbia, Equador, Guiana, Suriname. Sede administrativa: Montevidéu. Maior bloco econômico da América do Sul.',
    difficulty: 'easy',
    topic: 'Organizações Internacionais',
    examInfo: 'FGV - Blocos econômicos regionais'
  },
  {
    question: 'A Organização Mundial da Saúde (OMS/WHO) é uma agência especializada da ONU responsável por:',
    options: [
      'Apenas produção de medicamentos',
      'Coordenação da saúde pública internacional, combate a doenças, emergências sanitárias',
      'Defesa militar dos países',
      'Regulação do comércio internacional'
    ],
    correctAnswer: 1,
    explanation: 'OMS (WHO - World Health Organization) criada em 1948, agência especializada da ONU. Sede: Genebra (Suíça). Missão: alcançar maior nível de saúde para todos. Atribuições: coordenação SAÚDE PÚBLICA internacional, combate EPIDEMIAS/PANDEMIAS (COVID-19, Ebola, gripe), erradicação de doenças (varíola erradicada 1980), pesquisa, normas sanitárias, assistência técnica, REGULAMENTO SANITÁRIO INTERNACIONAL. 194 Estados-membros.',
    difficulty: 'medium',
    topic: 'Organizações Internacionais',
    examInfo: 'CESPE - Agências especializadas da ONU'
  },
  {
    question: 'O Tribunal Penal Internacional (TPI), com sede em Haia (Holanda), julga crimes de:',
    options: [
      'Trânsito e infrações menores',
      'Genocídio, crimes contra a humanidade, crimes de guerra e agressão',
      'Apenas crimes econômicos',
      'Disputas comerciais entre empresas'
    ],
    correctAnswer: 1,
    explanation: 'TRIBUNAL PENAL INTERNACIONAL - TPI (International Criminal Court - ICC) criado em 2002 (Estatuto de Roma, 1998). Sede: Haia, Holanda. Julga INDIVÍDUOS (não Estados) por: GENOCÍDIO, CRIMES CONTRA A HUMANIDADE, CRIMES DE GUERRA, AGRESSÃO. Jurisdição: complementar (quando Estados não podem/querem julgar). 123 Estados-partes. Brasil ratificou (2002). EUA, Rússia, China NÃO são membros. Casos: Darfur, Uganda, Líbia.',
    difficulty: 'hard',
    topic: 'Organizações Internacionais',
    examInfo: 'VUNESP - Direito internacional penal'
  }
];

// ============================================================================
// TEMA 8: MOVIMENTOS SOCIAIS (5 questões)
// ============================================================================

const movimentosSociaisQuestions: Question[] = [
  {
    question: 'O movimento "Diretas Já" (1983-1984) no Brasil tinha como objetivo:',
    options: [
      'Manter a ditadura militar',
      'Restabelecer eleições diretas para Presidente da República',
      'Proclamar a independência do Brasil',
      'Abolir a escravidão'
    ],
    correctAnswer: 1,
    explanation: 'DIRETAS JÁ (1983-1984): Maior movimento popular da história brasileira, mobilizou milhões por eleições DIRETAS para presidente (fim do Colégio Eleitoral da ditadura). Comícios gigantescos (1 milhão no Vale do Anhangabaú-SP). Emenda Dante de Oliveira: rejeitada (1984). Eleição indireta elegeu Tancredo Neves (1985, morreu antes da posse, assumiu Sarney). Diretas retornaram apenas em 1989. Símbolo: redemocratização.',
    difficulty: 'medium',
    topic: 'Movimentos Sociais',
    examInfo: 'FCC - História política brasileira'
  },
  {
    question: 'O Movimento dos Trabalhadores Rurais Sem Terra (MST), fundado em 1984, luta por:',
    options: [
      'Privatização de terras públicas',
      'Reforma agrária, distribuição de terras e justiça social no campo',
      'Expansão do agronegócio exportador',
      'Extinção da agricultura familiar'
    ],
    correctAnswer: 1,
    explanation: 'MST fundado em 1984 (1º Encontro Nacional: Cascavel-PR). Luta por REFORMA AGRÁRIA: distribuição de terras improdutivas, assentamentos, crédito rural, educação no campo, soberania alimentar. Métodos: ocupações de latifúndios improdutivos, acampamentos, marchas. Baseado na função social da propriedade (CF/88, Art. 186). Maior movimento social rural da América Latina. Críticas e apoios dividem opinião.',
    difficulty: 'medium',
    topic: 'Movimentos Sociais',
    examInfo: 'CESPE - Movimentos rurais'
  },
  {
    question: 'O movimento feminista no Brasil conquistou avanços importantes como:',
    options: [
      'Direito ao voto feminino (1932), Lei Maria da Penha (2006), participação política',
      'Apenas o direito de trabalhar',
      'Nenhum direito específico',
      'Restrição de direitos das mulheres'
    ],
    correctAnswer: 0,
    explanation: 'MOVIMENTO FEMINISTA brasileiro: Ondas de luta. Conquistas: VOTO FEMININO (1932, Código Eleitoral de Getúlio), igualdade constitucional (CF/88, Art. 5º, I), Lei MARIA DA PENHA (11.340/2006 - violência doméstica), Lei do FEMINICÍDIO (13.104/2015), licença-maternidade, cotas eleitorais (mínimo 30% candidaturas femininas), criminalização importunação sexual. Pautas: igualdade salarial, representatividade, combate assédio, direitos reprodutivos.',
    difficulty: 'hard',
    topic: 'Movimentos Sociais',
    examInfo: 'FGV - Direitos das mulheres'
  },
  {
    question: 'O movimento negro no Brasil luta historicamente por:',
    options: [
      'Segregação racial',
      'Igualdade racial, combate ao racismo, valorização da cultura afro-brasileira',
      'Exclusão de direitos',
      'Manutenção da escravidão'
    ],
    correctAnswer: 1,
    explanation: 'MOVIMENTO NEGRO brasileiro: Luta desde abolição (incompleta, sem reparação). Principais organizações: Frente Negra Brasileira (1931), MNU (1978), coletivos atuais. Conquistas: Lei Afonso Arinos (1951 - 1ª lei antirracismo), CF/88 (racismo crime inafiançável imprescritível), Lei Caó (7.716/89), cotas raciais universidades/concursos (Lei 12.711/2012), ensino história afro-brasileira (Lei 10.639/03). Pautas: igualdade, reparação, representatividade, combate genocídio juventude negra.',
    difficulty: 'hard',
    topic: 'Movimentos Sociais',
    examInfo: 'CESPE - Direitos étnico-raciais'
  },
  {
    question: 'As manifestações de junho de 2013 no Brasil iniciaram-se com protestos contra:',
    options: [
      'A independência do Brasil',
      'Aumento das tarifas de transporte público, depois ampliaram-se para pautas diversas',
      'A abolição da escravidão',
      'A Proclamação da República'
    ],
    correctAnswer: 1,
    explanation: 'JORNADAS DE JUNHO 2013: Iniciaram com Movimento Passe Livre (MPL) protestando contra AUMENTO de R$ 0,20 nas tarifas de transporte público (São Paulo, depois nacional). Repressão policial ampliou protestos. Pautas multiplicaram-se: "Não é só pelos 20 centavos" - qualidade serviços públicos (saúde, educação, transporte), Copa do Mundo, corrupção (PEC 37). Milhões nas ruas. Impacto político: revogação de aumentos, agenda nacional. Diversidade ideológica.',
    difficulty: 'medium',
    topic: 'Movimentos Sociais',
    examInfo: 'VUNESP - Atualidades políticas'
  }
];

// ============================================================================
// TEMA 9: ÉTICA E CIDADANIA (5 questões)
// ============================================================================

const eticaCidadaniaQuestions: Question[] = [
  {
    question: 'Cidadania pode ser definida como:',
    options: [
      'Apenas o direito de votar',
      'Conjunto de direitos e deveres civis, políticos e sociais que vinculam o indivíduo ao Estado',
      'Isenção de responsabilidades',
      'Privilégio de poucos'
    ],
    correctAnswer: 1,
    explanation: 'CIDADANIA é o conjunto de DIREITOS e DEVERES que vinculam o indivíduo ao Estado e à sociedade. Dimensões (T.H. Marshall): 1) Direitos CIVIS (séc. XVIII: liberdade, propriedade, igualdade perante lei), 2) Direitos POLÍTICOS (séc. XIX: voto, ser votado, participação), 3) Direitos SOCIAIS (séc. XX: saúde, educação, trabalho, previdência). CF/88: cidadania como fundamento (Art. 1º, II). Exercício: participação ativa, responsabilidade cívica.',
    difficulty: 'medium',
    topic: 'Ética e Cidadania',
    examInfo: 'FCC - Conceito de cidadania'
  },
  {
    question: 'A Lei de Improbidade Administrativa (Lei 8.429/92) pune atos de agentes públicos que:',
    options: [
      'Apenas erros administrativos sem má-fé',
      'Causam enriquecimento ilícito, prejuízo ao erário ou violam princípios da administração pública',
      'Trabalham eficientemente',
      'Não cometem irregularidades'
    ],
    correctAnswer: 1,
    explanation: 'LEI DE IMPROBIDADE ADMINISTRATIVA (8.429/92, alterada Lei 14.230/21): Pune atos ímprobos de agentes públicos e terceiros. TIPOS: 1) ENRIQUECIMENTO ILÍCITO (receber vantagem indevida), 2) PREJUÍZO AO ERÁRIO (dano ao patrimônio público), 3) Violação de PRINCÍPIOS (legalidade, impessoalidade, moralidade, publicidade, eficiência). Sanções: perda da função, suspensão direitos políticos, multa, ressarcimento, proibição contratar. Exige DOLO (intenção). Moralidade administrativa.',
    difficulty: 'hard',
    topic: 'Ética e Cidadania',
    examInfo: 'CESPE - Probidade administrativa'
  },
  {
    question: 'Os princípios da administração pública expressos no artigo 37 da Constituição Federal são:',
    options: [
      'Apenas a legalidade',
      'Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (LIMPE)',
      'Somente a publicidade',
      'Não há princípios expressos'
    ],
    correctAnswer: 1,
    explanation: 'CF/88, Art. 37 (caput): Princípios da Administração Pública (LIMPE): 1) LEGALIDADE (agir conforme lei), 2) IMPESSOALIDADE (sem favorecimentos, isonomia), 3) MORALIDADE (ética, honestidade, boa-fé), 4) PUBLICIDADE (transparência, exceto sigilo legal), 5) EFICIÊNCIA (qualidade, produtividade, economicidade - EC 19/98). Aplicam-se a União, Estados, DF, Municípios, administração direta e indireta. Controle de legalidade e moralidade.',
    difficulty: 'easy',
    topic: 'Ética e Cidadania',
    examInfo: 'FGV - Princípios constitucionais da administração'
  },
  {
    question: 'O nepotismo na administração pública, que consiste na nomeação de parentes para cargos públicos, é:',
    options: [
      'Permitido sem restrições',
      'Proibido por violar os princípios da impessoalidade e moralidade (Súmula Vinculante 13 STF)',
      'Obrigatório para todos os agentes',
      'Incentivado pela Constituição'
    ],
    correctAnswer: 1,
    explanation: 'NEPOTISMO é VEDADO. Súmula Vinculante 13/STF (2008): "A nomeação de cônjuge, companheiro ou parente em linha reta, colateral ou por afinidade, até o terceiro grau, inclusive, da autoridade nomeante ou de servidor da mesma pessoa jurídica investido em cargo de direção, chefia ou assessoramento, para o exercício de cargo em comissão ou de confiança ou, ainda, de função gratificada na administração pública direta e indireta em qualquer dos Poderes da União, dos Estados, do Distrito Federal e dos Municípios, compreendido o ajuste mediante designações recíprocas, viola a Constituição Federal." Exceção: cargos políticos (ministros, secretários).',
    difficulty: 'hard',
    topic: 'Ética e Cidadania',
    examInfo: 'CESPE - Jurisprudência STF'
  },
  {
    question: 'O voluntariado e a participação em ações comunitárias são exemplos de:',
    options: [
      'Obrigações legais impostas a todos',
      'Exercício da cidadania ativa e solidariedade social',
      'Atividades proibidas por lei',
      'Práticas exclusivas de servidores públicos'
    ],
    correctAnswer: 1,
    explanation: 'VOLUNTARIADO é expressão de CIDADANIA ATIVA e SOLIDARIEDADE: doação de tempo, trabalho, talento para causas sociais, sem remuneração. Lei 9.608/98 regulamenta serviço voluntário. Áreas: educação, saúde, assistência social, meio ambiente, cultura, direitos humanos. Benefícios: impacto social, desenvolvimento pessoal, empoderamento comunitário, capital social. Exemplos: ONGs, projetos sociais, mutirões. CF/88, Art. 1º, III (dignidade) e Art. 3º (solidariedade). Participação cidadã além do voto.',
    difficulty: 'medium',
    topic: 'Ética e Cidadania',
    examInfo: 'VUNESP - Responsabilidade social e cidadania'
  }
];

// ============================================================================
// FUNÇÃO PARA SEED DE TODAS AS QUESTÕES DE POLÍTICA E CIDADANIA
// ============================================================================

export const seedAllPoliticaCidadaniaQuestions = async () => {
  const allQuestions = [
    ...sistemaPoliticoBrasileiroQuestions,
    ...partidosPoliticosQuestions,
    ...eleicoesQuestions,
    ...politicasPublicasQuestions,
    ...direitosDeveresCidadaoQuestions,
    ...democraciaParticipacaoQuestions,
    ...organizacoesInternacionaisQuestions,
    ...movimentosSociaisQuestions,
    ...eticaCidadaniaQuestions
  ];

  console.log(`🏛️ Preparando ${allQuestions.length} questões de Política e Cidadania para importação em lote...`);

  const questionsToSeed = allQuestions.map((q) => ({
    subject_slug: SUBJECT_SLUG,
    subject_id: SUBJECT_ID,
    topic_slug: topicNameToSlug(q.topic),
    topic_name: q.topic,
    question: q.question,
    options: q.options,
    correct_answer: q.correctAnswer,
    explanation: q.explanation,
    difficulty: q.difficulty,
    exam_info: q.examInfo || 'Questão baseada em concursos públicos nacionais'
  }));

  try {
    const response = await fetch(
      `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/bulk`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`
        },
        body: JSON.stringify({ questions: questionsToSeed })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Erro HTTP ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Resposta do servidor:', result);
    return result;
  } catch (error) {
    console.error('❌ Erro ao enviar questões em lote:', error);
    throw error;
  }
};

// Função auxiliar para converter nome do tópico em slug
function topicNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
