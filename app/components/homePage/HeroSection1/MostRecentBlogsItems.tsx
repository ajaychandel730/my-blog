import React from "react";
import mostLatestBlogs from "@/actions/mostLatestBlogs";
import { MostLatestBlogType } from "@/types/blog";
import toLocaleDateString from "@/utils/toLocaleDateString";
import NoBlogsState from "../../blogs/NoBlogsState";
import SmallBlogCard from "./SmallBlogCard";

const MostRecentBlogsItems = async () => {
  const result: MostLatestBlogType[] = await mostLatestBlogs();
  return (
    <>
      {result?.length == 0 ? (
        <NoBlogsState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-2">
          {result?.map(({ _id, title, banner, date }) => (
            <SmallBlogCard
              key={_id}
              title={title}
              _id={_id}
              banner={banner}
              date={toLocaleDateString(date)}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default MostRecentBlogsItems;
