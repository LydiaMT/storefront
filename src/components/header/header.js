import React from 'react';
import Box from '@material-ui/core/Box';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';

function Header(props) {
  return(
    <>
      <div style={{ width: '100%' }}>
        <Box boxShadow={3} display="flex" p={1} bgcolor="background.paper">
          <Box p={1} flexGrow={1} >
            <Icon fontSize="large">OUR STORE</Icon>
          </Box>
          <Box p={1} >
            <p>Cart ({props.totalItems})</p>
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
