// src/components/Footer.jsx

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 mt-12">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo + Copyright */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Negoziando Livorno</h2>
          <p className="text-gray-400 text-sm mt-2">
            &copy; {new Date().getFullYear()} Tutti i diritti riservati.
          </p>
        </div>

        {/* Link navigazione */}
        <div className="flex flex-wrap gap-6 justify-center">
          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/login" className="hover:text-yellow-400 transition">Login</Link>
          <Link to="/register" className="hover:text-yellow-400 transition">Registrati</Link>
          <Link to="/venditore/dashboard" className="hover:text-yellow-400 transition">Dashboard</Link>
        </div>
      </div>
    </footer>
  );
}
