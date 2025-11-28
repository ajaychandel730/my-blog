"use client";

import Link from "next/link";
import React from "react";
import { PenSquare } from "lucide-react";
type Props = {
  color?:
    | "default"
    | "primary"
    | "warning"
    | "secondary"
    | "success"
    | "danger";
};

const CreateBlogButton = () => {
  return (
    <>
      <Link
        href={"/blog/create"}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Create Blog"
      >
        <PenSquare className="w-5 h-5" />
        <span className="hidden sm:inline">Create Blog</span>
      </Link>
    </>
  );
};

export default CreateBlogButton;
