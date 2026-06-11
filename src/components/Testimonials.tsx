import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Maria Silva', business: 'Salão da Maria', text: 'Em 2 meses meu salão apareceu no topo do Google. O telefone não para de tocar!', rating: 5 },
    { name: 'João Santos', business: 'Oficina do João', text: 'Investimento que vale cada centavo. Retorno em leads foi impressionante.', rating: 5 },
    { name: 'Ana Costa', business: 'Clínica da Ana', text: 'Profissionais sérios e comprometidos. Minha clínica está sempre cheia.', rating: 5 },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Casos de Sucesso
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre os resultados.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-gray-900">{t.name}</div>
                <div className="text-sm text-gray-500">{t.business}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
