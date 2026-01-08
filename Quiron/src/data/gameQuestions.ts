// BANCO DE QUESTÕES - GAME ÉPICO QUIRON CONCURSOS
// Formato: Certo/Errado (estilo Cebraspe)
// Enunciados e explicações curtas para caber nas cartas do quiz

export interface GameQuestion {
  id: string;
  area: 'juridica' | 'policial' | 'fiscal-bancaria' | 'conhecimentos-gerais';
  subject: string;
  question: string;
  correctAnswer: boolean; // true = CERTO, false = ERRADO
  explanation: string;
  difficulty: 'facil' | 'medio' | 'dificil';
}

// ======================================
// ESTRUTURA DE ÁREAS E MATÉRIAS
// ======================================

export interface Subject {
  id: string;
  name: string;
  questionsCount: number;
  color: string;
}

export interface Area {
  id: 'juridica' | 'policial' | 'fiscal-bancaria' | 'conhecimentos-gerais';
  name: string;
  color: string;
  bgColor: string;
  subjects: Subject[];
}

export const gameAreas: Area[] = [
  {
    id: 'juridica',
    name: 'Jurídica',
    color: 'text-blue-400',
    bgColor: 'bg-blue-600',
    subjects: [
      { id: 'direito-constitucional', name: 'Direito Constitucional', questionsCount: 50, color: 'bg-blue-500' },
      { id: 'direito-administrativo', name: 'Direito Administrativo', questionsCount: 50, color: 'bg-blue-600' },
      { id: 'direito-penal', name: 'Direito Penal', questionsCount: 50, color: 'bg-blue-700' },
      { id: 'direito-civil', name: 'Direito Civil', questionsCount: 50, color: 'bg-blue-800' },
      { id: 'direito-do-trabalho', name: 'Direito do Trabalho', questionsCount: 50, color: 'bg-blue-900' },
    ]
  },
  {
    id: 'policial',
    name: 'Policial',
    color: 'text-red-400',
    bgColor: 'bg-red-600',
    subjects: [
      { id: 'legislacao-penal-especial', name: 'Legislação Penal Especial', questionsCount: 50, color: 'bg-red-500' },
      { id: 'criminologia', name: 'Criminologia', questionsCount: 50, color: 'bg-red-600' },
      { id: 'direitos-humanos', name: 'Direitos Humanos', questionsCount: 50, color: 'bg-red-700' },
      { id: 'procedimentos-policiais', name: 'Procedimentos Policiais', questionsCount: 50, color: 'bg-red-800' },
    ]
  },
  {
    id: 'fiscal-bancaria',
    name: 'Fiscal-Bancária',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-600',
    subjects: [
      { id: 'direito-tributario', name: 'Direito Tributário', questionsCount: 50, color: 'bg-yellow-500' },
      { id: 'contabilidade', name: 'Contabilidade', questionsCount: 50, color: 'bg-yellow-600' },
      { id: 'afo', name: 'AFO (Adm. Financeira e Orçamentária)', questionsCount: 50, color: 'bg-yellow-700' },
      { id: 'economia', name: 'Economia', questionsCount: 50, color: 'bg-yellow-800' },
      { id: 'conhecimentos-bancarios', name: 'Conhecimentos Bancários', questionsCount: 50, color: 'bg-yellow-900' },
    ]
  },
  {
    id: 'conhecimentos-gerais',
    name: 'Conhecimentos Gerais',
    color: 'text-purple-400',
    bgColor: 'bg-purple-600',
    subjects: [
      { id: 'portugues', name: 'Português', questionsCount: 50, color: 'bg-purple-500' },
      { id: 'raciocinio-logico', name: 'Raciocínio Lógico', questionsCount: 50, color: 'bg-purple-600' },
      { id: 'informatica', name: 'Informática', questionsCount: 50, color: 'bg-purple-700' },
      { id: 'atualidades', name: 'Atualidades', questionsCount: 50, color: 'bg-purple-800' },
      { id: 'historia-do-brasil', name: 'História do Brasil', questionsCount: 50, color: 'bg-purple-900' },
    ]
  }
];

// ======================================
// ÁREA JURÍDICA - DIREITO CONSTITUCIONAL
// ======================================

