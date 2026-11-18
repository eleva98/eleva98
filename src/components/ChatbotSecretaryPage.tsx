import React from 'react';
import {
  MessageCircle,
  Clock,
  Brain,
  UserCheck,
  CalendarCheck,
  RotateCcw,
  UserPlus,
  Database,
  Bot,
  ArrowRight,
  CheckCircle2,
  Send,
  Building2,
  Activity,
  HeartPulse,
  Sparkles,
  Dumbbell,
  Briefcase,
  GraduationCap,
  Store,
  Users,
} from 'lucide-react';
import SEOHead from './SEOHead';

interface ChatbotSecretaryPageProps {
  setCurrentPage: (page: string) => void;
}

const ChatbotSecretaryPage: React.FC<ChatbotSecretaryPageProps> = ({ setCurrentPage }) => {
  const handleGoToContact = () => {
    setCurrentPage('contact');
    window.scrollTo(0, 0);
  };

  const whatsappNumber = '55194373376';
  const handleWhatsappCta = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      'Olá! Quero conhecer o Chatbot Secretário da Eleve Leads.'
    )}`;
    window.open(url, '_blank', 'noopener');
  };

  const features = [
    {
      icon: MessageCircle,
      title: 'Atendimento automático pelo WhatsApp',
      description:
        'Recebe mensagens e inicia conversas com pessoas interessadas nos serviços da sua clínica, sem deixar nenhum contato sem resposta.',
    },
    {
      icon: Clock,
      title: 'Atendimento 24 horas',
      description:
        'Pode responder automaticamente a qualquer horário, conforme as configurações e integrações contratadas.',
    },
    {
      icon: Brain,
      title: 'Respostas inteligentes',
      description:
        'Utiliza uma base de conhecimento personalizada para responder perguntas sobre especialidades, serviços, localização, horários, convênios e dúvidas frequentes.',
    },
    {
      icon: UserCheck,
      title: 'Qualificação de pacientes',
      description:
        'Identifica o que a pessoa está procurando, qual serviço deseja e outras informações relevantes para direcionar o atendimento.',
    },
    {
      icon: CalendarCheck,
      title: 'Agendamento de consultas',
      description:
        'Quando integrado a uma agenda compatível, pode consultar horários disponíveis, apresentar opções e registrar agendamentos.',
    },
    {
      icon: RotateCcw,
      title: 'Recuperação de contatos',
      description:
        'Pode realizar follow-ups automáticos com pessoas que demonstraram interesse, respeitando as autorizações e regras do WhatsApp.',
    },
    {
      icon: UserPlus,
      title: 'Transferência para atendimento humano',
      description:
        'Quando necessário, encaminha a conversa para a recepção ou responsável da clínica.',
    },
  ];

  const secondaryFeatures = [
    {
      icon: Database,
      title: 'Organização dos contatos',
      description:
        'Pode registrar informações dos interessados em CRM, planilhas ou sistemas integrados.',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'O paciente chama a clínica pelo WhatsApp',
      description: 'A mensagem chega em qualquer horário, mesmo fora do expediente.',
    },
    {
      number: '2',
      title: 'O secretário inteligente inicia o atendimento',
      description: 'A conversa começa na hora, com respostas naturais e personalizadas.',
    },
    {
      number: '3',
      title: 'Identifica a necessidade e responde às dúvidas',
      description: 'Serviços, horários, localização e informações da clínica, com base na sua própria.',
    },
    {
      number: '4',
      title: 'Encaminha para agendamento ou atendimento humano',
      description: 'Conforme as integrações disponíveis, registra o agendamento ou passa o atendimento para a equipe.',
    },
  ];

  const benefits = [
    'Menos contatos sem resposta',
    'Redução de tarefas repetitivas da recepção',
    'Atendimento mais organizado',
    'Agilidade nas respostas',
    'Melhor aproveitamento das oportunidades',
    'Organização dos interessados',
    'Mais disponibilidade da equipe para atividades presenciais',
  ];

  const segments = [
    { icon: HeartPulse, label: 'Clínicas de fisioterapia' },
    { icon: Activity, label: 'Clínicas médicas' },
    { icon: Building2, label: 'Clínicas odontológicas' },
    { icon: Sparkles, label: 'Clínicas de estética' },
    { icon: Dumbbell, label: 'Studios de Pilates' },
    { icon: Users, label: 'Academias' },
    { icon: Briefcase, label: 'Escritórios' },
    { icon: Store, label: 'Prestadores de serviços' },
  ];

  const conversation = [
    { from: 'patient', time: '14:32', text: 'Olá! Vocês atendem dor no ombro?' },
    {
      from: 'bot',
      time: '14:32',
      text: 'Olá! 👋 Sim, atendemos! Somos uma clínica de fisioterapia especializada em reabilitação de ombro, joelho e coluna. Posso te ajudar com algumas informações?',
    },
    { from: 'patient', time: '14:33', text: 'Qual o valor da sessão e vocês atendem convênio?' },
    {
      from: 'bot',
      time: '14:33',
      text: 'Nossas sessões avulsas custam a partir de R$ 120 e trabalhamos com os convênios X, Y e Z. Para tratamentos contínuos temos pacotes com valores especiais. Prefere esses detalhes por aqui ou prefere falar com a recepção?',
    },
    { from: 'patient', time: '14:34', text: 'Quero marcar uma avaliação essa semana.' },
    {
      from: 'bot',
      time: '14:34',
      text: 'Ótimo! Para encontrar o melhor horário, me confirma seu nome completo e se tem preferência de período: manhã ou tarde?',
    },
    { from: 'patient', time: '14:35', text: 'Mariana Silva, de tarde.' },
    {
      from: 'bot',
      time: '14:35',
      text: 'Perfeito, Mariana! Tenho opções de horário para avaliação com o fisioterapeuta. Reservei seu pedido e a recepção vai confirmar o horário com você em instantes. Posso ajudar em mais alguma coisa?',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Chatbot Secretário para Clínicas | Eleve Leads"
        description="Automatize o atendimento da sua clínica pelo WhatsApp com um secretário inteligente. Responda pacientes, organize contatos e facilite agendamentos."
        keywords="chatbot para clínicas, secretário virtual para clínicas, atendimento automático whatsapp, chatbot para fisioterapia, automação de atendimento para clínicas"
        canonical="https://elevaleads.com/chatbot-secretario"
      />

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Bot className="w-4 h-4" />
              <span>Inteligência Artificial para Atendimento</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Sua clínica atendendo pacientes pelo <span className="text-emerald-600">WhatsApp</span>, mesmo quando sua equipe está ocupada
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Tenha um secretário inteligente para atender, responder dúvidas, identificar novos pacientes e organizar oportunidades de agendamento automaticamente.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={handleGoToContact}
                className="bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors font-medium text-lg inline-flex items-center space-x-2 group w-full sm:w-auto justify-center"
              >
                <span>Quero conhecer o Chatbot Secretário</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={handleWhatsappCta}
                className="bg-white border-2 border-emerald-600 text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-lg w-full sm:w-auto justify-center"
              >
                Solicitar demonstração
              </button>
              <Send className="hidden" />
            </div>
            <p className="text-sm text-gray-500">Sem compromisso. Veja como funcionaria na sua clínica.</p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Como Funciona</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Do primeiro "Olá" no WhatsApp até o agendamento, em quatro etapas simples.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-emerald-600">{step.number}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">O Que o Chatbot Secretário Faz</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um atendente digital treinado com as informações da sua clínica, trabalhando junto com a sua recepção.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...features.slice(0, 7), ...secondaryFeatures].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="bg-emerald-100 p-4 rounded-xl w-fit mb-6">
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp demo */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Veja o Atendimento na Prática</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Esta é uma simulação ilustrativa de como uma conversa real funciona. Na prática, o secretário inteligente usa as informações da sua clínica para responder de forma natural e encaminhar o paciente para o próximo passo.
              </p>
              <ul className="space-y-3">
                {['Respostas com a linguagem da sua clínica', 'Coleta de nome, serviço desejado e preferência de horário', 'Encaminhamento para agendamento ou equipe humana'].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-[#efe7dd] rounded-2xl overflow-hidden shadow-2xl">
                {/* WhatsApp header */}
                <div className="bg-[#075E54] text-white px-4 py-3 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Clínica Exemplo</p>
                    <p className="text-xs text-white/80">online</p>
                  </div>
                </div>
                {/* Messages */}
                <div className="p-4 space-y-3">
                  {conversation.map((msg, index) => (
                    <div key={index} className={`flex ${msg.from === 'patient' ? 'justify-end' : 'justify-start'}`}>
                      <div
                        className={`max-w-[85%] rounded-xl px-4 py-2 shadow-sm ${
                          msg.from === 'patient' ? 'bg-[#dcf8c6] rounded-br-sm' : 'bg-white rounded-bl-sm'
                        }`}
                      >
                        <p className="text-sm text-gray-800 leading-relaxed">{msg.text}</p>
                        <p className="text-right text-[10px] text-gray-500 mt-1">{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Input bar */}
                <div className="bg-[#f0f0f0] px-4 py-3 flex items-center space-x-3">
                  <div className="flex-1 bg-white rounded-full px-4 py-2 text-sm text-gray-400">
                    Digite uma mensagem...
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefícios para Clínicas</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um atendimento mais leve para a recepção e mais organizado para o negócio.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white rounded-lg p-5 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 leading-relaxed">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Segments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Para Quem é o Chatbot Secretário</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Feito para clínicas e empresas que recebem contatos pelo WhatsApp e não querem perder nenhuma mensagem.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {segments.map((segment, index) => (
              <div key={index} className="text-center group">
                <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors duration-300">
                  <segment.icon className="w-10 h-10 text-emerald-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="font-medium text-gray-900">{segment.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Sua equipe não precisa perder oportunidades por falta de tempo para responder mensagens.
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Conheça como um secretário inteligente pode ajudar sua clínica a organizar o atendimento, responder pacientes e aproveitar melhor os contatos recebidos pelo WhatsApp.
          </p>
          <button
            onClick={handleWhatsappCta}
            className="bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors font-medium text-lg inline-flex items-center space-x-2 group"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Solicitar demonstração pelo WhatsApp</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default ChatbotSecretaryPage;
