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

const SUBJECT_SLUG = 'geografia-do-brasil';
const SUBJECT_ID = '25';

// ============================================================================
// TEMA 1: ASPECTOS FÍSICOS (5 questões)
// ============================================================================

const aspectosFisicosQuestions: Question[] = [
  {
    question: 'O relevo brasileiro é predominantemente formado por:',
    options: [
      'Planaltos e planícies, com baixas altitudes',
      'Grandes cadeias montanhosas como os Andes',
      'Depressões absolutas abaixo do nível do mar',
      'Dobramentos modernos e vulcões ativos'
    ],
    correctAnswer: 0,
    explanation: 'O relevo brasileiro caracteriza-se por planaltos (60%), planícies (40%) e baixas altitudes. O ponto mais alto é o Pico da Neblina (2.995m). Não há vulcões ativos nem dobramentos modernos, pois o Brasil está no centro da Placa Sul-Americana.',
    difficulty: 'easy',
    topic: 'Aspectos Físicos',
    examInfo: 'IBGE - Geografia Física'
  },
  {
    question: 'A classificação do relevo brasileiro de Jurandyr Ross (1989) divide o território em:',
    options: [
      'Planaltos, planícies e depressões',
      'Montanhas, vales e chapadas',
      'Serras, morros e colinas',
      'Tabuleiros, várzeas e terraços'
    ],
    correctAnswer: 0,
    explanation: 'A classificação de Jurandyr Ross (1989) divide o relevo brasileiro em: 28 unidades de planaltos (áreas elevadas resultado de erosão), 11 planícies (áreas planas de sedimentação) e 11 depressões (áreas rebaixadas entre planaltos).',
    difficulty: 'medium',
    topic: 'Aspectos Físicos',
    examInfo: 'CESPE - Relevo brasileiro'
  },
  {
    question: 'O Escudo das Guianas e o Escudo Brasileiro são formados por rochas:',
    options: [
      'Sedimentares do período Quaternário',
      'Cristalinas pré-cambrianas (mais antigas do Brasil)',
      'Vulcânicas do período Terciário',
      'Metamórficas recentes'
    ],
    correctAnswer: 1,
    explanation: 'Os escudos das Guianas (norte) e Brasileiro (centro-leste) são formados por rochas cristalinas (magmáticas e metamórficas) do período Pré-Cambriano, sendo as estruturas geológicas mais antigas do Brasil (mais de 570 milhões de anos).',
    difficulty: 'hard',
    topic: 'Aspectos Físicos',
    examInfo: 'FCC - Geologia brasileira'
  },
  {
    question: 'A Planície Amazônica é resultado:',
    options: [
      'De dobramentos modernos na Era Cenozoica',
      'Da sedimentação fluvial do Rio Amazonas e afluentes',
      'De atividade vulcânica recente',
      'Do desgaste de rochas cristalinas'
    ],
    correctAnswer: 1,
    explanation: 'A Planície Amazônica formou-se pela deposição de sedimentos (areia, argila) transportados pelo Rio Amazonas e seus afluentes ao longo de milhões de anos. É a maior planície fluvial do mundo, entre os escudos das Guianas e Brasileiro.',
    difficulty: 'medium',
    topic: 'Aspectos Físicos',
    examInfo: 'FGV - Planícies brasileiras'
  },
  {
    question: 'O Planalto Central brasileiro caracteriza-se por:',
    options: [
      'Chapadas, clima tropical e vegetação de Cerrado',
      'Serras elevadas e Mata Atlântica',
      'Planícies inundáveis e floresta Amazônica',
      'Depressões e vegetação de Caatinga'
    ],
    correctAnswer: 0,
    explanation: 'O Planalto Central (GO, DF, MG, MT, TO) caracteriza-se por chapadas (relevo tabular), altitudes entre 300-1.700m, clima tropical sazonal e vegetação de Cerrado. Importante divisor de águas das bacias Amazônica, Tocantins-Araguaia e Platina.',
    difficulty: 'easy',
    topic: 'Aspectos Físicos',
    examInfo: 'VUNESP - Biomas e relevo'
  }
];

// ============================================================================
// TEMA 2: CLIMA E VEGETAÇÃO (5 questões)
// ============================================================================

const climaVegetacaoQuestions: Question[] = [
  {
    question: 'O clima predominante no Brasil é:',
    options: [
      'Temperado',
      'Tropical',
      'Desértico',
      'Polar'
    ],
    correctAnswer: 1,
    explanation: 'O Brasil tem predominância do clima tropical (quente e úmido), pois 92% do território está na zona intertropical. Principais tipos: Equatorial (Amazônia), Tropical (Centro-Sul), Tropical de altitude (SE), Tropical semiárido (Nordeste), Subtropical (Sul).',
    difficulty: 'easy',
    topic: 'Clima e Vegetação',
    examInfo: 'IBGE - Climatologia'
  },
  {
    question: 'A Mata Atlântica originalmente cobria cerca de 15% do território brasileiro e hoje resta aproximadamente:',
    options: [
      '50% da cobertura original',
      '28% da cobertura original',
      '12% da cobertura original',
      '2% da cobertura original'
    ],
    correctAnswer: 2,
    explanation: 'A Mata Atlântica foi drasticamente reduzida pela ocupação histórica do litoral brasileiro. Restam cerca de 12% da cobertura original, concentrados em áreas de difícil acesso (serras). É considerada hotspot de biodiversidade mundial.',
    difficulty: 'medium',
    topic: 'Clima e Vegetação',
    examInfo: 'FCC - Biomas brasileiros'
  },
  {
    question: 'O Cerrado é o segundo maior bioma brasileiro e caracteriza-se por:',
    options: [
      'Árvores retorcidas, cascas grossas, raízes profundas adaptadas ao fogo',
      'Árvores altas de folhas perenes e grande biodiversidade',
      'Vegetação rasteira de gramíneas apenas',
      'Cactos e plantas xerófitas exclusivamente'
    ],
    correctAnswer: 0,
    explanation: 'O Cerrado caracteriza-se por: árvores baixas e retorcidas, cascas grossas (proteção contra fogo), raízes profundas (busca água), estação seca pronunciada. É considerado "savana brasileira" e hotspot de biodiversidade com 30% das espécies do Brasil.',
    difficulty: 'medium',
    topic: 'Clima e Vegetação',
    examInfo: 'CESPE - Cerrado'
  },
  {
    question: 'A Caatinga é exclusivamente brasileira e apresenta:',
    options: [
      'Clima equatorial úmido e floresta densa',
      'Clima semiárido, vegetação xerófila adaptada à seca',
      'Clima subtropical e vegetação de campos',
      'Clima tropical úmido e manguezais'
    ],
    correctAnswer: 1,
    explanation: 'A Caatinga (única no mundo) ocorre no semiárido nordestino: baixa pluviosidade (300-800mm/ano), altas temperaturas, vegetação xerófila (cactos, bromélias, árvores decíduas como jurema e mandacaru). População adaptada à escassez hídrica.',
    difficulty: 'easy',
    topic: 'Clima e Vegetação',
    examInfo: 'FGV - Semiárido brasileiro'
  },
  {
    question: 'O Pantanal é considerado:',
    options: [
      'A maior planície inundável do mundo',
      'O bioma mais seco do Brasil',
      'Uma área de clima subtropical',
      'Uma região de floresta tropical úmida'
    ],
    correctAnswer: 0,
    explanation: 'O Pantanal (MT/MS) é a maior planície inundável contínua do planeta (150-200 mil km²). Regime de enchentes sazonais cria mosaico de ambientes: campos inundáveis, cerrado, florestas. Rica biodiversidade com fauna abundante (onças, jacarés, capivaras, aves).',
    difficulty: 'easy',
    topic: 'Clima e Vegetação',
    examInfo: 'VUNESP - Pantanal'
  }
];

// ============================================================================
// TEMA 3: HIDROGRAFIA (5 questões)
// ============================================================================

const hidrografiaQuestions: Question[] = [
  {
    question: 'A maior bacia hidrográfica do Brasil e do mundo é:',
    options: [
      'Bacia do Paraná',
      'Bacia do São Francisco',
      'Bacia Amazônica',
      'Bacia do Tocantins-Araguaia'
    ],
    correctAnswer: 2,
    explanation: 'A Bacia Amazônica é a maior do mundo (7 milhões km², sendo 3,8 milhões no Brasil). O Rio Amazonas tem extensão de 6.992 km, maior vazão mundial (209.000 m³/s) e atravessa 7 estados brasileiros. Nasce no Peru (Cordilheira dos Andes).',
    difficulty: 'easy',
    topic: 'Hidrografia',
    examInfo: 'ANA - Recursos hídricos'
  },
  {
    question: 'O Rio São Francisco é conhecido como "Rio da Integração Nacional" porque:',
    options: [
      'Atravessa cinco estados do Nordeste e é importante via de integração',
      'É o rio mais extenso do Brasil',
      'Atravessa todas as regiões brasileiras',
      'Tem a maior vazão do país'
    ],
    correctAnswer: 0,
    explanation: 'O São Francisco atravessa MG, BA, PE, AL, SE (2.830 km), sendo único rio perene na região semiárida. Fundamental para navegação, irrigação, geração de energia (usinas de Sobradinho, Paulo Afonso, Xingó) e transposição para estados do Nordeste setentrional.',
    difficulty: 'medium',
    topic: 'Hidrografia',
    examInfo: 'CESPE - Bacia do São Francisco'
  },
  {
    question: 'O Aquífero Guarani é:',
    options: [
      'Um rio subterrâneo na Amazônia',
      'Uma das maiores reservas de água doce subterrânea do mundo',
      'Um lago artificial no Paraná',
      'Uma bacia hidrográfica no Sul'
    ],
    correctAnswer: 1,
    explanation: 'O Aquífero Guarani é uma das maiores reservas de água doce subterrânea do mundo (1,2 milhões km²), abrangendo Brasil (840 mil km² - SP, PR, SC, RS, MG, GO, MT, MS), Argentina, Paraguai e Uruguai. Profundidade média de 250m.',
    difficulty: 'medium',
    topic: 'Hidrografia',
    examInfo: 'FCC - Águas subterrâneas'
  },
  {
    question: 'A Usina Hidrelétrica de Itaipu, uma das maiores do mundo, está localizada no:',
    options: [
      'Rio Amazonas',
      'Rio São Francisco',
      'Rio Paraná (fronteira Brasil-Paraguai)',
      'Rio Tocantins'
    ],
    correctAnswer: 2,
    explanation: 'Itaipu Binacional foi construída no Rio Paraná (1975-1984) na fronteira Brasil-Paraguai. Possui 20 unidades geradoras (14 mil MW de potência instalada), foi a maior hidrelétrica do mundo até 2006 (ultrapassada por Três Gargantas, China).',
    difficulty: 'easy',
    topic: 'Hidrografia',
    examInfo: 'FGV - Energia hidrelétrica'
  },
  {
    question: 'A Bacia do Paraná é importante porque:',
    options: [
      'Concentra o maior potencial hidrelétrico instalado do Brasil',
      'É a bacia com maior biodiversidade',
      'Atravessa apenas estados da região Norte',
      'Possui o rio mais extenso do Brasil'
    ],
    correctAnswer: 0,
    explanation: 'A Bacia do Paraná (1,4 milhões km²) concentra grande parte da geração hidrelétrica brasileira: Itaipu, Ilha Solteira, Jupiá, Furnas, entre outras. Atravessa a região mais desenvolvida economicamente (SP, PR, SC, RS, MG, GO, MS, MT).',
    difficulty: 'hard',
    topic: 'Hidrografia',
    examInfo: 'VUNESP - Bacia do Paraná'
  }
];

// ============================================================================
// TEMA 4: POPULAÇÃO BRASILEIRA (5 questões)
// ============================================================================

