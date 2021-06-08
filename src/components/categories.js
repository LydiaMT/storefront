import React from 'react';
import { connect } from 'react-redux';
import Products from './products'

import { initialState } from '../store/products.js';

const Categories = props => {
  const categories = initialState.products.reduce((accumulator, currentVal) => {
    if(!accumulator.includes(currentVal.category)){
      accumulator.push(currentVal.category)
    }
    return accumulator
  }, [])
  return (
    <section>
      <ul>
        {categories.map(category => (
            <li key={category}>
              <p>{category}</p>
            </li>
        ))}
      </ul>
    </section>
  )
}

// const mapStateToProps = state => ({
//   counter: state.counter
// })

// const mapDispatchToProps = { increment, decrement, reset }

// export default connect(mapStateToProps, mapDispatchToProps)(Categories);

export default Categories