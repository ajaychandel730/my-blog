import React from 'react'
import HeroWrapper from './heroSection/HeroWrapper';


const HomeMainSection = async() => {

  return (
    <section className='mt-20 flex flex-col items-center mx-auto  w-full lg:w-[900px]'>
      <HeroWrapper/>
    </section>
  )
}

export default HomeMainSection;