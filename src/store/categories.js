export const initialState = {
  categories: [
    { name: 'Electronics', description: 'Electronics description', active: false },
    { name: 'Food', description: 'Food description', active: false  },
    { name: 'Toys', description: 'Toys description', active: false  },
  ],
  activeCategory: ''
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'ACTIVE CATEGORY':{
      let activeCategory = payload
      return{categories: [...state.categories], activeCategory}
    }
    case 'GET CATEGORIES': {
      return initialState;
    }
    default:
      return state;
  }
}

export const activeCategory = (category) => {
  return {
    type: 'ACTIVE CATEGORY',
    payload: category
  }
}

export const getCategories = () => {
  return {
    type: 'GET CATEGORIES',
  }
}
