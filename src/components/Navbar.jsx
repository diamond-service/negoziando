import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-yellow-400 shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          Negoziando Livorno
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-8">
          <input
            type="text"
            placeholder="Cerca prodotti..."
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </div>

        {/* Menu */}
        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-black font-semibold hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-black font-semibold hover:text-white transition"
          >
            Registrati
          </Link>
        </div>
      </div>

      {/* Search bar visibile su mobile */}
      <div className="block md:hidden px-4 pb-4">
        <input
          type="text"
          placeholder="Cerca prodotti..."
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
    </header>
  );
}
