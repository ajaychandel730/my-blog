import React, { useEffect, useState } from "react";
import PublishBlogItem from "./PublishBlogItem";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import BlogsPagination from "../BlogsPagination";

const fetchUserPublishBlogs = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

type Props = {
  PublishBlogItemSkeleton : React.JSX.Element;
}

const UserPublishBlogs = ({PublishBlogItemSkeleton}:Props) => {
  const [page, setPage] = useState<number>(1);
  const [blogs, setBlogs] = useState<[]>([]);
  const { data, error, isLoading } = useSWR(
    `/api/user/publish_blogs?page=${page}&limit=${20}`,
    fetchUserPublishBlogs
  );
  
  const result: [] = Array.isArray(data?.result) ? data.result : [];

  useEffect(() => {
    if (!isLoading && result.length > 0) {
      setBlogs((preBlogs) => [...preBlogs, ...result]);
    }
  }, [result]);
  
  return (
    <div className="flex flex-col w-full  space-y-2">
      {blogs.map(({ _id, banner, topics, title, date }) => (
        <PublishBlogItem
          key={_id}
          tab="Blogs"
          topics={topics}
          _id={_id}
          banner={banner}
          title={title}
          date={date}
        />
      ))}

      {isLoading &&
        Array(10)
          .fill(1)
          .map(() => PublishBlogItemSkeleton)}

      {result.length != 0 && !isLoading && (
        <BlogsPagination setPage={setPage} isLoading={isLoading} />
      )}
    </div>
  );
};

export default UserPublishBlogs;
