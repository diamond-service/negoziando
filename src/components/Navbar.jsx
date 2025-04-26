import { Link } from "react-router-dom";
import Logout from "./Logout"; // Import Logout

export default function Navbar() {
  return (
    <header className="bg-yellow-400 shadow-md">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black hover:opacity-80 transition">
          Negoziando Livorno
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-8">
          <input
            type="text"
            placeholder="Cerca prodotti..."
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Menu Links */}
        <div className="flex gap-4 items-center">
          <Link
            to="/"
            className="text-black font-semibold hover:underline hover:text-white transition"
          >
            Home
          </Link>
          <Link
            to="/carrello"
            className="text-black font-semibold hover:underline hover:text-white transition"
          >
            Carrello
          </Link>
          <Link
            to="/venditore/dashboard"
            className="text-black font-semibold hover:underline hover:text-white transition"
          >
            Dashboard Venditore
          </Link>
          <Link
            to="/admin/dashboard"
            className="text-black font-semibold hover:underline hover:text-white transition"
          >
            Dashboard Admin
          </Link>
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

          {/* Logout button */}
          <Logout />
        </div>
      </div>
    </header>
  );
}
