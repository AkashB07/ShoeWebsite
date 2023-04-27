import React, { useContext } from "react";
import classes from "./AvailableShoes.module.css";
import Card from "../UI/Card";
import ShoeItem from "./ShoeItem/ShoeItem";
import CartContext from "../../store/cart-context";

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