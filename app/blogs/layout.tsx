import React from "react";
import BlogSearchInput from "../components/searchPage/BlogSearchInput";
import Header from "../components/Header";

const BlogsLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-4  w-full lg:w-[1015px] xl:w-[1260px] min-h-dvh p-4">
        {children}
      </div>
    </>
  );
};

export default BlogsLayout;
