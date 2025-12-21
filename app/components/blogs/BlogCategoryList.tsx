"use server";
import React from "react";
import fetchGetBlogsByCategory from "@/actions/fetchGetBlogsByCategory";
import DefaultBlogs from "../searchPage/DefaultBlogs";
import BlogCard from "./BlogCard";
import { BlogCard as BlogCardInterface } from "@/types/blog";
import EmptyBlogsErrorMessage from "./EmptyBlogsErrorMessage";

type Props = {
  params: Promise<{ type: string }>;
};

const BlogCategoryList = async ({ params }: Props) => {
  const { type } = await params;

  if (type === "all") {
    return <DefaultBlogs />;
  }

  const blogs = (await fetchGetBlogsByCategory(
    `/api/blogs/category/${type}`
  )) as BlogCardInterface[];

  if (blogs.length == 0) {
    return <EmptyBlogsErrorMessage />;
  }

  return (
    <>
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
    </>
  );
};

export default BlogCategoryList;
