import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-md bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-3xl p-8 shadow-2xl shadow-green-500/20 animate-scale-in text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-600 to-green-500 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-green-500/50">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>

        {/* Message */}
        <h2 className="text-3xl mb-3">Conta criada com sucesso!</h2>
        <p className="text-gray-400 mb-8">
          Bem-vindo ao Quiron Concursos! Faça login para começar sua jornada.
        </p>

        {/* Button */}
        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] active:scale-[0.98]"
        >
          Fazer Login
        </button>
      </div>
    </div>
  );
}
