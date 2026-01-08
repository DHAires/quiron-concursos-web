import React from 'react';
import { FileText, ArrowLeft, AlertTriangle } from 'lucide-react';

export function TermsOfUsePage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center shadow-lg">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl mb-1">Termos de Uso</h1>
              <p className="text-gray-400">Última atualização: Dezembro de 2024</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl text-white mb-3">1. Aceitação dos Termos</h2>
            <p className="leading-relaxed">
              Ao acessar e usar o Quiron Concursos ("Aplicativo", "Serviço"), você concorda em cumprir 
              estes Termos de Uso. Se não concordar com algum termo, não utilize o Aplicativo.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">2. Descrição do Serviço</h2>
            <p className="leading-relaxed mb-3">
              O Quiron Concursos é uma plataforma educacional para preparação de concursos públicos, oferecendo:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Banco de questões organizadas por áreas temáticas</li>
              <li>Game interativo 3D-quiz com sistema de ranking</li>
              <li>Chat com IA Prometheus para auxílio nos estudos</li>
              <li>Comunidade e fórum para discussões</li>
              <li>Análises de desempenho e estatísticas</li>
              <li>Versão gratuita (com anúncios) e Premium (sem anúncios + recursos exclusivos)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">3. Cadastro e Conta</h2>
            <div className="space-y-3">
              <p>Ao criar uma conta, você concorda em:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Fornecer informações precisas, atuais e completas</li>
                <li>Manter a segurança de sua senha</li>
                <li>Notificar imediatamente sobre uso não autorizado</li>
                <li>Ter pelo menos 13 anos de idade (menores de 18 precisam de consentimento parental)</li>
                <li>Não criar múltiplas contas para manipular rankings</li>
              </ul>
              <p className="text-yellow-400 flex items-start gap-2 mt-3">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Você é responsável por todas as atividades realizadas em sua conta.</span>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">4. Uso Aceitável</h2>
            <div className="space-y-3">
              <p>Você concorda em NÃO:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Usar o Aplicativo para fins ilegais ou não autorizados</li>
                <li>Violar direitos de propriedade intelectual</li>
                <li>Publicar conteúdo ofensivo, discriminatório ou inadequado</li>
                <li>Fazer engenharia reversa, descompilar ou modificar o código</li>
                <li>Usar bots, scrapers ou automação para manipular o sistema</li>
                <li>Compartilhar credenciais de conta Premium</li>
                <li>Interferir ou interromper o funcionamento do Aplicativo</li>
                <li>Coletar dados de outros usuários sem consentimento</li>
                <li>Criar conteúdo falso ou enganoso no fórum/comunidade</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">5. Sistema de Energia (Freemium)</h2>
            <p className="leading-relaxed">
              Usuários gratuitos recebem energia limitada para uso de recursos premium (Prometheus AI, Game). 
              Energia adicional pode ser obtida completando o perfil, indicando amigos ou assinando o plano Premium.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">6. Assinatura Premium</h2>
            <div className="space-y-3">
              <p><strong>6.1 Planos e Preços:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Mensal: R$ 29,90/mês (renovação automática)</li>
                <li>Anual: R$ 299,00/ano (economia de R$ 59,00)</li>
              </ul>
              
              <p className="mt-3"><strong>6.2 Benefícios Premium:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Energia ilimitada para Prometheus AI e Game</li>
                <li>Sem anúncios publicitários</li>
                <li>Estatísticas avançadas e relatórios personalizados</li>
                <li>Acesso prioritário a novos recursos</li>
                <li>Badge exclusivo no perfil e ranking</li>
              </ul>
              
              <p className="mt-3"><strong>6.3 Renovação e Cancelamento:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Renovação automática ao final do período</li>
                <li>Cancele a qualquer momento sem multas</li>
                <li>Após cancelamento, acesso Premium continua até o fim do período pago</li>
                <li>Sem reembolso para períodos já utilizados</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">7. Pagamentos e Reembolsos</h2>
            <div className="space-y-3">
              <p>Aceitamos PIX, cartão de crédito e boleto bancário.</p>
              
              <p><strong>Política de Reembolso:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Reembolso integral em até 7 dias após primeira compra (Código de Defesa do Consumidor)</li>
                <li>Após 7 dias, sem reembolso para assinaturas parcialmente utilizadas</li>
                <li>Problemas técnicos que impeçam uso serão analisados caso a caso</li>
                <li>Processamento de reembolso em até 30 dias úteis</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">8. Propriedade Intelectual</h2>
            <p className="leading-relaxed">
              Todo o conteúdo do Aplicativo (questões, design, código, marca, logotipos) é propriedade 
              da Quiron Concursos ou licenciado legalmente. É proibido copiar, reproduzir, modificar ou 
              distribuir sem autorização prévia por escrito.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">9. Conteúdo do Usuário</h2>
            <div className="space-y-3">
              <p>Ao publicar no fórum, comunidade ou chat:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Você mantém direitos autorais do seu conteúdo</li>
                <li>Concede à Quiron licença não-exclusiva para exibir e distribuir</li>
                <li>É responsável pela legalidade e originalidade do conteúdo</li>
                <li>Conteúdo inadequado pode ser removido sem aviso prévio</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">10. Publicidade</h2>
            <p className="leading-relaxed">
              Usuários gratuitos visualizarão anúncios fornecidos por parceiros (Google AdSense). 
              Os anúncios são personalizados conforme sua Política de Privacidade aceita. 
              Assinantes Premium não veem anúncios.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">11. Disponibilidade do Serviço</h2>
            <p className="leading-relaxed">
              Nos esforçamos para manter o Aplicativo disponível 24/7, mas não garantimos operação 
              ininterrupta. Manutenções programadas serão notificadas com antecedência quando possível.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">12. Modificações e Encerramento</h2>
            <p className="leading-relaxed">
              Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer parte do Serviço 
              a qualquer momento. Podemos encerrar ou suspender sua conta se violar estes Termos.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">13. Isenção de Garantias</h2>
            <p className="leading-relaxed">
              O Serviço é fornecido "como está" e "conforme disponível", sem garantias de qualquer tipo. 
              Não garantimos aprovação em concursos ou resultados específicos de estudo.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">14. Limitação de Responsabilidade</h2>
            <p className="leading-relaxed">
              A Quiron Concursos não será responsável por danos diretos, indiretos, incidentais ou 
              consequenciais resultantes do uso ou impossibilidade de uso do Serviço, até o limite 
              máximo permitido pela lei brasileira.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">15. Lei Aplicável e Foro</h2>
            <p className="leading-relaxed">
              Estes Termos são regidos pelas leis da República Federativa do Brasil. 
              Fica eleito o foro da comarca de [Cidade], com exclusão de qualquer outro, 
              para dirimir quaisquer controvérsias.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">16. Alterações nos Termos</h2>
            <p className="leading-relaxed">
              Podemos atualizar estes Termos periodicamente. Mudanças significativas serão notificadas 
              por email ou notificação no app com 30 dias de antecedência. Uso continuado após alterações 
              constitui aceitação dos novos Termos.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl text-white mb-3">17. Contato</h2>
            <p className="mb-4">Para dúvidas sobre estes Termos:</p>
            <div className="space-y-2">
              <p><strong>Email:</strong> suporte@quironconcursos.com.br</p>
              <p><strong>WhatsApp:</strong> (11) 91234-5678</p>
              <p className="text-sm text-gray-400 mt-4">
                Razão Social: Quiron Educação Ltda.<br />
                CNPJ: 00.000.000/0001-00<br />
                Endereço: [Endereço completo]
              </p>
            </div>
          </section>

          <section className="text-center py-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 Quiron Concursos. Todos os direitos reservados.
              <br />
              Conforme Código de Defesa do Consumidor (Lei 8.078/90) e Marco Civil da Internet (Lei 12.965/14)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
