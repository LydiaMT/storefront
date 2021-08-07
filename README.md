# Storefront
# Author - Lydia Minehan-Tubic

## About this Application

A virtual ecommerce application built with React, Redux, and Material UI.

- [Link to Deployed site](https://storefront-lmt.netlify.app/)
- [Link to API](https://lydia-api-server.herokuapp.com/products)

### Phase 1: Application Setup
- Basic React Application
- Redux State Management
- State managed in memory
- Material UI Components & Styling
### Phase 2: Shopping Cart
- Add items to a shopping cart
- Update quantities
- Remove items from the cart
- Show the cart in real-time on the UI
### Phase 3: Live Data
- Connect the application a live API
- Persist changes to products based on cart activity.
### Phase 4: Checkout & Detail Pages
- Refactor the store to use the latest Redux design pattern (Redux Toolkit)
- Add a cart checkout page
- Add a product details page

### Dependencies 

- react
- react-dom
- react-redux
- react-scripts
- redux
- redux-devtools-extension

### Architecture

```git
├── .gitignore
├── .eslintrc.json
├── __tests__
│   ├── app.test.js
│   ├── cart.test.js
├── src
│   ├── index.js
│   ├── app.js
│   ├── store
│   │   ├── index.js
│   │   ├── categories.js
│   │   ├── products.js
│   │   ├── cart.js
│   ├── components
│   │   ├── storefront
│   │   │   └── categories.js
│   │   │   └── current-category.js
│   │   │   └── products.js
│   │   │   └── storefront.js
│   │   ├── products
│   │   │   └── details.js
│   │   ├── cart
│   │   │   └── simplecart.js
│   │   │   └── checkout.js
│   │   ├── header
│   │   │   └── header.js
│   │   ├── footer
│   │   │   └── footer.js
└── package.json
```

