const redux = require('redux')
const produce = require('immer').produce
const createStore = redux.createStore

initialState = {
  name: 'Shubham Rajput',
  address: {
    street: '111, Wolf Street',
    city: 'London',
    country: 'England'
  }
}

const UPDATED_STREET = 'UPDATED_STREET'

const updateStreet = (street) => {
  return {
    type: UPDATED_STREET,
    payload: street 
  }
}

const streetReducer = (state=initialState, action) => {
  switch(action.type){
    case UPDATED_STREET: {
      return produce(state, (draft) => {
        draft.address.street = action.payload
      })
    }
    default: return state
  }
}

const store = createStore(streetReducer)
console.log('Initial State', store.getState())
const unsubscribe = store.subscribe(() => {
  console.log('Updated State', store.getState())
})
store.dispatch(updateStreet('RYSA Square'))
unsubscribe()
