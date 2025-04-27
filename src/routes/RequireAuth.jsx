// src/routes/RequireAuth.jsx

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RequireAuth({ children, ruoloRichiesto }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Se vogliamo controllare ruoli
  if (ruoloRichiesto && user.user_metadata?.ruolo !== ruoloRichiesto) {
    return <Navigate to="/" replace />;
  }

  return children;
}
