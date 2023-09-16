import Image from 'next/image'
import siteLogo from 'public/images/muzikart-logo.png'
import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'

function Header() {
  return (
    <>
        <nav className={styles.header}>
          <div>
            <Image 
                src={siteLogo}
                alt='site logo'
                width={50}
                height={50}
            />
          </div>
          <div className={styles.navLinks}>
            <Link href="/">Home</Link>
            <Link href="/catalog">Catalog</Link>
            <Link href="#">Shop</Link>
          </div>
          <div className={styles.userLinks}>
            <Link href="/cart">Cart</Link>
            <Link href="#">Login</Link>
          </div>
        </nav>
    </>
  )
}

export default Header