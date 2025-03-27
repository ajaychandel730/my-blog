import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import Link from "next/link";

type Props = {
  _id: string;
  title: string;
  description: string;
  banner: string;
};

const BlogBrief = ({ _id: blogId, title, description = "", banner }: Props) => {
  return (
    <>
      <Card
        className={"py-4 bg-gray-100 rounded-lg w-full min-w-[300px] lg:w-[900px]"}
        shadow={"none"}
        radius="none"
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <h4 className="font-bold text-large text-wrap line-clamp-1">
            {title}
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible py-2 flex-col items-start space-y-4">
          {banner.length > 0 ? (
            <Image
              src={banner}
              width={"100%"}
              loading="lazy"
              alt="blog banner"
              className="lg:min-w-[750px] lg:min-h-[350px] rounded-lg aspect-video object-fill shadow-lg w-full"
            />
          ) : (
            <p>No image</p>
          )}

          <p className="text-base w-full font-normal tracking-normal line-clamp-3 leading-relaxed text-left text-wrap ">
            {description}
          </p>
        </CardBody>
        <CardFooter>
          <Button as={Link} href={`/blog/${blogId}`}>
            Read more...
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default BlogBrief;
