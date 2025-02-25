"use server";
import getBlogById from "@/actions/getBlogById";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { notFound } from "next/navigation";
import React from "react";
import GoBackButton from "./GoBackButton";
import { User } from "@nextui-org/user";
import { Image } from "@nextui-org/image";
import ShowBlogContent from "./ShowBlogContent";

const BlogContent = async ({ blogId }: { blogId: string }) => {
  const blog = await getBlogById(blogId);
  if (!blog) {
    notFound();
  }

  return (
    <Card className="w-full lg:w-[900px] p-2 bg-red-100">
      <CardHeader className="flex flex-col w-full p-0 items-start">
        <GoBackButton />
        <div className="flex w-full pl-4 mt-4 space-y-2  flex-col items-start">
          <span className="text-sm font-medium text-gray-500">
            Februray 18, 2025
          </span>
          <User
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
            description={"@jrgarciade"}
            name="Junior Garcia"
          />
          <h1 className=" font-[600]">HeroUI v2.7.0</h1>
        </div>
      </CardHeader>
      <CardBody className="space-y-2">
        <Image
          src={
            "https://res.cloudinary.com/instagram-clone-images-27017/image/upload/v1733663645/myBlog/qs1qer8j00mpmumxk1q0.png"
          }
          width={"100%"}
          alt="blog banner"
          className="rounded-lg aspect-video object-fill shadow-lg w-full"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eaque
          omnis vitae. Consequatur, quisquam dignissimos. Et, dolorum voluptatem
          cumque, magnam nam consequuntur autem, fuga alias doloremque est quas
          in repellendus.
        </p>
         
         <ShowBlogContent content={blog.content}/>

      </CardBody>
    </Card>
  );
};

export default BlogContent;
