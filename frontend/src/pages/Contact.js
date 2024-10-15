import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);


  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Contact form submitted successfully');
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setIsSubmitted(false), 3000);
        } else {
          console.error('Failed to submit the form');
        }
      } catch (error) {
        console.error('Error submitting the form:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact And Feedback</h1>
      <p>We’d love to connect with you! Fill out the form below, and we’ll respond promptly.</p>
      
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'input-error' : ''}
            aria-describedby="name-error"
            required
          />
          {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
            aria-describedby="email-error"
            required
          />
          {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'input-error' : ''}
            aria-describedby="message-error"
            required
          />
          {errors.message && <span id="message-error" className="error-message">{errors.message}</span>}
        </div>

        <button type="submit" className="submit-button">Send Message</button>

        {isSubmitted && <p className="success-message">Thank you! Your message has been sent successfully.</p>}
      </form>
    </div>
  );
};

export default Contact;
