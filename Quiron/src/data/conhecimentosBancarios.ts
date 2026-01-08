// ======================================
// ÁREA FISCAL-BANCÁRIA - CONHECIMENTOS BANCÁRIOS
// ======================================

import { GameQuestion } from './gameQuestions';

export const conhecimentosBancariosQuestions: GameQuestion[] = [
  // SISTEMA FINANCEIRO NACIONAL - ESTRUTURA
  {
    id: 'banco_001',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O Conselho Monetário Nacional (CMN) é o órgão máximo do Sistema Financeiro Nacional.',
    correctAnswer: true,
    explanation: 'CERTO. CMN é órgão normativo superior, formula política monetária e creditícia.',
    difficulty: 'facil'
  },
  {
    id: 'banco_002',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O Banco Central do Brasil (BACEN) é executor da política monetária.',
    correctAnswer: true,
    explanation: 'CERTO. BACEN executa as normas do CMN, fiscaliza instituições financeiras.',
    difficulty: 'facil'
  },
  {
    id: 'banco_003',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'A CVM regula e fiscaliza o mercado de valores mobiliários.',
    correctAnswer: true,
    explanation: 'CERTO. Comissão de Valores Mobiliários - autarquia vinculada ao Ministério da Fazenda.',
    difficulty: 'facil'
  },
  {
    id: 'banco_004',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O COPOM define a meta da taxa Selic.',
    correctAnswer: true,
    explanation: 'CERTO. Comitê de Política Monetária - reuniões a cada 45 dias.',
    difficulty: 'facil'
  },
  {
    id: 'banco_005',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O BNDES é banco de desenvolvimento do governo federal.',
    correctAnswer: true,
    explanation: 'CERTO. Financia projetos de longo prazo, infraestrutura e desenvolvimento.',
    difficulty: 'facil'
  },

  // BANCO CENTRAL - FUNÇÕES E INSTRUMENTOS
  {
    id: 'banco_006',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O BACEN tem o monopólio da emissão de moeda no Brasil.',
    correctAnswer: true,
    explanation: 'CERTO. Poder exclusivo de emitir papel-moeda e moeda metálica.',
    difficulty: 'facil'
  },
  {
    id: 'banco_007',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O depósito compulsório é instrumento de política monetária.',
    correctAnswer: true,
    explanation: 'CERTO. BACEN exige recolhimento obrigatório dos bancos para controlar liquidez.',
    difficulty: 'facil'
  },
  {
    id: 'banco_008',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'As operações de mercado aberto (open market) controlam a liquidez.',
    correctAnswer: true,
    explanation: 'CERTO. BACEN compra/vende títulos públicos para controlar oferta monetária.',
    difficulty: 'medio'
  },
  {
    id: 'banco_009',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O redesconto bancário é empréstimo do BACEN aos bancos.',
    correctAnswer: true,
    explanation: 'CERTO. Assistência financeira de liquidez para instituições financeiras.',
    difficulty: 'facil'
  },
  {
    id: 'banco_010',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O BACEN é o banco dos bancos e banqueiro do governo.',
    correctAnswer: true,
    explanation: 'CERTO. Executa serviços bancários do governo e regula sistema bancário.',
    difficulty: 'facil'
  },

  // INSTITUIÇÕES FINANCEIRAS
  {
    id: 'banco_011',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Bancos comerciais captam depósitos à vista.',
    correctAnswer: true,
    explanation: 'CERTO. Característica principal - conta corrente, multiplicação monetária.',
    difficulty: 'facil'
  },
  {
    id: 'banco_012',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Bancos de investimento captam depósitos à vista.',
    correctAnswer: false,
    explanation: 'ERRADO. Captam via CDB, RDB - não podem ter conta corrente.',
    difficulty: 'medio'
  },
  {
    id: 'banco_013',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Bancos múltiplos devem ter pelo menos duas carteiras.',
    correctAnswer: true,
    explanation: 'CERTO. Uma delas obrigatoriamente comercial ou investimento.',
    difficulty: 'medio'
  },
  {
    id: 'banco_014',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Cooperativas de crédito podem captar depósitos à vista de associados.',
    correctAnswer: true,
    explanation: 'CERTO. Instituições financeiras constituídas por associados.',
    difficulty: 'facil'
  },
  {
    id: 'banco_015',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'A Caixa Econômica Federal é empresa pública.',
    correctAnswer: true,
    explanation: 'CERTO. Instituição financeira pública federal, agente de políticas públicas.',
    difficulty: 'facil'
  },

  // PRODUTOS BANCÁRIOS - CAPTAÇÃO
  {
    id: 'banco_016',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Depósito à vista em conta corrente não rende juros.',
    correctAnswer: true,
    explanation: 'CERTO. Característica do depósito à vista - alta liquidez, sem remuneração.',
    difficulty: 'facil'
  },
  {
    id: 'banco_017',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'A poupança tem garantia do FGC até R$ 250 mil por CPF.',
    correctAnswer: true,
    explanation: 'CERTO. Fundo Garantidor de Créditos protege até esse limite.',
    difficulty: 'facil'
  },
  {
    id: 'banco_018',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O CDB (Certificado de Depósito Bancário) tem garantia do FGC.',
    correctAnswer: true,
    explanation: 'CERTO. Título de renda fixa privado garantido até R$ 250 mil.',
    difficulty: 'facil'
  },
  {
    id: 'banco_019',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O RDB (Recibo de Depósito Bancário) é intransferível.',
    correctAnswer: true,
    explanation: 'CERTO. Diferente do CDB, RDB é nominativo e intransferível.',
    difficulty: 'medio'
  },
  {
    id: 'banco_020',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'A remuneração da poupança é de TR + 0,5% ao mês.',
    correctAnswer: false,
    explanation: 'ERRADO. Se Selic > 8,5%: TR + 0,5% a.m.; se Selic ≤ 8,5%: 70% da Selic + TR.',
    difficulty: 'medio'
  },

  // PRODUTOS BANCÁRIOS - CRÉDITO
  {
    id: 'banco_021',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O cheque especial é linha de crédito rotativo.',
    correctAnswer: true,
    explanation: 'CERTO. Crédito pré-aprovado vinculado à conta corrente.',
    difficulty: 'facil'
  },
  {
    id: 'banco_022',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O crédito direto ao consumidor (CDC) é modalidade de empréstimo pessoal.',
    correctAnswer: true,
    explanation: 'CERTO. Crédito para aquisição de bens com garantia (alienação fiduciária).',
    difficulty: 'facil'
  },
  {
    id: 'banco_023',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O desconto de duplicatas é operação de crédito empresarial.',
    correctAnswer: true,
    explanation: 'CERTO. Banco antecipa recursos mediante cessão de títulos.',
    difficulty: 'facil'
  },
  {
    id: 'banco_024',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O capital de giro financia necessidades de curto prazo da empresa.',
    correctAnswer: true,
    explanation: 'CERTO. Financiamento do ciclo operacional, estoques, contas a receber.',
    difficulty: 'facil'
  },
  {
    id: 'banco_025',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O penhor mercantil é garantia real de operações de crédito.',
    correctAnswer: true,
    explanation: 'CERTO. Garantia sobre bens móveis entregues ao credor.',
    difficulty: 'medio'
  },

  // MERCADO DE CAPITAIS
  {
    id: 'banco_026',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Ações são valores mobiliários de renda variável.',
    correctAnswer: true,
    explanation: 'CERTO. Representam fração do capital social, rendimento não garantido.',
    difficulty: 'facil'
  },
  {
    id: 'banco_027',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Ações preferenciais garantem direito a voto nas assembleias.',
    correctAnswer: false,
    explanation: 'ERRADO. Preferenciais têm prioridade nos dividendos, mas geralmente sem voto.',
    difficulty: 'medio'
  },
  {
    id: 'banco_028',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Debêntures são títulos de dívida emitidos por sociedades anônimas.',
    correctAnswer: true,
    explanation: 'CERTO. Captação de recursos de médio/longo prazo por empresas.',
    difficulty: 'facil'
  },
  {
    id: 'banco_029',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'A B3 é a bolsa de valores oficial do Brasil.',
    correctAnswer: true,
    explanation: 'CERTO. Brasil, Bolsa, Balcão - fusão BM&F Bovespa.',
    difficulty: 'facil'
  },
  {
    id: 'banco_030',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'IPO (Initial Public Offering) é abertura de capital na bolsa.',
    correctAnswer: true,
    explanation: 'CERTO. Oferta pública inicial de ações.',
    difficulty: 'facil'
  },

  // FUNDOS DE INVESTIMENTO
  {
    id: 'banco_031',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Fundos de investimento são condomínios de recursos.',
    correctAnswer: true,
    explanation: 'CERTO. Cotistas investem conjuntamente sob gestão profissional.',
    difficulty: 'facil'
  },
  {
    id: 'banco_032',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Fundos DI são considerados de baixo risco.',
    correctAnswer: true,
    explanation: 'CERTO. Investem em títulos pós-fixados atrelados ao CDI.',
    difficulty: 'facil'
  },
  {
    id: 'banco_033',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Fundos de ações têm garantia do FGC.',
    correctAnswer: false,
    explanation: 'ERRADO. FGC não cobre fundos de investimento (renda variável).',
    difficulty: 'medio'
  },
  {
    id: 'banco_034',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O come-cotas é antecipação semestral do IR em fundos.',
    correctAnswer: true,
    explanation: 'CERTO. Maio e novembro - cobrança automática de imposto.',
    difficulty: 'medio'
  },
  {
    id: 'banco_035',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'ETFs são fundos negociados em bolsa.',
    correctAnswer: true,
    explanation: 'CERTO. Exchange Traded Funds - replicam índices de mercado.',
    difficulty: 'facil'
  },

  // MEIOS DE PAGAMENTO
  {
    id: 'banco_036',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O PIX permite transferências instantâneas 24/7.',
    correctAnswer: true,
    explanation: 'CERTO. Sistema de pagamentos instantâneos do BACEN.',
    difficulty: 'facil'
  },
  {
    id: 'banco_037',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'TED e DOC são formas de transferência bancária.',
    correctAnswer: true,
    explanation: 'CERTO. TED (mesmo dia), DOC (D+1) - sendo substituídos pelo PIX.',
    difficulty: 'facil'
  },
  {
    id: 'banco_038',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O cheque é ordem de pagamento à vista.',
    correctAnswer: true,
    explanation: 'CERTO. Título de crédito, ordem ao banco para pagar quantia determinada.',
    difficulty: 'facil'
  },
  {
    id: 'banco_039',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Boleto bancário é título executivo extrajudicial.',
    correctAnswer: true,
    explanation: 'CERTO. Meio de cobrança, execução judicial facilitada.',
    difficulty: 'medio'
  },
  {
    id: 'banco_040',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Cartões de débito debitam imediatamente da conta corrente.',
    correctAnswer: true,
    explanation: 'CERTO. Diferente do crédito, débito depende de saldo disponível.',
    difficulty: 'facil'
  },

  // COMPLIANCE E PREVENÇÃO À LAVAGEM DE DINHEIRO
  {
    id: 'banco_041',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Bancos devem comunicar operações suspeitas ao COAF (atual UIF).',
    correctAnswer: true,
    explanation: 'CERTO. Unidade de Inteligência Financeira - prevenção à lavagem.',
    difficulty: 'facil'
  },
  {
    id: 'banco_042',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'KYC (Know Your Customer) é princípio de identificação de clientes.',
    correctAnswer: true,
    explanation: 'CERTO. Conheça seu cliente - devido diligência.',
    difficulty: 'facil'
  },
  {
    id: 'banco_043',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'PLD/FT significa Prevenção à Lavagem de Dinheiro e Financiamento ao Terrorismo.',
    correctAnswer: true,
    explanation: 'CERTO. Políticas obrigatórias nas instituições financeiras.',
    difficulty: 'facil'
  },
  {
    id: 'banco_044',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'Pessoas politicamente expostas (PEP) requerem monitoramento reforçado.',
    correctAnswer: true,
    explanation: 'CERTO. Maior exposição a riscos de lavagem de dinheiro.',
    difficulty: 'medio'
  },
  {
    id: 'banco_045',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O sigilo bancário pode ser quebrado por ordem judicial.',
    correctAnswer: true,
    explanation: 'CERTO. LC 105/01 - autoridade judicial pode determinar quebra.',
    difficulty: 'facil'
  },

  // GARANTIAS E SEGUROS
  {
    id: 'banco_046',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O FGC garante depósitos até R$ 250 mil por CPF e instituição.',
    correctAnswer: true,
    explanation: 'CERTO. Fundo Garantidor de Créditos - poupança, CDB, LCI, LCA.',
    difficulty: 'facil'
  },
  {
    id: 'banco_047',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'A alienação fiduciária transfere propriedade ao credor até quitação.',
    correctAnswer: true,
    explanation: 'CERTO. Garantia real - devedor fica com posse, credor com propriedade.',
    difficulty: 'medio'
  },
  {
    id: 'banco_048',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O aval é garantia pessoal em títulos de crédito.',
    correctAnswer: true,
    explanation: 'CERTO. Avalista responde solidariamente pelo pagamento.',
    difficulty: 'facil'
  },

  // INDICADORES E TAXAS
  {
    id: 'banco_049',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'A taxa Selic é a taxa básica de juros da economia brasileira.',
    correctAnswer: true,
    explanation: 'CERTO. Sistema Especial de Liquidação e Custódia - define pelo COPOM.',
    difficulty: 'facil'
  },
  {
    id: 'banco_050',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O CDI (Certificado de Depósito Interbancário) acompanha a Selic.',
    correctAnswer: true,
    explanation: 'CERTO. Taxa de empréstimos entre bancos, referência para investimentos.',
    difficulty: 'facil'
  }
];
