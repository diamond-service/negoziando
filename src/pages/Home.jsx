// src/pages/Home.jsx

import { Link } from "react-router-dom";

export default function Home() {
  const categorie = [
    { nome: "Abbigliamento", icona: "👕" },
    { nome: "Tecnologia", icona: "💻" },
    { nome: "Casa", icona: "🏡" },
    { nome: "Cibo e Bevande", icona: "🍔" },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Benvenuto su Negoziando Livorno</h1>

      {/* Sezione Categorie */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Categorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categorie.map((categoria, idx) => (
            <Link
              to={`/categoria/${categoria.nome.toLowerCase()}`}
              key={idx}
              className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition transform"
            >
              <div className="text-5xl mb-2">{categoria.icona}</div>
              <div className="text-lg font-semibold">{categoria.nome}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA per Registrarsi o Vedere Prodotti */}
      <div className="mt-12 text-center">
        <Link
          to="/register"
          className="button-primary"
        >
          Diventa Venditore
        </Link>
      </div>
    </div>
  );
}
