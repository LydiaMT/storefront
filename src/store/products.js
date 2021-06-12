export const initialState = { products: [] };

export default (state = initialState, action) => { // ACTION are evaluated in the switch case
  let { type, payload } = action;

  switch(type) { // REDUCER
    case 'GET_PRODUCTS':
      return { products: payload }
      
    case 'DECREMENT_INSTOCK':{
      let products = state.products.map(product => {
        if(product._id === payload._id){
          return { ...product, inStock: product.inStock - 1}
        }
        return product;
      });
      return { products };
    }

    case 'INCREMENT_INSTOCK':{
      let products = state.products.map(product => {
        if(product.item === payload.item){
          return { ...product, inStock: product.inStock + 1}
        }
        return product;
      });
      return { products };
    }

    default:
      return state
  }
}

