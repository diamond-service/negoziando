import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Prodotto() {
  const { id } = useParams();
  const [prodotto, setProdotto] = useState(null);

  useEffect(() => {
    fetchProdotto();
  }, []);

  const fetchProdotto = async () => {
    const { data, error } = await supabase.from("prodotti").select("*").eq("id", id).single();
    if (error) {
      console.error(error.message);
    } else {
      setProdotto(data);
    }
  };

  const aggiungiAlCarrello = () => {
    const carrello = JSON.parse(localStorage.getItem("carrello")) || [];
    carrello.push(prodotto);
    localStorage.setItem("carrello", JSON.stringify(carrello));
    alert("Prodotto aggiunto al carrello!");
  };

  if (!prodotto) return <p className="text-center py-8">Caricamento...</p>;

  return (
    <div className="container py-8">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto text-center">
        <img src={prodotto.immagine} alt={prodotto.nome} className="w-full h-64 object-cover rounded-md mb-6" />
        <h1 className="text-3xl font-bold mb-4">{prodotto.nome}</h1>
        <p className="text-yellow-500 text-xl font-semibold mb-4">€{prodotto.prezzo}</p>
        <button
          onClick={aggiungiAlCarrello}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-md transition"
        >
          Aggiungi al Carrello
        </button>
      </div>
    </div>
  );
}
