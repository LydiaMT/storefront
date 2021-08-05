import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card,  CardActionArea, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import { decrementRemoteData } from '../../store/actions'
import { addItemToCart } from '../../store/cart'

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto',
  },
  media: {
    height: 300,
    margin: 20
  },
});

const ProductDetails = props => {
  const classes = useStyles();

  let singleProduct = props.location.state

  return(
    <>
      <Typography className="page-header" variant="h2" gutterBottom>{singleProduct.item.toUpperCase()}</Typography>
      <section className="product-details-wrapper">
        <Card className={classes.root} display="flex" >
          <CardMedia
            className={classes.media}
            image={singleProduct.img}
          />
          <CardContent>
            <div className="details-wrapper">
              <Typography gutterBottom variant="h5" component="h2">
                In Stock: {singleProduct.inStock}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                ${singleProduct.price}
              </Typography>
            </div>
            <section className="details-purchase-wrapper">
              <Button 
                className="details-buy-btn"
                display="flex"
                variant="contained" 
                color="primary" 
                disableElevation
                onClick={() => {
                  props.decrementRemoteData(singleProduct);
                  props.addItemToCart(singleProduct)
                }}
                >
              Buy
              </Button>
              <Typography variant="h4" gutterBottom>Product Details</Typography>
              <Typography variant="body1" gutterBottom>{singleProduct.description}</Typography>
            </section>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

const mapStateToProps = (state) => ({
  data: state.products.products
})

const mapDispatchToProps = { decrementRemoteData, addItemToCart }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)