import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Button, Avatar } from '@material-ui/core';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

import { removeItemFromCart, incrementRemoteData } from '../../store/actions'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800
  },
  bold: {
    fontWeight: 600
  },
  avatar:{
    marginRight: '10px',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  button: {
    marginLeft: '10px'
  },
}));

const Cart = props => {
  const classes = useStyles();
  // -------- calculate total --------
  const total = (arr) => {
    let total = 0
    for(let i = 0; i < arr.length; i++){
      total = (((total * 100) + (arr[i].price * 100)) / 100)
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
                  <div className="checkout-item">
                    <Avatar alt={cart.item} src={cart.img} className={classes.avatar}/>
                    <span>{cart.item.toUpperCase()}</span>
                  </div>
                  <div className="checkout-item">
                    <span>${cart.price}</span>
                    <HighlightOffRoundedIcon 
                      className={classes.button}
                      onClick={() => {
                        props.incrementRemoteData(cart);
                        props.removeItemFromCart(cart)
                      }}
                    />
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="checkout-list">
            <p>Total</p>
            <p className={classes.bold}>${totalPrice}</p>
          </div>
          {/* <p>Credit Card stuff would go here</p> */}
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
  totalItems: state.cart.totalItems,
  cart: state.cart.cart,
})

const mapDispatchToProps = { incrementRemoteData, removeItemFromCart }

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
