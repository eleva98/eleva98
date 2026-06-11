import { Search, FileText, Link2, BarChart3 } from 'lucide-react';

export default function SEOPage() {
  const features = [
    { icon: Search, title: 'Pesquisa de Palavras-chave', desc: 'Identificamos os termos que seus clientes realmente buscam.' },
    { icon: FileText, title: 'Otimização On-Page', desc: 'Conteúdo e estrutura otimizados para os buscadores.' },
    { icon: Link2, title: 'Link Building Local', desc: 'Autoridade local construída com estratégias white-hat.' },
    { icon: BarChart3, title: 'Relatórios Mensais', desc: 'Acompanhe a evolução do seu posicionamento mês a mês.' },
  ];

  return (
    <div className="pt-20">
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">SEO Local</h1>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Domine as buscas orgânicas na sua região e atraia clientes qualificados.
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
        </div>
      </section>
    </div>
  );
}
