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

// ============= CRIMES DE TRÂNSITO (CTB) =============
export async function seedQuestionsCrimesTransito() {
  console.log('🚗 Importing Crimes de Trânsito questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-de-transito-ctb',
      question: 'Segundo o Código de Trânsito Brasileiro, constitui crime punível com detenção de 6 meses a 1 ano, ou suspensão ou proibição de se obter a permissão ou habilitação:',
      options: [
        'Dirigir sem possuir Carteira Nacional de Habilitação',
        'Participar de competição não autorizada ("racha")',
        'Dirigir sob influência de álcool',
        'Entregar direção de veículo a pessoa não habilitada',
        'Dirigir veículo com habilitação cassada'
      ],
      correctAnswer: 3,
      explanation: 'Crime de ENTREGAR/CONFIAR direção a pessoa não habilitada (art. 310 CTB): detenção de 6 meses a 1 ano, ou suspensão/proibição de habilitação. ATENÇÃO: Dirigir SEM habilitação (art. 309) tem pena de detenção de 6 meses a 1 ano, mas é crime DIFERENTE. Confundir direção com entrega é erro comum em provas.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-de-transito-ctb',
      question: 'O crime de homicídio culposo no trânsito (art. 302, CTB) prevê pena de:',
      options: [
        'Detenção de 1 a 3 anos',
        'Detenção de 2 a 4 anos',
        'Reclusão de 2 a 4 anos',
        'Reclusão de 1 a 3 anos',
        'Detenção de 6 meses a 2 anos'
      ],
      correctAnswer: 1,
      explanation: 'Homicídio culposo no trânsito (art. 302, CTB): DETENÇÃO de 2 a 4 anos + suspensão/proibição de habilitação. CAUSAS DE AUMENTO (§ 1º): dobrar pena se motorista não habilitado, sob álcool/drogas, velocidade excessiva, fuga do local. Se lesão corporal culposa (art. 303): detenção de 6 meses a 2 anos. Não se aplica Código Penal (art. 121, § 3º).',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-de-transito-ctb',
      question: 'Participar de corrida, disputa ou competição automobilística não autorizada, na via pública (popularmente conhecido como "racha"), caracteriza crime com pena de:',
      options: [
        'Detenção de 6 meses a 1 ano',
        'Detenção de 6 meses a 3 anos',
        'Reclusão de 6 meses a 2 anos',
        'Reclusão de 1 a 3 anos',
        'Detenção de 1 a 2 anos'
      ],
      correctAnswer: 1,
      explanation: 'Crime de "RACHA" (art. 308, CTB - alterado pela Lei 13.546/2017): DETENÇÃO de 6 meses a 3 anos + suspensão/proibição de habilitação + APREENSÃO do veículo. Se resultar lesão corporal grave: reclusão de 3 a 6 anos. Se resultar morte: reclusão de 5 a 10 anos. Modalidade DOLOSA (diferente do homicídio culposo). É crime GRAVÍSSIMO após alteração legislativa.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-de-transito-ctb',
      question: 'Trafegar em velocidade incompatível com a segurança nas proximidades de escolas, hospitais, estações de embarque/desembarque de passageiros, logradouros estreitos ou onde haja grande movimentação/concentração de pessoas, gerando perigo de dano, constitui:',
      options: [
        'Infração administrativa apenas',
        'Crime de perigo concreto, punível com detenção de 6 meses a 1 ano',
        'Crime de perigo abstrato, sem previsão de pena',
        'Crime de trânsito punível com multa apenas',
        'Contravenção penal'
      ],
      correctAnswer: 1,
      explanation: 'Crime de TRÂNSITO EM VELOCIDADE INCOMPATÍVEL (art. 311, CTB): detenção de 6 meses a 1 ano. É crime de PERIGO CONCRETO (exige prova de que houve efetivo perigo de dano). Locais específicos: escolas, hospitais, estações, logradouros estreitos, aglomerações. Diferente da infração administrativa de excesso de velocidade (que independe de perigo concreto).',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-de-transito-ctb',
      question: 'Sobre a suspensão ou proibição de se obter a permissão ou habilitação para dirigir, prevista como pena nos crimes de trânsito, é CORRETO afirmar:',
      options: [
        'Tem prazo de 2 meses a 5 anos e será fixada na sentença',
        'É aplicada automaticamente, independente de previsão na sentença',
        'Só pode ser aplicada em crimes dolosos',
        'Não se aplica aos crimes culposos',
        'É pena acessória de aplicação obrigatória'
      ],
      correctAnswer: 0,
      explanation: 'A suspensão/proibição de habilitação (art. 292, CTB) é PENA PRINCIPAL (não acessória) com prazo de 2 MESES A 5 ANOS, fixado NA SENTENÇA conforme gravidade. Aplica-se a crimes DOLOSOS e CULPOSOS. Após trânsito em julgado, inicia período de suspensão (se condenado já era habilitado) ou proibição (se não habilitado). Durante cumprimento, não pode dirigir sob pena de crime do art. 307.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Crimes de Trânsito questions imported successfully!');
}

