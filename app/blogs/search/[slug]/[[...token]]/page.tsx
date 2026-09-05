import React, { Suspense } from "react";
import SearchBlogs from "@/app/components/searchPage/SearchBlogs";
import BlogLoading from "@/app/components/blogs/BlogLoading";
import BlogSearchInput from "@/app/components/searchPage/BlogSearchInput";


import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

type Props = {
  params: Promise<{ slug: string; token?: string[] }>;
};

const SearchPage = async ({ params }: Props) => {
  const { slug, token } = await params;
  const query = decodeURIComponent(slug);
  const searchToken: string | undefined = token
    ? decodeURIComponent(token[0])
    : undefined;

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <h1 className="text-blue-600 text-xl hidden md:block">
          Community Blog
        </h1>
        <BlogSearchInput />
      </div>
      <Suspense fallback={<BlogLoading />}>
        <SearchBlogs query={query} token={searchToken} />
      </Suspense>
    </>
  );
};

export default SearchPage;
