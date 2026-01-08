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

const SUBJECT_SLUG = 'ciencias-e-tecnologia';
const SUBJECT_ID = '29';

// ============================================================================
// TEMA 1: BIOLOGIA E SAÚDE (5 questões)
// ============================================================================

const biologiaSaudeQuestions: Question[] = [
  {
    question: 'O DNA (ácido desoxirribonucleico) é responsável por:',
    options: [
      'Apenas produzir energia nas células',
      'Armazenar e transmitir informações genéticas hereditárias',
      'Somente controlar a respiração celular',
      'Exclusivamente produzir anticorpos'
    ],
    correctAnswer: 1,
    explanation: 'O DNA (Ácido Desoxirribonucleico) é a molécula que ARMAZENA e TRANSMITE as INFORMAÇÕES GENÉTICAS de um organismo. Estrutura: dupla hélice (Watson e Crick, 1953), composta por nucleotídeos (bases nitrogenadas: Adenina, Timina, Citosina, Guanina). Funções: 1) Armazenamento da informação genética (genes), 2) Transmissão hereditária (replicação), 3) Síntese de proteínas (transcrição → RNA → tradução → proteínas). Localização: núcleo celular (eucariontes), citoplasma (procariontes). Genoma humano: ~3 bilhões de pares de bases, sequenciado em 2003 (Projeto Genoma Humano).',
    difficulty: 'easy',
    topic: 'Biologia e Saúde',
    examInfo: 'FCC - Genética molecular'
  },
  {
    question: 'As vacinas funcionam através do princípio da:',
    options: [
      'Destruição imediata de todos os vírus do organismo',
      'Estimulação do sistema imunológico para produzir memória imunológica contra patógenos específicos',
      'Eliminação de todas as bactérias do corpo',
      'Produção de antibióticos naturais'
    ],
    correctAnswer: 1,
    explanation: 'VACINAS funcionam pelo princípio da IMUNIZAÇÃO ATIVA: introduzem no organismo formas ATENUADAS, INATIVADAS ou FRAGMENTOS de patógenos (antígenos), estimulando o SISTEMA IMUNOLÓGICO a produzir ANTICORPOS e células de MEMÓRIA IMUNOLÓGICA (linfócitos B e T de memória). Quando o patógeno real invade, o sistema imune reconhece rapidamente e responde com eficácia. Tipos: vivas atenuadas (sarampo, febre amarela), inativadas (gripe, pólio Salk), subunidades (hepatite B), RNA mensageiro (COVID-19 - Pfizer, Moderna). Edward Jenner: primeira vacina (varíola, 1796). Erradicação da varíola (1980, OMS).',
    difficulty: 'medium',
    topic: 'Biologia e Saúde',
    examInfo: 'CESPE - Imunologia e saúde pública'
  },
  {
    question: 'A técnica CRISPR-Cas9, ganhadora do Nobel de Química 2020, é utilizada para:',
    options: [
      'Produzir energia nuclear',
      'Editar genes com precisão, cortando e modificando sequências específicas de DNA',
      'Criar vacinas tradicionais',
      'Sintetizar antibióticos'
    ],
    correctAnswer: 1,
    explanation: 'CRISPR-Cas9 (Clustered Regularly Interspaced Short Palindromic Repeats) é uma técnica REVOLUCIONÁRIA de EDIÇÃO GENÉTICA que permite CORTAR e MODIFICAR sequências específicas de DNA com PRECISÃO. Funcionamento: proteína Cas9 (\"tesoura molecular\") + RNA guia (localiza sequência alvo) → corta DNA → célula repara (inserção, deleção, substituição). Nobel 2020: Emmanuelle Charpentier e Jennifer Doudna. Aplicações: terapia gênica (anemia falciforme, câncer), agricultura (crops resistentes), pesquisa (modelos de doenças). Questões éticas: edição em embriões humanos (bebês CRISPR, China 2018 - controverso).',
    difficulty: 'hard',
    topic: 'Biologia e Saúde',
    examInfo: 'FGV - Biotecnologia moderna'
  },
  {
    question: 'As células-tronco são importantes porque:',
    options: [
      'Só existem em adultos',
      'Têm capacidade de se diferenciar em diversos tipos de células especializadas e se autorenovar',
      'Produzem apenas glóbulos vermelhos',
      'São encontradas exclusivamente no cérebro'
    ],
    correctAnswer: 1,
    explanation: 'CÉLULAS-TRONCO (stem cells) são células com duas propriedades únicas: 1) AUTO-RENOVAÇÃO (divisão ilimitada mantendo características), 2) DIFERENCIAÇÃO (transformação em células especializadas: neurônios, células cardíacas, sanguíneas, etc.). TIPOS: 1) EMBRIONÁRIAS (pluripotentes - qualquer célula do corpo, controvérsia ética), 2) ADULTAS (multipotentes - tipos limitados, medula óssea, cordão umbilical), 3) iPSC (células-tronco pluripotentes induzidas - adultas reprogramadas, Yamanaka, Nobel 2012). Aplicações: terapia celular, medicina regenerativa, transplantes, pesquisa de doenças. Brasil: Lei de Biossegurança (2005) permite pesquisa.',
    difficulty: 'medium',
    topic: 'Biologia e Saúde',
    examInfo: 'CESPE - Biologia celular avançada'
  },
  {
    question: 'A resistência bacteriana a antibióticos ocorre principalmente devido a:',
    options: [
      'Excesso de higiene pessoal',
      'Uso inadequado e excessivo de antibióticos, promovendo seleção natural de bactérias resistentes',
      'Falta de vitaminas na dieta',
      'Consumo de água mineral'
    ],
    correctAnswer: 1,
    explanation: 'RESISTÊNCIA BACTERIANA a antibióticos (RAM - Resistência Antimicrobiana) é crise global de saúde. Causa principal: USO INADEQUADO de antibióticos (prescrição desnecessária, abandono de tratamento, uso veterinário excessivo) promove SELEÇÃO NATURAL: bactérias sensíveis morrem, resistentes sobrevivem e multiplicam, transmitindo genes de resistência (plasmídeos). Mecanismos: bombas de efluxo, inativação enzimática, alteração de alvos. Exemplos: MRSA (Staphylococcus aureus resistente à meticilina), superbactérias KPC. OMS: ameaça à saúde global. Necessidade: novos antibióticos, uso racional, controle de infecções. Previsão: 10 milhões mortes/ano até 2050 se não controlada.',
    difficulty: 'hard',
    topic: 'Biologia e Saúde',
    examInfo: 'VUNESP - Microbiologia e saúde pública'
  }
];

// ============================================================================
// TEMA 2: FÍSICA E QUÍMICA (5 questões)
// ============================================================================

