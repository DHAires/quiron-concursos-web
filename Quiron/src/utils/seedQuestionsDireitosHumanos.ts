import { projectId, publicAnonKey } from '../utils/supabase/info';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-50734795`;

interface Question {
  area: string;
  subject: string;
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  examBoard: string;
  year: number;
}

async function saveQuestion(question: Question) {
  try {
    // Convert to the format expected by QuestionPractice component
    const formattedQuestion = {
      area: question.area,
      subject: question.subject,
      topic: question.topic,
      enunciado: question.question,
      alternativas: {
        A: question.options[0],
        B: question.options[1],
        C: question.options[2],
        D: question.options[3],
        E: question.options[4],
      },
      gabarito: ['A', 'B', 'C', 'D', 'E'][question.correctAnswer],
      explicacao: question.explanation,
      banca: question.examBoard,
      ano: question.year,
      cargo: question.difficulty,
    };

    const response = await fetch(`${API_BASE}/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`,
      },
      body: JSON.stringify(formattedQuestion),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error response:', errorText);
      throw new Error(`Failed to save question: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error saving question:', error);
    throw error;
  }
}

// ============= DECLARAÇÃO UNIVERSAL DOS DIREITOS HUMANOS =============
export async function seedQuestionsDeclaracaoUniversal() {
  console.log('🌍 Importing Declaração Universal questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'declaracao-universal-dos-direitos-humanos',
      question: 'A Declaração Universal dos Direitos Humanos (DUDH) foi proclamada pela Assembleia Geral da ONU em:',
      options: [
        '1945, logo após o fim da Segunda Guerra Mundial',
        '1948, como resposta às atrocidades da Segunda Guerra',
        '1966, junto com os Pactos Internacionais',
        '1988, no processo de redemocratização brasileira',
        '1945, com a criação da Organização das Nações Unidas'
      ],
      correctAnswer: 1,
      explanation: 'A Declaração Universal dos Direitos Humanos foi proclamada pela Assembleia Geral das Nações Unidas em 10 de dezembro de 1948 (Resolução 217 A III), em Paris. Foi uma resposta às atrocidades cometidas durante a Segunda Guerra Mundial, estabelecendo direitos fundamentais que devem ser universalmente protegidos.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'declaracao-universal-dos-direitos-humanos',
      question: 'Segundo o artigo 1º da DUDH, "todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de:',
      options: [
        'Justiça',
        'Liberdade',
        'Fraternidade',
        'Solidariedade',
        'Igualdade'
      ],
      correctAnswer: 2,
      explanation: 'O artigo 1º da DUDH estabelece: "Todos os seres humanos nascem livres e iguais em dignidade e direitos. São dotados de razão e consciência e devem agir em relação uns aos outros com espírito de FRATERNIDADE." Este artigo sintetiza os valores fundamentais da Revolução Francesa: liberdade, igualdade e fraternidade.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'declaracao-universal-dos-direitos-humanos',
      question: 'Sobre a natureza jurídica da Declaração Universal dos Direitos Humanos, é CORRETO afirmar:',
      options: [
        'É um tratado internacional com força vinculante obrigatória',
        'Possui natureza de recomendação, mas adquiriu força de direito consuetudinário internacional',
        'É uma lei internacional que vincula automaticamente todos os Estados',
        'Não possui qualquer relevância jurídica, sendo apenas declaração política',
        'É uma convenção ratificada que exige incorporação ao direito interno'
      ],
      correctAnswer: 1,
      explanation: 'A DUDH foi proclamada como uma RECOMENDAÇÃO da Assembleia Geral da ONU, não sendo inicialmente um tratado vinculante. Contudo, ao longo do tempo, adquiriu status de direito consuetudinário internacional, sendo reconhecida como norma imperativa (jus cogens) pela comunidade internacional, o que lhe confere força jurídica vinculante.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2022
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'declaracao-universal-dos-direitos-humanos',
      question: 'De acordo com a DUDH, sobre o direito à vida, liberdade e segurança pessoal, é INCORRETO afirmar:',
      options: [
        'Todo ser humano tem direito à vida, à liberdade e à segurança pessoal',
        'Ninguém será mantido em escravidão ou servidão',
        'Ninguém será submetido à tortura nem a tratamento ou castigo cruel, desumano ou degradante',
        'A pena de morte é expressamente proibida em qualquer circunstância',
        'Ninguém será arbitrariamente preso, detido ou exilado'
      ],
      correctAnswer: 3,
      explanation: 'A DUDH NÃO proíbe expressamente a pena de morte. Embora estabeleça o direito à vida (art. 3º) e proíba torturas e tratamentos cruéis (art. 5º), não veda categoricamente a pena capital. A abolição da pena de morte é tratada em protocolos posteriores, como o Segundo Protocolo Facultativo ao PIDCP (1989).',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'declaracao-universal-dos-direitos-humanos',
      question: 'A DUDH estabelece em seu artigo 11 que "toda pessoa acusada de um ato delituoso tem o direito de ser presumida inocente até que a sua culpabilidade tenha sido provada". Este princípio é conhecido como:',
      options: [
        'Princípio do devido processo legal',
        'Princípio da ampla defesa',
        'Princípio da presunção de inocência (ou não culpabilidade)',
        'Princípio do contraditório',
        'Princípio da legalidade'
      ],
      correctAnswer: 2,
      explanation: 'O artigo 11 da DUDH consagra o princípio da PRESUNÇÃO DE INOCÊNCIA (ou presunção de não culpabilidade), segundo o qual toda pessoa acusada de um delito deve ser considerada inocente até que sua culpa seja comprovada em processo legal, com todas as garantias necessárias. Este princípio está também previsto na CF/88, art. 5º, LVII.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Declaração Universal imported successfully!');
}

