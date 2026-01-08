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

const SUBJECT_SLUG = 'cultura-geral';
const SUBJECT_ID = '26';

// ============================================================================
// TEMA 1: LITERATURA BRASILEIRA (5 questões)
// ============================================================================

const literaturaBrasileiraQuestions: Question[] = [
  {
    question: 'Machado de Assis é considerado o maior escritor brasileiro. Sua obra "Dom Casmurro" pertence ao movimento literário:',
    options: [
      'Romantismo',
      'Realismo',
      'Modernismo',
      'Parnasianismo'
    ],
    correctAnswer: 1,
    explanation: 'Machado de Assis (1839-1908) é o principal autor do Realismo brasileiro. "Dom Casmurro" (1899) é uma obra-prima realista que retrata a psicologia complexa do protagonista Bentinho e a ambiguidade sobre a traição de Capitu. Outras obras: "Memórias Póstumas de Brás Cubas", "Quincas Borba".',
    difficulty: 'easy',
    topic: 'Literatura Brasileira',
    examInfo: 'Questão recorrente em concursos'
  },
  {
    question: 'A Semana de Arte Moderna de 1922, marco do Modernismo brasileiro, ocorreu em:',
    options: [
      'Rio de Janeiro',
      'Salvador',
      'São Paulo',
      'Belo Horizonte'
    ],
    correctAnswer: 2,
    explanation: 'A Semana de Arte Moderna ocorreu em fevereiro de 1922 no Teatro Municipal de São Paulo. Participaram Mário de Andrade, Oswald de Andrade, Tarsila do Amaral, Anita Malfatti, Villa-Lobos, entre outros. Rompeu com padrões acadêmicos, valorizou a cultura brasileira e as vanguardas europeias.',
    difficulty: 'easy',
    topic: 'Literatura Brasileira',
    examInfo: 'CESPE - Modernismo'
  },
  {
    question: 'O romance "Grande Sertão: Veredas", considerado obra-prima da literatura brasileira, foi escrito por:',
    options: [
      'Graciliano Ramos',
      'Jorge Amado',
      'Guimarães Rosa',
      'Clarice Lispector'
    ],
    correctAnswer: 2,
    explanation: 'Guimarães Rosa (1908-1967) escreveu "Grande Sertão: Veredas" (1956), obra revolucionária que recria a linguagem do sertão mineiro. Narra a história de Riobaldo, ex-jagunço, em monólogo filosófico sobre bem e mal, amor (Diadorim), destino. Linguagem inventiva, neologismos, regionalismo universal.',
    difficulty: 'medium',
    topic: 'Literatura Brasileira',
    examInfo: 'FCC - Literatura brasileira'
  },
  {
    question: 'O movimento literário que valorizou a natureza brasileira, o índio idealizado e os sentimentos exacerbados foi o:',
    options: [
      'Barroco',
      'Arcadismo',
      'Romantismo',
      'Naturalismo'
    ],
    correctAnswer: 2,
    explanation: 'O Romantismo brasileiro (1836-1881) valorizou: nacionalismo, natureza exuberante, indianismo (índio como herói nacional), sentimentalismo, subjetivismo. Principais autores: José de Alencar ("O Guarani", "Iracema"), Gonçalves Dias ("Canção do Exílio"), Castro Alves, Álvares de Azevedo.',
    difficulty: 'easy',
    topic: 'Literatura Brasileira',
    examInfo: 'FGV - Movimentos literários'
  },
  {
    question: 'Clarice Lispector, uma das maiores escritoras brasileiras, é conhecida por sua literatura:',
    options: [
      'Regionalista e documental',
      'Introspectiva e filosófica',
      'Histórica e épica',
      'Humorística e satírica'
    ],
    correctAnswer: 1,
    explanation: 'Clarice Lispector (1920-1977) desenvolveu literatura introspectiva, filosófica e existencial, explorando a consciência humana, identidade feminina, solidão. Obras principais: "A Paixão Segundo G.H.", "A Hora da Estrela", "Laços de Família". Linguagem lírica, fluxo de consciência, epifanias cotidianas.',
    difficulty: 'medium',
    topic: 'Literatura Brasileira',
    examInfo: 'VUNESP - Literatura contemporânea'
  }
];

// ============================================================================
// TEMA 2: LITERATURA MUNDIAL (5 questões)
// ============================================================================

