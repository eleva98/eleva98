import { Target, Search, TrendingUp } from 'lucide-react';

export default function HowWeGenerateLead() {
  const steps = [
    { icon: Search, title: 'Análise', desc: 'Analisamos seu negócio, mercado e concorrência para traçar a melhor estratégia.' },
    { icon: Target, title: 'Estratégia', desc: 'Criamos um plano personalizado com foco em resultados e geração de leads.' },
    { icon: TrendingUp, title: 'Resultados', desc: 'Implementamos, monitoramos e otimizamos continuamente para máxima conversão.' },
  ];

  return (
    <section className="section-2 py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Como Geramos Leads
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Um processo comprovado para transformar sua presença digital em resultados concretos.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow bg-gray-50">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <step.icon className="text-blue-600" size={28} />
              </div>
              <div className="text-sm font-semibold text-blue-600 mb-2">Passo {i + 1}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
