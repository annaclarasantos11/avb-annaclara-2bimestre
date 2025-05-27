import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function toggleFavorite(item) {
    const exists = favorites.find((fav) => fav.name === item.name);
    if (exists) {
      setFavorites(favorites.filter((fav) => fav.name !== item.name));
    } else {
      setFavorites([...favorites, item]);
    }
  }

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
