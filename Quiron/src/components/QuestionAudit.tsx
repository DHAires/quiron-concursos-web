/**
 * 🔍 AUDITORIA DE QUESTÕES - QUIRON CONCURSOS
 * 
 * Ferramenta para verificar e corrigir questões com gabarito errado
 */

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  X, 
  ArrowLeft,
  Download,
  RefreshCw,
  Flag,
  Edit3,
  Save,
  Filter,
  BarChart3
} from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { toast } from 'sonner@2.0.3';

interface QuestionIssue {
  id: string;
  area: string;
  subject: string;
  question: string;
  correctAnswer: boolean;
  explanation: string;
  difficulty: string;
  issue?: 'gabarito_errado' | 'explicacao_errada' | 'texto_errado' | 'duplicada';
  notes?: string;
  suggestedFix?: boolean;
}

interface AuditStats {
  total: number;
  flagged: number;
  fixed: number;
  byArea: Record<string, number>;
  byIssue: Record<string, number>;
}

interface QuestionAuditProps {
  onClose: () => void;
}

export function QuestionAudit({ onClose }: QuestionAuditProps) {
  const [questions, setQuestions] = useState<QuestionIssue[]>([]);
  const [loading, setLoading] = useState(true);
  const [searching, setSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState<string>('all');
  const [filterIssues, setFilterIssues] = useState<boolean>(false);
  const [stats, setStats] = useState<AuditStats>({
    total: 0,
    flagged: 0,
    fixed: 0,
    byArea: {},
    byIssue: {}
  });
  
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Partial<QuestionIssue>>({});

  const areas = [
    { id: 'all', label: 'Todas as Áreas', color: 'gray' },
    { id: 'juridica', label: 'Jurídica', color: 'blue' },
    { id: 'policial', label: 'Policial', color: 'red' },
    { id: 'fiscal-bancaria', label: 'Fiscal-Bancária', color: 'yellow' },
    { id: 'conhecimentos-gerais', label: 'Conhecimentos Gerais', color: 'purple' }
  ];

  const issueTypes = [
    { id: 'gabarito_errado', label: 'Gabarito Errado', icon: AlertTriangle, color: 'red' },
    { id: 'explicacao_errada', label: 'Explicação Errada', icon: AlertTriangle, color: 'orange' },
    { id: 'texto_errado', label: 'Texto Errado', icon: AlertTriangle, color: 'yellow' },
    { id: 'duplicada', label: 'Questão Duplicada', icon: AlertTriangle, color: 'purple' }
  ];

  // Carregar todas as questões
  useEffect(() => {
    loadAllQuestions();
  }, []);

  const loadAllQuestions = async () => {
    setLoading(true);
    try {
      // Buscar questões de todas as áreas
      const allQuestions: QuestionIssue[] = [];
      
      for (const area of ['juridica', 'policial', 'fiscal-bancaria', 'conhecimentos-gerais']) {
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-50734795/game/questions/${area}`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`
            }
          }
        );

        if (response.ok) {
          const data = await response.json();
          if (data.questions) {
            allQuestions.push(...data.questions);
          }
        }
      }

      setQuestions(allQuestions);
      calculateStats(allQuestions);
      console.log(`✅ Carregadas ${allQuestions.length} questões`);
    } catch (error) {
      console.error('❌ Erro ao carregar questões:', error);
      toast.error('Erro ao carregar questões');
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = (qs: QuestionIssue[]) => {
    const newStats: AuditStats = {
      total: qs.length,
      flagged: qs.filter(q => q.issue).length,
      fixed: 0,
      byArea: {},
      byIssue: {}
    };

    qs.forEach(q => {
      // Por área
      newStats.byArea[q.area] = (newStats.byArea[q.area] || 0) + 1;
      
      // Por tipo de issue
      if (q.issue) {
        newStats.byIssue[q.issue] = (newStats.byIssue[q.issue] || 0) + 1;
      }
    });

    setStats(newStats);
  };

  const flagQuestion = (id: string, issueType: string, notes?: string) => {
    const updated = questions.map(q => {
      if (q.id === id) {
        return { ...q, issue: issueType as any, notes };
      }
      return q;
    });
    
    setQuestions(updated);
    calculateStats(updated);
    toast.success('Questão marcada com problema');
  };

  const unflagQuestion = (id: string) => {
    const updated = questions.map(q => {
      if (q.id === id) {
        const { issue, notes, ...rest } = q;
        return rest;
      }
      return q;
    });
    
    setQuestions(updated);
    calculateStats(updated);
    toast.success('Marcação removida');
  };

  const startEdit = (question: QuestionIssue) => {
    setEditingId(question.id);
    setEditForm(question);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditForm({});
  };

  const saveEdit = async () => {
    if (!editingId || !editForm) return;

    try {
      // Aqui você pode fazer PUT para atualizar a questão no backend
      // Por enquanto, atualiza localmente
      const updated = questions.map(q => 
        q.id === editingId ? { ...q, ...editForm } : q
      );
      
      setQuestions(updated);
      calculateStats(updated);
      
      setEditingId(null);
      setEditForm({});
      
      toast.success('Questão atualizada! (Salve no backend para persistir)');
    } catch (error) {
      console.error('Erro ao salvar:', error);
      toast.error('Erro ao salvar questão');
    }
  };

  const exportReport = () => {
    const flaggedQuestions = questions.filter(q => q.issue);
    
    const report = {
      timestamp: new Date().toISOString(),
      stats,
      flaggedQuestions: flaggedQuestions.map(q => ({
        id: q.id,
        area: q.area,
        subject: q.subject,
        issue: q.issue,
        notes: q.notes,
        question: q.question.substring(0, 100) + '...',
        correctAnswer: q.correctAnswer
      }))
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `audit_report_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    
    toast.success('Relatório exportado!');
  };

  const filteredQuestions = questions
    .filter(q => {
      if (selectedArea !== 'all' && q.area !== selectedArea) return false;
      if (filterIssues && !q.issue) return false;
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        return (
          q.question.toLowerCase().includes(term) ||
          q.subject.toLowerCase().includes(term) ||
          q.explanation.toLowerCase().includes(term)
        );
      }
      return true;
    });

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-2">
                <Search className="w-8 h-8 text-blue-400" />
                Auditoria de Questões
              </h1>
              <p className="text-gray-400 text-sm">Verificar e corrigir gabaritos</p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={loadAllQuestions}
              disabled={loading}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Recarregar
            </button>
            
            <button
              onClick={exportReport}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-xl transition-all"
            >
              <Download className="w-4 h-4" />
              Exportar
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4">
            <div className="text-gray-400 text-xs mb-1">Total</div>
            <div className="text-2xl font-bold">{stats.total}</div>
          </div>
          
          <div className="bg-red-900/20 border border-red-800/30 rounded-xl p-4">
            <div className="text-red-400 text-xs mb-1">Com Problemas</div>
            <div className="text-2xl font-bold text-red-400">{stats.flagged}</div>
          </div>
          
          <div className="bg-green-900/20 border border-green-800/30 rounded-xl p-4">
            <div className="text-green-400 text-xs mb-1">Corrigidas</div>
            <div className="text-2xl font-bold text-green-400">{stats.fixed}</div>
          </div>
          
          <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-xl p-4">
            <div className="text-yellow-400 text-xs mb-1">Taxa de Erro</div>
            <div className="text-2xl font-bold text-yellow-400">
              {stats.total > 0 ? ((stats.flagged / stats.total) * 100).toFixed(1) : 0}%
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar em questões, matérias, explicações..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none text-sm"
                />
              </div>
            </div>

            {/* Area Filter */}
            <select
              value={selectedArea}
              onChange={(e) => setSelectedArea(e.target.value)}
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-xl focus:border-blue-500 focus:outline-none text-sm"
            >
              {areas.map(area => (
                <option key={area.id} value={area.id}>{area.label}</option>
              ))}
            </select>

            {/* Issues Filter */}
            <button
              onClick={() => setFilterIssues(!filterIssues)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                filterIssues 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-800/50 border border-gray-700 text-gray-300'
              }`}
            >
              <Filter className="w-4 h-4" />
              Só Problemas
            </button>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-3">
          {loading ? (
            <div className="text-center py-12">
              <RefreshCw className="w-8 h-8 animate-spin mx-auto mb-2 text-blue-400" />
              <p className="text-gray-400">Carregando questões...</p>
            </div>
          ) : filteredQuestions.length === 0 ? (
            <div className="text-center py-12 bg-gray-900/50 border border-gray-800 rounded-xl">
              <Search className="w-12 h-12 mx-auto mb-2 text-gray-600" />
              <p className="text-gray-400">Nenhuma questão encontrada</p>
            </div>
          ) : (
            filteredQuestions.map((question) => (
              <QuestionCard
                key={question.id}
                question={question}
                isEditing={editingId === question.id}
                editForm={editForm}
                onEdit={startEdit}
                onCancelEdit={cancelEdit}
                onSaveEdit={saveEdit}
                onUpdateForm={setEditForm}
                onFlag={flagQuestion}
                onUnflag={unflagQuestion}
                issueTypes={issueTypes}
              />
            ))
          )}
        </div>

        {/* Results Count */}
        {!loading && (
          <div className="text-center text-sm text-gray-400 mt-6">
            Mostrando {filteredQuestions.length} de {stats.total} questões
          </div>
        )}
      </div>
    </div>
  );
}

