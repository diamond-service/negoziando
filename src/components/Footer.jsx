export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-12">
      <div className="container flex flex-col md:flex-row justify-between items-center">
        {/* Logo o nome */}
        <div className="text-xl font-bold mb-4 md:mb-0">
          Negoziando Livorno
        </div>

        {/* Link veloci */}
        <div className="flex gap-6 text-sm">
          <a href="/" className="hover:underline hover:text-yellow-400">
            Home
          </a>
          <a href="/login" className="hover:underline hover:text-yellow-400">
            Login
          </a>
          <a href="/register" className="hover:underline hover:text-yellow-400">
            Registrati
          </a>
          <a href="/venditore/dashboard" className="hover:underline hover:text-yellow-400">
            Area Venditori
          </a>
        </div>
      </div>

      {/* Linea sotto */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Negoziando Livorno. Tutti i diritti riservati.
      </div>
    </footer>
  );
}
