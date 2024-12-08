import React from 'react'
import BlogCard from './BlogCard';
import BlogSearchInput from './BlogSearchInput';

const DefaultBlogs = () => {
  return (
    <div className={"mt-24 mx-auto w-full lg:w-[1015px] md:px-4 flex  flex-col items-center space-y-4"}>
        <BlogSearchInput/>
        <div className='mt-10 w-full   grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
          {
            Array(30).fill(1).map(()=>(
              <BlogCard/>
            ))
          }
        </div>
    </div>
  )
}

export default DefaultBlogs;