import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const fetchFlowers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/petalpathway/browse');
        setFlowers(response.data.flowers);
      } catch (error) {
        console.error('Error fetching flower data:', error);
      }
    };

    fetchFlowers();
  }, []);

  const addToCart = (flowerID) => {
    setCartItems((prev) => ({ ...prev, [flowerID]: (prev[flowerID] || 0) + 1 }));
  };

  const removeFromCart = (flowerID) => {
    setCartItems((prev) => ({ ...prev, [flowerID]: Math.max((prev[flowerID] || 0) - 1, 0) }));
  };

  const updateCartItemCount = (newAmount, flowerID) => {
    setCartItems((prev) => ({ ...prev, [flowerID]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    let subtotal = 0;

    for (const flowerID in cartItems) {
      if (cartItems.hasOwnProperty(flowerID)) {
        const flower = flowers.find((item) => item.flowerID === parseInt(flowerID));
        const price = flower?.flowerPrice || 0;
        subtotal += cartItems[flowerID] * price;
        total += cartItems[flowerID] * price;
      }
    }

    const tax = 0.07 * subtotal;
    total += tax;

    const shippingFee = subtotal < 100 ? 10 : 0;
    total += shippingFee;

    return { subtotal, tax, shippingFee, total };
  };

  const checkout = () => {
    setCartItems({});
  };

  const contextValue = {
    cartItems,
    flowers,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    checkout,
  };

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
