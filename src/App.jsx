import "./App.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
    <FavoritesProvider>
      <AppRoutes />
    </FavoritesProvider>
    </>
  );
}

export default App;
