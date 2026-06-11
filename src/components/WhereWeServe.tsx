export default function WhereWeServe() {
  const regions = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Curitiba', 'Porto Alegre', 'Brasília', 'Salvador', 'Recife'];
  return (
    <div className="pt-20">
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Onde Atendemos</h1>
          <p className="text-gray-600 text-lg mb-8">
            Atendemos negócios em todo o Brasil com foco nas principais capitais e regiões metropolitanas.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {regions.map((r, i) => (
              <div key={i} className="bg-gray-50 rounded-lg p-4 text-center font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
