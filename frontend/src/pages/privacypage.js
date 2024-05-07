import React from 'react';
import './privacypage.css'; // Import the CSS file

function PrivacyPage() {
  return (
    <div className="privacy-container">
      <h2>Privacy Policy</h2>
      <div className="privacy-content">
        <p>
          At Petal Pathway Shop, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and disclose information about you when you use our website.
        </p>
        <h3>Information We Collect</h3>
        <p>
          We may collect personal information from you, such as your name, email address, phone number, and shipping address, when you make a purchase or sign up for our newsletter. We also collect information automatically when you visit our website, such as your IP address, browsing history, and device information.
        </p>
        {/* Add more sections as necessary */}
        <h3>How We Use Your Information</h3>
        <p>
          We use the information we collect to process your orders, communicate with you, improve our website and services, and personalize your experience. We may also use your information to send you promotional offers and marketing communications.
        </p>
        <h3>Information Sharing</h3>
        <p>
          We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you. We may also share your information in response to legal requests or to protect our rights, property, or safety.
        </p>
        <h3>Security</h3>
        <p>
          We take reasonable measures to protect the information we collect from loss, misuse, and unauthorized access, disclosure, alteration, and destruction.
        </p>
        <h3>Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
        </p>
        <h3>Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us at petalpathway.com.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPage;