const literaturaMundialQuestions: Question[] = [
  {
    question: 'A obra "Dom Quixote", considerada o primeiro romance moderno, foi escrita por:',
    options: [
      'William Shakespeare',
      'Miguel de Cervantes',
      'Dante Alighieri',
      'Victor Hugo'
    ],
    correctAnswer: 1,
    explanation: 'Miguel de Cervantes (1547-1616), escritor espanhol, publicou "Dom Quixote de La Mancha" (1605/1615). Narra as aventuras do fidalgo que enlouquece lendo romances de cavalaria e sai em busca de aventuras com seu escudeiro Sancho Pança. Obra-prima que parodia e transcende a literatura cavaleiresca.',
    difficulty: 'easy',
    topic: 'Literatura Mundial',
    examInfo: 'Clássico universal em concursos'
  },
  {
    question: 'William Shakespeare, maior dramaturgo da língua inglesa, escreveu tragédias como:',
    options: [
      '"A Divina Comédia" e "Inferno"',
      '"Hamlet", "Otelo", "Macbeth" e "Romeu e Julieta"',
      '"Os Miseráveis" e "Notre-Dame de Paris"',
      '"Cem Anos de Solidão" e "O Amor nos Tempos do Cólera"'
    ],
    correctAnswer: 1,
    explanation: 'William Shakespeare (1564-1616) é o maior dramaturgo inglês. Principais tragédias: "Hamlet" (vingança, loucura), "Otelo" (ciúme), "Macbeth" (ambição), "Rei Lear" (ingratidão), "Romeu e Julieta" (amor impossível). Também escreveu comédias e peças históricas. Linguagem poética rica, personagens complexos.',
    difficulty: 'easy',
    topic: 'Literatura Mundial',
    examInfo: 'CESPE - Literatura inglesa'
  },
  {
    question: 'O Prêmio Nobel de Literatura 1982 foi concedido ao escritor colombiano Gabriel García Márquez, autor de:',
    options: [
      '"O Velho e o Mar"',
      '"Cem Anos de Solidão"',
      '"1984"',
      '"O Processo"'
    ],
    correctAnswer: 1,
    explanation: 'Gabriel García Márquez (1927-2014), escritor colombiano, ganhou o Nobel de Literatura 1982. "Cem Anos de Solidão" (1967) é obra-prima do realismo mágico, narrando a saga da família Buendía em Macondo. Mescla elementos fantásticos e realidade latino-americana. Outros livros: "O Amor nos Tempos do Cólera".',
    difficulty: 'medium',
    topic: 'Literatura Mundial',
    examInfo: 'FCC - Literatura latino-americana'
  },
  {
    question: 'A obra "1984", distopia sobre um regime totalitário que controla tudo através do "Grande Irmão", foi escrita por:',
    options: [
      'Aldous Huxley',
      'Ray Bradbury',
      'George Orwell',
      'Franz Kafka'
    ],
    correctAnswer: 2,
    explanation: 'George Orwell (1903-1950), escritor inglês, publicou "1984" em 1949. Distopia sobre regime totalitário da Oceânia governado pelo Partido e pelo Grande Irmão (Big Brother). Temas: vigilância total, manipulação da verdade (Ministério da Verdade), controle do pensamento (novilíngua). Crítica ao totalitarismo stalinista.',
    difficulty: 'medium',
    topic: 'Literatura Mundial',
    examInfo: 'FGV - Literatura distópica'
  },
  {
    question: 'A obra "A Metamorfose", que narra a transformação de Gregor Samsa em inseto, é de autoria de:',
    options: [
      'Albert Camus',
      'Franz Kafka',
      'James Joyce',
      'Marcel Proust'
    ],
    correctAnswer: 1,
    explanation: 'Franz Kafka (1883-1924), escritor tcheco de língua alemã, escreveu "A Metamorfose" (1915). Gregor Samsa acorda transformado em inseto monstruoso, perdendo identidade, trabalho, família. Temas: alienação moderna, absurdo existencial, burocracia desumanizadora. Estilo kafkiano: situações absurdas tratadas como normais.',
    difficulty: 'hard',
    topic: 'Literatura Mundial',
    examInfo: 'VUNESP - Literatura européia'
  }
];

// ============================================================================
// TEMA 3: ARTES PLÁSTICAS (5 questões)
// ============================================================================

