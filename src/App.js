import "./App.css";
import ProductList from "./Components New/ProductCard/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import { ExtraEvents } from "./BasicEvents/ExtraEvents";
import NavBar from "./Components New/Navbar/NavBar";
import InputEvent from "./BasicEvents/InputEvent";
function App() {
  return (
    <div>
      <InputEvent />
      {/* <NavBar />
      
      <ProductList />
      <ExtraEvents /> */}
    </div>
  );
}

export default App;