// ============= LEI DE TORTURA =============
export async function seedQuestionsLeiTortura() {
  console.log('⛔ Importing Lei de Tortura questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-tortura',
      question: 'Segundo a Lei 9.455/1997 (Lei de Tortura), constitui crime de tortura, com pena de reclusão de 2 a 8 anos:',
      options: [
        'Apenas o constrangimento com emprego de violência para obter confissão',
        'Constranger alguém com violência/grave ameaça, causando sofrimento físico/mental, para obter informação, declaração ou confissão',
        'Apenas submeter pessoa a sofrimento físico',
        'Somente quando praticado por servidor público',
        'Apenas quando resultar lesão corporal grave'
      ],
      correctAnswer: 1,
      explanation: 'Crime de TORTURA (art. 1º, I, "a", Lei 9.455/97): reclusão de 2 a 8 anos. Elementos: 1) CONSTRANGER alguém; 2) com VIOLÊNCIA ou GRAVE AMEAÇA; 3) causando SOFRIMENTO FÍSICO OU MENTAL; 4) FINALIDADE: obter informação, declaração ou confissão (da vítima ou terceiro). Pode ser praticado por QUALQUER PESSOA (não apenas servidor público). Crime HEDIONDO.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-tortura',
      question: 'A tortura-castigo, que consiste em submeter pessoa presa ou sujeita a medida de segurança a sofrimento físico/mental, mediante violência ou grave ameaça, como forma de aplicar castigo pessoal ou medida de caráter preventivo, é punível com:',
      options: [
        'Detenção de 1 a 4 anos',
        'Reclusão de 1 a 4 anos',
        'Reclusão de 2 a 8 anos',
        'Reclusão de 4 a 10 anos',
        'Reclusão de 3 a 12 anos'
      ],
      correctAnswer: 2,
      explanation: 'TORTURA-CASTIGO (art. 1º, I, "b", Lei 9.455/97): reclusão de 2 a 8 anos. Vítima: pessoa PRESA ou sujeita a MEDIDA DE SEGURANÇA. Finalidade: aplicar CASTIGO PESSOAL ou medida de CARÁTER PREVENTIVO. Praticado geralmente por agentes penitenciários, policiais. Crime HEDIONDO. Diferente da tortura para obter confissão (mesma pena, mas finalidades diversas).',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-tortura',
      question: 'Se do crime de tortura resultar lesão corporal de natureza grave ou gravíssima, a pena será:',
      options: [
        'Aumentada de 1/3 até metade',
        'Aumentada de metade até 2/3',
        'Reclusão de 4 a 10 anos',
        'Reclusão de 8 a 16 anos',
        'Reclusão de 12 a 30 anos'
      ],
      correctAnswer: 2,
      explanation: 'Se resultar LESÃO CORPORAL GRAVE OU GRAVÍSSIMA (art. 1º, § 3º): reclusão de 4 a 10 anos. Se resultar MORTE (art. 1º, § 2º): reclusão de 8 a 16 anos. São FORMAS QUALIFICADAS pelo resultado. A tortura simples tem pena de 2 a 8 anos. Crime hediondo em TODAS as modalidades (art. 1º, § 7º). Inafiançável e insusceptível de graça/anistia.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-tortura',
      question: 'Sobre a omissão em face da tortura, prevista no art. 1º, § 2º, da Lei 9.455/97, é CORRETO afirmar:',
      options: [
        'Não há previsão de crime omissivo na Lei de Tortura',
        'Aquele que se omite, podendo evitar a tortura, responde apenas por omissão de socorro',
        'Quem se omite diante de tortura, quando tinha dever de evitá-la ou apurá-la, incorre na pena de detenção de 1 a 4 anos',
        'A omissão equipara-se à tortura e tem a mesma pena',
        'É apenas infração administrativa disciplinar'
      ],
      correctAnswer: 2,
      explanation: 'OMISSÃO em face da tortura (art. 1º, § 2º): DETENÇÃO de 1 a 4 anos. Sujeito ativo: quem tinha DEVER DE EVITÁ-LA ou APURÁ-LA (autoridades, policiais, agentes penitenciários). Crime OMISSIVO PRÓPRIO. Pena MENOR que tortura (que é reclusão de 2-8 anos). Aplicável quando agente presencia tortura e, podendo impedir, nada faz. Também abrange omissão na apuração (superior hierárquico que não investiga).',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-tortura',
      question: 'A condenação por crime de tortura acarretará a perda do cargo, função ou emprego público e a interdição para seu exercício pelo dobro do prazo da pena aplicada. Essa consequência:',
      options: [
        'É automática, independentemente de declaração na sentença',
        'Deve ser motivadamente declarada na sentença',
        'Só se aplica a servidores públicos federais',
        'Depende de processo administrativo disciplinar autônomo',
        'Não está prevista na Lei de Tortura'
      ],
      correctAnswer: 1,
      explanation: 'Efeito da condenação por tortura (art. 1º, § 5º): PERDA do cargo/função/emprego público + INTERDIÇÃO para exercê-lo pelo DOBRO da pena aplicada. Deve ser MOTIVADAMENTE DECLARADA NA SENTENÇA (não é automática). Aplica-se a QUALQUER servidor (federal, estadual, municipal). É efeito EXTRAPENAL da condenação. Exemplo: condenado a 4 anos de reclusão → fica 8 anos interditado para cargo público.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Lei de Tortura questions imported successfully!');
}

