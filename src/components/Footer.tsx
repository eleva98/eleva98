import React from 'react';
import { Phone, Mail, Clock, FileText } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, setCurrentPage }) => {
  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (sectionId: string) => {
    if (currentPage !== 'home') {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div 
              className="flex items-center space-x-2 cursor-pointer" 
              onClick={() => handleNavigation('home')}
            >
              <div className="h-16 flex items-center">
                <img 
                  src="/eleve leads (5).png" 
                  alt="Eleva Leads" 
                  className="h-16 w-auto object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = "/eleve leads (6).png";
                    target.onerror = () => {
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<span class="text-lg font-bold text-white">Eleve Leads</span>';
                      }
                    };
                  }}
                />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm text-left -mt-2">
              Especialistas em Google Meu Negócio e SEO Local.<br />
              Transformamos sua presença online em resultados reais.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Serviços</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigation('google-meu-negocio')}
                  className="hover:text-white transition-colors"
                >
                  Google Meu Negócio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('criacao-de-sites')}
                  className="hover:text-white transition-colors"
                >
                  Criação de Sites
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('google-ads')}
                  className="hover:text-white transition-colors"
                >
                  Google Ads
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('seo')}
                  className="hover:text-white transition-colors"
                >
                  SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('site-rental')}
                  className="hover:text-white transition-colors"
                >
                  Aluguel de Sites
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-4">Empresa</h3>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>
                <button 
                  onClick={() => handleNavigation('about')}
                  className="hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('where-we-serve')}
                  className="hover:text-white transition-colors"
                >
                  Onde Atendemos
                </button>
              </li>
              <li>
                <a 
                  href="https://blog.eleveleads.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('privacy-policy')}
                  className="hover:text-white transition-colors"
                >
                  Política de Privacidade
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">(51) 9437-3376</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400 text-sm">contato@eleveleads.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-blue-400 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>Segunda a Sábado</p>
                  <p>9h às 19h</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <FileText className="w-4 h-4 text-blue-400 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <p>CNPJ</p>
                  <p>36.588.967/0001-83</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 pt-3">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Eleve Leads. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;