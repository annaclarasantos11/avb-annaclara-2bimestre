import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} /> {/* nova rota */}
        <Route path="/" element={<Favoritos />} />
      </Routes>
    </Router>
  );
}

export default App;
