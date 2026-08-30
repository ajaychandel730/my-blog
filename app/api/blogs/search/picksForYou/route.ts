import { getErrorMessage } from "@/utils/errors";
import rateLimitHandler from "@/lib/rateLimitHandler";
import { NextResponse } from "next/server";
import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    // limiting
    await rateLimitHandler();
    //

    const client = await clientPromise;
    const blogsColl = client.db("blogz").collection("blogs");

    const randomBlogs = await blogsColl
      .aggregate([
        {
          $search: {
            index: "default",
            compound: {
              should: [
                {
                  text: {
                    query: "heal",
                    path: "topics",
                    fuzzy: { maxEdits: 1 },
                  },
                },
                {
                  text: {
                    query: "tech",
                    path: "topics",
                    fuzzy: { maxEdits: 1 },
                  },
                },
                {
                  text: {
                    query: "tra",
                    path: "topics",
                    fuzzy: { maxEdits: 1 },
                  },
                },
              ],
              minimumShouldMatch: 1,
            },
            returnStoredSource : true,
          },
        },
        {
          $limit: 40,
        },
        {
          $sample: { size: 6 },
        },
        {
          $project : {
            userId : 0,
            description : 0,   
          }
        }
      ])
      .toArray();

    return NextResponse.json(
      { status: "ok", result: randomBlogs },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: getErrorMessage(err) },
      { status: 500 }
    );
  }
}
