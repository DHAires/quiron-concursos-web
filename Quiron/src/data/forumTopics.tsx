// Tópicos de fórum por área temática

export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  color: string;
  badge: string;
}

export interface ForumTopic {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  userId: string;
  userName: string;
  userAvatar: string;
  timestamp: string;
  badge?: string;
  pinned?: boolean;
  postCount: number;
  lastActivity: string;
  views?: number;
}

export interface ForumPost {
  id: string;
  topicId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  message: string;
  timestamp: string;
  badge?: string;
  edited?: boolean;
  editedAt?: string;
  likes?: number;
}

// Categorias das áreas temáticas
export const forumCategories: ForumCategory[] = [
  {
    id: 'juridica',
    name: 'Jurídica',
    description: 'Discussões sobre Direito Constitucional, Administrativo, Civil, Penal e mais',
    icon: '⚖️',
    gradient: 'from-blue-600 to-blue-400',
    color: 'blue',
    badge: 'Justiça'
  },
  {
    id: 'policial',
    name: 'Policial',
    description: 'Debate sobre Legislação Penal, Direitos Humanos, Criminalística e Segurança',
    icon: '🛡️',
    gradient: 'from-red-600 to-red-400',
    color: 'red',
    badge: 'Segurança'
  },
  {
    id: 'conhecimentos-gerais',
    name: 'Conhecimentos Gerais',
    description: 'História, Geografia, Atualidades, Português e Raciocínio Lógico',
    icon: '🎓',
    gradient: 'from-purple-600 to-purple-400',
    color: 'purple',
    badge: 'Cultura'
  },
  {
    id: 'fiscal-bancaria',
    name: 'Fiscal e Bancária',
    description: 'Economia, Matemática Financeira, Contabilidade e Direito Tributário',
    icon: '💰',
    gradient: 'from-yellow-600 to-yellow-400',
    color: 'yellow',
    badge: 'Finanças'
  }
];

