import React from 'react';
import { ArrowRight, Eye, BarChart3, DollarSign, Award, TrendingUp, Users, CheckCircle2, ExternalLink, Linkedin } from 'lucide-react';
import SEOHead from './SEOHead';

const About = () => {
  const handleGoToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Sobre a Eleve Leads - Gabriel Battisti | Especialista Certificado Google"
        description="Conheça Gabriel Battisti, fundador da Eleve Leads. Especialista certificado em Google Search com expertise comprovada em SEO Local e Google Meu Negócio."
        keywords="gabriel battisti, eleve leads, especialista google, certificação google, seo local, sobre eleve leads"
        canonical="https://elevaleads.com/about"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Especialistas em{' '}
            <span className="text-blue-600">Google Meu Negócio</span>{' '}
            para empresas locais.
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Somos uma agência especializada em transformar a presença digital de empresas locais, utilizando as melhores práticas do Google Meu Negócio e SEO Local para gerar resultados mensuráveis.
          </p>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Missão</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              "Nossa missão é democratizar o acesso ao marketing digital de qualidade para empresas locais. Acreditamos que todo negócio, independente do tamanho, merece ser encontrado pelos seus clientes ideais. Utilizamos nossa expertise em Google Meu Negócio e SEO Local para transformar a presença online das empresas em uma máquina de geração de leads qualificados e crescimento sustentável."
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Expertise e Diferencial</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            <div className="text-center max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A Eleve Leads é uma agência especializada em marketing digital para empresas locais, com foco exclusivo em Google Meu Negócio e SEO Local. Nossa equipe possui certificações oficiais do Google e anos de experiência prática em transformar perfis online em ferramentas poderosas de geração de leads.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Trabalhamos exclusivamente com negócios que atendem clientes em localizações específicas - desde clínicas médicas e escritórios de advocacia até restaurantes e prestadores de serviços. Nosso diferencial está na compreensão profunda de como o algoritmo do Google funciona para buscas locais e na aplicação estratégica desse conhecimento para maximizar a visibilidade dos nossos clientes.
              </p>
            </div>
            
            {/* Credenciais da Agência */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Certificação Google</h3>
                <p className="text-gray-600">Equipe certificada oficialmente pelo Google em Rede de Pesquisa e especializada em SEO Local</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Resultados Comprovados</h3>
                <p className="text-gray-600">Histórico consistente de crescimento em visualizações, ligações e conversões para nossos clientes</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Foco em Parcerias</h3>
                <p className="text-gray-600">Relacionamentos de longo prazo baseados em transparência total e resultados mensuráveis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Filosofia */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Trabalhamos</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa metodologia é fundamentada em três pilares que garantem resultados consistentes e duradouros para empresas locais.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <Eye className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Transparência Total</h3>
              <p className="text-gray-600 leading-relaxed">
                Nossos clientes sempre sabem o que está sendo feito e por quê. Relatórios claros mostram o progresso real, sem métricas de vaidade, focando no que realmente impacta o negócio.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors duration-300">
                <BarChart3 className="w-10 h-10 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Estratégia Baseada em Dados</h3>
              <p className="text-gray-600 leading-relaxed">
                Cada ação é fundamentada em dados. Analisamos detalhadamente o mercado local, concorrência e comportamento do público-alvo antes de implementar qualquer estratégia.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors duration-300">
                <DollarSign className="w-10 h-10 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Obsessão por ROI</h3>
              <p className="text-gray-600 leading-relaxed">
                Visibilidade é importante, mas o que conta é o Retorno Sobre Investimento. Nosso objetivo é que o valor gerado seja sempre superior ao investimento realizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Evolução */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Evolução no Mercado</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600">
              Uma trajetória de crescimento e especialização em marketing digital para empresas locais
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2020</h3>
                    <p className="text-gray-600">Início da especialização em SEO Local e Google Meu Negócio</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2021</h3>
                    <p className="text-gray-600">Primeiros clientes locais com resultados de +200% em visibilidade</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2022</h3>
                    <p className="text-gray-600">Certificação oficial Google e foco exclusivo em negócios locais</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">2024</h3>
                    <p className="text-gray-600">Consolidação da Eleve Leads como referência em GMB para empresas locais</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para ter uma agência especializada cuidando do seu crescimento local?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vamos conversar sobre como nossa expertise em Google Meu Negócio pode transformar a presença online da sua empresa em uma máquina de gerar clientes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGoToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2 group"
            >
              <span>Solicitar Análise Gratuita</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;