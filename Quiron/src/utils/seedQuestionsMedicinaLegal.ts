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

// ============= TRAUMATOLOGIA FORENSE =============
export async function seedQuestionsTraumatologiaForense() {
  console.log('🩹 Importing Traumatologia Forense questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'traumatologia-forense',
      question: 'Na traumatologia forense, as equimoses se caracterizam por:',
      options: [
        'Serem lesões com solução de continuidade da pele',
        'Infiltração hemorrágica no tecido subcutâneo, sem rompimento da pele',
        'Acúmulo de sangue em cavidades naturais',
        'Lesões produzidas exclusivamente por instrumentos cortantes',
        'Hemorragias que sempre resultam em morte'
      ],
      correctAnswer: 1,
      explanation: 'EQUIMOSE (vulgo "roxo"): infiltração hemorrágica difusa no tecido subcutâneo/intersticial, SEM rompimento da pele (lesão fechada). Causada por trauma contuso. Evolução cromática (espectro equimótico de Legrand du Saulle): 1º-3º dia: vermelho-arroxeado; 4º-6º: esverdeado; 7º-12º: amarelado; 13º-21º: desaparece. Útil para datação de lesões. Diferente de hematoma (coleção sanguínea localizada) e de ferida (solução de continuidade).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'traumatologia-forense',
      question: 'Segundo a classificação médico-legal dos instrumentos, são considerados instrumentos perfurantes:',
      options: [
        'Facas, navalhas e bisturis',
        'Machados, foices e guilhotinas',
        'Agulhas, pregos e estilete',
        'Martelos, pedras e porretes',
        'Serras, limas e plainas'
      ],
      correctAnswer: 2,
      explanation: 'INSTRUMENTOS PERFURANTES: ponta (agulha, prego, estilete, florete, picador de gelo). Produzem lesões PUNTIFORMES, profundas, pequeno orifício de entrada. CORTANTES: gume (faca, navalha, bisturi). CONTUNDENTES: superfície romba (martelo, pedra, soco, chute). PERFUROCORTANTES: ponta + gume (faca de ponta, punhal). CORTOCONTUNDENTES: gume + peso (machado, foice, guilhotina). PÉRFURO-CONTUNDENTES: projéteis de arma de fogo.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'traumatologia-forense',
      question: 'Nas lesões por arma de fogo, a zona de tatuagem (pontilhado hemorrágico pela incrustação de grãos de pólvora não queimados) indica disparo a uma distância aproximada de:',
      options: [
        'Encostado (0 cm)',
        'Até 50 cm',
        'De 50 cm a 1 metro',
        'Superior a 1 metro',
        'Não é possível determinar distância'
      ],
      correctAnswer: 1,
      explanation: 'ZONAS DE LESÃO POR PAF (projétil arma fogo): 1) ZONA DE CHAMUSCAMENTO: até 5-10 cm (pelo queimado); 2) ZONA DE TATUAGEM: até 40-50 cm (grãos de pólvora incrustados - NÃO sai com lavagem); 3) ZONA DE ESFUMAÇAMENTO: até 60-80 cm (fuligem depositada - SAI com lavagem). Tiro ENCOSTADO: ferida em "boca de mina" (estrelada). Tiro CURTA DISTÂNCIA: orla equimótica + queimadura. LONGA DISTÂNCIA: apenas orifício de entrada.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'traumatologia-forense',
      question: 'O orifício de entrada de um projétil de arma de fogo, em disparo perpendicular à pele, apresenta caracteristicamente:',
      options: [
        'Dimensões sempre maiores que o calibre do projétil',
        'Orla de contusão (zona equimótica) e orla de enxugo (limpeza)',
        'Bordas irregulares e evertidas',
        'Sempre presença de tatuagem',
        'Formato estrelado em todos os casos'
      ],
      correctAnswer: 1,
      explanation: 'ORIFÍCIO DE ENTRADA (disparo perpendicular): 1) ORLA DE CONTUSÃO (equimótica): anel avermelhado/escurecido pelo atrito do projétil; 2) ORLA DE ENXUGO (limpeza): deposição de sujidades do cano. Formato: arredondado/ovalado. Bordas: INVAGINADAS (para dentro). ORIFÍCIO DE SAÍDA: maior, irregular, bordas EVERTIDAS (para fora), sem orlas. Tatuagem/esfumaçamento: só em tiros próximos. Formato estrelado: tiro encostado em osso.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'traumatologia-forense',
      question: 'Fraturas do tipo "galho verde" são caracteristicamente encontradas em:',
      options: [
        'Idosos com osteoporose avançada',
        'Crianças, devido à maior elasticidade óssea',
        'Adultos com fraturas expostas',
        'Apenas em casos de atropelamento',
        'Fraturas por arma de fogo exclusivamente'
      ],
      correctAnswer: 1,
      explanation: 'Fratura em "GALHO VERDE" (greenstick fracture): INCOMPLETA, osso dobra sem romper completamente (como galho verde que entorta). Típica de CRIANÇAS (ossos mais elásticos, flexíveis, ricos em colágeno). Mecanismo: flexão. Adultos/idosos: ossos mais rígidos, fraturam completamente. Outras fraturas infantis: "torus" (encurvamento). Diagnóstico diferencial importante em casos de maus-tratos infantis (fraturas múltiplas em diferentes estágios de consolidação).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Traumatologia Forense questions imported successfully!');
}

