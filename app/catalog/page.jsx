"use client"

import Catalog from '@/components/catalog'
import styles from './Catalog.module.scss'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import useStore from '@/store';
import React from 'react';

function CartPage() {
  const store = useStore();
  const catalogItems = store.catalog;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.header}>Catalog</h2>
        <ul className={styles.products}>
            {catalogItems.map((product, index) => (
                <li key={index}>
                  <Catalog product={product}/>
                </li>
            ))}
        </ul>

      </div>
      <Footer />
    </>
  )
}

export default CartPage