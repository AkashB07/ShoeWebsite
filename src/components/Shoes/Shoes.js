import { Fragment } from "react";
import AddShoes from "./AddShoes"
import AvailableShoes from "./AvailableShoes";
const Shoes = (props) => {
    console.log(props)
    return (
        <Fragment>
            <AddShoes/>
            <AvailableShoes/>
        </Fragment>
    );
};

export default Shoes;