"use client";
import React from "react";
import useSWR from "swr";
import { useParams, usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { BlogFilter } from "@/types/blog";
import { getErrorMessage } from "@/utils/errors";
import convertLowerCaseIntocammelCase from "@/lib/convertLowerCaseIntocammelCase";
import CategoryFilterSkeleton from "../blogs/CategoryFilterSkeleton";
import CategoriesFilterListDropdown from "../blogs/CategoriesFilterListDropdown";
import { Button } from "@heroui/button";
import Link from "next/link";

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

const HeaderCategories = () => {
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
      <div className="hidden  xl:flex items-center justify-center p-2 space-x-4">
        {filters.map(({ _id}) => (
          <Button
            as={Link}
            key={_id}
            variant="light"
            type="button"
            href={`/blogs/category/${_id}`}
            className={`py-2 px-4 rounded-full  text-base ${
              params?.type?.toLowerCase() === _id.toLowerCase()
                ? " bg-blue-500 text-gray-50"
                : " text-black darkButton"
            } `}
          >
            {convertLowerCaseIntocammelCase(_id)}
          </Button>
        ))}
        {filters.length == 0 && isLoading && <CategoryFilterSkeleton />}
      </div>
    </>
  );
};

export default HeaderCategories;
