import { useParams } from "react-router-dom";

export default function Categoria() {
  const { categoria } = useParams();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-yellow-500 mb-10 text-center capitalize">
        {categoria.replace("-", " ")}
      </h1>

      {/* In futuro potrai caricare dinamicamente i prodotti da Supabase */}
      <p className="text-center text-gray-500">
        Qui appariranno i prodotti della categoria <strong>{categoria}</strong>.
      </p>
    </div>
  );
}
