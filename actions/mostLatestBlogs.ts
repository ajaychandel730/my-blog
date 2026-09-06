"use server";
export default async function () {
    const res = await fetch(process.env.DOMAIN_NAME + "/api/blogs/mostLatest", {
      method: "GET",
      headers: {
        "Accept": "application/json",
      },
      next: {
        revalidate: 3600,
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
      throw new Error(data?.message ||  "Somthing went wrong. Please try later.");
    }
}
