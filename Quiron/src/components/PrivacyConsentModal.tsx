import React, { useState, useEffect } from 'react';
import { Shield, Info, CheckCircle, X } from 'lucide-react';

interface PrivacyConsentModalProps {
  onAcceptAll: () => void;
  onAcceptEssential: () => void;
}

export function PrivacyConsentModal({ onAcceptAll, onAcceptEssential }: PrivacyConsentModalProps) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-gradient-to-br from-gray-900 via-gray-900 to-black border-2 border-blue-500/30 rounded-2xl shadow-2xl shadow-blue-500/20 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-br from-gray-900 to-black border-b border-gray-800 p-5 rounded-t-2xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Shield className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl text-white mb-1">Sua Privacidade Importa</h2>
              <p className="text-sm text-gray-400">Quiron Concursos respeita seus dados</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Main Text */}
          <div className="bg-gray-800/50 rounded-xl p-4 mb-4 border border-gray-700">
            <p className="text-sm text-gray-300 leading-relaxed">
              Nós e nossos parceiros usamos tecnologias, como cookies, e processamos dados pessoais, 
              como identificadores únicos e informações padrão enviadas pelo dispositivo, para personalizar 
              anúncios e conteúdo, medir o desempenho de anúncios e conteúdo, e obter insights sobre o público.
            </p>
          </div>

          {/* Details Button */}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-4 text-sm"
          >
            <Info className="w-4 h-4" />
            <span>Ver detalhes sobre como processamos seus dados</span>
          </button>

          {/* Expanded Details */}
          {showDetails && (
            <div className="bg-gray-800/30 rounded-xl p-4 mb-4 border border-gray-700 space-y-3">
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">📊 Dados Coletados:</h4>
                <ul className="text-xs text-gray-400 space-y-1 ml-4">
                  <li>• Informações de cadastro (nome, email)</li>
                  <li>• Dados de desempenho e progresso nos estudos</li>
                  <li>• Preferências e configurações do app</li>
                  <li>• Dados de uso e interação com o conteúdo</li>
                  <li>• Informações do dispositivo e IP (anonimizadas)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-white mb-2">🎯 Finalidades:</h4>
                <ul className="text-xs text-gray-400 space-y-1 ml-4">
                  <li>• Personalizar sua experiência de aprendizado</li>
                  <li>• Melhorar nossos serviços e funcionalidades</li>
                  <li>• Exibir anúncios relevantes (apenas versão gratuita)</li>
                  <li>• Análises estatísticas e métricas de uso</li>
                  <li>• Comunicação sobre atualizações e novidades</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2">🔒 Seus Direitos (LGPD/GDPR):</h4>
                <ul className="text-xs text-gray-400 space-y-1 ml-4">
                  <li>• Acessar, corrigir ou excluir seus dados a qualquer momento</li>
                  <li>• Revogar consentimento através das configurações</li>
                  <li>• Solicitar portabilidade dos seus dados</li>
                  <li>• Opor-se ao processamento para fins de marketing</li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2">🌍 Compartilhamento:</h4>
                <p className="text-xs text-gray-400 ml-4">
                  Seus dados podem ser compartilhados com prestadores de serviços (hospedagem, análise) 
                  e parceiros de anúncios (Google AdSense) sempre respeitando as leis de proteção de dados.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white mb-2">🍪 Cookies:</h4>
                <p className="text-xs text-gray-400 ml-4">
                  Utilizamos cookies essenciais (funcionamento do app) e analíticos/publicitários 
                  (personalizações). Você pode gerenciar preferências a qualquer momento.
                </p>
              </div>
            </div>
          )}

          {/* Policy Links */}
          <div className="flex flex-wrap gap-3 mb-5">
            <button
              onClick={() => window.location.href = '#/privacy-policy'}
              className="text-xs text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Política de Privacidade
            </button>
            <button
              onClick={() => window.location.href = '#/terms-of-use'}
              className="text-xs text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Termos de Uso
            </button>
            <button
              onClick={() => window.location.href = '#/ad-partners'}
              className="text-xs text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              Parceiros de Anúncios
            </button>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={onAcceptAll}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-white"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Aceitar Todos</span>
            </button>

            <button
              onClick={onAcceptEssential}
              className="w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 transition-all flex items-center justify-center gap-2 text-white border border-gray-600"
            >
              <X className="w-5 h-5" />
              <span className="font-medium">Apenas Essenciais</span>
            </button>
          </div>

          {/* Footer Note */}
          <p className="text-[10px] text-gray-500 text-center mt-4 leading-relaxed">
            Ao usar o Quiron Concursos, você concorda com nossa Política de Privacidade e Termos de Uso,
            em conformidade com LGPD (Brasil) e GDPR (Europa).
            <br />
            Acesse Configurações &gt; Privacidade para gerenciar suas preferências a qualquer momento.
          </p>
        </div>
      </div>
    </div>
  );
}