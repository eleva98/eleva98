interface PrivacyPolicyProps {
  setCurrentPage: (page: string) => void;
}

export default function PrivacyPolicy({ setCurrentPage }: PrivacyPolicyProps) {
  return (
    <div className="pt-20">
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Política de Privacidade</h1>
          <div className="prose max-w-none text-gray-600 space-y-4">
            <p>Última atualização: Janeiro de 2025</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6">1. Dados Coletados</h2>
            <p>Coletamos apenas os dados necessários para prestar nossos serviços: nome, e-mail, telefone e informações do seu negócio.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6">2. Uso dos Dados</h2>
            <p>Os dados são utilizados exclusivamente para prestação de serviços, comunicação e melhoria de nossa oferta.</p>
            <h2 className="text-xl font-bold text-gray-900 mt-6">3. Compartilhamento</h2>
            <p>Não compartilhamos seus dados com terceiros, exceto quando necessário para a prestação dos serviços contratados.</p>
            <button onClick={() => { setCurrentPage('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-blue-600 hover:text-blue-700 font-medium mt-8 inline-block">
              Voltar ao início
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
