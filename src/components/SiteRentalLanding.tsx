import React, { useState } from 'react';
import {
  Check,
  X,
  ChevronDown,
  ChevronUp,
  MessageCircle,
  Zap,
  TrendingUp,
  Users,
  FileText,
  Award,
  Shield,
  Clock,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Search,
  MapPin,
  Target,
  PenTool,
  Palette,
  BarChart3
} from 'lucide-react';

const SiteRentalLanding = () => {
  const [activeTab, setActiveTab] = useState<'mensal' | 'anual'>('mensal');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    plano: 'ESSENCIAL'
  });

  const plans = [
    {
      name: 'START',
      price: 97,
      priceAnnual: 970,
      popular: false,
      features: [
        'Site one-page profissional',
        'Integração WhatsApp',
        'Formulário de contato',
        'Hospedagem inclusa',
        'SSL certificado',
        'Responsivo mobile',
        'Suporte técnico'
      ],
      notIncluded: ['Blog', 'SEO Local', 'Relatórios']
    },
    {
      name: 'ESSENCIAL',
      price: 147,
      priceAnnual: 1470,
      popular: true,
      features: [
        'Até 5 páginas',
        'Blog com 2 posts/mês',
        'SEO Local completo',
        'Google Meu Negócio básico',
        'Relatório mensal',
        'Formulários personalizados',
        'Galeria de fotos',
        'Hospedagem premium'
      ],
      notIncluded: []
    },
    {
      name: 'PROFISSIONAL',
      price: 247,
      priceAnnual: 2470,
      popular: false,
      features: [
        'Páginas ilimitadas',
        'Blog com 4 posts/mês',
        'SEO avançado otimizado',
        'GMB totalmente otimizado',
        'Campanhas Google Ads básicas',
        'Analytics avançado',
        'Chat online',
        'Agendamento online'
      ],
      notIncluded: []
    },
    {
      name: 'PREMIUM',
      price: 397,
      priceAnnual: 3970,
      popular: false,
      features: [
        'Tudo do Profissional +',
        'Estratégia de conteúdo',
        '2 landing pages/mês',
        'Consultoria estratégica mensal',
        'Suporte prioritário 24/7',
        'A/B testing',
        'CRM integrado',
        'Relatórios executivos'
      ],
      notIncluded: []
    }
  ];

  const comparison = [
    { item: 'Investimento inicial', traditional: 'R$ 4.000 - R$ 8.000', rental: 'R$ 0' },
    { item: 'Mensalidade', traditional: 'R$ 200 - R$ 500', rental: 'A partir de R$ 97' },
    { item: 'Manutenção', traditional: 'Cobrada separadamente', rental: 'Incluída' },
    { item: 'Atualizações', traditional: 'Pagas', rental: 'Gratuitas' },
    { item: 'Suporte técnico', traditional: 'Limitado', rental: 'Ilimitado' },
    { item: 'SEO Local', traditional: 'Opcional (extra)', rental: 'Incluído' },
    { item: 'Tempo de entrega', traditional: '30-60 dias', rental: '7 dias' }
  ];

  const extraServices = [
    {
      icon: Search,
      title: 'SEO Local Avançado',
      description: 'Otimização completa para aparecer no topo das buscas locais',
      price: 'R$ 297/mês'
    },
    {
      icon: MapPin,
      title: 'GMB Otimizado',
      description: 'Gestão profissional do Google Meu Negócio',
      price: 'R$ 197/mês'
    },
    {
      icon: Target,
      title: 'Tráfego Pago',
      description: 'Campanhas Google Ads para gerar agendamentos',
      price: 'A partir de R$ 497/mês'
    },
    {
      icon: PenTool,
      title: 'Conteúdo Médico',
      description: 'Posts e artigos escritos por especialistas',
      price: 'R$ 347/mês'
    },
    {
      icon: Palette,
      title: 'Identidade Visual',
      description: 'Logo, paleta de cores e manual de marca',
      price: 'R$ 897 (único)'
    },
    {
      icon: BarChart3,
      title: 'Consultoria Estratégica',
      description: 'Reuniões mensais para crescimento',
      price: 'R$ 497/mês'
    }
  ];

  const testimonials = [
    {
      name: 'Dra. Marina Silva',
      clinic: 'Fisioterapia Reabilita',
      image: 'MS',
      quote: 'Investi R$ 6.000 em um site que não gerou nenhuma consulta em 4 meses. Com o aluguel de R$ 147/mês, minha agenda ficou 80% preenchida em apenas 60 dias.',
      result: '80% agenda preenchida'
    },
    {
      name: 'Dr. Carlos Mendes',
      clinic: 'Centro de Fisioterapia Avançada',
      image: 'CM',
      quote: 'Comecei no plano Start e em 3 meses migrei para o Profissional. O ROI é absurdo comparado com site tradicional. Agendamentos triplicaram.',
      result: '3x mais agendamentos'
    },
    {
      name: 'Dra. Juliana Costa',
      clinic: 'Fisio & Movimento',
      image: 'JC',
      quote: 'O melhor investimento que fiz. Por menos que uma consulta mensal, tenho site profissional, blog ativo e apareço no Google. Resultado: 25 novos pacientes/mês.',
      result: '25 novos pacientes/mês'
    }
  ];

  const faqs = [
    {
      question: 'O site é meu se eu cancelar?',
      answer: 'O site permanece no ar enquanto a assinatura estiver ativa. Ao cancelar, você pode solicitar exportação do conteúdo. Se desejar adquirir o site, oferecemos opção de compra com desconto proporcional ao tempo de assinatura.'
    },
    {
      question: 'Existe fidelidade mínima?',
      answer: 'Não exigimos fidelidade. Você pode cancelar quando quiser, sem multas ou taxas. Recomendamos mínimo de 3 meses para ver resultados consistentes em SEO e agendamentos.'
    },
    {
      question: 'Quem cria o conteúdo do site e blog?',
      answer: 'Nossa equipe cria todo o conteúdo baseado nas informações que você fornece. Para o blog, nossos redatores especializados em saúde produzem artigos otimizados para SEO. Você revisa e aprova tudo antes da publicação.'
    },
    {
      question: 'Posso mudar de plano depois?',
      answer: 'Sim, você pode fazer upgrade ou downgrade a qualquer momento. O ajuste é feito de forma proporcional no próximo ciclo de cobrança. Sem burocracia.'
    },
    {
      question: 'O domínio precisa ser meu?',
      answer: 'Você pode usar um domínio que já possui ou registramos um novo para você (taxa de registro à parte, cerca de R$ 40/ano). Recomendamos ter domínio próprio para melhor SEO e credibilidade.'
    },
    {
      question: 'Como funciona o suporte técnico?',
      answer: 'Todos os planos incluem suporte por email e WhatsApp em horário comercial. Plano Premium tem suporte prioritário 24/7. Tempo médio de resposta: 2 horas em dias úteis.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá! Quero contratar o plano ${formData.plano}.\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}`;
    const whatsappUrl = `https://wa.me/5194373376?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleWhatsApp = (planName?: string) => {
    const message = planName
      ? `Olá! Quero saber mais sobre o plano ${planName} de aluguel de sites.`
      : 'Olá! Quero saber mais sobre o aluguel de sites para clínicas de fisioterapia.';
    const whatsappUrl = `https://wa.me/5194373376?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Site Profissional por Menos<br />que uma Consulta Mensal
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Tudo incluso, sem investimento inicial. Comece a receber agendamentos em 7 dias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button
                onClick={() => handleWhatsApp()}
                className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-lg font-bold text-2xl transition-all transform hover:scale-105 shadow-lg"
              >
                A partir de R$ 97/mês
              </button>
              <div className="text-blue-100">
                <p className="text-lg font-semibold">Economize R$ 2.836/ano</p>
                <p className="text-sm">vs. site tradicional</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-6 justify-center text-sm">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Sem investimento inicial</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Entrega em 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Cancele quando quiser</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-400" />
                <span>Suporte incluso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pare de Perder Pacientes
            </h2>
            <p className="text-xl text-gray-600">
              Enquanto você adia ter um site profissional, seus concorrentes estão lotando a agenda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-red-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Site Caro que Não Funciona
              </h3>
              <p className="text-gray-600 leading-relaxed">
                R$ 5.000+ investidos em um site bonito que não gera agendamentos. Sem SEO, sem estratégia, sem resultados.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-red-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Invisível no Google
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Pacientes procuram "fisioterapia perto de mim" e encontram seus concorrentes. Você não aparece nas buscas locais.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border-2 border-red-200">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Concorrente Lota Mais
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Clínicas com presença digital forte recebem 3x mais agendamentos. Você perde pacientes todos os dias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Site Tradicional vs. Aluguel
            </h2>
            <p className="text-xl text-gray-600">
              Compare e veja por que o aluguel é a escolha inteligente
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-4 text-left text-gray-900 font-bold"></th>
                  <th className="px-6 py-4 text-center text-gray-900 font-bold">Site Tradicional</th>
                  <th className="px-6 py-4 text-center bg-green-50 border-2 border-green-500">
                    <div className="text-green-600 font-bold">Aluguel de Site</div>
                    <div className="text-sm text-green-600">Recomendado</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{item.item}</td>
                    <td className="px-6 py-4 text-center text-gray-600">{item.traditional}</td>
                    <td className="px-6 py-4 text-center font-semibold text-green-600 bg-green-50">
                      {item.rental}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Economia total no primeiro ano: R$ 2.836
            </p>
            <p className="text-gray-600">
              Invista em resultados, não em custos fixos
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Escolha o Plano Ideal para Sua Clínica
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Todos os planos incluem hospedagem, SSL, suporte técnico e atualizações
            </p>

            <div className="inline-flex bg-white rounded-lg p-1 shadow-md">
              <button
                onClick={() => setActiveTab('mensal')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === 'mensal'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setActiveTab('anual')}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === 'anual'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Anual (10% OFF)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-4 ring-green-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-green-500 text-white text-center py-2 font-bold">
                    Mais Popular
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">
                      R$ {activeTab === 'mensal' ? plan.price : Math.round(plan.priceAnnual / 12)}
                    </span>
                    <span className="text-gray-600">/mês</span>
                    {activeTab === 'anual' && (
                      <p className="text-sm text-green-600 font-semibold mt-1">
                        R$ {plan.priceAnnual}/ano
                      </p>
                    )}
                  </div>

                  <button
                    onClick={() => handleWhatsApp(plan.name)}
                    className={`w-full py-3 rounded-lg font-semibold mb-6 transition-all ${
                      plan.popular
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                    }`}
                  >
                    Escolher Plano
                  </button>

                  <div className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-2 opacity-50">
                        <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e rápido para começar a receber agendamentos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Escolha seu Plano</h3>
              <p className="text-gray-600 leading-relaxed">
                Selecione o plano ideal e nos envie as informações da clínica via WhatsApp
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalizamos</h3>
              <p className="text-gray-600 leading-relaxed">
                Criamos seu site com suas cores, logo, fotos e conteúdo otimizado
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Publicamos em 7 Dias</h3>
              <p className="text-gray-600 leading-relaxed">
                Seu site vai ao ar e você começa a receber agendamentos via formulário e WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serviços Extras para Acelerar Resultados
            </h2>
            <p className="text-xl text-gray-600">
              Potencialize sua presença digital com serviços complementares
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extraServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <p className="text-2xl font-bold text-blue-600">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Garantia Tripla</h2>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-5xl font-bold mb-2">7</div>
              <p className="text-xl font-semibold mb-2">Dias para Aprovar</p>
              <p className="text-blue-100">
                Revise e solicite ajustes no layout até ficar 100% satisfeito
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30</div>
              <p className="text-xl font-semibold mb-2">Dias de Garantia</p>
              <p className="text-blue-100">
                Se não ficar satisfeito, devolvemos 100% do valor investido
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">0</div>
              <p className="text-xl font-semibold mb-2">Multa para Cancelar</p>
              <p className="text-blue-100">
                Cancele quando quiser, sem taxas ou penalidades
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600">
              Resultados reais de fisioterapeutas que transformaram suas clínicas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.clinic}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg text-center font-bold">
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire todas as suas dúvidas sobre o aluguel de sites
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-gray-900 text-lg pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pare de Perder Pacientes para a Concorrência
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Comece hoje mesmo e tenha seu site profissional no ar em 7 dias
            </p>

            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white rounded-xl p-8 text-left mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Solicite uma Proposta
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Nome</label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Plano de Interesse</label>
                  <select
                    value={formData.plano}
                    onChange={(e) => setFormData({ ...formData, plano: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  >
                    <option value="START">START - R$ 97/mês</option>
                    <option value="ESSENCIAL">ESSENCIAL - R$ 147/mês</option>
                    <option value="PROFISSIONAL">PROFISSIONAL - R$ 247/mês</option>
                    <option value="PREMIUM">PREMIUM - R$ 397/mês</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  Quero Começar Agora
                </button>
              </div>
            </form>

            <button
              onClick={() => handleWhatsApp()}
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Phone className="w-5 h-5" />
              Ou fale conosco pelo WhatsApp
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm">
            <p>Seus dados estão seguros conosco - LGPD</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Float */}
      <button
        onClick={() => handleWhatsApp()}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 z-50 animate-pulse hover:animate-none"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
};

export default SiteRentalLanding;
