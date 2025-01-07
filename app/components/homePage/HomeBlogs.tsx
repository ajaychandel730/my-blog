"use client";
import React from "react";
import useSWR from "swr";
import HomeBlogCardSekelton from "./HomeBlogCardSekelton";
import { TBlogCard } from "@/types/blog";
import BlogContent from "../blogs/BlogContent";
import { toast } from "react-toastify";
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
  
  if(typeof error === "object" &&  "status" in error && error.status >= 400){
    toast.warn(error.message || "Something went wrong on server. Please try later.");
  }

  if (blogs.length == 0 &&  isLoading) {
    return Array(10)
      .fill(1)
      .map((_) => <HomeBlogCardSekelton />);
  }

  return (
    <div>
      {blogs.map(({_id, title, banner, description}) => (
        <BlogContent
          key={_id}
          _id={_id}
          title={title}
          banner={banner}
          description={description}
          />
      ))}
    </div>
  );
};

export default HomeBlogs;
