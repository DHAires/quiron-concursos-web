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

const SUBJECT_SLUG = 'historia-do-brasil';
const SUBJECT_ID = '24';

// ============================================================================
// TEMA 1: BRASIL COLÔNIA (5 questões)
// ============================================================================

const brasilColoniaQuestions: Question[] = [
  {
    question: 'O Tratado de Tordesilhas, assinado em 1494, estabeleceu:',
    options: [
      'A divisão das terras descobertas entre Portugal e França',
      'A divisão das terras descobertas entre Espanha e Portugal',
      'A independência do Brasil',
      'O fim da escravidão nas colônias'
    ],
    correctAnswer: 1,
    explanation: 'O Tratado de Tordesilhas (1494) dividiu as terras do Novo Mundo entre Portugal e Espanha através de uma linha imaginária a 370 léguas a oeste de Cabo Verde. Terras a leste pertenceriam a Portugal (incluindo o Brasil), e a oeste à Espanha.',
    difficulty: 'easy',
    topic: 'Brasil Colônia',
    examInfo: 'FCC - História do Brasil Colonial'
  },
  {
    question: 'As Capitanias Hereditárias foram criadas por Portugal com o objetivo de:',
    options: [
      'Democratizar a administração colonial',
      'Delegar a colonização a particulares devido à falta de recursos da Coroa',
      'Acabar com o tráfico negreiro',
      'Promover a independência das colônias'
    ],
    correctAnswer: 1,
    explanation: 'Em 1534, Dom João III criou as Capitanias Hereditárias dividindo o Brasil em 15 lotes entregues a donatários. O objetivo era colonizar o território sem custos diretos para a Coroa portuguesa. Apenas duas tiveram sucesso: Pernambuco e São Vicente.',
    difficulty: 'medium',
    topic: 'Brasil Colônia',
    examInfo: 'CESPE - Administração colonial'
  },
  {
    question: 'A Guerra dos Mascates (1710-1711) em Pernambuco foi um conflito entre:',
    options: [
      'Indígenas e colonizadores portugueses',
      'Senhores de engenho de Olinda e comerciantes portugueses de Recife',
      'Escravos revoltados e senhores de engenho',
      'Holandeses e portugueses'
    ],
    correctAnswer: 1,
    explanation: 'A Guerra dos Mascates opôs a aristocracia rural de Olinda (decadente) aos comerciantes portugueses de Recife (em ascensão), chamados pejorativamente de "mascates". O conflito refletia disputas políticas e econômicas locais.',
    difficulty: 'hard',
    topic: 'Brasil Colônia',
    examInfo: 'FGV - Conflitos coloniais'
  },
  {
    question: 'Os Quilombos eram:',
    options: [
      'Aldeias indígenas protegidas por jesuítas',
      'Comunidades formadas por escravos fugidos',
      'Fazendas de café do século XIX',
      'Fortificações militares portuguesas'
    ],
    correctAnswer: 1,
    explanation: 'Quilombos eram comunidades formadas por escravos fugidos durante o período colonial e imperial. O mais famoso foi o Quilombo dos Palmares (1605-1694), liderado por Zumbi. Representavam resistência à escravidão.',
    difficulty: 'easy',
    topic: 'Brasil Colônia',
    examInfo: 'VUNESP - Escravidão e resistência'
  },
  {
    question: 'A Inconfidência Mineira (1789) teve como principal motivação:',
    options: [
      'A abolição da escravatura',
      'A insatisfação com os impostos e a derrama, além de ideais iluministas',
      'A unificação territorial do Brasil',
      'A expulsão dos jesuítas'
    ],
    correctAnswer: 1,
    explanation: 'A Inconfidência Mineira foi movimento separatista motivado pelos altos impostos (especialmente o quinto do ouro), ameaça da derrama (cobrança de dívidas atrasadas) e influência de ideais iluministas. Tiradentes foi executado em 1792.',
    difficulty: 'medium',
    topic: 'Brasil Colônia',
    examInfo: 'FCC - Movimentos de independência'
  }
];

// ============================================================================
// TEMA 2: BRASIL IMPÉRIO (5 questões)
// ============================================================================

