// Forum utilities for Supabase KV Store
import * as kv from './kv_store.tsx';

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
  postCount?: number;
  lastActivity?: string;
}

export interface ForumCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  color: string;
  badge: string;
}

// Initialize default forum categories
export async function initializeForumCategories() {
  const categories: ForumCategory[] = [
    {
      id: 'juridica',
      name: '⚖️ Área Jurídica',
      description: 'Debates sobre direito constitucional, administrativo, penal, civil e jurisprudência',
      icon: 'Scale',
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      color: 'blue',
      badge: '⚖️ Direito',
    },
    {
      id: 'policial',
      name: '🚔 Área Policial',
      description: 'Concursos policiais, legislação específica, preparação física e tática',
      icon: 'Shield',
      gradient: 'from-red-600 via-red-500 to-orange-600',
      color: 'red',
      badge: '🚔 Policial',
    },
    {
      id: 'conhecimentos-gerais',
      name: '📚 Conhecimentos Gerais',
      description: 'História, geografia, atualidades, português, matemática e raciocínio lógico',
      icon: 'BookOpen',
      gradient: 'from-purple-600 via-purple-500 to-pink-500',
      color: 'purple',
      badge: '📚 Conhecimentos',
    },
    {
      id: 'fiscal-bancaria',
      name: '💰 Área Fiscal e Bancária',
      description: 'Concursos de tribunais de contas, receita federal, bancos e contabilidade',
      icon: 'Coins',
      gradient: 'from-yellow-600 via-amber-500 to-orange-500',
      color: 'yellow',
      badge: '💰 Fiscal',
    },
  ];

  for (const category of categories) {
    await kv.set(`forum_cat:${category.id}`, category);
  }

  console.log('✅ [initializeForumCategories] Created 4 forum categories');
  
  // Seed initial topics
  await seedInitialTopics();
  
  return categories;
}

