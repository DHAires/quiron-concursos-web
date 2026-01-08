// CONTABILIDADE GERAL - 50 QUESTÕES
// Área Fiscal-Bancária - Quiron Concursos
// Questões essenciais para concursos fiscais, TCU, CGU e áreas contábeis

import { GameQuestion } from './gameQuestions';

export const contabilidadeQuestions: GameQuestion[] = [
  // ========================================
  // PRINCÍPIOS CONTÁBEIS
  // ========================================
  {
    id: 'cont-001',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Pelo princípio da competência, as receitas e despesas devem ser reconhecidas no momento de seu efetivo recebimento ou pagamento.',
    correctAnswer: false,
    explanation: 'ERRADO. O princípio da competência determina o reconhecimento no momento do fato gerador, independentemente do recebimento/pagamento. O regime de caixa é diferente.',
    difficulty: 'medio'
  },
  {
    id: 'cont-002',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O princípio da entidade reconhece o patrimônio como objeto da contabilidade e afirma a autonomia patrimonial.',
    correctAnswer: true,
    explanation: 'CERTO. O princípio da entidade estabelece que o patrimônio da entidade não se confunde com o dos sócios, reconhecendo a autonomia patrimonial.',
    difficulty: 'facil'
  },
  {
    id: 'cont-003',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O princípio da prudência determina a adoção do menor valor para o ativo e do maior valor para o passivo.',
    correctAnswer: true,
    explanation: 'CERTO. A prudência (ou conservadorismo) recomenda escolher o menor valor para ativos e o maior para passivos quando houver alternativas válidas, evitando superavaliação.',
    difficulty: 'facil'
  },
  {
    id: 'cont-004',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Pelo princípio da continuidade, a entidade continuará em operação no futuro, não havendo intenção de liquidá-la.',
    correctAnswer: true,
    explanation: 'CERTO. O princípio da continuidade (going concern) pressupõe que a entidade operará indefinidamente, fundamentando a avaliação de ativos e passivos.',
    difficulty: 'facil'
  },
  {
    id: 'cont-005',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O princípio do registro pelo valor original determina que os componentes do patrimônio devem ser inicialmente registrados pelos valores originais em moeda nacional.',
    correctAnswer: true,
    explanation: 'CERTO. Os ativos e passivos devem ser registrados pelos valores originais em moeda corrente nacional na data da ocorrência (custo histórico).',
    difficulty: 'facil'
  },

  // ========================================
  // PATRIMÔNIO E SUAS VARIAÇÕES
  // ========================================
  {
    id: 'cont-006',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O patrimônio líquido representa a diferença entre o ativo e o passivo de uma entidade.',
    correctAnswer: true,
    explanation: 'CERTO. A equação fundamental da contabilidade: ATIVO = PASSIVO + PATRIMÔNIO LÍQUIDO. Logo, PL = Ativo - Passivo.',
    difficulty: 'facil'
  },
  {
    id: 'cont-007',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'As contas do ativo são de natureza credora, aumentando por crédito e diminuindo por débito.',
    correctAnswer: false,
    explanation: 'ERRADO. As contas do ATIVO têm natureza DEVEDORA. Aumentam por débito e diminuem por crédito. Passivo e PL têm natureza credora.',
    difficulty: 'medio'
  },
  {
    id: 'cont-008',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Bens, direitos e obrigações compõem, respectivamente, ativo, ativo e passivo de uma entidade.',
    correctAnswer: true,
    explanation: 'CERTO. Bens (máquinas, estoques) e direitos (contas a receber) formam o ATIVO. Obrigações (fornecedores, empréstimos) formam o PASSIVO EXIGÍVEL.',
    difficulty: 'facil'
  },
  {
    id: 'cont-009',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O ativo circulante compreende os bens e direitos realizáveis no exercício social seguinte.',
    correctAnswer: true,
    explanation: 'CERTO. O ativo circulante agrupa aplicações de recursos realizáveis até o término do exercício seguinte (em até 12 meses após o balanço).',
    difficulty: 'facil'
  },
  {
    id: 'cont-010',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O passivo exigível representa as obrigações da entidade para com terceiros.',
    correctAnswer: true,
    explanation: 'CERTO. O passivo exigível (circulante e não circulante) representa as obrigações com terceiros, como fornecedores, empréstimos e impostos a pagar.',
    difficulty: 'facil'
  },

  // ========================================
  // MÉTODO DAS PARTIDAS DOBRADAS
  // ========================================
  {
    id: 'cont-011',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Pelo método das partidas dobradas, a soma dos débitos deve ser sempre igual à soma dos créditos.',
    correctAnswer: true,
    explanation: 'CERTO. O método das partidas dobradas estabelece que não há débito sem crédito correspondente. A soma total dos débitos sempre iguala a dos créditos.',
    difficulty: 'facil'
  },
  {
    id: 'cont-012',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Um lançamento contábil pode ter apenas débito, sem a necessidade de crédito correspondente.',
    correctAnswer: false,
    explanation: 'ERRADO. Todo lançamento contábil exige ao menos um débito e um crédito (partidas dobradas). Não existe lançamento unilateral na contabilidade.',
    difficulty: 'facil'
  },
  {
    id: 'cont-013',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O lançamento de compra de mercadorias à vista debita Estoques e credita Caixa.',
    correctAnswer: true,
    explanation: 'CERTO. Na compra à vista: aumenta o ativo Estoques (débito) e diminui o ativo Caixa (crédito). Troca de um ativo por outro.',
    difficulty: 'facil'
  },
  {
    id: 'cont-014',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O pagamento de uma dívida com fornecedores debita Fornecedores e credita Caixa.',
    correctAnswer: true,
    explanation: 'CERTO. No pagamento: diminui passivo Fornecedores (débito, pois passivo diminui a débito) e diminui ativo Caixa (crédito).',
    difficulty: 'medio'
  },
  {
    id: 'cont-015',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'A integralização de capital em dinheiro debita Caixa e credita Capital Social.',
    correctAnswer: true,
    explanation: 'CERTO. A integralização aumenta ativo Caixa (débito) e aumenta PL Capital Social (crédito), seguindo a equação patrimonial.',
    difficulty: 'facil'
  },

  // ========================================
  // OPERAÇÕES COM MERCADORIAS
  // ========================================
  {
    id: 'cont-016',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O custo das mercadorias vendidas (CMV) é calculado pela fórmula: CMV = Estoque Inicial + Compras - Estoque Final.',
    correctAnswer: true,
    explanation: 'CERTO. A fórmula clássica do CMV relaciona estoque inicial, compras do período e estoque final: CMV = EI + Compras - EF.',
    difficulty: 'facil'
  },
  {
    id: 'cont-017',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O método PEPS (Primeiro a Entrar, Primeiro a Sair) valoriza o estoque final pelos custos mais antigos.',
    correctAnswer: false,
    explanation: 'ERRADO. Pelo PEPS, as primeiras unidades adquiridas são as primeiras a sair. Logo, o ESTOQUE FINAL fica valorizado pelos CUSTOS MAIS RECENTES.',
    difficulty: 'medio'
  },
  {
    id: 'cont-018',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O resultado bruto (lucro bruto) é obtido pela diferença entre receita de vendas e custo das mercadorias vendidas.',
    correctAnswer: true,
    explanation: 'CERTO. Lucro Bruto = Receita Líquida de Vendas - CMV. Representa a margem sobre vendas antes das despesas operacionais.',
    difficulty: 'facil'
  },
  {
    id: 'cont-019',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O método da Média Ponderada Móvel recalcula o custo médio a cada nova aquisição de mercadorias.',
    correctAnswer: true,
    explanation: 'CERTO. Na MPM, o custo médio unitário é recalculado após cada compra, dividindo o custo total pela quantidade total disponível.',
    difficulty: 'medio'
  },
  {
    id: 'cont-020',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Os impostos recuperáveis sobre compras (ICMS, PIS, COFINS) integram o custo de aquisição das mercadorias.',
    correctAnswer: false,
    explanation: 'ERRADO. Impostos RECUPERÁVEIS não integram o custo. São registrados em conta de ativo (impostos a recuperar). Apenas os não recuperáveis compõem o custo.',
    difficulty: 'medio'
  },

  // ========================================
  // DEMONSTRAÇÕES CONTÁBEIS
  // ========================================
  {
    id: 'cont-021',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O Balanço Patrimonial evidencia a posição patrimonial e financeira da entidade em determinada data.',
    correctAnswer: true,
    explanation: 'CERTO. O BP é demonstração estática que retrata a posição patrimonial (ativo, passivo e PL) em data específica (geralmente 31/12).',
    difficulty: 'facil'
  },
  {
    id: 'cont-022',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'A Demonstração do Resultado do Exercício (DRE) evidencia as variações patrimoniais ocorridas em determinado período.',
    correctAnswer: true,
    explanation: 'CERTO. A DRE é demonstração dinâmica que mostra receitas, despesas e resultado (lucro/prejuízo) acumulados durante o exercício.',
    difficulty: 'facil'
  },
  {
    id: 'cont-023',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'A Demonstração dos Fluxos de Caixa (DFC) pode ser apresentada pelo método direto ou indireto.',
    correctAnswer: true,
    explanation: 'CERTO. A DFC apresenta entradas e saídas de caixa em três atividades (operacional, investimento, financiamento) por método direto ou indireto.',
    difficulty: 'facil'
  },
  {
    id: 'cont-024',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'A Demonstração das Mutações do Patrimônio Líquido (DMPL) evidencia as movimentações de todas as contas do patrimônio líquido.',
    correctAnswer: true,
    explanation: 'CERTO. A DMPL detalha movimentações em todas as contas do PL (capital, reservas, lucros/prejuízos acumulados) ocorridas no período.',
    difficulty: 'facil'
  },
  {
    id: 'cont-025',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'As Notas Explicativas são parte integrante obrigatória das demonstrações contábeis.',
    correctAnswer: true,
    explanation: 'CERTO. As Notas Explicativas complementam as demonstrações, detalhando critérios contábeis, composições de saldos e informações relevantes.',
    difficulty: 'facil'
  },

  // ========================================
  // ATIVO IMOBILIZADO E DEPRECIAÇÃO
  // ========================================
  {
    id: 'cont-026',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'A depreciação é o reconhecimento contábil da perda de valor dos bens do ativo imobilizado pelo desgaste, uso ou obsolescência.',
    correctAnswer: true,
    explanation: 'CERTO. A depreciação é a alocação sistemática do custo do ativo ao longo de sua vida útil, reconhecendo sua desvalorização.',
    difficulty: 'facil'
  },
  {
    id: 'cont-027',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Terrenos são ativos depreciáveis, pois sofrem desgaste com o tempo.',
    correctAnswer: false,
    explanation: 'ERRADO. Terrenos NÃO são depreciáveis, pois não se desgastam. Apenas as benfeitorias e construções sobre terrenos sofrem depreciação.',
    difficulty: 'facil'
  },
  {
    id: 'cont-028',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O lançamento contábil da depreciação debita Despesa de Depreciação e credita Depreciação Acumulada (conta retificadora do ativo).',
    correctAnswer: true,
    explanation: 'CERTO. A depreciação gera despesa (débito) e aumenta a conta retificadora Depreciação Acumulada (crédito), reduzindo o valor contábil do ativo.',
    difficulty: 'medio'
  },
  {
    id: 'cont-029',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O valor residual é o valor pelo qual se espera alienar o ativo após totalmente depreciado.',
    correctAnswer: true,
    explanation: 'CERTO. Valor residual (ou de sucata) é a estimativa de valor ao fim da vida útil. Base depreciável = Custo - Valor Residual.',
    difficulty: 'medio'
  },
  {
    id: 'cont-030',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'A taxa de depreciação de máquinas e equipamentos segundo a legislação fiscal é de 10% ao ano (vida útil de 10 anos).',
    correctAnswer: true,
    explanation: 'CERTO. A RFB estabelece taxa de 10% a.a. para máquinas/equipamentos (vida útil 10 anos), podendo variar conforme turnos de trabalho.',
    difficulty: 'facil'
  },

  // ========================================
  // ATIVO INTANGÍVEL
  // ========================================
  {
    id: 'cont-031',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Os ativos intangíveis são ativos não monetários identificáveis sem substância física.',
    correctAnswer: true,
    explanation: 'CERTO. Intangíveis são bens incorpóreos identificáveis (marcas, patentes, software, goodwill) geradores de benefícios futuros.',
    difficulty: 'facil'
  },
  {
    id: 'cont-032',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O goodwill adquirido em combinação de negócios deve ser amortizado em 10 anos.',
    correctAnswer: false,
    explanation: 'ERRADO. O goodwill (ágio por expectativa de rentabilidade futura) NÃO é amortizado. Está sujeito a teste anual de impairment (perda por desvalorização).',
    difficulty: 'medio'
  },
  {
    id: 'cont-033',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Gastos com pesquisa devem ser reconhecidos como despesa quando incorridos.',
    correctAnswer: true,
    explanation: 'CERTO. Gastos na fase de pesquisa são despesas do período. Apenas gastos na fase de desenvolvimento (sob critérios específicos) podem ser ativados.',
    difficulty: 'medio'
  },
  {
    id: 'cont-034',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Marcas, patentes e direitos autorais são exemplos de ativos intangíveis.',
    correctAnswer: true,
    explanation: 'CERTO. São exemplos clássicos de intangíveis identificáveis, podendo ser adquiridos ou desenvolvidos internamente (se atenderem critérios).',
    difficulty: 'facil'
  },
  {
    id: 'cont-035',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Intangíveis com vida útil indefinida devem ser amortizados ao longo de 20 anos.',
    correctAnswer: false,
    explanation: 'ERRADO. Intangíveis com vida útil INDEFINIDA NÃO são amortizados. São submetidos a teste anual de impairment. Apenas os de vida útil definida são amortizados.',
    difficulty: 'medio'
  },

  // ========================================
  // PROVISÕES E CONTINGÊNCIAS
  // ========================================
  {
    id: 'cont-036',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Provisões são passivos de prazo ou valor incertos, reconhecidos quando há obrigação presente resultante de evento passado.',
    correctAnswer: true,
    explanation: 'CERTO. Provisões (CPC 25) são passivos com incerteza de prazo/valor, reconhecidos quando houver obrigação presente, saída provável de recursos e estimativa confiável.',
    difficulty: 'medio'
  },
  {
    id: 'cont-037',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Passivos contingentes devem ser reconhecidos no balanço patrimonial quando a saída de recursos for possível.',
    correctAnswer: false,
    explanation: 'ERRADO. Passivos contingentes NÃO são reconhecidos, apenas divulgados em notas explicativas (quando saída possível). Provisionam-se apenas obrigações prováveis.',
    difficulty: 'medio'
  },
  {
    id: 'cont-038',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'A provisão para créditos de liquidação duvidosa (PCLD) é estimada com base no histórico de inadimplência e análise de risco.',
    correctAnswer: true,
    explanation: 'CERTO. A PCLD (ou PDD) é conta retificadora do ativo que estima perdas prováveis em contas a receber, baseada em análise de risco e histórico.',
    difficulty: 'facil'
  },
  {
    id: 'cont-039',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Ativos contingentes devem ser reconhecidos no balanço quando a entrada de recursos for provável.',
    correctAnswer: false,
    explanation: 'ERRADO. Ativos contingentes NUNCA são reconhecidos no balanço. São divulgados em notas explicativas APENAS quando a entrada de benefícios for PRATICAMENTE CERTA.',
    difficulty: 'medio'
  },
  {
    id: 'cont-040',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O lançamento da PCLD debita Despesa com PCLD e credita Provisão para Créditos de Liquidação Duvidosa (retificadora de Contas a Receber).',
    correctAnswer: true,
    explanation: 'CERTO. Constituir PCLD: aumenta despesa (débito) e aumenta conta retificadora do ativo (crédito), reduzindo o valor realizável líquido de Contas a Receber.',
    difficulty: 'medio'
  },

  // ========================================
  // ANÁLISE DAS DEMONSTRAÇÕES CONTÁBEIS
  // ========================================
  {
    id: 'cont-041',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O índice de liquidez corrente é calculado dividindo-se o ativo circulante pelo passivo circulante.',
    correctAnswer: true,
    explanation: 'CERTO. Liquidez Corrente = AC / PC. Indica a capacidade de pagamento das obrigações de curto prazo com os recursos disponíveis de curto prazo.',
    difficulty: 'facil'
  },
  {
    id: 'cont-042',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Um índice de liquidez corrente igual a 0,80 indica que a empresa possui capital circulante líquido negativo.',
    correctAnswer: true,
    explanation: 'CERTO. Se LC = 0,80, então AC < PC, resultando em CCL negativo (AC - PC < 0). A empresa tem mais dívidas de curto prazo que recursos disponíveis.',
    difficulty: 'medio'
  },
  {
    id: 'cont-043',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O índice de endividamento geral indica a proporção dos ativos totais financiada por recursos de terceiros.',
    correctAnswer: true,
    explanation: 'CERTO. Endividamento Geral = Passivo Exigível Total / Ativo Total. Mede participação de capital de terceiros no financiamento dos ativos.',
    difficulty: 'facil'
  },
  {
    id: 'cont-044',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'A margem líquida é calculada dividindo-se o lucro líquido pela receita líquida de vendas.',
    correctAnswer: true,
    explanation: 'CERTO. Margem Líquida = Lucro Líquido / Receita Líquida. Indica quanto do faturamento se converte em lucro após todas as despesas e tributos.',
    difficulty: 'facil'
  },
  {
    id: 'cont-045',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O ROE (Return on Equity) mede o retorno sobre o patrimônio líquido, calculado por Lucro Líquido / PL Médio.',
    correctAnswer: true,
    explanation: 'CERTO. ROE = Lucro Líquido / PL Médio. Indica rentabilidade do capital próprio investido, sendo indicador essencial para acionistas.',
    difficulty: 'facil'
  },

  // ========================================
  // CONSOLIDAÇÃO E EQUIVALÊNCIA PATRIMONIAL
  // ========================================
  {
    id: 'cont-046',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O método da equivalência patrimonial é utilizado para avaliar investimentos em coligadas e controladas.',
    correctAnswer: true,
    explanation: 'CERTO. A MEP (CPC 18) é obrigatória para investimentos em coligadas (influência significativa), controladas e joint ventures.',
    difficulty: 'facil'
  },
  {
    id: 'cont-047',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Nas demonstrações consolidadas, os saldos de transações entre empresas do grupo devem ser eliminados.',
    correctAnswer: true,
    explanation: 'CERTO. A consolidação elimina transações intragrupo (vendas, empréstimos, dividendos) para apresentar o grupo econômico como entidade única.',
    difficulty: 'medio'
  },
  {
    id: 'cont-048',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'A participação de não controladores (minoritários) deve ser apresentada separadamente no patrimônio líquido consolidado.',
    correctAnswer: true,
    explanation: 'CERTO. A participação dos acionistas não controladores é evidenciada separadamente no PL consolidado, representando a parte que não pertence à controladora.',
    difficulty: 'medio'
  },
  {
    id: 'cont-049',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O ágio fundamentado em expectativa de rentabilidade futura (goodwill) deve ser eliminado integralmente na consolidação.',
    correctAnswer: false,
    explanation: 'ERRADO. O goodwill identificado na aquisição de controlada é MANTIDO no balanço consolidado como ativo intangível, submetido a teste de impairment.',
    difficulty: 'dificil'
  },
  {
    id: 'cont-050',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'Presume-se influência significativa quando o investidor detém, direta ou indiretamente, 20% ou mais do capital votante da investida.',
    correctAnswer: true,
    explanation: 'CERTO. O CPC 18 presume influência significativa (caracterizando coligada) com 20% ou mais do capital votante, podendo haver evidências em contrário.',
    difficulty: 'medio'
  }
];
