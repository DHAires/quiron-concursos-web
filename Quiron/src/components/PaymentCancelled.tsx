import React from 'react';
import { XCircle, ArrowLeft, HelpCircle } from 'lucide-react';

interface PaymentCancelledProps {
  onTryAgain: () => void;
  onGoBack: () => void;
}

export function PaymentCancelled({ onTryAgain, onGoBack }: PaymentCancelledProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Cancelled Icon */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-red-500/20 rounded-full blur-3xl" />
            <XCircle className="w-32 h-32 text-red-400 relative z-10" />
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Pagamento Cancelado</h1>
          <p className="text-xl text-gray-300 mb-6">
            Você cancelou o processo de pagamento.
          </p>
          <p className="text-gray-400">
            Não se preocupe! Seus dados estão seguros e você pode tentar novamente quando quiser.
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 rounded-3xl p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <HelpCircle className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h3 className="text-lg mb-2">Por que assinar o Premium?</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  Acesso a mais de 950 questões atualizadas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  Game 3D exclusivo para treinar de forma divertida
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  IA Prometheus para tirar todas as suas dúvidas
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  Análise detalhada do seu desempenho
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                  Suporte prioritário
                </li>
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
            <span className="text-2xl">⚡</span>
            <div className="text-sm">
              <div className="font-medium text-yellow-400">Oferta especial de lançamento</div>
              <div className="text-gray-400">40% OFF - apenas R$ 29,90/mês</div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={onGoBack}
            className="py-4 px-6 rounded-2xl border-2 border-gray-700 hover:border-gray-600 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>

          <button
            onClick={onTryAgain}
            className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-4 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Tentar Novamente</span>
            <span className="text-xl">→</span>
          </button>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          Precisa de ajuda? Entre em contato com nosso suporte.
        </div>
      </div>
    </div>
  );
}
