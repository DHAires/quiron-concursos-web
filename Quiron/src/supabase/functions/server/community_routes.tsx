import { Hono } from "npm:hono";
import * as kv from "./kv_store.tsx";

const app = new Hono();

// ============= COMMUNITY CHAT ROUTES =============

// Initialize chat rooms
app.post("/make-server-50734795/community/init", async (c) => {
  try {
    console.log('🌱 [COMMUNITY] Initializing chat rooms...');
    
    const rooms = [
      {
        id: 'guerreiros-policia',
        name: '🔥 Guerreiros da Polícia',
        description: 'Base de operações para futuros policiais! Troque experiências sobre concursos policiais, discuta provas, compartilhe técnicas de estudo e preparação física. Unidos somos mais fortes! 💪🚔',
        icon: 'Shield',
        gradient: 'from-red-600 via-red-500 to-orange-600',
        color: 'red',
        badge: '🚔 Policial',
        membersOnline: Math.floor(Math.random() * 50) + 20,
      },
      {
        id: 'arena-juridica',
        name: '⚖️ Arena Jurídica',
        description: 'Sala nobre para debates jurídicos! Discuta jurisprudência, súmulas, casos práticos e tire dúvidas com outros estudantes de direito. O conhecimento jurídico é poder! 📚⚡',
        icon: 'BookOpen',
        gradient: 'from-blue-600 via-blue-500 to-cyan-500',
        color: 'blue',
        badge: '⚖️ Direito',
        membersOnline: Math.floor(Math.random() * 40) + 15,
      },
      {
        id: 'motivacao-guerreiros',
        name: '💪 Motivação dos Guerreiros',
        description: 'Espaço de apoio emocional e motivação! Compartilhe suas vitórias, desabafe nos momentos difíceis, encontre força na comunidade. Juntos somos imbatíveis! 🏆❤️',
        icon: 'Heart',
        gradient: 'from-pink-600 via-pink-500 to-rose-500',
        color: 'pink',
        badge: '💖 Apoio',
        membersOnline: Math.floor(Math.random() * 60) + 30,
      },
      {
        id: 'questoes-desafios',
        name: '🎯 Questões e Desafios',
        description: 'Arena de treinamento intensivo! Resolva questões em grupo, crie desafios, compare resultados e aprenda com os erros. A prática leva à perfeição! 🔥📝',
        icon: 'Target',
        gradient: 'from-purple-600 via-purple-500 to-indigo-500',
        color: 'purple',
        badge: '🎯 Questões',
        membersOnline: Math.floor(Math.random() * 35) + 25,
      },
      {
        id: 'vip-elite',
        name: '👑 Elite VIP',
        description: 'Exclusivo para membros premium! Networking de alto nível, mentorias especializadas, grupos de estudo avançados e conteúdo exclusivo. Welcome to the elite! 💎✨',
        icon: 'Crown',
        gradient: 'from-yellow-600 via-amber-500 to-orange-500',
        color: 'yellow',
        badge: '👑 VIP',
        membersOnline: Math.floor(Math.random() * 15) + 5,
      },
    ];
    
    // Save rooms to KV
    await kv.set('chat_rooms', rooms);
    
    console.log(`✅ [COMMUNITY] Initialized ${rooms.length} chat rooms`);
    
    return c.json({ success: true, roomsCreated: rooms.length });
  } catch (error) {
    console.error('❌ [COMMUNITY] Init error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Get all chat rooms
app.get("/make-server-50734795/community/rooms", async (c) => {
  try {
    console.log('🔍 [COMMUNITY] Fetching chat rooms...');
    
    let rooms = await kv.get('chat_rooms');
    
    // Initialize if no rooms exist
    if (!rooms || !Array.isArray(rooms) || rooms.length === 0) {
      console.log('⚠️ [COMMUNITY] No rooms found, initializing...');
      
      rooms = [
        {
          id: 'guerreiros-policia',
          name: '🔥 Guerreiros da Polícia',
          description: 'Base de operações para futuros policiais! Troque experiências sobre concursos policiais, discuta provas, compartilhe técnicas de estudo e preparação física. Unidos somos mais fortes! 💪🚔',
          icon: 'Shield',
          gradient: 'from-red-600 via-red-500 to-orange-600',
          color: 'red',
          badge: '🚔 Policial',
          membersOnline: Math.floor(Math.random() * 50) + 20,
        },
        {
          id: 'arena-juridica',
          name: '⚖️ Arena Jurídica',
          description: 'Sala nobre para debates jurídicos! Discuta jurisprudência, súmulas, casos práticos e tire dúvidas com outros estudantes de direito. O conhecimento jurídico é poder! 📚⚡',
          icon: 'BookOpen',
          gradient: 'from-blue-600 via-blue-500 to-cyan-500',
          color: 'blue',
          badge: '⚖️ Direito',
          membersOnline: Math.floor(Math.random() * 40) + 15,
        },
        {
          id: 'motivacao-guerreiros',
          name: '💪 Motivação dos Guerreiros',
          description: 'Espaço de apoio emocional e motivação! Compartilhe suas vitórias, desabafe nos momentos difíceis, encontre força na comunidade. Juntos somos imbatíveis! 🏆❤️',
          icon: 'Heart',
          gradient: 'from-pink-600 via-pink-500 to-rose-500',
          color: 'pink',
          badge: '💖 Apoio',
          membersOnline: Math.floor(Math.random() * 60) + 30,
        },
        {
          id: 'questoes-desafios',
          name: '🎯 Questões e Desafios',
          description: 'Arena de treinamento intensivo! Resolva questões em grupo, crie desafios, compare resultados e aprenda com os erros. A prática leva à perfeição! 🔥📝',
          icon: 'Target',
          gradient: 'from-purple-600 via-purple-500 to-indigo-500',
          color: 'purple',
          badge: '🎯 Questões',
          membersOnline: Math.floor(Math.random() * 35) + 25,
        },
        {
          id: 'vip-elite',
          name: '👑 Elite VIP',
          description: 'Exclusivo para membros premium! Networking de alto nível, mentorias especializadas, grupos de estudo avançados e conteúdo exclusivo. Welcome to the elite! 💎✨',
          icon: 'Crown',
          gradient: 'from-yellow-600 via-amber-500 to-orange-500',
          color: 'yellow',
          badge: '👑 VIP',
          membersOnline: Math.floor(Math.random() * 15) + 5,
        },
      ];
      
      await kv.set('chat_rooms', rooms);
      console.log(`✅ [COMMUNITY] Auto-initialized ${rooms.length} rooms`);
    }
    
    console.log(`✅ [COMMUNITY] Returning ${rooms.length} rooms`);
    
    return c.json({ rooms });
  } catch (error) {
    console.error('❌ [COMMUNITY] Fetch rooms error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Get messages for a specific room
app.get("/make-server-50734795/community/rooms/:roomId/messages", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    console.log(`📨 [COMMUNITY] Fetching messages for room: ${roomId}`);
    
    const key = `chat_messages_${roomId}`;
    const messages = await kv.get(key) || [];
    
    console.log(`✅ [COMMUNITY] Found ${messages.length} messages`);
    
    return c.json({ messages });
  } catch (error) {
    console.error('❌ [COMMUNITY] Fetch messages error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Post a message to a room
app.post("/make-server-50734795/community/rooms/:roomId/messages", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const body = await c.req.json();
    const { userId, userName, userAvatar, message } = body;
    
    console.log(`💬 [COMMUNITY] New message in room ${roomId} from ${userName}`);
    
    if (!message || !message.trim()) {
      return c.json({ error: "Message is required" }, 400);
    }
    
    const key = `chat_messages_${roomId}`;
    const messages = await kv.get(key) || [];
    
    const newMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      roomId,
      userId,
      userName,
      userAvatar,
      message: message.trim(),
      timestamp: new Date().toISOString(),
    };
    
    messages.push(newMessage);
    
    // Keep only last 200 messages per room
    const limitedMessages = messages.slice(-200);
    await kv.set(key, limitedMessages);
    
    console.log(`✅ [COMMUNITY] Message posted (total: ${limitedMessages.length})`);
    
    return c.json({ message: newMessage });
  } catch (error) {
    console.error('❌ [COMMUNITY] Post message error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Join a room (add member)
app.post("/make-server-50734795/community/rooms/:roomId/join", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const body = await c.req.json();
    const { userId, userName, userAvatar, badge } = body;
    
    console.log(`👋 [COMMUNITY] User ${userName} joining room ${roomId}`);
    
    const key = `chat_members_${roomId}`;
    let members = await kv.get(key) || [];
    
    // Check if user is already a member
    const existingIndex = members.findIndex((m: any) => m.userId === userId);
    
    const member = {
      userId,
      userName,
      userAvatar,
      badge,
      online: true,
      lastSeen: new Date().toISOString(),
      joinedAt: existingIndex === -1 ? new Date().toISOString() : members[existingIndex].joinedAt,
    };
    
    if (existingIndex !== -1) {
      // Update existing member
      members[existingIndex] = member;
    } else {
      // Add new member
      members.push(member);
    }
    
    await kv.set(key, members);
    
    // Update room's online count
    const rooms = await kv.get('chat_rooms') || [];
    const roomIndex = rooms.findIndex((r: any) => r.id === roomId);
    if (roomIndex !== -1) {
      const onlineCount = members.filter((m: any) => m.online).length;
      rooms[roomIndex].membersOnline = onlineCount;
      await kv.set('chat_rooms', rooms);
    }
    
    console.log(`✅ [COMMUNITY] User joined (total members: ${members.length})`);
    
    return c.json({ member, totalMembers: members.length });
  } catch (error) {
    console.error('❌ [COMMUNITY] Join room error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Leave a room (remove/offline member)
app.post("/make-server-50734795/community/rooms/:roomId/leave", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const body = await c.req.json();
    const { userId } = body;
    
    console.log(`👋 [COMMUNITY] User ${userId} leaving room ${roomId}`);
    
    const key = `chat_members_${roomId}`;
    let members = await kv.get(key) || [];
    
    const memberIndex = members.findIndex((m: any) => m.userId === userId);
    
    if (memberIndex !== -1) {
      // Set member as offline instead of removing
      members[memberIndex].online = false;
      members[memberIndex].lastSeen = new Date().toISOString();
      
      await kv.set(key, members);
      
      // Update room's online count
      const rooms = await kv.get('chat_rooms') || [];
      const roomIndex = rooms.findIndex((r: any) => r.id === roomId);
      if (roomIndex !== -1) {
        const onlineCount = members.filter((m: any) => m.online).length;
        rooms[roomIndex].membersOnline = onlineCount;
        await kv.set('chat_rooms', rooms);
      }
    }
    
    console.log(`✅ [COMMUNITY] User left room`);
    
    return c.json({ success: true });
  } catch (error) {
    console.error('❌ [COMMUNITY] Leave room error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Get members of a room
app.get("/make-server-50734795/community/rooms/:roomId/members", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    console.log(`👥 [COMMUNITY] Fetching members for room ${roomId}`);
    
    const key = `chat_members_${roomId}`;
    let members = await kv.get(key) || [];
    
    // Clean up old offline members (older than 24 hours)
    const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    members = members.filter((m: any) => {
      if (!m.online) {
        const lastSeen = new Date(m.lastSeen);
        return lastSeen > oneDayAgo;
      }
      return true;
    });
    
    await kv.set(key, members);
    
    const onlineMembers = members.filter((m: any) => m.online);
    
    console.log(`✅ [COMMUNITY] Found ${members.length} members (${onlineMembers.length} online)`);
    
    return c.json({ 
      members, 
      totalMembers: members.length,
      onlineCount: onlineMembers.length 
    });
  } catch (error) {
    console.error('❌ [COMMUNITY] Fetch members error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Heartbeat to keep user online
app.post("/make-server-50734795/community/rooms/:roomId/heartbeat", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const body = await c.req.json();
    const { userId } = body;
    
    const key = `chat_members_${roomId}`;
    let members = await kv.get(key) || [];
    
    const memberIndex = members.findIndex((m: any) => m.userId === userId);
    
    if (memberIndex !== -1) {
      members[memberIndex].online = true;
      members[memberIndex].lastSeen = new Date().toISOString();
      await kv.set(key, members);
    }
    
    return c.json({ success: true });
  } catch (error) {
    console.error('❌ [COMMUNITY] Heartbeat error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Edit a message
app.put("/make-server-50734795/community/rooms/:roomId/messages/:messageId", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const messageId = c.req.param("messageId");
    const body = await c.req.json();
    const { userId, message } = body;
    
    console.log(`✏️ [COMMUNITY] Editing message ${messageId} in room ${roomId}`);
    
    const key = `chat_messages_${roomId}`;
    const messages = await kv.get(key) || [];
    
    const messageIndex = messages.findIndex((m: any) => m.id === messageId);
    
    if (messageIndex === -1) {
      return c.json({ error: "Message not found" }, 404);
    }
    
    // Verify ownership
    if (messages[messageIndex].userId !== userId) {
      return c.json({ error: "Unauthorized" }, 403);
    }
    
    messages[messageIndex].message = message.trim();
    messages[messageIndex].edited = true;
    messages[messageIndex].editedAt = new Date().toISOString();
    
    await kv.set(key, messages);
    
    console.log(`✅ [COMMUNITY] Message edited`);
    
    return c.json({ message: messages[messageIndex] });
  } catch (error) {
    console.error('❌ [COMMUNITY] Edit message error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Delete a message
app.delete("/make-server-50734795/community/rooms/:roomId/messages/:messageId", async (c) => {
  try {
    const roomId = c.req.param("roomId");
    const messageId = c.req.param("messageId");
    const body = await c.req.json();
    const { userId } = body;
    
    console.log(`🗑️ [COMMUNITY] Deleting message ${messageId} in room ${roomId}`);
    
    const key = `chat_messages_${roomId}`;
    const messages = await kv.get(key) || [];
    
    const messageIndex = messages.findIndex((m: any) => m.id === messageId);
    
    if (messageIndex === -1) {
      return c.json({ error: "Message not found" }, 404);
    }
    
    // Verify ownership
    if (messages[messageIndex].userId !== userId) {
      return c.json({ error: "Unauthorized" }, 403);
    }
    
    messages.splice(messageIndex, 1);
    
    await kv.set(key, messages);
    
    console.log(`✅ [COMMUNITY] Message deleted`);
    
    return c.json({ success: true });
  } catch (error) {
    console.error('❌ [COMMUNITY] Delete message error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Seed messages (for testing)
app.post("/make-server-50734795/community/seed-messages", async (c) => {
  try {
    console.log('🌱 [COMMUNITY] Seeding messages...');
    
    const rooms = await kv.get('chat_rooms') || [];
    
    if (rooms.length === 0) {
      return c.json({ error: "No rooms found. Initialize rooms first." }, 400);
    }
    
    let totalMessages = 0;
    
    for (const room of rooms as any[]) {
      const messages = [
        {
          id: `msg_${Date.now()}_1`,
          roomId: room.id,
          userId: 'user_seed_1',
          userName: 'Guerreiro Silva',
          userAvatar: '💪',
          message: `Olá pessoal! Alguém estudando para ${room.name.split(' ').slice(1).join(' ')}?`,
          timestamp: new Date(Date.now() - 3600000).toISOString(),
        },
        {
          id: `msg_${Date.now()}_2`,
          roomId: room.id,
          userId: 'user_seed_2',
          userName: 'Ana Concurseira',
          userAvatar: '📚',
          message: 'Sim! Estou focando nessa área. Alguém tem dicas de material?',
          timestamp: new Date(Date.now() - 3000000).toISOString(),
        },
        {
          id: `msg_${Date.now()}_3`,
          roomId: room.id,
          userId: 'user_seed_3',
          userName: 'João Aprovado',
          userAvatar: '🏆',
          message: 'Pessoal, acabei de passar! Se precisarem de ajuda, estou aqui! 💪',
          timestamp: new Date(Date.now() - 1800000).toISOString(),
        },
      ];
      
      const key = `chat_messages_${room.id}`;
      await kv.set(key, messages);
      totalMessages += messages.length;
      
      console.log(`✅ Seeded ${messages.length} messages for ${room.name}`);
    }
    
    console.log(`✅ [COMMUNITY] Seeded ${totalMessages} messages across ${rooms.length} rooms`);
    
    return c.json({ success: true, messagesCreated: totalMessages, roomsCount: rooms.length });
  } catch (error) {
    console.error('❌ [COMMUNITY] Seed messages error:', error);
    return c.json({ error: error.message }, 500);
  }
});

// Debug: Check KV store
app.get("/make-server-50734795/community/debug/keys", async (c) => {
  try {
    console.log('🔍 [COMMUNITY] Debugging KV store...');
    
    const rooms = await kv.get('chat_rooms') || [];
    const messageKeys = await kv.getByPrefix('chat_messages_');
    
    const roomKeys = Array.isArray(rooms) ? rooms.map((r: any) => r.id) : [];
    const msgKeys = messageKeys ? messageKeys.map((m: any) => m.id) : [];
    
    const totalMessages = messageKeys ? messageKeys.reduce((sum: number, m: any) => {
      return sum + (Array.isArray(m.value) ? m.value.length : 0);
    }, 0) : 0;
    
    console.log(`📊 Rooms: ${roomKeys.length}, Message keys: ${msgKeys.length}, Total messages: ${totalMessages}`);
    
    return c.json({
      totalRooms: roomKeys.length,
      totalMessages,
      roomKeys,
      messageKeys: msgKeys,
    });
  } catch (error) {
    console.error('❌ [COMMUNITY] Debug error:', error);
    return c.json({ error: error.message }, 500);
  }
});

export default app;