import React, { useContext } from "react";
import OrderContext from "../../order-context/OrderContext";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "c2",
          name: "🍕 Pizza 🍕",
          amount: 2,
          price: 16.45,
        },
      ].map((item) => (
        <li key="d1">{item.name}</li>
      ))}
    </ul>
  );

  const ctx = useContext(OrderContext);

  const cartContent = (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$23.55</span>
      </div>
      <div className={classes.actions}>
        <button onClick={ctx.hideCartHandler} className={classes["button--alt"]}>Cancel</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
  return cartContent;
};

export default Cart;
