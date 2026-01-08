// ECONOMIA - 50 QUESTÕES
// Área Fiscal-Bancária - Quiron Concursos
// Questões essenciais para concursos fiscais, BACEN, BB, BNDES e área econômica

import { GameQuestion } from './gameQuestions';

export const economiaQuestions: GameQuestion[] = [
  // ========================================
  // CONCEITOS BÁSICOS DE ECONOMIA
  // ========================================
  {
    id: 'eco-001',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A escassez de recursos e as necessidades ilimitadas constituem o problema econômico fundamental.',
    correctAnswer: true,
    explanation: 'CERTO. O problema econômico central é a alocação de recursos escassos face às necessidades humanas ilimitadas. Daí surgem as escolhas econômicas.',
    difficulty: 'facil'
  },
  {
    id: 'eco-002',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O custo de oportunidade representa o valor da melhor alternativa sacrificada quando se faz uma escolha.',
    correctAnswer: true,
    explanation: 'CERTO. Custo de oportunidade é o benefício da segunda melhor opção não escolhida. Representa o que se deixa de ganhar ao optar por determinada alternativa.',
    difficulty: 'facil'
  },
  {
    id: 'eco-003',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A curva de possibilidades de produção (CPP) demonstra as combinações máximas de dois bens que uma economia pode produzir com recursos limitados.',
    correctAnswer: true,
    explanation: 'CERTO. A CPP mostra trade-offs: para produzir mais de um bem, sacrifica-se produção do outro, ilustrando escassez e custo de oportunidade.',
    difficulty: 'facil'
  },
  {
    id: 'eco-004',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A macroeconomia estuda o comportamento agregado da economia, como inflação, desemprego e crescimento econômico.',
    correctAnswer: true,
    explanation: 'CERTO. Macroeconomia analisa fenômenos agregados: PIB, inflação, taxa de juros, desemprego, política fiscal/monetária. Foco na economia como um todo.',
    difficulty: 'facil'
  },
  {
    id: 'eco-005',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A microeconomia estuda o comportamento individual de consumidores, empresas e mercados específicos.',
    correctAnswer: true,
    explanation: 'CERTO. Microeconomia analisa decisões individuais: comportamento do consumidor, teoria da firma, estruturas de mercado, formação de preços.',
    difficulty: 'facil'
  },

  // ========================================
  // OFERTA, DEMANDA E EQUILÍBRIO DE MERCADO
  // ========================================
  {
    id: 'eco-006',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Pela lei da demanda, quanto maior o preço de um bem, maior será a quantidade demandada, coeteris paribus.',
    correctAnswer: false,
    explanation: 'ERRADO. A lei da demanda estabelece relação INVERSA: quanto maior o preço, MENOR a quantidade demandada (curva de demanda negativamente inclinada).',
    difficulty: 'facil'
  },
  {
    id: 'eco-007',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A lei da oferta estabelece que, mantendo outras variáveis constantes, quanto maior o preço, maior a quantidade ofertada.',
    correctAnswer: true,
    explanation: 'CERTO. A lei da oferta indica relação DIRETA entre preço e quantidade ofertada. Preços mais altos incentivam produtores a ofertar mais.',
    difficulty: 'facil'
  },
  {
    id: 'eco-008',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O equilíbrio de mercado ocorre quando a quantidade demandada iguala a quantidade ofertada.',
    correctAnswer: true,
    explanation: 'CERTO. No ponto de equilíbrio, Qd = Qo, não havendo excesso de oferta ou demanda. O preço de equilíbrio "limpa" o mercado.',
    difficulty: 'facil'
  },
  {
    id: 'eco-009',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Bens substitutos são aqueles cujo aumento de preço de um deles provoca aumento da demanda do outro.',
    correctAnswer: true,
    explanation: 'CERTO. Bens substitutos competem (manteiga/margarina, café/chá). Se o preço de A sobe, consumidores migram para B, aumentando sua demanda.',
    difficulty: 'facil'
  },
  {
    id: 'eco-010',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Bens complementares são aqueles consumidos em conjunto, de modo que o aumento do preço de um reduz a demanda do outro.',
    correctAnswer: true,
    explanation: 'CERTO. Bens complementares são consumidos juntos (carro/gasolina, café/açúcar). Se preço de A sobe, reduz consumo de A e, consequentemente, de B.',
    difficulty: 'facil'
  },

  // ========================================
  // ELASTICIDADES
  // ========================================
  {
    id: 'eco-011',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A demanda é considerada elástica quando a variação percentual da quantidade demandada é maior que a variação percentual do preço.',
    correctAnswer: true,
    explanation: 'CERTO. Demanda elástica: |elasticidade-preço| > 1. Consumidores são sensíveis ao preço. Exemplo: bens de luxo, com substitutos próximos.',
    difficulty: 'medio'
  },
  {
    id: 'eco-012',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A demanda é perfeitamente inelástica quando a quantidade demandada não se altera com variações no preço.',
    correctAnswer: true,
    explanation: 'CERTO. Demanda perfeitamente inelástica: elasticidade = 0 (curva vertical). Quantidade fixa independente do preço. Exemplo: insulina para diabéticos.',
    difficulty: 'medio'
  },
  {
    id: 'eco-013',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Quando a demanda é inelástica, o aumento de preço provoca aumento na receita total do produtor.',
    correctAnswer: true,
    explanation: 'CERTO. Com demanda inelástica (|E| < 1), o aumento percentual do preço supera a redução percentual da quantidade, elevando Receita Total (P x Q).',
    difficulty: 'medio'
  },
  {
    id: 'eco-014',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A elasticidade-renda da demanda mede a sensibilidade da quantidade demandada a variações na renda do consumidor.',
    correctAnswer: true,
    explanation: 'CERTO. Elasticidade-renda = %ΔQd / %ΔRenda. Bens normais: E > 0. Bens inferiores: E < 0. Bens de luxo: E > 1.',
    difficulty: 'medio'
  },
  {
    id: 'eco-015',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Bens inferiores apresentam elasticidade-renda da demanda positiva.',
    correctAnswer: false,
    explanation: 'ERRADO. Bens INFERIORES têm elasticidade-renda NEGATIVA. Quando a renda aumenta, o consumo desses bens diminui (ex: transporte coletivo, carne de segunda).',
    difficulty: 'medio'
  },

  // ========================================
  // ESTRUTURAS DE MERCADO
  // ========================================
  {
    id: 'eco-016',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Em concorrência perfeita, existem muitos compradores e vendedores, produto homogêneo e livre entrada/saída de empresas.',
    correctAnswer: true,
    explanation: 'CERTO. Concorrência perfeita caracteriza-se por: atomicidade (muitos agentes), produto homogêneo, informação perfeita, livre mobilidade. Empresas são price takers.',
    difficulty: 'facil'
  },
  {
    id: 'eco-017',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'No monopólio, há apenas um vendedor que tem poder de fixar o preço do produto no mercado.',
    correctAnswer: true,
    explanation: 'CERTO. No monopólio há um único produtor (price maker), sem substitutos próximos, com barreiras à entrada. A empresa escolhe preço ou quantidade.',
    difficulty: 'facil'
  },
  {
    id: 'eco-018',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'No oligopólio, poucas empresas dominam o mercado e as decisões de uma afetam as demais, havendo interdependência estratégica.',
    correctAnswer: true,
    explanation: 'CERTO. Oligopólio: poucos vendedores, produtos diferenciados ou homogêneos, barreiras à entrada, interdependência de decisões (teoria dos jogos).',
    difficulty: 'facil'
  },
  {
    id: 'eco-019',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Na concorrência monopolística, existem muitas empresas vendendo produtos diferenciados, com algum poder de fixar preços.',
    correctAnswer: true,
    explanation: 'CERTO. Concorrência monopolística: muitos vendedores, produtos diferenciados (marcas), livre entrada/saída, algum poder de mercado (curva de demanda negativamente inclinada).',
    difficulty: 'facil'
  },
  {
    id: 'eco-020',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Em concorrência perfeita de longo prazo, as empresas operam com lucro econômico positivo.',
    correctAnswer: false,
    explanation: 'ERRADO. No longo prazo da concorrência perfeita, a livre entrada/saída faz o lucro econômico convergir a ZERO (lucro normal). Empresas operam no mínimo da curva de custo médio.',
    difficulty: 'medio'
  },

  // ========================================
  // FALHAS DE MERCADO
  // ========================================
  {
    id: 'eco-021',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Externalidades são efeitos de uma atividade econômica sobre terceiros que não participam da transação.',
    correctAnswer: true,
    explanation: 'CERTO. Externalidades (positivas ou negativas) afetam bem-estar de terceiros sem compensação. Exemplos: poluição (negativa), vacinação (positiva).',
    difficulty: 'facil'
  },
  {
    id: 'eco-022',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Bens públicos são caracterizados por não-rivalidade no consumo e não-exclusividade.',
    correctAnswer: true,
    explanation: 'CERTO. Bens públicos puros: não-rivais (consumo de um não impede outro) e não-exclusivos (impossível excluir não pagantes). Ex: defesa nacional, ar limpo.',
    difficulty: 'facil'
  },
  {
    id: 'eco-023',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O problema do "carona" (free rider) ocorre quando indivíduos consomem bens públicos sem pagar por eles.',
    correctAnswer: true,
    explanation: 'CERTO. Free rider aproveita-se da não-exclusividade dos bens públicos. Todos têm incentivo a não pagar, levando à suboferta privada e justificando provisão estatal.',
    difficulty: 'facil'
  },
  {
    id: 'eco-024',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A assimetria de informação ocorre quando compradores e vendedores possuem informações diferentes sobre o bem transacionado.',
    correctAnswer: true,
    explanation: 'CERTO. Assimetria informacional (ex: mercado de carros usados - "problema dos limões") pode causar seleção adversa e risco moral, levando a falhas de mercado.',
    difficulty: 'medio'
  },
  {
    id: 'eco-025',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Os monopólios naturais ocorrem quando uma única empresa pode atender todo o mercado a um custo menor que várias empresas.',
    correctAnswer: true,
    explanation: 'CERTO. Monopólio natural surge quando há economias de escala significativas (custo médio decrescente). Exemplo: distribuição de água, energia. Justifica regulação estatal.',
    difficulty: 'medio'
  },

  // ========================================
  // MEDIDAS DE ATIVIDADE ECONÔMICA
  // ========================================
  {
    id: 'eco-026',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O Produto Interno Bruto (PIB) mede o valor total dos bens e serviços finais produzidos em um país durante determinado período.',
    correctAnswer: true,
    explanation: 'CERTO. PIB é a soma do valor agregado de bens/serviços FINAIS produzidos dentro das fronteiras do país, evitando dupla contagem de bens intermediários.',
    difficulty: 'facil'
  },
  {
    id: 'eco-027',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O PIB nominal é calculado a preços correntes, enquanto o PIB real utiliza preços constantes de um ano-base.',
    correctAnswer: true,
    explanation: 'CERTO. PIB nominal: valores correntes (afetado por inflação). PIB real: valores constantes (deflacionado), permitindo comparações intertemporais do crescimento real.',
    difficulty: 'facil'
  },
  {
    id: 'eco-028',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O Produto Nacional Bruto (PNB) considera a renda líquida enviada ao exterior, diferenciando-se do PIB.',
    correctAnswer: true,
    explanation: 'CERTO. PNB = PIB + RLEE (Renda Líquida Enviada ao Exterior). PNB mede produção dos nacionais. PIB mede produção dentro do território.',
    difficulty: 'medio'
  },
  {
    id: 'eco-029',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A Renda Nacional corresponde à soma das remunerações dos fatores de produção: salários, juros, aluguéis e lucros.',
    correctAnswer: true,
    explanation: 'CERTO. Renda Nacional (ótica da renda) = salários + juros + aluguéis + lucros. É equivalente ao PIB pela ótica da renda (PIB = C + I + G + NX pela ótica da despesa).',
    difficulty: 'medio'
  },
  {
    id: 'eco-030',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O deflator do PIB é um índice de preços que mede a variação dos preços de todos os bens e serviços produzidos na economia.',
    correctAnswer: true,
    explanation: 'CERTO. Deflator do PIB = (PIB nominal / PIB real) x 100. Mede inflação de TODOS os bens produzidos domesticamente, diferenciando-se de índices de preços ao consumidor.',
    difficulty: 'medio'
  },

  // ========================================
  // INFLAÇÃO
  // ========================================
  {
    id: 'eco-031',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'Inflação é o aumento persistente e generalizado no nível geral de preços da economia.',
    correctAnswer: true,
    explanation: 'CERTO. Inflação: crescimento contínuo e generalizado dos preços, causando perda de poder de compra da moeda. Medida por índices: IPCA, INPC, IGP-M.',
    difficulty: 'facil'
  },
  {
    id: 'eco-032',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A inflação de demanda ocorre quando há excesso de demanda agregada em relação à capacidade produtiva da economia.',
    correctAnswer: true,
    explanation: 'CERTO. Inflação de demanda: demanda > oferta. Causas: aumento de gastos públicos, expansão monetária, aumento do crédito. Pressiona preços para cima.',
    difficulty: 'facil'
  },
  {
    id: 'eco-033',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A inflação de custos resulta do aumento dos custos de produção, como salários, matérias-primas ou energia.',
    correctAnswer: true,
    explanation: 'CERTO. Inflação de custos (oferta): elevação de custos (salários, insumos, câmbio, impostos) é repassada aos preços finais, reduzindo oferta agregada.',
    difficulty: 'facil'
  },
  {
    id: 'eco-034',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A inflação inercial é causada pela indexação da economia e expectativas inflacionárias, perpetuando a inflação passada.',
    correctAnswer: true,
    explanation: 'CERTO. Inflação inercial: mecanismos de indexação (contratos, salários) reajustados pela inflação passada perpetuam o processo inflacionário. Combate: desindexação.',
    difficulty: 'medio'
  },
  {
    id: 'eco-035',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O regime de metas de inflação consiste em anunciar publicamente uma meta a ser perseguida pela autoridade monetária.',
    correctAnswer: true,
    explanation: 'CERTO. Regime de metas: Banco Central compromete-se com meta anunciada, ajustando política monetária (taxa Selic) para alcançá-la. Adotado no Brasil desde 1999.',
    difficulty: 'facil'
  },

  // ========================================
  // DESEMPREGO
  // ========================================
  {
    id: 'eco-036',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A taxa de desemprego é calculada dividindo-se o número de desempregados pela População Economicamente Ativa (PEA).',
    correctAnswer: true,
    explanation: 'CERTO. Taxa de desemprego = (desempregados / PEA) x 100. PEA = ocupados + desempregados (pessoas aptas e dispostas a trabalhar).',
    difficulty: 'facil'
  },
  {
    id: 'eco-037',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O desemprego friccional é temporário, ocorrendo durante a transição entre empregos.',
    correctAnswer: true,
    explanation: 'CERTO. Desemprego friccional: período de busca por novo emprego (mudança voluntária, primeiro emprego). Natural em economias dinâmicas, geralmente de curta duração.',
    difficulty: 'facil'
  },
  {
    id: 'eco-038',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O desemprego estrutural decorre da incompatibilidade entre qualificações dos trabalhadores e as exigências das vagas disponíveis.',
    correctAnswer: true,
    explanation: 'CERTO. Desemprego estrutural: mudanças tecnológicas, regionais ou setoriais tornam habilidades obsoletas. Requer requalificação. Mais duradouro que o friccional.',
    difficulty: 'medio'
  },
  {
    id: 'eco-039',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O desemprego cíclico está associado a flutuações da atividade econômica, aumentando em recessões.',
    correctAnswer: true,
    explanation: 'CERTO. Desemprego cíclico (conjuntural): causado por queda da demanda agregada em recessões. Reduz-se com recuperação econômica. Políticas anticíclicas podem atenuá-lo.',
    difficulty: 'facil'
  },
  {
    id: 'eco-040',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A taxa natural de desemprego corresponde à soma dos desempregos friccional e estrutural, excluindo o cíclico.',
    correctAnswer: true,
    explanation: 'CERTO. NAIRU (taxa natural): nível de desemprego quando a economia está em pleno emprego (sem pressão inflacionária). Inclui friccional + estrutural.',
    difficulty: 'medio'
  },

  // ========================================
  // POLÍTICA MONETÁRIA
  // ========================================
  {
    id: 'eco-041',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A política monetária expansionista visa aumentar a oferta de moeda e reduzir as taxas de juros para estimular a economia.',
    correctAnswer: true,
    explanation: 'CERTO. Política expansionista: ↑ base monetária → ↓ juros → ↑ investimento/consumo → ↑ demanda agregada → ↑ PIB. Usada em recessões.',
    difficulty: 'facil'
  },
  {
    id: 'eco-042',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A taxa Selic é a taxa básica de juros da economia brasileira, definida pelo Comitê de Política Monetária (COPOM) do Banco Central.',
    correctAnswer: true,
    explanation: 'CERTO. Selic (Sistema Especial de Liquidação e Custódia) é a meta para taxa de juros overnight. O COPOM reúne-se a cada 45 dias para defini-la.',
    difficulty: 'facil'
  },
  {
    id: 'eco-043',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O depósito compulsório é o percentual dos depósitos que os bancos devem recolher ao Banco Central.',
    correctAnswer: true,
    explanation: 'CERTO. Compulsório é instrumento de política monetária. ↑ compulsório → ↓ recursos disponíveis para empréstimos → ↓ multiplicador bancário → política contracionista.',
    difficulty: 'facil'
  },
  {
    id: 'eco-044',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'As operações de mercado aberto (open market) consistem na compra e venda de títulos públicos pelo Banco Central.',
    correctAnswer: true,
    explanation: 'CERTO. Open market é o principal instrumento. BC compra títulos → injeta moeda (expansão). BC vende títulos → retira moeda (contração).',
    difficulty: 'facil'
  },
  {
    id: 'eco-045',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O aumento da taxa de juros pelo Banco Central tem efeito contracionista, reduzindo o consumo e o investimento.',
    correctAnswer: true,
    explanation: 'CERTO. ↑ juros → ↑ custo do crédito → ↓ consumo/investimento → ↓ demanda agregada → ↓ inflação. Usado quando há pressão inflacionária.',
    difficulty: 'facil'
  },

  // ========================================
  // POLÍTICA FISCAL
  // ========================================
  {
    id: 'eco-046',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A política fiscal envolve decisões do governo sobre gastos públicos e arrecadação tributária.',
    correctAnswer: true,
    explanation: 'CERTO. Política fiscal: instrumentos de receita (tributos) e despesa pública para influenciar nível de atividade, emprego e distribuição de renda.',
    difficulty: 'facil'
  },
  {
    id: 'eco-047',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A política fiscal expansionista caracteriza-se pelo aumento dos gastos públicos ou redução de impostos.',
    correctAnswer: true,
    explanation: 'CERTO. Expansionismo fiscal: ↑ gastos ou ↓ impostos → ↑ demanda agregada → ↑ PIB → ↑ emprego. Gera déficit. Usada em recessões (Keynes).',
    difficulty: 'facil'
  },
  {
    id: 'eco-048',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O déficit público ocorre quando as despesas governamentais excedem as receitas tributárias.',
    correctAnswer: true,
    explanation: 'CERTO. Déficit: Despesas > Receitas. Pode ser nominal, primário ou operacional. Financiado por emissão de dívida ou criação de moeda (inflacionário).',
    difficulty: 'facil'
  },
  {
    id: 'eco-049',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'O resultado primário do governo exclui as despesas com juros da dívida pública.',
    correctAnswer: true,
    explanation: 'CERTO. Superávit primário = Receitas - Despesas (exceto juros). Indica esforço fiscal para pagar juros da dívida. Resultado nominal inclui juros.',
    difficulty: 'medio'
  },
  {
    id: 'eco-050',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A dívida pública representa o estoque acumulado de déficits orçamentários do governo ao longo do tempo.',
    correctAnswer: true,
    explanation: 'CERTO. Dívida pública (estoque) = ∑ déficits passados. Fluxo (déficit anual) alimenta estoque (dívida total). Dívida/PIB é indicador de sustentabilidade fiscal.',
    difficulty: 'facil'
  }
];
