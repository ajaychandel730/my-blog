"use server";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import requireAdmin from "@/lib/auth/requireAdmin";

export default async function (blogId: string) {
  try {
    // limiting
    await rateLimitHandler();
    //
    const authData = await requireAdmin();

    if (authData.status !== "ok") {
      console.log("authError:", authData);
      return authData;
    }

    const { session } = authData;
    const client = await clientPromise;
    const blogCollection = client.db("blogz").collection("blogs");

    const result = await blogCollection.deleteOne({
      _id: new ObjectId(blogId),
      userId: new ObjectId(session.user.id),
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
