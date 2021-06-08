export const initialState = {
  products: [
    { item: 'computer', category: 'Electronics', description: 'this is a computer', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80', total: 0} ,
    { item: 'gameboy', category: 'Electronics', description: 'this is a gameboy', img:'https://images.unsplash.com/photo-1599408981219-70ea455d4b0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80', total: 0 },
    { item: 'computer1', category: 'Electronics', description: 'this is a computer', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80', total: 0} ,
    { item: 'gameboy1', category: 'Electronics', description: 'this is a gameboy', img:'https://images.unsplash.com/photo-1599408981219-70ea455d4b0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80', total: 0 },
    { item: 'computer2', category: 'Electronics', description: 'this is a computer', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80', total: 0} ,
    { item: 'gameboy2', category: 'Electronics', description: 'this is a gameboy', img:'https://images.unsplash.com/photo-1599408981219-70ea455d4b0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80', total: 0 },
    { item: 'computer3', category: 'Electronics', description: 'this is a computer', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80', total: 0} ,
    { item: 'gameboy3', category: 'Electronics', description: 'this is a gameboy', img:'https://images.unsplash.com/photo-1599408981219-70ea455d4b0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80', total: 0 },
    { item: 'pizza', category: 'Food', description: 'this is a pizza', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0 },
    { item: 'monopoly', category: 'Toys', description: 'this is a monopoly', img:'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0  },
    { item: 'pizza1', category: 'Food', description: 'this is a pizza', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0 },
    { item: 'monopoly1', category: 'Toys', description: 'this is a monopoly', img:'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0  },
    { item: 'pizza2', category: 'Food', description: 'this is a pizza', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0 },
    { item: 'monopoly2', category: 'Toys', description: 'this is a monopoly', img:'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0  },
    { item: 'pizza3', category: 'Food', description: 'this is a pizza', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0 },
    { item: 'monopoly3', category: 'Toys', description: 'this is a monopoly', img:'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0  },
    { item: 'pizza4', category: 'Food', description: 'this is a pizza', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0 },
    { item: 'monopoly4', category: 'Toys', description: 'this is a monopoly', img:'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0  },
    { item: 'pizza5', category: 'Food', description: 'this is a pizza', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0 },
    { item: 'monopoly5', category: 'Toys', description: 'this is a monopoly', img:'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0  },
    { item: 'pizza6', category: 'Food', description: 'this is a pizza', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0 },
    { item: 'monopoly6', category: 'Toys', description: 'this is a monopoly', img:'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0  },
    { item: 'pizza7', category: 'Food', description: 'this is a pizza', img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0 },
    { item: 'monopoly7', category: 'Toys', description: 'this is a monopoly', img:'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', total: 0  },
  ],
  totalItems: 0
};

// ------ WHEN WHOLE FILE IS IMPORTED ------
// Switch cases => take in prior state
export default (state = initialState, action) => { // ACTION are evaluated in the switch case
  let { type, payload } = action;

  switch(type) { // REDUCER
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

// ------ TO IMPORT INDIVIDUAL ACTIONS ------

// Action creators. Their job is to return an action
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

export const reset = () => {
  return {
    type: 'RESET',
  }
}
