"use server";
import BlogContent from "@/app/components/blogs/BlogContent";
import React, { Suspense } from "react";

type Params = {
  params: Promise<{ slug: string }>;
};

const page = async ({ params }: Params) => {
  const blogId = (await params).slug;

  return (
    <div className="flex w-full p-4 mb-20 flex-col items-center ">
      <Suspense fallback={<>loading...</>}>
          <BlogContent blogId={blogId} />
      </Suspense>
    </div>
  );
};

export default page;
