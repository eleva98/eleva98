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
  Zap
} from 'lucide-react';

const GoogleAds = () => {
  const features = [
    {
      icon: Target,
      title: 'Campanhas Locais Estratégicas',
      description: 'Criamos campanhas focadas em capturar clientes na sua região específica, maximizando o ROI para negócios locais.',
      highlights: ['Segmentação geográfica precisa', 'Palavras-chave locais', 'Extensões de localização', 'Horários otimizados']
    },
    {
      icon: Award,
      title: 'Especialistas Certificados',
      description: 'Nossa equipe possui certificação oficial Google em Rede de Pesquisa, garantindo expertise comprovada em Google Ads.',
      highlights: ['Certificação Google Ads', 'Rede de Pesquisa', 'Shopping Ads', 'Atualizações constantes']
    },
    {
      icon: TrendingUp,
      title: 'Otimização Contínua',
      description: 'Monitoramento diário e otimizações constantes para garantir o melhor desempenho e custo por aquisição.',
      highlights: ['Análise de performance', 'Ajustes de lances', 'Testes A/B', 'Relatórios detalhados']
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: 'Foco Local',
      description: 'Campanhas direcionadas para clientes na sua área de atuação'
    },
    {
      icon: DollarSign,
      title: 'ROI Otimizado',
      description: 'Máximo retorno sobre investimento com custos controlados'
    },
    {
      icon: Users,
      title: 'Leads Qualificados',
      description: 'Atraímos apenas clientes com real interesse nos seus serviços'
    },
    {
      icon: Clock,
      title: 'Resultados Rápidos',
      description: 'Visibilidade imediata nos resultados de busca do Google'
    }
  ];

  const adTypes = [
    {
      title: 'Campanhas de Pesquisa',
      description: 'Anúncios que aparecem quando clientes procuram seus serviços no Google',
      icon: '🔍'
    },
    {
      title: 'Campanhas Locais',
      description: 'Promoção do seu negócio para pessoas próximas à sua localização',
      icon: '📍'
    },
    {
      title: 'Campanhas Shopping',
      description: 'Exibição de produtos com imagens, preços e informações da loja',
      icon: '🛒'
    },
    {
      title: 'Campanhas Display',
      description: 'Anúncios visuais em sites parceiros do Google para aumentar awareness',
      icon: '🎯'
    }
  ];

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">Google Ads</span> para{' '}
            <span className="text-blue-600">Negócios Locais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Especialistas certificados pelo Google em Rede de Pesquisa. Criamos campanhas estratégicas 
            que colocam seu negócio na frente dos clientes certos, no momento certo.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="bg-red-100 px-4 py-2 rounded-full">
              <span className="text-red-700 font-medium text-sm">✓ Certificação Google Ads</span>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-full">
              <span className="text-blue-700 font-medium text-sm">✓ Rede de Pesquisa</span>
            </div>
          </div>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-4 rounded-xl mr-4">
                  <feature.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>
              
              <div className="space-y-3">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-600 transition-colors duration-300">
                <benefit.icon className="w-10 h-10 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Ad Types */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Tipos de Campanhas que Criamos</h3>
            <p className="text-xl text-gray-600">
              Estratégias personalizadas para cada tipo de negócio local
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {adTypes.map((adType, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{adType.icon}</div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{adType.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{adType.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certification Highlight */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-red-200" />
            <h3 className="text-3xl font-bold mb-4">Certificação Google Oficial</h3>
            <p className="text-xl text-red-100 mb-6 max-w-3xl mx-auto">
              Nossa equipe possui certificação oficial do Google em Rede de Pesquisa, garantindo que suas campanhas 
              sejam criadas e otimizadas seguindo as melhores práticas da plataforma.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <Zap className="w-8 h-8 mx-auto mb-2 text-red-200" />
                <h4 className="font-bold mb-1">Expertise Comprovada</h4>
                <p className="text-red-100 text-sm">Conhecimento validado pelo Google</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-red-200" />
                <h4 className="font-bold mb-1">Melhores Práticas</h4>
                <p className="text-red-100 text-sm">Estratégias atualizadas constantemente</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <Target className="w-8 h-8 mx-auto mb-2 text-red-200" />
                <h4 className="font-bold mb-1">Resultados Superiores</h4>
                <p className="text-red-100 text-sm">Performance acima da média do mercado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nosso Processo de Criação</h3>
            <p className="text-xl text-gray-600">
              Metodologia comprovada para campanhas de alto desempenho
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Análise de Mercado</h4>
              <p className="text-gray-600 text-sm">Pesquisa de palavras-chave, concorrência e público-alvo local</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">2</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Criação Estratégica</h4>
              <p className="text-gray-600 text-sm">Desenvolvimento de campanhas, grupos de anúncios e textos persuasivos</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">3</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Implementação</h4>
              <p className="text-gray-600 text-sm">Configuração técnica, tracking de conversões e lançamento das campanhas</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Otimização</h4>
              <p className="text-gray-600 text-sm">Monitoramento diário, ajustes e melhorias contínuas de performance</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Dominar o Google Ads na Sua Região?
            </h3>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Combine Google Meu Negócio + Google Ads para máxima visibilidade local. 
              Especialistas certificados cuidando do seu investimento.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScrollToContact}
                className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2 group"
              >
                <span>Solicitar Proposta Google Ads</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-8 text-red-100">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Certificação Google</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>ROI Garantido</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleAds;