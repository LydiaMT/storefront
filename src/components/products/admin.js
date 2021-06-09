import React from 'react';

const Admin = props => {

  return (
    <section className="admin-form">
      <form>
        <h1>Add a New Product</h1>
        <div>
          <label for="item">Name:</label>
          <input type="text" name="item" id="item" placeholder="enter the product name" required/>
        </div>
        <div>
          <label for="category">Category:</label>
          <select>
            <option value="Electronics">Electronics</option>
            <option value="Food">Food</option>
          </select>
        </div>
        <div>
          <label for="description">Product description:</label>
          <div>
            <textarea id="description" name="description" required></textarea>
          </div>
        </div>
        <div>
          <label for="inStock">Current Inventory:</label>
          <input type="number" id="inStock" name="inStock" min="0" required/>
        </div>
        <div>
          <label for="price">Price:</label>
          <input type="number" id="price" name="price" min="0" step="0.01" required/>
        </div>
        <div>
          <label for="img">Image URL:</label>
          <input type="url" name="img" id="img" placeholder="https://example.com" required/>
        </div>
        <div>
          <button type="submit">SUBMIT</button>
          <button type="reset">RESET</button>
        </div>
      </form>
    </section>
  )
}

export default Admin