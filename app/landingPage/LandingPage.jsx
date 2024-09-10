import FeaturesSection from '@/components/Features'
import IntroBody from '@/components/IntroBody/introBody'
import HeroIntro from '@/components/heroSection'
import InspirationSection from '@/components/inspiration'
import React from 'react'
import styles from "./landingPage.module.scss"



function LandingPage() {
  return (
    <div className={styles.container}>
        <HeroIntro />
        <IntroBody />
        <FeaturesSection />
        {/* <InspirationSection /> */}
    </div>
  )
}

export default LandingPage