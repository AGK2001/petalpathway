import React from 'react';
import './ContactUs.css'; // Import CSS file for styling

function ContactUs() {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p className="contact-text">If you have any questions or inquiries, please feel free to reach out to us using the contact information below:</p>
      <div className="contact-info">
        <h3>Email:</h3>
        <p>info@flowershop.com</p>
      </div>
      <div className="contact-info">
        <h3>Phone:</h3>
        <p>(123) 456-7890</p>
      </div>
      <div className="contact-info">
        <h3>Business Hours:</h3>
        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
        <p>Saturday: 10:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
    </div>
  );
}

export default ContactUs;
