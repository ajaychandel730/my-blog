"use server";
import { Card, CardBody } from "@heroui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import toLocaleDateString from "@/utils/toLocaleDateString";

type Props = {
  _id :string;
  banner : string;
  title  : string;
  date : string;
}

const HightCountTopicCard = async ({_id, title, date, banner}:Props) => {
  const formattedDate = toLocaleDateString(date);
  return (
    <Card as={Link} href={`/blog/${_id}`} className="shadow-none border-t border-gray-200 dark:border-gray-500 rounded-sm dark:bg-midnight-900">
      <CardBody className="">
        <div className="flex space-x-2">
          <div className="flex flex-1 flex-col space-y-1">
            <h4 className="font-medium text-large">
              {title}
            </h4>
            <p className="text-tiny  uppercase font-bold text-gray-700 dark:text-midnight-400">
              {formattedDate}
            </p>
          </div>
          <div className="relative w-20 h-20 rounded-lg bg-black overflow-hidden">
            <Image
              fill
              alt="Card background"
              className="w-full h-full object-cover"
              src={banner}
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default HightCountTopicCard;
