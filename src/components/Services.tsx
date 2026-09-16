import React from 'react';
import {
  MapPin,
  Globe,
  Target,
  Search,
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Zap,
  Home
} from 'lucide-react';

const Services = () => {
  const handleNavigate = (path: string) => {
    window.location.href = path;
  };

  const mainServices = [
    {
      icon: MapPin,
      title: 'Google Meu Negócio e SEO Local',
      subtitle: 'Domine as Buscas Locais na Sua Região',
      description: 'Especialistas em Google Meu Negócio (GMB) e otimização de SEO local. Colocamos sua empresa no topo das buscas quando clientes procuram seus serviços na sua cidade.',
      features: [
        'Otimização completa do perfil Google Meu Negócio',
        'SEO local para aparecer nas primeiras posições',
        'Gestão estratégica de avaliações e reputação online',
        'Postagens regulares e conteúdo otimizado',
        'Relatórios de performance com métricas reais',
        'Certificação oficial Google em Rede de Pesquisa'
      ],
      color: 'blue',
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-600',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      results: [
        { label: 'Visualizações', value: '+280%' },
        { label: 'Ligações', value: '+190%' },
        { label: 'Visitas', value: '+340%' }
      ],
      keywords: 'Google Meu Negócio, GMB, SEO Local, busca local, perfil google, otimização local',
      path: '/google-meu-negocio'
    },
    {
      icon: Search,
      title: 'SEO para Negócios Locais',
      subtitle: 'Domine as Buscas Orgânicas do Google',
      description: 'Estratégia completa de SEO para aparecer nas primeiras posições das buscas orgânicas. Otimização on-page, SEO técnico e link building para máxima autoridade e visibilidade.',
      features: [
        'Pesquisa estratégica de palavras-chave',
        'Otimização on-page e SEO técnico',
        'Construção de backlinks de qualidade',
        'Criação de conteúdo otimizado para busca',
        'Monitoramento de rankings e performance',
        'Relatórios detalhados com métricas reais'
      ],
      color: 'green',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      results: [
        { label: 'Tráfego Orgânico', value: '+280%' },
        { label: 'Rankings', value: '+320%' },
        { label: 'Leads', value: '+250%' }
      ],
      keywords: 'SEO, otimização para buscas, posicionamento Google, SEO local, tráfego orgânico',
      path: '/seo',
      search: Search
    },
    {
      icon: Globe,
      title: 'Criação de Sites Profissionais',
      subtitle: 'Sites de Alta Conversão com SEO Máximo',
      description: 'Desenvolvimento de sites profissionais focados em conversão de visitantes em clientes. Design responsivo, velocidade máxima e SEO técnico completo para máxima visibilidade no Google.',
      features: [
        'Design responsivo e otimizado para conversão',
        'Desenvolvimento com tecnologias modernas (React, Next.js)',
        'SEO técnico completo e otimização on-page',
        'Velocidade de carregamento ultra-rápida',
        'Integração com Google Analytics e Search Console',
        'Performance máxima em todos os dispositivos'
      ],
      color: 'green',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      results: [
        { label: 'Conversões', value: '+150%' },
        { label: 'Performance', value: 'Máxima' },
        { label: 'SEO Score', value: '100/100' }
      ],
      keywords: 'criação de sites, desenvolvimento web, site responsivo, alta conversão, seo técnico, website profissional',
      path: '/criacao-de-sites'
    },
    {
      icon: Target,
      title: 'Google Ads para Negócios Locais',
      subtitle: 'Campanhas de Alto ROI e Resultados Imediatos',
      description: 'Especialistas certificados em Google Ads focados em negócios locais. Criamos campanhas estratégicas de tráfego pago que geram leads qualificados com máximo retorno sobre investimento.',
      features: [
        'Campanhas de pesquisa local otimizadas',
        'Segmentação geográfica precisa para sua região',
        'Google Shopping e Display Ads estratégicos',
        'Otimização contínua de custo por clique (CPC)',
        'Remarketing para visitantes do site',
        'ROI médio de +300% comprovado'
      ],
      color: 'orange',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      results: [
        { label: 'ROI Médio', value: '+300%' },
        { label: 'Leads', value: '+250%' },
        { label: 'Conversão', value: '85%' }
      ],
      keywords: 'google ads, campanhas locais, tráfego pago, anúncios google, ppc, custo por clique, links patrocinados',
      path: '/google-ads'
    },
    {
      icon: Home,
      title: 'Aluguel de Sites',
      subtitle: 'Presença Digital Profissional por Menos que uma Consulta',
      description: 'Solução inovadora de aluguel de sites com todas as funcionalidades essenciais. Site profissional, SEO Local, blog otimizado e suporte técnico completo por uma mensalidade acessível.',
      features: [
        'Site profissional sem investimento inicial',
        'SEO Local completo incluído',
        'Blog otimizado com posts estratégicos',
        'Hospedagem e atualizações gratuitas',
        'Formulário de agendamento integrado',
        'Suporte técnico ilimitado'
      ],
      color: 'green',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      results: [
        { label: 'Investimento', value: 'R$ 97' },
        { label: 'Economia/Ano', value: 'R$ 2.836' },
        { label: 'Entrega', value: '7 dias' }
      ],
      keywords: 'aluguel de sites, site profissional, assinatura mensal, site fisioterapia, presença digital',
      path: '/aluguel-de-sites'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Serviços de <span className="text-blue-600">Marketing Digital</span> para{' '}
            <span className="text-blue-600">Negócios Locais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Especialistas em Google Meu Negócio, Criação de Sites e Google Ads. Soluções completas de SEO local,
            desenvolvimento web e tráfego pago para empresas que querem dominar o mercado digital na sua região.
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

                  <div className="grid grid-cols-3 gap-4">
                    {service.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-white rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-600">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleNavigate(service.path)}
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
              <h3 className="text-3xl font-bold">Por Que Escolher a Eleve Leads?</h3>
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Somos especialistas certificados com resultados comprovados em Google Meu Negócio, SEO Local,
              Criação de Sites e Google Ads. Focamos em negócios locais e geramos leads qualificados com ROI demonstrado.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <TrendingUp className="w-10 h-10 mx-auto mb-3 text-blue-200" />
                <div className="text-2xl font-bold mb-2">+300%</div>
                <div className="text-blue-100">ROI Médio dos Clientes</div>
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