const populacaoQuestions: Question[] = [
  {
    question: 'A população brasileira em 2024 é aproximadamente:',
    options: [
      '150 milhões de habitantes',
      '180 milhões de habitantes',
      '215 milhões de habitantes',
      '250 milhões de habitantes'
    ],
    correctAnswer: 2,
    explanation: 'Segundo o IBGE (2024), o Brasil possui cerca de 215 milhões de habitantes, sendo o 6º país mais populoso do mundo (depois de China, Índia, EUA, Indonésia e Paquistão). Crescimento demográfico desacelerou nas últimas décadas.',
    difficulty: 'easy',
    topic: 'População Brasileira',
    examInfo: 'IBGE - Censo Demográfico'
  },
  {
    question: 'A Transição Demográfica no Brasil caracteriza-se por:',
    options: [
      'Aumento das taxas de natalidade e mortalidade',
      'Redução das taxas de natalidade e mortalidade, com envelhecimento populacional',
      'Aumento da população jovem e redução de idosos',
      'Manutenção estável das taxas de natalidade'
    ],
    correctAnswer: 1,
    explanation: 'A Transição Demográfica brasileira: queda da natalidade (de 6 filhos/mulher em 1960 para 1,7 em 2024), redução da mortalidade infantil, aumento da expectativa de vida (77 anos) resultando em envelhecimento populacional. Pirâmide etária mudando de base larga para estreita.',
    difficulty: 'medium',
    topic: 'População Brasileira',
    examInfo: 'CESPE - Demografia'
  },
  {
    question: 'O êxodo rural no Brasil intensificou-se principalmente a partir de:',
    options: [
      '1930, com a industrialização',
      '1950-1970, com a industrialização acelerada e mecanização agrícola',
      '1990, com a globalização',
      '2010, com a crise econômica'
    ],
    correctAnswer: 1,
    explanation: 'O êxodo rural intensificou-se entre 1950-1970 devido à industrialização (concentrada em SP, RJ, MG), mecanização agrícola, concentração fundiária e busca por melhores condições de vida. Em 1970, população urbana ultrapassou a rural (55,9%).',
    difficulty: 'medium',
    topic: 'População Brasileira',
    examInfo: 'FCC - Urbanização brasileira'
  },
  {
    question: 'A distribuição populacional brasileira caracteriza-se por:',
    options: [
      'Concentração uniforme em todo território',
      'Grande concentração no litoral e regiões Sudeste/Sul',
      'Maior concentração na região Norte',
      'Distribuição equilibrada entre litoral e interior'
    ],
    correctAnswer: 1,
    explanation: 'A população brasileira concentra-se no litoral (ocupação histórica) e regiões Sudeste/Sul (industrialização). Densidade demográfica média: 25 hab/km², mas irregular: Sudeste (93 hab/km²) × Norte (5 hab/km²). Grande parte do interior é pouco povoado.',
    difficulty: 'easy',
    topic: 'População Brasileira',
    examInfo: 'FGV - Distribuição populacional'
  },
  {
    question: 'A composição étnica da população brasileira resulta principalmente de:',
    options: [
      'População homogênea de origem portuguesa',
      'Miscigenação entre indígenas, europeus (portugueses, italianos, alemães) e africanos',
      'População exclusivamente asiática',
      'Apenas povos indígenas originários'
    ],
    correctAnswer: 1,
    explanation: 'A população brasileira é resultado de intensa miscigenação: povos indígenas originários, colonizadores portugueses, africanos escravizados (tráfico negreiro), imigrantes europeus (italianos, alemães, espanhóis), asiáticos (japoneses, sírios, libaneses). Diversidade étnica e cultural singular.',
    difficulty: 'easy',
    topic: 'População Brasileira',
    examInfo: 'VUNESP - Formação do povo brasileiro'
  }
];

// ============================================================================
// TEMA 5: URBANIZAÇÃO (5 questões)
// ============================================================================

const urbanizacaoQuestions: Question[] = [
  {
    question: 'O grau de urbanização no Brasil atualmente é de aproximadamente:',
    options: [
      '50% da população vivendo em áreas urbanas',
      '70% da população vivendo em áreas urbanas',
      '87% da população vivendo em áreas urbanas',
      '95% da população vivendo em áreas urbanas'
    ],
    correctAnswer: 2,
    explanation: 'Segundo o IBGE (2024), cerca de 87% da população brasileira vive em áreas urbanas. A urbanização acelerou-se após 1950: em 1940 (31,2% urbana), 1970 (55,9%), 2000 (81,2%), 2024 (87%). O Brasil é um dos países mais urbanizados da América Latina.',
    difficulty: 'medium',
    topic: 'Urbanização',
    examInfo: 'IBGE - Taxa de urbanização'
  },
  {
    question: 'As regiões metropolitanas no Brasil são:',
    options: [
      'Áreas rurais com agricultura intensiva',
      'Conjuntos de municípios integrados econômica e socialmente ao redor de uma metrópole',
      'Cidades pequenas isoladas',
      'Áreas exclusivamente industriais'
    ],
    correctAnswer: 1,
    explanation: 'Regiões Metropolitanas são aglomerações urbanas formadas por municípios integrados (conurbação) com fluxos de pessoas, mercadorias e serviços. Principais: São Paulo, Rio de Janeiro, Belo Horizonte, Porto Alegre, Recife, Salvador, Fortaleza, Curitiba, Brasília.',
    difficulty: 'easy',
    topic: 'Urbanização',
    examInfo: 'CESPE - Redes urbanas'
  },
  {
    question: 'Entre os problemas urbanos brasileiros, destacam-se:',
    options: [
      'Déficit habitacional, favelização, violência, trânsito, poluição, segregação socioespacial',
      'Excesso de áreas verdes e parques',
      'Baixa densidade demográfica',
      'Infraestrutura urbana excessiva'
    ],
    correctAnswer: 0,
    explanation: 'Principais problemas urbanos: déficit habitacional (6 milhões de moradias), favelização, violência urbana, congestionamentos, poluição (ar, água, sonora, visual), enchentes, segregação socioespacial (periferização), especulação imobiliária, gentrificação.',
    difficulty: 'easy',
    topic: 'Urbanização',
    examInfo: 'FCC - Problemas urbanos'
  },
  {
    question: 'A hierarquia urbana brasileira segundo o IBGE classifica São Paulo e Rio de Janeiro como:',
    options: [
      'Centros locais',
      'Capitais regionais',
      'Metrópoles',
      'Grandes metrópoles nacionais'
    ],
    correctAnswer: 3,
    explanation: 'Hierarquia urbana IBGE (REGIC): 1) Grandes Metrópoles Nacionais (SP, RJ - maior influência); 2) Metrópoles Nacionais (Brasília); 3) Metrópoles (Manaus, Belém, Fortaleza, Recife, Salvador, BH, Curitiba, Goiânia, POA); 4) Capitais Regionais; 5) Centros Sub-regionais; 6) Centros Locais.',
    difficulty: 'hard',
    topic: 'Urbanização',
    examInfo: 'FGV - REGIC/IBGE'
  },
  {
    question: 'A gentrificação é um processo urbano que consiste em:',
    options: [
      'Expansão horizontal das periferias',
      'Revitalização de áreas centrais degradadas, com valorização imobiliária e expulsão da população de baixa renda',
      'Criação de novas favelas',
      'Despovoamento das áreas centrais'
    ],
    correctAnswer: 1,
    explanation: 'Gentrificação é revitalização de áreas centrais degradadas com investimentos públicos/privados, atraindo classes médias e altas. Consequência: valorização imobiliária, expulsão da população original de baixa renda para periferias. Exemplos: Centro SP, Zona Portuária RJ.',
    difficulty: 'medium',
    topic: 'Urbanização',
    examInfo: 'VUNESP - Dinâmica urbana'
  }
];

