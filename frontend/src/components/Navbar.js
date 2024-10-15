
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">IMRmart</div>
      <div className="navbar-items">
        <input type="text" className="search-input" placeholder="Search Products.." />
        
        <Link to="/login" className="navbar-button">Login</Link>
        <Link to="/show-now" className="navbar-button">Shop Now</Link>
        <Link to="/cart" className="navbar-button">Cart</Link>
        <Link to="/orders" className="navbar-button">Your Orders</Link> {/* New link added */}
        <Link to="/contact" className="navbar-button">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
