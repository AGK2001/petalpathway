import React, {useContext} from "react";
import { ShopContext } from '../pages/shop-context';

export const Flower= (props) =>{
    const {flowerID, flowerName, flowerImg, flowerPrice} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext); 

    const cartItemCount = cartItems[flowerID];
    
    return (
        <div className = "flower">
            <img src = {flowerImg} alt={`Photo of ${flowerName}`}/>
            <div className = "description">
                <p><b>{flowerName}</b></p>
                <p>${flowerPrice}</p>
            </div>
            <button className ="addToCartBttn" onClick={() => addToCart(flowerID)}>
                Add To Cart {cartItemCount > 0 && <> {cartItemCount}</> }
            </button>
        </div>

    )
    
};