let initialState = {
  products: [
    { item: 'computer', category: 'Electronics', total: 0 },
    { item: 'pizza', category: 'Food', total: 0 },
    { item: 'monopoly', category: 'Toys', total: 0 }
  ],
  totalItems: 0
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'INCREMENT':{
      let totalItems = state.totalItems + 1;
      let products = state.products.map(product => {
        if(product.item === payload){
          return { item: product.item, total: product.total + 1}
        }
        return product;
      });
      return { totalItems, products };
    }
    case 'DECREMENT':{
      let totalItems = state.totalItems - 1;
      let products = state.products.map(product => {
        if(product.item === payload){
          return { item: product.item, total: product.total - 1}
        }
        return product;
      });
      return { totalItems, products };
    }
    case 'RESET': {
      return initialState;
    }
    default:
      return state;
  }
}

export const increment = (item) => {
  return {
    type: 'INCREMENT',
    payload: item
  }
}

export const decrement = (item) => {
  return {
    type: 'DECREMENT',
    payload: item
  }
}

export const reset = (item) => {
  return {
    type: 'RESET',
  }
}
