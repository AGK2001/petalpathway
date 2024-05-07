import React from 'react';
import './deliveryinformation.css'; // Import CSS file for styling

const DeliveryInformation = () => {
    return (
        <div className="delivery-info">
            <h2>Delivery Information</h2>
            <div className="delivery-options">
                <div className="delivery-option">
                    <h3>Local Delivery</h3>
                    <p>Same-day delivery available for orders within the city.</p>
                    <p>Delivery fee: $5</p>
                </div>
                <div className="delivery-option">
                    <h3>Nationwide Delivery</h3>
                    <p>Next-day delivery available nationwide.</p>
                    <p>Delivery fee: $10</p>
                </div>
            </div>
            <p className="contact-info">For more information or special requests, please contact us.</p>
        </div>
    );
}

export default DeliveryInformation;