const brasilImperioQuestions: Question[] = [
  {
    question: 'A Independência do Brasil foi proclamada por Dom Pedro I em:',
    options: [
      '7 de setembro de 1822',
      '15 de novembro de 1889',
      '21 de abril de 1792',
      '13 de maio de 1888'
    ],
    correctAnswer: 0,
    explanation: 'Dom Pedro I proclamou a independência do Brasil em 7 de setembro de 1822 às margens do rio Ipiranga, em São Paulo. O processo foi relativamente pacífico, diferente das independências hispano-americanas.',
    difficulty: 'easy',
    topic: 'Brasil Império',
    examInfo: 'FCC - Independência do Brasil'
  },
  {
    question: 'O Período Regencial (1831-1840) caracterizou-se por:',
    options: [
      'Grande estabilidade política e crescimento econômico',
      'Instabilidade política e diversas revoltas regionais',
      'Expansão territorial significativa',
      'Abolição imediata da escravidão'
    ],
    correctAnswer: 1,
    explanation: 'O Período Regencial foi marcado por grave instabilidade política devido à menoridade de Dom Pedro II. Ocorreram revoltas como Cabanagem (PA), Sabinada (BA), Balaiada (MA), Farroupilha (RS/SC), refletindo tensões sociais e regionais.',
    difficulty: 'medium',
    topic: 'Brasil Império',
    examInfo: 'CESPE - Período Regencial'
  },
  {
    question: 'A Guerra do Paraguai (1864-1870) foi o maior conflito armado da América do Sul e teve como consequência para o Brasil:',
    options: [
      'O fortalecimento político do Exército brasileiro',
      'A anexação do Paraguai ao território brasileiro',
      'O fim imediato da monarquia',
      'A abolição da escravatura'
    ],
    correctAnswer: 0,
    explanation: 'A Guerra do Paraguai (Tríplice Aliança: Brasil, Argentina, Uruguai × Paraguai) fortaleceu politicamente o Exército brasileiro, que passou a questionar a monarquia e a escravidão, contribuindo para a Proclamação da República (1889).',
    difficulty: 'hard',
    topic: 'Brasil Império',
    examInfo: 'FGV - Guerra do Paraguai'
  },
  {
    question: 'A Lei Áurea, que aboliu a escravidão no Brasil, foi assinada em:',
    options: [
      '1850 pela Princesa Isabel',
      '1871 por Dom Pedro II',
      '13 de maio de 1888 pela Princesa Isabel',
      '1889 após a Proclamação da República'
    ],
    correctAnswer: 2,
    explanation: 'A Lei Áurea foi assinada pela Princesa Isabel em 13 de maio de 1888, abolindo definitivamente a escravidão no Brasil. Foi precedida pela Lei do Ventre Livre (1871) e Lei dos Sexagenários (1885). O Brasil foi o último país das Américas a abolir a escravidão.',
    difficulty: 'easy',
    topic: 'Brasil Império',
    examInfo: 'VUNESP - Abolição da escravatura'
  },
  {
    question: 'A crise do Império brasileiro teve entre suas causas:',
    options: [
      'Questão religiosa, questão militar, questão republicana e abolição sem indenização',
      'Invasões estrangeiras e guerras civis',
      'Crise econômica do açúcar apenas',
      'Conflitos com a Inglaterra'
    ],
    correctAnswer: 0,
    explanation: 'A crise do Império decorreu de: Questão Religiosa (conflito Estado-Igreja, 1872-75), Questão Militar (descontentamento do Exército), crescimento do movimento republicano e abolição sem indenização (descontentando fazendeiros). Culminou na Proclamação da República (15/11/1889).',
    difficulty: 'medium',
    topic: 'Brasil Império',
    examInfo: 'FCC - Crise do Império'
  }
];

// ============================================================================
// TEMA 3: PRIMEIRA REPÚBLICA (5 questões)
// ============================================================================