// ============================================================================
// TEMA 6: INDÚSTRIA (5 questões)
// ============================================================================

const industriaQuestions: Question[] = [
  {
    question: 'A industrialização brasileira iniciou-se efetivamente a partir de:',
    options: [
      '1808 com a chegada da família real',
      '1930 com o governo Vargas e substituição de importações',
      '1980 com a abertura econômica',
      '2000 com a globalização'
    ],
    correctAnswer: 1,
    explanation: 'A industrialização brasileira intensificou-se após 1930 (Era Vargas) através da política de substituição de importações devido à crise de 1929 e II Guerra Mundial. Criação da CSN (1941), Petrobras (1953), investimentos em infraestrutura e indústria de base.',
    difficulty: 'medium',
    topic: 'Indústria',
    examInfo: 'CESPE - Industrialização'
  },
  {
    question: 'A Região Concentrada (Sudeste e Sul) concentra aproximadamente:',
    options: [
      '40% da produção industrial brasileira',
      '55% da produção industrial brasileira',
      '70% da produção industrial brasileira',
      '90% da produção industrial brasileira'
    ],
    correctAnswer: 2,
    explanation: 'O Sudeste (principalmente SP) e Sul concentram cerca de 70% da produção industrial brasileira devido a: industrialização histórica, infraestrutura, mercado consumidor, mão de obra qualificada, universidades. Há tendência de desconcentração industrial (guerra fiscal, custos).',
    difficulty: 'medium',
    topic: 'Indústria',
    examInfo: 'FCC - Concentração industrial'
  },
  {
    question: 'As Zonas Francas são áreas com incentivos fiscais. A mais importante do Brasil é:',
    options: [
      'Zona Franca de São Paulo',
      'Zona Franca de Manaus',
      'Zona Franca do Rio de Janeiro',
      'Zona Franca de Porto Alegre'
    ],
    correctAnswer: 1,
    explanation: 'A Zona Franca de Manaus (ZFM) foi criada em 1967 para promover desenvolvimento da Amazônia Ocidental através de incentivos fiscais (IPI, ICMS, importação). Atrai indústrias de eletroeletrônicos, duas rodas, relojoaria. Polo Industrial de Manaus emprega milhares.',
    difficulty: 'easy',
    topic: 'Indústria',
    examInfo: 'FGV - Zona Franca de Manaus'
  },
  {
    question: 'A desconcentração industrial no Brasil ocorre devido a:',
    options: [
      'Apenas crise econômica',
      'Guerra fiscal entre estados, custos menores no interior, infraestrutura moderna',
      'Falta de matéria-prima no Sudeste',
      'Proibição de indústrias em São Paulo'
    ],
    correctAnswer: 1,
    explanation: 'Desconcentração industrial (a partir de 1990): guerra fiscal (estados oferecem incentivos), custos menores (terrenos, mão de obra) no interior/outras regiões, melhor infraestrutura logística (rodovias, portos), saturação de SP (trânsito, poluição, custos). Indústrias migram para MG, GO, BA, PE.',
    difficulty: 'hard',
    topic: 'Indústria',
    examInfo: 'VUNESP - Desconcentração industrial'
  },
  {
    question: 'O setor industrial que mais emprega no Brasil atualmente é:',
    options: [
      'Indústria automobilística',
      'Indústria de transformação (alimentos, têxtil, calçados)',
      'Indústria de base (siderurgia, petroquímica)',
      'Indústria aeroespacial'
    ],
    correctAnswer: 1,
    explanation: 'A indústria de transformação (alimentos, bebidas, têxtil, calçados, móveis) é a que mais emprega no Brasil, seguida por construção civil. Indústria de base (siderurgia, petroquímica) e alta tecnologia (automóveis, eletrônicos) empregam menos, mas têm maior valor agregado.',
    difficulty: 'medium',
    topic: 'Indústria',
    examInfo: 'IBGE - Indústria e emprego'
  }
];

