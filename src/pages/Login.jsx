import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.error(error.message);
      return;
    }

    if (data.user) {
      // Recupera profilo dell'utente
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("ruolo")
        .eq("id", data.user.id)
        .single();

      if (profileError) {
        console.error(profileError.message);
        return;
      }

      console.log("Login riuscito, ruolo:", profile.ruolo);

      // Redirige in base al ruolo
      if (profile.ruolo === "admin") {
        navigate("/admin/dashboard");
      } else if (profile.ruolo === "venditore") {
        navigate("/venditore/dashboard");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-yellow-500 mb-6">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
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
              placeholder="Inserisci la tua password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md transition"
          >
            Accedi
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-600">
          Non hai un account?{" "}
          <a href="/register" className="text-yellow-500 hover:underline">
            Registrati
          </a>
        </p>
      </div>
    </div>
  );
}
