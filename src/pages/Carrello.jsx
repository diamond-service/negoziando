import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Carrello() {
  const [carrello, setCarrello] = useState([]);

  useEffect(() => {
    const carrelloSalvato = JSON.parse(localStorage.getItem("carrello")) || [];
    setCarrello(carrelloSalvato);
  }, []);

  const totale = carrello.reduce((acc, prodotto) => acc + Number(prodotto.prezzo), 0);

  const handleCheckout = () => {
    if (carrello.length === 0) {
      alert("Il carrello è vuoto!");
      return;
    }
    alert("Ordine confermato! Grazie per il tuo acquisto.");
    localStorage.removeItem("carrello");
    setCarrello([]);
  };

  const rimuoviDalCarrello = (id) => {
    const nuovoCarrello = carrello.filter((item) => item.id !== id);
    localStorage.setItem("carrello", JSON.stringify(nuovoCarrello));
    setCarrello(nuovoCarrello);
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-yellow-500 mb-10 text-center">
        Il tuo Carrello
      </h1>

      {carrello.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600 mb-4">Il tuo carrello è vuoto.</p>
          <Link to="/" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-md transition">
            Torna alla Home
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-6 mb-8">
            {carrello.map((prodotto) => (
              <div key={prodotto.id} className="flex items-center bg-white p-4 rounded-lg shadow-md justify-between">
                <div className="flex items-center gap-4">
                  <img src={prodotto.immagine} alt={prodotto.nome} className="w-24 h-24 object-cover rounded-md" />
                  <div>
                    <h3 className="font-bold text-lg">{prodotto.nome}</h3>
                    <p className="text-yellow-500 font-semibold">€{prodotto.prezzo}</p>
                  </div>
                </div>
                <button
                  onClick={() => rimuoviDalCarrello(prodotto.id)}
                  className="text-red-500 hover:text-red-700 font-bold"
                >
                  Rimuovi
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-xl font-bold mb-4">
              Totale: <span className="text-yellow-500">€{totale.toFixed(2)}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-md transition"
            >
              Procedi al Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
