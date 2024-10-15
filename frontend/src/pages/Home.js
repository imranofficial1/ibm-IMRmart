
import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to IMRmart</h1>
      <p>"Your ultimate destination for everything extraordinary!"</p>
      <div className="quotes-container">
        <div className="quote">
          <p>Experience the game in stunning detail. Our sports gear elevates your performance to a whole new level.</p>
        </div>
        <div className="quote">
          <p>Capture every play with precision. Our equipment sets a new standard for excellence and durability.</p>
        </div>
        <div className="quote">
          <p>Feel the difference in every move. Upgrade to our top-tier sports gear today for unbeatable performance!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
