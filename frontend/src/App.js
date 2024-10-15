import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AddProduct from './pages/AddProduct'; 
import AdminLogin from './pages/AdminLogin'; 
import Cart from './pages/Cart';
import { CartProvider } from './pages/CartContext';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import { ProductProvider } from './pages/ProductContext'; 
import ShopNow from './pages/ShopNow'; 
import YourOrders from './pages/YourOrders';

const App = () => {
  return (
    <CartProvider>
      <ProductProvider>
        <Router>
          <div className="App">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/show-now" element={<ShopNow />} /> {/* Corrected route */}
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/orders" element={<YourOrders />} />
                <Route path="/admin-login" element={<AdminLogin />} /> {/* Admin Login route */}
                <Route path="/add-product" element={<AddProduct />} /> {/* Add Product route */}
              </Routes>
            </main>
            <footer className="footer">
              <p>&copy; 2024 IMRmart. All rights reserved.</p>
            </footer>
          </div>
        </Router>
      </ProductProvider>
    </CartProvider>
  );
};

export default App;
