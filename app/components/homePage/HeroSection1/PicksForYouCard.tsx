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

const PicksForYouCard = async ({ _id, banner, title, date }: Props) => {
  return (
    <Link
      href={`/blog/${_id}`}
      className="flex items-center space-x-2  rounded-lg hover:bg-gray-100 dark:hover:bg-midnight-800 p-2 transition"
    >
      {/* Text */}
      <div className="flex flex-1 flex-col space-y-1">
        <h3 className="font-semibold text-sm line-clamp-4">{title}</h3>
        <p className="text-tiny uppercase font-bold text-gray-700 dark:text-midnight-400">
          {date}
        </p>
      </div>

      {/* Image */}
      <div className="relative w-20 h-20 rounded-lg bg-black overflow-hidden flex-shrink-0">
        <Image
          fill
          alt={title}
          className="w-full h-full object-cover"
          src={banner}
        />
      </div>
    </Link>
  );
};

export default PicksForYouCard;
