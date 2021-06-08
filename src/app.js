import React from 'react';
import Products from './components/products'
import { connect } from 'react-redux';
import { increment, decrement, reset } from './store/products.js';

import Header from './components/header';
// import Categories from './components/categories';
import Footer from './components/footer';

function App(props) {
  return(
    <>
      <Header />
      <Products 
        products={props.counter.products} 
        increment={props.increment} 
        decrement={props.decrement}
        activeCategory={props.activeCategory}
        />
      <Footer />
    </>
  )
}

const mapStateToProps = state => ({
  counter: state.counter,
  activeCategory: state.categories.activeCategory
})

const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps, mapDispatchToProps)(App);
