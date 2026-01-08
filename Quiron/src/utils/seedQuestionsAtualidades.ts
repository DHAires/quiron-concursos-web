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

const SUBJECT_SLUG = 'atualidades';
const SUBJECT_ID = '23';

// ============================================================================
// TEMA 1: POLÍTICA NACIONAL (5 questões)
// ============================================================================

const politicaNacionalQuestions: Question[] = [
  {
    question: 'O sistema de governo vigente no Brasil é:',
    options: [
      'Parlamentarismo',
      'Presidencialismo',
      'Monarquia Constitucional',
      'Semipresidencialismo'
    ],
    correctAnswer: 1,
    explanation: 'O Brasil adota o sistema presidencialista desde a Proclamação da República (1889), onde o Presidente acumula as funções de Chefe de Estado e Chefe de Governo.',
    difficulty: 'easy',
    topic: 'Política Nacional',
    examInfo: 'FCC - Sistema político brasileiro'
  },
  {
    question: 'Segundo a Constituição de 1988, o mandato do Presidente da República no Brasil é de:',
    options: [
      '4 anos, permitida uma reeleição consecutiva',
      '5 anos, sem possibilidade de reeleição',
      '6 anos, permitida uma reeleição',
      '4 anos, sem limite de reeleições'
    ],
    correctAnswer: 0,
    explanation: 'A Emenda Constitucional nº 16/1997 estabeleceu mandato de 4 anos com possibilidade de uma única reeleição consecutiva para Presidente, Governadores e Prefeitos.',
    difficulty: 'easy',
    topic: 'Política Nacional',
    examInfo: 'CESPE - Direito Constitucional aplicado'
  },
  {
    question: 'O Poder Legislativo federal brasileiro é exercido pelo Congresso Nacional, composto por:',
    options: [
      'Câmara dos Deputados apenas',
      'Senado Federal e Assembleia Legislativa',
      'Câmara dos Deputados e Senado Federal',
      'Câmara dos Vereadores e Senado'
    ],
    correctAnswer: 2,
    explanation: 'O Congresso Nacional é bicameral: Câmara dos Deputados (513 deputados federais, mandato 4 anos) e Senado Federal (81 senadores, mandato 8 anos).',
    difficulty: 'easy',
    topic: 'Política Nacional',
    examInfo: 'FGV - Estrutura dos Poderes'
  },
  {
    question: 'A PEC (Proposta de Emenda à Constituição) que ficou conhecida como "PEC da Transição" em 2022/2023 tinha como principal objetivo:',
    options: [
      'Aumentar o salário mínimo nacional',
      'Permitir gastos fora do teto para programas sociais',
      'Extinguir o Auxílio Brasil',
      'Reduzir a jornada de trabalho'
    ],
    correctAnswer: 1,
    explanation: 'A PEC da Transição (PEC 32/2022) permitiu que R$ 145 bilhões ficassem fora do teto de gastos em 2023, viabilizando o Bolsa Família de R$ 600 + R$ 150 por criança.',
    difficulty: 'hard',
    topic: 'Política Nacional',
    examInfo: 'VUNESP - Atualidades políticas recentes'
  },
  {
    question: 'Qual órgão é responsável por fiscalizar as contas públicas da União e auxiliar o Congresso Nacional?',
    options: [
      'Controladoria-Geral da União (CGU)',
      'Tribunal de Contas da União (TCU)',
      'Receita Federal',
      'Ministério Público Federal (MPF)'
    ],
    correctAnswer: 1,
    explanation: 'O TCU é tribunal administrativo que fiscaliza contas públicas federais, julga contas de gestores públicos e auxilia o Congresso no controle externo. A CGU faz controle interno.',
    difficulty: 'medium',
    topic: 'Política Nacional',
    examInfo: 'CESPE - Órgãos de controle'
  }
];

// ============================================================================
// TEMA 2: ECONOMIA BRASILEIRA (5 questões)
// ============================================================================

