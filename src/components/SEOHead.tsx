import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
}

export default function SEOHead({
  title = 'Eleve Leads - Marketing Digital para Negócios Locais',
  description = 'Especialistas em Google Meu Negócio, SEO Local e criação de sites. Gere mais leads e clientes para seu negócio.',
  keywords = 'marketing digital, google meu negócio, seo local, criação de sites, leads',
  canonical = 'https://elevaleads.com',
}: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
      if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el); }
      el.content = content;
    };
    setMeta('description', description);
    setMeta('keywords', keywords);
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
  }, [title, description, keywords, canonical]);

  return null;
}
