import React from 'react'
import LandingPage from './landingPage/LandingPage'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
// import styles from './page.module.scss'

function Page() {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  )
}

export default Page