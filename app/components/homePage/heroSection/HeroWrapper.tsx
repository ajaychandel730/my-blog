"use client";
import React from "react";
import { Card, CardBody, CardHeader } from "@heroui/card";
import Image from "next/image";
import BlogSmallLineCard from "../BlogSmallLineCard";
import { ChevronRight } from "lucide-react";

const HeroWrapper = () => {
  return (
    <section className="w-full grid grid-cols-2  gap-2 ">
      <Card className=" h-[500px] rounded-sm">
        <CardHeader className="absolute z-10 !m-0 pt-10 rounded-none bottom-0 flex-col !items-start bg-gradient-to-t from-black via-black/50 to-transparent">
          <h4 className="text-white font-medium text-large">
            The Future of Remote Work: Tools and Trends for 2026
          </h4>
          <p className="text-tiny text-white/60 uppercase font-bold">
            5 Jan, 2026
          </p>
        </CardHeader>
        <Image
          fill
          alt="Card background"
          className="z-0 w-full h-full object-cover mask-b-from-20% mask-b-to-80%"
          src="/ourMissonBanner.jpg"
        />
      </Card>
      <div className="flex flex-col space-y-4 bg-white shadow rounded-sm p-2">
        <div className="text-blue-500 !text-sm flex items-center">
          <h2>Top stories </h2>
          <ChevronRight className="w-7 h-7"/>
        </div>

        <BlogSmallLineCard key={1} />
        <hr />
        <BlogSmallLineCard key={2} />
        <hr />
        <BlogSmallLineCard key={3} />
      </div>
    </section>
  );
};

export default HeroWrapper;
