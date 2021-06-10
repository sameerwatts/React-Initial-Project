import React, { Fragment } from 'react';
import imgSrc from '../../assets/meals.jpeg';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>
                <img src={imgSrc} alt='Delicious food is available here'/>
            </div>
        </Fragment>
    );
};

export default Header;