import React from 'react';
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

  const classes = useStyles();
  return (

      <ul>
        <Grid
          container spacing={1}
          className={classes.gridContainer}
          justify="center"
          >
        {props.products.map(product => {
          if(product.category !== props.activeCategory){
            return
            }
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
                    </CardActionArea>
                    <CardActions>
                      <Button onClick={() => props.increment(product.item)} size="small" color="primary">
                        ADD TO CART
                      </Button>
                      <Button onClick={() => props.decrement(product.item)} size="small" color="primary">
                        VIEW DETAILS
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </li>
            )
          }
        )}
        </Grid>
      </ul>

  )
}

export default Products