// Seed initial topics for all categories
export async function seedInitialTopics() {
  console.log('🌱 [seedInitialTopics] Starting to seed topics...');
  
  const seedTopics = [
    // Jurídica
    {
      categoryId: 'juridica',
      title: '🔥 Dolo Eventual vs Culpa Consciente - Tire suas dúvidas!',
      description: 'Tópico para esclarecer essa diferença que sempre cai nas provas. Compartilhe casos práticos e decisões dos tribunais superiores.',
      userName: 'Dr. Oliveira',
      avatar: '⚖️',
      badge: '⚖️ Direito',
      pinned: true,
    },
    
    // Policial
    {
      categoryId: 'policial',
      title: '💪 Preparação Física - Cronogramas e Dicas',
      description: 'Compartilhe suas rotinas de treino, dicas de alimentação e estratégias para passar no TAF. Vamos juntos!',
      userName: 'Sgt. Silva',
      avatar: '👮',
      badge: '🚔 Policial',
      pinned: true,
    },
    
    // Conhecimentos Gerais
    {
      categoryId: 'conhecimentos-gerais',
      title: '📰 Atualidades 2025 - Principais Notícias',
      description: 'Acompanhe os fatos mais importantes de 2025 que podem cair nas provas. Política, economia, tecnologia e sociedade.',
      userName: 'Prof. Carvalho',
      avatar: '📚',
      badge: '📚 Conhecimentos',
      pinned: true,
    },
    
    // Fiscal-Bancária
    {
      categoryId: 'fiscal-bancaria',
      title: '💼 Edital Receita Federal 2025 - Análise Completa',
      description: 'Vamos discutir o novo edital, matérias cobradas, bancas examinadoras e estratégias de estudo para aprovação.',
      userName: 'Auditor Santos',
      avatar: '💰',
      badge: '💰 Fiscal',
      pinned: true,
    },
  ];
  
  let topicsCreated = 0;
  
  for (const seed of seedTopics) {
    const topicId = `topic_seed_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const topic: ForumTopic = {
      id: topicId,
      categoryId: seed.categoryId,
      title: seed.title,
      description: seed.description,
      userId: `seed_user_${Math.random().toString(36).substr(2, 6)}`,
      userName: seed.userName,
      userAvatar: seed.avatar,
      timestamp: new Date(Date.now() - Math.random() * 86400000).toISOString(), // Random time within last day
      badge: seed.badge,
      pinned: seed.pinned,
      postCount: 0,
      lastActivity: new Date().toISOString(),
    };
    
    const key = `forum_topic:${seed.categoryId}:${topicId}`;
    await kv.set(key, topic);
    topicsCreated++;
    
    console.log(`✅ [seedInitialTopics] Topic created: ${topic.title} in ${seed.categoryId}`);
    
    // Create initial post for each topic
    await seedInitialPostForTopic(topicId, seed.categoryId, seed.userName, seed.avatar, seed.badge);
  }
  
  console.log(`✅ [seedInitialTopics] Created ${topicsCreated} seed topics`);
  return topicsCreated;
}

// Seed initial post for a topic
async function seedInitialPostForTopic(
  topicId: string,
  categoryId: string,
  userName: string,
  avatar: string,
  badge?: string
) {
  const messages: { [key: string]: string } = {
    'juridica': 'Pessoal, vamos usar esse tópico para tirar dúvidas sobre dolo eventual e culpa consciente. Quem tiver casos práticos ou jurisprudência interessante, compartilhe aqui! 📚⚡',
    'policial': 'Guerreiros! Vou compartilhar aqui minha rotina de treino que me ajudou a passar no TAF da PM. Corrida 3x na semana, musculação 2x e sempre alongamento! 💪🔥',
    'conhecimentos-gerais': 'Vou atualizar esse tópico semanalmente com as principais notícias para concursos. Acompanhem e comentem os temas que podem cair! 📰✨',
    'fiscal-bancaria': 'O edital saiu com 699 vagas! Vamos analisar as disciplinas e criar um plano de estudos eficiente. Quem está dentro? 💼🎯',
  };
  
  const postId = `post_seed_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  const post: ForumPost = {
    id: postId,
    topicId,
    userId: `seed_user_${Math.random().toString(36).substr(2, 6)}`,
    userName,
    userAvatar: avatar,
    message: messages[categoryId] || 'Vamos debater sobre esse tema importante!',
    timestamp: new Date().toISOString(),
    badge,
    likes: Math.floor(Math.random() * 15) + 5,
  };
  
  const key = `forum_post:${topicId}:${postId}`;
  await kv.set(key, post);
  
  console.log(`✅ [seedInitialPostForTopic] Initial post created for topic ${topicId}`);
}

// Get all forum categories
export async function getForumCategories(): Promise<ForumCategory[]> {
  const categories = await kv.getByPrefix('forum_cat:');
  return categories.filter(cat => cat && cat.id);
}

// Get topics for a category
export async function getCategoryTopics(categoryId: string): Promise<ForumTopic[]> {
  const prefix = `forum_topic:${categoryId}:`;
  const results = await kv.getByPrefix(prefix);
  
  const topics = results
    .filter(topic => topic && topic.id)
    .sort((a, b) => {
      // Pinned topics first
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      // Then by last activity
      return new Date(b.lastActivity || b.timestamp).getTime() - 
             new Date(a.lastActivity || a.timestamp).getTime();
    });
  
  return topics;
}

// Get posts for a topic
export async function getTopicPosts(topicId: string): Promise<ForumPost[]> {
  const prefix = `forum_post:${topicId}:`;
  const results = await kv.getByPrefix(prefix);
  
  const posts = results
    .filter(post => post && post.id)
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  
  return posts;
}

// Create a new topic
export async function createTopic(
  categoryId: string,
  title: string,
  description: string,
  userId: string,
  userName: string,
  userAvatar: string,
  badge?: string
): Promise<ForumTopic> {
  const topicId = `topic_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const topic: ForumTopic = {
    id: topicId,
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
  
  const key = `forum_topic:${categoryId}:${topicId}`;
  await kv.set(key, topic);
  
  console.log(`✅ [createTopic] Topic created: ${title} in ${categoryId}`);
  
  return topic;
}

// Post a reply to a topic
export async function postReply(
  topicId: string,
  userId: string,
  userName: string,
  userAvatar: string,
  message: string,
  badge?: string
): Promise<ForumPost> {
  const postId = `post_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const post: ForumPost = {
    id: postId,
    topicId,
    userId,
    userName,
    userAvatar,
    message,
    timestamp: new Date().toISOString(),
    badge,
    likes: 0,
  };
  
  const key = `forum_post:${topicId}:${postId}`;
  await kv.set(key, post);
  
  // Update topic's last activity and post count
  const topics = await kv.getByPrefix(`forum_topic:`);
  const topic = topics.find(t => t.id === topicId);
  
  if (topic) {
    topic.lastActivity = new Date().toISOString();
    topic.postCount = (topic.postCount || 0) + 1;
    const topicKey = `forum_topic:${topic.categoryId}:${topicId}`;
    await kv.set(topicKey, topic);
  }
  
  console.log(`✅ [postReply] Reply posted in topic ${topicId} by ${userName}`);
  
  return post;
}

// Edit a post
export async function editPost(
  topicId: string,
  postId: string,
  userId: string,
  newMessage: string
): Promise<ForumPost | null> {
  const key = `forum_post:${topicId}:${postId}`;
  const post = await kv.get(key);
  
  if (!post) {
    console.error(`❌ [editPost] Post not found: ${postId}`);
    return null;
  }
  
  // Verify ownership
  if (post.userId !== userId) {
    console.error(`❌ [editPost] User ${userId} not authorized to edit post ${postId}`);
    return null;
  }
  
  post.message = newMessage;
  post.edited = true;
  post.editedAt = new Date().toISOString();
  
  await kv.set(key, post);
  console.log(`✅ [editPost] Post ${postId} edited by ${userId}`);
  
  return post;
}

// Delete a post
export async function deletePost(
  topicId: string,
  postId: string,
  userId: string
): Promise<boolean> {
  const key = `forum_post:${topicId}:${postId}`;
  const post = await kv.get(key);
  
  if (!post) {
    console.error(`❌ [deletePost] Post not found: ${postId}`);
    return false;
  }
  
  // Verify ownership
  if (post.userId !== userId) {
    console.error(`❌ [deletePost] User ${userId} not authorized to delete post ${postId}`);
    return false;
  }
  
  await kv.del(key);
  
  // Update topic's post count
  const topics = await kv.getByPrefix(`forum_topic:`);
  const topic = topics.find(t => t.id === topicId);
  
  if (topic && topic.postCount && topic.postCount > 0) {
    topic.postCount = topic.postCount - 1;
    const topicKey = `forum_topic:${topic.categoryId}:${topicId}`;
    await kv.set(topicKey, topic);
  }
  
  console.log(`✅ [deletePost] Post ${postId} deleted by ${userId}`);
  
  return true;
}

// Like a post
export async function likePost(topicId: string, postId: string): Promise<number> {
  const key = `forum_post:${topicId}:${postId}`;
  const post = await kv.get(key);
  
  if (!post) return 0;
  
  post.likes = (post.likes || 0) + 1;
  await kv.set(key, post);
  
  return post.likes;
}
