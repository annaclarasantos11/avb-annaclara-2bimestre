import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";

export default function Favoritos() {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">FAVORITOS</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-600">Nenhum item favoritado.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.map((item) => (
            <div key={item.id} className="border rounded p-4 shadow">
              <h2 className="text-xl font-semibold">{item.nome}</h2>
              <p>{item.descricao}</p>
              <button
                onClick={() => removeFromFavorites(item.id)}
                className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remover
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
