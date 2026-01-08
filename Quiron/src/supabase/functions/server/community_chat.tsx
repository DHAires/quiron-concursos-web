// Community Chat utilities for Supabase KV Store
import * as kv from './kv_store.tsx';

export interface ChatMessage {
  id: string;
  roomId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  message: string;
  timestamp: string;
  badge?: string;
  edited?: boolean;
  editedAt?: string;
}

export interface ChatRoom {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  color: string;
  badge?: string;
}

// Initialize default chat rooms
export async function initializeChatRooms() {
  const rooms: ChatRoom[] = [
    {
      id: 'guerreiros-policia',
      name: '🔥 Guerreiros da Polícia',
      description: 'Base de operações para futuros policiais! Troque experiências sobre concursos policiais, discuta provas, compartilhe técnicas de estudo e preparação física. Unidos somos mais fortes! 💪🚔',
      icon: 'Shield',
      gradient: 'from-red-600 via-red-500 to-orange-600',
      color: 'red',
      badge: '🚔 Policial',
    },
    {
      id: 'arena-juridica',
      name: '⚖️ Arena Jurídica',
      description: 'Sala nobre para debates jurídicos! Discuta jurisprudência, súmulas, casos práticos e tire dúvidas com outros estudantes de direito. O conhecimento jurídico é poder! 📚⚡',
      icon: 'BookOpen',
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      color: 'blue',
      badge: '⚖️ Direito',
    },
    {
      id: 'motivacao-guerreiros',
      name: '💪 Motivação dos Guerreiros',
      description: 'Seu refúgio para renovar as energias! Compartilhe vitórias diárias, desabafe nos dias difíceis, motive e seja motivado. Ninguém vence sozinho - juntos somos invencíveis! 🌟❤️',
      icon: 'Heart',
      gradient: 'from-pink-500 via-rose-500 to-red-500',
      color: 'pink',
      badge: '💖 Apoio',
    },
    {
      id: 'questoes-treino',
      name: '🎯 Arena de Questões',
      description: 'Resolva questões em grupo e aprenda com outros concurseiros! Compartilhe questões difíceis, discuta gabaritos polêmicos e desenvolva seu raciocínio. Treino intenso para vitória garantida! 💡📝',
      icon: 'Target',
      gradient: 'from-green-600 via-emerald-500 to-teal-500',
      color: 'green',
      badge: '🎯 Questões',
    },
  ];

  for (const room of rooms) {
    await kv.set(`chat_room:${room.id}`, room);
  }

  console.log('✅ [initializeChatRooms] Created 4 chat rooms');
  
  // Seed initial messages for each room
  await seedInitialMessages();
  
  return rooms;
}

