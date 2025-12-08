import React from "react";
import BlogSkeleton from "./BlogSkeleton";

const BlogLoading = () => {
  const list = Array(10).fill(0);

  return <div className= 'w-full grid gap-4 auto-rows-[380px] grid-cols-[repeat(auto-fill,minmax(300px,1fr))]'>
         {
            list.map((_, idx)=>(
                <BlogSkeleton key={idx}/>
            ))
         }
  </div>;
};

export default BlogLoading;
