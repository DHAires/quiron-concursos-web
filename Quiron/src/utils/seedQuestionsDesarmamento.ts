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

// ============= SISTEMA NACIONAL DE ARMAS (SINARM) =============
export async function seedQuestionsSINARM() {
  console.log('🎯 Importing SINARM questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'sistema-nacional-de-armas-sinarm',
      question: 'O Sistema Nacional de Armas (SINARM), instituído pela Lei 10.826/2003, tem como finalidade principal:',
      options: [
        'Autorizar o porte de armas de fogo para qualquer cidadão',
        'Identificar, cadastrar e registrar armas de fogo, munições e acessórios',
        'Fabricar armas de fogo para as Forças Armadas',
        'Fiscalizar estabelecimentos comerciais em geral',
        'Regulamentar a caça esportiva no Brasil'
      ],
      correctAnswer: 1,
      explanation: 'O SINARM (Lei 10.826/2003, art. 1º e 2º) é um sistema informatizado destinado a IDENTIFICAR, CADASTRAR e REGISTRAR armas de fogo, munições, acessórios e rastreamento desde fabricação/importação até destino final. Gerido pela Polícia Federal, visa controlar armas civis. Não confundir com SIGMA (Sistema de Gerenciamento Militar de Armas), que controla armas das Forças Armadas.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'sistema-nacional-de-armas-sinarm',
      question: 'Segundo o Estatuto do Desarmamento, compete ao SINARM, EXCETO:',
      options: [
        'Cadastrar as armas de fogo produzidas, importadas e vendidas no País',
        'Cadastrar as autorizações de porte de arma de fogo',
        'Identificar as características e a propriedade de armas de fogo',
        'Realizar perícia em armas de fogo, artefatos explosivos e munições',
        'Cadastrar as transferências de propriedade de armas de fogo'
      ],
      correctAnswer: 3,
      explanation: 'Competências do SINARM (art. 2º): cadastrar armas produzidas/importadas/vendidas; cadastrar autorizações de porte; identificar características/propriedade de armas; cadastrar transferências; integrar informações de apreensões. A realização de PERÍCIAS compete aos Institutos de Criminalística/Perícia Técnica, NÃO ao SINARM (que é sistema de registro/cadastro).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'sistema-nacional-de-armas-sinarm',
      question: 'O órgão responsável pela gestão do SINARM é:',
      options: [
        'Exército Brasileiro',
        'Polícia Rodoviária Federal',
        'Polícia Federal',
        'Ministério da Justiça',
        'Forças Armadas'
      ],
      correctAnswer: 2,
      explanation: 'O SINARM é GERIDO pela POLÍCIA FEDERAL (art. 2º, caput). A PF coordena o sistema, cadastra registros e portes de armas civis. O Exército tem competência sobre armas de uso RESTRITO (SIGMA - Sistema de Gerenciamento Militar de Armas). A distinção é importante: PF = armas civis; Exército = armas restritas.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'sistema-nacional-de-armas-sinarm',
      question: 'Sobre o acesso às informações do SINARM, é CORRETO afirmar:',
      options: [
        'As informações são públicas e podem ser acessadas por qualquer cidadão',
        'Apenas o Exército Brasileiro tem acesso irrestrito',
        'São de acesso restrito, sendo disponibilizadas aos órgãos de segurança pública e Forças Armadas',
        'Somente juízes criminais podem requisitar informações',
        'As informações são sigilosas e não podem ser compartilhadas'
      ],
      correctAnswer: 2,
      explanation: 'As informações do SINARM são de ACESSO RESTRITO, disponibilizadas aos órgãos e entidades de segurança pública e às Forças Armadas para fins de investigação e fiscalização (art. 2º, parágrafo único). NÃO são públicas, mas podem ser compartilhadas com autoridades competentes mediante requisição legal. Finalidade: investigações criminais e controle de armas.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'sistema-nacional-de-armas-sinarm',
      question: 'A integração de informações sobre apreensões de armas de fogo no SINARM visa:',
      options: [
        'Apenas fins estatísticos sem aplicação prática',
        'Rastrear armas utilizadas em crimes e investigar sua origem',
        'Determinar quais armas devem ser destruídas',
        'Estabelecer quotas de produção de armas',
        'Autorizar novos registros de armas'
      ],
      correctAnswer: 1,
      explanation: 'A integração de informações sobre APREENSÕES no SINARM (art. 2º, VI) permite RASTREAR armas usadas em crimes, identificar origem (fabricante, importador, proprietário original), investigar desvios e tráfico de armas. É fundamental para inteligência policial: permite identificar se arma apreendida tem registro, se foi furtada/roubada, se há ligação com outros crimes (balística).',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ SINARM questions imported successfully!');
}

// ============= REGISTRO DE ARMAS =============
export async function seedQuestionsRegistroArmas() {
  console.log('📋 Importing Registro de Armas questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'registro-de-armas',
      question: 'Para adquirir arma de fogo de uso permitido, o interessado deverá declarar efetiva necessidade e comprovar, EXCETO:',
      options: [
        'Idoneidade, com apresentação de certidões de antecedentes criminais',
        'Capacidade técnica para o manuseio, comprovada por curso',
        'Aptidão psicológica atestada por psicólogo credenciado',
        'Renda mensal superior a 10 salários mínimos',
        'Residência certa ou ocupação lícita'
      ],
      correctAnswer: 3,
      explanation: 'Requisitos para REGISTRO de arma (art. 4º): 1) declaração de efetiva necessidade; 2) idade mínima 25 anos; 3) idoneidade (certidões negativas); 4) capacidade técnica (curso); 5) aptidão psicológica. NÃO há exigência de renda mínima específica. A renda é avaliada apenas para comprovar condições de armazenar adequadamente, mas sem valor mínimo legal.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'registro-de-armas',
      question: 'A idade mínima para registrar arma de fogo de uso permitido é de:',
      options: [
        '18 anos',
        '21 anos',
        '25 anos',
        '30 anos',
        'Não há idade mínima'
      ],
      correctAnswer: 2,
      explanation: 'A idade mínima para REGISTRO de arma de fogo de uso permitido é 25 ANOS (art. 4º, I). Essa exigência visa garantir maturidade do proprietário. Excepcionalmente, integrantes de entidades de tiro podem registrar a partir dos 18 anos (Decreto 11.366/2023). Não confundir com porte (que também exige 25 anos, mas com requisitos adicionais).',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'registro-de-armas',
      question: 'O Certificado de Registro de Arma de Fogo tem validade de:',
      options: [
        '1 ano',
        '3 anos',
        '5 anos',
        '10 anos',
        'Prazo indeterminado'
      ],
      correctAnswer: 4,
      explanation: 'Segundo o Decreto 11.366/2023 e jurisprudência consolidada, o CERTIFICADO DE REGISTRO tem PRAZO INDETERMINADO. A Lei 10.826/2003 originalmente previa revalidação periódica, mas o Decreto 11.366/2023 alterou isso, tornando o registro PERMANENTE, desde que mantidos os requisitos. Diferente do PORTE (que tem prazo determinado e renovação).',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'registro-de-armas',
      question: 'Sobre a quantidade de armas que podem ser registradas por pessoa física, é CORRETO afirmar:',
      options: [
        'É permitido registrar apenas 1 arma por pessoa',
        'É permitido registrar até 2 armas por pessoa',
        'É permitido registrar até 4 armas por pessoa',
        'Não há limite legal para o registro de armas',
        'É permitido registrar até 6 armas por pessoa'
      ],
      correctAnswer: 2,
      explanation: 'Segundo o Decreto 11.366/2023, cidadãos comuns podem registrar até 4 ARMAS DE FOGO de uso permitido. CAÇADORES, ATIRADORES e COLECIONADORES (CAC) têm limites superiores. A limitação visa evitar arsenal excessivo em residências. Cada registro exige comprovação de efetiva necessidade específica para aquela arma.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'registro-de-armas',
      question: 'A aptidão psicológica para registro de arma de fogo deve ser atestada por:',
      options: [
        'Qualquer psicólogo registrado no CRP',
        'Psicólogo credenciado pela Polícia Federal',
        'Psiquiatra da rede pública',
        'Perito criminal',
        'Médico do trabalho'
      ],
      correctAnswer: 1,
      explanation: 'A aptidão psicológica deve ser comprovada mediante PSICÓLOGO CREDENCIADO PELA POLÍCIA FEDERAL (art. 4º, III). O credenciamento garante padrões técnicos específicos para avaliação psicológica de porte/registro de armas. A avaliação verifica ausência de transtornos que comprometam capacidade de portar armas com segurança. Validade: 5 anos (renovável).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Registro de Armas questions imported successfully!');
}

// ============= PORTE DE ARMA =============
export async function seedQuestionsPorteArma() {
  console.log('🔫 Importing Porte de Arma questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'porte-de-arma',
      question: 'Segundo o Estatuto do Desarmamento, a autorização para o porte de arma de fogo de uso permitido é de competência:',
      options: [
        'Do Exército Brasileiro',
        'Da Polícia Federal',
        'Das Polícias Civis estaduais',
        'Do Ministério da Justiça',
        'Das Secretarias de Segurança Pública'
      ],
      correctAnswer: 1,
      explanation: 'A competência para AUTORIZAR o porte de arma de fogo de uso permitido é da POLÍCIA FEDERAL (art. 10, caput). A PF analisa requisitos, concede, renova e cancela autorizações de porte. O Exército tem competência sobre armas de uso RESTRITO. A centralização na PF visa uniformizar critérios em todo território nacional.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'porte-de-arma',
      question: 'A autorização de porte de arma de fogo prevista no art. 10 tem validade de:',
      options: [
        '1 ano',
        '2 anos',
        '3 anos',
        '5 anos',
        'Prazo indeterminado'
      ],
      correctAnswer: 3,
      explanation: 'A autorização de PORTE prevista no art. 10 (situações especiais) tem validade de ATÉ 5 ANOS, podendo ser renovada (Decreto 11.366/2023). Diferente do registro (prazo indeterminado). A renovação exige comprovação de que persistem os requisitos: efetiva necessidade, capacidade técnica, aptidão psicológica, idoneidade.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'porte-de-arma',
      question: 'Sobre o porte de arma para integrantes das guardas municipais, é CORRETO afirmar:',
      options: [
        'É proibido em qualquer hipótese',
        'É autorizado automaticamente para todos os guardas',
        'Pode ser autorizado quando em serviço, conforme regulamentação própria',
        'Depende de autorização individual da Polícia Federal para cada guarda',
        'É permitido apenas fora do serviço'
      ],
      correctAnswer: 2,
      explanation: 'Guardas municipais podem portar armas QUANDO EM SERVIÇO, desde que: 1) município possua órgão de controle interno; 2) guarda seja funcionária de carreira; 3) curso de formação; 4) haja regulamentação municipal (art. 6º-A). O porte é FUNCIONAL (apenas durante o exercício da função), não pessoal. Lei 13.022/2014 (Estatuto das Guardas) complementa.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'porte-de-arma',
      question: 'O porte de arma de fogo por agentes da Polícia Federal, Polícia Rodoviária Federal e Polícia Ferroviária Federal:',
      options: [
        'Depende de autorização individual renovável anualmente',
        'É permitido em todo o território nacional, para arma de propriedade particular ou fornecida pela instituição',
        'É proibido fora do horário de serviço',
        'Exige autorização específica da Polícia Federal',
        'É restrito ao estado de lotação do agente'
      ],
      correctAnswer: 1,
      explanation: 'Segundo art. 6º, VII e VIII, agentes da PF, PRF e PFF têm porte FUNCIONAL em TODO o território nacional, podendo usar arma FORNECIDA PELA INSTITUIÇÃO ou de PROPRIEDADE PARTICULAR (quando previamente registrada). O porte independe de autorização individual (é inerente ao cargo). Também abrange Polícias Civis, Militares, Corpo de Bombeiros, agentes penitenciários, etc.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'porte-de-arma',
      question: 'Quanto ao porte de arma para residentes em área rural, é INCORRETO afirmar:',
      options: [
        'Pode ser autorizado para proprietários rurais',
        'Exige comprovação de efetiva necessidade',
        'É automaticamente concedido a qualquer morador da zona rural',
        'Depende de registro prévio da arma',
        'Está sujeito aos requisitos gerais de idoneidade e capacidade técnica'
      ],
      correctAnswer: 2,
      explanation: 'O porte para residentes em área rural (art. 10, § 2º) NÃO é automático. Exige: 1) comprovação de efetiva necessidade (proteção de patrimônio, distância de policiamento); 2) registro da arma; 3) requisitos gerais (idoneidade, capacidade técnica, aptidão psicológica). A autorização é DISCRICIONÁRIA da PF, avaliando caso a caso.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Porte de Arma questions imported successfully!');
}

// ============= CRIMES E PENAS =============
export async function seedQuestionsCrimesPenas() {
  console.log('⚖️ Importing Crimes e Penas questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'crimes-e-penas',
      question: 'Possuir ou manter sob sua guarda arma de fogo, acessório ou munição, de uso permitido, em desacordo com determinação legal ou regulamentar, no interior de sua residência ou dependência desta, caracteriza crime com pena de:',
      options: [
        'Detenção de 6 meses a 2 anos, e multa',
        'Detenção de 1 a 3 anos, e multa',
        'Reclusão de 1 a 3 anos, e multa',
        'Reclusão de 2 a 4 anos, e multa',
        'Reclusão de 3 a 6 anos, e multa'
      ],
      correctAnswer: 1,
      explanation: 'Posse irregular de arma de fogo (art. 12): DETENÇÃO de 1 a 3 anos, e multa. Crime de MENOR POTENCIAL OFENSIVO (pena máxima até 2 anos com aumento) quando no interior da residência. Se FORA da residência, é PORTE ILEGAL (art. 14): reclusão de 2 a 4 anos, e multa (crime mais grave). A distinção é crucial: posse = residência; porte = via pública.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'crimes-e-penas',
      question: 'O crime de porte ilegal de arma de fogo de uso permitido (art. 14) tem pena prevista de:',
      options: [
        'Detenção de 6 meses a 2 anos',
        'Detenção de 1 a 3 anos',
        'Reclusão de 1 a 3 anos',
        'Reclusão de 2 a 4 anos',
        'Reclusão de 3 a 6 anos'
      ],
      correctAnswer: 3,
      explanation: 'Porte ilegal de arma de fogo de uso permitido (art. 14): RECLUSÃO de 2 a 4 anos, e multa. Crime praticado FORA da residência/dependência. Mais grave que posse (art. 12). Se arma estiver MUNICIADA, pode configurar causa de aumento. Se for arma de USO RESTRITO (art. 16), pena é de 3 a 6 anos de reclusão.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'crimes-e-penas',
      question: 'Sobre o crime de omissão de cautela (art. 13), é CORRETO afirmar:',
      options: [
        'Não existe previsão legal desse crime no Estatuto',
        'Consiste em deixar de observar as cautelas necessárias para impedir que menor de 18 anos ou deficiente mental se apodere de arma',
        'É crime de ação pública condicionada à representação',
        'Tem pena de reclusão de 2 a 4 anos',
        'Só se consuma se o menor praticar crime com a arma'
      ],
      correctAnswer: 1,
      explanation: 'Omissão de cautela (art. 13): DETENÇÃO de 1 a 2 anos, e multa. Crime consiste em deixar de observar cautelas para impedir que MENOR DE 18 ANOS ou DEFICIENTE MENTAL se apodere de arma. Crime de PERIGO (não exige resultado lesivo). DOLOSO (exige consciência do descuido). Se o menor praticar crime, pode haver concurso, mas a omissão já é crime autônomo.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'crimes-e-penas',
      question: 'Disparo de arma de fogo ou acionar munição em lugar habitado ou em suas adjacências, em via pública ou em direção a ela, caracteriza crime com pena de:',
      options: [
        'Detenção de 1 a 2 anos',
        'Detenção de 2 a 4 anos',
        'Reclusão de 1 a 3 anos',
        'Reclusão de 2 a 4 anos',
        'Reclusão de 3 a 6 anos'
      ],
      correctAnswer: 2,
      explanation: 'Disparo de arma de fogo (art. 15): RECLUSÃO de 2 a 4 anos, e multa. Local: lugar habitado, adjacências, via pública ou em direção a ela. Crime de PERIGO COMUM (coloca em risco número indeterminado de pessoas). Consumação independe de resultado lesivo. Se houver lesão/morte, há concurso com crimes contra a pessoa (absorvidos só se meio necessário para outro crime).',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'crimes-e-penas',
      question: 'Sobre os crimes previstos no Estatuto do Desarmamento, é INCORRETO afirmar:',
      options: [
        'São crimes de ação penal pública incondicionada',
        'Admitem transação penal e suspensão condicional do processo quando cabíveis',
        'A pena é aumentada em caso de uso de arma de fogo de uso restrito',
        'Todos os crimes são inafiançáveis',
        'O porte ilegal qualificado pelo uso de arma de fogo de uso restrito tem pena de 3 a 6 anos'
      ],
      correctAnswer: 3,
      explanation: 'Os crimes do Estatuto NÃO são todos inafiançáveis. Apenas o COMÉRCIO ILEGAL (art. 17) e o TRÁFICO INTERNACIONAL (art. 18) são INAFIANÇÁVEIS e insuscetíveis de liberdade provisória (art. 21). Posse (art. 12) e porte (art. 14) são AFIANÇÁVEIS. Todos são de ação penal pública incondicionada. Admitem transação/suspensão quando preencherem requisitos da Lei 9.099/95.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Crimes e Penas questions imported successfully!');
}

// ============= COMPETÊNCIA =============
export async function seedQuestionsCompetencia() {
  console.log('🏛️ Importing Competência questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'competencia',
      question: 'Sobre a competência para processar e julgar os crimes previstos no Estatuto do Desarmamento, é CORRETO afirmar:',
      options: [
        'É sempre da Justiça Federal',
        'É sempre da Justiça Estadual',
        'É da Justiça Federal quando houver interesse da União, ou quando envolver arma de uso restrito',
        'É do Juizado Especial Criminal em qualquer hipótese',
        'Depende exclusivamente do local do crime'
      ],
      correctAnswer: 2,
      explanation: 'Competência (art. 21-A): crimes da Lei 10.826/2003 são de competência da JUSTIÇA ESTADUAL, SALVO: 1) quando praticados contra interesse da UNIÃO ou suas entidades; 2) quando envolver ARMAS DE USO RESTRITO; 3) TRÁFICO INTERNACIONAL. Nesses casos, competência é da JUSTIÇA FEDERAL. Entendimento consolidado do STJ (Súmula 498: posse/porte de arma restrita = competência federal).',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'competencia',
      question: 'O crime de posse irregular de arma de fogo de uso RESTRITO é da competência de qual justiça?',
      options: [
        'Justiça Estadual comum',
        'Justiça Federal',
        'Juizado Especial Criminal Estadual',
        'Justiça Militar',
        'Tribunal do Júri'
      ],
      correctAnswer: 1,
      explanation: 'Posse/porte de arma de USO RESTRITO é de competência da JUSTIÇA FEDERAL (Súmula 498 STJ e art. 109, IV, CF). Fundamento: armas de uso restrito são controladas pelo Exército (interesse da União). Aplicável aos arts. 12 (posse), 14 (porte) e 16 (posse/porte de arma restrita) quando envolverem armas de uso restrito. Arma de uso PERMITIDO = competência estadual.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'competencia',
      question: 'O crime de tráfico internacional de arma de fogo (art. 18) é de competência:',
      options: [
        'Da Justiça Estadual',
        'Do Juizado Especial Federal',
        'Da Justiça Federal',
        'Da Justiça Militar',
        'Do Tribunal do Júri Estadual'
      ],
      correctAnswer: 2,
      explanation: 'Tráfico INTERNACIONAL de armas (art. 18) é de competência da JUSTIÇA FEDERAL (art. 109, IV e V, CF). Fundamento: crime transnacional, tratado internacional, interesse da União. Crime gravíssimo: pena de reclusão de 4 a 8 anos. É INAFIANÇÁVEL e insuscetível de liberdade provisória. Também se aplica ao tráfico INTERESTADUAL quando configurar interesse da União.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'competencia',
      question: 'Crime de disparo de arma de fogo praticado dentro de aeroporto internacional é de competência:',
      options: [
        'Justiça Estadual',
        'Justiça Federal',
        'Justiça Militar da União',
        'Juizado Especial Criminal',
        'Depende da nacionalidade da vítima'
      ],
      correctAnswer: 1,
      explanation: 'Disparo em aeroporto INTERNACIONAL = competência da JUSTIÇA FEDERAL (art. 109, IV, CF). Aeroportos internacionais são bens da União (Infraero/Concessionária federal), caracterizando interesse federal. Se o aeroporto fosse ESTADUAL/MUNICIPAL sem caráter internacional, seria competência estadual. A natureza do bem (federal) e função (transporte internacional) definem a competência.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'competencia',
      question: 'Sobre a aplicação da Lei 9.099/95 (Juizados Especiais) aos crimes do Estatuto do Desarmamento, é CORRETO afirmar:',
      options: [
        'Não se aplica a nenhum crime do Estatuto',
        'Aplica-se apenas ao crime de posse irregular (art. 12)',
        'Aplica-se aos crimes com pena máxima não superior a 2 anos',
        'Aplica-se a todos os crimes, pois são de menor potencial ofensivo',
        'Depende de autorização judicial'
      ],
      correctAnswer: 2,
      explanation: 'A Lei 9.099/95 aplica-se aos crimes com pena máxima NÃO SUPERIOR A 2 ANOS (art. 61). No Estatuto: POSSE (art. 12, detenção de 1 a 3 anos) e OMISSÃO DE CAUTELA (art. 13, detenção de 1 a 2 anos) podem ser considerados de menor potencial ofensivo dependendo da interpretação/circunstâncias. Porte (art. 14, reclusão 2-4 anos) NÃO se enquadra. Admite transação penal e suspensão condicional.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Competência questions imported successfully!');
}

// ============= EXCEÇÕES AO DESARMAMENTO =============
export async function seedQuestionsExcecoes() {
  console.log('✅ Importing Exceções ao Desarmamento questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'excecoes-ao-desarmamento',
      question: 'São isentos do REGISTRO de arma de fogo, conforme o Estatuto do Desarmamento, EXCETO:',
      options: [
        'Integrantes das Forças Armadas',
        'Integrantes de órgãos de segurança pública',
        'Agentes operacionais da Abin',
        'Residentes em área rural',
        'Oficiais das polícias militares e corpos de bombeiros militares'
      ],
      correctAnswer: 3,
      explanation: 'ISENTOS de REGISTRO (art. 6º): Forças Armadas, órgãos de segurança pública (policiais, bombeiros), Abin, auditores fiscais da Receita Federal que exerçam atividades externas, etc. RESIDENTES EM ÁREA RURAL NÃO estão isentos de registro; podem ter facilitado o PORTE (art. 10, § 2º), mas devem REGISTRAR a arma normalmente. Confusão comum: isenção de registro ≠ facilidade no porte.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'excecoes-ao-desarmamento',
      question: 'Integrantes das Forças Armadas podem portar arma de fogo:',
      options: [
        'Apenas quando em serviço',
        'Em todo território nacional, mesmo fora de serviço',
        'Apenas nas dependências das unidades militares',
        'Somente com autorização específica do comandante',
        'Apenas armas de uso permitido'
      ],
      correctAnswer: 1,
      explanation: 'Integrantes das Forças Armadas (art. 6º, I) têm porte FUNCIONAL em TODO o território nacional, podendo usar armas fornecidas pela instituição ou de propriedade particular (quando registradas). O porte é inerente à função militar, MAS há regulamentação interna sobre quando portar (geralmente em serviço, missões ou situações específicas). Podem portar armas de uso RESTRITO (prerrogativa militar).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'excecoes-ao-desarmamento',
      question: 'Sobre o porte de arma para integrantes de empresas de segurança privada, é CORRETO afirmar:',
      options: [
        'Não podem portar armas em hipótese alguma',
        'Podem portar quando em serviço, conforme autorização da Polícia Federal',
        'Têm porte automático como agentes de segurança pública',
        'Podem portar apenas armas de uso restrito',
        'Dependem de autorização do Exército'
      ],
      correctAnswer: 1,
      explanation: 'Vigilantes de empresas de segurança privada (art. 6º, IX) podem ter porte QUANDO EM SERVIÇO, mediante autorização da POLÍCIA FEDERAL, desde que: 1) empresa autorizada a funcionar; 2) vigilante com curso de formação; 3) arma fornecida pela empresa (não pode ser pessoal). Diferente de policiais: porte é RESTRITO ao horário de trabalho e VINCULADO à empresa.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'excecoes-ao-desarmamento',
      question: 'Auditores fiscais da Receita Federal que exercem atividades externas:',
      options: [
        'Não têm previsão de porte de arma',
        'Podem ter porte funcional autorizado pela Polícia Federal',
        'Podem portar apenas armas de uso restrito',
        'Têm porte apenas dentro das repartições',
        'Precisam de autorização do Ministério da Fazenda'
      ],
      correctAnswer: 1,
      explanation: 'Auditores fiscais da Receita Federal que EXERCEM ATIVIDADES EXTERNAS (art. 6º, XIII) podem ter porte funcional autorizado pela PF. Fundamento: atuam em fiscalizações que envolvem risco (combate a contrabando, descaminho, apreensões). NÃO é porte automático; depende de autorização caso a caso. Exigem-se requisitos gerais (capacidade técnica, psicológica).',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'excecoes-ao-desarmamento',
      question: 'Oficiais e praças das polícias militares e corpos de bombeiros militares:',
      options: [
        'Não têm direito a porte de arma',
        'Têm porte funcional em todo território nacional',
        'Podem portar apenas no estado de lotação',
        'Precisam de autorização da Polícia Federal',
        'Só podem portar quando em serviço ostensivo'
      ],
      correctAnswer: 1,
      explanation: 'Integrantes das Polícias Militares e Corpos de Bombeiros Militares (art. 6º, III) têm porte FUNCIONAL em TODO o território nacional, para armas fornecidas pela instituição ou de propriedade particular (quando registradas). O porte é inerente à função militar estadual. Permite atuação em qualquer estado (poder de polícia ostensiva é nacional, embora organização seja estadual).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Exceções ao Desarmamento questions imported successfully!');
}

// ============= COLETA DE ARMAS =============
export async function seedQuestionsColetaArmas() {
  console.log('📦 Importing Coleta de Armas questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'coleta-de-armas',
      question: 'Sobre a entrega voluntária de armas de fogo prevista no Estatuto do Desarmamento, é CORRETO afirmar:',
      options: [
        'O possuidor é automaticamente criminalizado',
        'O possuidor fica isento de pena por eventual crime de posse irregular',
        'A arma deve ser obrigatoriamente devolvida após registro',
        'Não há previsão de indenização',
        'É obrigatória para todos os cidadãos'
      ],
      correctAnswer: 1,
      explanation: 'Entrega voluntária (art. 32): quem entregar ESPONTANEAMENTE arma de fogo fica ISENTO DE PENA pelo crime de posse irregular (art. 12). É causa extintiva da punibilidade. Permite que pessoas regularizem situação sem risco penal. Deve ser feita à Polícia Federal ou entidade por ela credenciada. Pode haver indenização (conforme campanha vigente).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'coleta-de-armas',
      question: 'As armas de fogo recolhidas pela Polícia Federal (mediante entrega voluntária ou apreensão judicial) têm como destino:',
      options: [
        'Venda em leilão público',
        'Doação para colecionadores',
        'Destruição, exceto as de interesse histórico ou as que devam ser preservadas como prova',
        'Distribuição gratuita para policiais',
        'Devolução automática ao fabricante'
      ],
      correctAnswer: 2,
      explanation: 'As armas recolhidas/apreendidas devem ser DESTRUÍDAS pela PF (art. 32, § 1º), EXCETO: 1) as de INTERESSE HISTÓRICO (doadas a museus); 2) as que devam ser PRESERVADAS COMO PROVA; 3) as que se destinarem às FORÇAS ARMADAS ou órgãos de segurança. A destruição visa reduzir circulação de armas. Processo público com acompanhamento do MP.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'coleta-de-armas',
      question: 'Quanto à indenização pela entrega de arma de fogo em campanhas de desarmamento:',
      options: [
        'É direito subjetivo do possuidor em qualquer época',
        'Depende de previsão em campanha específica e disponibilidade orçamentária',
        'É obrigatória em valor de mercado da arma',
        'Nunca é paga',
        'É paga apenas para armas importadas'
      ],
      correctAnswer: 1,
      explanation: 'A INDENIZAÇÃO (art. 31, parágrafo único) depende de: 1) previsão em CAMPANHA específica do Governo; 2) disponibilidade ORÇAMENTÁRIA. NÃO é direito permanente; foi vigente nas campanhas de 2004-2005 e 2017-2018. Valores tabelados (não valor de mercado): Ex.: R$ 100 a R$ 300 por arma. Pagamento condicionado à autenticidade e funcionamento da arma.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'coleta-de-armas',
      question: 'A entrega voluntária de arma de fogo de uso RESTRITO:',
      options: [
        'Não é aceita pela Polícia Federal',
        'É aceita, isentando o possuidor do crime de posse de arma de uso restrito',
        'Gera crime mais grave',
        'Exige autorização judicial prévia',
        'Só pode ser feita ao Exército'
      ],
      correctAnswer: 1,
      explanation: 'A entrega voluntária se aplica TAMBÉM a armas de USO RESTRITO (art. 32). Quem entregar espontaneamente fica ISENTO do crime previsto no art. 16 (posse/porte de arma de uso restrito, pena de 3 a 6 anos). A entrega deve ser feita à POLÍCIA FEDERAL (mesmo para armas restritas). É importante incentivar entrega, pois armas restritas são mais perigosas.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'coleta-de-armas',
      question: 'Sobre a entrega voluntária, é INCORRETO afirmar:',
      options: [
        'Deve ser espontânea para gerar isenção de pena',
        'Pode ser feita a órgão credenciado pela Polícia Federal',
        'Isenta de pena qualquer outro crime praticado com a arma',
        'A arma entregue não será devolvida ao entregador',
        'Não exige qualquer formalidade além da entrega'
      ],
      correctAnswer: 2,
      explanation: 'A isenção de pena se refere APENAS ao crime de POSSE IRREGULAR (art. 12) ou POSSE DE ARMA RESTRITA (art. 16). NÃO isenta de crimes praticados COM a arma (homicídio, roubo, etc.). Se a arma foi usada em crime, pode haver apreensão como prova. A entrega deve ser ESPONTÂNEA (não após flagrante ou investigação). Dispensa formalidades: basta entregar à PF.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Coleta de Armas questions imported successfully!');
}

// ============= ARMAS DE USO RESTRITO =============
export async function seedQuestionsArmasRestrito() {
  console.log('🚫 Importing Armas de Uso Restrito questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'armas-de-uso-restrito',
      question: 'São consideradas armas de fogo de uso RESTRITO, EXCETO:',
      options: [
        'Armas automáticas',
        'Revólver calibre .38',
        'Armas de calibre superior a permitido',
        'Armas com dispositivo silenciador',
        'Armas dissimuladas (caneta, bengala)'
      ],
      correctAnswer: 1,
      explanation: 'ARMAS DE USO RESTRITO (Decreto 11.366/2023, Anexo I): armas AUTOMÁTICAS, calibres restritos (ex.: .40, .45, rifle acima de .22), dispositivos silenciadores, armas dissimuladas. REVÓLVER .38 é de USO PERMITIDO (civil pode registrar). Armas restritas são destinadas a Forças Armadas, polícias, segurança institucional. Posse/porte por civil é crime grave (art. 16, pena de 3-6 anos).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'armas-de-uso-restrito',
      question: 'A posse ou porte de arma de fogo de uso RESTRITO caracteriza crime com pena de:',
      options: [
        'Detenção de 1 a 3 anos',
        'Reclusão de 1 a 3 anos',
        'Reclusão de 2 a 4 anos',
        'Reclusão de 3 a 6 anos',
        'Reclusão de 4 a 8 anos'
      ],
      correctAnswer: 3,
      explanation: 'Posse ou porte ilegal de arma de USO RESTRITO (art. 16): RECLUSÃO de 3 a 6 anos, e multa. Crime MAIS GRAVE que posse/porte de arma permitida (arts. 12 e 14). Justificativa: maior potencial ofensivo. Se MUNICIADA, pena pode ser aumentada (metade). Competência da JUSTIÇA FEDERAL (Súmula 498 STJ). Crime comum (pode ser praticado por qualquer pessoa).',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'armas-de-uso-restrito',
      question: 'A competência para autorizar o registro e a aquisição de armas de fogo de uso RESTRITO é:',
      options: [
        'Da Polícia Federal',
        'Do Exército Brasileiro',
        'Do Ministério da Defesa',
        'Das Forças Armadas',
        'Da Polícia Rodoviária Federal'
      ],
      correctAnswer: 1,
      explanation: 'A autorização para registro/aquisição de armas de USO RESTRITO é competência do EXÉRCITO BRASILEIRO (DFPC - Diretoria de Fiscalização de Produtos Controlados), através do SIGMA (Sistema de Gerenciamento Militar de Armas). Enquanto SINARM (PF) controla armas civis, SIGMA (Exército) controla armas restritas. Base legal: Decreto 11.366/2023 e R-105 do Exército.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'armas-de-uso-restrito',
      question: 'Policiais civis podem adquirir armas de fogo de uso restrito para uso particular?',
      options: [
        'Não, em nenhuma hipótese',
        'Sim, automaticamente pelo cargo',
        'Sim, mediante autorização do Exército e desde que preencham requisitos específicos',
        'Apenas se forem delegados',
        'Sim, mas apenas armas fornecidas pela instituição'
      ],
      correctAnswer: 2,
      explanation: 'Policiais podem adquirir armas de uso restrito para uso PARTICULAR, mediante AUTORIZAÇÃO DO EXÉRCITO (Portaria Colog nº 51/2021). Requisitos: 1) ser policial da ativa; 2) CAC (Colecionador, Atirador ou Caçador) registrado; 3) anuência da instituição; 4) capacidade técnica comprovada. Quantidade limitada. Difere do porte institucional (que independe de autorização).',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'armas-de-uso-restrito',
      question: 'Sobre armas de fogo com dispositivo silenciador, é CORRETO afirmar:',
      options: [
        'São de uso permitido se registradas',
        'São de uso restrito e sua posse por civil é crime',
        'Podem ser adquiridas por CACs sem restrição',
        'São permitidas para segurança privada',
        'São de uso exclusivo das Forças Armadas'
      ],
      correctAnswer: 1,
      explanation: 'Armas com DISPOSITIVO SILENCIADOR são de USO RESTRITO (Decreto 11.366/2023). Posse/porte por civis é CRIME (art. 16, reclusão de 3-6 anos). Destinam-se a Forças Armadas e polícias em operações especiais. Mesmo CAC (Colecionador, Atirador, Caçador) NÃO pode adquirir silenciadores (salvo casos excepcionalíssimos com autorização do Exército). Fundamento: evita uso criminoso (dificulta identificação de disparos).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Armas de Uso Restrito questions imported successfully!');
}

// ============= DISPOSIÇÕES GERAIS =============
export async function seedQuestionsDisposicoesGerais() {
  console.log('📜 Importing Disposições Gerais questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'disposicoes-gerais',
      question: 'A proibição de comercialização de arma de fogo e munição em todo o território nacional, prevista no art. 35 do Estatuto, foi objeto de:',
      options: [
        'Aprovação em referendo popular em 2005',
        'Rejeição em referendo popular em 2005',
        'Nunca foi submetida a referendo',
        'Aprovação pelo Congresso Nacional',
        'Aprovação por decreto presidencial'
      ],
      correctAnswer: 1,
      explanation: 'O art. 35 da Lei 10.826/2003 previa PROIBIÇÃO da comercialização de armas/munições, mas condicionava à aprovação em REFERENDO POPULAR. Em 23/10/2005, foi realizado referendo onde a população REJEITOU a proibição (63,94% pelo NÃO). Por isso, a comercialização continua PERMITIDA (com regulamentação). Foi o primeiro referendo da história do Brasil (Lei 9.709/1998).',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'disposicoes-gerais',
      question: 'Sobre a responsabilidade civil do Estado por danos causados por armas de fogo, é CORRETO afirmar:',
      options: [
        'O Estado responde objetivamente por todos os danos causados por armas',
        'Não há previsão de responsabilidade estatal',
        'O Estado só responde se a arma for de propriedade pública',
        'A responsabilidade é subjetiva, dependendo de comprovação de falha na fiscalização',
        'Apenas fabricantes respondem civilmente'
      ],
      correctAnswer: 3,
      explanation: 'A responsabilidade civil do Estado por danos causados por armas de fogo é SUBJETIVA (depende de comprovação de culpa/falha na fiscalização). NÃO há responsabilidade objetiva. Se ficar provado que houve falha do Estado em fiscalizar comércio ilegal, registro irregular, etc., pode haver responsabilização (art. 37, § 6º, CF). Fabricantes/comerciantes respondem objetivamente perante consumidores (CDC).',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'disposicoes-gerais',
      question: 'Empresas de transporte de valores podem utilizar armas de fogo:',
      options: [
        'De qualquer tipo, inclusive de uso restrito',
        'Apenas de uso permitido, mediante autorização',
        'De uso permitido e restrito, conforme autorização da PF e Exército',
        'Não podem utilizar armas',
        'Apenas espingardas'
      ],
      correctAnswer: 2,
      explanation: 'Empresas de transporte de valores, mediante autorização da POLÍCIA FEDERAL e do EXÉRCITO (quando for arma restrita), podem utilizar armas de uso PERMITIDO e RESTRITO (art. 20). Vigilantes devem ter curso específico, porte funcional concedido pela PF. Armas são fornecidas pela empresa (não pessoais). Permite uso de fuzis/carabinas (uso restrito) para proteção de cargas de alto valor.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'disposicoes-gerais',
      question: 'Sobre a venda de munição, é CORRETO afirmar:',
      options: [
        'É livre para qualquer pessoa',
        'Exige apresentação de registro da arma e documento de identidade',
        'É permitida apenas para agentes de segurança',
        'Depende de autorização judicial',
        'É proibida em todo território nacional'
      ],
      correctAnswer: 1,
      explanation: 'A venda de munição é CONTROLADA (art. 19). Exige: 1) apresentação do REGISTRO da arma (comprovando que possui arma daquele calibre); 2) documento de IDENTIDADE; 3) registro da venda no SINARM. Quantidade limitada (ex.: 50 munições/ano para arma de uso permitido). Comerciantes devem ser autorizados pelo Exército. Venda irregular = crime (art. 17).',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'estatuto-do-desarmamento',
      topic: 'disposicoes-gerais',
      question: 'A recarga de munição de forma artesanal (recarga caseira):',
      options: [
        'É totalmente proibida',
        'É permitida para CACs com autorização do Exército',
        'É permitida para qualquer pessoa',
        'É crime equiparado a tráfico de armas',
        'Depende de autorização da Polícia Federal'
      ],
      correctAnswer: 1,
      explanation: 'A recarga artesanal de munição é PERMITIDA para CACs (Colecionadores, Atiradores, Caçadores) devidamente REGISTRADOS, mediante AUTORIZAÇÃO DO EXÉRCITO (CR - Certificado de Registro como recargador). Exige: equipamentos adequados, controle de pólvora, registros. Recarga IRREGULAR/sem autorização pode configurar crime (art. 17 - comércio ilegal). Civis comuns NÃO podem recarregar.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Disposições Gerais questions imported successfully!');
}

// ============= MASTER FUNCTION TO IMPORT ALL =============
export async function seedAllDesarmamentoQuestions() {
  console.log('🚀 Starting Estatuto do Desarmamento questions import...');

  try {
    await seedQuestionsSINARM();
    await seedQuestionsRegistroArmas();
    await seedQuestionsPorteArma();
    await seedQuestionsCrimesPenas();
    await seedQuestionsCompetencia();
    await seedQuestionsExcecoes();
    await seedQuestionsColetaArmas();
    await seedQuestionsArmasRestrito();
    await seedQuestionsDisposicoesGerais();

    console.log('✅ ALL ESTATUTO DO DESARMAMENTO QUESTIONS IMPORTED! 🎯🔫');
    console.log('📊 Total: 45 questions across 9 topics');
  } catch (error) {
    console.error('❌ Error importing Desarmamento questions:', error);
    throw error;
  }
}
