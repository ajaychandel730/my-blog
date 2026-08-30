"use client";
import React from "react";
import StoreProvider from "@/app/StoreProvider";
import dynamic from "next/dynamic";
const BlogEditor = dynamic(()=> import("./BlogEditor"), {ssr : false});

const ClientBlogEditor = () => {
  
  return (
    <StoreProvider>
      <BlogEditor  />
    </StoreProvider>
  );
};

export default ClientBlogEditor;
