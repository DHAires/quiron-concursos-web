import React, { useState } from 'react';
import { 
  ArrowLeft, 
  MessageCircle, 
  Mail, 
  Phone, 
  Book, 
  Video, 
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Zap,
  Shield,
  Flame,
  Crown,
  Check,
  Send,
  ExternalLink,
  AlertCircle,
  Clock,
  User,
  FileText,
  Heart,
  Target
} from 'lucide-react';

interface SupportPageProps {
  onBack: () => void;
}

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface SupportCategory {
  id: string;
  name: string;
  icon: any;
  color: string;
  gradient: string;
  description: string;
  articles: number;
}

export function SupportPage({ onBack }: SupportPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'geral'
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const categories: SupportCategory[] = [
    {
      id: 'conta',
      name: 'Conta e Cadastro',
      icon: User,
      color: 'text-blue-400',
      gradient: 'from-blue-600 to-blue-800',
      description: 'Criação de conta, login, perfil e configurações',
      articles: 12
    },
    {
      id: 'energia',
      name: 'Sistema de Energia',
      icon: Zap,
      color: 'text-yellow-400',
      gradient: 'from-yellow-600 to-orange-600',
      description: 'Como ganhar e usar energia no sistema Freemium',
      articles: 8
    },
    {
      id: 'prometheus',
      name: 'Prometheus IA',
      icon: Flame,
      color: 'text-orange-400',
      gradient: 'from-orange-600 to-red-600',
      description: 'Chat com IA, dicas de estudo e funcionalidades',
      articles: 15
    },
    {
      id: 'game',
      name: 'Game Épico',
      icon: Target,
      color: 'text-purple-400',
      gradient: 'from-purple-600 to-pink-600',
      description: 'Funcionamento do game 3D-quiz e mecânicas',
      articles: 10
    },
    {
      id: 'questoes',
      name: 'Questões e Banco',
      icon: Book,
      color: 'text-green-400',
      gradient: 'from-green-600 to-emerald-600',
      description: 'Banco de questões, filtros e prática',
      articles: 18
    },
    {
      id: 'pagamento',
      name: 'Planos e Pagamento',
      icon: Crown,
      color: 'text-pink-400',
      gradient: 'from-pink-600 to-rose-600',
      description: 'Assinaturas, planos premium e formas de pagamento',
      articles: 9
    }
  ];

  const faqs: FAQItem[] = [
    {
      id: 'faq1',
      question: 'Como funciona o sistema de energia Freemium?',
      answer: 'Cada campo opcional preenchido no seu cadastro gera 1 energia. Use energia para interagir com o Prometheus IA, jogar o Game Épico e acessar recursos premium. Campos como telefone, endereço, formação, experiência profissional e objetivos de concurso geram energia!',
      category: 'energia'
    },
    {
      id: 'faq2',
      question: 'O que é o Prometheus e como ele pode me ajudar?',
      answer: 'Prometheus é nossa IA revolucionária especializada em concursos públicos! Ele analisa seu desempenho, recomenda estudos personalizados, tira dúvidas sobre matérias, sugere cronogramas e até simula conversas sobre temas complexos. Quanto mais você interage, mais ele aprende sobre você!',
      category: 'prometheus'
    },
    {
      id: 'faq3',
      question: 'Como funciona o Game Épico 3D-quiz?',
      answer: 'O Game Épico é dividido em 4 áreas temáticas (Jurídica-azul, Policial-vermelho, Conhecimentos Gerais-roxo, Fiscal-Bancária-amarelo). Cada partida tem 3 fases com 10 questões. Acerte para avançar, erre e tente novamente. Ao acertar, você tem 20s para ler a explicação antes da próxima questão!',
      category: 'game'
    },
    {
      id: 'faq4',
      question: 'Quantas questões tem no banco?',
      answer: 'Temos centenas de questões distribuídas em 17+ matérias nas 4 áreas temáticas. Todas são formato Certo/Errado (estilo Cebraspe/Cespe) com explicações detalhadas. O banco é atualizado regularmente com novas questões!',
      category: 'questoes'
    },
    {
      id: 'faq5',
      question: 'Posso usar o app sem cadastro?',
      answer: 'Sim! Como visitante você tem acesso limitado: 5 mensagens no Prometheus, 3 mensagens no Chat Comunidade e acesso ao Fórum. Para liberar todas as funcionalidades, basta fazer um cadastro gratuito preenchendo os campos opcionais para ganhar energia!',
      category: 'conta'
    },
    {
      id: 'faq6',
      question: 'Como participar da comunidade?',
      answer: 'Acesse o Chat Comunidade com 4 salas temáticas (Guerreiros da Polícia, Arena Jurídica, Motivação dos Guerreiros, Questões e Desafios) ou o Fórum para debates mais aprofundados. Compartilhe experiências, tire dúvidas e faça networking com outros concurseiros!',
      category: 'geral'
    },
    {
      id: 'faq7',
      question: 'Qual a diferença entre Freemium e Premium?',
      answer: 'Freemium: acesso completo ganhando energia por cadastro. Premium: energia ilimitada, análises IA avançadas, prioridade no suporte, acesso antecipado a novas questões e funcionalidades exclusivas. Confira os planos na Loja!',
      category: 'pagamento'
    },
    {
      id: 'faq8',
      question: 'O app funciona offline?',
      answer: 'Algumas funcionalidades como visualização de questões já carregadas funcionam offline. Porém, para Prometheus IA, Chat Comunidade, Fórum e sincronização de progresso, é necessário conexão com internet.',
      category: 'geral'
    },
    {
      id: 'faq9',
      question: 'Como resetar minha senha?',
      answer: 'Na tela de login, clique em "Esqueci minha senha". Digite seu email cadastrado e você receberá um link para redefinir a senha. Se não receber, verifique a caixa de spam ou entre em contato com o suporte.',
      category: 'conta'
    },
    {
      id: 'faq10',
      question: 'As questões são atualizadas?',
      answer: 'Sim! Nosso time atualiza o banco regularmente com questões baseadas em provas recentes, mudanças na legislação e tendências das bancas. Assinantes premium recebem notificações de novas questões adicionadas.',
      category: 'questoes'
    }
  ];

  const filteredFAQs = faqs.filter(faq => {
    const matchesSearch = searchTerm === '' || 
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'geral'
      });
      setShowContactForm(false);
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 pb-8">
      {/* Header */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl hover:scale-105 border border-gray-600"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h1 className="text-4xl bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Central de Suporte
          </h1>
        </div>
        <p className="text-lg text-gray-400">
          Como podemos ajudá-lo hoje, guerreiro? 🏛️
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-8">
        <button
          onClick={() => setShowContactForm(true)}
          className="p-4 rounded-xl bg-gradient-to-br from-blue-900/30 to-blue-700/30 border-2 border-blue-500/50 hover:border-blue-400 transition-all hover:scale-105 group"
        >
          <Mail className="w-8 h-8 text-blue-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="mb-1">Enviar Email</h3>
          <p className="text-xs text-gray-400 break-all">quironconcursos@gmail.com</p>
        </button>

        <button 
          onClick={() => window.open('https://wa.me/5561995059924', '_blank')}
          className="p-4 rounded-xl bg-gradient-to-br from-green-900/30 to-green-700/30 border-2 border-green-500/50 hover:border-green-400 transition-all hover:scale-105 group"
        >
          <MessageCircle className="w-8 h-8 text-green-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="mb-1">WhatsApp</h3>
          <p className="text-xs text-gray-400">+55 61 99505-9924</p>
        </button>

        <button 
          onClick={() => window.open('https://www.quironconcursos.com.br', '_blank')}
          className="p-4 rounded-xl bg-gradient-to-br from-purple-900/30 to-purple-700/30 border-2 border-purple-500/50 hover:border-purple-400 transition-all hover:scale-105 group"
        >
          <ExternalLink className="w-8 h-8 text-purple-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="mb-1">Site Oficial</h3>
          <p className="text-xs text-gray-400 break-all">quironconcursos.com.br</p>
        </button>

        <button className="p-4 rounded-xl bg-gradient-to-br from-pink-900/30 to-pink-700/30 border-2 border-pink-500/50 hover:border-pink-400 transition-all hover:scale-105 group">
          <Phone className="w-8 h-8 text-pink-400 mb-2 mx-auto group-hover:scale-110 transition-transform" />
          <h3 className="mb-1">Chat ao Vivo</h3>
          <p className="text-xs text-gray-400">Seg-Sex, 9h-18h</p>
        </button>
      </div>

      {/* Status do Sistema */}
      <div className="mb-8 p-4 rounded-2xl bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg mb-1 flex items-center gap-2">
              ✅ Todos os sistemas operacionais
            </h3>
            <p className="text-sm text-gray-400">
              Última verificação: Hoje às 14:30 - Tempo de resposta: 45ms
            </p>
          </div>
          <a 
            href="#status" 
            className="px-4 py-2 rounded-full bg-green-600 hover:bg-green-500 transition-all flex items-center gap-2 text-sm"
          >
            Ver Detalhes
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar por questões, tutoriais, problemas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-16 pr-6 py-4 rounded-2xl bg-gray-800 border-2 border-gray-700 focus:border-blue-500 outline-none transition-colors text-lg"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4 flex items-center gap-2">
          <Book className="w-6 h-6 text-blue-400" />
          Categorias de Ajuda
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isSelected = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(isSelected ? null : category.id)}
                className={`p-4 rounded-xl border-2 transition-all text-left hover:scale-105 ${
                  isSelected
                    ? `bg-gradient-to-br ${category.gradient} border-white/30 shadow-xl`
                    : 'bg-gray-800 border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-start gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-lg ${isSelected ? 'bg-white/20' : 'bg-gray-700'} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : category.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-1">{category.name}</h3>
                    <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-400'}`}>
                      {category.articles} artigos
                    </p>
                  </div>
                  {isSelected && (
                    <Check className="w-5 h-5 text-white" />
                  )}
                </div>
                <p className={`text-xs ${isSelected ? 'text-white/90' : 'text-gray-400'}`}>
                  {category.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-8">
        <h2 className="text-2xl mb-4 flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-purple-400" />
          Perguntas Frequentes ({filteredFAQs.length})
        </h2>

        {filteredFAQs.length === 0 ? (
          <div className="text-center py-12 px-6 rounded-2xl bg-gray-800 border-2 border-gray-700">
            <AlertCircle className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-xl text-gray-400">
              Nenhuma pergunta encontrada com esses filtros.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory(null);
              }}
              className="mt-4 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 transition-all"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq) => {
              const isExpanded = expandedFAQ === faq.id;
              
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-gray-800 border-2 border-gray-700 overflow-hidden transition-all hover:border-gray-600"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-700/50 transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="text-lg flex-1">{faq.question}</h3>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 pl-20">
                      <div className="p-4 rounded-xl bg-gray-900 border border-gray-700">
                        <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-3xl border-2 border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between">
              <h2 className="text-2xl flex items-center gap-3">
                <Mail className="w-6 h-6 text-blue-400" />
                Enviar Mensagem ao Suporte
              </h2>
              <button
                onClick={() => setShowContactForm(false)}
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            {formSubmitted ? (
              <div className="p-12 text-center">
                <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-3xl mb-3">Mensagem Enviada!</h3>
                <p className="text-gray-400 text-lg">
                  Nossa equipe responderá em até 24 horas. 📧
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-400">Nome Completo</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:border-blue-500 outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-400">Categoria</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:border-blue-500 outline-none transition-colors"
                  >
                    <option value="geral">Geral</option>
                    <option value="conta">Conta e Cadastro</option>
                    <option value="energia">Sistema de Energia</option>
                    <option value="prometheus">Prometheus IA</option>
                    <option value="game">Game Épico</option>
                    <option value="questoes">Questões e Banco</option>
                    <option value="pagamento">Planos e Pagamento</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-400">Assunto</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:border-blue-500 outline-none transition-colors"
                    placeholder="Resumo do seu problema ou dúvida"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-400">Mensagem</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-gray-800 border-2 border-gray-700 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder="Descreva detalhadamente sua dúvida ou problema..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setShowContactForm(false)}
                    className="flex-1 px-6 py-4 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all text-lg"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all text-lg flex items-center justify-center gap-3 shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Company Info */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-orange-900/30 via-red-900/30 to-orange-900/30 border-2 border-orange-500/50 mb-8">
        <div className="text-center mb-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center mx-auto mb-3 shadow-lg">
            <FileText className="w-7 h-7" />
          </div>
          <h3 className="text-xl mb-1">QUIRON ENTRETENIMENTO EDUCACIONAL INOVA SIMPLES</h3>
          <p className="text-sm text-orange-400">
            Sua jornada rumo à aprovação! 🏛️
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-3xl mx-auto">
          <div className="p-3 rounded-lg bg-black/30 flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-orange-600/30 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">CNPJ</p>
              <p className="text-sm">61.456.494/0001-08</p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-black/30 flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-red-600/30 flex items-center justify-center flex-shrink-0">
              <ExternalLink className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Site</p>
              <a 
                href="https://www.quironconcursos.com.br" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-red-400 hover:text-red-300 break-all"
              >
                quironconcursos.com.br
              </a>
            </div>
          </div>

          <div className="md:col-span-2 p-3 rounded-lg bg-black/30 flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-orange-600/30 flex items-center justify-center flex-shrink-0">
              <ExternalLink className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Endereço</p>
              <p className="text-sm">SRES 06 M 08 Cruzeiro Velho, Brasília-DF</p>
              <p className="text-xs text-gray-400">CEP: 70.648-135</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="p-5 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-700">
        <h3 className="text-xl mb-4 text-center">Siga-nos nas Redes Sociais</h3>
        
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://instagram.com/quironconcursos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 transition-all hover:scale-105 shadow-lg"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
              📷
            </div>
            <span>Instagram</span>
          </a>

          <a
            href="https://linkedin.com/company/quironconcursos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-all hover:scale-105 shadow-lg"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
              💼
            </div>
            <span>LinkedIn</span>
          </a>

          <a
            href="https://facebook.com/quironconcursos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 hover:from-blue-400 hover:to-blue-600 transition-all hover:scale-105 shadow-lg"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
              👍
            </div>
            <span>Facebook</span>
          </a>

          <a
            href="https://tiktok.com/@quironconcursos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 transition-all hover:scale-105 shadow-lg border-2 border-gray-600"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
              🎵
            </div>
            <span>TikTok</span>
          </a>

          <a
            href="https://youtube.com/@quironconcursos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-br from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 transition-all hover:scale-105 shadow-lg"
          >
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-sm">
              ▶️
            </div>
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
}