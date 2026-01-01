"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { User } from "@heroui/user";
import GoBackButton from "./GoBackButton";
import NextImage from "next/image";
import { Blog } from "@/types/blog";
import ShowBlogContent from "./ShowBlogContent";
import toLocaleDateString from "@/utils/toLocaleDateString";
import BlogActionMenu from "./BlogActionMenu";


type Props = {
  blog: Blog;
  isBlogOwner : boolean;
};

const CardContentWrapper = ({ blog, isBlogOwner }: Props) => {
  const formattedDate = toLocaleDateString(blog.date, { month: "long" });

  return (
    <Card shadow="none" className="w-full bg-gray-50 lg:w-[900px] p-2 dark:bg-midnight-900">
      <CardHeader className="flex flex-col w-full p-0 items-start">
        <div className="flex w-full items-center justify-between">
          <GoBackButton />
            {isBlogOwner ? <BlogActionMenu /> : null}
        </div>
        <div className="flex w-full pl-4 mt-4 space-y-2  flex-col items-start">
          <span
            suppressHydrationWarning
            className="text-sm font-medium text-gray-500"
          >
            {formattedDate}
          </span>
          <User
            avatarProps={{
              imgProps: { loading: "lazy" },
              src: blog.user.image,
            }}
            description={
              blog.user?.email && blog.user.email.length > 0
                ? "@" + blog.user.email.split("@")[0]
                : ""
            }
            name={blog?.user?.name}
          />
          <h1 className=" font-[600] dark:text-midnight-200">{blog.title}</h1>
        </div>
      </CardHeader>
      <CardBody className="space-y-2 text-lg dark:text-midnight-200  tracking-normal ">
        <div className="relative w-full rounded-lg overflow-hidden aspect-video shadow-lg  bg-gray-200">
          <NextImage
           src={blog.banner}
           alt={blog.title}
           fill
          />
        </div>
        <p className="!mb-10 text-lg ">{blog.description}</p>
        <ShowBlogContent content={blog.content ?? []} />
      </CardBody>
    </Card>
  );
};

export default CardContentWrapper;
