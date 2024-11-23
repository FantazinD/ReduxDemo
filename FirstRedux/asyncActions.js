const redux = require("redux");
const { createStore } = require("redux");

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
        payload: "",
    };
};

const fetchUsersSuccess = () => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: "",
    };
};

const fetchUsersFailure = () => {
    return {
        type: FETCH_USERS_FAILED,
        payload: "",
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
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

const store = createStore(reducer);
