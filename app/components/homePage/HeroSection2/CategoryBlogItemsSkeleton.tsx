import React from 'react'
import BlogSmallLineCardSkeleton from '../heroSection/BlogSmallLineCardSkeleton'

const CategoryBlogItemsSkeleton = () => {
  return (
     <div className='w-full space-y-4'>
          {
            Array(5).fill(1).map((_, idx)=>(
              <BlogSmallLineCardSkeleton key={idx}/>
            ))
          }
        </div>
  )
}

export default CategoryBlogItemsSkeleton