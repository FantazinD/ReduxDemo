import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";

type InitialState = {
    numOfIceCreams: number;
};

const initialState: InitialState = {
    numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state) => void state.numOfIceCreams--,
        restocked: (state, action: PayloadAction<number>) => void (state.numOfIceCreams += action.payload),
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIceCreams--;
        });
    },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
