import React from 'react';

const Products = props => {
  return (
    <section>
      <ul>
        {props.products.map(product => {
          if(product.category !== props.activeCategory){
            return
          }
            return(
              <li key={product.item}>
                <p>{product.item} : {product.total}</p>
                <button onClick={() => props.increment(product.item)}>+</button>
                <button onClick={() => props.decrement(product.item)}>-</button>
              </li>
            )
          }
        )}
      </ul>
    </section>
  )
}

export default Products