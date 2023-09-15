'use client'

import React from 'react'
import styles from './introBody.module.scss'
import Image from 'next/image'
import peace from '../../public/images/a-requiem-of-peace.png'
import misery from '../../public/images/dear-misery.jpg'
import divinity from '../../public/images/divinity.png'
import newLife from '../../public/images/new-life.png'
import Link from 'next/link'

function IntroBody() {
  return (
    <div className={styles.cta}>
        <div className={styles.textBox}>
            <h3>Your <em>Album</em> and <em>Artiste</em> name</h3>
            <h3>on <em>Custom</em> Album Design</h3>
            <Link href='/catalog'><button className='cta'>Shop Now</button></Link>
        </div>
        <div className={styles.gridBox}>
            <Image src={peace} alt='image 1' className={styles.img_1} width={200} height={300} />
            <Image src={misery} alt='image 2' className={styles.img_2} width={200} height={150} />
            <Image src={divinity} alt='image 3' className={styles.img_3} width={200} height={150} />
            <Image src={newLife} alt='image 4' className={styles.img_4} width={200} height={300}  />
        </div>
    </div>
  )
}

export default IntroBody