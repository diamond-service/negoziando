// src/pages/Home.jsx

export default function Home() {
  const categorie = [
    { nome: "Abbigliamento", icona: "👕" },
    { nome: "Tecnologia", icona: "💻" },
    { nome: "Casa", icona: "🏠" },
    { nome: "Cibo e Bevande", icona: "🍔" },
    { nome: "Sport", icona: "🏀" },
    { nome: "Libri", icona: "📚" },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Benvenuto su <span className="text-yellow-500">Negoziando Livorno</span>
      </h1>

      {/* Sezione Categorie */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 text-center">Categorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categorie.map((cat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-5xl mb-4">{cat.icona}</div>
              <h3 className="text-lg font-bold text-gray-700">{cat.nome}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sezione Introduzione */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Acquista dai migliori venditori della tua città
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Scopri prodotti unici, offerte locali e supporta i negozi della tua zona. Negoziando Livorno porta l'eccellenza direttamente a casa tua!
        </p>
      </section>
    </div>
  );
}
