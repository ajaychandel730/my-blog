"use server";
import React from 'react'
import HeroHeader from '../heroSection/HeroHeader'
import CategoryBlogCard from './CategoryBlogCard'
import getTopFacet from '@/actions/getTopFacet';

const HeroSection2 = async () => {
  const categories = (await getTopFacet(6)).map(({_id}) => _id);
  
  if(categories.length == 0){
    return null;
  }  
  
  return (
    <div className='w-full space-y-4'>
        <HeroHeader heading={"Categories"} isIcon={false}/>
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-2 gap-y-4'>
          {
            categories?.map((topic)=>(
              <CategoryBlogCard topic={topic} key={topic} />
            ))
          }
        </div>
    </div>
  )
}

export default HeroSection2