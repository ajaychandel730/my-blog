"use server";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";
import { Blog } from "@/lib/features/editor/editorSlice";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";

export default async function (blogId: string): Promise<Blog | null> {
  try {
    // limiting
      await rateLimitHandler();
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
