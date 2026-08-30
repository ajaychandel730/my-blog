"use server";
import React from "react";
import getBlogById from "@/actions/getBlogById";
import { notFound } from "next/navigation";
import CardContentWrapper from "./CardContentWrapper";
import ClientSideSessionWrapper from "../ClientSideSessionWrapper";


const BlogContent = async ({ blogId }: { blogId: string }) => {
  const blog = await getBlogById(blogId);
  
  if (!blog) {
    notFound();
  }

  const user = "user" in blog ? { ...blog.user} : {};

  const blogCard = {
    title: String(blog?.title ?? ""),
    banner: String(blog?.banner ?? ""),
    user: {name: user?.name || "", image: user?.image || ""},
    description: String(blog?.description ?? ""),
    content:
      "content" in blog && Array.isArray(blog.content) ? blog.content : [],
    date: "date" in blog ? blog.date.toISOString() : "",
  };

  return  (
    <ClientSideSessionWrapper>
        <CardContentWrapper {...blogCard} />
    </ClientSideSessionWrapper>
  );
};

export default BlogContent;
