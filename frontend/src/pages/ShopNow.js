import React, { useContext } from 'react';
import { ProductContext } from './ProductContext';
import { CartContext } from './CartContext';
import ProductCard from './ProductCard'; 

const ShopNow = () => {
  const { products } = useContext(ProductContext); 
  const { addToCart } = useContext(CartContext); 

  const handleAddToCart = (product) => {
    addToCart(product); 
    alert(`${product.name} added to cart successfully!`); 
  };

  return (
    <div className="shop-now">
      <h2>Shop Now</h2>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products available. Add some products!</p>
        ) : (
          products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)} 
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ShopNow;
