import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Categories = props => {
  const classes = useStyles();

  const setActive = (e) => { 
    e.preventDefault()
    props.setActiveCategory(e.currentTarget.value)
  }

  return (
      <div className={classes.root}>
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
