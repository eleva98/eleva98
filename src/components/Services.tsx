import { MapPin, Globe, Megaphone, Search, Monitor } from 'lucide-react';

interface ServicesProps {
  setCurrentPage?: (page: string) => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const services = [
    { icon: MapPin, title: 'Google Meu Negócio', desc: 'Otimização completa para aparecer no topo das buscas locais.', page: 'google-meu-negocio' },
    { icon: Globe, title: 'Criação de Sites', desc: 'Sites profissionais focados em converter visitantes em clientes.', page: 'criacao-de-sites' },
    { icon: Megaphone, title: 'Google Ads', desc: 'Campanhas otimizadas para maximizar seu investimento.', page: 'google-ads' },
    { icon: Search, title: 'SEO Local', desc: 'Domine as buscas orgânicas na sua região.', page: 'seo' },
    { icon: Monitor, title: 'Aluguel de Sites', desc: 'Sites prontos e otimizados sem investimento alto.', page: 'site-rental' },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Soluções completas para sua presença digital.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <button
              key={i}
              onClick={() => { setCurrentPage?.(s.page); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all text-left group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                <s.icon className="text-blue-600 group-hover:text-white transition-colors" size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
