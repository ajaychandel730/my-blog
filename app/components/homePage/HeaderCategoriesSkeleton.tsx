import React from 'react'
import CategoryFilterSkeleton from '../blogs/CategoryFilterSkeleton'

const HeaderCategoriesSkeleton = () => {
  return (
   <div className="hidden  xl:flex items-center justify-center p-2 space-x-4">
        <CategoryFilterSkeleton/>
    </div>
  )
}

export default HeaderCategoriesSkeleton