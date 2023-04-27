import React, { useContext } from "react";
import classes from "./AvailableShoes.module.css";
import Card from "../UI/Card";
import ShoeItem from "./ShoeItem/ShoeItem";
import CartContext from "../../store/cart-context";



// const DUMMY_SHOES = [
//     {
//       id: 's1',
//       shoename: 'Navy blue',
//       description: '100% cotton',
//       price: 1299,
//       largesize: 'Large 9',
//       mediumsize: 'Medium 7',
//       smallsize: 'Small 5'
//     }
//   ];

const AvailableShoes = () => {
  const cartcntx = useContext(CartContext);
  const DUMMY_SHOES = cartcntx.DUMMY_SHOES;
  const shoesList = DUMMY_SHOES.map((shoe) => (
    <ShoeItem
      id={shoe.id}
      key={shoe.id}
      shoename={shoe.shoename}
      description={shoe.description}
      price={shoe.price}
      largesize = {shoe.largesize}
      mediumsize = {shoe.mediumsize}
      smallsize = {shoe.smallsize}
    />
  ));

  return (
    <section className={classes.shoes}>
      <Card>
        <ul>{shoesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableShoes;