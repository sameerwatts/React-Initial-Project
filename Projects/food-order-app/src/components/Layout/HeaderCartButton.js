import React, { useContext } from "react";
import OrderContext from "../../order-context/OrderContext";
import CartIcon from "./CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(OrderContext);
  return (
    <button onClick={ctx.showCartHandler} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
