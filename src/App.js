import "./App.css";
import NotFound from "./components/NotFound.jsx";
import { ethers } from "ethers";
import Dappazon from "./abis/Dappazon.json"
import ProductsAll from "./components/productsAll.jsx";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/cart.jsx";
import Order from "./components/order.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [cart, setCart] = useState([]);
  useEffect(() => alert("Welcome to Amazon3!"), []);
  return (
    <Routes>
      <Route exact path="/" element={<Navbar cartCount={cart.length} />}>
        <Route
          exact
          path="/"
          element={<ProductsAll cart={cart} setCart={setCart} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/order" element={<Order />} />
        <Route exact path="*" element={<NotFound />} />
      </Route>
      <Route path="/order" element={<Order cart={cart} />} />
    </Routes>
  );
}

export default App;
