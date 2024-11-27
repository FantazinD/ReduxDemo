const { createSlice } = require("@reduxjs/toolkit");

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

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
