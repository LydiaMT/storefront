// TODO
// Action titles should be all imported (only ever use 1 string)

import { GET_PRODUCTS_SUCCESS, DECREMENT_INSTOCK, INCREMENT_INSTOCK, GET_PRODUCTS_PENDING } from './actions'

export const initialState = { 
  products: [] , 
  showLoading: true
};

export default (state = initialState, action = {}) => { // ACTION are evaluated in the switch case
  let { type, payload } = action;

  switch(type) { // REDUCER
    case GET_PRODUCTS_SUCCESS:{
      return { 
        ...state, 
        showLoading: false, 
        products: payload
      }
    }

    case GET_PRODUCTS_PENDING:{
      return { 
        ...state, 
        showLoading: true, 
      }
    }
      
    case DECREMENT_INSTOCK:{
      let products = state.products.map(product => {
        if(product._id === payload._id){
          return { 
            ...product, 
            inStock: product.inStock - 1}
        }
        return product;
      });
      return { 
        ...state,
        products };
    }

    case INCREMENT_INSTOCK:{
      let products = state.products.map(product => {
        if(product.item === payload.item){
          return { 
            ...product, 
            inStock: product.inStock + 1}
        }
        return product;
      });
      return { 
        ...state,
        products };
    }

    default:
      return state
  }
}
