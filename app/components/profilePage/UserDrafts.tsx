import React, { useEffect, useState } from "react";
import PublishBlogItem from "./PublishBlogItem";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import BlogsPagination from "../BlogsPagination";

const fetchUserPublishDrafts = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

type Props = {
  PublishBlogItemSkeleton : React.JSX.Element;
}

const UserDrafts = ({PublishBlogItemSkeleton}:Props) => {
  const [page, setPage] = useState<number>(1);
  const [drafts, setDrafts] = useState<[]>([]);
  const { data, error, isLoading } = useSWR(
    `/api/user/drafts?page=${page}&limit=${20}`,
    fetchUserPublishDrafts
  );
  
  const result: [] = Array.isArray(data?.result) ? data.result : [];

  useEffect(() => {
    if (!isLoading && result.length > 0) {
      setDrafts((preDrafts) => [...preDrafts, ...result]);
    }
  }, [result]);
  
  return (
    <div className="flex flex-col w-full  space-y-2">
      {drafts.map(({ _id, banner, topics, title, date }) => (
        <PublishBlogItem
          key={_id}
          tab={"Drafts"}
          topics={topics}
          _id={_id}
          banner={banner}
          title={title}
          date={date}
        />
      ))}

       {
          !isLoading && drafts.length == 0 && (
             <div className="flex w-full font-semibold text-center text-base text-gray-400"> 
                 <p className="w-full">No data to display.</p>
             </div>
          )
       }
      

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

export default UserDrafts;