// ============================================================================
// TEMA 7: AGROPECUÁRIA (5 questões)
// ============================================================================

const agropecuariaQuestions: Question[] = [
  {
    question: 'O Brasil é um dos maiores produtores e exportadores mundiais de:',
    options: [
      'Trigo e cevada',
      'Café, soja, carne bovina, carne de frango, açúcar',
      'Arroz e milho apenas',
      'Cacau e especiarias'
    ],
    correctAnswer: 1,
    explanation: 'O Brasil é líder mundial na exportação de: café, soja, carne bovina, carne de frango, açúcar, suco de laranja, milho, algodão. O agronegócio representa cerca de 25% do PIB brasileiro e é superavitário na balança comercial.',
    difficulty: 'easy',
    topic: 'Agropecuária',
    examInfo: 'MAPA - Agronegócio brasileiro'
  },
  {
    question: 'A fronteira agrícola brasileira expandiu-se principalmente para:',
    options: [
      'Região Sul e Sudeste',
      'Região Centro-Oeste (MATOPIBA: Maranhão, Tocantins, Piauí, Bahia)',
      'Região Norte litorânea',
      'Região Nordeste semiárida'
    ],
    correctAnswer: 1,
    explanation: 'A fronteira agrícola expandiu-se do Sul/Sudeste para Centro-Oeste (Cerrado) nas décadas de 1970-90 (tecnologia, correção de solos) e atualmente para MATOPIBA (MA, TO, PI, BA - Cerrado nordestino). Pressão sobre Amazônia gera preocupações ambientais.',
    difficulty: 'medium',
    topic: 'Agropecuária',
    examInfo: 'EMBRAPA - Fronteira agrícola'
  },
  {
    question: 'A agricultura familiar no Brasil:',
    options: [
      'Representa menos de 10% da produção de alimentos',
      'Produz cerca de 70% dos alimentos consumidos pelos brasileiros',
      'Não existe mais no Brasil',
      'Produz apenas para exportação'
    ],
    correctAnswer: 1,
    explanation: 'A agricultura familiar (pequenas propriedades, mão de obra familiar) representa 77% dos estabelecimentos rurais e produz cerca de 70% dos alimentos da mesa dos brasileiros (arroz, feijão, mandioca, hortaliças, leite). Recebe apoio do PRONAF (Programa Nacional de Fortalecimento da Agricultura Familiar).',
    difficulty: 'medium',
    topic: 'Agropecuária',
    examInfo: 'INCRA - Agricultura familiar'
  },
  {
    question: 'O Movimento dos Trabalhadores Rurais Sem Terra (MST) luta principalmente por:',
    options: [
      'Aumento de impostos sobre a terra',
      'Reforma agrária e redistribuição de terras improdutivas',
      'Privatização de terras públicas',
      'Expansão do agronegócio'
    ],
    correctAnswer: 1,
    explanation: 'O MST (fundado 1984) luta por reforma agrária através de ocupações de terras improdutivas, pressionando por desapropriação e assentamentos. Defende agricultura familiar, agroecologia, educação no campo. Críticos questionam métodos; apoiadores destacam concentração fundiária (1% possui 45% das terras).',
    difficulty: 'easy',
    topic: 'Agropecuária',
    examInfo: 'FCC - Reforma agrária'
  },
  {
    question: 'O uso de agrotóxicos no Brasil:',
    options: [
      'É proibido em todo território nacional',
      'É um dos maiores do mundo, gerando preocupações ambientais e de saúde',
      'É insignificante comparado a outros países',
      'Ocorre apenas na agricultura orgânica'
    ],
    correctAnswer: 1,
    explanation: 'O Brasil é um dos maiores consumidores de agrotóxicos do mundo (liberalização de registros). Preocupações: contaminação de água, solo, alimentos, impactos na saúde (intoxicações), redução de polinizadores. Movimento crescente por agricultura orgânica e agroecologia como alternativa.',
    difficulty: 'medium',
    topic: 'Agropecuária',
    examInfo: 'ANVISA - Agrotóxicos'
  }
];

