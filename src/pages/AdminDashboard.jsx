// src/pages/AdminDashboard.jsx

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [venditeTotali, setVenditeTotali] = useState(0);
  const [utenti, setUtenti] = useState([]);
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    // Mock dati
    setVenditeTotali(3500);
    setUtenti([
      { id: 1, nome: "Venditore A", email: "a@email.com" },
      { id: 2, nome: "Venditore B", email: "b@email.com" },
    ]);
    setProdotti([
      { id: 1, nome: "Maglietta", vendite: 25 },
      { id: 2, nome: "Zaino", vendite: 10 },
    ]);
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Dashboard Amministratore</h1>

      {/* Statistiche Generali */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Vendite Totali</h2>
          <p className="text-3xl font-bold text-yellow-500">{venditeTotali} €</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Venditori Registrati</h2>
          <p className="text-3xl font-bold text-gray-700">{utenti.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-semibold mb-2">Prodotti Totali</h2>
          <p className="text-3xl font-bold text-gray-700">{prodotti.length}</p>
        </div>
      </section>

      {/* Venditori */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Venditori</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {utenti.map((utente) => (
            <div key={utente.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold">{utente.nome}</h3>
              <p className="text-gray-600">{utente.email}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Prodotti */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Prodotti più venduti</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {prodotti.map((prodotto) => (
            <div key={prodotto.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-lg font-bold">{prodotto.nome}</h3>
              <p className="text-yellow-500 font-semibold">{prodotto.vendite} vendite</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
