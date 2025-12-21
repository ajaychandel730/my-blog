import React, { Suspense } from "react";
import BlogCategoriesFilters from "@/app/components/blogs/BlogCategoriesFilters";
import BlogCategoryList from "@/app/components/blogs/BlogCategoryList";
import BlogLoading from "@/app/components/blogs/BlogLoading";
import CategoryFilterSkeleton from "@/app/components/blogs/CategoryFilterSkeleton";

type Params = {
  params : Promise<{type:string}>
}

const BlogsPage = async ({params}:Params) => {

  return (
    <section className=" min-h-[500px] bg-gray-50 border-t-1 border-t-gray-300 w-full flex flex-col p-2 rounded-md !mb-[100px] space-y-10">
      {/* <DefaultBlogs/> */}
       <Suspense fallback={<CategoryFilterSkeleton/>}>
           <BlogCategoriesFilters/>
       </Suspense>
       <Suspense fallback={<BlogLoading/>}>
          <BlogCategoryList params ={params}/>
       </Suspense>
    </section>
  );
};

export default BlogsPage;
