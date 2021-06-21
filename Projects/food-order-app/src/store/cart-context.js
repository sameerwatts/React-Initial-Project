import React from 'react';

const CartContext = React.createContext({
    showCart: false,
    items: [],
    totalAmount: 0,
    addItems: () => {},
    removeItems: () => {},
    showCartHandler: () => {},
    hideCartHandler: () => {},
});

export default CartContext;