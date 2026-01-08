import { projectId, publicAnonKey } from './supabase/info';

// Produtos Bancários - 45 questões comentadas baseadas em concursos nacionais

// ========== 1. CONTA CORRENTE - 5 questões ==========
const questoesContaCorrente = [
  {
    id: "produtos-conta-corrente-001",
    enunciado: "A conta corrente é um produto bancário que permite movimentação financeira através de depósitos e saques. Sobre as características da conta corrente, assinale a alternativa correta.",
    alternativas: {
      A: "É remunerada por taxa de juros igual à poupança",
      B: "Permite apenas depósitos, sendo vedados os saques",
      C: "Possibilita movimentação mediante cheques, cartões e transferências eletrônicas",
      D: "Não permite saldo negativo em nenhuma hipótese",
      E: "É obrigatória apenas para pessoas jurídicas"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. A conta corrente é o produto bancário mais completo para movimentação financeira, permitindo depósitos, saques, emissão de cheques, uso de cartões de débito/crédito e transferências eletrônicas (TED, DOC, PIX). NÃO é remunerada como poupança (A incorreta). Permite saques (B incorreta). Pode ter saldo negativo se houver cheque especial (D incorreta). Está disponível para PF e PJ (E incorreta).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-conta-corrente-002",
    enunciado: "De acordo com a Resolução CMN sobre contas correntes, os bancos devem oferecer serviços essenciais gratuitos. Qual alternativa apresenta corretamente serviços que DEVEM ser gratuitos na conta corrente?",
    alternativas: {
      A: "Emissão ilimitada de cheques e extratos impressos",
      B: "Fornecimento de cartão de débito, consultas via internet e 4 saques mensais",
      C: "Transferências TED ilimitadas e emissão de 10 cheques por mês",
      D: "Extrato mensal impresso e 2 transferências DOC",
      E: "Apenas consultas ao saldo, sem qualquer outro serviço gratuito"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A Resolução CMN 3.919/2010 estabelece os SERVIÇOS ESSENCIAIS GRATUITOS na conta corrente: fornecimento de cartão de débito com função débito, 4 saques por mês, 2 transferências entre contas na mesma instituição, fornecimento de 10 folhas de cheque por mês (se talonário), consultas ilimitadas via internet/mobile e fornecimento de extrato mensal (impresso ou eletrônico). As demais alternativas apresentam combinações incorretas desses serviços.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista Bancário"
  },
  {
    id: "produtos-conta-corrente-003",
    enunciado: "Sobre a diferença entre conta corrente individual e conta corrente conjunta, é INCORRETO afirmar que:",
    alternativas: {
      A: "A conta individual tem apenas um titular",
      B: "A conta conjunta pode ser solidária ou não solidária",
      C: "Na conta conjunta solidária, qualquer titular pode movimentar sozinho",
      D: "Na conta conjunta não solidária, é necessária assinatura de todos os titulares para movimentação",
      E: "A conta conjunta não pode ter mais de dois titulares"
    },
    gabarito: "E",
    explicacao: "CORRETO: Alternativa E (INCORRETA conforme enunciado). A conta conjunta PODE TER MAIS DE DOIS TITULARES, não havendo limite legal. As demais afirmações estão corretas: conta individual tem 1 titular (A); conta conjunta pode ser solidária (qualquer um movimenta) ou não solidária (todos assinam) - B, C, D corretas. A escolha do tipo depende da confiança e relacionamento entre os titulares.",
    banca: "FGV",
    ano: 2024,
    cargo: "Técnico Bancário"
  },
  {
    id: "produtos-conta-corrente-004",
    enunciado: "Um cliente deseja abrir uma conta corrente. Segundo as normas do Banco Central, qual documentação é OBRIGATÓRIA para abertura de conta corrente de pessoa física?",
    alternativas: {
      A: "Apenas RG e CPF",
      B: "CPF, documento de identificação com foto e comprovante de residência",
      C: "Certidão de nascimento e comprovante de renda",
      D: "Apenas CPF, sendo os demais documentos opcionais",
      E: "Passaporte para brasileiros e estrangeiros"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A Circular BACEN 3.461/2009 (Cadastro de Clientes - CCS) estabelece documentação OBRIGATÓRIA para abertura de conta PF: CPF, documento de identificação oficial com foto (RG, CNH, passaporte) e comprovante de residência. Esta exigência visa atender as normas de Prevenção à Lavagem de Dinheiro (PLD) e Conheça Seu Cliente (KYC - Know Your Customer). Certidão de nascimento e comprovante de renda não são obrigatórios (C incorreta).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-conta-corrente-005",
    enunciado: "Sobre tarifas bancárias em conta corrente, assinale a alternativa CORRETA conforme regulamentação do BACEN.",
    alternativas: {
      A: "Os bancos podem cobrar livremente qualquer valor de tarifa sem limite",
      B: "Existe um pacote de serviços essenciais que deve ser oferecido gratuitamente",
      C: "Tarifas só podem ser cobradas de pessoas jurídicas",
      D: "A tarifa de manutenção mensal é obrigatória para todas as contas",
      E: "Clientes com saldo superior a R$ 10.000 estão isentos de tarifas"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A Resolução CMN 3.919/2010 determina que os bancos DEVEM oferecer um PACOTE DE SERVIÇOS ESSENCIAIS GRATUITOS, incluindo: cartão de débito, saques, transferências básicas, consultas e extrato. Isso visa garantir acesso universal aos serviços bancários básicos. Bancos PODEM cobrar tarifas por serviços adicionais (A incorreta). Tarifas aplicam-se a PF e PJ (C incorreta). Tarifa de manutenção não é obrigatória se cliente optar por pacote gratuito (D incorreta). Isenção não depende de saldo (E incorreta).",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  }
];

// ========== 2. POUPANÇA - 5 questões ==========
const questoesPoupanca = [
  {
    id: "produtos-poupanca-001",
    enunciado: "A caderneta de poupança é a aplicação financeira mais tradicional no Brasil. Sobre a remuneração da poupança, é CORRETO afirmar que:",
    alternativas: {
      A: "Rende sempre 0,5% ao mês mais TR, independentemente da taxa SELIC",
      B: "Quando a SELIC está acima de 8,5% ao ano, rende 0,5% ao mês mais TR",
      C: "Quando a SELIC está igual ou abaixo de 8,5% ao ano, rende 70% da SELIC mais TR",
      D: "É isenta de Imposto de Renda para todos os valores",
      E: "Rende diariamente, podendo ser resgatada a qualquer momento sem perda"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. Desde 2012 (Lei 12.703/12), a poupança tem REMUNERAÇÃO VARIÁVEL conforme SELIC: se SELIC > 8,5% ao ano, rende 0,5% a.m. + TR (regra antiga); se SELIC ≤ 8,5% ao ano, rende 70% da SELIC + TR (regra nova). A alternativa A está incompleta. D está correta sobre IR, mas não responde sobre remuneração. E está INCORRETA: poupança rende no ANIVERSÁRIO MENSAL (data do depósito), e saques antes do aniversário perdem a remuneração do período.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-poupanca-002",
    enunciado: "João depositou R$ 5.000,00 na poupança no dia 15 de janeiro. No dia 10 de fevereiro, precisou sacar todo o valor. Considerando as regras de remuneração da poupança, o que ocorrerá?",
    alternativas: {
      A: "Receberá os juros proporcionais aos 26 dias",
      B: "Receberá os juros de 1 mês completo",
      C: "NÃO receberá nenhuma remuneração, apenas o principal de R$ 5.000",
      D: "Receberá apenas a TR, sem os juros",
      E: "Perderá 10% do valor depositado como multa"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. A poupança rende no ANIVERSÁRIO MENSAL do depósito. João depositou dia 15/01 e sacou dia 10/02, ou seja, ANTES do primeiro aniversário (que seria 15/02). Neste caso, NÃO recebe NENHUMA remuneração do período, apenas o valor principal de R$ 5.000. Se esperasse até 15/02 ou depois, receberia a remuneração completa do mês. Não há juros proporcionais (A incorreta), não há multa (E incorreta). Esta regra visa desestimular saques frequentes.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-poupanca-003",
    enunciado: "Sobre a tributação e garantias da caderneta de poupança, assinale a alternativa INCORRETA:",
    alternativas: {
      A: "É isenta de Imposto de Renda para pessoas físicas",
      B: "É garantida pelo Fundo Garantidor de Créditos (FGC) até R$ 250.000 por CPF e instituição",
      C: "Pessoas jurídicas pagam Imposto de Renda sobre os rendimentos da poupança",
      D: "É o investimento de menor risco disponível no mercado financeiro",
      E: "Rende sempre mais que a inflação, garantindo ganho real"
    },
    gabarito: "E",
    explicacao: "CORRETO: Alternativa E (INCORRETA). A poupança NÃO garante rendimento acima da inflação. Em períodos de inflação alta e SELIC baixa, a poupança pode render MENOS que a inflação, gerando PERDA DE PODER AQUISITIVO real. As demais alternativas estão CORRETAS: A - isenta de IR para PF (Lei 8.981/95); B - garantia FGC até R$ 250 mil (Resolução CMN 4.222/13); C - PJ pagam IR 22,5% (não podem ter poupança na prática); D - baixíssimo risco (garantia FGC + regulamentação).",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-poupanca-004",
    enunciado: "A poupança é regulamentada e possui regras específicas. Qual característica abaixo está CORRETA sobre a caderneta de poupança?",
    alternativas: {
      A: "Pode ser aberta apenas em bancos públicos",
      B: "Não possui limite mínimo nem máximo para depósitos",
      C: "Exige aplicação mínima de R$ 1.000 para abertura",
      D: "Só pode ser movimentada presencialmente na agência",
      E: "É vedada para menores de 18 anos"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A poupança NÃO tem limite mínimo nem máximo de depósito - pode abrir com qualquer valor e depositar quanto quiser (respeitando limites de garantia FGC para fins de cobertura). Alternativa A incorreta: pode ser aberta em bancos públicos e privados. C incorreta: não há mínimo de R$ 1.000. D incorreta: pode ser movimentada online, caixas eletrônicos, PIX. E incorreta: menores podem ter poupança (geralmente com responsável legal até 16 anos).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Técnico Bancário"
  },
  {
    id: "produtos-poupanca-005",
    enunciado: "Considerando a taxa SELIC em 10,5% ao ano e a TR em 0,1% ao mês, qual seria aproximadamente a remuneração mensal da poupança?",
    alternativas: {
      A: "0,5% + 0,1% = 0,6% ao mês",
      B: "70% de 10,5% + 0,1% = 7,45% ao mês",
      C: "10,5% / 12 = 0,875% ao mês",
      D: "70% da SELIC mensal + 0,1% ao mês",
      E: "Apenas a TR de 0,1% ao mês"
    },
    gabarito: "A",
    explicacao: "CORRETO: Alternativa A. Com SELIC em 10,5% a.a. (acima de 8,5%), aplica-se a REGRA ANTIGA: 0,5% ao mês + TR. Portanto: 0,5% + 0,1% (TR) = 0,6% ao mês aproximadamente. Alternativa B está errada (aplica 70% mas na base errada - seria para SELIC ≤ 8,5%). C está errada (não divide SELIC por 12). D seria correta se SELIC ≤ 8,5%, mas não é o caso. E ignora a remuneração de 0,5% ao mês. Observação: na prática, a TR costuma ser próxima de zero atualmente.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  }
];

// ========== 3. CARTÃO DE CRÉDITO - 5 questões ==========
const questoesCartaoCredito = [
  {
    id: "produtos-cartao-credito-001",
    enunciado: "O cartão de crédito é um meio de pagamento que permite compras a prazo. Sobre o funcionamento do cartão de crédito, assinale a alternativa CORRETA:",
    alternativas: {
      A: "O valor das compras é debitado imediatamente da conta corrente",
      B: "O limite de crédito é definido unilateralmente pelo cliente",
      C: "Há um prazo entre a compra e o vencimento da fatura, permitindo crédito sem juros",
      D: "A anuidade é obrigatória para todos os cartões sem exceção",
      E: "Não é possível parcelar compras no cartão de crédito"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. O cartão de crédito oferece um PERÍODO DE CRÉDITO SEM JUROS entre a data da compra e o vencimento da fatura (geralmente 20 a 40 dias). Se pagar a fatura integral no vencimento, não há juros. Alternativa A incorreta: débito na conta ocorre no débito automático, não imediatamente. B incorreta: limite é definido pelo banco após análise de crédito. D incorreta: existem cartões sem anuidade. E incorreta: parcelamento é possível (com ou sem juros conforme negociação).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-cartao-credito-002",
    enunciado: "Maria recebeu a fatura do cartão de crédito com valor total de R$ 2.000,00 e vencimento em 10 dias. Ela só pode pagar R$ 400,00 (20% do valor total = pagamento mínimo). O que ocorrerá com o saldo restante?",
    alternativas: {
      A: "O saldo restante de R$ 1.600 será parcelado automaticamente sem juros",
      B: "O saldo restante entrará no crédito rotativo com juros muito altos",
      C: "O cartão será bloqueado imediatamente",
      D: "Não haverá nenhum custo adicional, apenas o saldo para o próximo mês",
      E: "O banco não aceita pagamento parcial, apenas integral"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Quando se paga apenas o MÍNIMO da fatura (geralmente 15-20%), o saldo restante entra no CRÉDITO ROTATIVO, que possui as MAIORES TAXAS DE JUROS do mercado (podem ultrapassar 400% ao ano!). Os R$ 1.600 serão acrescidos de juros rotativos altíssimos. Desde 2017, o rotativo tem limite de 30 dias, após os quais deve ser oferecido parcelamento. A incorreta: não é automático sem juros. C incorreta: cartão não bloqueia. D incorreta: haverá juros rotativos. E incorreta: pagamento mínimo é permitido.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-cartao-credito-003",
    enunciado: "Sobre as tarifas e encargos do cartão de crédito, é INCORRETO afirmar que:",
    alternativas: {
      A: "A anuidade pode variar conforme o tipo de cartão (básico, gold, platinum)",
      B: "Existem cartões sem anuidade (isenção de tarifa anual)",
      C: "Os juros do rotativo estão entre os mais altos do mercado",
      D: "A taxa de juros do parcelamento de fatura é sempre inferior à do rotativo",
      E: "A anuidade é a única tarifa que pode ser cobrada em cartões de crédito"
    },
    gabarito: "E",
    explicacao: "CORRETO: Alternativa E (INCORRETA). Além da anuidade, cartões de crédito podem cobrar DIVERSAS outras tarifas: saque em dinheiro (geralmente 10-15% do valor), pagamento de contas, segunda via de cartão, segunda via de fatura, avaliação emergencial de crédito, entre outras. As demais alternativas estão corretas: A - anuidade varia (básico R$ 100, platinum R$ 800+); B - existem sem anuidade; C - rotativo é caríssimo (300-400% a.a.); D - parcelamento tem juros menores que rotativo.",
    banca: "FGV",
    ano: 2024,
    cargo: "Técnico Bancário"
  },
  {
    id: "produtos-cartao-credito-004",
    enunciado: "Um cliente deseja aumentar o limite do cartão de crédito. Quais fatores são analisados pelo banco para essa decisão?",
    alternativas: {
      A: "Apenas o histórico de pagamento das faturas",
      B: "Score de crédito, renda, relacionamento com o banco e histórico de pagamentos",
      C: "Somente a quantidade de anos como cliente do banco",
      D: "Apenas o saldo médio na conta corrente",
      E: "O banco é obrigado a aumentar o limite quando solicitado"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A análise de aumento de limite considera MÚLTIPLOS FATORES: Score de crédito (Serasa, Boa Vista), renda comprovada, histórico de pagamentos (atrasos desqualificam), relacionamento com banco (tempo de conta, produtos contratados, movimentação), utilização do limite atual, dívidas em outras instituições. É análise MULTIFATORIAL. A incorreta: não é apenas histórico. C e D incorretas: não são únicos fatores. E incorreta: banco NÃO é obrigado, é decisão de gestão de risco.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-cartao-credito-005",
    enunciado: "Sobre a regulamentação do crédito rotativo do cartão de crédito (Resolução CMN 4.549/2017), é CORRETO afirmar que:",
    alternativas: {
      A: "O cliente pode permanecer no rotativo indefinidamente",
      B: "Após 30 dias no rotativo, o banco deve oferecer parcelamento da dívida",
      C: "O rotativo é proibido no Brasil desde 2017",
      D: "Os juros do rotativo são iguais aos da poupança",
      E: "Apenas pessoas jurídicas podem usar o rotativo"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A Resolução CMN 4.549/2017 estabelece que o cliente pode permanecer no ROTATIVO por até 30 DIAS. Após esse prazo, o banco DEVE oferecer PARCELAMENTO do saldo devedor (geralmente com juros menores que o rotativo, mas ainda altos). Isso visa proteger o consumidor de dívidas impagáveis. A incorreta: limite de 30 dias. C incorreta: não é proibido, é regulado. D incorreta: juros são altíssimos. E incorreta: PF usa rotativo (PJ tem outros produtos de crédito).",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  }
];

// ========== 4. CARTÃO DE DÉBITO - 5 questões ==========
const questoesCartaoDebito = [
  {
    id: "produtos-cartao-debito-001",
    enunciado: "O cartão de débito é um meio de pagamento vinculado à conta corrente. Qual a principal diferença entre cartão de débito e cartão de crédito?",
    alternativas: {
      A: "Cartão de débito permite parcelamento de compras",
      B: "Cartão de débito desconta o valor imediatamente da conta corrente",
      C: "Cartão de débito não possui senha de segurança",
      D: "Cartão de débito só funciona em caixas eletrônicos",
      E: "Cartão de débito tem limite de crédito pré-aprovado"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A principal diferença é que o CARTÃO DE DÉBITO desconta o valor da compra IMEDIATAMENTE da conta corrente (ou em até 1 dia útil), enquanto o cartão de crédito posterga o pagamento para a fatura. Alternativa A incorreta: débito geralmente não parcela (exceto débito parcelado, mais recente). C incorreta: tem senha. D incorreta: funciona em estabelecimentos comerciais também. E incorreta: não tem limite de crédito, apenas o saldo disponível em conta.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-cartao-debito-002",
    enunciado: "João tem R$ 500,00 em sua conta corrente. Tentou fazer uma compra de R$ 600,00 no cartão de débito. O que ocorrerá?",
    alternativas: {
      A: "A compra será aprovada e João ficará com saldo negativo de R$ 100",
      B: "A compra será recusada por saldo insuficiente",
      C: "A compra será parcelada automaticamente em 2 vezes",
      D: "O banco cobrará juros do cheque especial sobre os R$ 100 excedentes",
      E: "A compra será aprovada usando o limite do cartão de crédito"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. O cartão de débito EXIGE SALDO DISPONÍVEL na conta. Se não há saldo suficiente, a compra é RECUSADA no momento da tentativa. A incorreta: não gera saldo negativo automático (só se houver cheque especial e a compra for via cheque ou autorização prévia). C incorreta: não parcela automaticamente. D incorreta: cheque especial só entra se houver contrato e autorização. E incorreta: não usa limite de crédito (são produtos separados, exceto nos cartões múltiplos que têm as duas funções).",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-cartao-debito-003",
    enunciado: "Sobre as vantagens e características do cartão de débito, assinale a alternativa CORRETA:",
    alternativas: {
      A: "Permite gastos acima do saldo disponível, gerando endividamento",
      B: "Cobra juros sobre o valor das compras",
      C: "Ajuda no controle financeiro pois só permite gastar o que tem em conta",
      D: "Exige pagamento de fatura mensal",
      E: "Sempre cobra anuidade mais alta que cartão de crédito"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. A GRANDE VANTAGEM do cartão de débito é o CONTROLE FINANCEIRO: só permite gastar o que está disponível na conta, evitando endividamento. É ideal para quem quer evitar dívidas. Alternativa A incorreta: NÃO permite gastos acima do saldo (essa é característica do crédito). B incorreta: NÃO cobra juros, pois não há crédito concedido. D incorreta: NÃO tem fatura, débito é imediato. E incorreta: geralmente NÃO cobra anuidade (fornecimento é gratuito na maioria dos bancos).",
    banca: "FGV",
    ano: 2024,
    cargo: "Técnico Bancário"
  },
  {
    id: "produtos-cartao-debito-004",
    enunciado: "Atualmente, muitos cartões são 'múltiplos', ou seja, possuem as funções débito e crédito no mesmo plástico. Sobre os cartões múltiplos, é INCORRETO afirmar que:",
    alternativas: {
      A: "O cliente pode escolher no momento da compra se pagará no débito ou crédito",
      B: "A função débito desconta imediatamente da conta, e a crédito vai para a fatura",
      C: "Automaticamente todas as compras são debitadas da conta corrente",
      D: "É possível desabilitar uma das funções se o cliente desejar",
      E: "São mais práticos pois concentram duas funções em um só cartão"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C (INCORRETA). Nos cartões múltiplos, o cliente ESCOLHE na hora da compra se usará débito ou crédito. NÃO é automático que todas sejam débito. Se escolher crédito, vai para fatura; se escolher débito, desconta da conta. As demais alternativas estão corretas: A - cliente escolhe; B - funcionamento correto; D - pode desabilitar crédito ficando só débito ou vice-versa; E - vantagem da praticidade de 1 só cartão para 2 funções.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-cartao-debito-005",
    enunciado: "Sobre tarifas relacionadas ao cartão de débito, conforme normas do Banco Central, é CORRETO afirmar que:",
    alternativas: {
      A: "Os bancos podem cobrar por cada compra realizada com cartão de débito",
      B: "O fornecimento do primeiro cartão de débito deve ser gratuito, conforme pacote de serviços essenciais",
      C: "Saques no caixa eletrônico com cartão de débito sempre têm tarifa",
      D: "A anuidade do cartão de débito é sempre superior a R$ 100,00",
      E: "Não existe regulamentação sobre tarifas de cartão de débito"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A Resolução CMN 3.919/2010 (Serviços Essenciais) determina que o FORNECIMENTO DO PRIMEIRO CARTÃO DE DÉBITO com função débito deve ser GRATUITO. Além disso, estão incluídos gratuitamente 4 saques mensais no caixa eletrônico. Alternativa A incorreta: NÃO podem cobrar por compra com débito. C incorreta: 4 saques mensais são gratuitos. D incorreta: geralmente cartão de débito NÃO tem anuidade (é gratuito). E incorreta: há regulamentação clara do BACEN.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  }
];

// ========== 5. EMPRÉSTIMOS E FINANCIAMENTOS - 5 questões ==========
const questoesEmprestimosFinanciamentos = [
  {
    id: "produtos-emprestimos-001",
    enunciado: "Qual a principal diferença entre EMPRÉSTIMO e FINANCIAMENTO?",
    alternativas: {
      A: "Não há diferença, são sinônimos perfeitos",
      B: "Empréstimo é para pessoa física e financiamento para pessoa jurídica",
      C: "No empréstimo o uso é livre; no financiamento o recurso é vinculado a um bem específico",
      D: "Empréstimo tem juros maiores que financiamento sempre",
      E: "Financiamento não exige garantias"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. A diferença essencial é: EMPRÉSTIMO = crédito pessoal com USO LIVRE do dinheiro (pode usar para qualquer finalidade). FINANCIAMENTO = crédito vinculado à aquisição de um BEM ESPECÍFICO (imóvel, veículo, equipamento), e o bem geralmente fica alienado como garantia. Alternativa A incorreta: não são sinônimos. B incorreta: ambos existem para PF e PJ. D incorreta: empréstimo tende a ter juros maiores (menos garantia), mas não é regra absoluta. E incorreta: financiamento tem garantia (o próprio bem).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-emprestimos-002",
    enunciado: "Sobre as modalidades de crédito pessoal, qual apresenta GERALMENTE as menores taxas de juros?",
    alternativas: {
      A: "Cheque especial",
      B: "Crédito rotativo do cartão de crédito",
      C: "Crédito consignado (desconto em folha de pagamento)",
      D: "Crédito pessoal sem garantia",
      E: "Todas têm exatamente a mesma taxa"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. O CRÉDITO CONSIGNADO tem as MENORES taxas de juros entre os empréstimos pessoais porque: 1) O desconto é AUTOMÁTICO na folha de pagamento (margem consignável), reduzindo risco de inadimplência; 2) Garantia de recebimento. Taxas: Consignado ≈ 1,5-2,5% a.m.; Pessoal sem garantia ≈ 4-9% a.m.; Cheque especial ≈ 8-15% a.m.; Rotativo cartão ≈ 10-20% a.m. Alternativa E incorreta: taxas variam muito conforme risco.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-emprestimos-003",
    enunciado: "João contratou um financiamento de veículo em 60 parcelas pelo Sistema SAC (Sistema de Amortização Constante). Sobre o Sistema SAC, é CORRETO afirmar que:",
    alternativas: {
      A: "As parcelas são todas iguais do início ao fim",
      B: "A amortização é constante e os juros decrescem, fazendo as parcelas diminuírem",
      C: "Os juros são constantes e a amortização cresce",
      D: "Não há pagamento de juros, apenas do principal",
      E: "É proibido pelo Banco Central"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. No SISTEMA SAC (Sistema de Amortização Constante): a AMORTIZAÇÃO é fixa (valor do principal dividido em partes iguais); os JUROS incidem sobre o SALDO DEVEDOR, que diminui a cada mês; logo, JUROS DECRESCEM e PARCELAS DIMINUEM ao longo do tempo. Exemplo: parcela = amortização fixa + juros decrescentes. Alternativa A incorreta: parcelas decrescem. C incorreta: é o contrário. D incorreta: há juros. E incorreta: é permitido (muito usado em financiamento imobiliário).",
    banca: "FGV",
    ano: 2024,
    cargo: "Técnico Bancário"
  },
  {
    id: "produtos-emprestimos-004",
    enunciado: "No Sistema PRICE (Tabela Price), utilizado em muitos financiamentos, as parcelas têm qual característica?",
    alternativas: {
      A: "Parcelas decrescentes ao longo do tempo",
      B: "Parcelas crescentes ao longo do tempo",
      C: "Parcelas fixas (iguais) do início ao fim",
      D: "Apenas juros, sem amortização do principal",
      E: "Pagamento único no final (bullet)"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. Na TABELA PRICE (Sistema Francês de Amortização), as PARCELAS SÃO FIXAS (iguais) durante todo o período. A composição varia: no início, maior parte é juros e pouca amortização; no final, maior parte é amortização e poucos juros. Total da parcela permanece igual. Diferente do SAC (parcelas decrescentes - A incorreta). B incorreta: não crescem. D incorreta: há amortização desde a primeira parcela. E incorreta: é parcelamento normal, não bullet (pagamento único final).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-emprestimos-005",
    enunciado: "Sobre o CET - Custo Efetivo Total de uma operação de crédito, assinale a alternativa CORRETA:",
    alternativas: {
      A: "CET considera apenas a taxa de juros nominal",
      B: "CET é a taxa de juros mais todas as tarifas, seguros e encargos, representando o custo real total",
      C: "CET é sempre inferior à taxa de juros nominal",
      D: "Bancos não são obrigados a informar o CET",
      E: "CET só se aplica a financiamento imobiliário"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. O CET (Custo Efetivo Total) é a medida MAIS COMPLETA do custo do crédito, incluindo: taxa de juros + tarifas + IOF + seguros obrigatórios + todos os encargos. Representa o CUSTO REAL TOTAL. É OBRIGATÓRIO que bancos informem o CET antes da contratação (Resolução CMN 3.517/2007 e Lei do Cadastro Positivo). Alternativa A incorreta: inclui mais que juros. C incorreta: CET é sempre MAIOR que juros nominais (inclui mais custos). D incorreta: é obrigatório. E incorreta: aplica-se a todas as modalidades.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  }
];

// ========== 6. CHEQUE ESPECIAL - 5 questões ==========
const questoesChequeEspecial = [
  {
    id: "produtos-cheque-especial-001",
    enunciado: "O cheque especial é uma linha de crédito pré-aprovada vinculada à conta corrente. Sobre o cheque especial, é CORRETO afirmar que:",
    alternativas: {
      A: "É obrigatório para todos os correntistas",
      B: "Só pode ser usado mediante solicitação prévia ao gerente",
      C: "É ativado automaticamente quando o saldo da conta fica negativo (se contratado)",
      D: "Não cobra juros, apenas tarifas fixas",
      E: "Tem as menores taxas de juros do mercado"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. O cheque especial, quando CONTRATADO, funciona como uma 'reserva de emergência' que é ativada AUTOMATICAMENTE quando o saldo fica negativo (saques, pagamentos, cheques que excedem o saldo). É crédito ROTATIVO automático. Alternativa A incorreta: é OPCIONAL, cliente pode recusar. B incorreta: ativação é automática, não precisa solicitar. D incorreta: cobra JUROS (entre os mais altos). E incorreta: tem juros MUITO ALTOS (8-15% ao mês), entre os piores do mercado.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-cheque-especial-002",
    enunciado: "Maria tem limite de cheque especial de R$ 1.000. Sua conta tem saldo de R$ 200. Ela fez um saque de R$ 700. Qual será sua situação?",
    alternativas: {
      A: "Saque será recusado por saldo insuficiente",
      B: "Usará R$ 200 do saldo e R$ 500 do cheque especial, ficando com saldo de -R$ 500",
      C: "O banco bloqueará a conta",
      D: "Não haverá cobrança de juros sobre os R$ 500 do cheque especial",
      E: "Precisará pagar multa de 10% sobre o valor"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Maria usará todo o saldo disponível (R$ 200) e completará o saque com R$ 500 do limite do cheque especial, ficando com SALDO NEGATIVO de R$ 500. Sobre esses R$ 500, incidirão JUROS DIÁRIOS do cheque especial até que ela deposite dinheiro e volte ao positivo. Alternativa A incorreta: saque é aprovado (há limite). C incorreta: conta não bloqueia. D incorreta: HAVERÁ juros (altos!). E incorreta: não há multa percentual, apenas juros sobre o valor usado.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-cheque-especial-003",
    enunciado: "Sobre a regulamentação do cheque especial (Resolução CMN 4.765/2020), assinale a alternativa CORRETA:",
    alternativas: {
      A: "O cliente pode permanecer no cheque especial indefinidamente",
      B: "Após 30 dias consecutivos no negativo, o banco deve oferecer opção de crédito com encargos menores",
      C: "Os juros do cheque especial são iguais aos da poupança",
      D: "O cheque especial não pode ser cancelado pelo cliente",
      E: "O limite do cheque especial é definido pelo cliente"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A Resolução CMN 4.765/2020 determina que, se o cliente ficar mais de 30 DIAS CONSECUTIVOS com saldo negativo no cheque especial, o banco DEVE oferecer linha de crédito com ENCARGOS MENORES (como crédito pessoal parcelado). Isso protege o consumidor de juros abusivos prolongados. Alternativa A incorreta: há limite de 30 dias. C incorreta: juros são altíssimos. D incorreta: cliente pode cancelar quando quiser. E incorreta: banco define limite após análise de crédito.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-cheque-especial-004",
    enunciado: "Por que as taxas de juros do cheque especial são tão elevadas?",
    alternativas: {
      A: "Porque é ilegal e por isso cobra caro",
      B: "Porque é crédito rotativo, sem prazo definido, de alto risco e para emergências",
      C: "Porque os bancos são obrigados por lei a cobrar juros altos",
      D: "Porque só é oferecido para clientes de baixa renda",
      E: "Porque tem prazo de pagamento muito longo"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. As taxas do cheque especial são altas porque: 1) É CRÉDITO ROTATIVO sem prazo de pagamento definido (alto risco); 2) Não exige garantias (crédito limpo); 3) É ativado automaticamente (conveniência); 4) Destina-se a emergências de CURTO PRAZO; 5) Alto índice de inadimplência. Por isso, juros entre 8-15% ao mês. Alternativa A incorreta: é legal e regulado. C incorreta: não há obrigação de cobrar alto. D incorreta: é para todos os perfis. E incorreta: não tem prazo longo.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Técnico Bancário"
  },
  {
    id: "produtos-cheque-especial-005",
    enunciado: "Um cliente deseja CANCELAR o cheque especial de sua conta. Sobre essa decisão, é CORRETO afirmar que:",
    alternativas: {
      A: "Não é possível cancelar o cheque especial",
      B: "Só pode cancelar após 12 meses de utilização",
      C: "Pode cancelar a qualquer momento, desde que não tenha saldo devedor",
      D: "Precisa pagar uma multa de 30% do limite para cancelar",
      E: "Apenas o banco pode cancelar, nunca o cliente"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. O cliente tem DIREITO de cancelar o cheque especial A QUALQUER MOMENTO, bastando solicitar ao banco (presencialmente, por telefone ou app). Condição: NÃO pode ter saldo devedor (deve zerar antes). Após cancelamento, se entrar no negativo, operações serão recusadas. Isso é uma ESTRATÉGIA DE CONTROLE FINANCEIRO recomendada para quem quer evitar tentações de endividamento. Alternativas A, B, D, E incorretas: cliente tem liberdade de cancelar, sem multa, sem prazo mínimo.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  }
];

// ========== 7. CÂMBIO - 5 questões ==========
const questoesCambio = [
  {
    id: "produtos-cambio-001",
    enunciado: "Operações de câmbio envolvem a troca de moedas. Sobre o mercado de câmbio no Brasil, assinale a alternativa CORRETA:",
    alternativas: {
      A: "Qualquer pessoa pode fazer operações de câmbio sem intermediários",
      B: "Apenas o Banco Central pode fazer operações de câmbio",
      C: "As operações de câmbio devem ser feitas através de instituições autorizadas pelo Banco Central",
      D: "Não há regulamentação sobre operações de câmbio",
      E: "Câmbio só pode ser feito em dólar americano"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. No Brasil, operações de câmbio DEVEM ser realizadas através de INSTITUIÇÕES AUTORIZADAS pelo Banco Central: bancos, corretoras de câmbio, agências de turismo autorizadas. É proibido câmbio paralelo (doleiros). O BACEN regulamenta e fiscaliza todo o mercado de câmbio (Lei 4.131/62 e Resolução CMN). Alternativa A incorreta: precisa intermediário autorizado. B incorreta: BACEN fiscaliza, mas bancos/corretoras operam. D incorreta: há regulamentação. E incorreta: pode ser euro, libra, etc.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-cambio-002",
    enunciado: "João vai viajar para os EUA e precisa comprar dólares. Sobre a compra de moeda estrangeira para turismo, é CORRETO afirmar que:",
    alternativas: {
      A: "Não há limite de valor para compra em espécie",
      B: "Valores acima de R$ 10.000 (ou equivalente) devem ser declarados à Receita Federal ao sair do país",
      C: "É obrigatório comprar no aeroporto",
      D: "Não é necessário apresentar documentos",
      E: "A cotação é sempre a mesma em todas as instituições"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Ao SAIR do Brasil com valores acima de R$ 10.000 (ou equivalente em moeda estrangeira), deve-se fazer a e-DBV (Declaração Eletrônica de Bens de Viajante) para a Receita Federal, informando o dinheiro. Isso previne lavagem de dinheiro. Alternativa A incorreta: pode comprar qualquer valor, mas acima de R$ 10 mil deve declarar. C incorreta: pode comprar em bancos, corretoras (geralmente melhor taxa que aeroporto). D incorreta: exige RG/CPF. E incorreta: cotação varia entre instituições (spread diferente).",
    banca: "FCC",
    ano: 2024,
    cargo: "Técnico Bancário"
  },
  {
    id: "produtos-cambio-003",
    enunciado: "Sobre os tipos de taxa de câmbio, qual a diferença entre taxa de câmbio PTAX e taxa de câmbio COMERCIAL?",
    alternativas: {
      A: "Não há diferença, são a mesma coisa",
      B: "PTAX é a taxa média calculada pelo Banco Central; comercial é a taxa praticada em transações efetivas",
      C: "PTAX é usada apenas para turismo",
      D: "Comercial é sempre mais alta que PTAX",
      E: "PTAX é a taxa do dólar paralelo"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. PTAX = taxa de câmbio de referência calculada pelo BANCO CENTRAL com base na MÉDIA das negociações do dia (usada para contratos, ajustes, referência). COMERCIAL = taxa efetivamente praticada em transações de compra/venda (varia entre instituições, tem spread). Exemplo: PTAX pode estar R$ 5,00, mas banco vende a R$ 5,15 (comercial de venda). Alternativa A incorreta: são diferentes. C incorreta: PTAX é referência geral. D incorreta: nem sempre. E incorreta: PTAX é oficial.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-cambio-004",
    enunciado: "Uma empresa brasileira importadora precisa pagar US$ 100.000 ao fornecedor estrangeiro. Que tipo de operação de câmbio ela realizará?",
    alternativas: {
      A: "Câmbio turismo",
      B: "Câmbio comercial (compra de moeda estrangeira)",
      C: "Câmbio financeiro",
      D: "Câmbio paralelo",
      E: "Não precisa fazer câmbio, pode pagar em reais"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Para pagar importação, a empresa fará OPERAÇÃO DE CÂMBIO COMERCIAL, comprando dólares (entrega reais, recebe dólares que são enviados ao exterior). Operações comerciais de importação/exportação usam CÂMBIO COMERCIAL (não turismo - A incorreta). Câmbio financeiro é para investimentos (C). Paralelo é ilegal (D). Pagamento internacional exige moeda aceita pelo fornecedor, geralmente USD/EUR (E incorreta). Operação passa por banco autorizado com contrato de câmbio.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-cambio-005",
    enunciado: "Sobre o IOF (Imposto sobre Operações Financeiras) em operações de câmbio, assinale a alternativa CORRETA:",
    alternativas: {
      A: "IOF não incide sobre operações de câmbio",
      B: "IOF para compra de moeda em viagem de turismo é de 1,1%",
      C: "IOF para cartão de crédito em compras internacionais é de 6,38%",
      D: "IOF é sempre 0% para pessoas físicas",
      E: "IOF só é cobrado de pessoas jurídicas"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. O IOF (Decreto 6.306/07) em operações cambiais: CARTÃO DE CRÉDITO/DÉBITO em compras internacionais = 5,38% (até 2023 era 6,38%, mas foi reduzido); Compra de MOEDA EM ESPÉCIE para viagem = 1,1%; Transferências internacionais = 0,38% (alguns casos). Alternativa A incorreta: IOF incide. B incorreta: é 1,1% correto, mas C também está correta e mais específica. D incorreta: PF paga IOF. E incorreta: PF e PJ pagam. Nota: alíquotas podem mudar via decreto.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  }
];

// ========== 8. CAPITALIZAÇÃO - 5 questões ==========
const questoesCapitalizacao = [
  {
    id: "produtos-capitalizacao-001",
    enunciado: "Título de capitalização é um produto financeiro que mescla poupança programada com sorteios. Sobre os títulos de capitalização, é CORRETO afirmar que:",
    alternativas: {
      A: "É um investimento de alta rentabilidade",
      B: "Combina formação de poupança com participação em sorteios",
      C: "Não é regulado por nenhum órgão governamental",
      D: "Garante prêmio em dinheiro a todos os participantes",
      E: "É proibido no Brasil desde 2010"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Título de capitalização é um PRODUTO que combina: 1) POUPANÇA PROGRAMADA (mensalidades acumuladas, resgate no final); 2) PARTICIPAÇÃO EM SORTEIOS (chance de ganhar prêmios). NÃO é investimento (A incorreta - rentabilidade geralmente baixa, menor que poupança). É regulado pela SUSEP - Superintendência de Seguros Privados (C incorreta). NÃO garante prêmio, apenas chance de sorteio (D incorreta). É legal e regulamentado (E incorreta - Lei Complementar 126/2007).",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-capitalizacao-002",
    enunciado: "Maria contratou um título de capitalização com pagamento de R$ 100 mensais por 48 meses. Ao final, ela resgatará:",
    alternativas: {
      A: "Exatamente R$ 4.800 (100 x 48) sem correção",
      B: "Valor menor que R$ 4.800 devido às taxas",
      C: "Valor corrigido por índice + juros, geralmente próximo ou pouco acima do pago",
      D: "O dobro do valor investido",
      E: "Nada, pois título de capitalização não tem resgate"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C. No título de capitalização, ao FINAL DO PRAZO, o cliente resgata o VALOR PAGO corrigido por índice (geralmente TR) + juros (costuma ser baixo). Exemplo: pagou R$ 4.800, pode resgatar R$ 4.950 (correção + juros baixos). Parte do valor pago vai para: provisão matemática (poupança), custeio de sorteios e taxa de administração. Alternativa A incorreta: há correção. B pode acontecer em resgates antecipados. D incorreta: não dobra. E incorreta: há resgate.",
    banca: "FCC",
    ano: 2024,
    cargo: "Técnico Bancário"
  },
  {
    id: "produtos-capitalizacao-003",
    enunciado: "Sobre a regulamentação e fiscalização dos títulos de capitalização, é INCORRETO afirmar que:",
    alternativas: {
      A: "São regulados e fiscalizados pela SUSEP (Superintendência de Seguros Privados)",
      B: "Apenas sociedades de capitalização autorizadas podem emitir títulos",
      C: "São regulados pelo Banco Central, assim como os bancos",
      D: "A SUSEP estabelece regras sobre sorteios, resgates e comissões",
      E: "Sociedades de capitalização precisam de autorização governamental para funcionar"
    },
    gabarito: "C",
    explicacao: "CORRETO: Alternativa C (INCORRETA). Títulos de capitalização são regulados pela SUSEP (Superintendência de Seguros Privados), vinculada ao Ministério da Fazenda, NÃO pelo Banco Central. BACEN regula bancos e instituições financeiras; SUSEP regula seguros, previdência privada aberta e capitalização. As demais alternativas estão corretas: A e D - SUSEP regula; B e E - apenas sociedades autorizadas emitem (Decreto-Lei 261/67 e Circular SUSEP 659/22).",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-capitalizacao-004",
    enunciado: "Por que os títulos de capitalização geralmente NÃO são considerados bons investimentos do ponto de vista financeiro?",
    alternativas: {
      A: "Porque são ilegais",
      B: "Porque a rentabilidade costuma ser inferior à poupança ou outros investimentos conservadores",
      C: "Porque não é possível resgatar o valor investido",
      D: "Porque os sorteios são fraudulentos",
      E: "Porque o governo confisca os valores"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Títulos de capitalização têm RENTABILIDADE BAIXA, geralmente INFERIOR à poupança, Tesouro Direto ou CDB, porque parte dos recursos vai para: custeio dos sorteios, taxa de carregamento (administração) e lucro da sociedade. Visão financeira: não é bom investimento. Visão do consumidor: algumas pessoas valorizam a 'poupança forçada' + emoção dos sorteios. Alternativa A incorreta: são legais. C incorreta: há resgate. D incorreta: sorteios são auditados pela SUSEP. E incorreta: não há confisco.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-capitalizacao-005",
    enunciado: "Sobre os sorteios dos títulos de capitalização, assinale a alternativa CORRETA:",
    alternativas: {
      A: "Todos os títulos participam de todos os sorteios sem limitação",
      B: "Os sorteios são realizados pela própria sociedade de capitalização, mas auditados pela SUSEP",
      C: "Ganhar o sorteio cancela o direito ao resgate ao final do prazo",
      D: "Não há limite de prêmios que uma pessoa pode ganhar",
      E: "Sorteios são proibidos por lei"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Os sorteios são conduzidos pelas SOCIEDADES DE CAPITALIZAÇÃO, mas devem seguir regras rígidas da SUSEP e ser AUDITADOS para garantir lisura (geralmente usam sorteios da Loteria Federal como base). Alternativa A incorreta: participação depende das condições do título (alguns só participam após carência). C incorreta: ganhar sorteio NÃO cancela resgate (são cumulativos - ganha prêmio E resgata no final). D correta em teoria, mas não responde sobre os sorteios em si. E incorreta: sorteios são permitidos e regulados.",
    banca: "FCC",
    ano: 2024,
    cargo: "Escriturário"
  }
];

// ========== 9. PREVIDÊNCIA PRIVADA - 5 questões ==========
const questoesPrevidenciaPrivada = [
  {
    id: "produtos-previdencia-001",
    enunciado: "A previdência privada é um investimento de longo prazo focado em aposentadoria. Quais são os dois principais tipos de planos de previdência privada no Brasil?",
    alternativas: {
      A: "VGBL e VGBM",
      B: "PGBL e VGBL",
      C: "FGTS e PIS",
      D: "INSS e RPPS",
      E: "CDB e LCI"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Os dois principais tipos de previdência privada ABERTA no Brasil são: PGBL (Plano Gerador de Benefício Livre) e VGBL (Vida Gerador de Benefício Livre). Diferença principal: PGBL permite deduzir contribuições no IR (até 12% da renda bruta, para quem faz declaração completa); VGBL não permite dedução, mas IR no resgate incide apenas sobre rendimentos. Alternativa A incorreta: VGBM não existe. C e D: são outros benefícios (FGTS trabalhista, INSS público). E: são investimentos, não previdência.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Escriturário"
  },
  {
    id: "produtos-previdencia-002",
    enunciado: "Qual a principal diferença entre PGBL e VGBL do ponto de vista TRIBUTÁRIO?",
    alternativas: {
      A: "PGBL permite deduzir contribuições no IR; VGBL não permite dedução mas IR no resgate é só sobre rendimentos",
      B: "VGBL é isento de IR, PGBL não",
      C: "Não há diferença tributária entre eles",
      D: "PGBL é para pessoa física e VGBL para pessoa jurídica",
      E: "VGBL tem taxa de administração maior"
    },
    gabarito: "A",
    explicacao: "CORRETO: Alternativa A. TRIBUTAÇÃO: PGBL - contribuições podem ser deduzidas no IR até 12% da renda bruta anual (para quem faz declaração completa), mas IR no resgate incide sobre VALOR TOTAL (contribuições + rendimentos). VGBL - não permite dedução, mas IR no resgate incide apenas sobre RENDIMENTOS. Escolha: PGBL para quem faz declaração completa do IR e quer benefício fiscal agora; VGBL para quem faz simplificada ou isento. Alternativa B incorreta: nenhum é isento. C incorreta: há diferença. D incorreta: ambos para PF.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-previdencia-003",
    enunciado: "Sobre as tabelas de tributação da previdência privada (progressiva e regressiva), assinale a alternativa CORRETA:",
    alternativas: {
      A: "Tabela progressiva: alíquota aumenta conforme o tempo de contribuição",
      B: "Tabela regressiva: alíquota DIMINUI conforme o tempo de acumulação (quanto mais tempo, menos IR)",
      C: "Tabela progressiva é sempre mais vantajosa",
      D: "Não é possível mudar de tabela depois de escolhida",
      E: "Ambas têm alíquota fixa de 15%"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. TABELA REGRESSIVA: alíquota de IR DIMINUI conforme tempo de acumulação - até 2 anos = 35%; 2-4 anos = 30%; 4-6 anos = 25%; 6-8 anos = 20%; 8-10 anos = 15%; acima de 10 anos = 10% (incentiva longo prazo). TABELA PROGRESSIVA: segue tabela normal do IR (0%, 7,5%, 15%, 22,5%, 27,5% conforme valor). Alternativa A incorreta: progressiva varia por valor, não tempo. C incorreta: depende do caso. D incorreta: pode mudar de progressiva para regressiva (uma vez, não volta). E incorreta: alíquotas variam.",
    banca: "FGV",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-previdencia-004",
    enunciado: "João tem 30 anos e quer fazer previdência privada para se aposentar aos 60 anos. Qual regime de tributação seria MAIS VANTAJOSO para ele?",
    alternativas: {
      A: "Tabela progressiva",
      B: "Tabela regressiva, pois terá 30 anos de acumulação (alíquota de 10%)",
      C: "Não faz diferença",
      D: "Depende exclusivamente do valor da contribuição mensal",
      E: "Previdência privada não tem opção de tributação"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. Para LONGO PRAZO (30 anos), a TABELA REGRESSIVA é extremamente vantajosa: após 10 anos, alíquota cai para 10% (a MENOR possível), e permanece 10% até o resgate aos 60 anos. Na progressiva, dependendo do valor do resgate, poderia pagar até 27,5%. Regra geral: REGRESSIVA para quem tem longo prazo e renda média/alta na aposentadoria; PROGRESSIVA para quem tem prazo curto ou renda baixa na aposentadoria (pode ficar isento ou 7,5%). João, com 30 anos pela frente, deve escolher REGRESSIVA.",
    banca: "CESPE",
    ano: 2024,
    cargo: "Analista"
  },
  {
    id: "produtos-previdencia-005",
    enunciado: "Sobre a portabilidade e resgate da previdência privada, é CORRETO afirmar que:",
    alternativas: {
      A: "Não é possível fazer portabilidade entre planos",
      B: "Pode fazer portabilidade para outro plano sem custo e sem incidência de IR",
      C: "Resgate pode ser feito a qualquer momento sem carência",
      D: "Perdeu o emprego, perde todo o valor investido",
      E: "Previdência privada não permite resgate, apenas renda vitalícia"
    },
    gabarito: "B",
    explicacao: "CORRETO: Alternativa B. A previdência privada permite PORTABILIDADE entre planos (mudar de seguradora ou de PGBL para VGBL e vice-versa) SEM CUSTO e SEM INCIDÊNCIA DE IR na portabilidade (IR só no resgate final). Isso permite buscar melhores rentabilidades/taxas. Alternativa A incorreta: portabilidade é permitida. C incorreta: alguns planos têm carência para resgate (geralmente 60 dias - 2 meses). D incorreta: valor é seu, não perde. E incorreta: permite resgate total, parcial ou conversão em renda.",
    banca: "FCC",
    ano: 2024,
    cargo: "Analista"
  }
];

// Função auxiliar para enviar questões ao servidor
async function enviarQuestoesPorTopico(topico: string, questoes: any[]) {
  const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/questions/fiscal/produtos-bancarios/${topico}`;
  
  console.log(`📤 [SEED PRODUTOS BANCÁRIOS] Enviando ${questoes.length} questões de ${topico}...`);
  
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
  console.log(`✅ [SEED PRODUTOS BANCÁRIOS] ${topico}: ${result.count} questões salvas`);
  return result;
}

// Função principal de seed
export async function seedAllProdutosBancariosQuestions() {
  console.log('🏦 Iniciando seed de Produtos Bancários...');
  
  const topicos = [
    { nome: 'conta-corrente', questoes: questoesContaCorrente },
    { nome: 'poupanca', questoes: questoesPoupanca },
    { nome: 'cartao-de-credito', questoes: questoesCartaoCredito },
    { nome: 'cartao-de-debito', questoes: questoesCartaoDebito },
    { nome: 'emprestimos-e-financiamentos', questoes: questoesEmprestimosFinanciamentos },
    { nome: 'cheque-especial', questoes: questoesChequeEspecial },
    { nome: 'cambio', questoes: questoesCambio },
    { nome: 'capitalizacao', questoes: questoesCapitalizacao },
    { nome: 'previdencia-privada', questoes: questoesPrevidenciaPrivada },
  ];

  console.log(`📚 Total de tópicos: ${topicos.length}`);
  console.log(`🎯 Total de questões: ${topicos.reduce((acc, t) => acc + t.questoes.length, 0)}`);

  for (const topico of topicos) {
    console.log(`\n📖 Seeding tópico: ${topico.nome} (${topico.questoes.length} questões)...`);
    try {
      await enviarQuestoesPorTopico(topico.nome, topico.questoes);
    } catch (error) {
      console.error(`❌ Erro no tópico ${topico.nome}:`, error);
      throw error; // Re-throw para parar a importação se der erro
    }
  }

  console.log('\n✅ Seed de Produtos Bancários concluído com sucesso!');
}
