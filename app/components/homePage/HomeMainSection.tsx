"use server";
import React from 'react'
import HeroWrapper from './heroSection/HeroWrapper';
import HeroSection1 from './HeroSection1/HeroSection1';
import HeroSection2 from './HeroSection2/HeroSection2'
import ComponentErrorBoundary from '../ComponentErrorBoundary';

const HomeMainSection = async() => {

  return (
    <div className='my-20 flex flex-col px-4 items-center mx-auto  w-full  xl:w-[1200px] 2xl:w-[1400px]  space-y-10'>
        <HeroWrapper/>
        <HeroSection1/>
        <HeroSection2/>
    </div>
  )
}

export default HomeMainSection;