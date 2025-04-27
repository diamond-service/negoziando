// src/pages/Login.jsx

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errore, setErrore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrore("");
    setLoading(true);
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      setErrore(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto mt-20 bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-8 text-center">Accedi</h1>
      {errore && <div className="text-red-500 mb-4">{errore}</div>}
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="button-primary w-full"
        >
          {loading ? "Accesso in corso..." : "Accedi"}
        </button>
      </form>
    </div>
  );
}
