import React, { useState, useContext } from 'react';
import { ProductContext } from './ProductContext';
import { useNavigate } from 'react-router-dom'; 
import'./AddProduct.css'

const AddProduct = () => {
  const { addProduct } = useContext(ProductContext); 
  const [product, setProduct] = useState({
    id: '',
    name: '',
    image: '',
    description: '',
    rating: '',
    cost: '',
    category: ''
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(product); 
    alert('Product added successfully!');
    setProduct({ id: '', name: '', image: '', description: '', rating: '', cost: '', category: '' }); 
    navigate('/show-now'); 
  };

  return (
    <div className="add-product">
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <label>ID:</label>
        <input type="text" name="id" value={product.id} onChange={handleChange} required />

        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />

        <label>Image URL:</label>
        <input type="text" name="image" value={product.image} onChange={handleChange} />

        <label>Description:</label>
        <input type="text" name="description" value={product.description} onChange={handleChange} />

        <label>Rating:</label>
        <input type="number" name="rating" value={product.rating} onChange={handleChange} />

        <label>Cost:</label>
        <input type="number" name="cost" value={product.cost} onChange={handleChange} required />

        <label>Category:</label>
        <input type="text" name="category" value={product.category} onChange={handleChange} required />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
