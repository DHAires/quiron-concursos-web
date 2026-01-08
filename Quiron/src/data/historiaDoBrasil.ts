// HISTÓRIA DO BRASIL - 50 QUESTÕES
// Área Conhecimentos Gerais - Quiron Concursos
// Principais marcos da história brasileira

import { GameQuestion } from './gameQuestions';

export const historiaBrasilQuestions: GameQuestion[] = [
  // ========================================
  // DESCOBRIMENTO E BRASIL COLÔNIA
  // ========================================
  {
    id: 'hist-001',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'Pedro Álvares Cabral chegou ao Brasil em 22 de abril de 1500, na região onde hoje é Porto Seguro (BA).',
    correctAnswer: true,
    explanation: 'CERTO. A esquadra de Cabral aportou em Porto Seguro em 22/04/1500. Carta de Pero Vaz de Caminha relatou o achamento ao rei D. Manuel I.',
    difficulty: 'facil'
  },
  {
    id: 'hist-002',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O Tratado de Tordesilhas (1494) dividiu terras entre Portugal e Espanha, estabelecendo o meridiano 370 léguas oeste de Cabo Verde.',
    correctAnswer: true,
    explanation: 'CERTO. Tratado mediado pelo Papa dividiu mundo entre Portugal (leste) e Espanha (oeste), garantindo Brasil a Portugal.',
    difficulty: 'facil'
  },
  {
    id: 'hist-003',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O Pau-brasil foi o primeiro produto explorado pelos portugueses no Brasil colônia.',
    correctAnswer: true,
    explanation: 'CERTO. Pau-brasil (usado para tinta vermelha) foi explorado via escambo com indígenas (1500-1530), antes da colonização efetiva.',
    difficulty: 'facil'
  },
  {
    id: 'hist-004',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'As Capitanias Hereditárias foram sistema administrativo criado por D. João III em 1534.',
    correctAnswer: true,
    explanation: 'CERTO. 15 capitanias foram doadas a donatários que deveriam colonizar e desenvolver as terras. Poucas prosperaram (Pernambuco e São Vicente).',
    difficulty: 'facil'
  },
  {
    id: 'hist-005',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'Tomé de Sousa foi o primeiro Governador-Geral do Brasil (1549), fundando Salvador como primeira capital.',
    correctAnswer: true,
    explanation: 'CERTO. Governo-Geral centralizou administração. Tomé de Sousa fundou Salvador (1549), que foi capital até 1763 (transferida para Rio).',
    difficulty: 'facil'
  },

  // ========================================
  // ECONOMIA COLONIAL E ESCRAVIDÃO
  // ========================================
  {
    id: 'hist-006',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O ciclo do açúcar (séculos XVI-XVII) foi principal atividade econômica colonial, concentrada no Nordeste.',
    correctAnswer: true,
    explanation: 'CERTO. Engenhos de açúcar em Pernambuco e Bahia usavam mão de obra escrava. Brasil foi maior produtor mundial até concorrência antilhana.',
    difficulty: 'facil'
  },
  {
    id: 'hist-007',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O tráfico negreiro trouxe cerca de 4 a 5 milhões de africanos escravizados para o Brasil entre 1550 e 1850.',
    correctAnswer: true,
    explanation: 'CERTO. Brasil recebeu ~40% de todos africanos escravizados nas Américas. Escravidão durou 388 anos (abolida apenas em 1888).',
    difficulty: 'facil'
  },
  {
    id: 'hist-008',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'Zumbi dos Palmares liderou o Quilombo dos Palmares, maior quilombo brasileiro, destruído em 1695.',
    correctAnswer: true,
    explanation: 'CERTO. Palmares (AL) resistiu ~100 anos. Zumbi foi morto em 20/11/1695 (Dia da Consciência Negra). Símbolo da resistência à escravidão.',
    difficulty: 'facil'
  },
  {
    id: 'hist-009',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'As bandeiras eram expedições que adentravam o sertão em busca de ouro, pedras preciosas e indígenas para escravizar.',
    correctAnswer: true,
    explanation: 'CERTO. Bandeirantes (SP) expandiram fronteiras, descobriram ouro em MG/GO/MT, capturavam indígenas, destruíam missões jesuítas.',
    difficulty: 'facil'
  },
  {
    id: 'hist-010',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O ciclo do ouro (século XVIII) deslocou eixo econômico para Minas Gerais, causando transferência da capital para Rio de Janeiro em 1763.',
    correctAnswer: true,
    explanation: 'CERTO. Ouro em MG (1690s) gerou riqueza, imigração, urbanização. Capital mudou de Salvador para Rio (mais próximo de MG) em 1763.',
    difficulty: 'medio'
  },

  // ========================================
  // INVASÕES E CONFLITOS
  // ========================================
  {
    id: 'hist-011',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'Os holandeses invadiram e ocuparam parte do Nordeste brasileiro (1630-1654), especialmente Pernambuco.',
    correctAnswer: true,
    explanation: 'CERTO. Companhia das Índias Ocidentais controlou Pernambuco. Maurício de Nassau modernizou Recife. Expulsos em 1654 (Insurreição Pernambucana).',
    difficulty: 'facil'
  },
  {
    id: 'hist-012',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Guerra dos Emboabas (1707-1709) foi conflito entre paulistas e forasteiros pelo controle das minas de ouro.',
    correctAnswer: true,
    explanation: 'CERTO. Bandeirantes paulistas (descobridores) versus emboabas (portugueses e migrantes). Vitória dos emboabas, paulistas migraram para GO/MT.',
    difficulty: 'medio'
  },
  {
    id: 'hist-013',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Inconfidência Mineira (1789) foi movimento separatista liderado por Tiradentes, influenciado por ideais iluministas.',
    correctAnswer: true,
    explanation: 'CERTO. Revolta contra impostos e derrama. Denunciada, líderes presos. Tiradentes (único condenado à morte) enforcado em 21/04/1792, mártir da independência.',
    difficulty: 'facil'
  },
  {
    id: 'hist-014',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Conjuração Baiana (1798), também chamada Revolta dos Alfaiates, tinha caráter popular e abolicionista.',
    correctAnswer: true,
    explanation: 'CERTO. Revolta em Salvador, influenciada pela Revolução Francesa, defendia república, fim da escravidão. Reprimida violentamente.',
    difficulty: 'medio'
  },
  {
    id: 'hist-015',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Revolução Pernambucana de 1817 proclamou brevemente uma república, sendo reprimida por tropas portuguesas.',
    correctAnswer: true,
    explanation: 'CERTO. Primeiro movimento republicano vitorioso (75 dias). Defendia igualdade, república, liberdade religiosa. Reprimida por D. João VI.',
    difficulty: 'medio'
  },

  // ========================================
  // FAMÍLIA REAL E INDEPENDÊNCIA
  // ========================================
  {
    id: 'hist-016',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Família Real Portuguesa transferiu-se para o Brasil em 1808, fugindo das invasões napoleônicas.',
    correctAnswer: true,
    explanation: 'CERTO. D. João VI e corte chegaram em 1808. Brasil deixou de ser colônia, tornando-se sede do império português.',
    difficulty: 'facil'
  },
  {
    id: 'hist-017',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Abertura dos Portos às Nações Amigas (1808) rompeu monopólio comercial português, beneficiando Inglaterra.',
    correctAnswer: true,
    explanation: 'CERTO. Decreto abriu comércio brasileiro a nações amigas (principalmente Inglaterra), encerrando pacto colonial.',
    difficulty: 'facil'
  },
  {
    id: 'hist-018',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O Brasil foi elevado à categoria de Reino Unido de Portugal e Algarves em 1815.',
    correctAnswer: true,
    explanation: 'CERTO. D. João VI criou Reino Unido (Brasil, Portugal, Algarves), equiparando Brasil a Portugal. Fim formal do status colonial.',
    difficulty: 'facil'
  },
  {
    id: 'hist-019',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'D. Pedro I proclamou a Independência do Brasil às margens do rio Ipiranga em 7 de setembro de 1822.',
    correctAnswer: true,
    explanation: 'CERTO. "Independência ou Morte!" em 07/09/1822. D. Pedro I foi coroado imperador em 01/12/1822. Independência pacífica (exceto na Bahia).',
    difficulty: 'facil'
  },
  {
    id: 'hist-020',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A primeira Constituição brasileira foi outorgada (imposta) por D. Pedro I em 1824.',
    correctAnswer: true,
    explanation: 'CERTO. Constituição de 1824 (outorgada após dissolução da Assembleia): monarquia, voto censitário, Poder Moderador do Imperador.',
    difficulty: 'facil'
  },

  // ========================================
  // PRIMEIRO REINADO E REGÊNCIAS
  // ========================================
  {
    id: 'hist-021',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'D. Pedro I abdicou ao trono brasileiro em 1831 para assumir a coroa portuguesa.',
    correctAnswer: true,
    explanation: 'CERTO. Crise política levou à abdicação (07/04/1831). Voltou a Portugal para disputar trono contra irmão absolutista Miguel.',
    difficulty: 'facil'
  },
  {
    id: 'hist-022',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O Período Regencial (1831-1840) foi marcado por instabilidade e revoltas provinciais.',
    correctAnswer: true,
    explanation: 'CERTO. Regências governaram até D. Pedro II completar maioridade. Período de revoltas: Cabanagem, Sabinada, Balaiada, Farroupilha.',
    difficulty: 'facil'
  },
  {
    id: 'hist-023',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Guerra dos Farrapos (1835-1845) foi a mais longa revolta brasileira, ocorrida no Rio Grande do Sul.',
    correctAnswer: true,
    explanation: 'CERTO. Farroupilha (RS) durou 10 anos. Proclamou repúblicas Rio-Grandense e Juliana (SC). Fim negociado por Duque de Caxias.',
    difficulty: 'medio'
  },
  {
    id: 'hist-024',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O Golpe da Maioridade (1840) antecipou coroação de D. Pedro II (14 anos) para encerrar instabilidade regencial.',
    correctAnswer: true,
    explanation: 'CERTO. Declarado maior aos 14 anos, D. Pedro II assumiu o trono, iniciando Segundo Reinado (1840-1889), período mais longo e estável.',
    difficulty: 'facil'
  },
  {
    id: 'hist-025',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Cabanagem (1835-1840) foi revolta popular no Pará, chegando a tomar o poder provincial.',
    correctAnswer: true,
    explanation: 'CERTO. Revolta de cabanos (população pobre, indígena, negra) no Pará. Chegaram ao poder, sendo violentamente reprimidos.',
    difficulty: 'medio'
  },

  // ========================================
  // SEGUNDO REINADO
  // ========================================
  {
    id: 'hist-026',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O café tornou-se principal produto de exportação brasileira no século XIX, concentrado no Vale do Paraíba (RJ-SP).',
    correctAnswer: true,
    explanation: 'CERTO. Ciclo do café (1850-1930): Vale do Paraíba, depois Oeste Paulista. Gerou riqueza, ferrovias, imigração, elite cafeeira.',
    difficulty: 'facil'
  },
  {
    id: 'hist-027',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Lei Eusébio de Queirós (1850) proibiu o tráfico negreiro internacional para o Brasil.',
    correctAnswer: true,
    explanation: 'CERTO. Pressão inglesa (Bill Aberdeen) levou ao fim do tráfico atlântico. Capital antes investido em escravos migrou para indústria/infraestrutura.',
    difficulty: 'facil'
  },
  {
    id: 'hist-028',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Guerra do Paraguai (1864-1870) envolveu Brasil, Argentina e Uruguai contra o Paraguai.',
    correctAnswer: true,
    explanation: 'CERTO. Tríplice Aliança venceu Paraguai (Solano López). Maior conflito sul-americano. Brasil teve custos humanos e econômicos enormes.',
    difficulty: 'facil'
  },
  {
    id: 'hist-029',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Lei do Ventre Livre (1871) declarou livres os filhos de escravas nascidos a partir da promulgação.',
    correctAnswer: true,
    explanation: 'CERTO. Também chamada Lei Rio Branco, libertava filhos de escravas (ficavam sob tutela até 8 ou 21 anos). Processo gradual de abolição.',
    difficulty: 'facil'
  },
  {
    id: 'hist-030',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Lei dos Sexagenários (1885) libertou escravos com mais de 60 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Lei Saraiva-Cotegipe libertou idosos (expectativa de vida escrava era ~35 anos). Medida paliativa, beneficiou poucos.',
    difficulty: 'facil'
  },

  // ========================================
  // ABOLIÇÃO E REPÚBLICA
  // ========================================
  {
    id: 'hist-031',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Lei Áurea (13/05/1888), assinada pela Princesa Isabel, aboliu definitivamente a escravidão no Brasil.',
    correctAnswer: true,
    explanation: 'CERTO. Brasil foi último país das Américas a abolir escravidão. Sem indenização a proprietários ou assistência a libertos.',
    difficulty: 'facil'
  },
  {
    id: 'hist-032',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Proclamação da República ocorreu em 15 de novembro de 1889, liderada pelo Marechal Deodoro da Fonseca.',
    correctAnswer: true,
    explanation: 'CERTO. Golpe militar-republicano depôs D. Pedro II. República proclamada sem participação popular. Família Imperial exilada.',
    difficulty: 'facil'
  },
  {
    id: 'hist-033',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A primeira Constituição republicana (1891) estabeleceu federalismo, separação Igreja-Estado e voto direto (mas não secreto).',
    correctAnswer: true,
    explanation: 'CERTO. Constituição inspirada no modelo americano: presidencialismo, federalismo, laicidade. Voto aberto, excluía mulheres, analfabetos, mendigos, soldados.',
    difficulty: 'medio'
  },
  {
    id: 'hist-034',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A República Velha (1889-1930) foi marcada pela política do café-com-leite entre São Paulo e Minas Gerais.',
    correctAnswer: true,
    explanation: 'CERTO. Oligarquias de SP (café) e MG (leite) alternavam presidência. Coronelismo, voto de cabresto, fraudes eletrais caracterizaram período.',
    difficulty: 'facil'
  },
  {
    id: 'hist-035',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Revolta da Vacina (1904) no Rio de Janeiro protestou contra vacinação obrigatória imposta por Oswaldo Cruz.',
    correctAnswer: true,
    explanation: 'CERTO. População se revoltou contra vacinação compulsória antivariólica e reformas urbanas de Pereira Passos. Reprimida violentamente.',
    difficulty: 'facil'
  },

  // ========================================
  // ERA VARGAS E ESTADO NOVO
  // ========================================
  {
    id: 'hist-036',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Revolução de 1930 levou Getúlio Vargas ao poder, encerrando a República Velha.',
    correctAnswer: true,
    explanation: 'CERTO. Aliança Liberal (Vargas) venceu oligarquias. Golpe impediu posse de Júlio Prestes. Vargas governou 15 anos (1930-1945).',
    difficulty: 'facil'
  },
  {
    id: 'hist-037',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Revolução Constitucionalista de 1932 em São Paulo exigiu nova constituição e fim do governo provisório.',
    correctAnswer: true,
    explanation: 'CERTO. SP pegou em armas (MMDC) por constituição. Derrotada militarmente, vitoriosa politicamente: Constituição de 1934 foi promulgada.',
    difficulty: 'medio'
  },
  {
    id: 'hist-038',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O Estado Novo (1937-1945) foi regime ditatorial de Vargas, inspirado em fascismo europeu.',
    correctAnswer: true,
    explanation: 'CERTO. Golpe de 1937 (pretexto: Plano Cohen, falso). Ditadura: censura, DIP (propaganda), repressão, trabalhismo, nacionalismo.',
    difficulty: 'facil'
  },
  {
    id: 'hist-039',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A CLT (Consolidação das Leis do Trabalho) foi criada por Vargas em 1943, regulamentando direitos trabalhistas.',
    correctAnswer: true,
    explanation: 'CERTO. CLT unificou legislação trabalhista: jornada 8h, férias, 13º, salário mínimo, carteira assinada. Base do trabalhismo varguista.',
    difficulty: 'facil'
  },
  {
    id: 'hist-040',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O Brasil participou da Segunda Guerra Mundial (1942-1945) ao lado dos Aliados, enviando a FEB (Força Expedicionária Brasileira).',
    correctAnswer: true,
    explanation: 'CERTO. FEB lutou na Itália (Monte Castelo, 1945). Participação brasileira fortaleceu democratização, pressionando fim do Estado Novo.',
    difficulty: 'facil'
  },

  // ========================================
  // REPÚBLICA POPULISTA E DITADURA MILITAR
  // ========================================
  {
    id: 'hist-041',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'JK (Juscelino Kubitschek) governou com lema "50 anos em 5", promovendo industrialização e construindo Brasília.',
    correctAnswer: true,
    explanation: 'CERTO. Plano de Metas (1956-1961): indústria automobilística, energia, transporte. Brasília inaugurada em 1960. Desenvolvimentismo, dívida externa.',
    difficulty: 'facil'
  },
  {
    id: 'hist-042',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O golpe militar de 1964 depôs presidente João Goulart, iniciando ditadura que durou 21 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Golpe civil-militar (31/03/1964) alegou combater comunismo. Ditadura: censura, tortura, exílio, AI-5, repressão. Fim em 1985.',
    difficulty: 'facil'
  },
  {
    id: 'hist-043',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O AI-5 (Ato Institucional nº 5), de 1968, foi o mais duro instrumento de repressão da ditadura.',
    correctAnswer: true,
    explanation: 'CERTO. AI-5 (Médici): fechou Congresso, cassou mandatos, suspendeu habeas corpus, censurou imprensa, intensificou tortura. "Anos de chumbo".',
    difficulty: 'facil'
  },
  {
    id: 'hist-044',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O movimento "Diretas Já" (1983-1984) mobilizou milhões pedindo eleições diretas para presidente.',
    correctAnswer: true,
    explanation: 'CERTO. Maiores manifestações da história: Emenda Dante de Oliveira rejeitada. Tancredo eleito indiretamente (1985), marcando fim da ditadura.',
    difficulty: 'facil'
  },
  {
    id: 'hist-045',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'A Constituição de 1988, chamada "Constituição Cidadã", restaurou democracia e garantiu direitos fundamentais.',
    correctAnswer: true,
    explanation: 'CERTO. Promulgada em 05/10/1988 (Ulysses Guimarães). Redemocratização: direitos sociais, voto 16 anos, SUS, habeas data, mandado de injunção.',
    difficulty: 'facil'
  },

  // ========================================
  // BRASIL CONTEMPORÂNEO
  // ========================================
  {
    id: 'hist-046',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O Plano Real (1994), criado por Fernando Henrique Cardoso, estabilizou economia e controlou hiperinflação.',
    correctAnswer: true,
    explanation: 'CERTO. Real substituiu Cruzeiro Real. Controle inflacionário: âncora cambial, privatizações, abertura econômica. FHC eleito presidente (1995-2002).',
    difficulty: 'facil'
  },
  {
    id: 'hist-047',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O impeachment de Collor (1992) foi primeiro processo de afastamento presidencial pós-redemocratização.',
    correctAnswer: true,
    explanation: 'CERTO. Denúncias de corrupção (PC Farias), "caras-pintadas". Collor renunciou antes do julgamento final. Itamar Franco assumiu.',
    difficulty: 'facil'
  },
  {
    id: 'hist-048',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'Lula (2003-2010) foi primeiro presidente operário, implementando programas sociais como Bolsa Família.',
    correctAnswer: true,
    explanation: 'CERTO. PT no poder: Bolsa Família, ProUni, Minha Casa Minha Vida, PAC. Crescimento econômico, redução desigualdade. Reeleito 2006.',
    difficulty: 'facil'
  },
  {
    id: 'hist-049',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O impeachment de Dilma Rousseff ocorreu em 2016, sendo substituída pelo vice Michel Temer.',
    correctAnswer: true,
    explanation: 'CERTO. Acusada de "pedaladas fiscais". Afastada definitivamente em 31/08/2016. Processo controverso, considerado "golpe" por apoiadores.',
    difficulty: 'facil'
  },
  {
    id: 'hist-050',
    area: 'conhecimentos-gerais',
    subject: 'História do Brasil',
    question: 'O Brasil sediou grandes eventos esportivos: Copa do Mundo (2014) e Olimpíadas (2016).',
    correctAnswer: true,
    explanation: 'CERTO. Copa 2014 (12 cidades, vexame 7x1 Alemanha). Olimpíadas Rio 2016 (primeira na América do Sul). Legados questionados, obras inacabadas.',
    difficulty: 'facil'
  }
];
