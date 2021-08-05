import superagent from 'superagent';

let api = 'https://lydia-api-server.herokuapp.com/products'

// gets all products from the API
export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(res => {
      dispatch(getAction(res.body))
    })
}

// updates the inStock count by subtracting 1 when customer adds to cart
// export const decrementRemoteData = (data) => async (dispatch) => {
//   let res = await superagent.put(`${api}/${data._id}`).send(data);
//   dispatch(decrementInstock(res.body));
// };

export const decrementRemoteData = (data) => (dispatch) => {
  return superagent.put(`${api}/${data._id}`)
    .then(res => {
      dispatch(decrementInstock(res.body))
    })
}


// updates the inStock count by adding 1 when customer removes from cart
export const incrementRemoteData = (data) => async (dispatch) => {
  let res = await superagent.put(`${api}/${data._id}`).send(data);
  dispatch(incrementInstock(res.body));
};



export const getAction = data => {
  return {
    type: 'GET_PRODUCTS',
    payload: data
  }
}

export const decrementInstock = data => {
  return {
    type: 'DECREMENT_INSTOCK',
    payload: data
  }
}

export const incrementInstock = data => {
  return {
    type: 'INCREMENT_INSTOCK',
    payload: data
  }
}