export const direitoConstitucionalQuestions: GameQuestion[] = [
  // PRINCÍPIOS FUNDAMENTAIS (Art. 1º ao 4º)
  {
    id: 'const_001',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A República Federativa do Brasil tem como fundamentos a soberania, a cidadania e a dignidade da pessoa humana.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º, I, II e III da CF/88. São fundamentos da RFB.',
    difficulty: 'facil'
  },
  {
    id: 'const_002',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Os valores sociais do trabalho e da livre iniciativa são fundamentos da República Federativa do Brasil.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º, IV - fundamento da RFB.',
    difficulty: 'facil'
  },
  {
    id: 'const_003',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O pluralismo político é fundamento da República Federativa do Brasil.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º, V - é fundamento expresso.',
    difficulty: 'facil'
  },
  {
    id: 'const_004',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A construção de uma sociedade livre, justa e solidária é objetivo fundamental da República.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 3º, I - objetivo fundamental.',
    difficulty: 'facil'
  },
  {
    id: 'const_005',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Erradicar a pobreza é objetivo fundamental da República Federativa do Brasil.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 3º, III - erradicar pobreza e marginalização.',
    difficulty: 'facil'
  },
  {
    id: 'const_006',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A prevalência dos direitos humanos é princípio que rege as relações internacionais do Brasil.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 4º, II - princípio das relações internacionais.',
    difficulty: 'facil'
  },
  {
    id: 'const_007',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A concessão de asilo político é princípio que rege as relações internacionais do Brasil.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 4º, X - princípio expresso.',
    difficulty: 'medio'
  },
  {
    id: 'const_008',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A República Federativa do Brasil busca a integração econômica, política, social e cultural dos povos da América Latina.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 4º, parágrafo único - integração latino-americana.',
    difficulty: 'medio'
  },

  // DIREITOS FUNDAMENTAIS
  {
    id: 'const_009',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Homens e mulheres são iguais em direitos e obrigações nos termos da Constituição.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, I - igualdade entre homens e mulheres.',
    difficulty: 'facil'
  },
  {
    id: 'const_010',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, II - princípio da legalidade.',
    difficulty: 'facil'
  },
  {
    id: 'const_011',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A casa é asilo inviolável do indivíduo, não podendo nela entrar sem consentimento, exceto em caso de flagrante delito.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XI - inviolabilidade do domicílio.',
    difficulty: 'facil'
  },
  {
    id: 'const_012',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'É livre a manifestação do pensamento, sendo vedado o anonimato.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, IV - liberdade de pensamento, vedado anonimato.',
    difficulty: 'facil'
  },
  {
    id: 'const_013',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A lei não prejudicará o direito adquirido, o ato jurídico perfeito e a coisa julgada.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XXXVI - proteção da segurança jurídica.',
    difficulty: 'facil'
  },
  {
    id: 'const_014',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A prisão civil por dívida é permitida apenas no caso do devedor de pensão alimentícia.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, LXVII - única prisão civil permitida.',
    difficulty: 'medio'
  },
  {
    id: 'const_015',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Aos litigantes em processo judicial ou administrativo é assegurado o contraditório e ampla defesa.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, LV - contraditório e ampla defesa.',
    difficulty: 'facil'
  },
  {
    id: 'const_016',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, LVII - presunção de inocência.',
    difficulty: 'facil'
  },
  {
    id: 'const_017',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A prática do racismo constitui crime inafiançável e imprescritível, sujeito à pena de reclusão.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, XLII - racismo: inafiançável e imprescritível.',
    difficulty: 'medio'
  },
  {
    id: 'const_018',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O habeas corpus é cabível quando alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, LXVIII - proteção da liberdade de locomoção.',
    difficulty: 'facil'
  },
  {
    id: 'const_019',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O mandado de segurança protege direito líquido e certo não amparado por habeas corpus ou habeas data.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, LXIX - mandado de segurança.',
    difficulty: 'medio'
  },
  {
    id: 'const_020',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O habeas data serve para assegurar o conhecimento de informações pessoais constantes de registros públicos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, LXXII - acesso a informações pessoais.',
    difficulty: 'medio'
  },

  // ORGANIZAÇÃO DO ESTADO
  {
    id: 'const_021',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A República Federativa do Brasil é formada pela união indissolúvel dos Estados, Municípios e do Distrito Federal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º - união indissolúvel dos entes.',
    difficulty: 'facil'
  },
  {
    id: 'const_022',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'É vedado à União, aos Estados, ao Distrito Federal e aos Municípios recusar fé aos documentos públicos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 19, II - vedação expressa.',
    difficulty: 'medio'
  },
  {
    id: 'const_023',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Compete à União legislar sobre direito civil, comercial, penal e processual.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 22, I - competência privativa da União.',
    difficulty: 'facil'
  },
  {
    id: 'const_024',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'É competência comum da União, Estados, DF e Municípios cuidar da saúde e assistência pública.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 23, II - competência administrativa comum.',
    difficulty: 'medio'
  },
  {
    id: 'const_025',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Compete aos Municípios legislar sobre direito penitenciário.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 22, I - compete à União legislar sobre direito penitenciário.',
    difficulty: 'dificil'
  },

  // PODER LEGISLATIVO
  {
    id: 'const_026',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O Poder Legislativo federal é exercido pelo Congresso Nacional, composto pela Câmara dos Deputados e pelo Senado Federal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 44 - bicameralismo federal.',
    difficulty: 'facil'
  },
  {
    id: 'const_027',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A Câmara dos Deputados é composta por representantes do povo eleitos pelo sistema proporcional.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 45 - sistema proporcional.',
    difficulty: 'facil'
  },
  {
    id: 'const_028',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O Senado Federal é composto por representantes dos Estados e do Distrito Federal, eleitos pelo sistema majoritário.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 46 - 3 senadores por ente, sistema majoritário.',
    difficulty: 'medio'
  },
  {
    id: 'const_029',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O mandato de Deputado Federal é de 4 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 44, parágrafo único - mandato de 4 anos.',
    difficulty: 'facil'
  },
  {
    id: 'const_030',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O mandato de Senador é de 8 anos, renovando-se a representação de 4 em 4 anos, alternadamente, por 1/3 e 2/3.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 46, §2º - mandato de 8 anos.',
    difficulty: 'medio'
  },
  {
    id: 'const_031',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Os Deputados e Senadores são invioláveis por suas opiniões, palavras e votos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 53 - imunidade material/inviolabilidade.',
    difficulty: 'facil'
  },
  {
    id: 'const_032',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A Casa do Congresso Nacional pode sustar atos normativos do Poder Executivo que exorbitem do poder regulamentar.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 49, V - controle de legalidade.',
    difficulty: 'medio'
  },

  // PODER EXECUTIVO
  {
    id: 'const_033',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O Presidente da República é eleito para mandato de 4 anos, permitida uma reeleição.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 82 e 14, §5º - mandato de 4 anos, 1 reeleição.',
    difficulty: 'facil'
  },
  {
    id: 'const_034',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Compete privativamente ao Presidente da República sancionar, promulgar e fazer publicar as leis.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 84, IV - competência privativa.',
    difficulty: 'facil'
  },
  {
    id: 'const_035',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O Presidente da República pode editar medidas provisórias com força de lei.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 62 - medidas provisórias em caso de relevância e urgência.',
    difficulty: 'facil'
  },
  {
    id: 'const_036',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A medida provisória perde eficácia se não for convertida em lei no prazo de 60 dias, prorrogável uma vez.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 62, §3º - prazo de 60+60 dias.',
    difficulty: 'medio'
  },
  {
    id: 'const_037',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'É vedada a edição de medida provisória sobre matéria relativa a direito penal, processual penal e processual civil.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 62, §1º, I, b - vedação expressa.',
    difficulty: 'dificil'
  },

  // PODER JUDICIÁRIO
  {
    id: 'const_038',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O Supremo Tribunal Federal é composto de 11 Ministros.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 101 - 11 ministros.',
    difficulty: 'facil'
  },
  {
    id: 'const_039',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Os ministros do STF são nomeados pelo Presidente da República após aprovação do Senado Federal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 101, parágrafo único - sabatina do Senado.',
    difficulty: 'facil'
  },
  {
    id: 'const_040',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Compete ao STF processar e julgar originariamente o Presidente da República nas infrações penais comuns.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 102, I, b - competência originária.',
    difficulty: 'medio'
  },

  // ADMINISTRAÇÃO PÚBLICA
  {
    id: 'const_041',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A administração pública direta e indireta obedecerá aos princípios de legalidade, impessoalidade, moralidade, publicidade e eficiência.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, caput - LIMPE (5 princípios expressos).',
    difficulty: 'facil'
  },
  {
    id: 'const_042',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A investidura em cargo ou emprego público depende de aprovação prévia em concurso público.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, II - regra do concurso público.',
    difficulty: 'facil'
  },
  {
    id: 'const_043',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O servidor público estável só perderá o cargo em virtude de sentença judicial transitada em julgado.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 41, §1º - também por PAD ou insuficiência de desempenho.',
    difficulty: 'medio'
  },
  {
    id: 'const_044',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'É garantido ao servidor público o direito à livre associação sindical.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, VI - direito à sindicalização.',
    difficulty: 'facil'
  },
  {
    id: 'const_045',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O direito de greve dos servidores públicos será exercido nos termos e limites definidos em lei específica.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, VII - depende de lei específica.',
    difficulty: 'medio'
  },
  {
    id: 'const_046',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A lei reservará percentual dos cargos e empregos públicos para pessoas com deficiência.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, VIII - reserva de vagas para PcD.',
    difficulty: 'facil'
  },
  {
    id: 'const_047',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'Os atos de improbidade administrativa importarão a suspensão dos direitos políticos, perda da função pública e indisponibilidade dos bens.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, §4º - sanções por improbidade.',
    difficulty: 'medio'
  },
  {
    id: 'const_048',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'As pessoas jurídicas de direito público respondem pelos danos que seus agentes causarem a terceiros.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, §6º - responsabilidade civil objetiva do Estado.',
    difficulty: 'facil'
  },
  {
    id: 'const_049',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'O prazo de validade do concurso público é de até 2 anos, prorrogável uma vez por igual período.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 37, III - prazo máximo de 4 anos (2+2).',
    difficulty: 'medio'
  },
  {
    id: 'const_050',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A acumulação remunerada de dois cargos públicos é vedada em qualquer hipótese.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 37, XVI - permite acumulação em casos específicos (2 cargos de professor, 1 técnico/científico + 1 professor, 2 cargos de saúde).',
    difficulty: 'dificil'
  }
];