// ============= PACTO DE SAN JOSÉ DA COSTA RICA =============
export async function seedQuestionsPactoSanJose() {
  console.log('🌎 Importing Pacto de San José questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'pacto-de-san-jose-da-costa-rica',
      question: 'A Convenção Americana sobre Direitos Humanos (Pacto de San José da Costa Rica) foi adotada em:',
      options: [
        '1948, junto com a Declaração Americana',
        '1966, junto com os Pactos da ONU',
        '1969, entrando em vigor em 1978',
        '1988, na redemocratização latino-americana',
        '1992, com a ratificação pelo Brasil'
      ],
      correctAnswer: 2,
      explanation: 'A Convenção Americana sobre Direitos Humanos (também chamada Pacto de San José da Costa Rica) foi adotada em 22 de novembro de 1969, entrando em vigor internacional em 18 de julho de 1978. O Brasil assinou em 1992 e promulgou via Decreto 678/1992. É o principal tratado de direitos humanos do Sistema Interamericano.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'pacto-de-san-jose-da-costa-rica',
      question: 'Sobre a relação entre a Convenção Americana e a Constituição Federal brasileira, assinale a alternativa CORRETA:',
      options: [
        'A Convenção não possui aplicação no Brasil por não ter sido aprovada como emenda constitucional',
        'Conflitos entre a Convenção e a CF/88 são resolvidos sempre em favor da Constituição',
        'Segundo o STF, tratados de direitos humanos têm status supralegal, abaixo da CF mas acima das leis',
        'A Convenção Americana foi aprovada com status de emenda constitucional',
        'A Convenção possui hierarquia superior à Constituição Federal'
      ],
      correctAnswer: 2,
      explanation: 'Segundo o STF (RE 466.343/2008 e 349.703/RS), os tratados de direitos humanos possuem STATUS SUPRALEGAL: estão abaixo da Constituição, mas acima da legislação ordinária. Apenas tratados aprovados pelo rito do art. 5º, § 3º da CF (quorum de emenda constitucional) têm equivalência constitucional, como a Convenção sobre Direitos das Pessoas com Deficiência.',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'pacto-de-san-jose-da-costa-rica',
      question: 'Segundo a Convenção Americana, o direito à vida é protegido pela lei e, em geral, desde:',
      options: [
        'O nascimento com vida',
        'A concepção',
        'O início da atividade cerebral',
        'A viabilidade fetal extrauterina',
        'A declaração de nascido vivo'
      ],
      correctAnswer: 1,
      explanation: 'O artigo 4.1 da Convenção Americana estabelece: "Toda pessoa tem o direito de que se respeite sua vida. Esse direito deve ser protegido pela lei e, em geral, DESDE O MOMENTO DA CONCEPÇÃO." A expressão "em geral" indica que não é absoluto, permitindo interpretações em casos como aborto legal, mas a proteção inicia-se desde a concepção.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'pacto-de-san-jose-da-costa-rica',
      question: 'A Convenção Americana proíbe a aplicação da pena de morte. Sobre essa vedação, é CORRETO afirmar:',
      options: [
        'A pena de morte é proibida de forma absoluta em qualquer circunstância',
        'Nos países que não aboliram a pena de morte, esta não pode ser estendida a delitos que não a previam anteriormente',
        'A Convenção permite a adoção da pena de morte para crimes comuns',
        'Estados que aboliram podem restabelecer a pena de morte livremente',
        'A pena de morte é permitida para crimes políticos'
      ],
      correctAnswer: 1,
      explanation: 'A Convenção Americana NÃO proíbe absolutamente a pena de morte (art. 4º), mas estabelece severas restrições: 1) países que não a aboliram só podem aplicá-la aos delitos mais graves; 2) NÃO pode ser estendida a delitos que não a previam antes; 3) NÃO pode ser restabelecida onde foi abolida; 4) NÃO se aplica a menores de 18 ou maiores de 70 anos; 5) NÃO para crimes políticos.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'pacto-de-san-jose-da-costa-rica',
      question: 'Quanto às garantias judiciais previstas na Convenção Americana (art. 8º), assinale a alternativa INCORRETA:',
      options: [
        'Toda pessoa tem direito a ser ouvida com as devidas garantias em prazo razoável',
        'Presunção de inocência enquanto não comprovada legalmente a culpa',
        'Direito do acusado de ser assistido gratuitamente por tradutor ou intérprete se não compreender o idioma',
        'Possibilidade de aplicação de pena por analogia em casos não previstos em lei',
        'Direito de não ser obrigado a depor contra si mesmo'
      ],
      correctAnswer: 3,
      explanation: 'A Convenção Americana NO SEU ART. 9º consagra o PRINCÍPIO DA LEGALIDADE: "Ninguém pode ser condenado por ações ou omissões que, no momento em que foram cometidas, não sejam delituosas. Não se pode impor pena mais grave que a aplicável no momento da perpetração do delito." Isso VEDA a aplicação de pena por analogia (analogia in malam partem). Todas as outras alternativas estão corretas.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Pacto de San José imported successfully!');
}

