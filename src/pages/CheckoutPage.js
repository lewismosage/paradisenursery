import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import mpesalogo from '../images/mpesalogo.jpg';
import { CartContext } from '../context/CartContext';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { calculateTotalCost } = useContext(CartContext);

  // Handle form submission to trigger the SweetAlert
  const handleSubmit = (event) => {
    event.preventDefault();

    // SweetAlert2 Confirmation Popup
    Swal.fire({
      icon: 'success',
      title: 'Mpesa Payment Submitted!',
      text: 'Your payment has been submitted successfully! Download your receipt.',
      confirmButtonText: 'OK'
    });
  };

  return (
    <div className="checkoutpage">
      <h1>Checkout</h1>

      {/* Payment Section */}
      <section id="paymentsection">
        <h2>Payment</h2>
        <div className="payment-form-container">
          <form id="payment-form-mpesa" onSubmit={handleSubmit}>
            <img src={mpesalogo} alt="Mpesa Logo" className="mpesa-logo" />
            <h3>Pay with Mpesa</h3>
            <label htmlFor="total-amount-mpesa">Total Amount:</label>
            <span id="total-amount-mpesa">Ksh {calculateTotalCost()}</span>

            <label htmlFor="mpesa-phone">Phone Number:</label>
            <input type="tel" id="mpesa-phone" placeholder="+254XXXXXXXXX" required />

            <label htmlFor="mpesa-name">First Name and Surname:</label>
            <input type="text" id="mpesa-name" required />
            <p>If you did not receive the PUSH confirmation, please try to create a new request.</p>
            <button type="submit" className="confirm-button">Confirm</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default CheckoutPage;

