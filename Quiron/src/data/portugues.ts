// LÍNGUA PORTUGUESA - 50 QUESTÕES
// Área Conhecimentos Gerais - Quiron Concursos
// Questões essenciais para todos os concursos públicos

import { GameQuestion } from './gameQuestions';

export const portuguesQuestions: GameQuestion[] = [
  // ========================================
  // ORTOGRAFIA E ACENTUAÇÃO
  // ========================================
  {
    id: 'port-001',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'As palavras "análise", "ônibus" e "fácil" são acentuadas pela mesma regra: todas são paroxítonas.',
    correctAnswer: false,
    explanation: 'ERRADO. "Análise" é proparoxítona (todas são acentuadas). "Ônibus" e "fácil" são paroxítonas terminadas em ditongo e "L", respectivamente.',
    difficulty: 'medio'
  },
  {
    id: 'port-002',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Segundo o Novo Acordo Ortográfico, as palavras "assembleia", "ideia" e "heroico" não recebem mais acento.',
    correctAnswer: true,
    explanation: 'CERTO. Com o Acordo Ortográfico, os ditongos abertos "ei" e "oi" em palavras paroxítonas perderam o acento: assembleia, ideia, heroico, paranoico.',
    difficulty: 'facil'
  },
  {
    id: 'port-003',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'As palavras "pôr" (verbo) e "por" (preposição) são acentuadas diferentemente para distinguir seus significados.',
    correctAnswer: true,
    explanation: 'CERTO. O acento diferencial permaneceu em "pôr" (verbo) para diferenciá-lo de "por" (preposição), evitando ambiguidade.',
    difficulty: 'facil'
  },
  {
    id: 'port-004',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Todas as proparoxítonas são acentuadas graficamente, sem exceção.',
    correctAnswer: true,
    explanation: 'CERTO. É regra absoluta: toda palavra proparoxítona recebe acento gráfico (jurídico, médico, lâmpada, córrego, máximo).',
    difficulty: 'facil'
  },
  {
    id: 'port-005',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'As palavras "saúde", "baú" e "país" são acentuadas porque apresentam hiato.',
    correctAnswer: true,
    explanation: 'CERTO. Acentuam-se "i" e "u" tônicos em hiato quando sozinhos na sílaba ou seguidos de "s": sa-ú-de, ba-ú, pa-ís.',
    difficulty: 'medio'
  },

  // ========================================
  // CLASSES GRAMATICAIS
  // ========================================
  {
    id: 'port-006',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "O estudo é fundamental", a palavra "estudo" é substantivo abstrato.',
    correctAnswer: true,
    explanation: 'CERTO. "Estudo" é substantivo abstrato (nomeia ação, estado, qualidade). Substantivos concretos designam seres de existência independente.',
    difficulty: 'facil'
  },
  {
    id: 'port-007',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Adjetivos são palavras invariáveis que modificam o sentido dos substantivos.',
    correctAnswer: false,
    explanation: 'ERRADO. Adjetivos SÃO variáveis (flexionam em gênero, número e grau). Modificam substantivos, mas concordam com eles.',
    difficulty: 'facil'
  },
  {
    id: 'port-008',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Pronomes demonstrativos "este, esta, isto" referem-se a algo próximo de quem fala.',
    correctAnswer: true,
    explanation: 'CERTO. "Este/esta/isto" indicam proximidade da 1ª pessoa (quem fala). "Esse/essa/isso" (2ª pessoa). "Aquele/aquela/aquilo" (distante).',
    difficulty: 'facil'
  },
  {
    id: 'port-009',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "Comprei dois livros", a palavra "dois" é numeral cardinal.',
    correctAnswer: true,
    explanation: 'CERTO. Numerais cardinais indicam quantidade exata: um, dois, três, cem. Ordinais indicam ordem: primeiro, segundo.',
    difficulty: 'facil'
  },
  {
    id: 'port-010',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Advérbios são palavras que modificam verbos, adjetivos ou outros advérbios.',
    correctAnswer: true,
    explanation: 'CERTO. Advérbios modificam verbos (correu rapidamente), adjetivos (muito bonito) ou outros advérbios (bem devagar).',
    difficulty: 'facil'
  },

  // ========================================
  // SINTAXE - TERMOS DA ORAÇÃO
  // ========================================
  {
    id: 'port-011',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "O professor explicou a matéria aos alunos", "aos alunos" é objeto indireto.',
    correctAnswer: true,
    explanation: 'CERTO. Objeto indireto completa verbo com preposição obrigatória. "Explicou" (a matéria = OD) "aos alunos" (OI com preposição "a").',
    difficulty: 'medio'
  },
  {
    id: 'port-012',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'O sujeito sempre vem antes do verbo na oração.',
    correctAnswer: false,
    explanation: 'ERRADO. O sujeito pode vir após o verbo (sujeito posposto): "Chegaram os aprovados". A ordem direta é comum, mas não obrigatória.',
    difficulty: 'facil'
  },
  {
    id: 'port-013',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "Choveu muito ontem", há sujeito oculto.',
    correctAnswer: false,
    explanation: 'ERRADO. Verbos que indicam fenômenos da natureza são impessoais (sem sujeito). "Choveu" = oração sem sujeito. Não há sujeito oculto.',
    difficulty: 'medio'
  },
  {
    id: 'port-014',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Predicado verbal contém verbo significativo (de ação), com ou sem complementos.',
    correctAnswer: true,
    explanation: 'CERTO. Predicado verbal tem núcleo em verbo intransitivo, transitivo ou impessoal (verbos significativos). Ex: "O aluno estudou a matéria".',
    difficulty: 'facil'
  },
  {
    id: 'port-015',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Aposto é termo que explica, resume ou especifica outro termo da oração.',
    correctAnswer: true,
    explanation: 'CERTO. Aposto é termo acessório que amplia, explica ou resume. Ex: "Brasília, capital do Brasil, é moderna" (aposto explicativo).',
    difficulty: 'facil'
  },

  // ========================================
  // CONCORDÂNCIA VERBAL E NOMINAL
  // ========================================
  {
    id: 'port-016',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Na frase "Fazem dois anos que ele partiu", o verbo está empregado corretamente.',
    correctAnswer: false,
    explanation: 'ERRADO. Com expressão temporal, "fazer" é impessoal (singular): "FAZ dois anos". No sentido de tempo decorrido, não varia.',
    difficulty: 'medio'
  },
  {
    id: 'port-017',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "A maioria dos candidatos foi aprovada", o verbo concorda com o núcleo "maioria".',
    correctAnswer: true,
    explanation: 'CERTO. Com expressão partitiva (maioria, parte, metade), o verbo pode concordar com o núcleo (maioria = singular) ou com o especificador (candidatos = plural).',
    difficulty: 'medio'
  },
  {
    id: 'port-018',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Quando o sujeito composto vem após o verbo, este pode concordar com o núcleo mais próximo.',
    correctAnswer: true,
    explanation: 'CERTO. Com sujeito composto posposto, admite-se concordância atrativa (com o mais próximo): "Chegou o pai e a mãe" ou "Chegaram o pai e a mãe".',
    difficulty: 'dificil'
  },
  {
    id: 'port-019',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "É proibido entrada de menores", a expressão está correta.',
    correctAnswer: true,
    explanation: 'CERTO. Sem artigo, a expressão fica invariável: "É proibido entrada". Com artigo: "É proibida A entrada". Regra das expressões de sentido passivo.',
    difficulty: 'dificil'
  },
  {
    id: 'port-020',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'O verbo "haver" no sentido de "existir" é impessoal e fica sempre no singular.',
    correctAnswer: true,
    explanation: 'CERTO. "Haver" = existir é impessoal: "Havia muitos candidatos" (singular). "Existir" concorda: "Existiam muitos candidatos" (plural).',
    difficulty: 'facil'
  },

  // ========================================
  // REGÊNCIA VERBAL E NOMINAL
  // ========================================
  {
    id: 'port-021',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'O verbo "assistir" no sentido de "ver" exige preposição "a": "Assisti ao filme".',
    correctAnswer: true,
    explanation: 'CERTO. "Assistir" = ver/presenciar rege preposição "a" (VTI): "Assisti ao jogo". No sentido de "socorrer", é VTD: "Assistiu o paciente".',
    difficulty: 'medio'
  },
  {
    id: 'port-022',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'O verbo "preferir" admite a construção "prefiro mais cinema do que teatro".',
    correctAnswer: false,
    explanation: 'ERRADO. "Preferir" rejeita "mais" e "do que". Correto: "Prefiro cinema A teatro" (VTDI). "Mais" e "do que" são redundantes com "preferir".',
    difficulty: 'medio'
  },
  {
    id: 'port-023',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "O cargo a que aspiro é de auditor", o verbo está empregado corretamente.',
    correctAnswer: true,
    explanation: 'CERTO. "Aspirar" = desejar/almejar é VTI (preposição "a"): "aspiro A cargo" → "cargo a que aspiro". Sem preposição seria "aspirar" = inalar.',
    difficulty: 'medio'
  },
  {
    id: 'port-024',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'O verbo "visar" no sentido de "objetivar" exige complemento com preposição.',
    correctAnswer: true,
    explanation: 'CERTO. "Visar" = objetivar/almejar rege preposição "a" (VTI): "Visa AO sucesso". "Visar" = mirar/assinar é VTD: "Visou o alvo".',
    difficulty: 'medio'
  },
  {
    id: 'port-025',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "Cheguei em casa", a preposição está empregada corretamente.',
    correctAnswer: false,
    explanation: 'ERRADO. "Chegar" e "ir" exigem preposição "A", não "em": "Cheguei A casa". "Estar/ficar" usam "em": "Estou em casa".',
    difficulty: 'facil'
  },

  // ========================================
  // CRASE
  // ========================================
  {
    id: 'port-026',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Ocorre crase em "Refiro-me à pessoa que chegou", mas não em "Refiro-me a pessoa alguma".',
    correctAnswer: true,
    explanation: 'CERTO. Antes de pronome indefinido (alguma, nenhuma, toda, qualquer) NÃO há crase. "À pessoa" (artigo definido) tem crase; "a pessoa alguma" não.',
    difficulty: 'medio'
  },
  {
    id: 'port-027',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'A crase é obrigatória em "Saiu às pressas" porque "pressas" está no plural.',
    correctAnswer: false,
    explanation: 'ERRADO. A crase ocorre porque é locução adverbial feminina ("às pressas", "às vezes", "à noite"). O plural não é o fator determinante.',
    difficulty: 'medio'
  },
  {
    id: 'port-028',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Não ocorre crase antes de verbos: "Começou a chover".',
    correctAnswer: true,
    explanation: 'CERTO. Verbos no infinitivo não admitem artigo, logo não há crase: "a chover", "a estudar", "a trabalhar".',
    difficulty: 'facil'
  },
  {
    id: 'port-029',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "Fui à Bahia", ocorre crase, mas em "Fui a São Paulo" não ocorre.',
    correctAnswer: true,
    explanation: 'CERTO. Topônimos femininos com artigo levam crase: "a+a Bahia = à Bahia". Masculinos não: "a São Paulo" (sem artigo feminino).',
    difficulty: 'facil'
  },
  {
    id: 'port-030',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'A crase é facultativa antes de pronomes possessivos femininos: "Refiro-me a/à minha casa".',
    correctAnswer: true,
    explanation: 'CERTO. Antes de possessivo feminino, o artigo é facultativo: "minha casa" ou "a minha casa". Logo, crase é opcional: "a minha" ou "à minha".',
    difficulty: 'medio'
  },

  // ========================================
  // COLOCAÇÃO PRONOMINAL
  // ========================================
  {
    id: 'port-031',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "Me disseram a verdade", o pronome está mal colocado segundo a norma culta.',
    correctAnswer: true,
    explanation: 'CERTO. Iniciar frase com pronome oblíquo átono é inadequado na norma culta. Correto: "Disseram-me a verdade" (ênclise) ou usar palavra atrativa.',
    difficulty: 'facil'
  },
  {
    id: 'port-032',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Palavras negativas atraem o pronome oblíquo: "Não se preocupe".',
    correctAnswer: true,
    explanation: 'CERTO. Palavras atrativas (não, nunca, jamais, que, quando) exigem próclise: "Não SE esqueça". Ênclise ficaria inadequada: "Não esqueça-se".',
    difficulty: 'facil'
  },
  {
    id: 'port-033',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "Vou-me embora", a colocação do pronome está correta.',
    correctAnswer: false,
    explanation: 'ERRADO. Com verbos no infinitivo em locução, não se usa ênclise no auxiliar. Correto: "Vou me embora" (próclise) ou "Vou embora-me" (raramente usado).',
    difficulty: 'dificil'
  },
  {
    id: 'port-034',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'No futuro do presente e do pretérito, usa-se mesóclise: "Far-me-ão feliz".',
    correctAnswer: true,
    explanation: 'CERTO. Futuro do presente/pretérito admite mesóclise: "Far-me-ão", "Dar-te-ei". Na linguagem atual, prefere-se próclise com palavra atrativa.',
    difficulty: 'dificil'
  },
  {
    id: 'port-035',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "Quero que me ajudem", o pronome está bem colocado (próclise após "que").',
    correctAnswer: true,
    explanation: 'CERTO. O pronome relativo "que" é palavra atrativa, exigindo próclise: "que me ajudem". Ênclise seria inadequada.',
    difficulty: 'facil'
  },

  // ========================================
  // PONTUAÇÃO
  // ========================================
  {
    id: 'port-036',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Vírgula separa sujeito de predicado quando o sujeito é longo.',
    correctAnswer: false,
    explanation: 'ERRADO. NUNCA se separa sujeito de predicado com vírgula, independentemente do tamanho. "O candidato estudioso e dedicado [sem vírgula] passou".',
    difficulty: 'facil'
  },
  {
    id: 'port-037',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "Os aprovados, que estudaram muito, comemoraram", as vírgulas isolam oração subordinada adjetiva explicativa.',
    correctAnswer: true,
    explanation: 'CERTO. Oração adjetiva EXPLICATIVA vem entre vírgulas (generaliza). Sem vírgulas seria restritiva (especifica): "Os aprovados que estudaram muito".',
    difficulty: 'medio'
  },
  {
    id: 'port-038',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'O ponto e vírgula separa orações coordenadas já internamente separadas por vírgulas.',
    correctAnswer: true,
    explanation: 'CERTO. Ponto e vírgula organiza períodos complexos: "Estudou matemática, português e direito; fez simulados; revisou conteúdos".',
    difficulty: 'medio'
  },
  {
    id: 'port-039',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Dois-pontos introduzem citação, enumeração ou explicação.',
    correctAnswer: true,
    explanation: 'CERTO. Dois-pontos anunciam: citação ("Disse: \'Estudo\'"), enumeração ("Comprei: livros, canetas"), explicação ("Passou: estudou muito").',
    difficulty: 'facil'
  },
  {
    id: 'port-040',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Em "Portanto, fui aprovado", a vírgula após "portanto" é obrigatória.',
    correctAnswer: true,
    explanation: 'CERTO. Conjunções conclusivas (portanto, logo, assim) deslocadas para o início devem ser seguidas de vírgula. No meio da oração, vêm entre vírgulas.',
    difficulty: 'facil'
  },

  // ========================================
  // INTERPRETAÇÃO E COMPREENSÃO
  // ========================================
  {
    id: 'port-041',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Coesão textual refere-se à articulação entre as partes do texto por meio de conectivos e referências.',
    correctAnswer: true,
    explanation: 'CERTO. Coesão é a conexão gramatical/lexical entre elementos. Usa pronomes, sinônimos, conectivos. Coerência é lógica/sentido global.',
    difficulty: 'facil'
  },
  {
    id: 'port-042',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Intertextualidade ocorre quando um texto faz referência explícita ou implícita a outro texto.',
    correctAnswer: true,
    explanation: 'CERTO. Intertextualidade é o diálogo entre textos: citações, paráfrases, paródias, alusões. Enriquece sentido pela relação intertextual.',
    difficulty: 'medio'
  },
  {
    id: 'port-043',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Texto dissertativo-argumentativo defende ponto de vista com argumentos e exemplos.',
    correctAnswer: true,
    explanation: 'CERTO. Dissertação argumentativa apresenta tese, argumentos (dados, exemplos, citações) e conclusão. Predomina em redações de concursos/Enem.',
    difficulty: 'facil'
  },
  {
    id: 'port-044',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Denotação é o sentido literal da palavra; conotação é o sentido figurado.',
    correctAnswer: true,
    explanation: 'CERTO. Denotação = sentido dicionarizado ("cobra" = réptil). Conotação = sentido figurado ("fulano é uma cobra" = pessoa traiçoeira).',
    difficulty: 'facil'
  },
  {
    id: 'port-045',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Ambiguidade é recurso estilístico sempre desejável em textos técnicos e jurídicos.',
    correctAnswer: false,
    explanation: 'ERRADO. Ambiguidade (duplo sentido) deve ser EVITADA em textos técnicos, jurídicos e oficiais. Só é recurso estilístico intencional na literatura.',
    difficulty: 'facil'
  },

  // ========================================
  // SEMÂNTICA E ESTILÍSTICA
  // ========================================
  {
    id: 'port-046',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Sinônimos são palavras de significados idênticos em todos os contextos.',
    correctAnswer: false,
    explanation: 'ERRADO. Sinônimos têm significados SEMELHANTES, não idênticos. O contexto determina adequação: "casa/residência/lar" são sinônimos, mas com nuances.',
    difficulty: 'medio'
  },
  {
    id: 'port-047',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Pleonasmo vicioso é redundância desnecessária, como "subir para cima".',
    correctAnswer: true,
    explanation: 'CERTO. Pleonasmo vicioso é repetição inútil: "subir para cima", "descer para baixo", "elo de ligação". Pleonasmo literário é recurso estilístico.',
    difficulty: 'facil'
  },
  {
    id: 'port-048',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Eufemismo é figura de linguagem que suaviza expressões desagradáveis.',
    correctAnswer: true,
    explanation: 'CERTO. Eufemismo atenua: "faltar com a verdade" (mentir), "pessoa de idade" (velho), "passou desta para melhor" (morreu).',
    difficulty: 'facil'
  },
  {
    id: 'port-049',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Catacrese é metáfora cristalizada pelo uso: "perna da mesa", "asa da xícara".',
    correctAnswer: true,
    explanation: 'CERTO. Catacrese é metáfora tão usual que perdeu caráter figurado: "embarcar no ônibus", "céu da boca", "batata da perna".',
    difficulty: 'medio'
  },
  {
    id: 'port-050',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Polissemia é a capacidade de uma palavra ter múltiplos significados conforme o contexto.',
    correctAnswer: true,
    explanation: 'CERTO. Polissemia: uma palavra, vários sentidos. "Banco" = assento/instituição financeira. "Manga" = fruta/parte da roupa. Contexto define.',
    difficulty: 'facil'
  }
];
