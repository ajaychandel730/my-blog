import React from 'react'
import HeroWrapper from './heroSection/HeroWrapper';
import HeroSection1 from './heroSection/HeroSection1';


const HomeMainSection = async() => {

  return (
    <div className='mt-20 flex flex-col items-center mx-auto  w-full lg:w-[80%] space-y-10'>
      <HeroWrapper/>
       <HeroSection1/>
    </div>
  )
}

export default HomeMainSection;