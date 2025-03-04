"use server";
import getBlogById from "@/actions/getBlogById";
import { notFound } from "next/navigation";
import React from "react";
import CardContentWrapper from "./CardContentWrapper";
import { TBlogCard } from "@/types/blog";
import { User } from "@/lib/types";
import { isUser } from "@/utils/isUser";

const BlogContent = async ({ blogId }: { blogId: string }) => {
  const blog = await getBlogById(blogId);

  if (!blog) {
    notFound();
  }

  const user = "user" in blog ? { ...blog.user, _id: blog.userId.toString() } : {};

  const serializedBlog: TBlogCard = {
    title: String(blog?.title ?? ""),
    banner: String(blog?.banner ?? ""),
    topics: "topics" in blog && Array.isArray(blog.topics) ? blog.topics : [],
    user: isUser(user) ? user : { email: "", name: "", image: "", _id: "" },
    description: String(blog?.description ?? ""),
    content:
      "content" in blog && Array.isArray(blog.content) ? blog.content : [],
    _id: String(blog?._id ?? ""),
    date: "date" in blog ? blog.date.toISOString() : "",
  };

  return <CardContentWrapper blog={serializedBlog} />;
};

export default BlogContent;
