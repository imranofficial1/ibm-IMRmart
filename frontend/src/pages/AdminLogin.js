import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css';


const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: 'Admin@IMRmart.com',
    password: 'IMRmartadmin'
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (email === 'Admin@IMRmart.com' && password === 'IMRmartadmin') {
      alert('Admin login successful!');
      navigate('/add-product');
    } else {
      alert('Invalid Admin credentials.');
    }
  };

  return (
    <div className="admin-login-container">
      <h1>Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
