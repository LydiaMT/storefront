export const initialState = {
  categories: [
    { name: 'Electronics', description: 'Electronics description'},
    { name: 'Food', description: 'Food description' },
    // { name: 'All Products', description: 'See all our products'}
  ],
  activeCategory: ''
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'SET_CATEGORY':{
      let activeCategory = payload
      return{...state , activeCategory}
    }
    case 'GET_CATEGORIES': {
      return state.categories;
    }
    default:
      return state;
  }
}

export const setActiveCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    payload: category
  }
}

export const getCategories = () => {
  return {
    type: 'GET_CATEGORIES',
  }
}
