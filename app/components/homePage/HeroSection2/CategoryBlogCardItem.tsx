"use server";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  _id: string;
  title: string;
  banner: string;
  date: string;
};

const CategoryBlogCardItem = async ({ _id, title, date, banner }: Props) => {
  return (
    <div className="border-t border-gray-200 dark:border-gray-500 p-2">
      <div className="flex space-x-2">
        <div className="flex flex-1 flex-col space-y-1">
          <Link href={`/blog/${_id}`}>
            <h4 className="font-medium text-sm line-clamp-4 hover:underline">{title}</h4>
          </Link>
          <p className="text-tiny uppercase font-bold text-gray-700 dark:text-midnight-400">{date}</p>
        </div>
        <div className="relative w-14 h-14 rounded-lg bg-black overflow-hidden">
          <Image
            fill
            alt="Card background"
            className="w-full h-full object-cover"
            src={banner}
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryBlogCardItem;