const economiaBrasileiraQuestions: Question[] = [
  {
    question: 'O IPCA (Índice Nacional de Preços ao Consumidor Amplo) é utilizado para medir:',
    options: [
      'O crescimento do PIB',
      'A inflação oficial do Brasil',
      'A taxa de desemprego',
      'A balança comercial'
    ],
    correctAnswer: 1,
    explanation: 'O IPCA, calculado pelo IBGE, é o índice oficial de inflação do Brasil e serve de referência para as metas de inflação estabelecidas pelo Banco Central.',
    difficulty: 'easy',
    topic: 'Economia Brasileira',
    examInfo: 'FCC - Indicadores econômicos'
  },
  {
    question: 'A taxa SELIC é definida pelo COPOM e representa:',
    options: [
      'A taxa básica de juros da economia brasileira',
      'O índice de inflação do governo',
      'A taxa de câmbio oficial',
      'O percentual de desemprego'
    ],
    correctAnswer: 0,
    explanation: 'A SELIC (Sistema Especial de Liquidação e Custódia) é a taxa básica de juros definida pelo COPOM (Comitê de Política Monetária do Banco Central) a cada 45 dias.',
    difficulty: 'easy',
    topic: 'Economia Brasileira',
    examInfo: 'FGV - Sistema financeiro nacional'
  },
  {
    question: 'O PIX, sistema de pagamentos instantâneos do Brasil, foi lançado em:',
    options: [
      'Janeiro de 2019',
      'Novembro de 2020',
      'Março de 2021',
      'Junho de 2018'
    ],
    correctAnswer: 1,
    explanation: 'O PIX foi lançado pelo Banco Central em 16 de novembro de 2020, permitindo transferências instantâneas 24h por dia, 7 dias por semana, revolucionando o sistema de pagamentos brasileiro.',
    difficulty: 'medium',
    topic: 'Economia Brasileira',
    examInfo: 'VUNESP - Inovações financeiras'
  },
  {
    question: 'A reforma tributária aprovada pelo Congresso Nacional em 2023 prevê a substituição de vários tributos por:',
    options: [
      'Um imposto único federal',
      'IVA dual (CBS federal + IBS estadual/municipal)',
      'Apenas o ICMS unificado',
      'Taxa única sobre transações'
    ],
    correctAnswer: 1,
    explanation: 'A Reforma Tributária (PEC 45/2019 e 110/2019) cria IVA dual: CBS (Contribuição sobre Bens e Serviços, federal) e IBS (Imposto sobre Bens e Serviços, estadual/municipal), substituindo PIS, Cofins, IPI, ICMS e ISS.',
    difficulty: 'hard',
    topic: 'Economia Brasileira',
    examInfo: 'CESPE - Reformas estruturais'
  },
  {
    question: 'O termo "estagflação" refere-se a:',
    options: [
      'Crescimento econômico com inflação controlada',
      'Estagnação econômica combinada com inflação alta',
      'Deflação com aumento do desemprego',
      'Crescimento acelerado do PIB'
    ],
    correctAnswer: 1,
    explanation: 'Estagflação é situação rara e preocupante onde há estagnação ou recessão econômica (baixo crescimento, alto desemprego) junto com inflação elevada, dificultando políticas econômicas.',
    difficulty: 'medium',
    topic: 'Economia Brasileira',
    examInfo: 'FCC - Conceitos econômicos'
  }
];

// ============================================================================
// TEMA 3: POLÍTICA INTERNACIONAL (5 questões)
// ============================================================================

