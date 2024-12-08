const redux = require('redux');
const createStore = redux.createStore;

const ORDER_CAKE = 'ORDER_CAKE';

function orderCake() {
  return {
    type: ORDER_CAKE,
    payload: 1
  };
}

const initialState = {
  numOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
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

unsubscribe();
