"use client";
import Link from "next/link";
import React from "react";
import { PenSquare } from "lucide-react";
import { Button } from "@heroui/button";
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
      <Button
        as={Link}
        isIconOnly
        variant="light"
        href={"/blog/create"}
        className="inline-flex px-0 w-fit items-center sm:px-4 sm:py-2 rounded-full sm:rounded-lg text-gray-700 text-foreground"
        aria-label="Create Blog"
      >
        <PenSquare className="w-5 h-5" />
        <span className="hidden sm:inline px-2">Create Blog</span>
      </Button>
    </>
  );
};

export default CreateBlogButton;
