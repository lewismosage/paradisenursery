import React, { useState } from 'react';
import mpesaLogo from './app.images/mpesalogo.jpg'; // Import the Mpesa logo

const Checkout = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [totalAmount, setTotalAmount] = useState('0.00'); // Default to 0.00

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for submitting the Mpesa payment request
    console.log('Payment Submitted', { phone, name, totalAmount });
  };

  return (
    <section id="payment-section" style={{ display: 'none' }}>
      <h2>Payment</h2>

      {/* Mpesa Payment Section */}
      <div className="payment-form-container">
        <form id="payment-form-mpesa" onSubmit={handleSubmit}>
          <img src={mpesaLogo} alt="Mpesa Logo" />

          <h3>Pay with Mpesa</h3>

          {/* Total Amount */}
          <label htmlFor="total-amount-mpesa">Total Amount:</label>
          <span id="total-amount-mpesa">{totalAmount}</span>

          {/* Phone Number */}
          <label htmlFor="mpesa-phone">Phone Number:</label>
          <input
            type="tel"
            id="mpesa-phone"
            placeholder="+254XXXXXXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />

          {/* Name */}
          <label htmlFor="mpesa-name">First Name and Surname:</label>
          <input
            type="text"
            id="mpesa-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <p>
            If you did not receive the PUSH confirmation please try to create a
            new request.
          </p>

          {/* Confirm Button */}
          <button type="submit">Confirm</button>
        </form>
      </div>
    </section>
  );
};

export default Checkout;
