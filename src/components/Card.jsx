import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

export default function Card({ pokemon, index }) {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext);
  const isFavorite = favorites.some((fav) => fav.name === pokemon.name);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromFavorites(pokemon.id ?? index + 1); // ID fallback caso não venha da API
    } else {
      addToFavorites({ ...pokemon, id: pokemon.id ?? index + 1 });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition text-center">
      <Link to={`/pokemon/${pokemon.name}`}>
        <p className="text-lg font-semibold capitalize">{pokemon.name}</p>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
          alt={pokemon.name}
          className="w-20 mx-auto mt-2"
        />
      </Link>

      <button
        onClick={handleFavoriteClick}
        className="mt-2 text-sm text-red-500"
      >
        {isFavorite ? "💖 Remover" : "🤍 Favoritar"}
      </button>
    </div>
  );
}
