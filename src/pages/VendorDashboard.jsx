import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const mockVendite = [
  { giorno: "Lun", vendite: 5, importo: 50 },
  { giorno: "Mar", vendite: 8, importo: 80 },
  { giorno: "Mer", vendite: 2, importo: 20 },
  { giorno: "Gio", vendite: 9, importo: 90 },
  { giorno: "Ven", vendite: 11, importo: 110 },
  { giorno: "Sab", vendite: 6, importo: 60 },
  { giorno: "Dom", vendite: 3, importo: 30 },
];

const mockProdotti = [
  {
    id: 1,
    nome: "Maglietta Livorno Style",
    immagine: "https://placehold.co/300x200?text=Maglietta",
    prezzo: 25,
  },
  {
    id: 2,
    nome: "Tazza Personalizzata",
    immagine: "https://placehold.co/300x200?text=Tazza",
    prezzo: 15,
  },
  {
    id: 3,
    nome: "Zaino Artigianale",
    immagine: "https://placehold.co/300x200?text=Zaino",
    prezzo: 45,
  },
];

export default function VendorDashboard() {
  const [vendite, setVendite] = useState([]);
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    setVendite(mockVendite);
    setProdotti(mockProdotti);
  }, []);

  const totaleIncassi = vendite.reduce((acc, v) => acc + v.importo, 0);

  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Dashboard Venditore
      </h1>

      {/* Grafico vendite */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Vendite Settimanali</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={vendite}>
            <XAxis dataKey="giorno" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="vendite" fill="#FFCE00" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="mt-4 text-base font-semibold">
          Totale incassi: <span className="text-green-600">{totaleIncassi} €</span>
        </p>
      </div>

      {/* Prodotti caricati */}
      <h2 className="text-2xl font-bold mb-6 text-gray-800">I tuoi prodotti</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {prodotti.map((prodotto) => (
          <div key={prodotto.id} className="card p-4 flex flex-col items-center">
            <img
              src={prodotto.immagine}
              alt={prodotto.nome}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">{prodotto.nome}</h3>
            <p className="text-black font-bold mt-2">{prodotto.prezzo} €</p>
          </div>
        ))}
      </div>
    </section>
  );
}
