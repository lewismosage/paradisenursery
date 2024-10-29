// src/pages/ProductListingPage.js
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import PlantCard from '../components/PlantCard';
import logoImage from '../images/logo.jpg';
import heroImage from '../images/MonsteraDeliciosa.jpg'; 
import { CartContext } from '../context/CartContext';
import '../styles.css';

const ProductListingPage = () => {
  const navigate = useNavigate();
  const { calculateTotalItems } = useContext(CartContext);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const plants = [
    { id: 1, name: 'Fiddle Leaf Fig', price: 3000, description: 'Shop Now', image: require('../images/FiddleLeafFig.jpg') },
    { id: 2, name: 'Lavender', price: 2500, description: 'Shop Now', image: require('../images/Lavender.jpg') },
    { id: 3, name: 'Succulent Mix', price: 1000, description: 'Shop Now', image: require('../images/SucculentMix.jpg') },
    { id: 4, name: 'Rubber Plant', price: 2100, description: 'Shop Now', image: require('../images/RubberPlant.jpg') },
  ];

  const categories = [
    { id: 1, name: 'Herbs', image: require('../images/herbs.jpg') },
    { id: 2, name: 'Shrubs', image: require('../images/shrubs.jpg') },
    { id: 3, name: 'Trees', image: require('../images/trees.jpg') },
    { id: 4, name: 'Climbers', image: require('../images/climbers.jpg') },
    { id: 5, name: 'Creepers', image: require('../images/creepers.jpg') },
  ];

  return (
    <div className="product-listing-page">
      {/* Header */}
      <header className="header">
        <div className="logo" onClick={handleGoBack}>
          <img src={logoImage} alt="Terlant" />
        </div>
        <nav>
          <ul>
          <Link to="#">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact Us</Link>
          </ul>
        </nav>
        <div className="cart-icon" onClick={handleGoToCart}>
          <FaShoppingCart size={24} />
          <span className="cart-count">{calculateTotalItems()}</span>
        </div>
      </header>

      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="Perfect Plant Promotion" className="hero-image" />
        <div className="hero-content">
          <h2>Perfect Plant</h2>
          <p>Up To 50% Off Monstera Deliciosa</p>
          <Link to="/shop">
          <button className="shop-now-button">Shop Now</button>
          </Link>
        </div>
      </div>

       {/* Categories Section */}
      <div className="categories-container">
        <h3 className="categories-title">Categories</h3>
        <div className="categories-section">
          {categories.map(category => (
            <div key={category.id} className="category-item">
              <img src={category.image} alt={category.name} />
              <p>{category.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Product Section */}
      <div className="featured-products">
        <h3>Featured Products</h3>
        <div className="plant-cards">
          {plants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;