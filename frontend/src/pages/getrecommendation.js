import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Recommendation() {
  const [options, setOptions] = useState({});
  const [recipient, setRecipient] = useState('');
  const [occasion, setOccasion] = useState('');
  const [feeling, setFeeling] = useState('');
  const [recommendedFlowers, setRecommendedFlowers] = useState([]);

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      const response = await axios.get('http://localhost:5000/petalpathway/browse/recommendation/options');
      setOptions(response.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const recommendFlower = async () => {
    try {
      const response = await axios.post('http://localhost:5000/petalpathway/browse/recommendation/recommend', {
        occasion,
        recipient,
        feeling,
      });
      
      setRecommendedFlowers(response.data.flowers);
    } catch (error) {
      console.error('Error recommending flower:', error);
    }
  };

  return (
    <div>
      <header>
        <input type="checkbox" name="" id="toggler"/>
        <label htmlFor="toggler" className="fas fa-bars"></label>
        <a href="#" className="logo" />
        <h1 className="heading"><span>Petal Pathway</span></h1>
        <nav className="navbar">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Flower</Link>
          <Link to="/getrecommendation">Get Recommendation</Link>
          <Link to="/login">Log In</Link>
          <Link to="/help">Help</Link>
        </nav>
        <div className="icons">
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-shopping-cart"></a>
          <a href="#" className="fas fa-user"></a>
        </div>
      </header>
      <h1>Flower Recommender</h1>
      <div>
        <label>Recipient:</label>
        <select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
          <option value="">Select Recipient</option>
          {options.recipients && options.recipients.map((recipient) => (
            <option key={recipient} value={recipient}>{recipient}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Occasion:</label>
        <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="">Select Occasion</option>
          {options.occasions && options.occasions.map((occasion) => (
            <option key={occasion} value={occasion}>{occasion}</option>
          ))}
        </select>
      </div>
      <div>
        <label>Feeling:</label>
        <select value={feeling} onChange={(e) => setFeeling(e.target.value)}>
          <option value="">Select Feeling</option>
          {options.feelings && options.feelings.map((feeling) => (
            <option key={feeling} value={feeling}>{feeling}</option>
          ))}
        </select>
      </div>
      <button onClick={recommendFlower}>Recommend Flower</button>
      <div>
        <h2>Recommended Flowers</h2>
        <ul style={{ fontSize: '1.2em' }}>
          {recommendedFlowers.map((flower, index) => (
            <li key={index}>
              <img src={flower.flowerImg} alt={flower.flowerName} style={{ width: '100px', height: '100px' }} />
              <div>Name: {flower.flowerName}</div>
              <div>Price: {flower.flowerPrice}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recommendation;
