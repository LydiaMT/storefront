import React from 'react';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid }from '@material-ui/core';
import { decrementRemoteData } from '../../store/actions'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px", 
  },
});

const Products = props => {
  const classes = useStyles();

  return (
    <ul>
      <Grid
        container spacing={1}
        className={classes.gridContainer}
        justify="center"
        >
      {props.data.map(product => {
        if(product.category !== props.activeCategory){
          return
          }
        if(product.inStock > 0){ // hides out of stock products
          return(
            <li key={product.item}>
              <Grid item lg={12}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={product.img}
                      title={product.item}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {product.item.toUpperCase()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      {product.description}
                      </Typography>
                    </CardContent>
                    <CardContent>
                      <p>In Stock: {product.inStock}</p>
                      <p>Price: ${product.price} </p>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button 
                      size="small" 
                      color="primary"
                      onClick={() => {
                        props.decrementRemoteData(product);
                        props.addItemToCart(product)
                      }}>
                      ADD TO CART
                    </Button>
                    <Button size="small" color="primary">
                      <NavLink to={{
                        pathname:`/details/${product._id}`,
                        state: product
                        }}>
                        VIEW DETAILS</NavLink>
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </li>
            )
          }
        }
      )}
      </Grid>
    </ul>
  )

}

const mapStateToProps = (state) => ({
  data: state.products.products
})

const mapDispatchToProps = { decrementRemoteData }

export default connect(mapStateToProps, mapDispatchToProps)(Products)
