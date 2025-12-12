"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { User } from "@heroui/user";
import GoBackButton from "./GoBackButton";
import { Blog } from "@/types/blog";
import ShowBlogContent from "./ShowBlogContent";
import toLocaleDateString from "@/utils/toLocaleDateString";
import BlogActionMenu from "./BlogActionMenu";

type Props = {
  blog: Blog;
};

const CardContentWrapper = ({ blog }: Props) => {
  const formattedDate = toLocaleDateString(blog.date, { month: "long" });

  return (
    <Card shadow="none" className="w-full bg-gray-50 lg:w-[900px] p-2">
      <CardHeader className="flex flex-col w-full p-0 items-start">
        <div className="flex w-full items-center justify-between">
          <GoBackButton />
          <BlogActionMenu />
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
              src: blog.user.image,
            }}
            description={
              blog.user?.email && blog.user.email.length > 0
                ? "@" + blog.user.email.split("@")[0]
                : ""
            }
            name={blog.user.name}
          />
          <h1 className=" font-[600]">{blog.title}</h1>
        </div>
      </CardHeader>
      <CardBody className="space-y-2">
        <Image
          src={blog.banner}
          width={"100%"}
          alt="blog banner"
          className="rounded-lg aspect-video object-fill  shadow-lg w-full"
        />
        <p className="!mb-10">{blog.description}</p>
        <ShowBlogContent content={blog.content ?? []} />
      </CardBody>
    </Card>
  );
};

export default CardContentWrapper;
