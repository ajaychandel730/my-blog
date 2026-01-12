"use server";
import React from "react";
import fetchGetBlogsByCategory from "@/actions/fetchGetBlogsByCategory";
import DefaultBlogs from "../searchPage/DefaultBlogs";
import BlogCard from "./BlogCard";
import { BlogCard as BlogCardInterface } from "@/types/blog";
import EmptyBlogsErrorMessage from "./EmptyBlogsErrorMessage";
import { ChevronRight } from "lucide-react";

type Props = {
  params: Promise<{ type: string }>;
};

const BlogCategoryList = async ({ params }: Props) => {
  const { type } = await params;

  if (type === "all") {
    return <DefaultBlogs />;
  }

  const query = type.split("-").join(" ");

  const blogs = (await fetchGetBlogsByCategory(
    `/api/blogs/category/${query}`
  )) as BlogCardInterface[];

  if (blogs.length == 0) {
    return <EmptyBlogsErrorMessage />;
  }

  return (
    <div className="w-full space-y-6">
      <div className="!text-sm flex items-center ml-3 font-[600] ">
        <h1 className="text-xl capitalize truncate line-clamp-1">{query}</h1>
        <ChevronRight className="w-6 h-6 " />
      </div>

      <div className="w-full grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {blogs.map(
          ({ _id, title, banner, topics, description, date, user }) => (
            <BlogCard
              key={_id}
              _id={_id}
              topics={topics}
              title={title}
              banner={banner}
              description={description}
              date={date}
              user={user}
            />
          )
        )}
      </div>
    </div>
  );
};

export default BlogCategoryList;
