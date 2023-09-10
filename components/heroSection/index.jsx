import React from 'react'
import styles from './heroSection.module.scss'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })
function HeroIntro() {
  return (
    <div className={styles.heroContainer}>
        <h1 className={montserrat.className}>MUZIKART</h1>
        <p>Home of quality Album art ...</p>
    </div>
  )
}

export default HeroIntro