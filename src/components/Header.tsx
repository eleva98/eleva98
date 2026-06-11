import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string | null;
  setCurrentPage: (page: string) => void;
}

export default function Header({ currentPage, setCurrentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', page: 'home' },
    { label: 'Sobre', page: 'about' },
    { label: 'Serviços', page: 'services' },
    { label: 'Contato', page: 'contact' },
  ];

  const handleNav = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <button onClick={() => handleNav('home')} className="text-xl sm:text-2xl font-bold text-blue-600">
            Eleve Leads
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className={`text-sm font-medium transition-colors ${currentPage === item.page ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => handleNav(item.page)}
                className="block w-full text-left py-3 px-4 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
