"use server";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";
import { ObjectId } from "mongodb";
import blogSchema from "@/lib/zodDefinations/blogSchema";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";

type Draft = {
  title: string;
  banner: string;
  topics: string[];
  description: string;
  content?: Array<unknown>;
};

export default async function (draft: Draft) {
  try {
    // limiting
     await rateLimitHandler();
    //
    const session = await getServerSession(nextAuthOptions);

    if (!session) {
      return { status: "failed", message: "Please login your account." };
    }

    const {
      user: { id },
    } = session;

    const result = blogSchema.safeParse({ ...draft, userId: id });

    if (!result.success) {
      return { status: "failed", error: result.error.flatten().fieldErrors };
    }
    const client = await clientPromise;
    const DraftCollection = client.db("blogz").collection("drafts");

    const saveDraft = await DraftCollection.insertOne({
      ...result.data,
      userId: new ObjectId(session.user.id),
      date: new Date(),
    });

    return { status: "ok", message: "Your Draft is saved." };
  } catch (err) {
    console.log(err);
    return { status: "error", message: "Server error. Please try later." };
  }
}
