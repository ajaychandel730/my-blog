"use server";
import { SearchFacet } from "@/types/blog";

export default async function (limit: number): Promise<SearchFacet[]> {
  const res = await fetch(
    process.env.DOMAIN_NAME + `/api/blogs/category/filters?limit=${limit}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
      next: {
        revalidate: 3600,
        tags: ["get_top_facet"],
      },
    }
  );

  const data = await res.json();

  if (data?.status == "ok" && "result" in data && Array.isArray(data.result)) {
    return data.result;
  } else {
    throw Error(data?.message || "Somthing went wrong. Please try later.");
  }
}