const artesPlasticasQuestions: Question[] = [
  {
    question: 'Leonardo da Vinci pintou obras-primas renascentistas como:',
    options: [
      '"Guernica" e "Les Demoiselles d\'Avignon"',
      '"Mona Lisa" e "A Última Ceia"',
      '"O Grito" e "A Noite Estrelada"',
      '"A Criação de Adão" e "Davi"'
    ],
    correctAnswer: 1,
    explanation: 'Leonardo da Vinci (1452-1519), gênio renascentista italiano, pintou "Mona Lisa" (La Gioconda, c.1503-1519) - retrato enigmático com técnica sfumato, e "A Última Ceia" (1495-1498) - afresco monumental. Também foi inventor, anatomista, engenheiro. Representa o ideal humanista renascentista.',
    difficulty: 'easy',
    topic: 'Artes Plásticas',
    examInfo: 'Renascimento em concursos'
  },
  {
    question: 'Pablo Picasso foi o criador do movimento artístico:',
    options: [
      'Impressionismo',
      'Surrealismo',
      'Cubismo',
      'Expressionismo'
    ],
    correctAnswer: 2,
    explanation: 'Pablo Picasso (1881-1973), pintor espanhol, criou o Cubismo (1907) com Georges Braque. Rompe com perspectiva tradicional, representa objetos em múltiplos ângulos simultaneamente, formas geométricas. Obra inaugural: "Les Demoiselles d\'Avignon" (1907). "Guernica" (1937) denuncia bombardeio da Guerra Civil Espanhola.',
    difficulty: 'medium',
    topic: 'Artes Plásticas',
    examInfo: 'CESPE - Arte moderna'
  },
  {
    question: 'Tarsila do Amaral, importante pintora modernista brasileira, pintou obras icônicas como:',
    options: [
      '"Abaporu" e "Operários"',
      '"Mona Lisa" e "Guernica"',
      '"O Grito" e "Persistência da Memória"',
      '"Impressão: Nascer do Sol"'
    ],
    correctAnswer: 0,
    explanation: 'Tarsila do Amaral (1886-1973) é a maior pintora modernista brasileira. "Abaporu" (1928) - figura antropofágica que inspirou o Manifesto Antropófago de Oswald de Andrade. "Operários" (1933) - fase social. Cores vibrantes, formas arredondadas, temática brasileira. Participou da Semana de 1922 indiretamente.',
    difficulty: 'medium',
    topic: 'Artes Plásticas',
    examInfo: 'FCC - Modernismo brasileiro'
  },
  {
    question: 'Vincent van Gogh, pintor pós-impressionista holandês, é autor de:',
    options: [
      '"A Noite Estrelada" e "Os Girassóis"',
      '"A Última Ceia" e "Davi"',
      '"O Pensador" e "O Beijo"',
      '"Nenúfares" e "Impressão: Nascer do Sol"'
    ],
    correctAnswer: 0,
    explanation: 'Vincent van Gogh (1853-1890), pintor holandês pós-impressionista, criou obras intensamente expressivas: "A Noite Estrelada" (1889), "Os Girassóis" (série), "Quarto em Arles". Pinceladas vigorosas, cores vibrantes, temas cotidianos e natureza. Vida trágica: pobreza, doença mental, suicídio aos 37 anos.',
    difficulty: 'easy',
    topic: 'Artes Plásticas',
    examInfo: 'FGV - Pós-impressionismo'
  },
  {
    question: 'A Capela Sistina, no Vaticano, tem o teto pintado por:',
    options: [
      'Leonardo da Vinci',
      'Rafael Sanzio',
      'Michelangelo Buonarroti',
      'Donatello'
    ],
    correctAnswer: 2,
    explanation: 'Michelangelo Buonarroti (1475-1564), artista renascentista italiano, pintou o teto da Capela Sistina (1508-1512) a pedido do Papa Júlio II. Obra monumental com cenas do Gênesis, incluindo "A Criação de Adão" (dedo de Deus tocando Adão). Também escultor ("Davi", "Pietà") e arquiteto (Basílica de São Pedro).',
    difficulty: 'easy',
    topic: 'Artes Plásticas',
    examInfo: 'VUNESP - Renascimento italiano'
  }
];

// ============================================================================
// TEMA 4: MÚSICA (5 questões)
// ============================================================================

const musicaQuestions: Question[] = [
  {
    question: 'Ludwig van Beethoven, compositor alemão, é considerado figura de transição entre os períodos:',
    options: [
      'Barroco e Clássico',
      'Clássico e Romântico',
      'Romântico e Moderno',
      'Renascentista e Barroco'
    ],
    correctAnswer: 1,
    explanation: 'Ludwig van Beethoven (1770-1827) é considerado figura de transição do Classicismo ao Romantismo musical. Obras iniciais classicistas (influência Mozart, Haydn), obras maduras românticas (subjetividade, dramaticidade). Compôs 9 sinfonias (destaque: 5ª, 9ª "Ode à Alegria"), sonatas, concertos. Ficou surdo mas continuou compondo.',
    difficulty: 'medium',
    topic: 'Música',
    examInfo: 'História da música em concursos'
  },
  {
    question: 'A Bossa Nova, movimento musical brasileiro surgido no final dos anos 1950, teve como principais criadores:',
    options: [
      'Villa-Lobos e Carlos Gomes',
      'Tom Jobim, João Gilberto e Vinicius de Moraes',
      'Chiquinha Gonzaga e Ernesto Nazareth',
      'Luiz Gonzaga e Jackson do Pandeiro'
    ],
    correctAnswer: 1,
    explanation: 'A Bossa Nova surgiu no Rio de Janeiro (final dos anos 1950) com Tom Jobim (compositor), João Gilberto (violão e voz suave, batida característica) e Vinicius de Moraes (poeta/letrista). Mescla samba, jazz, harmonia sofisticada. Músicas: "Garota de Ipanema", "Chega de Saudade", "Desafinado". Sucesso internacional.',
    difficulty: 'easy',
    topic: 'Música',
    examInfo: 'CESPE - Música brasileira'
  },
  {
    question: 'Wolfgang Amadeus Mozart, prodígio musical austríaco do período Clássico, compôs:',
    options: [
      'Óperas como "As Bodas de Fígaro", "Don Giovanni" e "A Flauta Mágica"',
      'Sinfonias do Novo Mundo',
      'A Sagração da Primavera',
      'Os Prelúdios para piano'
    ],
    correctAnswer: 0,
    explanation: 'Wolfgang Amadeus Mozart (1756-1791), compositor austríaco do período Clássico, foi criança prodígio que dominou todos os gêneros musicais. Compôs mais de 600 obras: óperas ("As Bodas de Fígaro", "Don Giovanni", "A Flauta Mágica"), 41 sinfonias, concertos para piano, música sacra (Réquiem). Morreu aos 35 anos.',
    difficulty: 'medium',
    topic: 'Música',
    examInfo: 'FCC - Música clássica'
  },
  {
    question: 'Heitor Villa-Lobos, maior compositor brasileiro, é autor de:',
    options: [
      'Bachianas Brasileiras e Chôros',
      'Guarânia e Rasqueado',
      'Carmina Burana',
      'Bolero'
    ],
    correctAnswer: 0,
    explanation: 'Heitor Villa-Lobos (1887-1959) é o maior compositor erudito brasileiro. Mesclou música erudita europeia com folclore brasileiro. Principais obras: "Bachianas Brasileiras" (homenagem a Bach com elementos brasileiros, destaque nº 5 para soprano), série "Chôros" (inspirada nos chorões cariocas). Mais de 1.000 obras.',
    difficulty: 'medium',
    topic: 'Música',
    examInfo: 'FGV - Música brasileira erudita'
  },
  {
    question: 'O movimento Tropicália (Tropicalismo), que revolucionou a música brasileira nos anos 1960, teve como principais artistas:',
    options: [
      'Caetano Veloso, Gilberto Gil, Gal Costa e Os Mutantes',
      'Roberto Carlos, Erasmo Carlos e Wanderléa',
      'Elis Regina, Jair Rodrigues e Jorge Ben',
      'João Gilberto, Tom Jobim e Stan Getz'
    ],
    correctAnswer: 0,
    explanation: 'A Tropicália (1967-1968) revolucionou a MPB misturando elementos diversos: bossa nova, rock, música regional, vanguarda, cultura pop. Principais artistas: Caetano Veloso, Gilberto Gil, Gal Costa, Os Mutantes, Tom Zé, Nara Leão. Álbum-manifesto: "Tropicália ou Panis et Circensis" (1968). Criticava ditadura, nacionalismo conservador.',
    difficulty: 'hard',
    topic: 'Música',
    examInfo: 'VUNESP - MPB e movimentos culturais'
  }
];

