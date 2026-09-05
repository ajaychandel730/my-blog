import React, { Suspense } from "react";
import BlogCategoryList from "@/app/components/blogs/BlogCategoryList";
import BlogLoading from "@/app/components/blogs/BlogLoading";

type Params = {
  params: Promise<{ type: string }>;
};

const BlogsPage = async ({ params }: Params) => {
  return (
    <section className=" min-h-[500px]  bg-background  w-full flex flex-col p-2 rounded-md !mb-[100px] space-y-10">
      <Suspense fallback={<BlogLoading />}>
        <BlogCategoryList params={params} />
      </Suspense>
    </section>
  );
};

export default BlogsPage;
