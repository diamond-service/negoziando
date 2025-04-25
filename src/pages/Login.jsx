import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import React from "react";

export default function Login() {
  return (
    <section className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Accedi al tuo account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              placeholder="Inserisci la tua email"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
              type="password"
              placeholder="Inserisci la tua password"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="button-primary w-full"
          >
            Accedi
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Non hai un account?{" "}
          <Link
            to="/register"
            className="text-yellow-500 hover:underline"
          >
            Registrati
          </Link>
        </p>
      </div>
    </section>
  );
}
