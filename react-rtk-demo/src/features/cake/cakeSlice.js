import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    numOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers: {
        ordered: (state) => void state.numOfCakes--,
        restocked: (state, action) => void (state.numOfCakes += action.payload),
    },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
