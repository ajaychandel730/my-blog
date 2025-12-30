"use client";
import React from "react";
import StoreProvider from "@/app/StoreProvider";
import dynamic from "next/dynamic";
const BlogEditor = dynamic(()=> import("./BlogEditor"), {ssr : false});

const ClientBlogEditor = ({type}:{type:string}) => {
  return (
    <StoreProvider>
      <BlogEditor type={type} />
    </StoreProvider>
  );
};

export default ClientBlogEditor;
