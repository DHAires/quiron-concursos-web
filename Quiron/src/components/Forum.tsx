import React, { useState, useEffect } from 'react';
import { MessageCircle, Pin, Clock, User, Edit2, Trash2, ThumbsUp, Send, ArrowLeft, Plus, X, Eye, Crown, CheckCircle, XCircle } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { forumCategories, initialForumTopics, initialForumPosts, ForumCategory, ForumTopic, ForumPost } from '../data/forumTopics';

const API_BASE = `https://${projectId}.supabase.co/functions/v1/make-server-50734795`;

export function Forum({ onBack }: { onBack?: () => void }) {
  const [categories, setCategories] = useState<ForumCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<ForumCategory | null>(null);
  const [topics, setTopics] = useState<ForumTopic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<ForumTopic | null>(null);
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [newReply, setNewReply] = useState('');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editingText, setEditingText] = useState('');
  const [showNewTopicModal, setShowNewTopicModal] = useState(false);
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicDescription, setNewTopicDescription] = useState('');
  const [showEditTopicModal, setShowEditTopicModal] = useState(false);
  const [editingTopicId, setEditingTopicId] = useState<string | null>(null);
  const [editTopicTitle, setEditTopicTitle] = useState('');
  const [editTopicDescription, setEditTopicDescription] = useState('');

  // Mock user
  const currentUser = {
    id: 'user_123',
    name: 'Guerreiro Anônimo',
    avatar: '⚔️',
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      loadTopics(selectedCategory.id);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (selectedTopic) {
      loadPosts(selectedTopic.id);
    }
  }, [selectedTopic]);

  const loadCategories = async () => {
    try {
      setLoading(true);
      // Try to load from API first
      const response = await fetch(`${API_BASE}/forum/categories`, {
        headers: { Authorization: `Bearer ${publicAnonKey}` },
      });
      
      if (response.ok) {
        const data = await response.json();
        setCategories(data.categories || forumCategories);
      } else {
        // Fallback to initial data
        setCategories(forumCategories);
      }
    } catch (error) {
      console.error('Error loading categories, using fallback:', error);
      // Use initial data as fallback
      setCategories(forumCategories);
    } finally {
      setLoading(false);
    }
  };

  const loadTopics = async (categoryId: string) => {
    try {
      setLoading(true);
      console.log('🔍 [FORUM] Loading topics for category:', categoryId);
      
      const response = await fetch(`${API_BASE}/forum/categories/${categoryId}/topics`, {
        headers: { Authorization: `Bearer ${publicAnonKey}` },
      });
      
      console.log('📡 [FORUM] Response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ [FORUM] Loaded topics from server:', data.topics?.length || 0, 'topics');
        console.log('📋 [FORUM] Topics data:', data.topics);
        setTopics(data.topics || initialForumTopics.filter(t => t.categoryId === categoryId));
      } else {
        console.warn('⚠️ [FORUM] Server response not OK, using fallback data');
        // Fallback to initial data
        setTopics(initialForumTopics.filter(t => t.categoryId === categoryId));
      }
    } catch (error) {
      console.error('❌ [FORUM] Error loading topics, using fallback:', error);
      // Use initial data as fallback
      setTopics(initialForumTopics.filter(t => t.categoryId === categoryId));
    } finally {
      setLoading(false);
    }
  };

  const loadPosts = async (topicId: string) => {
    try {
      setLoading(true);
      console.log('📨 [FORUM] Loading posts for topic:', topicId);
      
      const response = await fetch(`${API_BASE}/forum/topics/${topicId}/posts`, {
        headers: { Authorization: `Bearer ${publicAnonKey}` },
      });
      
      console.log('📡 [FORUM] Posts response status:', response.status);
      
      if (response.ok) {
        const data = await response.json();
        console.log('✅ [FORUM] Loaded posts from server:', data.posts?.length || 0, 'posts');
        console.log('📋 [FORUM] Posts data:', data.posts);
        setPosts(data.posts || initialForumPosts[topicId] || []);
      } else {
        console.warn('⚠️ [FORUM] Server response not OK for posts, using fallback data');
        // Fallback to initial data
        setPosts(initialForumPosts[topicId] || []);
      }
    } catch (error) {
      console.error('❌ [FORUM] Error loading posts, using fallback:', error);
      // Use initial data as fallback
      setPosts(initialForumPosts[topicId] || []);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTopic = async () => {
    if (!newTopicTitle.trim() || !newTopicDescription.trim() || !selectedCategory) return;

    try {
      const response = await fetch(`${API_BASE}/forum/categories/${selectedCategory.id}/topics`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          userId: currentUser.id,
          userName: currentUser.name,
          userAvatar: currentUser.avatar,
          title: newTopicTitle,
          description: newTopicDescription,
          badge: selectedCategory.badge,
        }),
      });

      if (response.ok) {
        setNewTopicTitle('');
        setNewTopicDescription('');
        setShowNewTopicModal(false);
        loadTopics(selectedCategory.id);
      }
    } catch (error) {
      console.error('Error creating topic:', error);
    }
  };

  const handleEditTopic = async () => {
    if (!editTopicTitle.trim() || !editTopicDescription.trim() || !selectedCategory || !editingTopicId) return;

    try {
      const response = await fetch(`${API_BASE}/forum/categories/${selectedCategory.id}/topics/${editingTopicId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          userId: currentUser.id,
          title: editTopicTitle,
          description: editTopicDescription,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('✅ Tópico editado com sucesso!');
        setEditTopicTitle('');
        setEditTopicDescription('');
        setShowEditTopicModal(false);
        setEditingTopicId(null);
        loadTopics(selectedCategory.id);
      } else {
        console.error('❌ Erro ao editar tópico:', data.error);
        alert(`Erro ao editar tópico: ${data.error || 'Erro desconhecido'}`);
      }
    } catch (error) {
      console.error('❌ Erro na requisição ao editar tópico:', error);
      alert('Erro ao editar tópico. Verifique sua conexão.');
    }
  };

  const handleDeleteTopic = async (topicId: string) => {
    if (!selectedCategory) return;
    if (!confirm('Tem certeza que deseja excluir este tópico? Todas as respostas serão perdidas!')) return;

    try {
      const response = await fetch(`${API_BASE}/forum/categories/${selectedCategory.id}/topics/${topicId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          userId: currentUser.id,
        }),
      });

      if (response.ok) {
        loadTopics(selectedCategory.id);
      }
    } catch (error) {
      console.error('Error deleting topic:', error);
    }
  };

  const handlePostReply = async () => {
    if (!newReply.trim() || !selectedTopic) return;

    try {
      const response = await fetch(`${API_BASE}/forum/topics/${selectedTopic.id}/posts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          userId: currentUser.id,
          userName: currentUser.name,
          userAvatar: currentUser.avatar,
          message: newReply,
          badge: selectedTopic.badge,
        }),
      });

      if (response.ok) {
        setNewReply('');
        loadPosts(selectedTopic.id);
      }
    } catch (error) {
      console.error('Error posting reply:', error);
    }
  };

  const handleEditPost = async (postId: string) => {
    if (!editingText.trim() || !selectedTopic) return;

    try {
      const response = await fetch(`${API_BASE}/forum/topics/${selectedTopic.id}/posts/${postId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          userId: currentUser.id,
          message: editingText,
        }),
      });

      if (response.ok) {
        setEditingPostId(null);
        setEditingText('');
        loadPosts(selectedTopic.id);
      }
    } catch (error) {
      console.error('Error editing post:', error);
    }
  };

  const handleDeletePost = async (postId: string) => {
    if (!selectedTopic) return;
    if (!confirm('Tem certeza que deseja excluir esta mensagem?')) return;

    try {
      const response = await fetch(`${API_BASE}/forum/topics/${selectedTopic.id}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          userId: currentUser.id,
        }),
      });

      if (response.ok) {
        loadPosts(selectedTopic.id);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleLikePost = async (postId: string) => {
    if (!selectedTopic) return;

    try {
      const response = await fetch(`${API_BASE}/forum/topics/${selectedTopic.id}/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
      });

      if (response.ok) {
        loadPosts(selectedTopic.id);
      }
    } catch (error) {
      console.error('Error liking post:', error);
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days}d atrás`;
    if (hours > 0) return `${hours}h atrás`;
    return 'Agora';
  };

  if (loading && categories.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando fórum...</p>
        </div>
      </div>
    );
  }

  // View: Topic Posts
  if (selectedTopic && selectedCategory) {
    return (
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className={`bg-gradient-to-r ${selectedCategory.gradient} p-6 shadow-xl border-b-4 border-${selectedCategory.color}-600/30`}>
          <button
            onClick={() => setSelectedTopic(null)}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para tópicos
          </button>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-2xl">
              {selectedTopic.userAvatar}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                {selectedTopic.pinned && <Pin className="w-5 h-5 text-yellow-300" />}
                <h2 className="text-2xl">{selectedTopic.title}</h2>
              </div>
              <p className="text-white/90 mb-3">{selectedTopic.description}</p>
              <div className="flex items-center gap-4 text-sm text-white/80">
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {selectedTopic.userName}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {formatTimestamp(selectedTopic.timestamp)}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  {posts.length} respostas
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border-2 border-gray-700/30 hover:border-gray-600/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-xl">
                  {post.userAvatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <span>{post.userName}</span>
                      {post.badge && (
                        <span className="px-2 py-1 rounded-lg bg-white/10 text-xs">
                          {post.badge}
                        </span>
                      )}
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {formatTimestamp(post.timestamp)}
                        {post.edited && <span className="text-xs">(editado)</span>}
                      </span>
                    </div>

                    {post.userId === currentUser.id && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setEditingPostId(post.id);
                            setEditingText(post.message);
                          }}
                          className="p-2 rounded-lg hover:bg-blue-600/20 text-blue-400 transition-colors"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-2 rounded-lg hover:bg-red-600/20 text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>

                  {editingPostId === post.id ? (
                    <div className="space-y-2">
                      <textarea
                        value={editingText}
                        onChange={(e) => setEditingText(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
                        rows={3}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditPost(post.id)}
                          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
                        >
                          Salvar
                        </button>
                        <button
                          onClick={() => {
                            setEditingPostId(null);
                            setEditingText('');
                          }}
                          className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-700 transition-colors"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-gray-200 mb-3 leading-relaxed whitespace-pre-wrap">
                        {post.message}
                      </p>
                      <button
                        onClick={() => handleLikePost(post.id)}
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-pink-400 transition-colors"
                      >
                        <ThumbsUp className="w-4 h-4" />
                        <span>{post.likes || 0}</span>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reply Input */}
        <div className="p-6 bg-gradient-to-br from-gray-800/80 to-gray-900/80 border-t-2 border-gray-700/50">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-xl">
              {currentUser.avatar}
            </div>
            <div className="flex-1">
              <textarea
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                placeholder="Escreva sua resposta..."
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-gray-700 focus:border-purple-500 focus:outline-none resize-none mb-2"
                rows={3}
              />
              <button
                onClick={handlePostReply}
                disabled={!newReply.trim()}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar Resposta
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // View: Topics List
  if (selectedCategory) {
    return (
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className={`bg-gradient-to-r ${selectedCategory.gradient} p-6 shadow-xl border-b-4 border-${selectedCategory.color}-600/30`}>
          <button
            onClick={() => setSelectedCategory(null)}
            className="flex items-center gap-2 text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para categorias
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl mb-2">{selectedCategory.name}</h2>
              <p className="text-white/90">{selectedCategory.description}</p>
            </div>
            <button
              onClick={() => setShowNewTopicModal(true)}
              className="px-6 py-3 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all flex items-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Novo Tópico
            </button>
          </div>
        </div>

        {/* Topics */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border-2 border-gray-700/30 hover:border-gray-600/50 transition-all"
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => setSelectedTopic(topic)}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0 text-2xl hover:scale-105 transition-transform"
                  >
                    {topic.userAvatar}
                  </button>
                  <div className="flex-1">
                    <button
                      onClick={() => setSelectedTopic(topic)}
                      className="w-full text-left"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {topic.pinned && <Pin className="w-5 h-5 text-yellow-400" />}
                        <h3 className="text-xl hover:text-purple-400 transition-colors">{topic.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-3 line-clamp-2">{topic.description}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {topic.userName}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {topic.postCount || 0} respostas
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {formatTimestamp(topic.lastActivity || topic.timestamp)}
                        </span>
                      </div>
                    </button>
                    
                    {/* Edit and Delete buttons for topic owner */}
                    {topic.userId === currentUser.id && (
                      <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-700/50">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setEditingTopicId(topic.id);
                            setEditTopicTitle(topic.title);
                            setEditTopicDescription(topic.description);
                            setShowEditTopicModal(true);
                          }}
                          className="px-4 py-2 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 transition-colors flex items-center gap-2"
                        >
                          <Edit2 className="w-4 h-4" />
                          <span>Editar Tópico</span>
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDeleteTopic(topic.id);
                          }}
                          className="px-4 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 transition-colors flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          <span>Excluir Tópico</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* New Topic Modal */}
        {showNewTopicModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 max-w-2xl w-full border-2 border-gray-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl">Criar Novo Tópico</h3>
                <button
                  onClick={() => setShowNewTopicModal(false)}
                  className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm text-gray-400">Título do Tópico</label>
                  <input
                    type="text"
                    value={newTopicTitle}
                    onChange={(e) => setNewTopicTitle(e.target.value)}
                    placeholder="Ex: Como estudar Direito Constitucional?"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-gray-700 focus:border-purple-500 focus:outline-none"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-400">Descrição</label>
                  <textarea
                    value={newTopicDescription}
                    onChange={(e) => setNewTopicDescription(e.target.value)}
                    placeholder="Descreva seu tópico ou dúvida..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-gray-700 focus:border-purple-500 focus:outline-none resize-none"
                    rows={5}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleCreateTopic}
                    disabled={!newTopicTitle.trim() || !newTopicDescription.trim()}
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Criar Tópico
                  </button>
                  <button
                    onClick={() => setShowNewTopicModal(false)}
                    className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Edit Topic Modal */}
        {showEditTopicModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 max-w-2xl w-full border-2 border-gray-700/50 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl">Editar Tópico</h3>
                <button
                  onClick={() => {
                    setShowEditTopicModal(false);
                    setEditingTopicId(null);
                    setEditTopicTitle('');
                    setEditTopicDescription('');
                  }}
                  className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm text-gray-400">Título do Tópico</label>
                  <input
                    type="text"
                    value={editTopicTitle}
                    onChange={(e) => setEditTopicTitle(e.target.value)}
                    placeholder="Ex: Como estudar Direito Constitucional?"
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-gray-700 focus:border-blue-500 focus:outline-none"
                    maxLength={100}
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-400">Descrição</label>
                  <textarea
                    value={editTopicDescription}
                    onChange={(e) => setEditTopicDescription(e.target.value)}
                    placeholder="Descreva seu tópico ou dúvida..."
                    className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-gray-700 focus:border-blue-500 focus:outline-none resize-none"
                    rows={5}
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    onClick={handleEditTopic}
                    disabled={!editTopicTitle.trim() || !editTopicDescription.trim()}
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                  >
                    Salvar Alterações
                  </button>
                  <button
                    onClick={() => {
                      setShowEditTopicModal(false);
                      setEditingTopicId(null);
                      setEditTopicTitle('');
                      setEditTopicDescription('');
                    }}
                    className="px-6 py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition-colors"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // View: Categories
  return (
    <div className="min-h-screen pb-12">
      {/* Back Button */}
      {onBack && (
        <div className="mb-6">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar ao Dashboard</span>
          </button>
        </div>
      )}

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl mb-2">Fórum da Comunidade</h1>
            <p className="text-gray-400">Compartilhe conhecimento e tire dúvidas com outros concurseiros</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <User className="w-6 h-6 text-purple-400" />
            <span className="text-gray-400">Membros Ativos</span>
          </div>
          <div className="text-3xl">1.234</div>
        </div>

        <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <MessageCircle className="w-6 h-6 text-blue-400" />
            <span className="text-gray-400">Discussões</span>
          </div>
          <div className="text-3xl">567</div>
        </div>

        <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 border border-yellow-500/30 rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="w-6 h-6 text-yellow-400" />
            <span className="text-gray-400">Hoje</span>
          </div>
          <div className="text-3xl">42</div>
        </div>
      </div>

      {/* Community Rules Banner */}
      <div className="mb-8 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-3xl p-6 border-2 border-gray-700/50">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-6 h-6 text-yellow-400" />
          <h2 className="text-2xl">Regras da Comunidade</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Rule 1 */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm mb-1">Respeite todos os membros</h3>
              <p className="text-xs text-gray-400">Mantenha um ambiente saudável e respeitoso</p>
            </div>
          </div>

          {/* Rule 2 */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20">
            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm mb-1">Compartilhe conhecimento</h3>
              <p className="text-xs text-gray-400">Ajude outros concurseiros em suas dúvidas</p>
            </div>
          </div>

          {/* Rule 3 */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm mb-1">Sem spam ou propaganda</h3>
              <p className="text-xs text-gray-400">Proibido divulgar produtos sem autorização</p>
            </div>
          </div>

          {/* Rule 4 */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
            <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm mb-1">Sem ofensas ou discriminação</h3>
              <p className="text-xs text-gray-400">Tolerância zero com desrespeito</p>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className={`bg-gradient-to-br ${category.gradient} rounded-3xl p-8 border-2 border-${category.color}-600/30 hover:border-${category.color}-500/50 transition-all text-left shadow-xl hover:shadow-2xl hover:scale-[1.02]`}
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 text-3xl">
                {category.name.split(' ')[0]}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl mb-2">{category.name}</h3>
                <p className="text-white/90 leading-relaxed">{category.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-white/20">
              <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-sm">
                {category.badge}
              </span>
              <span className="text-sm text-white/80">Ver tópicos →</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}