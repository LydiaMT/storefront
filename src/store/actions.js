import superagent from 'superagent';

let api = 'https://lydia-api-server.herokuapp.com/products'

// gets all products from the API
export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(res => {
      dispatch(getAction(res.body))
    })
}

// updates the inStock count by subtracting 1
export const addRemoteData = (data) => async (dispatch) => {
  let res = await superagent.put(`${api}/${data._id}`).send(data);
  dispatch(addAction(res.body));
};

// updates the inStock count by adding 1
export const removeRemoteData = (data) => async (dispatch) => {
  let res = await superagent.put(`${api}/${data._id}`).send(data);
  dispatch(removeAction(res.body));
};

export const getAction = data => {
  return {
    type: 'GET_ITEMS',
    payload: data
  }
}

export const addAction = data => {
  return {
    type: 'ADD_ITEM',
    payload: data
  }
}

export const removeAction = data => {
  return {
    type: 'REMOVE_ITEM',
    payload: data
  }
}
