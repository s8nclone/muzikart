"use client"

import Image from 'next/image'
import siteLogo from '/public/images/muzikart-logo.png'
import React from 'react'
import styles from './header.module.scss'
import Link from 'next/link'
import useStore from '@/store'
import { useRouter, usePathname } from 'next/navigation'

function Header() {
  const { isAuth, logout, authUser } = useStore()
  const router = useRouter();
  const pathname = usePathname();

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
            <Link className={`${pathname === "/" ? styles.active : ""}`} href="/">Home</Link>
            <Link className={`${pathname === "/shop" ? styles.active : ""}`} href="/shop">Shop</Link>
            <Link className={`${pathname === "/catalog" ? styles.active : ""}`} href="/catalog">Catalog</Link>
            <Link className={`${pathname === "/cart" ? styles.active : ""}`} href="/cart">Cart</Link>
          </div>
          <div className={styles.userLinks}>

            <p className={styles.userInfo}>Welcome {authUser?.username}!</p>
            {isAuth 
              ? (
                <button className={styles.btn} onClick={handleLogout}>Logout</button>
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