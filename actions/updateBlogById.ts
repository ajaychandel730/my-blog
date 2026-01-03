"use server";
import { ObjectId } from "mongodb";
import updateBlogSchema from "@/lib/zodDefinations/updateBlogSchema";
import { getErrorMessage } from "@/utils/errors";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import requireAdmin from "@/lib/auth/requireAdmin";

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
     const authdata = await requireAdmin();
     
     if(authdata.status !== "ok"){
        return authdata;
     }

     const {session} = authdata;
    
  
    const { title, description, banner, topics, content, _id } = blog;

    // check schema
    const result = updateBlogSchema.safeParse({title, description, banner, topics, content});
    if (!result.success) {
      return { status: "failed", error: result.error.flatten().fieldErrors };
    }
    //
    const client = await clientPromise;
    const blogsColl = client.db("blogz").collection("blogs");
    const userId = new ObjectId(session.user.id);

    const updateBlog = await blogsColl.findOneAndUpdate(
      { _id: new ObjectId(_id), userId },
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
      message: "The blog has been successfully updated.",
    };
  } catch (err) {
    console.error(getErrorMessage(err));
    return {
      status: "error",
      message: "Something went wrong. Please try later.",
    };
  }
}
