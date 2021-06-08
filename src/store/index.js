import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import categories from './categories'
import counter from './products.js';

let reducers = combineReducers({ categories, counter });

const store = () => {
  return createStore(reducers, composeWithDevTools());
}

export default store();