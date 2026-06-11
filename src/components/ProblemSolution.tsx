import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    'Seu negócio não aparece no Google Maps',
    'Site lento e que não gera contatos',
    'Concorrentes aparecem antes de você',
    'Investe em anúncios sem retorno',
  ];
  const solutions = [
    'Otimização completa do Google Meu Negócio',
    'Sites profissionais focados em conversão',
    'SEO Local para dominar buscas na sua região',
    'Campanhas de Google Ads otimizadas por especialistas',
  ];

  return (
    <section className="section-4 py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Problema e Solução
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Reconhecemos os desafios e entregamos as soluções certas.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-red-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-red-700 mb-6 flex items-center gap-2">
              <AlertTriangle size={24} /> Problemas Comuns
            </h3>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-red-600 text-xs font-bold">{i + 1}</span>
                  </span>
                  <span className="text-red-800">{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-green-700 mb-6 flex items-center gap-2">
              <CheckCircle2 size={24} /> Nossas Soluções
            </h3>
            <ul className="space-y-4">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-xs font-bold">{i + 1}</span>
                  </span>
                  <span className="text-green-800">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
