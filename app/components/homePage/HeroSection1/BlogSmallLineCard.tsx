"use server";
import { Card, CardBody } from "@heroui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import toLocaleDateString from "@/utils/toLocaleDateString";

type Props = {
  _id: string;
  description: string;
  title: string;
  date: string;
  banner: string;
};

const BlogSmallLineCard = async ({
  _id,
  title,
  banner,
  description,
  date,
}: Props) => {
  const formattedDate = toLocaleDateString(date);

  return (
    <Card
      as={Link}
      href={`/blog/${_id}`}
      className="dark:bg-midnight-900 rounded-sm shadow-none border-t border-gray-200 dark:border-gray-800"
    >
      <CardBody className="">
        <div className="flex space-x-2">
          <div className="flex flex-1 flex-col space-y-4">
            <div className="space-y-1">
              <h3 className="font-bold text-lg">{title}</h3>
              <p className="text-sm font-bold  line-clamp-2 text-gray-600 dark:text-midnight-400">
                {description}
              </p>
            </div>

            <p className="text-tiny uppercase font-bold text-gray-600">
              {formattedDate}
            </p>
          </div>
          <div className="relative w-20 h-20 rounded-lg bg-black overflow-hidden">
            <Image
              fill
              alt={title}
              className="w-full h-full object-cover"
              src={banner}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default BlogSmallLineCard;
