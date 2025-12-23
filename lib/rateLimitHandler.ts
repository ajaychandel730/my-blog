"use server";
import { headers } from "next/headers";
import { rateLimit } from "./rateLimit";

export default async function (): Promise<void | Error> {
  // limiting
  const headerList = await headers();

  const ip =
    headerList.get("x-forwarded-for") ??
    headerList.get("x-real-ip") ??
    "unknown";
  const isPass: boolean = await rateLimit(ip);

  if (!isPass) {
    throw new Error("Too many requests");
  }
  //
}
