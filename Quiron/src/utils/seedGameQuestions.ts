// SCRIPT DE SEED - POPULAR BANCO COM QUESTÕES DO GAME
// Execute este script UMA VEZ para migrar as questões mockadas para o Supabase

import { projectId, publicAnonKey } from '../utils/supabase/info';

// Exemplo de questões - ADICIONE SUAS QUESTÕES REAIS AQUI
const gameQuestionsData = [
  // ============= ÁREA JURÍDICA =============
  {
    id: 'const_001',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A República Federativa do Brasil tem como fundamentos a soberania, a cidadania, a dignidade da pessoa humana, os valores sociais do trabalho e da livre iniciativa e o pluralismo político.',
    correctAnswer: true,
    explanation: 'CORRETO. Conforme art. 1º da Constituição Federal, estes são os 5 fundamentos da República Federativa do Brasil.',
    difficulty: 'facil'
  },
  {
    id: 'const_002',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo, o Judiciário e o Ministério Público.',
    correctAnswer: false,
    explanation: 'ERRADO. Segundo o art. 2º da CF/88, são apenas três poderes: Legislativo, Executivo e Judiciário. O Ministério Público não é um poder.',
    difficulty: 'medio'
  },
  {
    id: 'const_003',
    area: 'juridica',
    subject: 'Direito Constitucional',
    question: 'A casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial.',
    correctAnswer: true,
    explanation: 'CORRETO. Art. 5º, XI da CF/88. Durante a noite, só é possível entrar com consentimento, em flagrante, desastre ou socorro. Durante o dia, também por ordem judicial.',
    difficulty: 'medio'
  },
  {
    id: 'adm_001',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'Os atos administrativos gozam da presunção de legitimidade e veracidade, podendo ser executados pela própria Administração sem necessidade de autorização judicial.',
    correctAnswer: true,
    explanation: 'CORRETO. A presunção de legitimidade é um dos atributos dos atos administrativos, permitindo a autoexecutoriedade.',
    difficulty: 'facil'
  },
  {
    id: 'adm_002',
    area: 'juridica',
    subject: 'Direito Administrativo',
    question: 'O princípio da supremacia do interesse público permite que a Administração Pública atue de forma arbitrária, sem observar os direitos fundamentais.',
    correctAnswer: false,
    explanation: 'ERRADO. A supremacia do interesse público não autoriza arbitrariedades. A Administração deve sempre respeitar os direitos fundamentais e o ordenamento jurídico.',
    difficulty: 'dificil'
  },
  {
    id: 'penal_001',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'Considera-se crime doloso quando o agente quis o resultado ou assumiu o risco de produzi-lo.',
    correctAnswer: true,
    explanation: 'CORRETO. Art. 18, I do Código Penal. Crime doloso é quando há intenção (dolo direto) ou assunção do risco (dolo eventual).',
    difficulty: 'facil'
  },
  {
    id: 'penal_002',
    area: 'juridica',
    subject: 'Direito Penal',
    question: 'A legítima defesa exige proporcionalidade entre a agressão e a resposta, mas não requer que a agressão seja atual ou iminente.',
    correctAnswer: false,
    explanation: 'ERRADO. A legítima defesa exige que a agressão seja ATUAL ou IMINENTE. Agressão passada enseja vingança, não legítima defesa.',
    difficulty: 'medio'
  },

  // ============= ÁREA POLICIAL =============
  {
    id: 'lpe_001',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'A Lei de Drogas considera crime tanto o tráfico quanto o porte de drogas para consumo pessoal.',
    correctAnswer: false,
    explanation: 'ERRADO. A Lei 11.343/2006 considera o tráfico como CRIME, mas o porte para consumo pessoal não é crime, sendo apenas uma infração sujeita a medidas educativas.',
    difficulty: 'medio'
  },
  {
    id: 'lpe_002',
    area: 'policial',
    subject: 'Legislação Penal Especial',
    question: 'O Estatuto do Desarmamento proíbe o porte de arma de fogo em todo território nacional, sem exceções.',
    correctAnswer: false,
    explanation: 'ERRADO. A Lei 10.826/2003 permite o porte para policiais, militares, agentes de segurança e outras categorias específicas mediante autorização.',
    difficulty: 'facil'
  },
  {
    id: 'crim_001',
    area: 'policial',
    subject: 'Criminologia',
    question: 'A teoria do labeling approach (etiquetamento) defende que o crime é uma construção social e que a criminalização seletiva atinge principalmente grupos marginalizados.',
    correctAnswer: true,
    explanation: 'CORRETO. O labeling approach critica a seletividade do sistema penal e afirma que o crime não é uma essência, mas uma etiqueta social aplicada a determinados comportamentos e pessoas.',
    difficulty: 'dificil'
  },
  {
    id: 'dh_001',
    area: 'policial',
    subject: 'Direitos Humanos',
    question: 'Segundo a Declaração Universal dos Direitos Humanos, ninguém será submetido à tortura nem a tratamento ou castigo cruel, desumano ou degradante.',
    correctAnswer: true,
    explanation: 'CORRETO. Art. 5º da DUDH de 1948. É um direito fundamental absoluto, que não admite exceções nem mesmo em situações de emergência.',
    difficulty: 'facil'
  },

  // ============= CONHECIMENTOS GERAIS =============
  {
    id: 'port_001',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Na oração "Maria comprou livros novos", o termo "livros novos" exerce a função sintática de objeto direto.',
    correctAnswer: true,
    explanation: 'CORRETO. "Livros novos" é objeto direto do verbo "comprou" (quem compra, compra algo). "Novos" é adjunto adnominal de "livros".',
    difficulty: 'medio'
  },
  {
    id: 'port_002',
    area: 'conhecimentos-gerais',
    subject: 'Português',
    question: 'Todas as palavras paroxítonas são acentuadas graficamente.',
    correctAnswer: false,
    explanation: 'ERRADO. Apenas paroxítonas terminadas em: R, L, N, X, PS, I(S), US, UM/UNS, Ã(S), ÃO(S), ditongo são acentuadas. Ex: "livro" é paroxítona mas não é acentuada.',
    difficulty: 'facil'
  },
  {
    id: 'rlm_001',
    area: 'conhecimentos-gerais',
    subject: 'Raciocínio Lógico',
    question: 'Em uma proposição composta com o conectivo "ou" (disjunção inclusiva), a proposição é verdadeira quando pelo menos uma das proposições simples é verdadeira.',
    correctAnswer: true,
    explanation: 'CORRETO. A disjunção inclusiva (∨) só é falsa quando AMBAS as proposições são falsas. Em todos os outros casos, é verdadeira.',
    difficulty: 'medio'
  },
  {
    id: 'info_001',
    area: 'conhecimentos-gerais',
    subject: 'Informática',
    question: 'O protocolo HTTPS utiliza criptografia para garantir a segurança na transmissão de dados entre o navegador e o servidor.',
    correctAnswer: true,
    explanation: 'CORRETO. HTTPS (HyperText Transfer Protocol Secure) usa SSL/TLS para criptografar a comunicação, protegendo dados sensíveis.',
    difficulty: 'facil'
  },

  // ============= ÁREA FISCAL-BANCÁRIA =============
  {
    id: 'trib_001',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'A União, os Estados, o Distrito Federal e os Municípios podem instituir impostos, taxas e contribuições de melhoria.',
    correctAnswer: true,
    explanation: 'CORRETO. Art. 145 da CF/88. Todos os entes federativos têm competência para instituir esses três tributos.',
    difficulty: 'facil'
  },
  {
    id: 'trib_002',
    area: 'fiscal-bancaria',
    subject: 'Direito Tributário',
    question: 'O princípio da anterioridade tributária proíbe a cobrança de tributos no mesmo exercício financeiro em que foi publicada a lei que os instituiu ou aumentou.',
    correctAnswer: true,
    explanation: 'CORRETO. Art. 150, III, "b" da CF/88. Porém, há exceções como II, IE, IPI, IOF, empréstimos compulsórios para calamidade/guerra.',
    difficulty: 'medio'
  },
  {
    id: 'cont_001',
    area: 'fiscal-bancaria',
    subject: 'Contabilidade',
    question: 'O patrimônio líquido representa a diferença entre o ativo e o passivo de uma empresa.',
    correctAnswer: true,
    explanation: 'CORRETO. PL = Ativo - Passivo. É a riqueza líquida da empresa, ou seja, o que sobra dos bens e direitos após quitar todas as obrigações.',
    difficulty: 'facil'
  },
  {
    id: 'afo_001',
    area: 'fiscal-bancaria',
    subject: 'AFO (Adm. Financeira e Orçamentária)',
    question: 'O orçamento público no Brasil adota os princípios da unidade, universalidade e anualidade.',
    correctAnswer: true,
    explanation: 'CORRETO. Unidade (um único orçamento), Universalidade (todas as receitas e despesas), Anualidade (vigência de um ano).',
    difficulty: 'medio'
  },
  {
    id: 'econ_001',
    area: 'fiscal-bancaria',
    subject: 'Economia',
    question: 'A inflação de demanda ocorre quando há excesso de oferta de bens e serviços em relação à demanda.',
    correctAnswer: false,
    explanation: 'ERRADO. A inflação de DEMANDA ocorre quando há EXCESSO de demanda em relação à oferta (demanda > oferta), elevando os preços.',
    difficulty: 'medio'
  },
  {
    id: 'banc_001',
    area: 'fiscal-bancaria',
    subject: 'Conhecimentos Bancários',
    question: 'O Banco Central do Brasil é responsável por emitir moeda, executar a política monetária e fiscalizar as instituições financeiras.',
    correctAnswer: true,
    explanation: 'CORRETO. O BACEN é a autoridade monetária brasileira, com funções de banco emissor, executor da política monetária e supervisor do sistema financeiro.',
    difficulty: 'facil'
  }
];

// Função para popular o banco
export async function seedGameQuestions() {
  try {
    console.log('🌱 Iniciando seed de questões do game...');
    console.log(`📦 Total de questões a enviar: ${gameQuestionsData.length}`);

    const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/seed`;
    
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        questions: gameQuestionsData
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const result = await response.json();
    
    console.log('✅ Seed concluído!');
    console.log(`📊 Questões salvas: ${result.saved}/${result.total}`);
    
    if (result.errors && result.errors.length > 0) {
      console.warn('⚠️ Alguns erros ocorreram:', result.errors);
    }

    return result;

  } catch (error) {
    console.error('❌ Erro ao fazer seed:', error);
    throw error;
  }
}

// Função auxiliar para verificar estatísticas após seed
export async function checkGameStats() {
  try {
    console.log('📊 Verificando estatísticas das questões...');

    const url = `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/stats`;
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${publicAnonKey}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();
    
    console.log('📈 Estatísticas:');
    console.log(JSON.stringify(result.stats, null, 2));

    return result;

  } catch (error) {
    console.error('❌ Erro ao buscar estatísticas:', error);
    throw error;
  }
}

// Exportar também as questões para referência
export { gameQuestionsData };
