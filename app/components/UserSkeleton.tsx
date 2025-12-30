"use client";
import { Skeleton } from "@heroui/skeleton";
import React from "react";

const UserSkeleton = () => {
  return (
    <div className="space-x-1 flex items-center p-1">
      <Skeleton className="w-10 h-10 rounded-full"></Skeleton>
      <div className="pt-2 space-y-1">
        <Skeleton className="h-1.5 w-14 hidden sm:flex rounded-md"></Skeleton>
        <Skeleton className="h-1.5 w-10 hidden sm:flex rounded-md"></Skeleton>
      </div>
    </div>
  );
};

export default UserSkeleton;
