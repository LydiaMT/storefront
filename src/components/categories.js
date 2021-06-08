import React from 'react';

const Categories = props => {

  const setActive = (e) => {
    e.preventDefault()
    props.setActiveCategory(e.target.value)
  }

  return (
      <section>
        <ul>
          {props.categories.map(category => (
            <li key={category.name}>
              <button value={category.name} onClick={setActive}>{category.name}</button>
            </li>
          ))}
        </ul>
    </section>
  )
}

export default Categories
