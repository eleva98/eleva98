import React, { useState, useEffect } from 'react';
import { AlertTriangle, CheckCircle, TrendingUp } from 'lucide-react';

const ProblemSolution = () => {
  const [counter, setCounter] = useState(0);
  const targetNumber = 7;

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev < targetNumber) {
          return prev + 1;
        }
        return targetNumber;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const problems = [
    {
      icon: AlertTriangle,
      title: 'Perfil Desatualizado',
      description: 'Informações incorretas ou incompletas afastam clientes',
      color: 'text-red-500 bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Avaliações Negativas',
      description: 'Reviews ruins sem resposta prejudicam sua reputação',
      color: 'text-red-500 bg-red-50'
    },
    {
      icon: AlertTriangle,
      title: 'Invisibilidade Local',
      description: 'Concorrentes aparecem primeiro nas buscas',
      color: 'text-red-500 bg-red-50'
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: 'Otimização Completa',
      description: 'Configuramos todos os detalhes para máxima performance',
      color: 'text-green-500 bg-green-50'
    },
    {
      icon: CheckCircle,
      title: 'Gestão de Reputação',
      description: 'Estratégia ativa para gerar e gerenciar avaliações',
      color: 'text-green-500 bg-green-50'
    },
    {
      icon: CheckCircle,
      title: 'Domínio Local',
      description: 'Sua empresa sempre no topo das buscas relevantes',
      color: 'text-green-500 bg-green-50'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Seus Clientes Procuram no Google.{' '}
            <span className="text-red-500">Eles Encontram Você</span> ou{' '}
            <span className="text-red-500">a Concorrência</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A maioria das empresas perde oportunidades todos os dias por não ter sua presença online otimizada. Veja como mudamos essa realidade:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Problems */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">O Que Está Perdendo:</h3>
            {problems.map((problem, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-red-50 rounded-lg border border-red-100">
                <div className={`p-3 rounded-full ${problem.color}`}>
                  <problem.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{problem.title}</h4>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Como Resolvemos:</h3>
            {solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-green-50 rounded-lg border border-green-100">
                <div className={`p-3 rounded-full ${solution.color}`}>
                  <solution.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h4>
                  <p className="text-gray-600">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Counter */}
        <div className="bg-blue-600 text-white rounded-2xl p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-blue-200" />
            <h3 className="text-3xl font-bold mb-4">Impacto Comprovado</h3>
            <div className="text-6xl font-bold mb-4">
              {counter}x
            </div>
            <p className="text-xl text-blue-100">
              Empresas com perfil otimizado no Google Meu Negócio recebem <strong>{counter}x mais cliques</strong> e geram significativamente mais leads qualificados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;