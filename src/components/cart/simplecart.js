import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText, Avatar } from '@material-ui/core';
import { incrementRemoteData } from '../../store/actions'
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  avatar:{
    marginRight: '10px'
  }
}));

const SimpleCart = props => {
  const classes = useStyles();

  if(props.totalItems === 0) { // hides if no items in cart
    return null
  }

  return (
    <>    
      <section className="simple-cart">
        {props.cart.map(product => 
          <div key={`cart${product.item}${Math.random()}`} className={classes.root}>
            <List component="nav" aria-label="secondary mailbox folders">
              <ListItem button>
                <Avatar alt={product.item} src={product.img} className={classes.avatar}/>
                <ListItemText primary={product.item}/>
                <HighlightOffRoundedIcon 
                  onClick={() => {
                    props.incrementRemoteData(product);
                    props.removeItemFromCart(product)
                  }}
                />
              </ListItem>
            </List>
          </div>
        )}
      </section>
    </>
  )
}

const mapStateToProps = state => ({
  totalItems: state.cart.totalItems,
  cart: state.cart.cart
});

const mapDispatchToProps = { incrementRemoteData }

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)