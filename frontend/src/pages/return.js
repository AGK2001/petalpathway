import React, { useState } from 'react';
import './return.css'
function ReturnRefundPolicy() {
  const [returnReason, setReturnReason] = useState('');
  const [refundRequested, setRefundRequested] = useState(false);
  const [refundProcessed, setRefundProcessed] = useState(false);

  const handleReturnReasonChange = (event) => {
    setReturnReason(event.target.value);
  };

  const handleRefundRequest = () => {
    // Here you could implement logic to send refund request to server
    // For simplicity, we'll just set refundRequested to true
    setRefundRequested(true);
  };

  return (
    <div className="container">
      <h2>Return and Refund Policy</h2>
      <p>
        At Petal Pathway, we strive to ensure that every purchase meets and exceeds your expectations. However, we understand that there may be occasions where you may need to return a product or seek a refund. Please review our policy below:
      </p>
      <div>
        <h3>Returns:</h3>
        <p>If you need to return a product, please follow the instructions below:</p>
        <ul>
          <li>Products must be returned within 10 days of receipt.</li>
          <li>Products must be in their original packaging and in unused condition.</li>
          <li>Please include the reason for return when contacting us.</li>
        </ul>
      </div>
      <div>
        <h3>Refunds:</h3>
        <p>If you are eligible for a refund, the following conditions apply:</p>
        <ul>
          <li>Refunds will be issued to the original payment method.</li>
          <li>Refunds may take 14 business days to process.</li>
          <li>We reserve the right to refuse refunds if the products show signs of misuse or damage.</li>
        </ul>
      </div>
      {!refundRequested && !refundProcessed && (
        <div>
          <h3>Request a Refund:</h3>
          <p>If you would like to request a refund, please fill out the form below:</p>
          <form>
            <label>
              Reason for return:
              <input type="text" value={returnReason} onChange={handleReturnReasonChange} />
            </label>
            <button type="button" onClick={handleRefundRequest}>Request Refund</button>
          </form>
        </div>
      )}
      {refundRequested && !refundProcessed && (
        <div>
          <h3>Refund Requested</h3>
          <p>Your refund request has been submitted. We will review it and get back to you shortly.</p>
        </div>
      )}
      {refundProcessed && (
        <div>
          <h3>Refund Processed</h3>
          <p>Your refund has been processed. Please allow 10 business days for the refund to reflect in your account.</p>
        </div>
      )}
    </div>
  );
}

export default ReturnRefundPolicy;