const politicaInternacionalQuestions: Question[] = [
  {
    question: 'O BRICS é um grupo de países emergentes formado por:',
    options: [
      'Brasil, Rússia, Índia, China e Suécia',
      'Brasil, Rússia, Índia, China e África do Sul',
      'Brasil, Reino Unido, Itália, Canadá e Suíça',
      'Bélgica, Romênia, Irlanda, Croácia e Sérvia'
    ],
    correctAnswer: 1,
    explanation: 'BRICS: Brasil, Rússia, Índia, China e África do Sul (South Africa). Em 2024, foram convidados novos membros: Arábia Saudita, Argentina, Egito, Etiópia, Irã e Emirados Árabes Unidos.',
    difficulty: 'easy',
    topic: 'Política Internacional',
    examInfo: 'FGV - Blocos econômicos'
  },
  {
    question: 'A guerra entre Rússia e Ucrânia iniciou-se em fevereiro de 2022. Uma das principais causas do conflito foi:',
    options: [
      'Disputa por reservas de petróleo',
      'Expansão da OTAN para o Leste Europeu e questões territoriais',
      'Crise migratória na Europa',
      'Conflitos religiosos históricos'
    ],
    correctAnswer: 1,
    explanation: 'A invasão russa da Ucrânia (24/02/2022) teve como causas principais a expansão da OTAN, a anexação da Crimeia (2014), o conflito no Donbass e interesses geopolíticos russos na região.',
    difficulty: 'medium',
    topic: 'Política Internacional',
    examInfo: 'CESPE - Conflitos contemporâneos'
  },
  {
    question: 'O Acordo de Paris, tratado internacional sobre mudanças climáticas, foi assinado em:',
    options: [
      '2012 na Rio+20',
      '2015 na COP21',
      '2018 na COP24',
      '2021 na COP26'
    ],
    correctAnswer: 1,
    explanation: 'O Acordo de Paris foi adotado em 12/12/2015 durante a COP21, entrando em vigor em 2016. Seu objetivo é limitar o aquecimento global a menos de 2°C, preferencialmente 1,5°C.',
    difficulty: 'medium',
    topic: 'Política Internacional',
    examInfo: 'VUNESP - Meio ambiente global'
  },
  {
    question: 'Em 2023, a Inteligência Artificial ganhou destaque mundial com o lançamento público do:',
    options: [
      'Google AI',
      'ChatGPT (OpenAI)',
      'IBM Watson',
      'Apple Intelligence'
    ],
    correctAnswer: 1,
    explanation: 'O ChatGPT (lançado em nov/2022, massificado em 2023) da OpenAI revolucionou o debate sobre IA, levando gigantes de tecnologia a acelerarem desenvolvimentos em IA generativa (Google Bard/Gemini, Microsoft Copilot).',
    difficulty: 'easy',
    topic: 'Política Internacional',
    examInfo: 'FCC - Tecnologia e sociedade'
  },
  {
    question: 'A COP28, conferência do clima da ONU realizada em 2023, aconteceu em:',
    options: [
      'Glasgow, Reino Unido',
      'Sharm el-Sheikh, Egito',
      'Dubai, Emirados Árabes Unidos',
      'Paris, França'
    ],
    correctAnswer: 2,
    explanation: 'A COP28 foi realizada em Dubai (EAU) de 30/11 a 13/12/2023. Pela primeira vez, o acordo final mencionou explicitamente a "transição dos combustíveis fósseis".',
    difficulty: 'hard',
    topic: 'Política Internacional',
    examInfo: 'CESPE - Conferências internacionais'
  }
];

// ============================================================================
// TEMA 4: QUESTÕES SOCIAIS (5 questões)
// ============================================================================

