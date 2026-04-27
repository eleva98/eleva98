import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    const servicePage = ['google-meu-negocio', 'criacao-de-sites', 'google-ads', 'seo'].includes(currentPage);

    if (currentPage !== 'home' && !servicePage) {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (currentPage === 'home' || servicePage) {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => handleNavigation('home')}
          >
            <div className="h-36 flex items-center">
              <img 
                src="/eleve leads (5).png" 
                alt="Eleva Leads" 
                className="h-36 w-auto object-contain drop-shadow-sm"
                loading="eager"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "/eleve leads (6).png";
                  target.onerror = () => {
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-3xl font-bold text-blue-600 drop-shadow-sm">Eleve Leads</span>';
                    }
                  };
                }}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavigation('home')}
              className={`transition-colors ${
                currentPage === 'home' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Início
            </button>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <span>Serviços</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <button
                    onClick={() => handleNavigation('google-meu-negocio')}
                    className={`block w-full text-left px-4 py-3 hover:bg-blue-50 transition-colors ${
                      currentPage === 'google-meu-negocio' ? 'text-blue-600 bg-blue-50' : 'text-gray-700'
                    }`}
                  >
                    <div className="font-medium">Google Meu Negócio</div>
                    <div className="text-sm text-gray-500">SEO Local e GMB</div>
                  </button>
                  <button
                    onClick={() => handleNavigation('criacao-de-sites')}
                    className={`block w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors ${
                      currentPage === 'criacao-de-sites' ? 'text-purple-600 bg-purple-50' : 'text-gray-700'
                    }`}
                  >
                    <div className="font-medium">Criação de Sites</div>
                    <div className="text-sm text-gray-500">Alta conversão e SEO</div>
                  </button>
                  <button
                    onClick={() => handleNavigation('google-ads')}
                    className={`block w-full text-left px-4 py-3 hover:bg-red-50 transition-colors ${
                      currentPage === 'google-ads' ? 'text-red-600 bg-red-50' : 'text-gray-700'
                    }`}
                  >
                    <div className="font-medium">Google Ads</div>
                    <div className="text-sm text-gray-500">Campanhas locais</div>
                  </button>
                  <button
                    onClick={() => handleNavigation('seo')}
                    className={`block w-full text-left px-4 py-3 hover:bg-green-50 transition-colors ${
                      currentPage === 'seo' ? 'text-green-600 bg-green-50' : 'text-gray-700'
                    }`}
                  >
                    <div className="font-medium">SEO</div>
                    <div className="text-sm text-gray-500">Buscas orgânicas</div>
                  </button>
                  <button
                    onClick={() => handleNavigation('site-rental')}
                    className={`block w-full text-left px-4 py-3 hover:bg-emerald-50 transition-colors ${
                      currentPage === 'site-rental' ? 'text-emerald-600 bg-emerald-50' : 'text-gray-700'
                    }`}
                  >
                    <div className="font-medium">Aluguel de Sites</div>
                    <div className="text-sm text-gray-500">A partir de R$ 97/mês</div>
                  </button>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => handleScrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Casos de Sucesso
            </button>
            <button 
              onClick={() => handleNavigation('about')}
              className={`transition-colors ${
                currentPage === 'about' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Sobre
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className={`transition-colors ${
                currentPage === 'contact' 
                  ? 'text-blue-600 font-medium' 
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              Contato
            </button>
            <button 
              onClick={() => handleNavigation('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Diagnóstico Gratuito
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('home')}
                className={`text-left transition-colors ${
                  currentPage === 'home' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Início
              </button>
              <button 
                onClick={() => handleNavigation('google-meu-negocio')}
                className={`text-left transition-colors ${
                  currentPage === 'google-meu-negocio' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Google Meu Negócio
              </button>
              <button 
                onClick={() => handleNavigation('criacao-de-sites')}
                className={`text-left transition-colors ${
                  currentPage === 'criacao-de-sites' 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Criação de Sites
              </button>
              <button
                onClick={() => handleNavigation('google-ads')}
                className={`text-left transition-colors ${
                  currentPage === 'google-ads'
                    ? 'text-red-600 font-medium'
                    : 'text-gray-700 hover:text-red-600'
                }`}
              >
                Google Ads
              </button>
              <button
                onClick={() => handleNavigation('seo')}
                className={`text-left transition-colors ${
                  currentPage === 'seo'
                    ? 'text-green-600 font-medium'
                    : 'text-gray-700 hover:text-green-600'
                }`}
              >
                SEO
              </button>
              <button
                onClick={() => handleNavigation('site-rental')}
                className={`text-left transition-colors ${
                  currentPage === 'site-rental'
                    ? 'text-emerald-600 font-medium'
                    : 'text-gray-700 hover:text-emerald-600'
                }`}
              >
                Aluguel de Sites
              </button>
              <button
                onClick={() => handleScrollToSection('testimonials')}
                className="text-gray-700 hover:text-blue-600 transition-colors text-left"
              >
                Casos de Sucesso
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className={`text-left transition-colors ${
                  currentPage === 'about' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Sobre
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`text-left transition-colors ${
                  currentPage === 'contact' 
                    ? 'text-blue-600 font-medium' 
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contato
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium w-full"
              >
                Diagnóstico Gratuito
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;