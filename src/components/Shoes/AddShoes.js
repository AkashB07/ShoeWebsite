import React, { useContext } from 'react';
import classes from './AddShoes.module.css';
import Input from '../UI/Input';
import CartContext from '../../store/cart-context';

const ShoesSummary = (props) => {
  const cartcntxt = useContext(CartContext);

  const addProduct = (event)=> {
    event.preventDefault();
    const shoe = {
      id: Math.round().toLocaleString,
      shoename: event.target.shoename.value,
      description: event.target.description.value,
      price: (+event.target.price.value),
      largesize: event.target.largesize.value,
      mediumsize: event.target.mediumsize.value,
      smallsize: event.target.smallsize.value
    }
    cartcntxt.addShoe(shoe);
   
    event.target.shoename.value = '';
    event.target.description.value = '';
    event.target.price.value = '';
    event.target.largesize.value = '';
    event.target.mediumsize.value = '';
    event.target.smallsize.value = '';
  }
  return (
    <section className={classes.summary}>
      <form className={classes.form} onSubmit={addProduct}>

        <Input label='Shoe Name' input={{ name: 'shoename', type: 'text'}} />
        <Input label='Description' input={{ name: 'description', type: 'text'}} />
        <Input label='Price' input={{ name: 'price', type: 'number'}} />
        <Input label='Large' input={{ name: 'largesize', type: 'text'}} />
        <Input label='Medium' input={{ name: 'mediumsize', type: 'text'}} />
        <Input label='Small' input={{ name: 'smallsize', type: 'text'}} />
 
        <button>Add Product</button>
      </form>
    </section>
  );
};


export default ShoesSummary;