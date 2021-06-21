import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from './MealItem.module.css';
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
    const {name, description, price, id} = props.meals;
    const ctx = useContext(CartContext);
   

    const addToCartHandler =  (amount) => {
      ctx.addItems({id, price, name, amount})
    }
  return (
    <li className={classes.meal}>
        <div>
          <h2>{name}</h2>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
        </div>
        <div><MealItemForm onAddToCart={addToCartHandler}  id={id}/></div>
    </li>
  );
};

export default MealItem;
