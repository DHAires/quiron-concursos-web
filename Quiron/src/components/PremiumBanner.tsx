import React from 'react';
import { Crown, ArrowRight, Check, Zap } from 'lucide-react';

export function PremiumBanner() {
  return (
    <div className="-mt-4 mb-8">
      <div className="flash-banner relative rounded-2xl bg-gradient-to-br from-amber-950 via-red-950 to-amber-950 p-4 border-2 border-yellow-500/40 shadow-2xl shadow-yellow-500/20">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-600/10 via-transparent to-red-600/10 rounded-2xl"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            {/* Pricing Section */}
            <div className="flex-1">
              {/* Old Price */}
              <div className="text-gray-400 line-through text-xs mb-0.5">
                R$ 49,90
              </div>
              
              {/* New Price */}
              <div className="flex items-baseline gap-1 mb-1.5">
                <span className="text-3xl text-yellow-400">R$ 29</span>
                <span className="text-xl text-yellow-400">,90</span>
                <span className="text-sm text-yellow-200/80">/mês</span>
              </div>
              
              {/* Annual Option */}
              <div className="flex items-center gap-1.5 mb-1.5">
                <Check className="w-3 h-3 text-green-400" />
                <span className="text-xs text-green-300">
                  ou R$ 299,00/ano <span className="text-green-400 font-semibold">(economize R$ 59,00!)</span>
                </span>
              </div>
              
              {/* Special Offer Badge */}
              <div className="flex items-center gap-1.5 text-yellow-300">
                <Zap className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-xs">Oferta especial de lançamento - 40% OFF!</span>
              </div>
            </div>
            
            {/* CTA Button */}
            <div>
              <button className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-400 hover:via-orange-400 hover:to-red-400 text-white px-5 py-2.5 rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2 group">
                <Crown className="w-4 h-4" />
                <div className="text-left">
                  <div className="font-bold text-sm">Assinar Premium</div>
                  <div className="text-[10px] opacity-90">PIX, Boleto ou Cartão</div>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Benefits Row */}
          <div className="mt-3 pt-3 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
              <div className="flex items-center gap-1.5 text-green-300">
                <Check className="w-3 h-3 text-green-400" />
                <span>Pagamento Seguro</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-green-300">
                <Check className="w-3 h-3 text-green-400" />
                <span>Acesso Imediato</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-green-300">
                <Check className="w-3 h-3 text-green-400" />
                <span>Cancele Quando Quiser</span>
              </div>
              
              <div className="flex items-center gap-1.5 text-yellow-300 ml-auto">
                <Zap className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">PIX aprovado em segundos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}