// ======================================
// ÁREA JURÍDICA - DIREITO ADMINISTRATIVO
// ======================================

export const direitoAdministrativoQuestions: GameQuestion[] = [
  // PRINCÍPIOS ADMINISTRATIVOS
  {
    id: 'adm_001',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O princípio da legalidade determina que o administrador público só pode fazer o que a lei autoriza ou permite.',
    correctAnswer: true,
    explanation: 'CERTO. Administração Pública está vinculada à lei (diferente do particular).',
    difficulty: 'facil'
  },
  {
    id: 'adm_002',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O princípio da impessoalidade veda que o administrador público promova pessoalmente seus atos.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 37, §1º - vedada publicidade com nomes, símbolos ou imagens.',
    difficulty: 'facil'
  },
  {
    id: 'adm_003',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A moralidade administrativa exige que o administrador atue com ética e boa-fé.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 37 - princípio expresso da moralidade administrativa.',
    difficulty: 'facil'
  },
  {
    id: 'adm_004',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O princípio da publicidade admite exceções em casos de segurança nacional e investigações.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 5º, XXXIII - ressalva segurança da sociedade e do Estado.',
    difficulty: 'medio'
  },
  {
    id: 'adm_005',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Eficiência é princípio expresso na Constituição Federal de 1988.',
    correctAnswer: true,
    explanation: 'CERTO. Incluído pela EC 19/98 no art. 37, caput.',
    difficulty: 'facil'
  },
  {
    id: 'adm_006',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O princípio da supremacia do interesse público permite que a Administração altere unilateralmente contratos administrativos.',
    correctAnswer: true,
    explanation: 'CERTO. Cláusulas exorbitantes decorrem da supremacia do interesse público.',
    difficulty: 'medio'
  },
  {
    id: 'adm_007',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A autotutela permite que a Administração revise seus próprios atos ilegais.',
    correctAnswer: true,
    explanation: 'CERTO. Súmula 473/STF - pode anular atos ilegais e revogar inconvenientes.',
    difficulty: 'facil'
  },
  {
    id: 'adm_008',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O princípio da continuidade impede a greve de servidores públicos.',
    correctAnswer: false,
    explanation: 'ERRADO. STF permite greve regulamentada (MI 670, 708 e 712).',
    difficulty: 'dificil'
  },

  // PODERES ADMINISTRATIVOS
  {
    id: 'adm_009',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O poder hierárquico permite que o superior revise atos do subordinado.',
    correctAnswer: true,
    explanation: 'CERTO. Decorre da hierarquia: fiscalização, revisão, delegação e avocação.',
    difficulty: 'facil'
  },
  {
    id: 'adm_010',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O poder disciplinar é discricionário quanto à escolha da penalidade a ser aplicada.',
    correctAnswer: false,
    explanation: 'ERRADO. É vinculado - a lei define a penalidade para cada infração.',
    difficulty: 'medio'
  },
  {
    id: 'adm_011',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O poder de polícia pode ser exercido preventivamente.',
    correctAnswer: true,
    explanation: 'CERTO. Licenças, autorizações e fiscalizações são atos preventivos.',
    difficulty: 'facil'
  },
  {
    id: 'adm_012',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O poder regulamentar permite ao Executivo inovar no ordenamento jurídico.',
    correctAnswer: false,
    explanation: 'ERRADO. CF/88, art. 84, IV - regulamento apenas detalha a lei.',
    difficulty: 'medio'
  },
  {
    id: 'adm_013',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A autoexecutoriedade do poder de polícia permite execução sem autorização judicial prévia.',
    correctAnswer: true,
    explanation: 'CERTO. Atributo que permite execução imediata e coercitiva.',
    difficulty: 'medio'
  },
  {
    id: 'adm_014',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O poder de polícia pode ser delegado a particulares.',
    correctAnswer: false,
    explanation: 'ERRADO. STF veda delegação do poder coercitivo (ADI 1717).',
    difficulty: 'dificil'
  },

  // ATOS ADMINISTRATIVOS
  {
    id: 'adm_015',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Todo ato administrativo goza de presunção de legitimidade.',
    correctAnswer: true,
    explanation: 'CERTO. Atributo: presume-se legal até prova em contrário.',
    difficulty: 'facil'
  },
  {
    id: 'adm_016',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A competência é elemento sempre vinculado do ato administrativo.',
    correctAnswer: true,
    explanation: 'CERTO. Competência é definida em lei, não há discricionariedade.',
    difficulty: 'medio'
  },
  {
    id: 'adm_017',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A revogação retira ato ilegal do mundo jurídico.',
    correctAnswer: false,
    explanation: 'ERRADO. Revogação retira ato legal inconveniente. Anulação retira ilegal.',
    difficulty: 'medio'
  },
  {
    id: 'adm_018',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Atos vinculados não podem ser revogados.',
    correctAnswer: true,
    explanation: 'CERTO. Revogação pressupõe discricionariedade (juízo de conveniência).',
    difficulty: 'dificil'
  },
  {
    id: 'adm_019',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A anulação de ato administrativo produz efeitos ex tunc (retroativos).',
    correctAnswer: true,
    explanation: 'CERTO. Ato ilegal é nulo desde a origem.',
    difficulty: 'medio'
  },
  {
    id: 'adm_020',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A motivação é obrigatória em todos os atos administrativos.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 9.784/99 exige em casos específicos (discricionários, negam, etc).',
    difficulty: 'dificil'
  },

  // SERVIÇOS PÚBLICOS
  {
    id: 'adm_021',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A concessão de serviço público é sempre precedida de licitação.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 175 - sempre por licitação.',
    difficulty: 'facil'
  },
  {
    id: 'adm_022',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Na permissão de serviço público, o contrato é bilateral e de adesão.',
    correctAnswer: false,
    explanation: 'ERRADO. Permissão é ato unilateral, discricionário e precário.',
    difficulty: 'medio'
  },
  {
    id: 'adm_023',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O princípio da continuidade impede a interrupção dos serviços públicos essenciais.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 8.987/95, art. 6º, §3º - permite em casos excepcionais.',
    difficulty: 'dificil'
  },
  {
    id: 'adm_024',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A tarifa é receita originária, não tributo.',
    correctAnswer: true,
    explanation: 'CERTO. Receita contratual, não compulsória.',
    difficulty: 'medio'
  },
  {
    id: 'adm_025',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A autorização de serviço público é ato vinculado.',
    correctAnswer: false,
    explanation: 'ERRADO. É ato discricionário e precário.',
    difficulty: 'medio'
  },

  // LICITAÇÕES E CONTRATOS
  {
    id: 'adm_026',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A licitação visa selecionar a proposta mais vantajosa para a Administração.',
    correctAnswer: true,
    explanation: 'CERTO. Finalidade principal: proposta mais vantajosa.',
    difficulty: 'facil'
  },
  {
    id: 'adm_027',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O pregão é modalidade que pode ser utilizada para obras de engenharia.',
    correctAnswer: false,
    explanation: 'ERRADO. Pregão é para bens e serviços comuns, não obras.',
    difficulty: 'medio'
  },
  {
    id: 'adm_028',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A modalidade convite exige publicação em Diário Oficial.',
    correctAnswer: false,
    explanation: 'ERRADO. Convite é a mais simples, publicidade simplificada.',
    difficulty: 'medio'
  },
  {
    id: 'adm_029',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Contratos administrativos podem conter cláusulas exorbitantes.',
    correctAnswer: true,
    explanation: 'CERTO. Prerrogativas da Administração (alteração, rescisão unilateral, etc).',
    difficulty: 'facil'
  },
  {
    id: 'adm_030',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A inexigibilidade de licitação ocorre quando há inviabilidade de competição.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 8.666/93, art. 25 - fornecedor exclusivo, notória especialização, etc.',
    difficulty: 'medio'
  },
  {
    id: 'adm_031',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A dispensa de licitação é hipótese de ilegalidade.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 8.666/93, art. 24 prevê casos legais de dispensa.',
    difficulty: 'facil'
  },
  {
    id: 'adm_032',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O tipo de licitação "menor preço" é o mais utilizado.',
    correctAnswer: true,
    explanation: 'CERTO. É o tipo regra nas licitações.',
    difficulty: 'facil'
  },
  {
    id: 'adm_033',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Contratos administrativos têm prazo máximo de 60 meses.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 8.666/93 - regra geral é duração dos créditos orçamentários.',
    difficulty: 'dificil'
  },

  // AGENTES PÚBLICOS
  {
    id: 'adm_034',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Servidor público estatutário possui regime celetista.',
    correctAnswer: false,
    explanation: 'ERRADO. Estatutário = regime administrativo (Lei 8.112/90).',
    difficulty: 'facil'
  },
  {
    id: 'adm_035',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A estabilidade é adquirida após 3 anos de efetivo exercício.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 41 - 3 anos + avaliação de desempenho.',
    difficulty: 'facil'
  },
  {
    id: 'adm_036',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Servidor estável só perde o cargo por sentença judicial transitada em julgado.',
    correctAnswer: false,
    explanation: 'ERRADO. CF/88, art. 41, §1º - também por PAD e insuficiência de desempenho.',
    difficulty: 'medio'
  },
  {
    id: 'adm_037',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A posse deve ocorrer em até 30 dias da nomeação.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 8.112/90, art. 13 - prazo de 30 dias.',
    difficulty: 'medio'
  },
  {
    id: 'adm_038',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A disponibilidade ocorre quando o cargo é extinto.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 41, §3º - remuneração proporcional.',
    difficulty: 'dificil'
  },

  // IMPROBIDADE ADMINISTRATIVA
  {
    id: 'adm_039',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Atos de improbidade administrativa podem gerar perda da função pública.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 37, §4º - sanções como perda de função.',
    difficulty: 'facil'
  },
  {
    id: 'adm_040',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Apenas agentes públicos podem cometer atos de improbidade administrativa.',
    correctAnswer: false,
    explanation: 'ERRADO. Lei 8.429/92 - particulares também (indução, concurso).',
    difficulty: 'medio'
  },
  {
    id: 'adm_041',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Atos que causam enriquecimento ilícito geram perda dos bens acrescidos.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 8.429/92, art. 12, I - perda + ressarcimento + multa.',
    difficulty: 'medio'
  },
  {
    id: 'adm_042',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A ação de improbidade prescreve em 5 anos após o término do mandato.',
    correctAnswer: true,
    explanation: 'CERTO. Lei 8.429/92, art. 23 - 5 anos do fim do exercício.',
    difficulty: 'dificil'
  },

  // RESPONSABILIDADE CIVIL DO ESTADO
  {
    id: 'adm_043',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A responsabilidade civil do Estado é objetiva.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 37, §6º - teoria do risco administrativo.',
    difficulty: 'facil'
  },
  {
    id: 'adm_044',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O Estado responde por atos omissivos de forma objetiva.',
    correctAnswer: false,
    explanation: 'ERRADO. STF - responsabilidade subjetiva em omissões.',
    difficulty: 'dificil'
  },
  {
    id: 'adm_045',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O direito de regresso do Estado contra o agente exige dolo ou culpa.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 37, §6º - ação regressiva subjetiva.',
    difficulty: 'medio'
  },
  {
    id: 'adm_046',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Caso fortuito e força maior excluem a responsabilidade do Estado.',
    correctAnswer: true,
    explanation: 'CERTO. Rompem nexo causal - não há responsabilização.',
    difficulty: 'medio'
  },

  // CONTROLE DA ADMINISTRAÇÃO
  {
    id: 'adm_047',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O controle legislativo sobre a Administração é apenas político.',
    correctAnswer: false,
    explanation: 'ERRADO. Também é financeiro e administrativo (Tribunais de Contas).',
    difficulty: 'medio'
  },
  {
    id: 'adm_048',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O Judiciário pode rever o mérito do ato administrativo discricionário.',
    correctAnswer: false,
    explanation: 'ERRADO. Judiciário controla legalidade, não mérito (conveniência/oportunidade).',
    difficulty: 'medio'
  },
  {
    id: 'adm_049',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O mandado de segurança é remédio constitucional contra ilegalidade ou abuso de poder.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 5º, LXIX - direito líquido e certo.',
    difficulty: 'facil'
  },
  {
    id: 'adm_050',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'A ação popular pode ser proposta por qualquer cidadão para anular ato lesivo ao patrimônio público.',
    correctAnswer: true,
    explanation: 'CERTO. CF/88, art. 5º, LXXIII - controle popular da legalidade.',
    difficulty: 'facil'
  }
];

