import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import Favorites from "../pages/Favorites/Favorites"; // Caminho certo

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:name" element={<Details />} />
        <Route path="/favoritos" element={<Favorites />} /> {/* ESSA ROTA */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
