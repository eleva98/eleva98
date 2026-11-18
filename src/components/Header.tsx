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

  const navItems: { page: string; label: string }[] = [
    { page: 'home', label: 'Início' },
    { page: 'google-meu-negocio', label: 'Google Meu Negócio' },
    { page: 'google-ads', label: 'Google Ads' },
    { page: 'chatbot-secretario', label: 'Chatbot Secretário' },
    { page: 'about', label: 'Sobre' },
    { page: 'contact', label: 'Contato' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavigation('home')}
          >
            <div className="h-20 md:h-36 flex items-center">
              <img
                src="/eleve leads (5).png"
                alt="Eleva Leads"
                className="h-20 md:h-36 w-auto object-contain drop-shadow-sm"
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
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigation(item.page)}
                className={`transition-colors whitespace-nowrap ${
                  currentPage === item.page
                    ? 'text-blue-600 font-medium'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNavigation('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
            >
              Diagnóstico Gratuito
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavigation(item.page)}
                  className={`text-left text-base py-3 px-2 rounded-lg transition-colors ${
                    currentPage === item.page
                      ? 'text-blue-600 font-medium bg-blue-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavigation('contact')}
                className="bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mt-2"
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
