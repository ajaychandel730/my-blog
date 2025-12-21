"use server";
import { ObjectId } from "mongodb";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";
import clientPromise from "@/lib/dbConnect";

export default async function (userId: string): Promise<number | undefined> {
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
    const client = await clientPromise;
    const userCollection = client.db("blogz").collection("blogs");
    const result = await userCollection.countDocuments({
      userId: new ObjectId(userId),
    });
    return result;
  } catch (err) {
    return undefined;
  }
}
