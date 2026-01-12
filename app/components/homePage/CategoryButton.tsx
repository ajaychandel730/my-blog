"use client";
import { Button } from "@heroui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const CategoryButton = ({ topic }: { topic: string }) => {
  const pathname = usePathname();
  const activeTopic = pathname.split("/")[3];
  const currTopic = topic.split(" ").join("-")

  return (
    <Button
      as={Link}
      key={topic}
      variant="light"
      type="button"
      color= {currTopic === activeTopic? "primary" : "default"}
      href={`/blogs/category/${currTopic}`}
      className={"py-2 px-4 rounded-full capitalize   text-sm"}
    >
      {topic}
    </Button>
  );
};

export default CategoryButton;
