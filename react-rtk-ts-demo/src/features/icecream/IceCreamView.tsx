import { ordered, restocked } from "./iceCreamSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const IceCreamView = () => {
    const numOfIceCreams = useAppSelector((state: any) => state.iceCream.numOfIceCreams);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h2>Number of ice creams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>
            <button onClick={() => dispatch(restocked(5))}>Restock ice creams</button>
        </div>
    );
};

export default IceCreamView;
