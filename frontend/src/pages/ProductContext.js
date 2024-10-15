import React, { createContext, useState } from 'react';


export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const initialProducts = [
    { 
      id: 1, 
      name: 'Columbia Men Firecamp Remesh Hiking & Trekking Shoes Black', 
      image: 'https://m.media-amazon.com/images/I/71H9nFojW2L._SY625_.jpg',  
      rating: 4.6, 
      cost: 5949 
    },
    { 
      id: 2, 
      name: 'MTB Cycle', 
      image: 'https://m.media-amazon.com/images/I/81fAqHB+xsL._SX425_.jpg', 
      rating: 4.4, 
      cost: 4398 
    },
    { 
      id: 3, 
      name: 'FitBox Sports Viper Series Full Size Heavy Duty Plastic Cricket Bat', 
      image: 'https://m.media-amazon.com/images/I/71bVl9iZ9YL._SX425_.jpg',  
      rating: 4.8, 
      cost: 349
    },
    { 
      id: 4, 
      name: 'Nivia Storm Football', 
      image: 'https://m.media-amazon.com/images/I/61RpRYFb2wL._SX425_.jpg', 
      rating: 4.7, 
      cost: 370
    },
    { 
      id: 5, 
      name: 'oyFit Yoga Ball- Anti Burst 75 cm Exercise Ball ', 
      image: 'https://m.media-amazon.com/images/I/718Mrg2pp1L._SX425_.jpg',
      rating: 4.5, 
      cost: 899 
    },
    { 
      id: 6, 
      name: 'Nivia Craters Volleyball', 
      image: 'https://m.media-amazon.com/images/I/81Yt4y0tAEL._SX425_.jpg',
      rating: 4.9, 
      cost: 419
    },
    { 
      id: 7, 
      name: 'Flexnest Flexbike Lite', 
      image: 'https://m.media-amazon.com/images/I/51rusf6N+PL._SX425_.jpg',
      rating: 4.6, 
      cost: 22998 
    },
    { 
      id: 8, 
      name: 'BIONFIT Treadmill for Home Gym', 
      image: 'https://m.media-amazon.com/images/I/61GB23gxb4L._SX425_.jpg',
      rating: 4.7, 
      cost: 120000 
    },
    { 
      id: 9, 
      name: 'WHITEDOT SPORTS Leather Whitedot Albatross ', 
      image: 'https://m.media-amazon.com/images/I/41y-cklP0SL._SX300_SY300_QL70_FMwebp_.jpg',
      rating: 4.3, 
      cost: 14099 
    }
  ];

  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  return (
    <ProductContext.Provider value={{ products, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
