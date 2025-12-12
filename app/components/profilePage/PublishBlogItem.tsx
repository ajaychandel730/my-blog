"use client";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Image } from "@heroui/image";
import { Chip } from "@heroui/chip";
import { ExternalLink, Trash2 } from "lucide-react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/tooltip";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { useRouter } from "next/navigation";
import BlogDeleteModal from "../blogs/BlogDeleteModal";
import { useDisclosure } from "@heroui/modal";
import Link from "next/link";

type Props = {
  _id: string;
  title: string;
  date: string;
  banner: string;
  topics: string[];
  tab: string;
  onDeleteBlog : (blogId:string)=>void;
};

const PublishBlogItem = ({ tab, _id, banner, date, topics, title, onDeleteBlog }: Props) => {
  const formattedDate = toLocaleDateString(date);
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Card as={"div"} fullWidth className="flex items-center group">
        <CardHeader className="md:hidden">
            <h3 className="text-base">{title}</h3>
        </CardHeader>
        <CardBody>
          <div className="w-full flex max-md:flex-col space-x-4">
            <div className="flex md:flex-[0.2] items-center justify-center max-md:mb-2">
              <Image
                loading="lazy"
                fallbackSrc="https://res.cloudinary.com/instagram-clone-images-27017/image/upload/v1738907232/utils/mrrhsalsg3o3s2tiuotr.png"
                alt="blog banner"
                src={banner}
                width={"100%"}
                height={"100%"}
                className="object-fill md:aspect-square max-md:aspect-video"
              />
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="text-base max-md:hidden">{title}</h3>
              <p className="text-gray-500 text-sm">
                {tab == "Drafts" ? "Draft" : "Published"} <span>•</span>{" "}
                {formattedDate}
              </p>
              <div className="w-full space-x-2 space-y-2">
                {topics.map((topic, idx) => (
                  <Chip as={Link} href={`/blogs/search/${topic}`}  key={idx} size="sm" className="bg-gray-100 text-gray-700 hover:bg-gray-200  transition-colors ">
                    {topic}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </CardBody>
        <CardFooter className="lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all">
          <Tooltip as={"div"} key={1} size="sm" content="View">
            <Button
              onPress={() => router.push( tab == "Blogs"? `/blog/${_id}` : `/draft/edit/${_id}`)}
              isIconOnly
              size="md"
              color="primary"
              variant="light"
              radius="full"
            >
              <ExternalLink className="w-5 h-5 stroke-blue-600" />
            </Button>
          </Tooltip>
          <Tooltip as="div" key={2} size="sm" content="Delete">
            <Button
              onPress={onOpen}
              color="danger"
              isIconOnly
              variant="light"
              size="md"
              radius="full"
            >
              <Trash2 className="w-5 h-5 stroke-danger-600" />
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
      <BlogDeleteModal onDeleteBlog={onDeleteBlog} slug={_id} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default PublishBlogItem;
