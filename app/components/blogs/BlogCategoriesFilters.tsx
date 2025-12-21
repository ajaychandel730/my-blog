import React from "react";
import CategoriesFilters from "./CategoriesFilters";
import getBlogsFilterList from "@/actions/getBlogsFilterList";

const convertLowercaseToCammelCase = (word: string) => {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
};

const BlogCategoriesFilters = async () => {
  const filters = [
    { _id: "all", count: -1 },
    ...(await getBlogsFilterList(4)),
  ].map((filter) => {
    filter._id = convertLowercaseToCammelCase(filter._id);
    return filter;
  });

  return <CategoriesFilters filters={filters} />;
};

export default BlogCategoriesFilters;
