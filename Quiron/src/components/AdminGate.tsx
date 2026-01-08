import React, { useState } from 'react';
import { Lock, Shield, Eye, EyeOff } from 'lucide-react';

interface AdminGateProps {
  onSuccess: () => void;
  onCancel: () => void;
}

/**
 * Componente de autenticação admin
 * 
 * CÓDIGO SECRETO: QUIRON_DEV_2024
 * 
 * Este componente protege rotas administrativas do sistema.
 * Apenas desenvolvedores com o código secreto podem acessar.
 */
export function AdminGate({ onSuccess, onCancel }: AdminGateProps) {
  const [code, setCode] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  // Código secreto (em produção, isso deveria vir de variável de ambiente)
  const SECRET_CODE = 'QUIRON_DEV_2024';
  const MAX_ATTEMPTS = 3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (code.trim() === SECRET_CODE) {
      setError('');
      onSuccess();
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts >= MAX_ATTEMPTS) {
        setError(`❌ Acesso negado! Máximo de tentativas atingido.`);
        setTimeout(() => {
          onCancel();
        }, 2000);
      } else {
        setError(`❌ Código incorreto! Tentativa ${newAttempts}/${MAX_ATTEMPTS}`);
        setCode('');
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border-2 border-red-500/30 shadow-2xl shadow-red-500/20 p-8 animate-fade-in-up">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-red-600 to-purple-600 flex items-center justify-center shadow-lg shadow-red-500/50 mb-4 animate-pulse-slow">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            Acesso Restrito
          </h2>
          <p className="text-gray-400 text-center mt-2">
            Esta área é exclusiva para desenvolvedores
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Code Input */}
          <div>
            <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Código de Acesso
            </label>
            <div className="relative">
              <input
                type={showCode ? 'text' : 'password'}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Digite o código secreto"
                className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border-2 border-gray-700 focus:border-red-500 focus:outline-none text-white placeholder-gray-500 transition-colors"
                autoFocus
                disabled={attempts >= MAX_ATTEMPTS}
              />
              <button
                type="button"
                onClick={() => setShowCode(!showCode)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
              >
                {showCode ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm animate-shake">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 px-6 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 border-2 border-gray-700 hover:border-gray-600 transition-all"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={attempts >= MAX_ATTEMPTS || !code.trim()}
              className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-purple-600 hover:from-red-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-red-500/30"
            >
              Verificar
            </button>
          </div>
        </form>

        {/* Info */}
        <div className="mt-6 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/30">
          <p className="text-yellow-400 text-xs text-center">
            ⚠️ Apenas desenvolvedores autorizados podem acessar o gerenciamento de questões do game
          </p>
        </div>
      </div>
    </div>
  );
}
