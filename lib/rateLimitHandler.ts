"use server";
import { headers } from "next/headers";
import { rateLimit } from "./rateLimit";

export default async function ():Promise<void | Error> {
  // limiting
  const headerList = await headers();
  
  const ip =
    headerList.get("x-forwarded-for") ??
    headerList.get("x-real-ip") ??
    "unknown";
     const isLimitCross:boolean = await rateLimit(ip);

  if (isLimitCross) {
    throw new Error("Too many requests");
  }
  //
}
