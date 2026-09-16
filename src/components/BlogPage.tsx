import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Calendar,
  ChevronDown,
  Clock,
  Eye,
  HeartPulse,
  MapPin,
  Search,
  Smartphone,
  TrendingDown,
  Users,
  X
} from 'lucide-react';
import SEOHead from './SEOHead';

interface BlogPageProps {
  setCurrentPage: (page: string) => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ setCurrentPage }) => {
  const goToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToBlog = () => {
    window.open('https://blog.eleveleads.com/', '_blank', 'noopener,noreferrer');
  };

  const spinQuestions = [
    {
      letter: 'S',
      label: 'Situação',
      icon: Eye,
      color: 'blue',
      questions: [
        'Quantos pacientes novos chegam à sua clínica por indicação — e quantos vêm do Google?',
        'Quando alguém pesquisa "fisioterapia perto de mim" na sua cidade, sua clínica aparece entre as três primeiras?',
        'Sua ficha do Google Meu Negócio tem fotos, horários e avaliações atualizadas — ou está abandonada?'
      ]
    },
    {
      letter: 'P',
      label: 'Problema',
      icon: TrendingDown,
      color: 'amber',
      questions: [
        'Quantos pacientes deixam de procurar sua clínica porque encontraram um concorrente com mais avaliações e melhor presença online?',
        'Sua agenda tem horários vazios que poderiam ser preenchidos se mais pessoas descobrissem sua clínica ao pesquisar no Google?',
        'Você já investiu em "postagens" e "conteúdo" sem saber se isso trouxe um único paciente novo?'
      ]
    },
    {
      letter: 'I',
      label: 'Implicação',
      icon: Clock,
      color: 'red',
      questions: [
        'Se a concorrência continua aparecendo antes de você no Google mês após mês, o que acontece com a sua carteira de pacientes ao longo do ano?',
        'Cada semana com a agenda parcialmente vazia é faturamento perdido — quanto isso representa em 12 meses?',
        'Enquanto sua clínica não é encontrada facilmente, o paciente que precisaria de você vai parar no concorrente. Como isso afeta sua reputação na região?'
      ]
    },
    {
      letter: 'N',
      label: 'Necessidade',
      icon: HeartPulse,
      color: 'emerald',
      questions: [
        'Se sua clínica aparecesse em primeiro nas buscas locais com uma ficha completa e avaliada, quantos agendamentos a mais você imagina que receberia por semana?',
        'Se cada paciente que sai satisfeito deixasse uma avaliação de 5 estrelas, quanto isso fortaleceria sua posição no Google frente à concorrência?',
        'Se você pudesse transformar a presença online da sua clínica em uma máquina previsível de agendamentos, isso mudaria a forma como você planeja seu faturamento?'
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string; ring: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', ring: 'ring-blue-500/20' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', ring: 'ring-amber-500/20' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', ring: 'ring-red-500/20' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', ring: 'ring-emerald-500/20' }
  };

  const objections = [
    {
      objection: '"Já tenho Instagram, isso é suficiente."',
      response: 'O Instagram é uma vitrine, mas o Google é onde pacientes ativamente procuram atendimento. Ninguém abre o Instagram para buscar "fisioterapia na minha cidade" — abrem o Google Maps. Se sua clínica não aparece lá, perde para quem aparece.',
      icon: Smartphone
    },
    {
      objection: '"Meus pacientes vêm por indicação, não preciso do Google."',
      response: 'Indicação é valiosa, mas tem limite: depende do boca a boca, que é lento e incontrolável. O Google funciona 24 horas por dia, 7 dias por semana. Clínicas que combinam indicação com presença no Google crescem de forma previsível — não apenas quando alguém lembra de recomendar.',
      icon: Users
    },
    {
      objection: '"Já tentei fazer postagens e não trouxe resultado."',
      response: 'Postar sem estratégia é barulheiro, não eficaz. O que traz pacientes não é o volume de postagens, mas aparecer quando alguém pesquisa atendimento na sua região. Trabalhamos com posicionamento no Google — um canal que conecta sua clínica com quem já está procurando ajuda.',
      icon: Search
    },
    {
      objection: '"Não tenho tempo para cuidar disso."',
      response: 'Você não precisa cuidar. Nós assumimos a estratégia completa: otimização da ficha, posicionamento local, gestão de avaliações e geração de leads. Você foca no atendimento — nós cuidamos para que mais pacientes chegam até você.',
      icon: Clock
    },
    {
      objection: '"Isso deve ser caro para uma clínica do meu tamanho."',
      response: 'O custo de ter a agenda com buracos é muito maior. Nossos planos são pensados para clínicas locais — o investimento se paga com poucos agendamentos novos por mês. O que custa caro é continuar invisível enquanto a concorrência capta os pacientes que deveriam ser seus.',
      icon: TrendingDown
    },
    {
      objection: '"Minha região é pequena, todo mundo me conhece."',
      response: 'Mesmo em cidades pequenas, as pessoas pesquisam no Google antes de escolher onde ir. Se sua clínica não aparece com informações completas e avaliações, perde credibilidade — e o paciente — para a clínica que se preocupa com sua presença online.',
      icon: MapPin
    }
  ];

  const articles = [
    {
      title: 'Como clínicas de fisioterapia podem dominar as buscas locais no Google',
      excerpt: 'Aparecer em primeiro quando alguém pesquisa "fisioterapia perto de mim" não é sorte — é estratégia. Veja o passo a passo.',
      tag: 'Google Meu Negócio',
      readTime: '6 min',
      date: 'Set 2026',
      url: 'https://blog.eleveleads.com/'
    },
    {
      title: '5 erros que afastam pacientes da sua clínica de fisioterapia',
      excerpt: 'Você pode estar perdendo agendamentos todos os dias por causa de detalhes simples que passam despercebidos.',
      tag: 'Presença Digital',
      readTime: '5 min',
      date: 'Set 2026',
      url: 'https://blog.eleveleads.com/'
    },
    {
      title: 'Avaliações no Google: o ativo mais subestimado das clínicas locais',
      excerpt: 'Cada avaliação de 5 estrelas é um voto de confiança que o Google usa para posicionar sua clínica. Saiba como coletá-las.',
      tag: 'Reputação',
      readTime: '4 min',
      date: 'Ago 2026',
      url: 'https://blog.eleveleads.com/'
    }
  ];

  return (
    <main className="bg-[#f7f9fc] text-slate-950">
      <SEOHead
        title="Blog Eleve Leads | Marketing Digital para Clínicas de Fisioterapia"
        description="Conteúdo prático para donos de clínicas de fisioterapia que querem mais pacientes, mais agendamentos e melhor posicionamento no Google."
        keywords="blog marketing digital, clínicas fisioterapia, pacientes novos, google meu negócio, agendamentos"
        canonical="https://elevaleads.com/blog"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pt-16 text-white sm:pt-20 lg:pt-28">
        <div className="absolute right-0 top-0 h-full w-2/3 bg-[radial-gradient(circle_at_top_right,_rgba(29,115,190,0.28),_transparent_65%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8 lg:pb-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/30 bg-blue-300/10 px-4 py-2 text-sm font-semibold text-blue-100">
              <BookOpen className="h-4 w-4 text-blue-300" />
              Blog Eleve Leads
            </div>
            <h1 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Sua clínica de fisioterapia está{' '}
              <span className="text-blue-300">invisible</span> para quem precisa de você?
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
              A maioria dos pacientes procura atendimento no Google. Se sua clínica não aparece, o paciente vai para a concorrência — não por qualidade, mas por visibilidade. Nosso blog mostra como mudar isso.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button onClick={goToBlog} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-0.5 hover:bg-blue-400">
                Acessar o blog completo
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button onClick={goToContact} className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-4 font-semibold text-slate-200 transition hover:border-white/50 hover:bg-white/5">
                Diagnóstico gratuito da minha clínica
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/13538710/pexels-photo-13538710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Fisioterapeuta atendendo paciente em clínica"
                className="h-[380px] w-full object-cover sm:h-[480px]"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950/90 to-transparent p-6">
                <p className="text-sm font-semibold text-blue-200">Cenário real</p>
                <p className="mt-1 text-lg font-bold leading-snug">O paciente está a 3 quarteirões da sua clínica — e vai para a que aparece no Google.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SPIN Section */}
      <section className="py-20 sm:py-28" id="spin">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Antes de continuar, seja honesto</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Perguntas que ninguém te faz sobre sua clínica.</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Responda mentalmente. Se alguma dessas perguntas te incomoda, é porque há uma lacuna entre a qualidade do seu atendimento e a forma como pacientes te encontram.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {spinQuestions.map(({ letter, label, icon: Icon, questions, color }) => {
              const c = colorMap[color];
              return (
                <div key={letter} className={`rounded-3xl border ${c.border} bg-white p-8 shadow-sm transition hover:shadow-lg`}>
                  <div className="flex items-center gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${c.bg} ${c.text}`}>
                      <span className="text-2xl font-bold">{letter}</span>
                    </div>
                    <div>
                      <p className={`text-sm font-bold uppercase tracking-[0.16em] ${c.text}`}>{label}</p>
                      <h3 className="text-xl font-bold text-slate-950">Perguntas para refletir</h3>
                    </div>
                    <Icon className={`ml-auto h-6 w-6 ${c.text}`} />
                  </div>
                  <ul className="mt-6 space-y-4">
                    {questions.map((q, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed text-slate-700">
                        <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${c.text.replace('text-', 'bg-')}`} />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl bg-slate-950 p-8 text-center text-white sm:p-10">
            <p className="text-lg leading-relaxed text-slate-300">
              Se essas perguntas geraram inquietação, você já deu o primeiro passo. A diferença entre clínicas que crescem e clínicas que estagnam não está na qualidade técnica — está em <strong className="text-white">ser encontrada</strong>.
            </p>
            <button onClick={goToContact} className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3.5 font-bold text-white transition hover:bg-blue-400">
              Quero ser encontrada no Google
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Objections Section */}
      <section className="bg-white py-20 sm:py-28" id="objecoes">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <X className="h-7 w-7" />
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-red-600">Objecões que ouvimos todos os dias</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">"Mas na minha situação é diferente..."</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Entendemos os receios. Mas cada uma dessas objeções esconde um custo que você já está pagando — mesmo sem perceber.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {objections.map(({ objection, response, icon: Icon }, index) => (
              <details key={index} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300 open:bg-white open:shadow-md">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="pt-2 text-lg font-bold text-slate-900">{objection}</p>
                  </div>
                  <ChevronDown className="mt-2 h-5 w-5 shrink-0 text-slate-400 transition group-open:rotate-180" />
                </summary>
                <p className="mt-4 pl-14 leading-relaxed text-slate-600">{response}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Preview */}
      <section className="py-20 sm:py-28" id="artigos">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600">Conteúdo prático</p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Artigos para donos de clínicas</h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-600">Conteúdo direto ao ponto, sem enrolação. Aprenda a transformar sua presença online em agendamentos reais.</p>
            </div>
            <button onClick={goToBlog} className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-600">
              Ver todos os artigos
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {articles.map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-blue-500 to-blue-700">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(255,255,255,0.15),_transparent_60%)]" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">{article.tag}</span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{article.date}</span>
                    <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-slate-950 transition group-hover:text-blue-600">{article.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{article.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
                    Ler no blog
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <HeartPulse className="mx-auto h-12 w-12 text-blue-200" />
          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-5xl">Sua clínica merece ser a primeira opção.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-blue-100">
            Leia o blog para entender o que está faltando. E quando estiver pronto para transformar conhecimento em resultado, fale com a gente.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button onClick={goToBlog} className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-blue-600 transition hover:bg-blue-50">
              Acessar o blog
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
            <button onClick={goToContact} className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-4 font-semibold text-white transition hover:border-white/60 hover:bg-white/10">
              Solicitar diagnóstico gratuito
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
