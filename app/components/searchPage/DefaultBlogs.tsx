"use client";
import React, { useEffect, useState } from "react";
import BlogSearchInput from "./BlogSearchInput";
import useSWR from "swr";
import { TBlogCard } from "@/types/blog";
import { Spinner } from "@heroui/spinner";
import BlogCard from "../blogs/BlogCard";
import BlogsPagination from "../BlogsPagination";

const fetchPublishBlogs = async (url: string) => {
  const res = await fetch(url);
  return res.json();
}

const DefaultBlogs = () => {
  const [page, setPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<TBlogCard[]>([]);

  const { data, error, isLoading } = useSWR(
    `/api/getBlogs/?page=${page}&limit=10`,
     fetchPublishBlogs,
    {
      keepPreviousData: true,
    }
  );

  const verifydata = (result: object | undefined): TBlogCard[] => {
    const resultData = !result || !("data" in result) ? [] : result.data;

    const blogsData: TBlogCard[] = resultData
      ? Array.isArray(resultData)
        ? resultData
        : []
      : [];

    return blogsData;
  };

  const result = verifydata(data);
 
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
        " mb-8 flex flex-col items-center w-full"
      }
    >
      {/* <BlogSearchInput /> */}
      <div className=" w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
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
