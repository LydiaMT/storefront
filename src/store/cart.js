export const initialState = {
  cart: [], 
  totalItems:0
}

import {ADD_ITEM_TO_CART, REMOVE_ITEM_FROM_CART} from './actions'

export default (state = initialState, action = {}) => {
  let { type, payload } = action;

  switch(type) {
    case ADD_ITEM_TO_CART:{
      let totalItems = state.totalItems + 1;
      let cart = [ ...state.cart, payload ]
      return { 
        ...state,
        totalItems, 
        cart 
      };
    }
    case REMOVE_ITEM_FROM_CART:{
      let totalItems = state.totalItems - 1;
      let cart = [ ...state.cart ]
      let removeIdx = cart.map(function(product) { return product.item }).indexOf(payload.item)
      cart.splice(removeIdx, 1)
      return { 
        ...state,
        totalItems, 
        cart 
      };
    }
    default:
      return state
  }
}