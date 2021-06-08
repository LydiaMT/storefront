import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Products from './components/products'

import Header from './components/header';
// import Categories from './components/categories';
import Footer from './components/footer';

function App() {
  return(
    <>
      <BrowserRouter>
        <Header />
        <Products />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;