import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return 
  (<FavoritesProvider>
        <BrowserRouter> 
        <AppRoutes />
          {/* <App /> */}
        </BrowserRouter>
      </FavoritesProvider>
)
}

export default App;
