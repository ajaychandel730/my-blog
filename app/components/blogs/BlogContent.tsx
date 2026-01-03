"use server";
import React from "react";
import getBlogById from "@/actions/getBlogById";
import { notFound } from "next/navigation";
import CardContentWrapper from "./CardContentWrapper";
import { Blog } from "@/types/blog";
import ClientSideSessionWrapper from "../ClientSideSessionWrapper";


const BlogContent = async ({ blogId }: { blogId: string }) => {
  const blog = await getBlogById(blogId);

  if (!blog) {
    notFound();
  }

  const user = "user" in blog ? { ...blog.user} : {};

  const serializedBlog: Blog = {
    title: String(blog?.title ?? ""),
    banner: String(blog?.banner ?? ""),
    topics: "topics" in blog && Array.isArray(blog.topics) ? blog.topics : [],
    user: { email: user?.email || "", name: user?.name || "", image: user?.image || ""},
    description: String(blog?.description ?? ""),
    content:
      "content" in blog && Array.isArray(blog.content) ? blog.content : [],
    _id: String(blog?._id ?? ""),
    date: "date" in blog ? blog.date.toISOString() : "",
  };

  return  (
    <ClientSideSessionWrapper>
        <CardContentWrapper blog={serializedBlog} />
    </ClientSideSessionWrapper>
  );
};

export default BlogContent;