// ============= LEI DE LAVAGEM DE DINHEIRO =============
export async function seedQuestionsLavagem() {
  console.log('💰 Importing Lei de Lavagem de Dinheiro questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-lavagem-de-dinheiro',
      question: 'Segundo a Lei 9.613/1998 (com alterações da Lei 12.683/2012), o crime de lavagem de dinheiro consiste em:',
      options: [
        'Apenas ocultar ou dissimular bens provenientes de tráfico de drogas',
        'Ocultar ou dissimular origem, localização, disposição, movimentação ou propriedade de bens/valores provenientes de infração penal',
        'Apenas converter em ativos lícitos bens de origem criminosa',
        'Somente praticar operações financeiras com recursos ilícitos',
        'Exclusivamente adquirir bens com dinheiro de origem desconhecida'
      ],
      correctAnswer: 1,
      explanation: 'Crime de LAVAGEM DE DINHEIRO (art. 1º, Lei 9.613/98): ocultar/dissimular NATUREZA, origem, localização, disposição, movimentação ou PROPRIEDADE de bens/direitos/valores provenientes de INFRAÇÃO PENAL. Após Lei 12.683/2012, qualquer INFRAÇÃO PENAL pode ser antecedente (antes era rol taxativo). Pena: reclusão de 3 a 10 anos + multa. Crime AUTÔNOMO (não exige condenação pelo crime antecedente).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-lavagem-de-dinheiro',
      question: 'A pena para o crime de lavagem de dinheiro é:',
      options: [
        'Reclusão de 1 a 4 anos e multa',
        'Reclusão de 2 a 6 anos e multa',
        'Reclusão de 3 a 10 anos e multa',
        'Reclusão de 4 a 12 anos e multa',
        'Detenção de 2 a 8 anos e multa'
      ],
      correctAnswer: 2,
      explanation: 'Pena da lavagem de dinheiro: RECLUSÃO de 3 a 10 anos + MULTA (art. 1º, caput). A pena é AUMENTADA de 1/3 a 2/3 se cometida de forma REITERADA ou por ORGANIZAÇÃO CRIMINOSA. É REDUZIDA de 1/3 a 2/3 e inicia em regime ABERTO se autor colabora espontaneamente, identifica demais coautores/partícipes, recupera produto do crime. Crime equiparado a HEDIONDO para fins de investigação.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-lavagem-de-dinheiro',
      question: 'Participar de grupo, associação ou escritório com a finalidade de praticar lavagem de dinheiro caracteriza crime com pena de:',
      options: [
        'Igual à lavagem de dinheiro (reclusão de 3 a 10 anos)',
        'Reclusão de 3 a 10 anos, aumentada de 1/3 a 2/3',
        'Reclusão de 1 a 5 anos',
        'Detenção de 6 meses a 2 anos',
        'Não há crime específico, apenas a lavagem'
      ],
      correctAnswer: 1,
      explanation: 'Crime de ASSOCIAÇÃO para lavagem (art. 1º, § 4º): mesma pena da LAVAGEM (reclusão de 3 a 10 anos + multa), AUMENTADA DE 1/3 A 2/3. Elementos: 1) associação estável; 2) finalidade de praticar lavagem. Crime FORMAL (não exige prática efetiva de lavagem). Crime PERMANENTE. Absorve formação de quadrilha/organização criminosa quando a finalidade é exclusivamente lavagem.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-lavagem-de-dinheiro',
      question: 'Sobre a responsabilização por lavagem de dinheiro, é INCORRETO afirmar:',
      options: [
        'O autor da infração penal antecedente pode ser responsabilizado pela lavagem (autorreciclagem)',
        'A condenação pelo crime antecedente é requisito para processar a lavagem',
        'Pessoas jurídicas podem ser responsabilizadas por lavagem',
        'Aplica-se à lavagem o princípio da extraterritorialidade',
        'A lavagem é crime autônomo em relação à infração antecedente'
      ],
      correctAnswer: 1,
      explanation: 'A condenação pelo crime ANTECEDENTE NÃO é requisito para processar/condenar por lavagem (art. 2º, II). Lavagem é CRIME AUTÔNOMO. Admite-se AUTORRECICLAGEM (autor do crime antecedente lava o produto). Pessoas jurídicas respondem (art. 1º, § 1º) com liquidação/interdição. Aplica-se extraterritorialidade (art. 2º, I): brasileiro que lava no exterior pode ser punido no Brasil.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-lavagem-de-dinheiro',
      question: 'O Conselho de Controle de Atividades Financeiras (COAF), criado pela Lei de Lavagem, tem como atribuição principal:',
      options: [
        'Processar e julgar crimes de lavagem de dinheiro',
        'Disciplinar, aplicar penas administrativas, receber comunicações de operações suspeitas e fiscalizar',
        'Investigar crimes financeiros com poder de polícia',
        'Autorizar operações financeiras acima de determinado valor',
        'Emitir passaportes e documentos internacionais'
      ],
      correctAnswer: 1,
      explanation: 'O COAF (art. 14, Lei 9.613/98) é órgão de INTELIGÊNCIA FINANCEIRA com atribuições: 1) DISCIPLINAR setores obrigados; 2) aplicar PENAS ADMINISTRATIVAS; 3) RECEBER comunicações de operações suspeitas; 4) FISCALIZAR; 5) COORDENAR mecanismos de cooperação; 6) COMUNICAR autoridades competentes. NÃO tem poder de polícia judiciária nem autoriza operações. Vinculado ao Ministério da Economia (antes Ministério da Fazenda).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Lei de Lavagem de Dinheiro questions imported successfully!');
}

