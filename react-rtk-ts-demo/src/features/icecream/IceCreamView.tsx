import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IceCreamView = () => {
    const numOfIceCreams = useSelector((state: any) => state.iceCream.numOfIceCreams);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of ice creams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>
            <button onClick={() => dispatch(restocked(5))}>Restock ice creams</button>
        </div>
    );
};

export default IceCreamView;
