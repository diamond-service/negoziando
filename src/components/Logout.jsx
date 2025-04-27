// src/components/Logout.jsx

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  if (!user) return null; // Se non loggato, non mostra il pulsante

  return (
    <button
      onClick={handleLogout}
      className="bg-black text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
    >
      Logout
    </button>
  );
}