// ============= TANATOLOGIA (MORTE) =============
export async function seedQuestionsTanatologia() {
  console.log('💀 Importing Tanatologia questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'tanatologia-morte',
      question: 'Os fenômenos cadavéricos imediatos (abióticos) incluem:',
      options: [
        'Rigidez cadavérica, livor mortis e algor mortis',
        'Perda da consciência, insensibilidade, imobilidade e parada cardiorrespiratória',
        'Putrefação, maceração e mumificação',
        'Cromidrose, enfisema e circulação póstuma de Brouardel',
        'Adipocera, corificação e esqueletização'
      ],
      correctAnswer: 1,
      explanation: 'FENÔMENOS CADAVÉRICOS IMEDIATOS (abióticos - sinais de morte): 1) Perda de CONSCIÊNCIA; 2) INSENSIBILIDADE; 3) IMOBILIDADE; 4) Parada CARDIORRESPIRATÓRIA; 5) Midríase paralítica. FENÔMENOS CONSECUTIVOS (1-24h): rigor mortis, livor mortis, algor mortis, desidratação. FENÔMENOS TRANSFORMATIVOS: DESTRUTIVOS (putrefação, maceração) e CONSERVADORES (mumificação, saponificação, corificação). Ordem evolutiva essencial para perícia médico-legal.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'tanatologia-morte',
      question: 'A rigidez cadavérica (rigor mortis) caracteriza-se por:',
      options: [
        'Surgir imediatamente após a morte',
        'Instalar-se de 1 a 2 horas após a morte, seguindo a Lei de Niderkorn (sentido craniocaudal)',
        'Ser permanente e irreversível',
        'Não ter utilidade para estimar o tempo de morte',
        'Ocorrer apenas em mortes violentas'
      ],
      correctAnswer: 1,
      explanation: 'RIGIDEZ CADAVÉRICA (rigor mortis): endurecimento muscular por falta de ATP. INÍCIO: 1-2h após morte. EVOLUÇÃO: Lei de NIDERKORN (sequência craniocaudal - da cabeça aos pés). COMPLETA: 6-8h. MÁXIMA: 12-24h. DESAPARECE: 36-48h (início da putrefação). Em ambientes quentes: mais rápida. Frios: mais lenta. ESPASMO CADAVÉRICO: rigidez imediata (rara, situações extremas). Útil para estimar INTERVALO pós-morte (IPM).',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'tanatologia-morte',
      question: 'As manchas de hipóstase (livor mortis ou livores cadavéricos) são:',
      options: [
        'Equimoses produzidas por trauma antes da morte',
        'Manchas arroxeadas nas partes declives do cadáver, por acúmulo de sangue gravitacional',
        'Sinais de putrefação gasosa',
        'Descoloração da pele por desidratação',
        'Lesões produzidas por insetos necrófagos'
      ],
      correctAnswer: 1,
      explanation: 'LIVORES CADAVÉRICOS (livor mortis, hipóstases): manchas ARROXEADAS nas partes DECLIVES do cadáver (sangue desce por gravidade após parada circulatória). INÍCIO: 2-3h. FIXAÇÃO: 8-12h (depois não mudam de posição). Útil para: 1) Confirmar morte; 2) Estimar tempo; 3) Verificar MUDANÇA DE POSIÇÃO do corpo (livores em local incompatível = corpo foi movido). Diferem de equimoses (trauma vital) por serem mais extensas, homogêneas e nas partes baixas.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'tanatologia-morte',
      question: 'Na putrefação, a fase de coloração (cromática) inicia-se pela:',
      options: [
        'Cabeça e extremidades',
        'Mancha verde abdominal (fossa ilíaca direita)',
        'Membros inferiores',
        'Tórax e região cardíaca',
        'Simultaneamente em todo o corpo'
      ],
      correctAnswer: 1,
      explanation: 'PUTREFAÇÃO - Fases (Esquema de Borri): 1) COLORAÇÃO (cromática): MANCHA VERDE ABDOMINAL na fossa ilíaca DIREITA (área do ceco, bactérias intestinais), 18-24h. Depois se espalha. 2) GASOSA (enfisematosa): 2-3 dias, inchaço por gases. 3) COLIQUATIVA (liquefação): tecidos se liquefazem. 4) ESQUELETIZAÇÃO: restam ossos. Fatores: calor/umidade aceleram; frio/seco retardam. Importante para datação aproximada da morte.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'tanatologia-morte',
      question: 'A saponificação (adipocera) é um fenômeno cadavérico transformativo conservador que ocorre em:',
      options: [
        'Ambientes secos e quentes',
        'Cadáveres submersos ou em ambientes úmidos e anaeróbios',
        'Qualquer ambiente, independente das condições',
        'Apenas em recém-nascidos',
        'Exclusivamente em casos de morte por queimadura'
      ],
      correctAnswer: 1,
      explanation: 'SAPONIFICAÇÃO (adipocera): transformação da gordura corporal em substância CEROSA, esbranquiçada, rançosa (sabão de cadáver). Condições: UMIDADE + meio ANAERÓBIO (sem oxigênio) + gordura corporal. Locais típicos: cadáveres SUBMERSOS, enterrados em solo úmido, ambientes pantanosos. Tempo: meses a anos. CONSERVA o corpo (fenômeno conservador). Diferente de mumificação (ambiente SECO e quente) e corificação (pele curtida). Permite identificação mesmo após longo tempo.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Tanatologia questions imported successfully!');
}

