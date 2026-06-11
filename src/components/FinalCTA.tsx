import { ArrowRight, MessageCircle } from 'lucide-react';

interface FinalCTAProps {
  setCurrentPage?: (page: string) => void;
}

export default function FinalCTA({ setCurrentPage }: FinalCTAProps) {
  return (
    <section className="py-16 sm:py-24 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
          Pronto para elevar seu negócio?
        </h2>
        <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Comece hoje e veja resultados em 30 dias. Fale com um especialista gratuitamente.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => { setCurrentPage?.('contact'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            Fale Conosco <ArrowRight size={20} />
          </button>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            <MessageCircle size={20} /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
