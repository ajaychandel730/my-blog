"use client";
import React, { useEffect, useState } from "react";
import BlogSearchInput from "./BlogSearchInput";
import useSWR from "swr";
import { TBlogCard } from "@/types/blog";
import { Spinner } from "@nextui-org/spinner";
import { fetcher } from "../homePage/HomeBlogs";
import BlogCard from "../blogs/BlogCard";
import BlogsPagination from "../BlogsPagination";

const DefaultBlogs = () => {
  const [page, setPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<TBlogCard[]>([]);

  const { data, error, isLoading } = useSWR(
    `/api/getBlogs/?page=${page}&limit=10`,
    fetcher,
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

  useEffect(() => {
    if (!isLoading) {
      if (result.length > 0) {
        setBlogs((preBlogs) => [...preBlogs, ...result]);
      }
    }
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
            userName,
            userId,
            userImg,
          }) => (
            <BlogCard
              key={_id}
              userName={userName}
              userImg={userImg}
              userId={userId}
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
