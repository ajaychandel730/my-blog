import React from "react";
import BlogSearchInput from "../components/searchPage/BlogSearchInput";

const BlogsLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col space-y-4  w-full lg:w-[1015px] min-h-dvh ">
      <div className="mt-24 mb-10 flex w-full items-center justify-between">
        <h1 className="text-blue-600 text-xl">Community Blog</h1>
        <BlogSearchInput />
      </div>
      {children}
    </div>
  );
};

export default BlogsLayout;
