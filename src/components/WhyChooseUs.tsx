import React from 'react';
import { Award, TrendingUp, Target, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Certificação Google',
      description: 'Nossa certificação em Rede de Pesquisa garante conhecimento profundo dos algoritmos e melhores práticas do Google.',
      badge: 'Google Partner'
    },
    {
      icon: TrendingUp,
      title: 'Foco em ROI',
      description: 'Não apenas melhoramos sua visibilidade, focamos em gerar um Retorno sobre o Investimento que você pode ver e medir.',
      badge: 'ROI Comprovado'
    },
    {
      icon: Target,
      title: 'Especialistas em SEO',
      description: 'Nossa vasta experiência em SEO é aplicada estrategicamente para garantir que sua empresa domine as buscas locais.',
      badge: 'SEO Expert'
    },
    {
      icon: Shield,
      title: 'Resultados Garantidos',
      description: 'Trabalhamos com base em resultados concretos. Se não entregarmos o que prometemos, você não paga.',
      badge: 'Garantia Total'
    }
  ];

  return (
    <section className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
            Por Que a <span className="text-blue-600">Eleve Leads</span>?
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
            Não somos apenas mais uma agência de marketing. Somos especialistas focados em resultados mensuráveis para o seu negócio.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 md:mb-6">
                <div className="bg-blue-100 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-blue-600 transition-colors duration-300">
                  <reason.icon className="w-8 h-8 md:w-10 md:h-10 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {reason.badge}
                </div>
              </div>
              <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-4">{reason.title}</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-gray-50 rounded-2xl p-5 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Certificações e Parcerias</h3>
            <p className="text-sm md:text-base text-gray-600">Somos reconhecidos pelos principais players do mercado</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Google Partner</span>
              </div>
              <span className="text-gray-600 text-sm">Certificado Oficial</span>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SEO Expert</span>
              </div>
              <span className="text-gray-600 text-sm">Specialist Badge</span>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">GMB Pro</span>
              </div>
              <span className="text-gray-600 text-sm">Advanced Level</span>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center">
              <div className="h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded mb-3 md:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Analytics</span>
              </div>
              <span className="text-gray-600 text-sm">Data Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;