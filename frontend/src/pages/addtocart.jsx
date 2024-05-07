import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import { ShopContext } from "../pages/shop-context";

 

export const Addtocart = ({ flowerID }) => {

  const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  const [flowerInfo, setFlowerInfo] = useState(null);

 

  useEffect(() => {

    const fetchFlowerInfo = async () => {

      try {

        const response = await axios.get(`http://localhost:5000/petalpathway/browse/${flowerID}`);

        const flowerData = response.data.flower;

        // Set flowerInfo state with flower data from the response

        setFlowerInfo(flowerData);

      } catch (error) {

        console.error("Error fetching flower info:", error);

      }

    };

 

    if (flowerID) {

      fetchFlowerInfo();

    }

  }, [flowerID]);

 

  if (!flowerInfo) {

    return <div>Loading...</div>;

  }

 

  const { name, price, imageUrl } = flowerInfo;

 

  // Convert price from cents to dollars and format to two decimal places

  //const priceInDollars = (price / 100).toFixed(2);

 

  return (

    <div className="cartItem">

      <img src={imageUrl} alt={name} />

      <div className="description">

        <p>

          <b>{name}</b>

        </p>

        <p>Price: ${price}</p>

        <div className="countHandler">

          <button onClick={() => removeFromCart(flowerID)}> - </button>

          <input

            value={cartItems[flowerID] || 0}

            onChange={(e) => updateCartItemCount(Number(e.target.value), flowerID)}

          />

          <button onClick={() => addToCart(flowerID)}> + </button>

        </div>

      </div>

    </div>

  );

};

 

export default Addtocart;