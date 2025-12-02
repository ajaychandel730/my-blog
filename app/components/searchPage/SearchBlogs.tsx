import React from "react";
import { confirmData } from "@/actions/getSearchBlogs";
import BlogCard from "../blogs/BlogCard";
import { getErrorMessage } from "@/utils/errors";
import { serverBlogCard } from "@/actions/getSearchBlogs";
import SearchPagePagination from "./SearchPagePagination";

type Props = {
  query: string;
  token?: string | undefined;
};

const fetchSearchBlogs = async (
  query: string,
  token?: string
): Promise<serverBlogCard[]> => {
  try {
    let endPoint = `${process.env.DOMAIN_NAME}/api/blogs/search/${query}`;

    if (token !== undefined) {
      endPoint = endPoint + `/${token}`;
    }

    const res = await fetch(endPoint, {
      next: { revalidate: 0 },
    });
    
    const data = await res.json();

    if (data.status == "ok") {
      return confirmData(data.result);
    } else {
      return [];
    }
  } catch (err) {
    console.log(getErrorMessage(err));
    return [];
  }
};

const SearchBlogs = async ({ query, token }: Props) => {
  const result: serverBlogCard[] = await fetchSearchBlogs(query, token);
  const lastIndex = result.length - 1;
  
  const paginationToken =
    result.length == 20 ? result[lastIndex].paginationToken : undefined;

  return (
    <div
      className={
        " w-full mb-10   flex  flex-col items-center"
      }
    >
      <div className="flex w-full ">
        <h3 className="font-[600]">Search results for <p className="turncate inline-block font-normal text-gray-600">{query}</p></h3>
      </div>

      <div className="mt-10 w-full   grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        {result.map(
          ({ _id, title, user, description, banner, topics, content, date }) => (
            <BlogCard
              key={_id}
              _id={_id}
              title={title}
              user={user}
              description={description}
              banner={banner}
              topics={topics}
              content={content}
              date={date}
            />
          )
        )}
      </div>
      <SearchPagePagination paginationToken={paginationToken} />
    </div>
  );
};

export default SearchBlogs;