// ============================================================================
// TEMA 5: CINEMA (5 questões)
// ============================================================================

const cinemaQuestions: Question[] = [
  {
    question: 'O filme "Cidadão Kane" (1941), frequentemente considerado o melhor filme de todos os tempos, foi dirigido por:',
    options: [
      'Alfred Hitchcock',
      'Stanley Kubrick',
      'Orson Welles',
      'Francis Ford Coppola'
    ],
    correctAnswer: 2,
    explanation: 'Orson Welles (1915-1985) dirigiu, produziu, roteirizou e estrelou "Cidadão Kane" (1941) aos 25 anos. Revolucionou a linguagem cinematográfica: uso inovador de profundidade de campo, ângulos de câmera, estrutura narrativa não-linear (flashbacks). Baseado na vida do magnata William Randolph Hearst. Obra-prima do cinema.',
    difficulty: 'medium',
    topic: 'Cinema',
    examInfo: 'História do cinema em concursos'
  },
  {
    question: 'O Cinema Novo brasileiro, movimento dos anos 1960, teve como principais diretores:',
    options: [
      'Glauber Rocha, Nelson Pereira dos Santos e Cacá Diegues',
      'Walter Salles, Fernando Meirelles e José Padilha',
      'Hector Babenco, Bruno Barreto e Arnaldo Jabor',
      'Mazzaropi, Oscarito e Grande Otelo'
    ],
    correctAnswer: 0,
    explanation: 'O Cinema Novo (1960-1970) revolucionou o cinema brasileiro: estética da fome, crítica social, linguagem experimental, baixo orçamento ("uma câmera na mão e uma ideia na cabeça"). Principais diretores: Glauber Rocha ("Deus e o Diabo na Terra do Sol", "Terra em Transe"), Nelson Pereira dos Santos ("Vidas Secas"), Cacá Diegues.',
    difficulty: 'medium',
    topic: 'Cinema',
    examInfo: 'CESPE - Cinema brasileiro'
  },
  {
    question: 'O Oscar de Melhor Filme de 2020 foi concedido ao sul-coreano "Parasita", dirigido por:',
    options: [
      'Park Chan-wook',
      'Bong Joon-ho',
      'Kim Ki-duk',
      'Wong Kar-wai'
    ],
    correctAnswer: 1,
    explanation: 'Bong Joon-ho dirigiu "Parasita" (2019), que venceu 4 Oscars em 2020: Melhor Filme, Diretor, Roteiro Original e Filme Internacional (primeiro não-inglês a vencer Melhor Filme). Thriller social sobre desigualdade de classes na Coreia do Sul. Também ganhou Palma de Ouro em Cannes 2019.',
    difficulty: 'easy',
    topic: 'Cinema',
    examInfo: 'FCC - Cinema contemporâneo'
  },
  {
    question: 'O diretor italiano Federico Fellini, mestre do cinema autoral, dirigiu clássicos como:',
    options: [
      '"A Noite Americana" e "Os Incompreendidos"',
      '"La Dolce Vita" e "8½"',
      '"Ladrões de Bicicleta" e "Roma, Cidade Aberta"',
      '"O Sétimo Selo" e "Morangos Silvestres"'
    ],
    correctAnswer: 1,
    explanation: 'Federico Fellini (1920-1993), diretor italiano, criou obras-primas do cinema autoral: "La Dolce Vita" (1960 - crítica à sociedade de consumo, figura icônica de Anita Ekberg na Fontana di Trevi), "8½" (1963 - crise criativa de um diretor), "A Estrada da Vida", "Amarcord". Estilo onírico, surrealista, autobiográfico.',
    difficulty: 'hard',
    topic: 'Cinema',
    examInfo: 'FGV - Cinema italiano'
  },
  {
    question: 'O filme brasileiro "Cidade de Deus" (2002), aclamado internacionalmente, foi dirigido por:',
    options: [
      'Walter Salles',
      'Fernando Meirelles',
      'José Padilha',
      'Karim Aïnouz'
    ],
    correctAnswer: 1,
    explanation: 'Fernando Meirelles dirigiu "Cidade de Deus" (2002), baseado no livro de Paulo Lins. Retrata a violência e tráfico de drogas na favela carioca de 1960 a 1980. Fotografia dinâmica, edição frenética, atores não-profissionais. Sucesso internacional: indicado a 4 Oscars, lançou carreira de Meirelles ("Jardineiro Fiel", "Dois Papas").',
    difficulty: 'easy',
    topic: 'Cinema',
    examInfo: 'VUNESP - Cinema brasileiro contemporâneo'
  }
];

