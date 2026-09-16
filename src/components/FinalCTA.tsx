import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle2, Phone } from 'lucide-react';

const FinalCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const benefits = [
    'Diagnóstico completo do seu perfil atual',
    'Análise da concorrência local',
    'Plano de ação personalizado',
    'Projeção de resultados esperados',
    'Sem compromisso ou taxas ocultas'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    // Validar se todos os campos obrigatórios estão preenchidos
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
    if (formData.sector && formData.sector.trim()) {
      payload.setor = sanitizeInput(formData.sector);
    }
    if (formData.city && formData.city.trim()) {
      payload.cidade = sanitizeInput(formData.city);
    }

    console.log('📋 Dados que serão enviados para o Make:', payload);

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

      console.log('📤 Resposta do Make:', response.status, response.statusText);

      if (response.ok) {
        console.log('✅ Dados enviados com sucesso para o Make');
        setSubmitMessage('Obrigado! Seus dados foram enviados com sucesso.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          sector: '',
          city: ''
        });
      } else {
        console.error('❌ Erro na resposta do Make:', response.status);
        setSubmitMessage('Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.');
      }
    } catch (error) {
      console.error('❌ Erro ao conectar com Make:', error);
      setSubmitMessage('Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pronto para <span className="text-yellow-400">Elevar seus Leads</span>?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Agende uma conversa de 15 minutos, sem compromisso, e receba um diagnóstico gratuito completo do seu perfil no Google.
          </p>
          <div className="flex items-center justify-center space-x-4 text-blue-100">
            <Clock className="w-5 h-5" />
            <span>Resposta em até 2 horas úteis</span>
            <Phone className="w-5 h-5 ml-8" />
            <span>Análise 100% gratuita</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">O que você receberá na análise:</h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-blue-50">{benefit}</span>
                </div>
              ))}
            </div>
            <div className="bg-blue-500 bg-opacity-50 rounded-lg p-6 mt-8">
              <h4 className="font-bold text-lg mb-2">💡 Bônus Especial</h4>
              <p className="text-blue-100">
                Receba nosso "Guia de Otimização GMB" exclusivo, com 20 dicas práticas para melhorar seu perfil imediatamente.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Análise Gratuita do Seu Negócio
              </h3>
              <p className="text-gray-600">
                Preencha os dados abaixo e nossa equipe entrará em contato
              </p>
            </div>

            {submitMessage && (
              <div className={`mb-6 p-4 rounded-lg ${
                submitMessage.includes('sucesso') || submitMessage.includes('Obrigado') 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-red-100 text-red-800'
              }`}>
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail Profissional *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Nome da Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                  Cidade (Opcional)
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                  placeholder="Sua cidade"
                />
              </div>

              <div>
                <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-2">
                  Setor de Atuação (Opcional)
                </label>
                <select 
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                >
                  <option value="">Selecione seu setor</option>
                  <option value="saude">Saúde/Clínicas</option>
                  <option value="juridico">Jurídico</option>
                  <option value="restaurante">Restaurantes</option>
                  <option value="varejo">Varejo</option>
                  <option value="servicos">Serviços</option>
                  <option value="outros">Outros</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isSubmitting || !formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.company.trim()}
                className="w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-bold text-lg flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span>{isSubmitting ? 'Enviando...' : 'Agendar Minha Análise Gratuita'}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              Seus dados estão seguros conosco. Não fazemos spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;