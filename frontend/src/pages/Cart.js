import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './cart.css';

const Cart = () => {
  const { cart, removeFromCart, user } = useContext(CartContext);
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', address: '', paymentMethod: '' });
  const [currentProduct, setCurrentProduct] = useState(null);

  if (!cart) {
    return <p>Error: Cart context is not available.</p>;
  }

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  const handleBuyNow = (product) => {
    setCurrentProduct(product);
    setShowForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
      product: currentProduct,
      ...formData,
      date: new Date().toISOString(),
    };
    orders.push(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    try {
      await fetch('http://localhost:5000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrder),
      });

      removeFromCart(currentProduct.id);

      alert('Order placed successfully');
      setShowForm(false);
      navigate('/orders'); 
    } catch (error) {
      console.error('Error placing order:', error);
      alert('There was an error placing your order.');
    }
  };

  return (
    <div className="cart-container">
      <h1>MY Cart</h1>
      {cart.length === 0 ? (
        <p>Cart is Emty! Add any product.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-cost">₹{item.cost}</p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
                <button onClick={() => handleBuyNow(item)}>Buy Now</button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {showForm && (
        <div className="order-form">
          <h2>Complete Your Order</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>
            <label>
              Address:
              <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <label>
              Payment Method:
              <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange} required>
                <option value="">Select payment method</option>
                <option value="delivery">Cash on delivery</option>
                <option value="creditCard">Credit Card</option>
                <option value="paypal">Gpay</option>
              </select>
            </label>
            <button type="submit">Place Order</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Cart;
