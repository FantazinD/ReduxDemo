const redux = require("redux");
const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

//Action Creator: a function that returns an action (orderCake function)
const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1,
    };
};

const restockCake = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    };
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
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes + action.payload,
            };
        default:
            return state;
    }
};

const store = createStore(reducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => console.log("Update state ", store.getState()));

store.dispatch(orderCake());
store.dispatch(restockCake(3));
store.dispatch({
    type: CAKE_ORDERED,
});

unsubscribe();
