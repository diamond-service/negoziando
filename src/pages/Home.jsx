import { useState } from "react";

export default function Home() {
  const categorie = [
    { id: 1, nome: "Abbigliamento", icona: "👕" },
    { id: 2, nome: "Tecnologia", icona: "💻" },
    { id: 3, nome: "Casa", icona: "🏠" },
    { id: 4, nome: "Sport", icona: "⚽" },
    { id: 5, nome: "Libri", icona: "📚" },
    { id: 6, nome: "Cibo e Bevande", icona: "🍔" },
  ];

  const prodotti = [
    {
      id: 1,
      nome: "Maglietta Livorno Style",
      prezzo: 25,
      immagine: "https://via.placeholder.com/300x200?text=Maglietta",
    },
    {
      id: 2,
      nome: "Zaino Artigianale",
      prezzo: 45,
      immagine: "https://via.placeholder.com/300x200?text=Zaino",
    },
    {
      id: 3,
      nome: "Tazza Personalizzata",
      prezzo: 15,
      immagine: "https://via.placeholder.com/300x200?text=Tazza",
    },
  ];

  return (
    <div className="container py-8">
      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-yellow-500">
          Benvenuto su Negoziando Livorno
        </h1>
        <p className="text-gray-600">
          Scopri offerte uniche nei migliori negozi della città!
        </p>
      </section>

      {/* Categorie */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Categorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categorie.map((cat) => (
            <div
              key={cat.id}
              className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow hover:shadow-lg transition cursor-pointer"
            >
              <div className="text-5xl">{cat.icona}</div>
              <div className="mt-2 font-semibold">{cat.nome}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Prodotti */}
      <section className="py-8">
        <h2 className="text-2xl font-bold mb-6">Prodotti in evidenza</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prodotti.map((prodotto) => (
            <div
              key={prodotto.id}
              className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition"
            >
              <img
                src={prodotto.immagine}
                alt={prodotto.nome}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{prodotto.nome}</h3>
                <p className="mt-2 text-yellow-500 font-semibold">
                  {prodotto.prezzo} €
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
