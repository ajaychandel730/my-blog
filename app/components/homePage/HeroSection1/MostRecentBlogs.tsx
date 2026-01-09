import React from "react";
import SmallBlogCard from "./SmallBlogCard";
import HeroHeader from "../heroSection/HeroHeader";
import mostLatestBlogs from "@/actions/mostLatestBlogs";
import { MostLatestBlogType } from "@/types/blog";
import toLocaleDateString from "@/utils/toLocaleDateString";

const MostRecentBlogs = async () => {
  const result: MostLatestBlogType[] = await mostLatestBlogs();
  
  if (result?.length == 0) {
    return <p className="text-2xl font-bold">No latest blogs found.</p>;
  }

  return (
    <>
      <HeroHeader heading="Most Latest" />
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
    </>
  );
};

export default MostRecentBlogs;
