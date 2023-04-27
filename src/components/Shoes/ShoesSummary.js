import React, { useContext } from 'react';
import classes from './ShoesSummary.module.css';
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
      price: event.target.price.value,
      largesize: event.target.largesize.value,
      mediumsize: event.target.mediumsize.value,
      smallsize: event.target.smallsize.value
    }
    cartcntxt.addShoe({
      id: Math.round().toLocaleString,
      shoename: event.target.shoename.value,
      description: event.target.description.value,
      price: (+event.target.price.value),
      largesize: event.target.largesize.value,
      mediumsize: event.target.mediumsize.value,
      smallsize: event.target.smallsize.value
    })
    console.log(shoe);
    console.log(props);

    // console.log(event.target.shoename.value)
    // console.log(event.target.description.value)
    // console.log(event.target.price.value)
    // console.log(event.target.largesize.value)
    // console.log(event.target.mediumsize.value)
    // console.log(event.target.smallsize.value)
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