const fisicaQuimicaQuestions: Question[] = [
  {
    question: 'A Teoria da Relatividade, proposta por Albert Einstein, revolucionou a física ao estabelecer que:',
    options: [
      'O tempo e o espaço são absolutos e invariáveis',
      'O tempo e o espaço são relativos e dependem do referencial do observador e da velocidade',
      'A gravidade não existe',
      'A luz se propaga em velocidades infinitas'
    ],
    correctAnswer: 1,
    explanation: 'TEORIA DA RELATIVIDADE de Albert Einstein (1905 - Especial; 1915 - Geral) revolucionou a física. RELATIVIDADE ESPECIAL: tempo e espaço são RELATIVOS (não absolutos), dependem do REFERENCIAL e VELOCIDADE do observador. Postulados: 1) Leis da física iguais em referenciais inerciais, 2) Velocidade da luz (c = 300.000 km/s) constante no vácuo. Consequências: dilatação temporal, contração de comprimento, E=mc² (equivalência massa-energia). RELATIVIDADE GERAL: gravidade é CURVATURA do espaço-tempo causada por massa. Confirmações: precessão de Mercúrio, deflexão da luz (eclipse 1919), ondas gravitacionais (LIGO 2015, Nobel 2017).',
    difficulty: 'hard',
    topic: 'Física e Química',
    examInfo: 'CESPE - Física moderna'
  },
  {
    question: 'A Tabela Periódica organiza os elementos químicos de acordo com:',
    options: [
      'Apenas a ordem alfabética dos nomes',
      'O número atômico crescente e propriedades químicas semelhantes em grupos',
      'A cor dos elementos',
      'O país onde foram descobertos'
    ],
    correctAnswer: 1,
    explanation: 'A TABELA PERIÓDICA organiza os elementos químicos por NÚMERO ATÔMICO CRESCENTE (número de prótons) e agrupa elementos com PROPRIEDADES QUÍMICAS SEMELHANTES em colunas verticais (GRUPOS ou famílias). Dmitri Mendeleev (1869): primeira tabela (ordenou por massa atômica, previu elementos desconhecidos). Moderna (Lei Periódica de Moseley): ordem por número atômico. Estrutura: 18 grupos (1-18), 7 períodos (linhas horizontais - camadas eletrônicas). Grupos importantes: 1 (metais alcalinos), 2 (alcalino-terrosos), 17 (halogênios), 18 (gases nobres). Blocos: s, p, d (metais de transição), f (lantanídeos, actinídeos). 118 elementos conhecidos.',
    difficulty: 'medium',
    topic: 'Física e Química',
    examInfo: 'FCC - Química geral'
  },
  {
    question: 'O Bóson de Higgs, descoberto em 2012 no CERN, é importante porque:',
    options: [
      'É uma partícula que dá massa às outras partículas fundamentais',
      'Serve apenas para gerar energia',
      'É responsável pela força gravitacional',
      'Não tem relevância científica'
    ],
    correctAnswer: 0,
    explanation: 'O BÓSON DE HIGGS é uma partícula fundamental que dá MASSA às outras partículas fundamentais através do CAMPO DE HIGGS (proposto por Peter Higgs, 1964). Modelo Padrão da física de partículas: sem Higgs, partículas não teriam massa (viajariam à velocidade da luz). Descoberta: 2012, CERN (Organização Europeia para a Pesquisa Nuclear), LHC (Grande Colisor de Hádrons) em Genebra. Confirmação: colisões de prótons a altíssimas energias (~13 TeV). Nobel de Física 2013: Peter Higgs e François Englert. "Partícula de Deus" (apelido midiático, não científico). Última peça do Modelo Padrão a ser encontrada experimentalmente.',
    difficulty: 'hard',
    topic: 'Física e Química',
    examInfo: 'FGV - Física de partículas'
  },
  {
    question: 'A camada de ozônio (O₃) na estratosfera é importante porque:',
    options: [
      'Produz oxigênio para respiração',
      'Filtra radiação ultravioleta (UV) prejudicial do Sol, protegendo a vida na Terra',
      'Aquece o planeta',
      'Cria chuvas'
    ],
    correctAnswer: 1,
    explanation: 'A CAMADA DE OZÔNIO (O₃) localizada na ESTRATOSFERA (15-50 km de altitude) FILTRA radiação ULTRAVIOLETA (UV-B e UV-C) prejudicial do Sol, protegendo a vida na Terra. UV excessivo: câncer de pele, cataratas, danos ao DNA, prejuízos a ecossistemas. PROBLEMA: "buraco" na camada (adelgaçamento) sobre Antártida descoberto em 1985. CAUSA: CFCs (clorofluorcarbonetos - aerossóis, refrigeração, espumas) liberam cloro que destrói ozônio (1 átomo Cl destrói 100.000 moléculas O₃). SOLUÇÃO: Protocolo de Montreal (1987) - acordo internacional que BANIU CFCs. RECUPERAÇÃO: camada deve se recuperar totalmente até ~2070. Sucesso da cooperação internacional!',
    difficulty: 'medium',
    topic: 'Física e Química',
    examInfo: 'CESPE - Química ambiental'
  },
  {
    question: 'Os estados físicos da matéria (sólido, líquido, gasoso) diferem principalmente pela:',
    options: [
      'Cor das substâncias',
      'Energia cinética das partículas e forças intermoleculares',
      'Massa dos átomos',
      'Origem da substância'
    ],
    correctAnswer: 1,
    explanation: 'Os ESTADOS FÍSICOS da matéria diferem pela ENERGIA CINÉTICA das partículas (movimento) e FORÇAS INTERMOLECULARES (atração): 1) SÓLIDO: baixa energia cinética, forças intensas, partículas organizadas (vibram em posições fixas), forma e volume definidos. 2) LÍQUIDO: energia cinética moderada, forças intermediárias, partículas próximas mas móveis, volume definido, forma variável. 3) GASOSO: alta energia cinética, forças fracas, partículas distantes e rápidas, volume e forma variáveis (ocupam todo recipiente). MUDANÇAS DE ESTADO: fusão, vaporização, sublimação, solidificação, condensação, ressublimação. 4º estado: PLASMA (gás ionizado, alta temperatura - estrelas, raios). Ponto triplo: três estados coexistem (água: 0,01°C, 611,657 Pa).',
    difficulty: 'easy',
    topic: 'Física e Química',
    examInfo: 'FCC - Física e química básica'
  }
];

// ============================================================================
// TEMA 3: ASTRONOMIA E ESPAÇO (5 questões)
// ============================================================================

