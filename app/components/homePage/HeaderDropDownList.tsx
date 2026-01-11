"use client";
import React, { use } from "react";
import { SearchFacet } from "@/types/blog";
import Link from "next/link";

type Props = {
  getTopFacetPromise: Promise<SearchFacet[]>;
};

const HeaderDropDownList = ({ getTopFacetPromise }: Props) => {
  const data = use(getTopFacetPromise);
  let filterList: string[] = data.map(({ _id }) => _id);

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
    <ul aria-description="blogs filter list" className="w-full space-y-4">
      {filterList?.map((_id) => (
        <li
          className="w-full border-b dark:border-midnight-800 pb-1"
          aria-description="blog filter "
          key={_id}
        >
          <Link
            className="flex w-full rounded-full capitalize  hover:bg-gray-100 hover:dark:bg-neutral-700   p-2"
            href={"/blogs/search/technology"}
          >
            {_id}
          </Link>
        </li>
      ))}
     
    </ul>
  );
};

export default HeaderDropDownList;
