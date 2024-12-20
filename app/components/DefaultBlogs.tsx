"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import BlogSearchInput from "./BlogSearchInput";
import useSWR from "swr";
import { TBlogCard } from "@/types/blog";
import { fetcher } from "./HomeBlogs";
import BlogsPagination from "./BlogsPagination";
import { Spinner } from "@nextui-org/spinner";

const DefaultBlogs = () => {
  const [page, setPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<TBlogCard[]>([]);

  const { data, error, isLoading } = useSWR(
    `/api/getBlogs/?page=${page}&limit=10`,
    fetcher,
    {
      keepPreviousData  : true,
    }
  );
  
  const blogData = !data || !("data" in data) ? [] : data.data;

  const blogsData: TBlogCard[] = blogData
    ? Array.isArray(blogData)
      ? blogData
      : []
    : [];
    
    useEffect(()=>{
      if(!isLoading){
         if(blogsData.length > 0){
          setBlogs((preBlogs)=> [...preBlogs, ...blogsData]);
         }
      }

    }, [blogsData])
  return (
    <div
      className={
        "mt-24 mb-8 mx-auto w-full lg:w-[1015px] md:px-4 flex  flex-col items-center space-y-4"
      }
    >
      <BlogSearchInput />
      <div className="mt-10 w-full   grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {blogs.map(
          ({ _id, topics, banner, title, description, content, date }) => (
            <BlogCard
              key={_id}
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
      {
        blogsData.length != 0 &&  !isLoading && (
          <BlogsPagination setPage={setPage} isLoading={isLoading}/>
        )
      }
      {isLoading && <Spinner color="primary"/>}
    </div>
  );
};

export default DefaultBlogs;