const questoesSociaisQuestions: Question[] = [
  {
    question: 'O programa Bolsa Família, recriado em 2023, tem como principal objetivo:',
    options: [
      'Financiar moradias populares',
      'Combater a pobreza e a fome através de transferência direta de renda',
      'Oferecer bolsas de estudo universitário',
      'Criar empregos formais'
    ],
    correctAnswer: 1,
    explanation: 'O Bolsa Família (Lei 14.601/2023) substituiu o Auxílio Brasil, garantindo R$ 600 mínimos por família + R$ 150 por criança até 6 anos + benefícios adicionais, visando combater pobreza e fome.',
    difficulty: 'easy',
    topic: 'Questões Sociais',
    examInfo: 'FGV - Políticas sociais'
  },
  {
    question: 'A Lei nº 14.457/2022 instituiu o Programa Emprega + Mulheres, que visa:',
    options: [
      'Aumentar a participação feminina no mercado de trabalho',
      'Criar cotas para mulheres em universidades',
      'Garantir licença maternidade estendida',
      'Proibir discriminação salarial'
    ],
    correctAnswer: 0,
    explanation: 'O Emprega + Mulheres incentiva a inserção e permanência de mulheres no mercado de trabalho, com medidas como apoio à parentalidade, flexibilização, requalificação profissional e combate ao assédio.',
    difficulty: 'medium',
    topic: 'Questões Sociais',
    examInfo: 'VUNESP - Legislação trabalhista recente'
  },
  {
    question: 'A taxa de desemprego no Brasil é medida pela pesquisa:',
    options: [
      'IBGE IPCA',
      'PNAD Contínua (IBGE)',
      'DIEESE',
      'FGV Desemprego'
    ],
    correctAnswer: 1,
    explanation: 'A PNAD Contínua (Pesquisa Nacional por Amostra de Domicílios Contínua) do IBGE é a pesquisa oficial que mede a taxa de desocupação (desemprego) no Brasil trimestralmente.',
    difficulty: 'medium',
    topic: 'Questões Sociais',
    examInfo: 'FCC - Indicadores sociais'
  },
  {
    question: 'O fenômeno da "uberização do trabalho" refere-se a:',
    options: [
      'Aumento do transporte por aplicativo',
      'Precarização do trabalho através de plataformas digitais sem vínculos formais',
      'Modernização dos empregos tradicionais',
      'Crescimento do setor de tecnologia'
    ],
    correctAnswer: 1,
    explanation: 'Uberização é a crescente intermediação de trabalho por plataformas digitais (Uber, iFood, Rappi) onde trabalhadores atuam como "autônomos" sem direitos trabalhistas, gerando debate sobre precarização.',
    difficulty: 'hard',
    topic: 'Questões Sociais',
    examInfo: 'CESPE - Transformações do trabalho'
  },
  {
    question: 'O Sistema Único de Saúde (SUS) é baseado nos princípios de:',
    options: [
      'Universalidade, integralidade e equidade',
      'Privatização, eficiência e lucro',
      'Seletividade, fragmentação e exclusividade',
      'Regionalização, centralização e hierarquização apenas'
    ],
    correctAnswer: 0,
    explanation: 'O SUS tem princípios doutrinários: universalidade (saúde para todos), integralidade (atenção completa) e equidade (tratar desigualmente os desiguais). Princípios organizacionais: descentralização, regionalização, hierarquização e participação social.',
    difficulty: 'easy',
    topic: 'Questões Sociais',
    examInfo: 'FCC - Saúde pública'
  }
];

// ============================================================================
// TEMA 5: MEIO AMBIENTE E SUSTENTABILIDADE (5 questões)
// ============================================================================

const meioAmbienteQuestions: Question[] = [
  {
    question: 'O desmatamento na Amazônia brasileira em 2023:',
    options: [
      'Aumentou significativamente em relação a 2022',
      'Reduziu pela primeira vez em anos, segundo dados oficiais',
      'Manteve-se estável',
      'Foi completamente eliminado'
    ],
    correctAnswer: 1,
    explanation: 'Dados do INPE/PRODES mostraram queda de aproximadamente 50% no desmatamento da Amazônia em 2023 em relação a 2022, resultado de ações de fiscalização e políticas ambientais fortalecidas.',
    difficulty: 'medium',
    topic: 'Meio Ambiente e Sustentabilidade',
    examInfo: 'VUNESP - Amazônia e preservação'
  },
  {
    question: 'As energias renováveis incluem:',
    options: [
      'Carvão, petróleo e gás natural',
      'Solar, eólica, hidrelétrica e biomassa',
      'Nuclear e termelétrica',
      'Diesel e gasolina'
    ],
    correctAnswer: 1,
    explanation: 'Energias renováveis são aquelas provenientes de fontes naturais que se regeneram: solar (fotovoltaica), eólica (ventos), hidrelétrica (água), biomassa (matéria orgânica), geotérmica e maremotriz.',
    difficulty: 'easy',
    topic: 'Meio Ambiente e Sustentabilidade',
    examInfo: 'FCC - Matriz energética'
  },
  {
    question: 'A Conferência da ONU sobre Biodiversidade (COP15) realizada em 2022 estabeleceu como meta proteger até 2030:',
    options: [
      '10% das áreas terrestres e marinhas',
      '20% das florestas tropicais',
      '30% das áreas terrestres e marinhas do planeta',
      '50% da Amazônia'
    ],
    correctAnswer: 2,
    explanation: 'A COP15 (Montreal, 2022) aprovou o Marco Global de Biodiversidade Kunming-Montreal, com meta "30x30": proteger 30% das áreas terrestres, marinhas e costeiras até 2030.',
    difficulty: 'hard',
    topic: 'Meio Ambiente e Sustentabilidade',
    examInfo: 'CESPE - Acordos internacionais ambientais'
  },
  {
    question: 'O evento climático extremo conhecido como El Niño provoca no Brasil:',
    options: [
      'Secas no Sul e chuvas intensas no Nordeste',
      'Chuvas intensas no Sul e secas no Norte/Nordeste',
      'Frio extremo em todo território',
      'Calor uniforme no país'
    ],
    correctAnswer: 1,
    explanation: 'El Niño (aquecimento do Pacífico Equatorial) causa no Brasil: chuvas acima da média no Sul, secas e temperaturas elevadas no Norte/Nordeste, e impactos variados no Sudeste/Centro-Oeste.',
    difficulty: 'medium',
    topic: 'Meio Ambiente e Sustentabilidade',
    examInfo: 'FGV - Fenômenos climáticos'
  },
  {
    question: 'O conceito de "economia circular" propõe:',
    options: [
      'Aumentar a produção e o consumo continuamente',
      'Reduzir, reutilizar e reciclar recursos, minimizando desperdícios',
      'Centralizar a economia em grandes centros urbanos',
      'Eliminar totalmente a indústria'
    ],
    correctAnswer: 1,
    explanation: 'Economia circular é modelo que visa manter produtos, componentes e materiais em uso pelo maior tempo possível, contrastando com economia linear (extrair-produzir-descartar), através dos 3Rs: Reduzir, Reutilizar, Reciclar.',
    difficulty: 'medium',
    topic: 'Meio Ambiente e Sustentabilidade',
    examInfo: 'VUNESP - Sustentabilidade e desenvolvimento'
  }
];