const astronomiaEspacoQuestions: Question[] = [
  {
    question: 'O Sistema Solar é composto por:',
    options: [
      'Apenas o Sol e a Terra',
      '1 estrela (Sol), 8 planetas, planetas anões, luas, asteroides, cometas e outros corpos celestes',
      '12 planetas',
      'Somente estrelas'
    ],
    correctAnswer: 1,
    explanation: 'O SISTEMA SOLAR é composto por: 1 ESTRELA (Sol - 99,86% da massa total), 8 PLANETAS (ordem: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno), PLANETAS ANÕES (Plutão, Éris, Ceres, Makemake, Haumea), +200 LUAS (satélites naturais), Cinturão de ASTEROIDES (entre Marte e Júpiter), COMETAS (Cinturão de Kuiper, Nuvem de Oort), poeira e gás. Plutão: reclassificado de planeta para planeta anão (2006, IAU). Formação: ~4,6 bilhões de anos (colapso de nebulosa solar). Planetas ROCHOSOS (interiores: M, V, T, M) vs GASOSOS/GIGANTES (exteriores: J, S, U, N).',
    difficulty: 'easy',
    topic: 'Astronomia e Espaço',
    examInfo: 'FCC - Sistema Solar'
  },
  {
    question: 'Um buraco negro é:',
    options: [
      'Um planeta sem luz',
      'Uma região do espaço-tempo com gravidade tão intensa que nem a luz consegue escapar',
      'Uma estrela apagada',
      'Um cometa escuro'
    ],
    correctAnswer: 1,
    explanation: 'BURACO NEGRO é uma região do ESPAÇO-TEMPO com GRAVIDADE TÃO INTENSA que nada, nem mesmo a LUZ, consegue escapar após cruzar o horizonte de eventos (fronteira sem retorno). Formação: colapso gravitacional de estrelas MASSIVAS (>20 massas solares) após supernova, ou fusão de objetos densos. Tipos: 1) ESTELARES (5-100 massas solares), 2) SUPERMASSIVOS (milhões-bilhões massas solares, centro de galáxias - Sagittarius A* na Via Láctea: 4 milhões massas solares), 3) Intermediários. Evidências: raios-X, ondas gravitacionais (LIGO 2015), Event Horizon Telescope (primeira imagem, 2019 - M87). Einstein previu (Relatividade Geral), termo cunhado por John Wheeler (1967).',
    difficulty: 'medium',
    topic: 'Astronomia e Espaço',
    examInfo: 'CESPE - Astrofísica'
  },
  {
    question: 'O telescópio espacial James Webb (JWST), lançado em 2021, observa principalmente em:',
    options: [
      'Luz visível apenas',
      'Infravermelho, permitindo ver através de nuvens de poeira cósmica e galáxias distantes',
      'Raios-X',
      'Ondas de rádio'
    ],
    correctAnswer: 1,
    explanation: 'O Telescópio Espacial JAMES WEBB (JWST, lançado 25/12/2021, sucessor do Hubble) observa principalmente no INFRAVERMELHO (IR próximo e médio: 0,6-28 micrômetros). Vantagens IR: 1) Atravessa NUVENS DE POEIRA cósmica (berçários estelares), 2) Detecta luz de objetos DISTANTES (redshifted - desvio para vermelho devido à expansão do universo), 3) Observa atmosferas de EXOPLANETAS, 4) Estuda primeiras GALÁXIAS (13+ bilhões anos-luz). Espelho: 6,5m (ouro, 18 segmentos hexagonais, 3x maior que Hubble). Localização: ponto Lagrange L2 (1,5 milhão km da Terra). Custo: $10 bilhões. Primeiras imagens: julho 2022 (espetaculares!).',
    difficulty: 'hard',
    topic: 'Astronomia e Espaço',
    examInfo: 'FGV - Astronomia observacional moderna'
  },
  {
    question: 'A Via Láctea, nossa galáxia, é classificada como:',
    options: [
      'Galáxia elíptica',
      'Galáxia espiral barrada',
      'Galáxia irregular',
      'Nebulosa'
    ],
    correctAnswer: 1,
    explanation: 'A VIA LÁCTEA é uma GALÁXIA ESPIRAL BARRADA (SBc na classificação de Hubble): possui braços espirais (Sagitário-Carina, Perseus, Norma-Outer) emanando de uma BARRA central de estrelas. Dimensões: diâmetro ~100.000 anos-luz, espessura disco ~1.000 anos-luz. Componentes: 200-400 BILHÕES de estrelas, Sistema Solar localizado no braço de Órion (~26.000 anos-luz do centro). Centro: buraco negro supermassivo Sagittarius A* (4 milhões massas solares, Prêmio Nobel 2020). Halo: matéria escura (~90% da massa total). Vizinhas: Andrômeda (galáxia espiral, ~2,5 milhões anos-luz), Nuvens de Magalhães. Grupo Local: ~54 galáxias.',
    difficulty: 'medium',
    topic: 'Astronomia e Espaço',
    examInfo: 'CESPE - Galáxias e cosmologia'
  },
  {
    question: 'A Estação Espacial Internacional (ISS) orbita a Terra a uma altitude aproximada de:',
    options: [
      '10 km',
      '100 km',
      '400 km',
      '36.000 km (órbita geoestacionária)'
    ],
    correctAnswer: 2,
    explanation: 'A ESTAÇÃO ESPACIAL INTERNACIONAL (ISS - International Space Station) orbita a Terra a ~400 km de altitude (órbita baixa - LEO: Low Earth Orbit, 330-435 km variável). Velocidade: ~28.000 km/h (7,66 km/s). Completa 1 órbita a cada ~90 minutos (16 órbitas/dia). Projeto: cooperação internacional (NASA-EUA, Roscosmos-Rússia, ESA-Europa, JAXA-Japão, CSA-Canadá). Primeiro módulo: Zarya (1998). Maior estrutura humana no espaço: 109m × 73m (campo de futebol), massa ~420 toneladas. Tripulação: 6-7 astronautas (permanente desde 2000). Pesquisas: microgravidade, biologia, física, astronomia. Descomissionamento previsto: ~2030. Visível a olho nu da Terra!',
    difficulty: 'easy',
    topic: 'Astronomia e Espaço',
    examInfo: 'VUNESP - Exploração espacial'
  }
];

// ============================================================================
// TEMA 4: INOVAÇÕES TECNOLÓGICAS (5 questões)
// ============================================================================

const inovacoesTecnologicasQuestions: Question[] = [
  {
    question: 'A tecnologia 5G (quinta geração de redes móveis) oferece como principais vantagens:',
    options: [
      'Apenas maior velocidade de download',
      'Altíssima velocidade (até 20 Gbps), baixa latência (<1ms), conexão massiva de dispositivos IoT',
      'Somente cobertura em áreas rurais',
      'Eliminação completa de antenas'
    ],
    correctAnswer: 1,
    explanation: 'A tecnologia 5G (quinta geração de redes móveis) oferece: 1) VELOCIDADE: até 20 Gbps (100x mais rápido que 4G), downloads instantâneos. 2) BAIXA LATÊNCIA: <1 milissegundo (vs 30-50ms no 4G), crucial para aplicações em tempo real (cirurgias remotas, veículos autônomos). 3) CONEXÃO MASSIVA: até 1 milhão de dispositivos/km² (IoT - Internet das Coisas). 4) Eficiência energética. Frequências: ondas milimétricas (24-100 GHz, alta velocidade, baixo alcance) + sub-6 GHz (cobertura). Aplicações: cidades inteligentes, indústria 4.0, telemedicina, realidade aumentada/virtual. Brasil: leilão 5G em 2021. Desafios: infraestrutura, investimento.',
    difficulty: 'medium',
    topic: 'Inovações Tecnológicas',
    examInfo: 'FCC - Telecomunicações modernas'
  },
  {
    question: 'Computação quântica utiliza princípios da mecânica quântica, como:',
    options: [
      'Apenas bits clássicos (0 ou 1)',
      'Qubits que podem estar em superposição (0 e 1 simultaneamente) e emaranhamento quântico',
      'Somente processamento binário tradicional',
      'Não usa princípios físicos'
    ],
    correctAnswer: 1,
    explanation: 'COMPUTAÇÃO QUÂNTICA utiliza princípios da MECÂNICA QUÂNTICA para processar informação: 1) QUBITS (bits quânticos): podem estar em SUPERPOSIÇÃO (estados 0 E 1 SIMULTANEAMENTE, diferente de bits clássicos 0 OU 1), processamento paralelo massivo. 2) EMARANHAMENTO QUÂNTICO: qubits correlacionados instantaneamente (Einstein: "ação fantasmagórica"). 3) INTERFERÊNCIA: amplifica respostas corretas, cancela erradas. Potencial: resolver problemas impossíveis para computadores clássicos (fatoração de números grandes - quebra RSA, simulação molecular - drogas, otimização). Empresas: IBM, Google (supremacia quântica 2019 - 200s vs 10.000 anos), Microsoft, IonQ. Desafios: decoerência, resfriamento (-273°C), correção de erros.',
    difficulty: 'hard',
    topic: 'Inovações Tecnológicas',
    examInfo: 'FGV - Tecnologias emergentes'
  },
  {
    question: 'Blockchain é uma tecnologia que:',
    options: [
      'Serve apenas para minerar ouro',
      'Cria registros distribuídos, imutáveis e transparentes de transações, base das criptomoedas',
      'É usada exclusivamente para jogos',
      'Não tem aplicação prática'
    ],
    correctAnswer: 1,
    explanation: 'BLOCKCHAIN (cadeia de blocos) é uma tecnologia de REGISTRO DISTRIBUÍDO (DLT - Distributed Ledger Technology): cria base de dados descentralizada, IMUTÁVEL (à prova de adulteração) e TRANSPARENTE. Funcionamento: transações agrupadas em BLOCOS, encadeados criptograficamente (hash), validados por rede P2P (consenso: Proof-of-Work, Proof-of-Stake), sem autoridade central. Base das CRIPTOMOEDAS (Bitcoin - Satoshi Nakamoto 2008, Ethereum). Aplicações além cripto: contratos inteligentes (smart contracts), supply chain, votação eletrônica, certificados, saúde (prontuários), propriedade intelectual. Características: descentralização, segurança criptográfica, rastreabilidade, transparência. Limitações: escalabilidade, consumo energético (PoW).',
    difficulty: 'hard',
    topic: 'Inovações Tecnológicas',
    examInfo: 'CESPE - Tecnologias disruptivas'
  },
  {
    question: 'Internet das Coisas (IoT) refere-se a:',
    options: [
      'Apenas computadores conectados',
      'Rede de objetos físicos (dispositivos, veículos, eletrodomésticos) conectados à internet, coletando e trocando dados',
      'Somente smartphones',
      'Cabos de internet'
    ],
    correctAnswer: 1,
    explanation: 'INTERNET DAS COISAS (IoT - Internet of Things) é a rede de OBJETOS FÍSICOS (dispositivos, veículos, eletrodomésticos, sensores, atuadores) conectados à INTERNET, coletando e TROCANDO DADOS de forma autônoma. Componentes: 1) Sensores (temperatura, movimento, pressão), 2) Conectividade (Wi-Fi, Bluetooth, 5G, LoRa), 3) Processamento (edge computing, cloud), 4) Interface (apps, dashboards). Aplicações: casas inteligentes (Alexa, Google Home), cidades inteligentes (semáforos, iluminação, lixo), saúde (wearables - Fitbit, Apple Watch), agricultura (irrigação, monitoramento), indústria 4.0. Previsão: 75 bilhões dispositivos IoT até 2025. Desafios: segurança, privacidade, padronização.',
    difficulty: 'medium',
    topic: 'Inovações Tecnológicas',
    examInfo: 'FCC - IoT e conectividade'
  },
  {
    question: 'Realidade Virtual (VR) difere de Realidade Aumentada (AR) porque:',
    options: [
      'VR cria ambiente totalmente digital imersivo; AR sobrepõe elementos digitais ao mundo real',
      'Ambas são exatamente iguais',
      'VR só funciona em celulares',
      'AR não usa tecnologia'
    ],
    correctAnswer: 0,
    explanation: 'REALIDADE VIRTUAL (VR) cria ambiente TOTALMENTE DIGITAL e IMERSIVO, isolando usuário do mundo real (óculos VR: Oculus Quest, HTC Vive, PlayStation VR). Aplicações: jogos, treinamentos (pilotos, cirurgiões), turismo virtual, terapias. REALIDADE AUMENTADA (AR) SOBREPÕE elementos digitais (imagens, informações, objetos 3D) ao MUNDO REAL visto pelo usuário (smartphone, óculos AR: Google Glass, Microsoft HoloLens). Exemplos: Pokémon GO, filtros Instagram/Snapchat, IKEA Place (visualizar móveis), navegação (setas na rua). REALIDADE MISTA (MR): híbrido VR+AR, interação objetos virtuais com reais. XR (Extended Reality): termo guarda-chuva (VR+AR+MR).',
    difficulty: 'easy',
    topic: 'Inovações Tecnológicas',
    examInfo: 'VUNESP - Tecnologias imersivas'
  }
];

