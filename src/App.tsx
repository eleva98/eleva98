import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowWeGenerateLead from './components/HowWeGenerateLead';
import StrategicDifferentials from './components/StrategicDifferentials';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import About from './components/About';
import WhereWeServe from './components/WhereWeServe';
import PrivacyPolicy from './components/PrivacyPolicy';
import Contact from './components/Contact';
import WhatsAppFloat from './components/WhatsAppFloat';
import SEOHead from './components/SEOHead';
import GoogleMyBusinessPage from './components/GoogleMyBusinessPage';
import WebsiteCreationPage from './components/WebsiteCreationPage';
import GoogleAdsPage from './components/GoogleAdsPage';
import SEOPage from './components/SEOPage';
import SiteRentalLanding from './components/SiteRentalLanding';

function App() {
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getPageFromPath = (path: string): string => {
    if (path === '/google-meu-negocio') return 'google-meu-negocio';
    if (path === '/criacao-de-sites') return 'criacao-de-sites';
    if (path === '/google-ads') return 'google-ads';
    if (path === '/seo') return 'seo';
    if (path === '/aluguel-de-sites' || path === '/site-rental') return 'site-rental';
    if (path === '/contato' || path === '/contact') return 'contact';
    if (path === '/sobre' || path === '/about') return 'about';
    if (path === '/where-we-serve') return 'where-we-serve';
    if (path === '/politica-de-privacidade' || path === '/privacy-policy') return 'privacy-policy';
    return 'home';
  };

  const getPathFromPage = (page: string): string => {
    const pathMap: Record<string, string> = {
      'home': '/',
      'google-meu-negocio': '/google-meu-negocio',
      'criacao-de-sites': '/criacao-de-sites',
      'google-ads': '/google-ads',
      'seo': '/seo',
      'site-rental': '/aluguel-de-sites',
      'contact': '/contato',
      'about': '/sobre',
      'where-we-serve': '/where-we-serve',
      'privacy-policy': '/politica-de-privacidade'
    };
    return pathMap[page] || '/';
  };

  React.useEffect(() => {
    const initialPage = getPageFromPath(window.location.pathname);
    setCurrentPage(initialPage);
    setIsLoading(false);
  }, []);

  React.useEffect(() => {
    if (currentPage !== null) {
      const newPath = getPathFromPage(currentPage);
      if (window.location.pathname !== newPath) {
        window.history.pushState(null, '', newPath);
      }
    }
  }, [currentPage]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <About />;
      case 'where-we-serve':
        return <WhereWeServe />;
      case 'privacy-policy':
        return <PrivacyPolicy setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      case 'google-meu-negocio':
        return <GoogleMyBusinessPage setCurrentPage={setCurrentPage} />;
      case 'criacao-de-sites':
        return <WebsiteCreationPage setCurrentPage={setCurrentPage} />;
      case 'google-ads':
        return <GoogleAdsPage setCurrentPage={setCurrentPage} />;
      case 'seo':
        return <SEOPage />;
      case 'site-rental':
        return <SiteRentalLanding />;
      case 'home':
      default:
        return (
          <>
            <SEOHead />
            <Hero />
            <HowWeGenerateLead />
            <StrategicDifferentials />
            <ProblemSolution />
            <Services />
            <WhyChooseUs />
            <Testimonials />
            <FinalCTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <WhatsAppFloat />
    </div>
  );
}

export default App;