// src/pages/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="parallax-background"></div>
      <div className="content-wrapper">
        <h1 className="landing-title">Paradise Nursery</h1>
        <p className="landing-description">
          Discover tranquility in every leaf, and bring home the beauty of nature.
        </p>
        <button className="explore-button" onClick={() => navigate('/products')}>
          Explore Collection
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
