// src/pages/Home.jsx

import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { user } = useAuth();

  const categorie = [
    { nome: "Tecnologia", icona: "💻" },
    { nome: "Moda", icona: "👗" },
    { nome: "Casa", icona: "🏠" },
    { nome: "Sport", icona: "🏀" },
    { nome: "Cibo e Bevande", icona: "🍕" },
  ];

  return (
    <div className="container py-10">
      {/* Titolo */}
      <h1 className="text-4xl font-bold text-center text-yellow-500 mb-8">
        Benvenuto su Negoziando Livorno!
      </h1>

      {/* Messaggio Utente */}
      <div className="text-center text-lg mb-10">
        {user && user.email ? (
          <p className="text-gray-700">
            Ciao, <span className="font-semibold">{user.email}</span> 👋
          </p>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-600">
              Accedi o registrati per iniziare a fare acquisti!
            </p>
            <div className="flex gap-4">
              <Link
                to="/login"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-md transition"
              >
                Registrati
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Categorie vetrina */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Categorie</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {categorie.map((categoria, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-xl transition"
          >
            <div className="text-4xl mb-2">{categoria.icona}</div>
            <div className="text-lg font-semibold text-gray-700">{categoria.nome}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
