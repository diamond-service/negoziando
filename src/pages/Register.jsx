import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    if (error) {
      console.error(error.message);
      return;
    }
  
    if (data.user) {
      // Subito dopo la registrazione, crea il profilo
      await supabase.from("profiles").insert([
        {
          id: data.user.id,
          ruolo: "cliente", // oppure "venditore" se registriamo venditori
        }
      ]);
    }
  
    console.log("Registrazione completata!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Registrati
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Inserisci la tua email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Crea una password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md transition"
          >
            Registrati
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Hai già un account?{" "}
          <a href="/login" className="text-yellow-500 hover:underline">
            Accedi
          </a>
        </p>
      </div>
    </div>
  );
}
