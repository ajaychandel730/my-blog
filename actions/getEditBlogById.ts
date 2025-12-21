"use server";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";
import { Blog } from "@/lib/features/editor/editorSlice";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";
import clientPromise from "@/lib/dbConnect";

export default async function (blogId: string): Promise<Blog | null> {
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
    const collection = client.db("blogz").collection("blogs");

    const result = await collection.findOne({ _id: new ObjectId(blogId) });
    if (!result) return null;

    const blog: Blog = {
      title: result?.title ?? "",
      topics:
        "topics" in result && Array.isArray(result.topics)
          ? result?.topics
          : [],
      image: result?.banner ?? "",
      description: result?.description ?? "",
      content: result?.content ?? [],
    };

    return blog;
  } catch (err) {
    console.log(getErrorMessage(err));
    return null;
  }
}
