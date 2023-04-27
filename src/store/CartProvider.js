import React, {useState} from "react";
import CartContext from "./cart-context";

const CartProvider = props => {
    const [items, updateItems] = useState([]);

    const [DUMMY_SHOES, updateDummyShoe] = useState([{
        id: 's1',
        shoename: 'Navy blue Aramanis Shoe',
        description: '100% cotton',
        price: 1299,
        largesize: 'Large 9',
        mediumsize: 'Medium 7',
        smallsize: 'Small 5'
      },
      {
        id: 's2',
        shoename: 'Guccui  Shoe',
        description: '100% cotton',
        price: 1999,
        largesize: 'Large 9',
        mediumsize: 'Medium 7',
        smallsize: 'Small 5'
      }]);
   
      
    const addShoeToPageHandler = shoe => {
        updateDummyShoe([...DUMMY_SHOES, shoe])
    }
    const addItemToCartHandler = item => {
        updateItems([...items, item]);
    };

    const removeItemFromCartHandler = id => {
        updateItems(items.filter((item) => item.id !==id));
    };

    const cartContext = {
        items: items,
        DUMMY_SHOES: DUMMY_SHOES,
        addShoe: addShoeToPageHandler,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;