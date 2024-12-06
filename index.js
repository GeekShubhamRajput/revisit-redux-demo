const ORDER_CAKE = 'ORDER_CAKE'

function orderCake(){
  return {
    type: ORDER_CAKE,
    payload: 1
  }
}

initialState = {
  numOfCakes: 10
}

const cakeReducer = (state=initialState, action) => {
  switch(action.type){
    case ORDER_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 }
    default: return state
  }
} 
