import React from 'react';
import { connect } from 'react-redux';

const Cart = props => {

  // -------- calculate total --------
  const total = (arr) => {
    let total = 0
    for(let i = 0; i < arr.length; i++){
      total = total + arr[i].price
    }
    return total
  }
  let totalPrice = total(props.cart)
  
  // -------- render jsx --------
  return(
    <React.Fragment>
      <section className="checkout">
        <ul>
          {props.cart.map(cart =>{
            return(
              <li key={`${cart.item}${Math.random()}`}>
                <p>{cart.item}</p>
                <p>${cart.price}</p>
              </li>
            )
          })}
        </ul>
        <div>Total {totalPrice}</div>
        <div className="credicart">
          <p>Credit Card stuff will go here</p>
          <button>BUY NOW</button>
        </div>
      </section>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(Cart);
