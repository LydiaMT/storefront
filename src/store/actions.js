import superagent from 'superagent';

let api = 'https://lydia-api-server.herokuapp.com/products'

export const getRemoteData = () => dispatch => {
  return superagent.get(api)
    .then(res => {
      dispatch(getAction(res.body))
    })
}

// export const getRemoteData = (data) => async dispatch => {
//   let response = await superagent.get(api).send(data);
//   console.log("=====API BODY=====", response.body)
// }


export const getAction = data => {
  return {
    type: 'GET',
    payload: data
  }
}
