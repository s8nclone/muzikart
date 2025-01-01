"use client"

import Image from 'next/image'
import siteLogo from '/public/images/muzikart-logo.png'
import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import useStore from '@/store'
import { useRouter } from 'next/navigation'

function Header() {
  const { isAuth, logout } = useStore()
  const route = useRouter();
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

            {isAuth 
              ? (
                <button onClick={() => {logout(); route.push("/login")}}>Logout</button>
              ) 
              : (
                <Link href="/login">Login</Link>
              )
            }
          </div>
        </nav>
    </>
  )
}

export default Header