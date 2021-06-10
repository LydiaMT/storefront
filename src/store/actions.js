import superagent from 'superagent';

let api = 'https://lydia-api-server.herokuapp.com/products'

export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(res => {
      dispatch(getAction(res.body))
    })
}

export const getAction = data => {
  return {
    type: 'GET',
    payload: data
  }
}