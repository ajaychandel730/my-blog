"use server";
import BlogContent from "@/app/components/blogs/BlogContent";
import Header from "@/app/components/Header";
import HomeBlogCardSekelton from "@/app/components/homePage/HomeBlogCardSekelton";
import React, { Suspense } from "react";


type Params = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Params) => {
  const blogId = (await params).slug;

  return (
    <div className="flex w-full min-h-dvh p-4 pb-20 flex-col items-center">
      <Header/>
      <Suspense fallback={<HomeBlogCardSekelton limit={1}/>}>
         <div className="mt-20 flex">
             <BlogContent blogId={blogId} />
         </div>
      </Suspense>
    </div>
  );
};

export default page;
