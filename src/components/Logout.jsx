import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
    window.location.reload(); // Ricarica la pagina per aggiornare la Navbar
  };

  if (!user) return null;

  return (
    <button
      onClick={handleLogout}
      className="text-black font-semibold hover:underline hover:text-white transition"
    >
      Logout
    </button>
  );
}
