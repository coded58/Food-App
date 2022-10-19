import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const displayCart = () => {
    setShowCart(true);
  };
  const hideCart = () => {
    setShowCart(false);
  };
  return (
    <CartProvider>
      {showCart && <Cart onHideCart={hideCart} />}
      <Header onShowCart={displayCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

// React Portal: When you need to render a component at a particular section on the DOM,

export default App;
