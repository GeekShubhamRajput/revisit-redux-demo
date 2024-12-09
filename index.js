const redux = require('redux');
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const ORDER_CAKE = 'ORDER_CAKE';
const RESTOCK_CAKE = 'RESTOCK_CAKE';
const ORDER_ICE_CREAM = 'ORDER_ICE_CREAM';
const RESTOCK_ICE_CREAM = 'RESTOCK_ICE_CREAM';

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

function orderIceCream() {
  return {
    type: ORDER_ICE_CREAM
  };
}

function restockIceCream(qty=1) {
  return {
    type: RESTOCK_ICE_CREAM,
    payload: qty
  };
}

const initialState = {
  numOfCakes: 10,
  numOfIceCream: 20,
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

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_ICE_CREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 };
    case RESTOCK_ICE_CREAM:
      return { ...state, numOfIceCream: state.numOfIceCream + action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({cake: cakeReducer, iceCream: iceCreamReducer})

// const store = createStore(cakeReducer);
const store = createStore(rootReducer)
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('Updated State', store.getState())
);

// Invoke the `orderCake` function to get the action object
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(4));

// const actions = bindActionCreators({orderCake, restockCake}, store.dispatch )
// actions.orderCake()
// actions.orderCake()
// actions.orderCake()
// actions.orderCake()
// actions.restockCake(4)

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(4))
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(orderIceCream())
store.dispatch(restockIceCream(4))

unsubscribe();