// Seed initial messages for all rooms
export async function seedInitialMessages() {
  console.log('🌱 [seedInitialMessages] Starting to seed messages...');
  
  const seedData = [
    // Guerreiros da Polícia
    { roomId: 'guerreiros-policia', userName: 'Sgt. Silva', avatar: '👮', message: 'Bom dia guerreiros! Acabei de fazer a prova da PM-SP. Questões estavam bem elaboradas!', badge: '🚔 Policial' },
    { roomId: 'guerreiros-policia', userName: 'Cap. Rodrigues', avatar: '🎖️', message: 'Alguém tem dicas para a prova física? Estou focando em corrida e flexões.', badge: '🚔 Policial' },
    { roomId: 'guerreiros-policia', userName: 'Cabo Mendes', avatar: '⭐', message: 'O edital da PRF saiu! 1.500 vagas! Vamos com tudo! 🔥', badge: '🚔 Policial' },
    
    // Arena Jurídica
    { roomId: 'arena-juridica', userName: 'Dr. Oliveira', avatar: '⚖️', message: 'Alguém pode me ajudar com a diferença entre dolo eventual e culpa consciente?', badge: '⚖️ Direito' },
    { roomId: 'arena-juridica', userName: 'Dra. Costa', avatar: '📚', message: 'Acabei de estudar jurisprudência do STF sobre direitos fundamentais. Material incrível!', badge: '⚖️ Direito' },
    { roomId: 'arena-juridica', userName: 'Juiz Santos', avatar: '👨‍⚖️', message: 'Dica: foquem nas súmulas vinculantes! Caem muito em provas!', badge: '⚖️ Direito' },
    
    // Motivação dos Guerreiros
    { roomId: 'motivacao-guerreiros', userName: 'Guerreiro123', avatar: '💪', message: 'Estudei 8 horas hoje! Exausto mas feliz! Cada dia é um passo mais perto! 🌟', badge: '💖 Apoio' },
    { roomId: 'motivacao-guerreiros', userName: 'FocoTotal', avatar: '🎯', message: 'Não desista nos dias difíceis! A aprovação vem para quem persiste! 🔥', badge: '💖 Apoio' },
    { roomId: 'motivacao-guerreiros', userName: 'VitóriaEmBreve', avatar: '✨', message: 'Minha vez está chegando! Acreditem em vocês, guerreiros! 💫', badge: '💖 Apoio' },
    
    // Arena de Questões
    { roomId: 'questoes-treino', userName: 'QuestoesNinja', avatar: '🥷', message: 'Resolvi 200 questões de Raciocínio Lógico hoje! Dica: façam simulados!', badge: '🎯 Questões' },
    { roomId: 'questoes-treino', userName: 'MestreQuestoes', avatar: '🧙', message: 'Questão interessante: Em uma PA de 5 termos, a1=3 e a5=19. Qual é a3?', badge: '🎯 Questões' },
    { roomId: 'questoes-treino', userName: 'ExpertPortugues', avatar: '📝', message: 'Resposta: a3 = 11! Banca adora progressões aritméticas!', badge: '🎯 Questões' },
  ];
  
  let messagesCreated = 0;
  
  for (const seed of seedData) {
    const messageId = `seed_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const message: ChatMessage = {
      id: messageId,
      roomId: seed.roomId,
      userId: `seed_user_${Math.random().toString(36).substr(2, 6)}`,
      userName: seed.userName,
      userAvatar: seed.avatar,
      message: seed.message,
      timestamp: new Date(Date.now() - Math.random() * 3600000).toISOString(), // Random time within last hour
      badge: seed.badge,
    };
    
    const key = `chat_msg:${seed.roomId}:${messageId}`;
    console.log(`💾 [seedInitialMessages] Saving message ${messagesCreated + 1}/12 to key: ${key}`);
    
    await kv.set(key, message);
    messagesCreated++;
    
    console.log(`✅ [seedInitialMessages] Message saved: ${message.userName} in ${seed.roomId}`);
  }
  
  console.log(`✅ [seedInitialMessages] Created ${messagesCreated} seed messages across all rooms`);
  return messagesCreated;
}

// Get all chat rooms
export async function getChatRooms(): Promise<ChatRoom[]> {
  console.log('🔍 [getChatRooms] Fetching rooms from KV...');
  const rooms = await kv.getByPrefix('chat_room:');
  console.log('📊 [getChatRooms] Raw KV response:', rooms.length, 'items');
  
  if (rooms.length === 0) {
    console.log('⚠️ [getChatRooms] No rooms found, returning empty array');
    return [];
  }
  
  console.log('🔧 [getChatRooms] First item:', JSON.stringify(rooms[0]).substring(0, 200));
  
  // kv.getByPrefix already returns just the values, not {key, value} objects
  const validRooms = rooms.filter(room => room && room.id);
  
  console.log('✅ [getChatRooms] Returning', validRooms.length, 'valid rooms');
  return validRooms;
}

// Get messages for a room
export async function getRoomMessages(roomId: string): Promise<ChatMessage[]> {
  console.log(`📨 [getRoomMessages] Fetching messages for room: ${roomId}`);
  
  const prefix = `chat_msg:${roomId}:`;
  console.log(`🔑 [getRoomMessages] Using prefix: ${prefix}`);
  
  const results = await kv.getByPrefix(prefix);
  console.log(`📊 [getRoomMessages] Raw results from KV:`, results.length);
  
  // kv.getByPrefix already returns just the values, not {key, value} objects
  const messages = results
    .filter(msg => msg && msg.id)  // Filter out invalid messages
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
  
  console.log(`✅ [getRoomMessages] Returning ${messages.length} valid messages`);
  
  return messages;
}

// Post a message to a room
export async function postMessage(
  roomId: string,
  userId: string,
  userName: string,
  userAvatar: string,
  message: string,
  badge?: string
): Promise<ChatMessage> {
  const messageId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  const chatMessage: ChatMessage = {
    id: messageId,
    roomId,
    userId,
    userName,
    userAvatar,
    message,
    timestamp: new Date().toISOString(),
    badge,
  };
  
  const key = `chat_msg:${roomId}:${messageId}`;
  console.log(`💾 [postMessage] Saving message with key: ${key}`);
  console.log(`💾 [postMessage] Message data:`, JSON.stringify(chatMessage));
  
  await kv.set(key, chatMessage);
  
  // Verify it was saved
  const verification = await kv.get(key);
  if (verification) {
    console.log(`✅ [postMessage] VERIFIED: Message saved successfully in KV store`);
    console.log(`✅ [postMessage] Verified data:`, JSON.stringify(verification));
  } else {
    console.error(`❌ [postMessage] VERIFICATION FAILED: Message NOT found in KV after save!`);
  }
  
  console.log(`✅ [postMessage] Message posted in room ${roomId} by ${userName}`);
  
  return chatMessage;
}

// Edit a message
export async function editMessage(
  roomId: string,
  messageId: string,
  userId: string,
  newMessage: string
): Promise<ChatMessage | null> {
  const key = `chat_msg:${roomId}:${messageId}`;
  const chatMessage = await kv.get(key);
  
  if (!chatMessage) {
    console.error(`❌ [editMessage] Message not found: ${messageId}`);
    return null;
  }
  
  // Verify ownership
  if (chatMessage.userId !== userId) {
    console.error(`❌ [editMessage] User ${userId} not authorized to edit message ${messageId}`);
    return null;
  }
  
  // Update the message
  chatMessage.message = newMessage;
  chatMessage.edited = true;
  chatMessage.editedAt = new Date().toISOString();
  
  await kv.set(key, chatMessage);
  console.log(`✅ [editMessage] Message ${messageId} edited by ${userId}`);
  
  return chatMessage;
}

// Delete a message
export async function deleteMessage(
  roomId: string,
  messageId: string,
  userId: string
): Promise<boolean> {
  const key = `chat_msg:${roomId}:${messageId}`;
  const chatMessage = await kv.get(key);
  
  if (!chatMessage) {
    console.error(`❌ [deleteMessage] Message not found: ${messageId}`);
    return false;
  }
  
  // Verify ownership
  if (chatMessage.userId !== userId) {
    console.error(`❌ [deleteMessage] User ${userId} not authorized to delete message ${messageId}`);
    return false;
  }
  
  await kv.del(key);
  console.log(`✅ [deleteMessage] Message ${messageId} deleted by ${userId}`);
  
  return true;
}

// Get online users count for a room (simulated for now)
export function getOnlineUsersCount(roomId: string): number {
  const counts: { [key: string]: number } = {
    'guerreiros-policia': 892,
    'arena-juridica': 734,
    'motivacao-guerreiros': 1056,
    'questoes-treino': 678,
  };
  
  return counts[roomId] || 150;
}

// Get last message for a room
export async function getLastMessage(roomId: string): Promise<string | null> {
  const messages = await getRoomMessages(roomId);
  
  if (messages.length === 0) return null;
  
  const lastMsg = messages[messages.length - 1];
  return lastMsg?.message || null;
}