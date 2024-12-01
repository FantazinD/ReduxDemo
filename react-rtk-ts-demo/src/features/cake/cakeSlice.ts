import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    numOfCakes: number;
};

const initialState: InitialState = {
    numOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state) => void state.numOfCakes--,
        restocked: (state, action: PayloadAction<number>) => void (state.numOfCakes += action.payload),
    },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
