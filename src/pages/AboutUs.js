import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logoImage from '../images/logo.jpg';
import teamMember1 from '../images/profileimage.jpeg';
import teamMember2 from '../images/profileimage.jpeg'; 
import teamMember3 from '../images/profileimage.jpeg'; 
import { CartContext } from '../context/CartContext';
import '../styles.css';

const AboutUs = () => {
  const navigate = useNavigate();
  const { calculateTotalItems } = useContext(CartContext);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleGoToCart = () => {
    navigate('/cart');
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

      <main className="about-us-content">
        <section className="about-us-section">
          <h2 className="about-us-title">About Us</h2>
          <p>
            Welcome to Paradise Nursery! We are dedicated to providing a diverse
            selection of beautiful house plants that can brighten your home and
            improve your indoor air quality. Our passion for plants drives us to
            curate a collection that suits every plant lover, from beginners to
            seasoned gardeners.
          </p>

          <h3>Our Mission</h3>
          <p>
            Our mission is to foster a love for plants and gardening in our
            community by offering high-quality plants and expert advice. We believe
            that every home can benefit from the beauty and tranquility that
            plants bring.
          </p>

          <h3>Meet Our Team</h3>
          <div className="team-members">
            <div className="team-member">
              <img src={teamMember1} alt="Jane Doe" />
              <h4>Jane Jane</h4>
              <p>Founder & Plant Specialist</p>
            </div>
            <div className="team-member">
              <img src={teamMember2} alt="John Smith" />
              <h4>John John</h4>
              <p>Operations Manager</p>
            </div>
            <div className="team-member">
              <img src={teamMember3} alt="Emily Johnson" />
              <h4>Emily Emily</h4>
              <p>Customer Service Expert</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