// ============================================================================
// TEMA 6: CIÊNCIA E TECNOLOGIA (5 questões)
// ============================================================================

const cienciaTecnologiaQuestions: Question[] = [
  {
    question: 'A tecnologia 5G representa a quinta geração de redes móveis e oferece:',
    options: [
      'Mesma velocidade do 4G com mais alcance',
      'Maior velocidade, menor latência e mais conexões simultâneas',
      'Apenas melhor sinal em áreas rurais',
      'Tecnologia exclusiva para smartphones'
    ],
    correctAnswer: 1,
    explanation: 'O 5G oferece velocidades até 100x maiores que 4G, latência ultrabaixa (1ms), capacidade para conectar milhões de dispositivos simultaneamente, viabilizando IoT, carros autônomos, telemedicina.',
    difficulty: 'easy',
    topic: 'Ciência e Tecnologia',
    examInfo: 'FCC - Telecomunicações'
  },
  {
    question: 'Em 2023, o James Webb Space Telescope (telescópio espacial) revolucionou a astronomia ao:',
    options: [
      'Pousar em Marte',
      'Capturar imagens inéditas do universo profundo e primordial',
      'Descobrir água na Lua',
      'Estabelecer contato com vida alienígena'
    ],
    correctAnswer: 1,
    explanation: 'O James Webb (lançado em 2021, operacional desde 2022) captura luz infravermelha, permitindo ver galáxias formadas 200 milhões de anos após o Big Bang, exoplanetas, berçários estelares com detalhes sem precedentes.',
    difficulty: 'medium',
    topic: 'Ciência e Tecnologia',
    examInfo: 'CESPE - Astronomia e exploração espacial'
  },
  {
    question: 'A LGPD (Lei Geral de Proteção de Dados) brasileira, em vigor desde 2020, foi inspirada em legislação de qual região?',
    options: [
      'Estados Unidos',
      'China',
      'União Europeia (GDPR)',
      'Japão'
    ],
    correctAnswer: 2,
    explanation: 'A LGPD (Lei 13.709/2018) foi inspirada na GDPR (General Data Protection Regulation) europeia, estabelecendo regras sobre coleta, armazenamento, tratamento e compartilhamento de dados pessoais.',
    difficulty: 'medium',
    topic: 'Ciência e Tecnologia',
    examInfo: 'FGV - Legislação digital'
  },
  {
    question: 'O conceito de "Big Data" refere-se a:',
    options: [
      'Grandes empresas de tecnologia',
      'Arquivos de computador muito grandes',
      'Conjuntos massivos de dados que requerem análise computacional avançada',
      'Servidores físicos de grande porte'
    ],
    correctAnswer: 2,
    explanation: 'Big Data são conjuntos de dados extremamente grandes e complexos (volume, velocidade, variedade, veracidade, valor - 5Vs) que exigem ferramentas especializadas para captura, armazenamento, análise e visualização.',
    difficulty: 'easy',
    topic: 'Ciência e Tecnologia',
    examInfo: 'VUNESP - Conceitos de tecnologia'
  },
  {
    question: 'Em 2024, a computação quântica avançou significativamente. Seu diferencial é:',
    options: [
      'Processar informações usando qubits em superposição',
      'Ser mais barata que computadores tradicionais',
      'Funcionar sem energia elétrica',
      'Substituir completamente os computadores atuais'
    ],
    correctAnswer: 0,
    explanation: 'Computação quântica usa qubits que podem estar em superposição (0 e 1 simultaneamente) e emaranhamento quântico, permitindo resolver problemas complexos (criptografia, simulações moleculares) exponencialmente mais rápido.',
    difficulty: 'hard',
    topic: 'Ciência e Tecnologia',
    examInfo: 'CESPE - Tecnologias emergentes'
  }
];

