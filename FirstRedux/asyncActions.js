const redux = require("redux");
const { createStore, applyMiddleware } = require("redux");
const { thunk } = require("redux-thunk");
const axios = require("axios");

const initialState = {
    loading: false,
    users: [],
    error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
        payload: true,
    };
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    };
};

const fetchUsersFailure = (errorMessage) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: errorMessage,
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: action.payload,
            };
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: "",
            };
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest());
        axios
            .get(`https://jsonplaceholder.typicode.com/users`)
            .then((response) => {
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch((error) => {
                dispatch(fetchUsersFailure(error.message));
            });
    };
};

const store = createStore(reducer, applyMiddleware(thunk));

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(fetchUsers());

setTimeout(() => {
    unsubscribe();
}, 1000);
