import { useContext } from "react";
import { FavoritesContext } from "../../context/FavoritesContext";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  console.log(favorites)

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Meus Favoritos</h1>
      {favorites.length === 0 ? (
        <p>Você não favoritou nada ainda.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {favorites.map((poke) => (
            <div key={poke.id} className="border p-4 rounded text-center">
              <img src={poke.image} alt={poke.name} className="w-20 mx-auto" />
              <h2 className="capitalize mt-2 font-semibold">{poke.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;