// ============================================================================
// TEMA 5: INTELIGÊNCIA ARTIFICIAL (5 questões)
// ============================================================================

const inteligenciaArtificialQuestions: Question[] = [
  {
    question: 'Machine Learning (Aprendizado de Máquina) é uma subárea da IA que:',
    options: [
      'Programa manualmente todas as respostas possíveis',
      'Permite que sistemas aprendam e melhorem a partir de dados e experiência sem serem explicitamente programados',
      'Apenas copia informações da internet',
      'Não utiliza dados'
    ],
    correctAnswer: 1,
    explanation: 'MACHINE LEARNING (Aprendizado de Máquina, ML) é subárea da IA que permite sistemas APRENDEREM e MELHORAREM a partir de DADOS e EXPERIÊNCIA, sem serem EXPLICITAMENTE PROGRAMADOS para cada tarefa. Tipos: 1) SUPERVISIONADO (dados rotulados: classificação, regressão - spam, previsão preços), 2) NÃO-SUPERVISIONADO (dados não rotulados: clustering, redução dimensionalidade - segmentação clientes), 3) REFORÇO (aprendizado por tentativa/erro, recompensas - jogos, robótica). Técnicas: redes neurais, árvores de decisão, SVM, random forests. Aplicações: reconhecimento facial, recomendações (Netflix, Spotify), carros autônomos, diagnóstico médico, tradução. Framework: TensorFlow, PyTorch.',
    difficulty: 'medium',
    topic: 'Inteligência Artificial',
    examInfo: 'FCC - Inteligência Artificial e ML'
  },
  {
    question: 'Deep Learning (Aprendizado Profundo) utiliza:',
    options: [
      'Apenas cálculos matemáticos simples',
      'Redes neurais artificiais com múltiplas camadas (profundas) inspiradas no cérebro humano',
      'Somente planilhas Excel',
      'Não usa algoritmos'
    ],
    correctAnswer: 1,
    explanation: 'DEEP LEARNING (Aprendizado Profundo, DL) é subárea de ML que utiliza REDES NEURAIS ARTIFICIAIS com MÚLTIPLAS CAMADAS (deep neural networks - DNNs) inspiradas na estrutura do CÉREBRO HUMANO (neurônios, sinapses). Arquitetura: camada de entrada → camadas ocultas (hidden layers - muitas camadas = "profundo") → camada de saída. Cada camada extrai características progressivamente mais abstratas. Tipos: CNN (Convolutional Neural Networks - imagens), RNN/LSTM (Recurrent - sequências, texto), GAN (Generative Adversarial Networks - geração). Aplicações: reconhecimento de imagem (ImageNet), processamento de linguagem natural (ChatGPT, GPT-4), AlphaGo (venceu campeão Go). Requer: GPUs potentes, grandes volumes de dados.',
    difficulty: 'hard',
    topic: 'Inteligência Artificial',
    examInfo: 'FGV - Deep Learning avançado'
  },
  {
    question: 'ChatGPT e modelos de linguagem como GPT-4 são baseados em:',
    options: [
      'Busca simples em dicionários',
      'Transformers e atenção, processando linguagem natural para gerar texto coerente',
      'Apenas cópia de textos da internet',
      'Não usam algoritmos'
    ],
    correctAnswer: 1,
    explanation: 'ChatGPT e GPT-4 (Generative Pre-trained Transformer) são MODELOS DE LINGUAGEM baseados na arquitetura TRANSFORMER (Vaswani et al., 2017) e mecanismo de ATENÇÃO (attention mechanism). Funcionamento: 1) PRÉ-TREINAMENTO em bilhões de textos (livros, internet) para aprender padrões linguísticos, 2) FINE-TUNING (ajuste fino) com RLHF (Reinforcement Learning from Human Feedback) para seguir instruções e ser útil/seguro. Capacidades: gerar texto coerente, responder perguntas, traduzir, programar, raciocinar. GPT-4: 1,76 trilhão de parâmetros (estimado). OpenAI: ChatGPT lançado 30/11/2022, viral (100 milhões usuários em 2 meses). Questões: alucinações, viés, plágio, impacto no trabalho.',
    difficulty: 'hard',
    topic: 'Inteligência Artificial',
    examInfo: 'CESPE - NLP e LLMs'
  },
  {
    question: 'Reconhecimento facial por IA levanta preocupações sobre:',
    options: [
      'Apenas custo de implementação',
      'Privacidade, vigilância em massa, viés algorítmico (discriminação racial/gênero)',
      'Consumo de energia apenas',
      'Não há preocupações'
    ],
    correctAnswer: 1,
    explanation: 'RECONHECIMENTO FACIAL por IA levanta sérias PREOCUPAÇÕES ÉTICAS: 1) PRIVACIDADE: vigilância em massa, rastreamento sem consentimento (China: 600 milhões câmeras). 2) VIÉS ALGORÍTMICO: maior taxa de erro em pessoas negras/asiáticas/mulheres (datasets desbalanceados - estudos MIT, NIST). Discriminação em contratação, policiamento preditivo injusto. 3) Segurança: deepfakes (falsificação), roubo de identidade. 4) Autoritarismo: controle social (crédito social China). Regulação: GDPR (Europa - consentimento), São Francisco/Boston baniram uso policial. Brasil: Lei Geral de Proteção de Dados (LGPD). Necessidade: transparência, auditoria, diversidade em datasets, consentimento informado.',
    difficulty: 'medium',
    topic: 'Inteligência Artificial',
    examInfo: 'FCC - Ética em IA'
  },
  {
    question: 'Veículos autônomos (carros sem motorista) utilizam IA para:',
    options: [
      'Apenas tocar música',
      'Percepção do ambiente (sensores, câmeras), tomada de decisão em tempo real e controle do veículo',
      'Somente estacionar',
      'Não usam IA'
    ],
    correctAnswer: 1,
    explanation: 'VEÍCULOS AUTÔNOMOS (self-driving cars) utilizam IA para: 1) PERCEPÇÃO: sensores (LiDAR - laser 3D, radar, câmeras, ultrassom) + computer vision detectam pedestres, veículos, sinais, faixas, obstáculos. 2) LOCALIZAÇÃO: GPS + mapas HD + SLAM (Simultaneous Localization and Mapping). 3) PREDIÇÃO: algoritmos ML preveem comportamento de outros agentes. 4) PLANEJAMENTO: trajetórias otimizadas. 5) CONTROLE: atuação em direção, freios, aceleração. Níveis SAE: 0 (manual) a 5 (totalmente autônomo). Empresas: Waymo (Google), Tesla (Autopilot/FSD), Cruise (GM), Uber ATG. Desafios: dilemas éticos (trolley problem), condições adversas (neve), regulação, responsabilidade em acidentes.',
    difficulty: 'medium',
    topic: 'Inteligência Artificial',
    examInfo: 'VUNESP - Robótica e IA aplicada'
  }
];

