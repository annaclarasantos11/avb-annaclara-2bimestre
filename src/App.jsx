import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { FavoritesProvider } from "./context/FavoritesContext";
import AppRoutes from "./routes/AppRoutes";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Favorites from "./pages/Favorites/Favorites";

function App() {
  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<Details />} />
      <Route path="/favoritos" element={<Favorites />} />
    </Routes>
      
)
}

export default App;
