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
      let cart = [ ...state.cart ]
      let addToIdx = cart.findIndex((product)  => product.item === payload.item);
      if(addToIdx > -1){
        cart[addToIdx].total++
      } else {
        cart.push({...payload, total: 1})
      }
      return { 
        ...state,
        totalItems, 
        cart 
      };
    }
    case REMOVE_ITEM_FROM_CART:{
      let totalItems = state.totalItems - 1;
      let cart = [ ...state.cart ]
      let removeIdx = cart.findIndex((product)  => product.item === payload.item);
      if(removeIdx > -1){
        cart[removeIdx].total--;
        if(cart[removeIdx].total === 0){
          cart.splice(removeIdx, 1);
        }
      }
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