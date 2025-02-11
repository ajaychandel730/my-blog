import React from "react";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import NextImage from "next/image";
import { Chip } from "@nextui-org/chip";
import { IoEyeSharp, IoTrashBin } from "react-icons/io5";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import toLocaleDateString from "@/utils/toLocaleDateString";

type Props = {
  _id: string;
  title: string;
  date: string;
  banner: string;
  topics: string[];
  tab:string;
};

const PublishBlogItem = ({ tab, _id, banner, date, topics, title }: Props) => {
  const formattedDate = toLocaleDateString(date);

  return (
    <Card isPressable fullWidth  className="flex items-center group" >
      <CardBody>
        <div className="w-full flex space-x-2">
          <div className="flex-0.4">
            <Image
              loading="lazy"
              fallbackSrc = "https://res.cloudinary.com/instagram-clone-images-27017/image/upload/v1738907232/utils/mrrhsalsg3o3s2tiuotr.png"
              alt="blog banner"
              src={banner}
              className="object-fill aspect-square"
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col flex-1">
            <h3 className="text-base">{title}</h3>
            <p className="text-gray-500 text-sm">
              {tab == "Drafts"? "Draft" : "Published"} <span>•</span> {formattedDate}
            </p>
            <div className="w-full space-x-2 space-y-2">
              {topics.map((topic) => (
                <Chip size="sm">{topic}</Chip>
              ))}
            </div>
          </div>
        </div>
      </CardBody>
      <CardFooter className="lg:opacity-0 lg:group-hover:opacity-100 lg:transition-all">
        <Tooltip size="sm" content="View">
          <Button isIconOnly size="md" variant="light" radius="full">
            <IoEyeSharp className="w-6 h-6 text-gray-500" />
          </Button>
        </Tooltip>
        <Tooltip size="sm" content="Delete">
          <Button isIconOnly variant="light" size="md" radius="full">
            <IoTrashBin className="w-6 h-6 text-gray-500" />
          </Button>
        </Tooltip>
      </CardFooter>
    </Card>
  );
};

export default PublishBlogItem;
