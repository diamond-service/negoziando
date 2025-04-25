export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <h1 className="text-4xl font-bold mb-4 text-blue-600">
        Benvenuto su Negoziando Livorno
      </h1>
      <p className="text-gray-600 mb-6 text-center">
        Scopri i migliori negozi locali e acquista in sicurezza!
      </p>
      <div className="flex gap-4">
        <a
          href="/login"
          className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          Accedi
        </a>
        <a
          href="/register"
          className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
        >
          Registrati
        </a>
      </div>
    </div>
  );
}
