import { getErrorMessage } from "@/utils/errors";

export default async function (facets: string[]) {
  try {
    const query = facets.join();
    const res = await fetch(
      process.env.DOMAIN_NAME + `/api/blogs/search/field/${query}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
        next: {
          revalidate: 43200,
        },
      }
    );

    const data = await res.json();
    if (
      data?.status == "ok" &&
      "result" in data &&
      Array.isArray(data.result)
    ) {
      return data.result;
    } else {
      return [];
    }
  } catch (err) {
    console.log("home facet 2 error:", getErrorMessage(err));
    return [];
  }
}
