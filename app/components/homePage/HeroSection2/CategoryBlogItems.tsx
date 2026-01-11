import getFacetsBlogs from "@/actions/getFacetsBlogs";
import { MostLatestBlogType } from "@/types/blog";
import toLocaleDateString from "@/utils/toLocaleDateString";
import React from "react";
import NoBlogsState from "../../blogs/NoBlogsState";
import CategoryBlogCardItem from "./CategoryBlogCardItem";

const CategoryBlogItems = async ({ topic }: { topic: string }) => {
  const blogs: MostLatestBlogType[] = await getFacetsBlogs([topic]);

  if (blogs.length == 0) {
    return <NoBlogsState />;
  }

  return (
    <div className="w-full space-y-4">
      {blogs?.map(({ _id, title, banner, date }) => (
        <CategoryBlogCardItem
          key={_id}
          _id={_id}
          title={title}
          banner={banner}
          date={toLocaleDateString(date)}
        />
      ))}
    </div>
  );
};

export default CategoryBlogItems;
