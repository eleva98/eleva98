import { Monitor, Zap, CreditCard, Headphones } from 'lucide-react';

export default function SiteRentalLanding() {
  const benefits = [
    { icon: Monitor, title: 'Site Pronto', desc: 'Sem espera: site profissional disponível imediatamente.' },
    { icon: Zap, title: 'Sem Custo Inicial', desc: 'Sem investimento alto para ter um site de qualidade.' },
    { icon: CreditCard, title: 'Mensalidade Fixa', desc: 'Preço previsível sem surpresas no orçamento.' },
    { icon: Headphones, title: 'Suporte Incluso', desc: 'Manutenção e atualizações já inclusas no plano.' },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Aluguel de Sites</h1>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Sites profissionais sem investimento inicial. Pague apenas uma mensalidade e tenha tudo incluso.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <b.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
