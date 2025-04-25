import { Link } from "react-router-dom";

const prodottiMock = [
  {
    id: 1,
    nome: "Maglietta Livorno Style",
    prezzo: 25,
    immagine: "https://placehold.co/300x200?text=Maglietta",
  },
  {
    id: 2,
    nome: "Tazza Personalizzata",
    prezzo: 15,
    immagine: "https://placehold.co/300x200?text=Tazza",
  },
  {
    id: 3,
    nome: "Zaino Artigianale",
    prezzo: 45,
    immagine: "https://placehold.co/300x200?text=Zaino",
  },
];

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        Benvenuto su Negoziando Livorno
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {prodottiMock.map((prodotto) => (
          <div key={prodotto.id} className="card flex flex-col items-center p-4">
            <img
              src={prodotto.immagine}
              alt={prodotto.nome}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-700 mb-2">{prodotto.nome}</h2>
            <p className="text-lg font-bold text-black mb-4">{prodotto.prezzo} €</p>
            <Link
              to="/login"
              className="button-primary w-full text-center"
            >
              Scopri di più
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
