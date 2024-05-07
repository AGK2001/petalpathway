import React from 'react';

const ShippingPolicy = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    color: '#ff69b4',
    textAlign: 'center',
  };

  const subtitleStyle = {
    color: '#ff69b4',
  };

  const linkStyle = {
    color: '#ff69b4',
    textDecoration: 'none',
  };

  const paragraphStyle = {
    lineHeight: '1.6',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Shipping Policy</h2>
      <p style={paragraphStyle}>
        At Flower Paradise, we strive to provide timely delivery of fresh flowers to our customers. Please review the following information regarding our shipping policies:
      </p>
      <h3 style={subtitleStyle}>1. Delivery Areas</h3>
      <p style={paragraphStyle}>
        We currently offer delivery within [list your delivery areas here]. If your location is not listed, please contact us to inquire about the possibility of delivery.
      </p>
      <h3 style={subtitleStyle}>2. Delivery Timeframe</h3>
      <p style={paragraphStyle}>
        Orders placed before [specific time] will be processed and delivered on the same day. Orders placed after [specific time] will be processed the next business day. Please note that delivery times may vary depending on location and seasonal demand.
      </p>
      <h3 style={subtitleStyle}>3. Shipping Fees</h3>
      <p style={paragraphStyle}>
        Our shipping fees vary based on the delivery location and the size of the order. You can view the shipping fee for your order during the checkout process.
      </p>
      <h3 style={subtitleStyle}>4. Order Tracking</h3>
      <p style={paragraphStyle}>
        Once your order has been processed, you will receive a confirmation email containing a tracking number. You can use this tracking number to monitor the status of your delivery.
      </p>
      <h3 style={subtitleStyle}>5. Delivery Issues</h3>
      <p style={paragraphStyle}>
        If you encounter any issues with your delivery, please contact our customer service team immediately. We will work to resolve the issue and ensure that you receive your order as soon as possible.
      </p>
      <h3 style={subtitleStyle}>6. Additional Information</h3>
      <p style={paragraphStyle}>
        For any additional questions or concerns regarding our shipping policies, please refer to our <a href="/faq" style={linkStyle}>FAQ</a> page or contact our customer service team.
      </p>
    </div>
  );
}

export default ShippingPolicy;
