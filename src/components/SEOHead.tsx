import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Eleve Leads - Especialistas em Google Meu Negócio | Mais Clientes, Mais Resultados",
  description = "Somos especialistas em Google Meu Negócio e SEO Local. Transforme sua presença online em resultados reais para clientes de alto valor. Diagnóstico gratuito!",
  keywords = "google meu negócio, seo local, agência gmb, marketing digital, leads qualificados",
  canonical = "https://elevaleads.com",
  ogImage = "https://elevaleads.com/og-image.jpg",
  noindex = false
}) => {
  React.useEffect(() => {
    // Update document title
    try {
      document.title = title;
    } catch (error) {
      console.warn('Erro ao atualizar título:', error);
    }
    
    // Update meta description
    try {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    } catch (error) {
      console.warn('Erro ao atualizar meta description:', error);
    }
    
    // Update meta keywords
    try {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      }
    } catch (error) {
      console.warn('Erro ao atualizar meta keywords:', error);
    }
    
    // Update canonical URL
    try {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      // Validate canonical URL
      try {
        const url = new URL(canonical);
        if (url.protocol === 'https:') {
          canonicalLink.setAttribute('href', canonical);
        }
      } catch (urlError) {
        console.warn('Invalid canonical URL:', canonical);
      }
    } catch (error) {
      console.warn('Erro ao atualizar canonical URL:', error);
    }
    
    // Update Open Graph tags
    try {
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', title);
      }
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) {
        ogDescription.setAttribute('content', description);
      }
      
      const ogUrl = document.querySelector('meta[property="og:url"]');
      if (ogUrl) {
        ogUrl.setAttribute('content', canonical);
      }
      
      const ogImageMeta = document.querySelector('meta[property="og:image"]');
      if (ogImageMeta) {
        ogImageMeta.setAttribute('content', ogImage);
      }
    } catch (error) {
      console.warn('Erro ao atualizar Open Graph tags:', error);
    }
    
    // Update Twitter tags
    try {
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      if (twitterTitle) {
        twitterTitle.setAttribute('content', title);
      }
      
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      if (twitterDescription) {
        twitterDescription.setAttribute('content', description);
      }
      
      const twitterUrl = document.querySelector('meta[property="twitter:url"]');
      if (twitterUrl) {
        twitterUrl.setAttribute('content', canonical);
      }
      
      const twitterImage = document.querySelector('meta[property="twitter:image"]');
      if (twitterImage) {
        twitterImage.setAttribute('content', ogImage);
      }
    } catch (error) {
      console.warn('Erro ao atualizar Twitter tags:', error);
    }
    
    // Handle noindex
    try {
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');
    } catch (error) {
      console.warn('Erro ao atualizar robots meta:', error);
    }
    
  }, [title, description, keywords, canonical, ogImage, noindex]);

  return null;
};

export default SEOHead;