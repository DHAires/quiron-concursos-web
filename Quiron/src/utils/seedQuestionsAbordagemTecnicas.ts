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

async function seedGenericTopicQuestions(
  topicId: string, 
  topicName: string, 
  icon: string,
  sampleQuestions: Omit<Question, 'area' | 'subject' | 'topic'>[]
) {
  console.log(`${icon} Importing ${topicName} questions...`);
  
  const questions: Question[] = sampleQuestions.map(q => ({
    area: 'policial',
    subject: 'abordagem-e-tecnicas',
    topic: topicId,
    ...q
  }));

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log(`✅ ${topicName} questions imported successfully!`);
}

// ============= ABORDAGEM A PESSOAS =============
export async function seedQuestionsAbordagemPessoas() {
  return seedGenericTopicQuestions('abordagem-a-pessoas', 'Abordagem a Pessoas', '👤', [
    {
      question: 'Durante uma abordagem policial a pessoas, a aproximação tática deve priorizar:',
      options: [
        'Aproximação rápida e direta pela frente',
        'Manutenção de distância segura, ângulo de segurança, cobertura mútua entre policiais',
        'Tocar o abordado imediatamente',
        'Aproximar-se pelas costas sem aviso',
        'Não há necessidade de planejamento'
      ],
      correctAnswer: 1,
      explanation: 'APROXIMAÇÃO TÁTICA (tactical approach): 1) DISTÂNCIA SEGURA: mínimo 2-3 metros (reactionary gap - tempo para reagir se abordado atacar); 2) ÂNGULO DE SEGURANÇA: não ficar na linha de tiro do parceiro; 3) COBERTURA MÚTUA: um policial aborda (contato), outro cobre (segurança) com linha de visão livre; 4) USAR obstáculos como cobertura quando possível; 5) COMUNICAÇÃO prévia com parceiro (sinais, combinação). Aproximação ERRADA: direta pela frente (previsível), muito rápida (não avalia ameaças), sem coordenação (risco de fogo cruzado). Princípio: SEGURANÇA primeiro, depois eficiência.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      question: 'As fases da abordagem policial a pessoas seguem a seguinte ordem:',
      options: [
        'Revista, verbalização, aproximação, contenção',
        'Aproximação, verbalização, busca pessoal, contenção/algemação',
        'Contenção, revista, aproximação',
        'Verbalização, algemação, aproximação',
        'Não há fases definidas'
      ],
      correctAnswer: 1,
      explanation: 'FASES DA ABORDAGEM POLICIAL: 1) APROXIMAÇÃO: posicionamento tático, avaliar ameaças, cobertura mútua; 2) VERBALIZAÇÃO: identificação policial, comandos claros ("POLÍCIA! MÃOS À VISTA! NÃO SE MEXA!"); 3) BUSCA PESSOAL/REVISTA: procurar armas, drogas, evidências (após abordado em posição de segurança); 4) CONTENÇÃO/ALGEMAÇÃO: se necessário (fundada suspeita, segurança); 5) IDENTIFICAÇÃO: documentos, qualificação; 6) DISPENSA ou ENCAMINHAMENTO. Ordem LÓGICA: primeiro SEGURANÇA (aproximação, controle verbal/físico), depois INVESTIGAÇÃO (revista, identificação). Inverter: risco alto (revistar antes de controlar = vulnerabilidade).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      question: 'Durante a verbalização inicial da abordagem, o policial deve:',
      options: [
        'Gritar e apontar arma sempre',
        'Identificar-se como policial, dar comandos claros, observar reação do abordado',
        'Não precisa se identificar',
        'Abordar em silêncio',
        'Xingar para intimidar'
      ],
      correctAnswer: 1,
      explanation: 'VERBALIZAÇÃO NA ABORDAGEM: 1) IDENTIFICAÇÃO: "POLÍCIA!" (alto e claro - alguns estados exigem também apresentar documento/distintivo visível); 2) COMANDOS CLAROS: "MÃOS À VISTA!", "NÃO SE MEXA!", "VIRE DE COSTAS DEVAGAR!"; 3) Tom FIRME mas não agressivo (autoridade, não desrespeito); 4) OBSERVAR reação: colabora? Hesita? Movimentos suspeitos (mão indo para cintura = possível arma)?; 5) Adaptar comandos conforme resposta. NÃO: xingar (pode escalar, gera queixa), não se identificar (abordado pode reagir pensando ser assalto - legítima defesa dele), silêncio total (pessoa não sabe o que fazer). Verbalização BEM FEITA: reduz resistência, aumenta segurança.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      question: 'A posição de segurança ideal para o abordado durante a revista pessoal é:',
      options: [
        'Em pé, de frente para o policial',
        'Mãos apoiadas em parede/veículo, pernas afastadas e recuadas, cabeça baixa, ou ajoelhado/deitado conforme avaliação de risco',
        'Sentado confortavelmente',
        'De costas com mãos livres',
        'Qualquer posição serve'
      ],
      correctAnswer: 1,
      explanation: 'POSIÇÕES DE SEGURANÇA: 1) PAREDE/VEÍCULO: mãos apoiadas alto, pernas afastadas e recuadas (desequilíbrio dificulta reação rápida), cabeça baixa (não vê movimentação policial); 2) AJOELHADO: mãos na cabeça entrelaçadas, tornozelos cruzados (dificulta levantar rápido); 3) DEITADO (prono): braços estendidos para trás ou lados, pernas afastadas (máximo controle, alto risco). ESCOLHA conforme: número de abordados, nível de ameaça, local (rua suja: evitar deitar), resistência. Posição ERRADA: de frente (abordado vê tudo, pode atacar), mãos livres (acesso a arma), em pé sem apoio (equilíbrio). Objetivo: DESEQUILÍBRIO + CONTROLE VISUAL.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      question: 'Sobre abordagem a múltiplas pessoas simultaneamente:',
      options: [
        'Abordar todos juntos sem separação',
        'Separar abordados, revista individual, manter cobertura constante, comunicação entre equipe',
        'Revistar todos ao mesmo tempo',
        'Não é possível abordar mais de uma pessoa',
        'Deixar alguns sem vigilância'
      ],
      correctAnswer: 1,
      explanation: 'ABORDAGEM MÚLTIPLA (3+ pessoas): 1) SEPARAR fisicamente (reduz chance de coordenação para atacar, impede destruição/transferência de provas); 2) REVISTA INDIVIDUAL: um por vez, demais mantidos em posição de segurança sob cobertura; 3) COBERTURA CONSTANTE: sempre um policial vigiando os não revistados; 4) COMUNICAÇÃO: equipe coordenada (rádio, sinais - "cobrindo", "revistando"); 5) Atenção a MOVIMENTOS SUSPEITOS em qualquer abordado. RECURSOS: mínimo 2 policiais para 3 abordados; 4+ abordados: solicitar reforço. ERROS: revistar todos juntos (ninguém cobre), não separar (podem reagir coordenadamente), perder foco (alguém ataca). Princípio: NUNCA perder controle visual/tático de NENHUM abordado.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ]);
}

// ============= ABORDAGEM A VEÍCULOS =============
export async function seedQuestionsAbordagemVeiculos() {
  return seedGenericTopicQuestions('abordagem-a-veiculos', 'Abordagem a Veículos', '🚗', [
    {
      question: 'Na abordagem a veículos, a viatura policial deve se posicionar:',
      options: [
        'Paralela ao veículo abordado',
        'Em ângulo desencontrado (offset), à retaguarda, mantendo distância segura (2-3 metros)',
        'Colada no veículo suspeito',
        'Na frente do veículo',
        'Qualquer posição serve'
      ],
      correctAnswer: 1,
      explanation: 'POSICIONAMENTO DA VIATURA (offset/ângulo desencontrado): 1) RETAGUARDA: atrás do veículo abordado (evita fuga para frente, controla ocupantes); 2) ÂNGULO: viatura levemente deslocada para ESQUERDA ou DIREITA (não alinhada - evita tiro em linha reta atingir ambos os policiais); 3) DISTÂNCIA: 2-3 metros (perto o suficiente para controle, longe o bastante para reagir se veículo der ré); 4) FARÓIS ALTOS à noite (ofusca espelhos retrovisores); 5) Sirene/giroflex LIGADOS (identificação, visibilidade). Posição ERRADA: paralela (sem proteção), muito perto (pode ser atropelado pela ré), na frente (veículo foge). Viatura = COBERTURA + CONTROLE.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      question: 'Os comandos verbais na abordagem a veículos devem incluir:',
      options: [
        'Apenas "saia do carro"',
        'Desligar motor, mãos visíveis ao volante, ocupantes identificados, saída ordenada um por vez',
        'Gritar sem instruções claras',
        'Não precisa dar comandos',
        'Atirar para intimidar'
      ],
      correctAnswer: 1,
      explanation: 'COMANDOS NA ABORDAGEM VEICULAR: 1) "POLÍCIA! DESLIGUE O MOTOR!"; 2) "MÃOS NO VOLANTE! TODOS!" (motorista e passageiros - mãos visíveis); 3) "QUANTAS PESSOAS NO VEÍCULO?" (avaliar número); 4) "MOTORISTA, ABRA A PORTA POR FORA, SAIA DEVAGAR, MÃOS SEMPRE VISÍVEIS!"; 5) Cada ocupante SAI UM POR VEZ (sob comando), demais mantêm mãos visíveis; 6) "VIRE DE COSTAS, CAMINHE PARA TRÁS ATÉ MINHA VOZ!"; 7) Posição de segurança para revista. ERROS: todos saem juntos (confusão, perda de controle), não verificar número de ocupantes (surpresa), permitir mãos ocultas. Abordagem noturna: acender luz interna. Objetivo: CONTROLE total ANTES de aproximar.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      question: 'Durante abordagem a veículo, a aproximação do policial deve ocorrer:',
      options: [
        'Imediatamente, pela frente do veículo',
        'Somente após ocupantes saírem e estarem contidos, ou por lado cego (coluna B) se for aproximação tática',
        'Pelo lado do motorista sempre',
        'Correndo direto para a porta',
        'Não há técnica específica'
      ],
      correctAnswer: 1,
      explanation: 'APROXIMAÇÃO AO VEÍCULO: 2 TÉCNICAS: **TÉCNICA 1 - EXTRAÇÃO (mais segura):** ocupantes SAEM do veículo sob comando, policiais NÃO se aproximam até todos estarem contidos (na posição de segurança distante); depois revista pessoal e veículo vazio. **TÉCNICA 2 - APROXIMAÇÃO TÁTICA (high-risk):** usada quando ocupantes NÃO obedecem/não podem sair (feridos, crianças). Aproximação pela COLUNA B (pilar entre portas dianteira/traseira - ângulo cego dos espelhos), agachado, usando veículo como cobertura, visualizando interior, evitando ficar em frente a janelas (linha de tiro). NUNCA: aproximar pela frente (faróis iluminam policial, área de impacto se veículo avançar), parar em frente a portas (tiro fácil). Preferência: EXTRAÇÃO (mais segura).',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      question: 'Na revista de veículos, o policial deve verificar:',
      options: [
        'Apenas porta-malas',
        'Compartimento de passageiros, porta-malas, motor, sob chassis, painéis soltos, locais de ocultação típicos',
        'Só olhar por cima',
        'Apenas banco dianteiro',
        'Não precisa revistar o veículo'
      ],
      correctAnswer: 1,
      explanation: 'REVISTA VEICULAR COMPLETA: 1) INTERIOR: bancos (sob e entre), porta-luvas, console central, forração de teto, painéis de portas, sob tapetes, para-sóis; 2) PORTA-MALAS: estepe, macaco, compartimentos laterais, fundo falso; 3) MOTOR: bateria, filtro de ar, reservatórios (locais para ocultar drogas/armas); 4) PARTE INFERIOR: sob chassis (compartimentos soldados), tanque de combustível; 5) MODIFICAÇÕES: parafusos recentes, soldas novas, painéis soltos. CUIDADOS: usar lanterna, verificar ANTES de colocar mãos (risco de seringas, armas), luvas quando possível. Locais COMUNS: fundos falsos em porta-malas, interior de portas, sob bancos. Veículos de carga: verificar compartimento de carga. Documentação: anotar características do veículo (placa, chassi) e achados.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      question: 'Em abordagem a veículo em movimento (perseguição terminada), os cuidados adicionais incluem:',
      options: [
        'Aproximar imediatamente',
        'Aguardar reforços, avaliar se ocupantes estão armados, usar cobertura, comandos amplificados, abordagem de alto risco',
        'Abordar sozinho',
        'Não precisa de cuidados extras',
        'Entrar no veículo suspeito'
      ],
      correctAnswer: 1,
      explanation: 'ABORDAGEM DE ALTO RISCO (felony stop - pós-perseguição/suspeita fundada de crime grave): 1) REFORÇOS: solicitar imediatamente (mínimo 2 viaturas, 4 policiais); 2) POSICIONAMENTO: viaturas em ângulos cruzados (triangulação), DISTÂNCIA maior (5+ metros); 3) COBERTURA: policiais protegidos por portas de viaturas (motor = melhor proteção), armas em punho; 4) COMANDOS AMPLIFICADOS: alto-falante da viatura; 5) EXTRAÇÃO UM POR UM: cada ocupante sai sob mira, vem caminhando de costas até policiais (não policiais vão até veículo), deita no chão (prono), é algemado, afastado; 6) VEÍCULO VAZIO: verificação tática (pode ter mais pessoas escondidas). Risco ALTO: ocupantes fugiram por motivo grave, podem estar armados/desesperados. Paciência: não apressar, segurança acima de rapidez.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    }
  ]);
}

// ============= REVISTA PESSOAL =============
export async function seedQuestionsRevistaPessoal() {
  return seedGenericTopicQuestions('revista-pessoal', 'Revista Pessoal', '🔍', [
    {
      question: 'A revista pessoal (busca pessoal) legalmente pode ser realizada:',
      options: [
        'Apenas com mandado judicial',
        'Mediante fundada suspeita, para garantir segurança do policial e de terceiros, ou durante prisão em flagrante',
        'Em qualquer pessoa sem motivo',
        'Nunca pode ser feita',
        'Apenas em condenados'
      ],
      correctAnswer: 1,
      explanation: 'FUNDAMENTO LEGAL DA REVISTA: 1) CPP art. 244: autoriza busca pessoal quando houver FUNDADA SUSPEITA de que pessoa oculta arma, objetos/papéis que constituam corpo de delito; 2) STF: fundada suspeita exige JUSTIFICATIVA OBJETIVA (não pode ser arbitrária, baseada apenas em aparência/raça/local - discriminação); 3) SITUAÇÕES: pessoa em atitude suspeita (mão na cintura, fuga ao ver polícia, nervosismo excessivo), em local de crime, posse de objeto ilícito aparente, durante prisão em flagrante/cumprimento de mandado. LIMITAÇÕES: revista INVASIVA (desnudar) exige maior justificativa e local reservado, preferencialmente por policial do mesmo sexo; NÃO pode ser vexatória (STF: dignidade humana). Abuso: constrangimento ilegal (CP art. 146).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      question: 'A técnica de revista pessoal completa (varredura) deve abranger:',
      options: [
        'Apenas cintura',
        'Todo o corpo sistematicamente: cabeça, tronco, braços, cintura, pernas, calçados, com atenção a locais de ocultação',
        'Só bolsos',
        'Apenas se houver volume suspeito',
        'Não precisa ser sistemática'
      ],
      correctAnswer: 1,
      explanation: 'REVISTA COMPLETA (systematic search): 1) CABEÇA: cabelo (armas pequenas, drogas), orelhas, boca (recusante: não forçar - risco); 2) PESCOÇO/COLARINHO: correntes, dentro de gola; 3) TRONCO: ombros, axilas (facas), peito, costa, cintura (ÁREA CRÍTICA: armas, drogas); 4) BRAÇOS: mangas, punhos, relógio (compartimentos); 5) MÃOS: entre dedos, palmas; 6) PERNAS: cós da calça (frente/trás), virilha (cuidado: respeito, mesmo sexo se possível), coxas, canelas; 7) CALÇADOS: tirar tênis/botas (drogas, armas pequenas), meias; 8) PERTENCES: bolsos, carteira, celular, bolsas. TÉCNICA: usar DORSO da mão (costas dos dedos) em áreas sensíveis (virilha), PALMA em outras; movimento de CIMA para BAIXO; um lado de cada vez. NUNCA: enfiar mão em bolso cego (risco de seringa/lâmina) - virar ao avesso.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      question: 'Durante a revista pessoal, o policial de segurança (cobertura) deve:',
      options: [
        'Ajudar na revista',
        'Manter-se afastado, observando abordado e arredores, com arma pronta (posição 3 ou 4), não perder foco',
        'Dar as costas',
        'Guardar a arma',
        'Ficar muito próximo'
      ],
      correctAnswer: 1,
      explanation: 'POLICIAL DE COBERTURA (cover officer): função crítica. RESPONSABILIDADES: 1) POSIÇÃO: 2-3 metros atrás/lado do policial que revista (longe de alcance do abordado, ângulo que não cruza linha de fogo); 2) ATENÇÃO DIVIDIDA: 70% no abordado (mãos, movimentos), 30% nos arredores (ameaças aproximando); 3) ARMA: posição 3 (low ready - apontada para baixo mas pronta) ou 4 (sul - em punho, apontada para solo, se ameaça menor); NÃO guardar (perda de tempo se precisar); 4) COMUNICAÇÃO: alertar parceiro sobre movimentos suspeitos ("mão direita mexeu!"); 5) NÃO PARTICIPAR da revista (se ajudar, quem cobre?). ERRO FATAL: ambos revistam (ninguém cobre - abordado ataca ou terceiro intervém). Cobertura BEM FEITA: permite revista tranquila e eficiente.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      question: 'Ao encontrar arma durante revista pessoal, o policial deve:',
      options: [
        'Deixar com o abordado',
        'Retirar imediatamente com segurança, afastar, não apontar para si ou parceiro, verificar se está municiada, preservar para perícia',
        'Atirar a arma longe',
        'Entregar ao abordado de volta',
        'Colocar no próprio coldre'
      ],
      correctAnswer: 1,
      explanation: 'PROCEDIMENTO COM ARMA ENCONTRADA: 1) ALERTAR parceiro ("ARMA!"); 2) RETIRAR com segurança: dedos FORA do gatilho, cano apontado em DIREÇÃO SEGURA (nunca para si, parceiro ou abordado); 3) AFASTAR do abordado (entregar para cobertura ou colocar em local seguro longe); 4) VERIFICAR: está municiada? Travada? (manipular com cuidado); 5) ANOTAR características: marca, modelo, numeração, número de munições; 6) PRESERVAR: não destruir impressões digitais, embalar para perícia; 7) Continuar revista (pode ter mais armas); 8) Configurar PORTE ILEGAL (se não tem autorização) ou posse irregular. NUNCA: manipular desnecessariamente, apontar para pessoas, colocar no próprio coldre (mistura com sua arma), devolver. Abordado ARMADO: intensificar cuidados (alto risco).',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      question: 'Sobre revista pessoal em mulheres:',
      options: [
        'Policial masculino pode revistar normalmente',
        'Preferência por policial feminina; se indisponível, policial masculino pode fazer revista superficial, revista íntima apenas com autorização judicial',
        'Nunca pode ser revistada',
        'Apenas revista íntima',
        'Não há diferenças no procedimento'
      ],
      correctAnswer: 1,
      explanation: 'REVISTA EM MULHERES: 1) PREFERÊNCIA: policial FEMININA (respeito, evita alegações de assédio, mais eficiente em áreas íntimas); 2) Se INDISPONÍVEL: policial masculino pode fazer revista EXTERNA (sobre roupas, bolsos, bolsas), evitando áreas íntimas (seios, virilha) ou com TESTEMUNHA presente; 3) REVISTA ÍNTIMA (desnudar, cavidades corporais): exige AUTORIZAÇÃO JUDICIAL (STF: dignidade, intimidade), policial FEMININA, local RESERVADO, sem câmeras/homens presentes. EXCEÇÃO: risco iminente (suspeita de arma escondida em sutiã vista por volume) - pode revistar mas documentar justificativa detalhadamente. CUIDADO: respeito, não toques desnecessários, linguagem profissional. Abuso: assédio sexual, constrangimento. Lei 13.271/16: revista em estabelecimentos penais por servidor do mesmo sexo.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ]);
}

// ============= ALGEMAÇÃO =============
export async function seedQuestionsAlgemacao() {
  return seedGenericTopicQuestions('algemacao', 'Algemação', '⛓️', [
    {
      question: 'A algemação é permitida nos seguintes casos:',
      options: [
        'Em qualquer prisão, sempre',
        'Quando houver resistência, fundado receio de fuga ou perigo à integridade física do preso ou de terceiros (Súmula Vinculante 11 STF)',
        'Apenas para humilhar',
        'Nunca pode ser usada',
        'Somente em condenados'
      ],
      correctAnswer: 1,
      explanation: 'SÚMULA VINCULANTE 11 STF: "Só é lícito o uso de algemas em casos de RESISTÊNCIA e de FUNDADO RECEIO DE FUGA ou de PERIGO À INTEGRIDADE FÍSICA própria ou alheia, por parte do preso ou de terceiros, justificada a excepcionalidade por escrito". REQUISITOS CUMULATIVOS: 1) Situação ESPECÍFICA (não automática); 2) Uma das hipóteses: resistência (física, tentou fugir, atacou), receio de fuga (tentou antes, crime organizado, histórico), perigo (ameaças, violento, porte físico); 3) JUSTIFICATIVA POR ESCRITO (relatório, auto de prisão). USO PROIBIDO: rotineiro/automático, humilhação/exposição vexatória (fotos com algemas para mídia). Consequências do abuso: responsabilidade civil (dano moral), penal (abuso de autoridade - Lei 13.869/19), disciplinar. Exceção: transporte de presos (segurança coletiva).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      question: 'A técnica correta de algemação é:',
      options: [
        'Mãos na frente, algema frouxa',
        'Mãos atrás das costas, palmas para fora, algema justa (não apertada), trava dupla acionada',
        'Uma mão apenas',
        'Algemas muito apertadas',
        'Não há técnica padrão'
      ],
      correctAnswer: 1,
      explanation: 'TÉCNICA DE ALGEMAÇÃO: 1) POSIÇÃO: mãos ATRÁS DAS COSTAS (reduz capacidade de luta/fuga; frente só se problema médico justificar); 2) PALMAS PARA FORA (dedos divergentes - dificulta abrir fechadura com clipe; palmas para dentro: permite mais movimento); 3) AJUSTE: justa mas NÃO apertada (não corta circulação - duas dedos devem caber entre algema e pulso); 4) TRAVA DUPLA (double lock): acionar (impede algema apertar mais se preso forçar - evita lesão e abertura); 5) Verificar PULSO: circulação, coloração, formigamento; perguntar se está doendo (se sim, afrouxar levemente). ALGEMAS DE QUALIDADE: metal resistente, trava funcional. ERROS: muito apertado (lesão, ação indenizatória), muito frouxo (foge), não travar (abre ou aperta), uma mão só (ineficaz).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      question: 'Durante o transporte de preso algemado, o policial deve:',
      options: [
        'Colocar no banco da frente',
        'Sentar preso no banco traseiro, cinto de segurança, monitorar durante trajeto, atenção a mal-estar',
        'Deixar sozinho no veículo',
        'Não precisa de cinto',
        'Algemar ao banco'
      ],
      correctAnswer: 1,
      explanation: 'TRANSPORTE DE PRESO ALGEMADO: 1) POSIÇÃO: banco TRASEIRO (segurança - longe de controles, dificulta ataque ao motorista); lado DIREITO de preferência (passageiro monitora; ou lado esquerdo se 2 policiais + 1 preso); 2) CINTO DE SEGURANÇA: obrigatório (segurança em acidente - mesmo algemado pode se ferir gravemente); 3) MONITORAMENTO constante: policial passageiro vigia preso, motorista concentra na direção; 4) ATENÇÃO: queixas de dor nas algemas (verificar, afrouxar se necessário), mal-estar (parar, prestar socorro), tentativa de fuga em paradas; 5) NÃO: deixar sozinho (nem "rapidinho" - foge ou se machuca), algemar ao veículo (em acidente, não consegue sair - morre), colocar 2+ presos algemados juntos sem separação física (podem coordenar fuga). Viatura com grade: separação motorista/presos. Registrar trajeto (horários, intercorrências).',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      question: 'A retirada das algemas deve ocorrer:',
      options: [
        'Imediatamente após prisão',
        'Ao chegar na delegacia/presídio, em ambiente seguro, sob supervisão, após confirmar contenção do local',
        'Nunca retirar',
        'Na rua, na frente de todos',
        'Quando o preso pedir'
      ],
      correctAnswer: 1,
      explanation: 'RETIRADA DE ALGEMAS: 1) LOCAL: ambiente SEGURO (delegacia, presídio - com grades, agentes, contido); NÃO na rua, viatura, local público aberto (risco de fuga); 2) MOMENTO: após preso estar em CELA ou sala com SEGURANÇA (guardas, reforço); 3) PROCEDIMENTO: manter distância, pedir que preso vire de costas (se estava com mãos atrás) ou aproxime mãos de abertura (cela com grade - passa braços), usar CHAVE (não força), retirar UMA por vez (segunda mão ainda presa até última hora), AFASTAR rapidamente; 4) ATENÇÃO: preso pode tentar aproveitar momento (ataque, fuga); 5) Quando NÃO retirar mesmo na delegacia: preso extremamente agressivo, risco alto - documentar. NUNCA: retirar em local sem segurança, sozinho com preso, sem supervisão. Chegada à delegacia: transferir responsabilidade para agente/carcereiro.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      question: 'Sobre algemação em situações especiais:',
      options: [
        'Idosos, grávidas e menores podem sempre ser algemados',
        'Exigem avaliação criteriosa, preferência por medidas alternativas, algemação apenas em último caso com justificativa reforçada',
        'Nunca podem ser algemados',
        'Tratamento igual a todos',
        'Não há regras especiais'
      ],
      correctAnswer: 1,
      explanation: 'ALGEMAÇÃO EM GRUPOS VULNERÁVEIS: **IDOSOS:** avaliar condições de saúde (circulação, artrose - dor intensa), preferir escolta sem algemas se colaborativo; se indispensável: algemas FOLGADAS, monitorar circulação, posição mais confortável (frente se necessário). **GRÁVIDAS:** evitar algemas atrás (desconforto, equilíbrio), preferir frente ou tornozeleiras, NUNCA apertar barriga, atenção a mal-estar, parto iminente (remover algemas, chamar SAMU). **MENORES (ECA art. 178):** algemação EXCEPCIONAL, exige fundamentação ainda MAIOR que adultos, preferir medidas socioeducativas, presença de responsável/conselheiro tutelar. **DEFICIENTES:** adaptar (cadeirante: algemas frente ou uma mão à cadeira). REGRA: dignidade humana REFORÇADA nesses casos. STF: algemação vexatória de vulnerável = dano moral agravado.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ]);
}

// ============= CONDUÇÃO DE PRESOS =============
export async function seedQuestionsConducaoPresos() {
  return seedGenericTopicQuestions('conducao-presos', 'Condução de Presos', '🚔', [
    {
      question: 'Durante a condução de preso, os cuidados essenciais incluem:',
      options: [
        'Deixar preso sem vigilância',
        'Manter vigilância constante, evitar aglomerações, atenção a tentativas de fuga, respeito à integridade física',
        'Conversar amenidades com preso',
        'Parar em locais isolados',
        'Permitir uso de celular'
      ],
      correctAnswer: 1,
      explanation: 'CONDUÇÃO SEGURA DE PRESOS: 1) VIGILÂNCIA CONSTANTE: nunca perder de vista, mesmo algemado (pode tentar fuga em semáforo, emergência médica real ou fingida); 2) EVITAR AGLOMERAÇÕES: não parar em locais com muitas pessoas (risco de resgate por comparsas, tumulto); 3) ROTA: planejar trajeto DIRETO (delegacia/presídio mais próximo), evitar desvios desnecessários; 4) ATENÇÃO a tentativas de fuga: pedido para ir ao banheiro (avaliar legitimidade, supervisionar), mal-estar (pode ser real ou fingimento), colisão provocada; 5) INTEGRIDADE: não permitir agressões (outros presos, policiais), garantir segurança; 6) COMUNICAÇÃO: informar base sobre saída/chegada, preso sob custódia. ERRO FATAL: deixar preso sozinho ("vou comprar água" - foge), paradas desnecessárias, confiar demais ("ele é gente boa").',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      question: 'A condução de múltiplos presos exige:',
      options: [
        'Colocar todos juntos sem separação',
        'Veículo adequado (camburão), separação física se possível, controle de número, reforço policial, atenção a lideranças',
        'Um policial apenas',
        'Deixar presos conversarem livremente',
        'Não precisa de cuidados extras'
      ],
      correctAnswer: 1,
      explanation: 'TRANSPORTE COLETIVO DE PRESOS: 1) VEÍCULO ADEQUADO: camburão (cela separada, grades, bancos fixos); viatura comum só para 1-2 presos; 2) SEPARAÇÃO FÍSICA: se possível, separar presos perigosos/rivais (evita briga, acordos, planos de fuga); 3) CONTAGEM: conferir número ao sair E chegar (ninguém foge sem perceber); 4) ESCOLTA: mínimo 2 policiais para 5+ presos; camburão cheio: 3+ policiais; 5) ATENÇÃO a LIDERANÇAS (facções): podem comandar rebelião/fuga mesmo algemados; 6) OBJETOS: revistar antes de entrar (podem ter ocultado algo durante prisão); 7) VENTILAÇÃO: camburão sem ventilação em dia quente = risco de morte. NUNCA: exceder capacidade do veículo (superlotação), misturar presos extremamente perigosos sem controle. Registrar todos os transportados (nome, hora entrada/saída).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      question: 'Durante a condução a pé de preso algemado (curta distância):',
      options: [
        'Segurar pelo braço e arrastar',
        'Conduzir segurando levemente o cotovelo/braço, manter distância, observar entorno, não permitir aproximação de terceiros',
        'Empurrar pelas costas',
        'Deixar andar sozinho na frente',
        'Não há técnica específica'
      ],
      correctAnswer: 1,
      explanation: 'CONDUÇÃO A PÉ (curta distância - viatura até delegacia): 1) POSICIONAMENTO: policial AO LADO ou ATRÁS-LADO do preso (não muito atrás - preso foge correndo; não na frente - preso ataca por trás); 2) CONTROLE: segurar LEVEMENTE cotovelo ou parte superior do braço (guia e controla sem violência); NÃO: empurrar, puxar cabelo, arrastar (desrespeito); 3) RITMO: passo normal (não forçar corrida - preso algemado pode tropeçar e se ferir gravemente); 4) ATENÇÃO: terceiros se aproximando (pode ser resgate), preso tentando se desvencilhar, obstáculos (escadas, degraus - auxílio para não cair); 5) COBERTURA: segundo policial atrás vigiando. CUIDADO: local com degrau, preso algemado atrás das costas tem equilíbrio ruim - pode cair de cabeça (morte). Tratar com RESPEITO: não é condenado ainda (presunção de inocência).',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      question: 'Ao chegar com o preso na delegacia, o policial deve:',
      options: [
        'Deixar preso e ir embora',
        'Apresentar preso ao delegado/plantonista, relatar ocorrência, entregar objetos apreendidos, aguardar lavratura do flagrante',
        'Soltar o preso',
        'Não precisa falar com autoridade',
        'Apenas assinar livro e sair'
      ],
      correctAnswer: 1,
      explanation: 'PROCEDIMENTO NA DELEGACIA: 1) APRESENTAÇÃO: entregar preso ao DELEGADO ou PLANTONISTA (autoridade policial), nunca a carcereiro/agente apenas (delegado deve avaliar legalidade da prisão); 2) RELATO ORAL: narrar resumidamente fatos (o quê, onde, quando, como preso, provas); 3) OBJETOS: entregar arma, drogas, produtos de crime (com relação discriminada, assinar recibo); 4) AGUARDAR: lavratura do AUTO DE PRISÃO EM FLAGRANTE (delegado ouve condutor, testemunhas, preso); policial é TESTEMUNHA, deve permanecer até ser ouvido; 5) ASSINAR: auto, termo de apreensão de objetos; 6) ANOTAR: número do boletim, delegado responsável. NUNCA: deixar preso sem formalização (delegado não assumiu custódia - ainda é responsabilidade do policial), ir embora antes de ser ouvido, alterar versão dos fatos. CPP: condutor é testemunha obrigatória.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      question: 'Sobre condução de preso que necessite atendimento médico:',
      options: [
        'Levar direto para delegacia',
        'Priorizar atendimento médico, acionar SAMU se grave, escoltar até hospital, manter vigilância, comunicar delegado',
        'Ignorar queixas de saúde',
        'Soltar se estiver doente',
        'Medicar por conta própria'
      ],
      correctAnswer: 1,
      explanation: 'PRESO COM NECESSIDADE MÉDICA: 1) AVALIAÇÃO: queixa é legítima (ferimentos visíveis, sangramento, dificuldade respiratória, dor intensa) ou fingimento (para fugir)?; 2) PRIORIDADE: se GRAVE (risco de morte): SAMU imediato, primeiros socorros, hospital ANTES de delegacia; 3) ESCOLTA HOSPITALAR: policial acompanha (preso pode fugir), algemado ao leito se necessário (com autorização médica), vigilância constante; 4) COMUNICAÇÃO: avisar delegado (prisão foi feita, mas preso está hospitalizado); 5) LAVRATURA: médico libera → delegacia; internado → auto de prisão no hospital ou posterior; 6) DOCUMENTAR: laudos médicos, hora entrada/saída hospital. OMISSÃO DE SOCORRO (CP 135): crime se policial não prestar auxílio a preso sob custódia. DIREITO: preso tem direito à saúde (CF). Morte em custódia por negligência médica: responsabilidade do Estado e policial.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    }
  ]);
}

// ============= TÉCNICAS DE PATRULHAMENTO =============
export async function seedQuestionsTecnicasPatrulhamento() {
  return seedGenericTopicQuestions('tecnicas-de-patrulhamento', 'Técnicas de Patrulhamento', '👁️', [
    {
      question: 'O patrulhamento ostensivo tem como principais objetivos:',
      options: [
        'Apenas circular pela cidade',
        'Prevenir crimes pela presença policial, dissuadir infratores, atender chamados, conhecer área',
        'Multar veículos',
        'Só agir se houver crime',
        'Evitar contato com cidadãos'
      ],
      correctAnswer: 1,
      explanation: 'OBJETIVOS DO PATRULHAMENTO OSTENSIVO: 1) PREVENÇÃO: presença uniformizada visível DISSUADE crime (criminoso desiste ao ver viatura); 2) DISSUASÃO: sensação de segurança na população, insegurança nos infratores; 3) PRONTO-ATENDIMENTO: estar na rua para responder RÁPIDO a chamados (190); 4) CONHECIMENTO DA ÁREA: policiais conhecem ruas, pontos críticos, pessoas, rotinas (policiamento comunitário); 5) INTERVENÇÃO: flagrantes, abordagens preventivas; 6) FISCALIZAÇÃO: trânsito, posturas municipais (apoio). DIFERENÇA: patrulhamento OSTENSIVO (uniforme, visível) vs VELADO (à paisana, investigação). Efetividade: estudos mostram que patrulhamento DIRECIONADO (hot spots - locais de alta criminalidade) reduz crime mais que randômico. Essência: PRESENÇA PREVENTIVA, não apenas reativa.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      question: 'Durante o patrulhamento motorizado, a dupla de policiais deve:',
      options: [
        'Motorista e passageiro fazem as mesmas coisas',
        'Motorista concentra na direção, passageiro observa e opera rádio, ambos atentos ao ambiente',
        'Ambos olham apenas para frente',
        'Passageiro pode dormir',
        'Não há divisão de tarefas'
      ],
      correctAnswer: 1,
      explanation: 'DIVISÃO DE TAREFAS NA PATRULHA: **MOTORISTA:** 1) DIREÇÃO segura (respeitar trânsito, exceto emergência com sirene); 2) Observar VIA (pedestres, veículos, rotas de fuga); 3) Comunicar ao parceiro se vê algo suspeito; 4) PARADAS: posicionar viatura taticamente. **PASSAGEIRO (operador):** 1) RÁDIO: atender chamados, informar localização, solicitar apoio; 2) OBSERVAÇÃO 360°: pessoas, veículos, edificações, atividades suspeitas; 3) ANOTAR: placas de veículos suspeitos, endereços; 4) Primeiro a SAIR da viatura em abordagens (motorista cobre). **AMBOS:** atenção situacional, comunicação entre si ("olha aquele cara na esquina"), não relaxar (alerta constante). ERRO: motorista mexendo no rádio (acidente, distração), ambos conversando sobre futebol (não veem crime acontecendo). Eficiência: TRABALHO EM EQUIPE coordenado.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      question: 'Os indicadores de atividade suspeita durante patrulhamento incluem:',
      options: [
        'Qualquer pessoa na rua',
        'Pessoa fugindo ao ver polícia, nervosismo excessivo, troca de objetos, local/horário incomum, incongruências no comportamento',
        'Apenas flagrante de crime',
        'Cor de pele ou roupa',
        'Não há indicadores objetivos'
      ],
      correctAnswer: 1,
      explanation: 'INDICADORES DE FUNDADA SUSPEITA (legal, não discriminatória): 1) COMPORTAMENTO: fuga ao avistar polícia (inocente não foge), nervosismo EXCESSIVO (além do normal - mãos tremendo, suor, olhar evasivo); 2) ATIVIDADE: troca rápida de objetos/dinheiro (tráfico?), pessoa "olhando" veículos (furto?), carregando TV 3h da manhã (receptação?); 3) LOCAL/HORÁRIO: pessoa em local inadequado para perfil/hora (terno em boca de fumo, criança sozinha 2h manhã); 4) INCONGRUÊNCIAS: diz que vai trabalhar mas está indo na direção oposta, nega conhecer área mas descreve detalhes; 5) DENÚNCIA: 190 informou características. NÃO É SUSPEITO: raça, classe social, roupa (morador de periferia, negro, tatuado NÃO é fundada suspeita - STF: discriminação). Policial deve ARTICULAR fundamento objetivo no relatório (não "achei suspeito", mas "ao nos ver, jogou objeto e correu").',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      question: 'O patrulhamento a pé (ronda) é mais adequado para:',
      options: [
        'Rodovias',
        'Centros comerciais, áreas de grande circulação de pedestres, policiamento comunitário',
        'Apenas zonas rurais',
        'Nunca é adequado',
        'Substituir totalmente viaturas'
      ],
      correctAnswer: 1,
      explanation: 'PATRULHAMENTO A PÉ (foot patrol): VANTAGENS: 1) PROXIMIDADE: contato direto com cidadãos (confiança, informações, denúncias); 2) ACESSIBILIDADE: becos, vielas, calçadões onde viatura não entra; 3) OBSERVAÇÃO: detalhes que viatura em movimento não vê (pichações novas, vidro quebrado, pessoa escondida); 4) PRESENÇA: mais impactante que viatura passando (conversa, cumprimentos). INDICADO: centros comerciais (camelôs, furtos), áreas turísticas, eventos (shows, jogos), favelas/comunidades (estreita relação, viatura = alvo). DESVANTAGENS: cansativo, lento, menor área coberta, vulnerável (sem blindagem da viatura). SOLUÇÃO: combinar ambos - patrulha a pé em pontos críticos, viatura para deslocamento/backup. Estudos: patrulhamento a pé REDUZ medo do crime (população se sente segura), não necessariamente reduz crime (precisa ser combinado com outras estratégias).',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      question: 'Ao receber chamado de ocorrência durante patrulhamento, a dupla deve:',
      options: [
        'Ignorar se estiver longe',
        'Confirmar recebimento, informar deslocamento, avaliar rota mais rápida, preparar-se taticamente, atualizar status',
        'Ir sem avisar',
        'Terminar o café primeiro',
        'Não precisa responder'
      ],
      correctAnswer: 1,
      explanation: 'ATENDIMENTO DE CHAMADO (dispatch): 1) CONFIRMAR: "Base, viatura X-15 copiou, deslocando para Rua Y, n° Z, roubo em andamento"; 2) ROTA: escolher caminho MAIS RÁPIDO (GPS, conhecimento da área, evitar trânsito); 3) PRIORIDADE: ligar SIRENE/GIROFLEX se emergência (crime em andamento, vítima grave); 4) PREPARAÇÃO: discutir com parceiro ("você aborda, eu cubro", "pedir apoio?"); 5) INFORMAÇÕES: ouvir detalhes do rádio (quantos suspeitos, armados, veículo, direção de fuga); 6) ATUALIZAR: "chegando no local", "em atendimento", "ocorrência finalizada"; 7) SEGURANÇA: não entrar cegamente (avaliar cena, pode ser emboscada). ERRO: não confirmar (base não sabe quem atende), não atualizar (base acha que está livre, manda outro chamado), chegar desprevenido. Comunicação = COORDENAÇÃO + SEGURANÇA.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ]);
}

// ============= COMUNICAÇÃO OPERACIONAL =============
export async function seedQuestionsComunicacaoOperacional() {
  return seedGenericTopicQuestions('comunicacao-operacional', 'Comunicação Operacional', '📡', [
    {
      question: 'A comunicação via rádio operacional deve ser:',
      options: [
        'Informal e prolongada',
        'Clara, objetiva, breve, usando código/linguagem padronizada',
        'Em gírias',
        'Apenas quando quiser',
        'Sem identificação da viatura'
      ],
      correctAnswer: 1,
      explanation: 'COMUNICAÇÃO RÁDIO EFICIENTE: 1) CLARA: voz firme, dicção boa, sem ruídos de fundo (fechar janela, desligar rádio do carro); 2) OBJETIVA: informações essenciais sem enrolação ("viatura 123, Rua X com Y, 2 elementos armados em fuga a pé sentido norte"); 3) BREVE: rádio é recurso COMPARTILHADO (outras viaturas precisam), mensagens longas TRAVAM canal; 4) CÓDIGO PADRONIZADO: 10-codes (10-4 = ok, 10-20 = localização) ou código fonético (Alpha, Bravo, Charlie para soletrar placas); 5) IDENTIFICAÇÃO: sempre começar com indicativo da viatura. ERROS: falar demais ("e aí pessoal, tá tudo tranquilo aqui"), gírias/palavrões (falta de profissionalismo, gravado), gritar (distorce), não identificar (base não sabe quem fala). Linguagem técnica economiza tempo e evita ambiguidade.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      question: 'O código Q ou 10-code no rádio operacional serve para:',
      options: [
        'Confundir a população',
        'Padronizar comunicação, torná-la breve e clara, evitar mal-entendidos',
        'Apenas enfeitar',
        'Não tem utilidade',
        'Substituir todas as palavras'
      ],
      correctAnswer: 1,
      explanation: 'CÓDIGOS OPERACIONAIS (10-code, código Q): OBJETIVOS: 1) PADRONIZAÇÃO: todos entendem igual (10-4 = "ok/entendido" universalmente); 2) BREVIDADE: "10-23" = "cheguei no local" (mais rápido que frase completa); 3) CLARIDADE: evita ambiguidade de linguagem natural; 4) SEGURANÇA: criminosos ouvindo scanner não entendem imediatamente (relativo - muitos conhecem). EXEMPLOS COMUNS: 10-4 (ok), 10-20 (localização), 10-33 (emergência), 10-7 (fora de serviço), 10-79 (bomba), 10-80 (perseguição). CÓDIGO FONÉTICO: Alpha (A), Bravo (B), Charlie (C)... - para soletrar placas/nomes sem confusão (B/D/P/T soam parecido no rádio). CRÍTICA: excesso de códigos = confusão; tendência moderna: plain language (fala clara) para intercomunicação entre agências (bombeiros, SAMU não sabem todos os 10-codes policiais). Equilíbrio: usar códigos COMUNS, explicar se necessário.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      question: 'Ao solicitar apoio via rádio, o policial deve informar:',
      options: [
        'Apenas "preciso de ajuda"',
        'Localização exata, natureza da ocorrência, número de suspeitos, se estão armados, urgência',
        'Não precisa dar detalhes',
        'Só a rua',
        'Conversar sobre o que aconteceu depois'
      ],
      correctAnswer: 1,
      explanation: 'SOLICITAÇÃO DE APOIO EFETIVA: 1) IDENTIFICAÇÃO: "Base, viatura 456"; 2) LOCALIZAÇÃO EXATA: rua, número, referências ("Av. Paulista, 1000, em frente ao MASP"); 3) NATUREZA: tipo de ocorrência ("roubo a comércio", "porte de arma"); 4) SUSPEITOS: quantos, características breves ("2 elementos, ambos armados com pistola"), veículo (placa, cor, modelo); 5) URGÊNCIA: "código 3" (emergência), "suspeitos em fuga", "policial ferido"; 6) PEDIDO: "solicito apoio" ou "solicito cerco na área". BASE REPETE: confirma informações, despacha viaturas próximas. ERRO: localização imprecisa ("estou na Paulista" - avenida tem 3km), não informar arma (apoio chega despreparado), pânico no rádio (gritar descontroladamente - ninguém entende). Calma + Informação Completa = Apoio Rápido e Eficiente.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      question: 'A escuta ativa do rádio operacional significa:',
      options: [
        'Deixar rádio ligado mas não ouvir',
        'Atenção constante às transmissões, mesmo que não seja chamado direto (awareness situacional da equipe)',
        'Só ouvir quando chamam sua viatura',
        'Desligar o rádio',
        'Ouvir música no rádio'
      ],
      correctAnswer: 1,
      explanation: 'ESCUTA ATIVA DO RÁDIO (monitoring): 1) ATENÇÃO: ouvir TODAS as transmissões, não só quando chamam sua viatura; 2) AWARENESS SITUACIONAL: saber o que OUTRAS viaturas estão fazendo (viatura 789 perseguindo na Rua X - você está próximo? Pode ajudar no cerco?); 3) ANTECIPAR: pedido de apoio pode vir a qualquer momento, estar mentalmente preparado; 4) APRENDER: ouvir como colegas lidam com ocorrências similares; 5) COORDENAÇÃO: evitar ir todos para mesma ocorrência (deixando outras áreas descobertas). ERRO: volume baixo (não ouve chamado), conversa alta dentro da viatura (ignora rádio), desligar rádio ("quero sossego" - PROIBIDO). Rádio = Linha de Vida da equipe. Viatura que não responde a chamados: pode estar em apuros (despachar verificação).',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      question: 'Sobre a comunicação não-verbal entre policiais em operações táticas:',
      options: [
        'Não é importante',
        'Sinais de mão, gestos, linguagem corporal são essenciais em situações de silêncio tático (invasões, emboscadas)',
        'Apenas comunicação verbal serve',
        'Não há padrão de sinais',
        'Só usar mímica é suficiente'
      ],
      correctAnswer: 1,
      explanation: 'COMUNICAÇÃO NÃO-VERBAL TÁTICA (hand signals): QUANDO: situações onde voz COMPROMETE operação (invasão silenciosa, emboscada, cerco). SINAIS COMUNS: 1) APONTAR 2 dedos para olhos depois direção = "olhe/observe"; 2) Punho fechado levantado = "parar/congelar"; 3) Mão aberta para baixo movimento = "abaixar"; 4) Dedos indicando número = quantos suspeitos/direções; 5) Mão cortando garganta = "cessar fogo/abortar"; 6) Apontar polegar para cima = "ok/entendi"; 7) Movimento circular com dedo = "reagrupar/reunir". TREINAMENTO: equipe deve PRATICAR sinais (cada unidade pode ter variações), combinar antes da operação. ALTERNATIVAS: rádio com fone de ouvido (whisper mode), tecnologia (câmeras, drones). ERRO: não combinar sinais (cada um entende diferente - tragédia), improvisar em momentos críticos. Comunicação silenciosa = elemento SURPRESA preservado.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    }
  ]);
}

// ============= SEGURANÇA EM OCORRÊNCIAS =============
export async function seedQuestionsSegurancaOcorrencias() {
  return seedGenericTopicQuestions('seguranca-em-ocorrencias', 'Segurança em Ocorrências', '🛡️', [
    {
      question: 'Ao chegar em uma ocorrência, a primeira ação da equipe policial deve ser:',
      options: [
        'Entrar imediatamente',
        'Avaliar a cena (scene assessment), identificar ameaças, estabelecer segurança antes de qualquer outra ação',
        'Correr até a vítima',
        'Começar a investigar',
        'Chamar a imprensa'
      ],
      correctAnswer: 1,
      explanation: 'AVALIAÇÃO DE CENA (scene assessment/size-up): ANTES de sair da viatura: 1) OBSERVAR: o que vejo? Pessoas correndo? Armas? Fogo? Vítimas? Suspeitos? Veículos fugindo?; 2) OUVIR: tiros? Gritos? Explosão?; 3) CHEIRAR: gás? Fumaça? Produtos químicos?; 4) AMEAÇAS: cena SEGURA ou INSEGURA? Se insegura: NÃO entrar até neutralizar ameaça (suspeito armado - esperar SWAT; incêndio - bombeiros; gás - equipe especializada); 5) RECURSOS: preciso de mais viaturas? Ambulância? Bombeiros?; 6) ROTAS: entrada/saída, posição tática da viatura. ERRO FATAL: "correr para salvar" sem avaliar → policial vira vítima (atirador mata policial, depois vítima original). Regra de ouro da segurança: "Eu primeiro, parceiro, vítima, suspeito" - parece egoísta mas é lógica: policial morto não salva ninguém. Segurança PRIMEIRO, depois atendimento.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      question: 'Durante atendimento de ocorrência de violência doméstica, os cuidados específicos incluem:',
      options: [
        'Ignorar o agressor',
        'Separar envolvidos, ouvir vítima em particular, avaliar risco de feminicídio, medidas protetivas, acionar rede de apoio',
        'Tentar reconciliar o casal',
        'Culpar a vítima',
        'Apenas dar conselhos'
      ],
      correctAnswer: 1,
      explanation: 'ATENDIMENTO DE VIOLÊNCIA DOMÉSTICA (Lei Maria da Penha - 11.340/06): 1) SEPARAR: agressor em outro cômodo, sob vigilância (evita intimidação, novas agressões); 2) OUVIR VÍTIMA SOZINHA: local privado, sem agressor presente (medo impede falar verdade); 3) NÃO JULGAR: "por que não separou antes?" = revitimização; acolher, acreditar; 4) AVALIAR RISCO: ameaças de morte, histórico de violência crescente, armas na casa, ciúmes excessivo (indicadores de FEMINICÍDIO iminente); 5) MEDIDAS PROTETIVAS: conduzir vítima para registrar BO e solicitar (afastamento, proibição de aproximação); 6) REDE: acionar abrigo (se risco alto), conselho tutelar (se há crianças), CREAS/CRAS; 7) PRISÃO: flagrante de lesão/ameaça, ou descumprimento de medida protetiva. NUNCA: "problema de casal, resolvam vocês" (omissão), "apanhando porque quis" (culpabilização), tentar reconciliar. Violência doméstica = problema POLICIAL e de saúde pública.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      question: 'Em ocorrência com pessoa em surto psiquiátrico, a abordagem deve priorizar:',
      options: [
        'Uso imediato de força',
        'Manter distância segura, comunicação calma, evitar movimentos bruscos, acionar SAMU/equipe de saúde mental',
        'Algemar imediatamente',
        'Gritar e ameaçar',
        'Ignorar a pessoa'
      ],
      correctAnswer: 1,
      explanation: 'ATENDIMENTO A PESSOA EM CRISE PSIQUIÁTRICA: 1) SEGURANÇA: distância (2+ metros - pessoa pode atacar súbito), remover objetos que possam ser armas, afastar curiosos; 2) COMUNICAÇÃO: voz CALMA, baixa, não ameaçadora; frases simples ("Oi, sou policial, vim ajudar"); NÃO discutir com delírios ("não, você NÃO é Jesus" - piora), validar sentimentos ("vejo que está assustado"); 3) EVITAR: movimentos bruscos (assusta), tocar sem avisar, muitos policiais cercando (intimidação); 4) ACIONAR: SAMU (médico, medicação), CAPS (Centro de Atenção Psicossocial), familiar se possível; 5) FORÇA: último recurso, se risco iminente (atacando com faca) - usar menos letal se disponível, contenção física gentil; 6) NÃO: levar para delegacia (hospital psiquiátrico é o correto - Lei 10.216/01), algemar (estigma, trauma - só se extremamente necessário). Pessoa em surto = DOENTE, não criminosa. Tratamento médico, não prisão.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      question: 'Ao atender ocorrência de suicídio em andamento (pessoa ameaçando se matar), o policial deve:',
      options: [
        'Desafiar a pessoa',
        'Isolar área, acionar negociador treinado ou bombeiros, ganhar tempo, demonstrar empatia, não fazer promessas impossíveis',
        'Aproximar-se rapidamente',
        'Dizer "vai, pula"',
        'Filmar e postar nas redes'
      ],
      correctAnswer: 1,
      explanation: 'ATENDIMENTO A TENTATIVA DE SUICÍDIO: 1) ISOLAMENTO: afastar curiosos (vídeos, provocações tipo "pula!" = agravam), estabelecer perímetro; 2) NEGOCIADOR: acionar equipe ESPECIALIZADA (Bombeiros têm grupo treinado, algumas PMs também); policial comum pode tentar SE não houver especialista, mas com cautela; 3) GANHAR TEMPO: objetivo é pessoa NÃO se matar até ajuda chegar; conversar sobre qualquer coisa (nome, família, problemas); 4) EMPATIA: "vejo que está sofrendo", "podemos achar solução juntos"; NÃO minimizar ("não é tão ruim"), nem julgar ("suicídio é pecado"); 5) NÃO PROMETER: "tudo vai se resolver" (pode ser mentira - perde confiança); 6) SAMU: médico, medicação, internação se necessário. TÉCNICAS: rapport, escuta ativa, validação. NÃO: aproximação tática agressiva (assusta - pessoa pula), desafiar ("não tem coragem" - vai provar que tem), desistir ("não quer ajuda, deixa morrer"). Cada vida salva = vitória.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      question: 'Sobre segurança do policial em ocorrências noturnas:',
      options: [
        'Não há diferença do dia',
        'Usar lanterna tática, iluminação da viatura, atenção redobrada, não se expor a luz de fundo, trabalhar em dupla',
        'Trabalhar sozinho é mais seguro',
        'Não precisa de lanterna',
        'Acender todas as luzes da viatura'
      ],
      correctAnswer: 1,
      explanation: 'SEGURANÇA EM OPERAÇÕES NOTURNAS: 1) LANTERNA TÁTICA: alto poder, permite ver e ofuscar ameaça; segurar ao LADO do corpo (não na frente - silhueta menor); técnica FBI (lanterna longe do corpo, acende/apaga rapidamente - atirador atira onde viu luz, mas você não está lá); 2) VIATURA: faróis altos para iluminar cena (ofusca suspeito, ilumina policial), giroflex identifica; MAS desligar se criar BACKLIGHT (luz atrás de você = silhueta perfeita para atirador); 3) POSICIONAMENTO: evitar ficar entre luz e ameaça (sombra na parede = alvo fácil), usar sombras a favor; 4) DUPLA: NUNCA separar à noite (escuro + sozinho = vulnerabilidade máxima); 5) VISÃO NOTURNA: olhos precisam 20-30min para adaptar (não olhar luzes fortes antes de patrulha noturna); 6) ATENÇÃO: audição mais importante (passos, movimento), não confiar apenas em visão. Noite = vantagem para criminosos (escondem-se fácil), desvantagem para policiais (área desconhecida). Compensar com equipamento e técnica.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ]);
}

// ============= PRESERVAÇÃO DE LOCAL DE CRIME =============
export async function seedQuestionsPreservacaoLocal() {
  return seedGenericTopicQuestions('preservacao-de-local-de-crime', 'Preservação de Local de Crime', '🚧', [
    {
      question: 'A preservação de local de crime deve ser iniciada:',
      options: [
        'Após a perícia chegar',
        'Imediatamente ao chegar, isolando área e impedindo acesso de pessoas',
        'Só se houver morte',
        'Não é função da polícia militar',
        'Apenas em crimes graves'
      ],
      correctAnswer: 1,
      explanation: 'PRESERVAÇÃO DO LOCAL (CPP art. 6º, I e II): 1) IMEDIATAMENTE: primeira equipe a chegar ISOLA (não espera perícia - evidências podem ser destruídas); 2) TODO CRIME: homicídio, latrocínio, estupro, roubo (não apenas graves - qualquer crime pode precisar perícia); 3) OBJETIVO: manter local INTOCADO para peritos coletarem vestígios (impressões digitais, DNA, projéteis, pegadas, manchas de sangue); 4) MÉTODO: fita zebrada, cones, viatura bloqueando, policial na entrada; perímetro AMPLO (melhor sobrar área que faltar). EXCEÇÕES: vítima em risco de morte (SALVAR primeiro, depois preservar), incêndio (bombeiros), perigo iminente (bomba). Mas documentar TUDO que tocar/mover. Preservação MAL FEITA: perícia não acha provas → criminoso absolvido. Preservação = início da INVESTIGAÇÃO.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      question: 'O isolamento do local de crime deve abranger:',
      options: [
        'Apenas onde está o corpo',
        'Área suficiente para incluir todos os vestígios, rotas de entrada/saída, áreas adjacentes',
        'Só o cômodo do crime',
        'Não precisa isolar',
        'Apenas a porta'
      ],
      correctAnswer: 1,
      explanation: 'PERÍMETRO DE ISOLAMENTO: 1) ÁREA AMPLA: incluir não só o CORPO/objeto central, mas TUDO ao redor (pegadas até 20m, cápsulas ejetadas longe, manchas de sangue em fuga, vidro quebrado, objetos jogados); 2) ROTAS: entrada e saída do criminoso (pode ter deixado vestígios - cabelo em arbusto, fibra de roupa em cerca); 3) CAMADAS: isolamento INTERNO (só peritos) e EXTERNO (imprensa, curiosos ficam ALÉM); 4) ADAPTAR: homicídio em via pública = isolar quarteirão; em residência = isolar casa inteira + quintal/jardim; atropelamento = isolar faixa e acostamento. REGRA: se dúvida, isolar MAIS (perícia diz se precisa de tudo; se isolar MENOS e depois descobrir que tinha vestígio lá = perdido - pessoas pisaram). Anotar QUEM entrou no perímetro (controle de acesso).',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      question: 'Dentro do local preservado, o policial pode:',
      options: [
        'Mexer em tudo para ajudar',
        'Apenas observar, anotar características, guardar para relatar aos peritos, não tocar em nada salvo necessidade absoluta',
        'Recolher provas para a delegacia',
        'Fumar um cigarro',
        'Usar o banheiro da vítima'
      ],
      correctAnswer: 1,
      explanation: 'CONDUTA DENTRO DO LOCAL: **PERMITIDO:** 1) OBSERVAR: mentalmente fotografar cena (onde está corpo, armas, objetos); 2) ANOTAR: características (hora chegada, estado da porta - aberta/arrombada, luzes acesas/apagadas, odores); 3) PROTEGER: cobrir manchas de sangue da chuva (lona, SEM tocar), afastar animais. **PROIBIDO:** 1) TOCAR: objetos, armas, corpo (destrói digitais, DNA), abrir gavetas, porta de carro; 2) ADICIONAR: toco de cigarro, garrafa de água, pegadas (usar path - caminho único para andar, marcado); 3) REMOVER: nada pode sair (mesmo "só uma foto do documento da vítima" - não); 4) USAR instalações: banheiro (pode ter vestígios), pia (lava sangue), telefone (apaga registros). **SE TOCOU:** anotar O QUÊ, QUANDO, POR QUÊ (ex: "removi faca da mão da vítima ainda viva para estancar sangramento - faca está no local X"). Mínima CONTAMINAÇÃO possível.',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      question: 'O policial deve permitir acesso ao local de crime preservado para:',
      options: [
        'Qualquer pessoa',
        'Apenas peritos, delegado, médico legista, sob controle de entrada/saída',
        'Imprensa',
        'Familiares da vítima',
        'Curiosos'
      ],
      correctAnswer: 1,
      explanation: 'CONTROLE DE ACESSO: **PERMITIDO ENTRAR:** 1) PERITOS (IML, criminalística); 2) DELEGADO responsável; 3) MÉDICO LEGISTA (se corpo presente); 4) FOTÓGRAFO OFICIAL (polícia técnica); 5) Autoridades SUPERIORES (secretário de segurança, juiz - raramente). **REGISTRO:** anotar em LIVRO/FORMULÁRIO: nome, cargo, hora entrada, hora saída de TODOS (rastrear se houver contaminação). **PROIBIDO:** 1) FAMILIARES (trauma + contaminação); 2) IMPRENSA (divulgação de detalhes prejudica investigação); 3) POLICIAIS curiosos (não envolvidos); 4) POLÍTICO ("sou vereador, quero ver"); 5) ADVOGADO (defesa tem acesso a FOTOS/laudo depois, não ao local fresco). Cada pessoa a mais = maior chance de contaminar. Peritos agradecem quando local está INTOCADO.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      question: 'Ao preservar local de crime, o policial deve anotar informações sobre:',
      options: [
        'Apenas o horário',
        'Hora chegada, estado da cena, pessoas presentes, alterações feitas, condições climáticas, quem acessou',
        'Só o nome da vítima',
        'Não precisa anotar nada',
        'Apenas se houver testemunhas'
      ],
      correctAnswer: 1,
      explanation: 'ANOTAÇÕES ESSENCIAIS (serão base do relatório): 1) HORA: chegada da viatura, início do isolamento, chegada da perícia; 2) ESTADO DA CENA: porta aberta/fechada/arrombada, luzes acesas/apagadas, janelas, posição do corpo (antes de mover), objetos na cena; 3) PESSOAS: quem estava no local (testemunhas, suspeitos, curiosos - nome, contato, o que viram), quem CHEGOU depois; 4) ALTERAÇÕES: o que FOI TOCADO e POR QUÊ ("movi corpo 1m para fazer RCP"), "vizinho pisou na cena antes do isolamento"; 5) CLIMA: chovendo (pode lavar sangue), vento (pode mover papéis), temperatura (afeta decomposição); 6) ACESSO: quem entrou no perímetro isolado (peritos, delegado); 7) FOTOGRAFIAS: se policial tirou fotos com celular (pode ajudar). Documento = memória. Detalhe esquecido agora = perdido para sempre (meses depois no júri, defesa pergunta "porta estava trancada?" - não anotou? Não sabe).',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    }
  ]);
}

// ============= MASTER FUNCTION =============
export async function seedAllAbordagemTecnicasQuestions() {
  console.log('🚀 Starting Abordagem e Técnicas questions import...');
  try {
    await seedQuestionsAbordagemPessoas();
    await seedQuestionsAbordagemVeiculos();
    await seedQuestionsRevistaPessoal();
    await seedQuestionsAlgemacao();
    await seedQuestionsConducaoPresos();
    await seedQuestionsTecnicasPatrulhamento();
    await seedQuestionsComunicacaoOperacional();
    await seedQuestionsSegurancaOcorrencias();
    await seedQuestionsPreservacaoLocal();
    console.log('✅ ALL ABORDAGEM E TÉCNICAS QUESTIONS IMPORTED! 🎯👮');
    console.log('📊 Total: 45 questions across 9 topics');
  } catch (error) {
    console.error('❌ Error importing Abordagem e Técnicas questions:', error);
    throw error;
  }
}
