import React from 'react';
import classes from './card.module.css';

const Card = (props) => {
    return (
        <div className = {`${classes.cardWrapper} ${props.className ? props.className : ''}`}>
            {props.children}
        </div>
    );
};

export default Card;