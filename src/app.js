import React from 'react';
import { connect } from 'react-redux';

import Header from './components/header';
import Categories from './components/categories'
import Products from './components/products'
import Footer from './components/footer';

import { increment, decrement, reset } from './store/products.js';
import categories, { setActiveCategory } from './store/categories';


function App(props) {
  return(
    <>
      <Header />
      <main>
      <Categories 
        categories={props.categories} 
        setActiveCategory={props.setActiveCategory}
        activeCategory={props.activeCategory}
        />
      <Products 
        products={props.counter.products} 
        increment={props.increment} 
        decrement={props.decrement}
        activeCategory={props.activeCategory}
        />
      </main>
      <Footer />
    </>
  )
}

const mapStateToProps = state => ({
  counter: state.counter,
  activeCategory: state.categories.activeCategory,
  categories: state.categories.categories,
})

const mapDispatchToProps = { increment, decrement, reset, setActiveCategory }

export default connect(mapStateToProps, mapDispatchToProps)(App);
