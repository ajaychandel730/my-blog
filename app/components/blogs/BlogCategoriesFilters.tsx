"use client";
import React from "react";
import useSWR from "swr";
import { useParams, usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { BlogFilter } from "@/types/blog";
import { getErrorMessage } from "@/utils/errors";
import CategoriesFilterListDropdown from "./CategoriesFilterListDropdown";
import CategoryFilterSkeleton from "./CategoryFilterSkeleton";
import convertLowerCaseIntocammelCase from "@/lib/convertLowerCaseIntocammelCase";

const fetchFiltersList = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });
    const data = await res.json();
    if (data.status == "ok") {
      return data;
    }
  } catch (err) {
    toast.error(getErrorMessage(err));
  }
};

const BlogCategoriesFilters = () => {
  const { data, isLoading } = useSWR(
    "/api/blogs/category/filters",
    fetchFiltersList
  );

  const params = useParams<{ type: string }>();
  const router = useRouter();
  const pathname = usePathname();

  const filters: BlogFilter[] =
    data && "result" in data && Array.isArray(data.result) ? data.result : [];

  const handleClick = (value: string) => {
    const path = pathname.split("/").splice(0, 3).join("/");
    router.replace(`${path}/${value.toLowerCase()}`);
  };

  return (
    <>
    <div  className="hidden  w-full md:flex items-center p-2 space-x-4">
      <button
        key={"all"}
        type="button"
        onClick={() => handleClick("all")}
        className={` py-2 px-4 rounded-full  text-base ${
          params.type.toLowerCase() === "all"
            ? "bg-blue-600 text-gray-50"
            : "bg-white text-black darkButton"
        } `}
      >
        All
      </button>
      {filters.map(({ _id, count }) => (
        <button
          key={_id}
          type="button"
          onClick={() => handleClick(_id)}
          className={`py-2 px-4 rounded-full  text-base ${
            params.type.toLowerCase() === _id.toLowerCase()
              ? "bg-blue-600 text-gray-50"
              : "bg-white text-black darkButton"
          } `}
        >
          {convertLowerCaseIntocammelCase(_id)} {`(${count})`}
        </button>
      ))}
      {filters.length == 0 && isLoading && <CategoryFilterSkeleton />}
    </div>
    <div className="md:hidden !mt-2">
      <CategoriesFilterListDropdown filters={filters} handleClick={handleClick}/>
    </div>
    </>
    
  );
};

export default BlogCategoriesFilters;
