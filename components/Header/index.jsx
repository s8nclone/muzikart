"use client"

import Image from 'next/image'
import siteLogo from '/public/images/muzikart-logo.png'
import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import useStore from '@/store'
import { useRouter } from 'next/navigation'

function Header() {
  const { isAuth, logout, user } = useStore()
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

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
            <Link href="/shop">Shop</Link>
            <Link href="#">Catalog</Link>
            <Link href="/cart">Cart</Link>
          </div>
          <div className={styles.userLinks}>

            <p className={styles.userInfo}>Welcome {user?.username}!</p>
            {isAuth 
              ? (
                <button onClick={handleLogout}>Logout</button>
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