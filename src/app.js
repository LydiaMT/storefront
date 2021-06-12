import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom'

import Categories from './components/storefront/categories'
import Products from './components/storefront/products'
import SimpleCart from './components/cart/simplecart'
import Cart from './components/cart/checkout'
import ProductDetails from './components/products/details'

import { addItemToCart, removeItemFromCart } from './store/cart.js'
import { incrementRemoteData, decrementRemoteData } from './store/actions'
import categories, { setActiveCategory } from './store/categories';
import { getRemoteData } from './store/actions'

function App(props) {

  const fetchData = (e) => {
    e && e.preventDefault();
    props.getRemoteData();
  }

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <React.StrictMode>
      <Switch>
        <Route exact path='/'>
          <main>
            <Categories 
              categories={props.categories} 
              setActiveCategory={props.setActiveCategory}
              activeCategory={props.activeCategory}
            />
            <div className="products">
              <Products 
                products={props.products.products}
                productDetails={props.products.products._id} 
                activeCategory={props.activeCategory}
                decrementRemoteData={props.decrementRemoteData}
                addItemToCart={props.addItemToCart}
              />
            </div>
            <SimpleCart
              removeItemFromCart={props.removeItemFromCart}
              incrementRemoteData={props.incrementRemoteData}
            />
          </main>
        </Route>
        {/* <Route exact path={`/details/${props._id}/`}> */}
        <Route 
          exact path={`/details/:${props.products._id}`}
          component={(oneProduct) => <ProductDetails {...oneProduct}/>}
          />
        {/* //   <ProductDetails
        //     products={props.products.products} 
        //     productDetails={props.products.products._id} 
        //     activeCategory={props.activeCategory}
        //     decrementRemoteData={props.decrementRemoteData}
        //     addItemToCart={props.addItemToCart}
        //   />
        // </Route> */}
        <Route>
          <Cart exact path="/cart"/> 
        </Route>
      </Switch>
    </React.StrictMode>
  )
}

const mapStateToProps = (state) => ({
  products: state.products,
  activeCategory: state.categories.activeCategory,
  categories: state.categories.categories,
  cart: state.cart.cart,
})

const mapDispatchToProps = { removeItemFromCart, setActiveCategory, addItemToCart , getRemoteData }


export default connect(mapStateToProps, mapDispatchToProps)(App);
