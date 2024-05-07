import React, { useState } from 'react';
import './term.css'; // Import the CSS file

function TermsAndConditions() {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    setAccepted(true);
    // You can add further actions here upon acceptance, such as enabling a "Proceed" button.
  };

  return (
    <div className="term-container">
      <h2 className="term-heading">Terms and Conditions</h2>
      <div>
        <p className="term-paragraph">
          Welcome to Petal Pathway Flower Shop! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our website.
        </p>
        <p className="term-paragraph">
          1. Acceptance of Terms: By using our website, you agree to be bound by these Terms and Conditions, our Privacy Policy, and all other policies posted on our website.
        </p>
        <p className="term-paragraph">
          2. Use of the Website: You may use our website for lawful purposes only and in accordance with these terms. You agree not to use our website in any way that violates any applicable law or regulation, or to engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website.
        </p>
        {/* Add more terms as necessary */}
        <p className="term-paragraph">
          3. Changes to Terms: We reserve the right to modify or revise these Terms and Conditions at any time, and any such changes will be effective immediately upon posting on our website. Your continued use of our website after the posting of any changes constitutes acceptance of those changes.
        </p>
        <p className="term-paragraph">
          By clicking "Accept", you acknowledge that you have read and agree to our Terms and Conditions.
        </p>
        <button className="term-button" onClick={handleAcceptance} disabled={accepted}>
          {accepted ? 'Accepted' : 'Accept'}
        </button>
      </div>
    </div>
  );
}

export default TermsAndConditions;
