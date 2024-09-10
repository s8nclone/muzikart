'use client'

import React from 'react'
import siteLogo from '/public/images/muzikart-logo.png'
import Image from 'next/image'

function Footer() {
  return (
    <>
        <footer className='footer'>
            <div className='footer-top-section'>
                <div>
                    <Image src={siteLogo} alt='footer logo' width={200} height={200} />
                    <h1>MUZIKART</h1>
                </div>

                <div className='contact-section'>
                    <div>
                        <h5>Contact</h5>
                        <ul>
                            <li>Email</li>
                            <li>Hotline</li>
                            <li>Address</li>
                            <li>Blogs</li>
                            <li>Guides</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Links</h5>
                        <ul>
                            <li>Promotion</li>
                            <li>FAQs</li>
                            <li>Sponsorship</li>
                            <li>Help</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Company</h5>
                        <ul>
                            <li>About</li>
                            <li>Careers</li>
                            <li>Privacy policy</li>
                            <li>Partners</li>
                            <li>Security</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div>
                <p className="text-center">Copyright &copy; 2019 - All Rights Reserved</p>
            </div>
        </footer>
    </>
  )
}

export default Footer