const redux = require('redux') 
const createStore = redux.createStore

initialState = {
  name: 'Shubham Rajput',
  address: {
    street: '123 Wolf Street',
    city: 'London',
    state: 'SouthEastern England'
  }
}

const UPDATED_STREET = 'UPDATED_STREET'

const updatedStreet = (street) => {
  return{
    type: UPDATED_STREET,
    payload: street
  }
}

const streetReducer = (state=initialState, action) => {
  switch (action.type){
    case UPDATED_STREET: {
      return {
        ...state,
        address: {
          ...state.address,
          street: action.payload
        }
      }
    }
    default: return state
  }
}

const store = createStore(streetReducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()))
store.dispatch(updatedStreet('Dog street'))
unsubscribe();
