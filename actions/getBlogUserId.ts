"use server";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/options";

export default async function (blogId: string): Promise<string | null> {
  try {
    // limiting
      await rateLimitHandler();
    //
    const session = await getServerSession(nextAuthOptions);
    if(!session){
        return null;
    }

    const client = await clientPromise;
    const collection = client.db("blogz").collection("blogs");

    const result = await collection.findOne({ _id: new ObjectId(blogId) }, {projection : {userId : 1, _id: 0}});
    if (!result) return null;

    return String(result.userId);
  } catch (err) {
    console.log(getErrorMessage(err));
    return null;
  }
}
