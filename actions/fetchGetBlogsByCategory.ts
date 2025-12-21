import { getErrorMessage } from "@/utils/errors";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";

export default async function (pathname: string) {
  try {
    // limiting
    const headerList = await headers();
    const ip =
      headerList.get("x-forwarded-for") ??
      headerList.get("x-real-ip") ??
      "unknown";

    if (!rateLimit(ip)) {
      throw new Error("Too many requests");
    }
    //
    const res = await fetch(process.env.DOMAIN_NAME + pathname);
    const data = await res.json();

    if (data.status === "ok") {
      return data.result;
    }
    return [];
  } catch (err) {
    console.log("error:", getErrorMessage(err));
    return [];
  }
}
