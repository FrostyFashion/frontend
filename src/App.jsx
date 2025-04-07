import Navbar from "./Components/Navbar/Navbar";
import { Route, BrowserRouter as Onion, Routes } from "react-router";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/ShopCategory";
import Cart from "./Pages/Cart";
import Auth from "./Pages/Auth";

function App() {
  return (
    <div>
      <Onion>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory category="men" />} />
          <Route path="/women" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/produt" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Onion>
    </div>
  );
}

export default App;
