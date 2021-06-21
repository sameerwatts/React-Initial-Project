import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = () => {
  const ctx = useContext(CartContext);
  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {}
  const cartItemRemoveHandler = (id) => {}

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => {
        const {id, price, name, amount} = item;
       return <CartItem
          name={name}
          amount={amount}
          price={price}
          key={id}
          onAdd={() => cartItemAddHandler(item)}
          onRemove={() => cartItemRemoveHandler(id)}
        />;
      })}
    </ul>
  );

  const cartContent = (
    <Modal>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          onClick={ctx.hideCartHandler}
          className={classes["button--alt"]}
        >
          Cancel
        </button>
        {!!ctx.items.length && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
  return cartContent;
};

export default Cart;
