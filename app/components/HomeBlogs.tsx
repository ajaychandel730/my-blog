"use client";
import React from "react";
import useSWR from "swr";
import HomeBlogCardSekelton from "./HomeBlogCardSekelton";
import { TBlogCard } from "@/types/blog";
import BlogContent from "./BlogContent";

export const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const HomeBlogs = () => {
  const {
    data,
    error,
    isLoading,
  } = useSWR("/api/getBlogs/?page=1&limit=10", fetcher);
  const blogData = !data || !("data" in data)?  [] : data.data; 
  const blogs: TBlogCard[] = blogData ? (Array.isArray(blogData) ? blogData : []) : [];

  if (blogs.length == 0 &&  isLoading) {
    return Array(10)
      .fill(1)
      .map((_) => <HomeBlogCardSekelton />);
  }

  return (
    <div>
      {blogs.map(({ _id, title, banner, description, content, topics, date }) => (
        <BlogContent
          key={_id}
          topics={topics}
          _id={_id}
          title={title}
          banner={banner}
          description={description}
          content={content} 
          date={date}
          />
      ))}
    </div>
  );
};

export default HomeBlogs;
