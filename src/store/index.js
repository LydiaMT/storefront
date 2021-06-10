import { createStore, combineReducers, applyMiddleware } from 'redux'; // creates state and combines your reducers
import { composeWithDevTools } from 'redux-devtools-extension'; // this is needed to utilize the chrom dev tools
import ReduxThunk from 'redux-thunk'
// VVV Bring in your reducers VVV
import categories from './categories'
import products from './products.js';
import cart from './cart';

let reducers = combineReducers({ categories, products, cart });

const store = () => { // STORE - This is how you combine your reducers
  return createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)));
}

export default store(); // Calls store. This is our object tree