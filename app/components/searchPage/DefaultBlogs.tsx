"use client";
import React, { useEffect, useState } from "react";
import { BlogCard as BlogCardInterface } from "@/types/blog";
import BlogsEmptyState from "../blogs/BlogsEmptyState";
import BlogLoading from "../blogs/BlogLoading";
import BlogsPagination from "../BlogsPagination";
import BlogCard from "../blogs/BlogCard";
import useSWRInfinite from "swr/infinite";
import BlogSkeleton from "../blogs/BlogSkeleton";

const fetchPublishBlogs = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const getKey = (
  pageIndex: number,
  previousPageData: { status: string; result: BlogCardInterface[] }
) => {
  if (
    previousPageData &&
    (!("result" in previousPageData) || previousPageData?.result?.length == 0)
  ) {
    return null;
  }

  return `/api/getBlogs/?page=${pageIndex + 1}&limit=10`;
};

const DefaultBlogs = () => {
  const { data, error, isLoading, isValidating, size, setSize } =
    useSWRInfinite(getKey, fetchPublishBlogs, {
      revalidateFirstPage: false,
    });

  const lastPage = !data ? {} : data[data.length - 1];

  const blogs = !data
    ? []
    : data?.flatMap(({ result }: { result: BlogCardInterface[] }) => {
        if (result) {
          return result;
        } else {
          return [];
        }
      });
 
   // initial loading   
  if (isLoading && blogs.length == 0) {
    return <BlogLoading />;
  }
  
  if (error || (data && data[0]?.status !== "ok")) {
    return (
      <div className="w-full  flex  justify-center">
        <BlogsEmptyState type="connection_error" />
      </div>
    );
  } else if (!blogs || blogs.length == 0) {
    return (
      <div className="w-full flex justify-center">
        <BlogsEmptyState type="no_blogs" />
      </div>
    );
  }

  return (
    <div className={" mb-8 flex flex-col items-center w-full"}>
      {/* <BlogSearchInput /> */}
      <div className=" w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {blogs.map(
          ({ _id, topics, banner, title, description, date, user }) => (
            <BlogCard
              key={_id}
              user={user}
              topics={topics}
              _id={_id}
              title={title}
              banner={banner}
              description={description}
              date={date}
            />
          )
        )}
        {isValidating &&
          Array(6)
            .fill(0)
            .map((_, idx) => <BlogSkeleton key={idx} />)}
      </div>
      {blogs.length != 0 &&
        !isLoading &&
        "result" in lastPage &&
        lastPage.result?.length > 0 && <BlogsPagination setPage={setSize} />}
    </div>
  );
};

export default DefaultBlogs;