const primeiraRepublicaQuestions: Question[] = [
  {
    question: 'A Proclamação da República brasileira ocorreu em:',
    options: [
      '7 de setembro de 1822',
      '13 de maio de 1888',
      '15 de novembro de 1889',
      '3 de outubro de 1930'
    ],
    correctAnswer: 2,
    explanation: 'A República foi proclamada em 15 de novembro de 1889 pelo Marechal Deodoro da Fonseca. Foi um golpe militar que derrubou Dom Pedro II, instaurando o regime republicano federalista. A família imperial foi exilada.',
    difficulty: 'easy',
    topic: 'Primeira República',
    examInfo: 'FCC - Proclamação da República'
  },
  {
    question: 'A política do "café com leite" durante a República Velha (1894-1930) referia-se:',
    options: [
      'À exportação de café e leite para a Europa',
      'À alternância de poder entre oligarquias de São Paulo (café) e Minas Gerais (leite)',
      'A um programa de alimentação popular',
      'A tratados comerciais internacionais'
    ],
    correctAnswer: 1,
    explanation: 'A política do "café com leite" foi acordo entre oligarquias de São Paulo (produtores de café) e Minas Gerais (produtores de leite) para alternarem-se na presidência, controlando o governo federal durante a República Velha (1894-1930).',
    difficulty: 'medium',
    topic: 'Primeira República',
    examInfo: 'CESPE - República Velha'
  },
  {
    question: 'A Revolta da Vacina (1904) no Rio de Janeiro foi motivada por:',
    options: [
      'Obrigatoriedade da vacinação contra varíola imposta por Oswaldo Cruz',
      'Falta de vacinas para a população',
      'Epidemia de febre amarela',
      'Aumento dos impostos sobre medicamentos'
    ],
    correctAnswer: 0,
    explanation: 'A Revolta da Vacina (nov/1904) foi reação popular à lei de vacinação obrigatória contra varíola, imposta por Oswaldo Cruz durante reforma sanitária de Rodrigues Alves. Houve resistência devido à falta de informação e ao autoritarismo da medida.',
    difficulty: 'medium',
    topic: 'Primeira República',
    examInfo: 'FGV - Revoltas urbanas'
  },
  {
    question: 'A Semana de Arte Moderna de 1922 em São Paulo:',
    options: [
      'Foi um movimento político revolucionário',
      'Marcou a renovação artística e cultural brasileira, rompendo com padrões acadêmicos',
      'Teve como objetivo restaurar a monarquia',
      'Foi uma exposição de arte europeia'
    ],
    correctAnswer: 1,
    explanation: 'A Semana de Arte Moderna (13-17 fev/1922) no Teatro Municipal de SP reuniu artistas como Mário de Andrade, Oswald de Andrade, Anita Malfatti, Di Cavalcanti, Villa-Lobos. Rompeu com academicismo, valorizando cultura nacional e vanguardas europeias.',
    difficulty: 'easy',
    topic: 'Primeira República',
    examInfo: 'VUNESP - Cultura brasileira'
  },
  {
    question: 'A Revolução de 1930, que pôs fim à República Velha, foi liderada por:',
    options: [
      'Getúlio Vargas',
      'Marechal Deodoro da Fonseca',
      'Juscelino Kubitschek',
      'Washington Luís'
    ],
    correctAnswer: 0,
    explanation: 'A Revolução de 1930 foi movimento armado liderado por Getúlio Vargas (RS), apoiado por Minas Gerais e Paraíba, que depôs Washington Luís, impediu a posse de Júlio Prestes e encerrou a República Velha, iniciando a Era Vargas.',
    difficulty: 'easy',
    topic: 'Primeira República',
    examInfo: 'FCC - Revolução de 1930'
  }
];

// ============================================================================
// TEMA 4: ERA VARGAS (5 questões)
// ============================================================================

