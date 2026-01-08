import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Send, Users, Flame, Zap, Crown, Star, Smile, Image as ImageIcon, Paperclip, Shield, BookOpen, Heart, Target, Trophy, Edit2, Trash2 } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useVisitorLimits } from '../hooks/useVisitorLimits';
import { RegisterIncentiveBanner, CompactRegisterBanner } from './RegisterIncentiveBanner';

interface CommunityChatProps {
  onBack: () => void;
  onRegisterClick?: () => void;
}

interface ChatRoom {
  id: string;
  name: string;
  description: string;
  icon: string;
  gradient: string;
  color: string;
  membersOnline: number;
  lastMessage?: string;
  badge?: string;
}

interface ChatMessage {
  id: string;
  roomId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  message: string;
  timestamp: string;
  badge?: string;
}

interface ChatMember {
  userId: string;
  userName: string;
  userAvatar: string;
  badge?: string;
  online: boolean;
  lastSeen: string;
  joinedAt: string;
}

const iconMap: { [key: string]: any } = {
  Trophy: Trophy,
  Shield: Shield,
  BookOpen: BookOpen,
  Heart: Heart,
  Target: Target,
  Crown: Crown,
};

export function CommunityChat({ onBack, onRegisterClick }: CommunityChatProps) {
  const [rooms, setRooms] = useState<ChatRoom[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<ChatRoom | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [editingMessageId, setEditingMessageId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [showMembersModal, setShowMembersModal] = useState(false);
  const [previewRoom, setPreviewRoom] = useState<ChatRoom | null>(null);
  const [previewMessages, setPreviewMessages] = useState<ChatMessage[]>([]);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [hasNewMessages, setHasNewMessages] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState<ChatMember[]>([]);
  const [onlineCount, setOnlineCount] = useState(0);
  const heartbeatIntervalRef = useRef<number | null>(null);
  
  const { 
    isRegistered, 
    limits, 
    useCommunityMessage, 
    maxLimits 
  } = useVisitorLimits();
  
  const baseUrl = `https://${projectId}.supabase.co/functions/v1/make-server-50734795`;
  
  // Persist userId in localStorage
  const getUserId = () => {
    let userId = localStorage.getItem('quiron_user_id');
    if (!userId) {
      userId = 'user_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('quiron_user_id', userId);
    }
    return userId;
  };
  
  const currentUserId = getUserId();
  const currentUserName = 'Você';
  const currentUserAvatar = '😊';

  // Fetch chat rooms
  const fetchRooms = async () => {
    try {
      console.log('🔍 [Frontend] Fetching rooms from:', `${baseUrl}/community/rooms`);
      const response = await fetch(`${baseUrl}/community/rooms`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      console.log('📡 [Frontend] Response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ [Frontend] Error response:', errorText);
        throw new Error('Failed to fetch rooms');
      }

      const data = await response.json();
      console.log('✅ [Frontend] Rooms data received:', data);
      console.log('📊 [Frontend] Number of rooms:', data.rooms?.length || 0);
      
      if (data.rooms && data.rooms.length > 0) {
        setRooms(data.rooms);
      } else {
        console.log('⚠️ [Frontend] No rooms in response, will retry initialization...');
        // Try initialization if no rooms
        await initializeChat();
      }
    } catch (error) {
      console.error('❌ [Supabase] Error fetching chat rooms:', error);
      alert('Erro ao carregar salas. Por favor, recarregue a página.');
    } finally {
      setIsLoading(false);
    }
  };

  // Initialize chat (seed rooms if needed)
  const initializeChat = async () => {
    try {
      await fetch(`${baseUrl}/community/init`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });
      await fetchRooms();
    } catch (error) {
      console.error('Error initializing chat:', error);
      setIsLoading(false);
    }
  };

  // Force seed messages (manual trigger)
  const forceSeedMessages = async () => {
    try {
      console.log('🌱 [Frontend] Forcing seed messages...');
      alert('🌱 Iniciando seed de mensagens...');
      
      const response = await fetch(`${baseUrl}/community/seed-messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });
      
      console.log('📡 [Frontend] Seed response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log(`✅ [Frontend] Seeded ${data.messagesCreated} messages successfully`);
        alert(`✅ SUCESSO! ${data.messagesCreated} mensagens criadas!`);
        localStorage.setItem('chat_messages_seeded', 'true');
        
        // Refresh current room if selected
        if (selectedRoom) {
          await fetchMessages(selectedRoom.id);
        }
      } else {
        const errorText = await response.text();
        console.error('❌ [Frontend] Failed to seed messages:', errorText);
        alert('❌ ERRO ao criar mensagens: ' + errorText);
      }
    } catch (error) {
      console.error('❌ [Frontend] Error forcing seed:', error);
      alert('❌ ERRO: ' + error.message);
    }
  };

  // Debug: Check KV Store
  const debugKVStore = async () => {
    try {
      console.log('🔍 [Frontend] Checking KV Store...');
      alert('🔍 Verificando KV Store...');
      
      const response = await fetch(`${baseUrl}/community/debug/keys`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
        },
      });
      
      console.log('📡 [Frontend] Debug response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('📊 [Frontend] KV Store Debug:', data);
        
        const message = `📊 KV STORE DEBUG:
        
Salas: ${data.totalRooms}
Mensagens: ${data.totalMessages}

Room Keys: ${data.roomKeys?.join(', ') || 'nenhuma'}

Message Keys (primeiras 5): 
${data.messageKeys?.slice(0, 5).join('\n') || 'nenhuma'}

Veja o console para detalhes completos!`;
        
        alert(message);
      } else {
        const errorText = await response.text();
        console.error('❌ [Frontend] Debug failed:', errorText);
        alert('❌ ERRO: ' + errorText);
      }
    } catch (error) {
      console.error('❌ [Frontend] Error checking KV:', error);
      alert('❌ ERRO: ' + error.message);
    }
  };

  // Fetch messages for a room
  const fetchMessages = async (roomId: string) => {
    try {
      console.log(`📨 [Frontend] Fetching messages for room: ${roomId}`);
      const response = await fetch(`${baseUrl}/community/rooms/${roomId}/messages`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }

      const data = await response.json();
      console.log(`✅ [Frontend] Messages received for ${roomId}:`, data.messages?.length || 0);
      
      if (data.messages && Array.isArray(data.messages)) {
        setMessages(data.messages);
        console.log(`💬 [Frontend] Messages state updated with ${data.messages.length} messages`);
      } else {
        console.warn('⚠️ [Frontend] No messages array in response');
        setMessages([]);
      }
    } catch (error) {
      console.error('❌ [Frontend] Error fetching messages:', error);
      setMessages([]);
    }
  };

  // Post a message
  const postMessage = async (roomId: string, message: string) => {
    try {
      setNewMessage('');
      console.log(`📤 [Frontend] Posting message to room: ${roomId}`);
      
      const response = await fetch(`${baseUrl}/community/rooms/${roomId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: currentUserId,
          userName: currentUserName,
          userAvatar: currentUserAvatar,
          message,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ [Frontend] Error posting message:', errorText);
        throw new Error('Failed to post message');
      }

      const data = await response.json();
      console.log('✅ [Frontend] Message posted successfully:', data.message);
      
      // Add the new message to the list
      setMessages(prev => [...prev, data.message]);
      
      // Force refresh messages to ensure consistency
      setTimeout(() => {
        console.log('🔄 [Frontend] Refreshing messages after post...');
        fetchMessages(roomId);
      }, 500);
    } catch (error) {
      console.error('Error posting message:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  // Edit a message
  const handleEditMessage = async (messageId: string) => {
    if (!editingText.trim() || !selectedRoom) return;
    
    try {
      const response = await fetch(`${baseUrl}/community/rooms/${selectedRoom.id}/messages/${messageId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: currentUserId,
          message: editingText.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to edit message');
      }

      const data = await response.json();
      
      // Update the message in the list
      setMessages(prev => prev.map(msg => 
        msg.id === messageId ? data.message : msg
      ));
      
      setEditingMessageId(null);
      setEditingText('');
    } catch (error) {
      console.error('Error editing message:', error);
      alert('Erro ao editar mensagem. Tente novamente.');
    }
  };

  // Delete a message
  const handleDeleteMessage = async (messageId: string) => {
    if (!selectedRoom) return;
    
    if (!confirm('Deseja realmente apagar esta mensagem?')) return;
    
    try {
      const response = await fetch(`${baseUrl}/community/rooms/${selectedRoom.id}/messages/${messageId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: currentUserId,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete message');
      }

      // Remove the message from the list
      setMessages(prev => prev.filter(msg => msg.id !== messageId));
    } catch (error) {
      console.error('Error deleting message:', error);
      alert('Erro ao apagar mensagem. Tente novamente.');
    }
  };

  // Start editing a message
  const startEditing = (msg: ChatMessage) => {
    setEditingMessageId(msg.id);
    setEditingText(msg.message);
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingMessageId(null);
    setEditingText('');
  };

  // Initialize on mount
  useEffect(() => {
    initializeChat();
    
    // Auto-seed messages if not exists (only once on mount)
    const hasSeeded = localStorage.getItem('chat_messages_seeded');
    if (!hasSeeded) {
      console.log('🌱 [Frontend] No seed flag found, triggering seed...');
      forceSeedMessages();
    }
  }, []);

  // Fetch messages when room is selected
  useEffect(() => {
    if (selectedRoom) {
      fetchMessages(selectedRoom.id);
      setIsAtBottom(true); // Reset when entering room
      
      // Poll for new messages every 3 seconds
      const pollInterval = window.setInterval(() => {
        fetchMessages(selectedRoom.id);
      }, 3000);
      
      return () => {
        clearInterval(pollInterval);
      };
    }
  }, [selectedRoom]);

  // Detect scroll position
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
      
      // Consider "at bottom" if within 100px
      const atBottom = distanceFromBottom < 100;
      setIsAtBottom(atBottom);
      
      // Clear "new messages" indicator if scrolling to bottom
      if (atBottom) {
        setHasNewMessages(false);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [selectedRoom]);

  // Smart auto-scroll: only if user is at bottom
  useEffect(() => {
    if (messages.length === 0) return;
    
    if (isAtBottom) {
      // User is at bottom, auto-scroll
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // User scrolled up, show "new messages" indicator
      setHasNewMessages(true);
    }
  }, [messages, isAtBottom]);

  // Scroll to bottom (manual)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    setIsAtBottom(true);
    setHasNewMessages(false);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedRoom) return;
    
    // Check visitor limits
    if (!isRegistered && limits.communityMessages <= 0) {
      alert('Você atingiu o limite de mensagens como visitante! Cadastre-se gratuitamente para continuar.');
      return;
    }

    // Use one community message
    if (!useCommunityMessage()) {
      alert('Você atingiu o limite de mensagens como visitante! Cadastre-se gratuitamente para continuar.');
      return;
    }
    
    postMessage(selectedRoom.id, newMessage.trim());
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  // Generate random online members for a room
  const generateOnlineMembers = (count: number) => {
    const names = [
      'Guerreiro Silva', 'Concurseira Ana', 'Dr. Santos', 'Sgt. Oliveira', 
      'Delegado Costa', 'Fiscal Mendes', 'Perito Lima', 'Juíza Alves',
      'Analista Pedro', 'Técnica Maria', 'Auditor João', 'Escrivão Carlos',
      'Investigador Paulo', 'Promotor André', 'Defensor Luiz', 'Agente Rafael'
    ];
    const avatars = ['😊', '🚀', '💪', '🔥', '⚡', '👑', '🎯', '🏆', '⚖️', '🎖️', '⭐', '💎', '🦸', '🧠', '📚', '✨'];
    const badges = ['🚔 Policial', '⚖️ Direito', '💖 Apoio', '🎯 Questões', '👑 VIP'];
    
    return Array.from({ length: Math.min(count, names.length) }, (_, i) => ({
      id: `user_${i}`,
      name: names[i],
      avatar: avatars[i],
      badge: badges[Math.floor(Math.random() * badges.length)],
      status: Math.random() > 0.3 ? 'online' : 'away',
    }));
  };

  // Preview a room without entering
  const handlePreviewRoom = async (room: ChatRoom) => {
    try {
      setPreviewRoom(room);
      console.log(`👁️ [Frontend] Previewing room: ${room.id}`);
      
      const response = await fetch(`${baseUrl}/community/rooms/${room.id}/messages`, {
        headers: {
          'Authorization': `Bearer ${publicAnonKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const lastMessages = data.messages?.slice(-10) || []; // Last 10 messages
        setPreviewMessages(lastMessages);
        console.log(`✅ [Frontend] Preview loaded: ${lastMessages.length} messages`);
      }
    } catch (error) {
      console.error('❌ [Frontend] Error previewing room:', error);
    }
  };

  const closePreview = () => {
    setPreviewRoom(null);
    setPreviewMessages([]);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Carregando salas de chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-12">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-gray-600"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-lg">Voltar</span>
        </button>
      </div>

      {!selectedRoom ? (
        // Lista de Salas
        <>
          {/* Visitor Limit Banner */}
          {!isRegistered && (
            limits.communityMessages === 0 ? (
              <RegisterIncentiveBanner 
                onRegisterClick={onRegisterClick || (() => {})}
                limitType="community"
                remainingUses={0}
              />
            ) : limits.communityMessages <= 2 && (
              <CompactRegisterBanner 
                onRegisterClick={onRegisterClick || (() => {})}
                remainingUses={limits.communityMessages}
              />
            )
          )}

          {/* Mensagem Motivacional de Boas-Vindas */}
          <div className="mb-6 p-6 rounded-2xl bg-gradient-to-r from-green-700 via-teal-700 to-cyan-700 shadow-xl border-2 border-green-500/30">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-2xl">
                💬
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-3 flex items-center gap-2">
                  Bem-vindo ao Bate-Papo Quiron! 🏛️
                </h3>
                <p className="text-white/95 leading-relaxed mb-3">
                  Sabe aquela <strong>solidão que bate na vida do estudante de concursos</strong>, aqueles momentos que quer compartilhar angústias, rachar a gasolina para prova, marcar no mesmo hotel em outras cidades? 
                  <span className="text-green-300 font-semibold"> Então, bem-vindo ao bate-papo online da Quiron</span>, onde os anseios e os desafios diários são compartilhados ao vivo, com pessoas iguais a você!
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm flex items-center gap-1.5">
                    💪 Motivação diária
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm flex items-center gap-1.5">
                    🤝 Compartilhe experiências
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm flex items-center gap-1.5">
                    🎯 Dicas de estudos
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm flex items-center gap-1.5">
                    🏆 Conquiste juntos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Título das Salas */}
          <div className="mb-4">
            <h2 className="text-xl flex items-center gap-2">
              <Zap className="w-6 h-6 text-yellow-400" />
              Salas Disponíveis ({rooms.length})
            </h2>
          </div>

          {/* Grid Compacto de Salas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {rooms.map((room) => {
              const RoomIcon = iconMap[room.icon] || Flame;
              return (
                <div
                  key={room.id}
                  onClick={() => setSelectedRoom(room)}
                  className={`group relative p-5 rounded-2xl bg-gradient-to-br ${room.gradient} shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer border border-white/20`}
                >
                  {/* Header compacto */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <RoomIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg mb-1 truncate">{room.name}</h3>
                      {room.badge && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-white/30 backdrop-blur-sm">
                          {room.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Descrição curta */}
                  <p className="text-white/90 text-sm mb-3 line-clamp-2 leading-relaxed">
                    {room.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-white/20">
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/20 backdrop-blur-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-xs">{room.membersOnline} online</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePreviewRoom(room);
                        }}
                        className="px-3 py-1.5 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur-sm text-sm transition-all flex items-center gap-1"
                        title="Espiar sala"
                      >
                        👁️
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-white/30 hover:bg-white/40 backdrop-blur-sm text-sm transition-all">
                        Entrar →
                      </button>
                    </div>
                  </div>

                  {/* Última mensagem (se houver) */}
                  {room.lastMessage && (
                    <div className="mt-3 p-2 rounded-lg bg-black/20 backdrop-blur-sm border border-white/10">
                      <p className="text-xs text-white/60 mb-0.5">💬 Última:</p>
                      <p className="text-xs text-white/90 truncate">{room.lastMessage}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Regras da Comunidade */}
          <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-gray-800 to-gray-700 border-2 border-gray-600">
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <Crown className="w-6 h-6 text-yellow-400" />
              Regras da Comunidade
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span>✅</span>
                </div>
                <div>
                  <p className="text-sm mb-1">Respeite todos os membros</p>
                  <p className="text-xs text-gray-400">Mantenha um ambiente saudável e respeitoso</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <span>✅</span>
                </div>
                <div>
                  <p className="text-sm mb-1">Compartilhe conhecimento</p>
                  <p className="text-xs text-gray-400">Ajude outros concurseiros em suas dúvidas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span>❌</span>
                </div>
                <div>
                  <p className="text-sm mb-1">Sem spam ou propaganda</p>
                  <p className="text-xs text-gray-400">Proibido divulgar produtos sem autorização</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <span>❌</span>
                </div>
                <div>
                  <p className="text-sm mb-1">Sem ofensas ou discriminação</p>
                  <p className="text-xs text-gray-400">Tolerância zero com desrespeito</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        // Área de Chat da Sala Selecionada
        <div className="h-[calc(100vh-140px)] flex flex-col">
          {/* Header da Sala */}
          <div className={`p-6 rounded-t-3xl bg-gradient-to-r ${selectedRoom.gradient} shadow-lg flex-shrink-0`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedRoom(null)}
                  className="w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
                <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl mb-1">{selectedRoom.name}</h2>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-sm text-white/90">{selectedRoom.membersOnline} membros online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowMembersModal(true)}
                className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/20 transition-all flex items-center gap-2"
              >
                <Users className="w-4 h-4" />
                <span className="text-sm">Ver membros</span>
              </button>
            </div>
          </div>

          {/* Área de Mensagens */}
          <div className="flex-1 overflow-y-auto p-6 bg-gray-900 space-y-4 relative" ref={messagesContainerRef}>
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl text-gray-300 mb-2">Nenhuma mensagem ainda</h3>
                <p className="text-gray-500">Seja o primeiro a iniciar a conversa! 🚀</p>
              </div>
            ) : (
              messages.map((msg) => {
                const isCurrentUser = msg.userId === currentUserId;
                const isEditing = editingMessageId === msg.id;
                
                return (
                  <div
                    key={msg.id}
                    className={`group flex items-start gap-3 ${isCurrentUser ? 'flex-row-reverse' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-xl">
                      {msg.userAvatar}
                    </div>
                    <div className={`flex-1 ${isCurrentUser ? 'flex flex-col items-end' : ''}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm ${isCurrentUser ? 'text-purple-400' : 'text-gray-300'}`}>
                          {msg.userName}
                        </span>
                        {msg.badge && (
                          <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300">
                            {msg.badge}
                          </span>
                        )}
                        <span className="text-xs text-gray-500">{formatTimestamp(msg.timestamp)}</span>
                      </div>
                      
                      {isEditing ? (
                        // Edit Mode
                        <div className="w-full max-w-lg">
                          <input
                            type="text"
                            value={editingText}
                            onChange={(e) => setEditingText(e.target.value)}
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                handleEditMessage(msg.id);
                              } else if (e.key === 'Escape') {
                                cancelEditing();
                              }
                            }}
                            className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-purple-500 text-white text-sm focus:outline-none"
                            autoFocus
                          />
                          <div className="flex gap-2 mt-2">
                            <button
                              onClick={() => handleEditMessage(msg.id)}
                              className="px-3 py-1 bg-green-600 hover:bg-green-700 rounded text-xs transition-colors"
                            >
                              Salvar
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="px-3 py-1 bg-gray-600 hover:bg-gray-700 rounded text-xs transition-colors"
                            >
                              Cancelar
                            </button>
                          </div>
                        </div>
                      ) : (
                        // Display Mode
                        <div className="relative group/message">
                          <div
                            className={`px-4 py-3 rounded-2xl max-w-lg ${
                              isCurrentUser
                                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                : 'bg-gray-800 text-gray-100'
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{msg.message}</p>
                          </div>
                          
                          {/* Edit/Delete Buttons - Only for current user's messages */}
                          {isCurrentUser && (
                            <div className={`flex gap-1 mt-1 opacity-0 group-hover/message:opacity-100 transition-opacity ${isCurrentUser ? 'justify-end' : 'justify-start'}`}>
                              <button
                                onClick={() => startEditing(msg)}
                                className="p-1.5 bg-blue-600/80 hover:bg-blue-600 rounded-lg transition-colors"
                                title="Editar mensagem"
                              >
                                <Edit2 className="w-3.5 h-3.5 text-white" />
                              </button>
                              <button
                                onClick={() => handleDeleteMessage(msg.id)}
                                className="p-1.5 bg-red-600/80 hover:bg-red-600 rounded-lg transition-colors"
                                title="Apagar mensagem"
                              >
                                <Trash2 className="w-3.5 h-3.5 text-white" />
                              </button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })
            )}
            <div ref={messagesEndRef} />
            
            {/* Floating Button: New Messages */}
            {hasNewMessages && !isAtBottom && (
              <div className="sticky bottom-4 left-0 right-0 flex justify-center pointer-events-none">
                <button
                  onClick={scrollToBottom}
                  className="px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all flex items-center gap-2 pointer-events-auto animate-bounce"
                >
                  <span className="text-sm">📩 Novas mensagens</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          {/* Input de Mensagem */}
          <div className="p-4 bg-gray-800 rounded-b-3xl border-t border-gray-700">
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-all">
                <Smile className="w-5 h-5 text-gray-300" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-all">
                <ImageIcon className="w-5 h-5 text-gray-300" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-all">
                <Paperclip className="w-5 h-5 text-gray-300" />
              </button>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-3 rounded-2xl bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none text-white placeholder-gray-400 transition-all"
              />
              <button
                onClick={handleSendMessage}
                disabled={!newMessage.trim()}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-lg shadow-purple-500/50"
              >
                {newMessage.trim() ? (
                  <Send className="w-5 h-5 text-white" />
                ) : (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Pressione Enter para enviar • Shift + Enter para nova linha
            </p>
          </div>
        </div>
      )}

      {/* Modal: Espiar Sala */}
      {previewRoom && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border-2 border-purple-500/50">
            {/* Header do Modal */}
            <div className={`p-6 bg-gradient-to-r ${previewRoom.gradient} flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  👁️
                </div>
                <div>
                  <h3 className="text-xl">Espiar Sala</h3>
                  <p className="text-white/80 text-sm">{previewRoom.name}</p>
                </div>
              </div>
              <button
                onClick={closePreview}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </div>

            {/* Últimas Mensagens */}
            <div className="p-6 space-y-3 overflow-y-auto max-h-[50vh]">
              {previewMessages.length === 0 ? (
                <div className="text-center py-10 text-gray-400">
                  <p>Nenhuma mensagem ainda nesta sala</p>
                </div>
              ) : (
                <>
                  <p className="text-sm text-gray-400 mb-4">📜 Últimas 10 mensagens:</p>
                  {previewMessages.map((msg) => (
                    <div key={msg.id} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 text-sm">
                        {msg.userAvatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-gray-300">{msg.userName}</span>
                          {msg.badge && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-300">
                              {msg.badge}
                            </span>
                          )}
                          <span className="text-xs text-gray-500">{formatTimestamp(msg.timestamp)}</span>
                        </div>
                        <div className="px-3 py-2 rounded-lg bg-gray-800 text-sm text-gray-100">
                          {msg.message}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700 flex items-center justify-between">
              <p className="text-sm text-gray-400">
                💡 Entre na sala para participar da conversa!
              </p>
              <div className="flex gap-2">
                <button
                  onClick={closePreview}
                  className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    setSelectedRoom(previewRoom);
                    closePreview();
                  }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all"
                >
                  Entrar na Sala →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal: Ver Membros Online */}
      {showMembersModal && selectedRoom && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden border-2 border-purple-500/50">
            {/* Header do Modal */}
            <div className={`p-6 bg-gradient-to-r ${selectedRoom.gradient} flex items-center justify-between`}>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl">Membros Online</h3>
                  <p className="text-white/80 text-sm">{selectedRoom.name}</p>
                </div>
              </div>
              <button
                onClick={() => setShowMembersModal(false)}
                className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all"
              >
                ✕
              </button>
            </div>

            {/* Lista de Membros */}
            <div className="p-6 space-y-2 overflow-y-auto max-h-[60vh]">
              <p className="text-sm text-gray-400 mb-4">
                👥 {selectedRoom.membersOnline} membros conectados agora:
              </p>
              
              {generateOnlineMembers(selectedRoom.membersOnline).map((member) => (
                <div
                  key={member.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-800 hover:bg-gray-750 transition-all"
                >
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-lg">
                      {member.avatar}
                    </div>
                    <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-gray-800 ${
                      member.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-sm font-medium text-white">{member.name}</p>
                    <p className="text-xs text-gray-400">
                      {member.status === 'online' ? '🟢 Online' : '🟡 Ausente'}
                    </p>
                  </div>
                  
                  {member.badge && (
                    <span className="text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30">
                      {member.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-700 flex justify-end">
              <button
                onClick={() => setShowMembersModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}