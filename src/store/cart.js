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
      // set all products added to the cart to a count of 1
      // if product.item is already in the cart
      // increment that quantity
      return { 
        ...state,
        totalItems, 
        cart 
      };
    }
    case REMOVE_ITEM_FROM_CART:{
      // If the user wants to remove all of those items from the cart, add those counts back to the product
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