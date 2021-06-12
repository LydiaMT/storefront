import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card,  CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

import { decrementRemoteData } from '../../store/actions'
import { addItemToCart } from '../../store/cart'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProductDetails = props => {
  const classes = useStyles();

  let singleProduct = props.location.state

  return(
    <>
    <h1>{singleProduct.item}</h1>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={singleProduct.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            In Stock:{singleProduct.inStock}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${singleProduct.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <Button 
      size="medium" 
      color="primary"
      onClick={() => {
        props.decrementRemoteData(singleProduct);
        props.addItemToCart(singleProduct)
      }}
      >
      Buy
    </Button>
    <h1>Product Details</h1>
    <p>{singleProduct.description}</p>
    </>
  )
}

const mapStateToProps = (state) => ({
  data: state.products.products
})

const mapDispatchToProps = { decrementRemoteData, addItemToCart }

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)