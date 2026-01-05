import { Skeleton } from "@heroui/skeleton"
import React from 'react'

const PublishBlogItemSkeleton = () => {
  return (
    <div className=" w-full h-20 flex items-center gap-3 bg-gray-50 dark:bg-midnight-900 p-2 rounded-lg">
      <div>
        <Skeleton className="flex rounded-full w-12 h-12 dark:bg-midnight-700" />
      </div>
      <div className="w-full flex flex-col gap-2">
        <Skeleton className="h-3 w-3/5 rounded-lg dark:bg-midnight-700" />
        <Skeleton className="h-3 w-4/5 rounded-lg dark:bg-midnight-700" />
      </div>
    </div>
  )
}

export default PublishBlogItemSkeleton