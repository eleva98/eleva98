import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, FileText, Mail, Phone } from 'lucide-react';
import SEOHead from './SEOHead';

interface PrivacyPolicyProps {
  setCurrentPage: (page: string) => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ setCurrentPage }) => {
  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Política de Privacidade - Eleve Leads | Proteção de Dados LGPD"
        description="Política de Privacidade da Eleve Leads. Saiba como protegemos seus dados pessoais de acordo com a LGPD. Transparência total no tratamento de informações."
        keywords="política privacidade, lgpd, proteção dados, eleve leads"
        canonical="https://elevaleads.com/privacy-policy"
        noindex={true}
      />
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBackToHome}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </button>
          
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Política de <span className="text-blue-600">Privacidade</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Na Eleva Leads, sua privacidade é nossa prioridade. Conheça como coletamos, usamos e protegemos suas informações.
            </p>
            <div className="flex items-center justify-center space-x-4 mt-6 text-gray-500">
              <Shield className="w-5 h-5" />
              <span>Última atualização: Janeiro de 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Introdução */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">1. Introdução</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Eleve Leads ("nós", "nosso" ou "empresa") está comprometida em proteger e respeitar sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nossos serviços.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta política.
              </p>
            </div>

            {/* Informações Coletadas */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-green-100 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">2. Informações que Coletamos</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.1 Informações Fornecidas por Você</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone/WhatsApp</li>
                <li>Nome da empresa</li>
                <li>Setor de atuação</li>
                <li>Cidade onde atua</li>
                <li>Outras informações fornecidas voluntariamente em formulários</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">2.2 Informações Coletadas Automaticamente</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Endereço IP</li>
                <li>Tipo de navegador e versão</li>
                <li>Páginas visitadas em nosso site</li>
                <li>Tempo gasto em cada página</li>
                <li>Data e hora de acesso</li>
                <li>Informações do dispositivo utilizado</li>
              </ul>
            </div>

            {/* Como Usamos */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Lock className="w-6 h-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">3. Como Usamos suas Informações</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos as informações coletadas para os seguintes propósitos:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Entrar em contato para agendar análises gratuitas e apresentar nossos serviços</li>
                <li>Enviar materiais educativos e informativos sobre Google Meu Negócio e SEO Local</li>
                <li>Personalizar nossa comunicação de acordo com seu setor e necessidades</li>
                <li>Melhorar nossos serviços e experiência do usuário</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Proteger nossos direitos e prevenir fraudes</li>
                <li>Enviar atualizações sobre nossos serviços (com possibilidade de descadastro)</li>
              </ul>
            </div>

            {/* Compartilhamento */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">4. Compartilhamento de Informações</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins comerciais.</strong>
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Podemos compartilhar suas informações apenas nas seguintes situações:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Com seu consentimento explícito</li>
                <li>Para cumprir obrigações legais ou ordens judiciais</li>
                <li>Para proteger nossos direitos, propriedade ou segurança</li>
                <li>Com prestadores de serviços que nos auxiliam (sob acordos de confidencialidade)</li>
                <li>Em caso de fusão, aquisição ou venda de ativos da empresa</li>
              </ul>
            </div>

            {/* Segurança */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Lock className="w-6 h-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">5. Segurança dos Dados</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementamos medidas de segurança técnicas e organizacionais apropriadas para proteger suas informações pessoais contra:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Acesso não autorizado</li>
                <li>Alteração, divulgação ou destruição não autorizada</li>
                <li>Perda acidental</li>
                <li>Processamento ilegal</li>
              </ul>
            </div>

            {/* Seus Direitos */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-indigo-100 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">6. Seus Direitos</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem os seguintes direitos:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Acesso:</strong> Solicitar informações sobre o tratamento de seus dados</li>
                <li><strong>Correção:</strong> Solicitar a correção de dados incompletos ou incorretos</li>
                <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados pessoais</li>
                <li><strong>Portabilidade:</strong> Solicitar a transferência de seus dados para outro fornecedor</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento de seus dados em certas circunstâncias</li>
                <li><strong>Revogação:</strong> Revogar seu consentimento a qualquer momento</li>
              </ul>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Eye className="w-6 h-6 text-yellow-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">7. Cookies e Tecnologias Similares</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para melhorar sua experiência em nosso site. Os cookies nos ajudam a:
              </p>
              
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Lembrar suas preferências</li>
                <li>Analisar o tráfego do site</li>
                <li>Personalizar conteúdo</li>
                <li>Melhorar a funcionalidade do site</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                Você pode controlar o uso de cookies através das configurações do seu navegador.
              </p>
            </div>

            {/* Retenção */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <FileText className="w-6 h-6 text-gray-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">8. Retenção de Dados</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </div>

            {/* Alterações */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">9. Alterações nesta Política</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre mudanças significativas publicando a nova política em nosso site e atualizando a data de "última atualização" no topo desta página.
              </p>
            </div>

            {/* Contato */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">10. Entre em Contato</h2>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Se você tiver dúvidas sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em contato conosco:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">E-mail</p>
                    <p className="text-gray-600">contato@elevaleads.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Telefone</p>
                    <p className="text-gray-600">(51) 9437-3376</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>Encarregado de Dados (DPO):</strong> Eleve Leads<br />
                  <strong>E-mail:</strong> contato@eleveleads.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;