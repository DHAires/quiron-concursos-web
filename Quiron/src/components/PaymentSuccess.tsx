import React, { useEffect, useState } from 'react';
import { CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

interface PaymentSuccessProps {
  onContinue: () => void;
}

export function PaymentSuccess({ onContinue }: PaymentSuccessProps) {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onContinue();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [onContinue]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-green-500/20 rounded-full blur-3xl animate-pulse" />
            <CheckCircle className="w-32 h-32 text-green-400 relative z-10 animate-bounce" />
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">🎉 Pagamento Confirmado! 🎉</h1>
          <p className="text-xl text-gray-300 mb-6">
            Bem-vindo ao <span className="text-yellow-400">Quiron Premium</span>!
          </p>
          <p className="text-gray-400">
            Sua assinatura foi ativada com sucesso. Agora você tem acesso completo a todos os recursos premium!
          </p>
        </div>

        {/* Benefits Unlocked */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/30 rounded-3xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl">Recursos Desbloqueados:</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                📚
              </div>
              <div>
                <div className="font-medium">950+ Questões</div>
                <div className="text-sm text-gray-400">Acesso completo ao banco de questões</div>
              </div>
              <CheckCircle className="w-6 h-6 text-green-400 ml-auto" />
            </div>

            <div className="flex items-center gap-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                🎮
              </div>
              <div>
                <div className="font-medium">Game Épico 3D</div>
                <div className="text-sm text-gray-400">A Corrida dos Heróis liberado</div>
              </div>
              <CheckCircle className="w-6 h-6 text-green-400 ml-auto" />
            </div>

            <div className="flex items-center gap-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                🤖
              </div>
              <div>
                <div className="font-medium">IA Prometheus</div>
                <div className="text-sm text-gray-400">Chat ilimitado com a IA</div>
              </div>
              <CheckCircle className="w-6 h-6 text-green-400 ml-auto" />
            </div>

            <div className="flex items-center gap-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                📊
              </div>
              <div>
                <div className="font-medium">Análise IA Completa</div>
                <div className="text-sm text-gray-400">Relatórios detalhados de desempenho</div>
              </div>
              <CheckCircle className="w-6 h-6 text-green-400 ml-auto" />
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-5 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span className="text-lg">Começar Minha Jornada Heroica</span>
          <ArrowRight className="w-6 h-6" />
        </button>

        <div className="text-center mt-6 text-gray-400 text-sm">
          Redirecionando automaticamente em {countdown} segundos...
        </div>
      </div>
    </div>
  );
}
