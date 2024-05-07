import React, { useContext, useState } from 'react';
import { ShopContext } from '../pages/shop-context';
import { Addtocart } from '../pages/addtocart';
import { useNavigate } from 'react-router-dom';
import Checkout from './Payment';
//import Checkoutt from './Checkoutt';
import './cart.css';

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout: checkoutContext, flowers } = useContext(ShopContext);
  const { subtotal, tax, shippingFee, total } = getTotalCartAmount();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const handleCheckoutCancel = () => {
    setIsCheckingOut(false);
  };

  const handleCheckoutSuccess = () => {
    checkoutContext();
    navigate('/payment-confirmation');
  };

  return (
    <div className="cart">
      {isCheckingOut ? (
        <Checkout totalAmount={total} onCheckoutSuccess={handleCheckoutSuccess} onCheckoutCancel={handleCheckoutCancel} />
      ) : (
        <>
          <div>
            <h1>Your Cart Items</h1>
          </div>
          <div className="cartItems">
            {Object.keys(cartItems).map((flowerID) => (
              <Addtocart key={flowerID} flowerID={flowerID} flowerImg={flowers.find((item) => item.flowerID === parseInt(flowerID))?.flowerImg} />
            ))}
          </div>
          {subtotal > 0 ? (
            <div className="checkout">
              <p>Subtotal: ${(subtotal).toFixed(2)}</p>
              <p>Tax: ${(tax).toFixed(2)}</p>
              <p>Shipping Fee: ${(shippingFee).toFixed(2)}</p>
              <p>Total: ${(total).toFixed(2)}</p>
              <button onClick={() => navigate('/')}>Continue Shopping</button>
              <button onClick={handleCheckout}>Checkout</button>
            </div>
          ) : (
            <h1>Your Shopping Cart is Empty</h1>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;