// ============= LESÕES CORPORAIS =============
export async function seedQuestionsLesoesCorporais() {
  console.log('🩸 Importing Lesões Corporais questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'lesoes-corporais',
      question: 'Segundo o Código Penal, constitui lesão corporal de natureza GRAVE:',
      options: [
        'Debilidade permanente de membro, sentido ou função',
        'Incapacidade para ocupações habituais por mais de 30 dias',
        'Perigo de vida',
        'Todas as alternativas anteriores',
        'Apenas as alternativas A e C'
      ],
      correctAnswer: 3,
      explanation: 'LESÃO CORPORAL GRAVE (CP, art. 129, § 1º): 1) Incapacidade para ocupações habituais por MAIS de 30 dias; 2) PERIGO DE VIDA; 3) DEBILIDADE PERMANENTE de membro, sentido ou função; 4) ACELERAÇÃO DE PARTO. LEVE: incapacidade por menos de 30 dias. GRAVÍSSIMA (§ 2º): incapacidade PERMANENTE para trabalho/PERDA/INUTILIZAÇÃO de membro/sentido/função, ENFERMIDADE INCURÁVEL, DEFORMIDADE PERMANENTE, ABORTO. Perícia em 30 dias + complementar.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'lesoes-corporais',
      question: 'A deformidade permanente, para caracterizar lesão corporal gravíssima, deve:',
      options: [
        'Ser visível apenas com a pessoa desnuda',
        'Causar dano estético considerável, irreparável e permanentemente visível',
        'Ocorrer em qualquer parte do corpo, mesmo não visível',
        'Ser apenas subjetiva, dependendo da percepção da vítima',
        'Necessariamente impedir o trabalho'
      ],
      correctAnswer: 1,
      explanation: 'DEFORMIDADE PERMANENTE (lesão gravíssima): dano estético CONSIDERÁVEL, IRREPARÁVEL e PERMANENTEMENTE VISÍVEL, causando constrangimento à vítima. STJ: deve ser OBJETIVA (não apenas percepção da vítima). Abrange: FACE (área mais comum), pescoço, mãos, partes habitualmente expostas. Cirurgia reparadora: se não restaura totalmente, persiste deformidade. Exemplos: cicatrizes extensas/desfigurantes, perda de dentes frontais, queimaduras graves visíveis. Perícia estética é fundamental.',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'lesoes-corporais',
      question: 'No exame de corpo de delito para lesões corporais, o perito deve:',
      options: [
        'Realizar apenas o exame direto inicial',
        'Fazer exame direto imediato e, se necessário, exame complementar após 30 dias',
        'Apenas descrever as lesões, sem opinar sobre gravidade',
        'Aguardar 30 dias para realizar qualquer exame',
        'Exame complementar é opcional'
      ],
      correctAnswer: 1,
      explanation: 'EXAME DE CORPO DE DELITO - Lesões Corporais (CPP, art. 168): 1) EXAME DIRETO IMEDIATO: logo após o fato, descreve lesões, instrumento, data provável; 2) EXAME COMPLEMENTAR: se necessário, após 30 DIAS (para verificar se incapacidade ultrapassa 30 dias = grave) e após 60-90 dias (para verificar sequelas permanentes = gravíssima). Se não fizer complementar, pode desclassificar de grave para leve. É OBRIGATÓRIO quando natureza da lesão exigir.',
      difficulty: 'easy',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'lesoes-corporais',
      question: 'A perda de três ou mais dentes, para fins de caracterização de lesão corporal, é considerada:',
      options: [
        'Lesão leve sempre',
        'Lesão grave por debilidade permanente de função',
        'Lesão gravíssima por perda de função',
        'Depende da localização e se são dentes permanentes ou decíduos',
        'Não caracteriza lesão corporal'
      ],
      correctAnswer: 3,
      explanation: 'PERDA DE DENTES: depende de análise caso a caso. Fatores: 1) Dentes PERMANENTES vs DECÍDUOS (de leite - não caracteriza gravidade); 2) QUANTIDADE (≥3 dentes frontais = mais grave); 3) LOCALIZAÇÃO (dentes anteriores/estéticos vs posteriores); 4) IDADE (idoso que já perdeu vários vs jovem); 5) Prejuízo FUNCIONAL (mastigação) e ESTÉTICO. STJ: perda de dentes frontais pode configurar DEFORMIDADE PERMANENTE (gravíssima). Se apenas debilidade: GRAVE.',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'lesoes-corporais',
      question: 'Sobre as lesões corporais seguidas de morte, é CORRETO afirmar:',
      options: [
        'É sempre homicídio doloso',
        'Crime preterdoloso: dolo na lesão, culpa no resultado morte',
        'Não existe essa figura no Código Penal brasileiro',
        'Equipara-se ao homicídio culposo',
        'Tem a mesma pena do homicídio simples'
      ],
      correctAnswer: 1,
      explanation: 'LESÃO CORPORAL SEGUIDA DE MORTE (CP, art. 129, § 3º): crime PRETERDOLOSO (dolo no antecedente - lesão, culpa no consequente - morte). Pena: reclusão de 4 a 12 anos. Agente QUER lesionar, mas resultado MORTE é CULPOSO (sem intenção). Diferente de: HOMICÍDIO DOLOSO (quer matar: 6-20 anos); HOMICÍDIO CULPOSO (sem intenção de lesionar nem matar: 1-3 anos). Absorve a lesão corporal. Exemplo: soco na cabeça, vítima cai, bate a cabeça e morre.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Lesões Corporais questions imported successfully!');
}

