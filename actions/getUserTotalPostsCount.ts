"use server";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";

export default async function (userId: string): Promise<number | undefined> {
  try {
    // limiting
      await rateLimitHandler();
    //
    const client = await clientPromise;
    const userCollection = client.db("blogz").collection("blogs");
    const result = await userCollection.countDocuments({
      userId: new ObjectId(userId),
    });
    return result;
  } catch (err) {
    return undefined;
  }
}
