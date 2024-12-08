const redux = require('redux');
const createStore = redux.createStore;

const ORDER_CAKE = 'ORDER_CAKE';
const RESTOCK_CAKE = 'RESTOCK_CAKE';

function orderCake() {
  return {
    type: ORDER_CAKE
  };
}

function restockCake(qty=1) {
  return {
    type: RESTOCK_CAKE,
    payload: qty
  };
}

const initialState = {
  numOfCakes: 10,
  payload: 1
};



const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    case RESTOCK_CAKE:
      return { ...state, numOfCakes: state.numOfCakes + action.payload };
    default:
      return state;
  }
};

const store = createStore(cakeReducer);
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('Updated State', store.getState())
);

// Invoke the `orderCake` function to get the action object
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockCake(4));

unsubscribe();
