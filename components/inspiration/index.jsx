import React from 'react'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaGithub } from 'react-icons/fa6'

function InspirationSection() {
  return (
    <>
        <section className='inspiration-section'>
            <h3>Inspiration</h3>
            <div className='insp-speech'>
                <blockquote>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam molestiae esse quod sequi dolores iusto soluta, 
                    hic ex vel quae totam enim velit dicta, 
                    obcaecati laboriosam ab corporis neque minima!
                </blockquote>
            </div>
            <div className='socialDeck'>
                <ul>
                    <li><a><FaLinkedin /></a></li>
                    <li><a><FaXTwitter /></a></li>
                    <li><a><FaGithub /></a></li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default InspirationSection