// ============= DIREITOS CIVIS E POLÍTICOS =============
export async function seedQuestionsDireitosCivisPoliticos() {
  console.log('⚖️ Importing Direitos Civis e Políticos questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-civis-e-politicos',
      question: 'Os Direitos Civis e Políticos, também conhecidos como direitos de primeira geração, caracterizam-se por:',
      options: [
        'Exigir prestações positivas do Estado',
        'Ter realização progressiva conforme disponibilidade orçamentária',
        'Impor abstenções ao Estado, protegendo liberdades individuais',
        'Depender de políticas públicas para sua efetivação',
        'Serem direitos coletivos e difusos'
      ],
      correctAnswer: 2,
      explanation: 'Os Direitos Civis e Políticos (primeira geração) caracterizam-se por exigir principalmente ABSTENÇÕES do Estado (obrigações negativas), protegendo liberdades individuais como vida, liberdade, propriedade, voto. Diferem dos direitos sociais (segunda geração) que exigem prestações positivas e têm realização progressiva.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-civis-e-politicos',
      question: 'O Pacto Internacional de Direitos Civis e Políticos (PIDCP) de 1966 estabelece que os direitos nele previstos:',
      options: [
        'Têm aplicação progressiva conforme recursos disponíveis',
        'Devem ser garantidos de forma imediata pelos Estados',
        'Aplicam-se apenas aos nacionais de cada país',
        'Dependem de regulamentação infraconstitucional',
        'Podem ser suspensos livremente em qualquer situação'
      ],
      correctAnswer: 1,
      explanation: 'O PIDCP estabelece direitos de APLICAÇÃO IMEDIATA, exigindo que os Estados garantam imediatamente os direitos civis e políticos. Diferentemente do PIDESC (que prevê realização progressiva), o PIDCP não admite postergação, pois envolve principalmente obrigações negativas (não interferir nas liberdades).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-civis-e-politicos',
      question: 'São exemplos de direitos civis e políticos, EXCETO:',
      options: [
        'Direito à vida',
        'Liberdade de expressão',
        'Direito ao voto',
        'Direito à moradia',
        'Proibição de tortura'
      ],
      correctAnswer: 3,
      explanation: 'O direito à MORADIA é um direito SOCIAL (segunda geração), não um direito civil ou político. Os direitos civis e políticos (primeira geração) incluem: vida, liberdade, segurança, propriedade, voto, liberdade de expressão, devido processo legal, proibição de tortura, etc.',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-civis-e-politicos',
      question: 'O PIDCP permite a derrogação (suspensão temporária) de direitos em situações excepcionais. Contudo, alguns direitos são INDERROGÁVEIS, como:',
      options: [
        'Liberdade de expressão e reunião',
        'Direito à vida e proibição de tortura',
        'Direito ao voto e à nacionalidade',
        'Liberdade de locomoção e propriedade',
        'Direito de greve e associação'
      ],
      correctAnswer: 1,
      explanation: 'O PIDCP (art. 4º) permite derrogação em situações excepcionais, mas alguns direitos são INDERROGÁVEIS (núcleo duro): direito à vida, proibição de tortura, proibição de escravidão, princípio da legalidade penal, direito ao reconhecimento como pessoa, liberdade de pensamento/consciência/religião. Esses NUNCA podem ser suspensos.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2022
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-civis-e-politicos',
      question: 'Sobre o direito à liberdade de expressão nos tratados internacionais, é CORRETO afirmar:',
      options: [
        'É um direito absoluto que não admite qualquer restrição',
        'Pode ser limitado para proteger direitos de terceiros, ordem pública, saúde e moral públicas',
        'Não está previsto na Declaração Universal nem nos Pactos',
        'É exclusivo de cidadãos nacionais',
        'Pode ser suprimido por decisão administrativa'
      ],
      correctAnswer: 1,
      explanation: 'A liberdade de expressão NÃO é absoluta. Segundo o PIDCP (art. 19) e a Convenção Americana (art. 13), pode ser limitada para proteger: direitos e reputação de terceiros, segurança nacional, ordem pública, saúde ou moral públicas. As restrições devem ser previstas em lei e necessárias em sociedade democrática.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Direitos Civis e Políticos imported successfully!');
}

