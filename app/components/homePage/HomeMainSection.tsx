"use server";
import React from 'react'
import HomeBlogs from './HomeBlogs'

const HomeMainSection = () => {

  return (
    <section className='mt-20 flex flex-col items-center mx-auto  w-full lg:w-[900px]'>
        <HomeBlogs/>
    </section>
  )
}

export default HomeMainSection