// ============================================================================
// TEMA 7: CULTURA E ESPORTES (5 questões)
// ============================================================================

const culturaEsportesQuestions: Question[] = [
  {
    question: 'A Copa do Mundo FIFA 2022 foi sediada no(a):',
    options: [
      'Rússia',
      'Brasil',
      'Catar',
      'Alemanha'
    ],
    correctAnswer: 2,
    explanation: 'A Copa do Mundo 2022 foi realizada no Catar (nov-dez/2022), primeira no Oriente Médio e em fim de ano. A Argentina sagrou-se campeã vencendo a França nos pênaltis na final.',
    difficulty: 'easy',
    topic: 'Cultura e Esportes',
    examInfo: 'FCC - Grandes eventos esportivos'
  },
  {
    question: 'Simone Biles, ginasta norte-americana, destacou-se em 2023 por:',
    options: [
      'Aposentar-se definitivamente',
      'Retornar às competições e conquistar novos títulos mundiais',
      'Mudar de modalidade esportiva',
      'Tornar-se treinadora'
    ],
    correctAnswer: 1,
    explanation: 'Simone Biles retornou às competições em 2023 após pausa para cuidar da saúde mental, conquistando 4 medalhas de ouro no Mundial de Ginástica Artística em Antuérpia, totalizando 37 medalhas mundiais (recorde).',
    difficulty: 'medium',
    topic: 'Cultura e Esportes',
    examInfo: 'VUNESP - Esportes contemporâneos'
  },
  {
    question: 'O Prêmio Nobel de Literatura 2023 foi concedido ao escritor norueguês:',
    options: [
      'Haruki Murakami',
      'Jon Fosse',
      'Salman Rushdie',
      'Margaret Atwood'
    ],
    correctAnswer: 1,
    explanation: 'Jon Fosse recebeu o Nobel de Literatura 2023 "por suas peças inovadoras e prosa que dão voz ao indizível". É autor de cerca de 40 peças teatrais e diversos romances.',
    difficulty: 'hard',
    topic: 'Cultura e Esportes',
    examInfo: 'CESPE - Literatura e premiações'
  },
  {
    question: 'O movimento "Black Lives Matter" (Vidas Negras Importam) ganhou força mundial após:',
    options: [
      'Olimpíadas de 2020',
      'Morte de George Floyd nos EUA em 2020',
      'Copa do Mundo de 2022',
      'Pandemia de COVID-19'
    ],
    correctAnswer: 1,
    explanation: 'O movimento Black Lives Matter intensificou-se globalmente após a morte de George Floyd (25/05/2020) em Minneapolis, assassinado por policial, gerando protestos mundiais contra racismo e violência policial.',
    difficulty: 'easy',
    topic: 'Cultura e Esportes',
    examInfo: 'FGV - Movimentos sociais contemporâneos'
  },
  {
    question: 'O filme que venceu o Oscar de Melhor Filme em 2023 foi:',
    options: [
      'Top Gun: Maverick',
      'Avatar: O Caminho da Água',
      'Tudo em Todo Lugar ao Mesmo Tempo',
      'Os Fabelmans'
    ],
    correctAnswer: 2,
    explanation: '"Everything Everywhere All at Once" (Tudo em Todo Lugar ao Mesmo Tempo) venceu 7 Oscars em 2023, incluindo Melhor Filme, Direção, Atriz (Michelle Yeoh), Atriz Coadjuvante, Ator Coadjuvante, Roteiro Original e Montagem.',
    difficulty: 'medium',
    topic: 'Cultura e Esportes',
    examInfo: 'VUNESP - Cinema e premiações'
  }
];

