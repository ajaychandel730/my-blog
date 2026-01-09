"use server";
import React from 'react'
import HightCountTopicCard from './HightCountTopicCard'
import HeroHeader from '../../heroSection/HeroHeader'
import { MostLatestBlogType } from '@/types/blog';
import getTopFacet from '@/actions/getTopFacet';
import getHightCountFacetBlogs from '@/actions/getFacetsBlogs';

const HightCountTopicWrapper = async () => {
  const topFacet:string[] = (await getTopFacet(1)).map((val)=> val._id);
   
  if(topFacet.length == 0){
    topFacet.push("technology");
  }

  const result:MostLatestBlogType[]  = await getHightCountFacetBlogs(topFacet);

  if(result.length == 0){
    return <p>No  blogs found.</p>
  }

  return (
    <div className='flex flex-col space-y-4 bg-white dark:bg-midnight-900 p-4'>
      <HeroHeader heading={topFacet[0]}/>
      {
        result?.map(({_id, title, date, banner})=>(
          <HightCountTopicCard
           key={_id}
           _id={_id}
           title = {title}
           date = {date}
           banner = {banner}
          />

        ))
      }
    </div>
  )
}

export default HightCountTopicWrapper