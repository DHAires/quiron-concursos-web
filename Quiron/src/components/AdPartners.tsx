import React from 'react';
import { ArrowLeft, ExternalLink, Shield, Info, Eye, Settings } from 'lucide-react';

interface AdPartnersProps {
  onBack?: () => void;
}

export function AdPartners({ onBack }: AdPartnersProps) {
  const partners = [
    {
      name: 'Google AdMob',
      logo: '🔷',
      description: 'Principal parceiro de publicidade. Fornece anúncios personalizados baseados em seus interesses.',
      privacyUrl: 'https://policies.google.com/privacy',
      optOutUrl: 'https://adssettings.google.com/',
      dataCollected: [
        'ID de publicidade do dispositivo',
        'Endereço IP (anonimizado)',
        'Informações do dispositivo',
        'Dados de localização aproximada',
        'Interações com anúncios'
      ],
      purposes: [
        'Exibir anúncios relevantes',
        'Medir performance de campanhas',
        'Prevenir fraudes',
        'Personalizar experiência publicitária'
      ]
    },
    {
      name: 'Google Analytics',
      logo: '📊',
      description: 'Análise de uso do aplicativo para melhorar a experiência do usuário.',
      privacyUrl: 'https://policies.google.com/privacy',
      optOutUrl: 'https://tools.google.com/dlpage/gaoptout',
      dataCollected: [
        'Páginas visitadas',
        'Tempo de uso',
        'Eventos e interações',
        'Dispositivo e sistema operacional',
        'Dados demográficos agregados'
      ],
      purposes: [
        'Entender comportamento dos usuários',
        'Identificar bugs e problemas',
        'Otimizar funcionalidades',
        'Análise estatística'
      ]
    },
    {
      name: 'Firebase',
      logo: '🔥',
      description: 'Plataforma para analytics, notificações push e crash reporting.',
      privacyUrl: 'https://firebase.google.com/support/privacy',
      optOutUrl: null,
      dataCollected: [
        'Identificador de instalação (FID)',
        'Dados de crashes',
        'Tokens de notificação',
        'Eventos personalizados',
        'Propriedades do usuário'
      ],
      purposes: [
        'Enviar notificações push',
        'Detectar e corrigir crashes',
        'Análise de engajamento',
        'Melhorar estabilidade do app'
      ]
    },
    {
      name: 'Supabase',
      logo: '⚡',
      description: 'Infraestrutura de backend e banco de dados (hospedado na AWS).',
      privacyUrl: 'https://supabase.com/privacy',
      optOutUrl: null,
      dataCollected: [
        'Dados de cadastro',
        'Progresso de estudos',
        'Configurações da conta',
        'Conteúdo gerado pelo usuário',
        'Logs de autenticação'
      ],
      purposes: [
        'Armazenar dados da conta',
        'Sincronizar progresso',
        'Autenticação segura',
        'Backup e recuperação'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 mb-6 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-xl transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>
        )}

        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-indigo-500/30 rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Title */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-800">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/50">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Parceiros de Anúncios e Dados</h1>
              <p className="text-gray-400 text-sm">Transparência sobre terceiros que processam seus dados</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300">
            {/* Introdução */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl text-white">Por que compartilhamos dados?</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="leading-relaxed mb-4">
                  Para fornecer o <strong className="text-white">Quiron Concursos</strong> gratuitamente, utilizamos serviços de parceiros de confiança. Esses parceiros nos ajudam a:
                </p>
                <ul className="space-y-2">
                  <li>• <strong className="text-white">Monetizar via anúncios:</strong> Exibir publicidade relevante na versão gratuita</li>
                  <li>• <strong className="text-white">Melhorar o app:</strong> Analisar uso, identificar bugs e otimizar performance</li>
                  <li>• <strong className="text-white">Fornecer funcionalidades:</strong> Notificações, sincronização de dados, autenticação</li>
                </ul>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm text-blue-300">
                    <strong>Seu controle:</strong> Você pode desativar anúncios personalizados, limitar coleta de dados e gerenciar permissões. Veja instruções no final desta página.
                  </p>
                </div>
              </div>
            </section>

            {/* Lista de Parceiros */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">Nossos Parceiros</h2>
              </div>

              <div className="space-y-6">
                {partners.map((partner, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-700 hover:border-indigo-500/50 rounded-xl p-5 transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4 pb-4 border-b border-gray-800">
                      <div className="text-5xl">{partner.logo}</div>
                      <div className="flex-1">
                        <h3 className="text-2xl text-white mb-2">{partner.name}</h3>
                        <p className="text-sm text-gray-400">{partner.description}</p>
                      </div>
                    </div>

                    {/* Data Collected */}
                    <div className="mb-4">
                      <h4 className="text-lg text-white mb-2 flex items-center gap-2">
                        <span className="text-yellow-400">📊</span>
                        Dados Coletados
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {partner.dataCollected.map((item, i) => (
                          <li key={i} className="text-gray-400">• {item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Purposes */}
                    <div className="mb-4">
                      <h4 className="text-lg text-white mb-2 flex items-center gap-2">
                        <span className="text-green-400">🎯</span>
                        Finalidades
                      </h4>
                      <ul className="space-y-1 text-sm">
                        {partner.purposes.map((item, i) => (
                          <li key={i} className="text-gray-400">• {item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      <a
                        href={partner.privacyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Política de Privacidade
                      </a>
                      {partner.optOutUrl && (
                        <a
                          href={partner.optOutUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-orange-600 hover:bg-orange-500 rounded-lg transition-all text-sm"
                        >
                          <Settings className="w-4 h-4" />
                          Desativar Personalização
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Processadores de Pagamento */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl text-white">Processadores de Pagamento</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  Para transações financeiras, utilizamos processadores externos certificados:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-lg text-white mb-2">💳 Stripe</h3>
                    <p className="text-sm text-gray-400 mb-3">
                      Pagamentos internacionais (cartão, Apple Pay, Google Pay)
                    </p>
                    <a
                      href="https://stripe.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm flex items-center gap-1"
                    >
                      Ver Política <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-lg text-white mb-2">🇧🇷 MercadoPago</h3>
                    <p className="text-sm text-gray-400 mb-3">
                      Pagamentos no Brasil (PIX, boleto, cartão)
                    </p>
                    <a
                      href="https://www.mercadopago.com.br/privacidade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:underline text-sm flex items-center gap-1"
                    >
                      Ver Política <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-sm text-green-300">
                    <strong>🔒 Segurança:</strong> Não armazenamos dados de cartão. Todas as transações são criptografadas e processadas diretamente pelos parceiros certificados PCI-DSS.
                  </p>
                </div>
              </div>
            </section>

            {/* Transferência Internacional */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl text-white">Transferência Internacional de Dados</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  Alguns parceiros armazenam dados em servidores fora do Brasil:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-white">🇺🇸 Estados Unidos:</strong>
                    <span className="text-sm text-gray-400"> Google (AdMob, Analytics, Firebase), Stripe</span>
                  </li>
                  <li>
                    <strong className="text-white">🇪🇺 União Europeia:</strong>
                    <span className="text-sm text-gray-400"> Supabase (AWS - servidores podem variar)</span>
                  </li>
                  <li>
                    <strong className="text-white">🇧🇷 Brasil:</strong>
                    <span className="text-sm text-gray-400"> MercadoPago, dados locais</span>
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm">
                    <strong className="text-white">Proteções Legais:</strong> Todos os parceiros internacionais utilizam cláusulas contratuais padrão (SCC), certificações ISO 27001 e estão em conformidade com GDPR/LGPD para proteger seus dados.
                  </p>
                </div>
              </div>
            </section>

            {/* Controle do Usuário */}
            <section className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border-2 border-indigo-500/40 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl text-white">Como Controlar Seus Dados</h2>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg text-white mb-3">🎯 Desativar Anúncios Personalizados</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <h4 className="text-white mb-1">Android:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-gray-400">
                        <li>Configurações → Google → Anúncios</li>
                        <li>Ative "Desativar personalização de anúncios"</li>
                        <li>Ou redefina o ID de publicidade</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-white mb-1">iOS:</h4>
                      <ol className="list-decimal list-inside space-y-1 text-gray-400">
                        <li>Ajustes → Privacidade → Rastreamento</li>
                        <li>Desative "Permitir Solicitações de Rastreamento"</li>
                      </ol>
                    </div>

                    <div>
                      <h4 className="text-white mb-1">Google Ads Settings:</h4>
                      <a
                        href="https://adssettings.google.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline flex items-center gap-1"
                      >
                        adssettings.google.com <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg text-white mb-3">📊 Desativar Analytics</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    No Quiron Concursos:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-400">
                    <li>Menu → Perfil → Configuração</li>
                    <li>Privacidade → Coleta de Dados</li>
                    <li>Desative "Compartilhar dados analíticos"</li>
                  </ol>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg text-white mb-3">🔕 Gerenciar Notificações</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Controle do sistema operacional:
                  </p>
                  <ul className="space-y-1 text-sm text-gray-400">
                    <li>• Android: Configurações → Apps → Quiron → Notificações</li>
                    <li>• iOS: Ajustes → Notificações → Quiron</li>
                  </ul>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-lg text-white mb-3">🗑️ Excluir Dados</h3>
                  <p className="text-sm text-gray-400 mb-3">
                    Para remover todos os seus dados:
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-sm text-gray-400">
                    <li>Menu → Perfil → Configuração</li>
                    <li>Privacidade → Excluir Conta</li>
                    <li>Ou envie e-mail: privacidade@quironconcursos.com.br</li>
                  </ol>
                  <p className="text-xs text-yellow-300 mt-3">
                    ⚠️ A exclusão é permanente e não pode ser desfeita. Dados serão removidos em até 30 dias.
                  </p>
                </div>
              </div>
            </section>

            {/* Versão Premium */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-pink-400" />
                <h2 className="text-2xl text-white">Versão Premium - Menos Dados Compartilhados</h2>
              </div>
              <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border-2 border-pink-500/30 rounded-xl p-5">
                <p className="mb-4">
                  Ao assinar o <strong className="text-white">Quiron Premium</strong>, você reduz significativamente o compartilhamento de dados:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>✅ <strong className="text-white">Sem anúncios:</strong> Google AdMob não coleta mais dados de publicidade</li>
                  <li>✅ <strong className="text-white">Analytics básico:</strong> Apenas dados essenciais de uso e performance</li>
                  <li>✅ <strong className="text-white">Privacidade aumentada:</strong> Menos compartilhamento com terceiros</li>
                </ul>
                <button className="w-full md:w-auto px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 rounded-xl transition-all font-semibold">
                  Assinar Premium
                </button>
              </div>
            </section>

            {/* Atualizações */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl text-white">Atualizações desta Lista</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="text-sm">
                  Podemos adicionar ou remover parceiros conforme evoluímos o aplicativo. Alterações materiais serão notificadas via:
                </p>
                <ul className="space-y-1 mt-3 text-sm">
                  <li>• Atualização desta página com nova data</li>
                  <li>• E-mail para usuários cadastrados</li>
                  <li>• Notificação no app (se habilitadas)</li>
                </ul>
                <p className="text-xs text-gray-500 mt-4">
                  Última atualização: 07 de janeiro de 2026
                </p>
              </div>
            </section>

            {/* Contato */}
            <section className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border-2 border-blue-500/40 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl text-white">Dúvidas sobre Parceiros?</h2>
              </div>
              
              <p className="mb-4">
                Entre em contato com nossa equipe de privacidade:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-white mb-2">📧 E-mail</h3>
                  <p className="text-blue-400">privacidade@quironconcursos.com.br</p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-white mb-2">📞 Telefone</h3>
                  <p className="text-blue-400">+55 (11) 99999-9999</p>
                  <p className="text-sm text-gray-400">Seg-Sex, 9h-18h</p>
                </div>
              </div>

              <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm text-yellow-300">
                  <strong>Seus Direitos LGPD:</strong> Acesso, retificação, exclusão, portabilidade e oposição ao processamento de dados. Responderemos em até 15 dias úteis.
                </p>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
              <p>
                © 2026 Quiron Concursos. Todos os direitos reservados.<br />
                CNPJ: 00.000.000/0001-00
              </p>
              <p className="mt-2">
                Esta página é parte integrante da nossa <a href="/privacy-policy" className="text-blue-400 hover:underline">Política de Privacidade</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
