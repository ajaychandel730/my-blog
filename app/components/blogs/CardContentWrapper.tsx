"use client";
import React from "react";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { User } from "@heroui/user";
import GoBackButton from "./GoBackButton";
import NextImage from "next/image";
import ShowBlogContent from "./ShowBlogContent";
import toLocaleDateString from "@/utils/toLocaleDateString";

type Props = {
    title: string;
    banner: string;
    user: {
      name : string;
      image : string;
    }
    description: string;
    content:unknown[],
    date: string;
};

const CardContentWrapper = ({title, banner, description,  content, user, date}: Props) => {
  const formattedDate = toLocaleDateString(date, { month: "long" });

  return (
    <Card shadow="none" radius="none" className="w-full lg:w-[900px] p-2 bg-gray-50 dark:bg-white/90 !text-black">
      <CardHeader className="flex flex-col w-full  items-start">
        <div className="flex w-full items-center justify-between">
          <GoBackButton />
        </div>
        <div className="flex w-full mt-4 space-y-2  flex-col items-start">
          <span
            suppressHydrationWarning
            className="text-sm font-medium text-gray-500"
          >
            {formattedDate}
          </span>
          <User
            className="text-gray-500"
            avatarProps={{
              imgProps: { loading: "eager" },
              src: user?.image,
              alt:"user profile"
            }}
            name={user?.name}
          />
          <h1 className="font-[600] text-black !mt-4 !mb-2">{title}</h1>
        </div>
      </CardHeader>
      <CardBody className="space-y-2 text-lg  tracking-normal ">
        <div className="relative w-full rounded-lg overflow-hidden aspect-video shadow-lg  bg-gray-200">
          <NextImage 
           src={banner}
           alt={title}
           fill
           className="object-fill !m-0"
           priority
          />
        </div>
        <p className="mt-2 mb-8 text-base leading-relaxed text-gray-500">{description}</p>
        <ShowBlogContent content={content ?? []} />
      </CardBody>
    </Card>
  );
};

export default CardContentWrapper;