// ============================================================================
// TEMA 6: TEATRO (5 questões)
// ============================================================================

const teatroQuestions: Question[] = [
  {
    question: 'A tragédia grega clássica tinha como principais autores:',
    options: [
      'Homero, Hesíodo e Píndaro',
      'Ésquilo, Sófocles e Eurípides',
      'Aristófanes, Menandro e Plauto',
      'Sêneca, Terêncio e Catulo'
    ],
    correctAnswer: 1,
    explanation: 'Os três grandes tragediógrafos gregos (século V a.C.) foram: Ésquilo ("Oresteia", "Prometeu Acorrentado"), Sófocles ("Édipo Rei", "Antígona"), Eurípides ("Medeia", "As Bacantes"). Tratavam de temas mitológicos, destino, hubris (desmedida), catarse. Encenadas em festivais dionisíacos com máscaras, coro, três atores.',
    difficulty: 'medium',
    topic: 'Teatro',
    examInfo: 'Teatro grego em concursos'
  },
  {
    question: 'Bertolt Brecht, dramaturgo alemão, desenvolveu o conceito de:',
    options: [
      'Teatro do Absurdo',
      'Teatro Épico e efeito de distanciamento',
      'Teatro da Crueldade',
      'Teatro Pobre'
    ],
    correctAnswer: 1,
    explanation: 'Bertolt Brecht (1898-1956) criou o Teatro Épico: narrativo (não dramático), didático, politizado. Efeito de distanciamento (Verfremdungseffekt): evita identificação emocional, provoca reflexão crítica (quebra da 4ª parede, cartazes, músicas interruptivas). Peças: "A Ópera dos Três Vinténs", "Mãe Coragem", "Galileu Galilei".',
    difficulty: 'hard',
    topic: 'Teatro',
    examInfo: 'CESPE - Teatro moderno'
  },
  {
    question: 'Nelson Rodrigues, maior dramaturgo brasileiro, é autor de peças como:',
    options: [
      '"Vestido de Noiva", "Álbum de Família" e "Toda Nudez Será Castigada"',
      '"O Pagador de Promessas" e "A Falecida"',
      '"Eles Não Usam Black-Tie" e "Gota d\'Água"',
      '"Auto da Compadecida" e "O Santo e a Porca"'
    ],
    correctAnswer: 0,
    explanation: 'Nelson Rodrigues (1912-1980) revolucionou o teatro brasileiro com peças psicológicas sobre tabus: "Vestido de Noiva" (1943 - marco do teatro moderno brasileiro), "Álbum de Família" (incesto), "Toda Nudez Será Castigada" (hipocrisia moral). Abordou sexualidade, traição, família. Também foi cronista e jornalista.',
    difficulty: 'medium',
    topic: 'Teatro',
    examInfo: 'FCC - Teatro brasileiro'
  },
  {
    question: 'A Commedia dell\'Arte, forma teatral italiana do século XVI, caracterizava-se por:',
    options: [
      'Textos escritos rigorosos sem improvisação',
      'Personagens-tipo fixos, máscaras e improvisação',
      'Teatro sagrado religioso',
      'Tragédias mitológicas'
    ],
    correctAnswer: 1,
    explanation: 'A Commedia dell\'Arte (séc. XVI-XVIII) era teatro popular italiano com: personagens-tipo fixos (Arlequim, Colombina, Pantaleão, Polichinelo), máscaras, roteiros básicos (canovaccio) com improvisação, humor físico (lazzi), acrobacia. Influenciou teatro europeu, circo, Molière. Profissionalização dos atores.',
    difficulty: 'hard',
    topic: 'Teatro',
    examInfo: 'FGV - História do teatro'
  },
  {
    question: 'Ariano Suassuna escreveu a peça "Auto da Compadecida", que mescla:',
    options: [
      'Cultura popular nordestina, cordel e religiosidade',
      'Realismo urbano e crítica social',
      'Surrealismo e absurdo',
      'Teatro épico brechtiano'
    ],
    correctAnswer: 0,
    explanation: 'Ariano Suassuna (1927-2014) escreveu "Auto da Compadecida" (1955), obra-prima que mescla: literatura de cordel, cultura popular nordestina, religiosidade católica, humor. Conta aventuras de João Grilo e Chicó, com julgamento final por Jesus, Maria e diabo. Adaptada para cinema (2000) e TV. Movimento Armorial valoriza cultura nordestina.',
    difficulty: 'easy',
    topic: 'Teatro',
    examInfo: 'VUNESP - Teatro regional brasileiro'
  }
];

