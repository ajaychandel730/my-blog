"use server";
import { Blog } from "@/types/blog";
import { getErrorMessage } from "@/utils/errors";
import blogSchema from "@/lib/zodDefinations/blogSchema";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import requireAdmin from "@/lib/auth/requireAdmin";

export default async function (blog: Blog) {
  try {
    // limiting
     await rateLimitHandler();
    //
     const authdata = await requireAdmin();
     
     if(authdata.status !== "ok"){
        return authdata;
     }

     const {session} = authdata;

    const {
      user: { id },
    } = session;
    const client = await clientPromise;
    const blogsColl = client.db("blogz").collection("blogs");
    const result = blogSchema.safeParse({
      ...blog,
      userId: id,
    });

    if (!result.success) {
      return { status: "failed", error: result.error.flatten().fieldErrors };
    }

    await blogsColl.insertOne({
      ...result.data,
      userId: new ObjectId(result.data.userId),
      date: new Date(),
    });

    return { status: "ok", message: "New blog added." };
  } catch (err: unknown) {
    const message = getErrorMessage(err);
    return { status: "error", message: "Server error. Please try later." };
  }
}
