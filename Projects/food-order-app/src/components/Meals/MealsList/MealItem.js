import React from "react";
import classes from './MealItem.module.css';

const MealItem = (props) => {
    const {name, description, price} = props.meals;
  return (
    <li className={classes.meal}>
        <div>
          <h2>{name}</h2>
          <div className={classes.description}>{description}</div>
          <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
        </div>
        <div></div>
    </li>
  );
};

export default MealItem;