// ============= DIREITOS ECONÔMICOS, SOCIAIS E CULTURAIS =============
export async function seedQuestionsDireitosESC() {
  console.log('📚 Importing Direitos Econômicos, Sociais e Culturais questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-economicos-sociais-e-culturais',
      question: 'Os Direitos Econômicos, Sociais e Culturais (DESC), também conhecidos como direitos de segunda geração, caracterizam-se por:',
      options: [
        'Exigir apenas abstenções do Estado',
        'Ter aplicação imediata e incondicional',
        'Exigir prestações positivas e ter realização progressiva',
        'Serem direitos exclusivos de trabalhadores',
        'Não constarem em tratados internacionais'
      ],
      correctAnswer: 2,
      explanation: 'Os DESC (segunda geração) caracterizam-se por exigir PRESTAÇÕES POSITIVAS do Estado (ações concretas) e ter REALIZAÇÃO PROGRESSIVA conforme disponibilidade de recursos. Incluem direitos ao trabalho, saúde, educação, moradia, previdência, etc. Diferem dos direitos civis e políticos (primeira geração).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-economicos-sociais-e-culturais',
      question: 'O Pacto Internacional de Direitos Econômicos, Sociais e Culturais (PIDESC) estabelece que os Estados devem:',
      options: [
        'Implementar todos os direitos imediatamente',
        'Adotar medidas até o máximo de recursos disponíveis para alcançar progressivamente os direitos',
        'Priorizar direitos econômicos sobre sociais',
        'Garantir apenas direitos de nacionais',
        'Suspender direitos em crises econômicas'
      ],
      correctAnswer: 1,
      explanation: 'O PIDESC (art. 2º) adota o princípio da REALIZAÇÃO PROGRESSIVA: Estados devem tomar medidas até o MÁXIMO DE SEUS RECURSOS DISPONÍVEIS para alcançar progressivamente a plena realização dos DESC. Não significa postergação indefinida, mas reconhece dependência de recursos financeiros.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-economicos-sociais-e-culturais',
      question: 'São exemplos de Direitos Econômicos, Sociais e Culturais, EXCETO:',
      options: [
        'Direito ao trabalho',
        'Direito à educação',
        'Direito à saúde',
        'Liberdade de expressão',
        'Direito à previdência social'
      ],
      correctAnswer: 3,
      explanation: 'A LIBERDADE DE EXPRESSÃO é um direito CIVIL e POLÍTICO (primeira geração), não um DESC. Os DESC (segunda geração) incluem: trabalho, saúde, educação, moradia, previdência social, alimentação, lazer, cultura, etc.',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-economicos-sociais-e-culturais',
      question: 'O princípio da vedação do retrocesso social estabelece que:',
      options: [
        'Estados podem revogar livremente conquistas sociais',
        'Uma vez implementados, os DESC não podem ser suprimidos sem justificativa',
        'Apenas direitos civis estão protegidos contra retrocessos',
        'Crises econômicas autorizam supressão de direitos sociais',
        'Não há proteção constitucional contra retrocessos'
      ],
      correctAnswer: 1,
      explanation: 'O princípio da VEDAÇÃO DO RETROCESSO (ou efeito cliquet) estabelece que, uma vez conquistados e implementados, os DESC não podem ser suprimidos ou reduzidos sem justificativa razoável. Protege conquistas sociais, impedindo que o Estado elimine direitos já concretizados, mesmo em crises.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2022
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'direitos-economicos-sociais-e-culturais',
      question: 'O Comitê DESC, órgão que monitora o PIDESC, analisa:',
      options: [
        'Apenas denúncias individuais',
        'Relatórios periódicos dos Estados sobre implementação dos DESC',
        'Apenas violações de direitos civis',
        'Casos criminais internacionais',
        'Somente questões de refugiados'
      ],
      correctAnswer: 1,
      explanation: 'O Comitê de Direitos Econômicos, Sociais e Culturais (Comitê DESC) monitora o PIDESC principalmente através da análise de RELATÓRIOS PERIÓDICOS que os Estados devem apresentar sobre medidas adotadas e progressos na implementação dos DESC. Também pode receber comunicações individuais (Protocolo Facultativo de 2008).',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Direitos Econômicos, Sociais e Culturais imported successfully!');
}

// ============= SISTEMA GLOBAL DE PROTEÇÃO =============
export async function seedQuestionsSistemaGlobal() {
  console.log('🌍 Importing Sistema Global de Proteção questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-global-de-protecao',
      question: 'O Sistema Global de Proteção dos Direitos Humanos é vinculado a qual organização internacional?',
      options: [
        'Organização dos Estados Americanos (OEA)',
        'União Europeia',
        'Organização das Nações Unidas (ONU)',
        'Mercosul',
        'BRICS'
      ],
      correctAnswer: 2,
      explanation: 'O Sistema Global (ou Universal) de Proteção dos Direitos Humanos é vinculado à ORGANIZAÇÃO DAS NAÇÕES UNIDAS (ONU), criada em 1945. Inclui a Declaração Universal (1948), Pactos de 1966, Convenções temáticas e órgãos como Conselho de Direitos Humanos e Comitês de tratados.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-global-de-protecao',
      question: 'O Conselho de Direitos Humanos da ONU, criado em 2006, possui como uma de suas funções:',
      options: [
        'Julgar criminosos de guerra',
        'Realizar Revisão Periódica Universal (RPU) da situação dos direitos humanos em todos os Estados',
        'Aplicar sanções econômicas',
        'Aprovar tratados internacionais',
        'Autorizar intervenções militares'
      ],
      correctAnswer: 1,
      explanation: 'O Conselho de Direitos Humanos da ONU (criado em 2006, substituindo a Comissão) realiza a REVISÃO PERIÓDICA UNIVERSAL (RPU), mecanismo que examina periodicamente a situação dos direitos humanos em TODOS os 193 Estados-membros da ONU. Também adota resoluções, nomeia procedimentos especiais, etc.',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-global-de-protecao',
      question: 'São convenções temáticas do Sistema Global de Proteção, EXCETO:',
      options: [
        'Convenção sobre Eliminação de Todas as Formas de Discriminação Racial',
        'Convenção sobre Eliminação de Discriminação contra a Mulher (CEDAW)',
        'Convenção sobre os Direitos da Criança',
        'Convenção Americana sobre Direitos Humanos',
        'Convenção contra a Tortura'
      ],
      correctAnswer: 3,
      explanation: 'A CONVENÇÃO AMERICANA sobre Direitos Humanos pertence ao SISTEMA INTERAMERICANO (regional), não ao Sistema Global da ONU. As demais são convenções temáticas da ONU: Discriminação Racial (1965), CEDAW (1979), Criança (1989), Tortura (1984), entre outras.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-global-de-protecao',
      question: 'A "Carta Internacional dos Direitos Humanos" é composta por:',
      options: [
        'Apenas a Declaração Universal dos Direitos Humanos',
        'Declaração Universal, PIDCP e PIDESC',
        'Somente os dois Pactos de 1966',
        'Todas as convenções da ONU',
        'Apenas tratados regionais'
      ],
      correctAnswer: 1,
      explanation: 'A "CARTA INTERNACIONAL DOS DIREITOS HUMANOS" é composta por três documentos fundamentais: 1) Declaração Universal dos Direitos Humanos (1948); 2) Pacto Internacional de Direitos Civis e Políticos - PIDCP (1966); 3) Pacto Internacional de Direitos Econômicos, Sociais e Culturais - PIDESC (1966).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2022
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-global-de-protecao',
      question: 'Sobre os Comitês de tratados da ONU, é CORRETO afirmar:',
      options: [
        'São órgãos jurisdicionais com poder de impor sanções',
        'Analisam relatórios periódicos dos Estados e podem receber comunicações individuais',
        'Apenas julgam crimes internacionais',
        'Não possuem função de monitoramento',
        'São subordinados ao Conselho de Segurança'
      ],
      correctAnswer: 1,
      explanation: 'Os Comitês de tratados (Treaty Bodies) são órgãos compostos por peritos independentes que monitoram a implementação dos tratados de direitos humanos. Principais funções: analisar RELATÓRIOS PERIÓDICOS dos Estados e, quando previsto, receber COMUNICAÇÕES INDIVIDUAIS. Não são jurisdicionais, mas quase-jurisdicionais.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Sistema Global de Proteção imported successfully!');
}

// ============= SISTEMA INTERAMERICANO =============
export async function seedQuestionsSistemaInteramericano() {
  console.log('⚖️ Importing Sistema Interamericano questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-interamericano',
      question: 'O Sistema Interamericano de Direitos Humanos é composto por:',
      options: [
        'Apenas a Corte Interamericana de Direitos Humanos',
        'Comissão Interamericana de Direitos Humanos e Corte Interamericana de Direitos Humanos',
        'Tribunal Penal Internacional e Comissão de Direitos Humanos',
        'Corte Internacional de Justiça e Conselho de Direitos Humanos',
        'Apenas a Comissão Interamericana de Direitos Humanos'
      ],
      correctAnswer: 1,
      explanation: 'O Sistema Interamericano de Proteção dos Direitos Humanos possui DOIS órgãos principais: 1) Comissão Interamericana de Direitos Humanos (CIDH) - órgão quase-jurisdicional, com sede em Washington/EUA; 2) Corte Interamericana de Direitos Humanos (Corte IDH) - órgão jurisdicional, com sede em San José/Costa Rica. Ambos vinculados à OEA.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-interamericano',
      question: 'Para que um caso seja levado à Corte Interamericana de Direitos Humanos, é necessário:',
      options: [
        'Apresentação direta pela vítima à Corte',
        'Esgotamento dos recursos internos e prévia tramitação na Comissão Interamericana',
        'Autorização do Estado violador',
        'Apenas denúncia de organizações não-governamentais',
        'Aprovação do Conselho de Segurança da ONU'
      ],
      correctAnswer: 1,
      explanation: 'Para acesso à Corte IDH, são necessários: 1) ESGOTAMENTO dos recursos de jurisdição interna (salvo exceções); 2) Prévia tramitação na COMISSÃO Interamericana; 3) O Estado deve ter reconhecido a competência contenciosa da Corte; 4) Apenas Estados ou a Comissão podem submeter casos à Corte (indivíduos NÃO podem acessá-la diretamente). O Brasil reconheceu a competência da Corte em 1998.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-interamericano',
      question: 'Sobre as decisões da Corte Interamericana de Direitos Humanos, é CORRETO afirmar:',
      options: [
        'São meras recomendações sem força vinculante',
        'Possuem caráter vinculante e obrigam os Estados condenados',
        'Dependem de ratificação pelo Congresso Nacional para serem cumpridas',
        'Podem ser ignoradas pelo Poder Judiciário nacional',
        'Não produzem efeitos no ordenamento jurídico brasileiro'
      ],
      correctAnswer: 1,
      explanation: 'As sentenças da Corte Interamericana têm CARÁTER VINCULANTE, DEFINITIVO e INAPELÁVEL (art. 67 da Convenção Americana). Os Estados-partes comprometem-se a cumprir as decisões. No Brasil, o STF reconhece a força vinculante, devendo o Estado brasileiro implementar as determinações da Corte, incluindo indenizações, investigações, reformas legislativas, etc.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2022
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-interamericano',
      question: 'O Brasil foi condenado pela Corte Interamericana em diversos casos emblemáticos. Um dos casos mais conhecidos refere-se:',
      options: [
        'Caso Ximenes Lopes (morte em clínica psiquiátrica)',
        'Caso Marbury vs Madison',
        'Caso Brown vs Board of Education',
        'Caso Ellwanger (antissemitismo)',
        'Caso Cesare Battisti (extradição)'
      ],
      correctAnswer: 0,
      explanation: 'O Brasil foi condenado em diversos casos pela Corte IDH, incluindo: 1) Caso Ximenes Lopes (2006) - morte em clínica psiquiátrica; 2) Caso Escher (2009) - interceptação telefônica ilegal; 3) Caso Gomes Lund (Guerrilha do Araguaia, 2010) - desaparecimento forçado e Lei de Anistia; 4) Caso Fazenda Brasil Verde (2016) - trabalho escravo; entre outros.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'sistema-interamericano',
      question: 'A Comissão Interamericana de Direitos Humanos (CIDH) possui, entre suas funções:',
      options: [
        'Apenas elaborar relatórios sobre a situação dos direitos humanos',
        'Receber petições individuais, realizar investigações e emitir recomendações aos Estados',
        'Julgar definitivamente casos de violação de direitos humanos',
        'Aplicar sanções econômicas a Estados violadores',
        'Autorizar intervenções militares humanitárias'
      ],
      correctAnswer: 1,
      explanation: 'A Comissão Interamericana (CIDH) tem funções: 1) Receber e analisar petições individuais ou comunicações interestatais; 2) Realizar investigações in loco; 3) Elaborar relatórios sobre países; 4) Emitir recomendações aos Estados; 5) Submeter casos à Corte IDH; 6) Solicitar medidas cautelares. NÃO possui competência jurisdicional para julgar definitivamente, apenas quase-jurisdicional.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Sistema Interamericano imported successfully!');
}

// ============= GRUPOS VULNERÁVEIS =============
export async function seedQuestionsGruposVulneraveis() {
  console.log('🏳️‍🌈 Importing Grupos Vulneráveis questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'grupos-vulneraveis',
      question: 'A Lei nº 7.716/89 define os crimes resultantes de preconceito de raça ou de cor. Segundo essa lei, constitui crime:',
      options: [
        'Apenas a discriminação com violência física',
        'Impedir ou obstar o acesso de alguém a estabelecimento comercial por preconceito',
        'Somente ofensas verbais com uso de palavras específicas',
        'Apenas discriminação no ambiente de trabalho',
        'Somente atos praticados por funcionários públicos'
      ],
      correctAnswer: 1,
      explanation: 'A Lei 7.716/89 (Lei do Racismo) tipifica diversas condutas discriminatórias: impedir/obstar acesso a estabelecimentos, elevadores, transportes públicos, locais públicos; recusar atendimento; impedir acesso a cargos públicos ou privados; negar matrícula em estabelecimentos de ensino; entre outros. Crime INAFIANÇÁVEL e IMPRESCRITÍVEL (CF, art. 5º, XLII).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'grupos-vulneraveis',
      question: 'Sobre o crime de racismo, é CORRETO afirmar:',
      options: [
        'É afiançável e prescritível',
        'É inafiançável e imprescritível',
        'Admite liberdade provisória',
        'Prescreve em 20 anos',
        'Pode ser objeto de anistia ou graça'
      ],
      correctAnswer: 1,
      explanation: 'Segundo o art. 5º, XLII da CF/88, "a prática do racismo constitui crime INAFIANÇÁVEL e IMPRESCRITÍVEL, sujeito à pena de reclusão, nos termos da lei". É um dos poucos crimes imprescritíveis no ordenamento brasileiro (junto com ação de grupos armados contra a ordem constitucional e o Estado Democrático).',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'grupos-vulneraveis',
      question: 'A Lei Maria da Penha (Lei nº 11.340/2006) criou mecanismos para coibir a violência doméstica e familiar contra a mulher. Sobre essa lei, é INCORRETO afirmar:',
      options: [
        'Veda a aplicação de penas de cesta básica ou multa isolada',
        'Prevê medidas protetivas de urgência',
        'Permite a criação de Juizados de Violência Doméstica e Familiar',
        'Admite a renúncia da representação em qualquer momento',
        'Estabelece o afastamento do agressor do lar como medida protetiva'
      ],
      correctAnswer: 3,
      explanation: 'A Lei Maria da Penha NÃO admite renúncia da representação de forma livre. Nos crimes de ação penal pública condicionada à representação, a renúncia só é válida se feita PERANTE O JUIZ, em audiência especialmente designada (art. 16). Isso visa proteger a vítima de pressões para retirar a denúncia.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'grupos-vulneraveis',
      question: 'O Estatuto da Pessoa com Deficiência (Lei nº 13.146/2015) estabelece que:',
      options: [
        'Pessoas com deficiência têm capacidade civil relativa',
        'A avaliação da deficiência é exclusivamente médica',
        'Pessoas com deficiência são plenamente capazes para casar, constituir união estável, exercer direitos sexuais e reprodutivos',
        'A curatela é sempre plena e abrange todos os atos da vida civil',
        'Não há direito a atendimento prioritário'
      ],
      correctAnswer: 2,
      explanation: 'O Estatuto da Pessoa com Deficiência (Lei 13.146/2015) revolucionou o sistema ao estabelecer que pessoas com deficiência são PLENAMENTE CAPAZES para todos os atos da vida civil. A curatela é medida EXTRAORDINÁRIA e PROPORCIONAL, restrita aos atos patrimoniais e negociais. Não afeta direitos personalíssimos: casar, constituir união, ter filhos, trabalhar, votar, etc.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'grupos-vulneraveis',
      question: 'Sobre os direitos da população LGBTQIA+, o Supremo Tribunal Federal decidiu que:',
      options: [
        'A homofobia e transfobia não constituem crimes',
        'A homofobia e transfobia devem ser enquadradas como crimes de racismo, por analogia',
        'Apenas agressões físicas contra LGBTQIA+ são criminalizadas',
        'Não há proteção constitucional contra discriminação por orientação sexual',
        'A discriminação por orientação sexual é permitida em ambientes religiosos'
      ],
      correctAnswer: 1,
      explanation: 'No julgamento da ADO 26 e MI 4733 (2019), o STF decidiu que condutas homofóbicas e transfóbicas devem ser enquadradas como crimes de RACISMO, por analogia, nos termos da Lei 7.716/89, até que o Congresso edite lei específica. Reconheceu mora legislativa inconstitucional e estendeu a proteção, tornando tais condutas inafiançáveis e imprescritíveis.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Grupos Vulneráveis imported successfully!');
}

// ============= MECANISMOS DE PROTEÇÃO =============
export async function seedQuestionsMecanismosProtecao() {
  console.log('🛡️ Importing Mecanismos de Proteção questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'mecanismos-de-protecao',
      question: 'São mecanismos de proteção dos direitos humanos no Brasil, EXCETO:',
      options: [
        'Defensoria Pública',
        'Ministério Público',
        'Conselho Nacional de Justiça',
        'Tribunal Penal Internacional',
        'Conselhos de Direitos'
      ],
      correctAnswer: 3,
      explanation: 'O TRIBUNAL PENAL INTERNACIONAL (TPI) é um mecanismo INTERNACIONAL, não brasileiro. Os mecanismos nacionais incluem: Defensoria Pública, Ministério Público, Poder Judiciário, CNJ, Conselhos de Direitos (criança, idoso, mulher, etc.), Defensoria Pública da União, entre outros.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'mecanismos-de-protecao',
      question: 'A Defensoria Pública, segundo a Constituição Federal, é instituição essencial à função jurisdicional do Estado, incumbindo-lhe:',
      options: [
        'Apenas a defesa criminal de pessoas carentes',
        'Orientação jurídica, promoção dos direitos humanos e defesa dos necessitados',
        'Somente atuação em processos cíveis',
        'Defesa exclusiva de funcionários públicos',
        'Apenas ações coletivas'
      ],
      correctAnswer: 1,
      explanation: 'Segundo o art. 134 da CF/88, a Defensoria Pública é instituição permanente, essencial à função jurisdicional do Estado, incumbindo-lhe a ORIENTAÇÃO JURÍDICA, a PROMOÇÃO DOS DIREITOS HUMANOS e a DEFESA, em todos os graus, judicial e extrajudicial, dos direitos individuais e coletivos, de forma integral e gratuita, aos necessitados (EC 80/2014).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'mecanismos-de-protecao',
      question: 'O habeas corpus, garantia constitucional prevista no art. 5º, LXVIII da CF/88, é utilizado quando:',
      options: [
        'Houver violação a direitos sociais',
        'Houver ilegalidade ou abuso de poder no que tange à liberdade de locomoção',
        'Para proteger direito líquido e certo não amparado por habeas data',
        'Para acessar informações pessoais em bancos de dados',
        'Apenas em crimes hediondos'
      ],
      correctAnswer: 1,
      explanation: 'O HABEAS CORPUS (CF, art. 5º, LXVIII) protege a LIBERDADE DE LOCOMOÇÃO: "conceder-se-á habeas corpus sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder". É remédio constitucional gratuito e célere.',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'mecanismos-de-protecao',
      question: 'A ação civil pública, regulada pela Lei 7.347/85, é instrumento processual destinado à:',
      options: [
        'Defesa exclusiva de direitos individuais',
        'Proteção de interesses difusos, coletivos e individuais homogêneos',
        'Apenas ações criminais',
        'Defesa do patrimônio privado',
        'Somente questões tributárias'
      ],
      correctAnswer: 1,
      explanation: 'A AÇÃO CIVIL PÚBLICA (Lei 7.347/85) é instrumento processual para proteção de interesses DIFUSOS, COLETIVOS e INDIVIDUAIS HOMOGÊNEOS relacionados a: meio ambiente, consumidor, patrimônio artístico/histórico/turístico/paisagístico, ordem econômica, ordem urbanística, direitos humanos, etc. Legitimados: MP, Defensoria, União, Estados, Municípios, associações.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2022
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'mecanismos-de-protecao',
      question: 'O Conselho Nacional de Justiça (CNJ), criado pela EC 45/2004, tem como função:',
      options: [
        'Julgar processos em última instância',
        'Controle administrativo, financeiro e disciplinar do Poder Judiciário',
        'Legislar sobre direitos humanos',
        'Aplicar penas criminais',
        'Atuar como instância recursal'
      ],
      correctAnswer: 1,
      explanation: 'O CONSELHO NACIONAL DE JUSTIÇA (CNJ), criado pela EC 45/2004 (art. 103-B, CF), é órgão de CONTROLE ADMINISTRATIVO, FINANCEIRO e DISCIPLINAR do Poder Judiciário. NÃO é órgão jurisdicional (não julga processos), mas fiscaliza atuação administrativa e financeira, julga processos disciplinares de magistrados, expede atos regulamentares, etc.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Mecanismos de Proteção imported successfully!');
}

// ============= TORTURA E TRATAMENTO CRUEL =============
export async function seedQuestionsTortura() {
  console.log('⛔ Importing Tortura e Tratamento Cruel questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'tortura-e-tratamento-cruel',
      question: 'A Lei nº 9.455/97 define os crimes de tortura no Brasil. Segundo essa lei, constitui crime de tortura:',
      options: [
        'Apenas a tortura praticada por agentes públicos',
        'Constranger alguém com emprego de violência ou grave ameaça, causando-lhe sofrimento físico ou mental, com diversas finalidades',
        'Somente a tortura com finalidade de obter confissão',
        'Apenas a tortura que resulte em morte',
        'Somente a tortura praticada contra presos'
      ],
      correctAnswer: 1,
      explanation: 'A Lei 9.455/97 define tortura como CONSTRANGER alguém com emprego de violência ou grave ameaça, causando sofrimento físico ou mental: 1) com fim de obter informação/confissão; 2) para provocar ação/omissão de natureza criminosa; 3) em razão de discriminação; 4) submeter pessoa presa a sofrimento desnecessário. Crime praticado por QUALQUER pessoa (não só agentes públicos).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'tortura-e-tratamento-cruel',
      question: 'Sobre o crime de tortura, é INCORRETO afirmar:',
      options: [
        'É crime inafiançável',
        'É insuscetível de graça ou anistia',
        'Admite liberdade provisória',
        'A condenação acarretará a perda do cargo, função ou emprego público',
        'Responde pela prática de tortura o agente que se omite quando podia evitar'
      ],
      correctAnswer: 2,
      explanation: 'Segundo a CF/88 (art. 5º, XLIII) e a Lei 9.455/97, o crime de tortura é: 1) INAFIANÇÁVEL; 2) INSUSCETÍVEL de graça ou anistia; 3) Por ele responde o mandante, executor e quem se omite quando podia evitar; 4) A condenação acarreta perda do cargo/função pública. NÃO admite liberdade provisória (art. 5º, XLIII, CF e art. 1º, § 7º, Lei 9.455/97).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'tortura-e-tratamento-cruel',
      question: 'A Convenção Contra a Tortura e Outros Tratamentos ou Penas Cruéis, Desumanos ou Degradantes da ONU (1984) estabelece que:',
      options: [
        'A tortura pode ser justificada em situações de emergência nacional',
        'Nenhuma circunstância excepcional pode ser invocada para justificar a tortura',
        'A tortura é permitida para obter informações em casos de terrorismo',
        'Estados de guerra autorizam a prática de tortura',
        'Ordens superiores justificam atos de tortura'
      ],
      correctAnswer: 1,
      explanation: 'A Convenção da ONU contra a Tortura (1984, ratificada pelo Brasil em 1989) estabelece que NENHUMA CIRCUNSTÂNCIA EXCEPCIONAL pode justificar tortura: nem estado de guerra, instabilidade política, emergência pública, ordens superiores. A proibição da tortura é ABSOLUTA, constituindo norma imperativa de direito internacional (jus cogens).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'tortura-e-tratamento-cruel',
      question: 'A jurisprudência brasileira entende que a prova obtida mediante tortura:',
      options: [
        'É válida se for a única prova disponível',
        'Pode ser utilizada em crimes graves',
        'É absolutamente nula, configurando prova ilícita',
        'Pode ser aproveitada parcialmente',
        'É válida se confirmada por outras provas'
      ],
      correctAnswer: 2,
      explanation: 'A prova obtida mediante tortura é ABSOLUTAMENTE NULA, configurando prova ilícita (CF, art. 5º, LVI). Além disso, contamina as provas dela derivadas (teoria dos frutos da árvore envenenada - fruits of the poisonous tree). A confissão obtida sob tortura não tem qualquer valor probatório, independentemente de sua veracidade ou confirmação posterior.',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'direitos-humanos',
      topic: 'tortura-e-tratamento-cruel',
      question: 'O Protocolo Facultativo à Convenção contra a Tortura (OPCAT), do qual o Brasil é signatário, criou:',
      options: [
        'Tribunal Internacional para julgar torturadores',
        'Mecanismo Nacional de Prevenção e Combate à Tortura',
        'Pena de morte para crimes de tortura',
        'Anistia para agentes que denunciarem tortura',
        'Fundo de compensação para vítimas de tortura'
      ],
      correctAnswer: 1,
      explanation: 'O OPCAT (2002, ratificado pelo Brasil em 2007) prevê a criação de um sistema de visitas periódicas a locais de privação de liberdade e estabelece a obrigação dos Estados criarem um MECANISMO NACIONAL DE PREVENÇÃO (MNP). No Brasil, o MNP foi criado pela Lei 12.847/2013, com função de realizar visitas preventivas a locais de detenção para prevenir tortura.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2022
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Tortura e Tratamento Cruel imported successfully!');
}

// ============= MASTER FUNCTION TO IMPORT ALL =============
export async function seedAllDireitosHumanosQuestions() {
  console.log('🚀 Starting Direitos Humanos questions import...');

  try {
    await seedQuestionsDeclaracaoUniversal();
    await seedQuestionsPactoSanJose();
    await seedQuestionsDireitosCivisPoliticos();
    await seedQuestionsDireitosESC();
    await seedQuestionsSistemaGlobal();
    await seedQuestionsSistemaInteramericano();
    await seedQuestionsGruposVulneraveis();
    await seedQuestionsMecanismosProtecao();
    await seedQuestionsTortura();

    console.log('✅ ALL DIREITOS HUMANOS QUESTIONS IMPORTED! 🎯🔥');
    console.log('📊 Total: 45 questions across 9 topics');
  } catch (error) {
    console.error('❌ Error importing Direitos Humanos questions:', error);
    throw error;
  }
}
