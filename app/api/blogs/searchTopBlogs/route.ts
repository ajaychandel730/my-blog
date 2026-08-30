import { NextRequest, NextResponse } from "next/server";
import { getErrorMessage } from "@/utils/errors";
import rateLimitHandler from "@/lib/rateLimitHandler";
import clientPromise from "@/lib/dbConnect";

export async function GET() {
  try {
    // limiting
    await rateLimitHandler();
    //
    const client = await clientPromise;

    const blogsColl = client.db("blogz").collection("blogs");

    const topBlogs = await blogsColl
      .aggregate([
        {
          $search: {
            index: "default",
            exists: {
              path: "topics",
            },
            returnStoredSource :true
          },
        },
        { $sort: { date: -1 } },
        { $limit: 3 },
        {
          $project: {
            _id: 1,
            title: 1,
            banner: 1,
            description: 1,
            date: 1,
          },
        },
      ])
      .toArray();

    return NextResponse.json(
      { status: "ok", result: topBlogs },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: getErrorMessage(err) },
      { status: 500 }
    );
  }
}
