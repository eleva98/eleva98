import React, { useState } from 'react';
import { MapPin, ArrowRight, CheckCircle2, Globe, Zap, Shield, Target } from 'lucide-react';
import SEOHead from './SEOHead';

const WhereWeServe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);

  const handleGoToContact = () => {
    window.location.href = '/contact';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // Input validation and sanitization
    const sanitizeInput = (input: string) => {
      return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    };

    // Validar campos obrigatórios
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.company.trim()) {
      setSubmitMessage('Por favor, preencha todos os campos obrigatórios.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setSubmitMessage('Por favor, insira um e-mail válido.');
      setIsSubmitting(false);
      return;
    }
    // Criar payload apenas com dados preenchidos pelo usuário
    const payload: Record<string, string> = {};
    
    // Campos obrigatórios
    payload.nome = sanitizeInput(formData.name);
    payload.email = sanitizeInput(formData.email);
    payload.telefone = sanitizeInput(formData.phone);
    payload.empresa = sanitizeInput(formData.company);
    
    // Campos opcionais - só adiciona se preenchidos
    if (formData.city && formData.city.trim()) {
      payload.cidade = sanitizeInput(formData.city);
    }

    console.log('📋 Dados que serão enviados para o Make (modal):', payload);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const response = await fetch('https://hook.us2.make.com/xswgd4rqusxbvnlzoct3uol3gfqe5y7u', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);

      console.log('📤 Resposta do Make (modal):', response.status, response.statusText);

      if (response.ok) {
        console.log('✅ Dados enviados com sucesso para o Make (modal)');
        setSubmitMessage('Obrigado! Seus dados foram enviados com sucesso.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          city: ''
        });
      } else {
        console.error('❌ Erro na resposta do Make (modal):', response.status);
        setSubmitMessage('Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.');
      }
    } catch (error) {
      console.error('❌ Erro ao conectar com Make (modal):', error);
      setSubmitMessage('Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const majorCities = [
    {
      region: 'Sudeste',
      cities: ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Vitória', 'Campinas'],
      highlight: 'Maior concentração de negócios locais do país'
    },
    {
      region: 'Sul',
      cities: ['Porto Alegre', 'Curitiba', 'Florianópolis', 'Caxias do Sul', 'Londrina'],
      highlight: 'Alto poder aquisitivo e competitividade digital'
    },
    {
      region: 'Nordeste',
      cities: ['Salvador', 'Recife', 'Fortaleza', 'Natal', 'João Pessoa'],
      highlight: 'Mercado em crescimento acelerado'
    },
    {
      region: 'Centro-Oeste',
      cities: ['Brasília', 'Goiânia', 'Campo Grande', 'Cuiabá'],
      highlight: 'Oportunidades em mercados emergentes'
    },
    {
      region: 'Norte',
      cities: ['Manaus', 'Belém', 'Porto Velho', 'Boa Vista'],
      highlight: 'Potencial inexplorado para negócios locais'
    }
  ];

  const advantages = [
    {
      icon: Globe,
      title: 'Atendimento 100% Digital',
      description: 'Nossa metodologia permite resultados excepcionais independente da distância física.'
    },
    {
      icon: Zap,
      title: 'Agilidade sem Fronteiras',
      description: 'Comunicação instantânea via WhatsApp, e-mail e videoconferências para máxima eficiência.'
    },
    {
      icon: Shield,
      title: 'Foco Total em Resultados',
      description: 'Sem custos de estrutura física, investimos 100% em tecnologia e expertise para seu sucesso.'
    },
    {
      icon: Target,
      title: 'Especialização Local',
      description: 'Conhecemos as particularidades de cada mercado regional para otimizações mais assertivas.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Onde Atendemos - Eleve Leads | Google Meu Negócio em Todo Brasil"
        description="A Eleve Leads atende todo o Brasil com serviços de Google Meu Negócio e SEO Local. Atendimento 100% digital com resultados locais comprovados."
        keywords="eleve leads brasil, google meu negócio brasil, seo local brasil, atendimento nacional"
        canonical="https://elevaleads.com/where-we-serve"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Seu Negócio no{' '}
            <span className="text-blue-600">Google Maps</span>,{' '}
            <span className="text-blue-600">Onde Estiver</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Muitos empresários se perguntam: "Vocês atendem na minha cidade?" A resposta é simples: atendemos em todo o Brasil. O Google Meu Negócio é 100% digital, e nossa expertise não tem fronteiras geográficas.
          </p>
          <div className="bg-blue-100 rounded-lg p-6 inline-block">
            <p className="text-blue-800 font-medium text-lg">
              🌎 <strong>Atendimento Nacional</strong> • 🚀 <strong>Resultados Locais</strong> • 📱 <strong>Gestão Remota</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Nossa Presença Geográfica */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nossa Presença e Foco Geográfico</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Embora atendamos todo o Brasil, temos expertise especial nas principais regiões metropolitanas, onde a competição digital é mais acirrada e os resultados mais impactantes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorCities.map((region, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{region.region}</h3>
                </div>
                <div className="space-y-2 mb-4">
                  {region.cities.map((city, cityIndex) => (
                    <div key={cityIndex} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-gray-700">{city}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-sm text-blue-700 font-medium">{region.highlight}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Não viu sua cidade?</h3>
              <p className="text-blue-100 text-lg mb-6">
                Não se preocupe! Atendemos <strong>todas as cidades do Brasil</strong>. Cada negócio local tem potencial único, independente do tamanho da cidade.
              </p>
              <button 
                onClick={() => setShowContactForm(true)}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center space-x-2"
              >
                <span>Fale Conosco Sobre Sua Cidade</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Fale Sobre Sua Cidade</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ✕
              </button>
            </div>

            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitMessage.includes('Obrigado') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="modal-email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="modal-phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="modal-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="modal-company" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Empresa *
                </label>
                <input
                  type="text"
                  id="modal-company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label htmlFor="modal-city" className="block text-sm font-medium text-gray-700 mb-2">
                  Sua Cidade *
                </label>
                <input
                  type="text"
                  id="modal-city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Cidade, Estado"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Como Atuamos Sem Ponto Físico */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Atuamos Sem Ponto Físico</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A ausência de um escritório físico não é uma limitação - é nossa vantagem competitiva. Isso nos permite focar 100% na excelência digital e oferecer preços mais competitivos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <advantage.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{advantage.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Processo de Trabalho */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nosso Processo de Trabalho Remoto</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Contato Inicial</h4>
                <p className="text-gray-600 text-sm">WhatsApp, e-mail ou videoconferência para entender suas necessidades</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Análise Remota</h4>
                <p className="text-gray-600 text-sm">Auditoria completa do seu perfil e concorrência local via ferramentas especializadas</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Execução Digital</h4>
                <p className="text-gray-600 text-sm">Otimização completa realizada 100% online com acesso aos seus perfis</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Acompanhamento</h4>
                <p className="text-gray-600 text-sm">Relatórios mensais e comunicação constante sobre resultados e melhorias</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seu Negócio no Topo */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Seu Negócio no Topo do Google, <span className="text-blue-600">Onde Quer que Ele Esteja</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">A Localização Digital é o que Importa</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                No mundo digital, não importa onde nossa agência está fisicamente localizada. O que importa é onde queremos levar seu negócio: <strong>ao topo das buscas locais na sua cidade</strong>.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Mais Ligações</h4>
                    <p className="text-gray-600">Clientes da sua região encontram você primeiro e entram em contato</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Mais Visitas</h4>
                    <p className="text-gray-600">Direcionamento otimizado leva mais pessoas até seu estabelecimento</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Mais Avaliações</h4>
                    <p className="text-gray-600">Estratégia ativa para gerar reviews positivos e fortalecer sua reputação</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900">Mais Clientes</h4>
                    <p className="text-gray-600">Resultado final: crescimento real e sustentável do seu faturamento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-2">Resultados Comprovados</h4>
                <p className="text-gray-600">Independente da localização</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Aumento em Visualizações</span>
                    <span className="text-2xl font-bold text-blue-600">+280%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Mais Ligações</span>
                    <span className="text-2xl font-bold text-green-600">+190%</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Solicitações de Direção</span>
                    <span className="text-2xl font-bold text-orange-600">+340%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Dominar as Buscas na Sua Cidade?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Não importa onde você está. O que importa é onde queremos levar seu negócio: ao topo do Google na sua região.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={handleGoToContact}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-lg inline-flex items-center justify-center space-x-2 group"
            >
              <span>Solicitar Análise Gratuita do Meu Perfil</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <Globe className="w-5 h-5" />
              <span>(51) 9437-3376</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>contato@eleveleads.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-5 h-5" />
              <span>Atendimento Nacional</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhereWeServe;