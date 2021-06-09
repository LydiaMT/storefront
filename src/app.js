import React from 'react';
import { connect } from 'react-redux';

import Header from './components/header/header';
import Categories from './components/storefront/categories'
import SimpleCart from './components/cart/simplecart'
import Products from './components/storefront/products'
import Admin from './components/products/admin';
import Footer from './components/footer/footer';

import { addItem, removeItem } from './store/cart.js'
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
        <SimpleCart
          removeItem={props.removeItem}
        />
        <div className="products">
          <Products 
            products={props.counter.products} 
            activeCategory={props.activeCategory}
            addItem={props.addItem}
          />
          <Admin />
        </div>
      </main>
      <Footer />
    </>
  )
}

const mapStateToProps = state => ({
  counter: state.counter,
  activeCategory: state.categories.activeCategory,
  categories: state.categories.categories,
  cart: state.cart.cart
})

const mapDispatchToProps = { removeItem, setActiveCategory, addItem }

export default connect(mapStateToProps, mapDispatchToProps)(App);