// ======================================
// ÁREA JURÍDICA - DIREITO PENAL
// ======================================

export const direitoPenalQuestions: GameQuestion[] = [
  // PRINCÍPIOS PENAIS
  {
    id: 'penal_001',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º CP - princípio da legalidade (nullum crimen, nulla poena sine lege).',
    difficulty: 'facil'
  },
  {
    id: 'penal_002',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A lei penal mais grave aplica-se aos fatos anteriores à sua vigência.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 5º, XL, CF - lei penal não retroage, salvo para beneficiar o réu.',
    difficulty: 'facil'
  },
  {
    id: 'penal_003',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A lei penal mais benéfica retroage para beneficiar o réu.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 2º, parágrafo único, CP - retroatividade da lex mitior.',
    difficulty: 'facil'
  },
  {
    id: 'penal_004',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A analogia in malam partem é permitida no Direito Penal.',
    correctAnswer: false,
    explanation: 'ERRADO. Vedada analogia prejudicial ao réu (princípio da legalidade).',
    difficulty: 'medio'
  },

  // APLICAÇÃO DA LEI PENAL
  {
    id: 'penal_005',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Aplica-se a lei brasileira aos crimes cometidos no território nacional.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º CP - princípio da territorialidade.',
    difficulty: 'facil'
  },
  {
    id: 'penal_006',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O território nacional inclui embarcações e aeronaves brasileiras, públicas ou a serviço do governo, onde quer que se encontrem.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, §1º, CP - território por extensão.',
    difficulty: 'medio'
  },
  {
    id: 'penal_007',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Considera-se praticado o crime no lugar onde ocorreu a ação ou omissão, ainda que o resultado tenha ocorrido em outro local.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 6º CP - teoria da ubiquidade (ação OU resultado).',
    difficulty: 'medio'
  },
  {
    id: 'penal_008',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A lei penal brasileira aplica-se aos crimes contra a vida do Presidente da República cometidos no estrangeiro.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 7º, I, a, CP - extraterritorialidade incondicionada.',
    difficulty: 'dificil'
  },

  // CRIME - CONCEITO E ELEMENTOS
  {
    id: 'penal_009',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Crime é o fato típico, ilícito e culpável.',
    correctAnswer: true,
    explanation: 'CERTO. Conceito analítico tripartido (teoria dominante).',
    difficulty: 'facil'
  },
  {
    id: 'penal_010',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A tipicidade é a adequação do fato concreto à norma penal incriminadora.',
    correctAnswer: true,
    explanation: 'CERTO. Primeiro elemento do crime - fato típico.',
    difficulty: 'facil'
  },
  {
    id: 'penal_011',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A ilicitude é afastada pelas causas de exclusão previstas no Código Penal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 23 CP - estado de necessidade, legítima defesa, etc.',
    difficulty: 'facil'
  },
  {
    id: 'penal_012',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A culpabilidade é a reprovabilidade da conduta típica e ilícita.',
    correctAnswer: true,
    explanation: 'CERTO. Juízo de censura sobre o autor do fato.',
    difficulty: 'medio'
  },

  // DOLO E CULPA
  {
    id: 'penal_013',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Diz-se o crime doloso quando o agente quis o resultado ou assumiu o risco de produzi-lo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 18, I, CP - dolo direto e eventual.',
    difficulty: 'facil'
  },
  {
    id: 'penal_014',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'No crime culposo, o agente deu causa ao resultado por imprudência, negligência ou imperícia.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 18, II, CP - modalidades da culpa.',
    difficulty: 'facil'
  },
  {
    id: 'penal_015',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Salvo disposição legal em contrário, o crime culposo é sempre punível.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 18, parágrafo único, CP - punível quando expressamente previsto.',
    difficulty: 'medio'
  },
  {
    id: 'penal_016',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'No dolo eventual, o agente assume o risco de produzir o resultado.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 18, I, parte final, CP - dolo eventual.',
    difficulty: 'medio'
  },

  // CONSUMAÇÃO E TENTATIVA
  {
    id: 'penal_017',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Diz-se o crime consumado quando nele se reúnem todos os elementos de sua definição legal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 14, I, CP - iter criminis completo.',
    difficulty: 'facil'
  },
  {
    id: 'penal_018',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Há tentativa quando, iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 14, II, CP - conatus.',
    difficulty: 'facil'
  },
  {
    id: 'penal_019',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A pena de tentativa é reduzida de 1/3 a 2/3.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 14, parágrafo único, CP - redução obrigatória.',
    difficulty: 'facil'
  },
  {
    id: 'penal_020',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A tentativa é punível em todos os crimes.',
    correctAnswer: false,
    explanation: 'ERRADO. Não é punível em crimes culposos, preterdolosos e de atentado.',
    difficulty: 'dificil'
  },

  // ERRO DE TIPO E ERRO DE PROIBIÇÃO
  {
    id: 'penal_021',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O erro sobre elemento constitutivo do tipo legal de crime exclui o dolo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 20, caput, CP - erro de tipo essencial.',
    difficulty: 'medio'
  },
  {
    id: 'penal_022',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O erro de tipo, quando evitável, exclui o crime.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 20, CP - erro evitável permite punição por crime culposo.',
    difficulty: 'dificil'
  },
  {
    id: 'penal_023',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O erro sobre a ilicitude do fato exclui a culpabilidade se for inevitável.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 21, caput, CP - erro de proibição inevitável.',
    difficulty: 'medio'
  },
  {
    id: 'penal_024',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O erro de proibição evitável isenta o agente de pena.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 21, parágrafo único, CP - diminui pena de 1/6 a 1/3.',
    difficulty: 'dificil'
  },

  // CAUSAS DE EXCLUSÃO DA ILICITUDE
  {
    id: 'penal_025',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Age em estado de necessidade quem pratica o fato para salvar direito próprio ou alheio de perigo atual.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 24 CP - causa de exclusão da ilicitude.',
    difficulty: 'facil'
  },
  {
    id: 'penal_026',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A legítima defesa exige moderação e uso dos meios necessários.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 25 CP - requisitos da legítima defesa.',
    difficulty: 'facil'
  },
  {
    id: 'penal_027',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O estrito cumprimento de dever legal é causa de exclusão da ilicitude.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 23, III, CP - excludente da ilicitude.',
    difficulty: 'facil'
  },
  {
    id: 'penal_028',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O exercício regular de direito afasta a ilicitude do fato típico.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 23, III, CP - excludente.',
    difficulty: 'facil'
  },
  {
    id: 'penal_029',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'É possível legítima defesa contra legítima defesa.',
    correctAnswer: false,
    explanation: 'ERRADO. Legítima defesa pressupõe agressão injusta.',
    difficulty: 'dificil'
  },

  // CAUSAS DE EXCLUSÃO DA CULPABILIDADE
  {
    id: 'penal_030',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'É isento de pena o agente que é inteiramente incapaz de entender o caráter ilícito do fato.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 26, caput, CP - inimputabilidade por doença mental.',
    difficulty: 'medio'
  },
  {
    id: 'penal_031',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O menor de 18 anos é penalmente inimputável.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 27 CP e art. 228 CF - critério biológico.',
    difficulty: 'facil'
  },
  {
    id: 'penal_032',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A embriaguez voluntária ou culposa afasta a imputabilidade penal.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 28, II, CP - não exclui (teoria da actio libera in causa).',
    difficulty: 'medio'
  },
  {
    id: 'penal_033',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A coação moral irresistível exclui a culpabilidade do coagido.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 22, 1ª parte, CP - inexigibilidade de conduta diversa.',
    difficulty: 'medio'
  },
  {
    id: 'penal_034',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Na obediência hierárquica, se a ordem for manifestamente ilegal, o subordinado responde pelo crime.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 22, 2ª parte, CP - ordem não manifestamente ilegal.',
    difficulty: 'dificil'
  },

  // CONCURSO DE PESSOAS
  {
    id: 'penal_035',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 29, caput, CP - teoria monista (unitária).',
    difficulty: 'facil'
  },
  {
    id: 'penal_036',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A pena do partícipe pode ser diminuída se a participação for de menor importância.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 29, §1º, CP - participação de menor importância.',
    difficulty: 'medio'
  },
  {
    id: 'penal_037',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'No concurso de pessoas, cada concorrente responde apenas pelos atos que praticou.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 29 CP - todos respondem pelo crime (teoria monista).',
    difficulty: 'medio'
  },

  // CONCURSO DE CRIMES
  {
    id: 'penal_038',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'No concurso material, aplicam-se cumulativamente as penas privativas de liberdade.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 69 CP - soma das penas (cúmulo material).',
    difficulty: 'facil'
  },
  {
    id: 'penal_039',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'No concurso formal, aplica-se a pena mais grave, aumentada de 1/6 até metade.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 70, caput, CP - exasperação (concurso formal perfeito).',
    difficulty: 'medio'
  },
  {
    id: 'penal_040',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'No crime continuado, aplica-se a pena de um só crime, aumentada de 1/6 a 2/3.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 71, caput, CP - ficção jurídica.',
    difficulty: 'medio'
  },

  // PENAS
  {
    id: 'penal_041',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'São penas privativas de liberdade a reclusão, a detenção e a prisão simples.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 33 CP - três espécies.',
    difficulty: 'facil'
  },
  {
    id: 'penal_042',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O condenado à pena de reclusão deve iniciar o cumprimento em regime fechado, semiaberto ou aberto.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 33, §1º, CP - reclusão admite todos os regimes.',
    difficulty: 'facil'
  },
  {
    id: 'penal_043',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A pena de detenção não pode ser cumprida em regime fechado.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 33, §1º, c, CP - detenção: semiaberto ou aberto (regra), mas STF admite fechado excepcionalmente.',
    difficulty: 'dificil'
  },
  {
    id: 'penal_044',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O condenado reincidente não pode iniciar o cumprimento da pena em regime aberto.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 33, §2º, c, CP - reincidente não pode regime aberto inicial.',
    difficulty: 'medio'
  },
  {
    id: 'penal_045',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'As penas restritivas de direitos substituem as privativas de liberdade quando a pena aplicada não for superior a 4 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 44, I, CP - requisito objetivo (até 4 anos).',
    difficulty: 'medio'
  },

  // CRIMES EM ESPÉCIE
  {
    id: 'penal_046',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O homicídio simples é crime doloso contra a vida.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 121 CP - competência do Tribunal do Júri.',
    difficulty: 'facil'
  },
  {
    id: 'penal_047',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O furto é a subtração de coisa alheia móvel mediante violência ou grave ameaça.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 155 CP - furto é sem violência. Com violência é roubo.',
    difficulty: 'facil'
  },
  {
    id: 'penal_048',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O roubo é crime complexo que reúne furto e constrangimento ilegal.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 157 CP - crime complexo (patrimônio + liberdade).',
    difficulty: 'medio'
  },
  {
    id: 'penal_049',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O estelionato consiste em obter vantagem ilícita mediante fraude.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 171 CP - obter vantagem ilícita em prejuízo alheio.',
    difficulty: 'facil'
  },
  {
    id: 'penal_050',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'O peculato é crime praticado exclusivamente por particular.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 312 CP - crime próprio de funcionário público.',
    difficulty: 'facil'
  }
];

