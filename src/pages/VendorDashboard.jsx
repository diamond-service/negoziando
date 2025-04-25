import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import React from "react";

export default function VendorDashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          Ciao, {user?.nome || 'Venditore'}!
        </h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4">Dashboard Venditore</h2>
        <p>Qui puoi gestire i tuoi prodotti e visualizzare le tue vendite.</p>
      </div>
    </div>
  );
}
