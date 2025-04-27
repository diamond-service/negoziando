import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../context/AuthContext";

export default function TestError() {
  const { user } = useAuth();

  return (
    <div className="container mx-auto mt-10 text-center">
      <h1 className="text-3xl font-bold mb-6">Pagina Test Errori</h1>

      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold">Test Connessione Supabase</h2>
          {supabase ? (
            <p className="text-green-600">✅ Supabase è configurato correttamente!</p>
          ) : (
            <p className="text-red-600">❌ Supabase NON è configurato correttamente!</p>
          )}
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold">Test User Login</h2>
          {user ? (
            <p className="text-green-600">✅ Utente autenticato: {user.email}</p>
          ) : (
            <p className="text-yellow-600">⚠️ Nessun utente loggato</p>
          )}
        </div>
      </div>
    </div>
  );
}
