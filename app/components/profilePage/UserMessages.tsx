"use client";
import { FeedbackMessage as FeedbackInterface } from "@/types/user";
import React from "react";
import useSWRInfinite from "swr/infinite";
import FeedbackMessage from "./FeedbackMessage";
import PublishBlogItemSkeleton from "./PublishBlogItemSkeleton";
import HandleErrrorMessage from "./HandleErrrorMessage";
import BlogsPagination from "../BlogsPagination";

const UserMessages = () => {
  const { data, error, isLoading, isValidating, mutate, setSize } =
    useSWRInfinite(getKey, fetchUserMessages, {
      revalidateFirstPage: false,
    });

   

  return (
    <div className="space-y-4">
      {data &&
        data?.map(({ result }: { result: FeedbackInterface[] }) => {
          return result.map(
            ({ name, email, _id, subject, text, created_at }) => (
              <FeedbackMessage
                key={_id}
                name={name}
                email={email}
                subject={subject}
                _id={_id}
                text={text}
                created_at={created_at}
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
        Array(5).fill(1).map((_, idx)=>(
            <PublishBlogItemSkeleton key={idx}/>
        ))  
      }

      {data &&
        "result" in data[data.length - 1] &&
        data[data?.length - 1].result?.length > 0 &&
        !isLoading && <BlogsPagination setPage={setSize} />}
    </div>
  );
};

export default UserMessages;

const fetchUserMessages = async (url: string) => {
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
  previousPageData: { status: string; result: FeedbackInterface[] }
) => {
  if (previousPageData && previousPageData?.result?.length == 0) {
    return null;
  }
  return `/api/user/feedback?page=${pageIndex + 1}&limit=${15}`;
};
