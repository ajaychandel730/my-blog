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
    <div className="shadow-none">
      <div className="flex space-x-2">
        <div className="flex flex-1 flex-col space-y-1">
          <Link href={`/blog/${_id}`}>
            <h4 className="font-medium text-sm line-clamp-4 hover:underline">
              {title}
            </h4>
          </Link>

          <p className="text-tiny uppercase font-bold text-gray-700 dark:text-midnight-400">{date}</p>
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
    </div>
  );
};

export default PicksForYouCard;
