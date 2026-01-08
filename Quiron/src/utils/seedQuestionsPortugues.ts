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

const SUBJECT_SLUG = 'portugues';
const SUBJECT_ID = '21';

// ============================================================================
// TEMA 1: INTERPRETAÇÃO DE TEXTO (15 questões)
// ============================================================================

const interpretacaoTextoQuestions: Question[] = [
  {
    question: 'Leia o texto: "A educação é a arma mais poderosa que você pode usar para mudar o mundo." (Nelson Mandela). Com base no texto, é correto afirmar que:',
    options: [
      'A educação é um instrumento de violência.',
      'A educação tem potencial transformador da sociedade.',
      'Somente armas podem mudar o mundo.',
      'Mandela era contra a educação formal.'
    ],
    correctAnswer: 1,
    explanation: 'A metáfora "arma mais poderosa" evidencia o poder transformador da educação. O autor não fala de violência, mas de transformação social positiva através do conhecimento.',
    difficulty: 'easy',
    topic: 'Interpretação de Texto',
    examInfo: 'Questão baseada em CESPE/UnB - Interpretação de metáforas'
  },
  {
    question: '"O Brasil é um país de contrastes: riqueza e pobreza, modernidade e atraso convivem lado a lado." A ideia central do texto é:',
    options: [
      'O Brasil é apenas um país pobre.',
      'A modernidade predomina no Brasil.',
      'Existe desigualdade social e econômica no Brasil.',
      'Não há riqueza no Brasil.'
    ],
    correctAnswer: 2,
    explanation: 'A palavra "contrastes" e a enumeração de oposições (riqueza/pobreza, modernidade/atraso) indicam claramente a desigualdade presente no país.',
    difficulty: 'easy',
    topic: 'Interpretação de Texto',
    examInfo: 'FCC - Identificação de ideia central'
  },
  {
    question: '"Embora o governo tenha anunciado medidas econômicas, a população permanece desconfiada." O conectivo "embora" expressa:',
    options: [
      'Consequência',
      'Concessão',
      'Causa',
      'Finalidade'
    ],
    correctAnswer: 1,
    explanation: '"Embora" é uma conjunção concessiva, indicando que, apesar das medidas anunciadas, a desconfiança persiste. Introduz uma ideia contrária à expectativa.',
    difficulty: 'medium',
    topic: 'Interpretação de Texto',
    examInfo: 'CESPE - Interpretação de conectivos'
  },
  {
    question: 'No trecho "A tecnologia revolucionou a comunicação, TODAVIA trouxe novos desafios", o termo destacado pode ser substituído sem alteração de sentido por:',
    options: [
      'Portanto',
      'Porque',
      'Contudo',
      'Conforme'
    ],
    correctAnswer: 2,
    explanation: '"Todavia" e "contudo" são conjunções adversativas sinônimas, expressando ideia de oposição ou contraste entre as orações.',
    difficulty: 'medium',
    topic: 'Interpretação de Texto',
    examInfo: 'FGV - Substituição de conectivos'
  },
  {
    question: '"O aumento da violência urbana DECORRE da desigualdade social." Nessa frase, o termo destacado indica:',
    options: [
      'Consequência',
      'Causa',
      'Finalidade',
      'Condição'
    ],
    correctAnswer: 0,
    explanation: '"Decorre" significa "resulta de", "é consequência de". A violência é consequência (resultado) da desigualdade social.',
    difficulty: 'medium',
    topic: 'Interpretação de Texto',
    examInfo: 'VUNESP - Relações semânticas'
  },
  {
    question: 'Leia: "A leitura amplia horizontes, desenvolve o senso crítico e enriquece o vocabulário." Pode-se inferir do texto que:',
    options: [
      'Apenas o vocabulário é beneficiado pela leitura.',
      'A leitura traz múltiplos benefícios ao leitor.',
      'O senso crítico não depende da leitura.',
      'Horizontes são limites físicos.'
    ],
    correctAnswer: 1,
    explanation: 'O texto enumera três benefícios distintos da leitura, evidenciando seus múltiplos efeitos positivos. A construção com vírgulas indica adição de vantagens.',
    difficulty: 'easy',
    topic: 'Interpretação de Texto',
    examInfo: 'CESPE - Inferência textual'
  },
  {
    question: '"O silêncio das ruas vazias ecoava como um grito de alerta." Nesse fragmento, há:',
    options: [
      'Pleonasmo',
      'Paradoxo',
      'Eufemismo',
      'Hipérbole'
    ],
    correctAnswer: 1,
    explanation: 'Há paradoxo (ou antítese) na ideia de "silêncio" que "ecoa como grito". São conceitos opostos unidos para criar efeito expressivo.',
    difficulty: 'hard',
    topic: 'Interpretação de Texto',
    examInfo: 'FCC - Figuras de linguagem'
  },
  {
    question: '"A empresa VISA AO lucro" tem o mesmo sentido de:',
    options: [
      'A empresa olha o lucro.',
      'A empresa objetiva o lucro.',
      'A empresa aprova o lucro.',
      'A empresa carimbou o lucro.'
    ],
    correctAnswer: 1,
    explanation: '"Visar" no sentido de "objetivar", "ter como objetivo", exige preposição "a". Significa que a empresa busca/almeja o lucro.',
    difficulty: 'medium',
    topic: 'Interpretação de Texto',
    examInfo: 'FGV - Polissemia verbal'
  },
  {
    question: 'Em "O político MUDOU DE IDEIA após a reunião", a expressão destacada significa:',
    options: [
      'Trocou de pensamento',
      'Transferiu ideias para outro',
      'Melhorou o raciocínio',
      'Criou nova teoria'
    ],
    correctAnswer: 0,
    explanation: '"Mudar de ideia" é uma expressão idiomática que significa alterar opinião, pensamento ou decisão.',
    difficulty: 'easy',
    topic: 'Interpretação de Texto',
    examInfo: 'VUNESP - Expressões idiomáticas'
  },
  {
    question: '"Os dados CORROBORAM a hipótese inicial dos pesquisadores." O termo destacado significa:',
    options: [
      'Refutam',
      'Questionam',
      'Confirmam',
      'Ignoram'
    ],
    correctAnswer: 2,
    explanation: '"Corroborar" significa confirmar, reforçar, dar suporte a uma ideia ou hipótese. Os dados apoiam/confirmam a hipótese.',
    difficulty: 'hard',
    topic: 'Interpretação de Texto',
    examInfo: 'CESPE - Vocabulário técnico'
  },
  {
    question: '"Caso chova, o evento será adiado." A oração destacada expressa:',
    options: [
      'Certeza',
      'Condição',
      'Causa',
      'Consequência'
    ],
    correctAnswer: 1,
    explanation: 'A conjunção "caso" introduz oração subordinada adverbial condicional. O adiamento depende da condição de chover.',
    difficulty: 'medium',
    topic: 'Interpretação de Texto',
    examInfo: 'FCC - Orações subordinadas'
  },
  {
    question: 'No trecho "A mãe chamou o filho, MAS ele não respondeu", o conectivo indica:',
    options: [
      'Adição',
      'Alternância',
      'Oposição',
      'Explicação'
    ],
    correctAnswer: 2,
    explanation: '"Mas" é conjunção coordenativa adversativa, indicando oposição entre o ato de chamar e a falta de resposta.',
    difficulty: 'easy',
    topic: 'Interpretação de Texto',
    examInfo: 'VUNESP - Conjunções coordenativas'
  },
  {
    question: '"O professor EXPLANOU o conteúdo de forma clara." O termo destacado pode ser substituído por:',
    options: [
      'Escondeu',
      'Explicou',
      'Complicou',
      'Resumiu'
    ],
    correctAnswer: 1,
    explanation: '"Explanar" é sinônimo de explicar, expor de forma detalhada. Ambos indicam o ato de tornar algo compreensível.',
    difficulty: 'medium',
    topic: 'Interpretação de Texto',
    examInfo: 'FGV - Sinonímia'
  },
  {
    question: '"A medida foi IMPERIOSA diante da crise." O adjetivo destacado significa:',
    options: [
      'Desnecessária',
      'Opcional',
      'Urgente e necessária',
      'Autoritária'
    ],
    correctAnswer: 2,
    explanation: '"Imperioso/a" significa urgente, necessário, inadiável. Indica que a medida era essencial diante da situação de crise.',
    difficulty: 'hard',
    topic: 'Interpretação de Texto',
    examInfo: 'CESPE - Adjetivos cultos'
  },
  {
    question: 'Em "É MISTER que todos colaborem", o termo destacado equivale a:',
    options: [
      'É proibido',
      'É necessário',
      'É impossível',
      'É facultativo'
    ],
    correctAnswer: 1,
    explanation: '"Mister" (do latim ministerium) significa necessário, preciso, indispensável. É um termo de linguagem formal/culta.',
    difficulty: 'hard',
    topic: 'Interpretação de Texto',
    examInfo: 'FCC - Vocabulário erudito'
  }
];

// ============================================================================
// TEMA 2: GRAMÁTICA (15 questões)
// ============================================================================

