const CAKE_ORDERED = "CAKE_ORDERED";

//Action Creator: a function that returns an action (orderCake function)
const orderCake = () => {
    type: CAKE_ORDERED;
    quantity: 1;
};
