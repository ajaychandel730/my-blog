import React, { Suspense } from "react";
import DefaultBlogs from "../../../components/searchPage/DefaultBlogs";
import BlogCategoriesFilters from "@/app/components/blogs/BlogCategoriesFilters";
import BlogCategoryList from "@/app/components/blogs/BlogCategoryList";

type Params = {
  params : Promise<{type:string}>
}

const BlogsPage = async ({params}:Params) => {


  return (
    <section className="bg-gray-50  w-full flex flex-col p-2 rounded-md">
      {/* <DefaultBlogs/> */}
       <BlogCategoriesFilters/>
       <Suspense fallback={"...loading"}>
          <BlogCategoryList params ={params}/>
       </Suspense>
    </section>
  );
};

export default BlogsPage;
