// src/pages/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';  



const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="background-image"></div>
      <h1>Paradise Nursery</h1>
      <p>Welcome to Paradise Nursery, where Green Meets Serenity!</p>  
      <button onClick={() => navigate('/products')}>Get Started</button>
    </div>
  );
};

export default LandingPage;
