import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography }from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Products = props => {

  const classes = useStyles();
  return (
    <section>
      <ul>
        {props.products.map(product => {
          if(product.category !== props.activeCategory){
            return
          }
            return(
            <li key={product.item}>
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
            </li>
            )
          }
        )}
      </ul>
    </section>
  )
}

export default Products