// ============================================================================
// TEMA 6: BIOTECNOLOGIA (5 questões)
// ============================================================================

const biotecnologiaQuestions: Question[] = [
  {
    question: 'Organismos Geneticamente Modificados (OGMs) são criados através de:',
    options: [
      'Seleção natural apenas',
      'Inserção, remoção ou modificação de genes por engenharia genética, transferindo DNA entre espécies',
      'Cruzamento tradicional apenas',
      'Não envolvem alteração genética'
    ],
    correctAnswer: 1,
    explanation: 'ORGANISMOS GENETICAMENTE MODIFICADOS (OGMs ou transgênicos) são criados por ENGENHARIA GENÉTICA: INSERÇÃO, REMOÇÃO ou MODIFICAÇÃO de GENES, podendo transferir DNA entre ESPÉCIES DIFERENTES (não possível por cruzamento tradicional). Técnicas: recombinação de DNA, vetores (plasmídeos, vírus), CRISPR, biobalística (gene gun). Exemplos: 1) Agricultura: soja RR (Roundup Ready - resistente a herbicida), milho Bt (produz toxina contra pragas), arroz dourado (vitamina A). 2) Farmacêutico: insulina humana em bactérias, hormônio crescimento. Polêmicas: segurança alimentar, impacto ambiental, monopólio (Monsanto), rotulagem. Brasil: CTNBio regula. Benefícios: produtividade, redução agrotóxicos. Riscos: biodiversidade, resistência.',
    difficulty: 'medium',
    topic: 'Biotecnologia',
    examInfo: 'CESPE - Biotecnologia e transgênicos'
  },
  {
    question: 'A clonagem terapêutica tem como objetivo:',
    options: [
      'Criar cópias idênticas de pessoas',
      'Produzir células-tronco embrionárias para tratar doenças, não para gerar indivíduos',
      'Apenas clonar animais',
      'Não tem aplicação médica'
    ],
    correctAnswer: 1,
    explanation: 'CLONAGEM TERAPÊUTICA (ou clonagem para pesquisa) tem objetivo de produzir CÉLULAS-TRONCO EMBRIONÁRIAS geneticamente idênticas ao paciente para TRATAR DOENÇAS (medicina regenerativa), NÃO para gerar indivíduos completos. Técnica: SCNT (Transferência Nuclear de Célula Somática): núcleo de célula adulta transferido para óvulo sem núcleo → desenvolvimento até blastocisto (5-7 dias) → extração de células-tronco → diferenciação em tecidos específicos (neurônios, cardiomiócitos, etc.) → transplante sem rejeição. Diferença: CLONAGEM REPRODUTIVA busca criar indivíduo completo (ovelha Dolly, 1996). Questões éticas: destruição de embriões. Alternativa: iPSC (células-tronco pluripotentes induzidas) sem embriões.',
    difficulty: 'hard',
    topic: 'Biotecnologia',
    examInfo: 'FGV - Clonagem e terapias celulares'
  },
  {
    question: 'A técnica de PCR (Reação em Cadeia da Polimerase) é utilizada para:',
    options: [
      'Amplificar (multiplicar) rapidamente segmentos específicos de DNA in vitro',
      'Apenas queimar DNA',
      'Somente colorir células',
      'Não tem utilidade prática'
    ],
    correctAnswer: 0,
    explanation: 'PCR (Polymerase Chain Reaction - Reação em Cadeia da Polimerase) é técnica que AMPLIFICA (multiplica exponencialmente) segmentos específicos de DNA in vitro (tubo de ensaio). Inventada por Kary Mullis (Nobel Química 1993). Ciclos (25-40x): 1) DESNATURAÇÃO (94-96°C): separa fitas de DNA, 2) ANELAMENTO (50-65°C): primers (oligonucleotídeos) ligam-se às sequências-alvo, 3) EXTENSÃO (72°C): DNA polimerase (Taq, de bactéria termorresistente) sintetiza novas fitas. Cada ciclo DOBRA o DNA: 2^n cópias (30 ciclos = ~1 bilhão). Aplicações: diagnóstico (COVID-19 - RT-PCR, HIV, câncer), forense (DNA fingerprinting), paternidade, arqueologia, clonagem, sequenciamento.',
    difficulty: 'hard',
    topic: 'Biotecnologia',
    examInfo: 'FCC - Técnicas moleculares'
  },
  {
    question: 'Biocombustíveis como etanol e biodiesel são considerados renováveis porque:',
    options: [
      'Vêm de fontes fósseis',
      'São produzidos a partir de biomassa (plantas, algas, resíduos orgânicos) renovável em escala humana',
      'Nunca acabam naturalmente',
      'São sintéticos puros'
    ],
    correctAnswer: 1,
    explanation: 'BIOCOMBUSTÍVEIS (etanol, biodiesel) são considerados RENOVÁVEIS porque são produzidos a partir de BIOMASSA (matéria orgânica) que se RENOVA em escala temporal HUMANA (vs combustíveis fósseis: milhões de anos). ETANOL: fermentação de açúcares (cana-de-açúcar no Brasil - líder mundial 2ª geração, milho nos EUA) ou celulose (2ª geração - bagaço, palha). BIODIESEL: transesterificação de óleos vegetais (soja, palma, girassol) ou gorduras animais + álcool. Vantagens: reduz emissões líquidas de CO₂ (plantas absorvem CO₂ crescendo), menor poluição local, segurança energética. Críticas: competição com alimentos (crise 2008), uso de terra, monocultura, balanço energético. 3ª geração: ALGAS (alta produtividade).',
    difficulty: 'medium',
    topic: 'Biotecnologia',
    examInfo: 'CESPE - Bioenergia'
  },
  {
    question: 'A bioimpressão 3D é uma tecnologia que:',
    options: [
      'Imprime apenas plástico',
      'Imprime estruturas biológicas (tecidos, órgãos) usando células vivas como "tinta"',
      'Não funciona com células',
      'Apenas copia imagens'
    ],
    correctAnswer: 1,
    explanation: 'BIOIMPRESSÃO 3D (bioprinting) é tecnologia que IMPRIME estruturas BIOLÓGICAS tridimensionais (tecidos, órgãos) usando CÉLULAS VIVAS como "biotinta". Processo: 1) Modelagem 3D (CAD) do tecido/órgão, 2) Preparação de biotinta (células + hidrogel biocompatível - alginato, colágeno), 3) IMPRESSÃO camada por camada (extrusão, jato de tinta, laser), 4) Maturação (biorreator - células proliferam, formam matriz extracelular). Aplicações: 1) Testes de drogas (mini-órgãos), 2) Modelos de doenças, 3) Transplantes (futuro - órgãos personalizados, sem rejeição ou fila). Conquistas: pele, cartilagem, vasos, fragmentos hepáticos. Desafios: vascularização (nutrir tecidos espessos), complexidade, escala. Empresas: Organovo, CELLINK.',
    difficulty: 'hard',
    topic: 'Biotecnologia',
    examInfo: 'VUNESP - Biotecnologia médica'
  }
];

