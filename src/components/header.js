import React from 'react';
import { connect } from 'react-redux';

function Header(props) {
  return(
    <>
      <h1>OUR STORE</h1>
      <h2>Browse our Categories</h2>
      <p>{props.totalItems}</p>
    </>
  )
}

const mapStateToProps = state => ({
  totalItems: state.counter.totalItems
});

export default connect(mapStateToProps)(Header);
