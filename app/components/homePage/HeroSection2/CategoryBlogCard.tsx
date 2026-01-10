"use server";
import React from 'react'
import { ChevronRight } from 'lucide-react'
import CategoryBlogCardItem from './CategoryBlogCardItem'
import getFacetsBlogs from '@/actions/getFacetsBlogs';
import { MostLatestBlogType } from '@/types/blog';
import toLocaleDateString from '@/utils/toLocaleDateString';
import NoBlogsState from '../../blogs/NoBlogsState';

const CategoryBlogCard = async ({topic}:{topic:string}) => {
  const blogs:MostLatestBlogType[] = await getFacetsBlogs([topic]);
  
  if(blogs.length == 0){
     return <NoBlogsState/>
  }

  return (
    <div className='rounded-md bg-white dark:bg-midnight-900 p-2 space-y-4'>
        <div className="!text-sm flex items-center">
          <h2 className='text-base capitalize truncate line-clamp-1'> {topic} </h2>
          <ChevronRight className="w-5 h-5"/>
        </div>
        <div className='w-full space-y-4'>
          {
            blogs?.map(({_id, title, banner, date})=>(
              <CategoryBlogCardItem 
              key={_id} 
              _id = {_id}
              title ={title}
              banner = {banner}
              date = {toLocaleDateString(date)} 
              />

            ))
          }
        </div>
    </div>
  )
}

export default CategoryBlogCard