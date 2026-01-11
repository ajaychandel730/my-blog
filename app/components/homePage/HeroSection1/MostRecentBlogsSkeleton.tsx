import React from 'react'
import SmallBlogCardSkeleton from './SmallBlogCardSkeleton'

const MostRecentBlogsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-2">
        {
            Array(6).fill(1).map((_, idx)=>(
                <SmallBlogCardSkeleton key={idx}/>
            ))
        }
    </div>
  )
}

export default MostRecentBlogsSkeleton