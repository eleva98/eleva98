import React from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleDollarSign,
  Gift,
  MessageCircle,
  MousePointerClick,
  Nfc,
  QrCode,
  Star,
  Store,
  Target,
  Zap
} from 'lucide-react';
import SEOHead from './SEOHead';

interface SmartSignsPageProps {
  setCurrentPage: (page: string) => void;
}

const SmartSignsPage: React.FC<SmartSignsPageProps> = ({ setCurrentPage }) => {
  const goToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const benefits = [
    {
      icon: Star,
      title: 'Mais avaliações',
      description: 'Facilite o caminho para que clientes satisfeitos compartilhem sua experiência no Google.'
    },
    {
      icon: MousePointerClick,
      title: 'Mais contatos',
      description: 'Transforme a espera e o atendimento em oportunidades de conversa, orçamento e venda.'
    },
    {
      icon: Target,
      title: 'Uma experiência simples',
      description: 'QR Code e NFC deixam o acesso rápido, intuitivo e sem precisar digitar endereços.'
    }
  ];

  const steps = [
    ['1', 'O cliente vê a placa', 'No balcão, recepção ou ponto de pagamento.'],
    ['2', 'Aproxima ou aponta', 'NFC para tocar ou QR Code para escanear.'],
    ['3', 'Chega ao destino certo', 'Avaliação, serviços, redes sociais, contato e muito mais.']
  ];

  const faqs = [
    ['Preciso escolher apenas uma placa?', 'Não. As duas se complementam: uma fortalece sua reputação e a outra abre novas oportunidades de contato e venda.'],
    ['Funciona em qualquer celular?', 'Sim. O QR Code funciona com a câmera do celular e o NFC funciona por aproximação em aparelhos compatíveis.'],
    ['Posso personalizar o destino dos acessos?', 'Sim. A placa pode ser direcionada para os canais e informações mais importantes para o seu negócio.'],
    ['A placa combina com meu estabelecimento?', 'Sim. A proposta é discreta e profissional, pensada para balcões, recepções, caixas e mesas de atendimento.']
  ];

  return (
    <main className="bg-[#f7f9fc] text-slate-950">
      <SEOHead
        title="Placas Inteligentes com QR Code e NFC | Eleve Leads"
        description="Placas de balcão inteligentes com QR Code e NFC para gerar avaliações no Google, contatos, acessos aos seus serviços e mais oportunidades para o seu negócio."
        keywords="placa inteligente, placa qr code, placa nfc, avaliações google, marketing local"
        canonical="https://elevaleads.com/placas-inteligentes"
        ogImage="https://elevaleads.com/images/Gemini_Generated_Image_v7hcgdv7hcgdv7hc.jpeg"
      />

      <section className="relative overflow-hidden bg-slate-950 pt-16 text-white sm:pt-20 lg:pt-28">
        <div className="absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_top_right,_rgba(29,115,190,0.28),_transparent_65%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-300/10 px-4 py-2 text-sm font-semibold text-blue-100">
              <Zap className="h-4 w-4 text-amber-300" />
              Sua presença física também pode gerar leads
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Um pequeno espaço no balcão.{' '}
              <span className="text-blue-300">Grandes oportunidades</span> para o seu negócio.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              As Placas Inteligentes Eleve Leads conectam seus clientes ao que importa em poucos segundos: avaliação no Google, serviços, redes sociais e contato.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={goToContact} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400">
                Quero levar para meu negócio
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <a href="#como-funciona" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-semibold text-slate-200 transition hover:border-white/50 hover:bg-white/5">
                Ver como funciona
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> QR Code</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Tecnologia NFC</span>
              <span className="inline-flex items-center gap-2"><Check className="h-4 w-4 text-emerald-400" /> Design profissional</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-sm">
              <img src="/images/Gemini_Generated_Image_v7hcgdv7hcgdv7hc.jpeg" alt="Placa inteligente de balcão com QR Code e NFC" className="h-[420px] w-full rounded-xl object-cover object-center sm:h-[560px]" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/20 bg-slate-950/80 px-4 py-3 backdrop-blur-md">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200">Acesso imediato</p>
                  <p className="mt-1 text-sm text-white">Aponte ou aproxime. O próximo passo acontece.</p>
                </div>
                <div className="rounded-lg bg-white p-2 text-slate-900"><Nfc className="h-6 w-6" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map(({ icon: Icon, title, description }) => (
              <div key={title} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon className="h-6 w-6" /></div>
                <div><h2 className="text-lg font-bold text-slate-900">{title}</h2><p className="mt-2 leading-relaxed text-slate-600">{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" id="solucoes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Duas placas. Dois objetivos.</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Escolha o próximo passo que seu cliente deve dar.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">Cada interação no seu balcão pode construir confiança ou iniciar uma conversa. As Placas Inteligentes tornam esse momento fácil de aproveitar.</p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-amber-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                <div className="h-80 bg-slate-100 md:h-full"><img src="/images/Gemini_Generated_Image_uruqrcuruqrcuruq.png" alt="Placa inteligente para avaliações no Google" className="h-full w-full object-cover object-center" /></div>
                <div className="p-8 sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600"><Star className="h-6 w-6 fill-current" /></div>
                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-amber-600">Placa 01 · Reputação</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">Transforme satisfação em prova social.</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">Um convite claro para seu cliente avaliar sua empresa no Google, com acesso rápido por QR Code ou NFC.</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    <li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-emerald-500" /> Mais facilidade para receber avaliações</li>
                    <li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-emerald-500" /> Mais confiança para quem pesquisa sua empresa</li>
                    <li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-emerald-500" /> Possibilidade de criar benefícios definidos pelo estabelecimento</li>
                  </ul>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                <div className="h-80 bg-slate-100 md:h-full"><img src="/images/Gemini_Generated_Image_v7hcgdv7hcgdv7hc.jpeg" alt="Placa inteligente para serviços e contatos" className="h-full w-full object-cover object-center" /></div>
                <div className="p-8 sm:p-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600"><Store className="h-6 w-6" /></div>
                  <p className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-blue-600">Placa 02 · Conexão</p>
                  <h3 className="mt-3 text-2xl font-bold text-slate-950">Mostre tudo o que sua empresa oferece.</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">Um ponto de acesso para serviços, redes sociais, WhatsApp, portfólio, cardápio, agendamento e demonstrações.</p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    <li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-emerald-500" /> Centraliza seus principais canais</li>
                    <li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-emerald-500" /> Reduz a distância entre interesse e contato</li>
                    <li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-emerald-500" /> Ideal para balcões, recepções e pontos de atendimento</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-blue-600 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100">Simples para o cliente. Estratégico para você.</p><h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Da atenção à ação em três movimentos.</h2><p className="mt-5 max-w-lg text-lg leading-relaxed text-blue-100">Quando o caminho é simples, mais pessoas chegam até o destino. E cada destino pode ser escolhido de acordo com seu objetivo.</p></div>
            <div className="grid gap-4 sm:grid-cols-3">
              {steps.map(([number, title, description]) => <div key={number} className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"><span className="text-4xl font-bold text-blue-200">{number}</span><h3 className="mt-8 font-bold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-blue-100">{description}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28" id="por-que">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">O custo de não facilitar</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Se o cliente precisa procurar, a oportunidade pode se perder.</h2><p className="mt-6 text-lg leading-relaxed text-slate-600">Endereços digitados, links esquecidos e dúvidas sobre onde encontrar sua empresa criam atrito. A placa certa coloca sua marca na frente do cliente no momento em que ele já está perto.</p><button onClick={goToContact} className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-blue-600">Quero uma recomendação <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></button></div>
            <div className="grid gap-4 sm:grid-cols-2"><div className="rounded-2xl bg-white p-6 shadow-lg shadow-slate-200/60"><CircleDollarSign className="h-7 w-7 text-amber-500" /><h3 className="mt-8 text-lg font-bold">Mais valor por atendimento</h3><p className="mt-2 text-slate-600">Aproveite o momento em que o cliente já está dentro do seu negócio.</p></div><div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white shadow-lg shadow-slate-300/40 sm:mt-0"><MessageCircle className="h-7 w-7 text-blue-300" /><h3 className="mt-8 text-lg font-bold">Mais conversas iniciadas</h3><p className="mt-2 text-slate-300">Leve o interesse direto para o canal certo, sem etapas desnecessárias.</p></div><div className="rounded-2xl bg-blue-50 p-6 sm:col-span-2"><Gift className="h-7 w-7 text-blue-600" /><h3 className="mt-8 text-lg font-bold text-slate-950">Uma experiência que seu cliente entende</h3><p className="mt-2 max-w-xl text-slate-600">Mensagem clara, ação rápida e um visual que combina com um atendimento profissional.</p></div></div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Dúvidas rápidas</p><h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Tudo para decidir com segurança.</h2></div><div className="mt-10 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">{faqs.map(([question, answer]) => <details key={question} className="group p-6"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900"><span>{question}</span><ChevronDown className="h-5 w-5 shrink-0 text-blue-600 transition group-open:rotate-180" /></summary><p className="max-w-3xl pt-4 leading-relaxed text-slate-600">{answer}</p></details>)}</div></div>
      </section>

      <section className="bg-slate-950 py-20 text-white sm:py-24"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><QrCode className="mx-auto h-12 w-12 text-blue-300" /><h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">Seu balcão pode fazer mais pelo seu negócio.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">Conte um pouco sobre sua empresa e descubra qual combinação de placas faz mais sentido para seus objetivos.</p><button onClick={goToContact} className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-7 py-4 font-bold text-white transition hover:bg-blue-400">Solicitar uma recomendação <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" /></button></div></section>
    </main>
  );
};

export default SmartSignsPage;
