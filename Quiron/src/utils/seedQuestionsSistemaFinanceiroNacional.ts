import { projectId, publicAnonKey } from './supabase/info';

// Sistema Financeiro Nacional - 45 questões comentadas baseadas em concursos nacionais

// ========== 1. CONSELHO MONETÁRIO NACIONAL (CMN) - 5 questões ==========
const questoesCMN = [
  {
    id: "sfn-cmn-001",
    enunciado: "O Conselho Monetário Nacional (CMN) é o órgão máximo do Sistema Financeiro Nacional, responsável por formular a política da moeda e do crédito. Sobre as competências do CMN, assinale a alternativa correta.",
    alternativas: {
      A: "Executar a política monetária e cambial definida pelo Banco Central",
      B: "Autorizar as emissões de papel-moeda e regular a constituição de instituições financeiras",
      C: "Fiscalizar diretamente as instituições financeiras",
      D: "Determinar as taxas de juros praticadas pelos bancos comerciais",
      E: "Administrar as reservas internacionais do país"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. O CMN é o órgão normativo máximo do SFN e tem como competências: regular a constituição, funcionamento e fiscalização das instituições financeiras; autorizar emissões de papel-moeda; e estabelecer diretrizes gerais para a política monetária e cambial. A execução dessas políticas cabe ao BACEN (alternativa A). A fiscalização direta é função do BACEN (alternativa C). O CMN não determina taxas específicas, apenas diretrizes (D). A administração das reservas é do BACEN (E).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-cmn-002",
    enunciado: "A composição do Conselho Monetário Nacional foi alterada pela Lei 9.069/95. Atualmente, o CMN é composto por quantos membros e quais são eles?",
    alternativas: {
      A: "Cinco membros: Ministro da Fazenda, Presidente do Banco Central, Presidente da CVM, Presidente do Banco do Brasil e Presidente da CEF",
      B: "Três membros: Ministro da Fazenda (presidente), Ministro do Planejamento e Presidente do Banco Central",
      C: "Sete membros, incluindo representantes do setor bancário privado",
      D: "Quatro membros: Ministro da Fazenda, Presidente do Banco Central, Presidente do BNDES e Presidente da CVM",
      E: "Nove membros, incluindo representantes de entidades de classe"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Desde 1995, com a Lei 9.069/95, o CMN passou a ter composição mais enxuta, sendo integrado por apenas 3 membros: Ministro da Fazenda (que o preside), Ministro do Planejamento, Orçamento e Gestão, e Presidente do Banco Central do Brasil. Esta mudança visou maior agilidade e eficiência nas decisões.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-cmn-003",
    enunciado: "Dentre as atribuições do Conselho Monetário Nacional, NÃO se inclui:",
    alternativas: {
      A: "Fixar as diretrizes e normas da política cambial",
      B: "Disciplinar o crédito em todas as suas modalidades",
      C: "Executar os serviços do meio circulante",
      D: "Regular a constituição, funcionamento e fiscalização de instituições financeiras",
      E: "Determinar recolhimentos compulsórios"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. Executar os serviços do meio circulante (emissão de moeda) é atribuição do BANCO CENTRAL, não do CMN. O CMN é órgão NORMATIVO, ou seja, estabelece normas e diretrizes, mas não executa. As alternativas A, B, D e E são competências do CMN previstas na Lei 4.595/64.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-cmn-004",
    enunciado: "O CMN estabelece normas para o Sistema Financeiro Nacional. Sobre as deliberações do CMN, é correto afirmar que:",
    alternativas: {
      A: "São executadas diretamente pelo próprio CMN através de suas superintendências regionais",
      B: "Dependem de aprovação do Congresso Nacional para entrarem em vigor",
      C: "São implementadas principalmente pelo Banco Central do Brasil e pela CVM, conforme a área de atuação",
      D: "Têm validade imediata apenas para instituições financeiras públicas",
      E: "Necessitam de referendo do Presidente da República em todos os casos"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. As deliberações do CMN são IMPLEMENTADAS pelos órgãos executivos do SFN: principalmente o Banco Central (para bancos, política monetária, cambial) e a CVM (para mercado de valores mobiliários). O CMN não tem estrutura executiva própria. Esta é a essência da estrutura normativa-executiva do SFN.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-cmn-005",
    enunciado: "Em relação às funções do Conselho Monetário Nacional no contexto do Sistema Financeiro Nacional, analise as afirmativas: I. Zelar pela liquidez e solvência das instituições financeiras. II. Fixar diretrizes de aplicações dos recursos das instituições financeiras. III. Autorizar emissões de papel-moeda. Está correto o que se afirma em:",
    alternativas: {
      A: "Apenas I",
      B: "Apenas II e III",
      C: "Apenas I e III",
      D: "Apenas III",
      E: "I, II e III"
    },
    gabarito: "E",
    explicacao: "CORRETO: Alternativa E (todas corretas). O CMN tem todas essas atribuições previstas na Lei 4.595/64: I - zelar pela liquidez e solvência das instituições financeiras; II - fixar diretrizes de aplicações dos recursos das instituições financeiras; III - autorizar emissões de papel-moeda. Todas são competências fundamentais do CMN como órgão normativo máximo do SFN.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Técnico Bancário"
  }
];

// ========== 2. BANCO CENTRAL DO BRASIL (BACEN) - 5 questões ==========
const questoesBACEN = [
  {
    id: "sfn-bacen-001",
    enunciado: "O Banco Central do Brasil é o principal executor das orientações do Conselho Monetário Nacional e responsável por garantir o poder de compra da moeda nacional. Sobre as atribuições do BACEN, assinale a alternativa INCORRETA.",
    alternativas: {
      A: "Emitir papel-moeda e moeda metálica",
      B: "Executar os serviços do meio circulante",
      C: "Receber os recolhimentos compulsórios dos bancos",
      D: "Conceder empréstimos diretos a empresas privadas não financeiras",
      E: "Realizar operações de compra e venda de títulos públicos federais"
    },
    gabarito: "D",
    explicacao: "CORRETO: Alternativa D (INCORRETA). O BACEN NÃO pode conceder empréstimos diretos a empresas privadas não financeiras. Esta proibição foi estabelecida pela Constituição Federal de 1988 (art. 164, §1º) para evitar favorecimentos e preservar a independência do BC. O BACEN pode: emitir moeda, executar serviços do meio circulante, receber compulsórios e operar com títulos públicos.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-bacen-002",
    enunciado: "No Brasil, o Banco Central é responsável pela autorização, regulamentação e supervisão das instituições financeiras. Qual instrumento NÃO é utilizado pelo BACEN no controle da política monetária?",
    alternativas: {
      A: "Operações de mercado aberto (open market)",
      B: "Depósitos compulsórios",
      C: "Redesconto bancário",
      D: "Emissão de debêntures",
      E: "Taxa SELIC"
    },
    gabarito: "D",
    explicacao: "CORRETO: Alternativa D. Emissão de debêntures é instrumento de CAPTAÇÃO DE RECURSOS por empresas privadas (sociedades anônimas), regulado pela CVM, NÃO é instrumento de política monetária do BACEN. Os instrumentos clássicos do BACEN são: Open Market, Depósitos Compulsórios, Redesconto e Taxa SELIC.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-bacen-003",
    enunciado: "O Banco Central do Brasil atua como 'banco dos bancos' e 'banqueiro do governo'. Nessa função, o BACEN:",
    alternativas: {
      A: "Recebe depósitos à vista do público em geral",
      B: "Concede empréstimos ao Tesouro Nacional para cobrir déficits orçamentários",
      C: "Mantém reservas bancárias e concede assistência financeira de liquidez aos bancos",
      D: "Administra diretamente os fundos de pensão dos servidores públicos",
      E: "Opera exclusivamente no mercado de câmbio comercial"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. Como 'banco dos bancos', o BACEN mantém as RESERVAS BANCÁRIAS dos bancos comerciais (depósitos compulsórios e voluntários) e concede ASSISTÊNCIA FINANCEIRA DE LIQUIDEZ através do redesconto. Não recebe depósitos do público (A), não empresta ao Tesouro (B - proibido pela CF/88), não administra fundos de pensão (D) e atua em todos os segmentos (E).",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-bacen-004",
    enunciado: "A autonomia do Banco Central do Brasil foi estabelecida pela Lei Complementar 179/2021. Sobre essa autonomia, é correto afirmar que:",
    alternativas: {
      A: "O presidente do BACEN passa a ter mandato fixo de 4 anos, coincidente com o do Presidente da República",
      B: "O BACEN pode emprestar recursos ao Tesouro Nacional em situações emergenciais",
      C: "Os diretores do BACEN têm mandatos fixos não coincidentes com o mandato presidencial, vedada a exoneração ad nutum",
      D: "O BACEN pode definir autonomamente a meta de inflação sem consultar o CMN",
      E: "O presidente do BACEN deixa de integrar o Conselho Monetário Nacional"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. A LC 179/2021 estabeleceu autonomia operacional do BACEN com MANDATOS FIXOS para presidente e diretores (4 anos, não coincidentes com mandato presidencial), vedando exoneração ad nutum (só por justa causa). A autonomia visa despolitizar a política monetária.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-bacen-005",
    enunciado: "O BACEN fiscaliza e supervisiona as instituições financeiras. Sobre as sanções que pode aplicar, analise: I. Advertência. II. Multa pecuniária. III. Suspensão do exercício de cargos. IV. Cassação da autorização para funcionamento. Pode o BACEN aplicar:",
    alternativas: {
      A: "Apenas I e II",
      B: "Apenas I, II e III",
      C: "Apenas II, III e IV",
      D: "Apenas I, II e IV",
      E: "I, II, III e IV"
    },
    gabarito: "E",
    explicacao: "CORRETO: Alternativa E (todas). O BACEN tem amplo poder sancionador previsto na Lei 4.595/64: advertência, multa pecuniária, suspensão do exercício de cargos e cassação de autorização para funcionamento (liquidação extrajudicial). Estas sanções são graduadas conforme a gravidade da infração.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  }
];

// ========== 3. COMISSÃO DE VALORES MOBILIÁRIOS (CVM) - 5 questões ==========
const questoesCVM = [
  {
    id: "sfn-cvm-001",
    enunciado: "A Comissão de Valores Mobiliários (CVM) foi criada pela Lei 6.385/76 para regular e fiscalizar o mercado de valores mobiliários. NÃO é atribuição da CVM:",
    alternativas: {
      A: "Fiscalizar e disciplinar o funcionamento das bolsas de valores",
      B: "Autorizar a emissão e distribuição de valores mobiliários no mercado",
      C: "Fixar a taxa básica de juros da economia (SELIC)",
      D: "Proteger os investidores contra emissões irregulares de valores mobiliários",
      E: "Regulamentar e fiscalizar os fundos de investimento"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. Fixar a taxa SELIC é competência do COPOM do BANCO CENTRAL, não da CVM. A CVM atua especificamente no MERCADO DE VALORES MOBILIÁRIOS: fiscaliza bolsas, autoriza emissões de ações/debêntures, protege investidores e regula fundos. A divisão é clara: BACEN cuida de bancos e política monetária; CVM cuida do mercado de capitais.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-cvm-002",
    enunciado: "São considerados valores mobiliários sob fiscalização da CVM, EXCETO:",
    alternativas: {
      A: "Ações de companhias abertas",
      B: "Debêntures e commercial papers",
      C: "Certificados de Depósito Bancário (CDB)",
      D: "Cotas de fundos de investimento",
      E: "Contratos derivativos negociados em bolsa"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. CDB é título de RENDA FIXA emitido por BANCOS, portanto fiscalizado pelo BACEN, não pela CVM. Os demais são valores mobiliários sob jurisdição da CVM conforme Lei 6.385/76: ações, debêntures, commercial papers, cotas de fundos e derivativos. A diferença-chave: títulos bancários = BACEN; títulos do mercado de capitais = CVM.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-cvm-003",
    enunciado: "A CVM tem como objetivo assegurar o funcionamento eficiente e regular do mercado de valores mobiliários. Para isso, a autarquia pode:",
    alternativas: {
      A: "Apenas emitir normas e regulamentos, sem poder de fiscalização direta",
      B: "Fiscalizar, mas não aplicar penalidades às companhias abertas",
      C: "Disciplinar, fiscalizar e punir práticas irregulares no mercado de capitais",
      D: "Atuar apenas mediante provocação de investidores prejudicados",
      E: "Regular exclusivamente as bolsas de valores, sem jurisdição sobre fundos"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. A CVM tem poderes AMPLOS: DISCIPLINAR (criar normas), FISCALIZAR (investigar e supervisionar) e PUNIR (aplicar sanções como multas, suspensões, cassação de registros). A CVM fiscaliza diretamente, pode punir, age de ofício e regula TODO o mercado de valores mobiliários.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-cvm-004",
    enunciado: "Sobre a estrutura e funcionamento da CVM, assinale a alternativa correta:",
    alternativas: {
      A: "É um órgão do Ministério da Fazenda, sem autonomia administrativa",
      B: "É uma autarquia federal vinculada ao Ministério da Economia, com autonomia administrativa e financeira",
      C: "É uma empresa pública federal que visa lucro com a fiscalização do mercado",
      D: "É gerida por um único presidente nomeado pelo Ministro da Fazenda",
      E: "Seus diretores têm mandatos coincidentes para garantir uniformidade de gestão"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A CVM é uma AUTARQUIA FEDERAL vinculada ao Ministério da Economia, dotada de AUTONOMIA administrativa e financeira (Lei 6.385/76). É gerida por colegiado (presidente + 4 diretores) com mandatos ESCALONADOS (não coincidentes) para garantir continuidade.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-cvm-005",
    enunciado: "A Lei 6.385/76 estabelece as competências da CVM. Analise: I. Assegurar o acesso do público a informações sobre valores mobiliários. II. Assegurar a observância de práticas comerciais equitativas. III. Estimular a formação de poupança e sua aplicação em valores mobiliários. Está correto:",
    alternativas: {
      A: "Apenas I",
      B: "Apenas I e II",
      C: "Apenas II e III",
      D: "Apenas I e III",
      E: "I, II e III"
    },
    gabarito: "E",
    explicacao: "CORRETO: Alternativa E (todas). O art. 4º da Lei 6.385/76 estabelece TRÊS objetivos: assegurar acesso a informações (transparência), assegurar práticas equitativas (prevenir fraudes) e estimular a poupança em valores mobiliários (desenvolver o mercado). Estes três pilares formam a base da atuação da CVM.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  }
];

// ========== 4. BANCOS COMERCIAIS - 5 questões ==========
const questoesBancosComerciais = [
  {
    id: "sfn-bc-001",
    enunciado: "Os bancos comerciais são instituições financeiras constituídas sob a forma de sociedade anônima. Sobre suas características e operações, é correto afirmar que:",
    alternativas: {
      A: "Captam recursos apenas através de depósitos à vista",
      B: "São especializados em operações de longo prazo, como financiamentos imobiliários",
      C: "Captam depósitos à vista e a prazo, sendo a principal função a criação de moeda escritural",
      D: "Não podem realizar operações de câmbio",
      E: "São proibidos de conceder crédito a pessoas físicas"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. Os bancos comerciais captam via DEPÓSITOS À VISTA (conta corrente) e A PRAZO (CDB, RDB), e sua principal característica é a CRIAÇÃO DE MOEDA ESCRITURAL através do multiplicador bancário. Captam também a prazo (A errada), não são especializados em longo prazo (B errada), podem operar câmbio se autorizados (D errada) e concedem crédito a PF e PJ (E errada).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-bc-002",
    enunciado: "A conta de depósitos à vista (conta corrente) é o principal produto dos bancos comerciais. Sobre essa operação, assinale a afirmativa INCORRETA:",
    alternativas: {
      A: "Os depósitos à vista são considerados moeda escritural e integram o M1",
      B: "Não há prazo de resgate, podendo o cliente sacar a qualquer momento",
      C: "Os bancos podem livremente emprestar 100% dos depósitos à vista recebidos",
      D: "Estão sujeitos a recolhimento compulsório ao Banco Central",
      E: "São utilizados para movimentação financeira do dia a dia"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C (INCORRETA). Os bancos NÃO podem emprestar 100% dos depósitos à vista porque precisam manter RESERVA COMPULSÓRIA no BACEN (cerca de 25%) e reserva livre para saques. Se emprestassem tudo, não teriam como honrar saques. O compulsório controla o multiplicador bancário.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-bc-003",
    enunciado: "Os bancos comerciais são obrigados por lei a constituir-se sob qual forma societária?",
    alternativas: {
      A: "Sociedade Limitada (LTDA)",
      B: "Sociedade Anônima (S.A.)",
      C: "Empresa Individual de Responsabilidade Limitada (EIRELI)",
      D: "Sociedade em Comandita Simples",
      E: "Qualquer forma societária, desde que autorizada pelo BACEN"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A Lei 4.595/64 estabelece que bancos comerciais DEVEM ser SOCIEDADE ANÔNIMA (S.A.). Esta exigência visa maior transparência, facilitar fiscalização, permitir captação via mercado de capitais e proteger depositantes. A forma S.A. é OBRIGATÓRIA para todas as instituições financeiras.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-bc-004",
    enunciado: "Sobre o multiplicador bancário, analise: Um banco recebe depósito à vista de R$ 100.000. Considerando taxa de compulsório de 20%, o sistema bancário pode criar moeda no valor máximo de:",
    alternativas: {
      A: "R$ 80.000",
      B: "R$ 100.000",
      C: "R$ 400.000",
      D: "R$ 500.000",
      E: "R$ 600.000"
    },
    gabarito: "D",
    explicacao: "CORRETO: Alternativa D. O multiplicador bancário = 1/c. Com c = 20% (0,2), temos M = 1/0,2 = 5. Portanto, R$ 100.000 x 5 = R$ 500.000 em moeda escritural. Banco A empresta 80.000; quem recebe deposita em Banco B; Banco B empresta 64.000; e assim sucessivamente. A soma geométrica resulta em 500.000.",
    banca: "FGV",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-bc-005",
    enunciado: "Os bancos comerciais podem realizar diversas operações. NÃO é operação típica de banco comercial:",
    alternativas: {
      A: "Desconto de duplicatas e notas promissórias",
      B: "Concessão de crédito rotativo (cheque especial)",
      C: "Captação via Caderneta de Poupança",
      D: "Underwriting (subscrição de ações)",
      E: "Cobrança de títulos"
    },
    gabarito: "D",
    explicacao: "CORRETO: Alternativa D. UNDERWRITING é operação de BANCO DE INVESTIMENTO, não de banco comercial. Bancos comerciais fazem: desconto de títulos, cheque especial, poupança (quando múltiplos) e cobrança. A Resolução CMN 2.624/99 proíbe bancos comerciais de fazer underwriting.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  }
];

// ========== 5. BANCOS DE INVESTIMENTO - 5 questões ==========
const questoesBancosInvestimento = [
  {
    id: "sfn-bi-001",
    enunciado: "Os bancos de investimento são especializados em operações de médio e longo prazo. Sobre essas instituições, é INCORRETO afirmar que:",
    alternativas: {
      A: "Não podem captar depósitos à vista",
      B: "Realizam operações de underwriting",
      C: "Captam recursos através de depósitos a prazo (CDB e RDB)",
      D: "Podem administrar fundos de investimento",
      E: "São os principais responsáveis pela criação de moeda escritural na economia"
    },
    gabarito: "E",
    explicacao: "CORRETO: Alternativa E (INCORRETA). A criação de moeda escritural é função dos BANCOS COMERCIAIS. Bancos de investimento não captam depósitos à vista (A correta), realizam underwriting (B correta), captam via CDB/RDB (C correta) e administram fundos (D correta). Como não trabalham com conta corrente, não participam do multiplicador bancário.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-bi-002",
    enunciado: "No underwriting firme (straight), o banco de investimento:",
    alternativas: {
      A: "Apenas distribui as ações, sem assumir riscos",
      B: "Subscreve integralmente a emissão, assumindo o risco de não colocação no mercado",
      C: "Se compromete a vender o máximo possível, devolvendo o que não for vendido",
      D: "Só recebe comissão sobre as ações efetivamente vendidas",
      E: "Atua apenas como consultor, sem participar da venda"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. No UNDERWRITING FIRME, o banco COMPRA todas as ações/debêntures da empresa e depois as revende ao mercado, assumindo TODO O RISCO. É a modalidade de maior risco para o banco e maior segurança para a empresa. Best Efforts é alternativa C/D. Stand-by é garantia firme do restante.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-bi-003",
    enunciado: "Sobre as fontes de recursos dos bancos de investimento, assinale a alternativa correta:",
    alternativas: {
      A: "Depósitos à vista e caderneta de poupança",
      B: "Apenas recursos próprios (patrimônio líquido)",
      C: "Depósitos a prazo, repasses de instituições oficiais e recursos externos",
      D: "Exclusivamente emissão de ações no mercado",
      E: "Apenas repasses do BNDES"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. Bancos de investimento captam: DEPÓSITOS A PRAZO (CDB, RDB), REPASSES de BNDES e outras instituições oficiais, RECURSOS EXTERNOS e recursos próprios. NÃO captam depósitos à vista nem poupança (A errada). Não são únicas fontes (B, D, E erradas). A diversificação permite financiar operações de médio/longo prazo.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-bi-004",
    enunciado: "Os bancos de investimento devem ser constituídos sob a forma de:",
    alternativas: {
      A: "Sociedade Limitada (LTDA)",
      B: "Sociedade Anônima (S.A.)",
      C: "Qualquer forma societária",
      D: "Empresa pública",
      E: "Cooperativa"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Bancos de investimento devem ser SOCIEDADE ANÔNIMA (S.A.), conforme Resolução CMN 4.122/2013. Esta exigência garante transparência, facilita fiscalização pelo BACEN e CVM, permite acesso ao mercado de capitais e assegura proteção aos investidores através de governança corporativa.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-bi-005",
    enunciado: "Sobre operações de bancos de investimento, analise: I. Financiamento de capital fixo e de giro. II. Administração de recursos de terceiros. III. Operações de câmbio. Pode o banco de investimento realizar:",
    alternativas: {
      A: "Apenas I",
      B: "Apenas I e II",
      C: "Apenas I e III",
      D: "Apenas II e III",
      E: "I, II e III"
    },
    gabarito: "E",
    explicacao: "CORRETO: Alternativa E (todas). Bancos de investimento podem: I - financiar capital fixo e de giro de médio/longo prazo (função principal); II - administrar recursos de terceiros via fundos; III - realizar operações de câmbio se autorizados. Todas permitidas pela Resolução CMN 4.122/2013.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  }
];

// ========== 6. COOPERATIVAS DE CRÉDITO - 5 questões ==========
const questoesCooperativas = [
  {
    id: "sfn-coop-001",
    enunciado: "As cooperativas de crédito são formadas pela associação de pessoas com vínculo comum. Sobre suas características, é correto afirmar que:",
    alternativas: {
      A: "Têm finalidade lucrativa e distribuem dividendos aos acionistas",
      B: "São sociedades de pessoas, sem fins lucrativos, que prestam serviços financeiros aos cooperados",
      C: "Podem captar recursos apenas de cooperados, sendo vedado emprestar a eles",
      D: "São controladas pelo BACEN mas não integram o Sistema Financeiro Nacional",
      E: "Não estão sujeitas à fiscalização do Banco Central"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Cooperativas são SOCIEDADES DE PESSOAS, SEM FINS LUCRATIVOS, que prestam serviços financeiros EXCLUSIVAMENTE AOS COOPERADOS. Não têm fim lucrativo (A errada), captam E emprestam aos cooperados (C errada), integram o SFN (D errada) e são fiscalizadas pelo BACEN (E errada). Princípios: adesão voluntária, gestão democrática.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-coop-002",
    enunciado: "A Lei Complementar 130/2009 dispõe sobre o Sistema Nacional de Crédito Cooperativo. Segundo essa lei, as cooperativas:",
    alternativas: {
      A: "Podem captar recursos de não cooperados livremente",
      B: "Estão dispensadas do recolhimento compulsório",
      C: "Têm acesso aos instrumentos do mercado financeiro, inclusive depósitos interfinanceiros",
      D: "Não podem operar com pessoas jurídicas, apenas pessoas físicas",
      E: "São isentas de fiscalização do BACEN"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. A LC 130/2009 assegurou às cooperativas ACESSO AOS INSTRUMENTOS DO MERCADO FINANCEIRO: depósitos interfinanceiros (DI), redesconto, operações no mercado aberto, equiparando-as aos bancos. Só captam de cooperados (A errada), recolhem compulsório (B errada), podem operar com PF e PJ cooperadas (D errada), são fiscalizadas (E errada).",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-coop-003",
    enunciado: "Sobre a estrutura das cooperativas de crédito no Brasil, é correto afirmar que:",
    alternativas: {
      A: "Existem apenas cooperativas singulares, sem estrutura em níveis",
      B: "Podem ser singulares (1º grau), centrais (2º grau) e confederações (3º grau)",
      C: "São sempre de livre admissão de associados",
      D: "O voto é proporcional ao capital integralizado por cada cooperado",
      E: "Não podem formar redes ou sistemas cooperativos"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Sistema cooperativista tem TRÊS NÍVEIS: SINGULARES (1º grau - cooperados são PF/PJ), CENTRAIS (2º grau - cooperados são singulares) e CONFEDERAÇÕES (3º grau - cooperados são centrais). Admissão é restrita ao vínculo comum (C errada), voto é por cabeça (D errada), podem formar sistemas como Sicoob/Sicredi (E errada).",
    banca: "FGV",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-coop-004",
    enunciado: "NÃO é permitido às cooperativas de crédito:",
    alternativas: {
      A: "Captar depósitos à vista e a prazo de cooperados",
      B: "Conceder crédito e financiamento aos cooperados",
      C: "Captar recursos de não cooperados sem vínculo com a cooperativa",
      D: "Aplicar recursos no mercado financeiro",
      E: "Oferecer cartão de crédito aos cooperados"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. Cooperativas NÃO podem captar de NÃO COOPERADOS. Captação e crédito devem ser EXCLUSIVAMENTE entre cooperados. Este é princípio fundamental do cooperativismo. As demais operações são permitidas: captação e crédito entre cooperados (A, B), aplicação no mercado para gestão de liquidez (D) e serviços aos cooperados (E).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-coop-005",
    enunciado: "Sobre a gestão democrática nas cooperativas de crédito:",
    alternativas: {
      A: "Cada cooperado tem voto proporcional ao valor de suas quotas-parte",
      B: "As decisões são tomadas por conselho nomeado pelo BACEN",
      C: "Vigora o princípio 'um cooperado, um voto', independentemente do capital",
      D: "Apenas os maiores investidores podem votar",
      E: "O voto é proporcional ao tempo de associação"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. Nas cooperativas: UM COOPERADO = UM VOTO, independentemente do capital, tempo ou volume de operações. Isso diferencia cooperativas de S.A. (onde voto é proporcional a ações). Não é proporcional ao capital (A errada), decisões são da assembleia (B errada), todos votam igual (D errada), não depende do tempo (E errada). Este é dos 7 princípios universais do cooperativismo.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  }
];

// ========== 7. CORRETORAS E DISTRIBUIDORAS - 5 questões ==========
const questoesCorretorasDistribuidoras = [
  {
    id: "sfn-ctvm-001",
    enunciado: "Sobre corretoras (CTVM) e distribuidoras (DTVM), é correto afirmar que:",
    alternativas: {
      A: "Corretoras podem operar em bolsa; distribuidoras não podem",
      B: "Ambas podem intermediar operações de câmbio",
      C: "Apenas distribuidoras podem administrar fundos de investimento",
      D: "Corretoras são fiscalizadas apenas pela CVM; distribuidoras apenas pelo BACEN",
      E: "Não há mais diferenças significativas entre CTVMs e DTVMs desde 2009"
    },
    gabarito: "E",
    explicacao: "CORRETO: Alternativa E. A Instrução CVM 461/2007 e Resolução CMN 3.828/2009 EQUIPARARAM CTVMs e DTVMs - NÃO HÁ MAIS diferenças significativas. Ambas podem: operar em bolsa, fazer câmbio se autorizadas, administrar fundos. São fiscalizadas por BACEN E CVM. Historicamente corretoras tinham exclusividade na bolsa, mas acabou. Hoje a diferença é só o nome.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-ctvm-002",
    enunciado: "NÃO é atividade de corretoras e distribuidoras:",
    alternativas: {
      A: "Intermediação de operações em bolsas de valores, mercadorias e futuros",
      B: "Administração de carteiras e custódia de valores mobiliários",
      C: "Captação de depósitos à vista (conta corrente)",
      D: "Operações no mercado aberto (open market)",
      E: "Subscrição de emissões (underwriting)"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. CTVMs e DTVMs NÃO podem captar depósitos à vista (conta corrente) - atividade EXCLUSIVA de bancos comerciais. As demais são TÍPICAS: intermediação em bolsas (A), administração de carteiras (B), operar no open market como dealers (D) e underwriting (E). A proibição de captar depósitos à vista as diferencia dos bancos.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-ctvm-003",
    enunciado: "Corretoras e distribuidoras devem ser constituídas como:",
    alternativas: {
      A: "Sociedade Anônima (S.A.) ou Sociedade Limitada (LTDA)",
      B: "Exclusivamente Sociedade Anônima (S.A.)",
      C: "Qualquer forma societária",
      D: "Cooperativa de profissionais",
      E: "Empresa Individual"
    },
    gabarito: "A",
    explicacao: "CORRETO: Alternativa A. CTVMs e DTVMs podem ser S.A. OU LTDA, conforme Resolução CMN 1.655/89. Esta flexibilidade difere dos bancos que DEVEM ser S.A. A opção pela LTDA é comum em corretoras menores; grandes geralmente optam por S.A. para acesso ao mercado de capitais. Autorização do BACEN é necessária em qualquer caso.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-ctvm-004",
    enunciado: "Sobre a fiscalização de corretoras e distribuidoras:",
    alternativas: {
      A: "São fiscalizadas exclusivamente pelo Banco Central",
      B: "São fiscalizadas exclusivamente pela CVM",
      C: "São fiscalizadas pelo Banco Central e pela CVM, conforme a operação",
      D: "Não estão sujeitas a fiscalização por serem intermediárias",
      E: "São fiscalizadas apenas pelas bolsas de valores"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. CTVMs e DTVMs têm DUPLA FISCALIZAÇÃO: BANCO CENTRAL (aspectos prudenciais, autorização, câmbio, regras gerais) e CVM (valores mobiliários, fundos, conduta no mercado). Esta supervisão compartilhada garante controle completo: BACEN cuida da solidez financeira; CVM cuida da conduta e proteção aos investidores.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-ctvm-005",
    enunciado: "Quando corretoras e distribuidoras atuam como dealers, isso significa que:",
    alternativas: {
      A: "Apenas intermediam operações entre terceiros, sem assumir posições",
      B: "Operam por conta própria, assumindo posições compradas ou vendidas",
      C: "Só podem operar com autorização prévia para cada operação",
      D: "Atuam exclusivamente como consultoras de investimento",
      E: "Não podem ter carteira própria de títulos"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Como DEALERS, operam POR CONTA PRÓPRIA, assumindo POSIÇÕES COMPRADAS ou VENDIDAS em títulos, diferente de BROKERS (apenas intermediando). Como dealers: compram para carteira própria, fazem market making (dão liquidez), assumem risco de mercado. A atuação como dealer é permitida mas regulada, exigindo capital mínimo e controles de risco.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  }
];

// ========== 8. SISTEMA DE PAGAMENTOS BRASILEIRO (SPB) - 5 questões ==========
const questoesSPB = [
  {
    id: "sfn-spb-001",
    enunciado: "O Sistema de Pagamentos Brasileiro (SPB) foi reestruturado em 2002. Sobre o SPB, é correto afirmar que:",
    alternativas: {
      A: "É gerido exclusivamente pela B3",
      B: "Tem como órgão responsável o Banco Central do Brasil",
      C: "Processa apenas transações de valores mobiliários",
      D: "Não inclui transferências interbancárias",
      E: "É fiscalizado pela CVM"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. O SPB é de responsabilidade do BANCO CENTRAL (Lei 10.214/2001), que regulamenta, supervisiona e opera sistemas-chave como o STR. B3 opera câmaras mas não gere todo o SPB (A errada). Processa diversos tipos de transações (C errada). Transferências interbancárias são a essência do SPB (D errada). Fiscalização é do BACEN (E errada).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-spb-002",
    enunciado: "O principal objetivo da reestruturação do SPB em 2002 foi:",
    alternativas: {
      A: "Aumentar as tarifas bancárias",
      B: "Eliminar o risco sistêmico e aumentar a segurança",
      C: "Privatizar o Banco Central",
      D: "Reduzir o número de bancos",
      E: "Criar a moeda digital"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A reforma visou ELIMINAR/REDUZIR O RISCO SISTÊMICO (risco de efeito dominó) e AUMENTAR SEGURANÇA. Antes operava em D+1 (confirmava dia seguinte), gerando risco. Após reforma: liquidação em tempo real (LBTR no STR), mecanismos de garantia, monitoramento contínuo. Alternativas A, C, D, E não têm relação com a reforma.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-spb-003",
    enunciado: "O STR (Sistema de Transferência de Reservas) é o componente central do SPB. Sobre o STR:",
    alternativas: {
      A: "Opera em D+1 (liquidação no dia seguinte)",
      B: "Processa transferências de qualquer valor entre pessoas físicas",
      C: "Opera em LBTR (Liquidação Bruta em Tempo Real) para grandes valores interbancários",
      D: "É operado pela Caixa Econômica Federal",
      E: "Só funciona das 10h às 16h"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. O STR opera em LBTR (Liquidação Bruta em Tempo Real), processando transferências de GRANDE VALOR entre bancos instantaneamente, operação por operação. Não é em D+1 (A errada), é interbancário não para PF diretamente (B errada), operado pelo BACEN (D errada), horário mais amplo 6h30-18h30 (E errada). Eliminou risco ao processar em tempo real.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-spb-004",
    enunciado: "O PIX, lançado em 2020, é parte do SPB. Sobre o PIX, é INCORRETO:",
    alternativas: {
      A: "Permite transferências instantâneas 24/7",
      B: "É gerenciado pelo Banco Central",
      C: "Utiliza chaves como CPF, e-mail e telefone",
      D: "Cobra tarifa obrigatória para pessoas físicas em todas as transações",
      E: "Reduz uso de papel-moeda"
    },
    gabarito: "D",
    explicacao: "CORRETO: Alternativa D (INCORRETA). O PIX é GRATUITO para pessoas físicas em operações pessoais e entre contas de mesma titularidade. Pode haver cobrança em uso comercial, mas não é obrigatória em todas as transações. As demais corretas: funciona 24/7/365 (A), gerido pelo BACEN (B), usa chaves (C), reduz dinheiro físico (E). PIX revolucionou pagamentos no Brasil.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-spb-005",
    enunciado: "As câmaras de compensação (clearings) no SPB têm como principal função:",
    alternativas: {
      A: "Emitir moeda para o mercado",
      B: "Registrar, compensar e liquidar operações, atuando como contraparte central",
      C: "Fiscalizar a conduta dos participantes",
      D: "Definir a taxa básica de juros",
      E: "Autorizar funcionamento de instituições financeiras"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. As câmaras (B3, CIP) REGISTRAM operações, COMPENSAM (calculam posições líquidas multilaterais) e LIQUIDAM (efetuam transferências), atuando como CONTRAPARTE CENTRAL (assumem risco de crédito entre partes). Emissão é do BACEN (A), fiscalização é BACEN/CVM (C), SELIC é do COPOM (D), autorização é do BACEN (E). Câmaras reduzem riscos no SPB.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  }
];

// ========== 9. POLÍTICA MONETÁRIA - 5 questões ==========
const questoesPoliticaMonetaria = [
  {
    id: "sfn-pm-001",
    enunciado: "A política monetária controla oferta de moeda e juros. No Brasil, o órgão responsável pela execução da política monetária é:",
    alternativas: {
      A: "Conselho Monetário Nacional (CMN)",
      B: "Banco Central do Brasil (BACEN)",
      C: "Comissão de Valores Mobiliários (CVM)",
      D: "Ministério da Fazenda",
      E: "Banco do Brasil"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. O BANCO CENTRAL (BACEN) EXECUTA a política monetária através do COPOM que define a SELIC. O CMN (A) FORMULA diretrizes gerais, mas quem EXECUTA é o BACEN. CVM (C) cuida do mercado de capitais. Ministério da Fazenda (D) define política fiscal. BB (E) é banco comercial. Esta divisão - CMN formula, BACEN executa - é fundamental no SFN.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-pm-002",
    enunciado: "O COPOM se reúne para definir a taxa básica de juros. Com que frequência ocorrem as reuniões ordinárias?",
    alternativas: {
      A: "Mensalmente",
      B: "Bimestralmente",
      C: "A cada 45 dias (8 vezes ao ano)",
      D: "Trimestralmente",
      E: "Semestralmente"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. O COPOM se reúne A CADA 45 DIAS, totalizando 8 REUNIÕES ORDINÁRIAS/ano (calendário divulgado no início do ano). Duram 2 dias: dia 1 apresentações técnicas; dia 2 definição da SELIC. Ata divulgada em 8 dias. Desde 2006 foram reduzidas de 12 para 8 reuniões para dar tempo aos efeitos da política se manifestarem. Extraordinárias são raras.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-pm-003",
    enunciado: "Instrumentos de política monetária: I. Open Market. II. Compulsórios. III. Redesconto. IV. Debêntures. Estão corretos:",
    alternativas: {
      A: "Apenas I e II",
      B: "Apenas I, II e III",
      C: "Apenas II, III e IV",
      D: "Apenas I, III e IV",
      E: "I, II, III e IV"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B (I, II, III). Os três instrumentos CLÁSSICOS do BACEN são: I - OPEN MARKET (compra/venda de títulos públicos, principal); II - COMPULSÓRIOS (recolhimento obrigatório); III - REDESCONTO (empréstimos aos bancos). IV ERRADA: DEBÊNTURES são títulos de EMPRESAS privadas (S.A.), regulados pela CVM, NÃO são instrumento de política monetária. Estes 3 controlam liquidez e juros.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "sfn-pm-004",
    enunciado: "A taxa SELIC é a taxa básica de juros. Sobre a SELIC, é correto:",
    alternativas: {
      A: "É a taxa cobrada por bancos em empréstimos ao consumidor",
      B: "É a taxa de operações compromissadas de um dia (overnight) com títulos públicos",
      C: "É definida livremente pelo mercado, sem interferência",
      D: "Não tem relação com inflação",
      E: "É igual à TJLP"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A SELIC é a taxa média das operações de EMPRÉSTIMO DE UM DIA (overnight) entre instituições, com lastro em TÍTULOS PÚBLICOS registrados no sistema SELIC. O COPOM define a META e o BACEN atua via open market para mantê-la próxima. Taxa do consumidor é muito maior (A errada), é controlada pelo COPOM (C errada), é principal instrumento contra inflação (D errada), TJLP foi substituída pela TLP (E errada).",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "sfn-pm-005",
    enunciado: "Para política monetária CONTRACIONISTA (reduzir liquidez/controlar inflação), o BACEN pode:",
    alternativas: {
      A: "Reduzir SELIC e diminuir compulsório",
      B: "Vender títulos públicos e aumentar compulsório",
      C: "Comprar títulos e reduzir redesconto",
      D: "Aumentar emissão de moeda e reduzir juros",
      E: "Proibir empréstimos bancários"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Política CONTRACIONISTA (restritiva) visa REDUZIR liquidez/CONTROLAR inflação. Instrumentos: VENDER títulos no open market (retira dinheiro), AUMENTAR compulsório (imobiliza recursos), AUMENTAR SELIC (encarece crédito). Alternativa A é EXPANSIONISTA. C: comprar títulos é expansionista. D: aumentar moeda é expansionista. E: não pode proibir, apenas encarecer. Contracionista = apertar; Expansionista = afrouxar.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  }
];

// Função auxiliar para enviar questões ao servidor
async function enviarQuestoesPorTopico(topico: string, questoes: any[]) {
  const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/fiscal/sistema-financeiro-nacional/${topico}`;
  
  console.log(`📤 [SEED SFN] Enviando ${questoes.length} questões de ${topico}...`);
  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${publicAnonKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ questions: questoes }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HTTP ${response.status}: ${errorText}`);
  }

  const result = await response.json();
  console.log(`✅ [SEED SFN] ${topico}: ${result.count} questões salvas`);
  return result;
}

// Função principal de seed
export async function seedAllSistemaFinanceiroNacionalQuestions() {
  console.log('🏛️ Iniciando seed de Sistema Financeiro Nacional...');
  
  const topicos = [
    { nome: 'conselho-monetario-nacional', questoes: questoesCMN },
    { nome: 'banco-central-do-brasil', questoes: questoesBACEN },
    { nome: 'comissao-de-valores-mobiliarios', questoes: questoesCVM },
    { nome: 'bancos-comerciais', questoes: questoesBancosComerciais },
    { nome: 'bancos-de-investimento', questoes: questoesBancosInvestimento },
    { nome: 'cooperativas-de-credito', questoes: questoesCooperativas },
    { nome: 'corretoras-e-distribuidoras', questoes: questoesCorretorasDistribuidoras },
    { nome: 'sistema-de-pagamentos-brasileiro', questoes: questoesSPB },
    { nome: 'politica-monetaria', questoes: questoesPoliticaMonetaria },
  ];

  console.log(`📚 Total de tópicos: ${topicos.length}`);
  console.log(`🎯 Total de questões: ${topicos.reduce((acc, t) => acc + t.questoes.length, 0)}`);

  for (const topico of topicos) {
    console.log(`\n📖 Seeding tópico: ${topico.nome} (${topico.questoes.length} questões)...`);
    try {
      await enviarQuestoesPorTopico(topico.nome, topico.questoes);
    } catch (error) {
      console.error(`❌ Erro no tópico ${topico.nome}:`, error);
      throw error;
    }
  }

  console.log('\n✅ ✅ ✅ SEED COMPLETO! Sistema Financeiro Nacional importado com sucesso! 🎯');
}
