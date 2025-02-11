import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

type Props = {
  _id : string;
  title : string;
  description : string;
  banner : string;
};

const BlogBrief = ({
  _id:blogId,
  title,
  description = "",
  banner,
}: Props) => {
  return (
    <>
      <Card  className={"py-4 bg-gray-100 rounded-lg"}  shadow={"none"} radius="none" fullWidth>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large text-wrap line-clamp-1">
            {title}
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex-col items-start space-y-4">
          <Image
            as={NextImage}
            priority = {false}
            alt="Card background"
            width={700}
            height={350}
            className="object-cover w-full aspect-video bg-black  rounded-xl"
            src={banner}
          />
          <p className="text-base w-full font-normal tracking-normal line-clamp-3 leading-relaxed text-left text-wrap ">
            {description}
          </p>
        </CardBody>
        <CardFooter>
          <Button as={Link} href={`/blog/${blogId}`} >Read more...</Button> 
        </CardFooter>
      </Card>
    </>
  );
};

export default BlogBrief;
