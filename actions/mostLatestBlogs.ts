"use server";
import { getErrorMessage } from "@/utils/errors";

export default async function () {
  try {
    const res = await fetch(process.env.DOMAIN_NAME + "/api/blogs/mostLatest", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      next: {
        revalidate: 43200,
        tags : ["most_latest_blogs"]
      },
    });

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
    console.log("HomelatestBlogsError:", getErrorMessage(err));
    return [];
  }
}
