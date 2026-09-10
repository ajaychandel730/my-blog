import React from "react";
import { TopBlogsType } from "@/types/blog";
import toLocaleDateString from "@/utils/toLocaleDateString";
import { Card, CardBody, CardHeader } from "@heroui/card";
import BlogSmallLineCard from "../HeroSection1/BlogSmallLineCard";
import HeroHeader from "./HeroHeader";
import NoBlogsState from "../../blogs/NoBlogsState";
import getSearchTopBlogs from "@/actions/getSearchTopBlogs";
import Image from "next/image";
import NextLink from "next/link";

const HeroSection = async () => {
  const result: TopBlogsType[] = await getSearchTopBlogs();

  if (result.length == 0) {
    return <NoBlogsState />;
  }

  return (
    <section
      aria-labelledby="top-stories-heading"
      className="w-full grid xl:grid-cols-2 grid-cols-1  gap-2 "
    >
      <Card
        as={NextLink}
        href={`/blog/${result[0]?._id}`}
        className="rounded-sm"
      >
        <CardHeader  className="absolute z-10 !m-0 bg-midnight-900/75  pt-10 rounded-none bottom-0 flex-col !items-start">
          <h3 className="text-white font-medium text-large">
            {result[0]?.title}
          </h3>
          <p className="text-tiny text-white/60 uppercase font-bold">
            {toLocaleDateString(result[0]?.date)}
          </p>
        </CardHeader>
        <CardBody className="bg-white">
          <Image
            fill
            alt="Card background"
            className="z-0 w-full h-full object-fill"
            src={result[0]?.banner}
          />
        </CardBody>
      </Card>
      <div className="flex flex-col space-y-4 bg-white dark:bg-midnight-900 shadow rounded-sm p-2">
        <HeroHeader id="top-stories-heading" heading="Top Stories" />
        {result?.map(
          ({ _id, title, banner, description, date }: TopBlogsType) => (
            <BlogSmallLineCard
              key={_id}
              _id={_id}
              title={title}
              banner={banner}
              description={description}
              date={date}
            />
          ),
        )}
      </div>
    </section>
  );
};

export default HeroSection;
