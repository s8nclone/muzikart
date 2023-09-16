'use client'

import { createContext, useContext, useReducer, useEffect } from 'react';
import { cartReducer } from './cartReducer';
// import Header from '@/components/Header';
// import Footer from '@/components/Footer';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, []);

  // Load cart data from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      dispatch({ type: 'SET_CART', payload: JSON.parse(storedCart) });
    }
  }, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
