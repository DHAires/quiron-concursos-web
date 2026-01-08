import React, { useState } from 'react';
import { Check, Zap, CreditCard } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface PricingCardProps {
  user: any | null;
  onPurchaseSuccess?: () => void;
}

export function PricingCard({ user, onPurchaseSuccess }: PricingCardProps) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('monthly');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'pix' | 'boleto'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  const plans = {
    monthly: {
      price: 29.90,
      original: 49.90,
      discount: 40,
      interval: 'mês',
    },
    yearly: {
      price: 299.00,
      original: 599.00,
      discount: 40,
      savings: 59.80,
      interval: 'ano',
    },
  };

  const currentPlan = plans[selectedPlan];

  const handleSubscribe = async () => {
    if (!user) {
      alert('Faça login para assinar');
      return;
    }

    setError('');
    setIsProcessing(true);

    try {
      // Get access token
      const { createClient } = await import('@supabase/supabase-js');
      const supabase = createClient(
        `https://${projectId}.supabase.co`,
        publicAnonKey
      );
      
      const { data: { session } } = await supabase.auth.getSession();
      const accessToken = session?.access_token;

      if (!accessToken) {
        throw new Error('Not authenticated');
      }

      if (paymentMethod === 'card') {
        // Stripe Checkout (Card)
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-50734795/payments/stripe/create-checkout`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              plan: selectedPlan,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Erro ao criar checkout');
        }

        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        // MercadoPago (PIX or Boleto)
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-50734795/payments/mercadopago/create-payment`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              plan: selectedPlan,
              paymentMethod: paymentMethod,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Erro ao criar pagamento');
        }

        // Redirect to MercadoPago
        window.location.href = data.initPoint;
      }
    } catch (err: any) {
      console.error('Payment error:', err);
      setError(err.message || 'Erro ao processar pagamento');
      setIsProcessing(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Plan Selection */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setSelectedPlan('monthly')}
          className={`flex-1 py-4 px-6 rounded-2xl border-2 transition-all ${
            selectedPlan === 'monthly'
              ? 'border-yellow-500 bg-yellow-500/10'
              : 'border-gray-700 hover:border-gray-600'
          }`}
        >
          <div className="text-center">
            <div className="text-xl">Mensal</div>
            <div className="text-2xl mt-2">
              R$ {plans.monthly.price.toFixed(2)}
              <span className="text-sm text-gray-400">/mês</span>
            </div>
          </div>
        </button>

        <button
          onClick={() => setSelectedPlan('yearly')}
          className={`flex-1 py-4 px-6 rounded-2xl border-2 transition-all relative ${
            selectedPlan === 'yearly'
              ? 'border-yellow-500 bg-yellow-500/10'
              : 'border-gray-700 hover:border-gray-600'
          }`}
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-black px-3 py-1 rounded-full text-xs uppercase tracking-wide">
            Economize R$ 59!
          </div>
          <div className="text-center">
            <div className="text-xl">Anual</div>
            <div className="text-2xl mt-2">
              R$ {plans.yearly.price.toFixed(2)}
              <span className="text-sm text-gray-400">/ano</span>
            </div>
          </div>
        </button>
      </div>

      {/* Main Card */}
      <div className="bg-gradient-to-br from-orange-900/40 via-red-900/40 to-red-800/40 border-2 border-red-500/30 rounded-3xl p-8 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Original Price */}
          <div className="text-gray-400 line-through text-sm mb-1">
            R$ {currentPlan.original.toFixed(2)}
          </div>

          {/* Current Price */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-5xl">R$ {Math.floor(currentPlan.price)}</span>
            <span className="text-3xl">,{(currentPlan.price % 1).toFixed(2).slice(2)}</span>
            <span className="text-xl text-gray-300">/{currentPlan.interval}</span>
          </div>

          {/* Yearly Savings */}
          {selectedPlan === 'yearly' && (
            <div className="flex items-center gap-2 text-green-400 mb-3">
              <Check className="w-4 h-4" />
              <span>ou R$ 299,00/ano (economize R$ 59,00!)</span>
            </div>
          )}

          {/* Discount Badge */}
          <div className="flex items-center gap-2 mb-6">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400">
              Oferta especial de lançamento - {currentPlan.discount}% OFF!
            </span>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
              <span>Cancele Quando Quiser</span>
            </div>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-6">
            <div className="text-sm text-gray-300 mb-3">Escolha a forma de pagamento:</div>
            <div className="flex gap-3">
              <button
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all text-sm ${
                  paymentMethod === 'card'
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <CreditCard className="w-5 h-5 mx-auto mb-1" />
                Cartão
              </button>
              <button
                onClick={() => setPaymentMethod('pix')}
                className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all text-sm ${
                  paymentMethod === 'pix'
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className="text-lg mb-1">💳</div>
                  PIX
                </div>
              </button>
              <button
                onClick={() => setPaymentMethod('boleto')}
                className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all text-sm ${
                  paymentMethod === 'boleto'
                    ? 'border-yellow-500 bg-yellow-500/10'
                    : 'border-gray-700 hover:border-gray-600'
                }`}
              >
                <div className="text-center">
                  <div className="text-lg mb-1">📄</div>
                  Boleto
                </div>
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Subscribe Button */}
          <button
            onClick={handleSubscribe}
            disabled={isProcessing || !user}
            className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-black py-4 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              👑
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">
                {isProcessing ? 'Processando...' : 'Assinar Premium'}
              </div>
              <div className="text-xs text-black/70">
                {paymentMethod === 'card'
                  ? 'PIX, Boleto ou Cartão'
                  : paymentMethod === 'pix'
                  ? 'PIX aprovado em segundos'
                  : 'Boleto - até 3 dias úteis'}
              </div>
            </div>
            <span className="text-2xl">→</span>
          </button>

          {/* PIX Badge */}
          {paymentMethod === 'pix' && (
            <div className="flex items-center justify-end gap-2 mt-4">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm text-yellow-400">PIX aprovado em segundos</span>
            </div>
          )}

          {!user && (
            <div className="mt-4 text-center text-sm text-gray-400">
              Faça login para assinar o plano Premium
            </div>
          )}
        </div>
      </div>

      {/* Benefits List */}
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-blue-400" />
          </div>
          <div>
            <div className="text-sm">950+ Questões</div>
            <div className="text-xs text-gray-400">4 áreas temáticas</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-red-400" />
          </div>
          <div>
            <div className="text-sm">Game Épico 3D</div>
            <div className="text-xs text-gray-400">A Corrida dos Heróis</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-purple-400" />
          </div>
          <div>
            <div className="text-sm">IA Prometheus</div>
            <div className="text-xs text-gray-400">Chat inteligente</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-yellow-400" />
          </div>
          <div>
            <div className="text-sm">Análise IA</div>
            <div className="text-xs text-gray-400">Desempenho detalhado</div>
          </div>
        </div>
      </div>
    </div>
  );
}