// ======================================
// ÁREA JURÍDICA - DIREITO CIVIL
// ======================================

export const direitoCivilQuestions: GameQuestion[] = [
  // LEI DE INTRODUÇÃO (LINDB)
  {
    id: 'civil_001',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A lei começa a vigorar em todo o país 45 dias depois de oficialmente publicada.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1º LINDB - vacatio legis (salvo disposição em contrário).',
    difficulty: 'facil'
  },
  {
    id: 'civil_002',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Salvo disposição em contrário, a lei revogada não se restaura por ter a lei revogadora perdido a vigência.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 2º, §3º, LINDB - não há repristinação automática.',
    difficulty: 'medio'
  },
  {
    id: 'civil_003',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Ninguém se escusa de cumprir a lei, alegando que não a conhece.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 3º LINDB - princípio da obrigatoriedade.',
    difficulty: 'facil'
  },
  {
    id: 'civil_004',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Quando a lei for omissa, o juiz decidirá o caso de acordo com a analogia, os costumes e os princípios gerais de direito.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 4º LINDB - integração da norma.',
    difficulty: 'facil'
  },

  // PESSOAS NATURAIS
  {
    id: 'civil_005',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A personalidade civil da pessoa começa do nascimento com vida.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 2º CC - teoria natalista.',
    difficulty: 'facil'
  },
  {
    id: 'civil_006',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A lei põe a salvo, desde a concepção, os direitos do nascituro.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 2º, parte final, CC - proteção ao nascituro.',
    difficulty: 'facil'
  },
  {
    id: 'civil_007',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'É absolutamente incapaz o menor de 18 anos.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 3º e 4º CC - menor de 16 é absolutamente incapaz; de 16 a 18 é relativamente incapaz.',
    difficulty: 'medio'
  },
  {
    id: 'civil_008',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A emancipação voluntária requer que o menor tenha pelo menos 16 anos completos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 5º, parágrafo único, I, CC - requisito etário.',
    difficulty: 'medio'
  },

  // PESSOAS JURÍDICAS
  {
    id: 'civil_009',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Começa a existência legal das pessoas jurídicas de direito privado com a inscrição do ato constitutivo no respectivo registro.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 45 CC - registro como marco inicial.',
    difficulty: 'facil'
  },
  {
    id: 'civil_010',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'As pessoas jurídicas têm existência distinta da dos seus membros.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 45 CC - autonomia patrimonial.',
    difficulty: 'facil'
  },
  {
    id: 'civil_011',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A pessoa jurídica pode sofrer dano moral.',
    correctAnswer: true,
    explanation: 'CERTO. Súmula 227 STJ - dano moral à pessoa jurídica.',
    difficulty: 'medio'
  },

  // DOMICÍLIO
  {
    id: 'civil_012',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O domicílio da pessoa natural é o lugar onde ela estabelece a sua residência com ânimo definitivo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 70 CC - corpus + animus.',
    difficulty: 'facil'
  },
  {
    id: 'civil_013',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A pessoa pode ter mais de um domicílio.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 71 CC - pluralidade de domicílios.',
    difficulty: 'medio'
  },

  // BENS
  {
    id: 'civil_014',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'São bens imóveis o solo e tudo quanto se lhe incorporar natural ou artificialmente.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 79 CC - imóveis por natureza e acessão.',
    difficulty: 'facil'
  },
  {
    id: 'civil_015',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Os bens públicos de uso comum do povo são alienáveis.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 100 CC - bens públicos de uso comum são inalienáveis.',
    difficulty: 'facil'
  },
  {
    id: 'civil_016',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Os frutos percebidos são os que foram colhidos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 95, II, CC - frutos já separados.',
    difficulty: 'medio'
  },

  // NEGÓCIO JURÍDICO
  {
    id: 'civil_017',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A manifestação de vontade é elemento essencial do negócio jurídico.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 104, I, CC - requisito de validade.',
    difficulty: 'facil'
  },
  {
    id: 'civil_018',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O silêncio importa anuência quando as circunstâncias ou os usos o autorizarem.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 111 CC - silêncio circunstanciado.',
    difficulty: 'medio'
  },
  {
    id: 'civil_019',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A condição suspensiva impede a aquisição do direito.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 125 CC - direito só nasce com implemento da condição.',
    difficulty: 'medio'
  },
  {
    id: 'civil_020',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'É nulo o negócio jurídico simulado, mas subsistirá o que se dissimulou se válido for na substância e na forma.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 167 CC - simulação relativa.',
    difficulty: 'dificil'
  },

  // DEFEITOS DO NEGÓCIO JURÍDICO
  {
    id: 'civil_021',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O erro substancial vicia o negócio jurídico.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 138 CC - erro essencial anulável.',
    difficulty: 'facil'
  },
  {
    id: 'civil_022',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O dolo de terceiro não anula o negócio jurídico.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 148 CC - anula se a parte sabia ou deveria saber.',
    difficulty: 'medio'
  },
  {
    id: 'civil_023',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A coação para viciar o negócio jurídico deve ser tal que incuta fundado temor de dano iminente e considerável.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 151 CC - requisitos da coação.',
    difficulty: 'medio'
  },
  {
    id: 'civil_024',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Configura lesão quando uma pessoa, sob premente necessidade, se obriga a prestação manifestamente desproporcional.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 157 CC - lesão como vício de consentimento.',
    difficulty: 'medio'
  },

  // PRESCRIÇÃO E DECADÊNCIA
  {
    id: 'civil_025',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A prescrição extingue a pretensão.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 189 CC - prescrição atinge a pretensão, não o direito (extingue ação).',
    difficulty: 'dificil'
  },
  {
    id: 'civil_026',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O juiz não pode decretar de ofício a prescrição.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 219, §5º, CPC/2015 - juiz pode reconhecer de ofício.',
    difficulty: 'dificil'
  },
  {
    id: 'civil_027',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A prescrição pode ser interrompida por qualquer interessado.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 202, VI, CC - credor ou interessado.',
    difficulty: 'medio'
  },
  {
    id: 'civil_028',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O prazo prescricional geral é de 10 anos.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 205 CC - regra geral.',
    difficulty: 'facil'
  },

  // OBRIGAÇÕES
  {
    id: 'civil_029',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Nas obrigações solidárias, cada credor pode exigir a dívida toda.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 267 CC - solidariedade ativa.',
    difficulty: 'facil'
  },
  {
    id: 'civil_030',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A solidariedade não se presume.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 265 CC - resulta da lei ou da vontade das partes.',
    difficulty: 'facil'
  },
  {
    id: 'civil_031',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Nas obrigações alternativas, a escolha cabe ao devedor se outra coisa não se estipulou.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 252 CC - regra geral.',
    difficulty: 'medio'
  },
  {
    id: 'civil_032',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Ocorrendo caso fortuito ou força maior, o devedor é exonerado da obrigação.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 393 CC - excludente de responsabilidade.',
    difficulty: 'facil'
  },

  // CONTRATOS
  {
    id: 'civil_033',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Os contratos devem ser interpretados conforme a boa-fé.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 113 CC - princípio da boa-fé objetiva.',
    difficulty: 'facil'
  },
  {
    id: 'civil_034',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A função social do contrato limita a autonomia privada.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 421 CC - função social como limite.',
    difficulty: 'medio'
  },
  {
    id: 'civil_035',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A resilição unilateral do contrato é sempre permitida.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 473 CC - só nos casos previstos em lei.',
    difficulty: 'medio'
  },
  {
    id: 'civil_036',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A compra e venda é contrato consensual.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 482 CC - aperfeiçoa-se com acordo de vontades.',
    difficulty: 'facil'
  },
  {
    id: 'civil_037',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'No contrato de doação, o doador não responde pelos vícios redibitórios.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 552 CC - regra geral (salvo doação onerosa).',
    difficulty: 'dificil'
  },

  // RESPONSABILIDADE CIVIL
  {
    id: 'civil_038',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Aquele que, por ação ou omissão voluntária, causar dano a outrem fica obrigado a repará-lo.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 186 CC - ato ilícito.',
    difficulty: 'facil'
  },
  {
    id: 'civil_039',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A responsabilidade civil pode existir independentemente de culpa.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 927, parágrafo único, CC - responsabilidade objetiva.',
    difficulty: 'medio'
  },
  {
    id: 'civil_040',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O dano moral é sempre cumulável com o dano material.',
    correctAnswer: true,
    explanation: 'CERTO. Súmula 37 STJ - cumulação possível.',
    difficulty: 'facil'
  },
  {
    id: 'civil_041',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A exclusão da ilicitude ocorre em caso de legítima defesa ou exercício regular de direito.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 188 CC - excludentes de ilicitude.',
    difficulty: 'facil'
  },

  // DIREITO DE FAMÍLIA
  {
    id: 'civil_042',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O casamento civil é gratuito para quem o requerer na forma da lei.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1.512 CC - princípio da gratuidade.',
    difficulty: 'facil'
  },
  {
    id: 'civil_043',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O regime de bens pode ser alterado após o casamento mediante autorização judicial.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1.639, §2º, CC - possibilidade de alteração.',
    difficulty: 'medio'
  },
  {
    id: 'civil_044',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A união estável é convertida em casamento mediante pedido dos companheiros ao juiz.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1.726 CC - conversão possível.',
    difficulty: 'facil'
  },
  {
    id: 'civil_045',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O poder familiar compete aos pais, em igualdade de condições.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1.631 CC - igualdade parental.',
    difficulty: 'facil'
  },

  // DIREITO DAS SUCESSÕES
  {
    id: 'civil_046',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Aberta a sucessão, a herança transmite-se desde logo aos herdeiros legítimos e testamentários.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1.784 CC - princípio da saisine.',
    difficulty: 'facil'
  },
  {
    id: 'civil_047',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'O testamento pode dispor da totalidade dos bens do testador.',
    correctAnswer: false,
    explanation: 'ERRADO. Art. 1.789 CC - metade pertence aos herdeiros necessários (legítima).',
    difficulty: 'medio'
  },
  {
    id: 'civil_048',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'Os descendentes concorrem em igualdade de condições na sucessão.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1.834 CC - por cabeça (per capita).',
    difficulty: 'facil'
  },

  // POSSE E PROPRIEDADE
  {
    id: 'civil_049',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A propriedade adquire-se pela usucapião.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1.238 e seguintes CC - modo originário.',
    difficulty: 'facil'
  },
  {
    id: 'civil_050',
    area: 'juridica',
    subject: 'Direito Civil',
    question: 'A usucapião extraordinária requer 15 anos de posse ininterrupta.',
    correctAnswer: true,
    explanation: 'CERTO. Art. 1.238 CC - prazo reduzido para 10 anos se houver moradia/obras.',
    difficulty: 'medio'
  }
];

