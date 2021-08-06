// import products from "./products";

// export const initialState = {
//   showLoading: false
// }

// export default (state = initialState, action) => {
//   let { type, payload } = action;

//   switch(type) {
//     case 'LOADING_ACTION':{
//       let prodcuts = state.prodcuts;
//       if(!products){
//         return { loading: true }
//       }
//       return prodcuts
//     }
//   }

// }

// export function loadingToggleAction(status){
//   return {
//     type: 'LOADING_ACTION',
//     payload: status
//   }
// }