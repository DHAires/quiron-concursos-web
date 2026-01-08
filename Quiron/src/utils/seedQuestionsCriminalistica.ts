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

// ============= PERÍCIA CRIMINAL =============
export async function seedQuestionsPericiacriminal() {
  console.log('🔬 Importing Perícia Criminal questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'pericia-criminal',
      question: 'Segundo o Código de Processo Penal, o exame de corpo de delito poderá ser suprido pela prova testemunhal quando:',
      options: [
        'Os vestígios tiverem desaparecido',
        'O juiz entender ser desnecessário',
        'A autoridade policial dispensar o exame',
        'O Ministério Público assim requerer',
        'Em qualquer circunstância'
      ],
      correctAnswer: 0,
      explanation: 'De acordo com o Art. 167 do CPP, não sendo possível o exame de corpo de delito, por haverem desaparecido os vestígios, a prova testemunhal poderá suprir-lhe a falta. É importante ressaltar que o exame de corpo de delito é indispensável nos crimes que deixam vestígios, mas pode ser suprido quando os vestígios desaparecerem.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'pericia-criminal',
      question: 'A perícia criminal é atividade essencial e exclusiva de Estado. Sobre a perícia oficial, é CORRETO afirmar:',
      options: [
        'Pode ser realizada por qualquer profissional habilitado',
        'É de natureza requisitada e não solicitada',
        'Pode ser dispensada pelo delegado de polícia',
        'Não possui fé pública',
        'Subordina-se ao Poder Judiciário'
      ],
      correctAnswer: 1,
      explanation: 'A perícia oficial possui natureza REQUISITADA, não solicitada. Isso significa que a autoridade competente (delegado, juiz, promotor) REQUISITA a perícia, e o perito tem o dever de atendê-la. A perícia é atividade exclusiva de Estado, realizada por peritos oficiais concursados, possui fé pública e é vinculada ao Poder Executivo (não ao Judiciário).',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'pericia-criminal',
      question: 'Em relação aos princípios da perícia criminal, o Princípio da Análise determina que:',
      options: [
        'Todo contato deixa um vestígio',
        'Deve-se analisar todos os vestígios encontrados no local',
        'A perícia deve ser imparcial e científica',
        'Os vestígios devem ser preservados',
        'O perito deve analisar apenas o que for requisitado'
      ],
      correctAnswer: 1,
      explanation: 'O Princípio da Análise estabelece que TODOS os vestígios encontrados devem ser analisados, não apenas alguns. Já o Princípio do Intercâmbio de Locard estabelece que "todo contato deixa um vestígio". O Princípio da Imparcialidade determina que a perícia deve ser técnica e imparcial. A preservação dos vestígios relaciona-se ao Princípio da Preservação do Local.',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'pericia-criminal',
      question: 'Qual documento elaborado pelo perito criminal contém a descrição detalhada do local de crime, dos vestígios encontrados e das análises realizadas?',
      options: [
        'Parecer Técnico',
        'Laudo Pericial',
        'Atestado Pericial',
        'Relatório de Ocorrência',
        'Auto de Apreensão'
      ],
      correctAnswer: 1,
      explanation: 'O LAUDO PERICIAL é o documento oficial elaborado pelo perito criminal que contém: histórico do caso, descrição do local e dos vestígios, metodologia aplicada, resultados das análises e conclusões. O laudo possui fé pública e é fundamental para a elucidação dos crimes. O Parecer Técnico é usado para responder quesitos ou esclarecer dúvidas sobre laudos já emitidos.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'pericia-criminal',
      question: 'Sobre a cadeia de custódia de vestígios, assinale a alternativa INCORRETA:',
      options: [
        'Visa garantir a idoneidade e rastreabilidade dos vestígios',
        'Deve ser iniciada no local do crime',
        'Todo manuseio do vestígio deve ser documentado',
        'A quebra da cadeia de custódia invalida automaticamente a prova',
        'Inclui coleta, preservação, transporte e armazenamento'
      ],
      correctAnswer: 3,
      explanation: 'A quebra da cadeia de custódia NÃO invalida AUTOMATICAMENTE a prova. O juiz analisará o caso concreto e verificará se houve prejuízo para a defesa ou para a busca da verdade real. A cadeia de custódia é o conjunto de procedimentos para garantir a rastreabilidade do vestígio desde sua coleta até o descarte final, mas sua quebra não torna a prova absolutamente nula.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Perícia Criminal: 5 questions imported');
}