// ============= LEI DE ABUSO DE AUTORIDADE =============
export async function seedQuestionsAbusoAutoridade() {
  console.log('🚨 Importing Lei de Abuso de Autoridade questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-abuso-de-autoridade',
      question: 'A Lei 13.869/2019 (Lei de Abuso de Autoridade) define que o abuso de autoridade é praticado por agente público que:',
      options: [
        'Apenas comete crime no exercício de suas funções',
        'Atenta contra direitos e garantias fundamentais, com finalidade específica de prejudicar outrem ou beneficiar a si mesmo/terceiro, ou ainda por mero capricho/satisfação pessoal',
        'Somente quando age com dolo específico de causar dano ao Estado',
        'Qualquer ato ilegal praticado no exercício da função',
        'Apenas em casos de violência contra cidadãos'
      ],
      correctAnswer: 1,
      explanation: 'Abuso de autoridade (art. 1º, § 1º, Lei 13.869/19): agente público que atenta contra DIREITOS E GARANTIAS FUNDAMENTAIS, com FINALIDADE ESPECÍFICA de: 1) PREJUDICAR outrem; 2) BENEFICIAR a si/terceiro; 3) por MERO CAPRICHO ou satisfação pessoal. Elemento subjetivo: DOLO ESPECÍFICO (finalidade especial). Não é qualquer ato ilegal; exige violação a direitos fundamentais + finalidade especial.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-abuso-de-autoridade',
      question: 'Decretar a condução coercitiva de testemunha ou investigado, fora das hipóteses legalmente permitidas, ou sem ordem judicial escrita e fundamentada, constitui crime de abuso de autoridade com pena de:',
      options: [
        'Detenção de 6 meses a 2 anos',
        'Detenção de 1 a 4 anos',
        'Reclusão de 1 a 4 anos',
        'Detenção de 3 meses a 1 ano',
        'Não constitui crime'
      ],
      correctAnswer: 1,
      explanation: 'Crime de CONDUÇÃO COERCITIVA ILEGAL (art. 10, Lei 13.869/19): detenção de 1 a 4 anos + multa. Condutas: decretar condução coercitiva fora das hipóteses legais OU sem ordem ESCRITA e FUNDAMENTADA. STF (ADPF 395 e 444) declarou inconstitucional condução coercitiva para interrogatório. Condução permitida: testemunha que, regularmente intimada, não comparece (art. 218, CPP).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-abuso-de-autoridade',
      question: 'Decretar prisão preventiva sem fundamentação concreta ou deixar de a revogar quando ausentes seus requisitos legais constitui:',
      options: [
        'Mero erro judiciário sem consequência penal',
        'Crime de abuso de autoridade com detenção de 1 a 4 anos',
        'Infração administrativa apenas',
        'Crime contra a administração pública',
        'Contravenção penal'
      ],
      correctAnswer: 1,
      explanation: 'Crime de DECRETAÇÃO/MANUTENÇÃO ILEGAL DE PRISÃO (art. 9º, Lei 13.869/19): detenção de 1 a 4 anos + multa. Condutas: decretar prisão preventiva SEM fundamentação CONCRETA ou DEIXAR DE REVOGAR quando ausentes requisitos. Exige DOLO ESPECÍFICO (finalidade de prejudicar/beneficiar/capricho). Diferente de erro judiciário (que é culposo). Protege direito fundamental à liberdade.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-abuso-de-autoridade',
      question: 'Segundo a Lei 13.869/2019, NÃO constitui abuso de autoridade:',
      options: [
        'A divergência na interpretação de lei ou avaliação de fatos e provas',
        'Decretar prisão sem fundamentação',
        'Negar ao réu acesso aos autos do procedimento investigatório',
        'Exigir informação ou cumprimento de obrigação sem expresso amparo legal',
        'Prolongar a execução de prisão temporária além do prazo legal'
      ],
      correctAnswer: 0,
      explanation: 'NÃO constitui abuso (art. 1º, § 2º): DIVERGÊNCIA na interpretação de LEI ou avaliação de FATOS e PROVAS. É excludente de ilicitude da Lei de Abuso. Magistrado/autoridade que interpreta lei de forma divergente, desde que fundamentada, NÃO comete abuso. Protege atividade jurisdicional e investigativa. Não se confunde com arbitrariedade manifesta ou má-fé (que podem caracterizar abuso).',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-abuso-de-autoridade',
      question: 'A pena de perda do cargo, mandato ou função pública e a interdição para o exercício de qualquer outra função pública por até 5 anos:',
      options: [
        'É automática em caso de condenação por abuso de autoridade',
        'Pode ser aplicada cumulativamente à pena privativa de liberdade e multa',
        'Só se aplica em crimes dolosos contra a vida',
        'Não está prevista na Lei de Abuso de Autoridade',
        'Depende de processo administrativo autônomo'
      ],
      correctAnswer: 1,
      explanation: 'Penas aplicáveis (art. 2º): 1) privativa de liberdade; 2) multa; 3) PERDA do cargo/mandato/função + INTERDIÇÃO para outra função pública por ATÉ 5 ANOS. A perda/interdição pode ser aplicada CUMULATIVAMENTE (não é automática; depende de previsão na sentença). Sanção civil: indenizar dano material/moral. Sanção administrativa: processo disciplinar autônomo (pode gerar demissão independente da esfera criminal).',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2023
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Lei de Abuso de Autoridade questions imported successfully!');
}

// ============= CRIMES AMBIENTAIS =============
export async function seedQuestionsCrimesAmbientais() {
  console.log('🌳 Importing Crimes Ambientais questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-ambientais',
      question: 'Segundo a Lei 9.605/1998 (Lei de Crimes Ambientais), matar, perseguir, caçar, apanhar, utilizar espécimes da fauna silvestre sem a devida permissão, licença ou autorização da autoridade competente, constitui crime com pena de:',
      options: [
        'Detenção de 3 meses a 1 ano e multa',
        'Detenção de 6 meses a 1 ano e multa',
        'Reclusão de 1 a 3 anos e multa',
        'Detenção de 1 a 3 anos e multa',
        'Reclusão de 2 a 5 anos e multa'
      ],
      correctAnswer: 1,
      explanation: 'Crime contra a FAUNA (art. 29, Lei 9.605/98): detenção de 6 meses a 1 ano + multa. Condutas: matar, perseguir, caçar, apanhar, utilizar fauna silvestre SEM autorização. AUMENTO DE PENA (§ 4º): metade se crime em período reprodutivo, migração, espécie ameaçada, à noite, abuso de licença, área protegida, com arma, fogo, veneno. Não confundir com pesca ilegal (art. 34): detenção de 1 a 3 anos + multa.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-ambientais',
      question: 'Destruir ou danificar floresta considerada de preservação permanente, mesmo que em formação, ou utilizá-la com infringência das normas de proteção, caracteriza crime com pena de:',
      options: [
        'Detenção de 6 meses a 1 ano',
        'Detenção de 1 a 3 anos',
        'Reclusão de 1 a 3 anos',
        'Detenção de 3 meses a 1 ano',
        'Reclusão de 2 a 4 anos'
      ],
      correctAnswer: 1,
      explanation: 'Crime de DESTRUIÇÃO DE FLORESTA DE PRESERVAÇÃO PERMANENTE (art. 38, Lei 9.605/98): detenção de 1 a 3 anos + multa (ou apenas multa). APP: área protegida nos termos do Código Florestal (margens de rios, nascentes, encostas, topos de morro, etc.). Se crime CULPOSO: pena reduzida à METADE. Se corte de árvores SEM autorização em geral (não APP): art. 39, detenção de 1 a 3 anos + multa.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-ambientais',
      question: 'Causar poluição de qualquer natureza em níveis que resultem ou possam resultar em danos à saúde humana, mortandade de animais ou destruição significativa da flora, constitui:',
      options: [
        'Contravenção penal',
        'Infração administrativa apenas',
        'Crime com pena de reclusão de 1 a 4 anos e multa',
        'Crime com pena de detenção de 6 meses a 2 anos',
        'Crime inafiançável'
      ],
      correctAnswer: 2,
      explanation: 'Crime de POLUIÇÃO (art. 54, Lei 9.605/98): reclusão de 1 a 4 anos + multa. Poluição que RESULTE ou POSSA RESULTAR em: danos à saúde, mortandade de animais, destruição da flora. Crime de PERIGO (basta possibilidade de resultado). FORMAS QUALIFICADAS (§ 2º): pena de reclusão de 1 a 5 anos se poluição torna área urbana/rural imprópria, dificulta abastecimento de água, ocorre por lançamento de resíduos sólidos/líquidos/gasosos.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-ambientais',
      question: 'Sobre a responsabilidade penal da pessoa jurídica por crimes ambientais, é CORRETO afirmar:',
      options: [
        'Não existe responsabilidade penal de pessoa jurídica no Brasil',
        'Pessoa jurídica responde isoladamente, sem necessidade de responsabilização de pessoa física',
        'Pode ser responsabilizada desde que a infração seja cometida por decisão de representante legal/órgão e no interesse/benefício da entidade',
        'Apenas empresas públicas podem ser responsabilizadas',
        'Depende de condenação prévia da pessoa física'
      ],
      correctAnswer: 2,
      explanation: 'Responsabilidade penal da PJ (art. 3º, Lei 9.605/98): possível desde que: 1) infração cometida por DECISÃO de representante legal/contratual ou ÓRGÃO COLEGIADO; 2) no INTERESSE ou BENEFÍCIO da entidade. Pode haver responsabilização CONCOMITANTE da PF e PJ (teoria da "dupla imputação"). STJ: admite responsabilização da PJ independente da PF. Penas aplicáveis à PJ: multa, restritivas de direitos, prestação de serviços.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-ambientais',
      question: 'As penas restritivas de direitos previstas na Lei de Crimes Ambientais incluem, EXCETO:',
      options: [
        'Prestação de serviços à comunidade',
        'Interdição temporária de direitos',
        'Suspensão parcial ou total de atividades',
        'Prestação pecuniária',
        'Perda de bens e valores'
      ],
      correctAnswer: 4,
      explanation: 'Penas restritivas de direitos (art. 8º): 1) PRESTAÇÃO DE SERVIÇOS à comunidade; 2) INTERDIÇÃO TEMPORÁRIA de direitos; 3) SUSPENSÃO parcial/total de atividades; 4) PRESTAÇÃO PECUNIÁRIA; 5) RECOLHIMENTO DOMICILIAR. Perda de bens NÃO é pena restritiva, mas sim efeito da condenação/confisco. PRD substituem privativa de liberdade quando pena não superior a 4 anos e crime culposo, independente da pena.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Crimes Ambientais questions imported successfully!');
}

// ============= ESTATUTO DO IDOSO - CRIMES =============
export async function seedQuestionsEstatutoIdosoCrimes() {
  console.log('👴 Importing Estatuto do Idoso - Crimes questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'estatuto-do-idoso-crimes',
      question: 'Segundo a Lei 10.741/2003 (Estatuto do Idoso), discriminar pessoa idosa, impedindo ou dificultando seu acesso a operações bancárias, aos meios de transporte, ao direito de contratar ou por qualquer outro meio ou instrumento necessário ao exercício da cidadania, constitui crime com pena de:',
      options: [
        'Detenção de 6 meses a 1 ano e multa',
        'Reclusão de 6 meses a 1 ano e multa',
        'Detenção de 1 a 3 anos e multa',
        'Reclusão de 1 a 4 anos e multa',
        'Detenção de 3 a 12 meses'
      ],
      correctAnswer: 0,
      explanation: 'Crime de DISCRIMINAÇÃO (art. 96, Lei 10.741/03): detenção de 6 meses a 1 ano + multa. Condutas: discriminar idoso impedindo/dificultando acesso a: operações bancárias, transportes, contratar, exercício da cidadania. Protege dignidade do idoso. Aumenta pena 1/3 se lesão corporal; metade se morte. Crime de ação penal pública INCONDICIONADA (mesmo antes da Lei 13.964/19).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'estatuto-do-idoso-crimes',
      question: 'Apropriar-se de ou desviar bens, proventos, pensão ou qualquer outro rendimento do idoso, dando-lhes aplicação diversa da de sua finalidade, caracteriza crime com pena de:',
      options: [
        'Detenção de 6 meses a 2 anos e multa',
        'Reclusão de 1 a 4 anos e multa',
        'Detenção de 1 a 2 anos e multa',
        'Reclusão de 2 a 5 anos e multa',
        'Detenção de 3 meses a 1 ano'
      ],
      correctAnswer: 1,
      explanation: 'Crime de APROPRIAÇÃO/DESVIO (art. 102, Lei 10.741/03): reclusão de 1 a 4 anos + multa. Objeto: bens, proventos, pensão, rendimentos do idoso. Conduta: apropriar-se ou desviar, dando aplicação DIVERSA da finalidade. Sujeito ativo: pode ser QUALQUER PESSOA (não apenas tutor/curador, ao contrário do CP). Tipo especial em relação ao peculato de apropriação e apropriação indébita.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'estatuto-do-idoso-crimes',
      question: 'Deixar o médico, enfermeiro ou dirigente de estabelecimento de saúde ou instituição de longa permanência de comunicar à autoridade competente os casos de crimes contra idoso de que tiver conhecimento, constitui:',
      options: [
        'Infração administrativa apenas',
        'Crime com pena de detenção de 6 meses a 1 ano e multa',
        'Crime com pena de detenção de 1 a 3 anos',
        'Contravenção penal',
        'Não constitui ilícito penal'
      ],
      correctAnswer: 1,
      explanation: 'Crime de OMISSÃO DE COMUNICAÇÃO (art. 108, Lei 10.741/03): detenção de 6 meses a 1 ano + multa. Sujeito ativo PRÓPRIO: médico, enfermeiro, dirigente de estabelecimento de saúde/instituição de longa permanência. Conduta: deixar de COMUNICAR à autoridade competente (polícia, MP, conselho do idoso) casos de CRIMES contra idoso que teve conhecimento. Crime OMISSIVO PRÓPRIO. Dever funcional de comunicação.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'estatuto-do-idoso-crimes',
      question: 'Expor a perigo a integridade e a saúde, física ou psíquica, do idoso, submetendo-o a condições desumanas ou degradantes ou privando-o de alimentos e cuidados indispensáveis, constitui crime com pena de:',
      options: [
        'Detenção de 6 meses a 1 ano',
        'Detenção de 2 meses a 1 ano e multa',
        'Reclusão de 1 a 4 anos',
        'Detenção de 1 a 4 anos',
        'Reclusão de 2 a 6 anos'
      ],
      correctAnswer: 1,
      explanation: 'Crime de EXPOSIÇÃO A PERIGO (art. 99, Lei 10.741/03): detenção de 2 meses a 1 ano + multa. Condutas: submeter idoso a condições DESUMANAS/DEGRADANTES ou PRIVÁ-LO de alimentos/cuidados indispensáveis. Crime de PERIGO (não exige resultado lesivo). AUMENTA pena 1/3 se LESÃO corporal grave; METADE se MORTE. Quando resulta morte, pode configurar homicídio (absorve exposição) ou exposição qualificada.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'estatuto-do-idoso-crimes',
      question: 'Os crimes definidos no Estatuto do Idoso são de ação penal:',
      options: [
        'Privada exclusivamente',
        'Pública condicionada à representação',
        'Pública incondicionada',
        'Privada subsidiária da pública',
        'Depende do tipo de crime'
      ],
      correctAnswer: 2,
      explanation: 'Todos os crimes do Estatuto do Idoso são de AÇÃO PENAL PÚBLICA INCONDICIONADA (art. 94). Não exige representação da vítima. MP atua de ofício. Fundamento: vulnerabilidade do idoso, interesse público na proteção. Mesmo antes do Pacote Anticrime (Lei 13.964/19), já era incondicionada. Diferente do ECA, onde alguns crimes eram condicionados à representação (alterado pela Lei 13.718/18).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Estatuto do Idoso - Crimes questions imported successfully!');
}

// ============= ECA - CRIMES =============
export async function seedQuestionsECACrimes() {
  console.log('👶 Importing ECA - Crimes questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'eca-crimes',
      question: 'Segundo a Lei 8.069/1990 (ECA), vender, fornecer, servir, ministrar ou entregar, ainda que gratuitamente, bebida alcoólica a criança ou adolescente, constitui crime com pena de:',
      options: [
        'Detenção de 6 meses a 2 anos',
        'Detenção de 2 a 4 anos e multa',
        'Reclusão de 1 a 4 anos',
        'Detenção de 3 meses a 1 ano',
        'Reclusão de 2 a 4 anos'
      ],
      correctAnswer: 1,
      explanation: 'Crime de FORNECIMENTO DE ÁLCOOL (art. 243, ECA): detenção de 2 a 4 anos + multa (redação da Lei 13.106/2015). Condutas: vender, fornecer, servir, ministrar, ENTREGAR bebida alcoólica, AINDA QUE GRATUITAMENTE. Vítima: criança (<12 anos) ou adolescente (12-18 anos). Pune também quem permite/autoriza consumo em estabelecimento. Crime FORMAL (consuma com entrega, independente de embriaguez).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'eca-crimes',
      question: 'Produzir, reproduzir, dirigir, fotografar, filmar ou registrar, por qualquer meio, cena de sexo explícito ou pornográfica envolvendo criança ou adolescente, caracteriza crime com pena de:',
      options: [
        'Reclusão de 2 a 6 anos',
        'Reclusão de 4 a 8 anos e multa',
        'Reclusão de 6 a 10 anos',
        'Detenção de 2 a 6 anos',
        'Reclusão de 3 a 6 anos'
      ],
      correctAnswer: 1,
      explanation: 'Crime de PRODUÇÃO DE PORNOGRAFIA INFANTIL (art. 240, ECA): reclusão de 4 a 8 anos + multa. Condutas: produzir, reproduzir, dirigir, fotografar, filmar, REGISTRAR cena de sexo explícito/pornografia com criança/adolescente. Crime HEDIONDO (art. 1º, VIII, Lei 8.072/90). AUMENTA pena 1/3 a 2/3 se: agente prevalece-se de relações domésticas, coabitação, hospitalidade, relação de parentesco, autoridade, poder/influência sobre vítima.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'eca-crimes',
      question: 'Adquirir, possuir ou armazenar, por qualquer meio, fotografia, vídeo ou outra forma de registro que contenha cena de sexo explícito ou pornográfica envolvendo criança ou adolescente, é punido com:',
      options: [
        'Detenção de 6 meses a 2 anos',
        'Reclusão de 1 a 4 anos e multa',
        'Reclusão de 2 a 4 anos',
        'Detenção de 1 a 3 anos',
        'Não constitui crime'
      ],
      correctAnswer: 1,
      explanation: 'Crime de POSSE DE PORNOGRAFIA INFANTIL (art. 241-B, ECA): reclusão de 1 a 4 anos + multa. Condutas: adquirir, possuir, ARMAZENAR material pornográfico com criança/adolescente. Menos grave que produção (4-8 anos). AUMENTA pena 1/3 a 2/3 nos mesmos casos. Crime FORMAL. Consumação: mera POSSE (independente de divulgação). Não confundir com "simular" pornografia (art. 241-C): pena de 1-3 anos.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'eca-crimes',
      question: 'Submeter criança ou adolescente sob sua autoridade, guarda ou vigilância a vexame ou constrangimento, caracteriza crime com pena de:',
      options: [
        'Detenção de 6 meses a 2 anos',
        'Reclusão de 1 a 3 anos',
        'Detenção de 3 meses a 1 ano',
        'Reclusão de 6 meses a 2 anos',
        'Detenção de 1 a 3 anos'
      ],
      correctAnswer: 0,
      explanation: 'Crime de SUBMETER A VEXAME (art. 232, ECA): detenção de 6 meses a 2 anos. Sujeito ativo: pessoa que tem AUTORIDADE, GUARDA ou VIGILÂNCIA sobre criança/adolescente (pais, responsáveis, professores). Conduta: submeter a VEXAME ou CONSTRANGIMENTO. Protege dignidade, integridade psíquica. Crime FORMAL. Ação penal: pública INCONDICIONADA (antes era condicionada; alteração Lei 13.718/18).',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'eca-crimes',
      question: 'Deixar o médico, professor ou responsável por estabelecimento de atenção à saúde e de ensino fundamental, pré-escola ou creche de comunicar à autoridade competente os casos de que tenha conhecimento, envolvendo suspeita ou confirmação de maus-tratos contra criança ou adolescente, constitui:',
      options: [
        'Infração administrativa apenas',
        'Crime com pena de multa de 3 a 20 salários mínimos',
        'Crime com pena de detenção de 1 a 6 meses',
        'Contravenção penal',
        'Não constitui ilícito'
      ],
      correctAnswer: 1,
      explanation: 'Crime de OMISSÃO DE COMUNICAÇÃO DE MAUS-TRATOS (art. 245, ECA): MULTA de 3 a 20 salários-mínimos, aplicando-se o DOBRO em caso de REINCIDÊNCIA. Sujeito ativo: médico, professor, responsável por estabelecimento de saúde/ensino. Conduta: deixar de comunicar suspeita/confirmação de MAUS-TRATOS. Não tem pena privativa de liberdade (apenas multa). Autoridade competente: Conselho Tutelar, polícia, MP.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ ECA - Crimes questions imported successfully!');
}

// ============= LEI DE INTERCEPTAÇÃO TELEFÔNICA =============
export async function seedQuestionsInterceptacao() {
  console.log('📞 Importing Lei de Interceptação Telefônica questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-interceptacao-telefonica',
      question: 'Segundo a Lei 9.296/1996, a interceptação de comunicações telefônicas poderá ser determinada pelo juiz, de ofício ou a requerimento:',
      options: [
        'Da autoridade policial apenas',
        'Do Ministério Público apenas',
        'Da autoridade policial, na investigação criminal, e do Ministério Público, na investigação criminal e na instrução processual penal',
        'De qualquer das partes no processo',
        'Apenas do delegado de polícia federal'
      ],
      correctAnswer: 2,
      explanation: 'Legitimados para REQUERER interceptação (art. 3º, Lei 9.296/96): 1) AUTORIDADE POLICIAL (delegado), na INVESTIGAÇÃO criminal; 2) MINISTÉRIO PÚBLICO, na investigação E instrução processual penal. JUIZ pode determinar DE OFÍCIO (STF admite). Defesa NÃO pode requerer (só MP e polícia). Competência: juiz CRIMINAL (não juiz cível). Decisão fundamentada é obrigatória.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-interceptacao-telefonica',
      question: 'A interceptação telefônica NÃO será admitida quando:',
      options: [
        'Não houver indícios razoáveis da autoria ou participação em infração penal',
        'A prova puder ser feita por outros meios disponíveis',
        'O fato investigado constituir infração penal punida, no máximo, com pena de detenção',
        'Todas as alternativas anteriores',
        'Apenas as alternativas A e B'
      ],
      correctAnswer: 3,
      explanation: 'Requisitos NEGATIVOS (art. 2º): NÃO cabe interceptação quando: 1) não houver INDÍCIOS RAZOÁVEIS de autoria/participação; 2) prova puder ser feita por OUTROS MEIOS; 3) fato constituir INFRAÇÃO punida com DETENÇÃO (só cabe se reclusão). STF: admite interceptação em crimes punidos com detenção se conexos com crime punido com reclusão. Todos os três requisitos devem estar ausentes para vedar interceptação.',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-interceptacao-telefonica',
      question: 'O prazo máximo de duração da interceptação telefônica é de:',
      options: [
        '15 dias, prorrogáveis por igual período',
        '15 dias, prorrogáveis por iguais períodos enquanto demonstrada sua necessidade',
        '30 dias, improrrogáveis',
        '30 dias, prorrogável uma única vez',
        '60 dias, improrrogáveis'
      ],
      correctAnswer: 1,
      explanation: 'Prazo da interceptação (art. 5º): NÃO SUPERIOR A 15 DIAS, prorrogável por IGUAIS PERÍODOS, desde que demonstrada NECESSIDADE. Não há limite de prorrogações (enquanto necessária e fundamentada). Deve ser RENOVADA a fundamentação. STF: admite interceptação por anos se demonstrada necessidade (ex: organizações criminosas). Termo inicial: EXECUÇÃO da medida (não deferimento).',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-interceptacao-telefonica',
      question: 'Realizar interceptação de comunicações telefônicas sem autorização judicial ou com objetivos não autorizados em lei constitui crime com pena de:',
      options: [
        'Detenção de 6 meses a 2 anos',
        'Reclusão de 2 a 4 anos e multa',
        'Reclusão de 1 a 4 anos',
        'Detenção de 1 a 4 anos e multa',
        'Reclusão de 3 a 6 anos'
      ],
      correctAnswer: 1,
      explanation: 'Crime de INTERCEPTAÇÃO ILEGAL (art. 10, Lei 9.296/96): reclusão de 2 a 4 anos + multa. Condutas: realizar interceptação SEM autorização judicial ou com objetivos NÃO autorizados em lei. Crime PRÓPRIO (pode ser praticado por servidor público ou particular que teve acesso ao sistema). Não confundir com violação de comunicação telefônica do CP (art. 151, § 1º, III: detenção de 1-4 anos).',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'lei-de-interceptacao-telefonica',
      question: 'Sobre o sigilo da interceptação telefônica, é CORRETO afirmar:',
      options: [
        'Não há previsão de sigilo na Lei',
        'O sigilo é absoluto e permanente',
        'As diligências realizadas serão mantidas em sigilo enquanto necessário à elucidação do fato ou enquanto não correr risco à integridade física/psíquica',
        'O sigilo termina automaticamente após 30 dias',
        'Apenas o Ministério Público tem acesso aos autos'
      ],
      correctAnswer: 2,
      explanation: 'SIGILO da interceptação (art. 8º): diligências mantidas em SIGILO enquanto NECESSÁRIO à elucidação do fato ou enquanto não correr RISCO à integridade física/psíquica. Não é permanente; cessa quando desnecessário. GRAVAÇÕES: depositadas em cartório, preservadas em meio magnético/óptico. INUTILIZAÇÃO: gravações de diálogos estranhos à investigação devem ser inutilizadas (art. 9º). Defesa tem direito ao contraditório DIFERIDO.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Lei de Interceptação Telefônica questions imported successfully!');
}

// ============= CRIMES RACIAIS =============
export async function seedQuestionsCrimesRaciais() {
  console.log('✊ Importing Crimes Raciais questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-raciais',
      question: 'Segundo a Lei 7.716/1989, praticar, induzir ou incitar a discriminação ou preconceito de raça, cor, etnia, religião ou procedência nacional, constitui crime:',
      options: [
        'Inafiançável e imprescritível',
        'Afiançável e prescritível',
        'Inafiançável e prescritível',
        'Afiançável e imprescritível',
        'Sujeito a transação penal'
      ],
      correctAnswer: 0,
      explanation: 'Crime de RACISMO (art. 5º, XLII, CF + Lei 7.716/89): INAFIANÇÁVEL e IMPRESCRITÍVEL, sujeito à pena de RECLUSÃO. Protege dignidade humana, igualdade. Conduta: discriminar/segregar em razão de raça, cor, etnia, religião, procedência nacional. Diferente de INJÚRIA RACIAL (CP, art. 140, § 3º): ofensa usando elementos de raça/cor - é PRESCRITÍVEL. Racismo = segregação; Injúria racial = ofensa.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-raciais',
      question: 'Recusar ou impedir acesso a estabelecimento comercial, negando-se a servir, atender ou receber cliente ou comprador, por preconceito de raça, cor, etnia, religião ou procedência nacional, constitui crime com pena de:',
      options: [
        'Detenção de 1 a 3 anos',
        'Reclusão de 1 a 3 anos',
        'Reclusão de 2 a 5 anos',
        'Detenção de 6 meses a 2 anos',
        'Reclusão de 3 a 5 anos'
      ],
      correctAnswer: 2,
      explanation: 'Crime de RECUSA EM ESTABELECIMENTO COMERCIAL (art. 5º, Lei 7.716/89): reclusão de 2 a 5 anos. Condutas: recusar/impedir acesso, negar-se a servir/atender/receber cliente. Local: estabelecimento comercial. Motivação: preconceito de raça, cor, etnia, religião, procedência. Crime FORMAL (consuma com recusa, independente de dano). Competência: Justiça Federal se discriminação em razão de PROCEDÊNCIA NACIONAL.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-raciais',
      question: 'Impedir ou obstar o acesso de alguém, devidamente habilitado, a qualquer cargo da Administração Pública, por motivos derivados de discriminação racial, constitui crime com pena de:',
      options: [
        'Reclusão de 1 a 3 anos',
        'Reclusão de 2 a 5 anos',
        'Reclusão de 3 a 5 anos',
        'Detenção de 1 a 4 anos',
        'Reclusão de 1 a 4 anos'
      ],
      correctAnswer: 1,
      explanation: 'Crime de IMPEDIR ACESSO A CARGO PÚBLICO (art. 3º, Lei 7.716/89): reclusão de 2 a 5 anos. Vítima: pessoa DEVIDAMENTE HABILITADA (aprovada em concurso, nomeada). Conduta: impedir/obstar ACESSO (não apenas nomeação). Motivação: discriminação racial. Sujeito ativo: autoridade com poder de decisão. Crime FORMAL. Não confundir com recusa em estabelecimento comercial (mesma pena, locais diferentes).',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-raciais',
      question: 'Fabricar, comercializar, distribuir ou veicular símbolos, emblemas, ornamentos, distintivos ou propaganda que utilizem a cruz suástica ou gamada, para divulgação do nazismo, constitui crime com pena de:',
      options: [
        'Reclusão de 1 a 3 anos',
        'Reclusão de 2 a 5 anos e multa',
        'Reclusão de 3 a 6 anos',
        'Detenção de 2 a 5 anos',
        'Reclusão de 1 a 5 anos'
      ],
      correctAnswer: 1,
      explanation: 'Crime de DIVULGAÇÃO DO NAZISMO (art. 20, § 1º, Lei 7.716/89): reclusão de 2 a 5 anos + multa. Condutas: fabricar, comercializar, distribuir, veicular símbolos nazistas (cruz suástica/gamada). Finalidade: DIVULGAÇÃO do nazismo. Crime FORMAL. Confisco dos materiais. Não se confunde com porte para fins históricos/educacionais (típico mas pode não ser antijurídico se contexto educativo).',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'legislacao-penal-especial',
      topic: 'crimes-raciais',
      question: 'A prática de injúria racial (ofender a honra de alguém valendo-se de elementos referentes a raça, cor, etnia, religião, origem ou pessoa idosa/com deficiência) foi alterada pela Lei 14.532/2023 e:',
      options: [
        'Continua no Código Penal como injúria qualificada',
        'Foi transferida para a Lei de Racismo e tornou-se imprescritível',
        'Foi descriminalizada',
        'Teve a pena reduzida',
        'Passou a ser crime de ação penal privada'
      ],
      correctAnswer: 1,
      explanation: 'INJÚRIA RACIAL (Lei 14.532/2023): transferida do CP (art. 140, § 3º) para LEI DE RACISMO (art. 2º-A, Lei 7.716/89). Pena: reclusão de 2 a 5 anos + multa. Tornou-se IMPRESCRITÍVEL e INAFIANÇÁVEL (como racismo). Antes: prescritível (8 anos). Mudança importante: equiparação ao racismo. Protege honra + dignidade. Não exige segregação (diferente do racismo art. 1º). É crime contra a honra agravado.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Crimes Raciais questions imported successfully!');
}

// ============= MASTER FUNCTION TO IMPORT ALL =============
export async function seedAllLegislacaoPenalEspecialQuestions() {
  console.log('🚀 Starting Legislação Penal Especial questions import...');

  try {
    await seedQuestionsCrimesTransito();
    await seedQuestionsLeiTortura();
    await seedQuestionsLavagem();
    await seedQuestionsAbusoAutoridade();
    await seedQuestionsCrimesAmbientais();
    await seedQuestionsEstatutoIdosoCrimes();
    await seedQuestionsECACrimes();
    await seedQuestionsInterceptacao();
    await seedQuestionsCrimesRaciais();

    console.log('✅ ALL LEGISLAÇÃO PENAL ESPECIAL QUESTIONS IMPORTED! 🎯📕');
    console.log('📊 Total: 45 questions across 9 topics');
  } catch (error) {
    console.error('❌ Error importing Legislação Penal Especial questions:', error);
    throw error;
  }
}
