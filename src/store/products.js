export const initialState = {
  products: [
    { item: 'computer', category: 'Electronics', description: 'this is a computer',  total: 5, price: 99, img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80'} ,
    { item: 'gameboy', category: 'Electronics', description: 'this is a gameboy', total: 5, price: 99, img:'https://images.unsplash.com/photo-1599408981219-70ea455d4b0b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1404&q=80' },
    { item: 'mouse', category: 'Electronics', description: 'this is a mouse', total: 5, price: 99, img:'https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1351&q=80'} ,
    { item: 'keyboard', category: 'Electronics', description: 'this is a keyboard', total: 5, price: 99, img:'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1346&q=80' },
    { item: 'TV', category: 'Electronics', description: 'this is a TV', total: 5, price: 99, img:'https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} ,
    { item: 'Monitor', category: 'Electronics', description: 'this is a monitor', total: 5, price: 99, img:'https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { item: 'Dell', category: 'Electronics', description: 'this is a Dell', total: 5, price: 99, img:'https://images.unsplash.com/photo-1567521463850-4939134bcd4a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80'} ,
    { item: 'Camera', category: 'Electronics', description: 'this is a camera', total: 5, price: 99, img:'https://images.unsplash.com/photo-1512790182412-b19e6d62bc39?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80' },
    { item: 'pizza', category: 'Food', description: 'this is a pizza', total: 5, price: 99, img:'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { item: 'burrito', category: 'Food', description: 'this is a burrito', total: 5, price: 99, img:'https://images.unsplash.com/photo-1612547945822-1d76d2b3e72c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { item: 'pasta', category: 'Food', description: 'this is a pasta', total: 5, price: 99, img:'https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80' },
    { item: 'sushi', category: 'Food', description: 'this is a sushi', total: 5, price: 99, img:'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' },
    { item: 'Berries', category: 'Food', description: 'this is a berries', total: 5, price: 99, img:'https://images.unsplash.com/photo-1521192520982-5d6ca468a30f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1383&q=80' },
    { item: 'dumblings', category: 'Food', description: 'this is a dumplings', total: 5, price: 99, img:'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { item: 'bread', category: 'Food', description: 'this is a bread', total: 5, price: 99, img:'https://images.unsplash.com/photo-1559811814-e2c57b5e69df?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' },
    { item: 'watermelon', category: 'Food', description: 'this is a watermelon', total: 5, price: 99, img:'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80' },
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
          return { ...product, total: product.total + 1}
        }
        return product;
      });
      return { totalItems, products };
    }
    case 'DECREMENT':{
      let totalItems = state.totalItems - 1;
      let products = state.products.map(product => {
        if(product.item === payload){
          return { ...product, total: product.total - 1}
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
