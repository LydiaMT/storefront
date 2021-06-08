import React from 'react';

import { initialState } from '../store/categories.js';

const Categories = props => {

  // const categories = initialState.products.reduce((accumulator, currentVal) => {
  //   if(!accumulator.includes(currentVal.category)){
  //     accumulator.push(currentVal.category)
  //   }
  //   return accumulator
  // }, [])
  return (
      <section>
        <ul>
          {initialState.categories.map(category => (
            <li key={category}>
              <p>{category.name}</p>
            </li>
          ))}
        </ul>
    </section>
  )
}

export default Categories
