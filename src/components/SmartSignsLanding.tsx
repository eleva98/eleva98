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
  TrendingDown,
  Frown,
  CheckCircle2,
  Clock,
  Award,
  Users,
  Store,
  MessageSquare,
  AlertTriangle,
  Wifi,
  Crown,
  DollarSign,
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

  // SPIN: Situation — establish the current reality
  const situationPoints = [
    {
      icon: Store,
      title: 'Você atende bem todo dia',
      text: 'Seus clientes saem satisfeitos, elogiam o atendimento e voltam a fazer compras — a base do seu negócio é sólida.',
    },
    {
      icon: Users,
      title: 'Mas quase ninguém avalia',
      text: 'Menos de 1 em cada 10 clientes felizes deixa uma avaliação no Google. Não por insatisfação — simplesmente esquecem ou acham complicado.',
    },
    {
      icon: MessageSquare,
      title: 'Sua reputação não reflete sua qualidade',
      text: 'Você tem dezenas de clientes satisfeitos, mas apenas 3 ou 4 avaliações no Google. Para quem pesquisa online, parece que você mal atende.',
    },
  ];

  // SPIN: Problem — surface the specific pain
  const problems = [
    {
      title: '93% dos consumidores leem avaliações antes de escolher',
      text: 'E 84% confiam nessas avaliações tanto quanto em recomendações pessoais. Sem avaliações, você é invisível.',
    },
    {
      title: 'Seu concorrente com mais estrelas está levando seus clientes',
      text: 'Quando alguém pesquisa "restaurante perto de mim" ou "dentista na região", quem tem mais avaliações 5 estrelas aparece primeiro e é escolhido.',
    },
    {
      title: 'Um único comentário negativo sem resposta derruba sua nota',
      text: 'Sem avaliações positivas para diluir, uma crítica negativa domina sua reputação e afasta novos clientes por meses.',
    },
  ];

  // SPIN: Implication — what it costs if nothing changes
  const implications = [
    {
      icon: TrendingDown,
      stat: 'Perda de 22%',
      label: 'de clientes que pesquisam online e escolem o concorrente',
    },
    {
      icon: DollarSign,
      stat: 'R$ milhares',
      label: 'em vendas perdidas a cada mês por não ter reputação online',
    },
    {
      icon: AlertTriangle,
      stat: 'Cada mês',
      label: 'sem avaliações novas é mais distância do concorrente no Google',
    },
  ];

  // SPIN: Need-payoff — the outcome the solution delivers
  const needPayoff = [
    { icon: TrendingUp, title: 'Avaliações 5 estrelas chegam sozinhas', text: 'O cliente encosta o celular e é levado direto à tela de avaliação. Sem fricção, sem esquecimento — a avaliação acontece na hora.' },
    { icon: Star, title: 'Sua nota sobe e você aparece primeiro', text: 'Mais avaliações positivas melhoram seu posicionamento no Google Maps e na busca local. Clientes te encontram antes dos concorrentes.' },
    { icon: Users, title: 'Novos clientes confiam e escolhem você', text: 'Uma página cheia de avaliações 5 estrelas converte muito mais visitantes em clientes. Sua reputação vira sua melhor propaganda.' },
  ];

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

  const plans = [
    {
      id: 'avaliacao',
      icon: QrCode,
      name: 'Placa de Avaliação Google',
      tagline: 'Para quem quer dominar as avaliações',
      creditPrice: 'R$ 100',
      pixPrice: 'R$ 74,99',
      installments: '2x de R$ 50,00',
      features: [
        'Placa em acrílico premium com QR Code + NFC',
        'Direciona direto para a tela de avaliação Google',
        'Personalização com sua marca e cores',
        'Painel online para trocar o link de destino',
        'Relatório de scans e avaliações geradas',
        'Frete grátis para todo Brasil',
      ],
      highlight: false,
      color: 'blue',
    },
    {
      id: 'kit',
      icon: Crown,
      name: 'Kit Completo Eleve Leads',
      tagline: 'As duas placas com o melhor custo-benefício',
      creditPrice: 'R$ 379',
      pixPrice: 'R$ 299',
      installments: '6x de R$ 63,17',
      features: [
        'Placa de Avaliação Google com QR Code + NFC',
        'Placa de Biosite com QR Code inclusa',
        'Biosite personalizado grátis (design incluso)',
        'Painel online para trocar os links quando quiser',
        'Relatório de métricas de ambas as placas',
        'Economia de R$ 21 comparado a comprar separado',
        'Frete grátis para todo Brasil',
      ],
      highlight: true,
      color: 'amber',
      badge: 'Mais Vendido',
      saving: 'Economize R$ 21',
    },
    {
      id: 'biosite',
      icon: Smartphone,
      name: 'Placa de Biosite',
      tagline: 'A solução mais completa para sua presença',
      creditPrice: 'R$ 300',
      pixPrice: 'R$ 257',
      installments: '5x de R$ 60,00',
      features: [
        'Placa em acrílico premium com QR Code',
        'Biosite digital personalizado grátis (design incluso)',
        'Cardápio, WhatsApp e redes sociais em um link',
        'Painel online para atualizar conteúdo a qualquer momento',
        'Relatório de scans e acessos ao biosite',
        'Frete grátis para todo Brasil',
      ],
      highlight: false,
      color: 'blue',
    },
  ];

  const faqs = [
    {
      question: 'Precisa de pilha ou energia?',
      answer: 'Não. A tecnologia é totalmente passiva — o QR code e o chip NFC funcionam sem bateria, sem fios e sem manutenção. É só posicionar e usar.',
    },
    {
      question: 'Qual a diferença entre as placas?',
      answer: 'A Placa de Avaliação Google direciona o cliente direto para a tela de avaliação 5 estrelas no Google. A Placa de Biosite mostra seu cardápio, WhatsApp e redes sociais em um único link digital. O Kit Completo traz as duas com um desconto especial.',
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
    {
      question: 'Os valores no Pix são realmente mais baratos?',
      answer: 'Sim. O pagamento via Pix tem desconto direto em relação ao crédito. A Placa de Avaliação sai por R$ 74,99 no Pix (R$ 100 no crédito), a Placa de Biosite por R$ 257 no Pix (R$ 300 no crédito) e o Kit Completo por R$ 299 no Pix (R$ 379 no crédito).',
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
                  Ver Preços
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
                  src="/Gemini_Generated_Image_uruqrcuruqrcuruq.png"
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

      {/* ===================== 2. SITUATION (SPIN) ===================== */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Situação
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Você atende bem — mas o Google não sabe disso
            </h2>
            <p className="text-xl text-gray-600">
              Veja se isso soa familiar com a realidade do seu negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {situationPoints.map((point, index) => (
              <div key={index} className="reveal bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                  <point.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{point.title}</h3>
                <p className="text-gray-600 leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== 3. PROBLEM (SPIN) ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block text-red-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Problema
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E isso está custando caro
            </h2>
            <p className="text-xl text-gray-600">
              A falta de avaliações não é um detalhe — é um problema que afasta clientes todos os dias.
            </p>
          </div>

          <div className="space-y-5">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="reveal flex items-start gap-5 bg-red-50 rounded-xl p-6 lg:p-8 border border-red-100 hover:border-red-200 transition-colors"
              >
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-80 text-center border-2 border-red-100">
              <div className="w-20 h-20 mx-auto bg-red-50 rounded-full flex items-center justify-center mb-5">
                <Frown className="w-10 h-10 text-red-400" />
              </div>
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={i < 3 ? 'w-6 h-6 text-red-400 fill-current' : 'w-6 h-6 text-gray-200'} />
                ))}
              </div>
              <p className="text-gray-700 font-medium">"Foi ok, nada demais..."</p>
              <p className="text-gray-400 text-sm mt-2">3 avaliações · nota 3,2</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 4. IMPLICATION (SPIN) ===================== */}
      <section className="py-20 lg:py-28 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block text-amber-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Implicação
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Quanto mais você demora, mais você perde
            </h2>
            <p className="text-xl text-gray-400">
              Cada mês sem avaliações novas é dinheiro indo direto para o bolso do concorrente.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {implications.map((imp, index) => (
              <div
                key={index}
                className="reveal bg-gray-800 rounded-xl p-8 text-center border border-gray-700 hover:border-amber-500 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-5">
                  <imp.icon className="w-7 h-7 text-red-400" />
                </div>
                <p className="text-3xl font-bold text-amber-500 mb-2">{imp.stat}</p>
                <p className="text-gray-400 leading-relaxed text-sm">{imp.label}</p>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-14">
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
              A pergunta não é <em>"posso pagar por uma solução?"</em> — é{' '}
              <strong className="text-amber-500">"quantos clientes vou perder até decidir?"</strong>
            </p>
            <button
              onClick={scrollToCheckout}
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-8 py-4 rounded-lg text-lg transition-colors inline-flex items-center gap-2 group"
            >
              Ver Como Resolver
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ===================== 5. NEED-PAYOFF (SPIN) ===================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-wider mb-3">
              A Solução
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Imagine suas avaliações crescendo sozinhas
            </h2>
            <p className="text-xl text-gray-600">
              Com as Placas Inteligentes, é exatamente isso que acontece — todos os dias, sem esforço.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {needPayoff.map((item, index) => (
              <div
                key={index}
                className="reveal bg-gradient-to-b from-green-50 to-white rounded-xl p-8 border border-green-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center mb-5">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Two product cards */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-16">
            {/* Card 1: Placa de Avaliação Google */}
            <div className="reveal bg-gradient-to-b from-blue-50 to-white rounded-2xl p-8 lg:p-10 border border-blue-100 hover:shadow-xl transition-shadow duration-300">
              <div className="relative rounded-xl overflow-hidden mb-6 h-56">
                <img
                  src="/Gemini_Generated_Image_uruqrcuruqrcuruq.png"
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
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 inline-flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-amber-600" />
                  <span className="font-bold text-amber-700">+300% em 30 dias</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2.5 inline-flex items-center gap-2">
                  <Wifi className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-blue-700">NFC incluso</span>
                </div>
              </div>
            </div>

            {/* Card 2: Placa de Biosite */}
            <div className="reveal bg-gradient-to-b from-amber-50 to-white rounded-2xl p-8 lg:p-10 border border-amber-100 hover:shadow-xl transition-shadow duration-300">
              <div className="relative rounded-xl overflow-hidden mb-6 h-56">
                <img
                  src="/Gemini_Generated_Image_uruqrcuruqrcuruq.png"
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
              <div className="flex items-center gap-3 flex-wrap">
                <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-2.5 inline-flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <span className="font-bold text-amber-700">Design grátis incluso</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-2.5 inline-flex items-center gap-2">
                  <QrCode className="w-5 h-5 text-blue-600" />
                  <span className="font-bold text-blue-700">QR Code</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 6. COMO FUNCIONA ===================== */}
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

      {/* ===================== 7. BENEFÍCIOS ===================== */}
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

      {/* ===================== 8. DEPOIMENTOS ===================== */}
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

      {/* ===================== 9. PLANOS E PREÇOS ===================== */}
      <section id="checkout" className="py-20 lg:py-28 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reveal text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-block text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">
              Escolha seu preço
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preços que cabem no seu bolso
            </h2>
            <p className="text-xl text-gray-600">
              Comece hoje com frete grátis e 30 dias de garantia. Pague menos no Pix.
            </p>
          </div>

          {/* Plan cards */}
          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`reveal rounded-2xl transition-all duration-300 relative ${
                  plan.highlight
                    ? 'bg-white shadow-2xl border-2 border-amber-400 lg:scale-105 lg:-mt-4'
                    : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-blue-900 text-sm font-bold px-6 py-1.5 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="p-8">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    plan.highlight ? 'bg-amber-500' : 'bg-blue-50'
                  }`}>
                    <plan.icon className={`w-7 h-7 ${plan.highlight ? 'text-blue-900' : 'text-blue-600'}`} />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                  <p className="text-gray-500 text-sm mb-6">{plan.tagline}</p>

                  {/* Pricing */}
                  <div className="bg-gray-50 rounded-xl p-5 mb-6">
                    {plan.saving && (
                      <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold mb-3">
                        <TrendingUp className="w-3.5 h-3.5" />
                        {plan.saving}
                      </div>
                    )}
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-gray-400 text-sm">Crédito:</span>
                      <span className="text-2xl font-bold text-gray-900">{plan.creditPrice}</span>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-green-600 text-sm font-semibold">Pix:</span>
                      <span className="text-4xl font-bold text-green-600">{plan.pixPrice}</span>
                    </div>
                    <p className="text-gray-500 text-xs mt-2">ou {plan.installments} sem juros</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          plan.highlight ? 'text-amber-500' : 'text-green-500'
                        }`} />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={handleGoToContact}
                    className={`w-full font-bold text-lg py-4 rounded-lg transition-colors ${
                      plan.highlight
                        ? 'bg-amber-500 hover:bg-amber-600 text-blue-900'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Quero Esta Opção
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Payment info */}
          <div className="reveal mt-12 flex flex-wrap items-center justify-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium">30 dias de garantia incondicional</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-medium">Frete grátis para todo Brasil</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium">Envio em 24h</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== 10. FAQ ===================== */}
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
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Dominar Sua Reputação Online?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Cada dia sem avaliações é um cliente que escolhe o concorrente. Comece hoje com frete grátis
            e 30 dias de garantia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={scrollToCheckout}
              className="bg-amber-500 text-blue-900 px-8 py-4 rounded-lg hover:bg-amber-600 transition-colors font-bold text-lg inline-flex items-center justify-center space-x-2 group"
            >
              <span>Ver Preços</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={handleGoToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2"
            >
              Falar com Especialista
            </button>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-6 text-blue-100">
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
