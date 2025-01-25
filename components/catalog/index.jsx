import React from 'react'
import Image from 'next/image'

import styles from './CatalogCard.module.scss';

function CatalogCard({ product }) {
  return (
    <>
      <div className={styles.product}>
        <div className={styles.image}>
          <Image
            src={(`/images/albums/${product.imageName}`)}
            width={200}
            height={200}
            alt={product.title}
          />
        </div>
        <h3 className={styles.title}>{product.title}</h3>
      </div>
    </>
  )
}

export default CatalogCard