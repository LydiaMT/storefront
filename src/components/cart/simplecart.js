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

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const SimpleCart = props => {
  const classes = useStyles();

  console.log("==========PROPS==========", props)

  if(props.totalItems === 0) {
    return null
  }

  return (
    <>    
    
      <section className="simple-cart">
        <div className={classes.root}>
          <List component="nav" aria-label="secondary mailbox folders">
            <ListItem button>
              <ListItemText primary="thing one" />
              <button>x</button>
            </ListItem>
            <ListItemLink button>
              <ListItemText primary="thing two" />
              <button>x</button>
            </ListItemLink>
          </List>
        </div>
      </section>
      
    
    </>
  )

}

const mapStateToProps = state => ({
  totalItems: state.counter.totalItems,
  // products: state.
});

export default connect(mapStateToProps)(SimpleCart)