const gramaticaQuestions: Question[] = [
  {
    question: 'Assinale a alternativa em que todas as palavras são formadas por DERIVAÇÃO SUFIXAL:',
    options: [
      'Felizmente, livraria, dentista',
      'Anoitecer, embora, planalto',
      'Infeliz, desleal, anormal',
      'Passatempo, guarda-chuva, beija-flor'
    ],
    correctAnswer: 0,
    explanation: 'Derivação sufixal ocorre com adição de sufixo: feliz+mente, livro+aria, dente+ista. As demais trazem prefixação ou composição.',
    difficulty: 'medium',
    topic: 'Gramática',
    examInfo: 'CESPE - Formação de palavras'
  },
  {
    question: 'Qual alternativa apresenta um substantivo SOBRECOMUM?',
    options: [
      'O colega / A colega',
      'O artista / A artista',
      'A criança (menino ou menina)',
      'O cônjuge / A cônjuge'
    ],
    correctAnswer: 2,
    explanation: 'Substantivo sobrecomum possui um só gênero gramatical para designar ambos os sexos. "A criança" serve para menino ou menina.',
    difficulty: 'medium',
    topic: 'Gramática',
    examInfo: 'FCC - Classificação de substantivos'
  },
  {
    question: 'Em "Aquele senhor é o PORTA-VOZ do governo", a palavra destacada é:',
    options: [
      'Substantivo composto invariável',
      'Substantivo simples',
      'Adjetivo composto',
      'Locução adjetiva'
    ],
    correctAnswer: 0,
    explanation: '"Porta-voz" é substantivo composto formado por verbo+substantivo. O plural correto é "porta-vozes" (só o segundo elemento varia).',
    difficulty: 'hard',
    topic: 'Gramática',
    examInfo: 'VUNESP - Substantivos compostos'
  },
  {
    question: 'Qual frase apresenta pronome demonstrativo?',
    options: [
      'Alguém bateu à porta.',
      'Este livro é meu.',
      'Eu preciso de você.',
      'Ninguém apareceu.'
    ],
    correctAnswer: 1,
    explanation: '"Este" é pronome demonstrativo (indica posição no espaço/tempo). "Alguém" e "ninguém" são indefinidos; "eu" e "você" são pessoais.',
    difficulty: 'easy',
    topic: 'Gramática',
    examInfo: 'FGV - Classificação de pronomes'
  },
  {
    question: 'O plural de "tabelião" e "cidadão" é:',
    options: [
      'Tabeliões, cidadões',
      'Tabeliães, cidadãos',
      'Tabeliões, cidadãos',
      'Tabeliães, cidadães'
    ],
    correctAnswer: 2,
    explanation: 'Palavras terminadas em -ião têm três plurais possíveis. "Tabelião" → tabeliões; "cidadão" → cidadãos. Deve-se memorizar cada caso.',
    difficulty: 'hard',
    topic: 'Gramática',
    examInfo: 'CESPE - Plural de substantivos'
  },
  {
    question: 'Identifique a classe gramatical de "MEIO" em "Ela está MEIO nervosa":',
    options: [
      'Adjetivo',
      'Substantivo',
      'Advérbio',
      'Numeral'
    ],
    correctAnswer: 2,
    explanation: '"Meio" modifica o adjetivo "nervosa", indicando intensidade (= um pouco). Nesse contexto, é advérbio e permanece invariável.',
    difficulty: 'medium',
    topic: 'Gramática',
    examInfo: 'FCC - Advérbio vs. Numeral'
  },
  {
    question: 'Em "É PROIBIDO entrada de animais", o adjetivo está correto porque:',
    options: [
      'Concorda com "animais"',
      'Concorda com "entrada"',
      'O sujeito não tem determinante',
      'Está no masculino por padrão'
    ],
    correctAnswer: 2,
    explanation: 'Quando o sujeito não tem determinante (artigo), a expressão fica invariável. Se fosse "É proibida A entrada", concordaria com "entrada".',
    difficulty: 'hard',
    topic: 'Gramática',
    examInfo: 'VUNESP - Concordância nominal especial'
  },
  {
    question: 'O superlativo absoluto sintético de "amável" é:',
    options: [
      'Amabilíssimo',
      'Muito amável',
      'Amabilésimo',
      'Amavelíssimo'
    ],
    correctAnswer: 0,
    explanation: 'O superlativo de "amável" é "amabilíssimo" (forma erudita do latim amabilis). "Muito amável" é superlativo analítico.',
    difficulty: 'hard',
    topic: 'Gramática',
    examInfo: 'FGV - Grau dos adjetivos'
  },
  {
    question: 'Qual frase contém LOCUÇÃO ADJETIVA?',
    options: [
      'Comprei um carro veloz.',
      'Ele mora em casa de madeira.',
      'João é muito inteligente.',
      'Correu rapidamente.'
    ],
    correctAnswer: 1,
    explanation: '"De madeira" é locução adjetiva (= madeireira), equivale a adjetivo. Modifica "casa" indicando característica/material.',
    difficulty: 'easy',
    topic: 'Gramática',
    examInfo: 'CESPE - Locuções'
  },
  {
    question: 'O feminino de "réu" é:',
    options: [
      'Réa',
      'Réu',
      'Ré',
      'Réia'
    ],
    correctAnswer: 2,
    explanation: 'O feminino de "réu" é "ré". Trata-se de substantivo biforme com mudança significativa na forma.',
    difficulty: 'medium',
    topic: 'Gramática',
    examInfo: 'FCC - Gênero dos substantivos'
  },
  {
    question: 'Em "Os livros QUE comprei são ótimos", o termo destacado é:',
    options: [
      'Pronome interrogativo',
      'Pronome relativo',
      'Conjunção integrante',
      'Advérbio'
    ],
    correctAnswer: 1,
    explanation: '"Que" retoma "livros" (antecedente) e introduz oração subordinada adjetiva. É pronome relativo equivalente a "os quais".',
    difficulty: 'medium',
    topic: 'Gramática',
    examInfo: 'VUNESP - Pronome relativo'
  },
  {
    question: 'O aumentativo de "povo" é:',
    options: [
      'Povoação',
      'Povão',
      'Povoado',
      'Popular'
    ],
    correctAnswer: 1,
    explanation: '"Povão" é o aumentativo de "povo" (povo+ão). "Povoação" e "povoado" são derivações com outros sentidos.',
    difficulty: 'easy',
    topic: 'Gramática',
    examInfo: 'FGV - Grau dos substantivos'
  },
  {
    question: 'Qual palavra apresenta dígrafo?',
    options: [
      'Táxi',
      'Campo',
      'Advogado',
      'Fixo'
    ],
    correctAnswer: 1,
    explanation: 'Em "campo", "am" forma dígrafo nasal (duas letras, um som). "Táxi" e "fixo" têm encontros consonantais; "advogado" idem.',
    difficulty: 'medium',
    topic: 'Gramática',
    examInfo: 'CESPE - Fonética'
  },
  {
    question: 'O verbo "haver" no sentido de "existir" é:',
    options: [
      'Pessoal e transitivo direto',
      'Impessoal e transitivo direto',
      'Pessoal e intransitivo',
      'Impessoal e intransitivo'
    ],
    correctAnswer: 1,
    explanation: '"Haver" (=existir) é impessoal (sem sujeito) e transitivo direto: "Há problemas" (problemas = objeto direto).',
    difficulty: 'hard',
    topic: 'Gramática',
    examInfo: 'FCC - Verbo haver'
  },
  {
    question: 'Em "Venho de longe", a expressão "de longe" funciona como:',
    options: [
      'Adjunto adnominal',
      'Complemento nominal',
      'Adjunto adverbial de lugar',
      'Objeto indireto'
    ],
    correctAnswer: 2,
    explanation: '"De longe" indica circunstância de lugar, modificando o verbo "venho". É adjunto adverbial de lugar.',
    difficulty: 'medium',
    topic: 'Gramática',
    examInfo: 'VUNESP - Termos acessórios'
  }
];

// ============================================================================
// TEMA 3: SINTAXE (15 questões)
// ============================================================================

