import React, { useState } from "react";
import { createContext } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getdefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.lenght+1; index++) {
    cart[index] = [];
  }
  return cart;
};

const ShopContextProvider = (props) => {

  const [cartItems, setCartItems] = useState(getdefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    console.log  (cartItems)  ;
  }

  const removeFromCart = (itemId) => {
   setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  }


  const contextValue = {all_product, cartItems, addToCart, removeFromCart};
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;