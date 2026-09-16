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
  Shield,
  Code,
  Palette,
  BarChart3,
  Award,
  Clock
} from 'lucide-react';
import SEOHead from './SEOHead';

interface WebsiteCreationPageProps {
  setCurrentPage: (page: string) => void;
}

const WebsiteCreationPage: React.FC<WebsiteCreationPageProps> = ({ setCurrentPage }) => {
  const handleGoToContact = () => {
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const benefits = [
    {
      icon: Target,
      title: 'Foco em Conversão',
      description: 'Sites desenvolvidos especificamente para converter visitantes em clientes',
      metric: '+85% conversões'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Design responsivo que funciona perfeitamente em todos os dispositivos',
      metric: '100% responsivo'
    },
    {
      icon: Zap,
      title: 'Velocidade Máxima',
      description: 'Carregamento ultra-rápido para melhor experiência e SEO',
      metric: '<2s carregamento'
    },
    {
      icon: Search,
      title: 'SEO Otimizado',
      description: 'Estrutura e conteúdo otimizados para os mecanismos de busca',
      metric: 'Top 3 Google'
    }
  ];

  const services = [
    {
      icon: Palette,
      title: 'Design de Alta Conversão',
      description: 'Criamos layouts estratégicos focados em guiar o visitante até a ação desejada',
      features: [
        'Design personalizado para seu negócio',
        'UX/UI otimizada para conversões',
        'Call-to-actions estratégicos',
        'Hierarquia visual clara',
        'Cores e tipografia profissionais',
        'Elementos de confiança e credibilidade'
      ]
    },
    {
      icon: Code,
      title: 'Desenvolvimento Técnico Avançado',
      description: 'Código limpo e otimizado usando as melhores tecnologias do mercado',
      features: [
        'React/Next.js para performance máxima',
        'TypeScript para código mais seguro',
        'Tailwind CSS para design consistente',
        'Otimização de imagens automática',
        'Lazy loading e code splitting',
        'PWA (Progressive Web App) opcional'
      ]
    },
    {
      icon: Search,
      title: 'SEO Técnico Completo',
      description: 'Implementação de todas as melhores práticas de SEO para máxima visibilidade',
      features: [
        'Estrutura HTML semântica',
        'Meta tags otimizadas',
        'Schema markup (dados estruturados)',
        'Sitemap XML automático',
        'Robots.txt otimizado',
        'Core Web Vitals otimizados'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics e Monitoramento',
      description: 'Configuração completa de ferramentas para acompanhar performance e resultados',
      features: [
        'Google Analytics 4 configurado',
        'Google Search Console',
        'Pixel do Facebook/Meta',
        'Conversões e eventos trackados',
        'Relatórios de performance',
        'Heatmaps e análise de comportamento'
      ]
    }
  ];

  const technologies = [
    { name: 'React', description: 'Biblioteca JavaScript moderna' },
    { name: 'Next.js', description: 'Framework para performance' },
    { name: 'TypeScript', description: 'JavaScript tipado e seguro' },
    { name: 'Tailwind CSS', description: 'Framework CSS utilitário' },
    { name: 'Node.js', description: 'Runtime JavaScript server-side' },
    { name: 'MongoDB', description: 'Banco de dados NoSQL' }
  ];

  const process = [
    {
      step: '1',
      title: 'Briefing e Estratégia',
      description: 'Entendemos seu negócio, público-alvo e objetivos para criar a estratégia perfeita'
    },
    {
      step: '2',
      title: 'Design e Prototipagem',
      description: 'Criamos wireframes e layouts focados em conversão com sua aprovação'
    },
    {
      step: '3',
      title: 'Desenvolvimento',
      description: 'Codificação com tecnologias modernas e otimização para performance máxima'
    },
    {
      step: '4',
      title: 'Testes e Lançamento',
      description: 'Testes rigorosos, otimizações finais e lançamento com acompanhamento'
    }
  ];

  const portfolioExamples = [
    {
      category: 'Clínica Médica',
      result: '+120% agendamentos',
      features: ['Agendamento online', 'Portal do paciente', 'SEO local otimizado']
    },
    {
      category: 'Escritório de Advocacia',
      result: '+200% consultas',
      features: ['Formulário de contato', 'Blog jurídico', 'Certificados SSL']
    },
    {
      category: 'Restaurante',
      result: '+150% reservas',
      features: ['Cardápio online', 'Sistema de reservas', 'Galeria de fotos']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Criação de Sites - Eleve Leads | Sites de Alta Conversão com SEO Máximo"
        description="Criamos sites profissionais de alta conversão com SEO completo. Design responsivo, velocidade máxima e otimização para Google. Resultados garantidos."
        keywords="criação de sites, desenvolvimento web, sites responsivos, seo técnico, alta conversão"
        canonical="https://elevaleads.com/criacao-de-sites"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Sites de <span className="text-purple-600">Alta Conversão</span><br />
              com <span className="text-green-600">SEO Máximo</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Desenvolvemos sites profissionais que não apenas impressionam visualmente, mas convertem visitantes em clientes. 
              Com SEO técnico completo e performance otimizada para os melhores resultados no Google.
            </p>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700 font-medium">Performance Máxima</span>
              </div>
              <div className="flex items-center space-x-2">
                <Search className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">SEO Completo</span>
              </div>
            </div>
            <button 
              onClick={handleGoToContact}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg inline-flex items-center space-x-2 group"
            >
              <span>Solicitar Proposta de Site</span>
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
              Por Que Investir em um Site Profissional?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seu site é sua vitrine digital 24/7. Cada elemento é estrategicamente pensado para converter visitantes em clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                  <benefit.icon className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300" />
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
              Nossos Serviços de Criação de Sites
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desenvolvimento completo com foco em resultados e performance excepcional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-100 p-4 rounded-xl mr-4">
                    <service.icon className="w-8 h-8 text-purple-600" />
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

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Tecnologias de Ponta
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos as melhores e mais modernas tecnologias para garantir performance e escalabilidade
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <div className="h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{tech.name}</span>
                </div>
                <p className="text-gray-600 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nosso Processo de Desenvolvimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada para criar sites que realmente convertem
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Resultados de Projetos Reais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como nossos sites transformaram os resultados de diferentes tipos de negócios
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioExamples.map((example, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{example.category}</h3>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg font-bold mb-4">
                  {example.result}
                </div>
                <div className="space-y-2">
                  {example.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Guarantee */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Performance Otimizada</h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Nossos sites são desenvolvidos para alcançar a melhor pontuação possível em todas as métricas do Google
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-yellow-300 mb-2">Máxima</div>
                <div className="text-purple-100">Performance</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-green-300 mb-2">Máxima</div>
                <div className="text-purple-100">Acessibilidade</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-orange-300 mb-2">Máxima</div>
                <div className="text-purple-100">Melhores Práticas</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-4">
                <div className="text-2xl font-bold text-blue-300 mb-2">Máxima</div>
                <div className="text-purple-100">SEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para ter um Site que Realmente Converte?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Solicite uma proposta personalizada e descubra como podemos transformar sua presença online em uma máquina de gerar clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleGoToContact}
              className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2 group"
            >
              <span>Solicitar Proposta Personalizada</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Proposta em 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Garantia de Satisfação</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Suporte Completo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteCreationPage;