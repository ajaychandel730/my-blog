"use client";
import React from "react";
import useSWR from "swr";
import HomeBlogCardSekelton from "./HomeBlogCardSekelton";
import { TBlogCard } from "@/types/blog";
import BlogBrief from "../blogs/BlogBrief";
import { toast } from "react-toastify";

export const fetcheAllPublishBlogs = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const HomeBlogs = () => {
  const {
    data,
    error,
    isLoading,
  } = useSWR("/api/getBlogs/?page=1&limit=10", fetcheAllPublishBlogs);
  const blogData = !data || !("data" in data)?  [] : data.data; 
  const blogs: TBlogCard[] = blogData ? (Array.isArray(blogData) ? blogData : []) : [];
  
  if(typeof error === "object" &&  "status" in error && error.status >= 400){
    toast.warn(error.message || "Something went wrong on server. Please try later.");
  }

  if (blogs.length == 0 &&  isLoading) {
    return Array(10)
      .fill(1)
      .map((_, idx) => <HomeBlogCardSekelton key={idx} />);
  }

  return (
    <div className="flex space-y-4 flex-col items-center mx-auto w-full ">
      {blogs.map(({_id, title, banner, description}) => (
        <BlogBrief
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
