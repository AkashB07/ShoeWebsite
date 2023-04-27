import React, { useContext } from 'react';
import classes from './ShoeItemForm.module.css';
import CartContext from '../../../store/cart-context';

const ShoeItemForm = (props) => {
    const cartcntxt = useContext(CartContext);

    const addItemToCartLarge = (event) => {
        event.preventDefault();
        cartcntxt.addItem({...props.item, largequantity: 1, mediumquantity: 0, smallquantity: 0, quantity: 1});
    }

    const addItemToCartMedium = (event) => {
        event.preventDefault();
        cartcntxt.addItem({...props.item, largequantity: 0, mediumquantity: 1, smallquantity: 0, quantity: 1});
    }

    const addItemToCartSmall = (event) => {
        event.preventDefault();
        cartcntxt.addItem({...props.item, largequantity: 0, mediumquantity: 0, smallquantity: 1, quantity: 1});
    }


    return(
        <form className={classes.form}>
            <button onClick={addItemToCartLarge}>Buy {props.item.largesize}</button>
            <button onClick={addItemToCartMedium}>Buy {props.item.mediumsize}</button>
            <button onClick={addItemToCartSmall}>Buy {props.item.smallsize}</button>
        </form>
    )
};

export default ShoeItemForm;