// ============================================================================
// TEMA 7: ENERGIA E SUSTENTABILIDADE (5 questões)
// ============================================================================

const energiaSustentabilidadeQuestions: Question[] = [
  {
    question: 'Energia solar fotovoltaica e energia solar térmica diferem porque:',
    options: [
      'São exatamente iguais',
      'Fotovoltaica converte luz em eletricidade (células solares); térmica usa calor para aquecer fluidos',
      'Nenhuma usa o Sol',
      'Ambas funcionam apenas à noite'
    ],
    correctAnswer: 1,
    explanation: 'ENERGIA SOLAR FOTOVOLTAICA converte LUZ solar diretamente em ELETRICIDADE através de CÉLULAS FOTOVOLTAICAS (painéis solares, efeito fotovoltaico - silício semicondutor). Aplicação: geração elétrica distribuída/centralizada. ENERGIA SOLAR TÉRMICA (ou heliotérmica) usa CALOR solar para AQUECER fluidos (água, óleo, sais fundidos) → vapor → turbinas → eletricidade OU uso direto (aquecimento residencial, industrial). Tipos: coletores planos (baixa temperatura), concentração solar (CSP - mirrors/lenses - alta temperatura, pode armazenar calor). Vantagem térmica: armazenamento térmico (geração noturna). Brasil: forte potencial (alta insolação Nordeste), crescimento fotovoltaico acelerado (GD, leilões).',
    difficulty: 'medium',
    topic: 'Energia e Sustentabilidade',
    examInfo: 'FCC - Energias renováveis'
  },
  {
    question: 'Baterias de íons de lítio (Li-ion) são amplamente utilizadas porque:',
    options: [
      'São as mais baratas de todas',
      'Oferecem alta densidade energética, recarga rápida, longa vida útil e leveza',
      'Nunca descarregam',
      'Não precisam de recarga'
    ],
    correctAnswer: 1,
    explanation: 'Baterias de ÍONS DE LÍTIO (Li-ion) são amplamente utilizadas (smartphones, laptops, carros elétricos - Tesla, notebooks) devido a: 1) ALTA DENSIDADE ENERGÉTICA (energia/peso e volume), 2) RECARGA RÁPIDA, 3) LONGA VIDA ÚTIL (centenas-milhares ciclos), 4) LEVEZA (lítio é metal mais leve), 5) Baixa autodescarga, 6) Sem efeito memória. Funcionamento: íons Li+ migram entre ânodo (grafite) e cátodo (óxidos metálicos - LiCoO₂, LiFePO₄) através de eletrólito. Nobel Química 2019: Goodenough, Whittingham, Yoshino (desenvolvimento Li-ion). Desafios: degradação, segurança (incêndio se danificadas), custo, mineração lítio/cobalto (impactos ambientais/sociais). Futuras: estado sólido, lítio-ar.',
    difficulty: 'medium',
    topic: 'Energia e Sustentabilidade',
    examInfo: 'CESPE - Armazenamento de energia'
  },
  {
    question: 'O hidrogênio verde é produzido através de:',
    options: [
      'Combustíveis fósseis',
      'Eletrólise da água usando eletricidade de fontes renováveis (solar, eólica), sem emissões de CO₂',
      'Queima de carvão',
      'Não existe hidrogênio verde'
    ],
    correctAnswer: 1,
    explanation: 'HIDROGÊNIO VERDE é produzido por ELETRÓLISE da ÁGUA (H₂O → H₂ + O₂) usando ELETRICIDADE de fontes RENOVÁVEIS (solar, eólica), resultando em ZERO EMISSÕES de CO₂. Diferenças: HIDROGÊNIO CINZA (reforma de metano/gás natural, emite CO₂ - 95% produção atual), AZUL (cinza + captura CO₂ - CCS), VERDE (100% limpo). Aplicações: 1) Transporte (veículos fuel cell - Toyota Mirai, caminhões, aviação), 2) Armazenamento energético (excedente renovável), 3) Indústria (siderurgia verde, amônia, refino). Desafios: custo elevado (eletrólise cara), eficiência (~70%), infraestrutura (transporte, armazenamento), escala. Potencial: descarbonizar setores difíceis. Alemanha, Chile, Austrália: investimentos massivos.',
    difficulty: 'hard',
    topic: 'Energia e Sustentabilidade',
    examInfo: 'FGV - Economia do hidrogênio'
  },
  {
    question: 'Smart grids (redes elétricas inteligentes) utilizam tecnologia digital para:',
    options: [
      'Apenas gerar mais energia',
      'Monitorar, controlar e otimizar produção/distribuição de energia em tempo real, integrando renováveis e demanda',
      'Desligar a eletricidade',
      'Não usam tecnologia'
    ],
    correctAnswer: 1,
    explanation: 'SMART GRIDS (redes elétricas INTELIGENTES) utilizam tecnologia DIGITAL (sensores, IoT, comunicação bidirecional, IA) para MONITORAR, CONTROLAR e OTIMIZAR produção, transmissão, distribuição e consumo de energia em TEMPO REAL. Benefícios: 1) INTEGRAÇÃO de renováveis (solar, eólica intermitentes), 2) Resposta à DEMANDA (DR - demand response: ajustar consumo), 3) Autodiagnóstico/autorrecuperação (reduz apagões), 4) Medição inteligente (smart meters - tarifas dinâmicas), 5) Veículos elétricos (V2G - vehicle-to-grid), 6) Eficiência, redução perdas. Componentes: AMI (Advanced Metering Infrastructure), SCADA, armazenamento (baterias). Países líderes: EUA, China, Europa. Brasil: projetos-piloto.',
    difficulty: 'hard',
    topic: 'Energia e Sustentabilidade',
    examInfo: 'CESPE - Infraestrutura energética inteligente'
  },
  {
    question: 'Economia circular, diferentemente do modelo linear, propõe:',
    options: [
      'Extrair, produzir e descartar',
      'Manter recursos em uso o maior tempo possível, recuperar e regenerar produtos/materiais, eliminando desperdício',
      'Aumentar o consumo descartável',
      'Não reciclar nunca'
    ],
    correctAnswer: 1,
    explanation: 'ECONOMIA CIRCULAR, ao contrário do modelo LINEAR tradicional (extrair → produzir → usar → descartar), propõe MANTER RECURSOS em USO pelo MAIOR TEMPO POSSÍVEL através de: 1) DESIGN para durabilidade, reparo, reuso, desmontagem, 2) CICLOS fechados: produtos retornam como matéria-prima (reciclagem, upcycling), 3) Modelos de negócio: produto-como-serviço (leasing), compartilhamento, 4) REGENERAÇÃO de sistemas naturais. Princípios: eliminar desperdício/poluição, circular produtos/materiais, regenerar natureza. Benefícios: reduz extração recursos, emissões, cria empregos verdes, resiliência econômica. Ellen MacArthur Foundation: referência global. União Europeia: Plano de Ação Economia Circular (2020). Exemplos: Patagonia (reparo), Interface (carpetes modulares), Philips (lighting-as-a-service).',
    difficulty: 'medium',
    topic: 'Energia e Sustentabilidade',
    examInfo: 'VUNESP - Sustentabilidade empresarial'
  }
];

