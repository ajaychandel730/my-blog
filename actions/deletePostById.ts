"use server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/rateLimit";
import clientPromise from "@/lib/dbConnect";

export default async function (blogId: string) {
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
    const session = await getServerSession(nextAuthOptions);

    if (!session) {
      return { status: "failed", message: "Please login your account." };
    }
    const client = await clientPromise;
    const blogCollection = client.db("blogz").collection("blogs");

    const result = await blogCollection.deleteOne({
      _id: new ObjectId(blogId),
      userId : new ObjectId(session.user.id)
    });

    if (result.deletedCount > 0) {
      return { status: "ok", message: "Your post has been removed." };
    } else {
      return { status: "failed", message: "Post not found." };
    }
  } catch (err) {
    console.error(getErrorMessage(err));
    return {
      status: "error",
      message: "Something went wrong. Unable to delete the post.",
    };
  }
}