// ============================================================================
// TEMA 8: SAÚDE PÚBLICA (5 questões)
// ============================================================================

const saudePublicaQuestions: Question[] = [
  {
    question: 'A pandemia de COVID-19 foi declarada pela OMS em:',
    options: [
      'Dezembro de 2019',
      'Março de 2020',
      'Janeiro de 2021',
      'Junho de 2020'
    ],
    correctAnswer: 1,
    explanation: 'A OMS (Organização Mundial da Saúde) declarou a COVID-19 como pandemia em 11 de março de 2020. A emergência de saúde pública internacional foi encerrada em maio de 2023.',
    difficulty: 'easy',
    topic: 'Saúde Pública',
    examInfo: 'FCC - Emergências sanitárias'
  },
  {
    question: 'As vacinas contra COVID-19 usadas no Brasil incluem tecnologias de:',
    options: [
      'Vírus vivo atenuado apenas',
      'Vírus inativado, vetor viral e RNAm',
      'Bactérias modificadas',
      'Apenas anticorpos monoclonais'
    ],
    correctAnswer: 1,
    explanation: 'Brasil usou: vírus inativado (CoronaVac/Sinovac), vetor viral (AstraZeneca/Oxford, Janssen), RNAm (Pfizer/BioNTech). Cada tecnologia usa estratégia diferente para estimular resposta imunológica.',
    difficulty: 'medium',
    topic: 'Saúde Pública',
    examInfo: 'CESPE - Imunização e vacinas'
  },
  {
    question: 'O Programa Nacional de Imunizações (PNI) do Brasil é reconhecido internacionalmente por:',
    options: [
      'Ser o maior programa público de vacinação do mundo',
      'Vacinar apenas população infantil',
      'Ser totalmente privatizado',
      'Atender apenas grandes cidades'
    ],
    correctAnswer: 0,
    explanation: 'O PNI (criado em 1973) é um dos maiores e mais bem-sucedidos programas públicos de vacinação, oferecendo gratuitamente mais de 300 milhões de doses/ano de diversas vacinas para toda população.',
    difficulty: 'easy',
    topic: 'Saúde Pública',
    examInfo: 'FGV - Políticas de saúde'
  },
  {
    question: 'A Mpox (anteriormente varíola dos macacos) foi declarada emergência de saúde pública internacional pela OMS em:',
    options: [
      '2020',
      '2021',
      '2022',
      '2024'
    ],
    correctAnswer: 2,
    explanation: 'A Mpox foi declarada emergência de saúde pública internacional em julho de 2022 devido ao surto global. Em agosto de 2024, nova declaração foi feita devido a surto de cepa mais virulenta na África.',
    difficulty: 'hard',
    topic: 'Saúde Pública',
    examInfo: 'VUNESP - Doenças emergentes'
  },
  {
    question: 'A obesidade é considerada pela OMS:',
    options: [
      'Apenas um problema estético',
      'Epidemia global e fator de risco para doenças crônicas',
      'Condição sem relevância para saúde pública',
      'Exclusivamente problema genético'
    ],
    correctAnswer: 1,
    explanation: 'A OMS considera obesidade epidemia global (afeta mais de 650 milhões de adultos), fator de risco para diabetes tipo 2, doenças cardiovasculares, câncer e outras condições crônicas.',
    difficulty: 'easy',
    topic: 'Saúde Pública',
    examInfo: 'FCC - Doenças crônicas não transmissíveis'
  }
];

// ============================================================================
// TEMA 9: SEGURANÇA PÚBLICA (5 questões)
// ============================================================================

