import { Skeleton } from "@heroui/skeleton";
import React from "react";

const DropdownMenuListSkeleton = () => {
  return (
    <ul className="bg-red w-full space-y-6">
      {Array(6).fill(1).map((_, idx) => (
        <Skeleton key={idx} className="h-2 w-full rounded-full "></Skeleton>
      ))}
    </ul>
  );
};

export default DropdownMenuListSkeleton;
