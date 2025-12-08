import { Grid3X3 } from 'lucide-react'
import React from 'react'

const EmptyBlogsErrorMessage = () => {

  return (
    <div className='h-[500px] w-full flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center space-y-2'>
           <Grid3X3 className='w-14 h-14 stroke-1 stroke-gray-500'/>
           <span className='text-base font-medium '>No blogs found</span>
        </div>
    </div>
  )
}

export default EmptyBlogsErrorMessage