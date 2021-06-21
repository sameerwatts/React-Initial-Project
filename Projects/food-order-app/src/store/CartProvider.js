import React, { useReducer, useState } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      items: state.items.concat(action.item), //state.items.push(action.item)
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  }
  if (action.type === "REMOVE") {
    const itemsAfterRemoving = state.items.filter(
      (singleItem) => singleItem.id !== action.id
    );
    return { items: itemsAfterRemoving, totalAmount: state.totalAmount - action.item.price * action.item.amount };
  }
  return { items: [], totalAmount: 0 };
};

const CartProvider = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItems = (item) => {
    dispatchCart({ type: "ADD", item });
  };
  const removeItems = (id) => {
    dispatchCart({ type: "REMOVE", id });
  };

  const showCartHandler = () => {
    setShowCart(true);
  };
  const hideCartHandler = () => {
    setShowCart(false);
  };

  const cartContext = {
    showCart,
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItems,
    removeItems,
    showCartHandler,
    hideCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
