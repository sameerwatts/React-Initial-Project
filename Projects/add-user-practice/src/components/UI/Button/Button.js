import React from 'react';
import classes from './button.module.css';

const Button = (props) => {
    return <button onClick={props.onClick} className={classes.addUserBtn} type={props.type}>{props.children}</button>
};

export default Button;