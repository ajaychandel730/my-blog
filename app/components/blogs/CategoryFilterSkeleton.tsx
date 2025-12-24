
import React from "react";
import { Skeleton } from "@heroui/skeleton";

const CategoryFilterSkeleton = () => {

  return (
    <div className="w-full flex !m-0 items-center p-2 space-x-6">
      {Array(4)
        .fill(1)
        .map((_, idx) => (
          <div key={idx} className="flex  justify-center flex-col rounded-full w-20 h-10 p-2  bg-gray-100 space-y-1">
            <Skeleton  className="w-[90%] h-1 rounded-full"></Skeleton>
            <Skeleton  className="w-[50%] h-1 rounded-full"></Skeleton>
          </div>
        ))}
    </div>
  );
};

export default CategoryFilterSkeleton;