// ============================================================================
// TEMA 8: PESQUISA CIENTÍFICA (5 questões)
// ============================================================================

const pesquisaCientificaQuestions: Question[] = [
  {
    question: 'O método científico é caracterizado por:',
    options: [
      'Crenças pessoais apenas',
      'Observação, formulação de hipóteses, experimentação, análise de dados e conclusões verificáveis',
      'Opiniões sem teste',
      'Não requer evidências'
    ],
    correctAnswer: 1,
    explanation: 'O MÉTODO CIENTÍFICO é processo sistemático de investigação caracterizado por: 1) OBSERVAÇÃO do fenômeno, 2) QUESTIONAMENTO, 3) Formulação de HIPÓTESE (explicação testável), 4) EXPERIMENTAÇÃO (testes controlados, variáveis independentes/dependentes), 5) COLETA e ANÁLISE DE DADOS (estatística), 6) CONCLUSÃO (aceita, rejeita ou refina hipótese), 7) REPRODUTIBILIDADE (outros cientistas podem replicar), 8) Revisão por PARES (peer review), 9) Publicação. Princípios: empirismo (baseado em evidências), falseabilidade (Popper - hipóteses devem ser refutáveis), objetividade, ceticismo. Diferença de pseudociência: não usa método rigoroso. Raízes: Bacon, Galileu, Newton. Dinâmico: teorias evoluem com novas evidências.',
    difficulty: 'medium',
    topic: 'Pesquisa Científica',
    examInfo: 'FCC - Metodologia científica'
  },
  {
    question: 'Revisão por pares (peer review) em publicações científicas serve para:',
    options: [
      'Apenas atrasar publicações',
      'Avaliar qualidade, rigor metodológico e validade de pesquisas por especialistas independentes antes da publicação',
      'Copiar trabalhos alheios',
      'Não tem utilidade'
    ],
    correctAnswer: 1,
    explanation: 'REVISÃO POR PARES (peer review) é processo de avaliação de manuscritos científicos por ESPECIALISTAS INDEPENDENTES (peers - colegas da mesma área) ANTES da publicação. Objetivos: 1) Avaliar QUALIDADE, 2) Verificar RIGOR METODOLÓGICO, 3) Checar VALIDADE das conclusões, 4) Detectar erros, viés, fraude, 5) Sugerir melhorias. Processo: submissão → editor seleciona revisores (geralmente 2-3, anônimos - single/double-blind) → revisores avaliam (aceitar, revisar, rejeitar) → autor responde → decisão final. Importância: filtro de qualidade (gatekeeping), legitimidade científica. Críticas: lentidão, viés (conservadorismo, conflitos interesse), nem sempre detecta fraudes. Alternativas: preprints (arXiv, bioRxiv), open peer review.',
    difficulty: 'hard',
    topic: 'Pesquisa Científica',
    examInfo: 'CESPE - Ética e publicação científica'
  },
  {
    question: 'Ensaios clínicos randomizados controlados (RCTs) são considerados o padrão-ouro para testar medicamentos porque:',
    options: [
      'São os mais baratos',
      'Minimizam viés através de randomização, grupo controle (placebo) e cegamento, estabelecendo causalidade',
      'Não precisam de voluntários',
      'Não seguem ética'
    ],
    correctAnswer: 1,
    explanation: 'ENSAIOS CLÍNICOS RANDOMIZADOS CONTROLADOS (RCTs - Randomized Controlled Trials) são PADRÃO-OURO para testar eficácia/segurança de medicamentos/tratamentos porque minimizam VIÉS: 1) RANDOMIZAÇÃO: participantes aleatoriamente alocados em grupo experimental (recebe tratamento) ou CONTROLE (placebo/tratamento padrão), elimina viés de seleção. 2) CEGAMENTO: simples-cego (paciente não sabe), duplo-cego (paciente+pesquisador não sabem - ideal), elimina viés de expectativa. 3) Grupo CONTROLE: permite comparação. Estabelece CAUSALIDADE (não apenas correlação). FASES: I (segurança, 20-100 voluntários), II (eficácia preliminar, ~100-300), III (eficácia em larga escala, milhares - aprovação), IV (pós-comercialização). Ética: consentimento informado, comitês (CEP).',
    difficulty: 'hard',
    topic: 'Pesquisa Científica',
    examInfo: 'FGV - Metodologia de pesquisa clínica'
  },
  {
    question: 'A Declaração de Helsinque (1964) estabelece princípios éticos para:',
    options: [
      'Comércio internacional',
      'Pesquisa médica envolvendo seres humanos, priorizando bem-estar do participante sobre interesses da ciência',
      'Apenas pesquisa animal',
      'Não tem relação com ética'
    ],
    correctAnswer: 1,
    explanation: 'A DECLARAÇÃO DE HELSINQUE (1964, Associação Médica Mundial - WMA, Finlândia) estabelece PRINCÍPIOS ÉTICOS fundamentais para PESQUISA MÉDICA envolvendo SERES HUMANOS. Princípios-chave: 1) BEM-ESTAR do participante tem PRIORIDADE sobre interesses da ciência/sociedade, 2) CONSENTIMENTO INFORMADO (voluntário, esclarecido), 3) Minimizar RISCOS, 4) Balanço risco/benefício favorável, 5) Comitês de ética independentes (aprovação), 6) VULNERÁVEIS (crianças, gestantes): proteções adicionais, 7) Acesso pós-estudo a tratamento eficaz, 8) Publicação de resultados (transparência). Contexto: resposta a abusos (experimentos nazistas, Tuskegee). Atualizada periodicamente (última: 2013). Base para regulações nacionais (Brasil: Resolução CNS 466/2012).',
    difficulty: 'medium',
    topic: 'Pesquisa Científica',
    examInfo: 'CESPE - Bioética'
  },
  {
    question: 'Big Data em pesquisa científica refere-se a:',
    options: [
      'Apenas computadores grandes',
      'Análise de conjuntos massivos de dados (volume, variedade, velocidade) para extrair padrões e insights',
      'Planilhas simples',
      'Não envolve dados'
    ],
    correctAnswer: 1,
    explanation: 'BIG DATA em pesquisa científica refere-se à análise de conjuntos MASSIVOS de DADOS caracterizados pelos 3 Vs (Gartner): 1) VOLUME (terabytes, petabytes, exabytes), 2) VARIEDADE (estruturados/não-estruturados: textos, imagens, vídeos, sensores), 3) VELOCIDADE (geração/processamento rápido, tempo real). Adicionais: Veracidade (qualidade), Valor. Técnicas: machine learning, mineração de dados, processamento paralelo (Hadoop, Spark), cloud computing. Aplicações científicas: 1) GENÔMICA (sequenciamento genoma, medicina personalizada), 2) ASTRONOMIA (telescópios - SKA, LSST), 3) Física de partículas (LHC - 30 petabytes/ano), 4) Clima/meteorologia, 5) Saúde pública (epidemiologia), 6) Ciências sociais (mídias sociais). Desafios: armazenamento, privacidade, interpretação.',
    difficulty: 'medium',
    topic: 'Pesquisa Científica',
    examInfo: 'VUNESP - Ciência de dados'
  }
];

// ============================================================================
// TEMA 9: DESCOBERTAS RECENTES (5 questões)
// ============================================================================

