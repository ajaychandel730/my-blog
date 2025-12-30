"use client";
import React from "react";
import PublishBlogItem from "./PublishBlogItem";
import useInfiniteSwr from "swr/infinite";
import BlogsPagination from "../BlogsPagination";
import { BlogCard, BlogType } from "@/types/blog";
import HandleErrrorMessage from "./HandleErrrorMessage";

type Props = {
  PublishBlogItemSkeleton: React.JSX.Element;
};

export type BlogItem = BlogCard & {
  isDeleted?: boolean;
};

const UserPublishBlogs = ({ PublishBlogItemSkeleton }: Props) => {
  const { data, error, isLoading, isValidating, mutate, setSize, size } =
    useInfiniteSwr(getKey, fetchUserPublishBlogs, {
      revalidateFirstPage: false,
    });

  const onDeleteBlog = (blogId: string) => {
    mutate((data) => {
      if (!data) return data;
      for (let i = 0; i < data?.length; i++) {
        if (!data[i].result && !Array.isArray(data[i].result)) {
          continue;
        }
        for (let j = 0; j < data[i].result.length; j++) {
          if (data[i].result[j]._id === blogId) {
            data[i].result[j].isDeleted = true;
            return data;
          }
        }
      }
      return data;
    });
  };

  return (
    <div className="flex flex-col w-full  space-y-2">
      {data &&
        data?.map(({ result }: { result: BlogItem[] }) => {
          return result?.map(
            ({ _id, banner, topics, title, date, isDeleted = false }) => (
              <PublishBlogItem
                key={_id}
                tab={BlogType.published}
                topics={topics}
                _id={_id}
                banner={banner}
                title={title}
                date={date}
                isDeleted={isDeleted}
                onDeleteBlog={onDeleteBlog}
              />
            )
          );
        })}

      <HandleErrrorMessage
        isLoading={isLoading}
        data={data as Object[] | undefined}
        error={error}
      />

      {(isLoading || isValidating) &&
        (!data || data[data.length - 1]?.status !== "error") &&
        Array(6)
          .fill(1)
          .map(() => PublishBlogItemSkeleton)}

      {data &&
        "result" in data[data?.length - 1] &&
        data[data?.length - 1]?.result?.length > 0 &&
        !isLoading && <BlogsPagination setPage={setSize} />}
    </div>
  );
};

export default UserPublishBlogs;

// ------------------------>
const fetchUserPublishBlogs = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  return res.json();
};

// ------------------------->
const getKey = (
  pageIndex: number,
  previousPageData: { status: string; result: BlogCard[] }
) => {
  if (previousPageData && previousPageData?.result?.length == 0) {
    return null;
  }

  return `/api/user/publish_blogs?page=${pageIndex + 1}&limit=${20}`;
};
