// src/pages/VendorDashboard.jsx

import { useEffect, useState } from "react";

export default function VendorDashboard() {
  const [vendite, setVendite] = useState([]);
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    // Mock dati vendite e prodotti
    setVendite([
      { giorno: "Lun", vendite: 5, incasso: 50 },
      { giorno: "Mar", vendite: 8, incasso: 80 },
      { giorno: "Mer", vendite: 2, incasso: 20 },
      { giorno: "Gio", vendite: 9, incasso: 90 },
      { giorno: "Ven", vendite: 11, incasso: 110 },
    ]);

    setProdotti([
      {
        id: 1,
        nome: "Maglietta Livorno Style",
        prezzo: 25,
        immagine: "https://via.placeholder.com/300x200?text=Maglietta",
      },
      {
        id: 2,
        nome: "Zaino in pelle",
        prezzo: 45,
        immagine: "https://via.placeholder.com/300x200?text=Zaino",
      },
    ]);
  }, []);

  const totaleIncasso = vendite.reduce((acc, v) => acc + v.incasso, 0);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Dashboard Venditore</h1>

      {/* Incassi Totali */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-2">Totale Incassi</h2>
        <p className="text-4xl font-bold text-yellow-500">{totaleIncasso} €</p>
      </div>

      {/* Prodotti caricati */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Prodotti Caricati</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {prodotti.map((prodotto) => (
            <div
              key={prodotto.id}
              className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={prodotto.immagine}
                alt={prodotto.nome}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{prodotto.nome}</h3>
                <p className="text-yellow-600 font-bold mt-2">{prodotto.prezzo} €</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
