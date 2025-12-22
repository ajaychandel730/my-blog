"use server";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { ObjectId } from "mongodb";
import updateBlogSchema from "@/lib/zodDefinations/updateBlogSchema";
import { getErrorMessage } from "@/utils/errors";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";

export type BlogUpdatePayload = {
  title: string;
  topics: string[];
  description: string;
  banner: string;
  content: unknown[];
  _id: string;
};

export default async function (blog: BlogUpdatePayload) {
  try {
    // limiting
     await rateLimitHandler();
    //
    const session = await getServerSession(nextAuthOptions);

    if (!session) {
      return { status: "failed", message: "Please login your account." };
    }

    const { title, description, banner, topics, content, _id } = blog;
    // check schema
    const result = updateBlogSchema.safeParse({
      title,
      description,
      banner,
      topics,
      content,
    });

    if (!result.success) {
      return { status: "failed", error: result.error.flatten().fieldErrors };
    }
    //
    const client = await clientPromise;
    const blogsColl = client.db("blogz").collection("drafts");

    const updateBlog = await blogsColl.findOneAndUpdate(
      { _id: new ObjectId(_id) },
      {
        $set: { title, description, banner, topics, content },
      },
      {
        returnDocument: "after",
      }
    );

    if (!updateBlog) {
      return { status: "failed", message: "invalid request." };
    }

    return {
      status: "ok",
      message: "The draft has been successfully updated.",
    };
  } catch (err) {
    console.error(getErrorMessage(err));
    return {
      status: "error",
      message: "Something went wrong. Please try later.",
    };
  }
}
