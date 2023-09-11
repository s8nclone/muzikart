import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'
import Link from 'next/link'
import styles from './inspiration.module.scss'

function InspirationSection() {
  return (
    <>
        <section className={styles.inspirationSection}>
            <h3>Inspiration</h3>
            <div className={styles.inspSpeech}>
                <cite>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam molestiae esse quod sequi dolores iusto soluta, 
                    hic ex vel quae totam enim velit dicta, 
                    obcaecati laboriosam ab corporis neque minima!
                </cite>
            </div>
            <div className={styles.socialDeck}>
                <ul> Contact me:
                    <li><Link href={"#"} ><FaLinkedin /></Link></li>
                    <li><Link href={"#"} ><FaXTwitter /></Link></li>
                    <li><Link href={"#"} ><FaGithub /></Link></li>
                </ul>
            </div>

            <button className={styles.cta}><Link href={"#"}>view code</Link></button>
        </section>
    </>
  )
}

export default InspirationSection