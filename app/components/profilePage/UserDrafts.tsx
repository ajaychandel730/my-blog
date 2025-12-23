"use client";
import React, { useEffect, useState } from "react";
import PublishBlogItem from "./PublishBlogItem";
import useInfiniteSwr from "swr/infinite";
import BlogsPagination from "../BlogsPagination";
import { BlogItem } from "./UserPublishBlogs";
import { BlogCard, BlogType } from "@/types/blog";
import EmptyBlogsErrorMessage from "../blogs/EmptyBlogsErrorMessage";
import BlogsEmptyState from "../blogs/BlogsEmptyState";
import HandleErrrorMessage from "./HandleErrrorMessage";

type Props = {
  PublishBlogItemSkeleton: React.JSX.Element;
};

const UserDrafts = ({ PublishBlogItemSkeleton }: Props) => {
  const { data, error, isLoading, isValidating, mutate, size, setSize } =
    useInfiniteSwr(getKey, fetchUserPublishDrafts, {
      revalidateFirstPage: false,
    });

  const onDeleteDraft = (blogId: string) => {
    mutate((data) => {
      if (!data) return data;
      for (let i = 0; i < data?.length; i++) {
        if (!data[i].result && !Array.isArray(data[i].result)) {
          continue;
        }
        for (let j = 0; j < data[i]?.result?.length; j++) {
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
                tab={BlogType.draft}
                topics={topics}
                _id={_id}
                banner={banner}
                title={title}
                date={date}
                isDeleted={isDeleted}
                onDeleteBlog={onDeleteDraft}
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
        (!data || (data && data[data.length - 1].status !== "error")) &&
        Array(5)
          .fill(1)
          .map(() => PublishBlogItemSkeleton)}

      {data &&
        "result" in data[data.length - 1] &&
        data[data?.length - 1].result?.length > 0 &&
        !isLoading && <BlogsPagination setPage={setSize} />}
    </div>
  );
};

export default UserDrafts;

// ------------------------->
const fetchUserPublishDrafts = async (url: string) => {
  const res = await fetch(url, {
    method: "GET",
    headers: {
      accept: "application/json",
    },
    next: { revalidate: 0 },
  });
  return res.json();
};

// ----------------------->
const getKey = (
  pageIndex: number,
  previousPageData: { status: string; result: BlogCard[] }
) => {
  if (previousPageData && previousPageData?.result?.length == 0) {
    return null;
  }
  return `/api/user/drafts?page=${pageIndex + 1}&limit=${20}`;
};
