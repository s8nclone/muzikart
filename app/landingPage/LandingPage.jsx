import FeaturesSection from '@/components/Features'
import IntroBody from '@/components/IntroBody/introBody'
import HeroIntro from '@/components/heroSection'
import InspirationSection from '@/components/inspiration'
import React from 'react'



function LandingPage() {
  return (
    <div>
        <HeroIntro />
        <IntroBody />
        <FeaturesSection />
        <InspirationSection />
    </div>
  )
}

export default LandingPage