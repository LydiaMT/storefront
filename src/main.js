import React from 'react';
import Header from './components/header/header'
import App from './app'
import Footer from './components/footer/footer'
import { BrowserRouter } from 'react-router-dom'

const Main = () => {
    return (
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <App />
          <Footer />
        </BrowserRouter>
      </React.StrictMode> 
    );
}

export default Main