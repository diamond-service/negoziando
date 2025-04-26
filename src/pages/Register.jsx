import { Link } from "react-router-dom";

export default function Register() {
  return (
    <section className="flex justify-center items-center min-h-[70vh]">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Crea il tuo account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-gray-600 mb-1">Nome completo</label>
            <input
              type="text"
              placeholder="Inserisci il tuo nome"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

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
              placeholder="Crea una password"
              className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <button
            type="submit"
            className="button-primary w-full"
          >
            Registrati
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-6 text-center">
          Hai già un account?{" "}
          <Link
            to="/login"
            className="text-yellow-500 hover:underline"
          >
            Accedi
          </Link>
        </p>
      </div>
    </section>
  );
}
