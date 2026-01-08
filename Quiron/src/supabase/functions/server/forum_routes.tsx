import { Hono } from "npm:hono";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// ============= FORUM ROUTES =============

// Get all forum categories
app.get("/make-server-50734795/forum/categories", async (c) => {
  try {
    console.log('🔍 [FORUM] Fetching categories...');
    
    let categories = await kv.get('forum_categories');
    
    // Initialize if no categories exist
    if (!categories || !Array.isArray(categories) || categories.length === 0) {
      console.log('⚠️ [FORUM] No categories found, initializing...');
      
      categories = [
        {
          id: 'cat_juridica',
          name: '📚 Área Jurídica',
          description: 'Discussões sobre Direito Constitucional, Administrativo, Penal, Processual e mais.',
          icon: '⚖️',
          gradient: 'from-blue-600 to-blue-400',
          color: 'blue',
          badge: '⚖️ Direito',
        },
        {
          id: 'cat_policial',
          name: '🚔 Área Policial',
          description: 'Tópicos sobre carreira policial, preparação física, legislação específica e experiências.',
          icon: '🛡️',
          gradient: 'from-red-600 to-red-400',
          color: 'red',
          badge: '🚔 Policial',
        },
        {
          id: 'cat_fiscal',
          name: '💰 Área Fiscal e Bancária',
          description: 'Debates sobre AFR, ICMS, ISS, concursos bancários, matemática financeira e contabilidade.',
          icon: '💵',
          gradient: 'from-yellow-600 to-yellow-400',
          color: 'yellow',
          badge: '💰 Fiscal',
        },
        {
          id: 'cat_gerais',
          name: '📖 Conhecimentos Gerais',
          description: 'Português, RLM, Informática, Atualidades e outras matérias de conhecimento geral.',
          icon: '🎓',
          gradient: 'from-purple-600 to-purple-400',
          color: 'purple',
          badge: '📚 Gerais',
        },
      ];
      
      await kv.set('forum_categories', categories);
      console.log(`✅ [FORUM] Auto-initialized ${categories.length} categories`);
    }
    
    console.log(`✅ [FORUM] Returning ${categories.length} categories`);
    
    return c.json({ categories });
  } catch (error) {
    console.error('❌ [FORUM] Fetch categories error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Get topics for a category
app.get("/make-server-50734795/forum/categories/:categoryId/topics", async (c) => {
  try {
    const categoryId = c.req.param("categoryId");
    console.log(`🔍 [FORUM] Fetching topics for category: ${categoryId}`);
    
    const key = `forum_topics_${categoryId}`;
    let topics = await kv.get(key) || [];
    
    // Initialize topics if empty - seed with welcome topics
    if (!Array.isArray(topics) || topics.length === 0) {
      console.log(`⚠️ [FORUM] No topics found for ${categoryId}, initializing...`);
      
      const seedTopics: { [key: string]: any[] } = {
        'juridica': [
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
            lastActivity: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
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
          }
        ],
        'policial': [
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
            lastActivity: new Date(Date.now() - 45 * 60 * 1000).toISOString(),
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
          }
        ],
        'conhecimentos-gerais': [
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
            lastActivity: new Date(Date.now() - 20 * 60 * 1000).toISOString(),
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
          }
        ],
        'fiscal-bancaria': [
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
            lastActivity: new Date(Date.now() - 10 * 60 * 1000).toISOString(),
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
        ]
      };
      
      // Get seed topics for this category
      topics = seedTopics[categoryId] || [];
      
      if (topics.length > 0) {
        await kv.set(key, topics);
        console.log(`✅ [FORUM] Initialized ${topics.length} topics for ${categoryId}`);
      }
    }
    
    console.log(`✅ [FORUM] Returning ${topics.length} topics`);
    
    return c.json({ topics });
  } catch (error) {
    console.error('❌ [FORUM] Fetch topics error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Create a new topic
app.post("/make-server-50734795/forum/categories/:categoryId/topics", async (c) => {
  try {
    const categoryId = c.req.param("categoryId");
    const body = await c.req.json();
    const { userId, userName, userAvatar, title, description, badge } = body;
    
    console.log(`📝 [FORUM] Creating topic in category ${categoryId}: ${title}`);
    
    if (!title || !description) {
      return c.json({ error: "Title and description are required" }, 400);
    }
    
    const key = `forum_topics_${categoryId}`;
    const topics = await kv.get(key) || [];
    
    const newTopic = {
      id: `topic_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      categoryId,
      title,
      description,
      userId,
      userName,
      userAvatar,
      timestamp: new Date().toISOString(),
      badge,
      pinned: false,
      postCount: 0,
      lastActivity: new Date().toISOString(),
    };
    
    topics.unshift(newTopic); // Add to beginning
    await kv.set(key, topics);
    
    console.log(`✅ [FORUM] Topic created (total: ${topics.length})`);
    
    return c.json({ topic: newTopic });
  } catch (error) {
    console.error('❌ [FORUM] Create topic error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Edit a topic
app.put("/make-server-50734795/forum/categories/:categoryId/topics/:topicId", async (c) => {
  try {
    const categoryId = c.req.param("categoryId");
    const topicId = c.req.param("topicId");
    const body = await c.req.json();
    const { userId, title, description } = body;
    
    console.log(`✏️ [FORUM] Editing topic ${topicId} in category ${categoryId}`);
    
    if (!title || !description) {
      return c.json({ error: "Title and description are required" }, 400);
    }
    
    const key = `forum_topics_${categoryId}`;
    const topics = await kv.get(key) || [];
    
    const topicIndex = topics.findIndex((t: any) => t.id === topicId);
    
    if (topicIndex === -1) {
      return c.json({ error: "Topic not found" }, 404);
    }
    
    // Verify ownership
    if (topics[topicIndex].userId !== userId) {
      return c.json({ error: "Unauthorized - you can only edit your own topics" }, 403);
    }
    
    // Update topic
    topics[topicIndex].title = title;
    topics[topicIndex].description = description;
    topics[topicIndex].edited = true;
    topics[topicIndex].editedAt = new Date().toISOString();
    
    await kv.set(key, topics);
    
    console.log(`✅ [FORUM] Topic edited successfully`);
    
    return c.json({ topic: topics[topicIndex] });
  } catch (error) {
    console.error('❌ [FORUM] Edit topic error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Delete a topic
app.delete("/make-server-50734795/forum/categories/:categoryId/topics/:topicId", async (c) => {
  try {
    const categoryId = c.req.param("categoryId");
    const topicId = c.req.param("topicId");
    const body = await c.req.json();
    const { userId } = body;
    
    console.log(`🗑️ [FORUM] Deleting topic ${topicId} in category ${categoryId}`);
    
    const key = `forum_topics_${categoryId}`;
    const topics = await kv.get(key) || [];
    
    const topicIndex = topics.findIndex((t: any) => t.id === topicId);
    
    if (topicIndex === -1) {
      return c.json({ error: "Topic not found" }, 404);
    }
    
    // Verify ownership
    if (topics[topicIndex].userId !== userId) {
      return c.json({ error: "Unauthorized - you can only delete your own topics" }, 403);
    }
    
    // Remove topic
    topics.splice(topicIndex, 1);
    await kv.set(key, topics);
    
    // Delete all posts associated with this topic
    const postsKey = `forum_posts_${topicId}`;
    await kv.del(postsKey);
    
    console.log(`✅ [FORUM] Topic and all its posts deleted successfully`);
    
    return c.json({ success: true });
  } catch (error) {
    console.error('❌ [FORUM] Delete topic error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Get posts for a topic
app.get("/make-server-50734795/forum/topics/:topicId/posts", async (c) => {
  try {
    const topicId = c.req.param("topicId");
    console.log(`📨 [FORUM] Fetching posts for topic: ${topicId}`);
    
    const key = `forum_posts_${topicId}`;
    let posts = await kv.get(key) || [];
    
    // Initialize posts for welcome topics if empty
    if (!Array.isArray(posts) || posts.length === 0) {
      console.log(`⚠️ [FORUM] No posts found for ${topicId}, checking if should initialize...`);
      
      const initialPosts: { [key: string]: any[] } = {
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
            likes: 245,
            edited: false
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
            likes: 389,
            edited: false
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
            likes: 234,
            edited: false
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
            likes: 167,
            edited: false
          }
        ]
      };
      
      // Initialize posts if this is a welcome topic
      if (initialPosts[topicId]) {
        posts = initialPosts[topicId];
        await kv.set(key, posts);
        console.log(`✅ [FORUM] Initialized ${posts.length} posts for ${topicId}`);
      }
    }
    
    console.log(`✅ [FORUM] Returning ${posts.length} posts`);
    
    return c.json({ posts });
  } catch (error) {
    console.error('❌ [FORUM] Fetch posts error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Create a new post (reply)
app.post("/make-server-50734795/forum/topics/:topicId/posts", async (c) => {
  try {
    const topicId = c.req.param("topicId");
    const body = await c.req.json();
    const { userId, userName, userAvatar, message, badge } = body;
    
    console.log(`💬 [FORUM] New post in topic ${topicId} from ${userName}`);
    
    if (!message || !message.trim()) {
      return c.json({ error: "Message is required" }, 400);
    }
    
    const key = `forum_posts_${topicId}`;
    const posts = await kv.get(key) || [];
    
    const newPost = {
      id: `post_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      topicId,
      userId,
      userName,
      userAvatar,
      message: message.trim(),
      timestamp: new Date().toISOString(),
      badge,
      edited: false,
      likes: 0,
    };
    
    posts.push(newPost);
    await kv.set(key, posts);
    
    // Update topic's postCount and lastActivity
    // Find the topic in all categories
    const categories = await kv.get('forum_categories') || [];
    for (const cat of categories as any[]) {
      const topicsKey = `forum_topics_${cat.id}`;
      const topics = await kv.get(topicsKey) || [];
      const topicIndex = topics.findIndex((t: any) => t.id === topicId);
      
      if (topicIndex !== -1) {
        topics[topicIndex].postCount = posts.length;
        topics[topicIndex].lastActivity = new Date().toISOString();
        await kv.set(topicsKey, topics);
        break;
      }
    }
    
    console.log(`✅ [FORUM] Post created (total: ${posts.length})`);
    
    return c.json({ post: newPost });
  } catch (error) {
    console.error('❌ [FORUM] Create post error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Edit a post
app.put("/make-server-50734795/forum/topics/:topicId/posts/:postId", async (c) => {
  try {
    const topicId = c.req.param("topicId");
    const postId = c.req.param("postId");
    const body = await c.req.json();
    const { userId, message } = body;
    
    console.log(`✏️ [FORUM] Editing post ${postId} in topic ${topicId}`);
    
    const key = `forum_posts_${topicId}`;
    const posts = await kv.get(key) || [];
    
    const postIndex = posts.findIndex((p: any) => p.id === postId);
    
    if (postIndex === -1) {
      return c.json({ error: "Post not found" }, 404);
    }
    
    // Verify ownership
    if (posts[postIndex].userId !== userId) {
      return c.json({ error: "Unauthorized" }, 403);
    }
    
    posts[postIndex].message = message.trim();
    posts[postIndex].edited = true;
    posts[postIndex].editedAt = new Date().toISOString();
    
    await kv.set(key, posts);
    
    console.log(`✅ [FORUM] Post edited`);
    
    return c.json({ post: posts[postIndex] });
  } catch (error) {
    console.error('❌ [FORUM] Edit post error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Delete a post
app.delete("/make-server-50734795/forum/topics/:topicId/posts/:postId", async (c) => {
  try {
    const topicId = c.req.param("topicId");
    const postId = c.req.param("postId");
    const body = await c.req.json();
    const { userId } = body;
    
    console.log(`🗑️ [FORUM] Deleting post ${postId} in topic ${topicId}`);
    
    const key = `forum_posts_${topicId}`;
    const posts = await kv.get(key) || [];
    
    const postIndex = posts.findIndex((p: any) => p.id === postId);
    
    if (postIndex === -1) {
      return c.json({ error: "Post not found" }, 404);
    }
    
    // Verify ownership
    if (posts[postIndex].userId !== userId) {
      return c.json({ error: "Unauthorized" }, 403);
    }
    
    posts.splice(postIndex, 1);
    await kv.set(key, posts);
    
    console.log(`✅ [FORUM] Post deleted`);
    
    return c.json({ success: true });
  } catch (error) {
    console.error('❌ [FORUM] Delete post error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Like a post
app.post("/make-server-50734795/forum/topics/:topicId/posts/:postId/like", async (c) => {
  try {
    const topicId = c.req.param("topicId");
    const postId = c.req.param("postId");
    
    console.log(`❤️ [FORUM] Liking post ${postId} in topic ${topicId}`);
    
    const key = `forum_posts_${topicId}`;
    const posts = await kv.get(key) || [];
    
    const postIndex = posts.findIndex((p: any) => p.id === postId);
    
    if (postIndex === -1) {
      return c.json({ error: "Post not found" }, 404);
    }
    
    posts[postIndex].likes = (posts[postIndex].likes || 0) + 1;
    await kv.set(key, posts);
    
    console.log(`✅ [FORUM] Post liked (total: ${posts[postIndex].likes})`);
    
    return c.json({ post: posts[postIndex] });
  } catch (error) {
    console.error('❌ [FORUM] Like post error:', error);
    return c.json({ error: error.message }, 500);
  }
});

export default app;