import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { useNavigate, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logoImage from '../images/logo.jpg';
import { CartContext } from '../context/CartContext';
import '../styles.css';

const ContactUs = () => {
  const navigate = useNavigate();
  const { calculateTotalItems } = useContext(CartContext);

  const handleGoBack = () => {
    navigate('/');
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  // Handle form submission to show SweetAlert2 confirmation popup
  const handleSubmit = (event) => {
    event.preventDefault();

    // SweetAlert2 Confirmation Popup
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for reaching out to us. We will get back to you shortly.',
      confirmButtonText: 'OK'
    });
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

      {/* Main Content */}
      <main className="contact-us-content">
        <section className="contact-us-section">
          <h2 className="contact-us-title">Contact Us</h2>
          <p>
            We would love to hear from you! If you have any questions, comments,
            or feedback, please feel free to reach out to us.
          </p>

          <div className="contact-info">
            <h3>Our Contact Information</h3>
            <p>Email: info@paradisenursery.com</p>
            <p>Phone: (254) 123-4567</p>
            <p>Address: 123 Greenway Lane, Nairobi, Kenya</p>
          </div>

          <h3>Send Us a Message</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default ContactUs;
