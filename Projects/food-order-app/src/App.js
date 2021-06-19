import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import OrderContext from "./order-context/OrderContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };
  return (
    <OrderContext.Provider value={{ showCart, showCartHandler, hideCartHandler }}>
      {showCart && <Cart />}
      <Header />
      <main>
        <Meals />
      </main>
    </OrderContext.Provider>
  );
}

export default App;
