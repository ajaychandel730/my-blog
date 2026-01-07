import React from "react";
import { Card, CardBody } from "@heroui/card";
import Image from "next/image";

const PicksForYouCard = () => {
  return (
    <div className="shadow-none">
        <div className="flex space-x-2">
          <div className="flex flex-1 flex-col space-y-1">
            <h4 className="font-medium text-sm line-clamp-4">
              The Future of Remote Work: Tools and Trends for 2026. 
            </h4>
            <p className="text-tiny uppercase font-bold text-gray-700">
              5 Jan, 2026
            </p>
          </div>
          <div className="relative w-20 h-20 rounded-lg bg-black overflow-hidden">
            <Image
              fill
              alt="Card background"
              className="w-full h-full object-cover"
              src="/ourMissonBanner.jpg"
            />
          </div>
        </div>
    </div>
  );
};

export default PicksForYouCard;
