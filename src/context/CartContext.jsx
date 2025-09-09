import React, { useState, useContext, createContext } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cartItems, setCartItems]=useState([]);

    const value={
        cartItems, setCartItems
    };

    return(
        <CartContext.Provider value={value}>{children}</ CartContext.Provider>
    );
}

export const useCart=()=>{
    const context=useContext(CartContext);
    return context;
}