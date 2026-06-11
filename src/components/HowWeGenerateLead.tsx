import React from 'react';
import { MapPin, Code, Target, BarChart3 } from 'lucide-react';

const HowWeGenerateLead = () => {
  const steps = [
    {
      icon: MapPin,
      title: 'Posicionamento no Google Maps',
      description: 'Otimizamos seu Google Meu Negócio com informações corretas, fotos profissionais, horários atualizados e gerenciamento ativo de avaliações. Pacientes encontram sua clínica nos primeiros resultados quando buscam "fisioterapia perto de mim".',
      metrics: '+245% em visualizações'
    },
    {
      icon: Code,
      title: 'Estrutura Técnica SEO Local',
      description: 'Implementamos código estruturado, schema markup para clínicas, citações locais verificadas e otimização de velocidade do site. O Google Search Console monitora todos os dados de performance e indexação.',
      metrics: '+180% em ligações qualificadas'
    },
    {
      icon: Target,
      title: 'Campanhas Google Ads com Intenção de Agendamento',
      description: 'Criamos campanhas na Rede de Pesquisa com palavras-chave específicas de fisioterapia. Cada anúncio direciona para landing pages otimizadas que convertem visitantes em agendamentos reais.',
      metrics: '+320% em conversões'
    },
    {
      icon: BarChart3,
      title: 'Monitoramento de Conversões Offline',
      description: 'Rastreamos cada agendamento até o atendimento. Usando Google Search Console e dados de conversão offline, ajustamos estratégia continuamente para maximizar ROI.',
      metrics: '85% taxa de conversão'
    }
  ];

  return (
    <section id="how-we-generate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Transformamos buscas locais em agendamentos reais com Google Meu Negócio, SEO Local e sites tecnicamente estruturados para máxima performance no Google.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Processo estratégico integrado que transforma presença online em agendamentos reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-blue-100 hover:shadow-lg transition-shadow h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      Etapa {index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="pt-4 border-t border-blue-100">
                    <div className="text-sm font-semibold text-green-600">
                      {step.metrics}
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    →
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Resultado: Máquina de Agendamentos Contínua
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Combinamos Google Meu Negócio para visibilidade local, SEO Local para posicionamento orgânico, Google Ads para intenção imediata e Google Search Console para monitoramento técnico. O resultado? Uma estratégia integrada que gera pacientes qualificados todos os dias, com transparência total de performance.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Agendar Análise da Minha Clínica
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowWeGenerateLead;
