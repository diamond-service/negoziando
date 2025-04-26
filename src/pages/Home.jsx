import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [prodotti, setProdotti] = useState([]);

  useEffect(() => {
    fetchProdotti();
  }, []);

  const fetchProdotti = async () => {
    const { data, error } = await supabase.from("prodotti").select("*");
    if (error) {
      console.error("Errore caricamento prodotti:", error.message);
    } else {
      setProdotti(data);
    }
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-yellow-500 mb-10 text-center">
        Benvenuto su Negoziando Livorno
      </h1>

      <h2 className="text-2xl font-bold mb-6">Prodotti in Evidenza</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {prodotti.map((prodotto) => (
          <div key={prodotto.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <img src={prodotto.immagine} alt={prodotto.nome} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-bold text-gray-800">{prodotto.nome}</h3>
              <p className="text-yellow-500 font-semibold mt-2">€{prodotto.prezzo}</p>
              <Link
                to={`/prodotto/${prodotto.id}`}
                className="mt-3 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded-md transition"
              >
                Visualizza
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
