import React, { useState } from "react";
import { checkout } from "./checkout";
import { useLocation } from "react-router-dom";
import "./Checkoutt.css";

const Checkoutt = ({ onCheckoutCancel }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const location = useLocation();
  const totalAmount = location.state ? location.state.totalAmount : 0;

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If the input is for cardNumber or cvv, allow only numbers
    if (name === "cardNumber" || name === "cvv") {
      // Remove any non-numeric characters
      const numericValue = value.replace(/\D/g, "");
      setPaymentInfo((prevInfo) => ({
        ...prevInfo,
        [name]: numericValue,
      }));
    } else {
      setPaymentInfo((prevInfo) => ({
        ...prevInfo,
        [name]: value,
      }));
    }
  };

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    if (paymentInfo.cardNumber.length !== 20) {
      setError("Card number must be exactly 20 digits.");
      setLoading(false);
      return;
    }
  
    // Validate cvv length
    if (paymentInfo.cvv.length !== 3) {
      setError("CVV must be exactly 3 digits.");
      setLoading(false);
      return;
    }

    try {
      const paymentSuccessful = await checkout(paymentInfo);
      if (paymentSuccessful) {
        setPaymentSuccess(true);
      } else {
        setError("Payment failed. Please try again.");
      }
    } catch (error) {
      setError(
        "An error occurred while processing your payment. Please try again later."
      );
    }

    setLoading(false);
  };

  const handleCheckoutSuccess = () => {
    window.location.href = "/confirmation";
  };

  const handleGoToHomePage= () => {
    window.location.href = "/home";
  };

  const handleCancel= () => {
    window.location.href = "/shop";
  };
  return (
    <div className="checkout-container">
      {paymentSuccess ? (
        <Confirmation />
      ) : (
        <>
          <h2 className="checkout-title">Checkout</h2>
          <p className="total-amount">Total Amount: ${totalAmount}</p>
          <form>
            <label className="label">
              Card Number:
              <input
                className="input-field"
                type="number" // Set input type to number
                name="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={handleInputChange}
              />
            </label>
            <label className="label">
              Expiry Date:
              <input
                className="input-field"
                type="date"
                name="expiryDate"
                value={paymentInfo.expiryDate}
                onChange={handleInputChange}
              />
            </label>
            <label className="label">
              CVV:
              <input
                className="input-field"
                type="number" // Set input type to number
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleInputChange}
              />
            </label>
          </form>
          <div className="payment-buttons">
            <button
              className="pay-now-btn"
              disabled={loading}
              onClick={handlePayment}
            >
              Pay Now
            </button>
            <button
              className="cancel-btn"
              disabled={loading}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </>
      )}
    </div>
  );
};

const Confirmation = ({ onGoToHomePage }) => {
  const handleGoToHomePage= () => {
    window.location.href = "/home";
  };
  return (
    <div className="confirmation-container">
      <h2>Thank you for your purchase!</h2>
      <p>Your order has been successfully placed.</p>
      <button
              className="home-btn"
              onClick={handleGoToHomePage}
            >Go to Home Page</button>
    </div>
  );
};


export default Checkoutt;
