import React from 'react'
import HeroHeader from '../heroSection/HeroHeader'
import { Skeleton } from '@heroui/skeleton'

const Top15TopicsSkeleton = () => {
  return (
    <section aria-busy="true" aria-labelledby='top-topics' className="w-full rounded-md bg-white dark:bg-midnight-900  min-h-[300px] p-4 space-y-4">
      <HeroHeader id='top-topics' heading="Topics" />
       <Skeleton className='w-4/5 h-3 rounded-full' aria-hidden="true">
       </Skeleton>
       <Skeleton className='w-4/5 h-3 rounded-full' aria-hidden="true">
       </Skeleton>
       <Skeleton className='w-4/5 h-3 rounded-full' aria-hidden="true">
       </Skeleton>
       <Skeleton className='w-3/5 h-3 rounded-full' aria-hidden="true">
       </Skeleton>
    </section>
  )
}

export default Top15TopicsSkeleton