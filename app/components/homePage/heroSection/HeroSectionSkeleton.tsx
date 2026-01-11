import { Skeleton } from "@heroui/skeleton";
import React from "react";
import BlogSmallLineCardSkeleton from "./BlogSmallLineCardSkeleton";

const HeroSectionSkeleton = () => {
  return (
    <section className="w-full grid xl:grid-cols-2 grid-cols-1  gap-2  ">
      <Skeleton className="rounded-lg">
        <div className=" h-[300px] md:h-[500px] rounded-sm" />
      </Skeleton>
      <div className="flex flex-col  space-y-4 bg-white dark:bg-midnight-900 shadow rounded-sm p-2">
         <BlogSmallLineCardSkeleton key={1}/>
         <BlogSmallLineCardSkeleton key={2}/>
         <BlogSmallLineCardSkeleton key={3}/>
      </div>
    </section>
  );
};

export default HeroSectionSkeleton;