const segurancaPublicaQuestions: Question[] = [
  {
    question: 'O Sistema Único de Segurança Pública (SUSP) foi criado para:',
    options: [
      'Militarizar toda a segurança pública',
      'Integrar ações de segurança entre União, Estados e Municípios',
      'Privatizar serviços policiais',
      'Eliminar polícias estaduais'
    ],
    correctAnswer: 1,
    explanation: 'O SUSP (Lei 13.675/2018) visa integrar e coordenar ações de segurança pública entre União, Estados, Distrito Federal e Municípios, promovendo cooperação e eficiência no combate à criminalidade.',
    difficulty: 'medium',
    topic: 'Segurança Pública',
    examInfo: 'CESPE - Sistema de segurança'
  },
  {
    question: 'No Brasil, a investigação de crimes é atribuição principal da:',
    options: [
      'Polícia Militar',
      'Polícia Civil (Polícia Judiciária)',
      'Guarda Municipal',
      'Força Nacional'
    ],
    correctAnswer: 1,
    explanation: 'A Polícia Civil exerce função de polícia judiciária, investigando crimes (exceto militares) e apurando infrações penais. A Polícia Federal investiga crimes contra a União, interestaduais e internacionais.',
    difficulty: 'easy',
    topic: 'Segurança Pública',
    examInfo: 'FCC - Atribuições policiais'
  },
  {
    question: 'A Lei 13.964/2019, conhecida como "Pacote Anticrime", introduziu mudanças como:',
    options: [
      'Fim da prisão em flagrante',
      'Excludente de ilicitude para agentes de segurança e endurecimento de penas',
      'Descriminalização de todos os delitos',
      'Extinção do Ministério Público'
    ],
    correctAnswer: 1,
    explanation: 'O Pacote Anticrime (Lei 13.964/2019) trouxe mudanças: excludente de ilicitude (legítima defesa) para agentes de segurança, endurecimento de penas para corrupção e crimes violentos, plea bargain, juiz de garantias.',
    difficulty: 'hard',
    topic: 'Segurança Pública',
    examInfo: 'FGV - Legislação penal recente'
  },
  {
    question: 'Os crimes cibernéticos (crimes digitais) são investigados no Brasil principalmente pela:',
    options: [
      'Polícia Rodoviária Federal',
      'Polícia Federal e Polícias Civis (Delegacias especializadas)',
      'Guarda Civil',
      'Exército'
    ],
    correctAnswer: 1,
    explanation: 'Crimes cibernéticos são investigados pela Polícia Federal (quando há interesse da União ou natureza interestadual/internacional) e por Delegacias de Repressão aos Crimes Informáticos das Polícias Civis estaduais.',
    difficulty: 'medium',
    topic: 'Segurança Pública',
    examInfo: 'VUNESP - Crimes digitais'
  },
  {
    question: 'A Lei Maria da Penha (Lei 11.340/2006) criou mecanismos para:',
    options: [
      'Coibir e prevenir violência doméstica e familiar contra a mulher',
      'Regulamentar guarda de crianças',
      'Estabelecer pensão alimentícia',
      'Definir direitos trabalhistas'
    ],
    correctAnswer: 0,
    explanation: 'A Lei Maria da Penha criou mecanismos de proteção à mulher em situação de violência doméstica: medidas protetivas, atendimento especializado, agravamento de penas, assistência integral à vítima.',
    difficulty: 'easy',
    topic: 'Segurança Pública',
    examInfo: 'FCC - Legislação protetiva'
  }
];

// ============================================================================
// FUNÇÃO PARA SEED DE TODAS AS QUESTÕES DE ATUALIDADES
// ============================================================================

export const seedAllAtualidadesQuestions = async () => {
  const allQuestions = [
    ...politicaNacionalQuestions,
    ...economiaBrasileiraQuestions,
    ...politicaInternacionalQuestions,
    ...questoesSociaisQuestions,
    ...meioAmbienteQuestions,
    ...cienciaTecnologiaQuestions,
    ...culturaEsportesQuestions,
    ...saudePublicaQuestions,
    ...segurancaPublicaQuestions
  ];

  console.log(`📰 Preparando ${allQuestions.length} questões de Atualidades para importação em lote...`);

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