// Importar Direito do Trabalho
import { direitoTrabalhoQuestions } from './direitoTrabalho';

// Importar Área Policial
import { legislacaoPenalEspecialQuestions } from './legislacaoPenalEspecial';
import { criminologiaQuestions } from './criminologia';
import { direitosHumanosQuestions } from './direitosHumanos';
import { procedimentosPoliciaisQuestions } from './procedimentosPoliciais';

// Importar Área Fiscal-Bancária
import { conhecimentosBancariosQuestions } from './conhecimentosBancarios';
import { direitoTributarioQuestions } from './direitoTributario';
import { contabilidadeQuestions } from './contabilidade';
import { afoQuestions } from './afo';
import { economiaQuestions } from './economia';

// Importar Área Conhecimentos Gerais
import { portuguesQuestions } from './portugues';
import { raciocioLogicoQuestions } from './raciocinio';
import { informaticaQuestions } from './informatica';
import { atualidadesQuestions } from './atualidades';
import { historiaBrasilQuestions } from './historiaDoBrasil';

// Exportar todas as questões
export const allGameQuestions: GameQuestion[] = [
  ...direitoConstitucionalQuestions,
  ...direitoAdministrativoQuestions,
  ...direitoPenalQuestions,
  ...direitoCivilQuestions,
  ...direitoTrabalhoQuestions,
  ...legislacaoPenalEspecialQuestions,
  ...criminologiaQuestions,
  ...direitosHumanosQuestions,
  ...procedimentosPoliciaisQuestions,
  ...conhecimentosBancariosQuestions,
  ...direitoTributarioQuestions,
  ...contabilidadeQuestions,
  ...afoQuestions,
  ...economiaQuestions,
  ...portuguesQuestions,
  ...raciocioLogicoQuestions,
  ...informaticaQuestions,
  ...atualidadesQuestions,
  ...historiaBrasilQuestions
  // Sistema completo: 950 questões em 19 matérias!
];

