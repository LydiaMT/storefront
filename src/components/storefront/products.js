import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Grid }from '@material-ui/core';


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

  console.log("=====THIS IS PROPS=====", props)

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
                    <Button onClick={() => props.addItem(product)} size="small" color="primary">
                      ADD TO CART
                    </Button>
                    <Button size="small" color="primary">
                      VIEW DETAILS
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
  data: state.counter.products
})

// const mapDispatchToProps = { removeItem, setActiveCategory, addItem , getRemoteData }


// const mapDispatchToProps = (dispatch, getState) => ({
//   get: () => dispatch(actions.getRemoteData())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Products)
export default connect(mapStateToProps)(Products)

// export default Products
