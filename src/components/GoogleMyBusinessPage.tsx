import React from 'react';
import { 
  MapPin, 
  Star, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Eye,
  Phone,
  Navigation,
  Award,
  BarChart3,
  Settings,
  PenTool,
  Clock,
  Shield
} from 'lucide-react';
import SEOHead from './SEOHead';

interface GoogleMyBusinessPageProps {
  setCurrentPage: (page: string) => void;
}

const GoogleMyBusinessPage: React.FC<GoogleMyBusinessPageProps> = ({ setCurrentPage }) => {
  const handleGoToContact = () => {
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const benefits = [
    {
      icon: Eye,
      title: 'Mais Visibilidade',
      description: 'Apareça no topo das buscas locais quando clientes procuram seus serviços',
      metric: '+280% visualizações'
    },
    {
      icon: Phone,
      title: 'Mais Ligações',
      description: 'Clientes encontram seu telefone facilmente e entram em contato direto',
      metric: '+190% ligações'
    },
    {
      icon: Navigation,
      title: 'Mais Visitas',
      description: 'Direcionamento otimizado leva mais pessoas até seu estabelecimento',
      metric: '+340% direções'
    },
    {
      icon: Star,
      title: 'Melhor Reputação',
      description: 'Gestão ativa de avaliações fortalece sua credibilidade online',
      metric: '4.8+ estrelas'
    }
  ];

  const services = [
    {
      icon: Settings,
      title: 'Otimização Completa do Perfil',
      description: 'Configuração profissional de todas as informações do seu Google Meu Negócio',
      features: [
        'Configuração de categorias estratégicas',
        'Upload de fotos profissionais otimizadas',
        'Descrição persuasiva e otimizada para SEO',
        'Informações de contato e horários atualizados',
        'Configuração de atributos especiais',
        'Otimização para palavras-chave locais'
      ]
    },
    {
      icon: Star,
      title: 'Gestão Estratégica de Avaliações',
      description: 'Sistema completo para gerar, gerenciar e responder avaliações de clientes',
      features: [
        'Campanhas para gerar avaliações positivas',
        'Respostas profissionais a todas as avaliações',
        'Monitoramento contínuo da reputação online',
        'Estratégias para lidar com avaliações negativas',
        'Relatórios de sentiment analysis',
        'Automação de solicitações de reviews'
      ]
    },
    {
      icon: PenTool,
      title: 'Postagens e Conteúdo Estratégico',
      description: 'Conteúdo regular e relevante para manter seu perfil ativo e engajado',
      features: [
        'Posts semanais otimizados',
        'Ofertas e promoções especiais',
        'Eventos e novidades da empresa',
        'Conteúdo educativo para seu público',
        'Fotos e vídeos de alta qualidade',
        'Call-to-actions estratégicos'
      ]
    },
    {
      icon: BarChart3,
      title: 'Relatórios e Análise de Performance',
      description: 'Acompanhamento detalhado com métricas que realmente importam para seu negócio',
      features: [
        'Relatórios mensais detalhados',
        'Métricas de visualizações e interações',
        'Análise da concorrência local',
        'ROI demonstrado com dados reais',
        'Insights de comportamento do cliente',
        'Recomendações de melhorias'
      ]
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Auditoria Completa',
      description: 'Analisamos seu perfil atual, concorrência local e oportunidades de melhoria'
    },
    {
      step: '2',
      title: 'Estratégia Personalizada',
      description: 'Criamos um plano específico para seu negócio e mercado local'
    },
    {
      step: '3',
      title: 'Implementação',
      description: 'Executamos todas as otimizações e configurações necessárias'
    },
    {
      step: '4',
      title: 'Monitoramento',
      description: 'Acompanhamos resultados e fazemos ajustes contínuos para máxima performance'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Carlos Mendes',
      business: 'Clínica Saúde Total',
      result: '+280% consultas',
      quote: 'Em 3 meses, nossa clínica teve um aumento de 280% nas consultas agendadas através do Google.'
    },
    {
      name: 'Ana Paula Silva',
      business: 'Restaurante Bella Vista',
      result: '1º lugar local',
      quote: 'Nosso restaurante agora aparece em primeiro lugar nas buscas locais da nossa cidade.'
    },
    {
      name: 'Roberto Fernandes',
      business: 'Fernandes & Associados',
      result: '+150% leads',
      quote: 'A gestão do nosso Google Meu Negócio resultou em 150% mais leads qualificados.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Google Meu Negócio - Eleve Leads | Especialistas em GMB e SEO Local"
        description="Especialistas em Google Meu Negócio. Otimização completa, gestão de avaliações e estratégias para dominar as buscas locais. Resultados comprovados."
        keywords="google meu negócio, gmb, seo local, otimização perfil google, gestão avaliações"
        canonical="https://elevaleads.com/google-meu-negocio"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-blue-600">Google Meu Negócio</span><br />
              Especialistas em Resultados Locais
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Transformamos seu perfil no Google na ferramenta de aquisição de clientes mais poderosa do seu negócio. 
              Especialistas certificados com resultados comprovados em empresas locais.
            </p>
            <div className="flex items-center justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700 font-medium">Certificação Google</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">+300% Resultados</span>
              </div>
            </div>
            <button 
              onClick={handleGoToContact}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg inline-flex items-center space-x-2 group"
            >
              <span>Solicitar Análise Gratuita</span>
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
              Por Que Investir no Google Meu Negócio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seu perfil otimizado no Google é a ponte entre clientes que procuram seus serviços e o crescimento do seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <benefit.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
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
              Nossos Serviços de Google Meu Negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cobertura completa para transformar seu perfil em uma máquina de gerar clientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-4 rounded-xl mr-4">
                    <service.icon className="w-8 h-8 text-blue-600" />
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Como Trabalhamos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada para resultados consistentes e duradouros
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Resultados Reais de Clientes Reais
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Veja como empresas locais transformaram seus resultados com nossa expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600">{testimonial.business}</p>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-bold">
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Dominar as Buscas Locais?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Solicite uma análise gratuita do seu perfil atual e descubra como podemos multiplicar seus resultados no Google Meu Negócio.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleGoToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2 group"
            >
              <span>Solicitar Análise Gratuita</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Resposta em 2h</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Sem Compromisso</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleMyBusinessPage;