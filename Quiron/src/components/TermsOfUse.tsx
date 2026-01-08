import React from 'react';
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, XCircle, Scale, CreditCard, UserX, Shield } from 'lucide-react';

interface TermsOfUseProps {
  onBack?: () => void;
}

export function TermsOfUse({ onBack }: TermsOfUseProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
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

        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-purple-500/30 rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Title */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-800">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Termos de Uso</h1>
              <p className="text-gray-400 text-sm">Última atualização: 07 de janeiro de 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300">
            {/* Introdução */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">1. Aceitação dos Termos</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="leading-relaxed mb-4">
                  Bem-vindo ao <strong className="text-white">Quiron Concursos</strong>! Estes Termos de Uso ("Termos") estabelecem as condições para acesso e uso do nosso aplicativo móvel, website e serviços relacionados (coletivamente, "Serviço").
                </p>
                <p className="leading-relaxed mb-4">
                  Ao criar uma conta, baixar o aplicativo ou usar nossos serviços, você concorda em cumprir estes Termos. Se você não concordar, não use nosso Serviço.
                </p>
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-sm text-yellow-300">
                    <strong>⚠️ Importante:</strong> Estes Termos constituem um contrato legal vinculante entre você e a Quiron Concursos Ltda. (CNPJ 00.000.000/0001-00).
                  </p>
                </div>
              </div>
            </section>

            {/* Definições */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl text-white">2. Definições</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <ul className="space-y-2">
                  <li>• <strong className="text-white">"Usuário":</strong> Qualquer pessoa que acesse ou utilize o Serviço</li>
                  <li>• <strong className="text-white">"Conta":</strong> Registro individual necessário para acessar recursos do app</li>
                  <li>• <strong className="text-white">"Conteúdo":</strong> Questões, explicações, artigos, vídeos e materiais educacionais</li>
                  <li>• <strong className="text-white">"Energia":</strong> Moeda virtual que limita acesso a questões (modelo freemium)</li>
                  <li>• <strong className="text-white">"Moedas de Ouro":</strong> Moeda virtual para compras no jogo</li>
                  <li>• <strong className="text-white">"Versão Gratuita":</strong> Acesso com energia limitada e anúncios</li>
                  <li>• <strong className="text-white">"Versão Premium":</strong> Assinatura paga sem limites e sem anúncios</li>
                </ul>
              </div>
            </section>

            {/* Elegibilidade */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserX className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl text-white">3. Elegibilidade</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">Para usar o Quiron Concursos, você deve:</p>
                <ul className="space-y-2">
                  <li>✅ Ter no mínimo <strong className="text-white">13 anos de idade</strong></li>
                  <li>✅ Se tiver entre 13-18 anos, possuir consentimento dos pais/responsáveis</li>
                  <li>✅ Fornecer informações verdadeiras e atualizadas no cadastro</li>
                  <li>✅ Não ter sido previamente banido do Serviço</li>
                  <li>✅ Cumprir todas as leis aplicáveis em sua jurisdição</li>
                </ul>
                <p className="mt-4 text-sm text-yellow-300">
                  ⚠️ Menores de 13 anos não podem criar conta. Se identificarmos uso por menores, a conta será imediatamente suspensa.
                </p>
              </div>
            </section>

            {/* Criação de Conta */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl text-white">4. Criação e Segurança da Conta</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h3 className="text-lg text-white mb-3">4.1 Responsabilidades do Usuário</h3>
                <ul className="space-y-2 mb-4">
                  <li>• Fornecer informações precisas e completas no cadastro</li>
                  <li>• Manter sua senha segura e confidencial</li>
                  <li>• Notificar-nos imediatamente sobre uso não autorizado da conta</li>
                  <li>• Não compartilhar sua conta com terceiros</li>
                  <li>• Atualizar seus dados quando houver mudanças</li>
                </ul>

                <h3 className="text-lg text-white mb-3">4.2 Sistema de Energia</h3>
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg mb-4">
                  <p className="text-sm">
                    <strong className="text-white">Cadastro Completo = Mais Energia!</strong><br />
                    Cada campo opcional preenchido no perfil gera +1 energia inicial (até 9 energias extras).
                  </p>
                </div>

                <h3 className="text-lg text-white mb-3">4.3 Proibições</h3>
                <ul className="space-y-2">
                  <li>❌ Criar múltiplas contas (uma por CPF/pessoa)</li>
                  <li>❌ Usar bots ou automações para ganhar energia/moedas</li>
                  <li>❌ Vender ou transferir sua conta</li>
                  <li>❌ Usar informações falsas ou de terceiros</li>
                  <li>❌ Violar a segurança ou integridade do sistema</li>
                </ul>
              </div>
            </section>

            {/* Uso do Serviço */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl text-white">5. Uso Permitido do Serviço</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h3 className="text-lg text-white mb-3">5.1 Licença Limitada</h3>
                <p className="mb-4">
                  Concedemos a você uma licença <strong className="text-white">pessoal, não exclusiva, intransferível e revogável</strong> para usar o Serviço para fins educacionais pessoais.
                </p>

                <h3 className="text-lg text-white mb-3">5.2 Você Pode:</h3>
                <ul className="space-y-2 mb-4">
                  <li>✅ Acessar questões e materiais educacionais</li>
                  <li>✅ Participar de fóruns e chats com respeito</li>
                  <li>✅ Salvar seu progresso de estudos</li>
                  <li>✅ Compartilhar seu desempenho em redes sociais (se disponível)</li>
                  <li>✅ Assistir anúncios para ganhar energia</li>
                </ul>

                <h3 className="text-lg text-white mb-3">5.3 Você NÃO Pode:</h3>
                <ul className="space-y-2">
                  <li>❌ Copiar, reproduzir ou distribuir nosso conteúdo</li>
                  <li>❌ Fazer engenharia reversa do aplicativo</li>
                  <li>❌ Remover marcas d'água, avisos de copyright ou créditos</li>
                  <li>❌ Usar o Serviço para fins comerciais sem autorização</li>
                  <li>❌ Criar obras derivadas baseadas em nosso conteúdo</li>
                  <li>❌ Acessar partes restritas do sistema sem autorização</li>
                  <li>❌ Interferir no funcionamento do app (hackear, sobrecarregar servidores)</li>
                </ul>
              </div>
            </section>

            {/* Conteúdo e Propriedade Intelectual */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl text-white">6. Propriedade Intelectual</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h3 className="text-lg text-white mb-3">6.1 Nosso Conteúdo</h3>
                <p className="mb-4">
                  Todo o conteúdo do Serviço (questões, explicações, design, código, marca "Quiron", logotipos, personagens mitológicos) é de propriedade exclusiva da <strong className="text-white">Quiron Concursos Ltda.</strong> e protegido por leis de direitos autorais, marcas registradas e propriedade intelectual.
                </p>

                <h3 className="text-lg text-white mb-3">6.2 Conteúdo do Usuário</h3>
                <p className="mb-4">
                  Ao enviar comentários, posts em fóruns ou mensagens em chats ("Conteúdo do Usuário"), você concede à Quiron Concursos uma licença mundial, não exclusiva, transferível, sublicenciável e isenta de royalties para usar, reproduzir, distribuir e exibir esse conteúdo no contexto do Serviço.
                </p>
                <p className="text-sm text-yellow-300 mb-4">
                  ⚠️ Você é responsável pelo Conteúdo do Usuário que envia. Não envie material ilegal, ofensivo, difamatório ou que viole direitos de terceiros.
                </p>

                <h3 className="text-lg text-white mb-3">6.3 Direitos Reservados</h3>
                <p>
                  Todos os direitos não expressamente concedidos nestes Termos são reservados à Quiron Concursos.
                </p>
              </div>
            </section>

            {/* Pagamentos e Assinaturas */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-pink-400" />
                <h2 className="text-2xl text-white">7. Pagamentos, Assinaturas e Compras</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h3 className="text-lg text-white mb-3">7.1 Versão Gratuita</h3>
                <ul className="space-y-2 mb-4">
                  <li>• Acesso limitado por sistema de energia</li>
                  <li>• Exibição de anúncios (banner, intersticial, premiado)</li>
                  <li>• Funcionalidades básicas disponíveis</li>
                </ul>

                <h3 className="text-lg text-white mb-3">7.2 Versão Premium</h3>
                <ul className="space-y-2 mb-4">
                  <li>• <strong className="text-white">Assinatura mensal/anual</strong> com renovação automática</li>
                  <li>• Energia ilimitada para responder questões</li>
                  <li>• Sem anúncios</li>
                  <li>• Acesso a conteúdo exclusivo</li>
                  <li>• Suporte prioritário</li>
                </ul>

                <h3 className="text-lg text-white mb-3">7.3 Compras no App</h3>
                <ul className="space-y-2 mb-4">
                  <li>• <strong className="text-white">Pacotes de Energia:</strong> Compra única, não reembolsável</li>
                  <li>• <strong className="text-white">Moedas de Ouro:</strong> Moeda virtual para itens do jogo</li>
                  <li>• <strong className="text-white">Produtos Físicos:</strong> Entrega conforme política de envio</li>
                  <li>• <strong className="text-white">Avatares/Efeitos:</strong> Compra única, permanente na conta</li>
                </ul>

                <h3 className="text-lg text-white mb-3">7.4 Pagamento e Cobrança</h3>
                <div className="space-y-3">
                  <p>• Pagamentos processados via <strong className="text-white">Stripe, MercadoPago ou Google Play Billing</strong></p>
                  <p>• Preços em <strong className="text-white">Reais (BRL)</strong> sujeitos a alteração com aviso prévio de 30 dias</p>
                  <p>• Assinaturas renovam automaticamente até cancelamento</p>
                  <p>• Cancelamento não gera reembolso proporcional (acesso até fim do período pago)</p>
                  <p>• Falha no pagamento resulta em downgrade para versão gratuita</p>
                </div>

                <h3 className="text-lg text-white mb-3 mt-4">7.5 Cancelamento de Assinatura</h3>
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm mb-2"><strong className="text-white">Como Cancelar:</strong></p>
                  <ul className="text-sm space-y-1">
                    <li>• No app: Menu → Perfil → Assinatura → Cancelar</li>
                    <li>• Google Play Store: Assinaturas → Quiron Concursos → Cancelar</li>
                    <li>• Suporte: contato@quironconcursos.com.br</li>
                  </ul>
                  <p className="text-xs text-gray-400 mt-2">
                    Cancele pelo menos 24h antes da renovação para evitar cobrança do próximo ciclo.
                  </p>
                </div>

                <h3 className="text-lg text-white mb-3 mt-4">7.6 Política de Reembolso</h3>
                <ul className="space-y-2">
                  <li>• <strong className="text-white">Assinaturas:</strong> Reembolso dentro de 7 dias da primeira compra (Lei do Consumidor)</li>
                  <li>• <strong className="text-white">Compras únicas:</strong> Não reembolsáveis após consumo (energia gasta, itens usados)</li>
                  <li>• <strong className="text-white">Produtos físicos:</strong> Conforme Código de Defesa do Consumidor (direito de arrependimento em 7 dias)</li>
                  <li>• <strong className="text-white">Solicitação:</strong> reembolso@quironconcursos.com.br com justificativa</li>
                </ul>
              </div>
            </section>

            {/* Conduta do Usuário */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl text-white">8. Conduta Proibida</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">É estritamente proibido:</p>
                <ul className="space-y-2">
                  <li>❌ Assediar, intimidar ou ameaçar outros usuários</li>
                  <li>❌ Publicar conteúdo ofensivo, discriminatório, racista, sexista ou violento</li>
                  <li>❌ Compartilhar material pornográfico ou inadequado para menores</li>
                  <li>❌ Fazer spam, phishing ou enviar malware</li>
                  <li>❌ Violar privacidade de outros usuários</li>
                  <li>❌ Fingir ser outra pessoa ou entidade (impersonation)</li>
                  <li>❌ Manipular rankings ou estatísticas (trapaça)</li>
                  <li>❌ Explorar bugs para obter vantagens</li>
                  <li>❌ Usar linguagem ofensiva ou xingamentos</li>
                  <li>❌ Promover produtos/serviços sem autorização</li>
                </ul>
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-300">
                    <strong>⚠️ Violações podem resultar em:</strong> Advertência, suspensão temporária ou banimento permanente da conta, sem reembolso.
                  </p>
                </div>
              </div>
            </section>

            {/* Suspensão e Encerramento */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <XCircle className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl text-white">9. Suspensão e Encerramento</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h3 className="text-lg text-white mb-3">9.1 Por Você</h3>
                <p className="mb-4">
                  Você pode encerrar sua conta a qualquer momento através de: Menu → Perfil → Configuração → Excluir Conta. Seus dados serão deletados conforme Política de Privacidade.
                </p>

                <h3 className="text-lg text-white mb-3">9.2 Por Nós</h3>
                <p className="mb-4">
                  Reservamo-nos o direito de suspender ou encerrar sua conta, sem aviso prévio, em caso de:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Violação destes Termos</li>
                  <li>• Suspeita de fraude ou atividade ilegal</li>
                  <li>• Inatividade por mais de 2 anos</li>
                  <li>• Solicitação de autoridade judicial</li>
                  <li>• Descontinuação do Serviço (com aviso de 30 dias)</li>
                </ul>

                <h3 className="text-lg text-white mb-3">9.3 Efeitos do Encerramento</h3>
                <ul className="space-y-2">
                  <li>• Perda de acesso ao conteúdo e progresso</li>
                  <li>• Energia, moedas e itens virtuais não são reembolsáveis</li>
                  <li>• Assinaturas ativas continuam até fim do período pago</li>
                  <li>• Obrigações de pagamento permanecem em vigor</li>
                </ul>
              </div>
            </section>

            {/* Isenção de Garantias */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl text-white">10. Isenção de Garantias</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  O Serviço é fornecido <strong className="text-white">"NO ESTADO EM QUE SE ENCONTRA"</strong> e <strong className="text-white">"CONFORME DISPONIBILIDADE"</strong>, sem garantias de qualquer tipo, expressas ou implícitas.
                </p>
                <p className="mb-4">NÃO GARANTIMOS que:</p>
                <ul className="space-y-2">
                  <li>• O Serviço será ininterrupto, seguro ou livre de erros</li>
                  <li>• Defeitos serão corrigidos imediatamente</li>
                  <li>• O conteúdo é sempre 100% preciso ou atualizado</li>
                  <li>• Você será aprovado em concursos usando nosso app</li>
                  <li>• Os servidores estarão sempre disponíveis (manutenções podem ocorrer)</li>
                </ul>
                <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-sm text-yellow-300">
                    <strong>⚠️ Importante:</strong> O Quiron Concursos é uma ferramenta de apoio aos estudos. O sucesso em concursos depende de esforço pessoal, dedicação e outros fatores externos.
                  </p>
                </div>
              </div>
            </section>

            {/* Limitação de Responsabilidade */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl text-white">11. Limitação de Responsabilidade</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  NA MÁXIMA EXTENSÃO PERMITIDA POR LEI, a Quiron Concursos, seus diretores, funcionários e parceiros NÃO SERÃO RESPONSÁVEIS POR:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Perda de dados, progresso ou conteúdo</li>
                  <li>• Danos indiretos, incidentais, especiais ou consequenciais</li>
                  <li>• Lucros cessantes ou perda de oportunidade</li>
                  <li>• Reprovação em concursos</li>
                  <li>• Ações de terceiros (outros usuários, anunciantes)</li>
                  <li>• Falhas técnicas, vírus ou ataques cibernéticos</li>
                  <li>• Interrupções no serviço de internet/energia</li>
                </ul>
                <p className="text-sm">
                  Em qualquer caso, nossa responsabilidade máxima será limitada ao valor pago por você nos <strong className="text-white">últimos 12 meses</strong> ou <strong className="text-white">R$ 100,00</strong> (cem reais), o que for menor.
                </p>
                <div className="mt-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-sm text-red-300">
                    <strong>Exceções:</strong> Esta limitação não se aplica a casos de dolo, fraude ou violações que não possam ser excluídas por lei (ex: Código de Defesa do Consumidor).
                  </p>
                </div>
              </div>
            </section>

            {/* Indenização */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-teal-400" />
                <h2 className="text-2xl text-white">12. Indenização</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p>
                  Você concorda em <strong className="text-white">indenizar, defender e isentar</strong> a Quiron Concursos de quaisquer reclamações, danos, custos e despesas (incluindo honorários advocatícios) decorrentes de:
                </p>
                <ul className="space-y-2 mt-4">
                  <li>• Seu uso do Serviço</li>
                  <li>• Violação destes Termos</li>
                  <li>• Violação de direitos de terceiros</li>
                  <li>• Conteúdo do Usuário que você enviar</li>
                  <li>• Atividades ilegais ou fraudulentas</li>
                </ul>
              </div>
            </section>

            {/* Lei Aplicável */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl text-white">13. Lei Aplicável e Foro</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  Estes Termos são regidos pelas <strong className="text-white">leis da República Federativa do Brasil</strong>, especialmente:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• <strong className="text-white">Lei 8.078/90</strong> - Código de Defesa do Consumidor (CDC)</li>
                  <li>• <strong className="text-white">Lei 13.709/18</strong> - Lei Geral de Proteção de Dados (LGPD)</li>
                  <li>• <strong className="text-white">Lei 12.965/14</strong> - Marco Civil da Internet</li>
                </ul>
                <p className="mb-4">
                  Fica eleito o <strong className="text-white">Foro da Comarca de São Paulo/SP</strong> para dirimir quaisquer controvérsias decorrentes destes Termos, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                </p>
                <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm">
                    <strong className="text-white">Resolução de Conflitos:</strong> Antes de recorrer ao Judiciário, incentivamos contato com nosso Suporte para resolução amigável. Você também pode usar plataformas de mediação online como consumidor.gov.br.
                  </p>
                </div>
              </div>
            </section>

            {/* Alterações */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-pink-400" />
                <h2 className="text-2xl text-white">14. Alterações nos Termos</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  Podemos modificar estes Termos a qualquer momento. Alterações materiais serão notificadas com:
                </p>
                <ul className="space-y-2 mb-4">
                  <li>• Aviso no app por 30 dias</li>
                  <li>• E-mail para conta cadastrada</li>
                  <li>• Notificação push (se habilitadas)</li>
                </ul>
                <p className="mb-4">
                  Alterações entram em vigor <strong className="text-white">30 dias após publicação</strong>. Se você continuar usando o Serviço após esse período, aceita os novos Termos.
                </p>
                <p className="text-sm text-yellow-300">
                  💡 Se discordar das alterações, você pode encerrar sua conta antes da data de vigência.
                </p>
              </div>
            </section>

            {/* Disposições Gerais */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl text-white">15. Disposições Gerais</h2>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h3 className="text-white mb-2">15.1 Acordo Integral</h3>
                <p className="mb-4 text-sm">
                  Estes Termos, juntamente com a Política de Privacidade, constituem o acordo integral entre você e a Quiron Concursos.
                </p>

                <h3 className="text-white mb-2">15.2 Cessão</h3>
                <p className="mb-4 text-sm">
                  Você não pode ceder ou transferir estes Termos. Podemos ceder a terceiros (ex: em caso de venda da empresa).
                </p>

                <h3 className="text-white mb-2">15.3 Nulidade Parcial</h3>
                <p className="mb-4 text-sm">
                  Se alguma cláusula for considerada inválida, as demais permanecem em vigor.
                </p>

                <h3 className="text-white mb-2">15.4 Renúncia</h3>
                <p className="mb-4 text-sm">
                  A não aplicação de qualquer disposição não constitui renúncia ao direito de aplicá-la posteriormente.
                </p>

                <h3 className="text-white mb-2">15.5 Relação entre as Partes</h3>
                <p className="text-sm">
                  Estes Termos não criam sociedade, parceria, vínculo empregatício ou representação entre você e a Quiron Concursos.
                </p>
              </div>
            </section>

            {/* Contato */}
            <section className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-2 border-purple-500/40 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">16. Contato</h2>
              </div>
              
              <p className="mb-4">
                Dúvidas sobre estes Termos? Entre em contato:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-white mb-2">📧 E-mail</h3>
                  <p className="text-purple-400">contato@quironconcursos.com.br</p>
                  <p className="text-purple-400">juridico@quironconcursos.com.br</p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-white mb-2">📞 Telefone</h3>
                  <p className="text-purple-400">+55 (11) 99999-9999</p>
                  <p className="text-sm text-gray-400">Seg-Sex, 9h-18h</p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-white mb-2">📍 Endereço</h3>
                  <p className="text-sm">
                    Quiron Concursos Ltda.<br />
                    Rua Exemplo, 123 - Sala 456<br />
                    São Paulo, SP - CEP 01234-567
                  </p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-white mb-2">🌐 Website</h3>
                  <a 
                    href="https://www.quironconcursos.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline"
                  >
                    www.quironconcursos.com.br
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
              <p className="mb-2">
                <strong className="text-white">Quiron Concursos Ltda.</strong><br />
                CNPJ: 00.000.000/0001-00<br />
                Rua Exemplo, 123 - São Paulo/SP
              </p>
              <p className="mb-4">
                © 2026 Quiron Concursos. Todos os direitos reservados.
              </p>
              <p className="text-xs">
                Ao usar nosso Serviço, você concorda com estes Termos de Uso e nossa Política de Privacidade.<br />
                Documento em conformidade com CDC, LGPD e Marco Civil da Internet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
