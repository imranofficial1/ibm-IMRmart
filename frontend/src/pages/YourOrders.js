import React, { useEffect, useState } from 'react';
import './yourorder.css';

const YourOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders);
  }, []);

  const handleCancelOrder = (index) => {

    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    savedOrders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(savedOrders));
    setOrders(savedOrders);
    alert('Order canceled successfully.');
  };

  return (
    <div className="your-orders">
      <h1>My Orders</h1>
      {orders.length === 0 ? (
        <p>There is No orders found in the My order.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="order-item">
              <h2>Order #{index + 1}</h2>
              <p><strong>Product:</strong> {order.product.name}</p>
              <p><strong>Price:</strong> ₹{order.product.cost}</p>
              <p><strong>Name:</strong> {order.name}</p>
              <p><strong>Address:</strong> {order.address}</p>
              <p><strong>Payment Method:</strong> {order.paymentMethod}</p>
              <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
              <button onClick={() => handleCancelOrder(index)} className="cancel-button">
                Cancel Order
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YourOrders;
