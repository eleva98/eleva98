import React from 'react';
import {
  MapPin,
  Target,
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Zap,
  Bot,
} from 'lucide-react';

interface ServicesProps {
  setCurrentPage: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ setCurrentPage }) => {
  const mainServices = [
    {
      icon: MapPin,
      title: 'Google Meu Negócio',
      subtitle: 'Seja Encontrado no Google e no Maps',
      description:
        'Para empresas que querem aparecer nas pesquisas locais do Google, atrair pessoas que procuram seus serviços na região e fortalecer sua reputação online.',
      features: [
        'Otimização completa do perfil Google Meu Negócio',
        'Presença fortalecida no Google Maps',
        'Gestão estratégica de avaliações e reputação online',
        'Informações comerciais sempre atualizadas',
        'Postagens regulares e conteúdo otimizado',
        'Mais oportunidades de contato para sua empresa',
      ],
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      page: 'google-meu-negocio' as const,
      path: '/google-meu-negocio',
    },
    {
      icon: Target,
      title: 'Google Ads',
      subtitle: 'Aquisição Completa de Clientes',
      description:
        'Muito além da gestão de anúncios: campanhas estratégicas combinadas com landing pages, sites e otimizações técnicas que transformam cliques em oportunidades comerciais.',
      features: [
        'Planejamento e gestão de campanhas Google Ads',
        'Pesquisa de palavras-chave e segmentação geográfica',
        'Criação de landing pages e páginas comerciais',
        'Melhoria de sites existentes e integração com WhatsApp',
        'Otimização para dispositivos móveis e SEO técnico',
        'Monitoramento, análise de conversões e otimização contínua',
      ],
      color: 'orange',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      page: 'google-ads' as const,
      path: '/google-ads',
    },
    {
      icon: Bot,
      title: 'Chatbot Secretário',
      subtitle: 'Atendimento Inteligente pelo WhatsApp',
      description:
        'Um secretário digital com inteligência artificial para clínicas e empresas: atende automaticamente, responde dúvidas, qualifica interessados e auxilia no agendamento.',
      features: [
        'Atendimento automático pelo WhatsApp, 24 horas',
        'Respostas inteligentes com base de conhecimento personalizada',
        'Qualificação de pacientes e interessados',
        'Auxílio no agendamento, quando integrado a agenda compatível',
        'Transferência para atendimento humano quando necessário',
        'Organização dos contatos em CRM ou planilhas',
      ],
      color: 'emerald',
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-100',
      iconColor: 'text-emerald-600',
      buttonColor: 'bg-emerald-600 hover:bg-emerald-700',
      page: 'chatbot-secretario' as const,
      path: '/chatbot-secretario',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Três Soluções para{' '}
            <span className="text-blue-600">Ser Encontrado, Atrair Clientes</span> e{' '}
            <span className="text-emerald-600">Atender Melhor</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Google Meu Negócio, Google Ads e Chatbot Secretário: do primeiro clique no Google ao atendimento no WhatsApp.
          </p>
        </div>

        <div className="space-y-12">
          {mainServices.map((service, index) => (
            <div key={index} className={`${service.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300`}>
              <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${service.iconBg} p-4 rounded-xl flex-shrink-0`}>
                      <service.icon className={`w-10 h-10 ${service.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className={`text-lg font-medium ${service.iconColor} mb-4`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  <button
                    onClick={() => {
                      setCurrentPage(service.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`${service.buttonColor} text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg inline-flex items-center space-x-2 group w-full justify-center lg:w-auto`}
                  >
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">O que está incluído:</h4>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3 bg-white rounded-lg p-4">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <Star className="w-8 h-8 text-yellow-400" />
              <h3 className="text-2xl md:text-3xl font-bold">Por Que a Eleve Leads?</h3>
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Especialistas certificados pelo Google. Foco em gerar oportunidades comerciais reais para negócios locais e clínicas.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                <div className="text-2xl font-bold mb-2">3 Soluções</div>
                <div className="text-blue-100">Complementares e Integradas</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <Star className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                <div className="text-2xl font-bold mb-2">5.0</div>
                <div className="text-blue-100">Avaliação em Resultados</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <Zap className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                <div className="text-2xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Empresas Atendidas</div>
              </div>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center space-x-2 group"
            >
              <span>Solicitar Diagnóstico Gratuito</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
