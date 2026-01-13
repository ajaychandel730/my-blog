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
    <Link href={`/blog/${_id}`} className="flex items-center border-t hover:bg-gray-200 dark:hover:bg-midnight-800 border-gray-200 dark:border-gray-500 p-2">
      <div className="w-full flex space-x-2">
        <div className="flex flex-1 flex-col space-y-1">
            <h3 className="font-semibold text-sm line-clamp-4 hover:underline">{title}</h3>
          <p className="text-tiny uppercase font-semibold text-gray-700 dark:text-midnight-400">{date}</p>
        </div>
        <div className="relative w-14 h-14 rounded-lg bg-black overflow-hidden">
          <Image
            fill
            alt={title}
            className="w-full h-full object-cover"
            src={banner}
          />
        </div>
      </div>
    </Link>

    
  );
};

export default CategoryBlogCardItem;