// ============================================================================
// TEMA 7: ARQUITETURA (5 questões)
// ============================================================================

const arquiteturaQuestions: Question[] = [
  {
    question: 'Oscar Niemeyer, arquiteto brasileiro, projetou os principais edifícios de:',
    options: [
      'Rio de Janeiro',
      'São Paulo',
      'Brasília',
      'Salvador'
    ],
    correctAnswer: 2,
    explanation: 'Oscar Niemeyer (1907-2012) projetou os principais edifícios de Brasília (inaugurada 1960): Palácio da Alvorada, Congresso Nacional (cúpulas), Catedral (hiperbolóide), Palácio do Planalto, STF. Urbanismo de Lúcio Costa. Arquitetura modernista: curvas, concreto aparente, leveza. Também projetou Conjunto da Pampulha (BH), MAC Niterói.',
    difficulty: 'easy',
    topic: 'Arquitetura',
    examInfo: 'Arquitetura brasileira em concursos'
  },
  {
    question: 'O movimento arquitetônico Bauhaus, fundado na Alemanha em 1919, defendia:',
    options: [
      'Ornamentação excessiva e estilos historicistas',
      'União entre arte, design e funcionalidade industrial',
      'Arquitetura exclusivamente gótica',
      'Rejeição à tecnologia moderna'
    ],
    correctAnswer: 1,
    explanation: 'A Bauhaus (1919-1933), escola alemã fundada por Walter Gropius, revolucionou design e arquitetura: união entre arte, artesanato e indústria; funcionalidade ("forma segue função"); geometria simples; rejeição de ornamentos; produção em massa. Professores: Kandinsky, Klee, Mies van der Rohe. Fechada pelos nazistas, influenciou arquitetura moderna mundial.',
    difficulty: 'hard',
    topic: 'Arquitetura',
    examInfo: 'CESPE - Movimentos arquitetônicos'
  },
  {
    question: 'A arquitetura gótica, predominante na Europa medieval (séc. XII-XVI), caracterizava-se por:',
    options: [
      'Arcos plenos, paredes espessas e pouca iluminação',
      'Arcos ogivais, vitrais coloridos, verticalidade e rosáceas',
      'Colunas gregas e frontões triangulares',
      'Concreto armado e vidro'
    ],
    correctAnswer: 1,
    explanation: 'A arquitetura gótica (séc. XII-XVI) caracterizava-se por: arcos ogivais (apontados), abóbadas de nervuras, arcobotantes (sustentação externa), verticalidade (torres elevadas aproximando de Deus), vitrais coloridos (luz divina), rosáceas. Exemplos: Notre-Dame de Paris, Catedral de Chartres, Colônia. Substituiu o Românico.',
    difficulty: 'medium',
    topic: 'Arquitetura',
    examInfo: 'FCC - Arquitetura medieval'
  },
  {
    question: 'Antoni Gaudí, arquiteto catalão, projetou a famosa Sagrada Família em:',
    options: [
      'Madri',
      'Barcelona',
      'Sevilha',
      'Valência'
    ],
    correctAnswer: 1,
    explanation: 'Antoni Gaudí (1852-1926) projetou a Basílica da Sagrada Família em Barcelona (iniciada 1882, ainda em construção). Estilo modernista catalão (Art Nouveau): formas orgânicas inspiradas na natureza, mosaicos coloridos, torres parabólicas. Outras obras em Barcelona: Park Güell, Casa Batlló, Casa Milà (La Pedrera). Patrimônio UNESCO.',
    difficulty: 'medium',
    topic: 'Arquitetura',
    examInfo: 'FGV - Arquitetura europeia'
  },
  {
    question: 'Le Corbusier, arquiteto franco-suíço, defendeu os "5 pontos da arquitetura moderna", que incluem:',
    options: [
      'Pilotis (pilares), terraço-jardim, planta livre, janela em fita, fachada livre',
      'Ornamentação barroca, simetria clássica, capitéis coríntios',
      'Arcos góticos, vitrais, contrafortes',
      'Adobe, palha e madeira'
    ],
    correctAnswer: 0,
    explanation: 'Le Corbusier (1887-1965) formulou os 5 pontos da arquitetura moderna (1927): 1) Pilotis (pilares liberando térreo), 2) Terraço-jardim, 3) Planta livre (sem paredes estruturais), 4) Janela em fita (horizontal contínua), 5) Fachada livre. Obras: Villa Savoye, Unidade de Habitação, Chandigarh (Índia). Influenciou Niemeyer.',
    difficulty: 'hard',
    topic: 'Arquitetura',
    examInfo: 'VUNESP - Arquitetura moderna'
  }
];

