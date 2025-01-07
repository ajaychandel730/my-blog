"use server";
import React from 'react'
import HomeBlogs from './HomeBlogs'

const HomeMainSection = () => {

  return (
    <section className='mt-20  w-full lg:w-[900px]'>
        <HomeBlogs/>
    </section>
  )
}

export default HomeMainSection