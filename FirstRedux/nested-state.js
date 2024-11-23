const redux = require("redux");

const initialState = {
    name: "Paulo",
    address: {
        street: "123 Main St.",
        city: "Los Angeles",
        state: "CA",
    },
};

const STREET_UPDATED = "STREET_UPDATED";
const updateStreet = (street) => ({
    type: STREET_UPDATED,
    payload: street,
});

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case STREET_UPDATED:
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload,
                },
            };
        default:
            return state;
    }
};

const store = redux.createStore(reducer);
console.log("Initial State ", store.getState());

const unsubscribe = store.subscribe(() => console.log("Update State", store.getState()));

store.dispatch(updateStreet("124 Main St."));

unsubscribe();
