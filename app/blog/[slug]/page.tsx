"use server";
import BlogContent from "@/app/components/blogs/BlogContent";
import HomeBlogCardSekelton from "@/app/components/homePage/HomeBlogCardSekelton";
import ToastProvider from "@/app/ToastProvider";
import React, { Suspense } from "react";


type Params = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Params) => {
  const blogId = (await params).slug;

  return (
    <div className="flex w-full min-h-dvh p-4 pb-20 flex-col items-center">
      <Suspense fallback={<HomeBlogCardSekelton/>}>
        <BlogContent blogId={blogId} />
      </Suspense>
      <ToastProvider />
    </div>
  );
};

export default page;
