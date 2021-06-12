import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
});

const Cart = props => {
  const classes = useStyles();
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
      <section className="checkout-wrapper">
        <Card className={classes.root} display="flex" >
          <ul>
            {props.cart.map(cart =>{
              return(
                <li 
                  className="checkout-list"
                  key={`${cart.item}${Math.random()}`}
                >
                  <p>{cart.item.toUpperCase()}</p>
                  <p>${cart.price}</p>
                </li>
              )
            })}
          </ul>
          <div className="checkout-list">
            <p>Total</p>
            <p>{totalPrice}</p>
          </div>
          {/* <p>Credit Card stuff will go here</p> */}
          <div className="checkout-btn-wrapper">
            <Button 
              className="checkout-place-order-btn"
              display="flex"
              variant="contained" 
              color="primary" 
              disableElevation
            >
              PLACE YOUR ORDER
            </Button>
          </div>
        </Card>
      </section>
    </React.Fragment>
  )
}

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
})

export default connect(mapStateToProps)(Cart);
