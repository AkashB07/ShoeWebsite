import { Fragment } from "react";
import ShoesSummary from "./ShoesSummary";
import AvailableShoes from "./AvailableShoes";
const Shoes = (props) => {
    console.log(props)
    return (
        <Fragment>
            <ShoesSummary/>
            <AvailableShoes/>
        </Fragment>
    );
};

export default Shoes;