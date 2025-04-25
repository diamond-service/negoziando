import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: '', email: '', password: '', ruolo: 'cliente' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error: signUpError } = await register(form.email, form.password);
      if (signUpError) throw signUpError;
      const { user } = data;
      await supabase.from('users').insert({
        id: user.id,
        nome: form.nome,
        email: form.email,
        ruolo: form.ruolo,
      });
      navigate('/login');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-green-600">Registrati</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <input
          type="text"
          name="nome"
          placeholder="Nome completo"
          required
          value={form.nome}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={form.email}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        />
        <select
          name="ruolo"
          value={form.ruolo}
          onChange={handleChange}
          className="border rounded p-2 w-full"
        >
          <option value="cliente">Cliente</option>
          <option value="venditore">Venditore</option>
        </select>
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">
          Registrati
        </button>
      </form>
    </div>
  );
}
