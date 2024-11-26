const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    numOfIceCreams: 10,
};

const iceCreamSlice = createSlice({
    name: "iceCream",
    initialState,
    reducers: {
        ordered: (state) => void state.numOfIceCreams--,
        restocked: (state, action) => void (state.numOfIceCreams += action.payload),
    },
    extraReducers: (builder) => {
        builder.addCase("cake/ordered", (state) => {
            state.numOfIceCreams--;
        });
    },
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
