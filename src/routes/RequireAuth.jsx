import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import React from "react";

export function RequireAuth({ children }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
