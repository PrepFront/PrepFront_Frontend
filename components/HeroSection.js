import React from 'react'
import LeftHeroSection from './LeftHeroSection'
import RightHeroSection from './RightHeroSection'

function HeroSection() { 
  return (
    <div className='flex flex-col pt-[80px] xs:pt-[200px] sm:pt-[100px] items-center lg:flex-row'>
        <LeftHeroSection/>
        <RightHeroSection/> 
    </div>
  )
}

export default HeroSection