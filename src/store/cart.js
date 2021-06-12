export const initialState = {
  cart: [], 
  totalItems:0
}

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'ADD_ITEM_TO_CART':{
      let totalItems = state.totalItems + 1;
      let cart = [ ...state.cart, payload ]
      return { totalItems, cart };
    }
    case 'REMOVE_ITEM_FROM_CART':{
      let totalItems = state.totalItems - 1;
      let cart = [ ...state.cart ]
      let removeIdx = cart.map(function(product) { return product.item }).indexOf(payload.item)
      cart.splice(removeIdx, 1)
      return { totalItems, cart };
    }
    default:
      return state
  }
}

export const addItemToCart = (item) => {
  return {
    type: 'ADD_ITEM_TO_CART',
    payload: item
  }
}

export const removeItemFromCart = (item) => {
  return {
    type: 'REMOVE_ITEM_FROM_CART',
    payload: item
  }
}