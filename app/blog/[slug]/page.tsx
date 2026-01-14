"use server";
import BlogContent from "@/app/components/blogs/BlogContent";
import Header from "@/app/components/Header";
import HomeBlogCardSekelton from "@/app/components/homePage/HomeBlogCardSekelton";
import React, { Suspense } from "react";
import type { Metadata } from "next";
import getBlogById from "@/actions/getBlogById";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const blogId = (await params).slug;
  const blog = await getBlogById(blogId);

  if (!blog) {
    return {
      title: "Blog not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    keywords: blog.topics,
    robots: {
      index: true,
      follow: true,
    },
  };
}

const page = async ({ params }: Params) => {
  const blogId = (await params).slug;

  return (
    <div className="flex w-full min-h-dvh p-4 pb-20 flex-col items-center">
      <Header />
      <Suspense fallback={<HomeBlogCardSekelton limit={1} />}>
        <div className="mt-20 flex prose prose-neutral prose-lg  max-w-none leading-relaxed">
          <BlogContent blogId={blogId} />
        </div>
      </Suspense>
    </div>
  );
};

export default page;
