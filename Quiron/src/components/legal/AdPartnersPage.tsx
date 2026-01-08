import React from 'react';
import { Target, ArrowLeft, ExternalLink } from 'lucide-react';

export function AdPartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-500 flex items-center justify-center shadow-lg">
              <Target className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl mb-1">Parceiros de Anúncios</h1>
              <p className="text-gray-400">Última atualização: Dezembro de 2024</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl text-white mb-3">1. Sobre os Anúncios</h2>
            <p className="leading-relaxed">
              Para oferecer o Quiron Concursos gratuitamente, exibimos anúncios fornecidos por parceiros 
              terceirizados. Estes anúncios ajudam a sustentar o desenvolvimento e manutenção do aplicativo. 
              Usuários Premium não visualizam anúncios.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">2. Nossos Parceiros Publicitários</h2>
            
            {/* Google AdSense */}
            <div className="bg-gray-800/50 rounded-xl p-5 border border-gray-700 mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-white mb-2 flex items-center gap-2">
                    Google AdSense
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </h3>
                  
                  <p className="text-sm mb-3">
                    O Google AdSense é nosso principal parceiro para exibição de anúncios personalizados 
                    baseados em seus interesses e comportamento de navegação.
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <p><strong>Dados coletados pelo Google:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                      <li>Cookies e identificadores de publicidade</li>
                      <li>Endereço IP (anonimizado)</li>
                      <li>Interações com anúncios (cliques, visualizações)</li>
                      <li>Informações do dispositivo e navegador</li>
                      <li>Dados demográficos inferidos (idade, interesses)</li>
                    </ul>
                    
                    <p className="mt-3"><strong>Como seus dados são usados:</strong></p>
                    <ul className="list-disc list-inside space-y-1 ml-4 text-xs">
                      <li>Personalizar anúncios relevantes aos seus interesses</li>
                      <li>Medir eficácia de campanhas publicitárias</li>
                      <li>Prevenir fraudes e cliques inválidos</li>
                      <li>Melhorar produtos e serviços do Google</li>
                    </ul>

                    <div className="mt-4 space-y-2">
                      <p><strong>Links úteis do Google:</strong></p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="https://policies.google.com/privacy"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center gap-1"
                        >
                          Política de Privacidade
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href="https://policies.google.com/technologies/ads"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center gap-1"
                        >
                          Como funcionam os anúncios
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href="https://adssettings.google.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center gap-1"
                        >
                          Gerenciar preferências de anúncios
                          <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                          href="https://tools.google.com/dlpage/gaoptout"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:text-blue-300 transition-colors text-xs flex items-center gap-1"
                        >
                          Desativar Google Analytics
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/20 rounded-xl p-4 border border-blue-500/30">
              <p className="text-sm text-blue-300">
                <strong>💡 Dica:</strong> Se você preferir não ver anúncios personalizados, 
                pode desativar a personalização nas configurações de anúncios do Google ou 
                assinar o plano Premium para remover todos os anúncios.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">3. Como Controlar Anúncios Personalizados</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-white mb-2">3.1 Nas Configurações do Quiron:</h3>
                <p className="text-sm">
                  Acesse <strong>Configurações {'>'} Privacidade {'>'} Gerenciar Cookies</strong> 
                  e desative "Cookies Publicitários". Você continuará vendo anúncios, mas não personalizados.
                </p>
              </div>

              <div>
                <h3 className="text-white mb-2">3.2 Nas Configurações do Google:</h3>
                <p className="text-sm mb-2">
                  Visite{' '}
                  <a
                    href="https://adssettings.google.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Google Ad Settings
                  </a>
                  {' '}para gerenciar suas preferências de anúncios.
                </p>
              </div>

              <div>
                <h3 className="text-white mb-2">3.3 No Seu Dispositivo:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><strong>Android:</strong> Configurações {'>'} Google {'>'} Anúncios {'>'} Desativar personalização</li>
                  <li><strong>iOS:</strong> Ajustes {'>'} Privacidade {'>'} Publicidade {'>'} Limitar Rastreamento</li>
                </ul>
              </div>

              <div>
                <h3 className="text-white mb-2">3.4 Assinatura Premium:</h3>
                <p className="text-sm">
                  Assine o plano Premium por R$ 29,90/mês para remover completamente todos os anúncios 
                  e ter energia ilimitada para todos os recursos.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">4. Tipos de Anúncios Exibidos</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-white mb-1">Anúncios Display (Banners):</h3>
                <p className="text-sm">
                  Imagens estáticas ou animadas exibidas em diversas posições do app. 
                  Podem ser relacionados a educação, tecnologia, e-commerce, entre outros.
                </p>
              </div>

              <div>
                <h3 className="text-white mb-1">Anúncios Nativos:</h3>
                <p className="text-sm">
                  Anúncios integrados ao design do app de forma natural, claramente identificados como "Patrocinado".
                </p>
              </div>

              <div>
                <h3 className="text-white mb-1">Anúncios em Vídeo:</h3>
                <p className="text-sm">
                  Vídeos curtos que podem ser exibidos ocasionalmente. Sempre com opção de pular após alguns segundos.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">5. Padrões de Qualidade</h2>
            <p className="leading-relaxed mb-3">
              Nos comprometemos a exibir apenas anúncios de qualidade que respeitam nossos usuários:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Sem anúncios enganosos ou fraudulentos</li>
              <li>Sem conteúdo adulto ou inapropriado</li>
              <li>Sem malware ou downloads automáticos</li>
              <li>Sem anúncios que cubram conteúdo essencial</li>
              <li>Limitação de frequência para evitar excesso</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">6. Relatar Anúncios Inadequados</h2>
            <p className="leading-relaxed mb-3">
              Se você visualizar um anúncio inadequado, inapropriado ou suspeito:
            </p>
            <div className="bg-red-900/20 rounded-xl p-4 border border-red-500/30">
              <p className="text-sm mb-2">
                <strong>📧 Email:</strong> anuncios@quironconcursos.com.br
              </p>
              <p className="text-sm mb-2">
                <strong>Inclua:</strong> Screenshot do anúncio, data/hora, e descrição do problema
              </p>
              <p className="text-xs text-gray-400">
                Analisaremos e tomaremos medidas apropriadas em até 48 horas.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">7. Futuras Parcerias</h2>
            <p className="leading-relaxed">
              Podemos adicionar novos parceiros publicitários no futuro. Esta página será atualizada 
              e você será notificado sobre mudanças significativas. Todos os parceiros devem cumprir 
              nossas políticas de privacidade e qualidade.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">8. Opt-Out de Publicidade Comportamental</h2>
            <p className="leading-relaxed mb-3">
              Além das opções acima, você pode optar por não participar de publicidade comportamental através de:
            </p>
            <div className="space-y-2">
              <a
                href="https://optout.networkadvertising.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Network Advertising Initiative (NAI)
              </a>
              <a
                href="https://optout.aboutads.info/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Digital Advertising Alliance (DAA)
              </a>
              <a
                href="https://youronlinechoices.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Your Online Choices (Europa)
              </a>
            </div>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl text-white mb-3">9. Contato</h2>
            <p className="mb-4">Dúvidas sobre anúncios ou parcerias:</p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> anuncios@quironconcursos.com.br</p>
              <p><strong>Suporte Geral:</strong> suporte@quironconcursos.com.br</p>
            </div>
          </section>

          <section className="text-center py-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 Quiron Concursos. Todos os direitos reservados.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
