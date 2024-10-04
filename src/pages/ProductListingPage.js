// src/pages/ProductListingPage.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import PlantCard from '../components/PlantCard';
import logoImage from '../images/logo.jpg';
import { CartContext } from '../context/CartContext';
import '../styles.css';

const ProductListingPage = () => {
  const navigate = useNavigate();
  const {/*cartItems,*/calculateTotalItems } = useContext(CartContext);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const plants = [
    { id: 1, name: 'Aloe Vera', price: 150, description: 'Air-purifying plant', image: require('../images/AloeVera.jpg') },
    { id: 2, name: 'Lavender', price: 200, description: 'Aromatic plant', image: require('../images/Lavender.jpg') },
    { id: 3, name: 'Snake Plant', price: 180, description: 'Low-maintenance air purifier', image: require('../images/SnakePlant.jpg') },
    { id: 4, name: 'Spider Plant', price: 160, description: 'Great for indoor spaces', image: require('../images/SpiderPlant.jpg') },
    { id: 5, name: 'Peace Lily', price: 220, description: 'Elegant, air-cleaning plant', image: require('../images/PeaceLily.jpg') },
    { id: 6, name: 'Fiddle Leaf Fig', price: 300, description: 'Stylish indoor tree', image: require('../images/FiddleLeafFig.jpg') },
    { id: 7, name: 'Monstera Deliciosa', price: 250, description: 'Iconic tropical plant', image: require('../images/MonsteraDeliciosa.jpg') },
    { id: 8, name: 'Pothos', price: 140, description: 'Easy to care for, trailing plant', image: require('../images/Pothos.jpg') },
    { id: 9, name: 'Succulent Mix', price: 100, description: 'Perfect for small spaces', image: require('../images/SucculentMix.jpg') },
    { id: 10, name: 'ZZ Plant', price: 170, description: 'Tolerant of low light and neglect', image: require('../images/ZZPlant.jpg') },
    { id: 11, name: 'Bamboo Palm', price: 190, description: 'Adds a tropical vibe, excellent air purifier', image: require('../images/BambooPalm.jpg') },
    { id: 12, name: 'Rubber Plant', price: 210, description: 'Low maintenance with bold, shiny leaves', image: require('../images/RubberPlant.jpg') },
  ];

  return (
    <div className="product-listing-page">
      <header className="header">
        <div className="logo" onClick={handleGoBack}>
          <img src={logoImage} alt="Paradise Nursery" />
          <h1>Paradise Nursery</h1>
        </div>

        <div className="cart-icon" onClick={handleGoToCart}>
          <FaShoppingCart size={30} />
          <span className="cart-count">{calculateTotalItems()}</span>
        </div>
      </header>

      <h2>Air Purifying Plants</h2>
      <div className="plant-cards">
        {plants.map((plant) => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;




