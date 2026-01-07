"use client";
import React from 'react'
import HeroHeader from './HeroHeader'
import BlogCard from '../../blogs/BlogCard'
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card';
import router from 'next/router';
import { title } from 'process';
import SmallBlogCard from '../../blogs/SmallBlogCard';
import BlogSmallLineCard from '../BlogSmallLineCard';
import PicksForYouCard from '../PicksForYouCard';

const HeroSection1 = () => {
  return (
    <section className='w-full grid grid-cols-3 gap-2'>
       <div className=" col-span-2 space-y-2">
          <HeroHeader heading='Most Latest'/>
          <div className='grid grid-cols-3 gap-2'>
            <SmallBlogCard
              title='top 10 blogs jshd fjhs djfhs djfhsjd fjshd fjshd fjsdh fjshd fjshd'
              _id='j932ni'
              banner='/ourStoryBanner.webp'
              date= {new Date().toString()}
             />

             <SmallBlogCard
              title='top 10 blogs'
              _id='j932dni'
              banner='/ourStoryBanner.webp'
              date= {new Date().toString()}
             />

             <SmallBlogCard
              title='top 10 blogs'
              _id='j93sa2dni'
              banner='/ourStoryBanner.webp'
              date= {new Date().toString()}
             />

             <SmallBlogCard
              title='top 10 blogs'
              _id='j93ds2dni'
              banner='/ourStoryBanner.webp'
              date= {new Date().toString()}
             />

             <SmallBlogCard
              title='top 10 blogs'
              _id='j93sa2dni'
              banner='/ourStoryBanner.webp'
              date= {new Date().toString()}
             />
             <SmallBlogCard
              title='top 10 blogs'
              _id='j9ada32dni'
              banner='/ourStoryBanner.webp'
              date= {new Date().toString()}
             />
          </div>
       </div>
       <div className=''>
           <div className='w-full rounded-md shadow-md min-h-[300px] p-4 space-y-4'>
              <HeroHeader heading='Picks For You'/>
               <PicksForYouCard/>
               <PicksForYouCard/>
               <PicksForYouCard/>
               <PicksForYouCard/>
               <PicksForYouCard/>
           </div>
       </div>
    </section>
  )
}

export default HeroSection1