const sintaxeQuestions: Question[] = [
  {
    question: 'Em "Faz dez anos que não o vejo", o sujeito é:',
    options: [
      'Dez anos',
      'Eu (oculto)',
      'Inexistente (oração sem sujeito)',
      'Indeterminado'
    ],
    correctAnswer: 2,
    explanation: 'O verbo "fazer" indicando tempo decorrido é impessoal (sem sujeito). Fica sempre na 3ª pessoa do singular.',
    difficulty: 'medium',
    topic: 'Sintaxe',
    examInfo: 'CESPE - Oração sem sujeito'
  },
  {
    question: '"Precisa-se de empregados." O sujeito dessa oração é:',
    options: [
      'Empregados',
      'Indeterminado',
      'Inexistente',
      'Oculto'
    ],
    correctAnswer: 1,
    explanation: 'VTI + SE = sujeito indeterminado. "Precisar" é VTI (quem precisa, precisa DE algo), logo "se" é índice de indeterminação do sujeito.',
    difficulty: 'hard',
    topic: 'Sintaxe',
    examInfo: 'FCC - Partícula SE'
  },
  {
    question: 'Em "O livro foi comprado por mim", temos voz:',
    options: [
      'Ativa',
      'Passiva analítica',
      'Passiva sintética',
      'Reflexiva'
    ],
    correctAnswer: 1,
    explanation: 'Voz passiva analítica: SER + PARTICÍPIO + agente da passiva (por mim). O sujeito paciente é "o livro".',
    difficulty: 'easy',
    topic: 'Sintaxe',
    examInfo: 'VUNESP - Vozes verbais'
  },
  {
    question: 'Qual oração NÃO possui complemento verbal?',
    options: [
      'Preciso de ajuda.',
      'Comprei um carro.',
      'O bebê chorou muito.',
      'Gosto de música.'
    ],
    correctAnswer: 2,
    explanation: '"Chorou" é verbo intransitivo. "Muito" é adjunto adverbial de intensidade, não complemento. As demais têm objeto (direto ou indireto).',
    difficulty: 'medium',
    topic: 'Sintaxe',
    examInfo: 'FGV - Predicação verbal'
  },
  {
    question: 'Em "Maria saiu apressada", o termo "apressada" é:',
    options: [
      'Adjunto adnominal',
      'Predicativo do sujeito',
      'Adjunto adverbial de modo',
      'Objeto direto'
    ],
    correctAnswer: 1,
    explanation: '"Apressada" caracteriza o sujeito "Maria" através de verbo de ligação aparente ("saiu" = estava). É predicativo do sujeito.',
    difficulty: 'hard',
    topic: 'Sintaxe',
    examInfo: 'CESPE - Predicativo'
  },
  {
    question: '"Assistimos ao filme." A função sintática de "ao filme" é:',
    options: [
      'Objeto direto',
      'Objeto indireto',
      'Adjunto adverbial',
      'Complemento nominal'
    ],
    correctAnswer: 1,
    explanation: '"Assistir" (no sentido de ver) é VTI, exige preposição "a". "Ao filme" é objeto indireto (quem assiste, assiste A algo).',
    difficulty: 'medium',
    topic: 'Sintaxe',
    examInfo: 'FCC - Objeto indireto'
  },
  {
    question: 'Identifique o APOSTO: "Machado de Assis, grande escritor brasileiro, nasceu no Rio."',
    options: [
      'Machado de Assis',
      'grande escritor brasileiro',
      'no Rio',
      'nasceu'
    ],
    correctAnswer: 1,
    explanation: '"Grande escritor brasileiro" é aposto explicativo, esclarece/explica quem é Machado de Assis. Fica entre vírgulas.',
    difficulty: 'easy',
    topic: 'Sintaxe',
    examInfo: 'VUNESP - Aposto'
  },
  {
    question: 'Em "A casa DE PEDRO é grande", o termo destacado é:',
    options: [
      'Complemento nominal',
      'Adjunto adnominal',
      'Objeto indireto',
      'Agente da passiva'
    ],
    correctAnswer: 1,
    explanation: '"De Pedro" se liga a substantivo concreto (casa) indicando posse. É adjunto adnominal. Complemento nominal liga-se a abstratos.',
    difficulty: 'hard',
    topic: 'Sintaxe',
    examInfo: 'FGV - Adjunto adnominal vs. Complemento nominal'
  },
  {
    question: '"Espero QUE você venha." A oração destacada é:',
    options: [
      'Subordinada substantiva objetiva direta',
      'Subordinada substantiva subjetiva',
      'Subordinada adjetiva restritiva',
      'Coordenada sindética'
    ],
    correctAnswer: 0,
    explanation: 'A oração "que você venha" funciona como objeto direto de "espero" (espero isso). É subordinada substantiva objetiva direta.',
    difficulty: 'medium',
    topic: 'Sintaxe',
    examInfo: 'CESPE - Orações subordinadas substantivas'
  },
  {
    question: 'O sujeito de "Chegou a encomenda" é:',
    options: [
      'Oculto',
      'Indeterminado',
      'A encomenda',
      'Inexistente'
    ],
    correctAnswer: 2,
    explanation: '"A encomenda" é sujeito simples. O verbo "chegar" é intransitivo. A ordem é inversa (verbo antes do sujeito).',
    difficulty: 'easy',
    topic: 'Sintaxe',
    examInfo: 'FCC - Ordem inversa'
  },
  {
    question: '"Venderam-se casas." O sujeito é:',
    options: [
      'Indeterminado',
      'Casas',
      'Inexistente',
      'Oculto: eles'
    ],
    correctAnswer: 1,
    explanation: 'VTD + SE = voz passiva sintética. "Casas" é sujeito paciente (casas foram vendidas). O verbo concorda: venderam-SE casas.',
    difficulty: 'hard',
    topic: 'Sintaxe',
    examInfo: 'VUNESP - Voz passiva sintética'
  },
  {
    question: 'Em "O aluno que estuda passa", a oração "que estuda" é:',
    options: [
      'Subordinada adjetiva restritiva',
      'Subordinada adjetiva explicativa',
      'Subordinada substantiva',
      'Coordenada'
    ],
    correctAnswer: 0,
    explanation: '"Que estuda" restringe "aluno" (só o aluno que estuda). É adjetiva restritiva (sem vírgulas). Se houvesse vírgulas, seria explicativa.',
    difficulty: 'medium',
    topic: 'Sintaxe',
    examInfo: 'FGV - Orações adjetivas'
  },
  {
    question: '"Saí PORQUE estava cansado." A oração destacada é:',
    options: [
      'Subordinada adverbial causal',
      'Subordinada adverbial consecutiva',
      'Coordenada explicativa',
      'Subordinada adverbial final'
    ],
    correctAnswer: 0,
    explanation: '"Porque estava cansado" indica causa da ação de sair. É subordinada adverbial causal. Expressa motivo.',
    difficulty: 'medium',
    topic: 'Sintaxe',
    examInfo: 'CESPE - Orações adverbiais'
  },
  {
    question: 'O predicado de "João é médico" classifica-se como:',
    options: [
      'Verbal',
      'Nominal',
      'Verbo-nominal',
      'Inexistente'
    ],
    correctAnswer: 1,
    explanation: 'Predicado nominal: verbo de ligação (ser) + predicativo (médico). O núcleo é o nome "médico", não o verbo.',
    difficulty: 'easy',
    topic: 'Sintaxe',
    examInfo: 'FCC - Tipos de predicado'
  },
  {
    question: 'Em "Há flores no jardim", o termo "flores" é:',
    options: [
      'Sujeito',
      'Objeto direto',
      'Predicativo',
      'Adjunto adverbial'
    ],
    correctAnswer: 1,
    explanation: '"Haver" (=existir) é impessoal (sem sujeito) e transitivo direto. "Flores" é objeto direto. Não confundir com "existe" (que tem sujeito).',
    difficulty: 'hard',
    topic: 'Sintaxe',
    examInfo: 'VUNESP - Verbo haver'
  }
];

// ============================================================================
// TEMA 4: MORFOLOGIA (15 questões)
// ============================================================================

