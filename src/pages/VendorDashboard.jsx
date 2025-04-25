import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "./recharts";

// I dati mock rimarrebbero invariati...

export default function VendorDashboard() {
  const [prodotti, setProdotti] = useState([]);
  const [vendite, setVendite] = useState([]);
  const [ordini, setOrdini] = useState([]);
  const [mostraFormProdotto, setMostraFormProdotto] = useState(false);
  const [nuovoProdotto, setNuovoProdotto] = useState({
    nome: "",
    prezzo: "",
    descrizione: "",
    immagine: ""
  });

  useEffect(() => {
    // In un'app reale, qui faresti chiamate API
    setProdotti(prodottiMock);
    setVendite(venditeMock);
    setOrdini(ordiniMock);
  }, []);

  const totaleIncassi = ordini.reduce((acc, ordine) => acc + ordine.importo, 0);

  const handleAggiungiProdotto = () => {
    setMostraFormProdotto(true);
  };

  const handleSalvaProdotto = () => {
    // Validazione
    if (!nuovoProdotto.nome || !nuovoProdotto.prezzo) {
      alert("Nome e prezzo sono obbligatori");
      return;
    }

    // In un'app reale, qui faresti una chiamata API POST
    const novoProdotto = {
      ...nuovoProdotto,
      id: prodotti.length + 1,
      prezzo: parseFloat(nuovoProdotto.prezzo)
    };
    
    setProdotti([...prodotti, novoProdotto]);
    setNuovoProdotto({ nome: "", prezzo: "", descrizione: "", immagine: "" });
    setMostraFormProdotto(false);
  };

  const handleEliminaProdotto = (id) => {
    // In un'app reale, qui faresti una chiamata API DELETE
    setProdotti(prodotti.filter(p => p.id !== id));
  };

  return (
    <div className="px-6 py-8 bg-white min-h-screen">
      {/* Titolo e resto del codice invariato... */}

      {/* Prodotti */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">I tuoi prodotti</h2>
        <button 
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded"
          onClick={handleAggiungiProdotto}
        >
          ➕ Aggiungi prodotto
        </button>
      </div>

      {/* Form per aggiungere prodotto */}
      {mostraFormProdotto && (
        <div className="mb-8 p-4 border rounded-lg bg-yellow-50">
          <h3 className="font-bold mb-4">Nuovo Prodotto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nome prodotto"
              className="p-2 border rounded"
              value={nuovoProdotto.nome}
              onChange={(e) => setNuovoProdotto({...nuovoProdotto, nome: e.target.value})}
            />
            <input
              type="number"
              placeholder="Prezzo"
              className="p-2 border rounded"
              value={nuovoProdotto.prezzo}
              onChange={(e) => setNuovoProdotto({...nuovoProdotto, prezzo: e.target.value})}
            />
            <input
              type="text"
              placeholder="URL immagine"
              className="p-2 border rounded"
              value={nuovoProdotto.immagine}
              onChange={(e) => setNuovoProdotto({...nuovoProdotto, immagine: e.target.value})}
            />
            <textarea
              placeholder="Descrizione"
              className="p-2 border rounded"
              value={nuovoProdotto.descrizione}
              onChange={(e) => setNuovoProdotto({...nuovoProdotto, descrizione: e.target.value})}
            />
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button 
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-4 rounded"
              onClick={() => setMostraFormProdotto(false)}
            >
              Annulla
            </button>
            <button 
              className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded"
              onClick={handleSalvaProdotto}
            >
              Salva
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {prodotti.map((prodotto) => (
          <div key={prodotto.id} className="border rounded-lg overflow-hidden shadow hover:shadow-md">
            <img src={prodotto.immagine} alt={prodotto.nome} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-gray-800">{prodotto.nome}</h3>
              <p className="text-gray-500 text-sm">{prodotto.descrizione}</p>
              <div className="mt-2 font-semibold text-yellow-600">{prodotto.prezzo} €</div>
              <div className="mt-4 flex justify-end gap-2">
                <button className="text-blue-500 hover:text-blue-700">
                  ✏️ Modifica
                </button>
                <button 
                  className="text-red-500 hover:text-red-700"
                  onClick={() => handleEliminaProdotto(prodotto.id)}
                >
                  🗑️ Elimina
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
