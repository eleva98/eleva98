import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Contato</h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600 text-lg mb-8">
                Entre em contato conosco para saber como podemos ajudar seu negócio a crescer.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600" size={20} />
                  <span className="text-gray-700">(11) 99999-9999</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-gray-700">contato@elevaleads.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">São Paulo, SP</span>
                </div>
              </div>
            </div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Seu nome" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              <input type="email" placeholder="Seu e-mail" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              <textarea placeholder="Sua mensagem" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none" />
              <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
