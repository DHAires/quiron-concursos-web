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

// ============= CÓDIGO DE ÉTICA POLICIAL =============
export async function seedQuestionsCodigoEticaPolicial() {
  console.log('📜 Importing Código de Ética Policial questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'codigo-de-etica-policial',
      question: 'Segundo o Código de Ética e Disciplina da Polícia Militar, são valores fundamentais da instituição:',
      options: [
        'Hierarquia, disciplina, profissionalismo e ética',
        'Autoridade, poder discricionário e autonomia',
        'Força, coerção e submissão',
        'Patrimonialismo e corporativismo',
        'Individualismo e competitividade'
      ],
      correctAnswer: 0,
      explanation: 'Os VALORES FUNDAMENTAIS da PM são: 1) HIERARQUIA (respeito à cadeia de comando); 2) DISCIPLINA (rigor no cumprimento de normas); 3) PROFISSIONALISMO (competência técnica); 4) ÉTICA (conduta moral exemplar). Diferente de: corporativismo (proteção indevida de colegas), patrimonialismo (confusão público-privado), autoritarismo (abuso de poder). A atividade policial deve pautar-se em valores democráticos e respeito aos direitos humanos.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'codigo-de-etica-policial',
      question: 'A transgressão disciplinar, segundo o Código de Ética, é definida como:',
      options: [
        'Apenas crimes dolosos praticados por policiais',
        'Qualquer violação dos preceitos éticos e dos deveres policiais militares',
        'Somente faltas administrativas leves',
        'Apenas condutas que causem dano material',
        'Exclusivamente crimes contra a administração pública'
      ],
      correctAnswer: 1,
      explanation: 'TRANSGRESSÃO DISCIPLINAR: qualquer VIOLAÇÃO dos preceitos éticos e dos DEVERES policiais militares (não apenas crimes). Abrange: faltas administrativas, condutas incompatíveis com decoro, violação de normas regulamentares. Classificação: LEVES, MÉDIAS, GRAVES. Não se confunde com CRIME (ilícito penal - apurado em processo criminal). Pode haver: apenas transgressão disciplinar, apenas crime, ou AMBOS (cumulativos). PAD (Processo Administrativo Disciplinar) é independente do processo criminal.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'codigo-de-etica-policial',
      question: 'O policial militar em sua vida particular deve:',
      options: [
        'Ter total liberdade de conduta, pois está fora de serviço',
        'Manter conduta compatível com o decoro da classe',
        'Apenas evitar crimes, sem outras restrições',
        'Não tem qualquer responsabilidade ética fora do trabalho',
        'Seguir normas apenas quando uniformizado'
      ],
      correctAnswer: 1,
      explanation: 'O policial deve manter CONDUTA COMPATÍVEL com o DECORO da classe MESMO NA VIDA PARTICULAR (24 horas). Não há separação absoluta vida privada/profissional. Condutas na vida pessoal que comprometam a imagem da corporação podem gerar transgressão disciplinar. Exemplos de incompatibilidade: embriaguez habitual, dívidas vexatórias (calote), vida desregrada, prática de jogos proibidos. O policial é "policial 24h" - representante da instituição sempre.',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'codigo-de-etica-policial',
      question: 'A prescrição da pretensão punitiva disciplinar ocorre em:',
      options: [
        'Não há prescrição em matéria disciplinar',
        '5 anos contados da data do fato para todas as transgressões',
        'Prazo variável conforme gravidade: leve (2 anos), média (4 anos), grave (5 anos)',
        '20 anos para todas as infrações',
        '1 ano da data da ciência da autoridade'
      ],
      correctAnswer: 2,
      explanation: 'PRESCRIÇÃO DISCIPLINAR (prazos comuns em regulamentos - verificar norma específica de cada corporação): LEVE: 2 anos; MÉDIA: 4 anos; GRAVE: 5 anos. Contados da DATA DO FATO (não da ciência). INTERRUPÇÃO: instauração de procedimento apuratório. SUSPENSÃO: durante impedimento legal. Prescrição é MATÉRIA DE ORDEM PÚBLICA (juiz conhece de ofício). Difere da prescrição PENAL (prazos diferentes). Atenção: Súmula Vinculante 5 STF: falta de defesa técnica por advogado no PAD não ofende CF (exceto expulsão de servidor estável).',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'codigo-de-etica-policial',
      question: 'São sanções disciplinares aplicáveis ao policial militar:',
      options: [
        'Apenas advertência verbal e por escrito',
        'Advertência, repreensão, detenção, prisão e licenciamento',
        'Somente multa e suspensão',
        'Exclusivamente demissão',
        'Prisão administrativa de até 60 dias'
      ],
      correctAnswer: 1,
      explanation: 'SANÇÕES DISCIPLINARES PM (Lei estadual - varia, exemplo comum): 1) ADVERTÊNCIA (verbal/escrita - leve); 2) REPREENSÃO (escrita - leve/média); 3) DETENÇÃO (até 10 dias - média); 4) PRISÃO (até 30 dias - grave); 5) LICENCIAMENTO (desligamento - muito grave); 6) Exclusão (casos específicos). ATENÇÃO: prisão/detenção disciplinar é privação de liberdade em quartel (não é prisão penal). Deve respeitar dignidade, não pode ter trabalhos degradantes. STF: admite prisão disciplinar PM (EC 45/2004 - competência Justiça Militar). Diferente de servidor civil (não há prisão administrativa).',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Código de Ética Policial questions imported successfully!');
}

// ============= PRINCÍPIOS ÉTICOS =============
export async function seedQuestionsPrincipiosEticos() {
  console.log('⚖️ Importing Princípios Éticos questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'principios-eticos',
      question: 'O princípio da legalidade na atividade policial significa que:',
      options: [
        'O policial pode fazer tudo que não é proibido por lei',
        'O policial só pode fazer o que a lei expressamente autoriza',
        'A lei não se aplica em situações de emergência',
        'O policial tem autonomia total na interpretação das normas',
        'A legalidade é secundária em relação à eficiência'
      ],
      correctAnswer: 1,
      explanation: 'LEGALIDADE (CF art. 37): servidor público (policial) só pode fazer o que a LEI AUTORIZA. Diferente do particular (pode tudo que não é proibido). Policial não tem DISCRICIONARIEDADE PLENA - deve agir nos limites legais. Estado de necessidade/legítima defesa: excludentes de ilicitude (permitem ação fora do ordinário, mas com requisitos legais). Arbitrariedade: ação ALÉM da lei = abuso de autoridade. Atos do policial devem ter: BASE LEGAL, MOTIVAÇÃO, ADEQUAÇÃO, PROPORCIONALIDADE.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'principios-eticos',
      question: 'O princípio da proporcionalidade exige do policial:',
      options: [
        'Uso sempre da força máxima disponível',
        'Adequação entre meios empregados e fins pretendidos',
        'Aplicação igual de força em todas as situações',
        'Primazia da força sobre o diálogo',
        'Dispensa de avaliação da situação concreta'
      ],
      correctAnswer: 1,
      explanation: 'PROPORCIONALIDADE: adequação entre MEIOS (força empregada) e FINS (objetivo legítimo). Subprincípios: 1) ADEQUAÇÃO (meio deve ser apto); 2) NECESSIDADE (meio menos gravoso possível); 3) PROPORCIONALIDADE EM SENTIDO ESTRITO (benefício > dano). Uso progressivo da força: presença, verbalização, controle de contato, táticas defensivas, força potencialmente letal (apenas em situações extremas). Desproporcionalidade = excesso = abuso. Exemplo: uso de arma letal contra furto sem violência = desproporcional.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'principios-eticos',
      question: 'A impessoalidade na atuação policial determina que:',
      options: [
        'O policial deve tratar todos os cidadãos de forma igual',
        'Amigos e familiares podem receber tratamento diferenciado',
        'A simpatia pessoal deve orientar a conduta',
        'Preconceitos pessoais são aceitáveis',
        'Apenas a autoridade superior deve ser imparcial'
      ],
      correctAnswer: 0,
      explanation: 'IMPESSOALIDADE (CF art. 37): tratamento IGUAL a todos, sem favoritismos/discriminações. Policial age em nome do ESTADO (não em nome próprio). Proibido: 1) Favorecimentos (amigos, parentes); 2) Perseguições (inimigos, desafetos); 3) DISCRIMINAÇÃO (raça, cor, religião, orientação sexual, classe social). Quebra de impessoalidade = prevaricação, abuso de autoridade. Polícia de TODOS os cidadãos, não de grupos específicos. Diferente de: discricionariedade técnica (escolha justificada dentro da lei).',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'principios-eticos',
      question: 'O dever de probidade administrativa do policial inclui:',
      options: [
        'Apenas não receber propina',
        'Honestidade, integridade e boa-fé no exercício das funções',
        'Somente declarar bens se solicitado',
        'Aceitar presentes de pequeno valor é permitido',
        'Apenas evitar enriquecimento ilícito ostensivo'
      ],
      correctAnswer: 1,
      explanation: 'PROBIDADE ADMINISTRATIVA: HONESTIDADE, INTEGRIDADE, BOA-FÉ no trato da coisa pública. Abrange: 1) Não receber vantagens indevidas (propina, presentes); 2) Não lesar erário; 3) Não violar princípios (impessoalidade, moralidade); 4) Declarar bens/rendimentos. IMPROBIDADE ADMINISTRATIVA (Lei 8.429/92): enriquecimento ilícito, dano ao erário, violação de princípios. Sanções: perda de função, suspensão direitos políticos, multa, ressarcimento. Mesmo presentes de "pequeno valor" são proibidos (podem gerar compromisso/favorecimento).',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'principios-eticos',
      question: 'A moralidade administrativa exige do policial:',
      options: [
        'Apenas legalidade formal dos atos',
        'Legalidade e legitimidade ética dos atos',
        'Eficiência a qualquer custo',
        'Resultados independentemente dos meios',
        'Apenas não praticar crimes'
      ],
      correctAnswer: 1,
      explanation: 'MORALIDADE ADMINISTRATIVA (CF art. 37): não basta legalidade FORMAL, exige LEGITIMIDADE ÉTICA. Policial deve agir com: HONESTIDADE, LEALDADE, BOA-FÉ, DECORO. Imoralidade: ato legal na forma, mas desonesto, desleal, que fere ética. Exemplo: nomeação de parente (nepotismo) pode ser formalmente legal, mas é imoral (Súmula Vinculante 13 STF). "Os fins NÃO justificam os meios" - obter prova mediante tortura: meio ilícito = inadmissível. Ato imoral pode ser anulado mesmo que não seja ilegal.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Princípios Éticos questions imported successfully!');
}

// ============= DEVERES DO POLICIAL =============
export async function seedQuestionsDeveresDoPolicialEtica() {
  console.log('✅ Importing Deveres do Policial questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'deveres-do-policial',
      question: 'São deveres fundamentais do policial militar:',
      options: [
        'Apenas cumprir ordens superiores',
        'Respeitar a dignidade humana, cumprir a lei, proteger direitos fundamentais',
        'Somente reprimir crimes',
        'Exclusivamente obedecer superiores hierárquicos',
        'Apenas usar uniforme e armamento'
      ],
      correctAnswer: 1,
      explanation: 'DEVERES FUNDAMENTAIS do policial: 1) Respeitar DIGNIDADE HUMANA; 2) CUMPRIR e fazer cumprir a LEI; 3) Proteger DIREITOS FUNDAMENTAIS; 4) Agir com IMPARCIALIDADE; 5) Manter PROBIDADE; 6) Preservar SIGILO; 7) Atualizar-se profissionalmente; 8) Tratar superiores/subordinados/público com respeito. NÃO é dever: cumprir ordens MANIFESTAMENTE ILEGAIS (deve representar). Ordem ilegal não exime responsabilidade ("cumprimento de ordem" só exclui culpabilidade se ordem não é manifestamente ilegal).',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'deveres-do-policial',
      question: 'Quanto ao dever de preservar o sigilo profissional:',
      options: [
        'O policial deve manter sigilo absoluto de tudo que toma conhecimento',
        'O sigilo deve ser preservado, salvo nos casos em que a lei determinar revelação',
        'Não há dever de sigilo na atividade policial',
        'Pode divulgar informações para a imprensa livremente',
        'O sigilo é apenas recomendação, não obrigação'
      ],
      correctAnswer: 1,
      explanation: 'DEVER DE SIGILO: policial deve preservar informações sigilosas obtidas em razão do cargo, SALVO quando a lei determinar revelação (ex: ordem judicial, dever de comunicar crime). Vedado: divulgar informações de investigações em andamento, dados pessoais de vítimas/investigados, táticas operacionais. VIOLAÇÃO DE SIGILO FUNCIONAL: crime (CP art. 325) + transgressão disciplinar. Exceções: 1) Ordem judicial; 2) Requisição MP; 3) Dever de noticiar crime (CP art. 66 CPP); 4) Legítima defesa própria em processo.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'deveres-do-policial',
      question: 'O dever de representar contra ilegalidades ou abusos de poder:',
      options: [
        'É facultativo, depende da conveniência',
        'É obrigatório, devendo comunicar à autoridade competente',
        'Apenas se a vítima solicitar',
        'Não existe, prevalece o espírito de corpo',
        'Só se o abuso for muito grave'
      ],
      correctAnswer: 1,
      explanation: 'DEVER DE REPRESENTAR contra ilegalidades/abusos: OBRIGATÓRIO (não é faculdade). Policial que toma conhecimento de crime ou irregularidade DEVE comunicar à autoridade competente. Omissão = prevaricação (CP art. 319), transgressão disciplinar. "Espírito de corpo" NÃO justifica acobertamento de crimes/irregularidades. Canais: superiores hierárquicos, Corregedoria, MP, Ouvidoria. Proteção ao denunciante: vedada retaliação. Lei de Abuso de Autoridade (Lei 13.869/19): protege quem denuncia abusos.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'deveres-do-policial',
      question: 'Sobre o dever de prestar socorro e assistência:',
      options: [
        'Aplica-se apenas em situações de flagrante delito',
        'O policial deve prestar socorro a qualquer pessoa em perigo, mesmo fora de serviço',
        'É dever apenas do policial em serviço',
        'Não se aplica a criminosos',
        'Apenas se não houver risco pessoal'
      ],
      correctAnswer: 1,
      explanation: 'DEVER DE PRESTAR SOCORRO: policial deve socorrer qualquer pessoa em perigo, MESMO FORA DE SERVIÇO (policial 24h). Abrange: vítimas, suspeitos, criminosos feridos. Omissão de socorro: CRIME (CP art. 135), qualificado se a vítima está sob cuidado/guarda (ex: preso ferido). Deve acionar resgate, prestar primeiros socorros. Não exclui dever: 1) Estar de folga; 2) Vítima ser criminoso; 3) Risco moderado (exceto risco extremo desproporcional). Princípio da dignidade humana: todos têm direito à vida/integridade.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'deveres-do-policial',
      question: 'O dever de atualização e aperfeiçoamento profissional:',
      options: [
        'É responsabilidade exclusiva da instituição',
        'É dever do policial buscar constante capacitação',
        'Não é obrigatório após a formação inicial',
        'Apenas cursos oficiais são válidos',
        'Só é necessário para promoção'
      ],
      correctAnswer: 1,
      explanation: 'DEVER DE CAPACITAÇÃO CONTÍNUA: policial deve buscar constante ATUALIZAÇÃO (leis, técnicas, direitos humanos, tecnologia). Não é apenas dever da instituição - é dever PESSOAL. Sociedade evolui, legislação muda, técnicas se aprimoram. Policial desatualizado: risco de atuação ilegal/ineficiente. Cursos relevantes: direitos humanos, uso progressivo da força, mediação de conflitos, legislação penal atualizada, técnicas investigativas. Atualização não é só para promoção - é para QUALIDADE do serviço prestado à sociedade.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Deveres do Policial questions imported successfully!');
}

// ============= PROIBIÇÕES =============
export async function seedQuestionsProibicoes() {
  console.log('🚫 Importing Proibições questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'proibicoes',
      question: 'É vedado ao policial militar:',
      options: [
        'Participar de greves ou movimentos reivindicatórios',
        'Filiar-se a sindicatos',
        'Fazer greve, sindicalizar-se e exercer atividade político-partidária',
        'Apenas fazer greve',
        'Não há vedações constitucionais'
      ],
      correctAnswer: 2,
      explanation: 'VEDAÇÕES CONSTITUCIONAIS aos militares (CF art. 142, §3º, V): 1) GREVE; 2) SINDICALIZAÇÃO; 3) Filiação PARTIDÁRIA. Fundamento: natureza da atividade (segurança pública essencial, não pode parar). Policiais militares: aplicam-se regras dos militares das Forças Armadas. Podem: associar-se (associações/clubes sociais NÃO sindicais), votar, manifestar-se individualmente (sem uniforme). Greve de PM: CRIME MILITAR (CPM art. 149 - motim). STF: vedações constitucionais são legítimas (segurança pública é essencial).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'proibicoes',
      question: 'Sobre o exercício de atividade remunerada pelo policial militar:',
      options: [
        'É totalmente proibido',
        'É permitido magistério, atividades técnico-científicas, e, conforme compatibilidade, outras atividades',
        'Qualquer atividade é permitida',
        'Apenas comércio é proibido',
        'Não há qualquer restrição'
      ],
      correctAnswer: 1,
      explanation: 'ACUMULAÇÃO DE CARGOS (CF art. 37, XVI-XVII): regra = PROIBIÇÃO. Exceções: 1) DOIS cargos de PROFESSOR; 2) UM cargo de professor + UM técnico/científico; 3) DOIS cargos privativos de profissionais de saúde. Requisitos: compatibilidade de HORÁRIOS, não prejudicar serviço militar. PM pode: dar aulas, atuar como médico/engenheiro (se compatível). NÃO pode: comércio próprio (incompatível com atividade militar), advogar (incompatibilidade), atividade que comprometa decoro. Atividade remunerada fora: autorização do comando (verificar compatibilidade).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'proibicoes',
      question: 'É proibido ao policial militar fazer uso do cargo para:',
      options: [
        'Executar suas funções legais',
        'Obter vantagens indevidas para si ou para outrem',
        'Comunicar-se com a comunidade',
        'Realizar prisões em flagrante',
        'Apenas dar ordens aos subordinados'
      ],
      correctAnswer: 1,
      explanation: 'PROIBIÇÃO DE USAR CARGO para VANTAGENS INDEVIDAS: corrupção, concussão, prevaricação. Exemplos vedados: 1) "Quebrar galho" para amigo (arquivar BO indevidamente); 2) Receber propina (corrupção passiva); 3) Exigir vantagem (concussão); 4) Facilitar crime de terceiro; 5) Usar viatura/arma para fins pessoais. Crimes: CP art. 312 (peculato), 317 (corrupção), 316 (concussão), 319 (prevaricação). Lei de Abuso de Autoridade (13.869/19): punição específica. Patrimônio público/autoridade pública: para fins públicos, não privados.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'proibicoes',
      question: 'O policial militar em serviço está proibido de:',
      options: [
        'Usar uniforme completo',
        'Comparecer embriagado ou consumir bebidas alcoólicas',
        'Realizar abordagens',
        'Comunicar-se por rádio',
        'Portar armamento'
      ],
      correctAnswer: 1,
      explanation: 'PROIBIÇÃO DE EMBRIAGUEZ EM SERVIÇO: ABSOLUTA. Policial armado embriagado: risco enorme (para si, colegas, público). Consumir álcool em serviço: transgressão disciplinar GRAVE. Embriaguez habitual (mesmo fora de serviço): incompatível com carreira militar. "Lei Seca" aplica-se a PMs: dirigir viatura embriagado = crime de trânsito + transgressão. Teste de alcoolemia em PM: possível (não viola intimidade - emprego público exige aptidão). Tratamento: se dependência química, pode haver afastamento para tratamento.',
      difficulty: 'easy',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'proibicoes',
      question: 'É vedado ao policial militar manifestar-se publicamente sobre:',
      options: [
        'Temas de segurança pública em palestras técnicas autorizadas',
        'Assuntos político-partidários ou criticar atos de superiores quando uniformizado ou em serviço',
        'Qualquer assunto, sempre',
        'Apenas crimes que investigou',
        'Não há restrições à liberdade de expressão'
      ],
      correctAnswer: 1,
      explanation: 'RESTRIÇÕES À MANIFESTAÇÃO PÚBLICA: 1) NÃO pode criticar PUBLICAMENTE atos de superiores/autoridades constituídas; 2) NÃO pode fazer manifestação POLÍTICO-PARTIDÁRIA (especialmente uniformizado); 3) NÃO pode divulgar assuntos sigilosos/operacionais. PODE: manifestar-se tecnicamente sobre segurança pública (com autorização), palestras educativas, opinar como cidadão (sem uniforme, sem vincular à corporação). Hierarquia/disciplina exigem reserva. Críticas: canais internos (não públicos). Liberdade expressão: não é absoluta para militares (STF: restrições são constitucionais).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Proibições questions imported successfully!');
}

// ============= USO DA FORÇA =============
export async function seedQuestionsUsoDaForca() {
  console.log('⚡ Importing Uso da Força questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'uso-da-forca',
      question: 'Os princípios básicos sobre o uso da força pela polícia estabelecem que:',
      options: [
        'A força deve ser usada sempre que houver resistência',
        'A força deve ser legal, necessária, proporcional e com uso de meios menos lesivos disponíveis',
        'A força letal é a primeira opção',
        'Não há limites ao uso da força contra criminosos',
        'A força deve ser usada para punir'
      ],
      correctAnswer: 1,
      explanation: 'PRINCÍPIOS DO USO DA FORÇA (Princípios Básicos ONU, 1990): 1) LEGALIDADE (base legal); 2) NECESSIDADE (indispensável, não há alternativa); 3) PROPORCIONALIDADE (adequada à ameaça); 4) MODERAÇÃO (mínimo necessário); 5) CONVENIÊNCIA (momento adequado). Uso PROGRESSIVO/DIFERENCIADO: presença → verbalização → controle contato → táticas defensivas → força menos letal → força LETAL (ÚLTIMO recurso). Força NÃO é punição - é meio de controlar situação, cessar ameaça. Após cessar ameaça: interromper força.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'uso-da-forca',
      question: 'A força letal pode ser empregada:',
      options: [
        'Contra qualquer crime grave',
        'Apenas em legítima defesa própria ou de terceiros contra perigo iminente de morte/lesão grave',
        'Para impedir fuga de qualquer preso',
        'Sempre que houver desobediência',
        'Contra manifestantes'
      ],
      correctAnswer: 1,
      explanation: 'FORÇA LETAL (potencialmente letal): ÚLTIMA RATIO (último recurso). Requisitos: 1) LEGÍTIMA DEFESA (própria/terceiros); 2) Perigo IMINENTE (atual, real); 3) Ameaça de MORTE/LESÃO GRAVE; 4) NÃO há meio menos lesivo; 5) PROPORCIONAL. NÃO pode: atirar em pessoa desarmada fugindo, atirar "para assustar", matar preso rendido, torturar. STF: "execução sumária" é HOMICÍDIO, não legítima defesa. Após disparo: socorrer ferido (dever de preservar vida). Arma: uso estritamente necessário.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'uso-da-forca',
      question: 'No uso de algemas, o policial deve observar:',
      options: [
        'Algemas devem ser usadas em todos os presos',
        'Algemas só devem ser usadas se houver fundada necessidade (resistência, fuga, perigo)',
        'Algemas não podem ser usadas nunca',
        'Uso é discricionário sem necessidade de justificativa',
        'Apenas para crimes hediondos'
      ],
      correctAnswer: 1,
      explanation: 'USO DE ALGEMAS - Súmula Vinculante 11 STF: "Só é lícito o uso de algemas em casos de resistência e de fundado receio de fuga ou de perigo à integridade física própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito". Requisitos: 1) EXCEPCIONAL; 2) Fundado receio (não mera suposição); 3) JUSTIFICAR por escrito. Uso abusivo: constrangimento ilegal, abuso de autoridade, tortura (se para humilhar). Preso colaborativo, sem risco: NÃO algemar. Dignidade humana.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'uso-da-forca',
      question: 'Após o uso da força, o policial deve:',
      options: [
        'Apenas continuar a patrulha',
        'Prestar socorro, comunicar imediatamente ao superior e registrar detalhadamente o ocorrido',
        'Não precisa comunicar se a força foi legal',
        'Apenas registrar se houver morte',
        'Comunicar apenas se for questionado'
      ],
      correctAnswer: 1,
      explanation: 'PÓS-USO DA FORÇA (obrigações): 1) PRESTAR SOCORRO imediato (preservar vida); 2) COMUNICAR SUPERIOR imediatamente; 3) REGISTRAR detalhadamente (BO, relatório); 4) Preservar LOCAL (se houver lesões graves/morte); 5) Atentar testemunhas; 6) Disponibilizar equipamentos (arma) para perícia. TODO uso de força com lesão/disparo: deve ser comunicado e registrado. Transparência, controle, apuração. Se morte: instauração automática de inquérito (polícia civil + MP). Controle externo: essencial.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'uso-da-forca',
      question: 'O uso de armas menos letais (spray de pimenta, taser, munição de impacto controlado):',
      options: [
        'Não tem limites, pois não são letais',
        'Deve seguir os mesmos princípios do uso de força: necessidade, proporcionalidade, adequação',
        'Pode ser usado para punição',
        'Dispensa autorização',
        'Não precisa de treinamento'
      ],
      correctAnswer: 1,
      explanation: 'ARMAS MENOS LETAIS (less-lethal): spray pimenta, taser, munição impacto controlado (borracha), gás lacrimogêneo. NÃO são "não-letais" (podem causar morte em situações específicas). Requisitos de uso: MESMOS princípios (necessidade, proporcionalidade). Não podem: ser usadas como punição/tortura, contra pessoas vulneráveis sem justificativa (grávidas, idosos, crianças - avaliar caso), em excesso. Treinamento: OBRIGATÓRIO. Podem ter letalidade: taser em cardiopata, munição borracha em curta distância/cabeça. Cuidados, protocolos.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Uso da Força questions imported successfully!');
}

// ============= ABUSO DE PODER =============
export async function seedQuestionsAbusoDePoder() {
  console.log('⚠️ Importing Abuso de Poder questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'abuso-de-poder',
      question: 'Configura abuso de autoridade, segundo a Lei 13.869/2019:',
      options: [
        'Qualquer prisão em flagrante',
        'Praticar ato com finalidade específica de prejudicar outrem ou beneficiar a si ou a terceiro, ou por mero capricho ou satisfação pessoal',
        'Toda atuação policial que gere reclamação',
        'Apenas tortura',
        'Uso de algemas'
      ],
      correctAnswer: 1,
      explanation: 'ABUSO DE AUTORIDADE (Lei 13.869/19): agente público que, no exercício de suas funções, PRATICA ATO com FINALIDADE ESPECÍFICA de: 1) PREJUDICAR outrem; 2) BENEFICIAR a si/terceiro; 3) Mero CAPRICHO/satisfação pessoal; 4) Violar direitos fundamentais. Elemento subjetivo: DOLO ESPECÍFICO (finalidade especial). NÃO basta erro de atuação - precisa ter má-fé, intenção de prejudicar. Exemplos: prisão para extorquir, violência desnecessária por sadismo, favorecer amigo, perseguição pessoal. Diferente de: erro técnico, excesso culposo (estes não são abuso).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'abuso-de-poder',
      question: 'São condutas tipificadas como abuso de autoridade:',
      options: [
        'Apenas extorsão e corrupção',
        'Decretar prisão ilegal, prolongar execução de pena, submeter pessoa a constrangimento, violar direito à reunião, entre outras',
        'Somente tortura',
        'Não há tipos específicos',
        'Apenas invasão de domicílio'
      ],
      correctAnswer: 1,
      explanation: 'TIPOS DE ABUSO (Lei 13.869/19 - exemplos): 1) Decretar PRISÃO manifestamente ilegal; 2) PROLONGAR execução de pena/medida; 3) Submeter a CONSTRANGIMENTO/VEXAME; 4) Violar direito de REUNIÃO; 5) Violar SIGILO; 6) INVASÃO de domicílio ilegal; 7) INOVAR artificiosamente em investigação; 8) Exigir informação/procedimento sem amparo legal. Penas: detenção (1-4 anos) + perda cargo + multa. Não confundir com: erro (não é abuso), excesso culposo, tortura (Lei 9.455/97 - tipo próprio).',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'abuso-de-poder',
      question: 'Caracteriza constrangimento ilegal e abuso de autoridade:',
      options: [
        'Qualquer ordem dada ao cidadão',
        'Constranger alguém mediante violência ou grave ameaça a fazer algo não obrigado por lei',
        'Apenas sequestro',
        'Toda prisão preventiva',
        'Uso de força legal'
      ],
      correctAnswer: 1,
      explanation: 'CONSTRANGIMENTO ILEGAL (CP art. 146): constranger (forçar) alguém, mediante VIOLÊNCIA/GRAVE AMEAÇA, a: FAZER (ato não obrigado), NÃO FAZER (ato legalmente permitido), TOLERAR (algo que não é obrigado). Na atividade policial: coagir confissão, forçar delação de terceiros, exigir conduta ilegal, impedir direito (filmar ação policial legal). NÃO é constrangimento: coação legal (ex: prisão em flagrante legal, usar força necessária/proporcional). Qualificado: se funcionário público (abuso autoridade cumulado).',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'abuso-de-poder',
      question: 'A extorsão mediante sequestro, quando praticada por policial:',
      options: [
        'Não é possível',
        'É crime hediondo qualificado, com agravantes se praticado por funcionário público',
        'Tem pena reduzida pela imunidade funcional',
        'É apenas transgressão disciplinar',
        'Não configura abuso de autoridade'
      ],
      correctAnswer: 1,
      explanation: 'EXTORSÃO MEDIANTE SEQUESTRO (CP art. 159): sequestrar pessoa para obter vantagem (resgate). CRIME HEDIONDO (Lei 8.072/90). Se praticado por FUNCIONÁRIO PÚBLICO (policial): QUALIFICADO (pena aumentada 1/3 a 1/2). "Sequestros-relâmpago" feitos por PMs: casos gravíssimos. Pena: reclusão 12-20 anos (forma simples), aumentada se qualificado. Se resulta morte: reclusão 24-30 anos. Além do crime: demissão, perda de cargo, impossibilidade novo emprego público. Extorsão simples (art. 158): também crime grave.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'abuso-de-poder',
      question: 'A tortura praticada por agente público:',
      options: [
        'Não existe no Brasil',
        'É crime inafiançável e insuscetível de graça ou anistia',
        'Pode ser justificada em casos graves',
        'Tem pena leve',
        'É permitida para obter confissão'
      ],
      correctAnswer: 1,
      explanation: 'TORTURA (Lei 9.455/97): crime INAFIANÇÁVEL, INSUSCETÍVEL de graça/anistia. CF art. 5º, XLIII: "crime hediondo". Tipos: 1) Constranger mediante VIOLÊNCIA/AMEAÇA; 2) Submeter a sofrimento FÍSICO/MENTAL; 3) Finalidade: obter informação/confissão, provocar ação/omissão, discriminação. Pena: reclusão 2-8 anos. Qualificado: se resulta lesão grave (4-10 anos) ou morte (8-16 anos). Agente público: pena aumentada + perda cargo. Tortura: INACEITÁVEL sempre - "bomba relógio" NÃO justifica. Prova obtida: inadmissível (ilícita).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Abuso de Poder questions imported successfully!');
}

// ============= RELACIONAMENTO COM A COMUNIDADE =============
export async function seedQuestionsRelacionamentoComunidade() {
  console.log('🤝 Importing Relacionamento com a Comunidade questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'relacionamento-comunidade',
      question: 'O policiamento comunitário caracteriza-se por:',
      options: [
        'Polícia isolada da comunidade',
        'Parceria entre polícia e comunidade para solução de problemas de segurança',
        'Policiamento apenas reativo',
        'Foco exclusivo na repressão',
        'Atuação sem consulta à população'
      ],
      correctAnswer: 1,
      explanation: 'POLICIAMENTO COMUNITÁRIO: filosofia de PARCERIA polícia-comunidade. Características: 1) PROATIVO (prevenir, não só reagir); 2) Solução de PROBLEMAS (não apenas crimes); 3) PROXIMIDADE com comunidade; 4) Participação cidadã; 5) Descentralização. Difere de: policiamento tradicional (reativo, distante, só repressão). Benefícios: confiança, legitimidade, efetividade, prevenção, qualidade de vida. Ferramentas: conselhos comunitários, reuniões, mediação conflitos. CF: segurança pública é dever do Estado e RESPONSABILIDADE DE TODOS.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'relacionamento-comunidade',
      question: 'No atendimento ao público, o policial deve:',
      options: [
        'Tratar todos com arrogância para impor respeito',
        'Tratar todos com urbanidade, respeito e dignidade',
        'Apenas ser educado com autoridades',
        'Discriminar conforme aparência',
        'Desprezar reclamações'
      ],
      correctAnswer: 1,
      explanation: 'URBANIDADE (CF art. 37 - princípio implícito): policial deve tratar todos com RESPEITO, EDUCAÇÃO, CORTESIA, DIGNIDADE. Independente de: classe social, raça, cor, aparência, profissão, opinião política. "Cidadão paga seu salário" - servidor público. Proibido: tratamento grosseiro, humilhação, deboche, discriminação. Situações tensas: manter profissionalismo (não é fraqueza - é controle emocional). Xingamentos do cidadão: NÃO justificam reação desproporcional. Qualidade do atendimento: imagem da corporação.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'relacionamento-comunidade',
      question: 'A mediação de conflitos pelo policial:',
      options: [
        'Não faz parte da atividade policial',
        'É estratégia importante de prevenção e pacificação social',
        'Apenas em crimes graves',
        'Policial não deve se envolver',
        'É perda de tempo'
      ],
      correctAnswer: 1,
      explanation: 'MEDIAÇÃO DE CONFLITOS: estratégia PREVENTIVA, resolve problemas SEM violência/criminalização. Policial como mediador: facilita diálogo, busca solução pacífica. Situações: conflitos vicinais, familiares (não violência doméstica grave), comerciais, trânsito. Benefícios: reduz violência, evita escalada, fortalece laços comunitários, economiza recursos. NÃO se aplica a: crimes graves, violência consumada (nestes casos: agir conforme lei). Técnicas: escuta ativa, imparcialidade, respeito, busca de consenso. Polícia: não só repressão - também PREVENÇÃO, pacificação.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'relacionamento-comunidade',
      question: 'A transparência e a prestação de contas à sociedade:',
      options: [
        'Não são necessárias na atividade policial',
        'São essenciais para legitimidade e confiança pública',
        'Apenas em casos de denúncia',
        'Violam o sigilo operacional',
        'Fragilizam a autoridade policial'
      ],
      correctAnswer: 1,
      explanation: 'TRANSPARÊNCIA/ACCOUNTABILITY: essenciais para LEGITIMIDADE democrática. Polícia presta contas à SOCIEDADE (não é corpo fechado). Mecanismos: 1) CORREGEDORIAS (controle interno); 2) OUVIDORIAS (canal cidadão); 3) Controle EXTERNO (MP, Judiciário, Defensoria); 4) Estatísticas públicas; 5) Relatórios. Não viola sigilo: transparência é sobre POLÍTICAS, RESULTADOS, ABUSOS (não sobre táticas operacionais específicas). Legitimidade policial: depende de confiança pública. "Quem fiscaliza os fiscalizadores?" - sociedade, via instituições.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'relacionamento-comunidade',
      question: 'Sobre o direito do cidadão de filmar a ação policial:',
      options: [
        'É totalmente proibido',
        'É direito do cidadão, salvo se prejudicar a operação ou expor indevidamente terceiros',
        'Policial pode sempre apreender celular',
        'Filmar policial é crime',
        'Apenas jornalistas podem filmar'
      ],
      correctAnswer: 1,
      explanation: 'DIREITO DE FILMAR AÇÃO POLICIAL: cidadão PODE filmar (liberdade informação, controle social). Policial NÃO pode: impedir filmagem, apreender celular (salvo ordem judicial), ameaçar, agredir. Limites: 1) Não PREJUDICAR operação (ex: atrapalhar cerco, alertar criminoso); 2) Não expor indevidamente vítimas/testemunhas; 3) Distância segura. Apreensão celular: só com ordem judicial (busca/apreensão). Filmagem: proteção contra abusos, transparência. STF: filmagem de agentes públicos em ação é legítima. Policial ético: não teme filmagem.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Relacionamento com a Comunidade questions imported successfully!');
}

// ============= DIREITOS HUMANOS NA ATIVIDADE POLICIAL =============
export async function seedQuestionsDireitosHumanosAtividadePolicial() {
  console.log('🕊️ Importing Direitos Humanos na Atividade Policial questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'direitos-humanos-atividade-policial',
      question: 'A dignidade da pessoa humana na atividade policial significa que:',
      options: [
        'Apenas cidadãos de bem têm dignidade',
        'Todo ser humano, inclusive criminosos, possui dignidade inerente que deve ser respeitada',
        'Dignidade é irrelevante na segurança pública',
        'Suspeitos não têm direitos',
        'Apenas vítimas têm dignidade'
      ],
      correctAnswer: 1,
      explanation: 'DIGNIDADE HUMANA (CF art. 1º, III - fundamento da República): TODO ser humano possui dignidade INERENTE, inviolável. Aplica-se a: vítimas, suspeitos, CRIMINOSOS, presos. NÃO se perde por praticar crime. Consequências: proibição de tortura, tratamento degradante, penas cruéis. Mesmo preso condenado: direitos fundamentais (exceto os atingidos pela condenação - liberdade). Policial: guardião de direitos de TODOS (não juiz/carrasco). "Direitos humanos protegem bandidos?" - protegem TODOS (inclusive policiais).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'direitos-humanos-atividade-policial',
      question: 'A presunção de inocência na atuação policial implica que:',
      options: [
        'Policial não pode efetuar prisões',
        'Suspeito deve ser tratado como inocente até sentença condenatória transitada em julgado',
        'Todos são culpados até prova em contrário',
        'Apenas em crimes leves',
        'Presunção não vale para flagrante'
      ],
      correctAnswer: 1,
      explanation: 'PRESUNÇÃO DE INOCÊNCIA (CF art. 5º, LVII): "ninguém será considerado culpado até trânsito em julgado de sentença penal condenatória". Suspeito/indiciado/réu = INOCENTE (tecnicamente). Consequências: 1) Ônus da prova: acusação; 2) Tratamento: como inocente (sem humilhação, exposição vexatória); 3) Prisão: exceção (flagrante, preventiva - requisitos rígidos). Policial deve: investigar com isenção, não pré-julgar, respeitar direitos. Mídia: "exposição de presos" viola presunção de inocência. Vale para flagrante: preso em flagrante é presumidamente inocente (será julgado).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'direitos-humanos-atividade-policial',
      question: 'O direito ao silêncio e à não autoincriminação significa que:',
      options: [
        'Suspeito pode ser torturado para falar',
        'Ninguém é obrigado a produzir prova contra si mesmo',
        'Silêncio é confissão',
        'Apenas advogados têm esse direito',
        'Não vale para crimes graves'
      ],
      correctAnswer: 1,
      explanation: 'DIREITO AO SILÊNCIO (CF art. 5º, LXIII): "preso será informado de seus direitos, entre os quais o de permanecer calado". Nemo tenetur se detegere: ninguém obrigado a produzir prova contra si. Abrange: não responder, não participar de reconstituição, não fornecer material (se incriminatório). Policial deve: informar o direito, respeitar escolha. Silêncio: NÃO é confissão, NÃO pode ser usado contra (STF). Tortura para confissão: crime + prova ilícita (inadmissível). Vale para TODOS (flagrante, inquérito, processo).',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'direitos-humanos-atividade-policial',
      question: 'Sobre a revista pessoal (busca pessoal):',
      options: [
        'Pode ser vexatória para humilhar',
        'Deve respeitar dignidade, sem exposição vexatória, apenas com fundada suspeita',
        'Qualquer pessoa pode ser revistada sem motivo',
        'Revista íntima é sempre permitida',
        'Não precisa de justificativa'
      ],
      correctAnswer: 1,
      explanation: 'REVISTA PESSOAL (busca pessoal - CPP art. 244): policial pode revistar se houver FUNDADA SUSPEITA de porte de arma/droga/objeto ilícito. Requisitos: 1) Fundada suspeita (não mero "palpite racial"); 2) Respeito à DIGNIDADE; 3) SEM exposição vexatória; 4) Preferencialmente por policial do mesmo sexo; 5) Local adequado (não via pública se revista íntima). REVISTA ÍNTIMA (cavidades): apenas com autorização judicial (salvo situações excepcionalíssimas). Abordagem discriminatória: abuso ("suspeito padrão" por cor/classe = crime racismo/abuso).',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'direitos-humanos-atividade-policial',
      question: 'A vedação à discriminação na atividade policial impede:',
      options: [
        'Apenas discriminação racial',
        'Qualquer tratamento diferenciado baseado em raça, cor, etnia, religião, origem, gênero, orientação sexual, idade, condição social',
        'Somente discriminação de gênero',
        'Não há vedação na atividade policial',
        'Apenas discriminação religiosa'
      ],
      correctAnswer: 1,
      explanation: 'VEDAÇÃO À DISCRIMINAÇÃO (CF art. 3º, IV; 5º, caput e XLI): proibição de tratamento diferenciado por: RAÇA, COR, ETNIA, RELIGIÃO, ORIGEM, GÊNERO, ORIENTAÇÃO SEXUAL, IDADE, CLASSE SOCIAL. "Filtragem racial" (racial profiling): ilegal, abuso de autoridade. Todos têm direito a tratamento igualitário pela polícia. Discriminação: crime (racismo Lei 7.716/89, injúria racial, LGBTfobia). Polícia democrática: respeita diversidade, protege TODOS. Suspeição: baseada em CONDUTA (não em características pessoais).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Direitos Humanos na Atividade Policial questions imported successfully!');
}

// ============= CONDUTAS VEDADAS =============
export async function seedQuestionsCondutasVedadas() {
  console.log('🔒 Importing Condutas Vedadas questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'condutas-vedadas',
      question: 'É expressamente vedado ao policial:',
      options: [
        'Realizar prisões em flagrante',
        'Receber recompensas, gratificações ou presentes em razão de suas funções',
        'Usar uniforme',
        'Comunicar-se com superiores',
        'Fazer relatórios'
      ],
      correctAnswer: 1,
      explanation: 'VEDAÇÃO A PRESENTES/GRATIFICAÇÕES: policial NÃO pode receber presentes, gorjetas, recompensas em razão da função. Fundamento: impessoalidade, moralidade, evitar compromissos. Mesmo "pequenos presentes": proibidos (geram sensação de débito). Exceções: brindes institucionais de baixo valor em eventos oficiais. Oferecer vantagem a policial: crime de corrupção ativa (particular) ou corrupção passiva (se policial aceitar). Inclui: "quebra de galho" depois, favorecimentos. Policial: remunerado pelo Estado (não por particulares).',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'condutas-vedadas',
      question: 'Sobre o uso de entorpecentes pelo policial:',
      options: [
        'É permitido fora de serviço',
        'É absolutamente vedado, configurando transgressão gravíssima',
        'Apenas maconha é proibida',
        'Depende da quantidade',
        'Não há restrições'
      ],
      correctAnswer: 1,
      explanation: 'USO DE ENTORPECENTES: ABSOLUTAMENTE VEDADO (mesmo fora de serviço). Fundamentos: 1) Incompatibilidade com carreira policial-militar; 2) Risco à segurança (porte de arma); 3) Exemplo social; 4) CRIME (Lei 11.343/06). Uso: transgressão disciplinar GRAVÍSSIMA + crime + demissão. Tráfico: idem + pena gravíssima. Álcool: permitido moderadamente fora serviço; embriaguez habitual = incompatível. Teste toxicológico: pode ser exigido (especialmente para porte de arma - Lei 10.826/03). Dependência química: tratamento, mas afastamento das funções.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'condutas-vedadas',
      question: 'A prática de jogos de azar pelo policial:',
      options: [
        'É permitida livremente',
        'É vedada, pois compromete o decoro e a moralidade da função',
        'Apenas jogos com grandes apostas',
        'Não há restrição',
        'Apenas em cassinos é proibido'
      ],
      correctAnswer: 1,
      explanation: 'JOGOS DE AZAR: vedados ao policial (contravenção penal - LCP art. 50, jogo do bicho; ou crime - jogos online ilegais). Incompatível com: moralidade, exemplo social, probidade. Exploração de jogos: crime mais grave. Frequentar locais de jogo: transgressão disciplinar. Fundamento: policial deve reprimir contravenções/crimes (não praticá-los). Jogo legal (loterias oficiais): permitido moderadamente. Vício em jogo (ludopatia): compromete vida financeira, pode levar a dívidas, corrupção. Conduta desabonadora.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'condutas-vedadas',
      question: 'O policial que deixa de cumprir ordem legal de superior hierárquico:',
      options: [
        'Não comete infração',
        'Comete transgressão disciplinar e pode configurar crime de insubordinação',
        'Apenas recebe advertência verbal',
        'Não há consequências',
        'Pode escolher quais ordens cumprir'
      ],
      correctAnswer: 1,
      explanation: 'INSUBORDINAÇÃO: recusa de cumprir ordem LEGAL de superior. Crime militar (CPM art. 163): reclusão até 2 anos. Transgressão disciplinar: grave. Hierarquia/disciplina: pilares da PM. ATENÇÃO: ordem MANIFESTAMENTE ILEGAL: não deve ser cumprida (dever de representar). Apenas ordens LEGAIS são de cumprimento obrigatório. Ordem ilegal cumprida: responsabilidade do executor (não isenta). Ordem legal descumprida: insubordinação. Dúvida sobre legalidade: pode representar, mas cumprir enquanto não houver determinação em contrário.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'etica-policial',
      topic: 'condutas-vedadas',
      question: 'É vedado ao policial envolver-se em atividades consideradas:',
      options: [
        'Apenas tráfico de drogas',
        'Qualquer atividade incompatível com o decoro da função, como exploração de jogos, agiotagem, lenocínio, receptação',
        'Somente crimes hediondos',
        'Não há vedações específicas',
        'Apenas comércio ilegal'
      ],
      correctAnswer: 1,
      explanation: 'ATIVIDADES INCOMPATÍVEIS com decoro: 1) Exploração de JOGOS; 2) AGIOTAGEM (empréstimo a juros abusivos); 3) LENOCÍNIO (exploração prostituição); 4) RECEPTAÇÃO; 5) Contrabando/descaminho; 6) Exploração de "segurança" irregular (milícia). Mesmo que não sejam crimes (ex: agiotagem pode não ser crime usura), são condutas desabonadoras. Policial deve ter conduta exemplar. Envolvimento: transgressão gravíssima + possível demissão + possível crime. Reputação da corporação: prejudicada por conduta individual de membros.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Condutas Vedadas questions imported successfully!');
}

// ============= MASTER FUNCTION TO IMPORT ALL =============
export async function seedAllEticaPolicialQuestions() {
  console.log('🚀 Starting Ética Policial questions import...');

  try {
    await seedQuestionsCodigoEticaPolicial();
    await seedQuestionsPrincipiosEticos();
    await seedQuestionsDeveresDoPolicialEtica();
    await seedQuestionsProibicoes();
    await seedQuestionsUsoDaForca();
    await seedQuestionsAbusoDePoder();
    await seedQuestionsRelacionamentoComunidade();
    await seedQuestionsDireitosHumanosAtividadePolicial();
    await seedQuestionsCondutasVedadas();

    console.log('✅ ALL ÉTICA POLICIAL QUESTIONS IMPORTED! 🎯👮‍♂️');
    console.log('📊 Total: 45 questions across 9 topics');
  } catch (error) {
    console.error('❌ Error importing Ética Policial questions:', error);
    throw error;
  }
}
