export const initialState = {
  products: [
    { item: 'computer', category: 'Electronics', description: 'this is a computer', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80', total: 0} ,
    { item: 'gameboy', category: 'Electronics', description: 'this is a gameboy', img:'https://images.unsplash.com/photo-1599408981219-70ea455d4b0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80', total: 0 },
    { item: 'pizza', category: 'Food', description: 'this is a pizza', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0 },
    { item: 'monopoly', category: 'Toys', description: 'this is a monopoly', img:'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0  }
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
