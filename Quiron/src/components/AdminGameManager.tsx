import React, { useState } from 'react';
import { AdminGate } from './AdminGate';
import { Database, Trash2, Upload, RefreshCw, AlertTriangle } from 'lucide-react';
import { useGameQuestions, seedGameQuestions, deleteAllGameQuestions } from '../hooks/useGameQuestions';

interface AdminGameManagerProps {
  onClose: () => void;
}

/**
 * Gerenciador Admin de Questões do Game
 * 
 * Protegido por AdminGate - requer código secreto
 * Funções:
 * - Seed de questões
 * - Limpar banco
 * - Ver estatísticas
 */
export function AdminGameManager({ onClose }: AdminGameManagerProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error' | 'info', text: string } | null>(null);
  
  const { questions, loading, error, fetchQuestions } = useGameQuestions({ isAdmin: true });

  const handleSeed = async () => {
    if (!confirm('⚠️ Isso vai adicionar 40 questões ao banco. Continuar?')) return;
    
    setIsLoading(true);
    setMessage(null);
    
    try {
      const result = await seedGameQuestions();
      await fetchQuestions();
      setMessage({ type: 'success', text: `✅ Seed executado com sucesso! ${result.saved} questões adicionadas.` });
    } catch (err: any) {
      setMessage({ type: 'error', text: `❌ Erro ao executar seed: ${err.message}` });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearAll = async () => {
    if (!confirm('🚨 ATENÇÃO: Isso vai DELETAR TODAS as questões do game! Esta ação é IRREVERSÍVEL. Continuar?')) return;
    if (!confirm('Tem certeza ABSOLUTA? Todas as questões serão perdidas!')) return;
    
    setIsLoading(true);
    setMessage(null);
    
    try {
      await deleteAllGameQuestions();
      await fetchQuestions();
      setMessage({ type: 'success', text: '✅ Banco limpo com sucesso!' });
    } catch (err: any) {
      setMessage({ type: 'error', text: `❌ Erro ao limpar banco: ${err.message}` });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    setMessage(null);
    
    try {
      await fetchQuestions();
      setMessage({ type: 'info', text: `ℹ️ ${questions.length} questões no banco` });
    } catch (err: any) {
      setMessage({ type: 'error', text: `❌ Erro ao buscar questões: ${err.message}` });
    } finally {
      setIsLoading(false);
    }
  };

  // Se não autenticado, mostra o gate
  if (!isAuthenticated) {
    return (
      <AdminGate
        onSuccess={() => {
          setIsAuthenticated(true);
          // Buscar questões ao autenticar
          setTimeout(() => fetchQuestions(), 100);
        }}
        onCancel={onClose}
      />
    );
  }

  // Painel Admin
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border-2 border-red-500/30 shadow-2xl shadow-red-500/20 p-8 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center shadow-lg shadow-red-500/50">
              <Database className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                Gerenciamento de Questões
              </h2>
              <p className="text-gray-400">Painel Administrativo do Game Épico</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-colors"
          >
            Fechar
          </button>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/30">
            <p className="text-blue-400 text-sm mb-1">Total</p>
            <p className="text-3xl">{loading ? '...' : questions.length}</p>
          </div>
          <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30">
            <p className="text-red-400 text-sm mb-1">Policial</p>
            <p className="text-3xl">
              {loading ? '...' : questions.filter(q => q.area === 'policial').length}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/30">
            <p className="text-purple-400 text-sm mb-1">Conhecimentos Gerais</p>
            <p className="text-3xl">
              {loading ? '...' : questions.filter(q => q.area === 'conhecimentos-gerais').length}
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
            <p className="text-yellow-400 text-sm mb-1">Fiscal-Bancária</p>
            <p className="text-3xl">
              {loading ? '...' : questions.filter(q => q.area === 'fiscal-bancaria').length}
            </p>
          </div>
        </div>

        {/* Message */}
        {message && (
          <div className={`p-4 rounded-xl mb-6 border ${
            message.type === 'success' ? 'bg-green-500/10 border-green-500/30 text-green-400' :
            message.type === 'error' ? 'bg-red-500/10 border-red-500/30 text-red-400' :
            'bg-blue-500/10 border-blue-500/30 text-blue-400'
          }`}>
            {message.text}
          </div>
        )}

        {/* Ações */}
        <div className="space-y-4">
          {/* Refresh */}
          <button
            onClick={handleRefresh}
            disabled={isLoading}
            className="w-full flex items-center justify-between p-6 rounded-2xl bg-blue-500/10 border-2 border-blue-500/30 hover:border-blue-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <div className="flex items-center gap-4">
              <RefreshCw className={`w-8 h-8 text-blue-400 ${isLoading ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
              <div className="text-left">
                <h3 className="text-xl text-white mb-1">Atualizar Estatísticas</h3>
                <p className="text-gray-400 text-sm">Recarrega informações do banco de dados</p>
              </div>
            </div>
          </button>

          {/* Seed */}
          <button
            onClick={handleSeed}
            disabled={isLoading}
            className="w-full flex items-center justify-between p-6 rounded-2xl bg-green-500/10 border-2 border-green-500/30 hover:border-green-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <div className="flex items-center gap-4">
              <Upload className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="text-xl text-white mb-1">Executar Seed</h3>
                <p className="text-gray-400 text-sm">Adiciona 40 questões (10 por área) ao banco</p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-green-500/20 text-green-400 text-sm">
              +40 questões
            </div>
          </button>

          {/* Clear All - DANGER */}
          <button
            onClick={handleClearAll}
            disabled={isLoading}
            className="w-full flex items-center justify-between p-6 rounded-2xl bg-red-500/10 border-2 border-red-500/30 hover:border-red-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
          >
            <div className="flex items-center gap-4">
              <Trash2 className="w-8 h-8 text-red-400 group-hover:scale-110 transition-transform" />
              <div className="text-left">
                <h3 className="text-xl text-white mb-1 flex items-center gap-2">
                  Limpar Banco
                  <AlertTriangle className="w-5 h-5 text-red-400 animate-pulse" />
                </h3>
                <p className="text-gray-400 text-sm">⚠️ PERIGO: Deleta TODAS as questões do game!</p>
              </div>
            </div>
            <div className="px-4 py-2 rounded-xl bg-red-500/20 text-red-400 text-sm">
              DANGER
            </div>
          </button>
        </div>

        {/* Info */}
        <div className="mt-8 p-6 rounded-2xl bg-yellow-500/10 border border-yellow-500/30">
          <h4 className="text-yellow-400 mb-3 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Informações Importantes
          </h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>• O seed pode ser executado múltiplas vezes (questões duplicadas não serão criadas)</li>
            <li>• Limpar o banco é uma ação IRREVERSÍVEL - use com cuidado!</li>
            <li>• Todas as operações são registradas nos logs do Supabase</li>
            <li>• Este painel só é acessível com o código secreto de desenvolvedor</li>
          </ul>
        </div>
      </div>
    </div>
  );
}