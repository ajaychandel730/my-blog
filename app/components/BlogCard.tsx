"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const BlogCard = () => {
  return (
    <Card shadow="sm"  isPressable onPress={() => console.log("item pressed")}>
      <CardHeader>
        <h3>Science</h3>
      </CardHeader>
      <CardBody className="overflow-visible px-2 ">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          height="100%"
          alt={"Science"}
          className="w-full object-cover aspect-video"
          src={"https://nextui.org/images/hero-card-complete.jpeg"}
        />
        <p className="text-base h-[100px] font-normal tracking-normal line-clamp-3 leading-relaxed text-left text-wrap ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quos,
          ea error offi.
        </p>
      </CardBody>
      <CardFooter className="text-small justify-between">
         <span className="text-sm font-thin ">
             May 23, 2024
         </span>
        <div className="w-8 h-8 rounded-full bg-gray-400 "></div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
