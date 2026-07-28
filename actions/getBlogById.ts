"use server";
import { ObjectId } from "mongodb";
import { getErrorMessage } from "@/utils/errors";
import clientPromise from "@/lib/dbConnect";
import rateLimitHandler from "@/lib/rateLimitHandler";

export default async function (blogId: string) {
  try {
    // limiting
     await rateLimitHandler();
    //
    const client = await clientPromise;
    const collection = client.db("blogz").collection("blogs");

    const match = {
      $match: { _id: new ObjectId(blogId) },
    };

    const lookup = {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "_id",
        as: "user",
        pipeline: [
          {
            $project: {
              _id: 0,
              password: 0,
              joinDate: 0,
            },
          },
        ],
      },
    };

    const addFieldsQuery = {
      $addFields: {
        user: { $first: "$user" },
      },
    };

    

    const blog = (
      await collection.aggregate([match, lookup, addFieldsQuery]).toArray()
    )[0];

    return blog;
  } catch (err) {
    console.log(getErrorMessage(err));
    return null;
  }
}