const morfologiaQuestions: Question[] = [
  {
    question: 'Assinale a alternativa em que há PRONOME POSSESSIVO:',
    options: [
      'Este carro é lindo.',
      'Meu livro está na mesa.',
      'Aquilo é importante.',
      'Ninguém apareceu.'
    ],
    correctAnswer: 1,
    explanation: '"Meu" é pronome possessivo (indica posse). "Este" é demonstrativo; "aquilo" é demonstrativo; "ninguém" é indefinido.',
    difficulty: 'easy',
    topic: 'Morfologia',
    examInfo: 'FCC - Pronomes possessivos'
  },
  {
    question: 'Qual palavra é formada por DERIVAÇÃO PARASSINTÉTICA?',
    options: [
      'Infeliz',
      'Anoitecer',
      'Felizmente',
      'Guarda-chuva'
    ],
    correctAnswer: 1,
    explanation: 'Parassíntese: prefixo + radical + sufixo SIMULTANEAMENTE. A+noite+ecer (não existe "anoite" nem "noitecer" isoladamente).',
    difficulty: 'hard',
    topic: 'Morfologia',
    examInfo: 'CESPE - Processos de formação'
  },
  {
    question: 'O plural de "mal" (substantivo) é:',
    options: [
      'Maus',
      'Males',
      'Mals',
      'Maus'
    ],
    correctAnswer: 1,
    explanation: '"Mal" (substantivo) → males. Não confundir com "mau" (adjetivo) → maus.',
    difficulty: 'medium',
    topic: 'Morfologia',
    examInfo: 'FGV - Plural especial'
  },
  {
    question: 'Em "Respondeu MAL à pergunta", o termo destacado é:',
    options: [
      'Substantivo',
      'Adjetivo',
      'Advérbio',
      'Verbo'
    ],
    correctAnswer: 2,
    explanation: '"Mal" modifica o verbo "respondeu" (como respondeu? Mal). É advérbio de modo, oposto de "bem".',
    difficulty: 'medium',
    topic: 'Morfologia',
    examInfo: 'VUNESP - Mal vs. Mau'
  },
  {
    question: 'Qual palavra apresenta prefixo de negação?',
    options: [
      'Desconhecido',
      'Reescrever',
      'Prever',
      'Contraprova'
    ],
    correctAnswer: 0,
    explanation: '"Des-" é prefixo de negação/oposição. Re- indica repetição; pre- indica anterioridade; contra- indica oposição.',
    difficulty: 'easy',
    topic: 'Morfologia',
    examInfo: 'FCC - Prefixos'
  },
  {
    question: 'O aumentativo de "homem" é:',
    options: [
      'Homenzão',
      'Homenzinho',
      'Homemaço',
      'Homenzarrão'
    ],
    correctAnswer: 0,
    explanation: '"Homenzão" é o aumentativo mais comum de "homem". "Homenzarrão" também existe, mas é aumentativo duplo (mais intenso).',
    difficulty: 'easy',
    topic: 'Morfologia',
    examInfo: 'VUNESP - Grau aumentativo'
  },
  {
    question: 'Em "Comprei DOIS livros", a palavra destacada é:',
    options: [
      'Adjetivo',
      'Numeral cardinal',
      'Numeral ordinal',
      'Substantivo'
    ],
    correctAnswer: 1,
    explanation: '"Dois" indica quantidade exata. É numeral cardinal. Numerais ordinais indicam ordem (segundo, terceiro...).',
    difficulty: 'easy',
    topic: 'Morfologia',
    examInfo: 'FGV - Numerais'
  },
  {
    question: 'Qual palavra é um advérbio de AFIRMAÇÃO?',
    options: [
      'Talvez',
      'Certamente',
      'Não',
      'Onde'
    ],
    correctAnswer: 1,
    explanation: '"Certamente" é advérbio de afirmação. "Talvez" é de dúvida; "não" é de negação; "onde" é de lugar.',
    difficulty: 'easy',
    topic: 'Morfologia',
    examInfo: 'CESPE - Advérbios'
  },
  {
    question: 'O feminino de "cavalheiro" é:',
    options: [
      'Cavaleira',
      'Dama',
      'Cavalheira',
      'Senhora'
    ],
    correctAnswer: 1,
    explanation: '"Cavalheiro" tem feminino heterônimo: "dama". São palavras de radicais diferentes para cada gênero.',
    difficulty: 'hard',
    topic: 'Morfologia',
    examInfo: 'FCC - Heterônimos'
  },
  {
    question: 'Em "O João chegou", o artigo "O" funciona como:',
    options: [
      'Determinante obrigatório',
      'Recurso de ênfase/familiaridade',
      'Pronome demonstrativo',
      'Numeral'
    ],
    correctAnswer: 1,
    explanation: 'O artigo antes de nome próprio é facultativo e indica familiaridade, intimidade ou ênfase. É uso coloquial.',
    difficulty: 'medium',
    topic: 'Morfologia',
    examInfo: 'VUNESP - Artigo definido'
  },
  {
    question: 'Qual palavra possui sufixo formador de SUBSTANTIVO?',
    options: [
      'Beleza',
      'Belo',
      'Embelezar',
      'Belamente'
    ],
    correctAnswer: 0,
    explanation: '"Beleza" = bel(o) + eza. O sufixo "-eza" forma substantivo abstrato. "Belo" é adjetivo; "embelezar" é verbo; "belamente" é advérbio.',
    difficulty: 'medium',
    topic: 'Morfologia',
    examInfo: 'FGV - Sufixos nominais'
  },
  {
    question: 'O grau comparativo de superioridade de "bom" é:',
    options: [
      'Mais bom',
      'Melhor',
      'Ótimo',
      'Boníssimo'
    ],
    correctAnswer: 1,
    explanation: '"Bom" tem comparativo irregular: "melhor" (não "mais bom"). Outros: mau→pior, grande→maior, pequeno→menor.',
    difficulty: 'medium',
    topic: 'Morfologia',
    examInfo: 'CESPE - Grau comparativo'
  },
  {
    question: 'Em "Aquele senhor veio", o termo "veio" é:',
    options: [
      'Substantivo',
      'Adjetivo',
      'Verbo no pretérito perfeito',
      'Advérbio'
    ],
    correctAnswer: 2,
    explanation: '"Veio" é forma do verbo "vir" no pretérito perfeito do indicativo (3ª pessoa singular).',
    difficulty: 'easy',
    topic: 'Morfologia',
    examInfo: 'FCC - Conjugação verbal'
  },
  {
    question: 'Qual é o coletivo de "lobos"?',
    options: [
      'Manada',
      'Alcateia',
      'Cardume',
      'Matilha'
    ],
    correctAnswer: 1,
    explanation: '"Alcateia" é o coletivo de lobos. "Matilha" é de cães de caça; "manada" é de bois, búfalos; "cardume" é de peixes.',
    difficulty: 'medium',
    topic: 'Morfologia',
    examInfo: 'VUNESP - Substantivos coletivos'
  },
  {
    question: 'Em "Ele TROUXE o livro", o verbo está no:',
    options: [
      'Presente do indicativo',
      'Pretérito perfeito do indicativo',
      'Futuro do presente',
      'Pretérito imperfeito'
    ],
    correctAnswer: 1,
    explanation: '"Trouxe" é forma do verbo "trazer" no pretérito perfeito do indicativo (ação concluída no passado).',
    difficulty: 'easy',
    topic: 'Morfologia',
    examInfo: 'FGV - Tempos verbais'
  }
];

// ============================================================================
// TEMA 5: ORTOGRAFIA E ACENTUAÇÃO (15 questões)
// ============================================================================

