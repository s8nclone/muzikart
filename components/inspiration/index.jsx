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
                    The inspiration behind MuzikArt stems from the profound connection between music and visual art.
                    Album covers are not just a means of identification; they are often works of art that evoke emotions,
                    capture the essence of an album, and resonate with listeners. With the increasing emphasis on digital
                    music streaming, the art of album covers should not be lost or forgotten.
                    This app draws inspiration from the desire to empower music fans and aspiring artists to
                    engage with music on a visual level. It encourages users to explore the rich tapestry of
                    album artwork, customize it to their liking, and share their unique creations with the world.
                    The sense of community and collaboration within the app fosters creativity and allows users to express
                    their passion for music in a whole new way. Whether you are a die-hard music fan or a budding graphic 
                    designer, MuzikArt invites you to be part of a vibrant and artistic music-loving community.
                </cite>
            </div>
            <div className={styles.socialDeck}>
                <ul> Contact me:
                    <li><Link href={"https://www.linkedin.com/in/abdulmuiz-farayola-8a8484224/"} ><FaLinkedin /></Link></li>
                    <li><Link href={"https://twitter.com/middles8n"} ><FaXTwitter /></Link></li>
                    <li><Link href={"https://github.com/s8nclone"} ><FaGithub /></Link></li>
                </ul>
            </div>

            <button className={styles.cta}><Link href={"https://github.com/s8nclone/muzikart"}>view code</Link></button>
        </section>
    </>
  )
}

export default InspirationSection