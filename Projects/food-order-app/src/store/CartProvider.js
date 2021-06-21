import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [showCart, setShowCart] = useState(false);
  const addItems = () => {};
  const removeItems = () => {};


  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  const cartContext = {
    showCart,
    items: [],
    totalAmount: 0,
    addItems,
    removeItems,
    showCartHandler,
    hideCartHandler
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
