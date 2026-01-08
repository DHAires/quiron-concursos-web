import React from 'react';
import { Shield, ArrowLeft, Mail } from 'lucide-react';

export function PrivacyPolicyPage() {
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
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl mb-1">Política de Privacidade</h1>
              <p className="text-gray-400">Última atualização: Dezembro de 2024</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-xl text-white mb-3">1. Introdução</h2>
            <p className="leading-relaxed">
              A Quiron Concursos ("nós", "nosso") está comprometida em proteger sua privacidade. 
              Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos 
              suas informações quando você usa nosso aplicativo e serviços.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">2. Dados Coletados</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-white mb-2">2.1 Dados Fornecidos por Você:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Nome completo e email (ao criar conta)</li>
                  <li>Informações opcionais de perfil (idade, cidade, objetivo de concurso)</li>
                  <li>Dados de progresso e desempenho nos estudos</li>
                  <li>Mensagens enviadas no chat e fórum</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white mb-2">2.2 Dados Coletados Automaticamente:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Informações do dispositivo (modelo, sistema operacional, versão do app)</li>
                  <li>Endereço IP (anonimizado)</li>
                  <li>Dados de uso e interação com o aplicativo</li>
                  <li>Cookies e tecnologias similares</li>
                  <li>Logs de acesso e erro</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">3. Como Usamos Seus Dados</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fornecer e melhorar nossos serviços educacionais</li>
              <li>Personalizar sua experiência de aprendizado</li>
              <li>Processar pagamentos de assinaturas Premium</li>
              <li>Enviar notificações importantes e atualizações</li>
              <li>Exibir anúncios relevantes (usuários gratuitos)</li>
              <li>Realizar análises estatísticas e pesquisas</li>
              <li>Prevenir fraudes e garantir segurança</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">4. Compartilhamento de Dados</h2>
            <p className="mb-3">Podemos compartilhar seus dados com:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Provedores de Serviços:</strong> Supabase (hospedagem e banco de dados), serviços de email</li>
              <li><strong>Parceiros de Anúncios:</strong> Google AdSense (apenas usuários gratuitos)</li>
              <li><strong>Processadores de Pagamento:</strong> Para transações Premium (PIX, cartão, boleto)</li>
              <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger direitos</li>
            </ul>
            <p className="mt-3 text-yellow-400">
              ⚠️ Nunca vendemos seus dados pessoais a terceiros.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">5. Seus Direitos (LGPD e GDPR)</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Acesso:</strong> Solicitar cópia de seus dados</li>
              <li><strong>Correção:</strong> Corrigir dados incorretos ou desatualizados</li>
              <li><strong>Exclusão:</strong> Deletar sua conta e dados (direito ao esquecimento)</li>
              <li><strong>Portabilidade:</strong> Receber seus dados em formato legível</li>
              <li><strong>Oposição:</strong> Opor-se ao processamento para marketing</li>
              <li><strong>Revogação:</strong> Revogar consentimento a qualquer momento</li>
            </ul>
            <p className="mt-3">
              Para exercer esses direitos, acesse <strong>Configurações {'>'} Privacidade</strong> ou 
              entre em contato conosco.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">6. Cookies e Tecnologias Similares</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-white mb-2">Cookies Essenciais:</h3>
                <p>Necessários para funcionamento básico (autenticação, segurança). Não podem ser desativados.</p>
              </div>
              <div>
                <h3 className="text-white mb-2">Cookies Analíticos:</h3>
                <p>Ajudam a entender como você usa o app (métricas de uso, desempenho).</p>
              </div>
              <div>
                <h3 className="text-white mb-2">Cookies Publicitários:</h3>
                <p>Usados para exibir anúncios personalizados (Google AdSense).</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">7. Segurança dos Dados</h2>
            <p className="leading-relaxed">
              Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados, 
              incluindo criptografia SSL/TLS, autenticação segura, backups regulares e controles de acesso. 
              No entanto, nenhum sistema é 100% seguro, e você também é responsável por proteger suas credenciais.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">8. Retenção de Dados</h2>
            <p className="leading-relaxed">
              Mantemos seus dados enquanto sua conta estiver ativa ou conforme necessário para fornecer 
              serviços. Após exclusão de conta, dados são removidos em até 90 dias, exceto quando 
              obrigatório por lei (ex: registros fiscais por 5 anos).
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">9. Transferência Internacional</h2>
            <p className="leading-relaxed">
              Seus dados podem ser transferidos e processados em servidores localizados fora do Brasil. 
              Garantimos proteção adequada através de cláusulas contratuais padrão e conformidade com LGPD/GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">10. Menores de Idade</h2>
            <p className="leading-relaxed">
              Nosso serviço é destinado a maiores de 13 anos. Se você é menor de 18 anos, precisa de 
              consentimento dos pais/responsáveis. Não coletamos intencionalmente dados de menores de 13 anos.
            </p>
          </section>

          <section>
            <h2 className="text-xl text-white mb-3">11. Alterações nesta Política</h2>
            <p className="leading-relaxed">
              Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças significativas 
              por email ou notificação no app. Recomendamos revisar regularmente esta página.
            </p>
          </section>

          <section className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl text-white mb-3">12. Contato</h2>
            <p className="mb-4">Para dúvidas sobre privacidade ou exercer seus direitos:</p>
            <div className="flex items-center gap-3 text-blue-400">
              <Mail className="w-5 h-5" />
              <a href="mailto:privacidade@quironconcursos.com.br" className="hover:text-blue-300 transition-colors">
                privacidade@quironconcursos.com.br
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Encarregado de Dados (DPO): Disponível no email acima
            </p>
          </section>

          <section className="text-center py-8 border-t border-gray-800">
            <p className="text-sm text-gray-500">
              © 2024 Quiron Concursos. Todos os direitos reservados.
              <br />
              Conforme LGPD (Lei 13.709/2018) e GDPR (Regulamento UE 2016/679)
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
