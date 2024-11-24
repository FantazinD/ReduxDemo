const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

console.log("Initial state ", store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

setTimeout(unsubscribe, 100);
