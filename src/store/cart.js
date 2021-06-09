// This will be an object or array that holds the titles of the items in the cart
export const initialState = {
  cart: [], 
  totalItems:0
}

export default (state = initialState, action) => {
  let { type, payload } = action;
  console.log("=====PAYLOAD=====", payload)
  switch(type) {
    case 'ADD_ITEM':{
      let totalItems = state.totalItems + 1;
      let cart = [ ...state.cart, payload ]
      // const itemInCart = cart.find(val => val.item === payload.item)
      // console.log("ITEM IN CART", itemInCart)
      // let itemInCartIndex = cart.findIndex(itemInCart)
      // cart[itemInCartIndex].total + 1
      return { totalItems, cart };
    }
    case 'REMOVE_ITEM':{
      let totalItems = state.totalItems - 1;
      let cart = [ ...state.cart, payload ]
      return { totalItems, cart };
    }
    default:
      return state
  }
}

export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item
  }
}

export const removeItem = (item) => {
  return {
    type: 'REMOVE_ITEM',
    payload: item
  }
}