// Tópicos iniciais para cada área
export const initialForumTopics: ForumTopic[] = [
  // ÁREA JURÍDICA
  {
    id: 'topic-juridica-01',
    categoryId: 'juridica',
    title: '📚 Dicas de Estudo: Direito Constitucional para Iniciantes',
    description: 'Compartilhe suas melhores técnicas e materiais para dominar os princípios constitucionais. Como vocês organizam o estudo dos direitos fundamentais? Vamos trocar experiências!',
    userId: 'system',
    userName: 'Themis - Deusa da Justiça',
    userAvatar: '⚖️',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    badge: 'Moderador',
    pinned: true,
    postCount: 127,
    lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    views: 3420
  },
  {
    id: 'topic-juridica-03',
    categoryId: 'juridica',
    title: '🎉 Bem-vindo ao Fórum Jurídico! Apresente-se aqui!',
    description: 'Seja muito bem-vindo, guerreiro da justiça! 🏛️ Este é o espaço para você se apresentar: qual concurso está estudando? Qual sua maior dificuldade no Direito? Vamos nos conhecer e criar uma rede de apoio! Todos aqui já passaram (ou estão passando) pelas mesmas batalhas que você. Juntos somos mais fortes! 💪⚖️',
    userId: 'system',
    userName: 'Quiron - O Mentor',
    userAvatar: '🏹',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    badge: 'Fundador',
    pinned: true,
    postCount: 312,
    lastActivity: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    views: 7845
  },
  {
    id: 'topic-juridica-02',
    categoryId: 'juridica',
    title: '⚡ Mudanças Recentes na Legislação: O que estudar agora?',
    description: 'Discussão sobre as últimas alterações em leis importantes. Quais mudanças têm caído mais nas provas? Como se manter atualizado?',
    userId: 'user_001',
    userName: 'Advogado Concurseiro',
    userAvatar: '👨‍⚖️',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    badge: 'Expert',
    pinned: false,
    postCount: 43,
    lastActivity: new Date(Date.now() - 30 * 60 * 60 * 1000).toISOString(),
    views: 892
  },

  // ÁREA POLICIAL
  {
    id: 'topic-policial-01',
    categoryId: 'policial',
    title: '🛡️ Preparação Física e Mental para Concursos Policiais',
    description: 'Como equilibrar os estudos teóricos com a preparação física? Compartilhe rotinas de treino, dicas de alimentação e estratégias mentais para o TAF e prova de aptidão física.',
    userId: 'system',
    userName: 'Ares - Deus da Guerra',
    userAvatar: '⚔️',
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    badge: 'Moderador',
    pinned: true,
    postCount: 234,
    lastActivity: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    views: 5678
  },
  {
    id: 'topic-policial-03',
    categoryId: 'policial',
    title: '🔥 Bem-vindo, Guerreiro! Compartilhe sua jornada!',
    description: 'Salve, futuro agente da paz! 🛡️ Este é SEU espaço para se apresentar! Conta pra gente: qual cargo policial você almeja? PRF, PC, PM, PF? Qual sua motivação? Está começando agora ou já está na batalha há tempos? Aqui você encontra apoio, motivação e companheiros de luta! Ninguém vence sozinho! 💪🔥',
    userId: 'system',
    userName: 'Quiron - O Mentor',
    userAvatar: '🏹',
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
    badge: 'Fundador',
    pinned: true,
    postCount: 423,
    lastActivity: new Date(Date.now() - 45 * 60 * 60 * 1000).toISOString(),
    views: 9234
  },
  {
    id: 'topic-policial-02',
    categoryId: 'policial',
    title: '🎯 Legislação Penal Especial: Crimes que mais caem',
    description: 'Quais são os crimes da legislação especial mais cobrados? Lei de Drogas, Estatuto do Desarmamento, Maria da Penha... Vamos listar e discutir!',
    userId: 'user_002',
    userName: 'Guerreiro da Lei',
    userAvatar: '🦸',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    badge: 'Top Colaborador',
    pinned: false,
    postCount: 76,
    lastActivity: new Date(Date.now() - 45 * 60 * 60 * 1000).toISOString(),
    views: 1543
  },

  // ÁREA CONHECIMENTOS GERAIS
  {
    id: 'topic-cg-01',
    categoryId: 'conhecimentos-gerais',
    title: '🌍 Atualidades 2024: Principais temas para estudar',
    description: 'Quais são os assuntos mais quentes para as provas de atualidades? Política, economia, meio ambiente, tecnologia... Vamos mapear os temas essenciais e compartilhar fontes confiáveis!',
    userId: 'system',
    userName: 'Athena - Deusa da Sabedoria',
    userAvatar: '🦉',
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    badge: 'Moderador',
    pinned: true,
    postCount: 189,
    lastActivity: new Date(Date.now() - 15 * 60 * 60 * 1000).toISOString(),
    views: 4231
  },
  {
    id: 'topic-cg-03',
    categoryId: 'conhecimentos-gerais',
    title: '🌟 Olá, Estudante! Conte sua história de estudos!',
    description: 'Boas-vindas, sábio guerreiro! 📚 Este é o cantinho perfeito para se apresentar! Qual área do conhecimento você mais gosta? Qual sua maior dificuldade? Português, raciocínio, atualidades? Compartilhe dicas, peça ajuda, faça amigos! A sabedoria cresce quando é compartilhada! 🌟🎓',
    userId: 'system',
    userName: 'Quiron - O Mentor',
    userAvatar: '🏹',
    timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    badge: 'Fundador',
    pinned: true,
    postCount: 267,
    lastActivity: new Date(Date.now() - 20 * 60 * 60 * 1000).toISOString(),
    views: 6543
  },
  {
    id: 'topic-cg-02',
    categoryId: 'conhecimentos-gerais',
    title: '📖 Português: Como interpretar textos complexos?',
    description: 'Técnicas de interpretação de texto, vocabulário, sintaxe... Como vocês fazem para não errar nas questões de português? Dicas práticas são bem-vindas!',
    userId: 'user_003',
    userName: 'Mestre das Letras',
    userAvatar: '📚',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    badge: 'Especialista',
    pinned: false,
    postCount: 94,
    lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    views: 2156
  },

  // ÁREA FISCAL E BANCÁRIA
  {
    id: 'topic-fiscal-01',
    categoryId: 'fiscal-bancaria',
    title: '💰 Matemática Financeira sem Mistério: Aprenda de vez!',
    description: 'Juros simples, compostos, amortização, desconto... Quais fórmulas são essenciais? Como não confundir? Compartilhe macetes e resoluções comentadas!',
    userId: 'system',
    userName: 'Plutus - Deus da Riqueza',
    userAvatar: '💎',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    badge: 'Moderador',
    pinned: true,
    postCount: 156,
    lastActivity: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
    views: 3876
  },
  {
    id: 'topic-fiscal-03',
    categoryId: 'fiscal-bancaria',
    title: '💎 Seja bem-vindo à área Fiscal! Apresente-se!',
    description: 'Olá, futuro servidor da área fiscal/bancária! 💰 Este é o espaço para você se apresentar: está estudando para qual concurso? Receita Federal, Banco Central, CEF, BB? Matemática financeira te assusta ou você já domina? Contabilidade é seu forte? Vamos trocar experiências e conquistar juntos essa aprovação! 🏆📊',
    userId: 'system',
    userName: 'Quiron - O Mentor',
    userAvatar: '🏹',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    badge: 'Fundador',
    pinned: true,
    postCount: 198,
    lastActivity: new Date(Date.now() - 10 * 60 * 60 * 1000).toISOString(),
    views: 5432
  },
  {
    id: 'topic-fiscal-02',
    categoryId: 'fiscal-bancaria',
    title: '📊 Contabilidade Geral vs Pública: Diferenças cruciais',
    description: 'Quais as principais diferenças entre contabilidade geral e pública? Balanço patrimonial, demonstrações, princípios... Vamos esclarecer de uma vez por todas!',
    userId: 'user_004',
    userName: 'Contador Expert',
    userAvatar: '🧮',
    timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
    badge: 'Professor',
    pinned: false,
    postCount: 62,
    lastActivity: new Date(Date.now() - 1 * 60 * 60 * 1000).toISOString(),
    views: 1432
  }
];

