"use server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import client from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";

export default async function (blogId: string) {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session) {
      return { status: "failed", message: "Please login your account." };
    }

    const blogCollection = client.db("blogz").collection("blogs");
    const result = await blogCollection.deleteOne({
      _id: new ObjectId(blogId),
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
