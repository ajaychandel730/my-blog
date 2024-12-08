import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Button } from "@nextui-org/button";
import { TBlogCard } from "@/types/blog";

type Props = TBlogCard;

const BlogContent = ({
  _id,
  title,
  description = "",
  content,
  banner,
}: Props) => {
  return (
    <>
      <Card className={"py-4"} shadow={"none"} radius="none" fullWidth>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large text-wrap line-clamp-1">
            {title}
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex-col items-center md:items-start space-y-4">
          <Image
            as={NextImage}
            // fallbackSrc={"https://nextui.org/images/hero-card-complete.jpeg"}
            alt="Card background"
            width={700}
            height={350}
            className="object-cover w-full aspect-video bg-black  rounded-xl"
            src={banner}
          />
          <p className="text-base font-normal tracking-normal line-clamp-3 leading-relaxed text-left text-wrap ">
            {description}
          </p>
        </CardBody>
        <CardFooter>
          <Button>Read more...</Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default BlogContent;
