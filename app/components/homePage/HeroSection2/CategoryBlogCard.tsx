"use server";
import React, { Suspense } from "react";
import { ChevronRight } from "lucide-react";
import CategoryBlogItems from "./CategoryBlogItems";
import CategoryBlogItemsSkeleton from "./CategoryBlogItemsSkeleton";

const CategoryBlogCard = async ({ topic }: { topic: string }) => {
  const level = "category-" + topic.toLowerCase().split(" ").join("-");

  return (
    <section aria-labelledby={level} className="rounded-md bg-white dark:bg-midnight-900 p-2 space-y-4">
      <div className="!text-sm flex items-center">
        <h2 id= {level} className="text-base capitalize truncate line-clamp-1">
          {topic}
        </h2>
        <ChevronRight className="w-5 h-5" />
      </div>
 
      <Suspense fallback={<CategoryBlogItemsSkeleton />}>
        <CategoryBlogItems topic={topic} />
      </Suspense>
    </section>
  );
};

export default CategoryBlogCard;