// Card de questão individual
interface QuestionCardProps {
  question: QuestionIssue;
  isEditing: boolean;
  editForm: Partial<QuestionIssue>;
  onEdit: (q: QuestionIssue) => void;
  onCancelEdit: () => void;
  onSaveEdit: () => void;
  onUpdateForm: (form: Partial<QuestionIssue>) => void;
  onFlag: (id: string, type: string, notes?: string) => void;
  onUnflag: (id: string) => void;
  issueTypes: Array<{ id: string; label: string; icon: any; color: string }>;
}

function QuestionCard({
  question,
  isEditing,
  editForm,
  onEdit,
  onCancelEdit,
  onSaveEdit,
  onUpdateForm,
  onFlag,
  onUnflag,
  issueTypes
}: QuestionCardProps) {
  const [showFlagMenu, setShowFlagMenu] = useState(false);
  const [flagNotes, setFlagNotes] = useState('');

  const areaColors = {
    'juridica': 'blue',
    'policial': 'red',
    'fiscal-bancaria': 'yellow',
    'conhecimentos-gerais': 'purple'
  };

  const color = areaColors[question.area as keyof typeof areaColors] || 'gray';

  const handleFlag = (issueType: string) => {
    onFlag(question.id, issueType, flagNotes);
    setShowFlagMenu(false);
    setFlagNotes('');
  };

  return (
    <div className={`bg-gray-900/50 border rounded-xl p-4 ${
      question.issue ? 'border-red-500/50' : 'border-gray-800'
    }`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`px-2 py-1 bg-${color}-600/20 border border-${color}-500/30 rounded text-xs text-${color}-400`}>
            {question.area}
          </span>
          <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
            {question.subject}
          </span>
          <span className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">
            {question.difficulty}
          </span>
          {question.issue && (
            <span className="px-2 py-1 bg-red-600/20 border border-red-500/30 rounded text-xs text-red-400 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3" />
              {issueTypes.find(t => t.id === question.issue)?.label}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          {!isEditing ? (
            <>
              <button
                onClick={() => onEdit(question)}
                className="p-1.5 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded transition-all"
                title="Editar"
              >
                <Edit3 className="w-4 h-4 text-blue-400" />
              </button>
              
              {question.issue ? (
                <button
                  onClick={() => onUnflag(question.id)}
                  className="p-1.5 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded transition-all"
                  title="Marcar como corrigida"
                >
                  <CheckCircle className="w-4 h-4 text-green-400" />
                </button>
              ) : (
                <button
                  onClick={() => setShowFlagMenu(!showFlagMenu)}
                  className="p-1.5 bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 rounded transition-all"
                  title="Reportar problema"
                >
                  <Flag className="w-4 h-4 text-red-400" />
                </button>
              )}
            </>
          ) : (
            <>
              <button
                onClick={onSaveEdit}
                className="p-1.5 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded transition-all"
              >
                <Save className="w-4 h-4 text-green-400" />
              </button>
              <button
                onClick={onCancelEdit}
                className="p-1.5 bg-gray-600/20 hover:bg-gray-600/30 border border-gray-500/30 rounded transition-all"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Flag Menu */}
      {showFlagMenu && (
        <div className="mb-3 p-3 bg-red-900/10 border border-red-800/30 rounded-xl">
          <p className="text-xs text-red-400 mb-2">Qual o problema?</p>
          <div className="grid grid-cols-2 gap-2 mb-2">
            {issueTypes.map(type => (
              <button
                key={type.id}
                onClick={() => handleFlag(type.id)}
                className={`px-3 py-2 bg-${type.color}-600/20 hover:bg-${type.color}-600/30 border border-${type.color}-500/30 rounded text-xs text-${type.color}-400 transition-all`}
              >
                {type.label}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={flagNotes}
            onChange={(e) => setFlagNotes(e.target.value)}
            placeholder="Notas adicionais (opcional)"
            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded text-xs focus:border-red-500 focus:outline-none"
          />
        </div>
      )}

      {/* Content */}
      {isEditing ? (
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-400 mb-1">Questão</label>
            <textarea
              value={editForm.question || ''}
              onChange={(e) => onUpdateForm({ ...editForm, question: e.target.value })}
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded text-sm focus:border-blue-500 focus:outline-none"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Resposta Correta</label>
              <select
                value={editForm.correctAnswer ? 'true' : 'false'}
                onChange={(e) => onUpdateForm({ ...editForm, correctAnswer: e.target.value === 'true' })}
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="true">Verdadeiro (Certo)</option>
                <option value="false">Falso (Errado)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-400 mb-1">Dificuldade</label>
              <select
                value={editForm.difficulty || ''}
                onChange={(e) => onUpdateForm({ ...editForm, difficulty: e.target.value })}
                className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="facil">Fácil</option>
                <option value="medio">Médio</option>
                <option value="dificil">Difícil</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs text-gray-400 mb-1">Explicação</label>
            <textarea
              value={editForm.explanation || ''}
              onChange={(e) => onUpdateForm({ ...editForm, explanation: e.target.value })}
              className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded text-sm focus:border-blue-500 focus:outline-none"
              rows={3}
            />
          </div>
        </div>
      ) : (
        <>
          <p className="text-sm mb-3">{question.question}</p>
          
          <div className="flex items-center gap-3 mb-3">
            <div className={`px-3 py-1.5 rounded ${
              question.correctAnswer 
                ? 'bg-green-600/20 border border-green-500/30 text-green-400' 
                : 'bg-red-600/20 border border-red-500/30 text-red-400'
            }`}>
              <span className="text-xs font-semibold">
                Gabarito: {question.correctAnswer ? 'CERTO (Verdadeiro)' : 'ERRADO (Falso)'}
              </span>
            </div>
          </div>

          <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-3">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-blue-400 text-xs">?</span>
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-1">Explicação:</p>
                <p className="text-sm text-gray-300">{question.explanation}</p>
              </div>
            </div>
          </div>

          {question.notes && (
            <div className="mt-3 p-2 bg-yellow-900/10 border border-yellow-800/30 rounded text-xs text-yellow-400">
              <strong>Notas:</strong> {question.notes}
            </div>
          )}
        </>
      )}

      {/* ID (for debugging) */}
      <div className="mt-3 text-[10px] text-gray-600">
        ID: {question.id}
      </div>
    </div>
  );
}