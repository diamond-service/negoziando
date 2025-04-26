import { Link } from "react-router-dom";

const categorie = [
  { nome: "Abbigliamento", immagine: "https://via.placeholder.com/300x200?text=Abbigliamento" },
  { nome: "Tecnologia", immagine: "https://via.placeholder.com/300x200?text=Tecnologia" },
  { nome: "Casa", immagine: "https://via.placeholder.com/300x200?text=Casa" },
  { nome: "Cibo e Bevande", immagine: "https://via.placeholder.com/300x200?text=Cibo" },
];

export default function Home() {
  return (
    <div className="container py-8">
      {/* Titolo Home */}
      <h1 className="text-3xl font-bold text-yellow-500 mb-10 text-center">
        Benvenuto su Negoziando Livorno
      </h1>

      {/* Sezione Categorie */}
      <h2 className="text-2xl font-bold mb-6">Categorie</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categorie.map((categoria, index) => (
          <Link
            key={index}
            to={`/categoria/${categoria.nome.toLowerCase()}`}
            className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
          >
            <img
              src={categoria.immagine}
              alt={categoria.nome}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{categoria.nome}</h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Sezione Prodotti in evidenza */}
      <h2 className="text-2xl font-bold mt-16 mb-6">Prodotti in Evidenza</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Qui potrai in futuro caricare i prodotti dinamicamente */}
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src="https://via.placeholder.com/300x200?text=Maglietta" alt="Maglietta" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="font-bold text-gray-800">Maglietta Livorno</h3>
            <p className="text-yellow-500 font-semibold mt-2">€25,00</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src="https://via.placeholder.com/300x200?text=Tazza" alt="Tazza" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="font-bold text-gray-800">Tazza Personalizzata</h3>
            <p className="text-yellow-500 font-semibold mt-2">€15,00</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow hover:shadow-lg transition">
          <img src="https://via.placeholder.com/300x200?text=Zaino" alt="Zaino" className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="font-bold text-gray-800">Zaino Artigianale</h3>
            <p className="text-yellow-500 font-semibold mt-2">€45,00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
