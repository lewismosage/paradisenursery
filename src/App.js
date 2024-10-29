//src/App
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProductListingPage from './pages/ProductListingPage';
import AboutUs from './pages/AboutUs';
import Shop from './components/Shop'
import ContactUs from './pages/ContactUs'
import ShoppingCartPage from './pages/ShoppingCartPage';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router basename="/paradisenursery"> 
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductListingPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
