"use client";
import React, { useEffect, useState } from "react";
import BlogSearchInput from "./BlogSearchInput";
import useSWR from "swr";
import { TBlogCard } from "@/types/blog";
import { Spinner } from "@heroui/spinner";
import { fetcheAllPublishBlogs } from "../homePage/HomeBlogs";
import BlogCard from "../blogs/BlogCard";
import BlogsPagination from "../BlogsPagination";

const DefaultBlogs = () => {
  const [page, setPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<TBlogCard[]>([]);

  const { data, error, isLoading } = useSWR(
    `/api/getBlogs/?page=${page}&limit=10`,
    fetcheAllPublishBlogs,
    {
      keepPreviousData: true,
    }
  );

  const verifydata = (result: object): TBlogCard[] => {
    const resultData = !result || !("data" in result) ? [] : result.data;

    const blogsData: TBlogCard[] = resultData
      ? Array.isArray(resultData)
        ? resultData
        : []
      : [];

    return blogsData;
  };

  const result = verifydata(data);
  console.log("blogs:", data);
  console.log("blogs state :", blogs);

  useEffect(() => {
    if (!isLoading) {
      if (result.length > 0) {
        setBlogs((preBlogs) => {
          const isAlreadyExist = preBlogs.some(
            (blog) => blog._id == result[0]._id
          );
          if (isAlreadyExist) return preBlogs;
          else return [...preBlogs, ...result];
        });
      }
    }
    return () => {
      console.log("distry.");
    };
  }, [result]);

  return (
    <div
      className={
        "mt-24 mb-8 mx-auto w-full lg:w-[1015px] md:px-4 flex  flex-col items-center space-y-4"
      }
    >
      <BlogSearchInput />
      <div className="mt-10 w-full   grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {blogs.map(
          ({
            _id,
            topics,
            banner,
            title,
            description,
            content,
            date,
            user,
          }) => (
            <BlogCard
              key={_id}
              user={user}
              topics={topics}
              _id={_id}
              title={title}
              banner={banner}
              description={description}
              content={content}
              date={date}
            />
          )
        )}
      </div>
      {result.length != 0 && !isLoading && (
        <BlogsPagination setPage={setPage} isLoading={isLoading} />
      )}
      {isLoading && <Spinner color="primary" />}
    </div>
  );
};

export default DefaultBlogs;
