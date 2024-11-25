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
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
