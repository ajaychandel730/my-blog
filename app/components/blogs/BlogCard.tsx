"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import NextImage from "next/image";
import { BlogCard as BlogCardInterface} from "@/types/blog";
import { Avatar } from "@heroui/avatar";
import { UserRound } from "lucide-react";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { useRouter } from "next/navigation";

type Props = BlogCardInterface;

const BlogCard = ({ _id, title, banner, description, date, user }: Props) => {
  const formatDate = toLocaleDateString(date);
  const router = useRouter();

  return (
    <Card  className="z-0 shadow-none dark:bg-midnight-900" onPress={() => router.push(`/blog/${_id}`)} shadow="sm" isPressable>
      <CardHeader>
        <h4 className="font-semibold text-medium line-clamp-1 dark:text-midnight-200">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible px-2 space-y-2">
        <NextImage
         width={400}
         height={200}
         src={banner}
         alt={title}
         className="w-full object-cover aspect-video rounded-lg shadow-sm bg-gray-200"
        />
        <p className="text-base h-[100px] font-normal tracking-normal line-clamp-3 leading-relaxed text-left text-wrap dark:text-midnight-200 ">
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
          fallback={<UserRound className="w-5 h-5" />}
          src={user?.image || ""}
        />
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
