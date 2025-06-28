"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { TBlogCard } from "@/types/blog";
import { Avatar } from "@heroui/avatar";
import { FaUser } from "react-icons/fa";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { useRouter } from "next/navigation";

type Props = TBlogCard;

const BlogCard = ({ _id, title, banner, description, date, user }: Props) => {
  const formatDate = toLocaleDateString(date);
  const router = useRouter();

  return (
    <Card onPress={() => router.push(`/blog/${_id}`)} shadow="sm" isPressable>
      <CardHeader>
        <h3 className="text-sm font-medium line-clamp-1">{title}</h3>
      </CardHeader>
      <CardBody className="overflow-visible px-2 space-y-2">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          loading="lazy"
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
        <span suppressHydrationWarning className="text-sm font-thin ">
          {formatDate}
        </span>
        <Avatar
          size="sm"
          showFallback
          fallback={<FaUser className="w-5 h-5 text-gray-700" />}
          src={user?.image || ""}
        />
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
