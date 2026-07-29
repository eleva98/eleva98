import React, { useEffect, useState } from 'react';
import {
  QrCode,
  Smartphone,
  Star,
  Package,
  ShieldCheck,
  Palette,
  RefreshCw,
  BarChart3,
  Zap,
  Truck,
  BadgeCheck,
  ChevronDown,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Frown,
  CheckCircle2,
  Clock,
  Award,
} from 'lucide-react';
import SEOHead from './SEOHead';

interface SmartSignsLandingProps {
  setCurrentPage: (page: string) => void;
}

const useReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const SmartSignsLanding: React.FC<SmartSignsLandingProps> = ({ setCurrentPage }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useReveal();

  const handleGoToContact = () => {
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const scrollToCheckout = () => {
    const el = document.getElementById('checkout');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const steps = [
    {
      icon: Package,
      title: 'Você recebe a placa em casa',
      description: 'Envio em 24h com frete grátis para todo o Brasil. Chega prontinha para usar.',
    },
    {
      icon: Smartphone,
      title: 'Ative e personalize seu link',
      description: 'Escaneie o QR code master para ativar e personalizar seu link de avaliação ou biosite.',
    },
    {
      icon: Star,
      title: 'Posicione e veja as avaliações chegarem',
      description: 'Coloque a placa no seu balcão ou mesa. Os clientes escaneiam e avaliam na hora.',
    },
  ];

  const benefits = [
    { icon: ShieldCheck, title: 'Sem toque físico', text: 'QR code e NFC higiênicos — sem contato, sem app.' },
    { icon: Palette, title: 'Personalizável', text: 'Imprimimos sua marca e cores na placa premium.' },
    { icon: BadgeCheck, title: 'Material premium', text: 'Acrílico fosco resistente a riscos e elegante.' },
    { icon: RefreshCw, title: 'Atualização remota', text: 'Troque o destino do QR code a qualquer momento.' },
    { icon: BarChart3, title: 'Relatório de métricas', text: 'Veja quantos scans e quantas avaliações foram geradas.' },
    { icon: Zap, title: 'Instalação em 2 minutos', text: 'Pronta para uso — só posicionar onde os clientes veem.' },
  ];

  const testimonials = [
    {
      name: 'Juliana',
      business: 'Restaurante Sabor & Arte',
      image: 'https://images.pexels.com/photos/14156484/pexels-photo-14156484.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
      quote: 'Minhas avaliações no Google saltaram de 12 para 87 em dois meses. A placa é linda e chama atenção na mesa.',
      stars: 5,
    },
    {
      name: 'Dr. Carlos',
      business: 'Clínica Sorriso',
      image: 'https://images.pexels.com/photos/7752805/pexels-photo-7752805.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
      quote: 'Simples, moderna e eficiente. O NFC é mágica pura — os pacientes encostam o celular e avaliam.',
      stars: 5,
    },
    {
      name: 'Márcia',
      business: 'Salão Bella Hair',
      image: 'https://images.pexels.com/photos/7752818/pexels-photo-7752818.jpeg?auto=compress&cs=tinysrgb&h=300&w=300',
      quote: 'Eu não manjo de tecnologia, mas em 5 minutos estava tudo pronto. O biosite ficou show!',
      stars: 5,
    },
  ];

  const faqs = [
    {
      question: 'Precisa de pilha ou energia?',
      answer: 'Não. A tecnologia é totalmente passiva — o QR code e o chip NFC funcionam sem bateria, sem fios e sem manutenção. É só posicionar e usar.',
    },
    {
      question: 'Posso reutilizar o QR code?',
      answer: 'Sim! Você pode alterar o link de destino a qualquer momento pelo nosso painel online. A placa física continua a mesma, só o endereço muda — ideal para atualizar ofertas ou links do biosite.',
    },
    {
      question: 'Quanto tempo demora para chegar?',
      answer: 'O envio é feito em até 24h após a confirmação da compra. O prazo médio de entrega é de 5 dias úteis, com frete grátis para todo o Brasil.',
    },
    {
      question: 'Não sei criar o biosite. Vocês ajudam?',
      answer: 'Sim! Enviamos o seu biosite 100% pronto e personalizado em até 2 dias após a compra. Nossa equipe monta o design, adiciona seu WhatsApp, redes sociais e cardápio — você só aprova.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Placas Inteligentes - Eleve Leads | Avaliações 5 Estrelas com QR Code e NFC"
        description="Placas em acrílico premium com QR Code e NFC que direcionam seus clientes direto para a tela de avaliação do Google. Inclui placa de biosite digital. Frete grátis."
        keywords="placas inteligentes, qr code, nfc, avaliação google, biosite, placa de avaliação, reputação online, placas acrílico"
        canonical="https://elevaleads.com/placas-inteligentes"
      />

      {/* ===================== 1. HERO ===================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-7">
              <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-1.5 text-sm font-medium text-blue-700">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Tecnologia QR Code + NFC</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme Clientes em{' '}
                <span className="text-blue-600">Avaliações 5 Estrelas</span> — de Forma Automática
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Placas inteligentes com QR Code e NFC que direcionam seus clientes direto para deixar
                avaliações no Google. E de brinde, um biosite profissional para sua empresa.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToCheckout}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2 group"
                >
                  Quero Minha Placa Agora
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={handleGoToContact}
                  className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center justify-center gap-2"
                >
                  Tirar Dúvidas
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 pt-2">
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-amber-500" />
                  <span>Frete grátis para todo Brasil</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-500" />
                  <span>Instalação em 2 minutos</span>
                </div>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.pexels.com/photos/2451622/pexels-photo-2451622.jpeg?auto=compress&cs=tinysrgb&w=1000"
                  alt="Cliente escaneando QR code com celular"
                  className="w-full h-[420px] md:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent"></div>
              </div>

              {/* Floating star card */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-2xl p-4 w-52 hidden sm:block">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-800 font-bold text-lg leading-none">+300%</p>
                <p className="text-gray-500 text-xs mt-1">avaliações em 30 dias</p>
              </div>

              {/* Floating NFC badge */}
              <div className="absolute -top-4 -right-4 bg-amber-500 text-blue-900 rounded-2xl shadow-xl px-4 py-3 font-bold text-sm hidden sm:block">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  <span>Encoste & Avalie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 2. O PROBLEMA ===================== */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Você sabia que{' '}
                <span className="text-blue-600">93% dos consumidores</span> leem avaliações antes de
                escolher um negócio?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A maioria dos seus clientes satisfeitos nunca deixa uma avaliação — simplesmente porque é
                inconveniente. Enquanto isso, um único feedback negativo pode afastar novos clientes.
              </p>
              <p className="text-lg font-semibold text-gray-900">
                Sua reputação online está no piloto automático?
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <span className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium">
                  Clientes felizes não avaliam
                </span>
                <span className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm font-medium">
                  Avaliação negativa afasta vendas
                </span>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-72 text-center">
                  <div className="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-5">
                    <Frown className="w-10 h-10 text-red-400" />
                  </div>
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={i < 3 ? 'w-6 h-6 text-red-400 fill-current' : 'w-6 h-6 text-gray-200'} />
                    ))}
                  </div>
                  <p className="text-gray-700 font-medium">"Foi ok, nada demais..."</p>
                  <p className="text-gray-400 text-sm mt-2">1 avaliação · este mês</p>
                </div>
                <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  Perdendo vendas
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 3. A SOLUÇÃO ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apresentando as <span className="text-blue-600">Placas Inteligentes Eleve Leads</span>
            </h2>
            <p className="text-xl text-gray-600">
              Duas soluções em acrílico premium com tecnologia QR Code e NFC para transformar a presença
              digital do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            {/* Card 1: Placa de Avaliação Google */}
            <div className="reveal bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 lg:p-10 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="relative rounded-xl overflow-hidden mb-6 h-56">
                <img
                  src="https://images.pexels.com/photos/12935051/pexels-photo-12935051.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Placa de avaliação Google com QR code e NFC"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold inline-flex items-center gap-1.5">
                  <QrCode className="w-4 h-4" />
                  QR Code + NFC
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Placa de Avaliação Google</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Basta o cliente apontar a câmera do celular ou encostar com NFC. Ele é direcionado
                automaticamente para a tela de avaliação 5 estrelas do seu negócio no Google. Sem digitar,
                sem buscar.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 inline-flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-amber-700">Aumente suas avaliações em até 300% em 30 dias</span>
              </div>
            </div>

            {/* Card 2: Placa de Biosite */}
            <div className="reveal bg-gradient-to-b from-amber-50 to-white rounded-2xl p-8 lg:p-10 border border-amber-100 hover:shadow-xl transition-shadow duration-300">
              <div className="relative rounded-xl overflow-hidden mb-6 h-56">
                <img
                  src="https://images.pexels.com/photos/12935064/pexels-photo-12935064.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Placa de biosite com QR code"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold inline-flex items-center gap-1.5">
                  <Smartphone className="w-4 h-4" />
                  Biosite Digital
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Placa de Biosite</h3>
              <p className="text-gray-600 leading-relaxed mb-5">
                Seu cartão de visita digital. O cliente escaneia e acessa seu cardápio, WhatsApp, redes
                sociais e site em um único lugar. Perfeito para mesas de restaurante, balcões e recepções.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 inline-flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <span className="font-bold text-amber-700">Incluímos o design do seu biosite grátis</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4. COMO FUNCIONA ===================== */}
      <section className="py-20 lg:py-28 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Em 3 passos simples</h2>
            <p className="text-xl text-blue-100">Do recebimento às primeiras avaliações em minutos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="reveal text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <step.icon className="w-9 h-9 text-blue-900" />
                  </div>
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-white text-blue-600 rounded-full font-bold flex items-center justify-center text-sm shadow-md">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-14">
            <button
              onClick={scrollToCheckout}
              className="bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2 group"
            >
              Quero Começar Agora
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================== 5. BENEFÍCIOS ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que as empresas estão adotando?
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologia, design e resultados que seus clientes percebem na hora.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="reveal bg-gray-50 rounded-xl p-7 hover:bg-blue-50 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.text}</p>
                {index === 4 && (
                  <span className="inline-block mt-3 text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
                    Diferencial exclusivo
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 6. DEPOIMENTOS ===================== */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Quem usa, recomenda</h2>
            <p className="text-xl text-gray-600">Resultados reais de negócios locais como o seu.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="reveal bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.business}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{t.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 7. GARANTIA E PREÇO ===================== */}
      <section id="checkout" className="py-20 lg:py-28 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Peça a sua sem risco</h2>
            <p className="text-xl text-blue-100">Tudo o que você precisa para dominar sua reputação online.</p>
          </div>

          <div className="reveal bg-white text-gray-900 rounded-2xl shadow-2xl overflow-hidden max-w-3xl mx-auto">
            <div className="bg-amber-500 text-blue-900 text-center py-3 font-bold text-sm uppercase tracking-wide">
              Oferta de lançamento · Estoque limitado
            </div>
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                Kit Completo Eleve Leads
              </h3>
              <p className="text-gray-500 text-center mb-8">
                Placa de Avaliação Google (QR + NFC) + Placa de Biosite + Biosite Personalizado Grátis
              </p>

              <div className="flex items-center justify-center gap-3 mb-2">
                <span className="text-2xl text-gray-400 line-through">R$ 397</span>
                <span className="text-5xl md:text-6xl font-bold text-blue-600">R$ 197</span>
              </div>
              <p className="text-center text-gray-600 mb-8">
                ou <strong className="text-gray-900">6x de R$ 32,84</strong> sem juros
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {[
                  'Placa de Avaliação Google com QR + NFC',
                  'Placa de Biosite com QR Code',
                  'Biosite personalizado grátis',
                  'Painel para trocar o link quando quiser',
                  'Relatório de métricas de scans',
                  'Frete grátis para todo Brasil',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={handleGoToContact}
                className="w-full bg-amber-500 hover:bg-amber-600 text-blue-900 font-bold text-lg md:text-xl py-5 rounded-lg transition-colors"
              >
                QUERO MINHAS PLACAS COM DESCONTO
              </button>

              <div className="mt-6 flex items-center justify-center gap-3 text-sm text-gray-600">
                <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-center">
                  <strong>30 dias de garantia incondicional.</strong> Se não gerar resultados, devolvemos seu dinheiro.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 8. FAQ ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas antes de pedir a sua.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="reveal bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-100 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-base md:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: openFaq === index ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-12">
            <p className="text-gray-600 mb-4">Ainda com dúvidas?</p>
            <button
              onClick={handleGoToContact}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================== CTA Final ===================== */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pronto para Dominar Sua Reputação Online?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Solicite seu Kit Completo de Placas Inteligentes e comece a receber avaliações 5 estrelas ainda
            esta semana.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={scrollToCheckout}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2 group"
            >
              <span>Quero Minhas Placas Agora</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>Envio em 24h</span>
            </div>
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Garantia 30 dias</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Suporte completo</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmartSignsLanding;
