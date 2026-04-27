import React from 'react';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';

const Hero = () => {
  const handleGoToContact = () => {
    window.location.href = '#contact';
  };

  const handleScrollToTestimonials = () => {
    const element = document.getElementById('testimonials');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-blue-600">Captação de Pacientes</span> para Clínicas de Fisioterapia via Google
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Somos especialistas em Google Meu Negócio e SEO Local, transformando sua presença online em resultados reais para clientes de alto valor.
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 font-medium">5.0 em resultados</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-gray-600 font-medium">+300% de visibilidade</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleGoToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg flex items-center justify-center space-x-2 group"
              >
                <span>Receber Diagnóstico Gratuito</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleScrollToTestimonials}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors font-medium text-lg"
              >
                Ver Casos de Sucesso
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Seu Negócio no Google</h3>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Visualizações</span>
                      <span className="text-green-600 text-sm font-medium">+245%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Ligações</span>
                      <span className="text-green-600 text-sm font-medium">+180%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-green-500 rounded-full w-2/3"></div>
                    </div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Direções</span>
                      <span className="text-green-600 text-sm font-medium">+320%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div className="h-2 bg-orange-500 rounded-full w-4/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;