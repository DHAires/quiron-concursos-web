import React, { useState, useEffect, useRef } from 'react';
import { Send, Flame, Sparkles, Trash2, Loader2, Settings, Edit2, Check, X, RefreshCw, Info, Download } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { useVisitorLimits } from '../hooks/useVisitorLimits';
import { RegisterIncentiveBanner, CompactRegisterBanner } from './RegisterIncentiveBanner';

interface Message {
  sender: 'user' | 'prometheus';
  text: string;
  timestamp: string;
}

interface PrometheusChatProps {
  onBack?: () => void;
  onRegisterClick?: () => void;
}

export function PrometheusChat({ onBack, onRegisterClick }: PrometheusChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Generate unique conversation ID per device/user
  const getOrCreateConversationId = () => {
    let deviceId = localStorage.getItem('quiron_device_id');
    if (!deviceId) {
      // Create unique ID: timestamp + random string
      deviceId = `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem('quiron_device_id', deviceId);
      console.log('🆔 Created new device ID:', deviceId);
    }
    return deviceId;
  };
  
  const [conversationId] = useState(getOrCreateConversationId());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const settingsMenuRef = useRef<HTMLDivElement>(null);
  
  // Edit message states
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingText, setEditingText] = useState('');
  
  // Settings menu state
  const [showSettingsMenu, setShowSettingsMenu] = useState(false);
  
  const { 
    isRegistered, 
    limits, 
    useAiInteraction, 
    maxLimits 
  } = useVisitorLimits();

  // Load chat history on mount
  useEffect(() => {
    console.log('🔑 Using conversation ID:', conversationId);
    loadChatHistory();
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Close settings menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (settingsMenuRef.current && !settingsMenuRef.current.contains(event.target as Node)) {
        const settingsButton = (event.target as HTMLElement).closest('button');
        if (!settingsButton || settingsButton.title !== 'Configurações') {
          setShowSettingsMenu(false);
        }
      }
    };

    if (showSettingsMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSettingsMenu]);

  const loadChatHistory = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/chat/history/${conversationId}`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.history && data.history.length > 0) {
          setMessages(data.history);
        } else {
          // Welcome message if no history
          setMessages([{
            sender: 'prometheus',
            text: 'Olá, Herói! 🔥 Eu sou Prometheus, sua IA revolucionária! Trouxe o fogo do conhecimento dos deuses para iluminar sua jornada rumo à aprovação em concursos públicos. Como posso ajudá-lo hoje?',
            timestamp: new Date().toISOString(),
          }]);
        }
      }
    } catch (error) {
      console.error('Error loading chat history:', error);
      // Show welcome message on error
      setMessages([{
        sender: 'prometheus',
        text: 'Olá, Herói! 🔥 Eu sou Prometheus, sua IA revolucionária! Trouxe o fogo do conhecimento dos deuses para iluminar sua jornada rumo à aprovação em concursos públicos. Como posso ajudá-lo hoje?',
        timestamp: new Date().toISOString(),
      }]);
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    // Check visitor limits
    if (!isRegistered && limits.aiInteractions <= 0) {
      alert('Você atingiu o limite de interações como visitante! Cadastre-se gratuitamente para continuar.');
      return;
    }

    // Use one AI interaction
    if (!useAiInteraction()) {
      alert('Você atingiu o limite de interações como visitante! Cadastre-se gratuitamente para continuar.');
      return;
    }

    const userMessage = inputText.trim();
    setInputText('');
    setIsLoading(true);

    // Add user message immediately
    const newUserMessage: Message = {
      sender: 'user',
      text: userMessage,
      timestamp: new Date().toISOString(),
    };
    setMessages(prev => [...prev, newUserMessage]);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/chat`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            message: userMessage,
            conversationId: conversationId,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to get response from Prometheus');
      }

      const data = await response.json();

      // Add Prometheus response
      const prometheusMessage: Message = {
        sender: 'prometheus',
        text: data.response,
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, prometheusMessage]);

    } catch (error) {
      console.error('Error sending message:', error);
      // Add error message
      const errorMessage: Message = {
        sender: 'prometheus',
        text: 'Desculpe, herói! Encontrei um problema ao processar sua mensagem. Por favor, tente novamente. 🔥',
        timestamp: new Date().toISOString(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = async () => {
    setShowSettingsMenu(false);
    if (!confirm('Tem certeza que deseja limpar todo o histórico de conversas?')) {
      return;
    }

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-50734795/chat/history/${conversationId}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        setMessages([{
          sender: 'prometheus',
          text: 'Histórico limpo! Vamos começar uma nova jornada épica, herói! 🔥',
          timestamp: new Date().toISOString(),
        }]);
      }
    } catch (error) {
      console.error('Error clearing history:', error);
      alert('Erro ao limpar histórico. Tente novamente.');
    }
  };

  const handleResetConversation = () => {
    setShowSettingsMenu(false);
    if (!confirm('Isso irá criar uma nova conversa e você perderá acesso a esta. Deseja continuar?')) {
      return;
    }
    
    // Remove device ID to force new conversation
    localStorage.removeItem('quiron_device_id');
    console.log('🔄 Device ID reset - reloading...');
    window.location.reload();
  };

  const handleExportChat = () => {
    setShowSettingsMenu(false);
    
    if (messages.length === 0) {
      alert('Não há mensagens para exportar.');
      return;
    }

    // Create text file with conversation
    const chatText = messages.map(msg => {
      const time = new Date(msg.timestamp).toLocaleString('pt-BR');
      const sender = msg.sender === 'user' ? 'Você' : 'Prometheus';
      return `[${time}] ${sender}:\n${msg.text}\n`;
    }).join('\n---\n\n');

    const blob = new Blob([chatText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `prometheus-chat-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShowInfo = () => {
    setShowSettingsMenu(false);
    alert(
      `🔥 Prometheus IA\n\n` +
      `Versão: 1.0.0\n` +
      `ID da Conversa: ${conversationId.substring(0, 20)}...\n\n` +
      `Prometheus é sua IA revolucionária que trouxe o fogo do conhecimento dos deuses para iluminar sua jornada rumo à aprovação em concursos públicos!\n\n` +
      `💡 Dicas:\n` +
      `- Suas conversas são privadas e salvas apenas no seu dispositivo\n` +
      `- Use "Limpar Chat" para apagar o histórico\n` +
      `- Use "Nova Conversa" para começar do zero\n` +
      `- Exporte suas conversas para revisar depois`
    );
  };

  const handleEditMessage = (index: number, text: string) => {
    setEditingIndex(index);
    setEditingText(text);
  };

  const handleSaveEdit = (index: number) => {
    if (!editingText.trim()) return;
    
    const updatedMessages = [...messages];
    updatedMessages[index] = {
      ...updatedMessages[index],
      text: editingText.trim(),
    };
    setMessages(updatedMessages);
    setEditingIndex(null);
    setEditingText('');
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingText('');
  };

  const quickActions = [
    'Como devo estudar para concursos?',
    'Explique Direito Constitucional',
    'Dicas de memorização',
    'Análise meu desempenho',
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-black -mx-4 -my-8 px-4 py-8">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="mb-6 px-6 py-3 rounded-full bg-black/50 hover:bg-black/70 border border-red-500/30 transition-all flex items-center gap-2 backdrop-blur-sm"
        >
          ← Voltar ao Dashboard
        </button>
      )}

      {/* Chat Container */}
      <div className="max-w-5xl mx-auto">
        {/* Visitor Limit Banner */}
        {!isRegistered && (
          limits.aiInteractions === 0 ? (
            <RegisterIncentiveBanner 
              onRegisterClick={onRegisterClick || (() => {})}
              limitType="ai"
              remainingUses={0}
            />
          ) : limits.aiInteractions <= 2 && (
            <CompactRegisterBanner 
              onRegisterClick={onRegisterClick || (() => {})}
              remainingUses={limits.aiInteractions}
            />
          )
        )}

        <div className="rounded-3xl bg-gradient-to-br from-red-900/40 to-red-950/40 shadow-2xl overflow-hidden border-2 border-red-500/50 backdrop-blur-sm">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 p-5 flex items-center justify-between relative">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center relative">
                <Flame className="w-7 h-7 text-white" />
                <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-xl flex items-center gap-2">
                  Prometheus IA <Sparkles className="w-5 h-5 text-yellow-300" />
                </h3>
                <p className="text-xs text-orange-100">Online</p>
              </div>
            </div>
            <div className="relative">
              <button
                className="p-3 rounded-full bg-red-700/50 hover:bg-red-600 transition-all backdrop-blur-sm"
                title="Configurações"
                onClick={() => setShowSettingsMenu(!showSettingsMenu)}
              >
                <Settings className="w-5 h-5" />
              </button>

              {/* Settings Dropdown Menu */}
              {showSettingsMenu && (
                <div 
                  ref={settingsMenuRef}
                  className="fixed md:absolute left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:right-0 top-20 md:top-full mt-0 md:mt-2 w-64 max-w-[calc(100vw-2rem)] bg-gradient-to-br from-red-900 to-red-950 rounded-2xl shadow-2xl border-2 border-red-500/50 overflow-hidden z-50 backdrop-blur-lg"
                >
                  {/* Menu Items */}
                  <div className="p-2">
                    <button
                      onClick={handleClearHistory}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-700/50 transition-all text-left group"
                    >
                      <Trash2 className="w-5 h-5 text-red-400 group-hover:text-red-300" />
                      <div>
                        <p className="font-semibold text-white">Limpar Chat</p>
                        <p className="text-xs text-gray-300">Apagar histórico</p>
                      </div>
                    </button>

                    <button
                      onClick={handleResetConversation}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-orange-700/50 transition-all text-left group"
                    >
                      <RefreshCw className="w-5 h-5 text-orange-400 group-hover:text-orange-300" />
                      <div>
                        <p className="font-semibold text-white">Nova Conversa</p>
                        <p className="text-xs text-gray-300">Começar do zero</p>
                      </div>
                    </button>

                    <button
                      onClick={handleExportChat}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-yellow-700/50 transition-all text-left group"
                    >
                      <Download className="w-5 h-5 text-yellow-400 group-hover:text-yellow-300" />
                      <div>
                        <p className="font-semibold text-white">Exportar Chat</p>
                        <p className="text-xs text-gray-300">Salvar como .txt</p>
                      </div>
                    </button>

                    <div className="border-t border-red-500/30 my-2"></div>

                    <button
                      onClick={handleShowInfo}
                      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-700/50 transition-all text-left group"
                    >
                      <Info className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                      <div>
                        <p className="font-semibold text-white">Sobre</p>
                        <p className="text-xs text-gray-300">Informações</p>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-red-950/60 to-black/60">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} group`}
              >
                <div
                  className={`max-w-[70%] rounded-3xl p-4 shadow-lg relative ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-red-600 to-red-500 text-white'
                      : 'bg-gradient-to-r from-orange-700 to-red-700 text-white border border-orange-500/30'
                  }`}
                >
                  {message.sender === 'prometheus' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Flame className="w-4 h-4" />
                      <span className="text-sm">Prometheus</span>
                    </div>
                  )}
                  
                  {/* Message Content or Edit Mode */}
                  {editingIndex === index ? (
                    <div className="space-y-3">
                      <textarea
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="w-full px-4 py-3 rounded-2xl bg-black/30 border-2 border-yellow-500/50 focus:border-yellow-500 outline-none text-white placeholder-gray-400 resize-none"
                        rows={3}
                        autoFocus
                      />
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => handleSaveEdit(index)}
                          className="px-4 py-2 rounded-xl bg-green-600 hover:bg-green-500 transition-all flex items-center gap-2 text-sm"
                        >
                          <Check className="w-4 h-4" />
                          Salvar
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="px-4 py-2 rounded-xl bg-gray-600 hover:bg-gray-500 transition-all flex items-center gap-2 text-sm"
                        >
                          <X className="w-4 h-4" />
                          Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="whitespace-pre-wrap leading-relaxed">{message.text}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-xs opacity-70">
                          {new Date(message.timestamp).toLocaleTimeString('pt-BR', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </span>
                        
                        {/* Edit Button - Only for user messages */}
                        {message.sender === 'user' && (
                          <button
                            onClick={() => handleEditMessage(index, message.text)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded-lg bg-white/10 hover:bg-white/20 flex items-center gap-1 text-xs"
                            title="Editar mensagem"
                          >
                            <Edit2 className="w-3 h-3" />
                            Editar
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-orange-700 to-red-700 text-white rounded-3xl p-4 flex items-center gap-2 border border-orange-500/30">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Prometheus está pensando...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="border-t-2 border-red-500/50 p-5 bg-gradient-to-r from-red-950/80 to-black/80 backdrop-blur-sm">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !e.shiftKey && handleSendMessage()}
                placeholder="Pergunte ao Prometheus..."
                disabled={isLoading}
                className="flex-1 px-6 py-4 rounded-full bg-black/50 border-2 border-red-500/50 focus:border-red-500 outline-none text-white placeholder-gray-400 disabled:opacity-50 backdrop-blur-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputText.trim()}
                className="px-10 py-4 rounded-full bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-500 hover:to-orange-400 transition-all shadow-xl shadow-red-500/50 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}