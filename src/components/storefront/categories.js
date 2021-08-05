import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Icon, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Categories = props => {
  const classes = useStyles();

  useEffect(() => {
    props.setActiveCategory('')
  }, [])

  const setActive = (e) => { 
    e.preventDefault()
    props.setActiveCategory(e.currentTarget.value)
  }

  return (
      <div className={classes.root}>
        <div className="sub-header">
          <Icon fontSize="inherit" className="sub-header">Browse our Categories</Icon>
        </div>
        <ul>
          {props.categories.map(category => (
            <li className="nav-li" key={category.name}>
              <Button value={category.name} onClick={setActive} color="primary">
                {category.name}
              </Button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Categories
