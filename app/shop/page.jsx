'use client'

import React, { useState } from 'react'
import products from '../../public/products.json'
import styles from './Shop.module.scss'
import ProductDetails from '@/components/product-details'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import useStore from '@/store'

function ShopPage() {
  const store = useStore()
  const [cart, setCart] = useState({ products: [] })

  function addToCart(product) {
    const newCart = {
      ...cart,
      products: [...cart.products, { ...product }],
    };
    setCart(newCart)
    store.setProducts(newCart.products)
    console.log(store.products)
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.mainLeft}>
          <h1 className={styles.header}>Catalog</h1>
          <ul className={styles.products}>
            {products.map((product, index) => (
              <li key={index}>
                <ProductDetails product={product} addToCart={addToCart} />
              </li>
            ))}
          </ul>
        </div >
      </div>
      <Footer />
    </>
  )
}

export default ShopPage;