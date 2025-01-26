"use client"

import CatalogCard from '@/components/catalogCard'
import styles from './Catalog.module.scss'
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import useStore from '@/store';
import React from 'react';
import withAuth from '@/hooks/withAuth';

function CatalogPage() {
  const store = useStore();
  const catalogItems = store.catalog;

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2 className={styles.header}>Catalog</h2>

        {catalogItems > 0 
          ? (
            <ul className={styles.products}>
                {catalogItems.map((product, index) => (
                    <li key={index}>
                      <CatalogCard product={product}/>
                    </li>
                ))}
            </ul>
          ) : (
            <>
              <h3 className={styles.emptyCart}>You have no items in your catalog!</h3>
            </>
          )
        }

      </div>
      <Footer />
    </>
  )
}

export default withAuth(CatalogPage);