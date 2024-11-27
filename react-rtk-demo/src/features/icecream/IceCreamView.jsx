import React from "react";
import { useSelector } from "react-redux";

const IceCreamView = () => {
    const numOfIceCreams = useSelector((state) => {
        console.log(state);
        return state.iceCream.numOfIceCreams;
    });

    return (
        <div>
            <h2>Number of ice creams - {numOfIceCreams}</h2>
            <button>Order ice cream</button>
            <button>Restock ice creams</button>
        </div>
    );
};

export default IceCreamView;