const eraVargasQuestions: Question[] = [
  {
    question: 'A Era Vargas (1930-1945 e 1951-1954) pode ser dividida em três fases principais:',
    options: [
      'Governo Provisório, Governo Constitucional e Estado Novo',
      'República Velha, Nova República e Ditadura',
      'Primeiro Império, Segundo Império e República',
      'Regência, Monarquia e República'
    ],
    correctAnswer: 0,
    explanation: 'A Era Vargas dividiu-se em: Governo Provisório (1930-34, sem constituição), Governo Constitucional (1934-37, com Constituição de 1934) e Estado Novo (1937-45, regime ditatorial). Retornou democraticamente (1951-54).',
    difficulty: 'medium',
    topic: 'Era Vargas',
    examInfo: 'CESPE - Era Vargas'
  },
  {
    question: 'A Consolidação das Leis do Trabalho (CLT) foi criada em 1943 durante o governo Vargas e representou:',
    options: [
      'A proibição do trabalho no Brasil',
      'A unificação e sistematização das leis trabalhistas brasileiras',
      'O fim dos sindicatos',
      'A privatização das empresas estatais'
    ],
    correctAnswer: 1,
    explanation: 'A CLT (Decreto-Lei 5.452/1943) consolidou e sistematizou as leis trabalhistas: jornada de 8h, férias remuneradas, salário mínimo, direitos previdenciários, regulamentação do trabalho feminino e infantil. Foi marco dos direitos trabalhistas no Brasil.',
    difficulty: 'easy',
    topic: 'Era Vargas',
    examInfo: 'FCC - Legislação trabalhista'
  },
  {
    question: 'O Estado Novo (1937-1945) caracterizou-se por:',
    options: [
      'Regime democrático e pluripartidarismo',
      'Regime ditatorial, centralização política e censura',
      'Monarquia constitucional',
      'Anarquismo e ausência de governo'
    ],
    correctAnswer: 1,
    explanation: 'O Estado Novo foi regime ditatorial de Vargas: Constituição outorgada (1937), Congresso fechado, partidos extintos, censura (DIP - Departamento de Imprensa e Propaganda), centralização, nacionalismo, intervencionismo econômico. Terminou em 1945.',
    difficulty: 'medium',
    topic: 'Era Vargas',
    examInfo: 'FGV - Estado Novo'
  },
  {
    question: 'Durante a Era Vargas, foi criada a Companhia Siderúrgica Nacional (CSN) em Volta Redonda (1941), que representou:',
    options: [
      'O início da industrialização de base no Brasil',
      'A privatização da indústria nacional',
      'O fim da produção agrícola',
      'A importação de aço dos EUA'
    ],
    correctAnswer: 0,
    explanation: 'A CSN (1941, inaugurada em 1946) foi marco da industrialização brasileira, especialmente da indústria de base. Resultado de negociações com EUA durante II Guerra Mundial, simbolizou o projeto desenvolvimentista de Vargas.',
    difficulty: 'medium',
    topic: 'Era Vargas',
    examInfo: 'VUNESP - Industrialização brasileira'
  },
  {
    question: 'Getúlio Vargas suicidou-se em 24 de agosto de 1954. Sua carta-testamento afirmava:',
    options: [
      'Apoio total aos militares',
      'Ser vítima de uma "campanha subterrânea" e sair "da vida para entrar na história"',
      'Renúncia voluntária ao cargo',
      'Convocação de novas eleições'
    ],
    correctAnswer: 1,
    explanation: 'Na carta-testamento, Vargas denunciou "forças ocultas" e "campanha subterrânea", declarando: "Saio da vida para entrar na história". Seu suicídio causou comoção nacional e manifestações populares contra opositores.',
    difficulty: 'hard',
    topic: 'Era Vargas',
    examInfo: 'FCC - Crise política de 1954'
  }
];

// ============================================================================
// TEMA 5: DITADURA MILITAR (5 questões)
// ============================================================================

const ditaduraMilitarQuestions: Question[] = [
  {
    question: 'O Golpe Militar que instaurou a Ditadura no Brasil ocorreu em:',
    options: [
      '13 de dezembro de 1968',
      '31 de março de 1964',
      '15 de novembro de 1889',
      '1º de abril de 1964'
    ],
    correctAnswer: 1,
    explanation: 'O Golpe Militar ocorreu em 31 de março de 1964, depondo o presidente João Goulart. Militares assumiram o poder alegando combater o comunismo e restaurar a ordem. A ditadura durou 21 anos (1964-1985).',
    difficulty: 'easy',
    topic: 'Ditadura Militar',
    examInfo: 'FCC - Golpe de 1964'
  },
  {
    question: 'O Ato Institucional nº 5 (AI-5), decretado em 13 de dezembro de 1968, foi o mais autoritário porque:',
    options: [
      'Estabeleceu eleições diretas',
      'Deu poderes absolutos ao presidente, permitindo fechar o Congresso e cassar direitos políticos',
      'Criou a Constituição de 1988',
      'Acabou com a censura'
    ],
    correctAnswer: 1,
    explanation: 'O AI-5 (13/12/1968) foi o mais duro instrumento da ditadura: permitiu ao presidente fechar o Congresso, intervir em estados/municípios, cassar mandatos, suspender direitos políticos e habeas corpus. Iniciou os "anos de chumbo".',
    difficulty: 'medium',
    topic: 'Ditadura Militar',
    examInfo: 'CESPE - Atos Institucionais'
  },
  {
    question: 'O movimento "Diretas Já" (1983-1984) reivindicava:',
    options: [
      'O retorno das eleições diretas para presidente',
      'A manutenção da ditadura militar',
      'A criação de novos impostos',
      'A privatização das estatais'
    ],
    correctAnswer: 0,
    explanation: 'O movimento "Diretas Já" (1983-84) foi campanha popular pela aprovação da Emenda Dante de Oliveira, que restabeleceria eleições diretas para presidente. Apesar de massivo apoio popular, a emenda foi rejeitada no Congresso (25/04/1984).',
    difficulty: 'easy',
    topic: 'Ditadura Militar',
    examInfo: 'FGV - Redemocratização'
  },
  {
    question: 'O "milagre econômico brasileiro" (1968-1973) caracterizou-se por:',
    options: [
      'Alto crescimento do PIB, mas com aumento da dívida externa e concentração de renda',
      'Distribuição igualitária de renda e redução da pobreza',
      'Recessão econômica profunda',
      'Independência econômica total'
    ],
    correctAnswer: 0,
    explanation: 'O "milagre econômico" (gov. Médici) teve crescimento do PIB acima de 10% ao ano, mas aumentou dívida externa, inflação e concentração de renda. Slogan: "Brasil, ame-o ou deixe-o". Crise do petróleo (1973) encerrou o período.',
    difficulty: 'hard',
    topic: 'Ditadura Militar',
    examInfo: 'VUNESP - Economia durante ditadura'
  },
  {
    question: 'A Lei da Anistia (1979) durante o governo Figueiredo:',
    options: [
      'Anistiou apenas presos políticos',
      'Anistiou crimes políticos de oposição e também agentes da repressão',
      'Manteve todos os presos políticos na cadeia',
      'Foi rejeitada pelo Congresso'
    ],
    correctAnswer: 1,
    explanation: 'A Lei da Anistia (28/08/1979) foi "ampla, geral e irrestrita", beneficiando opositores da ditadura, mas também agentes de repressão acusados de tortura e assassinatos. Debate sobre revisão da lei persiste até hoje.',
    difficulty: 'medium',
    topic: 'Ditadura Militar',
    examInfo: 'FCC - Transição democrática'
  }
];

