import { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function VendorDashboard() {
  const [vendite, setVendite] = useState([]);
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    // Mock dati vendite
    setVendite([
      { giorno: "Lun", vendite: 5 },
      { giorno: "Mar", vendite: 8 },
      { giorno: "Mer", vendite: 2 },
      { giorno: "Gio", vendite: 9 },
      { giorno: "Ven", vendite: 11 },
      { giorno: "Sab", vendite: 6 },
      { giorno: "Dom", vendite: 3 },
    ]);

    // Mock prodotti
    setProdotti([
      {
        id: 1,
        nome: "Maglietta Livorno Style",
        prezzo: 25,
        immagine: "https://via.placeholder.com/300x200?text=Maglietta",
      },
      {
        id: 2,
        nome: "Tazza Personalizzata",
        prezzo: 15,
        immagine: "https://via.placeholder.com/300x200?text=Tazza",
      },
    ]);
  }, []);

  return (
    <div className="container py-8">
      {/* Titolo Dashboard */}
      <h1 className="text-3xl font-bold mb-8 text-yellow-500 text-center">
        Dashboard Venditore
      </h1>

      {/* Sezione Grafico */}
      <div className="bg-white rounded-lg shadow p-6 mb-12">
        <h2 className="text-xl font-bold mb-4">Vendite settimanali</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={vendite}>
            <XAxis dataKey="giorno" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="vendite" fill="#facc15" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Sezione Prodotti */}
      <h2 className="text-2xl font-bold mb-6">Prodotti caricati</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {prodotti.map((prodotto) => (
          <div
            key={prodotto.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              src={prodotto.immagine}
              alt={prodotto.nome}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{prodotto.nome}</h3>
              <p className="mt-2 text-yellow-500 font-semibold">{prodotto.prezzo} €</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
