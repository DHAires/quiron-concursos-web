// RACIOCÍNIO LÓGICO - 50 QUESTÕES
// Área Conhecimentos Gerais - Quiron Concursos
// Questões essenciais para concursos públicos (estilo Cespe)

import { GameQuestion } from './gameQuestions';

export const raciocioLogicoQuestions: GameQuestion[] = [
  // ========================================
  // LÓGICA PROPOSICIONAL - CONCEITOS
  // ========================================
  {
    id: 'rl-001',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Uma proposição é uma sentença declarativa que pode ser classificada como verdadeira ou falsa.',
    correctAnswer: true,
    explanation: 'CERTO. Proposição é sentença declarativa com valor lógico definido (V ou F). "Brasília é a capital" (V). "2+2=5" (F). Interrogativas não são proposições.',
    difficulty: 'facil'
  },
  {
    id: 'rl-002',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A frase "Que horas são?" é uma proposição lógica.',
    correctAnswer: false,
    explanation: 'ERRADO. Frases interrogativas, exclamativas, imperativas e sem valor lógico NÃO são proposições. Só sentenças declarativas com V/F definido são proposições.',
    difficulty: 'facil'
  },
  {
    id: 'rl-003',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A negação de "Todos os alunos passaram" é "Nenhum aluno passou".',
    correctAnswer: false,
    explanation: 'ERRADO. Negação de TODO é ALGUM NÃO (ou EXISTE...NÃO). Correto: "Algum aluno não passou" ou "Pelo menos um aluno não passou".',
    difficulty: 'medio'
  },
  {
    id: 'rl-004',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se "p → q" é falsa, então "p" é verdadeira e "q" é falsa.',
    correctAnswer: true,
    explanation: 'CERTO. Condicional "p → q" só é FALSA quando p é V e q é F (V → F = F). Nos demais casos (V→V, F→V, F→F) é verdadeira.',
    difficulty: 'medio'
  },
  {
    id: 'rl-005',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A proposição "p e q" é verdadeira somente quando ambas as proposições são verdadeiras.',
    correctAnswer: true,
    explanation: 'CERTO. Conjunção "p ∧ q" é V apenas quando ambas são V. Se pelo menos uma for F, a conjunção é F. (V∧V=V, demais casos=F).',
    difficulty: 'facil'
  },

  // ========================================
  // TABELAS-VERDADE E CONECTIVOS
  // ========================================
  {
    id: 'rl-006',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A disjunção "p ou q" é falsa somente quando ambas as proposições são falsas.',
    correctAnswer: true,
    explanation: 'CERTO. Disjunção "p ∨ q" é F apenas quando ambas são F. Se pelo menos uma for V, a disjunção é V. (F∨F=F, demais=V).',
    difficulty: 'facil'
  },
  {
    id: 'rl-007',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A bicondicional "p ↔ q" é verdadeira quando p e q têm valores lógicos diferentes.',
    correctAnswer: false,
    explanation: 'ERRADO. Bicondicional é V quando p e q têm MESMO valor (ambas V ou ambas F). É F quando têm valores diferentes.',
    difficulty: 'medio'
  },
  {
    id: 'rl-008',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A negação de "p e q" é equivalente a "não p ou não q".',
    correctAnswer: true,
    explanation: 'CERTO. Lei de De Morgan: ~(p∧q) = ~p ∨ ~q. Exemplo: Negação de "João é médico E Maria é engenheira" = "João NÃO é médico OU Maria NÃO é engenheira".',
    difficulty: 'medio'
  },
  {
    id: 'rl-009',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A proposição "Se chove, então a rua fica molhada" é equivalente a "Se a rua não fica molhada, então não chove".',
    correctAnswer: true,
    explanation: 'CERTO. Contrapositiva de "p→q" é "~q→~p" (equivalentes). Se p→q é V, então ~q→~p também é V. São logicamente equivalentes.',
    difficulty: 'medio'
  },
  {
    id: 'rl-010',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Uma tautologia é uma proposição composta que é sempre verdadeira, independentemente dos valores lógicos.',
    correctAnswer: true,
    explanation: 'CERTO. Tautologia tem valor V em toda linha da tabela-verdade. Exemplo: "p ∨ ~p" (sempre V). Contradição é sempre F.',
    difficulty: 'facil'
  },

  // ========================================
  // EQUIVALÊNCIAS LÓGICAS
  // ========================================
  {
    id: 'rl-011',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A proposição "p → q" é equivalente a "~p ∨ q".',
    correctAnswer: true,
    explanation: 'CERTO. Condicional "p→q" = "~p ∨ q". Exemplo: "Se estudo, passo" = "Não estudo OU passo". Mesma tabela-verdade.',
    difficulty: 'medio'
  },
  {
    id: 'rl-012',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A recíproca de "Se p, então q" é "Se q, então p", e ambas são equivalentes.',
    correctAnswer: false,
    explanation: 'ERRADO. Recíproca "q→p" NÃO é equivalente a "p→q". Equivalente é a CONTRApositiva "~q→~p". Recíproca pode ter valor lógico diferente.',
    difficulty: 'dificil'
  },
  {
    id: 'rl-013',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A negação de "Se estudo, então passo" é "Estudo e não passo".',
    correctAnswer: true,
    explanation: 'CERTO. Negação de "p→q" é "p ∧ ~q". "Se estudo então passo" negando: "Estudo E não passo" (única situação em que condicional é falsa).',
    difficulty: 'medio'
  },
  {
    id: 'rl-014',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A proposição "p ∨ q" é equivalente a "~(~p ∧ ~q)".',
    correctAnswer: true,
    explanation: 'CERTO. Pela Lei de De Morgan: p∨q = ~(~p ∧ ~q). Negar ambas as negativas em conjunção resulta na disjunção original.',
    difficulty: 'dificil'
  },
  {
    id: 'rl-015',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A disjunção exclusiva "p ⊻ q" é verdadeira quando p e q têm valores lógicos diferentes.',
    correctAnswer: true,
    explanation: 'CERTO. "Ou... ou..." exclusivo é V quando valores são DIFERENTES: (V⊻F=V, F⊻V=V, V⊻V=F, F⊻F=F). Difere da disjunção inclusiva.',
    difficulty: 'medio'
  },

  // ========================================
  // QUANTIFICADORES
  // ========================================
  {
    id: 'rl-016',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A negação de "Algum político é honesto" é "Todo político não é honesto" ou "Nenhum político é honesto".',
    correctAnswer: true,
    explanation: 'CERTO. Negação de ALGUM/EXISTE é NENHUM/TODO NÃO. "Algum político é honesto" → "Nenhum político é honesto" (ou "Todo político não é honesto").',
    difficulty: 'facil'
  },
  {
    id: 'rl-017',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A negação de "Nenhum gato late" é "Algum gato late".',
    correctAnswer: true,
    explanation: 'CERTO. Negação de NENHUM é ALGUM/EXISTE. "Nenhum gato late" (=Todo gato não late) → "Algum gato late" (=Existe gato que late).',
    difficulty: 'facil'
  },
  {
    id: 'rl-018',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se "Todo A é B" é verdadeira, então "Todo B é A" também é verdadeira.',
    correctAnswer: false,
    explanation: 'ERRADO. "Todo A é B" NÃO implica "Todo B é A". Exemplo: "Todo cachorro é mamífero" (V), mas "Todo mamífero é cachorro" (F).',
    difficulty: 'medio'
  },
  {
    id: 'rl-019',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A proposição "Algum estudante não passou" equivale a "Nem todo estudante passou".',
    correctAnswer: true,
    explanation: 'CERTO. "Algum...não" = "Nem todo" = "Existe...que não". São formas equivalentes de negar universalidade: contradiz "Todo estudante passou".',
    difficulty: 'medio'
  },
  {
    id: 'rl-020',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se "Nenhum A é B" é verdadeira, então "Algum B é A" é falsa.',
    correctAnswer: true,
    explanation: 'CERTO. Se NENHUM A é B (V), então a interseção é vazia. Logo, ALGUM B é A seria F (não há elementos em comum).',
    difficulty: 'dificil'
  },

  // ========================================
  // ARGUMENTAÇÃO E VALIDADE
  // ========================================
  {
    id: 'rl-021',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Um argumento é válido quando, sendo as premissas verdadeiras, a conclusão é necessariamente verdadeira.',
    correctAnswer: true,
    explanation: 'CERTO. Validade: se premissas V, conclusão obrigatoriamente V. Argumento pode ser válido com premissas F. Validade é forma, não conteúdo.',
    difficulty: 'facil'
  },
  {
    id: 'rl-022',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'No silogismo "Todo A é B. Todo B é C. Logo, todo A é C", o argumento é válido.',
    correctAnswer: true,
    explanation: 'CERTO. Silogismo clássico válido (transitividade). Se A⊂B e B⊂C, então A⊂C. Forma lógica correta independente do conteúdo.',
    difficulty: 'facil'
  },
  {
    id: 'rl-023',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se "p → q" e "p" são verdadeiras, então "q" é necessariamente verdadeira (Modus Ponens).',
    correctAnswer: true,
    explanation: 'CERTO. Modus Ponens: [(p→q) ∧ p] → q. Se "Se chove, rua molha" (V) e "Chove" (V), então "Rua molha" (V). Argumento válido.',
    difficulty: 'medio'
  },
  {
    id: 'rl-024',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se "p → q" e "~q" são verdadeiras, então "~p" é necessariamente verdadeira (Modus Tollens).',
    correctAnswer: true,
    explanation: 'CERTO. Modus Tollens: [(p→q) ∧ ~q] → ~p. Se "Se chove, rua molha" (V) e "Rua não molhou" (V), então "Não choveu" (V).',
    difficulty: 'medio'
  },
  {
    id: 'rl-025',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Afirmar o consequente é uma falácia: de "p → q" e "q", não se pode concluir "p".',
    correctAnswer: true,
    explanation: 'CERTO. Falácia: [(p→q) ∧ q] NÃO implica p. "Se chove, rua molha" + "Rua molhou" NÃO garante que choveu (pode ter sido lavada).',
    difficulty: 'dificil'
  },

  // ========================================
  // DIAGRAMAS DE VENN
  // ========================================
  {
    id: 'rl-026',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se "Todo A é B", o diagrama mostra o conjunto A contido no conjunto B.',
    correctAnswer: true,
    explanation: 'CERTO. "Todo A é B" → A ⊂ B. Círculo A completamente dentro do círculo B nos diagramas de Venn.',
    difficulty: 'facil'
  },
  {
    id: 'rl-027',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se "Nenhum A é B", os conjuntos A e B são disjuntos (sem interseção).',
    correctAnswer: true,
    explanation: 'CERTO. "Nenhum A é B" → A ∩ B = ∅. Círculos separados, sem área comum. Conjuntos disjuntos.',
    difficulty: 'facil'
  },
  {
    id: 'rl-028',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se "Algum A é B", há interseção não vazia entre os conjuntos A e B.',
    correctAnswer: true,
    explanation: 'CERTO. "Algum A é B" → A ∩ B ≠ ∅. Há pelo menos um elemento comum. Círculos com área de interseção.',
    difficulty: 'facil'
  },
  {
    id: 'rl-029',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'De "Todo A é B" e "Nenhum B é C", conclui-se que "Nenhum A é C".',
    correctAnswer: true,
    explanation: 'CERTO. Se A⊂B e B∩C=∅, então A∩C=∅. Todo A está em B, e B não toca C, logo A não toca C.',
    difficulty: 'medio'
  },
  {
    id: 'rl-030',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se "Algum A é B" e "Algum B é C", então necessariamente "Algum A é C".',
    correctAnswer: false,
    explanation: 'ERRADO. Não se pode concluir. A e C podem não ter interseção, mesmo ambos intersectando B em regiões diferentes.',
    difficulty: 'dificil'
  },

  // ========================================
  // SEQUÊNCIAS LÓGICAS
  // ========================================
  {
    id: 'rl-031',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Na sequência 2, 4, 8, 16, 32, cada termo é o dobro do anterior.',
    correctAnswer: true,
    explanation: 'CERTO. Progressão geométrica de razão 2: cada termo multiplica o anterior por 2. Próximos: 64, 128, 256...',
    difficulty: 'facil'
  },
  {
    id: 'rl-032',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Na sequência 3, 6, 9, 12, 15, a diferença entre termos consecutivos é constante (progressão aritmética).',
    correctAnswer: true,
    explanation: 'CERTO. PA de razão 3: cada termo soma 3 ao anterior. Termo geral: an = 3n. Próximos: 18, 21, 24...',
    difficulty: 'facil'
  },
  {
    id: 'rl-033',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Na sequência de Fibonacci 1, 1, 2, 3, 5, 8, cada termo é a soma dos dois anteriores.',
    correctAnswer: true,
    explanation: 'CERTO. Fibonacci: F(n) = F(n-1) + F(n-2). 1+1=2, 1+2=3, 2+3=5, 3+5=8. Próximos: 13, 21, 34...',
    difficulty: 'facil'
  },
  {
    id: 'rl-034',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Na sequência 1, 4, 9, 16, 25, os termos são quadrados perfeitos.',
    correctAnswer: true,
    explanation: 'CERTO. Sequência: 1², 2², 3², 4², 5². Quadrados dos números naturais. Próximos: 36 (6²), 49 (7²), 64 (8²).',
    difficulty: 'facil'
  },
  {
    id: 'rl-035',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A sequência 2, 3, 5, 7, 11, 13 é formada por números primos em ordem crescente.',
    correctAnswer: true,
    explanation: 'CERTO. Números primos: divisíveis apenas por 1 e por si mesmos. Próximos primos: 17, 19, 23, 29...',
    difficulty: 'facil'
  },

  // ========================================
  // PROBABILIDADE BÁSICA
  // ========================================
  {
    id: 'rl-036',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A probabilidade de um evento certo é igual a 1.',
    correctAnswer: true,
    explanation: 'CERTO. Evento certo tem P=1 (100%). Evento impossível tem P=0. Qualquer evento tem 0 ≤ P ≤ 1.',
    difficulty: 'facil'
  },
  {
    id: 'rl-037',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'No lançamento de um dado, a probabilidade de sair número par é 1/2.',
    correctAnswer: true,
    explanation: 'CERTO. Pares: {2,4,6} = 3 casos favoráveis. Total: 6 faces. P = 3/6 = 1/2 = 50%.',
    difficulty: 'facil'
  },
  {
    id: 'rl-038',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'No lançamento de dois dados, a probabilidade de sair soma 7 é maior que a probabilidade de sair soma 12.',
    correctAnswer: true,
    explanation: 'CERTO. Soma 7: 6 maneiras (1+6, 2+5, 3+4, 4+3, 5+2, 6+1). Soma 12: 1 maneira (6+6). P(7) = 6/36 > P(12) = 1/36.',
    difficulty: 'medio'
  },
  {
    id: 'rl-039',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se dois eventos são independentes, a probabilidade de ambos ocorrerem é o produto de suas probabilidades.',
    correctAnswer: true,
    explanation: 'CERTO. Eventos independentes: P(A∩B) = P(A) × P(B). Exemplo: dois lançamentos de moeda: P(cara e cara) = 1/2 × 1/2 = 1/4.',
    difficulty: 'medio'
  },
  {
    id: 'rl-040',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se dois eventos são mutuamente excludentes, a probabilidade de pelo menos um ocorrer é a soma de suas probabilidades.',
    correctAnswer: true,
    explanation: 'CERTO. Eventos mutuamente excludentes (disjuntos): P(A∪B) = P(A) + P(B). Não podem ocorrer simultaneamente.',
    difficulty: 'medio'
  },

  // ========================================
  // ANÁLISE COMBINATÓRIA
  // ========================================
  {
    id: 'rl-041',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'O número de anagramas da palavra "BOI" é 6.',
    correctAnswer: true,
    explanation: 'CERTO. Permutação de 3 letras distintas: P₃ = 3! = 3×2×1 = 6. Anagramas: BOI, BIO, OBI, OIB, IBO, IOB.',
    difficulty: 'facil'
  },
  {
    id: 'rl-042',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Em um grupo de 5 pessoas, o número de formas de escolher um presidente e um vice (cargos diferentes) é 20.',
    correctAnswer: true,
    explanation: 'CERTO. Arranjo: A₅,₂ = 5!/(5-2)! = 5×4 = 20. Ordem importa (presidente ≠ vice). Primeira escolha: 5, segunda: 4.',
    difficulty: 'medio'
  },
  {
    id: 'rl-043',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Em um grupo de 5 pessoas, o número de formas de escolher 2 pessoas (sem ordem) é 10.',
    correctAnswer: true,
    explanation: 'CERTO. Combinação: C₅,₂ = 5!/(2!×3!) = (5×4)/(2×1) = 10. Ordem não importa (comissão, dupla).',
    difficulty: 'medio'
  },
  {
    id: 'rl-044',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'O número de anagramas da palavra "CASA" é 12.',
    correctAnswer: true,
    explanation: 'CERTO. 4 letras com repetição (2 A\'s): P₄²ᴬ = 4!/2! = 24/2 = 12. Dividimos pelas permutações das letras repetidas.',
    difficulty: 'medio'
  },
  {
    id: 'rl-045',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Pelo Princípio Multiplicativo, se há 3 camisas e 2 calças, há 6 formas de se vestir.',
    correctAnswer: true,
    explanation: 'CERTO. Princípio Fundamental da Contagem: 3 × 2 = 6 combinações. Para cada camisa (3 opções), há 2 calças.',
    difficulty: 'facil'
  },

  // ========================================
  // PORCENTAGEM E RAZÃO
  // ========================================
  {
    id: 'rl-046',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Aumentar um valor em 50% e depois diminuir 50% resulta no valor original.',
    correctAnswer: false,
    explanation: 'ERRADO. Ex: 100 + 50% = 150. Depois 150 - 50% = 75 (não volta a 100). Percentuais são sobre bases diferentes.',
    difficulty: 'medio'
  },
  {
    id: 'rl-047',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se um produto custa R$ 100 e recebe desconto de 20%, o preço final é R$ 80.',
    correctAnswer: true,
    explanation: 'CERTO. Desconto: 100 × 0,20 = 20. Preço final: 100 - 20 = 80. Ou diretamente: 100 × 0,80 = 80.',
    difficulty: 'facil'
  },
  {
    id: 'rl-048',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'A razão entre 15 e 3 é 5.',
    correctAnswer: true,
    explanation: 'CERTO. Razão = divisão: 15/3 = 5. Razão indica quantas vezes um número contém o outro.',
    difficulty: 'facil'
  },
  {
    id: 'rl-049',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Se a razão entre aprovados e reprovados é 3:2, e há 30 aprovados, há 20 reprovados.',
    correctAnswer: true,
    explanation: 'CERTO. Razão 3:2 significa 3k aprovados e 2k reprovados. Se 3k=30, então k=10. Logo, reprovados = 2k = 20.',
    difficulty: 'medio'
  },
  {
    id: 'rl-050',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Regra de três é aplicável quando grandezas são diretamente ou inversamente proporcionais.',
    correctAnswer: true,
    explanation: 'CERTO. Regra de três resolve problemas com grandezas proporcionais. Direta: aumenta uma, aumenta outra. Inversa: aumenta uma, diminui outra.',
    difficulty: 'facil'
  }
];