// Exportar questões individuais
export { direitoTrabalhoQuestions };
export { legislacaoPenalEspecialQuestions };
export { criminologiaQuestions };
export { direitosHumanosQuestions };
export { procedimentosPoliciaisQuestions };
export { conhecimentosBancariosQuestions };
export { direitoTributarioQuestions };
export { contabilidadeQuestions };
export { afoQuestions };
export { economiaQuestions };
export { portuguesQuestions };
export { raciocioLogicoQuestions };
export { informaticaQuestions };
export { atualidadesQuestions };
export { historiaBrasilQuestions };

// Funções auxiliares
export function getQuestionsByArea(area: string): GameQuestion[] {
  return allGameQuestions.filter(q => q.area === area);
}

export function getQuestionsBySubject(subject: string): GameQuestion[] {
  return allGameQuestions.filter(q => q.subject === subject);
}

export function getRandomQuestions(count: number, area?: string, difficulty?: string): GameQuestion[] {
  let questions = allGameQuestions;
  
  if (area) {
    questions = questions.filter(q => q.area === area);
  }
  
  if (difficulty) {
    questions = questions.filter(q => q.difficulty === difficulty);
  }
  
  // Embaralhar e retornar count questões
  const shuffled = [...questions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function getQuestionById(id: string): GameQuestion | undefined {
  return allGameQuestions.find(q => q.id === id);
}