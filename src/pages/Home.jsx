import React, { useState } from "react";

const prodottiMock = [
  {
    id: 1,
    nome: "Maglietta Livorno Style",
    prezzo: 25,
    descrizione: "Maglietta in cotone con stampa esclusiva.",
    immagine: "https://placehold.co/300x200?text=Maglietta",
  },
  {
    id: 2,
    nome: "Tazza personalizzata",
    prezzo: 15,
    descrizione: "Tazza in ceramica con design unico.",
    immagine: "https://placehold.co/300x200?text=Tazza",
  },
  {
    id: 3,
    nome: "Zaino artigianale",
    prezzo: 45,
    descrizione: "Zaino in pelle fatto a mano.",
    immagine: "https://placehold.co/300x200?text=Zaino",
  },
];

export default function Home() {
  const [query, setQuery] = useState("");

  const prodottiFiltrati = prodottiMock.filter((prodotto) =>
    prodotto.nome.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="px-4 py-6 bg-white min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-600">
        Benvenuto su Negoziando Livorno
      </h1>

      {/* Barra di ricerca */}
      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Cerca prodotti..."
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Griglia prodotti */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {prodottiFiltrati.length === 0 && (
          <p className="text-center text-gray-500 col-span-full">
            Nessun prodotto trovato.
          </p>
        )}
        {prodottiFiltrati.map((prodotto) => (
          <div
            key={prodotto.id}
            className="border rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <img
              src={prodotto.immagine}
              alt={prodotto.nome}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-gray-800">
                {prodotto.nome}
              </h2>
              <p className="text-sm text-gray-500">{prodotto.descrizione}</p>
              <div className="mt-2 font-semibold text-yellow-600">
                {prodotto.prezzo} €
              </div>
              <button className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded">
                Acquista ora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