// ============================================================================
// TEMA 8: ENERGIA E RECURSOS NATURAIS (5 questões)
// ============================================================================

const energiaRecursosQuestions: Question[] = [
  {
    question: 'A principal fonte de geração de energia elétrica no Brasil é:',
    options: [
      'Termelétrica (carvão)',
      'Nuclear',
      'Hidrelétrica',
      'Eólica'
    ],
    correctAnswer: 2,
    explanation: 'A matriz energética brasileira é predominantemente hidrelétrica (cerca de 60% da geração), devido ao grande potencial hídrico. Complementam: termelétricas (gás, carvão, óleo - 25%), eólica (12%), solar (3%), nuclear (2% - Angra 1 e 2). Matriz relativamente limpa comparada ao mundo.',
    difficulty: 'easy',
    topic: 'Energia e Recursos Naturais',
    examInfo: 'EPE - Matriz energética'
  },
  {
    question: 'O Pré-Sal refere-se a:',
    options: [
      'Sal marinho usado na alimentação',
      'Reservas de petróleo e gás localizadas abaixo de camadas de sal no oceano',
      'Sal extraído de minas terrestres',
      'Produção de sal no Nordeste'
    ],
    correctAnswer: 1,
    explanation: 'O Pré-Sal são reservas de petróleo e gás natural localizadas abaixo de espessa camada de sal (até 7 mil metros de profundidade) no litoral brasileiro (ES, RJ, SP, SC). Descoberto em 2006, transformou o Brasil em grande produtor de petróleo (autossuficiência).',
    difficulty: 'easy',
    topic: 'Energia e Recursos Naturais',
    examInfo: 'Petrobras - Pré-Sal'
  },
  {
    question: 'A energia eólica no Brasil tem crescido principalmente na região:',
    options: [
      'Norte',
      'Centro-Oeste',
      'Nordeste (especialmente litoral)',
      'Sudeste'
    ],
    correctAnswer: 2,
    explanation: 'A energia eólica expandiu-se rapidamente no Nordeste (BA, RN, CE, PI) devido aos ventos constantes e intensos. O Brasil é o 7º maior gerador de energia eólica do mundo. Vantagens: fonte renovável, limpa. Desafios: intermitência, impactos ambientais (aves).',
    difficulty: 'medium',
    topic: 'Energia e Recursos Naturais',
    examInfo: 'ANEEL - Energia eólica'
  },
  {
    question: 'A Amazônia possui grande biodiversidade e recursos naturais, incluindo:',
    options: [
      'Apenas madeira',
      'Biodiversidade (fauna e flora), água doce, minérios (ferro, ouro, manganês), potencial hidrelétrico',
      'Apenas petróleo',
      'Desertos e dunas'
    ],
    correctAnswer: 1,
    explanation: 'A Amazônia possui: maior biodiversidade mundial (30% das espécies), 20% da água doce, minérios (Carajás - maior mina de ferro; ouro, bauxita, manganês), madeira, potencial hidrelétrico (controverso: Belo Monte). Tensão entre desenvolvimento e conservação ambiental.',
    difficulty: 'medium',
    topic: 'Energia e Recursos Naturais',
    examInfo: 'IBAMA - Amazônia'
  },
  {
    question: 'O etanol brasileiro é produzido principalmente a partir de:',
    options: [
      'Milho',
      'Cana-de-açúcar',
      'Beterraba',
      'Petróleo'
    ],
    correctAnswer: 1,
    explanation: 'O etanol brasileiro é produzido da cana-de-açúcar (principalmente SP), sendo mais eficiente que o de milho (EUA). Brasil é pioneiro em biocombustíveis desde Proálcool (1975). Vantagens: renovável, reduz emissões. Críticas: monocultura, uso de terras, condições de trabalho.',
    difficulty: 'easy',
    topic: 'Energia e Recursos Naturais',
    examInfo: 'MME - Biocombustíveis'
  }
];

// ============================================================================
// TEMA 9: REGIÕES BRASILEIRAS (5 questões)
// ============================================================================

