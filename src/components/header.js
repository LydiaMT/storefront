import React from 'react';
import { connect } from 'react-redux';
import categories, { setActiveCategory } from '../store/categories';
import { active } from '../store/products';
import Categories from './categories'

function Header(props) {
  return(
    <>
      <h1>OUR STORE</h1>
      <h2>Browse our Categories</h2>
      <Categories 
        categories={props.categories} 
        setActiveCategory={props.setActiveCategory}
        activeCategory={props.activeCategory}
        />
      <p>{props.totalItems}</p>
    </>
  )
}

const mapStateToProps = state => ({
  totalItems: state.counter.totalItems,
  categories: state.categories.categories,
  activeCategory: state.categories.activeCategory
});

const mapDispatchToProps = { setActiveCategory }


export default connect(mapStateToProps, mapDispatchToProps)(Header);
