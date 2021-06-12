import React from 'react';
import { NavLink } from 'react-router-dom'
import { Box, Icon } from '@material-ui/core';
import { connect } from 'react-redux';

function Header(props) {
  return(
    <>
      <div style={{ width: '100%' }}>
        <Box boxShadow={3} display="flex" p={1} bgcolor="background.paper">
          <Box p={1} flexGrow={1} >
            <Icon fontSize="large">
              <NavLink to="/">OUR STORE</NavLink>
            </Icon>
          </Box>
          <Box p={1} >
            <p>
              <NavLink to="/cart">Cart ({props.totalItems})</NavLink>
            </p>
          </Box>
        </Box>
      </div>
      <div className="sub-header">
        <Icon fontSize="inherit" className="sub-header">Browse our Categories</Icon>
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  totalItems: state.cart.totalItems,
});

export default connect(mapStateToProps)(Header);
