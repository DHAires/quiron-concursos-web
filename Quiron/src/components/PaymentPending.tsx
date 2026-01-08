import React from 'react';
import { Clock, FileText, Smartphone, ArrowLeft } from 'lucide-react';

interface PaymentPendingProps {
  onGoBack: () => void;
}

export function PaymentPending({ onGoBack }: PaymentPendingProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Pending Icon */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
            <Clock className="w-32 h-32 text-yellow-400 relative z-10 animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        {/* Message */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">Pagamento Pendente</h1>
          <p className="text-xl text-gray-300 mb-6">
            Aguardando confirmação do pagamento...
          </p>
          <p className="text-gray-400">
            Seu pedido foi recebido e está sendo processado. Você receberá um email quando o pagamento for confirmado.
          </p>
        </div>

        {/* Payment Method Info */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-yellow-500/30 rounded-3xl p-8 mb-8">
          <h2 className="text-2xl mb-6">O que fazer agora?</h2>

          <div className="space-y-4">
            {/* PIX */}
            <div className="flex items-start gap-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <Smartphone className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium mb-2">Se você escolheu PIX:</div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Copie o código PIX ou escaneie o QR Code</li>
                  <li>• Abra seu app bancário</li>
                  <li>• Cole o código PIX e confirme o pagamento</li>
                  <li>• Aprovação em segundos!</li>
                </ul>
              </div>
            </div>

            {/* Boleto */}
            <div className="flex items-start gap-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
              <FileText className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <div className="font-medium mb-2">Se você escolheu Boleto:</div>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Você receberá o boleto por email</li>
                  <li>• Pague em qualquer banco, lotérica ou app</li>
                  <li>• Confirmação em até 3 dias úteis</li>
                  <li>• Guarde o comprovante de pagamento</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-green-400">Status do Pagamento</span>
            </div>
            <p className="text-sm text-gray-300">
              Assim que seu pagamento for confirmado, você receberá um email e terá acesso imediato a todos os recursos Premium!
            </p>
          </div>
        </div>

        {/* Back Button */}
        <button
          onClick={onGoBack}
          className="w-full py-4 px-6 rounded-2xl border-2 border-gray-700 hover:border-gray-600 transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar para Dashboard</span>
        </button>

        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm mb-2">
            Não recebeu o email? Verifique sua caixa de spam.
          </p>
          <p className="text-gray-500 text-sm">
            Precisa de ajuda? Entre em contato com nosso suporte.
          </p>
        </div>
      </div>
    </div>
  );
}
