export const initialState = {
  categories: [
    { name: 'Electronics', description: 'Electronics description'},
    { name: 'Food', description: 'Food description' },
  ],
  activeCategory: ''
};

import { SET_CATEGORY } from './actions'

export default (state = initialState, action ={}) => {
  let { type, payload } = action;

  switch(type) {
    case SET_CATEGORY:{
      let activeCategory = payload
      return {
        ...state , 
        activeCategory
      }
    }
    default:
      return state;
  }
}