// ============================================================================
// TEMA 8: MANIFESTAÇÕES CULTURAIS (5 questões)
// ============================================================================

const manifestacoesCulturaisQuestions: Question[] = [
  {
    question: 'O Carnaval brasileiro é uma das maiores festas populares do mundo. As escolas de samba do Rio de Janeiro desfilam:',
    options: [
      'Na Avenida Paulista',
      'No Sambódromo (Marquês de Sapucaí)',
      'Em Copacabana',
      'No Maracanã'
    ],
    correctAnswer: 1,
    explanation: 'As escolas de samba do Rio de Janeiro desfilam no Sambódromo da Marquês de Sapucaí (inaugurado 1984, projetado por Oscar Niemeyer). Desfile do Grupo Especial na Sapucaí avaliado por quesitos: samba-enredo, bateria, harmonia, evolução, fantasias, alegorias, comissão de frente, mestre-sala e porta-bandeira. Maior festa popular brasileira.',
    difficulty: 'easy',
    topic: 'Manifestações Culturais',
    examInfo: 'Cultura popular em concursos'
  },
  {
    question: 'O Bumba-meu-boi é uma manifestação cultural folclórica tradicional de qual região brasileira:',
    options: [
      'Sul',
      'Sudeste',
      'Nordeste (especialmente Maranhão)',
      'Centro-Oeste'
    ],
    correctAnswer: 2,
    explanation: 'O Bumba-meu-boi (ou Boi-bumbá) é folguedo popular nordestino, especialmente forte no Maranhão (Patrimônio Cultural Imaterial da Humanidade UNESCO 2019). Auto popular que narra morte e ressurreição do boi, com personagens (Pai Francisco, Catirina, Cazumbás), música, dança, teatro. Variações: Boi de Parintins (AM).',
    difficulty: 'medium',
    topic: 'Manifestações Culturais',
    examInfo: 'CESPE - Folclore brasileiro'
  },
  {
    question: 'A Capoeira, manifestação cultural afro-brasileira que combina luta, dança, música e jogo, foi reconhecida como Patrimônio Cultural Imaterial da Humanidade pela UNESCO em:',
    options: [
      '1990',
      '2000',
      '2008',
      '2014'
    ],
    correctAnswer: 3,
    explanation: 'A Capoeira foi reconhecida como Patrimônio Cultural Imaterial da Humanidade pela UNESCO em 2014. Criada por africanos escravizados no Brasil (séc. XVI-XVII), mescla luta, acrobacia, dança, música (berimbau, atabaque, pandeiro), canto, filosofia. Duas vertentes principais: Capoeira Angola (tradicional, Mestre Pastinha) e Regional (moderna, Mestre Bimba).',
    difficulty: 'medium',
    topic: 'Manifestações Culturais',
    examInfo: 'FCC - Cultura afro-brasileira'
  },
  {
    question: 'O Frevo, dança carnavalesca de Pernambuco, caracteriza-se por:',
    options: [
      'Passos acrobáticos, sombrinha colorida e ritmo frenético',
      'Dança lenta e romântica',
      'Roda de samba',
      'Quadrilha junina'
    ],
    correctAnswer: 0,
    explanation: 'O Frevo (do verbo "ferver") é dança carnavalesca pernambucana (Recife, Olinda), Patrimônio Imaterial da Humanidade UNESCO (2012). Caracteriza-se por: passos acrobáticos (mais de 120 registrados), sombrinha colorida, ritmo rápido e frenético, influências de capoeira, marcha, polca. Três tipos: frevo de rua, frevo-canção, frevo de bloco.',
    difficulty: 'medium',
    topic: 'Manifestações Culturais',
    examInfo: 'FGV - Patrimônio cultural brasileiro'
  },
  {
    question: 'As Festas Juninas brasileiras celebram:',
    options: [
      'A chegada da primavera',
      'Santos católicos (Santo Antônio, São João, São Pedro) e tradições rurais',
      'O fim da escravidão',
      'A Proclamação da República'
    ],
    correctAnswer: 1,
    explanation: 'As Festas Juninas (junho) celebram santos católicos: Santo Antônio (13), São João (24 - maior festa), São Pedro (29). Tradições: fogueira, quadrilha (dança de pares), comidas típicas (milho, paçoca, pé-de-moleque, quentão), casamento caipira, balões (proibidos). Origem europeia adaptada ao Brasil rural. Campina Grande (PB) e Caruaru (PE) têm maiores festas.',
    difficulty: 'easy',
    topic: 'Manifestações Culturais',
    examInfo: 'VUNESP - Festas populares'
  }
];

// ============================================================================
// TEMA 9: PATRIMÔNIO CULTURAL (5 questões)
// ============================================================================

