import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, image, description, rating, cost, discount } = product;


  const parsedCost = typeof cost === 'number' ? cost : parseFloat(cost) || 0;
  const discountedPrice = discount ? (parsedCost - (parsedCost * discount / 100)).toFixed(2) : parsedCost.toFixed(2);

  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="product-rating">Rating: {rating} ⭐</div>
      <div className="product-price">
        {discount ? (
          <>
            <span className="original-price">₹{parsedCost.toFixed(2)}</span>
            <span className="discounted-price">₹{discountedPrice}</span>
          </>
        ) : (
          <span className="current-price">₹{parsedCost.toFixed(2)}</span>
        )}
      </div>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
