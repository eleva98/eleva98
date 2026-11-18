import React from 'react';
import {
  Target,
  TrendingUp,
  MapPin,
  Award,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Users,
  Clock,
  Search,
  ShoppingCart,
  Eye,
  Shield,
  Globe,
  Layout,
  FileText,
  MessageCircle,
  Smartphone,
  Wrench,
  MousePointerClick,
  Bot,
} from 'lucide-react';
import SEOHead from './SEOHead';

interface GoogleAdsPageProps {
  setCurrentPage: (page: string) => void;
}

const GoogleAdsPage: React.FC<GoogleAdsPageProps> = ({ setCurrentPage }) => {
  const handleGoToContact = () => {
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const benefits = [
    {
      icon: MapPin,
      title: 'Foco Local Preciso',
      description: 'Campanhas direcionadas especificamente para clientes na sua área de atuação',
      metric: 'Segmentação exata',
    },
    {
      icon: DollarSign,
      title: 'Investimento Controlado',
      description: 'Você define quanto quer investir e otimizamos o custo por clique dos anúncios',
      metric: 'Gestão de orçamento',
    },
    {
      icon: Users,
      title: 'Contatos Interessados',
      description: 'Seu anúncio aparece para pessoas que estão procurando ativamente pelo seu serviço',
      metric: 'Intenção de compra',
    },
    {
      icon: Clock,
      title: 'Resultados Imediatos',
      description: 'Visibilidade instantânea nos resultados de busca do Google',
      metric: 'Ativo em 24h',
    },
  ];

  const campaignServices = [
    {
      icon: Search,
      title: 'Campanhas de Pesquisa Local',
      description: 'Anúncios que aparecem quando clientes procuram seus serviços na sua região',
      features: [
        'Planejamento estratégico de campanhas',
        'Pesquisa de palavras-chave do seu mercado',
        'Segmentação geográfica precisa',
        'Criação e otimização de anúncios',
        'Gestão de orçamento',
        'Monitoramento de desempenho contínuo',
      ],
    },
    {
      icon: MapPin,
      title: 'Campanhas Locais Avançadas',
      description: 'Promoção do seu negócio para pessoas próximas à sua localização física',
      features: [
        'Raio de alcance personalizado',
        'Integração com Google Meu Negócio',
        'Promoção de ofertas especiais',
        'Direcionamento para visitas físicas',
        'Análise de conversões',
        'Otimização para mobile',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'Google Shopping para Locais',
      description: 'Exibição de produtos com preços e informações da loja física',
      features: [
        'Feed de produtos otimizado',
        'Preços competitivos destacados',
        'Informações de estoque local',
        'Integração com e-commerce',
        'Campanhas Smart Shopping',
        'Remarketing para visitantes',
      ],
    },
    {
      icon: Eye,
      title: 'Display e Remarketing',
      description: 'Anúncios visuais em sites parceiros para aumentar o reconhecimento da marca local',
      features: [
        'Banners criativos personalizados',
        'Remarketing para visitantes do site',
        'Segmentação por interesses locais',
        'Campanhas de descoberta',
        'YouTube Ads para negócios locais',
        'Audiências similares locais',
      ],
    },
  ];

  const complements = [
    {
      icon: Layout,
      title: 'Landing pages de conversão',
      description: 'Criação de páginas de destino estratégicas para receber os visitantes dos anúncios.',
    },
    {
      icon: Globe,
      title: 'Páginas comerciais e sites',
      description: 'Desenvolvimento de páginas comerciais e melhoria de sites existentes.',
    },
    {
      icon: FileText,
      title: 'Páginas por serviço',
      description: 'Estruturação de páginas específicas para cada serviço da sua empresa.',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp e formulários',
      description: 'Integração com WhatsApp e formulários de contato para facilitar o primeiro contato.',
    },
    {
      icon: Smartphone,
      title: 'Otimização para dispositivos móveis',
      description: 'A maioria dos cliques em anúncios locais vem do celular. Sua página precisa funcionar perfeitamente nele.',
    },
    {
      icon: Wrench,
      title: 'Melhorias técnicas e de SEO',
      description: 'Otimizações técnicas e organização do conteúdo para facilitar a conversão.',
    },
  ];

  const strategySteps = [
    {
      step: '1',
      title: 'Busca no Google',
      description: 'O potencial cliente pesquisa por um serviço no Google, como "fisioterapeuta perto de mim".',
    },
    {
      step: '2',
      title: 'Encontra o anúncio',
      description: 'Sua empresa aparece no topo dos resultados com um anúncio relevante para a busca.',
    },
    {
      step: '3',
      title: 'Acessa a página estratégica',
      description: 'O visitante chega a uma landing page ou site preparado para receber essa visita.',
    },
    {
      step: '4',
      title: 'Encontra o que procura',
      description: 'Informações claras sobre o serviço, diferenciais e próximos passos para contato.',
    },
    {
      step: '5',
      title: 'Entra em contato',
      description: 'O contato acontece pelo WhatsApp ou formulário, no canal que for mais fácil.',
    },
    {
      step: '6',
      title: 'Nova oportunidade',
      description: 'Sua empresa recebe uma nova oportunidade comercial, pronta para atendimento.',
    },
  ];

  const audiences = [
    { icon: '🦴', label: 'Clínicas de fisioterapia', campaign: 'Campanhas para atrair pacientes para sessões e avaliações' },
    { icon: '🩺', label: 'Clínicas médicas', campaign: 'Anúncios por especialidade e região de atendimento' },
    { icon: '🦷', label: 'Clínicas odontológicas', campaign: 'Campanhas para tratamentos e primeiras consultas' },
    { icon: '🧘', label: 'Studios de Pilates', campaign: 'Anúncios para aulas experimentais e planos' },
    { icon: '✨', label: 'Clínicas de estética', campaign: 'Campanhas por procedimento com foco local' },
    { icon: '🔧', label: 'Empresas de serviços', campaign: 'Anúncios para serviços sob demanda na sua região' },
  ];

  const certifications = [
    {
      title: 'Google Ads - Rede de Pesquisa',
      description: 'Certificação oficial para campanhas de pesquisa',
      icon: '🎯',
    },
    {
      title: 'Google Ads - Rede de Display',
      description: 'Especialização em campanhas visuais',
      icon: '🎨',
    },
    {
      title: 'Google Shopping',
      description: 'Expertise em campanhas de produtos',
      icon: '🛒',
    },
    {
      title: 'Google Analytics',
      description: 'Análise avançada de dados e conversões',
      icon: '📊',
    },
  ];

  const process = [
    {
      step: '1',
      title: 'Análise de Mercado Local',
      description: 'Pesquisa de palavras-chave, análise da concorrência e estudo do público-alvo na sua região',
    },
    {
      step: '2',
      title: 'Estratégia e Planejamento',
      description: 'Criação de estratégia personalizada com definição de orçamentos e metas específicas',
    },
    {
      step: '3',
      title: 'Criação e Implementação',
      description: 'Desenvolvimento de campanhas, anúncios e páginas de destino otimizadas para conversão',
    },
    {
      step: '4',
      title: 'Otimização Contínua',
      description: 'Monitoramento, análise de conversões e ajustes baseados em performance',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Google Ads para Clínicas e Negócios Locais | Eleve Leads"
        description="Solução completa de Google Ads: gestão de campanhas, landing pages de conversão e otimização digital. Atraia pacientes e clientes pela busca do Google."
        keywords="google ads para fisioterapia, marketing digital para clínicas, google ads para clínicas, campanhas locais, ppc, tráfego pago, landing pages de conversão"
        canonical="https://elevaleads.com/google-ads"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-red-600">Google Ads</span> + Estrutura de Conversão +{' '}
              <span className="text-blue-600">Otimização Digital</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Uma campanha eficiente depende de mais fatores além da criação dos anúncios. Trabalhamos com gestão de campanhas, páginas de destino preparadas para converter e otimizações técnicas — uma solução completa de aquisição de clientes.
            </p>
            <div className="flex items-center justify-center space-x-6 mb-8 flex-wrap gap-2">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-red-600" />
                <span className="text-gray-700 font-medium">Certificação Google Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-red-600" />
                <span className="text-gray-700 font-medium">Foco em negócios locais e clínicas</span>
              </div>
            </div>
            <button
              onClick={handleGoToContact}
              className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-medium text-lg inline-flex items-center space-x-2 group"
            >
              <span>Solicitar Proposta Google Ads</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Por Que Google Ads para Negócios Locais?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sua empresa aparece exatamente quando e onde seus clientes procuram
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                  <benefit.icon className="w-10 h-10 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gestão de Campanhas Google Ads</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Planejamento, criação e otimização contínua para cada tipo de negócio local e objetivo específico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {campaignServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-red-100 p-4 rounded-xl mr-4">
                    <service.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Complementary Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MousePointerClick className="w-4 h-4" />
              <span>Estrutura de Conversão</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Landing Pages e Sites como Complemento dos Anúncios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De que adianta um bom anúncio se a página de destino não converte? Além da gestão das campanhas, desenvolvemos ou melhoramos as páginas que recebem os visitantes dos anúncios.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {complements.map((complement, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="bg-blue-100 p-3 rounded-xl w-fit mb-4">
                  <complement.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{complement.title}</h3>
                <p className="text-gray-600 leading-relaxed">{complement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrated Strategy Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Estratégia Integrada, Passo a Passo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Como anúncios, páginas de conversão e otimização trabalham juntos para gerar oportunidades comerciais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {strategySteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md relative">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
                {index < strategySteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-6 w-5 h-5 text-blue-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Para Quem Trabalhamos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exemplos de como as campanhas podem ser estruturadas para cada segmento, sempre com foco em oportunidades reais — sem prometer quantidade garantida de contatos, agendamentos ou vendas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:border-red-300 hover:shadow-md transition-all duration-300">
                <div className="text-4xl mb-4">{audience.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{audience.label}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{audience.campaign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Award className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h2 className="text-3xl font-bold mb-6">Certificações Google Oficiais</h2>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Nossa equipe possui certificações oficiais do Google, garantindo expertise comprovada
              e conhecimento das melhores práticas da plataforma
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white bg-opacity-20 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="font-bold mb-2">{cert.title}</h3>
                <p className="text-red-100 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nosso Processo de Trabalho</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia para campanhas organizadas, mensuráveis e em otimização contínua
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-red-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chatbot cross-sell */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg flex flex-col md:flex-row items-center gap-8">
            <div className="bg-emerald-100 p-5 rounded-2xl flex-shrink-0">
              <Bot className="w-12 h-12 text-emerald-600" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">E quando o contato chegar, quem responde?</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Conheça o <strong>Chatbot Secretário</strong>: um atendente inteligente para sua clínica no WhatsApp, que responde dúvidas, qualifica interessados e organiza oportunidades de agendamento.
              </p>
              <button
                onClick={() => {
                  setCurrentPage('chatbot-secretario');
                  window.scrollTo(0, 0);
                }}
                className="text-emerald-700 font-medium hover:text-emerald-800 inline-flex items-center space-x-2 group"
              >
                <span>Conhecer o Chatbot Secretário</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Atrair Clientes pelo Google na Sua Região?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Solicite uma análise do seu mercado local e descubra como anúncios, páginas de conversão e otimização podem trabalhar juntos pelo seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={handleGoToContact}
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2 group"
            >
              <span>Solicitar Análise Gratuita</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-red-100 flex-wrap gap-2">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Resposta em 2h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Sem Compromisso</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Certificação Google</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleAdsPage;
