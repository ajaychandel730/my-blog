import { Skeleton } from "@heroui/skeleton";
import React from "react";

const SmallBlogCardSkeleton = () => {
  return (
    <div aria-busy="true" className="w-[200px] space-y-5 p-4">
      <Skeleton className="rounded-lg" aria-hidden="true">
        <div className="h-24 rounded-lg bg-default-300" />
      </Skeleton>
      <div className="space-y-3">
        <Skeleton className="w-4/5 rounded-lg" aria-hidden="true">
          <div className="h-3 w-4/5 rounded-lg bg-default-200" />
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg" aria-hidden="true">
          <div className="h-3 w-3/5 rounded-lg bg-default-200" />
        </Skeleton>
      </div>
    </div>
  );
};

export default SmallBlogCardSkeleton;
