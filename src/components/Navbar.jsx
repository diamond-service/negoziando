// src/components/Navbar.jsx

import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Errore durante il logout:", error.message);
    }
  };

  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="container flex justify-between items-center py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          Negoziando Livorno
        </Link>

        {/* Barra ricerca */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="Cerca prodotti..."
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Menu */}
        <div className="flex gap-4 items-center">
          {!user ? (
            <>
              <Link
                to="/login"
                className="text-black font-semibold hover:underline hover:text-white transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-black font-semibold hover:underline hover:text-white transition"
              >
                Registrati
              </Link>
            </>
          ) : (
            <>
              {/* Mostra il nome dell'utente */}
              <span className="font-semibold text-black">
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="button-primary"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
