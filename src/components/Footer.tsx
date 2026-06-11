interface FooterProps {
  currentPage: string | null;
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-bold text-white mb-4">Eleve Leads</div>
            <p className="text-sm">Marketing digital focado em resultados para negócios locais.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav('google-meu-negocio')} className="hover:text-white transition-colors">Google Meu Negócio</button></li>
              <li><button onClick={() => handleNav('criacao-de-sites')} className="hover:text-white transition-colors">Criação de Sites</button></li>
              <li><button onClick={() => handleNav('google-ads')} className="hover:text-white transition-colors">Google Ads</button></li>
              <li><button onClick={() => handleNav('seo')} className="hover:text-white transition-colors">SEO Local</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav('about')} className="hover:text-white transition-colors">Sobre</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">Contato</button></li>
              <li><button onClick={() => handleNav('where-we-serve')} className="hover:text-white transition-colors">Onde Atendemos</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><button onClick={() => handleNav('privacy-policy')} className="hover:text-white transition-colors">Política de Privacidade</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Eleve Leads. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
