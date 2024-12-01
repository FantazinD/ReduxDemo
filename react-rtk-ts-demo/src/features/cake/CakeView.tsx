import { useState } from "react";
import { ordered, restocked } from "./cakeSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const CakeView = () => {
    const [value, setValue] = useState(1);
    const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(restocked(value))}>Restock cakes</button>
        </div>
    );
};

export default CakeView;
