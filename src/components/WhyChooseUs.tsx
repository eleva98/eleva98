import { CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    'Foco 100% em resultados para negócios locais',
    'Relatórios transparentes e métricas em tempo real',
    'Equipe especializada em marketing digital local',
    'Atendimento personalizado e dedicado',
    'Preços justos sem surpresas',
    'Mais de 100 negócios atendidos com sucesso',
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Por que nos escolher?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Combinamos expertise, tecnologia e dedicação para entregar resultados reais ao seu negócio.
            </p>
            <ul className="space-y-4">
              {reasons.map((r, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-600 rounded-2xl p-8 sm:p-12 text-white">
            <h3 className="text-2xl font-bold mb-4">Resultados que falam por si</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl sm:text-4xl font-bold">100+</div>
                <div className="text-blue-200 text-sm">Negócios atendidos</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">3x</div>
                <div className="text-blue-200 text-sm">Aumento médio de leads</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">95%</div>
                <div className="text-blue-200 text-sm">Satisfação dos clientes</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold">30d</div>
                <div className="text-blue-200 text-sm">Primeiros resultados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
