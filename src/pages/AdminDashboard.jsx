import { useState, useEffect } from "react";

export default function AdminDashboard() {
  const [venditori, setVenditori] = useState([]);
  const [utenti, setUtenti] = useState([]);

  useEffect(() => {
    // Mock dati venditori
    setVenditori([
      { id: 1, nome: "Natura Bio", prodotti: 12 },
      { id: 2, nome: "Tech World", prodotti: 25 },
    ]);

    // Mock dati utenti
    setUtenti([
      { id: 1, nome: "Mario Rossi", email: "mario@example.com" },
      { id: 2, nome: "Laura Bianchi", email: "laura@example.com" },
    ]);
  }, []);

  return (
    <div className="container py-8">
      {/* Titolo Dashboard Admin */}
      <h1 className="text-3xl font-bold mb-8 text-yellow-500 text-center">
        Dashboard Amministratore
      </h1>

      {/* Statistiche rapide */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Venditori attivi</h2>
          <p className="text-4xl font-bold text-yellow-500">{venditori.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Utenti registrati</h2>
          <p className="text-4xl font-bold text-yellow-500">{utenti.length}</p>
        </div>
      </div>

      {/* Tabella Venditori */}
      <h2 className="text-2xl font-bold mb-6">Gestione Venditori</h2>
      <div className="overflow-x-auto mb-12">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-yellow-400 text-black">
              <th className="py-3 px-6 text-left">Nome Venditore</th>
              <th className="py-3 px-6 text-left">Prodotti Inseriti</th>
            </tr>
          </thead>
          <tbody>
            {venditori.map((venditore) => (
              <tr key={venditore.id} className="border-t">
                <td className="py-3 px-6">{venditore.nome}</td>
                <td className="py-3 px-6">{venditore.prodotti}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabella Utenti */}
      <h2 className="text-2xl font-bold mb-6">Gestione Utenti</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-yellow-400 text-black">
              <th className="py-3 px-6 text-left">Nome</th>
              <th className="py-3 px-6 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {utenti.map((utente) => (
              <tr key={utente.id} className="border-t">
                <td className="py-3 px-6">{utente.nome}</td>
                <td className="py-3 px-6">{utente.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