const ortografiaAcentuacaoQuestions: Question[] = [
  {
    question: 'Qual palavra está CORRETA?',
    options: [
      'Excessão',
      'Exceção',
      'Esceção',
      'Exceçao'
    ],
    correctAnswer: 1,
    explanation: 'A grafia correta é "exceção" (com ç). Vem do latim "exceptio". Comum confundir com "excesso".',
    difficulty: 'easy',
    topic: 'Ortografia e Acentuação',
    examInfo: 'CESPE - Ortografia ç/ss'
  },
  {
    question: 'Assinale a alternativa em que todas as palavras estão ACENTUADAS CORRETAMENTE:',
    options: [
      'Saúde, conteúdo, graúdo',
      'Amazônia, história, glória',
      'Juíz, raíz, país',
      'Hífem, pólen, elétron'
    ],
    correctAnswer: 1,
    explanation: 'Amazônia (paroxítona -ia), história e glória (paroxítonas -ia). Erros: graúdo→graúdo (sem acento), juíz→juiz, raíz→raiz, hífem→hífen.',
    difficulty: 'hard',
    topic: 'Ortografia e Acentuação',
    examInfo: 'FCC - Acentuação gráfica'
  },
  {
    question: 'Qual palavra NÃO recebe acento pela nova ortografia?',
    options: [
      'Assembléia',
      'Herói',
      'Médico',
      'Café'
    ],
    correctAnswer: 0,
    explanation: 'Pela nova ortografia, ditongos abertos "éi" e "ói" em paroxítonas perderam o acento: assembleia, ideia, heroico.',
    difficulty: 'medium',
    topic: 'Ortografia e Acentuação',
    examInfo: 'VUNESP - Novo Acordo Ortográfico'
  },
  {
    question: 'Por que "língua" é acentuada?',
    options: [
      'Oxítona terminada em "a"',
      'Paroxítona terminada em ditongo',
      'Proparoxítona',
      'Hiato'
    ],
    correctAnswer: 1,
    explanation: '"Língua" é paroxítona terminada em ditongo crescente "-ua". Todas as paroxítonas terminadas em ditongo são acentuadas.',
    difficulty: 'hard',
    topic: 'Ortografia e Acentuação',
    examInfo: 'FGV - Regras de acentuação'
  },
  {
    question: 'Qual palavra está INCORRETA?',
    options: [
      'Recriar (criar novamente)',
      'Recrear (divertir)',
      'Re-criar',
      'Todas estão corretas'
    ],
    correctAnswer: 2,
    explanation: 'Pelo Novo Acordo, não se usa mais hífen quando o prefixo termina em vogal diferente da que inicia o segundo elemento: recriar.',
    difficulty: 'medium',
    topic: 'Ortografia e Acentuação',
    examInfo: 'CESPE - Uso do hífen'
  },
  {
    question: 'Assinale a alternativa CORRETA quanto ao uso de "s" ou "z":',
    options: [
      'Pesquisar, análize, paralizar',
      'Analisar, pesquizar, paralisar',
      'Analisar, pesquisar, paralisar',
      'Analizar, pesquisar, paralisar'
    ],
    correctAnswer: 2,
    explanation: 'Verbos derivados de substantivos com "s": análise→analisar, pesquisa→pesquisar, paralisia→paralisar. Mantém-se a letra "s".',
    difficulty: 'medium',
    topic: 'Ortografia e Acentuação',
    examInfo: 'FCC - Uso de S/Z'
  },
  {
    question: 'Por que "vôo" perdeu o acento circunflexo?',
    options: [
      'Virou monossílabo',
      'É paroxítona terminada em "o"',
      'Novo Acordo eliminou acento em "oo" e "ee"',
      'Passou a ser oxítona'
    ],
    correctAnswer: 2,
    explanation: 'O Novo Acordo eliminou o acento circunflexo nos hiatos "oo" e "ee": voo, leem, creem, veem.',
    difficulty: 'easy',
    topic: 'Ortografia e Acentuação',
    examInfo: 'VUNESP - Mudanças ortográficas'
  },
  {
    question: 'Qual palavra está grafada CORRETAMENTE?',
    options: [
      'Ancioso',
      'Ansioso',
      'Ançioso',
      'Anscioso'
    ],
    correctAnswer: 1,
    explanation: 'A forma correta é "ansioso" (com "s"). Vem de "ânsia", que também se grafa com "s".',
    difficulty: 'easy',
    topic: 'Ortografia e Acentuação',
    examInfo: 'FGV - Ortografia S/C/Ç'
  },
  {
    question: 'Por que "saúde" é acentuada?',
    options: [
      'Paroxítona terminada em "e"',
      'Hiato com "u" tônico',
      'Oxítona',
      'Proparoxítona'
    ],
    correctAnswer: 1,
    explanation: '"Saúde" tem hiato (sa-ú-de) com "u" tônico sozinho na sílaba, seguido de "de". É regra de acentuação de hiatos.',
    difficulty: 'hard',
    topic: 'Ortografia e Acentuação',
    examInfo: 'CESPE - Acentuação de hiatos'
  },
  {
    question: 'Assinale a alternativa com a grafia CORRETA:',
    options: [
      'Auto-estrada',
      'Autoestrada',
      'Auto estrada',
      'Áuto-estrada'
    ],
    correctAnswer: 1,
    explanation: 'Novo Acordo: prefixo terminado em vogal + palavra iniciada por vogal diferente = sem hífen: autoestrada, autoescola.',
    difficulty: 'medium',
    topic: 'Ortografia e Acentuação',
    examInfo: 'FCC - Hífen com prefixos'
  },
  {
    question: 'Qual palavra tem DÍGRAFO?',
    options: [
      'Passo',
      'Trator',
      'Advogado',
      'Fixo'
    ],
    correctAnswer: 0,
    explanation: '"Passo" tem dígrafo "ss" (duas letras, um som). "Trator", "advogado" e "fixo" têm encontros consonantais (sons distintos).',
    difficulty: 'medium',
    topic: 'Ortografia e Acentuação',
    examInfo: 'VUNESP - Dígrafos'
  },
  {
    question: 'Por que "também" é acentuada?',
    options: [
      'Proparoxítona',
      'Paroxítona terminada em "em"',
      'Oxítona terminada em "em"',
      'Hiato'
    ],
    correctAnswer: 2,
    explanation: '"Também" (tam-bém) é oxítona terminada em "em". Oxítonas terminadas em a(s), e(s), o(s), em/ens são acentuadas.',
    difficulty: 'easy',
    topic: 'Ortografia e Acentuação',
    examInfo: 'FGV - Acentuação de oxítonas'
  },
  {
    question: 'Qual palavra está INCORRETA?',
    options: [
      'Anti-higiênico',
      'Antirrugas',
      'Anti-inflacionário',
      'Antissocial'
    ],
    correctAnswer: 0,
    explanation: 'Novo Acordo: prefixo anti + palavra com "h" = perde hífen e o "h": anti-higiênico → anti-higiênico (incorreto). Correto: anti + i = antirrugas dobra o "r".',
    difficulty: 'hard',
    topic: 'Ortografia e Acentuação',
    examInfo: 'CESPE - Hífen complexo'
  },
  {
    question: 'Por que "fácil" é acentuada?',
    options: [
      'Oxítona terminada em "l"',
      'Paroxítona terminada em "l"',
      'Proparoxítona',
      'Monossílabo tônico'
    ],
    correctAnswer: 1,
    explanation: '"Fácil" (fá-cil) é paroxítona terminada em "l". Paroxítonas terminadas em l, n, r, x, i(s), us, ão(s), ã(s), um, ditongo são acentuadas.',
    difficulty: 'medium',
    topic: 'Ortografia e Acentuação',
    examInfo: 'FCC - Paroxítonas'
  },
  {
    question: 'Assinale a alternativa com todas as palavras CORRETAS:',
    options: [
      'Jiló, através, pêra (fruta)',
      'Viúva, conteúdo, país',
      'Bônus, vírus, Vênus',
      'Heroíco, assembléia, jibóia'
    ],
    correctAnswer: 1,
    explanation: 'Viúva (hiato), conteúdo (hiato), país (oxítona) estão corretas. Erros: pêra perdeu acento, heroíco→heroico, assembléia→assembleia.',
    difficulty: 'hard',
    topic: 'Ortografia e Acentuação',
    examInfo: 'VUNESP - Revisão geral'
  }
];

// ============================================================================
// TEMA 6: PONTUAÇÃO (15 questões)
// ============================================================================

