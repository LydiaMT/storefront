import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './app.js';
import store from './store/index.js';
import './styles/reset.css'
import './styles/base.css'

function Entry() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const root = document.getElementById('root');
ReactDOM.render(<Entry />, root);