"use client";
import React from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { Skeleton } from "@heroui/skeleton";

const CategoryFilterSkeleton = () => {
  const pathname = usePathname();
  const params = useParams<{ type: string }>();
  const router = useRouter();

  const handleClick = (value: string) => {
    const path = pathname.split("/").splice(0, 3).join("/");
    router.replace(`${path}/${value.toLowerCase()}`);
  };

  return (
    <div className="w-full flex !m-0 items-center p-2 space-x-6">
      <button
        key={"All"}
        type="button"
        onClick={() => handleClick("All")}
        className={`py-2 px-4 rounded-full  text-base ${
          params.type.toLowerCase() === "all"
            ? "bg-blue-600 text-gray-50"
            : "bg-white text-black"
        } `}
      >
        All
      </button>
      {Array(4)
        .fill(1)
        .map((_, idx) => (
          <div key={idx} className="flex  justify-center flex-col rounded-full w-20 h-10 p-2  bg-gray-100 space-y-1">
            <Skeleton  className="w-[90%] h-1 rounded-full"></Skeleton>
            <Skeleton  className="w-[50%] h-1 rounded-full"></Skeleton>
          </div>
        ))}
    </div>
  );
};

export default CategoryFilterSkeleton;