// Posts iniciais para os tópicos pinados
export const initialForumPosts: Record<string, Array<ForumPost>> = {
  'topic-juridica-01': [
    {
      id: 'post-jur-01-01',
      topicId: 'topic-juridica-01',
      userId: 'system',
      userName: 'Themis - Deusa da Justiça',
      userAvatar: '⚖️',
      message: 'Olá, heróis concurseiros! 👋\n\nPara quem está começando em Direito Constitucional, aqui vão algumas dicas fundamentais:\n\n1️⃣ **Comece pelos princípios**: Entenda bem os princípios fundamentais antes de partir para os detalhes\n2️⃣ **Mapas mentais**: Crie mapas para visualizar a estrutura da Constituição\n3️⃣ **Questões comentadas**: Resolva MUITAS questões com gabarito comentado\n4️⃣ **Jurisprudência**: Acompanhe decisões recentes do STF\n\nCompartilhem suas experiências! 💪',
      timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
      badge: 'Moderador',
      likes: 89
    },
    {
      id: 'post-jur-01-02',
      topicId: 'topic-juridica-01',
      userId: 'user_101',
      userName: 'Estudante Dedicado',
      userAvatar: '📖',
      message: 'Excelente tópico! Eu uso o método de revisão espaçada com flashcards. Funciona muito bem para decorar os artigos importantes!',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      likes: 34
    }
  ],
  
  'topic-juridica-03': [
    {
      id: 'post-jur-03-01',
      topicId: 'topic-juridica-03',
      userId: 'system',
      userName: 'Quiron - O Mentor',
      userAvatar: '🏹',
      message: '🎉 **BEM-VINDOS AO FÓRUM JURÍDICO DA QUIRON!** 🏛️\n\nEste é o lugar onde guerreiros da justiça se encontram! ⚖️\n\n✨ **Como funciona:**\n\n📝 Apresente-se aqui: nome (ou apelido), concurso que está estudando, há quanto tempo estuda\n🤝 Seja acolhedor com novos membros\n💡 Compartilhe suas dúvidas e vitórias\n🎯 Ajude outros guerreiros sempre que puder\n\n**Regras de Ouro:**\n✅ Respeito sempre\n✅ Sem julgamentos\n✅ Apoio mútuo\n✅ Compartilhe conhecimento\n\nLembre-se: sozinho você vai rápido, juntos vamos longe! 💪\n\n**Começe agora:** conte para nós sua história! 👇',
      timestamp: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString(),
      badge: 'Fundador',
      likes: 245
    }
  ],
  
  'topic-policial-01': [
    {
      id: 'post-pol-01-01',
      topicId: 'topic-policial-01',
      userId: 'system',
      userName: 'Ares - Deus da Guerra',
      userAvatar: '⚔️',
      message: 'Guerreiros! 💪\n\nA preparação para concursos policiais exige disciplina TOTAL:\n\n🏋️ **Físico**:\n• Treino 5x por semana (força + cardio)\n• Corrida diária (pelo menos 3km)\n• Flexibilidade e mobilidade\n\n🧠 **Mental**:\n• Estudo 6h/dia nos dias de treino\n• 8h/dia nos dias de descanso físico\n• Meditação para foco\n\n🍎 **Alimentação**:\n• Dieta balanceada\n• Hidratação constante\n• Suplementação adequada\n\nLembre-se: mente sã, corpo são! 🎯',
      timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
      badge: 'Moderador',
      likes: 156
    }
  ],
  
  'topic-policial-03': [
    {
      id: 'post-pol-03-01',
      topicId: 'topic-policial-03',
      userId: 'system',
      userName: 'Quiron - O Mentor',
      userAvatar: '🏹',
      message: '🔥 **SALVE, GUERREIROS DA PAZ!** 🛡️\n\nBem-vindo ao pelotão dos futuros agentes de segurança! 💪\n\n🎖️ **Apresente-se respondendo:**\n\n1️⃣ Qual cargo almeja? (PRF, PF, PC, PM, outro?)\n2️⃣ Está começando agora ou já é veterano?\n3️⃣ Qual sua maior dificuldade? (Físico, matérias específicas, motivação?)\n4️⃣ O que te motiva a ser policial?\n\n💡 **Este é um espaço para:**\n✅ Compartilhar rotinas de estudo\n✅ Trocar dicas de TAF\n✅ Apoiar uns aos outros nos momentos difíceis\n✅ Celebrar cada pequena vitória\n✅ Criar amizades que duram além do concurso\n\n🏆 **Lembre-se:** Todo grande policial começou exatamente onde você está agora!\n\nVamos nessa! Apresente-se! 👊🔥',
      timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString(),
      badge: 'Fundador',
      likes: 389
    }
  ],
  
  'topic-cg-01': [
    {
      id: 'post-cg-01-01',
      topicId: 'topic-cg-01',
      userId: 'system',
      userName: 'Athena - Deusa da Sabedoria',
      userAvatar: '🦉',
      message: '🌍 **PRINCIPAIS TEMAS DE ATUALIDADES 2024:**\n\n📱 **Tecnologia**:\n• Inteligência Artificial (ChatGPT, regulação)\n• Proteção de dados (LGPD)\n\n🌱 **Meio Ambiente**:\n• COP28 e mudanças climáticas\n• Desmatamento na Amazônia\n\n💰 **Economia**:\n• Taxa de juros e inflação\n• Reforma tributária\n\n🏛️ **Política**:\n• Eleições municipais\n• Políticas públicas\n\n**Fontes recomendadas:**\n- Estadão, Folha, G1 (notícias)\n- The Economist, Nexo (análises)\n- Podcasts especializados\n\nMantenha-se atualizado diariamente! 📰',
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
      badge: 'Moderador',
      likes: 203
    }
  ],
  
  'topic-cg-03': [
    {
      id: 'post-cg-03-01',
      topicId: 'topic-cg-03',
      userId: 'system',
      userName: 'Quiron - O Mentor',
      userAvatar: '🏹',
      message: '🌟 **BOAS-VINDAS À COMUNIDADE DO CONHECIMENTO!** 📚\n\nOlá, sábio guerreiro! Que honra ter você aqui! 🎓\n\n✍️ **Se apresente contando:**\n\n1️⃣ Seu nome (ou apelido de guerra)\n2️⃣ Qual concurso está na mira?\n3️⃣ Qual matéria de conhecimentos gerais você mais gosta?\n4️⃣ Qual te dá mais trabalho?\n5️⃣ Uma curiosidade sobre você!\n\n🎯 **Aqui você pode:**\n✅ Tirar dúvidas de português, matemática, atualidades...\n✅ Compartilhar resumos e mapas mentais\n✅ Pedir indicação de materiais\n✅ Formar grupos de estudo\n✅ Trocar técnicas de memorização\n\n💭 **Dica de ouro:** Ensinar é a melhor forma de aprender! Sempre que souber algo, compartilhe!\n\n🤗 Estamos ansiosos para te conhecer! Apresente-se aí embaixo! 👇',
      timestamp: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(),
      badge: 'Fundador',
      likes: 234
    }
  ],
  
  'topic-fiscal-01': [
    {
      id: 'post-fisc-01-01',
      topicId: 'topic-fiscal-01',
      userId: 'system',
      userName: 'Plutus - Deus da Riqueza',
      userAvatar: '💎',
      message: '💰 **MATEMÁTICA FINANCEIRA DESCOMPLICADA!**\n\n🔑 **Fórmulas Essenciais:**\n\n**Juros Simples:**\nJ = C × i × t\nM = C × (1 + i×t)\n\n**Juros Compostos:**\nM = C × (1 + i)^t\n\n**Desconto Simples:**\nD = N × i × t\n\n💡 **MACETE DE OURO:**\n- Simples = SOMA\n- Composto = MULTIPLICA\n\n📝 **Dica:** Faça pelo menos 10 questões por dia!\n\n**Material recomendado:**\n- Questões do CESPE/CEBRASPE\n- Videoaulas com resolução comentada\n- Lista de exercícios progressivos\n\nA prática leva à perfeição! 🎯',
      timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
      badge: 'Moderador',
      likes: 178
    }
  ],
  
  'topic-fiscal-03': [
    {
      id: 'post-fisc-03-01',
      topicId: 'topic-fiscal-03',
      userId: 'system',
      userName: 'Quiron - O Mentor',
      userAvatar: '🏹',
      message: '💎 **BEM-VINDO À ELITE FISCAL E BANCÁRIA!** 💰\n\nSeja muito bem-vindo, futuro servidor! 🏆\n\n📊 **Conte pra gente:**\n\n1️⃣ Qual concurso está estudando? (Receita, Banco Central, BB, CEF, SEFAZ...)\n2️⃣ Qual sua formação? (Administração, Economia, Contábeis, outra?)\n3️⃣ Há quanto tempo estuda?\n4️⃣ Maior dificuldade: Mat. Financeira, Contabilidade ou Direito Tributário?\n5️⃣ Já fez alguma prova antes?\n\n💼 **Nesta comunidade você encontra:**\n✅ Resolução comentada de questões\n✅ Macetes para fórmulas\n✅ Materiais de estudo compartilhados\n✅ Simulados em grupo\n✅ Apoio emocional nos dias difíceis\n✅ Comemoração de cada aprovação!\n\n🎓 **Lembre-se:** Os melhores auditores e analistas de hoje também já foram iniciantes!\n\nSeja bem-vindo ao time! Apresente-se! 👇💪',
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
      badge: 'Fundador',
      likes: 167
    }
  ]
};