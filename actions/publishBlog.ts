"use server";
import { Blog } from "@/types/blog";
import { getErrorMessage } from "@/utils/errors";
import client from "@/lib/dbConnect";
import blogSchema from "@/lib/zodDefinations/blogSchema";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function (blog: Blog) {
  try {
    const session = await getServerSession(nextAuthOptions);

    if (!session) {
      return { status: "failed", message: "Please login your account." };
    }

    const {
      user: { id},
    } = session;

    const blogsColl = client.db("blogz").collection("blogs");
    const result = blogSchema.safeParse({
      ...blog,
      userId: id
    });
    
    if (!result.success) {
      return { status: "failed", error: result.error.flatten().fieldErrors };
    }

    await blogsColl.insertOne({
      ...result.data,
      userId : new ObjectId(result.data.userId),
      date: new Date(),
    });
    
    return { status: "ok", message: "New blog added." };
  } catch (err: unknown) {
    const message = getErrorMessage(err);
    return { status: "error", message: "Server error. Please try later." };
  }
}
