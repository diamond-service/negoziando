import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-8">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        {/* Logo e copyright */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">Negoziando Livorno</h2>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Tutti i diritti riservati.
          </p>
        </div>

        {/* Link rapidi */}
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Home
          </Link>
          <Link
            to="/login"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Registrati
          </Link>
          <Link
            to="/venditore/dashboard"
            className="text-gray-300 hover:text-yellow-400 transition"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </footer>
  );
}
