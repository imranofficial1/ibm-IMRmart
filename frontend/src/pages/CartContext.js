import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null); 

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const setUserLogin = (user) => {
    setUser(user);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, user, setUserLogin }}>
      {children}
    </CartContext.Provider>
  );
};