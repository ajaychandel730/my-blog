import React from 'react'
import HightCountTopicItemsSkeleton from './HightCountTopicItemsSkeleton'

const HightCountWrapperSkeleton = () => {
  return (
    <div className='flex flex-col space-y-4 bg-white dark:bg-midnight-900 p-4'>
       <HightCountTopicItemsSkeleton/>
    </div>
  )
}

export default HightCountWrapperSkeleton