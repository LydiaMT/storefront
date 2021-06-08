import React from 'react';
import { connect } from 'react-redux';
import Categories from './categories'

function Header(props) {
  return(
    <>
      <h1>OUR STORE</h1>
      <h2>Browse our Categories</h2>
      <Categories />
      <p>{props.totalItems}</p>
    </>
  )
}

const mapStateToProps = state => ({
  totalItems: state.counter.totalItems
});

export default connect(mapStateToProps)(Header);
