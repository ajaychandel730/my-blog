"use client";
import React from "react";
import { FeedbackMessage as FeedbackInterface } from "@/types/user";
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

  const mutateFeedback = (feedbackId: string) => {
    mutate((data) => {
      if (!data) return data;
      for (let i = 0; i < data?.length; i++) {
        if (!data[i].result && !Array.isArray(data[i].result)) {
          continue;
        }
        for (let j = 0; j < data[i]?.result?.length; j++) {
          if (data[i].result[j]._id === feedbackId) {
            data[i].result[j].isDeleted = true;
            return data;
          }
        }
      }
      return data;
    });
  };

  const handleFeedbackDelete = async (id: string, setIsLoading: any) => {
    const { toast } = await import("sonner");
    try {
      setIsLoading(true);
      const res = await fetch(`/api/user/feedback/delete/${id}`, {
        method: "DELETE",
      });
      const data = await res.json();
      console.log(data);
      if (data?.status === "ok") {
        toast.success(data?.message || "Message Deleted.");
        mutateFeedback(id);
      } else {
        toast.error(data?.message || "Not able to delete. Plese try later.");
      }
    } catch (err) {
      console.log("feedback error:", err);
      toast.error("Somthing went wrong. Please try later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {data &&
        data?.map(({ result }: { result: (FeedbackInterface & {isDeleted?:boolean})[] }) => {
          return result?.map(
            ({ name, email, _id, subject, text, created_at, isDeleted }) => (
              <FeedbackMessage
                handleFeedbackDelete={handleFeedbackDelete}
                key={_id}
                name={name}
                email={email}
                isDeleted = {isDeleted || false}
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
        Array(5)
          .fill(1)
          .map((_, idx) => <PublishBlogItemSkeleton key={idx} />)}

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
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
