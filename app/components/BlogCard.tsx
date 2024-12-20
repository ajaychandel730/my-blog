"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { TBlogCard } from "@/types/blog";

type Props = TBlogCard;

const BlogCard = ({ _id, title, topics, banner, description, date }: Props) => {

  const formatDate = date
    ? new Date(date).toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";
    
  return (
    <Card  shadow="sm" isPressable>
      <CardHeader>
        <h3 className="text-sm font-medium">{title}</h3>
      </CardHeader>
      <CardBody className="overflow-visible px-2 ">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          height="100%"
          alt={title}
          className="w-full object-cover aspect-video"
          src={banner}
        />
        <p className="text-sm h-[100px] font-normal tracking-normal line-clamp-3 leading-relaxed text-left text-wrap ">
          {description}
        </p>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <span className="text-sm font-thin ">{formatDate}</span>
        <div className="w-8 h-8 rounded-full bg-gray-400 "></div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
