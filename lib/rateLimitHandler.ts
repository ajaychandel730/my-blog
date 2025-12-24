"use server";
import { headers } from "next/headers";
import { rateLimit } from "./rateLimit";
import { NextResponse } from "next/server";

export default async function () {
  // limiting
  const headerList = await headers();

  const ip =
    headerList.get("x-forwarded-for") ??
    headerList.get("x-real-ip") ??
    "unknown";
  const isPass: boolean = await rateLimit(ip);

  if (!isPass) {
    return NextResponse.json({
      status : "error",
      message : "Too many requests."
    }, {status : 429});
  }
}