// ============= ASFIXIAS =============
export async function seedQuestionsAsfixias() {
  console.log('😵 Importing Asfixias questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'asfixias',
      question: 'Na asfixia mecânica por enforcamento, o sulco característico apresenta:',
      options: [
        'Direção horizontal, profundidade uniforme e equidistante em todo o pescoço',
        'Direção oblíqua, ascendente, interrompido na região do nó, profundidade desigual',
        'Múltiplos sulcos paralelos',
        'Sempre presente em toda a circunferência do pescoço',
        'Localização sempre abaixo da cartilagem tireoide'
      ],
      correctAnswer: 1,
      explanation: 'ENFORCAMENTO - Características do sulco: 1) Direção OBLÍQUA, ASCENDENTE; 2) INTERROMPIDO na região do nó; 3) Profundidade DESIGUAL (mais profundo oposto ao nó); 4) Localização geralmente ACIMA da cartilagem tireoide. ESGANADURA (estrangulamento): sulco HORIZONTAL, CONTÍNUO, COMPLETO, profundidade uniforme, ABAIXO da tireoide. Enforcamento pode ser COMPLETO (pés não tocam chão) ou INCOMPLETO (parcial). Sinais internos: fratura de osso hioide/cartilagens.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'asfixias',
      question: 'O afogamento é classificado como:',
      options: [
        'Asfixia por sufocação direta',
        'Asfixia por confinamento',
        'Asfixia por submersão/imersão em meio líquido',
        'Asfixia por compressão torácica',
        'Asfixia por obstrução de vias aéreas superiores'
      ],
      correctAnswer: 2,
      explanation: 'AFOGAMENTO: asfixia por SUBMERSÃO/IMERSÃO em meio LÍQUIDO (água, geralmente). Fases: 1) Surpresa (inspiração profunda); 2) Resistência (apneia voluntária); 3) Dispneia (movimentos respiratórios); 4) Convulsões; 5) Apneia final. AFOGAMENTO BRANCO (Síndrome de Hidrocussão): morte súbita por inibição vagal/espasmo glótico, sem água nos pulmões. Sinais: cogumelo de espuma, enfisema aquoso pulmonar, líquido no estômago. Outros tipos de asfixia: sufocação, confinamento, esganadura, soterramento.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'asfixias',
      question: 'A máscara equimótica de Morestin é um sinal encontrado em:',
      options: [
        'Enforcamento',
        'Esganadura',
        'Sufocação direta por oclusão de vias respiratórias',
        'Afogamento',
        'Soterramento'
      ],
      correctAnswer: 2,
      explanation: 'MÁSCARA EQUIMÓTICA DE MORESTIN: equimoses (petéquias) na FACE, pescoço, parte superior do tórax. Encontrada em: SUFOCAÇÃO DIRETA (oclusão de boca/nariz, obstrução de vias aéreas), ESGANADURA, ENFORCAMENTO. Mecanismo: aumento de pressão venosa por obstrução do retorno venoso. Também chamada de "máscara cianótica". Acompanhada de: exoftalmia (olhos saltados), protrusão da língua, cianose facial. Sinal importante mas NÃO patognomônico (exclusivo) de asfixia.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'asfixias',
      question: 'Nas asfixias em geral, as manchas de Tardieu são:',
      options: [
        'Manchas verde-escuras na pele por putrefação',
        'Pequenas hemorragias puntiformes (petéquias) nas serosas (pleura, pericárdio)',
        'Livores cadavéricos intensos',
        'Manchas de sangue encontradas apenas em afogamento',
        'Sinais exclusivos de enforcamento'
      ],
      correctAnswer: 1,
      explanation: 'MANCHAS DE TARDIEU: pequenas hemorragias PUNTIFORMES (petéquias/equimoses) nas SEROSAS (superfície da pleura, pericárdio, conjuntivas). Mecanismo: hiperpressão venosa + hipoxemia (falta de O₂) causam ruptura capilar. Encontradas em TODAS as asfixias (não exclusivas). Também chamadas "estigmas asfíxicos". Outros sinais gerais de asfixia: cianose, congestão visceral, sangue fluido escuro, cogumelo de espuma (nas vias aéreas). Não são patognomônicas mas reforçam diagnóstico.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'asfixias',
      question: 'Sobre a esganadura (estrangulamento), é INCORRETO afirmar:',
      options: [
        'É produzida por constrição do pescoço por laço acionado pela força das mãos ou outro meio que não o peso do corpo',
        'Geralmente é homicida',
        'O sulco é horizontal e completo',
        'O sulco é oblíquo e interrompido na região do nó',
        'Pode ocorrer fratura do osso hioide'
      ],
      correctAnswer: 3,
      explanation: 'ESGANADURA (estrangulamento): constrição cervical por LAÇO acionado por FORÇA EXTERNA (mãos, objeto), NÃO pelo peso do corpo. Características do sulco: HORIZONTAL, COMPLETO (circunda todo pescoço), profundidade UNIFORME, localização BAIXA (abaixo cartilagem tireoide). Geralmente HOMICIDA. Sulco oblíquo/interrompido = ENFORCAMENTO (peso do próprio corpo). Sinais: lesões de defesa, fratura hioide/cartilagens laríngeas. Esganadura MANUAL: sem laço, marcas de unhas/dedos (equimoses puntiformes).',
      difficulty: 'hard',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Asfixias questions imported successfully!');
}

// ============= SEXOLOGIA FORENSE =============
export async function seedQuestionsSexologiaForense() {
  console.log('🔬 Importing Sexologia Forense questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'sexologia-forense',
      question: 'No exame pericial de conjunção carnal, a presença de rotura himenal completa e antiga indica:',
      options: [
        'Necessariamente que houve estupro',
        'Que houve conjunção carnal em época anterior',
        'Sempre que há hematoma vulvar',
        'Virgindade',
        'Não tem valor pericial'
      ],
      correctAnswer: 1,
      explanation: 'ROTURA HIMENAL COMPLETA e ANTIGA: indica que houve CONJUNÇÃO CARNAL em ÉPOCA ANTERIOR (não necessariamente do fato investigado). Não indica se foi consensual ou estupro. ROTURA RECENTE: bordas hiperemiadas, sangrantes, edemaciadas. ROTURA ANTIGA: bordas cicatrizadas, lisas, reepitelizadas. HÍMENES COMPLACENTES: não rompem (elásticos). HÍMEN CRIBIFORME/SEPTADO: podem permitir penetração sem rotura. Ausência de rotura NÃO exclui conjunção carnal. Vestígios de esperma/DNA são mais importantes.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'sexologia-forense',
      question: 'A pesquisa de espermatozoides em casos de crimes sexuais deve ser realizada em qual prazo após o fato?',
      options: [
        'Até 6 horas',
        'Até 12 horas',
        'Até 24-72 horas na vagina; até 6-12 horas em outras regiões',
        'Até 7 dias em qualquer local',
        'Não há prazo, sempre é possível encontrar'
      ],
      correctAnswer: 2,
      explanation: 'PESQUISA DE ESPERMATOZOIDES: 1) VAGINA: até 24-72h (3 dias); 2) RETO: até 24h; 3) BOCA: até 6-12h (saliva degrada); 4) PELE: até 6h; 5) ROUPAS: semanas (preservadas). Coleta: swab vaginal, anal, oral, unhas (arranhões), pelos pubianos. Técnicas: microscopia (espermatozoides móveis/imóveis), fosfatase ácida prostática, PSA (antígeno prostático), DNA. Ausência de esperma NÃO exclui crime (azoospermia, preservativo, coito interrompido, ejaculação precoce fora).',
      difficulty: 'hard',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'sexologia-forense',
      question: 'Sobre o exame de vítima de estupro de vulnerável (menor de 14 anos), é CORRETO:',
      options: [
        'Não é necessário exame pericial se houver confissão',
        'Deve-se realizar exame de corpo de delito, mesmo que não haja sinais visíveis de violência',
        'Apenas o depoimento da vítima é suficiente',
        'O exame deve ser feito apenas se houver lesões',
        'O consentimento da vítima é suficiente para afastar o crime'
      ],
      correctAnswer: 1,
      explanation: 'ESTUPRO DE VULNERÁVEL (<14 anos - CP art. 217-A): SEMPRE deve haver EXAME DE CORPO DE DELITO, MESMO que sem sinais de violência física. Presunção ABSOLUTA de violência (STJ - Súmula 593: não importa consentimento ou experiência anterior). Exame busca: lesões (se houver), vestígios de conjunção carnal/ato libidinoso, esperma, DST, gravidez. Ausência de lesões é COMUM (não exclui crime). Protocolo específico: ambiente adequado, presença de responsável, profissional capacitado, evitar revitimização.',
      difficulty: 'medium',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'sexologia-forense',
      question: 'A reação de Teichmann (cristais de hemina) e Takayama (cristais de hemocromogênio) são utilizadas para:',
      options: [
        'Identificar esperma',
        'Confirmar presença de sangue',
        'Datar lesões',
        'Identificar drogas',
        'Determinar causa mortis'
      ],
      correctAnswer: 1,
      explanation: 'Reação de TEICHMANN (cristais de HEMINA) e TAKAYAMA (cristais de HEMOCROMOGÊNIO): testes CONFIRMATÓRIOS de SANGUE (cristaloscópicos). Sequência de exames: 1) PRESUNTIVOS: Kastle-Meyer/fenolftaleína, luminol (manchas invisíveis), Adler-Benzidina. 2) CONFIRMATÓRIOS: Teichmann, Takayama (confirmam que é sangue). 3) ESPÉCIE: precipitinas (humano vs animal). 4) TIPAGEM: grupos ABO, Rh, DNA. Não confundir com pesquisa de esperma (fosfatase ácida, microscopia).',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'sexologia-forense',
      question: 'O ato libidinoso diverso da conjunção carnal, para fins penais:',
      options: [
        'Não constitui estupro',
        'Equipara-se ao estupro desde a Lei 12.015/2009',
        'Tem pena menor que o estupro',
        'Apenas é crime se houver violência',
        'Não exige exame de corpo de delito'
      ],
      correctAnswer: 1,
      explanation: 'Lei 12.015/2009 UNIFICOU estupro: "constranger alguém, mediante violência/grave ameaça, a ter CONJUNÇÃO CARNAL ou praticar/permitir que se pratique OUTRO ATO LIBIDINOSO". Mesma pena: reclusão 6-10 anos. Antes: "atentado violento ao pudor" era crime separado. ATO LIBIDINOSO: qualquer ato de conotação sexual (sexo oral, anal, toques íntimos, masturbação, etc.). Exame de corpo de delito: OBRIGATÓRIO (mesmo sem lesões visíveis). Vestígios: saliva, esperma em regiões não genitais.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Sexologia Forense questions imported successfully!');
}

// ============= TOXICOLOGIA =============
export async function seedQuestionsToxicologia() {
  console.log('☠️ Importing Toxicologia questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'toxicologia',
      question: 'A dosagem de carboxihemoglobina é fundamental para diagnóstico de intoxicação por:',
      options: [
        'Cianeto',
        'Monóxido de carbono (CO)',
        'Organofosforados',
        'Metanol',
        'Cocaína'
      ],
      correctAnswer: 1,
      explanation: 'MONÓXIDO DE CARBONO (CO): gás tóxico, inodoro, incolor. Mecanismo: liga-se à hemoglobina (carboxihemoglobina - COHb), impedindo transporte de O₂. Fontes: incêndios, motores à combustão em ambiente fechado, aquecedores. Sinais: cefaleia, náuseas, tontura, coma, morte. Achado característico: livores cadavéricos ROSADOS (vermelho-cereja). Diagnóstico: dosagem de COHb no sangue. Níveis: <10% (fumantes), 10-30% (sintomas leves), 30-50% (graves), >50% (fatal). Também em vítimas de incêndio (inalação de fumaça).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'toxicologia',
      question: 'Nas intoxicações por organofosforados (agrotóxicos inibidores da colinesterase), encontra-se:',
      options: [
        'Midríase paralítica',
        'Síndrome anticolinérgica',
        'Síndrome colinérgica (miose, sialorreia, broncorreia, fasciculações)',
        'Convulsões apenas',
        'Ausência de sinais clínicos'
      ],
      correctAnswer: 2,
      explanation: 'ORGANOFOSFORADOS (Parathion, Malathion): inibem ACETILCOLINESTERASE → acúmulo de acetilcolina → SÍNDROME COLINÉRGICA. Sinais MUSCARÍNICOS: MIOSE (pupila contraída), SIALORREIA (salivação), BRONCORREIA (secreção brônquica), sudorese, lacrimejamento, vômitos, diarreia, bradicardia. Sinais NICOTÍNICOS: FASCICULAÇÕES musculares, fraqueza, paralisia. SNC: confusão, convulsões, coma. Diagnóstico: dosagem de colinesterase (diminuída). Tratamento: ATROPINA (antídoto), pralidoxima. Oposto: síndrome anticolinérgica (midríase, boca seca, taquicardia).',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'toxicologia',
      question: 'O teste de Reinsch é utilizado para pesquisa de:',
      options: [
        'Álcool etílico',
        'Metais pesados (arsênico, mercúrio, chumbo)',
        'Drogas psicotrópicas',
        'Monóxido de carbono',
        'Cianeto'
      ],
      correctAnswer: 1,
      explanation: 'Teste de REINSCH: método PRESUNTIVO para pesquisa de METAIS PESADOS (arsênico, mercúrio, antimônio, bismuto). Princípio: metais depositam-se em lâmina de COBRE aquecida em HCl. Positivo: mancha ESCURA/BRILHANTE na lâmina. Confirmatório: espectrometria, absorção atômica. ARSÊNICO: veneno clássico, "pó de sucessão", vômitos, diarreia, choque. MERCÚRIO: tremores, gengivite, alterações renais. CHUMBO (saturnismo): anemia, cólicas, neuropatia. Coleta: vísceras (fígado, rins), cabelos, unhas (intoxicação crônica).',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'toxicologia',
      question: 'A intoxicação alcoólica aguda pode ser avaliada através da dosagem de:',
      options: [
        'Apenas pelos sintomas clínicos',
        'Alcoolemia (concentração de álcool no sangue)',
        'Apenas pelo bafômetro',
        'Não há método objetivo',
        'Apenas exame de urina'
      ],
      correctAnswer: 1,
      explanation: 'ALCOOLEMIA: concentração de álcool etílico no SANGUE (padrão-ouro). Métodos: 1) SANGUE: cromatografia gasosa (Gold standard), enzimático. 2) AR EXPIRADO: bafômetro/etilômetro (estima alcoolemia). 3) URINA: menos precisa. CTB: infração: ≥0,04 dg/L (=0,2g/L no sangue); Crime: ≥0,3g/L sangue. Níveis: 0,2-0,5g/L (euforia), 0,5-1,5 (embriaguez), 1,5-3,0 (confusão), 3,0-5,0 (coma), >5,0 (morte). Curva de Widmark: eliminação média 0,15g/L/hora.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'toxicologia',
      question: 'Sobre a intoxicação por cocaína, é CORRETO afirmar:',
      options: [
        'Produz apenas efeitos depressores do SNC',
        'Causa midríase, taquicardia, hipertermia e agitação psicomotora',
        'Não tem risco de morte',
        'É facilmente detectável apenas no sangue após semanas',
        'Não deixa vestígios após 6 horas'
      ],
      correctAnswer: 1,
      explanation: 'COCAÍNA: alcaloide, estimulante do SNC, simpaticomimético. Efeitos: MIDRÍASE (pupila dilatada), TAQUICARDIA, hipertensão, HIPERTERMIA, AGITAÇÃO psicomotora, euforia, paranoia. Complicações: IAM (infarto), AVC, arritmias, convulsões, MORTE SÚBITA. Detecção: URINA (benzoilecgonina - metabólito): 2-4 dias; SANGUE: 24-48h; CABELO: meses. Achado PM: congestão visceral, edema cerebral/pulmonar. Crack: forma fumada (início rápido). Síndrome de abstinência: depressão, fadiga.',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Toxicologia questions imported successfully!');
}

// ============= ANTROPOLOGIA FORENSE =============
export async function seedQuestionsAntropologiaForense() {
  console.log('🦴 Importing Antropologia Forense questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'antropologia-forense',
      question: 'Para determinação do sexo em ossadas, a análise da pelve (bacia) é considerada o método mais confiável porque:',
      options: [
        'É o único osso que permite essa determinação',
        'Apresenta diferenças morfológicas marcantes entre homens e mulheres, adaptadas para gestação',
        'É sempre o osso mais preservado',
        'Não há diferenças entre pelve masculina e feminina',
        'Apenas crianças podem ter sexo determinado pela pelve'
      ],
      correctAnswer: 1,
      explanation: 'PELVE (bacia) - DIMORFISMO SEXUAL: melhor indicador de sexo (95% acurácia). FEMININA: mais larga, rasa; ÂNGULO SUBPÚBICO >90° (arredondado); forame obturador TRIANGULAR; incisura ciática maior AMPLA; sacro mais largo/curto. MASCULINA: estreita, profunda; ângulo subpúbico <90° (agudo); forame obturador OVAL; incisura ciática ESTREITA; sacro longo/estreito. Adaptação feminina: parto. Outros ossos úteis: CRÂNIO (glabela, processo mastoide, orbitas), fêmur, úmero (menos confiáveis).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'antropologia-forense',
      question: 'A estimativa da idade em esqueletos pode ser realizada através de:',
      options: [
        'Apenas pela estatura',
        'Análise das suturas cranianas, desgaste dentário, fusão epifisária',
        'Não é possível estimar idade em ossadas',
        'Apenas por DNA',
        'Somente pela pelve'
      ],
      correctAnswer: 1,
      explanation: 'ESTIMATIVA DE IDADE em ossos: 1) CRIANÇAS/ADOLESCENTES: fusão das EPÍFISES (cartilagens de crescimento - atlas de Greulich-Pyle), erupção DENTÁRIA, comprimento ossos longos. 2) ADULTOS: SUTURAS CRANIANAS (fecham progressivamente), desgaste DENTÁRIO, superfície sínfise púbica (método de Todd/Suchey-Brooks), extremidade esternal 4ª costela. 3) IDOSOS: osteoporose, osteófitos. Margem de erro aumenta com idade. Múltiplos métodos aumentam precisão.',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'antropologia-forense',
      question: 'A determinação da estatura em ossadas completas pode ser feita através de:',
      options: [
        'Apenas medindo a coluna vertebral',
        'Fórmulas de regressão linear utilizando comprimento de ossos longos (fêmur, tíbia, úmero)',
        'Não é possível determinar estatura',
        'Apenas pelo crânio',
        'Pesando os ossos'
      ],
      correctAnswer: 1,
      explanation: 'ESTATURA em esqueletos: 1) OSSADA COMPLETA: soma de todos os ossos + tecidos moles estimados. 2) OSSOS LONGOS: fórmulas de REGRESSÃO LINEAR (Trotter-Gleser, Carrea). Exemplo: estatura = 2,32 × comprimento do fêmur + 65,53 cm (varia por sexo e etnia). FÊMUR: mais confiável. Também: tíbia, úmero, rádio. 3) Considerar ANCESTRALIDADE (caucasiano, negroide, mongoloide - diferentes proporções). Margem de erro: ±3-5cm. Importante para identificação de desaparecidos.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'antropologia-forense',
      question: 'O índice cefálico, utilizado na antropologia forense, é calculado por:',
      options: [
        '(Largura do crânio / Comprimento do crânio) × 100',
        '(Comprimento do crânio / Largura do crânio) × 100',
        'Apenas pela largura do crânio',
        'Peso do crânio',
        'Não existe índice cefálico'
      ],
      correctAnswer: 0,
      explanation: 'ÍNDICE CEFÁLICO = (LARGURA máxima / COMPRIMENTO máximo do crânio) × 100. Classificação: DOLICOCÉFALO (<75 - alongado), MESOCÉFALO (75-80 - médio), BRAQUICÉFALO (>80 - arredondado). Varia por ETNIA/ANCESTRALIDADE. Outros índices: facial, nasal, orbitário. Reconstrução facial forense usa: espessura de tecidos moles por pontos craniométricos, software 3D, argila. Técnica de Manchester: 21-34 pontos. Útil quando não há suspeito (identidade desconhecida).',
      difficulty: 'hard',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'antropologia-forense',
      question: 'Na análise de ancestralidade (grupo étnico-racial) em esqueletos, são analisados principalmente:',
      options: [
        'Apenas os ossos longos',
        'Características do crânio (formato, abertura nasal, prognatismo)',
        'Somente a pelve',
        'Não é possível determinar ancestralidade',
        'Apenas por DNA'
      ],
      correctAnswer: 1,
      explanation: 'ANCESTRALIDADE em esqueletos - análise do CRÂNIO: 1) CAUCASOIDE (europeu): face estreita, abertura nasal ESTREITA, pouco prognatismo, órbitas angulares. 2) NEGROIDE (africano): face larga, abertura nasal AMPLA, PROGNATISMO (projeção maxilar), órbitas retangulares. 3) MONGOLOIDE (asiático/ameríndio): zigomas proeminentes, abertura nasal média, órbitas arredondadas. Também: formato do palato, dentes (incisivo em pá - mongólico). DNA mitocondrial/autossômico: mais preciso mas mais caro.',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Antropologia Forense questions imported successfully!');
}

// ============= DOCUMENTOS MÉDICO-LEGAIS =============
export async function seedQuestionsDocumentosMedicoLegais() {
  console.log('📋 Importing Documentos Médico-Legais questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'documentos-medico-legais',
      question: 'O atestado médico é um documento que:',
      options: [
        'Apenas médicos peritos oficiais podem emitir',
        'Pode ser fornecido por qualquer médico no exercício da profissão',
        'Não tem validade legal',
        'Apenas declara óbito',
        'Só pode ser emitido em hospitais'
      ],
      correctAnswer: 1,
      explanation: 'ATESTADO MÉDICO: documento emitido por QUALQUER MÉDICO (não apenas perito) no exercício da profissão. Finalidades: 1) Atestar estado de saúde/doença; 2) Justificar faltas; 3) Afastamento do trabalho; 4) Constatação de lesões. Código de Ética Médica: é DIREITO do paciente, médico NÃO pode recusar (salvo se não examinou). ATESTADO FALSO: crime (CP art. 302 - falsidade ideológica). Pode ser impugnado se duvidoso. Diferente de LAUDO/RELATÓRIO (mais detalhado).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'documentos-medico-legais',
      question: 'O laudo pericial difere do atestado porque:',
      options: [
        'São documentos idênticos',
        'Laudo é mais detalhado, técnico, responde quesitos, elaborado por perito oficial',
        'Laudo não tem valor legal',
        'Atestado é mais completo que laudo',
        'Apenas o laudo declara óbito'
      ],
      correctAnswer: 1,
      explanation: 'LAUDO PERICIAL: documento TÉCNICO, DETALHADO, elaborado por PERITO OFICIAL (médico legista, perito criminal). Estrutura: 1) PREÂMBULO (qualificação); 2) HISTÓRICO; 3) DESCRIÇÃO (achados do exame); 4) DISCUSSÃO; 5) CONCLUSÃO; 6) Resposta aos QUESITOS. Valor probatório ALTO (CPP art. 158: exame de corpo de delito). ATESTADO: mais simples, qualquer médico. RELATÓRIO: médio termo. Auto de exame cadavérico: laudo de necropsia.',
      difficulty: 'medium',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'documentos-medico-legais',
      question: 'A Declaração de Óbito (DO) deve ser preenchida:',
      options: [
        'Apenas por médicos legistas',
        'Por qualquer médico que atestou a morte ou que prestou assistência',
        'Somente em hospitais',
        'Apenas pelo delegado',
        'Não é obrigatória'
      ],
      correctAnswer: 1,
      explanation: 'DECLARAÇÃO DE ÓBITO (DO): documento OBRIGATÓRIO, padronizado (Ministério da Saúde), para REGISTRO de óbito. Emitida por: 1) Médico que ATESTOU a morte ou PRESTOU ASSISTÊNCIA (morte natural); 2) Médico do SVO (Serviço de Verificação de Óbitos - morte sem assistência); 3) Perito legista (morte violenta/suspeita - via IML). Partes: identificação, causas da morte (cadeia: causa imediata → intermediária → básica), tipo de morte (natural/violenta). SEM DO não há sepultamento legal.',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'documentos-medico-legais',
      question: 'No preenchimento da Declaração de Óbito, a causa mortis deve ser descrita:',
      options: [
        'De forma genérica (ex: "parada cardíaca")',
        'Com a sequência de eventos: causa imediata, intermediária e básica (fundamental)',
        'Não precisa especificar',
        'Apenas "morte natural" ou "morte violenta"',
        'Somente se for homicídio'
      ],
      correctAnswer: 1,
      explanation: 'CAUSA MORTIS na DO - CADEIA DE EVENTOS (parte I): 1) Linha A - CAUSA IMEDIATA (terminal): ex: choque hipovolêmico. 2) Linha B - CAUSA INTERMEDIÁRIA (complicação): ex: hemorragia interna. 3) Linha C - CAUSA BÁSICA/FUNDAMENTAL (doença/lesão inicial): ex: ferimento por arma de fogo. Parte II: outras condições contribuintes (não causais diretas). EVITAR termos vagos: "parada cardíaca" (sempre ocorre), "falência múltipla de órgãos" (sem especificar causa). Importante para estatísticas de saúde pública.',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'documentos-medico-legais',
      question: 'O prontuário médico:',
      options: [
        'Não tem valor legal',
        'É documento sigiloso, propriedade do paciente (conteúdo) e do médico/hospital (físico), com valor legal',
        'Pode ser descartado imediatamente após alta',
        'Não precisa ser bem preenchido',
        'Apenas hospitais públicos precisam manter'
      ],
      correctAnswer: 1,
      explanation: 'PRONTUÁRIO MÉDICO: documento SIGILOSO. Propriedade: FÍSICO (papel/digital) = hospital/clínica; CONTEÚDO (informações) = PACIENTE. Prazo mínimo: 20 ANOS (CFM Resolução 1.821/2007). Valor legal: ALTO (prova em processos - erro médico, perícia). Acesso: paciente (sempre), médico assistente, autoridades (com autorização judicial, MP). Deve conter: identificação, anamnese, exames, prescrições, evolução, assinatura/carimbo. "Se não está escrito, não foi feito".',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Documentos Médico-Legais questions imported successfully!');
}

// ============= IMPUTABILIDADE =============
export async function seedQuestionsImputabilidade() {
  console.log('⚖️ Importing Imputabilidade questions...');

  const questions: Question[] = [
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'imputabilidade',
      question: 'Segundo o Código Penal brasileiro, é INIMPUTÁVEL:',
      options: [
        'Quem pratica crime por embriaguez voluntária',
        'O menor de 18 anos',
        'Quem tem doença mental ao tempo do crime, inteiramente incapaz de entender o caráter ilícito ou determinar-se conforme esse entendimento',
        'As alternativas B e C',
        'Todas as alternativas'
      ],
      correctAnswer: 3,
      explanation: 'INIMPUTÁVEIS (CP art. 26 e 27): 1) MENOR de 18 anos (art. 27 - presunção ABSOLUTA, aplica-se ECA); 2) DOENTE MENTAL ou desenvolvimento mental INCOMPLETO/RETARDADO que, ao tempo da AÇÃO/OMISSÃO, era INTEIRAMENTE INCAPAZ de entender caráter ilícito ou de determinar-se segundo esse entendimento (art. 26, caput). Consequência: absolvição + medida de segurança (internação/tratamento). EMBRIAGUEZ VOLUNTÁRIA: NÃO exclui imputabilidade (actio libera in causa).',
      difficulty: 'medium',
      examBoard: 'CESPE',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'imputabilidade',
      question: 'A semi-imputabilidade (CP art. 26, parágrafo único) caracteriza-se quando o agente:',
      options: [
        'Era inteiramente incapaz de entender o ato',
        'Não era inteiramente capaz de entender o caráter ilícito ou de determinar-se',
        'É menor de 18 anos',
        'Estava em embriaguez completa',
        'Não se aplica no Brasil'
      ],
      correctAnswer: 1,
      explanation: 'SEMI-IMPUTABILIDADE (CP art. 26, parágrafo único): agente NÃO era INTEIRAMENTE capaz de entender caráter ilícito ou determinar-se (PARCIALMENTE incapaz). Consequências: 1) Pena REDUZIDA de 1/3 a 2/3; OU 2) Substituição por medida de segurança. Exemplos: transtornos de personalidade, retardo mental leve, dependência química. Difere de inimputabilidade (incapacidade TOTAL = absolvição). Avaliação: perícia psiquiátrica forense (incidente de insanidade mental).',
      difficulty: 'easy',
      examBoard: 'FCC',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'imputabilidade',
      question: 'A embriaguez completa, proveniente de caso fortuito ou força maior:',
      options: [
        'Não isenta de pena',
        'Isenta de pena se tornar o agente inteiramente incapaz (CP art. 28, § 1º)',
        'Sempre isenta de pena',
        'Agrava a pena',
        'É crime autônomo'
      ],
      correctAnswer: 1,
      explanation: 'EMBRIAGUEZ e imputabilidade (CP art. 28): 1) VOLUNTÁRIA ou CULPOSA: NÃO isenta (actio libera in causa - livre na causa). 2) Caso FORTUITO (acidental) ou FORÇA MAIOR (coagido): ISENTA de pena se tornou agente INTEIRAMENTE INCAPAZ. 3) PREORDENADA (para cometer crime): AGRAVA pena. 4) PATOLÓGICA (dependência): pode ser inimputabilidade/semi. Perícia: distinguir embriaguez (estado transitório) de alcoolismo crônico (doença). Embriaguez por álcool OU substância de efeitos análogos (drogas).',
      difficulty: 'hard',
      examBoard: 'VUNESP',
      year: 2024
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'imputabilidade',
      question: 'O incidente de insanidade mental pode ser instaurado:',
      options: [
        'Apenas durante o inquérito policial',
        'Durante inquérito, instrução criminal ou após sentença (na execução)',
        'Somente após condenação',
        'Não existe no processo penal brasileiro',
        'Apenas se o réu solicitar'
      ],
      correctAnswer: 1,
      explanation: 'INCIDENTE DE INSANIDADE MENTAL (CPP art. 149-152): procedimento para verificar inimputabilidade/semi-imputabilidade. Pode ser instaurado: 1) Durante INQUÉRITO; 2) Durante INSTRUÇÃO criminal; 3) Após CONDENAÇÃO (execução - superveniência de doença mental). Legitimados: de ofício (juiz), requerimento (MP, defesa, curador). SUSPENDE processo/prescrição. Perícia: 2 peritos oficiais, prazo 45 dias (prorrogável). Quesitos obrigatórios: doença mental? Época do crime? Capacidade de entender/determinar-se?',
      difficulty: 'medium',
      examBoard: 'FGV',
      year: 2023
    },
    {
      area: 'policial',
      subject: 'medicina-legal',
      topic: 'imputabilidade',
      question: 'A emoção e a paixão, segundo o Código Penal:',
      options: [
        'Excluem a imputabilidade',
        'Não excluem a imputabilidade (CP art. 28, I)',
        'Sempre reduzem a pena',
        'São causas de absolvição',
        'Equiparam-se à doença mental'
      ],
      correctAnswer: 1,
      explanation: 'EMOÇÃO e PAIXÃO: NÃO excluem imputabilidade (CP art. 28, I). São estados afetivos NORMAIS (não patológicos). Emoção: transitória, súbita. Paixão: duradoura, crônica. Podem atenuar pena (art. 65, III, "c" - sob domínio de violenta emoção, provocada por ato injusto). EXCEÇÃO: homicídio privilegiado (art. 121, § 1º - relevante valor moral/social, ou sob domínio de violenta emoção: pena reduzida). Diferente de: transtornos mentais patológicos (podem gerar inimputabilidade).',
      difficulty: 'easy',
      examBoard: 'CESPE',
      year: 2024
    }
  ];

  for (const question of questions) {
    await saveQuestion(question);
  }

  console.log('✅ Imputabilidade questions imported successfully!');
}

// ============= MASTER FUNCTION TO IMPORT ALL =============
export async function seedAllMedicinaLegalQuestions() {
  console.log('🚀 Starting Medicina Legal questions import...');

  try {
    await seedQuestionsTraumatologiaForense();
    await seedQuestionsTanatologia();
    await seedQuestionsLesoesCorporais();
    await seedQuestionsAsfixias();
    await seedQuestionsSexologiaForense();
    await seedQuestionsToxicologia();
    await seedQuestionsAntropologiaForense();
    await seedQuestionsDocumentosMedicoLegais();
    await seedQuestionsImputabilidade();

    console.log('✅ ALL MEDICINA LEGAL QUESTIONS IMPORTED! 🎯🩺');
    console.log('📊 Total: 45 questions across 9 topics');
  } catch (error) {
    console.error('❌ Error importing Medicina Legal questions:', error);
    throw error;
  }
}
