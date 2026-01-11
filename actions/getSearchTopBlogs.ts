"use server";

export default async function () {
    const res = await fetch(
      process.env.DOMAIN_NAME + "/api/blogs/searchTopBlogs",
      {
        method: "GET",
        headers: {
          "Accept": "application/json",
        },
        next: {
          revalidate: 43200,
          tags : ["search_top_blogs"]
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
      throw Error(data?.message || "Somthing went wrong. Please try later.");
    }
}
