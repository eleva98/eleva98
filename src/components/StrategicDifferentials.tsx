import { Award, Clock, BarChart3, Users } from 'lucide-react';

export default function StrategicDifferentials() {
  const diffs = [
    { icon: Award, title: 'Expertise Comprovada', desc: 'Anos de experiência com resultados documentados em marketing digital local.' },
    { icon: Clock, title: 'Resposta Rápida', desc: 'Atendimento ágil e dedicado para seu negócio nunca pare.' },
    { icon: BarChart3, title: 'Dados no Centro', desc: 'Decisões baseadas em métricas reais, não achismos.' },
    { icon: Users, title: 'Time Especializado', desc: 'Profissionais focados em SEO local e presença digital.' },
  ];

  return (
    <section className="section-3 py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Diferenciais Estratégicos
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            O que nos torna a escolha certa para impulsionar seu negócio.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {diffs.map((d, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <d.icon className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{d.title}</h3>
              <p className="text-gray-600 text-sm">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