const regioesBrasileirasQuestions: Question[] = [
  {
    question: 'O Brasil é dividido em quantas regiões geográficas pelo IBGE:',
    options: [
      'Três regiões',
      'Quatro regiões',
      'Cinco regiões',
      'Sete regiões'
    ],
    correctAnswer: 2,
    explanation: 'O IBGE divide o Brasil em 5 regiões: Norte (7 estados), Nordeste (9 estados), Centro-Oeste (3 estados + DF), Sudeste (4 estados), Sul (3 estados). Critérios: aspectos naturais, socioeconômicos, culturais. Divisão de 1970 (substituiu 1942).',
    difficulty: 'easy',
    topic: 'Regiões Brasileiras',
    examInfo: 'IBGE - Divisão regional'
  },
  {
    question: 'A Região Norte caracteriza-se por:',
    options: [
      'Maior região em extensão territorial, Floresta Amazônica, baixa densidade demográfica',
      'Maior densidade demográfica do Brasil',
      'Clima subtropical e vegetação de pampas',
      'Economia baseada exclusivamente em indústria'
    ],
    correctAnswer: 0,
    explanation: 'A Região Norte é a maior (45% do território), tem Floresta Amazônica (maior biodiversidade), clima equatorial, baixa densidade demográfica (5 hab/km²), economia baseada em extrativismo, agricultura, Zona Franca de Manaus. Desafios: infraestrutura, desmatamento, queimadas.',
    difficulty: 'easy',
    topic: 'Regiões Brasileiras',
    examInfo: 'IBGE - Região Norte'
  },
  {
    question: 'O Polígono das Secas localiza-se na região:',
    options: [
      'Sul',
      'Sudeste',
      'Nordeste (semiárido)',
      'Centro-Oeste'
    ],
    correctAnswer: 2,
    explanation: 'O Polígono das Secas abrange o semiárido nordestino (parte de 9 estados + norte de MG), área de baixa pluviosidade, secas recorrentes, vegetação de Caatinga. População enfrenta desafios hídricos. Soluções: transposição do São Francisco, cisternas, irrigação, agricultura adaptada.',
    difficulty: 'medium',
    topic: 'Regiões Brasileiras',
    examInfo: 'SUDENE - Semiárido'
  },
  {
    question: 'A Região Sudeste concentra:',
    options: [
      'Maior PIB, população, industrialização e urbanização do Brasil',
      'Menor desenvolvimento econômico',
      'Apenas atividades agrícolas',
      'População exclusivamente rural'
    ],
    correctAnswer: 0,
    explanation: 'O Sudeste concentra: maior PIB (cerca de 50% do Brasil), 42% da população, maior industrialização (SP - maior parque industrial), urbanização elevada (93%), principais metrópoles (SP, RJ, BH), infraestrutura, universidades. Disparidades regionais com Norte/Nordeste.',
    difficulty: 'easy',
    topic: 'Regiões Brasileiras',
    examInfo: 'IBGE - Região Sudeste'
  },
  {
    question: 'A Região Sul apresenta características como:',
    options: [
      'Clima subtropical, forte influência da imigração europeia, economia diversificada',
      'Clima equatorial e floresta tropical',
      'Clima semiárido e vegetação de Caatinga',
      'Baixo desenvolvimento econômico'
    ],
    correctAnswer: 0,
    explanation: 'A Região Sul tem: clima subtropical (única do Brasil com quatro estações definidas), forte influência europeia (alemães, italianos, poloneses, ucranianos), economia diversificada (agropecuária moderna, indústria, serviços), IDH elevado, cultura diferenciada (chimarrão, churrasco, festas germânicas).',
    difficulty: 'easy',
    topic: 'Regiões Brasileiras',
    examInfo: 'IBGE - Região Sul'
  }
];

// ============================================================================
// FUNÇÃO PARA SEED DE TODAS AS QUESTÕES DE GEOGRAFIA DO BRASIL
// ============================================================================

export const seedAllGeografiaBrasilQuestions = async () => {
  const allQuestions = [
    ...aspectosFisicosQuestions,
    ...climaVegetacaoQuestions,
    ...hidrografiaQuestions,
    ...populacaoQuestions,
    ...urbanizacaoQuestions,
    ...industriaQuestions,
    ...agropecuariaQuestions,
    ...energiaRecursosQuestions,
    ...regioesBrasileirasQuestions
  ];

  console.log(`🗺️ Preparando ${allQuestions.length} questões de Geografia do Brasil para importação em lote...`);

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
