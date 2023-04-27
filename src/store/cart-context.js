import React from "react";

const CartContext = React.createContext({
    items: [],
    DUMMY_SHOES: [],
    addShoe: (shoe) => {},
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;