const pontuacaoQuestions: Question[] = [
  {
    question: 'Qual frase está CORRETAMENTE pontuada?',
    options: [
      'Maria comprou: pães, leite, café.',
      'Maria comprou pães, leite, café.',
      'Maria, comprou pães leite café.',
      'Maria comprou; pães leite café.'
    ],
    correctAnswer: 1,
    explanation: 'Enumera-se com vírgulas, sem dois pontos após verbo. Dois pontos aparecem antes de enumeração, mas não após o verbo diretamente.',
    difficulty: 'easy',
    topic: 'Pontuação',
    examInfo: 'CESPE - Vírgula em enumeração'
  },
  {
    question: 'Em "Os alunos, que estudaram, passaram", as vírgulas indicam:',
    options: [
      'Todos os alunos passaram',
      'Só os alunos que estudaram passaram',
      'Nenhum aluno passou',
      'O verbo estudar é opcional'
    ],
    correctAnswer: 0,
    explanation: 'Vírgulas isolam oração adjetiva EXPLICATIVA (todos os alunos estudaram e passaram). Sem vírgulas seria restritiva (só os que estudaram).',
    difficulty: 'hard',
    topic: 'Pontuação',
    examInfo: 'FCC - Vírgula em orações adjetivas'
  },
  {
    question: 'Qual frase apresenta ERRO de pontuação?',
    options: [
      'João, venha aqui.',
      'Sim, eu concordo.',
      'O Brasil que, é um país tropical, tem clima quente.',
      'Maria, minha amiga, chegou.'
    ],
    correctAnswer: 2,
    explanation: 'Erro: vírgula separando sujeito de verbo incorretamente. Correto seria: "O Brasil, que é um país tropical, tem clima quente" (sem vírgula após "que").',
    difficulty: 'medium',
    topic: 'Pontuação',
    examInfo: 'VUNESP - Erros de vírgula'
  },
  {
    question: 'Os dois pontos em "Ele disse: \'Vou embora\'" indicam:',
    options: [
      'Enumeração',
      'Explicação',
      'Citação/discurso direto',
      'Conclusão'
    ],
    correctAnswer: 2,
    explanation: 'Dois pontos introduzem discurso direto (fala). Também podem introduzir enumeração, explicação ou esclarecimento.',
    difficulty: 'easy',
    topic: 'Pontuação',
    examInfo: 'FGV - Uso de dois pontos'
  },
  {
    question: 'Assinale a alternativa CORRETA quanto ao uso da vírgula:',
    options: [
      'O livro, está na mesa.',
      'O livro que comprei, está na mesa.',
      'O livro que comprei está na mesa.',
      'O livro, que comprei está na mesa.'
    ],
    correctAnswer: 2,
    explanation: 'Sem vírgulas: oração adjetiva restritiva (só o livro que comprei). Não se separa sujeito de verbo com vírgula.',
    difficulty: 'medium',
    topic: 'Pontuação',
    examInfo: 'CESPE - Vírgula proibida'
  },
  {
    question: 'Em "Choveu muito; as ruas alagaram", o ponto e vírgula pode ser substituído por:',
    options: [
      'Vírgula',
      'Ponto final ou vírgula + conjunção',
      'Dois pontos',
      'Não pode ser substituído'
    ],
    correctAnswer: 1,
    explanation: 'Ponto e vírgula separa orações independentes relacionadas. Pode ser substituído por ponto final ou vírgula + conjunção (e, mas, portanto).',
    difficulty: 'hard',
    topic: 'Pontuação',
    examInfo: 'FCC - Ponto e vírgula'
  },
  {
    question: 'A vírgula é OBRIGATÓRIA em:',
    options: [
      'Maria e João viajaram.',
      'Na semana passada choveu muito.',
      'O menino comeu bolo.',
      'Estudei e passei.'
    ],
    correctAnswer: 1,
    explanation: 'Adjunto adverbial deslocado (início da frase) deve ser separado por vírgula: "Na semana passada, choveu muito."',
    difficulty: 'medium',
    topic: 'Pontuação',
    examInfo: 'VUNESP - Vírgula obrigatória'
  },
  {
    question: 'Qual frase está INCORRETA?',
    options: [
      'Espero, sinceramente, que você venha.',
      'O diretor, após a reunião, decidiu.',
      'As crianças, brincavam no parque.',
      'Pedro, o mais velho, saiu.'
    ],
    correctAnswer: 2,
    explanation: 'Erro: vírgula entre sujeito "as crianças" e verbo "brincavam". Nunca se separa sujeito de verbo com vírgula isolada.',
    difficulty: 'easy',
    topic: 'Pontuação',
    examInfo: 'FGV - Vírgula entre sujeito e verbo'
  },
  {
    question: 'Em "Estudou muito, mas não passou", a vírgula antes de "mas" é:',
    options: [
      'Proibida',
      'Opcional',
      'Obrigatória',
      'Erro grave'
    ],
    correctAnswer: 2,
    explanation: 'A vírgula é obrigatória antes de conjunções adversativas (mas, porém, contudo, todavia) que ligam orações.',
    difficulty: 'easy',
    topic: 'Pontuação',
    examInfo: 'CESPE - Vírgula antes de conjunção'
  },
  {
    question: 'As aspas são usadas para:',
    options: [
      'Separar orações',
      'Indicar citação, ironia ou destaque',
      'Substituir vírgulas',
      'Terminar frases'
    ],
    correctAnswer: 1,
    explanation: 'Aspas marcam citações diretas, palavras estrangeiras, gírias, ironia ou termos que se quer destacar.',
    difficulty: 'easy',
    topic: 'Pontuação',
    examInfo: 'FCC - Uso de aspas'
  },
  {
    question: 'Qual pontuação está CORRETA após vocativo?',
    options: [
      'João; venha aqui.',
      'João. Venha aqui.',
      'João, venha aqui.',
      'João: venha aqui.'
    ],
    correctAnswer: 2,
    explanation: 'Vocativo (chamamento) é sempre separado por vírgula: "João, venha aqui" ou "Venha aqui, João".',
    difficulty: 'easy',
    topic: 'Pontuação',
    examInfo: 'VUNESP - Pontuação de vocativo'
  },
  {
    question: 'Os parênteses são usados para:',
    options: [
      'Separar orações coordenadas',
      'Inserir explicações ou informações adicionais',
      'Iniciar diálogos',
      'Substituir o ponto final'
    ],
    correctAnswer: 1,
    explanation: 'Parênteses isolam explicações, datas, siglas ou informações complementares que podem ser suprimidas sem prejuízo ao sentido.',
    difficulty: 'easy',
    topic: 'Pontuação',
    examInfo: 'FGV - Uso de parênteses'
  },
  {
    question: 'Em "Comprei frutas: maçã, pera e uva", os dois pontos indicam:',
    options: [
      'Oposição',
      'Enumeração',
      'Dúvida',
      'Negação'
    ],
    correctAnswer: 1,
    explanation: 'Dois pontos introduzem enumeração dos tipos de frutas compradas. Anunciam elementos que serão citados.',
    difficulty: 'easy',
    topic: 'Pontuação',
    examInfo: 'CESPE - Dois pontos enumerativos'
  },
  {
    question: 'O travessão pode ser usado para:',
    options: [
      'Indicar mudança de interlocutor em diálogo',
      'Substituir parênteses ou vírgulas duplas',
      'Marcar discurso direto',
      'Todas as alternativas'
    ],
    correctAnswer: 3,
    explanation: 'O travessão tem múltiplos usos: marca fala em diálogos, substitui parênteses/vírgulas para intercalações e destaca elementos.',
    difficulty: 'medium',
    topic: 'Pontuação',
    examInfo: 'FCC - Uso do travessão'
  },
  {
    question: 'Qual frase apresenta pontuação CORRETA?',
    options: [
      'Ele perguntou: você vem?',
      'Ele perguntou: "Você vem?"',
      'Ele perguntou, "você vem"?',
      'Ele perguntou "você vem."'
    ],
    correctAnswer: 1,
    explanation: 'Discurso direto: dois pontos + aspas + letra maiúscula + pontuação dentro das aspas: Ele perguntou: "Você vem?"',
    difficulty: 'medium',
    topic: 'Pontuação',
    examInfo: 'VUNESP - Pontuação em discurso direto'
  }
];

// ============================================================================
// TEMA 7: CONCORDÂNCIA VERBAL E NOMINAL (15 questões)
// ============================================================================

const concordanciaQuestions: Question[] = [
  {
    question: 'Assinale a alternativa com CONCORDÂNCIA CORRETA:',
    options: [
      'Haviam muitas pessoas na festa.',
      'Havia muitas pessoas na festa.',
      'Houveram muitas pessoas na festa.',
      'Haviam muita pessoa na festa.'
    ],
    correctAnswer: 1,
    explanation: 'O verbo "haver" no sentido de "existir" é impessoal (sem sujeito) e fica sempre no singular: "Havia muitas pessoas".',
    difficulty: 'easy',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'CESPE - Verbo haver'
  },
  {
    question: 'Complete: "_____ dez anos que não o vejo."',
    options: [
      'Faz',
      'Fazem',
      'Tem',
      'Completam'
    ],
    correctAnswer: 0,
    explanation: '"Fazer" indicando tempo decorrido é impessoal, fica no singular: "Faz dez anos". Não confundir com tempo cronológico.',
    difficulty: 'medium',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'FCC - Verbo fazer temporal'
  },
  {
    question: 'Qual frase está CORRETA?',
    options: [
      'Os Estados Unidos é poderoso.',
      'Os Estados Unidos são poderosos.',
      'Minas Gerais fica no Sudeste.',
      'B e C estão corretas'
    ],
    correctAnswer: 3,
    explanation: 'Nomes próprios plurais COM artigo: verbo no plural (Os EUA são). SEM artigo: singular (Minas Gerais fica). Ambas corretas.',
    difficulty: 'hard',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'VUNESP - Nomes próprios plurais'
  },
  {
    question: '"A maioria dos alunos ______ ." A concordância pode ser:',
    options: [
      'Apenas: passou',
      'Apenas: passaram',
      'Passou ou passaram (facultativa)',
      'Nenhuma está correta'
    ],
    correctAnswer: 2,
    explanation: 'Com expressões partitivas (maioria de, parte de), a concordância é facultativa: com o coletivo (maioria=passou) ou com o plural (alunos=passaram).',
    difficulty: 'hard',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'FGV - Concordância facultativa'
  },
  {
    question: 'Complete: "_____ dois quilômetros daqui até lá."',
    options: [
      'Existe',
      'Existem',
      'Há',
      'Fazem'
    ],
    correctAnswer: 1,
    explanation: '"Existir" TEM sujeito, concorda: "Existem dois quilômetros". "Haver" (impessoal) seria "Há dois quilômetros".',
    difficulty: 'medium',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'CESPE - Haver vs. Existir'
  },
  {
    question: '"Qual de nós _____?" A forma CORRETA é:',
    options: [
      'Viajaremos',
      'Viajará',
      'Ambas estão corretas',
      'Viajarão'
    ],
    correctAnswer: 2,
    explanation: 'Com pronomes interrogativos/indefinidos + "de nós/vós": concordância facultativa (qual=viajará) ou (nós=viajaremos).',
    difficulty: 'hard',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'FCC - Pronomes interrogativos'
  },
  {
    question: '"Vendem-se casas" está correto porque:',
    options: [
      'VTI + SE = sujeito indeterminado',
      'VTD + SE = voz passiva, sujeito "casas"',
      'O verbo está no plural por concordar com SE',
      'É locução verbal'
    ],
    correctAnswer: 1,
    explanation: 'VTD + SE = voz passiva sintética. "Casas" é sujeito paciente (casas são vendidas), verbo concorda: vendem-SE.',
    difficulty: 'hard',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'VUNESP - Partícula SE'
  },
  {
    question: 'Complete: "É proibido _____ de animais."',
    options: [
      'entrada',
      'a entrada',
      'Ambas estão corretas',
      'entradas'
    ],
    correctAnswer: 2,
    explanation: 'SEM artigo: "É proibido entrada" (invariável). COM artigo: "É proibida A entrada" (concorda). Ambas corretas.',
    difficulty: 'medium',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'FGV - Expressões invariáveis'
  },
  {
    question: '"Mais de um aluno _____." A forma correta é:',
    options: [
      'Faltou',
      'Faltaram',
      'Faltaria',
      'Faltariam'
    ],
    correctAnswer: 0,
    explanation: '"Mais de um" leva verbo ao SINGULAR: "Mais de um aluno faltou" (concorda com "um"). Exceção: se houver reciprocidade, plural.',
    difficulty: 'medium',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'CESPE - Expressões numéricas'
  },
  {
    question: 'Qual concordância nominal está CORRETA?',
    options: [
      'Ela mesmo fez.',
      'Ela mesma fez.',
      'Meio nervosas, as meninas saíram.',
      'Bastantes aluna faltou.'
    ],
    correctAnswer: 1,
    explanation: '"Mesmo" (=próprio) é variável: ela mesma. "Meio" (=um pouco) é invariável: meio nervosas. "Bastante" (=suficiente) varia: bastantes alunas.',
    difficulty: 'medium',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'FCC - Concordância de "mesmo" e "meio"'
  },
  {
    question: '"Tu e ele _____." Complete corretamente:',
    options: [
      'Viajastes',
      'Viajaram',
      'Viajastes',
      'Viajareis'
    ],
    correctAnswer: 1,
    explanation: 'Sujeitos de pessoas diferentes: verbo na pessoa de menor número (tu=2ª, ele=3ª → 1ª pessoa do plural prevale... MAS "tu+ele" = vós ou "vocês" (viajaram/viajareis).',
    difficulty: 'hard',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'VUNESP - Concordância com pessoas diferentes'
  },
  {
    question: '"João ou Pedro será eleito." O verbo está no singular porque:',
    options: [
      'Só um será eleito (ideia de exclusão)',
      'João é o sujeito principal',
      'Está incorreto, deveria ser "serão"',
      'É erro de concordância'
    ],
    correctAnswer: 0,
    explanation: 'Com "ou" excludente (só um dos dois), verbo no singular. Se fosse inclusivo (ambos), plural: "João ou Pedro serão convocados".',
    difficulty: 'hard',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'FGV - Concordância com "ou"'
  },
  {
    question: 'Complete: "_____ seis horas no relógio."',
    options: [
      'É',
      'São',
      'Está',
      'Estão'
    ],
    correctAnswer: 1,
    explanation: 'Com horas, o verbo "ser" concorda com o número: "São seis horas". "É uma hora" (singular).',
    difficulty: 'easy',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'CESPE - Concordância com horas'
  },
  {
    question: '"Segue anexo as notas fiscais." A concordância correta é:',
    options: [
      'Segue anexo as notas fiscais.',
      'Seguem anexas as notas fiscais.',
      'Segue anexas as notas fiscais.',
      'Seguem anexo as notas fiscais.'
    ],
    correctAnswer: 1,
    explanation: '"Anexo" e o verbo concordam com o substantivo: "Seguem anexas AS notas" (plural feminino). "Anexo" é adjetivo variável.',
    difficulty: 'medium',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'FCC - Concordância de "anexo"'
  },
  {
    question: '"Tratam-se de questões complexas" está:',
    options: [
      'Correto',
      'Incorreto: "Trata-se de questões complexas"',
      'Correto se houver contexto',
      'Depende da norma regional'
    ],
    correctAnswer: 1,
    explanation: '"Tratar-se de" é VTI + SE, forma sujeito indeterminado. Fica sempre no singular: "Trata-se de questões complexas".',
    difficulty: 'hard',
    topic: 'Concordância Verbal e Nominal',
    examInfo: 'VUNESP - Verbo tratar-se'
  }
];