const descobertasRecentesQuestions: Question[] = [
  {
    question: 'A primeira imagem de um buraco negro, divulgada em 2019 pelo projeto Event Horizon Telescope, mostrou:',
    options: [
      'Um planeta distante',
      'O buraco negro supermassivo M87* no centro da galáxia M87, confirmando previsões da Relatividade Geral',
      'Uma estrela comum',
      'A Lua'
    ],
    correctAnswer: 1,
    explanation: 'Em abril de 2019, o projeto EVENT HORIZON TELESCOPE (EHT - rede global de radiotelescópios sincronizados, interferometria) divulgou a PRIMEIRA IMAGEM de um BURACO NEGRO: M87* (pronuncia-se "M87-estrela"), buraco negro SUPERMASSIVO (6,5 bilhões de massas solares) no centro da galáxia elíptica M87 (Messier 87), a 55 milhões de anos-luz. Imagem mostra: anel brilhante de luz (disco de acreção de gás superaquecido orbitando) ao redor de SOMBRA escura (horizonte de eventos + região onde luz é curvada). Confirmou previsões da RELATIVIDADE GERAL de Einstein. 2022: imagem de Sagittarius A* (buraco negro da Via Láctea). Nobel Física 2020: buracos negros. Colaboração: 300+ cientistas, 8 telescópios, 5 petabytes de dados.',
    difficulty: 'medium',
    topic: 'Descobertas Recentes',
    examInfo: 'CESPE - Astronomia observacional'
  },
  {
    question: 'As vacinas de RNA mensageiro (mRNA) contra COVID-19, desenvolvidas pela Pfizer/BioNTech e Moderna, funcionam:',
    options: [
      'Injetando vírus vivo',
      'Fornecendo instruções genéticas (mRNA) para células produzirem proteína spike do vírus, estimulando resposta imune',
      'Apenas com anticorpos prontos',
      'Não são vacinas reais'
    ],
    correctAnswer: 1,
    explanation: 'Vacinas de RNA MENSAGEIRO (mRNA) contra COVID-19 (Pfizer/BioNTech - Comirnaty, Moderna - Spikevax) funcionam fornecendo INSTRUÇÕES GENÉTICAS (mRNA sintético) para células humanas PRODUZIREM a proteína SPIKE do SARS-CoV-2, estimulando RESPOSTA IMUNE. Mecanismo: 1) mRNA encapsulado em nanopartículas lipídicas injetado no músculo, 2) Células absorvem mRNA, 3) Ribossomos traduzem mRNA → produzem proteína spike, 4) Sistema imune reconhece spike como estranho → produz ANTICORPOS e células T de memória, 5) mRNA degradado rapidamente (dias). NÃO altera DNA (não entra no núcleo). Vantagens: rápido desenvolvimento, seguro, eficaz (~95% inicial). Tecnologia revolucionária (décadas de pesquisa - Karikó, Weissman). Futuro: vacinas câncer, HIV, malária.',
    difficulty: 'hard',
    topic: 'Descobertas Recentes',
    examInfo: 'FGV - Biotecnologia de vacinas'
  },
  {
    question: 'A detecção de ondas gravitacionais pelo LIGO em 2015 confirmou:',
    options: [
      'Existência de maremotos',
      'Predição de Einstein sobre ondulações no espaço-tempo causadas por eventos cósmicos massivos (fusão de buracos negros)',
      'Terremotos espaciais',
      'Não tem importância científica'
    ],
    correctAnswer: 1,
    explanation: 'Em 14 de setembro de 2015, o LIGO (Laser Interferometer Gravitational-Wave Observatory, EUA - Hanford/Livingston) detectou pela primeira vez ONDAS GRAVITACIONAIS, confirmando predição de Albert Einstein (Relatividade Geral, 1916) feita 100 anos antes. Evento GW150914: FUSÃO de dois buracos negros (29 + 36 massas solares → 62, perda 3 massas solares convertidas em energia gravitacional) a 1,3 bilhão anos-luz. Ondas gravitacionais: ONDULAÇÕES no ESPAÇO-TEMPO propagando-se à velocidade da luz, causadas por eventos cósmicos massivos acelerados (fusões buracos negros, estrelas nêutrons, supernovas). NOBEL FÍSICA 2017: Weiss, Barish, Thorne. Nova astronomia: "ouvir" o universo (não apenas ver luz). Outras detecções: fusão estrelas nêutrons (2017, também luz).',
    difficulty: 'hard',
    topic: 'Descobertas Recentes',
    examInfo: 'CESPE - Física gravitacional'
  },
  {
    question: 'Em 2020, o rover Perseverance da NASA pousou em Marte com o objetivo de:',
    options: [
      'Apenas tirar fotos',
      'Buscar sinais de vida microbiana antiga, coletar amostras de rochas e testar produção de oxigênio (MOXIE)',
      'Construir uma base',
      'Não tem objetivos científicos'
    ],
    correctAnswer: 1,
    explanation: 'O rover PERSEVERANCE da NASA pousou em Marte em 18/02/2021 (Cratera Jezero, antigo lago) com objetivos: 1) BUSCAR SINAIS de VIDA MICROBIANA ANTIGA (biossinaturas em rochas sedimentares, carbonatos), 2) COLETAR e armazenar AMOSTRAS de rochas/solo (~30 tubos) para futura missão de retorno à Terra (Mars Sample Return - 2030s), 3) Caracterizar geologia/clima, 4) MOXIE (Mars Oxygen ISRU Experiment): produzir OXIGÊNIO a partir de CO₂ atmosférico (sucesso 2021 - ISRU: In-Situ Resource Utilization para futuras missões humanas), 5) Testar tecnologias (helicóptero INGENUITY - primeiro voo controlado em outro planeta, 19/04/2021, 100+ voos). Instrumentos: 23 câmeras, espectrômetros, radar subsuperficial. Busca por evidências passado habitável.',
    difficulty: 'medium',
    topic: 'Descobertas Recentes',
    examInfo: 'FCC - Exploração planetária'
  },
  {
    question: 'A edição genética de embriões humanos (experimento "bebês CRISPR" na China, 2018) gerou controvérsia porque:',
    options: [
      'Foi totalmente aceito',
      'Violou consenso científico/ético: riscos desconhecidos, alterações hereditárias, consentimento, eugenia',
      'Não teve consequências',
      'É prática comum'
    ],
    correctAnswer: 1,
    explanation: 'Em novembro 2018, cientista chinês He Jiankui anunciou nascimento de gêmeas (Lulu e Nana) com DNA editado via CRISPR em embriões (gene CCR5 desabilitado para resistência a HIV). CONTROVÉRSIA GLOBAL: 1) Violou MORATÓRIA internacional sobre edição germinativa (alterações transmitidas a descendentes), 2) RISCOS DESCONHECIDOS: efeitos off-target (mutações não-intencionais), consequências a longo prazo, 3) Não havia necessidade médica urgente (outras formas prevenir HIV), 4) CONSENTIMENTO questionável dos pais, 5) Falta de transparência/supervisão ética, 6) "Escorregadia ladeira" para EUGENIA (bebês sob medida, desigualdade). Cientista: condenado a 3 anos prisão (China, 2019), banido de pesquisa. Consenso: moratória deve continuar. Edição somática (adultos, não-hereditária): mais aceitável.',
    difficulty: 'hard',
    topic: 'Descobertas Recentes',
    examInfo: 'VUNESP - Bioética e CRISPR'
  }
];

// ============================================================================
// FUNÇÃO PARA SEED DE TODAS AS QUESTÕES DE CIÊNCIAS E TECNOLOGIA
// ============================================================================

export const seedAllCienciasTecnologiaQuestions = async () => {
  const allQuestions = [
    ...biologiaSaudeQuestions,
    ...fisicaQuimicaQuestions,
    ...astronomiaEspacoQuestions,
    ...inovacoesTecnologicasQuestions,
    ...inteligenciaArtificialQuestions,
    ...biotecnologiaQuestions,
    ...energiaSustentabilidadeQuestions,
    ...pesquisaCientificaQuestions,
    ...descobertasRecentesQuestions
  ];

  console.log(`🔬 Preparando ${allQuestions.length} questões de Ciências e Tecnologia para importação em lote...`);

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