// ============= LOCAL DE CRIME =============
export async function seedQuestionsLocaldecrimes() {
  console.log('🏛️ Importing Local de Crime questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'local-de-crime',
      question: 'Quanto à natureza, o local de crime pode ser classificado em imediato e mediato. O local MEDIATO corresponde:',
      options: [
        'Ao local onde efetivamente ocorreu o crime',
        'Aos locais relacionados ao crime, mas onde ele não ocorreu',
        'Ao primeiro local isolado pela polícia',
        'Ao local onde foi encontrado o corpo',
        'Ao local onde o criminoso foi preso'
      ],
      correctAnswer: 1,
      explanation: 'Local IMEDIATO é onde o crime efetivamente ocorreu. Local MEDIATO são os locais relacionados ao fato criminoso, mas onde o crime não aconteceu diretamente (ex: caminho de fuga, veículo usado, local de descarte da arma). Ambos devem ser periciados para a completa elucidação do crime.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'local-de-crime',
      question: 'Sobre o isolamento e preservação do local de crime, é CORRETO afirmar:',
      options: [
        'Deve ser feito somente após a chegada do perito',
        'Compete exclusivamente ao delegado de polícia',
        'Deve ser providenciado pela primeira autoridade que chegar ao local',
        'Não é necessário se o crime for de menor potencial ofensivo',
        'Só é obrigatório em crimes com vítima fatal'
      ],
      correctAnswer: 2,
      explanation: 'A preservação do local de crime é responsabilidade da PRIMEIRA AUTORIDADE que chegar ao local (pode ser policial militar, civil, guarda municipal, etc.). O isolamento deve ser IMEDIATO para evitar a contaminação e perda de vestígios. É obrigatório em todos os crimes que deixam vestígios, independentemente de sua gravidade.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'local-de-crime',
      question: 'Segundo a classificação quanto às condições do local, um local que sofreu alterações antes da chegada dos peritos é denominado:',
      options: [
        'Local violado',
        'Local idôneo',
        'Local relacionado',
        'Local interno',
        'Local suspeito'
      ],
      correctAnswer: 0,
      explanation: 'Local IDÔNEO é aquele preservado, sem alterações. Local VIOLADO (ou inidôneo) é aquele que sofreu alterações antes da perícia, seja por ação de curiosos, das próprias vítimas/familiares, ou até por má preservação policial. A violação do local prejudica a perícia e pode comprometer a elucidação do crime.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'local-de-crime',
      question: 'No levantamento do local de crime, qual técnica de progressão consiste em partir da periferia para o centro do local?',
      options: [
        'Método em espiral',
        'Método em quadrante',
        'Método em linha',
        'Método em zigue-zague',
        'Método radial'
      ],
      correctAnswer: 0,
      explanation: 'O método EM ESPIRAL parte da periferia para o centro (ou vice-versa) em movimento circular. Outros métodos: QUADRANTE (dividir o local em áreas), LINHA (percorrer em linhas paralelas), ZIGUE-ZAGUE (percorrer em "Z"), e RADIAL (do centro para as extremidades em raios). A escolha depende das características do local.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'local-de-crime',
      question: 'A fotografia do local de crime deve incluir tomadas gerais, médias e de detalhes. As tomadas de DETALHE têm como objetivo:',
      options: [
        'Mostrar a visão panorâmica do local',
        'Registrar vestígios específicos com escalas',
        'Documentar o perímetro isolado',
        'Registrar a chegada da perícia',
        'Mostrar a multidão de curiosos'
      ],
      correctAnswer: 1,
      explanation: 'As tomadas fotográficas devem seguir a sequência: GERAIS (visão panorâmica do local e entorno), MÉDIAS (ambientes e cômodos), DETALHES (vestígios específicos COM ESCALA para dimensionamento correto). As fotos de detalhe são essenciais para documentar manchas de sangue, projéteis, impressões digitais, etc.',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Local de Crime: 5 questions imported');
}

// ============= DOCUMENTOSCOPIA =============
export async function seedQuestionsDocumentoscopia() {
  console.log('📄 Importing Documentoscopia questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'documentoscopia',
      question: 'Na grafoscopia, a análise de assinatura questionada deve levar em consideração principalmente:',
      options: [
        'Apenas a similaridade visual',
        'Os elementos gráficos intrínsecos e extrínsecos',
        'Somente o tamanho da assinatura',
        'Apenas a pressão do instrumento escritor',
        'Exclusivamente a inclinação das letras'
      ],
      correctAnswer: 1,
      explanation: 'A análise grafoscópica considera elementos INTRÍNSECOS (características pessoais e automáticas do punho: pressão, ritmo, progressão, proporcionalidade) e EXTRÍNSECOS (características visíveis: forma das letras, inclinação, espaçamento, tamanho). Nunca se analisa apenas um aspecto isolado.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'documentoscopia',
      question: 'Sobre a autenticação de documentos, o exame de elementos de segurança em papel-moeda inclui a análise de:',
      options: [
        'Apenas marca d\'água',
        'Marca d\'água, fibras luminescentes e microtextos',
        'Somente a tinta utilizada',
        'Apenas o número de série',
        'Exclusivamente a impressão tipográfica'
      ],
      correctAnswer: 1,
      explanation: 'O papel-moeda possui múltiplos elementos de segurança: marca d\'água, fibras luminescentes (visíveis sob luz UV), microtextos (letras minúsculas), relevo, fio de segurança, elementos óticos variáveis, etc. A análise deve ser COMPLETA, verificando todos os elementos para detectar falsificações.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'documentoscopia',
      question: 'O exame de alterações em documentos pode revelar diferentes tipos de falsificação. A técnica que permite visualizar escritos apagados ou rasurados é denominada:',
      options: [
        'Fotografia infravermelha',
        'Espectroscopia de massa',
        'Cromatografia gasosa',
        'Análise de DNA',
        'Impressão digital'
      ],
      correctAnswer: 0,
      explanation: 'A fotografia com luz INFRAVERMELHA permite visualizar escritos apagados, rasuras, emendas e alterações em documentos. Diferentes tintas absorvem e refletem o infravermelho de formas distintas, revelando camadas de escrita. Também pode-se usar luz UV, luz oblíqua e técnicas de contraste para revelar alterações.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'documentoscopia',
      question: 'Em relação à falsificação de assinaturas, a modalidade em que o falsário copia lentamente o padrão verdadeiro é chamada de:',
      options: [
        'Falsificação por imitação livre',
        'Falsificação por decalque',
        'Falsificação por simulação servil',
        'Falsificação autêntica',
        'Falsificação por treino'
      ],
      correctAnswer: 2,
      explanation: 'SIMULAÇÃO SERVIL: falsário copia lentamente e com atenção o modelo verdadeiro, resultando em traçado tremido e lento. IMITAÇÃO LIVRE: falsário conhece o padrão mas não copia diretamente, imprimindo características próprias. DECALQUE: uso de papel carbono ou superfície translúcida. A simulação servil é detectada pela tremidez do traço.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'documentoscopia',
      question: 'O documento que contém o padrão verdadeiro de escrita ou assinatura, usado para comparação com o questionado, é denominado:',
      options: [
        'Documento duvidoso',
        'Documento padrão de confronto',
        'Documento falso',
        'Documento suspeito',
        'Documento autêntico presumido'
      ],
      correctAnswer: 1,
      explanation: 'DOCUMENTO PADRÃO DE CONFRONTO (ou documento paradigma): contém escritos verdadeiros e autênticos do punho examinado, usado para comparação. DOCUMENTO QUESTIONADO: aquele cuja autenticidade está em dúvida. O perito compara ambos para concluir se o questionado é verdadeiro ou falso.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Documentoscopia: 5 questions imported');
}

// ============= BALÍSTICA FORENSE =============
export async function seedQuestionsBalistica() {
  console.log('🔫 Importing Balística Forense questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'balistica-forense',
      question: 'A Balística Forense divide-se em três áreas principais. A Balística INTERNA estuda:',
      options: [
        'A trajetória do projétil após deixar a arma',
        'Os efeitos do projétil no alvo',
        'Os fenômenos que ocorrem no interior da arma durante o disparo',
        'A identificação de armas de fogo',
        'Apenas o calibre do projétil'
      ],
      correctAnswer: 2,
      explanation: 'BALÍSTICA INTERNA: estuda fenômenos dentro da arma (ignição, pressão, expansão dos gases). BALÍSTICA EXTERNA: trajetória do projétil no ar (alcance, velocidade, trajetória). BALÍSTICA DOS EFEITOS (Terminal): efeitos no alvo (perfuração, cavitação). Também existe a BALÍSTICA FORENSE que identifica armas e projéteis.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'balistica-forense',
      question: 'As micro-ranhuras existentes no interior do cano de uma arma de fogo são chamadas de raias. Sobre elas, é CORRETO afirmar:',
      options: [
        'São iguais em todas as armas do mesmo fabricante',
        'Não permitem identificação individualizada da arma',
        'Imprimem características únicas em cada projétil disparado',
        'Existem apenas em revólveres',
        'São padronizadas internacionalmente'
      ],
      correctAnswer: 2,
      explanation: 'As RAIAS (estrias helicoidais) no interior do cano imprimem marcas ÚNICAS no projétil durante o disparo. Mesmo armas do mesmo lote possuem microcaracterísticas diferentes. Essas marcas permitem a IDENTIFICAÇÃO INEQUÍVOCA da arma que disparou determinado projétil, sendo fundamental para a perícia balística.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'balistica-forense',
      question: 'Em um disparo de arma de fogo, a distância entre a arma e o alvo pode ser estimada através de:',
      options: [
        'Apenas o diâmetro do orifício de entrada',
        'Resíduos de pólvora (tatuagem) e queimadura ao redor do orifício',
        'Somente a profundidade da lesão',
        'Apenas o calibre do projétil',
        'Exclusivamente pela deformação do projétil'
      ],
      correctAnswer: 1,
      explanation: 'A distância do disparo é estimada por: QUEIMADURA (0-5cm), TATUAGEM por grãos de pólvora (até 50cm), ZONA DE ESFUMAÇAMENTO por fuligem (até 100cm). TIRO ENCOSTADO: lesão com bordas invertidas. TIRO À DISTÂNCIA: apenas orifício sem residuos. Também analisa-se o diâmetro da zona de tatuagem.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'balistica-forense',
      question: 'O calibre de uma arma de fogo é determinado por:',
      options: [
        'Apenas o comprimento do cano',
        'O diâmetro interno do cano ou diâmetro do projétil',
        'Somente o peso da munição',
        'Apenas a velocidade do projétil',
        'Exclusivamente o tipo de pólvora utilizada'
      ],
      correctAnswer: 1,
      explanation: 'CALIBRE REAL: diâmetro interno do cano medido entre os cheios das raias. CALIBRE NOMINAL: designação comercial (ex: .38, 9mm, .40). O calibre pode ser expresso em polegadas ou milímetros. É fundamental para identificação da arma e comparação com projéteis.',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'balistica-forense',
      question: 'Em relação aos resíduos de disparo de arma de fogo (GSR), é CORRETO afirmar:',
      options: [
        'Permanecem nas mãos indefinidamente',
        'Não podem ser detectados após lavagem das mãos',
        'Contêm elementos como chumbo, bário e antimônio',
        'Existem apenas em armas de grosso calibre',
        'Não têm valor probatório'
      ],
      correctAnswer: 2,
      explanation: 'GSR (Gunshot Residue) são partículas microscópicas contendo CHUMBO (Pb), BÁRIO (Ba) e ANTIMÔNIO (Sb) provenientes da espoleta. São detectados por MEV-EDS (Microscopia Eletrônica de Varredura). Permanecem por 4-6 horas, sendo removidos por lavagem. A presença de GSR indica disparo recente ou proximidade.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Balística Forense: 5 questions imported');
}

// ============= PAPILOSCOPIA =============
export async function seedQuestionsPapiloscopia() {
  console.log('👆 Importing Papiloscopia questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'papiloscopia',
      question: 'As impressões digitais possuem características que as tornam únicas. Sobre essas características, é CORRETO afirmar:',
      options: [
        'Mudam com a idade da pessoa',
        'São imutáveis, perenes e individuais',
        'São idênticas em gêmeos univitelinos',
        'Podem ser alteradas por pequenos cortes',
        'Variam conforme a temperatura ambiente'
      ],
      correctAnswer: 1,
      explanation: 'As impressões digitais possuem três princípios fundamentais: IMUTABILIDADE (não mudam ao longo da vida), PERENIDADE (permanecem desde a formação fetal até após a morte), VARIABILIDADE (cada pessoa possui desenhos únicos, mesmo gêmeos idênticos). Essas características tornam a datiloscopia um método confiável de identificação.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'papiloscopia',
      question: 'Segundo o sistema Vucetich de classificação datiloscópica, os tipos fundamentais são:',
      options: [
        'Verticilo, presilha interna, presilha externa e arco',
        'Espiral, circular, elíptico e triangular',
        'Delta simples e delta duplo apenas',
        'Linear, curvo e circular',
        'Não existe classificação padronizada'
      ],
      correctAnswer: 0,
      explanation: 'Sistema VUCETICH classifica em 4 tipos fundamentais: ARCO (A) - sem delta, PRESILHA INTERNA (I) - delta à direita, PRESILHA EXTERNA (E) - delta à esquerda, VERTICILO (V) - 2 ou mais deltas. O polegar usa letras maiúsculas (A, I, E, V) e os demais dedos números (1, 2, 3, 4). Sistema usado no Brasil.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'papiloscopia',
      question: 'O delta dactiloscópico é um ponto característico importante na classificação das impressões digitais. Ele corresponde a:',
      options: [
        'O centro da impressão digital',
        'O ponto de divergência das cristas papilares formando um triângulo',
        'Apenas uma marca acidental',
        'O início da impressão digital',
        'Uma característica exclusiva de verticilos'
      ],
      correctAnswer: 1,
      explanation: 'O DELTA é o ponto onde as cristas papilares se dividem, formando uma figura triangular (semelhante ao delta de um rio). É fundamental para classificação: SEM DELTA = arco, UM DELTA = presilha, DOIS OU MAIS DELTAS = verticilo. Também é usado como ponto de referência para contagem de linhas.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'papiloscopia',
      question: 'Para revelação de impressões digitais latentes em superfícies NÃO-POROSAS, o método mais adequado é:',
      options: [
        'Ninidrina',
        'Nitrato de prata',
        'Pó de revelação ou cianoacrilato (Super Bonder)',
        'Iodo',
        'Ácido sulfúrico'
      ],
      correctAnswer: 2,
      explanation: 'Superfícies NÃO-POROSAS (vidro, metal, plástico): PÓ DE REVELAÇÃO ou CIANOACRILATO (Super Bonder vaporizado). Superfícies POROSAS (papel, madeira, papelão): NINIDRINA, NITRATO DE PRATA. O cianoacrilato polimeriza em contato com aminoácidos do suor, revelando a impressão em branco.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'papiloscopia',
      question: 'Para que seja possível identificar positivamente uma impressão digital fragmentária encontrada em local de crime, é necessário encontrar quantos pontos característicos coincidentes?',
      options: [
        'No mínimo 5 pontos',
        'No mínimo 8 pontos',
        'No mínimo 12 pontos',
        'Não há número mínimo estabelecido no Brasil',
        'No mínimo 20 pontos'
      ],
      correctAnswer: 3,
      explanation: 'No Brasil NÃO HÁ número mínimo obrigatório de pontos característicos. O papiloscopista analisa QUALIDADE (nitidez, clareza) e QUANTIDADE de pontos coincidentes. Internacionalmente varia: EUA não exige mínimo, Inglaterra exigia 16 pontos. A conclusão depende da perícia técnica e da qualidade da impressão revelada.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Papiloscopia: 5 questions imported');
}

// ============= GENÉTICA FORENSE (DNA) =============
export async function seedQuestionsGenetica() {
  console.log('🧬 Importing Genética Forense questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'genetica-forense-dna',
      question: 'A análise de DNA forense utiliza principalmente regiões do genoma chamadas de:',
      options: [
        'Genes codificantes',
        'Cromossomos inteiros',
        'STRs (Short Tandem Repeats)',
        'RNA mensageiro',
        'Proteínas celulares'
      ],
      correctAnswer: 2,
      explanation: 'STRs (Short Tandem Repeats) ou microssatélites são sequências repetitivas de DNA altamente polimórficas (variam entre indivíduos). A genética forense analisa 13-20 loci de STRs, gerando um perfil genético único. São usados por serem altamente discriminatórios e não codificarem características físicas (evitando questões éticas).',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'genetica-forense-dna',
      question: 'Em uma cena de crime, manchas de sangue são encontradas. Para extração do DNA dessas amostras, o método mais adequado é:',
      options: [
        'Dissolver em água e analisar diretamente',
        'Coletar com swab estéril e realizar extração química/enzimática',
        'Fotografar e descartar',
        'Aquecer a amostra até evaporação',
        'Analisar apenas visualmente'
      ],
      correctAnswer: 1,
      explanation: 'Coleta de vestígios biológicos: usar SWABS ESTÉREIS umedecidos (para manchas secas) ou secos (para manchas úmidas), embalar separadamente, refrigerar. Extração usa métodos QUÍMICOS (fenol-clorofórmio), ENZIMÁTICOS ou KITS comerciais. Após extração, quantifica-se o DNA e realiza-se PCR (amplificação) dos loci STR.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'genetica-forense-dna',
      question: 'O exame de DNA mitocondrial (mtDNA) é especialmente útil para análise de:',
      options: [
        'Apenas casos de paternidade',
        'Amostras degradadas, ossos e cabelos sem raiz',
        'Somente sangue fresco',
        'Identificação de gêmeos',
        'Apenas crimes sexuais'
      ],
      correctAnswer: 1,
      explanation: 'DNA MITOCONDRIAL: presente em alta quantidade nas células (centenas de cópias), resiste melhor à degradação, ideal para amostras antigas/degradadas, ossos, dentes, cabelos SEM raiz. Herança MATERNA. Menor poder de discriminação que DNA nuclear. Usado quando DNA nuclear está degradado ou ausente.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'genetica-forense-dna',
      question: 'Sobre o banco de perfis genéticos (CODIS - Brasil), é CORRETO afirmar:',
      options: [
        'Armazena características físicas das pessoas',
        'Armazena perfis de STRs de condenados e vestígios de locais de crime',
        'É acessível publicamente pela internet',
        'Contém informações médicas completas',
        'Apenas polícia federal pode acessar'
      ],
      correctAnswer: 1,
      explanation: 'Banco Nacional de Perfis Genéticos (BNPG/CODIS-BR): armazena perfis de STRs (não características físicas) de condenados, investigados, vestígios de cenas de crime e pessoas desaparecidas. Permite cruzamento para identificar autores. Lei 12.654/2012. Acesso restrito e controlado. Auxilia investigações através de "matches" (coincidências).',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'genetica-forense-dna',
      question: 'O índice de paternidade combinado (IPC) em um teste de paternidade deve ser, no mínimo, de quanto para considerar a paternidade praticamente comprovada?',
      options: [
        '10',
        '100',
        '1.000',
        '10.000',
        '100.000'
      ],
      correctAnswer: 2,
      explanation: 'IPC (Índice de Paternidade Combinado) mínimo recomendado: 1.000 (99,9% de probabilidade). Acima de 10.000 (99,99%) é considerado praticamente comprovado. O IPC multiplica os índices de cada locus analisado. Quanto maior o IPC, maior a certeza da paternidade. Valores abaixo de 100 indicam exclusão ou dúvida.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Genética Forense: 5 questions imported');
}

// ============= FOTOGRAFIA FORENSE =============
export async function seedQuestionsFotografiaforense() {
  console.log('📸 Importing Fotografia Forense questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'fotografia-forense',
      question: 'Na fotografia de local de crime, a escala métrica é utilizada para:',
      options: [
        'Decorar a fotografia',
        'Permitir o dimensionamento correto dos vestígios',
        'Identificar o fotógrafo',
        'Apenas em fotos coloridas',
        'Não é obrigatória'
      ],
      correctAnswer: 1,
      explanation: 'A ESCALA MÉTRICA (régua forense) é OBRIGATÓRIA em fotos de detalhe para permitir o dimensionamento real dos vestígios. Tipos: escala em "L" (para impressões), régua linear, escala ABFO (círculos concêntricos). Deve ser posicionada no mesmo plano do vestígio. Fotos gerais e médias dispensam escala.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'fotografia-forense',
      question: 'A sequência correta de tomadas fotográficas em um local de crime é:',
      options: [
        'Detalhes, médias e gerais',
        'Gerais, médias e detalhes',
        'Apenas detalhes',
        'Somente médias',
        'Não há sequência obrigatória'
      ],
      correctAnswer: 1,
      explanation: 'Sequência fotográfica obrigatória: 1) GERAIS - visão panorâmica do local e entorno, contexto; 2) MÉDIAS - cômodos, ambientes, posição da vítima; 3) DETALHES - vestígios específicos COM escala métrica. Essa sequência do geral para o particular permite compreender o contexto e localização de cada vestígio.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'fotografia-forense',
      question: 'Para fotografar manchas de sangue em tecidos escuros, a melhor técnica é utilizar:',
      options: [
        'Flash direto',
        'Luz ambiente apenas',
        'Iluminação oblíqua ou flash difuso',
        'Fotografar sem luz',
        'Apenas luz natural'
      ],
      correctAnswer: 2,
      explanation: 'Para vestígios em superfícies escuras ou com pouco contraste: usar LUZ OBLÍQUA (lateral) ou FLASH DIFUSO (rebatido) para criar sombras e realçar relevos. Para manchas de sangue, também pode-se usar FILTROS (amarelo/laranja para realçar contraste). Evitar flash direto que causa reflexos e ofusca detalhes.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'fotografia-forense',
      question: 'A fotografia ultravioleta forense é especialmente útil para revelar:',
      options: [
        'Apenas impressões digitais',
        'Fluidos biológicos, hematomas antigos e alterações em documentos',
        'Somente projéteis',
        'Apenas manchas de sangue',
        'Não tem aplicação forense'
      ],
      correctAnswer: 1,
      explanation: 'Fotografia UV (ultravioleta) revela: FLUIDOS BIOLÓGICOS (sêmen, saliva, urina), HEMATOMAS ANTIGOS (absorvem UV diferentemente), ALTERAÇÕES EM DOCUMENTOS, FIBRAS e substâncias fluorescentes. Fotografia IR (infravermelha) revela: ESCRITOS APAGADOS, MANCHAS DE PÓLVORA, tatuagens sob a pele.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'fotografia-forense',
      question: 'Sobre a fotografia de impressões digitais reveladas, é INCORRETO afirmar:',
      options: [
        'Deve-se fotografar com escala métrica',
        'A iluminação deve ser perpendicular à impressão',
        'Deve-se usar fundo contrastante',
        'É necessário manter o paralelismo entre câmera e superfície',
        'O uso de macro é recomendado'
      ],
      correctAnswer: 1,
      explanation: 'A iluminação deve ser OBLÍQUA (lateral), não perpendicular, para criar sombras e realçar os relevos das cristas papilares. Outros cuidados: escala em "L", fundo contrastante (claro para pó escuro, escuro para pó claro), paralelismo total, foco preciso, usar MACRO ou lente de aproximação.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Fotografia Forense: 5 questions imported');
}

// ============= TOXICOLOGIA FORENSE =============
export async function seedQuestionsToxicologiaforense() {
  console.log('⚗️ Importing Toxicologia Forense questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'toxicologia-forense',
      question: 'Em casos de suspeita de envenenamento, o material biológico mais adequado para análise toxicológica post-mortem é:',
      options: [
        'Apenas sangue',
        'Sangue, urina, vísceras (fígado, rim, estômago) e cabelos',
        'Somente saliva',
        'Apenas unhas',
        'Não é possível analisar após a morte'
      ],
      correctAnswer: 1,
      explanation: 'Amostras toxicológicas post-mortem: SANGUE (substâncias em circulação), URINA (metabólitos, alta concentração), VÍSCERAS - fígado (metabolização), rim (excreção), estômago (ingestão recente), CABELOS (uso crônico, janela de detecção longa), HUMOR VÍTREO (menos degradação). Coletar múltiplas amostras aumenta chance de detecção.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'toxicologia-forense',
      question: 'A técnica analítica considerada padrão-ouro para identificação e quantificação de drogas é:',
      options: [
        'Teste colorimétrico simples',
        'Cromatografia gasosa acoplada à espectrometria de massas (GC-MS)',
        'Apenas microscopia',
        'Análise visual',
        'Teste de pH'
      ],
      correctAnswer: 1,
      explanation: 'GC-MS (Cromatografia Gasosa acoplada à Espectrometria de Massas) é o PADRÃO-OURO: identifica e quantifica substâncias com alta especificidade. Também usa-se LC-MS (Cromatografia Líquida-MS). Testes colorimétricos (Marquis, Scott) são PRELIMINARES, não confirmatórios. Para confirmação forense, GC-MS ou LC-MS são obrigatórios.',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'toxicologia-forense',
      question: 'A janela de detecção de drogas no cabelo é de aproximadamente:',
      options: [
        '2-3 dias',
        '1 semana',
        '30 dias',
        '90 dias ou mais',
        'Não é possível detectar no cabelo'
      ],
      correctAnswer: 3,
      explanation: 'Janelas de detecção: SANGUE (horas a poucos dias), URINA (2-3 dias; maconha até 30 dias em usuários crônicos), SALIVA (1-2 dias), CABELO (90 dias a vários meses, dependendo do comprimento). O cabelo cresce ~1cm/mês, permitindo histórico de uso. Segmentação do fio permite determinar período do uso.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'toxicologia-forense',
      question: 'A dosagem de álcool no sangue é expressa em gramas por litro. De acordo com o Código de Trânsito Brasileiro, constitui crime dirigir com alcoolemia igual ou superior a:',
      options: [
        '0,1 g/L',
        '0,2 g/L',
        '0,3 g/L',
        '0,6 g/L',
        '1,0 g/L'
      ],
      correctAnswer: 3,
      explanation: 'CTB (Lei 9.503/97): INFRAÇÃO ADMINISTRATIVA (dirigir sob influência): qualquer concentração detectada. CRIME (Art. 306): alcoolemia ≥ 0,6 g/L (0,6 dg/L) ou teste positivo com sinais de alteração. Etilômetro (bafômetro) mede ar expirado. Sangue é mais preciso. Recusa ao teste = infração gravíssima.',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'toxicologia-forense',
      question: 'Sobre a análise toxicológica de monóxido de carbono (CO), é CORRETO afirmar:',
      options: [
        'Não é possível detectar após a morte',
        'A presença de carboxiemoglobina no sangue indica exposição ao CO',
        'Causa apenas sintomas leves',
        'Não é tóxico',
        'Detecta-se apenas na urina'
      ],
      correctAnswer: 1,
      explanation: 'MONÓXIDO DE CARBONO (CO): gás incolor, inodoro, letal. Liga-se à hemoglobina formando CARBOXIEMOGLOBINA (COHb), impedindo transporte de O2. Análise: dosagem de COHb no sangue por espectrofotometria/co-oxímetro. COHb {'>'} 50% = geralmente fatal. Fontes: incêndios, motores em locais fechados. Sintomas: cefaleia, náusea, confusão, morte.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Toxicologia Forense: 5 questions imported');
}

// ============= INFORMÁTICA FORENSE =============
export async function seedQuestionsInformaticaforense() {
  console.log('💻 Importing Informática Forense questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'informatica-forense',
      question: 'Na perícia de informática forense, o princípio fundamental que deve ser seguido é:',
      options: [
        'Ligar o computador imediatamente',
        'Navegar pelos arquivos antes de copiar',
        'Preservar a integridade dos dados originais, trabalhando em cópias',
        'Apagar evidências duplicadas',
        'Não documentar os procedimentos'
      ],
      correctAnswer: 2,
      explanation: 'Princípios da Informática Forense: 1) PRESERVAÇÃO - não alterar dados originais; 2) TRABALHAR EM CÓPIAS FORENSES (bit a bit, com hash); 3) DOCUMENTAÇÃO completa; 4) CADEIA DE CUSTÓDIA rigorosa; 5) Usar BLOQUEADORES DE ESCRITA (write blockers). Qualquer alteração nos dados originais pode invalidar a prova.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'informatica-forense',
      question: 'O processo de criar uma cópia bit a bit de um disco rígido, preservando todos os dados incluindo espaços não alocados, é chamado de:',
      options: [
        'Backup simples',
        'Imagem forense',
        'Cópia de segurança',
        'Clone parcial',
        'Formatação'
      ],
      correctAnswer: 1,
      explanation: 'IMAGEM FORENSE (ou duplicação forense): cópia BIT A BIT do dispositivo, incluindo dados ativos, apagados (não sobrescritos), espaço não alocado, áreas ocultas. Gera-se HASH (MD5, SHA-1, SHA-256) para garantir integridade. Ferramentas: FTK Imager, EnCase, dd. A cópia simples não captura dados apagados.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'informatica-forense',
      question: 'Para garantir que os dados coletados não foram alterados durante a análise, utiliza-se:',
      options: [
        'Antivírus',
        'Função hash criptográfica (MD5, SHA-256)',
        'Firewall',
        'Senha forte',
        'Backup em nuvem'
      ],
      correctAnswer: 1,
      explanation: 'HASH CRIPTOGRÁFICO: função matemática que gera "impressão digital" única dos dados. MD5 (128 bits), SHA-1 (160 bits), SHA-256 (256 bits - mais seguro). Qualquer alteração mínima muda completamente o hash. Compara-se hash inicial com hash final para comprovar INTEGRIDADE. É fundamental em perícias e processos judiciais.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'informatica-forense',
      question: 'Arquivos apagados por um usuário podem ser recuperados porque:',
      options: [
        'São sempre armazenados em backup automático',
        'O sistema operacional apenas marca o espaço como disponível, mas os dados permanecem até serem sobrescritos',
        'Ficam gravados na RAM permanentemente',
        'São automaticamente enviados para a nuvem',
        'Não é possível recuperar arquivos apagados'
      ],
      correctAnswer: 1,
      explanation: 'Ao apagar um arquivo, o SO apenas MARCA o espaço como disponível para reuso, mas os DADOS PERMANECEM até serem SOBRESCRITOS. Ferramentas de recuperação (Recuva, PhotoRec, Autopsy) podem recuperar esses dados. FORMATAÇÃO RÁPIDA também não apaga fisicamente. Para destruição segura: sobrescrever múltiplas vezes ou destruição física do HD.',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'criminalistica',
      topic: 'informatica-forense',
      question: 'Em dispositivos móveis (smartphones), uma das maiores dificuldades da perícia forense é:',
      options: [
        'O tamanho pequeno do aparelho',
        'A criptografia dos dados e diversidade de sistemas operacionais',
        'A ausência de dados relevantes',
        'A impossibilidade técnica de análise',
        'Smartphones não podem ser periciados'
      ],
      correctAnswer: 1,
      explanation: 'Desafios em dispositivos móveis: 1) CRIPTOGRAFIA forte (Android FDE/FBE, iOS com Secure Enclave); 2) Diversidade de modelos e SOs; 3) Atualizações constantes; 4) Dados em nuvem; 5) Apps de comunicação criptografados. Técnicas: extração física (chip-off), lógica, JTAG. Ferramentas: Cellebrite UFED, XRY, Oxygen Forensics.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Informática Forense: 5 questions imported');
}

// Função principal para importar todas as questões de Criminalística
export async function seedAllCriminalisticaQuestions() {
  console.log('🚀 Starting Criminalística questions import...');
  
  await seedQuestionsPericiacriminal();
  await seedQuestionsLocaldecrimes();
  await seedQuestionsDocumentoscopia();
  await seedQuestionsBalistica();
  await seedQuestionsPapiloscopia();
  await seedQuestionsGenetica();
  await seedQuestionsFotografiaforense();
  await seedQuestionsToxicologiaforense();
  await seedQuestionsInformaticaforense();
  
  console.log('✅ All Criminalística questions imported successfully! Total: 45 questions (5 per topic)');
}