// ============================================================================
// TEMA 6: REDEMOCRATIZAÇÃO (5 questões)
// ============================================================================

const redemocratizacaoQuestions: Question[] = [
  {
    question: 'A Constituição Federal de 1988, conhecida como "Constituição Cidadã", foi promulgada durante o governo:',
    options: [
      'José Sarney',
      'Fernando Collor',
      'Itamar Franco',
      'Fernando Henrique Cardoso'
    ],
    correctAnswer: 0,
    explanation: 'A Constituição de 1988 foi promulgada em 5 de outubro durante o governo José Sarney. Ulysses Guimarães a chamou de "Constituição Cidadã" por garantir amplos direitos sociais, políticos e individuais após 21 anos de ditadura.',
    difficulty: 'easy',
    topic: 'Redemocratização',
    examInfo: 'CESPE - Constituição de 1988'
  },
  {
    question: 'Fernando Collor de Mello, eleito em 1989, sofreu impeachment em 1992 por:',
    options: [
      'Golpe militar',
      'Acusações de corrupção (esquema PC Farias)',
      'Crise econômica internacional',
      'Renúncia voluntária'
    ],
    correctAnswer: 1,
    explanation: 'Collor sofreu impeachment (1992) por acusações de corrupção envolvendo seu tesoureiro Paulo César Farias (PC Farias). Movimento "Caras Pintadas" pressionou. Collor renunciou horas antes da votação final, mas teve direitos políticos suspensos por 8 anos.',
    difficulty: 'medium',
    topic: 'Redemocratização',
    examInfo: 'FGV - Impeachment de Collor'
  },
  {
    question: 'O Plano Real, implementado em 1994 durante o governo Itamar Franco, teve como principal objetivo:',
    options: [
      'Aumentar a inflação',
      'Estabilizar a economia e controlar a hiperinflação',
      'Privatizar todas as empresas estatais',
      'Aumentar a dívida externa'
    ],
    correctAnswer: 1,
    explanation: 'O Plano Real (1994), conduzido pelo ministro Fernando Henrique Cardoso, combateu a hiperinflação através da URV (Unidade Real de Valor) e criação do Real. Trouxe estabilidade econômica e foi fundamental para eleição de FHC em 1994.',
    difficulty: 'easy',
    topic: 'Redemocratização',
    examInfo: 'FCC - Plano Real'
  },
  {
    question: 'Durante os governos de Fernando Henrique Cardoso (1995-2002), ocorreu:',
    options: [
      'Amplo programa de privatizações de empresas estatais',
      'Nacionalização da economia',
      'Fim do sistema presidencialista',
      'Retorno à ditadura militar'
    ],
    correctAnswer: 0,
    explanation: 'FHC implementou amplo programa de privatizações: Vale do Rio Doce, Sistema Telebrás, setor elétrico, entre outros. Também criou agências reguladoras (ANATEL, ANEEL, ANP), reformas constitucionais e programas sociais (Bolsa Escola).',
    difficulty: 'medium',
    topic: 'Redemocratização',
    examInfo: 'VUNESP - Governo FHC'
  },
  {
    question: 'A eleição de Luiz Inácio Lula da Silva em 2002 representou:',
    options: [
      'A primeira vitória de um candidato de esquerda e origem operária à presidência',
      'Continuidade total do governo anterior',
      'Retorno da ditadura militar',
      'Fim do sistema democrático'
    ],
    correctAnswer: 0,
    explanation: 'A eleição de Lula (PT) em 2002 foi histórica: primeiro presidente de origem operária e de partido de esquerda. Após 3 derrotas (1989, 1994, 1998), venceu com Carta aos Brasileiros, prometendo estabilidade econômica e políticas sociais.',
    difficulty: 'easy',
    topic: 'Redemocratização',
    examInfo: 'FCC - Eleição de 2002'
  }
];

