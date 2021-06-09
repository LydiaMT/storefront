import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SimpleCart = props => {
  const classes = useStyles();

console.log("======PROPS=====", props)

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
                <ListItemText primary={product.item}/>
                <p>{product.total}</p>
                <button onClick={() => props.removeItem(product.item)}>x</button>
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

export default connect(mapStateToProps)(SimpleCart)