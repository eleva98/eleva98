import { ArrowRight } from 'lucide-react';

interface HeroProps {
  setCurrentPage?: (page: string) => void;
}

export default function Hero({ setCurrentPage }: HeroProps) {
  return (
    <section className="section-1 pt-20 sm:pt-24 pb-16 sm:pb-24 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Eleve seu negócio com{' '}
            <span className="text-blue-600">marketing digital</span>{' '}
            que gera resultados
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Especialistas em Google Meu Negócio, SEO Local e criação de sites que convertem visitantes em clientes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => { setCurrentPage?.('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Fale Conosco <ArrowRight size={20} />
            </button>
            <button
              onClick={() => { setCurrentPage?.('services'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Nossos Serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
