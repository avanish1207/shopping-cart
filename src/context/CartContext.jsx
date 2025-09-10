import React, { useState, useContext, createContext } from "react";

const CartContext=createContext();

export const CartProvider=({children})=>{
    const [cartItems, setCartItems]=useState([]);

    const addToCart=(product, quantity=1)=>{
        setCartItems(prevItems=>{
            const existingItem=prevItems.find(item=>item.id===product.id);
            if(existingItem){
                return prevItems.map(item=>
                    item.id===product.id?{...item,quantity:item.quantity+quantity}:item
                )
            } else{
                return [...prevItems, {...product, quantity}];
            }
        });
    }

    const removeFromCart=(productId)=>{
        setCartItems(prevItems=>{
            prevItems.filter(item=>item.id!==productId);
        })
    }

    const updateQuantity=(productId, newQuantity)=>{
        if(newQuantity<0){
            removeFromCart(productId);
            return;
        }
        setCartItems(prevItems=>{
            prevItems.map(item=>item.id===productId?{...item, quantity:newQuantity}:item);
        });
    }

    const getTotalPrice = () => {
        return cartItems.reduce((total, item) => 
        total + (item.price * item.quantity), 0
        ).toFixed(2);
    };

    const getTotalItems = () => {
        return cartItems.reduce((total, item) => 
        total + item.quantity, 0
        );
    };

    const value={
        cartItems, setCartItems, addToCart, removeFromCart, updateQuantity, getTotalPrice, getTotalItems
    };

    return(
        <CartContext.Provider value={value}>{children}</ CartContext.Provider>
    );
}

export const useCart=()=>{
    const context=useContext(CartContext);
    return context;
}