// ============================================================================
// TEMA 8: REGÊNCIA VERBAL E NOMINAL (15 questões)
// ============================================================================

const regenciaQuestions: Question[] = [
  {
    question: 'A regência está CORRETA em:',
    options: [
      'Assisti o filme.',
      'Assisti ao filme.',
      'Assistimos o filme.',
      'Assisti um filme.'
    ],
    correctAnswer: 1,
    explanation: '"Assistir" no sentido de "ver" é VTI, exige preposição "a": assistir AO filme. No sentido de "ajudar", é VTD: assistir alguém.',
    difficulty: 'easy',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'CESPE - Regência de assistir'
  },
  {
    question: '"Prefiro cinema _____ teatro." Complete:',
    options: [
      'do que',
      'que',
      'a',
      'de'
    ],
    correctAnswer: 2,
    explanation: '"Preferir" exige "a" (nunca "do que"): preferir X A Y. "Prefiro cinema a teatro" está correto.',
    difficulty: 'medium',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'FCC - Regência de preferir'
  },
  {
    question: 'Qual frase apresenta regência CORRETA?',
    options: [
      'Esqueci do livro.',
      'Esqueci o livro.',
      'Me esqueci o livro.',
      'Lembrei o livro.'
    ],
    correctAnswer: 1,
    explanation: '"Esquecer" e "lembrar" SEM pronome são VTD: esquecer/lembrar algo. COM pronome (esquecer-se/lembrar-se) são VTI: esquecer-se DE algo.',
    difficulty: 'hard',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'VUNESP - Esquecer vs. Esquecer-se'
  },
  {
    question: '"Aspiramos _____ melhor colocação." Complete:',
    options: [
      'a uma',
      'uma',
      'à uma',
      'na'
    ],
    correctAnswer: 0,
    explanation: '"Aspirar" (=almejar) é VTI, exige "a": aspirar A uma colocação. No sentido de "inalar/cheirar", é VTD: aspirar o ar.',
    difficulty: 'medium',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'FGV - Regência de aspirar'
  },
  {
    question: '"O filme _____ assisti era ótimo." Complete com pronome relativo:',
    options: [
      'que',
      'a que',
      'o qual',
      'cujo'
    ],
    correctAnswer: 1,
    explanation: 'Assistir a algo → "a que" assisti. Mantém-se a preposição exigida pelo verbo antes do pronome relativo.',
    difficulty: 'hard',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'CESPE - Pronome relativo + regência'
  },
  {
    question: 'A regência está INCORRETA em:',
    options: [
      'Obedeço às normas.',
      'Paguei ao cobrador.',
      'Paguei a conta.',
      'Obedeço as leis.'
    ],
    correctAnswer: 3,
    explanation: '"Obedecer" é VTI, exige "a": obedecer ÀS leis. "Pagar" admite OD (coisa) e OI (pessoa): pagar a conta, pagar ao cobrador.',
    difficulty: 'medium',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'FCC - Regência de obedecer e pagar'
  },
  {
    question: '"Informei-o _____ decisão." Complete:',
    options: [
      'a',
      'da',
      'na',
      'sobre a'
    ],
    correctAnswer: 1,
    explanation: '"Informar alguém DE algo" (VTDI). Com pronome oblíquo: informei-O (=ele) DA decisão. Informei a ele a decisão também é correto.',
    difficulty: 'hard',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'VUNESP - Regência de informar'
  },
  {
    question: '"Chegamos _____ casa cedo." Complete:',
    options: [
      'na',
      'a',
      'em',
      'à'
    ],
    correctAnswer: 1,
    explanation: '"Chegar" exige "a" (não "em"): chegar A casa, chegar AO trabalho. Evitar "chegar em" (erro comum).',
    difficulty: 'easy',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'FGV - Regência de chegar'
  },
  {
    question: 'Regência CORRETA de "visar":',
    options: [
      'O atirador visou o alvo.',
      'Visamos ao sucesso.',
      'O gerente visou o cheque.',
      'Todas estão corretas'
    ],
    correctAnswer: 3,
    explanation: '"Visar": VTD (=mirar, assinar): visar o alvo, visar o cheque. VTI (=objetivar): visar AO sucesso. Contexto define a regência.',
    difficulty: 'hard',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'CESPE - Polissemia de visar'
  },
  {
    question: '"Simpatizo _____ você." Complete:',
    options: [
      'de',
      'a',
      'com',
      'por'
    ],
    correctAnswer: 2,
    explanation: '"Simpatizar" e "antipatizar" exigem "com": simpatizar COM alguém. Não são pronominais (*simpatizar-se está incorreto).',
    difficulty: 'medium',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'FCC - Regência de simpatizar'
  },
  {
    question: 'Regência NOMINAL correta:',
    options: [
      'Ele é fiel para a esposa.',
      'Somos favoráveis com a proposta.',
      'Estou ansioso para viajar.',
      'Tenho aversão de mentiras.'
    ],
    correctAnswer: 2,
    explanation: '"Ansioso" rege "por" ou "para": ansioso POR/PARA viajar. Fiel A, favorável A, aversão A são as regências corretas.',
    difficulty: 'medium',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'VUNESP - Regência nominal'
  },
  {
    question: '"Implica" está com regência CORRETA em:',
    options: [
      'Isso implica em problemas.',
      'Isso implica problemas.',
      'Ele implica com todos.',
      'B e C estão corretas'
    ],
    correctAnswer: 3,
    explanation: '"Implicar" (=acarretar) é VTD: implica problemas. "Implicar" (=ter birra) é VTI: implica COM alguém. Evitar "implicar EM".',
    difficulty: 'hard',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'FGV - Regência de implicar'
  },
  {
    question: '"A cidade _____ moro é pequena." Complete:',
    options: [
      'que',
      'onde',
      'em que',
      'B e C estão corretas'
    ],
    correctAnswer: 3,
    explanation: 'Morar EM: "A cidade EM QUE moro" ou "A cidade ONDE moro" (ambas corretas). "Onde" = em que (lugar).',
    difficulty: 'medium',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'CESPE - Onde vs. Em que'
  },
  {
    question: '"Procede" está CORRETO em:',
    options: [
      'Esse argumento não procede.',
      'Procede de São Paulo.',
      'Procedo ao inquérito.',
      'Todas estão corretas'
    ],
    correctAnswer: 3,
    explanation: '"Proceder": VI (=ter fundamento): não procede. VTI "de" (=originar-se): procede DE SP. VTI "a" (=realizar): proceder AO inquérito.',
    difficulty: 'hard',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'FCC - Regência múltipla de proceder'
  },
  {
    question: 'Regência INCORRETA:',
    options: [
      'Custo a crer nisso.',
      'Custei a entender.',
      'O projeto custou caro.',
      'Custa-me aceitar isso.'
    ],
    correctAnswer: 1,
    explanation: '"Custar" (=ser difícil) é VTI impessoal: custa-ME entender (não "custei"). "Custar" (=ter preço): o projeto custou (VTD).',
    difficulty: 'hard',
    topic: 'Regência Verbal e Nominal',
    examInfo: 'VUNESP - Regência de custar'
  }
];

