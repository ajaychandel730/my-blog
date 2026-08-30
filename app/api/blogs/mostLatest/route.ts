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

    const latestBlogs = await blogsColl
      .find(
        {},
        {
          sort: { _id: -1 },
          limit : 6,
          projection: {
            _id: 1,
            banner: 1,
            title: 1,
            date: 1,
          },
        }
      )
      .toArray();

    return NextResponse.json(
      { status: "ok", count : latestBlogs.length,  result: latestBlogs },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { status: "error", message: getErrorMessage(err) },
      { status: 500 }
    );
  }
}
