import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Dr. Marcus Oliveira',
      position: 'Proprietário',
      company: 'Clínica Fisio Movimento',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Em apenas 4 meses, nossa clínica de fisioterapia passou de 8 para 35 agendamentos semanais. O Google Meu Negócio e SEO local foram decisivos para nossa expansão. Recomendo muito!',
      rating: 5,
      highlight: '+340% em agendamentos'
    },
    {
      name: 'Dra. Fernanda Costa',
      position: 'Sócia-Diretora',
      company: 'Fisioterapia Reabilita',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Aparecemos no topo do Google Maps quando pacientes procuram "fisioterapia perto de mim". Os agendamentos online cresceram 280% em apenas 3 meses. Excelente trabalho!',
      rating: 5,
      highlight: '+280% em buscas locais'
    },
    {
      name: 'Prof. Ricardo Santos',
      position: 'Gestor Clínico',
      company: 'Centro de Reabilitação São Paulo',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Os leads que chegam agora são muito mais qualificados. As campanhas do Google Ads geradas transformaram nosso fluxo de pacientes. Taxa de conversão de 78% em agendamentos confirmados.',
      rating: 5,
      highlight: '78% de conversão'
    },
    {
      name: 'Carla Mendes',
      position: 'Proprietária',
      company: 'Clínica de Pilates Reforma Corporal',
      image: 'https://images.pexels.com/photos/3807496/pexels-photo-3807496.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Estávamos na página 5 do Google. Em 60 dias, ficamos em primeiro lugar para "pilates perto de mim" na região. Os alunos agora nos encontram facilmente. Faturamento triplicou!',
      rating: 5,
      highlight: '+300% em faturamento'
    },
    {
      name: 'Felipe Rodrigues',
      position: 'Gerente',
      company: 'Studio de Pilates Força Total',
      image: 'https://images.pexels.com/photos/3807510/pexels-photo-3807510.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Não sabia bem como aparecer nas buscas locais. Com a estratégia de SEO e Google Meu Negócio, nossas matrículas aumentaram 420% em 5 meses. Os leads chegam super qualificados!',
      rating: 5,
      highlight: '+420% em matrículas'
    },
    {
      name: 'Beatriz Alves',
      position: 'Diretora',
      company: 'Fisioterapia Bem Estar',
      image: 'https://images.pexels.com/photos/3807546/pexels-photo-3807546.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Fisioterapia gerar leads qualificados online? Sim! Com a estratégia deles, minha agenda ficou 95% preenchida. Os agendamentos cresceram e os cancellations caíram drasticamente.',
      rating: 5,
      highlight: '95% de taxa ocupação'
    },
    {
      name: 'Anderson Silva',
      position: 'Proprietário',
      company: 'Fisio Especializada Esportes',
      image: 'https://images.pexels.com/photos/3807505/pexels-photo-3807505.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Conseguimos dominar a busca local em nossa região. Pessoas procurando "fisioterapia para lesão" encontram a gente primeiro. Receita mensal cresceu 280% em 3 meses.',
      rating: 5,
      highlight: '+280% em receita'
    },
    {
      name: 'Juliana Ribeiro',
      position: 'Proprietária',
      company: 'Studio Pilates Premium',
      image: 'https://images.pexels.com/photos/3807500/pexels-photo-3807500.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Passávamos despercebidos no Google Maps. Agora ficamos no topo quando alguém procura "pilates perto de mim". Os agendamentos aumentaram 350% e o studio está sempre cheio.',
      rating: 5,
      highlight: '+350% agendamentos'
    },
    {
      name: 'Roberto Costa',
      position: 'CEO',
      company: 'Centro Multidisciplinar Saúde',
      image: 'https://images.pexels.com/photos/3807509/pexels-photo-3807509.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Aumentamos a visibilidade de todos os profissionais do centro com a estratégia. Pacientes que demoravam a ser encaminhados agora chegam direto. Crescimento de 65% em apenas 90 dias.',
      rating: 5,
      highlight: '+65% em crescimento'
    },
    {
      name: 'Vanessa Monteiro',
      position: 'Administradora',
      company: 'Studio Pilates Essencial',
      image: 'https://images.pexels.com/photos/3807507/pexels-photo-3807507.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Implementamos a estratégia e em 45 dias tínhamos 87 novas alunas. Google Meu Negócio no topo, reviews crescendo, agora somos referência em pilates na região.',
      rating: 5,
      highlight: '+87 clientes/mês'
    },
    {
      name: 'Lucas Ferreira',
      position: 'Sócio-Diretor',
      company: 'Clínica Fisioterapia Integrada',
      image: 'https://images.pexels.com/photos/3807545/pexels-photo-3807545.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Fisioterapia gerar leads qualificados? Com a estratégia deles conseguimos! Em 90 dias temos 25 pacientes novos por semana com decisão de compra imediata. ROI de 450%.',
      rating: 5,
      highlight: 'ROI de 450%'
    },
    {
      name: 'Camila Sousa',
      position: 'Proprietária',
      company: 'Clínica Fisio Vida Ativa',
      image: 'https://images.pexels.com/photos/3808122/pexels-photo-3808122.jpeg?auto=compress&cs=tinysrgb&w=400',
      testimonial: 'Competição acirrada no mercado de fisioterapia. Conseguimos nos posicionar como referência na região. Agendamentos cresceram 390% em 4 meses. Resultado espetacular!',
      rating: 5,
      highlight: '+390% agendamentos'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Mais de 100 Clientes em Diversos{' '}
            <span className="text-blue-600">Segmentos Comprovam Resultados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profissionais liberais, clínicas, academias, restaurantes e empresas que aumentaram drasticamente seus leads e faturamento em poucos meses com nossa estratégia de SEO Local e Google Meu Negócio.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 relative flex flex-col h-full">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400';
                    target.onerror = () => {
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        const placeholder = document.createElement('div');
                        placeholder.className = 'w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mr-4';
                        placeholder.innerHTML = '<span class="text-blue-600 font-bold text-lg">' + testimonial.name.charAt(0) + '</span>';
                        parent.insertBefore(placeholder, target);
                        target.remove();
                      }
                    };
                  }}
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed flex-grow text-sm">
                "{testimonial.testimonial}"
              </p>

              <div className="bg-blue-50 rounded-lg p-3 text-center mt-auto">
                <div className="text-xl font-bold text-blue-600">{testimonial.highlight}</div>
                <div className="text-xs text-gray-600">Resultado comprovado</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;