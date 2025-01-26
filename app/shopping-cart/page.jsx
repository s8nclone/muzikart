"use client"

import styles from './Cart.module.scss'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import useStore from '@/store';
import React from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import withAuth from '@/hooks/withAuth'
import Cart from '@/components/cartPage';

function CartPage() {
  const store = useStore();
  const router = useRouter();
  const cartItems = store.products;

  function removeItemFromCart(product) {
    const updatedProducts = cartItems.filter((item) => item._id !== product._id);
    store.setProducts(updatedProducts);
  }

  function onCheckout() {
    const updatedCatalog = [...store.catalog, ...cartItems];
    store.setCatalog(updatedCatalog);
  
    // Clear the cart
    store.setProducts([]);
    
    toast.success("Checkout successful", {
      position: "top-right"
    })
    router.push("/catalog")
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.header}>Your Cart Items:</h2>
        <div className={styles.products}>
          <Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart}/>
        </div>

        <button className={styles.btn} onClick={onCheckout} >Checkout</button>
      </div>
      <Footer />
    </>
  )
}

export default withAuth(CartPage);