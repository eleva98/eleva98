import { Globe, Smartphone, Zap, Shield } from 'lucide-react';

interface WebsiteCreationPageProps {
  setCurrentPage: (page: string) => void;
}

export default function WebsiteCreationPage({ setCurrentPage }: WebsiteCreationPageProps) {
  const features = [
    { icon: Globe, title: 'Design Profissional', desc: 'Sites modernos que passam credibilidade e confiança.' },
    { icon: Smartphone, title: '100% Responsivo', desc: 'Perfeito em qualquer dispositivo, do celular ao desktop.' },
    { icon: Zap, title: 'Alta Performance', desc: 'Carregamento rápido para não perder visitantes.' },
    { icon: Shield, title: 'SEO Integrado', desc: 'Otimização para buscadores desde o lançamento.' },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Criação de Sites</h1>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Sites profissionais que convertem visitantes em clientes.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <f.icon className="text-blue-600" size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
          <button onClick={() => { setCurrentPage('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Solicitar Orçamento
          </button>
        </div>
      </section>
    </div>
  );
}
