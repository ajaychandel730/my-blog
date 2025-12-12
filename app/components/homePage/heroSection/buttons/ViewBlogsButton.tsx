"use client"
import { Button } from "@heroui/button";
import Link from "next/link";
import React from "react";

const ViewBlogsButton = () => {
  return (
    <Button
      size="md"
      as={Link}
      radius="full"
      href="/blogs/category/all"
    >
      View Blogs
    </Button>
  );
};

export default ViewBlogsButton;
