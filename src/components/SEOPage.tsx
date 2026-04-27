import React from 'react';
import {
  Search,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Award,
  BarChart3,
  Zap,
  Globe,
  Target
} from 'lucide-react';

const SEOPage = () => {
  const features = [
    {
      icon: Search,
      title: 'Otimização On-Page',
      description: 'Otimizamos títulos, meta descrições, headers e conteúdo para as palavras-chave mais importantes do seu negócio.',
      highlights: [
        'Pesquisa estratégica de palavras-chave',
        'Otimização de títulos e meta descrições',
        'Estrutura de headers e conteúdo',
        'Otimização de imagens e velocidade'
      ]
    },
    {
      icon: Globe,
      title: 'SEO Técnico',
      description: 'Estrutura técnica perfeita para que o Google consiga rastrear e indexar seu site corretamente.',
      highlights: [
        'Estrutura de URL otimizada',
        'Sitemap e robots.txt',
        'Velocidade de carregamento máxima',
        'Mobile-first indexing'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Link Building',
      description: 'Construção de autoridade através de backlinks de qualidade de sites relevantes e confiáveis.',
      highlights: [
        'Backlinks de alta qualidade',
        'Guest posting estratégico',
        'Parcerias com sites relevantes',
        'Autoridade de domínio'
      ]
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: 'Tráfego Orgânico',
      description: 'Aumento consistente de visitantes qualificados vindos do Google'
    },
    {
      icon: Target,
      title: 'Leads Qualificados',
      description: 'Visitantes com real interesse nos seus serviços ou produtos'
    },
    {
      icon: Award,
      title: 'Autoridade',
      description: 'Sua marca se torna referência na sua área de atuação'
    },
    {
      icon: Zap,
      title: 'ROI a Longo Prazo',
      description: 'Investimento que gera resultados consistentes por anos'
    }
  ];

  const process = [
    {
      title: 'Análise Completa',
      description: 'Auditoria técnica do site, análise de concorrência e pesquisa de palavras-chave'
    },
    {
      title: 'Estratégia',
      description: 'Planejamento de conteúdo e roadmap de otimizações prioritárias'
    },
    {
      title: 'Implementação',
      description: 'Otimizações on-page, técnicas e criação de conteúdo otimizado'
    },
    {
      title: 'Monitoramento',
      description: 'Acompanhamento de rankings, tráfego e ajustes contínuos'
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
            <span className="text-green-600">SEO</span> para{' '}
            <span className="text-blue-600">Negócios Locais</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Dominar as buscas orgânicas do Google é a estratégia de longo prazo mais rentável para seu negócio.
            Nossos especialistas em SEO garantem que sua empresa apareça nas primeiras posições quando clientes procuram seus serviços.
          </p>
          <div className="flex items-center justify-center space-x-4 mt-6">
            <div className="bg-green-100 px-4 py-2 rounded-full">
              <span className="text-green-700 font-medium text-sm">✓ SEO Estratégico</span>
            </div>
            <div className="bg-blue-100 px-4 py-2 rounded-full">
              <span className="text-blue-700 font-medium text-sm">✓ Resultados Comprovados</span>
            </div>
          </div>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-4 rounded-xl mr-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
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
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <benefit.icon className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h4>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Results Showcase */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Resultados Reais do SEO</h3>
            <p className="text-xl text-gray-600">
              Números comprovados de empresas que trabalharam conosco
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-2">+280%</div>
              <div className="text-gray-700 font-medium mb-2">Crescimento de Tráfego</div>
              <p className="text-gray-600 text-sm">Aumento de visitantes orgânicos em 6 meses</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-2">+320%</div>
              <div className="text-gray-700 font-medium mb-2">Melhoria de Rankings</div>
              <p className="text-gray-600 text-sm">Palavras-chave na primeira página do Google</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-green-600 mb-2">+250%</div>
              <div className="text-gray-700 font-medium mb-2">Aumento de Leads</div>
              <p className="text-gray-600 text-sm">Qualidade e volume de conversões elevados</p>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Nosso Processo de SEO</h3>
            <p className="text-xl text-gray-600">
              Estratégia comprovada para subir nas buscas do Google
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">{index + 1}</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white mb-16">
          <div className="text-center">
            <Award className="w-16 h-16 mx-auto mb-6 text-green-200" />
            <h3 className="text-3xl font-bold mb-4">Por Que Escolher Nosso SEO?</h3>
            <p className="text-xl text-green-100 mb-6 max-w-3xl mx-auto">
              Combinamos conhecimento técnico profundo com estratégia de negócios. Não apenas melhoramos rankings,
              geramos leads qualificados que se convertem em clientes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-200" />
                <h4 className="font-bold mb-1">Estratégia Customizada</h4>
                <p className="text-green-100 text-sm">Plano específico para seu negócio e mercado</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <BarChart3 className="w-8 h-8 mx-auto mb-2 text-green-200" />
                <h4 className="font-bold mb-1">Relatórios Detalhados</h4>
                <p className="text-green-100 text-sm">Acompanhamento completo de cada métrica</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <Zap className="w-8 h-8 mx-auto mb-2 text-green-200" />
                <h4 className="font-bold mb-1">Resultados Reais</h4>
                <p className="text-green-100 text-sm">ROI mensurável e crescimento consistente</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Pronto para Dominar as Buscas Orgânicas?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Combine SEO + Google Meu Negócio + Google Ads para máxima visibilidade e leads contínuos.
              Estratégia digital completa para seu negócio crescer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleScrollToContact}
                className="bg-white text-green-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2 group"
              >
                <span>Solicitar Auditoria SEO Grátis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="flex items-center justify-center space-x-8 mt-8 text-green-100">
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5" />
                <span>Expertise Comprovada</span>
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

export default SEOPage;