// ============================================================================
// TEMA 7: BRASIL CONTEMPORÂNEO (5 questões)
// ============================================================================

const brasilContemporaneoQuestions: Question[] = [
  {
    question: 'O Programa Bolsa Família, criado em 2003 no governo Lula, tinha como objetivo principal:',
    options: [
      'Financiar empresas estatais',
      'Combater a pobreza através de transferência direta de renda condicionada',
      'Construir moradias populares',
      'Privatizar serviços públicos'
    ],
    correctAnswer: 1,
    explanation: 'O Bolsa Família (2003) unificou programas de transferência de renda (Bolsa Escola, Bolsa Alimentação, etc.). Condicionado à frequência escolar e vacinação, tornou-se referência mundial no combate à pobreza, beneficiando milhões de famílias.',
    difficulty: 'easy',
    topic: 'Brasil Contemporâneo',
    examInfo: 'FGV - Políticas sociais'
  },
  {
    question: 'As Jornadas de Junho de 2013 foram manifestações populares que começaram reivindicando:',
    options: [
      'Redução da tarifa de transporte público',
      'Impeachment da presidente',
      'Novas eleições presidenciais',
      'Fim do Congresso Nacional'
    ],
    correctAnswer: 0,
    explanation: 'As manifestações de junho/2013 iniciaram contra aumento de R$ 0,20 na tarifa de ônibus (MPL - Movimento Passe Livre). Expandiram-se para pautas diversas: corrupção, qualidade dos serviços públicos, gastos com Copa 2014. Marcaram a década.',
    difficulty: 'medium',
    topic: 'Brasil Contemporâneo',
    examInfo: 'CESPE - Movimentos sociais recentes'
  },
  {
    question: 'A Operação Lava Jato, iniciada em 2014, investigou principalmente:',
    options: [
      'Tráfico de drogas na fronteira',
      'Esquema de corrupção envolvendo Petrobras, empreiteiras e políticos',
      'Crimes ambientais na Amazônia',
      'Evasão fiscal de pequenas empresas'
    ],
    correctAnswer: 1,
    explanation: 'A Lava Jato investigou esquema bilionário de corrupção, lavagem de dinheiro e propina envolvendo Petrobras, grandes empreiteiras e políticos de vários partidos. Teve impactos políticos profundos, incluindo prisão de Lula e crise econômica.',
    difficulty: 'medium',
    topic: 'Brasil Contemporâneo',
    examInfo: 'FCC - Operação Lava Jato'
  },
  {
    question: 'Dilma Rousseff sofreu impeachment em 2016 sob acusação de:',
    options: [
      'Crimes de responsabilidade (pedaladas fiscais)',
      'Corrupção direta comprovada',
      'Golpe militar',
      'Renúncia ao cargo'
    ],
    correctAnswer: 0,
    explanation: 'Dilma foi afastada por crimes de responsabilidade (pedaladas fiscais e decretos de crédito suplementar sem autorização do Congresso). O processo foi controverso: apoiadores chamaram de golpe, críticos de impeachment legítimo. Michel Temer assumiu.',
    difficulty: 'hard',
    topic: 'Brasil Contemporâneo',
    examInfo: 'VUNESP - Impeachment de 2016'
  },
  {
    question: 'A pandemia de COVID-19 (2020-2023) no Brasil resultou em:',
    options: [
      'Mais de 700 mil mortes e grave crise sanitária e econômica',
      'Nenhum impacto significativo',
      'Crescimento econômico acelerado',
      'Redução da desigualdade social'
    ],
    correctAnswer: 0,
    explanation: 'A COVID-19 causou mais de 700 mil mortes no Brasil, sendo um dos países mais afetados. Gerou crise sanitária, econômica e política, com debates sobre medidas de isolamento, vacinação e gestão federal da pandemia (CPI da COVID).',
    difficulty: 'easy',
    topic: 'Brasil Contemporâneo',
    examInfo: 'FCC - Pandemia COVID-19'
  }
];

// ============================================================================
// TEMA 8: MOVIMENTOS SOCIAIS (5 questões)
// ============================================================================

const movimentosSociaisQuestions: Question[] = [
  {
    question: 'O Movimento dos Trabalhadores Rurais Sem Terra (MST) foi fundado em 1984 e luta por:',
    options: [
      'Reforma agrária e redistribuição de terras',
      'Aumento de impostos rurais',
      'Privatização de terras públicas',
      'Fim da agricultura familiar'
    ],
    correctAnswer: 0,
    explanation: 'O MST foi fundado em 1984 em Cascavel (PR) durante a redemocratização. Luta por reforma agrária, redistribuição de terras improdutivas, educação no campo e agricultura familiar. Utiliza ocupações de terra como forma de pressão política.',
    difficulty: 'easy',
    topic: 'Movimentos Sociais',
    examInfo: 'FGV - MST e reforma agrária'
  },
  {
    question: 'O movimento negro no Brasil conquistou importante vitória com:',
    options: [
      'Lei 10.639/2003 (ensino de história africana e afro-brasileira)',
      'Abolição da escravatura em 1888',
      'Criação do Estatuto da Igualdade Racial em 1960',
      'Fim total do racismo estrutural'
    ],
    correctAnswer: 0,
    explanation: 'A Lei 10.639/2003 tornou obrigatório o ensino de história e cultura africana e afro-brasileira. Outras conquistas: Lei de Cotas (12.711/2012), Estatuto da Igualdade Racial (2010), criminalização do racismo (Lei 7.716/89).',
    difficulty: 'medium',
    topic: 'Movimentos Sociais',
    examInfo: 'CESPE - Movimento negro'
  },
  {
    question: 'O movimento LGBTQIA+ no Brasil conquistou em 2011:',
    options: [
      'Reconhecimento da união estável entre pessoas do mesmo sexo pelo STF',
      'Direito ao voto',
      'Criação de cotas em empresas',
      'Fim total da discriminação'
    ],
    correctAnswer: 0,
    explanation: 'Em 2011, o STF reconheceu a união estável homoafetiva (ADI 4277 e ADPF 132). Em 2013, o CNJ autorizou casamento civil. Em 2019, o STF criminalizou a homofobia e transfobia. Avanços legais importantes, mas discriminação persiste.',
    difficulty: 'medium',
    topic: 'Movimentos Sociais',
    examInfo: 'FCC - Direitos LGBTQIA+'
  },
  {
    question: 'O movimento feminista brasileiro obteve conquistas como:',
    options: [
      'Lei Maria da Penha (2006) contra violência doméstica',
      'Direito ao voto em 1932',
      'Licença maternidade',
      'Todas as alternativas estão corretas'
    ],
    correctAnswer: 3,
    explanation: 'Conquistas históricas: direito ao voto (1932), licença maternidade (CLT/CF88), Lei Maria da Penha (11.340/2006), Lei do Feminicídio (2015), criminalização da importunação sexual (2018). Luta continua por igualdade salarial e fim da violência.',
    difficulty: 'easy',
    topic: 'Movimentos Sociais',
    examInfo: 'VUNESP - Movimento feminista'
  },
  {
    question: 'Os movimentos indígenas no Brasil lutam por:',
    options: [
      'Demarcação e proteção de terras indígenas, preservação cultural e direitos constitucionais',
      'Integração forçada à sociedade não-indígena',
      'Abandono de suas tradições',
      'Privatização de reservas'
    ],
    correctAnswer: 0,
    explanation: 'Movimentos indígenas (APIB, COIAB, etc.) lutam por demarcação de terras (CF/88 art. 231), proteção ambiental, educação diferenciada, saúde indígena (SESAI), preservação cultural e combate ao garimpo ilegal. Marco Temporal é tema atual de disputa.',
    difficulty: 'medium',
    topic: 'Movimentos Sociais',
    examInfo: 'FCC - Direitos indígenas'
  }
];

// ============================================================================
// TEMA 9: FORMAÇÃO TERRITORIAL (5 questões)
// ============================================================================

const formacaoTerritorialQuestions: Question[] = [
  {
    question: 'O território brasileiro atual foi definido principalmente pelo Tratado de:',
    options: [
      'Tordesilhas (1494)',
      'Madri (1750)',
      'Utrecht (1713)',
      'Paris (1763)'
    ],
    correctAnswer: 1,
    explanation: 'O Tratado de Madrid (1750) substituiu o de Tordesilhas, adotando o princípio "uti possidetis" (quem possui de fato). Definiu aproximadamente 90% das fronteiras atuais do Brasil, reconhecendo expansões bandeirantes.',
    difficulty: 'medium',
    topic: 'Formação Territorial',
    examInfo: 'FGV - Tratados de limites'
  },
  {
    question: 'As Bandeiras foram expedições que contribuíram para:',
    options: [
      'A expansão territorial brasileira além de Tordesilhas',
      'A defesa contra invasões francesas',
      'A construção de ferrovias',
      'A abolição da escravatura'
    ],
    correctAnswer: 0,
    explanation: 'As Bandeiras (séc. XVII-XVIII) partiram principalmente de São Paulo buscando ouro, pedras preciosas e índios para escravizar. Expandiram o território brasileiro além dos limites de Tordesilhas, chegando ao Centro-Oeste e Norte.',
    difficulty: 'easy',
    topic: 'Formação Territorial',
    examInfo: 'CESPE - Bandeirismo'
  },
  {
    question: 'O Acre foi incorporado ao território brasileiro em 1903 através do:',
    options: [
      'Tratado de Petrópolis',
      'Guerra do Paraguai',
      'Tratado de Tordesilhas',
      'Independência do Brasil'
    ],
    correctAnswer: 0,
    explanation: 'O Acre pertencia à Bolívia, mas foi ocupado por seringueiros brasileiros. Após conflitos (Revolução Acreana liderada por Plácido de Castro), o Tratado de Petrópolis (1903) comprou o território por 2 milhões de libras esterlinas e construção da ferrovia Madeira-Mamoré.',
    difficulty: 'hard',
    topic: 'Formação Territorial',
    examInfo: 'FCC - Questão do Acre'
  },
  {
    question: 'A Guerra do Paraguai (1864-1870) resultou territorialmente em:',
    options: [
      'Definição das fronteiras brasileiras no sul e consolidação territorial',
      'Perda de territórios para o Paraguai',
      'Anexação total do Paraguai',
      'Independência do Uruguai'
    ],
    correctAnswer: 0,
    explanation: 'A Guerra do Paraguai (Tríplice Aliança × Paraguai) consolidou fronteiras brasileiras ao sul, especialmente no Mato Grosso. O Paraguai perdeu territórios para Brasil e Argentina, teve população dizimada e economia destruída.',
    difficulty: 'medium',
    topic: 'Formação Territorial',
    examInfo: 'VUNESP - Consequências Guerra do Paraguai'
  },
  {
    question: 'A construção de Brasília como nova capital federal em 1960 teve entre seus objetivos:',
    options: [
      'Interiorizar o desenvolvimento e integrar o território nacional',
      'Isolar o governo federal',
      'Criar uma capital litorânea',
      'Diminuir a população do Planalto Central'
    ],
    correctAnswer: 0,
    explanation: 'Brasília foi inaugurada em 21/04/1960 no governo JK como parte do "Plano de Metas" (50 anos em 5). Objetivos: interiorizar desenvolvimento, integrar território nacional, descentralizar poder do eixo Rio-SP. Projetada por Lúcio Costa e Oscar Niemeyer.',
    difficulty: 'easy',
    topic: 'Formação Territorial',
    examInfo: 'FCC - Construção de Brasília'
  }
];

// ============================================================================
// FUNÇÃO PARA SEED DE TODAS AS QUESTÕES DE HISTÓRIA DO BRASIL
// ============================================================================

export const seedAllHistoriaBrasilQuestions = async () => {
  const allQuestions = [
    ...brasilColoniaQuestions,
    ...brasilImperioQuestions,
    ...primeiraRepublicaQuestions,
    ...eraVargasQuestions,
    ...ditaduraMilitarQuestions,
    ...redemocratizacaoQuestions,
    ...brasilContemporaneoQuestions,
    ...movimentosSociaisQuestions,
    ...formacaoTerritorialQuestions
  ];

  console.log(`📚 Preparando ${allQuestions.length} questões de História do Brasil para importação em lote...`);

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
