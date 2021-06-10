export const initialState = { products: [] };

// ------ WHEN WHOLE FILE IS IMPORTED ------
// Switch cases => take in prior state
export default (state = initialState, action) => { // ACTION are evaluated in the switch case
  let { type, payload } = action;

  switch(type) { // REDUCER
    case 'GET_ITEMS':
      return { products: payload }
      
    case 'ADD_ITEM':{
      let products = state.products.map(product => {
        if(product._id === payload._id){
          return { ...product, total: product.total + 1, inStock: product.inStock - 1}
        }
        return product;
      });
      return { products };
    }

    case 'REMOVE_ITEM':{
      let products = state.products.map(product => {
        if(product.item === payload.item){
          return { ...product, total: product.total - 1, inStock: product.inStock + 1}
        }
        return product;
      });
      return { products };
    }
    default:
      return state
  }
}

