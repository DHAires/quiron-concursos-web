// Questões de Direito Civil - TEMAS 1-3 (30 questões)
// Área Jurídica - Direito Civil

export const questionsCivil1 = {
  // TEMA 1: Parte Geral - Pessoas e Bens (10 questões)
  "parte-geral-pessoas-e-bens": [
    {
      id: "civil-pg-01",
      enunciado: "Sobre a capacidade civil das pessoas naturais (CC/02, arts. 1º a 5º), é correto afirmar:",
      alternativas: {
        A: "A personalidade civil começa com o nascimento com vida, mas a lei protege os direitos do nascituro desde a concepção.",
        B: "A personalidade civil começa apenas no registro de nascimento.",
        C: "O nascituro não possui qualquer proteção legal antes do nascimento.",
        D: "A capacidade civil é adquirida aos 21 anos.",
        E: "Menores de 16 anos têm capacidade civil plena."
      },
      gabarito: "A",
      explicacao: "CC/02, art. 2º: 'A personalidade civil da pessoa começa do nascimento com vida; mas a lei põe a salvo, desde a concepção, os direitos do nascituro'. A personalidade inicia-se com o nascimento com vida (teoria natalista), mas o nascituro tem direitos resguardados (herança, alimentos, danos morais). B incorreta - não exige registro. C incorreta - nascituro tem proteção. D incorreta - capacidade plena aos 18 anos (art. 5º). E incorreta - menores de 16 são absolutamente incapazes (art. 3º).",
      banca: "CESPE",
      ano: 2023,
      cargo: "Juiz de Direito - TJDFT"
    },
    {
      id: "civil-pg-02",
      enunciado: "Em relação às incapacidades absolutas e relativas, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "São absolutamente incapazes os menores de 16 anos.",
        B: "São relativamente incapazes os maiores de 16 e menores de 18 anos.",
        C: "Os ébrios habituais são absolutamente incapazes.",
        D: "O pródigo tem capacidade relativa apenas para atos de disposição patrimonial.",
        E: "A curatela é medida extraordinária (Estatuto da Pessoa com Deficiência)."
      },
      gabarito: "C",
      explicacao: "CC/02, art. 3º (Lei 13.146/15 - Estatuto da Pessoa com Deficiência): absolutamente incapazes APENAS menores de 16 anos. Art. 4º: relativamente incapazes: maiores de 16 e menores de 18; ébrios habituais e viciados em tóxico; pródigos; aqueles que não puderem exprimir vontade (transitório). C está INCORRETA - ébrios habituais são RELATIVAMENTE incapazes. Curatela: medida extraordinária (art. 84, EPD). A, B, D, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Juiz de Direito - TJPE"
    },
    {
      id: "civil-pg-03",
      enunciado: "Quanto à emancipação (CC/02, art. 5º), é correto afirmar:",
      alternativas: {
        A: "Emancipação só ocorre aos 18 anos.",
        B: "Emancipação voluntária exige ambos os pais, se vivos, e idade mínima de 16 anos.",
        C: "O casamento não emancipa.",
        D: "Exercício de emprego público não gera emancipação.",
        E: "Estabelecimento civil não emancipa."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 5º: emancipação (antecipa capacidade plena): 1) VOLUNTÁRIA: concessão pelos pais (ou um deles se o outro morreu), por escritura pública, aos 16 anos completos; 2) JUDICIAL: sentença do juiz (tutelado); 3) LEGAL: casamento; exercício de emprego público efetivo; colação de grau em curso superior; estabelecimento civil ou comercial ou relação de emprego (16 anos, economia própria). A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-pg-04",
      enunciado: "Sobre o domicílio civil (CC/02, arts. 70 a 78), assinale a alternativa correta:",
      alternativas: {
        A: "Domicílio é o mesmo que residência.",
        B: "Domicílio da pessoa natural é o lugar onde estabelece residência com ânimo definitivo.",
        C: "Não se pode ter mais de um domicílio.",
        D: "Domicílio do incapaz é sempre São Paulo.",
        E: "Servidor público não tem domicílio especial."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 70: domicílio da pessoa natural é o lugar onde estabelece residência COM ÂNIMO DEFINITIVO. Elementos: RESIDÊNCIA (corpus) + ÂNIMO DEFINITIVO (animus). PLURALIDADE de domicílios: possível (art. 71 - várias residências; art. 72 - profissão). Domicílio do incapaz: representante/assistente (art. 76). Servidor público: onde exerce função (art. 76). A incorreta - conceitos diferentes. C incorreta. D e E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ/RJ"
    },
    {
      id: "civil-pg-05",
      enunciado: "Em relação às pessoas jurídicas de direito privado, é INCORRETO afirmar:",
      alternativas: {
        A: "Começam sua existência legal com o registro de seus atos constitutivos.",
        B: "Associações têm finalidade lucrativa.",
        C: "Fundações são criadas por escritura pública ou testamento.",
        D: "Sociedades podem ter fins econômicos.",
        E: "As pessoas jurídicas têm existência distinta de seus membros."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 45: pessoas jurídicas de direito privado iniciam existência legal com REGISTRO (princípio da publicidade). Art. 44: são pessoas jurídicas de direito privado: associações, sociedades, fundações, organizações religiosas, partidos políticos, EIRELI. ASSOCIAÇÕES (art. 53): NÃO têm fins lucrativos (união de pessoas para fins não econômicos). SOCIEDADES: fins econômicos. FUNDAÇÕES: patrimônio destinado a fim específico. B INCORRETA - associações NÃO têm fins lucrativos. A, C, D, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "civil-pg-06",
      enunciado: "Quanto à desconsideração da personalidade jurídica (CC/02, art. 50), assinale a alternativa correta:",
      alternativas: {
        A: "A personalidade jurídica nunca pode ser desconsiderada.",
        B: "A desconsideração pode ocorrer em caso de abuso da personalidade, caracterizado por desvio de finalidade ou confusão patrimonial.",
        C: "Basta haver dívida para desconsiderar a personalidade.",
        D: "A desconsideração é automática.",
        E: "Apenas sócios majoritários respondem."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 50 (Lei 13.874/19 - Lei da Liberdade Econômica): desconsideração da personalidade jurídica permite que credores alcancem bens particulares dos sócios. Requisitos: ABUSO da personalidade jurídica caracterizado por: 1) DESVIO DE FINALIDADE; ou 2) CONFUSÃO PATRIMONIAL. Não basta inadimplemento. Exige decisão judicial (incidente de desconsideração - CPC, art. 133). STJ: teoria maior (abuso) é regra; teoria menor (simples prejuízo) é excepcional. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Municipal - SP"
    },
    {
      id: "civil-pg-07",
      enunciado: "Sobre a classificação dos bens (CC/02, arts. 79 a 103), é correto afirmar:",
      alternativas: {
        A: "Bens imóveis são apenas terrenos.",
        B: "Bens imóveis compreendem solo, subsolo, espaço aéreo e tudo que se incorpora naturalmente ou artificialmente.",
        C: "Árvores são sempre bens móveis.",
        D: "Construções são bens móveis.",
        E: "Direitos reais sobre imóveis são bens móveis."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 79: BENS IMÓVEIS: I) solo, subsolo e espaço aéreo; II) tudo que se incorpora natural ou artificialmente (árvores, construções); III) acessões artificiais; IV) direitos reais sobre imóveis (exceto penhor e anticrese). BENS MÓVEIS (art. 82): suscetíveis de movimento próprio ou remoção. B correta. A, C, D, E incorretas - conceito restritivo.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-pg-08",
      enunciado: "Em relação aos bens fungíveis e consumíveis, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Bens fungíveis podem ser substituídos por outros da mesma espécie, qualidade e quantidade.",
        B: "Bens consumíveis são aqueles cujo uso importa destruição imediata.",
        C: "Dinheiro é bem fungível.",
        D: "Todos os bens fungíveis são consumíveis.",
        E: "Combustível é bem consumível."
      },
      gabarito: "D",
      explicacao: "CC/02: BENS FUNGÍVEIS (art. 85): móveis que podem ser substituídos por outros da mesma espécie, qualidade e quantidade (ex: dinheiro, sacas de café). BENS CONSUMÍVEIS (art. 86): móveis cujo uso importa destruição imediata da própria substância (de fato - alimentos) ou que se destinam à alienação (de direito - mercadorias). D INCORRETA - nem todo fungível é consumível (ex: livros são fungíveis mas não consumíveis). A, B, C, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - TJ/AM"
    },
    {
      id: "civil-pg-09",
      enunciado: "Quanto aos bens públicos (CC/02, arts. 98 a 103), é correto afirmar:",
      alternativas: {
        A: "Todos os bens públicos são alienáveis.",
        B: "Bens de uso comum do povo e de uso especial são inalienáveis enquanto conservarem essa qualificação.",
        C: "Bens dominicais não podem ser alienados.",
        D: "Bens públicos podem ser usucapidos.",
        E: "Praias são bens dominicais."
      },
      gabarito: "B",
      explicacao: "CC/02, art. 99: bens públicos: I) USO COMUM do povo (mares, rios, estradas, praias); II) USO ESPECIAL (edifícios públicos, repartições); III) DOMINICAIS (não têm destinação pública, constituem patrimônio). Art. 100: bens de uso comum e uso especial são INALIENÁVEIS enquanto conservarem qualificação. Art. 101: dominicais podem ser alienados (desafetação). Art. 102: bens públicos NÃO se sujeitam a usucapião (CF, art. 183, §3º e 191, §ú). A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador do Estado - PGE/PE"
    },
    {
      id: "civil-pg-10",
      enunciado: "Sobre o bem de família legal (Lei 8.009/90), assinale a alternativa correta:",
      alternativas: {
        A: "Protege todos os imóveis da família.",
        B: "Protege o imóvel residencial próprio da entidade familiar contra penhora, sendo impenhorável.",
        C: "Não há exceções à impenhorabilidade.",
        D: "Apartamentos alugados são protegidos pelo bem de família legal.",
        E: "Imóvel rural sempre é bem de família."
      },
      gabarito: "B",
      explicacao: "Lei 8.009/90, art. 1º: BEM DE FAMÍLIA LEGAL: imóvel residencial PRÓPRIO do casal ou entidade familiar é IMPENHORÁVEL e não responderá por dívidas civis, comerciais, fiscais (salvo exceções). Não precisa de registro. EXCEÇÕES (art. 3º): dívidas de pensão alimentícia, IPTU do imóvel, despesas condominiais, construção/venda do imóvel, credor de trabalhador da residência. STJ: SUV, lancha não são protegidos. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Defensor Público - DPE/AM"
    }
  ],

  // TEMA 2: Fatos Jurídicos (10 questões)
  "fatos-juridicos": [
    {
      id: "civil-fj-01",
      enunciado: "Sobre o conceito de fato jurídico, é correto afirmar:",
      alternativas: {
        A: "Fato jurídico é apenas ato humano voluntário.",
        B: "Fato jurídico é todo acontecimento natural ou humano apto a produzir efeitos jurídicos.",
        C: "Apenas nascimento e morte são fatos jurídicos.",
        D: "Fatos da natureza não são fatos jurídicos.",
        E: "Ato ilícito não é fato jurídico."
      },
      gabarito: "B",
      explicacao: "FATO JURÍDICO (sentido amplo): todo acontecimento, natural ou humano, que produz efeitos jurídicos (criação, modificação, extinção de direitos). Classificação: 1) FATO JURÍDICO STRICTO SENSU (natural): nascimento, morte, maioridade, decurso de tempo; 2) ATO JURÍDICO LATO SENSU (humano): a) ato jurídico stricto sensu; b) negócio jurídico; c) ato ilícito. B correta. A, C, D, E incorretas - conceito restritivo.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Juiz de Direito - TJDFT"
    },
    {
      id: "civil-fj-02",
      enunciado: "Em relação ao negócio jurídico, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Negócio jurídico é manifestação de vontade destinada a produzir efeitos jurídicos desejados pelo agente.",
        B: "Plano da existência verifica se há manifestação de vontade, agente, objeto e forma.",
        C: "Plano da validade exige agente capaz, objeto lícito e forma prescrita ou não defesa em lei.",
        D: "Negócio jurídico válido sempre produz efeitos.",
        E: "Plano da eficácia verifica se negócio produz efeitos (condição, termo, encargo)."
      },
      gabarito: "D",
      explicacao: "NEGÓCIO JURÍDICO: manifestação de vontade para produzir efeitos jurídicos QUERIDOS. PLANOS: 1) EXISTÊNCIA: elementos (manifestação de vontade, agente, objeto, forma); 2) VALIDADE: requisitos (art. 104 - agente capaz, objeto lícito possível determinável, forma prescrita/não defesa); 3) EFICÁCIA: produção de efeitos (elementos acidentais: condição, termo, encargo). D INCORRETA - negócio válido pode não produzir efeitos ainda (ex: condição suspensiva). A, B, C, E corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Juiz de Direito - TJPE"
    },
    {
      id: "civil-fj-03",
      enunciado: "Quanto aos elementos acidentais do negócio jurídico, é correto afirmar:",
      alternativas: {
        A: "Condição é evento futuro e incerto que subordina eficácia do negócio.",
        B: "Termo é evento futuro e incerto.",
        C: "Encargo não pode ser imposto em negócio gratuito.",
        D: "Condição suspensiva invalida o negócio.",
        E: "Termo resolutivo não pode ser usado."
      },
      gabarito: "A",
      explicacao: "CC/02, arts. 121-137: ELEMENTOS ACIDENTAIS (facultativos): 1) CONDIÇÃO (art. 121): evento futuro e INCERTO que SUBORDINA a eficácia. Suspensiva (suspende eficácia até implemento) ou resolutiva (extingue eficácia). 2) TERMO (art. 131): evento futuro e CERTO. Suspensivo ou resolutivo. 3) ENCARGO/MODO (art. 136): ônus imposto em liberalidade. A correta. B incorreta - termo é certo. C incorreta - encargo em liberalidades. D e E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-fj-04",
      enunciado: "Sobre os defeitos do negócio jurídico, assinale a alternativa correta:",
      alternativas: {
        A: "Erro, dolo, coação, estado de perigo e lesão são vícios de consentimento.",
        B: "Fraude contra credores é vício de consentimento.",
        C: "Simulação não é defeito do negócio jurídico.",
        D: "Erro gera nulidade absoluta.",
        E: "Coação moral não é defeito."
      },
      gabarito: "A",
      explicacao: "CC/02, arts. 138-165: DEFEITOS DO NEGÓCIO JURÍDICO: 1) VÍCIOS DE CONSENTIMENTO (vontade viciada - ANULABILIDADE): erro/ignorância, dolo, coação, estado de perigo, lesão; 2) VÍCIOS SOCIAIS (prejudicam terceiros - ANULABILIDADE): fraude contra credores, simulação (NULIDADE após CC/02). A correta. B incorreta - vício social. C incorreta - é defeito. D incorreta - erro gera anulabilidade. E incorreta - coação moral é defeito.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ/RJ"
    },
    {
      id: "civil-fj-05",
      enunciado: "Em relação ao erro como vício de consentimento, é INCORRETO afirmar:",
      alternativas: {
        A: "Erro substancial é aquele que afeta elemento essencial do negócio.",
        B: "Erro sobre a pessoa pode anular negócio quando a consideração da pessoa for razão determinante.",
        C: "Erro de direito permite anulação quando não envolver recusa à aplicação da lei.",
        D: "Qualquer erro anula o negócio jurídico.",
        E: "Erro escusável é requisito para anulação."
      },
      gabarito: "D",
      explicacao: "CC/02, arts. 138-144: ERRO: falsa representação da realidade. Requisitos: SUBSTANCIAL (essencial), ESCUSÁVEL (desculpável), REAL (causa determinante). ERRO SUBSTANCIAL (art. 139): natureza do negócio, objeto principal, pessoa (quando essencial), direito (sem recusa à lei). ERRO ACIDENTAL: não anula. D INCORRETA - apenas erro substancial escusável anula. A, B, C, E corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "civil-fj-06",
      enunciado: "Quanto ao dolo como vício de consentimento, assinale a alternativa correta:",
      alternativas: {
        A: "Dolo é erro espontâneo.",
        B: "Dolo é artifício ou expediente malicioso para induzir alguém a praticar negócio prejudicial.",
        C: "Dolo acidental anula o negócio.",
        D: "Dolo de terceiro não afeta o negócio.",
        E: "Dolus bonus gera anulação."
      },
      gabarito: "B",
      explicacao: "CC/02, arts. 145-150: DOLO: artifício malicioso, astúcia, para induzir alguém a praticar negócio prejudicial. DOLO PRINCIPAL (essencial): sem ele negócio não se realizaria - ANULA. DOLO ACIDENTAL: sem ele negócio seria feito em outras condições - NÃO anula, gera perdas e danos. DOLO DE TERCEIRO (art. 148): anula se parte beneficiária sabia; se não sabia, terceiro responde por perdas e danos. DOLUS BONUS: exagero tolerável. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Municipal - SP"
    },
    {
      id: "civil-fj-07",
      enunciado: "Sobre a coação como defeito do negócio jurídico, é correto afirmar:",
      alternativas: {
        A: "Apenas coação física é vício de consentimento.",
        B: "Coação moral (vis compulsiva) é vício que gera anulabilidade.",
        C: "Temor reverencial é coação.",
        D: "Ameaça de exercício regular de direito configura coação.",
        E: "Coação não precisa ser causa determinante."
      },
      gabarito: "B",
      explicacao: "CC/02, arts. 151-155: COAÇÃO: pressão física ou moral que retira liberdade de consentimento. COAÇÃO FÍSICA (vis absoluta): elimina vontade - inexistência do negócio. COAÇÃO MORAL (vis compulsiva): vicia vontade - ANULABILIDADE. Requisitos: grave, injusta, atual/iminente, causa determinante. NÃO configura: temor reverencial (art. 153), ameaça de exercício regular de direito (art. 153). B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-fj-08",
      enunciado: "Em relação à lesão (CC/02, art. 157), assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Lesão ocorre quando pessoa, sob premente necessidade ou inexperiência, obriga-se a prestação manifestamente desproporcional.",
        B: "Lesão tem elemento objetivo (desproporção) e subjetivo (premente necessidade ou inexperiência).",
        C: "Lesão gera nulidade absoluta.",
        D: "Aproveitando-se do estado da vítima é requisito.",
        E: "Desproporção deve existir no momento da celebração."
      },
      gabarito: "C",
      explicacao: "CC/02, art. 157: LESÃO: pessoa, sob PREMENTE NECESSIDADE ou INEXPERIÊNCIA, obriga-se a prestação MANIFESTAMENTE DESPROPORCIONAL ao valor da prestação oposta. Requisitos: 1) ELEMENTO SUBJETIVO: premente necessidade ou inexperiência; 2) ELEMENTO OBJETIVO: desproporção manifesta; 3) APROVEITAMENTO. Sanção: ANULABILIDADE (pode ser evitada oferecendo suplemento - art. 157, §2º). C INCORRETA - gera anulabilidade. A, B, D, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - TJ/AM"
    },
    {
      id: "civil-fj-09",
      enunciado: "Quanto à invalidade do negócio jurídico, é correto afirmar:",
      alternativas: {
        A: "Nulidade absoluta e anulabilidade são a mesma coisa.",
        B: "Negócio nulo pode ser confirmado.",
        C: "Nulidade absoluta pode ser alegada por qualquer interessado, MP ou juiz de ofício; não convalesce e é imprescritível.",
        D: "Anulabilidade pode ser decretada de ofício.",
        E: "Negócio anulável não produz efeitos até anulação."
      },
      gabarito: "C",
      explicacao: "CC/02: NULIDADE ABSOLUTA (arts. 166-167): vício grave, interesse público. Alegação: qualquer interessado, MP, juiz de ofício. NÃO convalesce. Imprescritível. Não produz efeitos. ANULABILIDADE (arts. 171-179): vício menos grave, interesse privado. Alegação: apenas prejudicado. Convalesce (confirmação). Prazo decadencial (4 anos em regra). Produz efeitos até anulação. C correta. A, B, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador do Estado - PGE/PE"
    },
    {
      id: "civil-fj-10",
      enunciado: "Sobre a prescrição e a decadência, assinale a alternativa correta:",
      alternativas: {
        A: "Prescrição atinge o direito; decadência atinge a pretensão.",
        B: "Prescrição pode ser renunciada após consumada; decadência legal não pode.",
        C: "Prescrição não corre entre ascendentes e descendentes durante poder familiar.",
        D: "Prazo de prescrição não pode ser interrompido.",
        E: "Decadência convencional pode ser decretada de ofício."
      },
      gabarito: "B",
      explicacao: "PRESCRIÇÃO (arts. 189-206): perda da PRETENSÃO (ação) pelo decurso do tempo. Prazo: 10 anos (geral), 3 anos (específicos). Interrompível, suspensível. Renúncia: após consumada (art. 191). Causas impeditivas/suspensivas (art. 197: cônjuges, ascendentes/descendentes). DECADÊNCIA (arts. 207-211): perda do DIREITO potestativo. Prazo: legal (não corre contra absolutamente incapaz) ou convencional. Legal: não pode ser renunciada. Convencional: pode. B correta. A, C, D, E incorretas ou incompletas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Defensor Público - DPE/SP"
    }
  ],

  // TEMA 3: Obrigações (10 questões)
  "obrigacoes": [
    {
      id: "civil-obr-01",
      enunciado: "Sobre a estrutura da relação obrigacional, é correto afirmar:",
      alternativas: {
        A: "Obrigação tem apenas dois elementos: sujeito e objeto.",
        B: "A relação obrigacional compõe-se de: sujeito ativo (credor), sujeito passivo (devedor) e objeto (prestação).",
        C: "Vínculo jurídico não é elemento da obrigação.",
        D: "Prestação não precisa ser patrimonial.",
        E: "Débito e responsabilidade são sinônimos."
      },
      gabarito: "B",
      explicacao: "ESTRUTURA DA OBRIGAÇÃO: 1) SUJEITO ATIVO (credor - titular do direito à prestação); 2) SUJEITO PASSIVO (devedor - deve cumprir prestação); 3) OBJETO/PRESTAÇÃO (dar, fazer, não fazer - deve ser PATRIMONIAL); 4) VÍNCULO JURÍDICO. DÉBITO (Schuld): dever de prestar. RESPONSABILIDADE (Haftung): sujeição do patrimônio. B correta. A, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Juiz de Direito - TJDFT"
    },
    {
      id: "civil-obr-02",
      enunciado: "Em relação às obrigações de dar, fazer e não fazer, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Obrigação de dar coisa certa abrange acessórios e frutos desde a obrigação.",
        B: "Na obrigação de dar coisa incerta, a escolha cabe ao devedor se o contrário não se estipulou.",
        C: "Obrigação de fazer infungível não admite execução por terceiro.",
        D: "Obrigação de não fazer se resolve em perdas e danos se o devedor praticar ato vedado.",
        E: "Credor pode escolher a pior coisa na obrigação de dar coisa incerta."
      },
      gabarito: "E",
      explicacao: "CC/02: OBRIGAÇÃO DE DAR COISA CERTA (arts. 233-242): transferir propriedade ou restituir. Acessórios inclusos. Perda: sem culpa resolve; com culpa converte em perdas e danos. COISA INCERTA (arts. 243-246): gênero e quantidade. CONCENTRAÇÃO/ESCOLHA: devedor (se não estipulado). Não pode dar pior nem obrigar credor a receber melhor (art. 244). FAZER (arts. 247-249): fungível ou infungível. NÃO FAZER (art. 250): se praticar, desfaz + perdas e danos. E INCORRETA. A, B, C, D corretas.",
      banca: "FCC",
      ano: 2023,
      cargo: "Juiz de Direito - TJPE"
    },
    {
      id: "civil-obr-03",
      enunciado: "Quanto às obrigações alternativas e facultativas, é correto afirmar:",
      alternativas: {
        A: "Obrigação alternativa tem múltiplas prestações e todas devem ser cumpridas.",
        B: "Na obrigação alternativa, há múltiplas prestações e o devedor se exonera cumprindo uma delas.",
        C: "Obrigação facultativa tem múltiplas prestações principais.",
        D: "Na obrigação alternativa, perda de todas as prestações sem culpa não resolve obrigação.",
        E: "Escolha na obrigação alternativa é sempre do credor."
      },
      gabarito: "B",
      explicacao: "OBRIGAÇÃO ALTERNATIVA (arts. 252-256): duas ou mais prestações. Devedor se EXONERA cumprindo UMA. Escolha: devedor (se não estipulado). Perda: sem culpa de prestações, resolve se restar uma; com culpa, credor escolhe + perdas e danos. OBRIGAÇÃO FACULTATIVA (não no CC): uma prestação principal, devedor pode substituir por outra. B correta. A, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2023,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-obr-04",
      enunciado: "Sobre as obrigações divisíveis e indivisíveis, assinale a alternativa correta:",
      alternativas: {
        A: "Obrigação divisível não pode ser fracionada.",
        B: "Obrigação indivisível é aquela cuja prestação não pode ser fracionada sem alteração de substância, diminuição de valor ou prejuízo ao credor.",
        C: "Havendo pluralidade de credores/devedores em obrigação indivisível, pode ser exigida de forma fracionada.",
        D: "Indivisibilidade não pode ser convencional.",
        E: "Todos os devedores respondem pela dívida toda mesmo na obrigação divisível."
      },
      gabarito: "B",
      explicacao: "CC/02, arts. 257-263: OBRIGAÇÃO DIVISÍVEL: prestação suscetível de fracionamento (ex: dinheiro). Pluralidade de credores/devedores: presume-se dividida em partes iguais (art. 257). OBRIGAÇÃO INDIVISÍVEL: prestação não pode ser FRACIONADA sem alteração da substância, diminuição de valor ou prejuízo. Pode ser: natural (coisa) ou convencional. Pluralidade: cada devedor pode ser obrigado pela dívida toda; cada credor pode exigir dívida toda (art. 259). B correta. A, C, D, E incorretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista Judiciário - TJ/RJ"
    },
    {
      id: "civil-obr-05",
      enunciado: "Em relação às obrigações solidárias, é INCORRETO afirmar:",
      alternativas: {
        A: "Solidariedade não se presume, decorre da lei ou da vontade das partes.",
        B: "Na solidariedade ativa, cada credor pode exigir a dívida toda.",
        C: "Na solidariedade passiva, credor pode exigir de qualquer devedor a dívida toda.",
        D: "Credor que recebe deve repassar aos demais na solidariedade ativa.",
        E: "Solidariedade se presume."
      },
      gabarito: "E",
      explicacao: "CC/02, arts. 264-285: SOLIDARIEDADE: pluralidade de credores ou devedores, cada um pode exigir/é obrigado pela dívida toda. Art. 265: NÃO SE PRESUME, resulta da LEI ou VONTADE das partes. SOLIDARIEDADE ATIVA (arts. 267-274): cada credor pode exigir toda dívida; pagamento a um libera devedor; credor que recebe deve repassar quota aos demais. SOLIDARIEDADE PASSIVA (arts. 275-285): credor pode exigir de qualquer devedor; devedor que paga tem regresso. E INCORRETA. A, B, C, D corretas.",
      banca: "CESPE",
      ano: 2022,
      cargo: "Procurador Federal - AGU"
    },
    {
      id: "civil-obr-06",
      enunciado: "Quanto à transmissão das obrigações, assinale a alternativa correta:",
      alternativas: {
        A: "Obrigações personalíssimas podem ser cedidas.",
        B: "Cessão de crédito transfere o crédito do cedente ao cessionário.",
        C: "Cessão de crédito exige anuência do devedor para valer entre as partes.",
        D: "Assunção de dívida independe de anuência do credor.",
        E: "Cessão de débito não existe."
      },
      gabarito: "B",
      explicacao: "CC/02: CESSÃO DE CRÉDITO (arts. 286-298): transferência do crédito do cedente (credor) ao cessionário. Não exige anuência do devedor para valer entre partes (art. 290), mas deve ser NOTIFICADO. Não se cedem créditos personalíssimos, impenhoráveis. ASSUNÇÃO DE DÍVIDA (arts. 299-303): devedor transfere dívida a terceiro. EXIGE anuência do CREDOR (art. 299). B correta. A, C, D incorretas. E incorreta - assunção de dívida existe.",
      banca: "FCC",
      ano: 2023,
      cargo: "Procurador Municipal - SP"
    },
    {
      id: "civil-obr-07",
      enunciado: "Sobre o adimplemento e extinção das obrigações, é correto afirmar:",
      alternativas: {
        A: "Pagamento pode ser feito por terceiro interessado ou não interessado.",
        B: "Credor é obrigado a receber pagamento parcial.",
        C: "Pagamento antes do vencimento gera redução da dívida.",
        D: "Prova do pagamento incumbe ao credor.",
        E: "Mora do credor não existe."
      },
      gabarito: "A",
      explicacao: "CC/02, arts. 304-388: PAGAMENTO: cumprimento da obrigação. Pode ser feito por TERCEIRO interessado (fiador) ou NÃO interessado (com ou sem anuência do devedor - arts. 304-305). Credor NÃO é obrigado a receber PARCIAL (art. 314). Pagamento ANTECIPADO: válido, não gera desconto (art. 133). PROVA: quem paga (art. 319 - quitação). MORA DO CREDOR: possível (arts. 394-401). A correta. B, C, D, E incorretas.",
      banca: "VUNESP",
      ano: 2022,
      cargo: "Juiz de Direito - TJSP"
    },
    {
      id: "civil-obr-08",
      enunciado: "Em relação à imputação do pagamento, assinale a alternativa INCORRETA:",
      alternativas: {
        A: "Havendo dívidas vencidas e vincendas, imputa-se pagamento nas vencidas.",
        B: "Sendo dívidas vencidas, imputa-se na mais onerosa.",
        C: "Devedor pode escolher livremente qual dívida pagar.",
        D: "Não havendo declaração, pagamento se imputa na dívida vencida; entre vencidas, na mais onerosa.",
        E: "Imputação em capital e juros: primeiro juros."
      },
      gabarito: "C",
      explicacao: "CC/02, arts. 352-355: IMPUTAÇÃO DO PAGAMENTO: devedor com várias dívidas ao mesmo credor indica em qual imputa pagamento (art. 352). REGRAS: 1) Se NÃO declarar: imputa-se em dívida VENCIDA; entre vencidas, na mais ONEROSA; sendo iguais, proporcionalmente; 2) Em CAPITAL e JUROS: primeiro JUROS (art. 354); 3) NÃO pode imputar em capital se juros devidos (art. 354). C INCORRETA - não é totalmente livre, há regras. A, B, D, E corretas.",
      banca: "FGV",
      ano: 2023,
      cargo: "Analista - TJ/AM"
    },
    {
      id: "civil-obr-09",
      enunciado: "Quanto à mora, é correto afirmar:",
      alternativas: {
        A: "Mora é descumprimento temporário da obrigação.",
        B: "Mora ex re (mora automática) depende de interpelação.",
        C: "Mora ex personae depende de constituição em mora.",
        D: "Mora do credor não existe.",
        E: "Juros moratórios não são devidos."
      },
      gabarito: "A",
      explicacao: "CC/02, arts. 394-401: MORA: retardo culposo no cumprimento (descumprimento TEMPORÁRIO). MORA DO DEVEDOR (solvendi): não paga no tempo/lugar/forma. MORA EX RE (art. 397): automática (dies interpelat pro homine) - obrigação líquida com termo. MORA EX PERSONAE: depende de interpelação/notificação. Consequências: JUROS MORATÓRIOS (1% a.m. se não estipulados), atualização, perdas e danos, cláusula penal. MORA DO CREDOR (accipiendi): recusa injustificada. A correta. B, C, D, E incorretas.",
      banca: "CESPE",
      ano: 2023,
      cargo: "Procurador do Estado - PGE/PE"
    },
    {
      id: "civil-obr-10",
      enunciado: "Sobre o inadimplemento absoluto e perdas e danos, assinale a alternativa correta:",
      alternativas: {
        A: "Inadimplemento absoluto é o mesmo que mora.",
        B: "No inadimplemento absoluto, prestação tornou-se inútil ou impossível.",
        C: "Perdas e danos não incluem lucros cessantes.",
        D: "Dano emergente é o lucro que se deixou de ganhar.",
        E: "Cláusula penal substitui perdas e danos, devendo ser provado prejuízo."
      },
      gabarito: "B",
      explicacao: "INADIMPLEMENTO ABSOLUTO: descumprimento definitivo, prestação tornou-se INÚTIL ou IMPOSSÍVEL para credor. Resolve obrigação + perdas e danos. PERDAS E DANOS (art. 402): 1) DANO EMERGENTE: o que efetivamente se perdeu; 2) LUCROS CESSANTES: o que razoavelmente deixou de lucrar. CLÁUSULA PENAL (arts. 408-416): prefixação de perdas e danos, NÃO precisa provar prejuízo. B correta. A, C, D, E incorretas.",
      banca: "FCC",
      ano: 2022,
      cargo: "Defensor Público - DPE/SP"
    }
  ]
};
