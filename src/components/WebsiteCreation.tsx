import React from 'react';
import { 
  Globe, 
  Search, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  Star,
  Target,
  Smartphone,
  Shield
} from 'lucide-react';

const WebsiteCreation = () => {
  const features = [
    {
      icon: Globe,
      title: 'Sites de Alta Conversão',
      description: 'Desenvolvemos sites focados em converter visitantes em clientes, com design otimizado e experiência do usuário excepcional.',
      highlights: ['Design responsivo', 'Carregamento rápido', 'UX otimizada', 'Call-to-actions estratégicos']
    },
    {
      icon: Search,
      title: 'SEO Completo',
      description: 'Implementação completa de SEO técnico e de conteúdo para garantir máxima visibilidade nos mecanismos de busca.',
      highlights: ['SEO técnico', 'Otimização de conteúdo', 'Meta tags', 'Schema markup']
    },
    {
      icon: TrendingUp,
      title: 'Google Search Otimizado',
      description: 'Sites otimizados para alcançar a melhor pontuação possível no Google PageSpeed Insights e Core Web Vitals.',
      highlights: ['Performance máxima', 'Core Web Vitals', 'Mobile-first', 'Acessibilidade']
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Foco em Conversão',
      description: 'Cada elemento é pensado para guiar o visitante até a ação desejada'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Design responsivo que funciona perfeitamente em todos os dispositivos'
    },
    {
      icon: Zap,
      title: 'Velocidade Máxima',
      description: 'Carregamento ultra-rápido para melhor experiência e SEO'
    },
    {
      icon: Shield,
      title: 'Segurança Total',
      description: 'Implementação de melhores práticas de segurança web'
    }
  ];

  const handleScrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sites de <span className="text-blue-600">Alta Conversão</span> com{' '}
            <span className="text-green-600">SEO Máximo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Além do Google Meu Negócio, criamos sites profissionais que convertem visitantes em clientes, 
            com SEO completo e pontuação máxima no Google Search Console.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-xl mr-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
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

        {/* Performance Metrics */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Performance Otimizada</h3>
            <p className="text-blue-100 text-lg">
              Nossos sites são desenvolvidos para alcançar a melhor pontuação possível em todas as métricas do Google
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-yellow-300 mb-2">Máxima</div>
                <div className="text-blue-100">Performance</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-green-300 mb-2">Máxima</div>
                <div className="text-blue-100">Acessibilidade</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-orange-300 mb-2">Máxima</div>
                <div className="text-blue-100">Melhores Práticas</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-purple-300 mb-2">Máxima</div>
                <div className="text-blue-100">SEO</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <benefit.icon className="w-10 h-10 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nosso Processo de Desenvolvimento</h3>
            <p className="text-xl text-gray-600">
              Metodologia comprovada para criar sites que realmente convertem
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Análise & Estratégia</h4>
              <p className="text-gray-600 text-sm">Entendemos seu negócio, público-alvo e objetivos para criar a estratégia perfeita</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Design & UX</h4>
              <p className="text-gray-600 text-sm">Criamos layouts focados em conversão com experiência do usuário excepcional</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Desenvolvimento</h4>
              <p className="text-gray-600 text-sm">Codificação otimizada com foco em performance e SEO técnico avançado</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Otimização</h4>
              <p className="text-gray-600 text-sm">Testes, ajustes e otimizações para garantir máxima performance e conversão</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Tecnologias de Ponta</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB'].map((tech, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded mb-3 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{tech}</span>
                </div>
                <span className="text-gray-600 text-sm">Tecnologia Moderna</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para ter um Site que Realmente Converte?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Combine a força do Google Meu Negócio com um site profissional de alta conversão. 
              Solicite uma proposta personalizada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleScrollToContact}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2 group"
              >
                <span>Solicitar Proposta de Site</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 mt-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>Garantia de Satisfação</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Suporte Completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCreation;