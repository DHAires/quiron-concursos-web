import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, Globe, FileText, AlertCircle } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack?: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white p-4 md:p-8">
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

        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/30 rounded-2xl p-6 md:p-8 shadow-2xl">
          {/* Title */}
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-800">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">Política de Privacidade</h1>
              <p className="text-gray-400 text-sm">Última atualização: 07 de janeiro de 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-gray-300">
            {/* Introdução */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl text-white">1. Introdução</h2>
              </div>
              <p className="leading-relaxed mb-4">
                A <strong className="text-white">Quiron Concursos</strong> ("nós", "nosso" ou "nos") está comprometida em proteger e respeitar sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações pessoais quando você utiliza nosso aplicativo móvel e serviços relacionados.
              </p>
              <p className="leading-relaxed">
                Ao usar o aplicativo Quiron Concursos, você concorda com a coleta e uso de informações de acordo com esta política. Esta política está em conformidade com:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li><strong className="text-blue-400">LGPD</strong> - Lei Geral de Proteção de Dados (Brasil - Lei nº 13.709/2018)</li>
                <li><strong className="text-blue-400">GDPR</strong> - General Data Protection Regulation (União Europeia)</li>
                <li><strong className="text-blue-400">Google Play Policies</strong> - Políticas de Privacidade da Google Play Store</li>
              </ul>
            </section>

            {/* Dados Coletados */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-purple-400" />
                <h2 className="text-2xl text-white">2. Dados Coletados</h2>
              </div>
              
              <h3 className="text-xl text-white mb-3">2.1 Informações Fornecidas por Você</h3>
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4 border border-gray-700">
                <ul className="space-y-2">
                  <li>• <strong className="text-white">Dados de Cadastro:</strong> Nome, e-mail, data de nascimento, CPF, telefone</li>
                  <li>• <strong className="text-white">Dados Opcionais:</strong> Estado, cidade, concurso desejado, escolaridade, tempo de estudo, área de interesse, ocupação atual, experiência em concursos</li>
                  <li>• <strong className="text-white">Conteúdo do Usuário:</strong> Comentários em fóruns, mensagens em chats, avaliações</li>
                  <li>• <strong className="text-white">Dados de Pagamento:</strong> Informações processadas por parceiros (Stripe/MercadoPago) - não armazenamos dados de cartão</li>
                </ul>
              </div>

              <h3 className="text-xl text-white mb-3">2.2 Informações Coletadas Automaticamente</h3>
              <div className="bg-gray-800/50 rounded-xl p-4 mb-4 border border-gray-700">
                <ul className="space-y-2">
                  <li>• <strong className="text-white">Dados de Uso:</strong> Questões respondidas, tempo de estudo, áreas acessadas, progresso, pontuações</li>
                  <li>• <strong className="text-white">Dados do Dispositivo:</strong> Modelo, sistema operacional, versão do app, identificador único, idioma</li>
                  <li>• <strong className="text-white">Dados de Rede:</strong> Endereço IP (anonimizado), provedor de internet, tipo de conexão</li>
                  <li>• <strong className="text-white">Cookies e Tecnologias Similares:</strong> Para funcionamento do app e análise de uso</li>
                  <li>• <strong className="text-white">Dados de Publicidade:</strong> ID de publicidade do dispositivo (para anúncios personalizados)</li>
                </ul>
              </div>

              <h3 className="text-xl text-white mb-3">2.3 Dados de Terceiros</h3>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <ul className="space-y-2">
                  <li>• <strong className="text-white">Login Social:</strong> Se você usar Google/Facebook para login, receberemos nome, e-mail e foto de perfil</li>
                  <li>• <strong className="text-white">Analytics:</strong> Google Analytics e Firebase Analytics coletam dados agregados de uso</li>
                </ul>
              </div>
            </section>

            {/* Finalidades */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-green-400" />
                <h2 className="text-2xl text-white">3. Como Usamos Seus Dados</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h3 className="text-lg text-white mb-2">3.1 Finalidades Principais</h3>
                <ul className="space-y-2 mb-4">
                  <li>• <strong className="text-white">Fornecimento do Serviço:</strong> Criar conta, salvar progresso, sincronizar dados</li>
                  <li>• <strong className="text-white">Personalização:</strong> Adaptar conteúdo, recomendar questões, ajustar dificuldade</li>
                  <li>• <strong className="text-white">Comunicação:</strong> Notificações sobre atualizações, novidades, lembretes de estudo</li>
                  <li>• <strong className="text-white">Suporte:</strong> Responder dúvidas, resolver problemas técnicos</li>
                  <li>• <strong className="text-white">Melhoria do App:</strong> Análise de uso, identificação de bugs, desenvolvimento de novos recursos</li>
                </ul>

                <h3 className="text-lg text-white mb-2">3.2 Publicidade (Versão Gratuita)</h3>
                <ul className="space-y-2 mb-4">
                  <li>• <strong className="text-white">Anúncios Personalizados:</strong> Exibimos anúncios baseados em seus interesses via Google AdMob</li>
                  <li>• <strong className="text-white">Medição de Performance:</strong> Analisamos eficácia dos anúncios</li>
                  <li>• <strong className="text-white">Opt-out:</strong> Você pode desativar anúncios personalizados nas configurações do dispositivo</li>
                </ul>

                <h3 className="text-lg text-white mb-2">3.3 Bases Legais (LGPD/GDPR)</h3>
                <ul className="space-y-2">
                  <li>• <strong className="text-white">Consentimento:</strong> Ao aceitar esta política e criar conta</li>
                  <li>• <strong className="text-white">Execução de Contrato:</strong> Para fornecer o serviço que você solicitou</li>
                  <li>• <strong className="text-white">Interesse Legítimo:</strong> Melhorar o app, prevenir fraudes, garantir segurança</li>
                  <li>• <strong className="text-white">Obrigação Legal:</strong> Cumprimento de leis fiscais, contábeis e regulatórias</li>
                </ul>
              </div>
            </section>

            {/* Compartilhamento */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl text-white">4. Compartilhamento de Dados</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">Compartilhamos seus dados apenas nas seguintes situações:</p>
                
                <h3 className="text-lg text-white mb-2">4.1 Prestadores de Serviços</h3>
                <ul className="space-y-2 mb-4">
                  <li>• <strong className="text-white">Supabase:</strong> Hospedagem de banco de dados e backend (servidores na AWS)</li>
                  <li>• <strong className="text-white">Google AdMob:</strong> Exibição de anúncios (consulte política do Google)</li>
                  <li>• <strong className="text-white">Firebase:</strong> Analytics, notificações push, crash reporting</li>
                  <li>• <strong className="text-white">Stripe/MercadoPago:</strong> Processamento de pagamentos (não acessamos dados de cartão)</li>
                </ul>

                <h3 className="text-lg text-white mb-2">4.2 Situações Legais</h3>
                <ul className="space-y-2 mb-4">
                  <li>• Cumprimento de ordem judicial ou requisição de autoridade competente</li>
                  <li>• Proteção de direitos, propriedade ou segurança da Quiron Concursos</li>
                  <li>• Investigação de fraudes ou violações dos Termos de Uso</li>
                </ul>

                <h3 className="text-lg text-white mb-2">4.3 Transferências Corporativas</h3>
                <p className="text-sm">
                  Em caso de fusão, aquisição ou venda de ativos, seus dados podem ser transferidos. Você será notificado sobre mudanças na política de privacidade.
                </p>
              </div>
            </section>

            {/* Segurança */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl text-white">5. Segurança dos Dados</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">Implementamos medidas de segurança técnicas e organizacionais:</p>
                <ul className="space-y-2">
                  <li>• <strong className="text-white">Criptografia:</strong> Conexões HTTPS/TLS, senhas hasheadas (bcrypt)</li>
                  <li>• <strong className="text-white">Controle de Acesso:</strong> Acesso restrito a funcionários autorizados</li>
                  <li>• <strong className="text-white">Monitoramento:</strong> Logs de segurança, detecção de atividades suspeitas</li>
                  <li>• <strong className="text-white">Backups:</strong> Cópias de segurança regulares em servidores protegidos</li>
                  <li>• <strong className="text-white">Auditorias:</strong> Revisões periódicas de segurança</li>
                </ul>
                <p className="mt-4 text-sm text-yellow-300">
                  ⚠️ Nenhum método de transmissão pela internet é 100% seguro. Embora nos esforcemos para proteger seus dados, não podemos garantir segurança absoluta.
                </p>
              </div>
            </section>

            {/* Direitos do Usuário */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-pink-400" />
                <h2 className="text-2xl text-white">6. Seus Direitos (LGPD/GDPR)</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">Você tem os seguintes direitos sobre seus dados pessoais:</p>
                <ul className="space-y-3">
                  <li>
                    <strong className="text-blue-400">🔍 Acesso:</strong> Solicitar cópia dos seus dados armazenados
                  </li>
                  <li>
                    <strong className="text-green-400">✏️ Retificação:</strong> Corrigir dados incorretos ou desatualizados
                  </li>
                  <li>
                    <strong className="text-red-400">🗑️ Exclusão:</strong> Solicitar remoção permanente da sua conta e dados (direito ao esquecimento)
                  </li>
                  <li>
                    <strong className="text-purple-400">📦 Portabilidade:</strong> Receber seus dados em formato estruturado e transferível
                  </li>
                  <li>
                    <strong className="text-yellow-400">❌ Oposição:</strong> Opor-se ao processamento para fins de marketing direto
                  </li>
                  <li>
                    <strong className="text-pink-400">⏸️ Limitação:</strong> Solicitar restrição do processamento em certas situações
                  </li>
                  <li>
                    <strong className="text-orange-400">🔙 Revogação:</strong> Revogar consentimento a qualquer momento (sem afetar legalidade do processamento anterior)
                  </li>
                </ul>
                
                <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <h3 className="text-lg text-white mb-2">Como Exercer Seus Direitos</h3>
                  <p className="text-sm mb-2">Entre em contato conosco através de:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>E-mail:</strong> privacidade@quironconcursos.com.br</li>
                    <li>• <strong>No App:</strong> Menu → Suporte → Privacidade e Dados</li>
                    <li>• <strong>Telefone:</strong> +55 (11) 99999-9999</li>
                  </ul>
                  <p className="text-xs mt-3 text-gray-400">
                    Responderemos sua solicitação em até 15 dias úteis (LGPD) ou 30 dias (GDPR).
                  </p>
                </div>
              </div>
            </section>

            {/* Retenção */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-orange-400" />
                <h2 className="text-2xl text-white">7. Retenção de Dados</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <ul className="space-y-3">
                  <li>
                    <strong className="text-white">Conta Ativa:</strong> Mantemos seus dados enquanto sua conta estiver ativa
                  </li>
                  <li>
                    <strong className="text-white">Conta Inativa:</strong> Após 2 anos sem uso, enviamos e-mail de confirmação antes de deletar
                  </li>
                  <li>
                    <strong className="text-white">Exclusão Solicitada:</strong> Dados removidos em até 30 dias, exceto se houver obrigação legal
                  </li>
                  <li>
                    <strong className="text-white">Dados Agregados:</strong> Estatísticas anonimizadas podem ser mantidas indefinidamente
                  </li>
                  <li>
                    <strong className="text-white">Backups:</strong> Cópias de segurança são mantidas por até 90 dias
                  </li>
                </ul>
              </div>
            </section>

            {/* Menores de Idade */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-cyan-400" />
                <h2 className="text-2xl text-white">8. Menores de Idade</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  Nosso serviço é destinado a pessoas <strong className="text-white">maiores de 13 anos</strong>.
                </p>
                <ul className="space-y-2">
                  <li>• <strong className="text-white">13-18 anos:</strong> Consentimento dos pais/responsáveis pode ser necessário conforme legislação local</li>
                  <li>• <strong className="text-white">Menores de 13 anos:</strong> Não coletamos intencionalmente dados. Se identificarmos, deletaremos imediatamente</li>
                  <li>• <strong className="text-white">Responsáveis:</strong> Se você é pai/mãe e acredita que seu filho forneceu dados, entre em contato conosco</li>
                </ul>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-teal-400" />
                <h2 className="text-2xl text-white">9. Cookies e Tecnologias Similares</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <h3 className="text-lg text-white mb-3">Utilizamos cookies para:</h3>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white mb-1">🔧 Essenciais (Obrigatórios)</h4>
                    <p className="text-sm">Autenticação, segurança, preferências de idioma</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white mb-1">📊 Analíticos (Opcional)</h4>
                    <p className="text-sm">Google Analytics, Firebase Analytics - entender como você usa o app</p>
                  </div>
                  
                  <div>
                    <h4 className="text-white mb-1">🎯 Publicidade (Opcional)</h4>
                    <p className="text-sm">Google AdMob - personalizar anúncios baseados em interesses</p>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                  <p className="text-sm">
                    <strong className="text-white">Gerenciar Cookies:</strong> Acesse Menu → Configurações → Privacidade no app
                  </p>
                </div>
              </div>
            </section>

            {/* Transferência Internacional */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-indigo-400" />
                <h2 className="text-2xl text-white">10. Transferência Internacional de Dados</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  Seus dados podem ser transferidos e armazenados em servidores localizados fora do Brasil:
                </p>
                <ul className="space-y-2">
                  <li>• <strong className="text-white">Supabase (AWS):</strong> Servidores nos EUA com certificação ISO 27001</li>
                  <li>• <strong className="text-white">Google (Firebase/AdMob):</strong> Infraestrutura global conforme GDPR</li>
                  <li>• <strong className="text-white">Proteções:</strong> Utilizamos cláusulas contratuais padrão e garantias adequadas</li>
                </ul>
                <p className="mt-4 text-sm">
                  Ao usar o app, você consente com esta transferência. Todos os parceiros atendem padrões internacionais de proteção de dados.
                </p>
              </div>
            </section>

            {/* Alterações */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl text-white">11. Alterações nesta Política</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  Podemos atualizar esta Política de Privacidade periodicamente. Quando fizermos alterações materiais:
                </p>
                <ul className="space-y-2">
                  <li>• Atualizaremos a data "Última atualização" no topo desta página</li>
                  <li>• Enviaremos notificação por e-mail ou notificação push no app</li>
                  <li>• Solicitaremos novo consentimento se exigido por lei</li>
                </ul>
                <p className="mt-4 text-sm text-yellow-300">
                  Recomendamos revisar esta política periodicamente. O uso continuado após alterações constitui aceitação das mudanças.
                </p>
              </div>
            </section>

            {/* Contato */}
            <section className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500/40 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl text-white">12. Contato e Encarregado de Dados (DPO)</h2>
              </div>
              
              <p className="mb-4">
                Para questões sobre esta Política de Privacidade ou exercer seus direitos, entre em contato:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-white mb-2">📧 E-mail</h3>
                  <p className="text-blue-400">privacidade@quironconcursos.com.br</p>
                  <p className="text-blue-400">dpo@quironconcursos.com.br</p>
                </div>

                <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700">
                  <h3 className="text-white mb-2">📞 Telefone</h3>
                  <p className="text-blue-400">+55 (11) 99999-9999</p>
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
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    www.quironconcursos.com.br
                  </a>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-sm text-yellow-300">
                  <strong>Encarregado de Dados (DPO):</strong> João Silva<br />
                  Responsável por garantir o cumprimento da LGPD e atender solicitações de titulares de dados.
                </p>
              </div>
            </section>

            {/* Autoridade */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl text-white">13. Autoridade de Proteção de Dados</h2>
              </div>
              
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <p className="mb-4">
                  Se você acredita que seus direitos não foram respeitados, pode registrar reclamação nas autoridades competentes:
                </p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="text-white mb-1">🇧🇷 Brasil - ANPD</h4>
                    <p className="text-sm">Autoridade Nacional de Proteção de Dados</p>
                    <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                      www.gov.br/anpd
                    </a>
                  </div>

                  <div>
                    <h4 className="text-white mb-1">🇪🇺 Europa - EDPB</h4>
                    <p className="text-sm">European Data Protection Board</p>
                    <a href="https://edpb.europa.eu" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline text-sm">
                      edpb.europa.eu
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
              <p>
                © 2026 Quiron Concursos. Todos os direitos reservados.<br />
                CNPJ: 00.000.000/0001-00
              </p>
              <p className="mt-2">
                Documento gerado em conformidade com LGPD (Lei 13.709/2018) e GDPR (Regulation EU 2016/679)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
