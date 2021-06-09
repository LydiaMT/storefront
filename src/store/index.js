import { createStore, combineReducers } from 'redux'; // creates state and combines your reducers
import { composeWithDevTools } from 'redux-devtools-extension'; // this is needed to utilize the chrom dev tools
// VVV Bring in your reducers VVV
import categories from './categories'
import counter from './products.js';
import cart from './cart';

let reducers = combineReducers({ categories, counter, cart });

const store = () => { // STORE - This is how you combine your reducers
  return createStore(reducers, composeWithDevTools());
}

export default store(); // Calls store. This is our object tree