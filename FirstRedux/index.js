const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

//Action Creator: a function that returns an action (orderCake function)
const orderCake = (qty = 1) => {
    return {
        type: CAKE_ORDERED,
        payload: qty,
    };
};

const restockCake = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: qty,
    };
};

const orderIceCream = (qty = 1) => {
    return {
        type: ICECREAM_ORDERED,
        payload: qty,
    };
};

const restockIceCream = (qty = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty,
    };
};

// appState
// const initialState = {
//     numberOfCakes: 10,
//     numberOfIceCreams: 20,
// };

const initialCakeState = {
    numberOfCakes: 10,
};

const initialIceCreamState = {
    numberOfIceCreams: 20,
};

//Reducer: (previousState, action) => newState
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload,
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams - action.payload,
            };
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCreams: state.numberOfIceCreams + action.payload,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
const iceCreamStore = createStore(iceCreamReducer);
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => console.log("Update state ", store.getState()));

// store.dispatch(orderCake());
// store.dispatch(restockCake(3));
// store.dispatch({
//     type: CAKE_ORDERED,
// });

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();
actions.restockCake(3);
actions.orderIceCream();
actions.restockIceCream(3);

unsubscribe();
