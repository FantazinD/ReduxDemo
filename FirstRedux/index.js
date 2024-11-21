const CAKE_ORDERED = "CAKE_ORDERED";

//Action Creator: a function that returns an action (orderCake function)
const orderCake = () => {
    type: CAKE_ORDERED;
    quantity: 1;
};

// appState
const initialState = {
    numberOfCakes: 10,
};

//Reducer: (previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - 1,
            };
        default:
            return state;
    }
};
