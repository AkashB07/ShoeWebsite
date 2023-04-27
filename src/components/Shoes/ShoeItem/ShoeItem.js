import classes from './ShoeItem.module.css';
import ShoeItemForm from './ShoeItemForm';


const ShoeItem = (props) => {
  const price =  `$ ${props.price.toFixed(2)}`;
    return (
    <li className={classes.shoe}>
      <div>
        <h3>{props.shoename}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <div className={classes.largesize}>{props.largesize}</div>
        <div className={classes.mediumsize}>{props.mediumsize}</div>
        <div className={classes.smallsize}>{props.smallsize}</div>
      </div>
      <div>
        <ShoeItemForm  id={props.id}  item={props}/>
      </div>
    </li>
  );
};

export default ShoeItem;