import React from 'react';
import { Zap, Users, TrendingUp, Map, Eye, FileText } from 'lucide-react';

const StrategicDifferentials = () => {
  const differentials = [
    {
      icon: Users,
      title: 'Especialização em Fisioterapia',
      description: 'Conhecemos profundamente o mercado de clínicas de fisioterapia: sazonalidade, palavras-chave, concorrência, intenção do paciente e ciclo de agendamento. Não somos generalistas.'
    },
    {
      icon: Zap,
      title: 'Estratégia Integrada (GMB + SEO + Ads)',
      description: 'Google Meu Negócio, SEO Local, Google Ads e Search Console trabalham juntos. Cada canal reforça o outro, criando autoridade exponencial no seu mercado.'
    },
    {
      icon: TrendingUp,
      title: 'Foco em Pacientes, Não Tráfego',
      description: 'Não medimos sucesso por cliques ou impressões. Medimos por agendamentos confirmados e pacientes que chegam à clínica. Tráfego não-qualificado não nos interessa.'
    },
    {
      icon: Map,
      title: 'Estrutura Escalável para Múltiplas Cidades',
      description: 'Começamos em uma cidade e expandimos para quantas quiser: São Paulo, Curitiba, Belo Horizonte, etc. Cada uma com estratégia customizada, mas processos replicáveis.'
    },
    {
      icon: Eye,
      title: 'Transparência e Relatórios Contínuos',
      description: 'Você acessa Google Search Console e Google Analytics para ver dados reais. Nada de "relatórios mágicos". Transparência total sobre performance e ROI.'
    },
    {
      icon: FileText,
      title: 'Resultados Comprovados',
      description: 'Mais de 250 agendamentos mensais para clientes, 85% taxa de conversão, 12+ cidades atendidas. Números reais, resultados tangíveis, sem promessas exageradas.'
    }
  ];

  return (
    <section id="differentials" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Nossos Diferenciais Estratégicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Por que somos diferentes na geração de pacientes para fisioterapia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white rounded-xl p-8 border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all h-full">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-100 rounded-lg group-hover:bg-blue-600 transition-colors mb-4">
                    <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {diff.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {diff.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Pronto para Transformar Sua Clínica?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Começamos com um diagnóstico gratuito. Analisamos sua presença atual no Google Meu Negócio, SEO Local e oportunidades de agendamentos perdidos.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg">
            Solicitar Diagnóstico Gratuito
          </button>
        </div>
      </div>
    </section>
  );
};

export default StrategicDifferentials;
