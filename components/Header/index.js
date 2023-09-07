import Image from 'next/image'
import siteLogo from '../Header/muzikart-logo.png'
import React from 'react'

function Header() {
  return (
    <>
        <div className="header">
            <Image 
                src={siteLogo}
                alt='site logo'
                width={70}
                height={70}
            />
        </div>
    </>
  )
}

export default Header