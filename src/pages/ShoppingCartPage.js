import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import logoImage from '../images/logo.jpg'; 
import '../styles.css';

const ShoppingCartPage = () => {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity, calculateTotalItems, calculateTotalCost } = useContext(CartContext);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/products');
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const handleContinueShopping = () => {
    navigate('/shop');
  };

  const handleCheckOut = () => {
    // Check if the cart has items before proceeding to checkout
    if (cartItems.length === 0) {
      alert('Your cart is empty! Please add items to your cart before proceeding to checkout.');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="shopping-cart-page">
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

      <div className="shopping-cart">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p className="price">Price: Ksh {item.price}</p>
                <p className="subtotal">Subtotal: Ksh {item.price * item.quantity}</p>
                <div>
                  <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Total Items: {calculateTotalItems()}</h2>
          <h2>Total Cost: Ksh {calculateTotalCost()}</h2>
          <button onClick={handleContinueShopping}>Continue Shopping</button>
          <button onClick={handleCheckOut}>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
