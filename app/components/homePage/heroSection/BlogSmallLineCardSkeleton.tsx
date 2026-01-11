import { Skeleton } from "@heroui/skeleton";
import React from "react";

const BlogSmallLineCardSkeleton = () => {
  return (
    <div className="w-full flex gap-4 min-h-[100px]">
      <div className="w-full space-y-2">
        <Skeleton className="flex w-full rounded-full h-4"></Skeleton>
        <Skeleton className="flex rounded-full h-4 w-[80%]"></Skeleton>
      </div>
      <Skeleton className="h-14 w-14 rounded-md">
      </Skeleton>
    </div>
  );
};

export default BlogSmallLineCardSkeleton;
