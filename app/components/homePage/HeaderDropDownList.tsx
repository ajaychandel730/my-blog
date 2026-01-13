"use client";
import React, { use } from "react";
import { SearchFacet } from "@/types/blog";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  getTopFacetPromise: Promise<SearchFacet[]>;
  onClose : ()=>void;
};

const HeaderDropDownList = ({ getTopFacetPromise, onClose }: Props) => {
  const data = use(getTopFacetPromise);
  let filterList: string[] = data.map(({ _id }) => _id);
  const pathname = usePathname().split("/")[3];

  const isActive = (topic:string)=>{
    const query = topic.toLowerCase().split(" ").join("-")
     return query === pathname;
  }

  if (filterList.length == 0) {
    filterList = [
      "technology",
      "ai",
      "health",
      "machine learning",
      "career",
      "remote",
    ];
  }
  return (
    <ul role="list" className="w-full space-y-4">
      {filterList?.map((_id) => (
        <li
          onClick={onClose}
          className="w-full border-b dark:border-midnight-800 pb-1"
          aria-description="blog filter "
          key={_id}
        >
          <Link
            className={`flex w-full  rounded-full capitalize  hover:bg-gray-100 hover:dark:bg-neutral-700   p-2 ${isActive(_id) ? "text-blue-600" : "" } `}
            href={`/blogs/category/${_id.toLowerCase().split(" ").join("-")}`}
          >
            {_id}
          </Link>
        </li>
      ))}
     
    </ul>
  );
};

export default HeaderDropDownList;
