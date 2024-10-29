import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logoImage from '../images/logo.jpg';
import heroImage from '../images/BonsaiTree.jpg'; 
import { CartContext } from '../context/CartContext';
import '../styles.css';

const ProductListingPage = () => {
  const navigate = useNavigate();
  const { calculateTotalItems, addToCart } = useContext(CartContext);
  
  const [isHeroAddedToCart, setIsHeroAddedToCart] = useState(false);
  const [addedToCartItems, setAddedToCartItems] = useState([]);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const handleAddToCartHero = (plant) => {
    addToCart(plant);
    if (plant.id === heroPlant.id) {
      setIsHeroAddedToCart(true);
    }
  };

  const heroPlant = {
    id: 30, 
    name: 'Bonsai Tree', 
    price: 2500, 
    description: 'Bonsai Tree - Special Offer',
    category: 'Featured',
    image: heroImage 
  }
  const plants = [
    { id: 1, name: 'Basil', price: 3000, description: 'Shop Now', category: 'Herbs', image: require('../images/basil.jpg') },
    { id: 2, name: 'Mint', price: 2000, description: 'Shop Now', category: 'Herbs', image: require('../images/mint.jpg') },
    { id: 3, name: 'Thyme', price: 1000, description: 'Shop Now', category: 'Herbs', image: require('../images/theme.jpg') },
    { id: 4, name: 'Boxwood (Buxus)', price: 2100, description: 'Shop Now', category: 'Shrubs', image: require('../images/Boxwood (Buxus).jpg') },
    { id: 5, name: 'Rosemary', price: 1500, description: 'Shop Now', category: 'Herbs', image: require('../images/Rosemary.jpg') },
    { id: 6, name: 'Holly (Ilex)', price: 2200, description: 'Shop Now', category: 'Shrubs', image: require('../images/Holly (Ilex).jpg') },
    { id: 7, name: 'Maple Tree', price: 3500, description: 'Shop Now', category: 'Trees', image: require('../images/Maple (Acer).jpg') },
    { id: 8, name: 'Climbing Rose', price: 1800, description: 'Shop Now', category: 'Climbers', image: require('../images/Climbing Rose.jpg') },
    { id: 9, name: 'Periwinkle', price: 2900, description: 'Shop Now', category: 'Creepers', image: require('../images/Periwinkle.jpg') },
    { id: 10, name: 'Chives', price: 900, description: 'Shop Now', category: 'Herbs', image: require('../images/Chives.jpg') },
    { id: 11, name: 'Parsley', price: 3000, description: 'Shop Now', category: 'Herbs', image: require('../images/Parsley.jpg') },
    { id: 12, name: 'Hydrangea', price: 2200, description: 'Shop Now', category: 'Shrubs', image: require('../images/Hydrangea.jpg') },
    { id: 13, name: 'Oak', price: 3500, description: 'Shop Now', category: 'Trees', image: require('../images/Oak (Quercus).jpg') },
    { id: 14, name: 'Clematis', price: 1800, description: 'Shop Now', category: 'Climbers', image: require('../images/Clematis (Clematis spp.).jpg') },
    { id: 15, name: 'Moss', price: 1400, description: 'Shop Now', category: 'Creepers', image: require('../images/Moss.webp') },
    { id: 16, name: 'Honeysuckle', price: 1500, description: 'Shop Now', category: 'Climbers', image: require('../images/Honeysuckle (Lonicera spp.).jpg') },
    { id: 17, name: 'English Ivy', price: 1000, description: 'Shop Now', category: 'Climbers', image: require('../images/English Ivy.jpg') },
    { id: 18, name: 'Creeping Thyme', price: 1200, description: 'Shop Now', category: 'Creepers', image: require('../images/Creeping Thyme.jpg') },
    { id: 19, name: 'Creeping Jenny', price: 2000, description: 'Shop Now', category: 'Creepers', image: require('../images/Creeping Jenny.jpg') },
    { id: 20, name: 'Ajuga', price: 900, description: 'Shop Now', category: 'Creepers', image: require('../images/Ajuga.jpg') },
    { id: 21, name: 'Redbud', price: 3500, description: 'Shop Now', category: 'Trees', image: require('../images/Redbud (Cercis canadensis).jpg') },
    { id: 22, name: 'Pine (Pinus)', price: 3500, description: 'Shop Now', category: 'Trees', image: require('../images/Pine (Pinus).jpg') },
    { id: 23, name: 'Birch', price: 3500, description: 'Shop Now', category: 'Trees', image: require('../images/Birch (Betula).jpg') },
    { id: 24, name: 'Dogwood', price: 3500, description: 'Shop Now', category: 'Trees', image: require('../images/Dogwood (Cornus).jpg') },
    { id: 25, name: 'Magnolia', price: 3500, description: 'Shop Now', category: 'Trees', image: require('../images/Magnolia.jpg') },
    { id: 26, name: 'Azalea', price: 2100, description: 'Shop Now', category: 'Shrubs', image: require('../images/Lavender.jpg') },
    { id: 27, name: 'Rosemary', price: 2100, description: 'Shop Now', category: 'Shrubs', image: require('../images/Rosemary (Rosmarinus officinalis).jpg') },
    { id: 28, name: 'Japanese Barberry', price: 2100, description: 'Shop Now', category: 'Shrubs', image: require('../images/Japanese Barberry (Berberis thunbergii).jpg') },
    { id: 29, name: 'Lavender', price: 2100, description: 'Shop Now', category: 'Shrubs', image: require('../images/Lavender (Lavandula).jpg') },
  ];

  const categories = [
    { id: 1, name: 'Herbs', image: require('../images/herbs.jpg') },
    { id: 2, name: 'Shrubs', image: require('../images/shrubs.jpg') },
    { id: 3, name: 'Trees', image: require('../images/trees.jpg') },
    { id: 4, name: 'Climbers', image: require('../images/climbers.jpg') },
    { id: 5, name: 'Creepers', image: require('../images/creepers.jpg') },
  ];

  const airPurifyingPlants = [
    { id: 31, name: 'Aloe Vera', price: 1500, description: 'Shop Now', image: require('../images/AloeVera.jpg') },
    { id: 32, name: 'Lavender', price: 2000, description: 'Shop Now', image: require('../images/Lavender.jpg') },
    { id: 33, name: 'Snake Plant', price: 1080, description: 'Shop Now', image: require('../images/SnakePlant.jpg') },
    { id: 34, name: 'Spider Plant', price: 1600, description: 'Shop Now', image: require('../images/SpiderPlant.jpg') },
    { id: 35, name: 'Peace Lily', price: 2020,description: 'Shop Now', image: require('../images/PeaceLily.jpg') },
    { id: 36, name: 'Fiddle Leaf Fig', price: 3000, description: 'Shop Now', image: require('../images/FiddleLeafFig.jpg') },
    { id: 37, name: 'Monstera Deliciosa', price: 700, description: 'Shop Now', image: require('../images/MonsteraDeliciosa.jpg') },
    { id: 38, name: 'Pothos', price: 1400, description: 'Shop Now', image: require('../images/Pothos.jpg') },
    { id: 39, name: 'Succulent Mix', price: 1000, description: 'Shop Now', image: require('../images/SucculentMix.jpg') },
    { id: 40, name: 'ZZ Plant', price: 1070, description: 'Shop Now', image: require('../images/ZZPlant.jpg') },
    { id: 41, name: 'Bamboo Palm', price: 1900, description: 'Shop Now', image: require('../images/BambooPalm.jpg') },
    { id: 42, name: 'Rubber Plant', price: 2100, description: 'Shop Now', image: require('../images/RubberPlant.jpg') },
  ];

  const handleAddToCart = (plant) => {
    addToCart(plant);
    setAddedToCartItems([...addedToCartItems, plant.id]);
  };

  return (
    <div className="product-listing-page">
      {/* Header */}
      <header className="header">
        <div className="logo" onClick={handleGoBack}>
          <img src={logoImage} alt="Paradise Nursery" />
        </div>
        <nav>
          <ul>
            <Link to="/products">Home</Link>
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
 
      {/* Hero Section */}
      <div className="herosection">
        <img src={heroImage} alt="Perfect Plant Promotion" className="hero-image" />
        <div className="herocontent">
          <h2>Perfect Plant</h2>
          <p>Up To 50% Off Bonsai Tree</p>
          <button
            className={`shop-now-button ${isHeroAddedToCart ? 'added' : ''}`}
            onClick={() => handleAddToCartHero(heroPlant)}
            disabled={isHeroAddedToCart}
          >
            {isHeroAddedToCart ? 'Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className="categoriescontainer">
        {categories.map(category => (
          <div key={category.id} className="categorysection">
            <h3 className="categorytitle">{category.name}</h3>
            <div className="plantslist">
              {plants
                .filter(plant => plant.category === category.name)
                .map(plant => (
                  <div key={plant.id} className="plantcard">
                    <img src={plant.image} alt={plant.name} className="plantimage" />
                    <h4 className="plantname">{plant.name}</h4>
                    <p className="plantdescription">{plant.description}</p>
                    <p className="plantprice">Price: Ksh {plant.price}</p>
                    <button
                      className={`add-to-cart-button ${addedToCartItems.includes(plant.id) ? 'added' : ''}`}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCartItems.includes(plant.id)}
                    >
                      {addedToCartItems.includes(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Air Purifying Plants Section */}
      <div className="categoriescontainer">
        <h2 className="sectiontitle">Air Purifying Plants</h2>
        <div className="plantslist">
          {airPurifyingPlants.map((plant) => (
            <div key={plant.id} className="plantcard">
              <img src={plant.image} alt={plant.name} className="plantimage" />
              <h4 className="plant-name">{plant.name}</h4>
              <p className="plant-description">{plant.description}</p>
              <p className="plant-price">Price: Ksh {plant.price}</p>
              <button
                className={`add-to-cart-button ${addedToCartItems.includes(plant.id) ? 'added' : ''}`}
                onClick={() => handleAddToCart(plant)}
                disabled={addedToCartItems.includes(plant.id)}
              >
                {addedToCartItems.includes(plant.id) ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;