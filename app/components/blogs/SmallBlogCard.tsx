"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import NextImage from "next/image";
import { BlogCard as BlogCardInterface } from "@/types/blog";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { useRouter } from "next/navigation";

type Props = {
  _id: string;
  title: string;
  banner: string;
  date: string;
};

const SmallBlogCard = ({ _id, title, banner, date }: Props) => {
  const formatDate = toLocaleDateString(date);
  const router = useRouter();

  return (
    <Card
      className="z-0 shadow-none dark:bg-midnight-900"
      onPress={() => router.push(`/blog/${_id}`)}
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
        <p className="text-tiny  uppercase font-bold">{formatDate}</p>
      </CardFooter>
    </Card>
  );
};

export default SmallBlogCard;
