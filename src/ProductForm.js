
import React, { useState } from 'react';

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    quantity: '',
    price: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClearForm = () => {
    setFormData({
      name: '',
      description: '',
      category: '',
      quantity: '',
      price: '',
    });
  };

  return (
    <div>
      <h1>Product Form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Description:
          <textarea name="description" value={formData.description} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Category:
          <input type="text" name="category" value={formData.category} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Quantity:
          <input type="number" name="quantity" value={formData.quantity} onChange={handleInputChange} />
        </label>
        <br />

        <label>
          Price:
          <input type="number" name="price" value={formData.price} onChange={handleInputChange} />
        </label>
        <br />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleClearForm}>Cancel</button>
      </form>
    </div>
  );
};

export default ProductForm;
