import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { incrementRemoteData } from '../../store/actions'
// import { productDetails } from '../storefront/products';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProductDetails = props => {
  console.log("THIS IS THE PROPS FOR 1 PRODUCT", props)
  // console.log("THIS IS THE PROPS FOR 1 PRODUCT", productDetails)
  const classes = useStyles();

  let singleProduct = props.location.state
  console.log("TEST", singleProduct)

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
            {props.item}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {singleProduct.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </>
  )
}

const mapStateToProps = (state) => ({
  data: state.products.products
})

const mapDispatchToProps = { incrementRemoteData }


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)