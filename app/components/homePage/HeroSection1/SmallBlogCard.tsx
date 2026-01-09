"use server";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import NextImage from "next/image";
import { BlogCard as BlogCardInterface } from "@/types/blog";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  _id: string;
  title: string;
  banner: string;
  date: string;
};

const SmallBlogCard = async({ _id, title, banner, date }: Props) => {

  return (
    <Card
      as={Link}
      href={`/blog/${_id}`}
      className="z-0 shadow-none dark:bg-midnight-900"
      shadow="sm"
      isPressable
    >
      <CardHeader>
        <div className="relative w-full aspect-video rounded-sm overflow-hidden shadow-s">
          <NextImage fill src={banner} alt={title} className="object-cover" />
        </div>
      </CardHeader>
      <CardBody className="overflow-visible px-2 space-y-2">
        <h4 className="font-bold text-sm">{title}</h4>
      </CardBody>
      <CardFooter className="text-small justify-between">
        <p className="text-tiny uppercase font-bold">{date}</p>
      </CardFooter>
    </Card>
  );
};

export default SmallBlogCard;