const patrimonioCulturalQuestions: Question[] = [
  {
    question: 'O Cristo Redentor, uma das Sete Maravilhas do Mundo Moderno, localiza-se no:',
    options: [
      'Pão de Açúcar',
      'Morro do Corcovado',
      'Morro Dois Irmãos',
      'Pedra da Gávea'
    ],
    correctAnswer: 1,
    explanation: 'O Cristo Redentor (inaugurado 1931) localiza-se no Morro do Corcovado, Rio de Janeiro. Estátua Art Déco de 30m (38m com pedestal), projetada por Heitor da Silva Costa e esculpida por Paul Landowski. Eleita uma das Sete Maravilhas do Mundo Moderno em 2007. Símbolo do Brasil, atrai milhões de turistas. Patrimônio histórico.',
    difficulty: 'easy',
    topic: 'Patrimônio Cultural',
    examInfo: 'Patrimônios brasileiros em concursos'
  },
  {
    question: 'Ouro Preto, cidade histórica mineira tombada como Patrimônio Mundial pela UNESCO, foi importante durante:',
    options: [
      'O Ciclo da Cana-de-açúcar',
      'O Ciclo do Ouro (séc. XVIII)',
      'O Ciclo do Café',
      'A Era da Borracha'
    ],
    correctAnswer: 1,
    explanation: 'Ouro Preto foi capital de Minas Gerais e centro do Ciclo do Ouro (séc. XVIII). Patrimônio Mundial UNESCO (1980), primeira cidade brasileira reconhecida. Arquitetura barroca: igrejas com talha dourada, obras de Aleijadinho (Igreja de São Francisco) e Mestre Ataíde. Palco da Inconfidência Mineira (1789). Preserva conjunto arquitetônico colonial.',
    difficulty: 'medium',
    topic: 'Patrimônio Cultural',
    examInfo: 'CESPE - Cidades históricas'
  },
  {
    question: 'O Pelourinho, centro histórico de Salvador, é conhecido por:',
    options: [
      'Arquitetura modernista e arranha-céus',
      'Arquitetura colonial portuguesa colorida e cultura afro-brasileira',
      'Construções indígenas',
      'Prédios góticos medievais'
    ],
    correctAnswer: 1,
    explanation: 'O Pelourinho (Centro Histórico de Salvador) é Patrimônio Mundial UNESCO (1985). Maior conjunto arquitetônico colonial português das Américas: casarões coloridos (séc. XVII-XIX), igrejas barrocas, ladeiras de pedra. Centro da cultura afro-brasileira: candomblé, capoeira, samba de roda, acarajé. Olodum. Revitalizado nos anos 1990.',
    difficulty: 'easy',
    topic: 'Patrimônio Cultural',
    examInfo: 'FCC - Patrimônio UNESCO no Brasil'
  },
  {
    question: 'Machu Picchu, cidade inca nas montanhas do Peru, é considerada:',
    options: [
      'Uma das Sete Maravilhas do Mundo Moderno',
      'Patrimônio exclusivamente brasileiro',
      'Construção egípcia',
      'Obra da colonização espanhola'
    ],
    correctAnswer: 0,
    explanation: 'Machu Picchu (séc. XV), Peru, é cidade inca nas montanhas andinas (2.430m altitude). Patrimônio Mundial UNESCO (1983) e uma das Sete Maravilhas do Mundo Moderno (2007). Construção em pedra sem argamassa, engenharia sofisticada, terraços agrícolas. Redescoberta por Hiram Bingham (1911). Mistério: função (religiosa? residência imperial?).',
    difficulty: 'medium',
    topic: 'Patrimônio Cultural',
    examInfo: 'FGV - Patrimônios mundiais'
  },
  {
    question: 'A Catedral de Notre-Dame de Paris, marco da arquitetura gótica francesa, sofreu um grave incêndio em:',
    options: [
      '2010',
      '2015',
      '2019',
      '2023'
    ],
    correctAnswer: 2,
    explanation: 'A Catedral de Notre-Dame de Paris sofreu grave incêndio em 15 de abril de 2019, destruindo a torre e cobertura. Construída entre 1163-1345, é obra-prima gótica: rosáceas, gárgulas, arcobotantes. Imortalizada no romance de Victor Hugo "Notre-Dame de Paris" (1831). Está sendo reconstruída, com reabertura prevista para 2024. Símbolo francês.',
    difficulty: 'easy',
    topic: 'Patrimônio Cultural',
    examInfo: 'VUNESP - Atualidades culturais'
  }
];

// ============================================================================
// FUNÇÃO PARA SEED DE TODAS AS QUESTÕES DE CULTURA GERAL
// ============================================================================

export const seedAllCulturaGeralQuestions = async () => {
  const allQuestions = [
    ...literaturaBrasileiraQuestions,
    ...literaturaMundialQuestions,
    ...artesPlasticasQuestions,
    ...musicaQuestions,
    ...cinemaQuestions,
    ...teatroQuestions,
    ...arquiteturaQuestions,
    ...manifestacoesCulturaisQuestions,
    ...patrimonioCulturalQuestions
  ];

  console.log(`🎭 Preparando ${allQuestions.length} questões de Cultura Geral para importação em lote...`);

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