// ============================================================================
// TEMA 9: CRASE (15 questões)
// ============================================================================

const craseQuestions: Question[] = [
  {
    question: 'A crase é OBRIGATÓRIA em:',
    options: [
      'Vou a pé.',
      'Cheguei a casa.',
      'Fui à escola.',
      'Saí a correr.'
    ],
    correctAnswer: 2,
    explanation: 'Há crase quando: verbo que exige "a" + artigo "a". "Fui (a) à (a) escola" = à escola. "A casa" sem artigo não tem crase.',
    difficulty: 'easy',
    topic: 'Crase',
    examInfo: 'CESPE - Crase básica'
  },
  {
    question: 'NÃO ocorre crase em:',
    options: [
      'Referiu-se à diretora.',
      'Voltou à fazenda.',
      'Saiu à noite.',
      'Falou a ela.'
    ],
    correctAnswer: 3,
    explanation: 'Não há crase antes de pronomes pessoais (ela, você, mim). "Falou a ela" (sem crase). Antes de "diretora", "fazenda", "noite" há crase.',
    difficulty: 'easy',
    topic: 'Crase',
    examInfo: 'FCC - Proibição de crase'
  },
  {
    question: '"Vou ____ Paris." A forma correta é:',
    options: [
      'a',
      'à',
      'Ambas, depende do contexto',
      'para'
    ],
    correctAnswer: 0,
    explanation: 'Nomes de cidade SEM especificativo: sem crase: "Vou a Paris". COM especificativo: "Vou à Paris da moda" (há artigo).',
    difficulty: 'medium',
    topic: 'Crase',
    examInfo: 'VUNESP - Crase antes de topônimos'
  },
  {
    question: '"Fui à Roma antiga." A crase está:',
    options: [
      'Incorreta',
      'Correta, pois há adjetivo especificando',
      'Facultativa',
      'Depende da pronúncia'
    ],
    correctAnswer: 1,
    explanation: 'Cidade COM especificativo (antiga) admite artigo: "a Roma antiga" → "Fui à Roma antiga" (crase correta).',
    difficulty: 'hard',
    topic: 'Crase',
    examInfo: 'FGV - Crase especial'
  },
  {
    question: 'A crase é FACULTATIVA em:',
    options: [
      'Entreguei à Maria.',
      'Vou à fazenda.',
      'Refiro-me à diretora.',
      'Assisti à peça.'
    ],
    correctAnswer: 0,
    explanation: 'Antes de nomes próprios femininos, a crase é facultativa (depende se usamos artigo): "a Maria" ou "à Maria".',
    difficulty: 'medium',
    topic: 'Crase',
    examInfo: 'CESPE - Crase facultativa'
  },
  {
    question: '"Chegamos ____ três horas." Complete:',
    options: [
      'a',
      'às',
      'as',
      'há'
    ],
    correctAnswer: 1,
    expression: 'Antes de horas determinadas, há crase: chegamos ÀS três horas (a+as). "A uma hora" também tem crase: "à uma hora".',
    difficulty: 'easy',
    topic: 'Crase',
    examInfo: 'FCC - Crase antes de horas'
  },
  {
    question: 'NÃO há crase em:',
    options: [
      'Refiro-me à que saiu.',
      'Vou à casa de Pedro.',
      'Escrevi à máquina.',
      'Falei a uma amiga.'
    ],
    correctAnswer: 3,
    explanation: 'Artigo indefinido "uma" não se combina com preposição "a": "Falei a uma amiga" (sem crase). As demais têm artigo definido "a".',
    difficulty: 'medium',
    topic: 'Crase',
    examInfo: 'VUNESP - Crase com indefinido'
  },
  {
    question: '"Estou ____ espera de notícias." Complete:',
    options: [
      'a',
      'à',
      'na',
      'em'
    ],
    correctAnswer: 1,
    explanation: 'Locução adverbial feminina tem crase: à espera de, à procura de, à venda, à toa, às vezes, à noite.',
    difficulty: 'medium',
    topic: 'Crase',
    examInfo: 'FGV - Locuções adverbiais'
  },
  {
    question: '"Ficaremos aqui até ____ sexta-feira." A crase é:',
    options: [
      'Obrigatória',
      'Proibida',
      'Facultativa',
      'Depende do verbo'
    ],
    correctAnswer: 2,
    explanation: 'Após "até", a crase é facultativa: "até a sexta" ou "até à sexta". Ambas corretas.',
    difficulty: 'hard',
    topic: 'Crase',
    examInfo: 'CESPE - Crase após "até"'
  },
  {
    question: '"Venda ____ vista ou ____ prazo." Complete:',
    options: [
      'a - a',
      'à - à',
      'à - a',
      'a - à'
    ],
    correctAnswer: 1,
    explanation: 'Locuções adverbiais femininas: à vista, à prazo (ambas com crase). São expressões fixas do comércio.',
    difficulty: 'easy',
    topic: 'Crase',
    examInfo: 'FCC - Locuções comerciais'
  },
  {
    question: 'A crase está INCORRETA em:',
    options: [
      'Vou à Bahia.',
      'Vou à Salvador.',
      'Vou à terra de meus pais.',
      'Vou à Brasília.'
    ],
    correctAnswer: 1,
    explanation: '"Salvador" é cidade masculina (o Salvador), logo não admite artigo feminino "a": "Vou a Salvador" (sem crase).',
    difficulty: 'hard',
    topic: 'Crase',
    examInfo: 'VUNESP - Gênero dos topônimos'
  },
  {
    question: '"Dirigi-me ____ Vossa Excelência." Complete:',
    options: [
      'a',
      'à',
      'para',
      'sobre'
    ],
    correctAnswer: 0,
    explanation: 'Pronomes de tratamento (exceto senhora, senhorita, dona): SEM crase. "Dirigi-me a Vossa Excelência".',
    difficulty: 'medium',
    topic: 'Crase',
    examInfo: 'FGV - Crase com pronomes de tratamento'
  },
  {
    question: '"Saiu ____ francesa." (= sem se despedir) A crase é:',
    options: [
      'Obrigatória',
      'Proibida',
      'Facultativa',
      'Erro'
    ],
    correctAnswer: 0,
    explanation: 'Locuções adverbiais femininas de modo têm crase: à francesa, à moda de, à brasileira, à milanesa.',
    difficulty: 'medium',
    topic: 'Crase',
    examInfo: 'CESPE - Locuções de modo'
  },
  {
    question: '"De segunda ____ sexta." Complete:',
    options: [
      'a',
      'à',
      'até',
      'e'
    ],
    correctAnswer: 0,
    explanation: 'Paralelismo: "de ... a" (sem crase): de segunda A sexta. Se fosse "da ... à": da segunda À sexta (com crase).',
    difficulty: 'hard',
    topic: 'Crase',
    examInfo: 'FCC - Paralelismo com crase'
  },
  {
    question: 'Macete para detectar crase: substitua por palavra masculina. "Vou à feira" vira:',
    options: [
      '"Vou a mercado" → sem crase no feminino',
      '"Vou ao mercado" → há crase no feminino',
      'Não funciona esse macete',
      'Vira "Vou no mercado"'
    ],
    correctAnswer: 1,
    explanation: 'Macete útil: se no masculino aparece "ao", no feminino há crase "à". Vou AO mercado → Vou À feira.',
    difficulty: 'easy',
    topic: 'Crase',
    examInfo: 'VUNESP - Técnica de detecção'
  }
];

// ============================================================================
// FUNÇÃO PARA SEED DE TODAS AS QUESTÕES DE PORTUGUÊS
// ============================================================================

export const seedAllPortuguesQuestions = async () => {
  const allQuestions = [
    ...interpretacaoTextoQuestions,
    ...gramaticaQuestions,
    ...sintaxeQuestions,
    ...morfologiaQuestions,
    ...ortografiaAcentuacaoQuestions,
    ...pontuacaoQuestions,
    ...concordanciaQuestions,
    ...regenciaQuestions,
    ...craseQuestions
  ];

  console.log(`📝 Preparando ${allQuestions.length} questões de Português para importação em lote...`);

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
