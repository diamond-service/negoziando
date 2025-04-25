import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const venditeMock = [
  { giorno: "Lun", vendite: 5 },
  { giorno: "Mar", vendite: 8 },
  { giorno: "Mer", vendite: 2 },
  { giorno: "Gio", vendite: 9 },
  { giorno: "Ven", vendite: 11 },
  { giorno: "Sab", vendite: 6 },
  { giorno: "Dom", vendite: 3 },
];

const prodottiMock = [
  {
    id: 1,
    nome: "Maglietta Livorno Style",
    prezzo: 25,
    descrizione: "Maglietta in cotone con stampa esclusiva.",
    immagine: "https://via.placeholder.com/300x200?text=Maglietta",
  },
  {
    id: 2,
    nome: "Tazza personalizzata",
    prezzo: 15,
    descrizione: "Tazza in ceramica con design unico.",
    immagine: "https://via.placeholder.com/300x200?text=Tazza",
  },
];

const ordiniMock = [
  { id: 1, prodotto: "Maglietta Livorno Style", importo: 25 },
  { id: 2, prodotto: "Tazza personalizzata", importo: 15 },
];

export default function VendorDashboard() {
  const [prodotti, setProdotti] = useState([]);
  const [vendite, setVendite] = useState([]);
  const [ordini, setOrdini] = useState([]);

  useEffect(() => {
    setProdotti(prodottiMock);
    setVendite(venditeMock);
    setOrdini(ordiniMock);
  }, []);

  const totaleIncassi = ordini.reduce((acc, ordine) => acc + ordine.importo, 0);

  return (
    <div className="px-6 py-8 bg-white min-h-screen">
      {/* Titolo */}
      <h1 className="text-3xl font-bold text-yellow-600 mb-8">Dashboard Venditore</h1>

      {/* Statistiche rapide */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-yellow-600">{ordini.length}</h2>
          <p className="text-gray-600">Vendite totali</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-yellow-600">{totaleIncassi} €</h2>
          <p className="text-gray-600">Incassi totali</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-yellow-600">{prodotti.length}</h2>
          <p className="text-gray-600">Prodotti inseriti</p>
        </div>
      </div>

      {/* Grafico vendite */}
      <div className="bg-white shadow rounded-lg p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Vendite settimanali</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={vendite}>
            <XAxis dataKey="giorno" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="vendite" fill="#f7c948" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Ordini recenti */}
      <div className="bg-white shadow rounded-lg p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Ordini recenti</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-600">
            <thead className="text-gray-700 bg-gray-100">
              <tr>
                <th scope="col" className="px-4 py-3">Prodotto</th>
                <th scope="col" className="px-4 py-3">Importo (€)</th>
              </tr>
            </thead>
            <tbody>
              {ordini.map((ordine) => (
                <tr key={ordine.id} className="border-b">
                  <td className="px-4 py-3">{ordine.prodotto}</td>
                  <td className="px-4 py-3">{ordine.importo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Prodotti */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">I tuoi prodotti</h2>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded">
          ➕ Aggiungi prodotto
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {prodotti.map((prodotto) => (
          <div key={prodotto.id} className="border rounded-lg overflow-hidden shadow hover:shadow-md">
            <img src={prodotto.immagine} alt={prodotto.nome} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{prodotto.nome}</h3>
              <p className="text-gray-500 text-sm">{prodotto.descrizione}</p>
              <div className="mt-2 font-semibold text-yellow-600">{prodotto.prezzo} €</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
