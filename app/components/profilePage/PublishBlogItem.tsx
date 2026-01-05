"use client";
import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { Chip } from "@heroui/chip";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { useRouter } from "next/navigation";
import BlogDeleteModal from "../blogs/BlogDeleteModal";
import { useDisclosure } from "@heroui/modal";
import Link from "next/link";
import BlogItemOptionsDropdown from "./BlogItemOptionDropdown";
import Image from "next/image";

type Props = {
  _id: string;
  title: string;
  date: string;
  banner: string;
  topics: string[];
  tab: string;
  isDeleted: boolean;
  onDeleteBlog: (blogId: string) => void;
};

const PublishBlogItem = ({
  tab,
  _id,
  banner,
  date,
  topics,
  title,
  isDeleted,
  onDeleteBlog,
}: Props) => {
  const formattedDate = toLocaleDateString(date);
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card
        as={"div"}
        fullWidth
        className={`flex items-center group  ${isDeleted && "bg-danger-100"} dark:bg-midnight-900`}
      >
        <CardHeader className="flex justify-between md:hidden dark:text-midnight-900">
          <h3 className="text-sm sm:text-base line-clamp-1 dark:text-midnight-200">{title}</h3>
          {isDeleted ? (
            <span className="text-sm text-danger-600">Deleted</span>
          ) : (
            <BlogItemOptionsDropdown _id={_id} tab={tab} onOpen={onOpen} />
          )}
        </CardHeader>
        <CardBody>
          <div className="w-full flex max-md:flex-col  space-x-4">
            <div className="relative w-full aspect-video sm:h-[400px] md:w-[100px] md:h-[100px]  max-md:mb-2 rounded-md overflow-hidden">
              <Image
                fill
                loading="lazy"
                alt="blog banner"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={banner}
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-base max-md:hidden dark:text-midnight-200">{title}</h3>
              <p className="text-gray-500 text-sm">
                {tab == "Drafts" ? "Draft" : "Published"} <span>•</span>{" "}
                {formattedDate}
              </p>
              <div className="w-full space-x-2 space-y-2">
                {topics.map((topic, idx) => (
                  <Chip
                    as={Link}
                    href={`/blogs/search/${topic}`}
                    key={idx}
                    size="sm"
                    className="bg-gray-100 text-sm dark:bg-midnight-700 dark:text-foreground text-gray-700 hover:bg-gray-200  transition-colors "
                  >
                    {topic}
                  </Chip>
                ))}
              </div>
            </div>
            <div className="hidden md:flex">
              {isDeleted ? (
                <span className="text-sm text-danger-600">Deleted</span>
              ) : (
                <BlogItemOptionsDropdown _id={_id} tab={tab} onOpen={onOpen} />
              )}
            </div>
          </div>
        </CardBody>
      </Card>
      <BlogDeleteModal
        tab={tab}
        onDeleteBlog={onDeleteBlog}
        slug={_id}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      />
    </>
  );
};

export default PublishBlogItem;
