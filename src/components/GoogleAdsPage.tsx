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
  Zap,
  BarChart3,
  Search,
  ShoppingCart,
  Eye,
  Shield
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
      metric: 'Segmentação exata'
    },
    {
      icon: DollarSign,
      title: 'ROI Otimizado',
      description: 'Máximo retorno sobre investimento com custos por clique controlados',
      metric: '+300% ROI médio'
    },
    {
      icon: Users,
      title: 'Leads Qualificados',
      description: 'Atraímos apenas clientes com real interesse e intenção de compra',
      metric: '85% taxa conversão'
    },
    {
      icon: Clock,
      title: 'Resultados Imediatos',
      description: 'Visibilidade instantânea nos resultados de busca do Google',
      metric: 'Ativo em 24h'
    }
  ];

  const services = [
    {
      icon: Search,
      title: 'Campanhas de Pesquisa Local',
      description: 'Anúncios que aparecem quando clientes procuram seus serviços na sua região',
      features: [
        'Palavras-chave locais estratégicas',
        'Anúncios com extensões de localização',
        'Segmentação geográfica precisa',
        'Horários otimizados por performance',
        'Lances automatizados inteligentes',
        'Textos persuasivos e relevantes'
      ]
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
        'Tracking de conversões offline',
        'Otimização para mobile'
      ]
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
        'Remarketing para visitantes'
      ]
    },
    {
      icon: Eye,
      title: 'Display e Remarketing',
      description: 'Anúncios visuais em sites parceiros para aumentar brand awareness local',
      features: [
        'Banners criativos personalizados',
        'Remarketing para visitantes do site',
        'Segmentação por interesses locais',
        'Campanhas de descoberta',
        'YouTube Ads para negócios locais',
        'Audiências similares locais'
      ]
    }
  ];

  const certifications = [
    {
      title: 'Google Ads - Rede de Pesquisa',
      description: 'Certificação oficial para campanhas de pesquisa',
      icon: '🎯'
    },
    {
      title: 'Google Ads - Rede de Display',
      description: 'Especialização em campanhas visuais',
      icon: '🎨'
    },
    {
      title: 'Google Shopping',
      description: 'Expertise em campanhas de produtos',
      icon: '🛒'
    },
    {
      title: 'Google Analytics',
      description: 'Análise avançada de dados e conversões',
      icon: '📊'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Análise de Mercado Local',
      description: 'Pesquisa de palavras-chave, análise da concorrência e estudo do público-alvo na sua região'
    },
    {
      step: '2',
      title: 'Estratégia e Planejamento',
      description: 'Criação de estratégia personalizada com definição de orçamentos e metas específicas'
    },
    {
      step: '3',
      title: 'Criação e Implementação',
      description: 'Desenvolvimento de campanhas, grupos de anúncios e textos otimizados para conversão'
    },
    {
      step: '4',
      title: 'Otimização Contínua',
      description: 'Monitoramento diário, ajustes de lances e otimizações baseadas em performance'
    }
  ];

  const caseStudies = [
    {
      business: 'Clínica Odontológica',
      location: 'São Paulo, SP',
      result: '+250% agendamentos',
      investment: 'R$ 2.000/mês',
      roi: '400% ROI'
    },
    {
      business: 'Escritório Contábil',
      location: 'Rio de Janeiro, RJ',
      result: '+180% consultas',
      investment: 'R$ 1.500/mês',
      roi: '320% ROI'
    },
    {
      business: 'Academia Local',
      location: 'Belo Horizonte, MG',
      result: '+300% matrículas',
      investment: 'R$ 3.000/mês',
      roi: '500% ROI'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Google Ads - Eleve Leads | Especialistas Certificados em Campanhas Locais"
        description="Especialistas certificados em Google Ads para negócios locais. Campanhas de alta performance com ROI otimizado. Resultados imediatos e leads qualificados."
        keywords="google ads, campanhas locais, ppc, google adwords, publicidade online, marketing pago"
        canonical="https://elevaleads.com/google-ads"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-red-600">Google Ads</span> para<br />
              <span className="text-blue-600">Negócios Locais</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Especialistas certificados pelo Google em Rede de Pesquisa. Criamos campanhas estratégicas 
              que colocam seu negócio na frente dos clientes certos, no momento certo, na sua região.
            </p>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-red-600" />
                <span className="text-gray-700 font-medium">Certificação Google Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">+300% ROI Médio</span>
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
              Resultados imediatos com investimento controlado. Sua empresa aparece exatamente quando e onde seus clientes procuram
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

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tipos de Campanhas Google Ads
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estratégias personalizadas para cada tipo de negócio local e objetivo específico
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nosso Processo de Criação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada para campanhas de alto desempenho e ROI otimizado
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

      {/* Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Casos de Sucesso Reais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como negócios locais transformaram seus resultados com nossas campanhas Google Ads
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{study.business}</h3>
                <p className="text-gray-600 mb-4">{study.location}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold">
                    {study.result}
                  </div>
                  <div className="text-gray-600">
                    <p>Investimento: {study.investment}</p>
                    <p className="font-bold text-blue-600">{study.roi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Guide */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Guia de Investimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investimentos recomendados por tipo de negócio para resultados otimizados
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Negócios Iniciantes</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">R$ 1.000-2.000</div>
              <p className="text-gray-600 mb-6">Investimento mensal recomendado</p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Campanhas de pesquisa básicas</li>
                <li>• Segmentação local precisa</li>
                <li>• Otimização contínua</li>
                <li>• Relatórios mensais</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8 text-center border-2 border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Negócios Estabelecidos</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">R$ 2.000-5.000</div>
              <p className="text-gray-600 mb-6">Investimento mensal recomendado</p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Campanhas múltiplas</li>
                <li>• Shopping e Display</li>
                <li>• Remarketing avançado</li>
                <li>• Análises detalhadas</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Grandes Empresas</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">R$ 5.000+</div>
              <p className="text-gray-600 mb-6">Investimento mensal recomendado</p>
              <ul className="text-left space-y-2 text-gray-600">
                <li>• Estratégia completa</li>
                <li>• Múltiplas localizações</li>
                <li>• Automação avançada</li>
                <li>• Suporte dedicado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Dominar o Google Ads na Sua Região?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Solicite uma análise gratuita do seu mercado local e descubra como podemos multiplicar 
            seus resultados com campanhas Google Ads estratégicas.
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

          <div className="flex items-center justify-center space-x-8 text-red-100">
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