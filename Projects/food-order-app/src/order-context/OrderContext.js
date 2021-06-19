import { createContext } from 'react';

const OrderContext = createContext({
    showCart: false,
    // toggleCartHandler: () => {}
    showCartHandler: () => {},
    hideCartHandler: () => {},
})

export default OrderContext;